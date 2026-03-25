/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { 
  Search, BrainCircuit, Quote, 
  Settings, User, ChevronRight, LayoutGrid, List,
  Sparkles, GraduationCap, Trophy, Bookmark, 
  CheckCircle2, Volume2, ArrowRight, PlayCircle,
  Menu, X, Filter, SortAsc, SortDesc, Zap,
  Globe, Languages, Star, Clock, Heart,
  Settings2, HelpCircle, LogOut, Bell,
  SearchCheck, BookMarked, Brain,
  MessageSquare, Lightbulb, Target, Award,
  ChevronLeft, RefreshCw, ChevronDown,
  VolumeX, Gauge, AlertCircle, UserRound, Info, Send, Copy, ShieldCheck, ArrowLeftRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WordEntry, Level, ViewMode } from './types';
import { generateNewWord, generateSpeech, translateText, WordData, VoiceName } from './services/geminiService';
import { 
  ALL_A1_WORDS, ALL_A2_WORDS, ALL_B1_WORDS, ALL_B2_WORDS, ALL_C1_WORDS, ALL_C2_WORDS 
} from './data/words';
import { PHRASAL_VERBS } from './data/phrasalVerbs';
import { IDIOMS } from './data/idioms';
import { MOTIVATIONAL_QUOTES } from './data/motivationalQuotes';
import { WordCard } from './components/WordCard';
import { Quiz } from './components/Quiz';

const LEVELS: { id: Level; title: string }[] = [
  { id: 'A1', title: 'Starter - ١٠٠٠ پەیڤێن سەرەتایی' },
  { id: 'A2', title: 'Elementary - ٢٠٠٠ پەیڤێن ئاستێ دوو' },
  { id: 'B1', title: 'Intermediate - ٣٠٠٠ پەیڤێن ئاستێ سێ' },
  { id: 'B2', title: 'Upper Intermediate - ٤٠٠٠ پەیڤێن ئاستێ چوار' },
  { id: 'C1', title: 'Advanced Level - ٥٠٠٠ پەیڤێن ئاستێ پێنج' },
  { id: 'C2', title: 'Expert Level - ٨٠٠٠ پەیڤێن ئاستێ شەش' },
];
const VIEW_MODES: { id: ViewMode; label: string; icon: any }[] = [
  { id: 'list', label: 'Vocabulary', icon: List },
  { id: 'quiz', label: 'Practice Quiz', icon: BrainCircuit },
  { id: 'phrasal', label: 'Phrasal Verbs', icon: Zap },
  { id: 'idioms', label: 'Idioms', icon: Sparkles },
  { id: 'quotes', label: 'Motivation', icon: Quote },
  { id: 'translator', label: 'Translator', icon: Languages },
];

