'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { FiCode, FiCamera, FiSmartphone, FiCpu, FiFilm, FiPenTool } from 'react-icons/fi';
import styles from './About.module.css';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { number: 20, suffix: '+', label: 'Projects', colorClass: 'statPurple' },
  { number: 2, suffix: '+', label: 'Years Exp.', colorClass: 'statCyan' },
  { number: 10, suffix: '+', label: 'Tech Stack', colorClass: 'statPink' },
];

const interests = [
  { icon: <FiCode />, label: 'Web Dev' },
  { icon: <FiSmartphone />, label: 'Mobile App' },
  { icon: <FiCpu />, label: 'AI & ML' },
  { icon: <FiCamera />, label: 'Photography' },
  { icon: <FiFilm />, label: 'Video Editing' },
  { icon: <FiPenTool />, label: 'UI/UX Design' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container" ref={ref}>
        <motion.div
          className="sectionHeader"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="sectionLabel">About Me</span>
          <h2 className="sectionTitle">
            Passionate about <span className="gradientText">Innovation</span>
          </h2>
          <p className="sectionDescription">
            Transforming ideas into digital reality through code, creativity, and
            cutting-edge technology.
          </p>
        </motion.div>

        <div className={styles.aboutGrid}>
          {/* Left - Visual */}
          <motion.div
            className={styles.aboutLeft}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className={styles.aboutImageCard}>
              <div className={styles.aboutImageInner}>
                <div className={styles.aboutImageGradient} />
                <Image src="/avatar.jpg" alt="Dharma Mudita" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.cardGlow} />
            </div>
            <div className={styles.aboutImageDecor} />
            <motion.div
              className={styles.experienceCard}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, type: 'spring' }}
            >
              <div className={styles.experienceNumber}>
                <AnimatedCounter target={2} suffix="+" />
              </div>
              <div className={styles.experienceLabel}>Years Experience</div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className={styles.aboutRight}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className={styles.aboutText}>
              Saya <span className={styles.aboutHighlight}>Dharma Mudita</span>,
              seorang mahasiswa dan developer berbasis di{' '}
              <span className={styles.aboutHighlight}>Indonesia</span> yang
              bersemangat dalam membangun solusi digital yang inovatif dan
              berdampak.
            </p>
            <p className={styles.aboutText}>
              Dengan keahlian di bidang{' '}
              <span className={styles.aboutHighlight}>Full-Stack Web Development</span>,{' '}
              <span className={styles.aboutHighlight}>AI & Machine Learning</span>, dan{' '}
              <span className={styles.aboutHighlight}>Mobile App Development</span>, saya
              selalu mencari cara baru untuk menggabungkan teknologi dengan
              kreativitas. Saya juga aktif sebagai{' '}
              <span className={styles.aboutHighlight}>Content Creator</span>,{' '}
              <span className={styles.aboutHighlight}>Photographer</span>, dan{' '}
              <span className={styles.aboutHighlight}>Video Editor</span>.
            </p>

            {/* Stats */}
            <div className={styles.statsGrid}>
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className={styles.statCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.15 }}
                >
                  <div className={`${styles.statNumber} ${styles[stat.colorClass]}`}>
                    <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Interest Tags */}
            <div className={styles.interestTags}>
              {interests.map((interest, i) => (
                <motion.span
                  key={interest.label}
                  className={styles.interestTag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.1, type: 'spring' }}
                  whileHover={{ scale: 1.05 }}
                >
                  {interest.icon} {interest.label}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
