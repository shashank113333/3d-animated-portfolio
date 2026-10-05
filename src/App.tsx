import { useState } from 'react';
import type { CustomizerSettings } from './types/portfolio';
import { CustomCursor } from './components/ui/CustomCursor';
import { Navbar } from './components/ui/Navbar';
import { HeroSection } from './components/ui/HeroSection';
import { AboutSection } from './components/ui/AboutSection';
import { SkillsSection } from './components/ui/SkillsSection';
import { ProjectsSection } from './components/ui/ProjectsSection';
import { ExperienceSection } from './components/ui/ExperienceSection';
import { ContactSection } from './components/ui/ContactSection';
import { Footer } from './components/ui/Footer';
import { Customizer3DWidget } from './components/ui/Customizer3DWidget';

export function App() {
  const [settings, setSettings] = useState<CustomizerSettings>({
    shape: 'torusKnot',
    theme: 'cyberpunk',
    wireframe: false,
    particleDensity: 1500,
    rotationSpeed: 1.0,
    soundEnabled: true
  });

  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  const handleUpdateSettings = (newSettings: Partial<CustomizerSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-gray-100 selection:bg-cyan-500 selection:text-slate-950">
      {/* Custom Mouse Pointer */}
      <CustomCursor />

      {/* Floating Header */}
      <Navbar
        settings={settings}
        onUpdateSettings={handleUpdateSettings}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <HeroSection
          settings={settings}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* 3D Real-time Customizer Drawer */}
      <Customizer3DWidget
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        settings={settings}
        onUpdateSettings={handleUpdateSettings}
      />
    </div>
  );
}

export default App;
