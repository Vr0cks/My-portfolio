'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Send, Terminal, XCircle } from 'lucide-react';
import { useTranslations } from 'next-intl'; // Çeviri kancası

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

interface ChatIntent {
    keywords: string[];
    response: string;
}

export default function Chatbot() {
  const t = useTranslations('Chatbot'); // JSON'daki 'Chatbot' kısmını al
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 
  
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  // Terminal açıldığında karşılama mesajı (Dile göre değişir)
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          { id: 1, text: t('welcome'), sender: 'bot' },
        ]);
      }, 500);
    }
  }, [isOpen, messages.length, t]);

  const getBotResponse = (userText: string) => {
    const lowerText = userText.toLowerCase().trim();
    
    // JSON'dan veri dizisini ham (raw) olarak çekiyoruz
    const intents = t.raw('data') as ChatIntent[];
    
    const foundResponse = intents.find(item => 
      item.keywords.some(keyword => lowerText.includes(keyword))
    );

    const responseText = foundResponse 
      ? foundResponse.response
      : t('fallback');
      
    setIsTyping(true);
    
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { id: Date.now() + 2, text: responseText, sender: 'bot' },
      ]);
      setIsTyping(false);
    }, 1500); 
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const newUserMessage: Message = { id: Date.now(), text: input.trim(), sender: 'user' };
    setMessages(prev => [...prev, newUserMessage]);
    
    getBotResponse(input);
    setInput('');
  };

  return (
    <div className="fixed bottom-0 right-0 m-4 z-50">
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ duration: 0.2 }}
              className="bg-zinc-900 border border-zinc-700 rounded-lg shadow-2xl w-80 h-96 flex flex-col overflow-hidden mb-2"
            >
                
                {/* Header */}
                <div className="flex items-center justify-between p-3 border-b border-zinc-700 text-xs text-gray-400 font-mono bg-black/40">
                    <div className="flex items-center gap-2">
                        <Terminal size={12} className="text-green-500"/>
                        <span>assistant.exe</span>
                    </div>
                    <XCircle 
                      size={14} 
                      className="text-red-500 hover:text-red-400 cursor-pointer" 
                      onClick={() => setIsOpen(false)} 
                    />
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm font-mono scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-transparent">
                    <AnimatePresence initial={false}>
                        {messages.map(msg => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex ${msg.sender === 'user' ? 'text-blue-400' : 'text-gray-300'}`}
                            >
                                <span className="mr-2 text-gray-600 select-none">
                                    {msg.sender === 'user' ? '>>' : '#'}
                                </span>
                                {msg.text}
                            </motion.div>
                        ))}
                        {isTyping && (
                            <div className="text-gray-500 animate-pulse">{t('typing')}</div>
                        )}
                    </AnimatePresence>
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <form onSubmit={handleSubmit} className="flex p-3 border-t border-zinc-700 bg-black/40">
                    <ChevronRight size={16} className="text-green-500 mr-2 mt-0.5" />
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={t('placeholder')}
                        disabled={isTyping}
                        className="flex-1 bg-transparent text-gray-200 text-sm font-mono focus:outline-none placeholder-zinc-600"
                    />
                    <button type="submit" disabled={isTyping} className="ml-2 text-green-500 hover:text-green-400 transition-colors">
                        <Send size={16} />
                    </button>
                </form>

            </motion.div>
          )}
        </AnimatePresence>
        
        <button
            onClick={() => setIsOpen(!isOpen)}
            className={`
                w-12 h-12 rounded-full shadow-2xl transition-all duration-300 
                flex items-center justify-center border border-white/10
                ${isOpen 
                    ? 'bg-red-600 hover:bg-red-700 rotate-90' 
                    : 'bg-blue-600 hover:bg-blue-700 rotate-0'} 
            `}
        >
            {isOpen ? <XCircle size={24} className="text-white" /> : <Terminal size={24} className="text-white" />}
        </button>

    </div>
  );
}