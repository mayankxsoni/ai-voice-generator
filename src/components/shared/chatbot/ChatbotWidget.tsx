'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

const quickOptions = [
  { label: 'Agency Services', query: 'What services does First Pixel offer?' },
  { label: 'Turnaround Time', query: 'What is your video production turnaround time?' },
  { label: 'Video Pricing', query: 'How much does a SaaS explainer video cost?' },
  { label: 'Industry Expertise', query: 'What SaaS verticals do you specialize in?' },
  { label: 'Book Strategy Call', query: 'How can I book a strategy call with First Pixel?' },
];

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        'Hello. Welcome to **First Pixel**. I am **PixelBot**, your AI assistant.\n\nWe produce high-converting B2B SaaS explainer videos and product demos. How can I assist you today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, loading]);

  const handleSend = async (textToSend?: string) => {
    const queryText = (textToSend || input).trim();
    if (!queryText || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: queryText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const apiMessages = messages
        .concat(userMessage)
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      });

      const data = await res.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.reply || 'Thank you. How else can I assist you?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Failed to fetch response:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content:
            'I am experiencing a brief connection delay. Please feel free to explore our [Services](/services) or [Contact Us](/contact-us) directly.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Helper to parse Markdown links [Text](Url) into clean clickable links
  const renderFormattedText = (text: string) => {
    const parts = text.split(/(\[.*?\]\(.*?\))/g);

    return parts.map((part, i) => {
      const match = part.match(/^\[(.*?)\]\((.*?)\)$/);
      if (match) {
        const linkText = match[1];
        const linkUrl = match[2];
        return (
          <Link
            key={i}
            href={linkUrl}
            onClick={() => setIsOpen(false)}
            className="font-medium text-primary-500 underline hover:text-primary-600 transition-colors"
          >
            {linkText}
          </Link>
        );
      }

      // Convert linebreaks and bold text **word**
      const boldParts = part.split(/(\*\*.*?\*\*)/g);
      return boldParts.map((bPart, bIdx) => {
        if (bPart.startsWith('**') && bPart.endsWith('**')) {
          return <strong key={bIdx} className="font-semibold text-secondary">{bPart.slice(2, -2)}</strong>;
        }
        return bPart;
      });
    });
  };

  return (
    <>
      {/* ── FLOATING TRIGGER BUTTON (VIBRANT ORANGE GRADIENT WITH PULSE ANIMATION) ── */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-gradient-to-r from-primary-500 via-orange-500 to-amber-500 px-5 py-3.5 text-white shadow-[0_12px_36px_-6px_rgba(249,115,22,0.55)] transition-all duration-300 hover:scale-108 hover:shadow-[0_16px_44px_-4px_rgba(249,115,22,0.7)] cursor-pointer group border border-white/30 animate-in fade-in zoom-in duration-300"
          aria-label="Open Chat Assistant"
        >
          <div className="relative flex size-7 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
            <svg className="size-4 fill-white group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </svg>
            <span className="absolute -top-1 -right-1 flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
            </span>
          </div>
          <span className="text-xs sm:text-sm font-bold tracking-wide text-white">
            Chat Assistant <span className="opacity-80 font-normal">| First Pixel</span>
          </span>
        </button>
      )}

      {/* ── FLOATING CHAT WINDOW (ANIMATED ENTRANCE WITH ORANGE ACCENTS) ── */}
      {isOpen && (
        <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex h-[570px] max-h-[82vh] w-[370px] sm:w-[400px] max-w-[94vw] flex-col overflow-hidden rounded-[26px] border border-primary-500/20 bg-white shadow-[0_24px_60px_-10px_rgba(20,15,35,0.22)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-6 zoom-in-95">
          
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-secondary via-secondary to-[#1c1c24] px-5 py-4 text-white border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative flex size-9 items-center justify-center rounded-xl bg-gradient-to-tr from-primary-500 to-orange-400 text-xs font-bold text-white shadow-md border border-white/20">
                <span>FP</span>
                <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full border-2 border-secondary bg-emerald-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                  PixelBot Assistant
                </h3>
                <p className="text-[11px] text-white/60 font-normal flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online | First Pixel Support
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() =>
                  setMessages([
                    {
                      id: 'welcome',
                      role: 'assistant',
                      content:
                        'Hello. Welcome to **First Pixel**. I am **PixelBot**, your AI assistant.\n\nWe produce high-converting B2B SaaS explainer videos and product demos. How can I assist you today?',
                      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    },
                  ])
                }
                title="Reset Chat"
                className="rounded-lg p-1.5 text-white/50 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
              >
                <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-white/50 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Chat"
              >
                <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#fcfcfc]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} animate-in fade-in slide-in-from-bottom-2 duration-200`}
              >
                <div
                  className={`max-w-[86%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'bg-primary-500 text-white font-medium rounded-br-xs shadow-md shadow-primary-500/20'
                      : 'bg-white text-secondary/90 border border-[#eef0f3] rounded-bl-xs shadow-2xs'
                  }`}
                >
                  {renderFormattedText(msg.content)}
                </div>
                <span className="mt-1 px-1 text-[10px] text-secondary/40 font-normal">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {/* Quick Option Chips (Orange Accent Border & Hover) */}
            {messages.length <= 2 && (
              <div className="pt-2">
                <p className="text-[11px] font-semibold text-secondary/40 uppercase tracking-wider mb-2 px-1">
                  Quick Questions
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {quickOptions.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(opt.query)}
                      className="rounded-full border border-primary-200 bg-primary-50/60 px-3.5 py-1.5 text-xs font-semibold text-primary-600 hover:bg-primary-500 hover:text-white transition-all duration-200 cursor-pointer shadow-2xs"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Typing Indicator */}
            {loading && (
              <div className="flex items-center gap-2 rounded-2xl bg-white border border-[#eef0f3] px-4 py-3 text-xs text-secondary/60 w-fit rounded-bl-xs shadow-2xs animate-in fade-in duration-200">
                <span className="font-semibold text-secondary">PixelBot is thinking</span>
                <div className="flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-primary-500 animate-bounce" />
                  <span className="size-1.5 rounded-full bg-primary-500 animate-bounce [animation-delay:0.2s]" />
                  <span className="size-1.5 rounded-full bg-primary-500 animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2 border-t border-[#f0f2f6] bg-white p-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question about First Pixel..."
              className="flex-1 rounded-full border border-[#eef0f3] bg-[#f9fafb] px-4 py-2.5 text-xs sm:text-sm text-secondary outline-none transition-colors focus:border-primary-500 focus:bg-white placeholder:text-secondary/40"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-500 text-white shadow-md shadow-primary-500/25 transition-all hover:bg-primary-600 hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
              aria-label="Send Message"
            >
              <svg className="size-4 translate-x-0.5 fill-current" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>

        </div>
      )}
    </>
  );
}
