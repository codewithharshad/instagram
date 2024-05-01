// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// const resources = {
//   en: {
//     translation: {
//       greeting: "Hello!",
//       intro: "Welcome to our website!"
//     }
//   },
//   fr: {
//     translation: {
//       greeting: "Bonjour!",
//       intro: "Bienvenue sur notre site web!"
//     }
//   }
// };

// i18n
//   .use(initReactI18next) // Passes i18n instance to react-i18next
//   .init({
//     resources,
//     lng: 'en', // Set default language (can be changed later)
//     fallbackLng: 'en', // Fallback to English if translation is missing
//     // Other options (interpolation, backend, etc.)
//   });

// export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import frTranslation from './locales/fr.json';

const resources = {
  en: {
    translation: enTranslation
  },
  fr: {
    translation: frTranslation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for React
    },
  });

export default i18n;
