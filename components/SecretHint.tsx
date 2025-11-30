'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Sparkles, X } from 'lucide-react';

export default function SecretHint() {
  const t = useTranslations('SecretHint');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 5 Dakika = 300.000 milisaniye
    // Test etmek için 5000 (5 saniye) 
    const timeToWait = 300000; 

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, timeToWait);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="fixed top-6 left-0 right-0 z-[100] flex justify-center pointer-events-none"
        >
          <div className="bg-black/80 backdrop-blur-md border border-green-500/50 text-green-400 px-6 py-4 rounded-full shadow-[0_0_20px_rgba(0,255,0,0.2)] flex items-center gap-4 pointer-events-auto">
            
            <div className="p-2 bg-green-500/20 rounded-full animate-pulse">
                <Sparkles size={18} />
            </div>
            
            <span className="font-mono text-sm font-bold">
              {t('message')}
            </span>

            <button 
              onClick={() => setIsVisible(false)}
              className="ml-2 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}