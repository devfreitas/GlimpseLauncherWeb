import { en } from './en';
import { pt } from './pt';

export const i18n = {
  en,
  pt
};

export type Lang = 'en' | 'pt';
export type Translation = typeof en;
