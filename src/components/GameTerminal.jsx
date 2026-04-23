import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/GameTerminal.css';

function GameTerminal() {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const messages = [
      '> INITIALIZING TESTER ENGINE...',
      '> LOADING TEST SKILLS DATABASE...',
      '✓ MANUAL TESTING READY',
      '✓ API TESTING SYSTEM ONLINE',
      '✓ QUALITY ASSURANCE MODE: ACTIVE',
      '> MISSION: READY TO FIND BUGS...'
    ];

    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < messages.length) {
        setLines(prev => [...prev, messages[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="game-terminal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.15 }}
      transition={{ duration: 1 }}
    >
      <div className="terminal-lines">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            className="terminal-line"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {line}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default GameTerminal;
