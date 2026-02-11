
import React from 'react';

const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-black/60 backdrop-blur-xl border-b border-white/5 px-6 md:px-12 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between transition-all duration-300">
      <a 
        href="#" 
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        className="text-4xl md:text-5xl font-black text-[#fc3b00] tracking-tighter hover:opacity-70 transition-opacity mb-4 md:mb-0"
      >
        MG Bio Serve Inc.
      </a>
      
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:gap-x-10 text-base md:text-lg font-bold tracking-tight text-white/90">
        <button onClick={() => scrollTo('work')} className="hover:text-[#fc3b00] transition-colors whitespace-nowrap">성공 사례</button>
        <button onClick={() => scrollTo('goods')} className="hover:text-[#fc3b00] transition-colors whitespace-nowrap">솔루션</button>
        <button onClick={() => scrollTo('studio')} className="hover:text-[#fc3b00] transition-colors whitespace-nowrap">방법론</button>
        <button onClick={() => scrollTo('contact')} className="hover:text-[#fc3b00] transition-colors whitespace-nowrap">문의하기</button>
      </div>
    </nav>
  );
};

export default Navbar;
