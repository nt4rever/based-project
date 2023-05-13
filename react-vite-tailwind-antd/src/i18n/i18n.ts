import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import COMMON_EN from '~/locales/en/common.json';
import DASHBOARD_EN from '~/locales/en/dashboard.json';
import COMMON_JP from '~/locales/jp/common.json';
import DASHBOARD_JP from '~/locales/jp/dashboard.json';
import COMMON_VI from '~/locales/vi/common.json';
import DASHBOARD_VI from '~/locales/vi/dashboard.json';

export const locales = {
  en: 'English',
  vi: 'Tiếng Việt',
  jp: '日本語'
} as const;

export const resources = {
  en: {
    ...COMMON_EN,
    ...DASHBOARD_EN
  },
  vi: {
    ...COMMON_VI,
    ...DASHBOARD_VI
  },
  jp: {
    ...COMMON_JP,
    ...DASHBOARD_JP
  }
} as const;

export const defaultNS = 'common';

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init({
  resources,
  lng: 'vi',
  ns: ['common', 'dashboard'],
  fallbackLng: 'en',
  nsSeparator: '.',
  defaultNS,
  interpolation: {
    escapeValue: false
  }
});
