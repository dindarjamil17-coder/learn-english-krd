import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, RefreshCcw, Trophy, ArrowRight, BrainCircuit } from 'lucide-react';
import { WordEntry } from '../types';

interface QuizProps {
  words: WordEntry[];
  onFinish: (score: number) => void;
}

export const Quiz: React.FC<QuizProps> = ({ words, onFinish }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [quizWords, setQuizWords] = useState<WordEntry[]>([]);

  useEffect(() => {
    // Shuffle and pick 10 words for the quiz
    const shuffled = [...words].sort(() => 0.5 - Math.random());
    setQuizWords(shuffled.slice(0, 10));
  }, [words]);

  useEffect(() => {
    if (quizWords.length > 0 && currentQuestionIndex < quizWords.length) {
      generateOptions();
    }
  }, [quizWords, currentQuestionIndex]);

  const generateOptions = () => {
    const currentWord = quizWords[currentQuestionIndex];
    const otherWords = words.filter(w => w.id !== currentWord.id);
    const shuffledOthers = otherWords.sort(() => 0.5 - Math.random());
    const wrongOptions = shuffledOthers.slice(0, 3).map(w => w.meaning);
    const allOptions = [...wrongOptions, currentWord.meaning].sort(() => 0.5 - Math.random());
    setOptions(allOptions);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  const handleOptionSelect = (option: string) => {
    if (selectedOption) return;
    
    setSelectedOption(option);
    const correct = option === quizWords[currentQuestionIndex].meaning;
    setIsCorrect(correct);
    if (correct) setScore(prev => prev + 1);

    setTimeout(() => {
      if (currentQuestionIndex < quizWords.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  if (quizWords.length === 0) return null;

  if (showResult) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto bg-white rounded-3xl p-8 shadow-xl border border-slate-100 text-center"
      >
        <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Trophy className="text-indigo-600" size={40} />
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Quiz Completed!</h2>
        <p className="text-slate-500 mb-8">Great job practicing your vocabulary.</p>
        
        <div className="bg-slate-50 rounded-2xl p-6 mb-8">
          <div className="text-5xl font-black text-indigo-600 mb-1">{score}/{quizWords.length}</div>
          <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">Final Score</div>
        </div>

        <button
          onClick={() => {
            setCurrentQuestionIndex(0);
            setScore(0);
            setShowResult(false);
            const shuffled = [...words].sort(() => 0.5 - Math.random());
            setQuizWords(shuffled.slice(0, 10));
          }}
          className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
        >
          <RefreshCcw size={20} />
          Try Again
        </button>
      </motion.div>
    );
  }

  const currentWord = quizWords[currentQuestionIndex];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-1">Vocabulary Quiz</h2>
          <p className="text-slate-500 text-sm">Question {currentQuestionIndex + 1} of {quizWords.length}</p>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-1">Score</div>
          <div className="text-2xl font-bold text-indigo-600">{score}</div>
        </div>
      </div>

      <div className="w-full bg-slate-100 h-2 rounded-full mb-12 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${((currentQuestionIndex + 1) / quizWords.length) * 100}%` }}
          className="h-full bg-indigo-600"
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
              <BrainCircuit size={24} />
            </div>
            <span className="text-sm font-bold text-indigo-600 uppercase tracking-widest">Translation Quiz</span>
          </div>

          <h3 className="text-4xl font-black text-slate-800 mb-4 text-center py-8">
            {currentWord.word}
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                disabled={!!selectedOption}
                className={`w-full p-5 rounded-2xl text-left font-bold transition-all border-2 flex items-center justify-between group ${
                  selectedOption === option
                    ? isCorrect
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                      : 'bg-rose-50 border-rose-500 text-rose-700'
                    : selectedOption && option === currentWord.kurdish
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                    : 'bg-white border-slate-100 text-slate-600 hover:border-indigo-200 hover:bg-slate-50'
                }`}
              >
                <span>{option}</span>
                {selectedOption === option ? (
                  isCorrect ? <CheckCircle2 className="text-emerald-500" /> : <XCircle className="text-rose-500" />
                ) : selectedOption && option === currentWord.kurdish ? (
                  <CheckCircle2 className="text-emerald-500" />
                ) : (
                  <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
