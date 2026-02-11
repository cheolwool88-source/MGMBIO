
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Manifesto from './components/Manifesto.tsx';
import WorkSection from './components/WorkSection.tsx';
import Capabilities from './components/Capabilities.tsx';
import Methodology from './components/Methodology.tsx';
import Footer from './components/Footer.tsx';
import Assistant from './components/Assistant.tsx';

const App: React.FC = () => {
  return (
    <div className="relative bg-[#050505] min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <WorkSection />
        <Capabilities />
        <Methodology />
      </main>
      <Footer />
      <Assistant />
    </div>
  );
};

export default App;
