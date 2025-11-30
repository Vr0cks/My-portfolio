'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { AlertTriangle, Terminal, Home, RefreshCcw } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono flex flex-col items-center justify-center p-4 relative overflow-hidden selection:bg-red-500 selection:text-white">
      
      {/* 1. ARKA PLAN GÜRÜLTÜ EFEKTİ (Noise) */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
      
      {/* 2. ANA İÇERİK KUTUSU */}
      <div className="z-10 w-full max-w-lg relative">
        
        {/* Üstteki Kırmızı Hata Çubuğu */}
        <div className="bg-red-900/20 border border-red-500/50 p-4 rounded-t-lg flex items-center gap-3 animate-pulse">
            <AlertTriangle className="text-red-500" size={24} />
            <span className="text-red-500 font-bold tracking-widest">CRITICAL_PROCESS_DIED</span>
        </div>

        {/* Terminal Gövdesi */}
        <div className="bg-black/90 border-x border-b border-green-500/30 p-8 rounded-b-lg shadow-[0_0_50px_rgba(0,255,0,0.1)] backdrop-blur-md">
            
            {/* 404 Glitch Başlığı */}
            <div className="text-center mb-8 relative">
                <motion.h1 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-8xl font-black text-white tracking-tighter mix-blend-overlay opacity-80"
                >
                    404
                </motion.h1>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-8xl font-black text-green-500/20 blur-sm">404</span>
                </div>
            </div>

            {/* Hata Kodları */}
            <div className="space-y-3 font-mono text-sm mb-8 border-l-2 border-green-500/50 pl-4 py-2">
                <p className="text-gray-400">
                    <span className="text-green-500">&gt;</span> Error Code: <span className="text-red-400">PAGE_NOT_FOUND_EXCEPTION</span>
                </p>
                <p className="text-gray-400">
                    <span className="text-green-500">&gt;</span> Path: <span className="italic text-yellow-500">/undefined_coordinates</span>
                </p>
                <p className="text-gray-400">
                    <span className="text-green-500">&gt;</span> Status: <span className="text-red-400 animate-pulse">SYSTEM_HALTED</span>
                </p>
            </div>

            <p className="text-gray-500 text-xs mb-8 text-center">
                The requested URL was not found on this server. Maybe you are looking for the <span className="text-green-500 cursor-help" title="Try typing 'hell yeah' somewhere...">Secret Level</span>?
            </p>

            {/* Butonlar */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                    href="/" 
                    className="group flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-black font-bold rounded transition-all active:scale-95"
                >
                    <Home size={18} />
                    <span>FORCE_REBOOT</span>
                </Link>
                
                <button 
                    onClick={() => window.location.reload()}
                    className="flex items-center justify-center gap-2 px-6 py-3 border border-green-500/30 hover:border-green-500 text-green-500 hover:text-green-400 rounded transition-all active:scale-95"
                >
                    <RefreshCcw size={18} />
                    <span>RETRY</span>
                </button>
            </div>

        </div>
      </div>

      {/* Alt Footer Süslemesi */}
      <div className="absolute bottom-4 left-0 w-full text-center opacity-30 text-[10px]">
        MEMORY_DUMP: 0x0004592A // STACK_OVERFLOW
      </div>

    </div>
  );
}