import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { Gallery } from './components/Gallery';
import { FinalCTA } from './components/FinalCTA';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="font-sans text-chocolate-900 bg-cream min-h-screen selection:bg-amber-200 selection:text-chocolate-900">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Gallery />
        <FinalCTA />
        <LocationContact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;