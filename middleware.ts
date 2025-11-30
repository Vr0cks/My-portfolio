import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // Desteklenen dillerin listesi
  locales: ['tr', 'en', 'de'],
 
  // Varsayılan dil
  defaultLocale: 'tr'
});
 
export const config = {
  // Sadece uluslararasılaştırma gereken yolları eşleştir
  matcher: ['/', '/(tr|en|de)/:path*']
};