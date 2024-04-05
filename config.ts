import {Pathnames} from 'next-intl/navigation';

export const locales = ['en', 'br'] as const;

export const pathnames = {
  '/': '/#home',
  '/#about': {
    en: '/#about',
    br: '/#sobre'
  }
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;