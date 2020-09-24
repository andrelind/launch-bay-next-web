// import { useSelector } from 'react-redux';
import { Language, Translation } from '../types';
// import { AppState } from '../types/state';

export const useLocalized = () => {
  // const language = useSelector((s: AppState) => s.app.user.language);
  return { t: localized('en'), c: cleaned };
};

export const cleaned = (s: string) => {
  return s?.replace(/ *\([^)]*\) */g, '') || '';
};

export const localized = (language: Language) => (
  translation?: Translation
) => {
  if (!translation) {
    return '';
  }

  return translation[language] || translation.en;
};
