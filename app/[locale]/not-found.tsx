'use client';

import Link from 'next/link';
import { AlertTriangle, Home, RefreshCcw } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 relative font-mono text-center">
      
      {/* 404 Başlık */}
      <h1 className="text-9xl font-black text-[var(--foreground)] tracking-tighter opacity-20 select-none">
        404
      </h1>
      
      {/* Hata Kutusu */}
      <div className="z-10 -mt-12 bg-[var(--card-bg)] border border-[var(--card-border)] p-8 rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden">
        
        {/* Üstteki Kırmızı Şerit */}
        <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>

        <div className="flex justify-center mb-6">
          <div className="p-4 bg-red-500/10 rounded-full text-red-500 animate-pulse">
            <AlertTriangle size={32} />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[var(--card-fg)] mb-2">Sayfa Bulunamadı</h2>
        <p className="text-[var(--muted)] text-sm mb-8 leading-relaxed">
          Aradığın sayfa ya silindi, ya taşındı ya da hiç var olmadı. Belki de bir 
          <span className="text-primary font-bold cursor-help" title="secret?"> "easter egg" </span> 
          arıyordun?
        </p>

        <div className="flex gap-3 justify-center">
          <Link 
            href="/" 
            className="flex items-center gap-2 px-5 py-2.5 bg-[var(--foreground)] text-[var(--background)] rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
          >
            <Home size={16} /> Ana Sayfa
          </Link>
          
          <button 
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 px-5 py-2.5 border border-[var(--card-border)] text-[var(--card-fg)] rounded-lg font-bold text-sm hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors"
          >
            <RefreshCcw size={16} /> Yenile
          </button>
        </div>

        {/* Teknik Kod */}
        <div className="mt-8 pt-4 border-t border-[var(--card-border)] text-[10px] text-[var(--muted)] font-mono text-left">
          <p>&gt; Error: PAGE_NOT_FOUND</p>
          <p>&gt; Path: /unknown_coordinates</p>
          <p>&gt; Status: <span className="text-red-500">CRITICAL</span></p>
        </div>

      </div>
    </div>
  );
}