import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SuiteSection } from './components/SuiteSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { EnterpriseSection } from './components/EnterpriseSection';
import { DemoWidget } from './components/DemoWidget';
import { TechStackSection } from './components/TechStackSection';
import { ContactScheduler } from './components/ContactScheduler';
import { Footer } from './components/Footer';
import { ArchitectureModal } from './components/ArchitectureModal';
import type { SuiteApplication } from './data/portfolioData';

export function App() {
  const [selectedAppForModal, setSelectedAppForModal] = useState<SuiteApplication | null>(null);
  const [activeDemoType, setActiveDemoType] = useState<'rag' | 'options' | 'bot' | 'dividend' | 'screener'>('rag');

  const handleOpenDemo = (demoType: 'rag' | 'options' | 'bot' | 'dividend' | 'screener') => {
    setActiveDemoType(demoType);
    const demoElement = document.getElementById('demos');
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Top Fixed Navbar */}
      <Navbar />

      {/* Main Single-Page Content Stream */}
      <main className="flex-1">
        
        {/* 1. Executive Hero Section with 10-App Narrative & Dogfooding */}
        <Hero />

        {/* 2. Complete 10-Application Financial Suite Showcase */}
        <SuiteSection 
          onOpenModal={(app) => setSelectedAppForModal(app)}
          onOpenDemo={handleOpenDemo}
        />

        {/* 3. Deep-Dive Systems Architecture & Code Invariants */}
        <ArchitectureSection />

        {/* 4. Enterprise Track Record (25+ Years at SIG, LLP) */}
        <EnterpriseSection />

        {/* 5. Interactive Client-Side 5-in-1 Sandbox Demos */}
        <DemoWidget 
          initialTab={activeDemoType} 
          key={activeDemoType}
        />

        {/* 6. Technical Stack & Mastery Matrix */}
        <TechStackSection />

        {/* 7. Direct Contact & Cal.com Meeting Scheduler */}
        <ContactScheduler />

      </main>

      {/* Global Executive Footer */}
      <Footer />

      {/* Interactive Architecture Modal */}
      {selectedAppForModal && (
        <ArchitectureModal
          app={selectedAppForModal}
          onClose={() => setSelectedAppForModal(null)}
          onOpenDemo={handleOpenDemo}
        />
      )}

    </div>
  );
}

export default App;
