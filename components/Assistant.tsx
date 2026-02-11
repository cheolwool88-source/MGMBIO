
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: '반갑습니다. MG Bio Serve Inc.의 바이오-테크 AI 어시스턴트입니다. 중국 산둥성의 대규모 동애등애 자원화 센터나 토양 복원 프로젝트 등 당사의 주요 성공 사례에 대해 궁금한 점이 있으신가요?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are an AI assistant for MG Bio Serve Inc. 
        Key Success Stories to refer:
        1. China Soil Remediation: Increased Organic Matter (TOC) by 42%, reduced heavy metals by 35%, and increased crop yield by 27% using microbial agents.
        2. China Shandong BSF Center: Large-scale Black Soldier Fly factory. Annual waste processing of 50,000 tons, increased protein yield by 180%, and reduced operating costs by 45% through AI automation.
        3. Domestic BSF Resource Recovery: Processed food waste, reducing costs by 30% and odors by 80%, with 200% capacity scale-up.
        Answer professionally and concisely in Korean. 
        Context: ${userMsg}`,
        config: {
          systemInstruction: "MG Bio Serve Inc.의 전문 상담 AI로서 중국 산둥성 프로젝트를 포함한 구체적인 수치와 기술력을 바탕으로 신뢰감 있게 답변하세요.",
          temperature: 0.7,
        }
      });

      setMessages(prev => [...prev, { role: 'bot', text: response.text || '죄송합니다. 일시적인 오류가 발생했습니다.' }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: '연결 상태가 좋지 않습니다. 다시 시도해주세요.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-[#fc3b00] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform group"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7A8.38 8.38 0 0 1 16.3 4.5"/><path d="M12 8l0 8"/><path d="M8 12l8 0"/></svg>
        </button>
      ) : (
        <div className="w-[320px] md:w-[380px] h-[500px] bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-[scaleIn_0.3s_ease_out]">
          <div className="p-4 border-b border-neutral-800 flex justify-between items-center bg-black/20">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest">MG-AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-neutral-500 hover:text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' ? 'bg-[#fc3b00] text-white' : 'bg-neutral-800 text-neutral-300'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-neutral-800 p-3 rounded-2xl flex gap-1">
                  <span className="w-1.5 h-1.5 bg-neutral-600 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-neutral-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-neutral-600 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-neutral-800 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="산둥성 프로젝트에 대해 물어보세요."
              className="flex-1 bg-neutral-800 border-none rounded-xl px-4 py-2 text-sm text-white focus:ring-1 focus:ring-[#fc3b00] transition-all"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="w-10 h-10 bg-neutral-800 rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#fc3b00] hover:text-white transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
            </button>
          </div>
        </div>
      )}
      <style>{`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Assistant;
