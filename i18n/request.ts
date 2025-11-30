import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';
 
const locales = ['tr', 'en', 'de'];
 
export default getRequestConfig(async ({requestLocale}) => {
  // Bu satır önemli: Gelen locale isteğini alıyoruz
  let locale = await requestLocale;

  // Eğer locale gelmezse veya listede yoksa notFound (veya varsayılan dil)
  if (!locale || !locales.includes(locale as any)) {
    notFound();
  }
 
  return {
    locale, // <--- İŞTE EKSİK OLAN PARÇA BU! TypeScript bunu istiyor.
    messages: (await import(`../messages/${locale}.json`)).default
  };
});