/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { 
  Search, Book, BrainCircuit, Quote, BookOpen, 
  List, Sparkles, GraduationCap, Trophy, Bookmark, 
  Volume2, VolumeX, ArrowRight, PlayCircle, Video,
  Menu, X, Filter, SortAsc, SortDesc, Zap,
  Globe, Languages, Star, Clock, Heart,
  HelpCircle, BookmarkCheck, CheckCircle2,
  ChevronLeft, Trash2, ChevronDown,
  Gauge, AlertCircle, UserRound, Info, Send, Camera, Save,
  ChevronRight, Bot, MessageSquare, MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WordEntry, Level, ViewMode, UserProfile, Story, StoryQuestion } from './types';
import { 
  ALL_A1_WORDS, ALL_A2_WORDS, ALL_B1_WORDS, ALL_B2_WORDS, ALL_C1_WORDS, ALL_C2_WORDS 
} from './data/words';
import { PHRASAL_VERBS } from './data/phrasalVerbs';
import { IDIOMS } from './data/idioms';
import { MOTIVATIONAL_QUOTES } from './data/motivationalQuotes';
import { STORIES } from './data/stories';
import { GRAMMAR_TOPICS, GrammarTopic } from './data/grammar';
import Translator from './components/Translator';
import Chatbot from './components/Chatbot';
import SocialLinks from './components/SocialLinks';
import VideoTranslator from './components/VideoTranslator';
import ConversationView from './components/ConversationView';
import { SpeedInsights } from '@vercel/speed-insights/react';

const LEVELS: { id: Level; title: string; count: number }[] = [
  { id: 'A1', title: 'ئاستێ ئێکێ - ١٠٠٠ پەیڤ', count: 1000 },
  { id: 'A2', title: 'ئاستێ دوو - ٢٠٠٠ پەیڤ', count: 2000 },
  { id: 'B1', title: 'ئاستێ سێ - ٣٠٠٠ پەیڤ', count: 3000 },
  { id: 'B2', title: 'ئاستێ چوار - ٤٠٠٠ پەیڤ', count: 4000 },
  { id: 'C1', title: 'ئاستێ پێنج - ٧٠٠٠ پەیڤ', count: 7000 },
  { id: 'C2', title: 'ئاستێ شەش - ٨٠٠٠ پەیڤ', count: 8000 },
];
const VIEW_MODES: { id: ViewMode; label: string; icon: any }[] = [
  { id: 'list', label: 'پەیڤێن ئاستی', icon: List },
  { id: 'quiz', label: 'تاقیکردنەوە', icon: BrainCircuit },
  { id: 'phrasal', label: 'کردارێن لێکدای', icon: Zap },
  { id: 'idioms', label: 'ئیدیۆمێن ئنگلیزی', icon: Sparkles },
  { id: 'stories', label: 'چیرۆکێن ئنگلیزی', icon: BookOpen },
  { id: 'grammar', label: 'ڕێزمان (Grammar)', icon: GraduationCap },
  { id: 'translator', label: 'وەرگێڕێ زیرەک', icon: Languages },
  { id: 'chat', label: 'ڕۆبۆتێ زیرەک', icon: MessageSquare },
  { id: 'video-translator', label: 'وەرگێڕێ ڤیدیۆیان', icon: Video },
  { id: 'conversations', label: 'بەشێ گفتوگۆیان', icon: MessageCircle },
  { id: 'saved', label: 'پەیڤێن خەزنکری', icon: BookmarkCheck },
];

