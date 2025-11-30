import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css"; 
import { Providers } from '../providers'; // Yeni ekledik
import Header from '@/components/Header'; // Yeni ekledik
import SecretHint from '@/components/SecretHint';

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: '--font-jetbrains' });

export const metadata = {
  title: "Yiğit Canlı | Software Engineer",
  description: "Bridging business logic with scalable code.",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; 
};

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const { locale } = await params; 
  let messages;
  try {
    messages = await getMessages();
  } catch (error) {
    messages = {};
  }

  return (
    // 'suppressHydrationWarning' next-themes için gereklidir
    <html lang={locale} className={`${inter.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen selection:bg-blue-500/30">
        
        {/* Providers, tüm uygulamayı sarar ve temayı yönetir */}
        <Providers>
          
          {/* Mühendis Izgarası - Renge göre uyum sağlar */}
          <div className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none dark:opacity-[0.03]" 
               style={{ 
                 backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`, 
                 backgroundSize: '50px 50px' 
               }} 
          />
          
          <NextIntlClientProvider messages={messages} locale={locale}>
            {/* Header: Dil ve Tema Kontrolü */}
            <Header />
            
            {/* YENİ EKLENEN: Gizli İpucu Bildirimi (5dk sonra çıkar) */}
            <SecretHint />
            
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-24">
              {children}
            </div>
          </NextIntlClientProvider>

        </Providers>
      </body>
    </html>
  );
}