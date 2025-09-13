import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en/translation.json';
import plTranslation from './locales/pl/translation.json';

const resources = {
    en: {
        translation: enTranslation,
    },
    pl: {
        translation: plTranslation,
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        debug: false,

        detection: {
            order: ['localStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage'],
        },

        interpolation: {
            escapeValue: false, // React already does escaping
        },
    });

export default i18n;
