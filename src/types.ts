import { WordData } from './services/geminiService';

export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export type ViewMode = 'list' | 'quiz' | 'books' | 'phrasal' | 'idioms' | 'quotes' | 'translator';

export interface WordEntry extends WordData {
  id: string | number;
}
