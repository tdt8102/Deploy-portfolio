import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = '> JUNIOR TESTER // BUG FINDER // QUALITY ADVOCATE';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="terminal-window">
          <div className="terminal-header">
            <span className="terminal-button red"></span>
            <span className="terminal-button yellow"></span>
            <span className="terminal-button green"></span>
          </div>
          <div className="terminal-content">
            <div className="hero-text">
              <motion.h1 className="typing-text">
                {displayText}
                <span className="cursor">|</span>
              </motion.h1>
            </div>
          </div>
        </div>

        <div className="hero-subtitle">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="level-text"
          >
            🚀 LEVEL: Junior || EXPERIENCE: 1+ Years 🎮
          </motion.p>
        </div>

        <motion.div
          className="cta-button"
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px #00ff88' }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#projects" className="start-button">
            [START GAME]
          </a>
        </motion.div>

        <div className="animated-background">
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
          <div className="glow-orb orb-3"></div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
