'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import styles from './Contact.module.css';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="container" ref={ref}>
        <motion.div
          className="sectionHeader"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="sectionLabel">Contact</span>
          <h2 className="sectionTitle">
            Let&apos;s Work <span className="gradientText">Together</span>
          </h2>
          <p className="sectionDescription">
            Have a project in mind? Let&apos;s discuss how we can create
            something amazing together.
          </p>
        </motion.div>

        <div className={styles.contactGrid}>
          {/* Left info */}
          <motion.div
            className={styles.contactLeft}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div>
              <h3 className={styles.contactTitle}>
                Got a project?{' '}
                <span className="gradientText">Let&apos;s talk!</span>
              </h3>
              <p className={styles.contactDescription}>
                Saya selalu terbuka untuk peluang baru, kolaborasi menarik,
                atau sekadar berdiskusi tentang teknologi dan kreativitas.
                Jangan ragu untuk menghubungi saya!
              </p>
            </div>

            <div className={styles.contactInfoList}>
              <div className={styles.contactInfoItem}>
                <div className={styles.contactInfoIcon}>
                  <FiMail />
                </div>
                <div>
                  <div className={styles.contactInfoLabel}>Email</div>
                  <div className={styles.contactInfoValue}>
                    dharma.mudita@email.com
                  </div>
                </div>
              </div>
              <div className={styles.contactInfoItem}>
                <div className={styles.contactInfoIcon}>
                  <FiMapPin />
                </div>
                <div>
                  <div className={styles.contactInfoLabel}>Location</div>
                  <div className={styles.contactInfoValue}>
                    Indonesia, ID
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.contactSocials}>
              <motion.a
                href="https://github.com/dharmamudita"
                className={`${styles.contactSocialLink} ${styles.socialGithub}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub />
              </motion.a>
              <motion.a
                href="#"
                className={`${styles.contactSocialLink} ${styles.socialLinkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiLinkedin />
              </motion.a>
              <motion.a
                href="#"
                className={`${styles.contactSocialLink} ${styles.socialInstagram}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiInstagram />
              </motion.a>
              <motion.a
                href="mailto:dharma.mudita@email.com"
                className={`${styles.contactSocialLink} ${styles.socialEmail}`}
                aria-label="Email"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiMail />
              </motion.a>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.form
            className={styles.contactForm}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={styles.formInput}
                  placeholder="Your name"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={styles.formInput}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.formLabel}>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className={styles.formInput}
                placeholder="Project discussion"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                Message
              </label>
              <textarea
                id="message"
                className={styles.formTextarea}
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              className={styles.formSubmit}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiSend /> Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
