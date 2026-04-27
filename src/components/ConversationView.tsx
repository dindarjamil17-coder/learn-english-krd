import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, ChevronRight, BookOpen, 
  MessageCircle, Volume2, Globe,
  ArrowLeft, Star, Heart, Share2,
  Bookmark, Headset, Sparkles
} from 'lucide-react';
import { Level, Conversation } from '../types';
import { conversations } from '../data/conversations';

interface ConversationViewProps {
  onBack?: () => void;
}

export default function ConversationView({ onBack }: ConversationViewProps) {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);

  const levels: Level[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  const filteredConversations = conversations.filter(c => c.level === selectedLevel);

  const getLevelColor = (level: Level) => {
    switch (level) {
      case 'A1': return 'bg-emerald-500';
      case 'A2': return 'bg-teal-500';
      case 'B1': return 'bg-cyan-500';
      case 'B2': return 'bg-blue-500';
      case 'C1': return 'bg-indigo-500';
      case 'C2': return 'bg-violet-500';
      default: return 'bg-stone-500';
    }
  };

  const getLevelDesc = (level: Level) => {
    switch (level) {
      case 'A1': return 'Beginner (دەستپێک)';
      case 'A2': return 'Elementary (سەرەتایی)';
      case 'B1': return 'Intermediate (ناڤەندی)';
      case 'B2': return 'Upper Intermediate (ناڤەندییا بلند)';
      case 'C1': return 'Advanced (پیشکەفتی)';
      case 'C2': return 'Proficient (شارەزا)';
      default: return '';
    }
  };

  if (selectedConversation) {
    return (
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-6"
      >
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => setSelectedConversation(null)}
            className="p-3 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all text-stone-600 hover:text-[#e67e22]"
          >
            <ArrowLeft size={24} />
          </button>
          <div className="text-center">
            <h2 className="text-2xl font-black text-stone-800 kurdish-text">{selectedConversation.titleKurdish}</h2>
            <p className="text-stone-500 font-medium italic">{selectedConversation.title}</p>
          </div>
          <div className="flex gap-2">
            <button className="p-3 bg-white rounded-2xl shadow-sm hover:shadow-md text-stone-400 hover:text-rose-500 transition-all">
              <Heart size={20} />
            </button>
            <button className="p-3 bg-white rounded-2xl shadow-sm hover:shadow-md text-stone-400 hover:text-blue-500 transition-all">
              <Share2 size={20} />
            </button>
          </div>
        </div>

        {/* Dialogue View */}
        <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-stone-100 p-8 space-y-8">
          <div className="flex items-center gap-3 mb-4 text-[#e67e22]">
            <Headset size={24} />
            <span className="font-black text-lg kurdish-text">گفتوگۆ (Dialogue)</span>
          </div>

          <div className="space-y-6">
            {selectedConversation.dialogue.map((line, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`flex flex-col ${idx % 2 === 0 ? 'items-start' : 'items-end'}`}
              >
                <div className={`max-w-[85%] space-y-2 ${idx % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <span className="text-xs font-black text-stone-400 uppercase tracking-widest px-2">
                    {line.speaker}
                  </span>
                  <div className={`p-5 rounded-[2rem] shadow-sm ${
                    idx % 2 === 0 
                      ? 'bg-stone-50 rounded-tl-none border-stone-100 border' 
                      : 'bg-[#e67e22] text-white rounded-tr-none shadow-[#e67e22]/20'
                  }`}>
                    <p className="text-lg font-medium leading-relaxed">{line.text}</p>
                    <div className={`mt-2 pt-2 border-t kurdish-text font-bold text-sm ${
                      idx % 2 === 0 ? 'border-stone-200 text-stone-600' : 'border-white/20 text-white/90'
                    }`}>
                      {line.translation}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Vocabulary Section */}
          <div className="pt-12 border-t border-stone-100 mt-12">
            <div className="flex items-center gap-3 mb-6 text-[#e67e22]">
              <BookOpen size={24} />
              <span className="font-black text-lg kurdish-text">پەیڤێن سەرەکی (Key Vocabulary)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedConversation.vocabulary.map((item, idx) => (
                <div key={idx} className="bg-stone-50 p-4 rounded-2xl flex items-center justify-between hover:bg-stone-100 transition-colors cursor-default border border-stone-100">
                  <span className="font-black text-stone-700">{item.word}</span>
                  <span className="text-[#e67e22] font-bold kurdish-text">{item.translation}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (selectedLevel) {
    return (
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => setSelectedLevel(null)}
            className="p-3 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all text-stone-600 hover:text-[#e67e22]"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h2 className="text-3xl font-black text-stone-800 kurdish-text">Level {selectedLevel} Conversations</h2>
            <p className="text-stone-500 font-medium">{getLevelDesc(selectedLevel)}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredConversations.length > 0 ? (
            filteredConversations.map((conv) => (
              <motion.button
                key={conv.id}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedConversation(conv)}
                className="bg-white p-6 rounded-[2.5rem] shadow-lg hover:shadow-xl transition-all border border-stone-50 group text-left relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${getLevelColor(selectedLevel)} opacity-[0.03] -mr-8 -mt-8 rounded-full`} />
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className={`w-10 h-10 ${getLevelColor(selectedLevel)} rounded-xl flex items-center justify-center text-white mb-4`}>
                      <MessageCircle size={20} />
                    </div>
                    <h3 className="text-xl font-black text-stone-800 kurdish-text group-hover:text-[#e67e22] transition-colors">
                      {conv.titleKurdish}
                    </h3>
                    <p className="text-stone-400 font-medium italic">{conv.title}</p>
                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-stone-50">
                      <div className="flex items-center gap-1 text-xs font-bold text-stone-400">
                        <Users size={14} />
                        <span>{conv.dialogue.length} lines</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-bold text-stone-400">
                        <BookOpen size={14} />
                        <span>{conv.vocabulary.length} words</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="text-stone-300 group-hover:text-[#e67e22] transition-colors" />
                </div>
              </motion.button>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-stone-400">
              <Sparkles size={48} className="mx-auto mb-4 opacity-20" />
              <p className="kurdish-text font-bold text-xl">چاوەڕێ بە! کار ل سەر ڤان گفتوگۆیان دهێتە کرن...</p>
              <p className="text-sm italic">More conversations coming soon for this level.</p>
            </div>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative rounded-[3rem] overflow-hidden bg-[#e67e22] p-12 text-white shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-stone-900/10 rounded-full -ml-16 -mb-16 blur-3xl" />
        
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl font-black mb-6 leading-tight kurdish-text shadow-sm">
            فێربوونا ئنگلیزی ب رێکا گفتوگۆیان
          </h1>
          <p className="text-xl text-white/90 font-medium leading-relaxed kurdish-text">
            گەشتەکا خۆش د ناڤبەرا ٦ ئاستێن جۆدا دا، ٦٠٠ گفتوگۆ هەمی ب وەرگێڕانا کوردی (بادینی) و پەیڤێن سەرەکی.
          </p>
        </div>
      </div>

      {/* Levels Grid */}
      <div className="space-y-8">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-2xl font-black text-stone-800 kurdish-text">ئاستێن گفتوگۆیان (Levels)</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {levels.map((level) => (
            <motion.button
              key={level}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedLevel(level)}
              className="bg-white group p-8 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all border border-stone-50 text-center relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-2 ${getLevelColor(level)}`} />
              <div className={`w-20 h-20 mx-auto ${getLevelColor(level)} rounded-[2rem] flex items-center justify-center text-white text-3xl font-black mb-6 shadow-lg shadow-${level.toLowerCase()}-500/20`}>
                {level}
              </div>
              <h3 className="text-2xl font-black text-stone-800 mb-2 kurdish-text group-hover:text-[#e67e22] transition-colors">
                ئاستێ {level}
              </h3>
              <p className="text-stone-400 font-bold text-sm tracking-wide mb-6">
                {getLevelDesc(level)}
              </p>
              <div className="bg-stone-50 py-3 px-6 rounded-2xl inline-flex items-center gap-2 text-[#e67e22] font-black text-xs uppercase tracking-widest">
                <span>100 Conversations</span>
                <ChevronRight size={14} />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

    </div>
  );
}
