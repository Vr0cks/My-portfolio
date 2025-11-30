// i18n.ts
import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['tr', 'en', 'de'];

export default getRequestConfig(async ({ locale }) => {
  // Eğer gelen dil listemizde yoksa 404 ver
  if (!locales.includes(locale as any)) notFound();

  return {
    // HATA DÜZELTME 1: locale'in kesinlikle bir string olduğunu söylüyoruz (as string)
    locale: locale as string,
    
    // Mesajları çekiyoruz
    messages: (await import(`./messages/${locale}.json`)).default
  };
});