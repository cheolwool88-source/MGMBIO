
import React from 'react';

const Manifesto: React.FC = () => {
  return (
    <section className="bg-[#050505] px-6 md:px-12 py-32 md:py-64 flex justify-center items-center relative z-10">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight md:leading-snug tracking-tight text-white text-center max-w-5xl">
        기존의 연구 개발은 임상, 데이터 분석, 시장 진입을 따로 관리해야 했습니다. <br className="hidden md:block"/>
        <span className="text-neutral-600 transition-colors hover:text-neutral-400">우리는 전체 여정을 통합합니다.</span> <br />
        초기 R&D부터 최종 솔루션 제공까지.
      </h2>
    </section>
  );
};

export default Manifesto;
