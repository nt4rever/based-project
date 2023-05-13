import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import COMMON_EN from '~/locales/en/common.json';
import COMMON_VI from '~/locales/vi/common.json';

export const locales = {
  en: 'English',
  vi: 'Tiếng Việt'
} as const;

export const resources = {
  en: {
    ...COMMON_EN
  },
  vi: {
    ...COMMON_VI
  }
} as const;

export const defaultNS = 'common';

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  ns: ['common'],
  fallbackLng: 'en',
  nsSeparator: '.',
  defaultNS,
  interpolation: {
    escapeValue: false
  }
});
