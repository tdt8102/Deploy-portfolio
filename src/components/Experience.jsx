import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Experience.css';

function Experience() {
  const experiences = [
    {
      title: 'Junior Tester',
      company: 'Sabo Game',
      period: '7/2025 - Hiện tại',
      icon: '🎖️',
      achievements: [
        'Lên kế hoạch test và viết test case cho game RPG kiếm hiệp',
        'Viết báo cáo bug chi tiết và quản lý bug trên Lark',
        'Thực hiện test toàn diện cho các tính năng game',
        'Hỗ trợ team trong quá trình phát triển và debug'
      ]
    },
    {
      title: 'Intern Tester',
      company: 'Pixon Game Studio',
      period: '3/2025 - 6/2025',
      icon: '⚙️',
      achievements: [
        'Lên kế hoạch test và viết test case cho game casual',
        'Phát hiện và báo cáo 100+ bugs qua Jira',
        'Tạo log chi tiết và báo cáo bug chuyên nghiệp',
        'Quản lý lifecycle của bugs từ phát hiện đến fix'
      ]
    },
    {
      title: 'CTV Tester',
      company: 'Viettel Cyber Security',
      period: '2/2025 - 3/2025',
      icon: '🎮',
      achievements: [
        'Thực hiện test API bằng Postman cho các endpoints',
        'Kiểm thử web application với các chức năng đăng nhập, đăng ký',
        'Viết report chi tiết và quản lý bug trên Jira',
        'Truy vấn dữ liệu MongoDB để validate database'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <motion.div
        className="experience-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          <span className="title-bracket">[</span>
          WORK EXPERIENCE
          <span className="title-bracket">]</span>
        </h2>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ boxShadow: '0 0 30px rgba(0, 255, 136, 0.3)' }}
            >
              <div className="experience-header">
                <span className="experience-icon">{exp.icon}</span>
                <div className="experience-info">
                  <h3 className="job-title">{exp.title}</h3>
                  <p className="company-name">{exp.company}</p>
                </div>
                <span className="period-badge">{exp.period}</span>
              </div>

              <div className="achievements">
                {exp.achievements.map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    className="achievement"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="achievement-bullet">▶</span>
                    <p>{achievement}</p>
                  </motion.div>
                ))}
              </div>

              <div className="experience-line"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;
