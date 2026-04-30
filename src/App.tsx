import { useState, useEffect } from 'react';
import { About } from './components/About';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { CyberBackground } from './components/CyberBackground';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Leadership } from './components/Leadership';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Terminal } from './components/Terminal';
import { PythonTerminal } from './components/PythonTerminal';
import { CyberScanner } from './components/CyberScanner';
import { SplashScreen } from './components/SplashScreen';
import { CyberCursor } from './components/CyberCursor';
import { SecurityHUD } from './components/SecurityHUD';
import { MatrixRain } from './components/MatrixRain';
import { CyberModeProvider } from './hooks/useCyberMode';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem('portfolio_auth');
    if (auth === 'true') {
      setIsAuthorized(true);
    }
  }, []);

  const handleAuthComplete = () => {
    setIsAuthorized(true);
    sessionStorage.setItem('portfolio_auth', 'true');
  };

  return (
    <CyberModeProvider>
      <AnimatePresence mode="wait">
        {!isAuthorized ? (
          <SplashScreen key="splash" onComplete={handleAuthComplete} />
        ) : (
          <div key="main-content">
            <MatrixRain />
            <CyberCursor />
            <SecurityHUD />
            <CyberBackground />
            <Navbar />
            <CyberScanner />
            <Terminal />
            <PythonTerminal />
            <main>
              <Hero />
              <About />
              <Leadership />
              <Projects />
              <Experience />
              <Skills />
              <Achievements />
              <Contact />
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </CyberModeProvider>
  );
}
