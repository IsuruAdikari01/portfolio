import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import ScrollIndicator from './components/ScrollIndicator';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen bg-dark-900">
          <ParticleBackground />
          <ScrollIndicator />
          <Navbar />

          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
