import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, BookOpen, CheckCircle2, Bookmark, BookmarkCheck } from 'lucide-react';
import { WordEntry } from '../types';

interface WordCardProps {
  word: WordEntry;
  isLearned: boolean;
  isBookmarked: boolean;
  onToggleLearned: (id: string) => void;
  onToggleBookmark: (id: string) => void;
  onPlaySpeech: (text: string) => void;
  isSpeaking: boolean;
}

export const WordCard: React.FC<WordCardProps> = ({
  word,
  isLearned,
  isBookmarked,
  onToggleLearned,
  onToggleBookmark,
  onPlaySpeech,
  isSpeaking
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`relative group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 ${
        isLearned ? 'bg-emerald-50/30 border-emerald-100' : ''
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-2xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
              {word.word}
            </h3>
          </div>
          <p className="text-indigo-600 font-medium italic text-sm mb-2">
            {word.pronunciation}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onPlaySpeech(word.word)}
            disabled={isSpeaking}
            className={`p-2 rounded-full transition-all ${
              isSpeaking ? 'bg-indigo-100 text-indigo-400' : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
            }`}
            title="Listen"
          >
            <Volume2 size={20} className={isSpeaking ? 'animate-pulse' : ''} />
          </button>
          <button
            onClick={() => onToggleBookmark(word.id)}
            className={`p-2 rounded-full transition-all ${
              isBookmarked ? 'bg-amber-50 text-amber-500' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
            }`}
            title={isBookmarked ? "Remove Bookmark" : "Add Bookmark"}
          >
            {isBookmarked ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
          </button>
          <button
            onClick={() => onToggleLearned(word.id)}
            className={`p-2 rounded-full transition-all ${
              isLearned ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
            }`}
            title={isLearned ? "Mark as Unlearned" : "Mark as Learned"}
          >
            <CheckCircle2 size={20} />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-slate-700 leading-relaxed">
            <span className="font-semibold text-slate-900">Definition: </span>
            {word.definitionEnglish || word.definition}
          </p>
          <p className="text-slate-500 text-sm mt-1">
            {word.definition}
          </p>
        </div>

        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100/50">
          <p className="text-slate-600 italic text-sm leading-relaxed">
            <span className="font-semibold text-slate-800 not-italic">Example: </span>
            "{word.exampleEnglish}"
          </p>
          {word.exampleKurdish && (
            <p className="text-slate-400 text-xs mt-2">
              {word.exampleKurdish}
            </p>
          )}
        </div>

        <div className="pt-2 border-t border-slate-50 flex flex-wrap gap-2">
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100/50 px-2.5 py-1 rounded-lg">
            <BookOpen size={14} />
            <span>Kurdish: {word.meaning}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
