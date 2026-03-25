import React from 'react';
import { motion } from 'framer-motion';
import { Book, CheckCircle2, Bookmark, ArrowRight, PlayCircle } from 'lucide-react';
import { WordEntry } from '../types';

interface BookLibraryProps {
  words: WordEntry[];
  learnedWords: Set<string>;
  bookmarkedWords: Set<string>;
  onWordClick: (word: WordEntry) => void;
}

export const BookLibrary: React.FC<BookLibraryProps> = ({
  words,
  learnedWords,
  bookmarkedWords,
  onWordClick
}) => {
  const books = [
    { id: 'a1', title: 'Starter Vocabulary', level: 'A1', count: 21 * 50 },
    { id: 'a2', title: 'Elementary Vocabulary', level: 'A2', count: 40 * 50 },
    { id: 'b1', title: 'Intermediate Vocabulary', level: 'B1', count: 60 * 50 },
    { id: 'b2', title: 'Upper Intermediate Vocabulary', level: 'B2', count: 80 * 50 },
    { id: 'c1', title: 'Advanced Vocabulary', level: 'C1', count: 5000 },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-black text-slate-800 mb-4">Your Learning Library</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">Track your progress across all CEFR levels. Each book contains curated vocabulary to help you master the English language.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book, index) => {
          const levelWords = words.filter(w => w.level === book.level);
          const learnedCount = levelWords.filter(w => learnedWords.has(w.id)).length;
          const progress = levelWords.length > 0 ? (learnedCount / levelWords.length) * 100 : 0;
          
          return (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-indigo-100 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-500 ${
                  book.level === 'A1' ? 'bg-emerald-50 text-emerald-600' :
                  book.level === 'A2' ? 'bg-blue-50 text-blue-600' :
                  book.level === 'B1' ? 'bg-indigo-50 text-indigo-600' :
                  book.level === 'B2' ? 'bg-violet-50 text-violet-600' :
                  'bg-rose-50 text-rose-600'
                }`}>
                  <Book size={32} />
                </div>
                <div className="text-right">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1 block">Level</span>
                  <span className={`text-2xl font-black ${
                    book.level === 'A1' ? 'text-emerald-600' :
                    book.level === 'A2' ? 'text-blue-600' :
                    book.level === 'B1' ? 'text-indigo-600' :
                    book.level === 'B2' ? 'text-violet-600' :
                    'text-rose-600'
                  }`}>{book.level}</span>
                </div>
              </div>

              <h3 className="text-2xl font-black text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">{book.title}</h3>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">Master the core vocabulary required for {book.level} proficiency level.</p>

              <div className="space-y-6">
                <div className="flex justify-between items-end mb-2">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Progress</span>
                    <div className="text-2xl font-black text-slate-800">{Math.round(progress)}%</div>
                  </div>
                  <div className="text-right space-y-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Words</span>
                    <div className="text-sm font-bold text-slate-600">{learnedCount} / {levelWords.length || book.count}</div>
                  </div>
                </div>

                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full rounded-full ${
                      book.level === 'A1' ? 'bg-emerald-500' :
                      book.level === 'A2' ? 'bg-blue-500' :
                      book.level === 'B1' ? 'bg-indigo-500' :
                      book.level === 'B2' ? 'bg-violet-500' :
                      'bg-rose-500'
                    }`}
                  />
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center">
                        <CheckCircle2 size={14} className="text-emerald-500" />
                      </div>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-400">Recent Achievements</span>
                </div>

                <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 group-hover:bg-indigo-600 transition-all duration-300 shadow-lg shadow-slate-200 group-hover:shadow-indigo-200">
                  <PlayCircle size={20} />
                  Continue Learning
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