export default function App() {
  const [displayLimit, setDisplayLimit] = useState(100);
  const [activeLevel, setActiveLevel] = useState<Level>('A1');
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [searchTerm, setSearchTerm] = useState('');
  const [learnedWords, setLearnedWords] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('learned_words');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });
  const [bookmarkedWords, setBookmarkedWords] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('bookmarked_words');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });
  const [isSpeaking, setIsSpeaking] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  // Audio & Speech States
  const [isQuotaExceeded, setIsQuotaExceeded] = useState(false);
  const [speechSpeed, setSpeechSpeed] = useState<'normal' | 'slow'>('normal');
  const [speechVoice, setSpeechVoice] = useState<VoiceName>('Puck');
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Quiz States
  const [quizType, setQuizType] = useState<'wordToMeaning' | 'meaningToWord'>('wordToMeaning');
  const [quizQuestion, setQuizQuestion] = useState<WordEntry | null>(null);
  const [quizOptions, setQuizOptions] = useState<string[]>([]);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFeedback, setQuizFeedback] = useState<'correct' | 'wrong' | null>(null);

  // C2 View States
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const WORDS_PER_PAGE = 30;

  // Translator States
  const [translatorInput, setTranslatorInput] = useState('');
  const [translatorOutput, setTranslatorOutput] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationError, setTranslationError] = useState<string | null>(null);
  const [showSetupHelp, setShowSetupHelp] = useState(false);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeLevel, searchTerm, viewMode]);

  useEffect(() => {
    localStorage.setItem('learned_words', JSON.stringify([...learnedWords]));
  }, [learnedWords]);

  useEffect(() => {
    localStorage.setItem('bookmarked_words', JSON.stringify([...bookmarkedWords]));
  }, [bookmarkedWords]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % MOTIVATIONAL_QUOTES.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const toggleLearned = useCallback((id: string) => {
    setLearnedWords(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const toggleBookmark = useCallback((id: string) => {
    setBookmarkedWords(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const stopAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    window.speechSynthesis.cancel();
    setPlayingAudio(null);
  }, []);

  const playAudio = useCallback(async (text: string, id?: string) => {
    if (playingAudio === (id || text)) {
      stopAudio();
      return;
    }

    stopAudio();
    setPlayingAudio(id || text);

    try {
      if (!isQuotaExceeded) {
        const base64 = await generateSpeech(text, speechVoice, speechSpeed);
        const audio = new Audio(`data:audio/mpeg;base64,${base64}`);
        audioRef.current = audio;
        audio.onended = () => setPlayingAudio(null);
        await audio.play();
      } else {
        throw new Error('Quota Exceeded');
      }
    } catch (error: any) {
      console.error('Audio error:', error);
      
      // Fallback to SpeechSynthesis for any error
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = speechSpeed === 'slow' ? 0.6 : 1;
      
      // Try to find a voice that matches the gender
      const voices = window.speechSynthesis.getVoices();
      const voice = voices.find(v => {
        const name = v.name.toLowerCase();
        if (speechVoice === 'Kore' || speechVoice === 'Zephyr') {
          return name.includes('female') || name.includes('woman') || name.includes('samantha') || name.includes('victoria');
        } else {
          return name.includes('male') || name.includes('man') || name.includes('alex') || name.includes('fred');
        }
      });
      
      if (voice) {
        utterance.voice = voice;
      }
      
      utterance.onend = () => setPlayingAudio(null);
      utterance.onerror = () => setPlayingAudio(null);
      window.speechSynthesis.speak(utterance);
      
      if (error?.message?.includes('429') || error?.status === 'RESOURCE_EXHAUSTED' || error?.message === 'Quota Exceeded') {
        setIsQuotaExceeded(true);
        // Reset quota exceeded after 1 hour
        setTimeout(() => setIsQuotaExceeded(false), 3600000);
      }
    }
  }, [playingAudio, stopAudio, speechVoice, speechSpeed, isQuotaExceeded]);

  const currentLevel = useMemo(() => LEVELS.find(l => l.id === activeLevel), [activeLevel]);

  const currentLevelWords = useMemo(() => {
    switch (activeLevel) {
      case 'A1': return ALL_A1_WORDS;
      case 'A2': return ALL_A2_WORDS;
      case 'B1': return ALL_B1_WORDS;
      case 'B2': return ALL_B2_WORDS;
      case 'C1': return ALL_C1_WORDS;
      case 'C2': return ALL_C2_WORDS;
      default: return [];
    }
  }, [activeLevel]);

  const generateQuizQuestion = useCallback(() => {
    if (currentLevelWords.length < 4) return;
    
    const randomIdx = Math.floor(Math.random() * currentLevelWords.length);
    const question = currentLevelWords[randomIdx];
    
    const options = [quizType === 'wordToMeaning' ? question.meaning : question.word];
    while (options.length < 4) {
      const randIdx = Math.floor(Math.random() * currentLevelWords.length);
      const randWord = currentLevelWords[randIdx];
      const option = quizType === 'wordToMeaning' ? randWord.meaning : randWord.word;
      if (!options.includes(option)) {
        options.push(option);
      }
    }
    
    setQuizQuestion(question);
    setQuizOptions(options.sort(() => Math.random() - 0.5));
    setQuizFeedback(null);
  }, [currentLevelWords, quizType]);

  const handleQuizAnswer = (answer: string) => {
    if (!quizQuestion || quizFeedback) return;
    
    const correctAnswer = quizType === 'wordToMeaning' ? quizQuestion.meaning : quizQuestion.word;
    if (answer === correctAnswer) {
      setQuizFeedback('correct');
      setQuizScore(prev => prev + 10);
      setTimeout(() => {
        generateQuizQuestion();
      }, 1500);
    } else {
      setQuizFeedback('wrong');
      setQuizScore(prev => Math.max(0, prev - 5));
      setTimeout(() => setQuizFeedback(null), 1000);
    }
  };

  useEffect(() => {
    if (viewMode === 'quiz') {
      generateQuizQuestion();
    }
  }, [viewMode, activeLevel, quizType, generateQuizQuestion]);

  const filteredWords = useMemo(() => {
    if (!searchTerm) return currentLevelWords;
    const term = searchTerm.toLowerCase();
    return currentLevelWords.filter(w => 
      w.word.toLowerCase().includes(term) ||
      w.meaning.toLowerCase().includes(term) ||
      w.definition.toLowerCase().includes(term) ||
      (w.definitionEnglish && w.definitionEnglish.toLowerCase().includes(term))
    );
  }, [currentLevelWords, searchTerm]);

  useEffect(() => {
    setDisplayLimit(100);
  }, [activeLevel, searchTerm]);

  const displayedWords = useMemo(() => {
    return filteredWords.slice(0, displayLimit);
  }, [filteredWords, displayLimit]);

  const hasMore = filteredWords.length > displayLimit;
  const loadMore = () => setDisplayLimit(prev => prev + 100);

  const stats = useMemo(() => {
    const total = currentLevelWords.length;
    const learned = currentLevelWords.filter(w => learnedWords.has(w.id)).length;
    const bookmarked = currentLevelWords.filter(w => bookmarkedWords.has(w.id)).length;
    return { total, learned, bookmarked, progress: Math.round((learned / total) * 100) || 0 };
  }, [currentLevelWords, learnedWords, bookmarkedWords]);

  return (
    <div className="min-h-screen flex flex-col font-sans relative bg-stone-50/50">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#2c3e50]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#e67e22]/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="bg-gradient-to-br from-[#2c3e50] via-[#34495e] to-[#2c3e50] text-white py-16 px-4 text-center relative shadow-2xl overflow-hidden border-b-4 border-[#f1c40f]/30">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] rotate-12 scale-150"><GraduationCap size={200} /></div>
          <div className="absolute bottom-[-10%] right-[-5%] -rotate-12 scale-150"><Languages size={200} /></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex justify-center gap-8 mb-10">
            <motion.div
              whileHover={{ y: -5, scale: 1.05 }}
              className="relative"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_Kurdistan.svg/1200px-Flag_of_Kurdistan.svg.png" 
                alt="Kurdistan Flag" 
                className="w-24 h-14 object-cover rounded-xl shadow-2xl border-2 border-white/20"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full border-2 border-[#2c3e50]" />
            </motion.div>
            <motion.div
              whileHover={{ y: -5, scale: 1.05 }}
              className="relative"
            >
              <img 
                src="https://static.vecteezy.com/system/resources/thumbnails/020/153/877/original/united-kingdom-flag-waving-in-wind-of-great-britain-and-northern-ireland-realistic-union-jack-flag-background-british-uk-flag-looping-closeup-1080p-full-hd-1920x1080-footage-united-kingdom-free-video.jpg" 
                alt="UK Flag" 
                className="w-24 h-14 object-cover rounded-xl shadow-2xl border-2 border-white/20"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-sky-500 rounded-full border-2 border-[#2c3e50]" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-black kurdish-text mb-6 tracking-tight leading-tight">
              دەرگەهــەك ژ بوو <span className="text-[#f1c40f]">فێربوونا</span> زمانێ ئنگلیزی
            </h1>
            <div className="inline-flex items-center gap-4 px-8 py-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
              <span className="text-[#f1c40f] text-2xl font-bold kurdish-text">اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ</span>
            </div>
          </motion.div>
        </div>
      </header>
      
      <nav className="main-menu">
        <div className="menu-container">
          <ul className="nav-links">
            <li className="dropdown">
              <button className="dropbtn">
                <i className="fas fa-layer-group"></i> ئاستێن ئنگلیزی <i className="fas fa-chevron-down" style={{ fontSize: '12px' }}></i>
              </button>
              <div className="dropdown-content">
                {LEVELS.map((level) => (
                  <button 
                    key={level.id}
                    onClick={() => {
                      setActiveLevel(level.id);
                      setViewMode('list');
                    }}
                  >
                    ئاستێ {level.id}
                  </button>
                ))}
              </div>
            </li>
            <li>
              <button 
                onClick={() => setViewMode('idioms')}
                className={viewMode === 'idioms' ? 'active' : ''}
              >
                <i className="fas fa-comments"></i> بەشێ Idioms
              </button>
            </li>
            <li>
              <button 
                onClick={() => setViewMode('phrasal')}
                className={viewMode === 'phrasal' ? 'active' : ''}
              >
                <i className="fas fa-book-reader"></i> Phrasal Verbs
              </button>
            </li>
            <li>
              <button 
                onClick={() => setViewMode('quiz')}
                className={viewMode === 'quiz' ? 'active' : ''}
              >
                <i className="fas fa-vial"></i> بەشێ کویز
              </button>
            </li>
            <li>
              <button 
                onClick={() => setViewMode('translator')}
                className={viewMode === 'translator' ? 'active' : ''}
              >
                <i className="fas fa-language"></i> بەشێ وەرگێڕانێ
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
        {isQuotaExceeded && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-center gap-3 text-amber-800 shadow-sm"
          >
            <div className="p-2 bg-amber-100 rounded-xl">
              <AlertCircle size={20} />
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm kurdish-text">ئەنجامێن زێدە (Quota Exceeded)</p>
              <p className="text-xs kurdish-text opacity-90">تە گەهشتە سنورێ خۆ یێ فێربوونا بێبەرامبەر بۆ ئەڤرۆ. هیڤی دکەین پاشتر یان سوبەهی تاقی بکەڤە. نوکە دێ دەنگێ ئامێرێ تە هێتە بکارئینان.</p>
            </div>
            <button onClick={() => setIsQuotaExceeded(false)} className="p-2 hover:bg-amber-100 rounded-lg transition-colors">
              <X size={16} />
            </button>
          </motion.div>
        )}
        {/* Motivational Quotes Section */}
        <div className="mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={quoteIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-stone-50 border-l-4 border-[#2980b9] p-6 rounded-r-2xl shadow-sm relative"
            >
              <Quote className="absolute -top-3 -left-3 text-[#2980b9]/20" size={40} />
              <p className="text-xl font-medium text-stone-800 english-text mb-2 italic">
                "{MOTIVATIONAL_QUOTES[quoteIndex].english}"
              </p>
              <p className="text-lg text-stone-600 kurdish-text">
                {MOTIVATIONAL_QUOTES[quoteIndex].kurdish}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* View Mode Toggle & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#2c3e50] rounded-2xl text-white shadow-lg">
              {viewMode === 'list' ? <List size={24} /> : 
               viewMode === 'quiz' ? <HelpCircle size={24} /> : 
               viewMode === 'phrasal' ? <Zap size={24} /> :
               viewMode === 'idioms' ? <Sparkles size={24} /> :
               <Languages size={24} />}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-stone-800 kurdish-text">
                {viewMode === 'list' ? `ئـاسـتـێ ${activeLevel}` : 
                 viewMode === 'quiz' ? 'تـاقـیـکـردنـەوە' : 
                 viewMode === 'phrasal' ? 'Phrasal Verbs' : 
                 viewMode === 'idioms' ? 'Idioms (ئیدیۆم)' : 
                 'بەشێ وەرگێڕانێ'}
              </h2>
              <p className="text-stone-500 text-sm kurdish-text">
                {viewMode === 'list' ? 'لیستا هەمی پەیڤان' : 
                 viewMode === 'quiz' ? 'خۆ تاقی بکە' : 
                 viewMode === 'phrasal' ? 'پەیڤێن لێکدای یێن گرنگ' : 
                 viewMode === 'idioms' ? 'ئیدیۆمێن زمانێ ئنگلیزی' : 
                 'وەرگێڕانا دەقێن ئنگلیزی بۆ بادینی'}
              </p>
            </div>
          </div>

          {(viewMode === 'list' || viewMode === 'phrasal' || viewMode === 'idioms') && (
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <div className="bg-white border-2 border-stone-100 rounded-2xl p-2 shadow-sm flex flex-col sm:flex-row items-center gap-4">
                {/* Speed Selection */}
                <div className="flex items-center gap-2">
                  <Gauge size={18} className="text-stone-400" />
                  <div className="flex bg-stone-50 p-1 rounded-xl gap-1">
                    <button 
                      onClick={() => setSpeechSpeed('normal')}
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${speechSpeed === 'normal' ? 'bg-emerald-500 text-white shadow-sm' : 'text-stone-400 hover:text-stone-600'}`}
                    >
                      Normal (بلەز)
                    </button>
                    <button 
                      onClick={() => setSpeechSpeed('slow')}
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${speechSpeed === 'slow' ? 'bg-amber-500 text-white shadow-sm' : 'text-stone-400 hover:text-stone-600'}`}
                    >
                      Slow (هێدی)
                    </button>
                  </div>
                </div>

                {/* Voice Selection */}
                <div className="flex items-center gap-2 border-l border-stone-100 pl-4">
                  <User size={18} className="text-stone-400" />
                  <div className="flex bg-stone-50 p-1 rounded-xl gap-1">
                    <button 
                      onClick={() => setSpeechVoice('Puck')}
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${speechVoice === 'Puck' ? 'bg-blue-500 text-white shadow-sm' : 'text-stone-400 hover:text-stone-600'}`}
                    >
                      Male (نێر)
                    </button>
                    <button 
                      onClick={() => setSpeechVoice('Kore')}
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${speechVoice === 'Kore' ? 'bg-pink-500 text-white shadow-sm' : 'text-stone-400 hover:text-stone-600'}`}
                    >
                      Female (مێ)
                    </button>
                  </div>
                </div>

                {/* Global Stop Button */}
                {playingAudio && (
                  <button 
                    onClick={stopAudio}
                    className="bg-red-50 text-red-500 p-2 rounded-xl hover:bg-red-100 transition-colors"
                    title="Stop Audio"
                  >
                    <VolumeX size={18} />
                  </button>
                )}
              </div>

              <div className="relative w-full md:w-96">
                <input 
                  type="text" 
                  placeholder="لێگەریانا پەیڤا" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white border-2 border-stone-100 rounded-2xl py-4 px-12 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#2c3e50] focus:ring-4 focus:ring-[#2c3e50]/5 transition-all kurdish-text shadow-sm"
                />
                <Search className="absolute left-4 top-4.5 text-stone-300" size={20} />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 top-4.5 text-stone-300 hover:text-stone-500"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {viewMode === 'translator' ? (
              <motion.div
                key="translator-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-5xl mx-auto space-y-8"
              >
                <div className="bg-white rounded-[2.5rem] shadow-2xl border border-stone-100 overflow-hidden">
                  {/* Header */}
                  <div className="bg-stone-50 px-8 py-4 border-b border-stone-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-500 rounded-full text-white">
                        <Languages size={20} />
                      </div>
                      <h2 className="font-bold text-stone-800 tracking-tight">وەرگێڕێ زیرەک (Smart Translator)</h2>
                    </div>
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => setShowSetupHelp(!showSetupHelp)}
                        className={`p-2 transition-colors ${showSetupHelp ? 'text-blue-500' : 'text-stone-400 hover:text-blue-500'}`}
                        title="Setup Help"
                      >
                        <HelpCircle size={18} />
                      </button>
                      <div className="flex items-center gap-2 text-xs font-medium text-stone-400">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span>Powered by Gemini AI</span>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {showSetupHelp && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-blue-50 border-b border-blue-100 overflow-hidden"
                      >
                        <div className="p-6 space-y-4">
                          <div className="flex items-center gap-2 text-blue-700 font-bold">
                            <Settings size={18} />
                            <span className="kurdish-text">چەوانیا کارپێکرنا وەرگێڕانێ ل نێت لیفای (Netlify)</span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                            <div className="space-y-2">
                              <p className="text-blue-800 font-medium kurdish-text">١. کلیلێ API وەرگرە:</p>
                              <p className="text-blue-600 kurdish-text">سەرەدانا ai.google.dev بکە و کلیلەکێ (API Key) پەیدا بکە.</p>
                            </div>
                            <div className="space-y-2">
                              <p className="text-blue-800 font-medium kurdish-text">٢. ل نێت لیفای زێدە بکە:</p>
                              <p className="text-blue-600 kurdish-text">د بەشێ Site configuration &gt; Environment variables دا پەیڤا GEMINI_API_KEY زێدە بکە و کلیلێ خۆ ل وێرێ دابنە.</p>
                            </div>
                          </div>
                          <div className="bg-white/50 p-3 rounded-xl border border-blue-100 text-xs text-blue-500 font-mono">
                            Key: GEMINI_API_KEY | Value: (Your API Key)
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-100">
                    {/* Input Section (English) */}
                    <div className="p-8 space-y-4 flex flex-col">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full overflow-hidden shadow-sm border border-stone-200">
                            <img 
                              src="https://flagcdn.com/w80/gb.png" 
                              alt="UK Flag" 
                              className="w-full h-full object-cover" 
                            />
                          </div>
                          <span className="font-bold text-stone-600 uppercase tracking-widest text-xs">
                            English
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`text-[10px] font-mono font-medium px-2 py-1 rounded-full ${translatorInput.length > 4500 ? 'bg-rose-50 text-rose-500' : 'bg-stone-100 text-stone-400'}`}>
                            {translatorInput.length} / 5000
                          </span>
                          {translatorInput && (
                            <button 
                              onClick={() => setTranslatorInput('')}
                              className="p-1.5 text-stone-400 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-colors"
                              title="Clear Text"
                            >
                              <X size={14} />
                            </button>
                          )}
                        </div>
                      </div>
                      
                      <div className="relative flex-grow">
                        <textarea
                          value={translatorInput}
                          onChange={(e) => setTranslatorInput(e.target.value.slice(0, 5000))}
                          placeholder="Type or paste English text here..."
                          className="w-full h-80 p-0 bg-transparent border-none focus:ring-0 text-xl text-stone-800 placeholder-stone-300 resize-none leading-relaxed"
                        />
                        {translatorInput && (
                          <div className="absolute bottom-0 right-0 flex gap-2">
                            <button
                              onClick={() => playAudio(translatorInput, 'translator-input')}
                              className={`p-3 rounded-full transition-all ${playingAudio === 'translator-input' ? 'bg-blue-500 text-white shadow-lg shadow-blue-200' : 'bg-stone-50 text-stone-400 hover:bg-stone-100 hover:text-stone-600'}`}
                              title="Listen to Input"
                            >
                              <Volume2 size={18} />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Output Section (Kurdish) */}
                    <div className="p-8 space-y-4 bg-stone-50/30 flex flex-col">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full overflow-hidden shadow-sm border border-stone-200">
                            <img 
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_Kurdistan.svg/1200px-Flag_of_Kurdistan.svg.png" 
                              alt="Kurdistan Flag" 
                              className="w-full h-full object-cover" 
                            />
                          </div>
                          <span className="font-bold text-stone-600 uppercase tracking-widest text-xs kurdish-text">
                            کوردی (بادینی)
                          </span>
                        </div>
                        <div className="flex gap-2">
                          {translatorOutput && (
                            <>
                              <button
                                onClick={() => {
                                  navigator.clipboard.writeText(translatorOutput);
                                }}
                                className="p-3 bg-white text-stone-400 rounded-full shadow-sm border border-stone-100 hover:text-blue-500 hover:border-blue-100 transition-all"
                                title="Copy Translation"
                              >
                                <Copy size={18} />
                              </button>
                              <button
                                onClick={() => playAudio(translatorOutput, 'translator-output')}
                                className={`p-3 rounded-full transition-all shadow-sm border ${playingAudio === 'translator-output' ? 'bg-[#e67e22] text-white border-[#e67e22] shadow-lg shadow-orange-200' : 'bg-white text-stone-400 border-stone-100 hover:text-[#e67e22] hover:border-orange-100'}`}
                                title="Listen to Translation"
                              >
                                <Volume2 size={18} />
                              </button>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="flex-grow min-h-[20rem]">
                        {isTranslating ? (
                          <div className="flex flex-col items-center justify-center h-full gap-4">
                            <div className="relative">
                              <div className="w-12 h-12 border-4 border-blue-100 rounded-full" />
                              <div className="absolute top-0 left-0 w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                            </div>
                            <span className="font-bold text-blue-500 kurdish-text animate-pulse">لێگەریان دکەت...</span>
                          </div>
                        ) : translationError ? (
                          <div className="bg-rose-50 p-4 rounded-2xl border border-rose-100 text-rose-500 font-medium text-center kurdish-text">
                            {translationError}
                          </div>
                        ) : translatorOutput ? (
                          <div className="text-xl text-stone-800 leading-loose whitespace-pre-wrap kurdish-text">
                            {translatorOutput}
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center h-full text-stone-300 space-y-2">
                            <Languages size={48} strokeWidth={1} className="opacity-20" />
                            <span className="italic kurdish-text">وەرگێڕان لێرە دێ دیار بیت...</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="p-6 bg-white border-t border-stone-50 flex justify-center">
                    <button
                      onClick={async () => {
                        if (!translatorInput.trim() || isTranslating) return;
                        setIsTranslating(true);
                        setTranslationError(null);
                        try {
                          const result = await translateText(translatorInput, 'en', 'ku');
                          setTranslatorOutput(result);
                        } catch (err: any) {
                          if (err.message === "MISSING_API_KEY") {
                            setTranslationError('ئاریشە: کلیلێ API یێ Gemini نەهاتیە دیتن. هیڤیە ل نێت لیفای (Netlify) د بەشێ Environment Variables دا پەیڤا GEMINI_API_KEY زێدە بکە.');
                          } else {
                            setTranslationError('ببورە، ئاریشەیەک هەبوو د وەرگێڕانێ دا. هیڤیە جارەکا دی هەول بدە.');
                          }
                        } finally {
                          setIsTranslating(false);
                        }
                      }}
                      disabled={!translatorInput.trim() || isTranslating}
                      className={`
                        px-16 py-4 rounded-full font-bold text-xl shadow-xl transition-all flex items-center gap-3
                        ${!translatorInput.trim() || isTranslating 
                          ? 'bg-stone-200 text-stone-400 cursor-not-allowed' 
                          : 'bg-[#2c3e50] text-white hover:bg-[#34495e] hover:scale-105 active:scale-95'}
                      `}
                    >
                      <Languages size={24} />
                      <span className="kurdish-text">وەرگێڕان (Translate)</span>
                    </button>
                  </div>
                </div>

                <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 flex items-start gap-4">
                  <Info className="text-amber-500 shrink-0 mt-1" size={20} />
                  <p className="text-amber-800 text-sm kurdish-text leading-relaxed">
                    ژ بوو وەرگێڕانا هەر پەیڤەکێ توو دشێی وەرگێڕانێ بکەی ل ڤێرێ❗
                  </p>
                </div>
              </motion.div>
            ) : viewMode === 'phrasal' ? (
              <motion.div
                key="phrasal-view"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {PHRASAL_VERBS.filter(pv => 
                    pv.verb.toLowerCase().includes(searchTerm.toLowerCase()) || 
                    pv.meaningKurdish.includes(searchTerm)
                  ).map((pv) => (
                    <motion.div
                      key={pv.id}
                      whileHover={{ y: -5, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                      className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-stone-100 relative overflow-hidden group transition-all"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#f1c40f]/10 to-transparent rounded-bl-full -mr-10 -mt-10 transition-all group-hover:scale-110" />
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <span className="inline-block px-3 py-1 bg-[#f1c40f]/10 text-[#d4ac0d] text-[10px] font-black uppercase tracking-widest rounded-full mb-2">Phrasal Verb</span>
                          <div className="flex items-center gap-2">
                            <h3 className="text-2xl font-black text-[#2c3e50]">{pv.verb}</h3>
                          </div>
                        </div>
                        <button 
                          onClick={() => playAudio(`${pv.verb}. ${pv.example}`, pv.id)}
                          className={`p-4 rounded-2xl transition-all ${playingAudio === pv.id ? 'bg-[#e67e22] text-white shadow-lg scale-110' : 'bg-stone-50 text-stone-400 hover:bg-stone-100 hover:text-[#2c3e50]'}`}
                        >
                          <Volume2 size={24} />
                        </button>
                      </div>
                      <p className="text-stone-500 mb-4 italic">"{pv.meaning}"</p>
                      <div className="bg-stone-50 p-4 rounded-2xl mb-4 border-r-4 border-[#f1c40f]">
                        <p className="text-[#2c3e50] font-bold kurdish-text">{pv.meaningKurdish}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-stone-400 font-bold uppercase tracking-wider">Example:</p>
                        <p className="text-stone-700 font-medium">{pv.example}</p>
                        <p className="text-stone-500 kurdish-text text-sm">{pv.exampleKurdish}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : viewMode === 'idioms' ? (
              <motion.div
                key="idioms-view"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {IDIOMS.filter(idiom => 
                    idiom.phrase.toLowerCase().includes(searchTerm.toLowerCase()) || 
                    idiom.meaningKurdish.includes(searchTerm)
                  ).map((idiom) => (
                    <motion.div
                      key={idiom.id}
                      whileHover={{ y: -5, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                      className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-stone-100 relative overflow-hidden group transition-all"
                    >
                      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#8e44ad] to-[#9b59b6] opacity-20" />
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <span className="inline-block px-3 py-1 bg-[#8e44ad]/10 text-[#8e44ad] text-[10px] font-black uppercase tracking-widest rounded-full mb-2">Idiom (ئیدیۆم)</span>
                          <div className="flex items-center gap-2">
                            <h3 className="text-2xl font-black text-[#8e44ad]">{idiom.phrase}</h3>
                          </div>
                        </div>
                        <button 
                          onClick={() => playAudio(`${idiom.phrase}. ${idiom.example}`, idiom.id)}
                          className={`p-4 rounded-2xl transition-all ${playingAudio === idiom.id ? 'bg-[#8e44ad] text-white shadow-lg scale-110' : 'bg-stone-50 text-stone-400 hover:bg-stone-100 hover:text-[#8e44ad]'}`}
                        >
                          <Volume2 size={24} />
                        </button>
                      </div>
                      <p className="text-stone-500 mb-4 italic">"{idiom.meaning}"</p>
                      <div className="bg-purple-50 p-4 rounded-2xl mb-4 border-l-4 border-[#8e44ad]">
                        <p className="text-[#2c3e50] font-bold kurdish-text">{idiom.meaningKurdish}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-stone-400 font-bold uppercase tracking-wider">How to use:</p>
                        <p className="text-stone-700 font-medium">{idiom.example}</p>
                        <p className="text-stone-500 kurdish-text text-sm">{idiom.exampleKurdish}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : viewMode === 'quiz' ? (
              <motion.div
                key="quiz-view"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-stone-100 text-center"
              >
                <div className="flex flex-col items-center gap-8 mb-10">
                  <h3 className="text-2xl font-bold text-[#2c3e50] kurdish-text">
                    تاقیکردنەوەیا ئاستێ {activeLevel}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {LEVELS.map((level) => (
                      <button
                        key={level.id}
                        onClick={() => setActiveLevel(level.id)}
                        className={`px-6 py-2 rounded-xl font-bold transition-all border-2 ${activeLevel === level.id ? 'bg-[#2980b9] border-[#2980b9] text-white shadow-lg scale-105' : 'bg-white border-stone-100 text-stone-400 hover:border-stone-200'}`}
                      >
                        ئاستێ {level.id}
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
                    <motion.div 
                      key={quizScore}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      className="flex items-center gap-3 bg-[#f1c40f]/10 px-6 py-2 rounded-full border border-[#f1c40f]/20 text-[#2c3e50] font-bold"
                    >
                      <Trophy className="text-[#f1c40f]" size={24} />
                      <span className="kurdish-text text-lg">نمرە: {quizScore}</span>
                    </motion.div>
                    
                    <div className="flex bg-stone-100 p-1.5 rounded-2xl shadow-inner">
                      <button 
                        onClick={() => setQuizType('wordToMeaning')}
                        className={`px-4 py-1 rounded-md text-sm kurdish-text transition-all ${quizType === 'wordToMeaning' ? 'bg-white shadow-sm font-bold text-[#2980b9]' : 'text-stone-500'}`}
                      >
                        ئینگلیزی بۆ کوردی
                      </button>
                      <button 
                        onClick={() => setQuizType('meaningToWord')}
                        className={`px-4 py-1 rounded-md text-sm kurdish-text transition-all ${quizType === 'meaningToWord' ? 'bg-white shadow-sm font-bold text-[#2980b9]' : 'text-stone-500'}`}
                      >
                        کوردی بۆ ئینگلیزی
                      </button>
                    </div>
                  </div>
                </div>

                {quizQuestion && (
                  <div className="max-w-2xl mx-auto">
                    <div className="mb-12">
                      <h2 className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-6 kurdish-text">پرسیار</h2>
                      <motion.div 
                        key={quizQuestion.id + quizType}
                        initial={{ y: 20, opacity: 0, scale: 0.9 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        className="text-4xl md:text-6xl font-bold text-[#2c3e50] bg-gradient-to-br from-stone-50 to-white py-16 px-6 rounded-[2rem] border border-stone-100 shadow-xl relative overflow-hidden"
                      >
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#2980b9]/20"></div>
                        {quizType === 'wordToMeaning' ? (
                          <div className="flex flex-col items-center gap-4">
                            <span className="english-text">{quizQuestion.word}</span>
                            <button 
                              onClick={() => playAudio(quizQuestion.word)}
                              className={`p-4 rounded-2xl transition-all ${playingAudio === quizQuestion.word ? 'bg-[#e67e22] text-white animate-pulse' : 'bg-white/10 text-[#2c3e50] hover:bg-white/20 border border-stone-200'}`}
                            >
                              <Volume2 size={32} />
                            </button>
                          </div>
                        ) : (
                          <span className="kurdish-text">{quizQuestion.meaning}</span>
                        )}
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {quizOptions.map((option, idx) => (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleQuizAnswer(option)}
                          className={`
                            p-6 rounded-2xl border-2 transition-all text-xl font-bold shadow-sm ${quizType === 'wordToMeaning' ? 'kurdish-text' : 'english-text'}
                            ${quizFeedback === 'correct' && option === (quizType === 'wordToMeaning' ? quizQuestion.meaning : quizQuestion.word)
                              ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                              : quizFeedback === 'wrong' && option !== (quizType === 'wordToMeaning' ? quizQuestion.meaning : quizQuestion.word)
                                ? 'bg-stone-50 border-stone-200 text-stone-400'
                                : 'bg-white border-stone-100 hover:border-[#2980b9] hover:bg-stone-50 text-stone-700'}
                          `}
                        >
                          {option}
                        </motion.button>
                      ))}
                    </div>

                    {quizFeedback === 'correct' && (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 text-emerald-600 font-bold kurdish-text text-xl">
                        دەستخۆش! بەرسڤا تە درستە.
                      </motion.p>
                    )}
                    {quizFeedback === 'wrong' && (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 text-rose-600 font-bold kurdish-text text-xl">
                        بەرسڤا تە خەلەتە، دیسا هەوڵ بدە.
                      </motion.p>
                    )}
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="list-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                {!searchTerm && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-stone-100 text-center mb-12 relative overflow-hidden group"
                  >
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#e67e22]" />
                    <div className="absolute top-6 right-6 text-stone-50 group-hover:text-stone-100 transition-colors"><Info size={120} /></div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                      <h3 className="text-[#e67e22] font-bold text-sm uppercase tracking-[0.2em] mb-6 kurdish-text">بـخـێـرهـاتـن</h3>
                      <p className="text-3xl text-stone-800 kurdish-text leading-tight font-bold mb-6">
                        السلام علیکم ورحمة الله وبرکاتە ، هین ب خێر بێن بوو مالپەرێ مەیێ فێربوونا زمانێ ئنگلیزی ژ ئاستێ سەرەتایی هەتا ئاستێ پروفیشنال.
                      </p>
                      <div className="w-20 h-1 bg-stone-100 mx-auto mb-6" />
                      <p className="text-xl text-stone-500 kurdish-text leading-relaxed">
                        مالپەرێ مە ل دەف خو بەلاڤ بکەن ژ بوو گەهاندنا مافی بوو گشت کەساسنێن حەزا فێربوونا زمانێ ئنگلیزی هەی.
                      </p>
                    </div>
                  </motion.div>
                )}

                <div className="bg-[#2c3e50] text-white p-6 rounded-2xl mb-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <GraduationCap size={32} className="text-[#f1c40f]" />
                    <span className="text-xl font-bold kurdish-text">
                      {searchTerm 
                        ? `ئەنجامێن لێگەریانێ: ${filteredWords.length} پەیڤ هاتنە دیتن`
                        : `ئاستێ ${activeLevel} - ${
                            activeLevel === 'A1' ? `Starter - ${currentLevelWords.length} پەیڤێن سەرەتایی` : 
                            activeLevel === 'A2' ? `Elementary - ${currentLevelWords.length} پەیڤێن ئاستێ دوو` :
                            activeLevel === 'B1' ? `Intermediate - ${currentLevelWords.length} پەیڤێن ئاستێ سێ` :
                            activeLevel === 'B2' ? `Upper Intermediate - ${currentLevelWords.length} پەیڤێن ئاستێ چوار` :
                            activeLevel === 'C1' ? `Advanced Level - ${currentLevelWords.length} پەیڤێن ئاستێ پێنج` :
                            `Expert Level - ${currentLevelWords.length} پەیڤێن ئاستێ شەش`
                          }`
                      }
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displayedWords.map((word, index) => {
                    const isKurdish = (text: string) => /[\u0600-\u06FF]/.test(text);

                    return (
                      <motion.div 
                        key={`${word.id}-${index}`}
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100 border-r-8 border-r-[#e67e22] hover:shadow-xl transition-all"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex flex-col gap-1">
                            <span className="text-[#2c3e50] font-bold text-2xl english-text">{index + 1}. {word.word}</span>
                            <span className="text-stone-400 text-sm font-medium kurdish-text">{word.pronunciation}</span>
                          </div>
                          <button 
                            onClick={() => playAudio(`${word.word}. ${word.exampleEnglish}`, `full-${index}`)}
                            title="Play Word & Example"
                            className={`p-3 rounded-xl transition-all ${playingAudio === `full-${index}` ? 'bg-[#e67e22] text-white animate-pulse' : 'bg-stone-100 text-[#e67e22] hover:bg-stone-200'}`}
                          >
                            <Volume2 size={20} />
                          </button>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="bg-stone-50 p-3 rounded-xl border-l-4 border-l-[#2980b9]">
                            <span className="font-bold kurdish-text text-stone-400 text-[10px] block mb-1 uppercase tracking-wider">ڕامان (Badini)</span>
                            <span className="kurdish-text text-xl font-bold text-[#2980b9]">{word.meaning}</span>
                          </div>
                          
                          {word.definitionEnglish && (
                            <div className="text-xs text-stone-500 english-text italic border-t border-stone-50 pt-3">
                              <span className="font-bold not-italic text-stone-400 text-[10px] block mb-1 uppercase tracking-widest">Definition (English)</span>
                              {word.definitionEnglish}
                            </div>
                          )}

                          {word.definition && isKurdish(word.definition) && (
                            <div className="text-sm text-stone-600 kurdish-text">
                              <span className="font-bold text-stone-400 text-[10px] block mb-1 uppercase tracking-widest">پێناسی (Badini)</span>
                              {word.definition}
                            </div>
                          )}
                          
                          <div className="bg-stone-50/50 p-4 rounded-xl border border-dashed border-stone-200 space-y-3">
                            <div>
                              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-widest block mb-1">Example (English)</span>
                              <div className="text-sm text-stone-700 italic english-text leading-relaxed">
                                "{word.exampleEnglish}"
                              </div>
                            </div>
                            {word.exampleKurdish && (
                              <div>
                                <span className="text-[10px] text-stone-400 font-bold uppercase tracking-widest block mb-1">وەرگێڕان (Badini)</span>
                                <div className="text-sm text-stone-600 kurdish-text leading-relaxed">
                                  {word.exampleKurdish}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Load More Button */}
                {hasMore && (
                  <div className="flex justify-center mt-12 py-8">
                    <button
                      onClick={loadMore}
                      className="px-8 py-4 bg-[#2c3e50] text-white rounded-2xl font-bold shadow-lg hover:bg-[#34495e] transition-all flex items-center gap-2 group"
                    >
                      <span>پتر ببینە (Load More)</span>
                      <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Back to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-[#2c3e50] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-50"
      >
        <ChevronRight className="-rotate-90" />
      </button>

      {/* Footer */}
      <footer className="bg-[#2c3e50] text-white py-12 mt-12 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-stone-300 text-sm mb-6 font-mono">2026 @ دیـــنـــدار الـــــکـــــردی</p>
          
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 mb-8">
            <p className="kurdish-text text-xl mb-6 text-[#f1c40f] font-bold">
              ئەگەر هەر پرسیارەک یان ئاریشەیەک هەبوو
            </p>
            <div className="flex justify-center">
              <a 
                href="https://t.me/dindarkrd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#0088cc] hover:bg-[#0077b5] text-white px-8 py-4 rounded-2xl transition-all shadow-xl hover:scale-105 active:scale-95"
              >
                <Send size={24} />
                <span className="kurdish-text text-xl font-bold">پەیوەندی ب من بکە ل تیلیگرامی</span>
              </a>
            </div>
          </div>

          <p className="text-[#bdc3c7] kurdish-text text-lg">
            هیڤی دکەین ئەڤی مالپەری بەلاڤ بکەن دا هەمی مفای ژێ وەربگرن.
          </p>
        </div>
      </footer>
    </div>
  );
}
