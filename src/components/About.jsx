import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          <span className="title-bracket">[</span>
          PLAYER PROFILE
          <span className="title-bracket">]</span>
        </h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="intro-text">Xin chào! 👾</p>
            <p className="about-description">
              Tôi là Tạ Đăng Thảo, một Junior Tester đam mê tìm kiếm lỗi phần mềm với hơn 1 năm kinh nghiệm 
              trong lĩnh vực kiểm thử. Tôi đã làm việc với các công ty hàng đầu như Sabo Game, Pixon Game Studio 
              và Viettel Cyber Security, nơi tôi đã phát triển kỹ năng testing toàn diện từ test planning đến bug management.
            </p>

            <p className="about-description">Tôi chuyên về:</p>
            <ul className="skill-list">
              <li>✓ Game Testing & Web Testing</li>
              <li>✓ Manual Testing & Test Case Management</li>
              <li>✓ API Testing (Postman) & Performance Testing (JMeter)</li>
              <li>✓ Bug Tracking & Agile/Scrum Methodology</li>
              <li>✓ Database Testing (MySQL, SQL Server)</li>
            </ul>

            <p className="about-description">
              Mục tiêu của tôi là trở thành Tester chuyên nghiệp, xây dựng nền tảng vững chắc về kỹ năng 
              và kiến thức để trở thành Test Lead. Tôi luôn sẵn sàng học hỏi, tích lũy kinh nghiệm, 
              và hoàn thành chứng chỉ ISTQB để phát triển sự nghiệp trong lĩnh vực QA.
            </p>
          </motion.div>

          <motion.div
            className="about-stats"
            role="region"
            aria-label="Statistics overview"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="stat-card" role="group" aria-label="Projects tested">
              <span className="stat-label">PROJECTS TESTED</span>
              <span className="stat-value">6+</span>
            </div>
            <div className="stat-card" role="group" aria-label="Bugs found">
              <span className="stat-label">BUGS FOUND</span>
              <span className="stat-value">1000+</span>
            </div>
            <div className="stat-card" role="group" aria-label="Test cases">
              <span className="stat-label">TEST CASES</span>
              <span className="stat-value">1000+</span>
            </div>
            <div className="stat-card" role="group" aria-label="Experience months">
              <span className="stat-label">EXPERIENCE</span>
              <span className="stat-value">1Y+</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
