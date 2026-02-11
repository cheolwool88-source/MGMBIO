
import React, { useState, useEffect } from 'react';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    project: '',
    message: ''
  });

  useEffect(() => {
    const handleSetProject = (e: any) => {
      const projectTitle = e.detail;
      setFormData(prev => ({ 
        ...prev, 
        project: projectTitle, 
        message: `${projectTitle} 프로젝트에 대한 상세 기술 자료 및 컨설팅을 요청합니다.` 
      }));
    };
    window.addEventListener('setProjectInquiry', handleSetProject);
    return () => window.removeEventListener('setProjectInquiry', handleSetProject);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`문의가 접수되었습니다: ${formData.project || '일반 문의'}\n빠른 시일 내에 연락드리겠습니다.`);
    setFormData({ name: '', email: '', org: '', project: '', message: '' });
  };

  return (
    <footer id="contact" className="bg-[#050505] pt-32 pb-12 px-6 md:px-12 border-t border-neutral-900 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-24">
          
          {/* Left: Contact Info */}
          <div>
            <h4 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-white mb-12">
              바이오 헬스케어의 <br /> 미래를 함께 만들 <br /> 준비가 되셨나요?
            </h4>
            <div className="space-y-8">
              <div>
                <p className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest mb-2">Email Inquiry</p>
                <a 
                  href="mailto:hello@mgobio.com" 
                  className="group inline-flex items-center gap-4 text-2xl md:text-3xl font-medium text-neutral-400 border-b border-neutral-800 pb-2 hover:text-[#fc3b00] hover:border-[#fc3b00] transition-all"
                >
                  hello@mgobio.com
                </a>
              </div>
              <div className="flex gap-4 pt-4">
                <SocialBtn icon={<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>} />
                <SocialBtn icon={
                  <>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </>
                } />
              </div>
            </div>
          </div>

          {/* Right: Detailed Contact Form */}
          <div className="bg-neutral-900/50 border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
            <h5 className="text-xl font-bold text-white mb-8 tracking-tight">프로젝트 상세 문의하기</h5>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput 
                  label="성함" 
                  value={formData.name} 
                  onChange={(v) => setFormData(p => ({...p, name: v}))} 
                  placeholder="홍길동"
                />
                <FormInput 
                  label="이메일" 
                  type="email" 
                  value={formData.email} 
                  onChange={(v) => setFormData(p => ({...p, email: v}))} 
                  placeholder="example@mail.com"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput 
                  label="소속 기관/기업" 
                  value={formData.org} 
                  onChange={(v) => setFormData(p => ({...p, org: v}))} 
                  placeholder="기업명 또는 기관명"
                />
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">관심 프로젝트</label>
                  <select 
                    value={formData.project}
                    onChange={(e) => setFormData(p => ({...p, project: e.target.value}))}
                    className="bg-neutral-800 border-none rounded-xl px-4 py-3 text-sm text-white focus:ring-1 focus:ring-[#fc3b00] outline-none"
                  >
                    <option value="">프로젝트 선택</option>
                    <option value="중국 동북지역 토양 복원">토양 복원 프로젝트</option>
                    <option value="음식물 쓰레기 자원화 시스템">동애등애 자원화 시스템</option>
                    <option value="글로벌 ESG 데이터 플랫폼">ESG 플랫폼</option>
                    <option value="기타">기타 문의</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">문의 내용</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(p => ({...p, message: e.target.value}))}
                  className="bg-neutral-800 border-none rounded-xl px-4 py-4 text-sm text-white focus:ring-1 focus:ring-[#fc3b00] outline-none resize-none"
                  placeholder="문의 내용을 상세히 적어주세요."
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-[#fc3b00] text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#ff4d1a] transition-all hover:shadow-[0_0_20px_rgba(252,59,0,0.3)]"
              >
                문의 신청하기
              </button>
            </form>
          </div>

        </div>
        
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-neutral-800 uppercase tracking-widest gap-4">
          <div className="flex gap-8">
            <a href="#" className="hover:text-neutral-500">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-500">Terms of Service</a>
          </div>
          <div>Built with Bio-Intelligence</div>
        </div>
      </div>
    </footer>
  );
};

const FormInput: React.FC<{ label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string }> = ({ label, value, onChange, placeholder, type = "text" }) => (
  <div className="flex flex-col gap-2">
    <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">{label}</label>
    <input 
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required
      className="bg-neutral-800 border-none rounded-xl px-4 py-3 text-sm text-white focus:ring-1 focus:ring-[#fc3b00] outline-none"
    />
  </div>
);

const SocialBtn: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <a href="#" className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-500 hover:bg-[#fc3b00] hover:text-white hover:border-[#fc3b00] transition-all">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {icon}
    </svg>
  </a>
);

export default Footer;
