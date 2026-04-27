import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Languages, ArrowRightLeft, Copy, Volume2, 
  Loader2, Send, Trash2, Sparkles, AlertCircle 
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface TranslatorProps {
  onSpeak: (text: string) => void;
}

export default function Translator({ onSpeak }: TranslatorProps) {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sourceLang, setSourceLang] = useState<'en' | 'ku'>('en');
  const [isCopied, setIsCopied] = useState(false);

  const translateText = async () => {
    if (!inputText.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      // Try to get API key from multiple possible sources
      const apiKey = (import.meta.env.VITE_GEMINI_API_KEY as string) || 
                     (process.env.GEMINI_API_KEY as string) || 
                     '';
      
      if (!apiKey || apiKey === 'undefined' || apiKey === '') {
        setError('کلیلا وەرگێڕانێ (API Key) نەهاتیە دیتن. هیڤیە ل سەر Vercel کلیلەکێ ب ناڤێ VITE_GEMINI_API_KEY زێدە بکە.');
        setIsLoading(false);
        return;
      }

      const ai = new GoogleGenAI({ apiKey });
      const model = "gemini-1.5-flash";
      
      const prompt = sourceLang === 'en' 
        ? `You are a professional translator specializing in the Badini Kurdish dialect (as spoken in Duhok and Zakho, Iraq). 
           Translate the following English text to strictly Badini Kurdish. 
           Avoid generic Kurmanji or other dialects. Use local vocabulary (e.g., use 'ئەز' correctly, use 'دێ' for future, etc.).
           Provide ONLY the translated text, no explanations or extra words.
           Text to translate: "${inputText}"`
        : `You are a professional translator. Translate the following Badini Kurdish text (Duhok/Zakho dialect) to clear, natural English.
           Provide ONLY the translated text.
           Text to translate: "${inputText}"`;

      const result = await ai.models.generateContent({
        model,
        contents: [{ parts: [{ text: prompt }] }],
        config: {
          temperature: 0.1, // Lower temperature for more consistent and faster results
        }
      });

      const text = result.text;
      
      if (!text) {
        throw new Error('چ ئەنجام ژ ژیرییا دەستکرد نەهاتن.');
      }

      setTranslatedText(text.trim());
    } catch (err: any) {
      console.error('Translation error:', err);
      const msg = err?.message || '';
      if (msg.includes('API_KEY_INVALID')) {
        setError('کلیلا (API Key) یا وەرگێڕانێ خەلەتە. هیڤیە پشکنینێ بکە.');
      } else if (msg.includes('quota') || msg.includes('429')) {
        setError('ڕێژەیا وەرگێڕانێ ب دوماهیک هات. هیڤیە پاشتر هەول بدە.');
      } else {
        setError(`ببورە، ئاریشەیەک هەبوو: ${msg || 'جارەکا دی هەول بدە'}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const swapLanguages = () => {
    setSourceLang(prev => prev === 'en' ? 'ku' : 'en');
    setInputText(translatedText);
    setTranslatedText(inputText);
  };

  const copyToClipboard = () => {
    if (!translatedText) return;
    navigator.clipboard.writeText(translatedText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const clearAll = () => {
    setInputText('');
    setTranslatedText('');
    setError(null);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-100">
        {/* Header */}
        <div className="bg-[#2c3e50] p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-xl">
              <Languages size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold">وەرگێڕێ زیرەک</h2>
              <p className="text-xs text-white/60">English ↔ Badini Kurdish</p>
            </div>
          </div>
          <button 
            onClick={clearAll}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/80 hover:text-white"
            title="Clear all"
          >
            <Trash2 size={20} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Language Selector */}
          <div className="flex items-center justify-center gap-4 bg-stone-50 p-2 rounded-2xl border border-stone-100">
            <div className={`flex-1 text-center py-2 rounded-xl font-medium transition-all ${sourceLang === 'en' ? 'bg-white shadow-sm text-[#2980b9]' : 'text-stone-400'}`}>
              {sourceLang === 'en' ? 'English' : 'Badini Kurdish'}
            </div>
            
            <button 
              onClick={swapLanguages}
              className="p-3 bg-[#2980b9] text-white rounded-full hover:rotate-180 transition-all duration-500 shadow-md active:scale-95"
            >
              <ArrowRightLeft size={20} />
            </button>

            <div className={`flex-1 text-center py-2 rounded-xl font-medium transition-all ${sourceLang === 'ku' ? 'bg-white shadow-sm text-[#2980b9]' : 'text-stone-400'}`}>
              {sourceLang === 'ku' ? 'English' : 'Badini Kurdish'}
            </div>
          </div>

          {/* Input Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Source Input */}
            <div className="relative group">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={sourceLang === 'en' ? "Type English text here..." : "نڤیسینا کوردی لێرە بنڤیسە..."}
                className={`w-full h-48 p-5 rounded-2xl border-2 border-stone-100 focus:border-[#2980b9] focus:ring-0 transition-all resize-none text-lg ${sourceLang === 'en' ? 'english-text' : 'kurdish-text'}`}
                dir={sourceLang === 'en' ? 'ltr' : 'rtl'}
              />
              <div className="absolute bottom-4 right-4 text-stone-300 text-sm">
                {inputText.length} chars
              </div>
            </div>

            {/* Translation Output */}
            <div className="relative group">
              <div 
                className={`w-full h-48 p-5 rounded-2xl border-2 border-stone-100 bg-stone-50/50 transition-all overflow-y-auto text-lg ${sourceLang === 'ku' ? 'english-text' : 'kurdish-text'} ${!translatedText && 'flex items-center justify-center'}`}
                dir={sourceLang === 'ku' ? 'ltr' : 'rtl'}
              >
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div 
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center gap-3 text-[#2980b9]"
                    >
                      <Loader2 className="animate-spin" size={32} />
                      <span className="text-sm font-medium">د وەرگێڕانێ دایە...</span>
                    </motion.div>
                  ) : translatedText ? (
                    <motion.div 
                      key="result"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="h-full"
                    >
                      {translatedText}
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-stone-300 flex flex-col items-center gap-2"
                    >
                      <Sparkles size={32} />
                      <span className="text-sm">ئەنجام دێ لێرە دیار بیت</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Action Buttons for Result */}
              {translatedText && !isLoading && (
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <button 
                    onClick={copyToClipboard}
                    className={`p-2 rounded-lg transition-all ${isCopied ? 'bg-emerald-500 text-white' : 'bg-white text-stone-500 hover:text-[#2980b9] shadow-sm'}`}
                    title="Copy"
                  >
                    <Copy size={18} />
                  </button>
                  <button 
                    onClick={() => onSpeak(translatedText)}
                    className="p-2 bg-white text-stone-500 hover:text-[#2980b9] rounded-lg shadow-sm transition-all"
                    title="Listen"
                  >
                    <Volume2 size={18} />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Error Message */}
          <AnimatePresence>
            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-rose-50 border border-rose-100 p-4 rounded-xl flex items-center gap-3 text-rose-600"
              >
                <AlertCircle size={20} />
                <p className="text-sm font-medium">{error}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Translate Button */}
          <button
            onClick={translateText}
            disabled={isLoading || !inputText.trim()}
            className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg active:scale-[0.98] ${
              isLoading || !inputText.trim() 
                ? 'bg-stone-200 text-stone-400 cursor-not-allowed shadow-none' 
                : 'bg-[#2980b9] text-white hover:bg-[#3498db] hover:shadow-[#2980b9]/30'
            }`}
          >
            {isLoading ? (
              <Loader2 className="animate-spin" size={24} />
            ) : (
              <>
                <span>وەرگێڕان</span>
                <Send size={20} />
              </>
            )}
          </button>
        </div>

        {/* Footer Info */}
        <div className="bg-stone-50 px-6 py-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
          <div className="flex items-center gap-1">
            <Sparkles size={12} className="text-[#2980b9]" />
            <span>Powered by Gemini AI</span>
          </div>
          <span>باشترین وەرگێڕان بۆ دیالێکتا بادینی</span>
        </div>
      </div>
    </motion.div>
  );
}
