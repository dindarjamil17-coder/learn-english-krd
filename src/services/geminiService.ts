import { GoogleGenAI, Type } from "@google/genai";

let aiInstance: GoogleGenAI | null = null;

function getAI() {
  if (!aiInstance) {
    // Check both process.env (for AI Studio) and import.meta.env (for Vite/Netlify)
    // In Vite, process.env.GEMINI_API_KEY is replaced via 'define' in vite.config.ts
    const apiKey = process.env.GEMINI_API_KEY || (import.meta as any).env?.VITE_GEMINI_API_KEY;
    
    if (!apiKey) {
      throw new Error("MISSING_API_KEY");
    }
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
}

export interface WordData {
  word: string;
  pronunciation: string;
  meaning: string;
  definition: string;
  definitionEnglish?: string;
  exampleEnglish: string;
  exampleKurdish?: string;
}

export async function generateNewWord(level: string): Promise<WordData> {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Generate a new English word for level ${level} with Kurdish (Badini/Kurmanji) translation.`,
    config: {
      systemInstruction: `You are an English teacher for Kurdish speakers. 
      Provide a word suitable for the given CEFR level (A1, A2, B1, B2, C1, or C2).
      The output must be in JSON format.
      
      CRITICAL: The Kurdish dialect MUST be Badini (Duhok/Zakho style). 
      - Use "کرن" instead of "کردن".
      - Use "دێ" for future tense.
      - Use "من دڤێت" instead of "من دەوێت".
      - Ensure the vocabulary and grammar are strictly Badini.
      - If a direct Badini word is not available, use a common Kurdish word that Badini speakers understand (Sorani fallback is acceptable only if no Badini equivalent exists).
      
      Fields:
      - word: The English word.
      - pronunciation: Kurdish phonetic spelling of the English pronunciation (e.g., for "Apple" use "ئەپڵ").
      - meaning: A concise Kurdish (Badini) translation of the word.
      - definition: A clear definition in Kurdish (Badini). This MUST be in Kurdish.
      - definitionEnglish: A simple definition in English.
      - exampleEnglish: A clear example sentence in English.
      - exampleKurdish: The Kurdish (Badini) translation of the example sentence.`,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          word: { type: Type.STRING },
          pronunciation: { type: Type.STRING },
          meaning: { type: Type.STRING },
          definition: { type: Type.STRING },
          definitionEnglish: { type: Type.STRING },
          exampleEnglish: { type: Type.STRING },
          exampleKurdish: { type: Type.STRING },
        },
        required: ["word", "pronunciation", "meaning", "definition", "definitionEnglish", "exampleEnglish", "exampleKurdish"],
      },
    },
  });

  return JSON.parse(response.text);
}

export async function translateText(text: string, sourceLang: 'en' | 'ku', targetLang: 'en' | 'ku'): Promise<string> {
  const ai = getAI();
  const sourceName = sourceLang === 'en' ? 'English' : 'Kurdish (Badini/Kurmanji)';
  const targetName = targetLang === 'en' ? 'English' : 'Kurdish (Badini/Kurmanji)';
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Translate the following ${sourceName} text to ${targetName}: "${text}"`,
    config: {
      systemInstruction: `You are a professional translator specializing in English and the Badini (Duhok/Zakho) dialect of Kurdish.
      ${targetLang === 'ku' ? `
      - Use "کرن" instead of "کردن".
      - Use "دێ" for future tense.
      - Use "من دڤێت" instead of "من دەوێت".
      - Ensure the vocabulary and grammar are strictly Badini.
      ` : ''}
      - The output should ONLY be the translated text, no explanations or extra characters.`,
    },
  });

  return response.text || "Error in translation";
}

export async function translateToBadini(text: string): Promise<string> {
  return translateText(text, 'en', 'ku');
}

export type VoiceName = 'Kore' | 'Puck' | 'Zephyr' | 'Fenrir' | 'Charon';

export async function generateSpeech(
  text: string, 
  voiceName: VoiceName = 'Kore', 
  speed: 'normal' | 'slow' = 'normal'
): Promise<string> {
  const ai = getAI();
  const prompt = speed === 'slow' ? `Say slowly: ${text}` : `Say: ${text}`;
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Audio) {
      throw new Error("No audio data in response");
    }
    return base64Audio;
  } catch (error: any) {
    if (error?.message?.includes('429') || error?.status === 'RESOURCE_EXHAUSTED') {
      console.warn("Gemini API Quota Exceeded (429). Falling back to local speech synthesis.");
    }
    throw error;
  }
}
