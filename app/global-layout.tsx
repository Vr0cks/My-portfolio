import type { Metadata } from "next";
// Fontları Google'dan çekiyoruz
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Font Ayarları
const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-inter' 
});

const jetbrains = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: '--font-jetbrains' 
});

export const metadata: Metadata = {
  title: "Yiğit Canlı | Software Engineer",
  description: "Bridging business logic with scalable code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-background text-text-main antialiased min-h-screen">
        
        {/* --- TEKNİK IZGARA (GRID) ARKA PLANI --- */}
        {/* Çok silik bir kareli defter deseni, mühendislik hissi verir */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" 
             style={{ 
               backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, 
               backgroundSize: '40px 40px' 
             }} 
        />
        
        {/* İçerik */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
          {children}
        </div>

      </body>
    </html>
  );
}