
import React from 'react';

const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-6 md:py-8 mix-blend-difference pointer-events-none">
      <a 
        href="#" 
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        className="pointer-events-auto text-3xl md:text-5xl font-bold text-[#fc3b00] tracking-tighter hover:opacity-70 transition-opacity"
      >
        엠지오바이오
      </a>
      
      <div className="flex gap-4 md:gap-8 text-[10px] md:text-xs font-medium tracking-wide text-white/90 pointer-events-auto">
        <button onClick={() => scrollTo('work')} className="hover:text-[#fc3b00] transition-colors">성공 사례</button>
        <button onClick={() => scrollTo('goods')} className="hover:text-[#fc3b00] transition-colors">솔루션</button>
        <button onClick={() => scrollTo('studio')} className="hover:text-[#fc3b00] transition-colors">방법론</button>
        <button onClick={() => scrollTo('contact')} className="hover:text-[#fc3b00] transition-colors">문의하기</button>
      </div>
    </nav>
  );
};

export default Navbar;
