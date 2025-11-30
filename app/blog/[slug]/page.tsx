// app/blog/[slug]/page.tsx
'use client';

import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Normalde burası veritabanından veya markdown dosyasından veri çeker.
  // Şimdilik statik bir şablon gösteriyoruz.
  
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      
      {/* Geri Dön Butonu */}
      <Link href="/" className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-12 group">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </Link>

      <article className="prose prose-invert prose-lg max-w-none">
        
        {/* Meta Bilgiler */}
        <div className="flex items-center gap-4 text-sm text-text-muted font-mono mb-8">
          <span className="flex items-center gap-1"><Calendar size={14}/> Nov 2024</span>
          <span className="flex items-center gap-1"><Clock size={14}/> 5 min read</span>
          <span className="text-primary">#Engineering</span>
        </div>

        {/* Başlık */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          The ROI of Clean Code: Why It's a Business Decision
        </h1>

        {/* İçerik (Örnek) */}
        <p className="text-text-muted leading-relaxed mb-6">
          Yazılım geliştirmede "hız" genellikle "kalite" ile karıştırılır. Projeyi bir an önce teslim etmek, çoğu zaman teknik borç (technical debt) yaratır. Ancak temiz kod (clean code), sadece estetik bir tercih değil, doğrudan şirketin kârlılığını etkileyen bir faktördür.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Okunabilirlik = Hız</h2>
        <p className="text-text-muted leading-relaxed mb-6">
          Kod bir kez yazılır, ama yüzlerce kez okunur. Spagetti koda sahip bir projeye yeni bir özellik eklemek günler alabilirken, modüler ve temiz bir mimaride bu süre saatlere düşer.
        </p>

        <div className="bg-surface border border-border p-6 rounded-lg my-8 font-mono text-sm text-gray-300">
          <p className="text-green-400">// Bad</p>
          <p>const d = new Date();</p>
          <br/>
          <p className="text-green-400">// Good</p>
          <p>const orderCreationDate = new Date();</p>
        </div>

        <p className="text-text-muted leading-relaxed">
          Sonuç olarak, temiz kod yazmak ilk başta yavaş gibi görünse de, projenin ömrü boyunca size zaman ve para kazandırır.
        </p>

      </article>
    </main>
  );
}