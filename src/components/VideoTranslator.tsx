import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Video, FileText, Upload, Download, 
  Loader2, Send, Trash2, Sparkles, 
  AlertCircle, CheckCircle2, Languages,
  FileCode, PlayCircle, FileVideo, Eye
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

export default function VideoTranslator() {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [translatedText, setTranslatedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const videoInputRef = useRef<HTMLInputElement>(null);

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 1024 * 1024 * 1024) {
      setError('قەبارێ ڤیدیۆیێ گەلەک یێ مەزنە. ژ کەرەما خۆ ڤیدیۆیەکا کێمتری ١ گێگابایت (1GB) بار بکە.');
      return;
    }

    setVideoFile(file);
    setVideoPreview(URL.createObjectURL(file));
    setIsFinished(false);
    setTranslatedText('');
    setError(null);
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = (reader.result as string).split(',')[1];
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const translateContent = async () => {
    if (!videoFile) return;

    setIsLoading(true);
    setError(null);
    setProgress(10);
    setIsFinished(false);
    setTranslatedText('');

    try {
      const apiKey = (import.meta.env.VITE_GEMINI_API_KEY as string) || 
                     (process.env.GEMINI_API_KEY as string) || 
                     '';
      
      if (!apiKey) {
        throw new Error('کلیلا وەرگێڕانێ (API Key) نەهاتیە دیتن.');
      }

      const ai = new GoogleGenAI({ apiKey });

      setProgress(30);
      const base64Data = await fileToBase64(videoFile);
      setProgress(50);

      const prompt = `You are a professional translator. 
        Listen to the audio in this video and translate the spoken English content into natural Badini Kurdish (Duhok/Zakho dialect).
        Provide the output as a clear, readable list of translated sentences or a summary of the dialogue.
        Do not include timestamps unless they are specifically requested.
        Use natural Badini Kurdish (e.g., use 'ئەز', 'دێ', 'من کر').`;

      const result = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        contents: [
          {
            parts: [
              { text: prompt },
              {
                inlineData: {
                  mimeType: videoFile.type,
                  data: base64Data,
                },
              },
            ],
          },
        ],
      });

      setProgress(90);
      const response = result.text;
      setTranslatedText(response || '');
      setProgress(100);
      setIsFinished(true);
    } catch (err: any) {
      console.error('Video translation error:', err);
      setError(err?.message || 'ئاریشەیەک هەبوو د وەرگێڕانێ دا.');
    } finally {
      setIsLoading(false);
    }
  };

  const clearAll = () => {
    setVideoFile(null);
    setVideoPreview(null);
    setTranslatedText('');
    setError(null);
    setProgress(0);
    setIsFinished(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-5xl mx-auto space-y-6"
    >
      {/* Header Card */}
      <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-stone-100">
        <div className="bg-gradient-to-r from-[#e67e22] to-[#d35400] p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-md">
                <Video size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-black kurdish-text">وەرگێڕێ ڤیدیۆیان</h2>
                <p className="text-white/80 kurdish-text">وەرگێڕانا ڤیدیۆیان بۆ زمانێ کوردی (بادینی)</p>
              </div>
            </div>
            <div className="flex gap-3">
              <input 
                type="file" 
                ref={videoInputRef} 
                onChange={handleVideoUpload} 
                accept="video/*" 
                className="hidden" 
              />
              <button 
                onClick={clearAll}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all text-white"
                title="Clear all"
              >
                <Trash2 size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Main Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2 text-stone-500 font-bold">
                  <FileVideo size={18} />
                  <span className="kurdish-text">ڤیدیۆیا ئنگلیزی (Video File)</span>
                </div>
              </div>
              
              <div className="w-full h-[400px] rounded-3xl border-2 border-dashed border-stone-200 bg-stone-50/30 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                {videoPreview ? (
                  <video 
                    src={videoPreview} 
                    controls 
                    className="max-w-full max-h-full rounded-2xl shadow-lg"
                  />
                ) : (
                  <div className="space-y-4">
                    <div className="p-6 bg-white rounded-full shadow-sm inline-block text-stone-300">
                      <FileVideo size={64} />
                    </div>
                    <div>
                      <p className="text-stone-500 font-bold kurdish-text">ڤیدیۆیا خۆ لێرە بار بکە</p>
                      <p className="text-xs text-stone-400 mt-1 kurdish-text">MP4, WebM (ماکسیمۆم ١ گێگابایت / 1GB)</p>
                    </div>
                    <button 
                      onClick={() => videoInputRef.current?.click()}
                      className="px-6 py-2 bg-[#e67e22] text-white rounded-xl text-sm font-bold hover:bg-[#d35400] transition-all kurdish-text"
                    >
                      هەلبژارتنا ڤیدیۆیێ
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Output Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2 text-[#e67e22] font-bold">
                  <Languages size={18} />
                  <span className="kurdish-text">وەرگێڕانا بادینی (Badini Kurdish)</span>
                </div>
                {isFinished && (
                  <div className="flex items-center gap-1 text-emerald-500 text-sm font-bold">
                    <CheckCircle2 size={16} />
                    <span className="kurdish-text">ب دوماهیک هات</span>
                  </div>
                )}
              </div>
              <div className="relative group">
                <textarea
                  readOnly
                  value={translatedText}
                  placeholder="وەرگێڕان دێ لێرە دیار بیت..."
                  className="w-full h-[400px] p-6 rounded-3xl border-2 border-stone-100 bg-white transition-all resize-none text-sm font-mono kurdish-text"
                  dir="rtl"
                />
                
                {isLoading && (
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] rounded-3xl flex flex-col items-center justify-center gap-4">
                    <div className="relative">
                      <Loader2 className="animate-spin text-[#e67e22]" size={48} />
                      <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[#e67e22]">
                        {progress}%
                      </div>
                    </div>
                    <div className="w-48 h-2 bg-stone-100 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-[#e67e22]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                      />
                    </div>
                    <p className="text-stone-600 font-bold kurdish-text">ڤیدیۆ دهێتە وەرگێڕان...</p>
                  </div>
                )}

                {!translatedText && !isLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-300 gap-3 pointer-events-none">
                    <Sparkles size={48} />
                    <p className="kurdish-text">چاوەڕێی وەرگێڕانێ بە</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex flex-col md:flex-row gap-4 pt-4">
            <button
              onClick={translateContent}
              disabled={isLoading || !videoFile}
              className={`flex-1 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all shadow-xl active:scale-[0.98] ${
                isLoading || !videoFile
                  ? 'bg-stone-100 text-stone-400 cursor-not-allowed' 
                  : 'bg-[#e67e22] text-white hover:bg-[#d35400] hover:shadow-[#e67e22]/30'
              }`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={24} />
                  <span className="kurdish-text">د وەرگێڕانێ دایە ({progress}%)</span>
                </>
              ) : (
                <>
                  <span className="kurdish-text">دەستپێکرنا وەرگێڕانێ</span>
                  <Send size={24} />
                </>
              )}
            </button>
          </div>

          {/* Error Message */}
          <AnimatePresence>
            {error && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-rose-50 border-2 border-rose-100 p-6 rounded-2xl flex items-center gap-4 text-rose-600 shadow-sm"
              >
                <AlertCircle size={32} />
                <div>
                  <h4 className="font-bold kurdish-text">خەلەتیەک هەبوو</h4>
                  <p className="text-sm kurdish-text">{error}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
