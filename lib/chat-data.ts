// lib/chat-data.ts

interface ChatResponse {
  keywords: string[];
  response: string;
}

export const chatData: ChatResponse[] = [
  {
    keywords: ['merhaba', 'selam', 'hi', 'hello', 'merhabalar'],
    response: "Selam! Ben Terminal. Yiğit şu an kodların başında. Ona iletmemi istediğin bir şey varsa veya bilgi almak istersen buradayım. Başlamak için 'yardım' yazabilirsin."
  },
  {
    keywords: ['yetkinlik', 'stack', 'teknoloji', 'tech', 'framework', 'diller'],
    response: "Teknik açıdan Next.js 14, TypeScript ve Tailwind CSS'e yatırım yapıyorum. Bence en güçlü yanım; projeye baştan sona temiz ve ölçeklenebilir bir mimari kurma yeteneğim."
  },
  {
    keywords: ['neden ben', 'işe alım', 'hr', 'hire', 'farkı ne'],
    // MIS vurgusunu buraya taşıdık
    response: "Farkım şu: Ben sadece kod yazmam. Edindiğim MIS eğitimi sayesinde, yazdığım her satırın işinize ne kadar kazandıracağını analiz ederim. Teknik bilgi ve iş zekasını birleştiririm."
  },
  {
    keywords: ['mis', 'ybs', 'eğitim', 'universite'],
    // Burası detaylı kalmalı
    response: "THK Üniversitesi'nde Yönetim Bilişim Sistemleri (YBS) okuyorum. Bu disiplinlerarası eğitim, bir problemi sadece teknik açıdan değil, sistem analizi ve ticari değer açısından da çözmeme olanak tanır."
  },
  {
    keywords: ['izcilik', 'hobi', 'spor', 'kişisel', 'futbol', 'gamer'],
    // Daha coşkulu ve insancıl
    response: "İşte bu benim en sevdiğim kısım! Kod dışında, 14 yıllık izcilik geçmişim ve 8 yıl kalecilik tecrübem var. Şu an da üniversite Amerikan Futbolu takımındayım. Bu sporlar, baskı altında hızlı karar almayı, kriz yönetimini ve takım içinde merkezi rol oynamayı öğretti."
  },
  {
    keywords: ['projeler', 'portfolio', 'ne yaptın'],
    response: "Projelerim, temiz ve ölçeklenebilir yapılardır. Amacım, müşteriyi etkileyecek kusursuz bir ürünün yanında, gelecekte de kolayca geliştirilebilecek bir kod mirası bırakmaktır. VR0CKS Agency sitesi, son imzamdır."
  },
  {
    keywords: ['yardım', 'help', 'soru'],
    response: "Tabii! Hangi konuya odaklanmak istersin? Terminale 'neden ben', 'yetkinlik', 'eğitim' veya 'kişisel' yazmayı deneyebilirsin."
  }
];