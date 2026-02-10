
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    resize();

    let animationFrame: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const space = 35;
      const radius = 1.2;
      const rows = Math.ceil(canvas.height / space);
      const cols = Math.ceil(canvas.width / space);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * space + space / 2;
          const y = r * space + space / 2;
          const dx = x - mouseRef.current.x;
          const dy = y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 300;

          let alpha = 0.08;
          if (dist < maxDist) {
            alpha += (1 - dist / maxDist) * 0.4;
          }

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(252, 59, 0, ${alpha})`;
          ctx.fill();
        }
      }
      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <header className="relative w-full h-screen flex flex-col justify-end px-6 md:px-12 pb-12 overflow-hidden bg-[#050505]" id="hero">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" />
      
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[#fc3b00] rounded-full blur-[200px] -translate-y-1/2 translate-x-1/4 z-0 opacity-10 pointer-events-none"></div>

      <div className="relative z-10 w-full flex flex-col md:flex-row items-end justify-between border-b border-neutral-800 pb-12">
        <div className="max-w-xs mb-8 md:mb-0">
          <p className="text-xs md:text-sm text-neutral-400 leading-relaxed mb-6 font-light animate-[fadeIn_1s_ease_0.2s_both]">
            혁신적인 바이오 기술과 데이터 기반 솔루션을 결합하여 미래의 헬스케어 표준을 만듭니다.
          </p>
          <button className="text-[10px] md:text-xs uppercase font-medium tracking-widest text-neutral-300 border-b border-neutral-700 pb-1 hover:text-[#fc3b00] hover:border-[#fc3b00] transition-colors">
            솔루션 탐색하기
          </button>
        </div>

        <div className="text-left md:text-right">
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.95] text-white animate-[slideUp_1s_ease_both]">
            엔드투엔드 <br />
            바이오 테크 <br />
            에코시스템
          </h1>
        </div>
      </div>

      <div className="relative z-10 flex justify-between items-center pt-6">
        <div className="hidden md:flex items-center gap-2 text-xs text-neutral-400 font-medium">
          <span className="w-2 h-2 bg-[#fc3b00] rounded-full animate-pulse shadow-[0_0_10px_rgba(252,59,0,1)]"></span>
          신규 파트너십 접수 중
        </div>
        <div className="text-[10px] text-neutral-500 uppercase tracking-widest animate-pulse">
          Scroll to Explore
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
};

export default Hero;
