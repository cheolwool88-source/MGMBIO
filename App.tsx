
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import WorkSection from './components/WorkSection';
import Capabilities from './components/Capabilities';
import Methodology from './components/Methodology';
import Footer from './components/Footer';
import Assistant from './components/Assistant';

const App: React.FC = () => {
  return (
    <div className="relative">
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
