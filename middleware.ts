import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'br'],

  defaultLocale: 'en'
});

export const config = {
  matcher: ['/', '/(br|en)/:path*']
};