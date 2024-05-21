// i18n.js
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next.use(initReactI18next).use(LanguageDetector).init({});

export default i18next;
