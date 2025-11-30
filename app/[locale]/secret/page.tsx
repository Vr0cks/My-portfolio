'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Lock, Unlock, AlertTriangle } from 'lucide-react';

export default function SecretPage() {
  const [input, setInput] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const [error, setError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const correctPassword = "hell yeah"; // Şifremiz bu!

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toLowerCase().trim() === correctPassword) {
      setAccessGranted(true);
      setError(false);
    } else {
      setError(true);
      setInput('');
      setTimeout(() => setError(false), 2000);
    }
  };

  // Erişim sağlandığında videoyu başlat
  useEffect(() => {
    if (accessGranted && videoRef.current) {
      videoRef.current.volume = 1.0; // Sesi fulle
      videoRef.current.play().catch(e => console.log("Otomatik oynatma tarayıcı tarafından engellendi, tıklama gerekebilir.", e));
    }
  }, [accessGranted]);

  return (
    <main className="h-screen w-full bg-black text-green-500 font-mono overflow-hidden relative flex flex-col items-center justify-center selection:bg-green-500 selection:text-black">
      
      {/* CRT SCANLINE EFFECT (Eski monitör havası) */}
      <div className="absolute inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

      <AnimatePresence>
        {!accessGranted ? (
          /* --- AŞAMA 1: GİRİŞ EKRANI --- */
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
            className="z-10 w-full max-w-md p-4"
          >
            <div className="mb-8 text-center space-y-4">
              <AlertTriangle className="w-16 h-16 mx-auto text-red-500 animate-pulse" />
              <h1 className="text-2xl font-bold tracking-widest text-red-500">RESTRICTED AREA</h1>
              <p className="text-xs text-green-400 opacity-70">
                SYSTEM KERNEL: <span className="animate-pulse">WAITING FOR INPUT...</span>
              </p>
            </div>

            <div className="border border-green-500/30 bg-black/50 p-8 rounded-sm shadow-[0_0_20px_rgba(0,255,0,0.1)]">
              <p className="mb-4 text-sm typing-effect">
                &gt; To initiate "Protocol Masculinity", enter the passphrase:
              </p>
              
              <form onSubmit={handleSubmit} className="relative">
                <span className="absolute left-0 top-2.5 text-green-500">&gt;</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-green-500/50 p-2 pl-6 focus:outline-none focus:border-green-400 text-xl font-bold uppercase placeholder-green-800"
                  placeholder="ACCESS CODE"
                  autoFocus
                />
                <button type="submit" className="hidden">Submit</button>
              </form>

              {error && (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="mt-4 text-red-500 text-xs font-bold flex items-center gap-2"
                >
                  <Lock size={12} /> ACCESS DENIED. YOU ARE NOT READY.
                </motion.div>
              )}
            </div>
            
            <div className="mt-12 text-center text-[10px] opacity-30">
              ID: DEV-GEN-Z // STATUS: LOCKED
            </div>
          </motion.div>
        ) : (
          /* --- AŞAMA 2: VIDEO (HELL YEAH) - TAM EKRAN FİX --- */
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center w-screen h-screen overflow-hidden"
        >
          {/* Video: object-cover ile ekranı tamamen doldurur */}
          <video 
            ref={videoRef}
            src="/videos/hellyeah.mp4" 
            className="absolute top-0 left-0 w-full h-full object-cover"
            controls={false} 
            playsInline
          />
          
          {/* Yazı Katmanı */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
             <motion.h1 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="text-6xl md:text-9xl font-black text-white italic tracking-tighter uppercase mix-blend-overlay opacity-60 text-center"
            >
              
            </motion.h1>
          </div>

          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4 }} 
              className="absolute top-10 right-10 z-20 cursor-pointer pointer-events-auto"
          >
              <a href="/" className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-xs hover:bg-white hover:text-black transition-all">
                  RETURN TO REALITY
              </a>
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}