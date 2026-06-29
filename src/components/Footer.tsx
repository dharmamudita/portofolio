'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiArrowUp } from 'react-icons/fi';
import styles from './Footer.module.css';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: <FiGithub />, href: 'https://github.com/dharmamudita', label: 'GitHub' },
  { icon: <FiLinkedin />, href: '#', label: 'LinkedIn' },
  { icon: <FiInstagram />, href: '#', label: 'Instagram' },
  { icon: <FiMail />, href: 'mailto:dharmamudita@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      {/* Top accent line */}
      <div className={styles.footerAccent} />

      <div className={styles.footerInner}>
        {/* Main grid */}
        <div className={styles.footerGrid}>
          {/* Brand column */}
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <span className={styles.logoMark}>D</span>
              <span className={styles.logoText}>harma</span>
              <span className={styles.logoDot} />
            </div>
            <p className={styles.footerTagline}>
              Full-Stack Developer & Creative Technologist.
              Building digital experiences that matter.
            </p>
            <div className={styles.footerSocials}>
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  className={styles.footerSocialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links column */}
          <div className={styles.footerLinksCol}>
            <h4 className={styles.footerColTitle}>Navigation</h4>
            <nav className={styles.footerNav}>
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={styles.footerLink}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div className={styles.footerLinksCol}>
            <h4 className={styles.footerColTitle}>Get in Touch</h4>
            <div className={styles.footerContactInfo}>
              <span className={styles.footerContactItem}>dharmamudita@gmail.com</span>
              <span className={styles.footerContactItem}>Indonesia, ID</span>
              <span className={styles.footerContactItem}>Available for freelance</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.footerBottom}>
          <p className={styles.footerCopy}>
            &copy; {new Date().getFullYear()} Dharma Mudita. All rights reserved.
          </p>
          <motion.button
            className={styles.backToTop}
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            <FiArrowUp />
            <span>Top</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
