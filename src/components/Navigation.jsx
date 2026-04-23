import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Navigation.css';

function Navigation({ muted, setMuted }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: '> About', id: 'about' },
    { label: '> Experience', id: 'experience' },
    { label: '> Projects', id: 'projects' },
    { label: '> Tech Stack', id: 'technologies' },
    { label: '> Contact', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <motion.div
        className="nav-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="logo">
          <span className="logo-bracket">[</span>
          <span className="logo-text">TẠ ĐĂNG THẢO</span>
          <span className="logo-bracket">]</span>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ x: 10, color: '#00ff88' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <button
                className="nav-link"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </motion.li>
          ))}
        </ul>

        <button
          className="sound-toggle"
          onClick={() => setMuted(!muted)}
          title={muted ? 'Unmute' : 'Mute'}
        >
          {muted ? '🔇' : '🔊'}
        </button>
      </motion.div>
    </nav>
  );
}

export default Navigation;
