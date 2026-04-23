import React, { useState } from 'react';
import './styles/App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import GameTerminal from './components/GameTerminal';
import Footer from './components/Footer';

function App() {
  const [muted, setMuted] = useState(true);

  return (
    <div className="app-container">
      <GameTerminal />
      <Navigation muted={muted} setMuted={setMuted} />
      <main className="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
