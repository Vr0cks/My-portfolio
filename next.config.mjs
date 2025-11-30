import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin(
  './i18n/request.ts'
);
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // --- YENİ EKLENEN KISIM BAŞLANGICI ---
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co', // Spotify sunucusuna güveniyoruz
      },
    ],
  },
  // --- YENİ EKLENEN KISIM BİTİŞİ ---
};
 
export default withNextIntl(nextConfig);