import React from 'react';

const Methodology: React.FC = () => {
  return (
    <section id="studio" className="relative z-20 py-12 md:py-24 px-6 md:px-12 bg-[#050505]">
      <div className="bg-neutral-900 border border-neutral-800 rounded-[2rem] md:rounded-[4rem] p-12 md:p-24 shadow-[0_-50px_100px_-20px_rgba(252,59,0,0.1)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <div>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight text-white mb-8">
                MG Bio Serve Inc. <br /> 방법론
              </h3>
              <div className="w-16 h-[2px] bg-[#fc3b00] mb-12" />
              <p className="text-[10px] font-bold text-[#fc3b00] uppercase tracking-[0.3em]">Core Values</p>
            </div>
            
            <div className="flex flex-col justify-between">
              <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-xl">
                생명 과학의 깊이와 인공지능의 속도가 만나는 곳. 우리는 단순히 데이터를 분석하는 것이 아니라, 생명의 미래를 시뮬레이션하고 최적의 헬스케어 솔루션을 실시간으로 도출합니다.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-20 pt-16 border-t border-neutral-800">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-neutral-500 tracking-widest mb-6">Expertise</span>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-sm text-neutral-400">
                      <strong className="text-white font-semibold">정밀성:</strong> 유전체 분석
                    </li>
                    <li className="flex gap-3 text-sm text-neutral-400">
                      <strong className="text-white font-semibold">속도:</strong> AI 진단 가속
                    </li>
                    <li className="flex gap-3 text-sm text-neutral-400">
                      <strong className="text-white font-semibold">확장성:</strong> 글로벌 네트워크
                    </li>
                  </ul>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-neutral-500 tracking-widest mb-6">Research</span>
                  <ul className="space-y-4 text-sm text-neutral-400">
                    <li>Genomics AI</li>
                    <li>Bio-Data Analytics</li>
                    <li>Precision Medicine</li>
                    <li>Digital Healthcare</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;