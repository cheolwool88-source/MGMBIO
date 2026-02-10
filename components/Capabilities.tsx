
import React from 'react';

const Capabilities: React.FC = () => {
  return (
    <section id="goods" className="relative bg-[#050505] py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-6">
          <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter">핵심 역량</h2>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold tracking-widest text-neutral-600 uppercase">Evolution 02</span>
            <div className="w-12 h-[1px] bg-neutral-800"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <CapabilityCard 
            title="바이오 테크" 
            desc="차세대 유전체 공학" 
            img="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80" 
          />
          <CapabilityCard 
            title="데이터 인텔리전스" 
            desc="머신러닝 기반 진단" 
            tag="AI 분석" 
            img="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80" 
          />
          <CapabilityCard 
            title="플랫폼 솔루션" 
            desc="글로벌 헬스케어 네트워크" 
            tag="통합 관리" 
            img="https://images.unsplash.com/photo-1579684385180-1ea55f61d21e?w=800&q=80" 
          />
        </div>
      </div>
    </section>
  );
};

const CapabilityCard: React.FC<{ title: string; desc: string; img: string; tag?: string }> = ({ title, desc, img, tag }) => (
  <div className="group cursor-pointer">
    <div className="relative aspect-square rounded-3xl overflow-hidden mb-8 bg-neutral-900">
      <img 
        src={img} 
        alt={title} 
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
      />
      {tag && (
        <div className="absolute top-6 right-6">
          <span className="px-3 py-1.5 bg-[#fc3b00] text-white text-[10px] font-bold rounded-full uppercase tracking-widest">
            {tag}
          </span>
        </div>
      )}
    </div>
    <div className="px-2">
      <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-[#fc3b00] transition-colors">{title}</h3>
      <p className="text-sm text-neutral-500 mt-2 font-medium">{desc}</p>
    </div>
  </div>
);

export default Capabilities;
