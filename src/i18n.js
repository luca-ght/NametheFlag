import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import {languages} from "./pages/Language.jsx";

if (localStorage.getItem('language') === null)
    localStorage.setItem('language', navigator.language.split('-')[0]);

i18n.use(initReactI18next).use(LanguageDetector).use(HttpApi).init({
    supportedLngs: Object.keys(languages),
    fallbackLng: 'de',
    backend: {
        loadPath: '/locales/{{lng}}.json'
    },
    detection: {
        order: ['localStorage'],
        lookupLocalStorage: 'language'
    }
});

export default i18n;