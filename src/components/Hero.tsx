'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiArrowRight, FiDownload } from 'react-icons/fi';
import { SiNextdotjs, SiPython, SiReact, SiFlutter, SiTensorflow, SiTypescript } from 'react-icons/si';
import styles from './Hero.module.css';

const roles = [
  'Full-Stack Web Developer',
  'AI & ML Enthusiast',
  'Mobile App Developer',
  'Content Creator & Photographer',
  'Video Editor',
];

const floatingTechs = [
  { icon: <SiReact />, color: '#61DAFB', x: '85%', y: '15%', delay: 0, size: 32 },
  { icon: <SiPython />, color: '#3776AB', x: '10%', y: '25%', delay: 1, size: 28 },
  { icon: <SiNextdotjs />, color: '#ffffff', x: '92%', y: '60%', delay: 2, size: 30 },
  { icon: <SiFlutter />, color: '#02569B', x: '5%', y: '70%', delay: 3, size: 26 },
  { icon: <SiTensorflow />, color: '#FF6F00', x: '78%', y: '80%', delay: 4, size: 24 },
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText === role) {
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayedText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }, 50);
    } else if (isDeleting) {
      timeout = setTimeout(
        () => setDisplayedText((prev) => prev.slice(0, -1)),
        25
      );
    } else {
      timeout = setTimeout(
        () => setDisplayedText(role.slice(0, displayedText.length + 1)),
        60
      );
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRole]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
  };

  return (
    <section className={styles.hero} id="home">
      {/* Floating tech icons */}
      {floatingTechs.map((tech, i) => (
        <motion.div
          key={i}
          className={styles.floatingTech}
          style={{
            left: tech.x,
            top: tech.y,
            color: tech.color,
            fontSize: tech.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.15, 0.35, 0.15],
            scale: [0.9, 1.1, 0.9],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            delay: tech.delay * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {tech.icon}
        </motion.div>
      ))}

      <div className={styles.heroContent}>
        {/* Left side */}
        <motion.div
          className={styles.heroLeft}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.badge} variants={childVariants}>
            <span className={styles.badgeDot} />
            <span>Available for Opportunities</span>
          </motion.div>

          <motion.h1 className={styles.heroTitle} variants={childVariants}>
            <span className={styles.heroGreeting}>Hi, I&apos;m</span>
            <span className={styles.heroName}>Dharma</span>
            <span className={styles.heroNameOutline}>Mudita</span>
          </motion.h1>

          <motion.div className={styles.typingWrapper} variants={childVariants}>
            <span className={styles.typingPrefix}>{'>'}</span>
            <span className={styles.typingText}>{displayedText}</span>
            <span className={styles.cursor} />
          </motion.div>

          <motion.p className={styles.heroDescription} variants={childVariants}>
            Passionate about crafting innovative digital solutions. I blend
            creative design with cutting-edge technology to build experiences
            that make a difference.
          </motion.p>

          <motion.div className={styles.heroButtons} variants={childVariants}>
            <motion.a
              href="#projects"
              className={styles.heroPrimary}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 40px rgba(74, 139, 255, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className={styles.btnShine} />
              View My Work <FiArrowRight />
            </motion.a>
            <motion.a
              href="#contact"
              className={styles.heroSecondary}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <FiDownload /> Download CV
            </motion.a>
          </motion.div>

          <motion.div className={styles.socialLinks} variants={childVariants}>
            {[
              { icon: <FiGithub />, href: 'https://github.com/dharmamudita', label: 'GitHub' },
              { icon: <FiLinkedin />, href: '#', label: 'LinkedIn' },
              { icon: <FiInstagram />, href: '#', label: 'Instagram' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side - Enhanced Visual */}
        <motion.div
          className={styles.heroRight}
          initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <div className={styles.heroVisual}>
            {/* Animated rings */}
            <div className={`${styles.heroRing} ${styles.heroRing1}`} />
            <div className={`${styles.heroRing} ${styles.heroRing2}`} />
            <div className={`${styles.heroRing} ${styles.heroRing3}`} />

            {/* Gradient morphing blob */}
            <div className={styles.morphBlob} />

            {/* Center avatar */}
            <div className={styles.heroImageWrapper}>
              <div className={styles.heroImage}>
                <span className={styles.heroImageText}>DM</span>
              </div>
            </div>

            {/* Orbit ring 1 - Inner orbit */}
            <div className={`${styles.orbitPath} ${styles.orbitPath1}`}>
              <div className={styles.orbitBadge}>
                <div className={styles.orbitBadgeInner}>
                  <SiReact color="#61DAFB" /> React
                </div>
              </div>
              <div className={`${styles.orbitBadge} ${styles.orbitBadgeOpposite}`}>
                <div className={styles.orbitBadgeInner}>
                  <SiPython color="#3776AB" /> Python
                </div>
              </div>
            </div>

            {/* Orbit ring 2 - Middle orbit */}
            <div className={`${styles.orbitPath} ${styles.orbitPath2}`}>
              <div className={styles.orbitBadge}>
                <div className={styles.orbitBadgeInner}>
                  <SiNextdotjs /> Next.js
                </div>
              </div>
              <div className={`${styles.orbitBadge} ${styles.orbitBadgeOpposite}`}>
                <div className={styles.orbitBadgeInner}>
                  <SiFlutter color="#02569B" /> Flutter
                </div>
              </div>
            </div>

            {/* Orbit ring 3 - Outer orbit */}
            <div className={`${styles.orbitPath} ${styles.orbitPath3}`}>
              <div className={styles.orbitBadge}>
                <div className={styles.orbitBadgeInner}>
                  <SiTensorflow color="#FF6F00" /> TensorFlow
                </div>
              </div>
              <div className={`${styles.orbitBadge} ${styles.orbitBadgeOpposite}`}>
                <div className={styles.orbitBadgeInner}>
                  <SiTypescript color="#3178C6" /> TypeScript
                </div>
              </div>
            </div>

            {/* Orbit glowing dots */}
            <div className={`${styles.orbitDot} ${styles.orbitDot1}`} />
            <div className={`${styles.orbitDot} ${styles.orbitDot2}`} />
            <div className={`${styles.orbitDot} ${styles.orbitDot3}`} />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <div className={styles.scrollMouse}>
          <div className={styles.scrollDot} />
        </div>
        <span>Scroll Down</span>
      </motion.div>
    </section>
  );
}
