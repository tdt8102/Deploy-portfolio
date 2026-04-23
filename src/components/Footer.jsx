import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="footer-main">
          <div className="footer-section">
            <h4 className="footer-title">ABOUT ME</h4>
            <p className="footer-text">
              Junior Tester | Bug Finder | Quality Advocate 🎯
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">QUICK LINKS</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">SOCIAL LINKS</h4>
            <div className="social-links">
              <motion.a
                href="#"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="#"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                GitHub
              </motion.a>
              <motion.a
                href="#"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                Twitter
              </motion.a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="divider"></div>
          <p className="copyright">
            © {currentYear} QA Portfolio. Built with React & Love ❤️
          </p>
          <p className="footer-emoji">
            🎮 GAME ON 🎮
          </p>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