export default function App() {
  const [displayLimit, setDisplayLimit] = useState(100);
  const [activeLevel, setActiveLevel] = useState<Level>('A1');
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  
  useEffect(() => {
    console.log('Current ViewMode:', viewMode);
  }, [viewMode]);

  const [globalSearchTerm, setGlobalSearchTerm] = useState('');
  
  const [profile, setProfile] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('user_profile');
    return saved ? JSON.parse(saved) : null;
  });
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [tempProfile, setTempProfile] = useState<UserProfile>({ name: '', imageUrl: '' });
  
  const [learnedWords, setLearnedWords] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('learned_words');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });
  const [bookmarkedWords, setBookmarkedWords] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('bookmarked_words');
    if (!saved) return new Set();
    try {
      const parsed = JSON.parse(saved);
      // Normalize to lowercase to prevent duplicates
      return new Set(Array.isArray(parsed) ? parsed.map((w: string) => w.toLowerCase()) : []);
    } catch (e) {
      return new Set();
    }
  });
  const [quoteIndex, setQuoteIndex] = useState(0);

  // Audio & Speech States
  const [speechSpeed, setSpeechSpeed] = useState<'normal' | 'slow'>('normal');
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Quiz States
  const [quizType, setQuizType] = useState<'wordToMeaning' | 'meaningToWord'>('wordToMeaning');
  const [quizQuestion, setQuizQuestion] = useState<WordEntry | null>(null);
  const [quizOptions, setQuizOptions] = useState<string[]>([]);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFeedback, setQuizFeedback] = useState<'correct' | 'wrong' | null>(null);

  // C2 View States
  const [currentPage, setCurrentPage] = useState(1);
  const WORDS_PER_PAGE = 30;

  // Stories States
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);
  const [storyQuizAnswers, setStoryQuizAnswers] = useState<Record<string, number>>({});
  const [showStoryResults, setShowStoryResults] = useState(false);

  // Grammar States
  const [selectedGrammarId, setSelectedGrammarId] = useState<string | null>(null);

  const allWords = useMemo(() => {
    const combined = [
      ...ALL_A1_WORDS.map(w => ({ ...w, level: 'A1' as Level })),
      ...ALL_A2_WORDS.map(w => ({ ...w, level: 'A2' as Level })),
      ...ALL_B1_WORDS.map(w => ({ ...w, level: 'B1' as Level })),
      ...ALL_B2_WORDS.map(w => ({ ...w, level: 'B2' as Level })),
      ...ALL_C1_WORDS.map(w => ({ ...w, level: 'C1' as Level })),
      ...ALL_C2_WORDS.map(w => ({ ...w, level: 'C2' as Level })),
    ];
    // Deduplicate by word text (case insensitive)
    const unique = Array.from(new Map(combined.map(item => [item.word.toLowerCase(), item])).values());
    // Reverse to show newest first
    return unique.reverse();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeLevel, globalSearchTerm, viewMode]);

  useEffect(() => {
    localStorage.setItem('user_profile', JSON.stringify(profile));
  }, [profile]);

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

  const toggleBookmark = useCallback((wordText: string) => {
    setBookmarkedWords(prev => {
      const next = new Set(prev);
      const id = wordText.toLowerCase();
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

  const playAudio = useCallback((text: string, id?: string) => {
    if (playingAudio === (id || text)) {
      stopAudio();
      return;
    }

    stopAudio();
    setPlayingAudio(id || text);

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = speechSpeed === 'slow' ? 0.4 : 0.6;
    utterance.onend = () => setPlayingAudio(null);
    utterance.onerror = () => setPlayingAudio(null);
    window.speechSynthesis.speak(utterance);
  }, [playingAudio, stopAudio, speechSpeed]);

  const currentLevelWords = useMemo(() => {
    let baseWords: WordEntry[] = [];
    switch (activeLevel) {
      case 'A1': baseWords = ALL_A1_WORDS.map(w => ({ ...w, level: 'A1' as Level })); break;
      case 'A2': baseWords = ALL_A2_WORDS.map(w => ({ ...w, level: 'A2' as Level })); break;
      case 'B1': baseWords = ALL_B1_WORDS.map(w => ({ ...w, level: 'B1' as Level })); break;
      case 'B2': baseWords = ALL_B2_WORDS.map(w => ({ ...w, level: 'B2' as Level })); break;
      case 'C1': baseWords = ALL_C1_WORDS.map(w => ({ ...w, level: 'C1' as Level })); break;
      case 'C2': baseWords = ALL_C2_WORDS.map(w => ({ ...w, level: 'C2' as Level })); break;
      default: baseWords = [];
    }
    
    return baseWords.reverse();
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
    if (!globalSearchTerm) return currentLevelWords;
    
    const term = globalSearchTerm.toLowerCase();
    
    // Search across all words for global search
    const filtered = allWords.filter(w => 
      w.word.toLowerCase().includes(term) ||
      w.meaning.toLowerCase().includes(term) ||
      w.definition.toLowerCase().includes(term) ||
      (w.definitionEnglish && w.definitionEnglish.toLowerCase().includes(term))
    );

    // Sort to prioritize exact matches for the word
    return filtered.sort((a, b) => {
      const aWord = a.word.toLowerCase();
      const bWord = b.word.toLowerCase();
      
      // Exact match first
      if (aWord === term && bWord !== term) return -1;
      if (bWord === term && aWord !== term) return 1;
      
      // Starts with term second
      if (aWord.startsWith(term) && !bWord.startsWith(term)) return -1;
      if (bWord.startsWith(term) && !aWord.startsWith(term)) return 1;
      
      return 0;
    });
  }, [currentLevelWords, allWords, globalSearchTerm]);

  useEffect(() => {
    setDisplayLimit(100);
  }, [activeLevel, globalSearchTerm]);

  const bookmarkedWordsList = useMemo(() => {
    return allWords.filter(word => bookmarkedWords.has(word.word.toLowerCase()));
  }, [allWords, bookmarkedWords]);

  const displayedWords = useMemo(() => {
    if (viewMode === 'saved') {
      const term = globalSearchTerm.toLowerCase();
      if (!term) return bookmarkedWordsList;
      return bookmarkedWordsList.filter(w => 
        w.word.toLowerCase().includes(term) ||
        w.meaning.toLowerCase().includes(term)
      );
    }
    return filteredWords.slice(0, displayLimit);
  }, [filteredWords, displayLimit, viewMode, bookmarkedWordsList, globalSearchTerm]);

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
          {/* Profile Section - Improved & Responsive */}
          <div className="absolute top-0 right-0 p-4 md:p-6 z-50">
            {profile ? (
              <button 
                onClick={() => setShowProfileModal(true)}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 p-1 pr-2 md:p-1.5 md:pr-3 rounded-full transition-all backdrop-blur-md border border-white/20 shadow-lg group"
              >
                {profile.imageUrl ? (
                  <img 
                    src={profile.imageUrl} 
                    alt={profile.name} 
                    className="w-7 h-7 md:w-9 md:h-9 rounded-full border-2 border-[#f1c40f] group-hover:scale-110 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-7 h-7 md:w-9 md:h-9 rounded-full border-2 border-[#f1c40f] bg-stone-100 flex items-center justify-center text-stone-400 group-hover:scale-110 transition-transform">
                    <UserRound size={18} />
                  </div>
                )}
                <span className="font-bold text-[10px] md:text-sm kurdish-text hidden sm:inline">{profile.name}</span>
              </button>
            ) : (
              <button 
                onClick={() => {
                  setTempProfile({ name: '', imageUrl: '' });
                  setShowProfileModal(true);
                }}
                className="flex items-center gap-1.5 bg-[#f1c40f] hover:bg-[#f39c12] text-[#2c3e50] px-3 py-1 md:px-6 md:py-2 rounded-full font-bold transition-all shadow-lg kurdish-text text-[10px] md:text-sm"
              >
                <UserRound size={14} className="md:w-5 md:h-5" />
                <span className="hidden xs:inline">ڤەکرنا ئەکوانتی</span>
                <span className="xs:hidden">ئەکوانت</span>
              </button>
            )}
          </div>

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
              باشترین مالپەر ژ بوو <span className="text-[#f1c40f]">فێربوونا</span> زمانێ ئنگلیزی ب شێوازێ بادینی
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
                onClick={() => {
                  setViewMode('stories');
                  setSelectedStoryId(null);
                  setShowStoryResults(false);
                  setStoryQuizAnswers({});
                }}
                className={viewMode === 'stories' ? 'active' : ''}
              >
                <i className="fas fa-book-open"></i> بەشێ چیرۆکا
              </button>
            </li>
            <li>
              <button 
                onClick={() => {
                  setViewMode('grammar');
                  setSelectedGrammarId(null);
                }}
                className={viewMode === 'grammar' ? 'active' : ''}
              >
                <i className="fas fa-graduation-cap"></i> ڕێزمان (Grammar)
              </button>
            </li>
            <li>
              <button 
                onClick={() => setViewMode('translator')}
                className={viewMode === 'translator' ? 'active' : ''}
              >
                <i className="fas fa-language"></i> وەرگێڕێ زیرەک
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
                onClick={() => setViewMode('chat')}
                className={viewMode === 'chat' ? 'active' : ''}
              >
                <i className="fas fa-robot"></i> ڕۆبۆتێ زیرەک
              </button>
            </li>
            <li>
              <button 
                onClick={() => setViewMode('video-translator')}
                className={viewMode === 'video-translator' ? 'active' : ''}
              >
                <i className="fas fa-video"></i> وەرگێڕێ ڤیدیۆیان
              </button>
            </li>
            <li>
              <button 
                onClick={() => setViewMode('conversations')}
                className={viewMode === 'conversations' ? 'active' : ''}
              >
                <i className="fas fa-comments"></i> گفتوگۆ
              </button>
            </li>
            <li>
              <button 
                onClick={() => setViewMode('saved')}
                className={viewMode === 'saved' ? 'active' : ''}
              >
                <i className="fas fa-bookmark"></i> پەیڤێن خەزنکری
                {bookmarkedWords.size > 0 && (
                  <span className="ml-2 bg-[#e67e22] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                    {bookmarkedWords.size}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <main className={`flex-1 max-w-6xl mx-auto w-full px-4 ${viewMode === 'chat' ? 'py-4' : 'py-8'}`}>
        {/* Motivational Quotes Section */}
        {viewMode !== 'chat' && (
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
        )}

        {/* View Mode Toggle & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#2c3e50] rounded-2xl text-white shadow-lg">
              {viewMode === 'list' ? <List size={24} /> : 
               viewMode === 'quiz' ? <HelpCircle size={24} /> : 
               viewMode === 'phrasal' ? <Zap size={24} /> :
               viewMode === 'idioms' ? <Sparkles size={24} /> :
               viewMode === 'stories' ? <BookOpen size={24} /> :
               viewMode === 'grammar' ? <GraduationCap size={24} /> :
               viewMode === 'translator' ? <Languages size={24} /> :
               viewMode === 'chat' ? <Bot size={24} /> :
               viewMode === 'video-translator' ? <Video size={24} /> :
               viewMode === 'conversations' ? <MessageCircle size={24} /> :
               <Book size={24} />}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-stone-800 kurdish-text">
                {viewMode === 'list' ? `ئـاسـتـێ ${activeLevel}` : 
                 viewMode === 'quiz' ? 'تـاقـیـکـردنـەوە' : 
                 viewMode === 'phrasal' ? 'کردارێن لێکدای' :
                 viewMode === 'idioms' ? 'ئیدیۆمێن ئنگلیزی' :
                 viewMode === 'stories' ? 'چیرۆکێن ئنگلیزی' :
                 viewMode === 'grammar' ? 'ڕێزمانا ئنگلیزی' :
                 viewMode === 'translator' ? 'وەرگێڕێ زیرەک' :
                 viewMode === 'chat' ? 'ڕۆبۆتێ زیرەک' :
                 viewMode === 'video-translator' ? 'وەرگێڕێ ڤیدیۆیان' :
                 viewMode === 'conversations' ? 'بەشێ گفتوگۆیان' :
                 'پەیڤێن خەزنکری'}
              </h2>
              <p className="text-stone-500 text-sm kurdish-text">
                {viewMode === 'list' ? 'لیستا هەمی پەیڤان' : 
                 viewMode === 'quiz' ? 'خۆ تاقی بکە' : 
                 viewMode === 'phrasal' ? 'پەیڤێن لێکدای یێن گرنگ' :
                 viewMode === 'idioms' ? 'ئیدیۆمێن زمانێ ئنگلیزی' :
                 viewMode === 'stories' ? 'فێربوونا ئنگلیزی ب چیرۆکان' :
                 viewMode === 'grammar' ? 'هەمی بابەتێن ڕێزمانێ ب بادینی' :
                 viewMode === 'translator' ? 'وەرگێڕێ ئنگلیزی بۆ کوردی و بەروڤاژی' :
                 viewMode === 'chat' ? 'دگەل ڕۆبۆتی باخڤە ب بادینی' :
                 viewMode === 'video-translator' ? 'وەرگێڕانا سەبتایتلێن ڤیدیۆیێ بۆ بادینی' :
                 viewMode === 'conversations' ? 'فێربوونا ئنگلیزی ب رێکا گفتوگۆیان' :
                 'لیستا پەیڤێن تە خەزنکرین'}
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
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <div className="relative w-full md:w-80">
                  <input 
                    type="text" 
                    placeholder="لێگەریانا گشتی (هەمی ئاست)" 
                    value={globalSearchTerm}
                    onChange={(e) => setGlobalSearchTerm(e.target.value)}
                    className="w-full bg-white border-2 border-stone-100 rounded-2xl py-4 px-12 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#2c3e50] focus:ring-4 focus:ring-[#2c3e50]/5 transition-all kurdish-text shadow-sm"
                  />
                  <Globe className="absolute left-4 top-4.5 text-stone-300" size={20} />
                  {globalSearchTerm && (
                    <button 
                      onClick={() => setGlobalSearchTerm('')}
                      className="absolute right-4 top-4.5 text-stone-300 hover:text-stone-500"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {viewMode === 'translator' ? (
              <Translator key="translator-view" onSpeak={(text) => playAudio(text, 'translator')} />
            ) : viewMode === 'chat' ? (
              <Chatbot key="chat-view" />
            ) : viewMode === 'video-translator' ? (
              <VideoTranslator key="video-translator-view" />
            ) : viewMode === 'conversations' ? (
              <ConversationView key="conversations-view" />
            ) : viewMode === 'grammar' ? (
              <motion.div
                key="grammar-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                {!selectedGrammarId ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {GRAMMAR_TOPICS.map((topic) => (
                      <motion.button
                        key={topic.id}
                        whileHover={{ scale: 1.02, y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedGrammarId(topic.id)}
                        className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-stone-100 text-right hover:shadow-2xl transition-all group relative overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-stone-50 rounded-bl-[5rem] -mr-16 -mt-16 group-hover:bg-[#2c3e50]/5 transition-colors" />
                        
                        <div className="flex items-center justify-between mb-6 relative z-10">
                          <div className="bg-stone-50 p-4 rounded-2xl text-[#2c3e50] group-hover:bg-[#2c3e50] group-hover:text-white transition-all shadow-sm">
                            <GraduationCap size={28} />
                          </div>
                          <span className="text-[10px] font-black text-[#2c3e50] uppercase tracking-widest bg-[#f1c40f] px-4 py-1.5 rounded-full shadow-sm">
                            {topic.category}
                          </span>
                        </div>
                        
                        <div className="relative z-10">
                          <h3 className="text-2xl font-black text-stone-800 mb-2 kurdish-text group-hover:text-[#2c3e50] transition-colors">
                            {topic.titleKurdish}
                          </h3>
                          <p className="text-stone-400 text-sm font-mono tracking-wider uppercase">
                            {topic.title}
                          </p>
                        </div>
                        
                        <div className="mt-6 flex items-center justify-end gap-2 text-[#2c3e50] font-bold text-sm opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                          <span className="kurdish-text">دەستپێبکە</span>
                          <ArrowRight size={16} />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-stone-100">
                    {/* Header */}
                    <div className="bg-gradient-to-br from-[#2c3e50] to-[#34495e] p-10 md:p-16 text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f1c40f]/10 rounded-full -ml-32 -mb-32 blur-3xl" />
                      
                      <button 
                        onClick={() => setSelectedGrammarId(null)}
                        className="absolute top-8 left-8 bg-white/10 hover:bg-white/20 backdrop-blur-md p-4 rounded-2xl transition-all flex items-center gap-3 border border-white/10 group z-20"
                      >
                        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="kurdish-text font-black text-lg">زڤڕین</span>
                      </button>

                      <div className="text-center relative z-10">
                        <motion.div
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="inline-block bg-[#f1c40f] text-[#2c3e50] px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-lg"
                        >
                          {GRAMMAR_TOPICS.find(t => t.id === selectedGrammarId)?.category}
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-black kurdish-text mb-4 drop-shadow-lg">
                          {GRAMMAR_TOPICS.find(t => t.id === selectedGrammarId)?.titleKurdish}
                        </h2>
                        <p className="text-stone-400 text-xl font-mono tracking-widest uppercase opacity-80">
                          {GRAMMAR_TOPICS.find(t => t.id === selectedGrammarId)?.title}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-16 space-y-24">
                      {GRAMMAR_TOPICS.find(t => t.id === selectedGrammarId)?.content.map((section, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          className="relative"
                        >
                          <div className="flex items-center gap-6 mb-10">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#f1c40f] to-[#f39c12] rounded-2xl flex items-center justify-center text-[#2c3e50] text-3xl font-black shadow-xl transform -rotate-6 border-4 border-white">
                              {idx + 1}
                            </div>
                            <h3 className="text-4xl font-black text-stone-800 kurdish-text relative">
                              {section.rule}
                              <div className="absolute -bottom-3 right-0 w-full h-2 bg-[#f1c40f]/20 rounded-full" />
                            </h3>
                          </div>
                          
                          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
                            {/* Left Column: Explanation & Structure */}
                            <div className="xl:col-span-7 space-y-8">
                              <div className="bg-stone-50 p-8 rounded-[2.5rem] border-r-[12px] border-r-[#2c3e50] shadow-inner">
                                <p className="text-lg text-stone-700 leading-relaxed kurdish-text font-medium">
                                  {section.explanation}
                                </p>
                              </div>

                              {section.structure && (
                                <div className="bg-[#2c3e50] p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden group">
                                  <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Zap size={60} />
                                  </div>
                                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 mb-4 block kurdish-text">پێکهاتە (Structure)</span>
                                  <p className="text-3xl md:text-4xl font-black english-text tracking-tight text-[#f1c40f]">
                                    {section.structure}
                                  </p>
                                </div>
                              )}

                              {section.notes && section.notes.length > 0 && (
                                <div className="bg-amber-50/50 border-2 border-amber-100 p-8 rounded-[2.5rem] space-y-4">
                                  <div className="flex items-center gap-2 text-amber-600 mb-2">
                                    <Info size={20} />
                                    <span className="font-black kurdish-text text-lg">تێبینیێن گرنگ (Notes)</span>
                                  </div>
                                  <ul className="space-y-3">
                                    {section.notes.map((note, nIdx) => (
                                      <li key={nIdx} className="flex items-start gap-3 text-stone-600 kurdish-text text-sm leading-relaxed">
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                                        {note}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>

                            {/* Right Column: Examples */}
                            <div className="xl:col-span-5 space-y-6">
                              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 mb-4 block kurdish-text text-center">نموونە (Examples)</span>
                              <div className="space-y-4">
                                {section.examples.map((ex, exIdx) => (
                                  <motion.div 
                                    key={exIdx}
                                    whileHover={{ scale: 1.02, x: -5 }}
                                    className="bg-white border-2 border-stone-50 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-[#2c3e50]/10 transition-all relative group"
                                  >
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                      <div className="bg-emerald-50 p-2 rounded-lg">
                                        <CheckCircle2 size={16} className="text-emerald-500" />
                                      </div>
                                    </div>
                                    <div className="space-y-3">
                                      <p className="text-3xl font-black text-[#2c3e50] english-text leading-tight">{ex.en}</p>
                                      <p className="text-base text-stone-400 kurdish-text font-bold pr-4 border-r-2 border-stone-100">
                                        {ex.ku}
                                      </p>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Footer Tip */}
                    <div className="bg-stone-50 p-10 text-center border-t border-stone-100">
                      <div className="inline-flex items-center gap-3 text-[#2c3e50] bg-white px-8 py-4 rounded-2xl shadow-sm border border-stone-200">
                        <Zap size={20} className="text-[#f1c40f]" />
                        <span className="kurdish-text font-bold text-lg">بەردەوام بە ل سەر فێربوونێ! تو دێ ب سەرکەڤی.</span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ) : viewMode === 'stories' ? (
              <motion.div
                key="stories-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                {!selectedStoryId ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {STORIES.map((story) => (
                      <motion.div
                        key={story.id}
                        whileHover={{ y: -5, scale: 1.02 }}
                        onClick={() => setSelectedStoryId(story.id)}
                        className="bg-white p-6 rounded-3xl shadow-lg border border-stone-100 cursor-pointer group transition-all"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 bg-[#2c3e50]/10 text-[#2c3e50] rounded-full text-xs font-bold uppercase tracking-wider">
                            Level {story.level}
                          </span>
                          <BookOpen className="text-stone-300 group-hover:text-[#2c3e50] transition-colors" size={20} />
                        </div>
                        <h3 className="text-xl font-black text-[#2c3e50] mb-2 group-hover:text-[#e67e22] transition-colors">{story.title}</h3>
                        <p className="text-stone-500 kurdish-text font-bold mb-4">{story.titleKurdish}</p>
                        <div className="flex items-center text-stone-400 text-sm gap-2">
                          <HelpCircle size={16} />
                          <span className="kurdish-text">{story.questions.length} پسیار</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="max-w-4xl mx-auto">
                    <button 
                      onClick={() => {
                        setSelectedStoryId(null);
                        setShowStoryResults(false);
                        setStoryQuizAnswers({});
                      }}
                      className="flex items-center gap-2 text-stone-500 hover:text-[#2c3e50] mb-8 transition-colors kurdish-text font-bold"
                    >
                      <ChevronLeft size={20} />
                      زڤڕین بو لیستا چیرۆکا
                    </button>

                    {STORIES.find(s => s.id === selectedStoryId) && (
                      <div className="space-y-12">
                        {/* Story Content */}
                        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-stone-100 relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#2c3e50] to-[#e67e22]" />
                          <div className="mb-10 text-center">
                            <h2 className="text-3xl md:text-5xl font-black text-[#2c3e50] mb-4">
                              {STORIES.find(s => s.id === selectedStoryId)?.title}
                            </h2>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#e67e22] kurdish-text">
                              {STORIES.find(s => s.id === selectedStoryId)?.titleKurdish}
                            </h3>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                              <div className="flex items-center gap-2 text-[#2c3e50] font-bold uppercase tracking-widest text-xs mb-4">
                                <Languages size={16} />
                                English Text
                              </div>
                              <p className="text-xl leading-relaxed text-stone-800 english-text first-letter:text-5xl first-letter:font-black first-letter:mr-3 first-letter:float-left">
                                {STORIES.find(s => s.id === selectedStoryId)?.content}
                              </p>
                              <button 
                                onClick={() => playAudio(STORIES.find(s => s.id === selectedStoryId)?.content || '', `story-${selectedStoryId}`)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-2xl transition-all font-bold ${playingAudio === `story-${selectedStoryId}` ? 'bg-[#e67e22] text-white shadow-lg' : 'bg-stone-50 text-[#2c3e50] hover:bg-stone-100 border border-stone-200'}`}
                              >
                                {playingAudio === `story-${selectedStoryId}` ? <VolumeX size={20} /> : <Volume2 size={20} />}
                                <span className="kurdish-text">گوه لێ ببە</span>
                              </button>
                            </div>
                            <div className="space-y-6 bg-stone-50/50 p-6 rounded-3xl border border-stone-100">
                              <div className="flex items-center gap-2 text-stone-400 font-bold uppercase tracking-widest text-xs mb-4">
                                <Languages size={16} />
                                وەرگێڕانا بادینی
                              </div>
                              <p className="text-xl leading-relaxed text-stone-700 kurdish-text">
                                {STORIES.find(s => s.id === selectedStoryId)?.contentKurdish}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Quiz Section */}
                        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-stone-100">
                          <div className="flex items-center gap-4 mb-12">
                            <div className="p-4 bg-[#2c3e50] text-white rounded-2xl">
                              <BrainCircuit size={32} />
                            </div>
                            <div>
                              <h3 className="text-2xl font-black text-[#2c3e50] kurdish-text">تاقیکردنەوەیا چیرۆکێ</h3>
                              <p className="text-stone-500 kurdish-text">بەرسڤا پسیارێن ل خوارێ بدە</p>
                            </div>
                          </div>

                          <div className="space-y-12">
                            {STORIES.find(s => s.id === selectedStoryId)?.questions.map((q, qIdx) => (
                              <div key={q.id} className="space-y-6">
                                <div className="flex items-start gap-4">
                                  <span className="w-8 h-8 bg-stone-100 text-stone-500 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                                    {qIdx + 1}
                                  </span>
                                  <h4 className="text-xl font-bold text-[#2c3e50]">{q.question}</h4>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ml-12">
                                  {q.options.map((option, oIdx) => (
                                    <button
                                      key={oIdx}
                                      disabled={showStoryResults}
                                      onClick={() => setStoryQuizAnswers(prev => ({ ...prev, [q.id]: oIdx }))}
                                      className={`
                                        p-4 rounded-2xl border-2 transition-all text-left font-medium relative overflow-hidden
                                        ${storyQuizAnswers[q.id] === oIdx 
                                          ? 'border-[#2c3e50] bg-[#2c3e50]/5 text-[#2c3e50]' 
                                          : 'border-stone-100 hover:border-stone-200 text-stone-600'}
                                        ${showStoryResults && q.correctAnswer === oIdx ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : ''}
                                        ${showStoryResults && storyQuizAnswers[q.id] === oIdx && q.correctAnswer !== oIdx ? 'border-rose-500 bg-rose-50 text-rose-700' : ''}
                                      `}
                                    >
                                      {option}
                                      {showStoryResults && q.correctAnswer === oIdx && (
                                        <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500" size={20} />
                                      )}
                                      {showStoryResults && storyQuizAnswers[q.id] === oIdx && q.correctAnswer !== oIdx && (
                                        <AlertCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-rose-500" size={20} />
                                      )}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>

                          {!showStoryResults ? (
                            <div className="mt-12 text-center">
                              <button 
                                onClick={() => setShowStoryResults(true)}
                                disabled={Object.keys(storyQuizAnswers).length < (STORIES.find(s => s.id === selectedStoryId)?.questions.length || 0)}
                                className="px-12 py-4 bg-[#2c3e50] text-white rounded-2xl font-bold text-lg hover:bg-[#34495e] transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed kurdish-text"
                              >
                                دیتنا ئەنجامان
                              </button>
                              {Object.keys(storyQuizAnswers).length < (STORIES.find(s => s.id === selectedStoryId)?.questions.length || 0) && (
                                <p className="mt-4 text-stone-400 text-sm kurdish-text">هیڤیە بەرسڤا هەمی پسیاران بدە</p>
                              )}
                            </div>
                          ) : (
                            <div className="mt-12 p-8 bg-stone-50 rounded-3xl border border-stone-100 text-center">
                              <h4 className="text-2xl font-black text-[#2c3e50] mb-4 kurdish-text">ئەنجامێ تە</h4>
                              <div className="text-5xl font-black text-[#e67e22] mb-6">
                                {Object.entries(storyQuizAnswers).filter(([qId, ansIdx]) => {
                                  const q = STORIES.find(s => s.id === selectedStoryId)?.questions.find(quest => quest.id === qId);
                                  return q?.correctAnswer === ansIdx;
                                }).length} / {STORIES.find(s => s.id === selectedStoryId)?.questions.length}
                              </div>
                              <button 
                                onClick={() => {
                                  setShowStoryResults(false);
                                  setStoryQuizAnswers({});
                                }}
                                className="px-8 py-3 bg-white border-2 border-stone-200 text-stone-600 rounded-2xl font-bold hover:bg-stone-50 transition-all kurdish-text"
                              >
                                دووبارەکرن
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
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
                    pv.verb.toLowerCase().includes(globalSearchTerm.toLowerCase()) || 
                    pv.meaningKurdish.includes(globalSearchTerm)
                  ).map((pv) => (
                    <motion.div
                      key={pv.id}
                      whileHover={{ y: -5, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                      className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-stone-100 relative overflow-hidden group transition-all"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#f1c40f]/10 to-transparent rounded-bl-full -mr-10 -mt-10 transition-all group-hover:scale-110" />
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-2xl font-black text-[#2c3e50]">{pv.verb}</h3>
                            <button 
                              onClick={() => playAudio(pv.verb, `verb-${pv.id}`)}
                              title="Play Verb"
                              className={`p-2 rounded-full transition-all flex items-center gap-1 ${playingAudio === `verb-${pv.id}` ? 'bg-[#e67e22] text-white' : 'bg-stone-50 text-stone-400 hover:bg-stone-100 hover:text-[#e67e22]'}`}
                            >
                              {playingAudio === `verb-${pv.id}` ? <VolumeX size={18} /> : <Volume2 size={18} />}
                              <span className="text-[10px] font-bold kurdish-text">پەیڤ</span>
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <button 
                            onClick={() => playAudio(`${pv.verb}. ${pv.example}`, `${pv.id}-example`)}
                            className={`p-3 rounded-xl transition-all flex items-center gap-2 ${playingAudio === `${pv.id}-example` ? 'bg-[#2c3e50] text-white shadow-lg' : 'bg-stone-50 text-stone-400 hover:bg-stone-100 hover:text-[#2c3e50]'}`}
                            title="Play Example"
                          >
                            {playingAudio === `${pv.id}-example` ? <VolumeX size={20} /> : <Volume2 size={20} />}
                            <span className="text-[10px] font-bold kurdish-text">رستە</span>
                          </button>
                        </div>
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
                    idiom.phrase.toLowerCase().includes(globalSearchTerm.toLowerCase()) || 
                    idiom.meaningKurdish.includes(globalSearchTerm)
                  ).map((idiom) => (
                    <motion.div
                      key={idiom.id}
                      whileHover={{ y: -5, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                      className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-stone-100 relative overflow-hidden group transition-all"
                    >
                      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#8e44ad] to-[#9b59b6] opacity-20" />
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-2xl font-black text-[#8e44ad]">{idiom.phrase}</h3>
                            <button 
                              onClick={() => playAudio(idiom.phrase, `phrase-${idiom.id}`)}
                              title="Play Phrase"
                              className={`p-2 rounded-full transition-all flex items-center gap-1 ${playingAudio === `phrase-${idiom.id}` ? 'bg-[#8e44ad] text-white' : 'text-stone-400 hover:bg-stone-100 hover:text-[#8e44ad]'}`}
                            >
                              {playingAudio === `phrase-${idiom.id}` ? <VolumeX size={18} /> : <Volume2 size={18} />}
                              <span className="text-[10px] font-bold kurdish-text">پەیڤ</span>
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <button 
                            onClick={() => playAudio(`${idiom.phrase}. ${idiom.example}`, `${idiom.id}-example`)}
                            className={`p-3 rounded-xl transition-all flex items-center gap-2 ${playingAudio === `${idiom.id}-example` ? 'bg-[#2c3e50] text-white shadow-lg' : 'bg-stone-50 text-stone-400 hover:bg-stone-100 hover:text-[#2c3e50]'}`}
                            title="Play Example"
                          >
                            {playingAudio === `${idiom.id}-example` ? <VolumeX size={20} /> : <Volume2 size={20} />}
                            <span className="text-[10px] font-bold kurdish-text">رستە</span>
                          </button>
                        </div>
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
                            <div className="flex bg-white/10 p-2 rounded-2xl gap-4 border border-stone-200">
                              <button 
                                onClick={() => playAudio(quizQuestion.word, `quiz-${quizQuestion.id}`)}
                                className={`p-4 rounded-2xl transition-all flex flex-col items-center gap-1 ${playingAudio === `quiz-${quizQuestion.id}` ? 'bg-[#e67e22] text-white' : 'bg-white text-[#2c3e50] hover:bg-stone-50 border border-stone-200'}`}
                              >
                                {playingAudio === `quiz-${quizQuestion.id}` ? <VolumeX size={32} /> : <Volume2 size={32} />}
                                <span className="text-[12px] font-bold kurdish-text">گوه لێ ببە</span>
                              </button>
                            </div>
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
            ) : viewMode === 'saved' ? (
              <motion.div
                key="saved-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div className="bg-amber-50 border-2 border-amber-100 p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-amber-500 text-white rounded-2xl shadow-lg">
                      <BookmarkCheck size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-amber-900 kurdish-text">پەیڤێن خەزنکری</h3>
                      <p className="text-amber-700 kurdish-text">تە {bookmarkedWordsList.length} پەیڤ خەزنکرینە</p>
                    </div>
                  </div>
                  {bookmarkedWordsList.length > 0 && (
                    <button 
                      onClick={() => {
                        if (confirm('ئەرێ تو یێ پشت راستی دێ هەمی پەیڤێن خەزنکری ژێبەی؟')) {
                          setBookmarkedWords(new Set());
                        }
                      }}
                      className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-amber-200 text-amber-600 rounded-2xl hover:bg-amber-100 transition-all font-bold kurdish-text"
                    >
                      <Trash2 size={18} />
                      هەمییان ژێببە
                    </button>
                  )}
                </div>

                {bookmarkedWordsList.length === 0 ? (
                  <div className="bg-white p-20 rounded-[3rem] border-2 border-dashed border-stone-200 text-center">
                    <div className="w-24 h-24 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Bookmark size={48} className="text-stone-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-stone-400 kurdish-text mb-2">چ پەیڤ نەهاتینە خەزنکرن</h3>
                    <p className="text-stone-400 kurdish-text">ل پەیڤان بگەڕە و نیشانا خەزنکرنێ کلیک بکە</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedWords.map((word, index) => (
                      <motion.div 
                        key={`${word.id}-${index}`}
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100 border-r-8 border-r-amber-500 hover:shadow-xl transition-all"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[#2c3e50] font-bold text-2xl english-text">{word.word}</span>
                              <span className="px-2 py-0.5 bg-stone-100 text-stone-500 text-[10px] font-bold rounded-md border border-stone-200">
                                ئاستێ {word.level}
                              </span>
                              <button 
                                onClick={() => playAudio(word.word, `saved-word-${index}`)}
                                className={`p-1.5 rounded-lg transition-all ${playingAudio === `saved-word-${index}` ? 'bg-amber-500 text-white' : 'bg-stone-50 text-stone-400 hover:bg-stone-100 hover:text-amber-500'}`}
                              >
                                {playingAudio === `saved-word-${index}` ? <VolumeX size={16} /> : <Volume2 size={16} />}
                              </button>
                            </div>
                            <span className="text-stone-400 text-sm font-medium kurdish-text">{word.pronunciation}</span>
                          </div>
                          <button 
                            onClick={() => toggleBookmark(word.word)}
                            className="p-2 rounded-full bg-amber-50 text-amber-500 hover:bg-amber-100 transition-all"
                          >
                            <BookmarkCheck size={18} />
                          </button>
                        </div>
                        <div className="space-y-3">
                          <p className="text-[#2c3e50] font-bold kurdish-text text-lg">{word.meaning}</p>
                          <div className="p-3 bg-stone-50 rounded-xl border-r-4 border-amber-200">
                            <p className="text-stone-600 text-sm italic mb-1">"{word.exampleEnglish}"</p>
                            <p className="text-stone-500 text-xs kurdish-text">{word.exampleKurdish}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
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
                {!globalSearchTerm && (
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
                        مالپەرێ مە ل دەف خو بەلاڤ بکەن ژ بوو گەهاندنا مافی بوو گشت کەسانێن حەزا فێربوونا زمانێ ئنگلیزی هەی.
                      </p>
                    </div>
                  </motion.div>
                )}

                <div className="bg-[#2c3e50] text-white p-6 rounded-2xl mb-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <GraduationCap size={32} className="text-[#f1c40f]" />
                    <span className="text-xl font-bold kurdish-text">
                      {globalSearchTerm 
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
                            <div className="flex items-center gap-2">
                              <span className="text-[#2c3e50] font-bold text-2xl english-text">{index + 1}. {word.word}</span>
                              {globalSearchTerm && (
                                <span className="px-2 py-0.5 bg-stone-100 text-stone-500 text-[10px] font-bold rounded-md border border-stone-200">
                                  ئاستێ {word.level}
                                </span>
                              )}
                              <button 
                                onClick={() => playAudio(word.word, `word-${index}`)}
                                title="Play Word Only"
                                className={`p-1.5 rounded-lg transition-all ${playingAudio === `word-${index}` ? 'bg-[#e67e22] text-white' : 'bg-stone-50 text-stone-400 hover:bg-stone-100 hover:text-[#e67e22]'}`}
                              >
                                {playingAudio === `word-${index}` ? <VolumeX size={16} /> : <Volume2 size={16} />}
                              </button>
                            </div>
                            <span className="text-stone-400 text-sm font-medium kurdish-text">{word.pronunciation}</span>
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                              <button 
                                onClick={() => toggleBookmark(word.word)}
                                className={`p-2 rounded-full transition-all ${bookmarkedWords.has(word.word.toLowerCase()) ? 'bg-amber-50 text-amber-500' : 'bg-stone-50 text-stone-400 hover:bg-stone-100'}`}
                                title={bookmarkedWords.has(word.word.toLowerCase()) ? "Remove Bookmark" : "Add Bookmark"}
                              >
                                {bookmarkedWords.has(word.word.toLowerCase()) ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
                              </button>
                              <button 
                                onClick={() => toggleLearned(word.word)}
                                className={`p-2 rounded-full transition-all ${learnedWords.has(word.word) ? 'bg-emerald-50 text-emerald-600' : 'bg-stone-50 text-stone-400 hover:bg-stone-100'}`}
                                title={learnedWords.has(word.word) ? "Mark as Unlearned" : "Mark as Learned"}
                              >
                                <CheckCircle2 size={18} />
                              </button>
                            </div>
                            <button 
                              onClick={() => playAudio(`${word.word}. ${word.exampleEnglish}`, `full-${index}`)}
                              title="Play Word & Example"
                              className={`p-3 rounded-xl transition-all ${playingAudio === `full-${index}` ? 'bg-[#e67e22] text-white' : 'bg-stone-100 text-[#e67e22] hover:bg-stone-200'}`}
                            >
                              {playingAudio === `full-${index}` ? <VolumeX size={20} /> : <Volume2 size={20} />}
                            </button>
                          </div>
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

                {/* Load More */}
                {viewMode === 'list' && hasMore && (
                  <div className="mt-12 flex justify-center pb-20">
                    <button 
                      onClick={loadMore}
                      className="px-10 py-4 bg-white border-2 border-stone-100 text-stone-600 rounded-2xl font-bold hover:border-[#2c3e50] hover:text-[#2c3e50] transition-all kurdish-text shadow-sm flex items-center gap-2"
                    >
                      <span>پتر ببینە (Load More)</span>
                      <ChevronDown size={20} />
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Profile Modal */}
      <AnimatePresence>
        {showProfileModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowProfileModal(false)}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl relative z-10 overflow-hidden"
            >
              <div className="bg-[#2c3e50] p-8 text-white text-center relative">
                <button 
                  onClick={() => setShowProfileModal(false)}
                  className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="relative inline-block mb-4">
                  <div className="w-24 h-24 rounded-full border-4 border-[#f1c40f] overflow-hidden bg-stone-100 group relative flex items-center justify-center text-stone-400">
                    {tempProfile.imageUrl || profile?.imageUrl ? (
                      <img 
                        src={tempProfile.imageUrl || profile?.imageUrl || ""} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <UserRound size={48} />
                    )}
                    <label className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                      <Camera className="text-white" size={24} />
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              setTempProfile(prev => ({ ...prev, imageUrl: reader.result as string }));
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                    </label>
                  </div>
                </div>
                <h3 className="text-2xl font-bold kurdish-text">پڕۆفایلێ تە</h3>
                <p className="text-stone-400 text-sm kurdish-text">ناڤ و وێنەیێ خۆ دیار بکە</p>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <label className="block text-stone-400 text-[10px] font-bold uppercase tracking-widest mb-2 kurdish-text">ناڤێ تە</label>
                  <input 
                    type="text" 
                    placeholder="ناڤێ خۆ بنڤیسە..."
                    value={tempProfile.name || (profile?.name || '')}
                    onChange={(e) => setTempProfile(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-stone-50 border-2 border-stone-100 rounded-2xl py-4 px-6 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#2c3e50] transition-all kurdish-text"
                  />
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => {
                      if (tempProfile.name || profile?.name) {
                        setProfile({
                          name: tempProfile.name || profile?.name || 'User',
                          imageUrl: tempProfile.imageUrl || profile?.imageUrl || ""
                        });
                        setShowProfileModal(false);
                      }
                    }}
                    className="flex-1 bg-[#2c3e50] text-white py-4 rounded-2xl font-bold shadow-lg hover:bg-[#34495e] transition-all flex items-center justify-center gap-2 kurdish-text"
                  >
                    <Save size={20} />
                    پاشکەفتن
                  </button>
                  {profile && (
                    <button 
                      onClick={() => {
                        setProfile(null);
                        setShowProfileModal(false);
                      }}
                      className="bg-red-50 text-red-500 px-6 py-4 rounded-2xl font-bold hover:bg-red-100 transition-all kurdish-text"
                    >
                      دەرکەفتن
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-[#2c3e50] text-white py-12 mt-12 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-stone-300 text-sm mb-2 font-mono">2026 @ دیـــنـــدار الـــــکـــــردی</p>
        </div>
      </footer>
      {/* Social Links */}
      <SocialLinks />
      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </div>
  );
}
