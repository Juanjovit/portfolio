import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    detection: {
      order: [
        'querystring',
        'cookie',
        'localStorage',
        'sessionStorage',
        'navigator',
        'htmlTag',
      ],
      caches: ['localStorage', 'cookie'],
    },
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/locales/translations/{{lng}}.json`,
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
