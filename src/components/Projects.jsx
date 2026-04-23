import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Knit Away',
      description: 'Game casual cuốn len - Quản lý dự án Scrum 3 tháng với 13 thành viên',
      techs: ['Unity', 'C#', 'Jira', 'Scrum'],
      status: 'Hoàn thành ✓',
      achievements: 'Test case, log, bug report, debug support',
      icon: '🧵'
    },
    {
      title: 'Adorable Room',
      description: 'Game casual sắp xếp đồ - Triển khai Scrum, Agile methodology',
      techs: ['Unity', 'C#', 'Sheet', 'Jira'],
      status: 'Hoàn thành ✓',
      achievements: 'Test planning, bug management, team coordination',
      icon: '🏠'
    },
    {
      title: 'TAS_VCS (Viettel Cyber Security)',
      description: 'Web application - API & Web Testing project',
      techs: ['MongoDB', 'Postman', 'Jira'],
      status: 'Hoàn thành ✓',
      achievements: '100+ API tests, Database validation, Bug tracking',
      icon: '🔌'
    },
    {
      title: 'Game Testing (MMO RPG)',
      description: 'Kiểm thử game MMO RPG đang phát triển tại Sabo Game',
      techs: ['Lark', 'Manual Testing', 'Game QA'],
      status: 'Đang phát triển ⏳',
      achievements: 'Daily testing, bug reporting, production support',
      icon: '⚔️'
    },
    {
      title: 'API Testing Suite',
      description: 'Tự động hóa kiểm thử API REST endpoints bằng Postman',
      techs: ['Postman', 'REST', 'HTTP'],
      status: 'Hoàn thành ✓',
      achievements: '50+ API test cases, comprehensive coverage',
      icon: '🔗'
    },
    {
      title: 'Database Testing',
      description: 'Kiểm thử và validate dữ liệu MySQL, SQL Server',
      techs: ['MySQL', 'SQL Server', 'Database'],
      status: 'Hoàn thành ✓',
      achievements: 'Query testing, data validation, integrity checks',
      icon: '🗄️'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          <span className="title-bracket">[</span>
          MISSIONS COMPLETED
          <span className="title-bracket">]</span>
        </h2>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 255, 136, 0.3)',
              }}
            >
              <div className="project-icon">{project.icon}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-techs">
                {project.techs.map((tech, idx) => (
                  <span key={idx} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-footer">
                <span className={`status ${project.status.includes('✓') ? 'completed' : 'in-progress'}`}>
                  {project.status}
                </span>
              </div>

              <p className="achievements">{project.achievements}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;
