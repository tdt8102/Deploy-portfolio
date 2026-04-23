import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Technologies.css';

function Technologies() {
  const technologies = {
    'Manual Testing': [
      { name: 'Test Planning & Strategy', level: 90, icon: '📋' },
      { name: 'Test Case Writing', level: 85, icon: '✍️' },
      { name: 'Bug Reporting', level: 90, icon: '🐛' },
      { name: 'Game Testing', level: 85, icon: '🎮' }
    ],
    'Testing Tools': [
      { name: 'JIRA', level: 90, icon: '📋' },
      { name: 'Postman', level: 85, icon: '📮' },
      { name: 'JMeter', level: 75, icon: '⚡' },
      { name: 'Mantis', level: 80, icon: '🐛' }
    ],
    'Databases & Query': [
      { name: 'MySQL', level: 80, icon: '🗄️' },
      { name: 'SQL Server', level: 80, icon: '🗄️' },
      { name: 'MongoDB', level: 75, icon: '🍃' },
      { name: 'Database Testing', level: 80, icon: '🔍' }
    ],
    'Methodologies & AI': [
      { name: 'Agile/Scrum', level: 85, icon: '🔄' },
      { name: 'V-Model', level: 80, icon: '📈' },
      { name: 'ChatGPT/Claude/Gemini', level: 75, icon: '🤖' },
      { name: 'Requirement Analysis', level: 80, icon: '📝' }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="technologies" className="technologies">
      <motion.div
        className="tech-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          <span className="title-bracket">[</span>
          POWER UPS & SKILLS
          <span className="title-bracket">]</span>
        </h2>

        <motion.div
          className="tech-categories"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(technologies).map(([category, techs], catIndex) => (
            <motion.div
              key={catIndex}
              className="tech-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="category-title">
                <span className="category-icon">⚔️</span>
                {category}
              </h3>

              <div className="tech-list">
                {techs.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    className="tech-item"
                    whileHover={{ x: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="tech-header">
                      <span className="tech-icon">{tech.icon}</span>
                      <span className="tech-name">{tech.name}</span>
                      <span className="level-badge">{tech.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Technologies;
