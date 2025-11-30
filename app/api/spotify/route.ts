import { getNowPlaying } from '@/lib/spotify';
import { NextResponse } from 'next/server';

export async function GET() {
  // 1. Spotify'dan veriyi iste
  const response = await getNowPlaying();

  // 2. Eğer şarkı çalmıyorsa veya hata varsa boş dön
  if (response.status === 204 || response.status > 400) {
    return NextResponse.json({ isPlaying: false });
  }

  const song = await response.json();

  // 3. Veri boşsa yine boş dön
  if (song.item === null) {
    return NextResponse.json({ isPlaying: false });
  }

  // 4. Verileri ayıkla
  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist: any) => _artist.name).join(', ');
  const songUrl = song.item.external_urls.spotify;
  
  // --- EKLENEN SATIR BURASI (Albüm Resmi) ---
  const albumImageUrl = song.item.album.images[0].url; 

  // 5. Ön yüze (Frontend) gönder
  return NextResponse.json({
    isPlaying,
    title,
    artist,
    songUrl,
    albumImageUrl, // Bunu da pakete ekledik
  });
}