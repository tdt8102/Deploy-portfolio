import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactLinks = [
    { icon: '📧', label: 'Email', value: 'tadt515@gmail.com', href: 'mailto:tadt515@gmail.com' },
    { icon: '☎️', label: 'Phone', value: '0976698107', href: 'tel:0976698107' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/tạ-đăng-thảo', href: 'https://www.linkedin.com/in/%C4%91%C4%83ng-th%E1%BA%A3o-t%E1%BA%A1-537278322/' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/tdt8102', href: 'https://github.com/tdt8102' },
    { icon: '📍', label: 'Location', value: 'Đan Phượng - Hà Nội', href: '#' }
  ];

  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          <span className="title-bracket">[</span>
          GET IN TOUCH
          <span className="title-bracket">]</span>
        </h2>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="info-title">LET'S TEAM UP!</h3>
            <p className="info-text">
              Tôi luôn sẵn sàng để thảo luận về các dự án QA, chia sẻ kiến thức, 
              hoặc chỉ để chat về các công nghệ kiểm thử mới. Hãy liên hệ với tôi!
            </p>

            <div className="contact-links">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="contact-link"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    x: 10,
                    boxShadow: '0 0 20px rgba(0, 255, 136, 0.4)'
                  }}
                >
                  <span className="contact-icon">{link.icon}</span>
                  <div className="contact-details">
                    <span className="contact-label">{link.label}</span>
                    <span className="contact-value">{link.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">&gt; NAME</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your name..."
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">&gt; EMAIL</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">&gt; MESSAGE</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Your message here..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="submit-button"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(0, 255, 136, 0.6)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                {submitted ? '✓ MESSAGE SENT!' : '[SEND MESSAGE]'}
              </motion.button>
            </form>

            {submitted && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                ✓ Thank you! I'll get back to you soon.
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
