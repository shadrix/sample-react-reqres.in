import i18n from 'i18next';
import homePage from './en/homePage.json';
import login from './en/login.json';
import user from './en/user.json';
import { initReactI18next } from 'react-i18next';

export const resources = {
  en: {
    homePage,
    login,
    user
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  ns: ['homePage', 'login', 'user'],
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});