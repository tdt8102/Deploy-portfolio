import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = '⚔️ DUNGEON TESTER // BUG SLAYER // QUALITY GUARDIAN ⚔️';

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

  const handleStartGame = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="dungeon-window">
          <div className="dungeon-header">
            <span className="dungeon-title">⚔️ ADVENTURER'S STATUS ⚔️</span>
          </div>
          <div className="dungeon-content">
            <div className="hero-text">
              <motion.h1 className="pixel-text">
                {displayText}
                <span className="cursor">█</span>
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
            ⚡ LEVEL: Junior || EXPERIENCE: 1+ Years ⚡
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="stats-text"
          >
            🛡️ HP: 100 | 💪 ATK: 85 | 🧠 INT: 95 | ❤️ LUK: 90
          </motion.p>
        </div>

        <motion.div
          className="start-button-container"
          whileHover={{ scale: 1.1, boxShadow: '0 0 20px #ff6b00' }}
          whileTap={{ scale: 0.95 }}
        >
          <button onClick={handleStartGame} className="start-button">
            [▶ ENTER DUNGEON ◀]
          </button>
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
