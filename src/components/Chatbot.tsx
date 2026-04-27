import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Trash2, Loader2, Volume2, VolumeX } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export const Chatbot: React.FC = () => {
  console.log('Chatbot component rendering');
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem('chat_history');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.map((m: any) => ({ ...m, timestamp: new Date(m.timestamp) }));
      } catch (e) {
        return [];
      }
    }
    return [{
      role: 'bot',
      text: 'سڵاڤ! ئەز ڕۆبۆتێ تە یێ زیرەکم. تو دشێی ب زمانێ ئنگلیزی یان بادینی دگەل من باخڤی. ئەز دێ ب بادینی بەرسڤا تە دەم.',
      timestamp: new Date()
    }];
  });
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem('chat_history', JSON.stringify(messages));
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const stopAudio = () => {
    window.speechSynthesis.cancel();
    setPlayingAudio(null);
  };

  const playAudio = (text: string) => {
    if (playingAudio === text) {
      stopAudio();
      return;
    }
    stopAudio();
    setPlayingAudio(text);
    const utterance = new SpeechSynthesisUtterance(text);
    // Note: Kurdish is not natively supported by most TTS, but we can try 'ku' or default
    utterance.lang = 'ku-TR'; 
    utterance.rate = 0.6;
    utterance.onend = () => setPlayingAudio(null);
    utterance.onerror = () => setPlayingAudio(null);
    window.speechSynthesis.speak(utterance);
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('API Key missing');
      }

      const ai = new GoogleGenAI({ apiKey });
      const model = "gemini-1.5-flash";
      
      const systemInstruction = `You are a helpful AI assistant that speaks strictly in the Badini Kurdish dialect (as spoken in Duhok and Zakho, Iraq). 
      Your name is "ڕۆبۆتێ زیرەک" (Smart Robot). 
      Always respond in Badini Kurdish. 
      Be friendly, encouraging, and helpful. 
      If the user speaks English, you can translate or explain things, but your main response should be in Badini.
      Avoid generic Kurmanji or Sorani. Use local Badini words like 'ئەز', 'دێ', 'من دڤێت', etc.`;

      const chat = ai.chats.create({
        model,
        config: {
          systemInstruction,
        },
      });

      // We send the whole history for context
      const history = messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
      }));

      const response = await ai.models.generateContent({
        model,
        contents: [
          ...history,
          { role: 'user', parts: [{ text: input }] }
        ],
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      const botMessage: Message = {
        role: 'bot',
        text: response.text || 'ببورە، من نەشیا بەرسڤێ بدەم.',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat Error:', error);
      const errorMessage: Message = {
        role: 'bot',
        text: 'ببورە، ئاریشەیەک چێبوو. هیڤیە کلیلێ (API Key) یان ئینتەرنێتێ تاقی بکە.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([{
      role: 'bot',
      text: 'سڵاڤ! ئەز ڕۆبۆتێ تە یێ زیرەکم. تو دشێی ب زمانێ ئنگلیزی یان بادینی دگەل من باخڤی. ئەز دێ ب بادینی بەرسڤا تە دەم.',
      timestamp: new Date()
    }]);
    localStorage.removeItem('chat_history');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-2xl border border-stone-100 overflow-hidden flex flex-col h-[700px] min-h-[60vh] relative z-10"
    >
      {/* Decorative Background for Chat */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0">
        <Bot className="absolute -top-10 -left-10 w-60 h-60 rotate-12" />
        <Send className="absolute -bottom-10 -right-10 w-60 h-60 -rotate-12" />
      </div>

      {/* Chat Header */}
      <div className="bg-gradient-to-r from-[#2c3e50] to-[#34495e] p-4 text-white flex items-center justify-between relative z-10 shadow-lg border-b border-white/10">
        <div className="flex items-center gap-3 text-right">
          <div className="bg-white/10 p-2 rounded-xl">
            <Bot size={24} className="text-[#f1c40f]" />
          </div>
          <div className="text-right">
            <h2 className="text-lg font-black kurdish-text">ڕۆبۆتێ زیرەک</h2>
            <p className="text-stone-400 text-[10px] kurdish-text">هەمیشە بەرهەڤە بۆ هاریکاریێ</p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-stone-50/50 relative z-10 scrollbar-thin scrollbar-thumb-stone-200">
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm ${
                msg.role === 'user' ? 'bg-gradient-to-br from-[#e67e22] to-[#d35400] text-white' : 'bg-white border border-stone-200 text-[#2c3e50]'
              }`}>
                {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
              </div>
              <div className={`p-4 rounded-2xl shadow-sm relative group transition-all ${
                msg.role === 'user' 
                ? 'bg-[#2c3e50] text-white rounded-tr-none' 
                : 'bg-white text-stone-800 border border-stone-100 rounded-tl-none'
              }`}>
                <p className={`text-base leading-relaxed font-medium ${msg.role === 'bot' ? 'kurdish-text' : ''}`}>
                  {msg.text}
                </p>
                <div className="flex items-center justify-between mt-2 gap-4">
                  <span className="text-[10px] opacity-40 font-mono">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                  {msg.role === 'bot' && (
                    <button 
                      onClick={() => playAudio(msg.text)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-stone-100 rounded-lg text-[#2c3e50]"
                      title="Listen"
                    >
                      {playingAudio === msg.text ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white p-3 rounded-2xl border border-stone-100 flex items-center gap-2 shadow-sm">
              <Loader2 className="w-4 h-4 animate-spin text-[#2c3e50]" />
              <span className="text-xs text-stone-400 kurdish-text">ڕۆبۆت یێ هزر دکەت...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-stone-100 relative z-10">
        <div className="relative flex items-center gap-3 max-w-4xl mx-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={clearChat}
            className="bg-rose-50 text-rose-600 p-3 rounded-xl hover:bg-rose-100 transition-all border border-rose-200 flex items-center justify-center group"
            title="Clear Chat"
          >
            <Trash2 size={20} className="group-hover:rotate-12 transition-transform" />
          </motion.button>

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="لێرە بنووسە..."
            className="flex-1 bg-stone-50 border border-stone-200 rounded-2xl py-3 px-5 text-base text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#2c3e50] focus:ring-4 focus:ring-[#2c3e50]/5 transition-all kurdish-text"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="bg-[#2c3e50] text-white p-3 rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <Send size={20} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Chatbot;
