'use client';

import { useEffect, useState } from 'react';
import { SiSpotify } from 'react-icons/si';
import Image from 'next/image';
import Link from 'next/link';

export default function SpotifyCard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/spotify');
        
        // --- DÜZELTME BURADA ---
        // Eğer Spotify 204 (İçerik Yok) dönerse veya bir hata varsa JSON çevirmeyi deneME.
        if (res.status === 204 || !res.ok) {
            setLoading(false);
            return; // Fonksiyondan çık, hata verme.
        }
        // -----------------------

        const json = await res.json();
        setData(json);
      } catch (e) {
        console.error("Spotify Fetch Error:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Link 
      href={data?.songUrl || '#'} 
      target="_blank"
      className="relative col-span-1 row-span-1 h-full min-h-[280px] w-full flex flex-col justify-between overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 group shadow-lg transition-transform hover:scale-[1.02]"
    >
      {/* --- ARKA PLAN RESMİ (ALBÜM KAPAĞI) --- */}
      {data?.albumImageUrl ? (
        <>
          <Image 
            src={data.albumImageUrl} 
            alt={data.title} 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-110 z-0 grayscale-[20%] group-hover:grayscale-0"
          />
          {/* Okunabilirlik için Siyah Gradyan Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
        </>
      ) : (
        // Şarkı çalmıyorsa varsayılan koyu gri arka plan
        <div className="absolute inset-0 bg-[#121212] z-0" />
      )}

      {/* --- ÜST KISIM (İkon ve Ekolayzer) --- */}
      <div className="relative z-20 p-5 flex justify-between items-start">
        {/* Spotify Logosu */}
        <div className="bg-black/30 backdrop-blur-md p-2 rounded-full border border-white/10 text-[#1DB954]">
           <SiSpotify size={20} />
        </div>

        {/* Ekolayzer Animasyonu (Sadece çalarken görünür) */}
        {data?.isPlaying && (
          <div className="flex items-center gap-1 bg-black/30 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/10">
             <span className="w-1 h-3 bg-[#1DB954] animate-music-bar-1 rounded-full"/>
             <span className="w-1 h-4 bg-[#1DB954] animate-music-bar-2 rounded-full"/>
             <span className="w-1 h-2 bg-[#1DB954] animate-music-bar-3 rounded-full"/>
          </div>
        )}
      </div>

      {/* --- ALT KISIM (Şarkı Bilgileri) --- */}
      <div className="relative z-20 p-5 mt-auto">
        <div className="flex flex-col gap-1">
          {data?.isPlaying ? (
            <>
              <span className="font-bold text-white text-xl md:text-2xl leading-tight line-clamp-2 drop-shadow-md">
                {data.title}
              </span>
              <span className="text-white/80 text-sm font-medium drop-shadow-md">
                {data.artist}
              </span>
            </>
          ) : (
            <>
              <span className="font-bold text-white text-lg">Offline</span>
              <span className="text-white/60 text-sm">Spotify Currently Paused</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}