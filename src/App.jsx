import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import DesignPortfolio from './components/DesignPortfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MouseFollower from './components/MouseFollower';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <>
      <MouseFollower />
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <DesignPortfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
