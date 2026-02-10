
import React, { useRef, useState, useEffect } from 'react';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  img: string;
  stats: { label: string; value: string }[];
}

const cases: CaseStudy[] = [
  { 
    id: '01', 
    title: '중국 동북지역 토양 복원', 
    subtitle: '산업 오염 및 농약 과다 토양의 생태계 미생물 복원 프로젝트',
    category: '토양 미생물 R&D', 
    img: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=1000&q=80',
    stats: [
      { label: '유기물 함량(TOC)', value: '+42%' },
      { label: '중금속 농도', value: '-35%' },
      { label: '수확량 증가', value: '+27%' }
    ]
  },
  { 
    id: '02', 
    title: '음식물 쓰레기 자원화 시스템', 
    subtitle: '동애등애(BSF) 기반 바이오 전환 및 사료 자원화 시설 구축',
    category: '순환 경제 솔루션', 
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1000&q=80',
    stats: [
      { label: '처리 비용 절감', value: '-30%' },
      { label: '악취 민원 감소', value: '-80%' },
      { label: '일일 처리량', value: '+200%' }
    ]
  },
  { 
    id: '03', 
    title: '글로벌 ESG 데이터 플랫폼', 
    subtitle: '바이오 성과 지표의 실시간 모니터링 및 인증 관리 시스템',
    category: '데이터 인텔리전스', 
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&q=80',
    stats: [
      { label: '탄소 배출 저감', value: '-15%' },
      { label: '데이터 정밀도', value: '99.9%' },
      { label: '파트너사 만족도', value: '98%' }
    ]
  },
];

const WorkSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollHeight = containerRef.current.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const percent = Math.min(Math.max(scrolled / scrollHeight, 0), 1);
      
      setProgress(percent);
      const trackWidth = trackRef.current.scrollWidth;
      const windowWidth = window.innerWidth;
      const offset = (trackWidth - windowWidth) * percent;
      trackRef.current.style.transform = `translateX(${-offset}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInquiry = (projectTitle: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // 커스텀 이벤트를 통해 폼에 프로젝트명 전달
      const event = new CustomEvent('setProjectInquiry', { detail: projectTitle });
      window.dispatchEvent(event);
    }
  };

  return (
    <section id="work" ref={containerRef} className="relative h-[300vh] bg-[#050505]">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        
        {/* Header Indicators */}
        <div className="absolute top-0 left-0 w-full px-6 md:px-12 pt-24 flex justify-between items-start pointer-events-none z-20">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#fc3b00]">Success Stories</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">혁신이 만들어낸 실제의 변화</h2>
          </div>
          <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-600">Case Studies / 01-03</span>
        </div>

        {/* Horizontal Track */}
        <div 
          ref={trackRef} 
          className="flex gap-12 md:gap-32 px-12 md:px-24 will-change-transform items-center transition-transform duration-100 ease-out z-10"
        >
          {cases.map((item) => (
            <article key={item.id} className="group shrink-0 w-[85vw] md:w-[60vw] cursor-pointer" onClick={() => handleInquiry(item.title)}>
              <div className="relative aspect-[21/9] bg-neutral-900 border border-white/5 overflow-hidden rounded-xl shadow-2xl transition-all duration-700 group-hover:border-[#fc3b00]/30">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Stats Overlay */}
                <div className="absolute top-8 right-8 flex flex-col gap-3">
                  {item.stats.map((stat, idx) => (
                    <div key={idx} className="bg-black/60 backdrop-blur-md border border-white/10 p-3 md:p-4 rounded-lg transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" style={{ transitionDelay: `${idx * 0.1}s` }}>
                      <p className="text-[8px] md:text-[10px] text-neutral-400 uppercase font-bold tracking-widest mb-1">{stat.label}</p>
                      <p className="text-xl md:text-2xl font-bold text-[#fc3b00]">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                <div className="absolute bottom-10 left-10 max-w-lg">
                  <span className="inline-block px-3 py-1 bg-[#fc3b00] text-white text-[9px] font-bold uppercase tracking-widest rounded-full mb-4">{item.category}</span>
                  <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-2 group-hover:text-[#fc3b00] transition-colors">{item.title}</h3>
                  <p className="text-sm md:text-lg text-neutral-400 font-light leading-snug mb-6">{item.subtitle}</p>
                  
                  <button className="flex items-center gap-2 text-xs font-bold text-white group-hover:text-[#fc3b00] transition-colors uppercase tracking-widest">
                    이 프로젝트에 대해 문의하기
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Progress UI */}
        <div className="absolute bottom-12 left-6 md:left-12 flex items-center gap-8">
          <div className="w-48 h-[1px] bg-neutral-800 relative">
            <div 
              className="absolute top-0 left-0 h-full bg-[#fc3b00] transition-all duration-100 ease-out" 
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <button className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-white transition-colors">
            전체 사례 PDF 다운로드
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-y-1 transition-transform"><path d="M7 10l5 5 5-5M12 15V3M12 21h10M12 21H2"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
