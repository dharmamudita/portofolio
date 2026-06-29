'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Timeline.module.css';

const experiences = [
  {
    year: '2024 - Present',
    title: 'Full-Stack Developer',
    org: 'Freelance & Open Source',
    desc: 'Building production-grade web applications and contributing to open source projects. Focused on Next.js, React, and modern cloud architectures.',
    tags: ['Next.js', 'React', 'TypeScript', 'AWS'],
  },
  {
    year: '2023 - 2024',
    title: 'AI & ML Research',
    org: 'University Project',
    desc: 'Researching and implementing machine learning models for real-world applications including computer vision and natural language processing.',
    tags: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV'],
  },
  {
    year: '2023 - Present',
    title: 'Mobile App Developer',
    org: 'Freelance',
    desc: 'Developing cross-platform mobile applications with Flutter for various clients, focusing on clean architecture and seamless user experience.',
    tags: ['Flutter', 'Dart', 'Firebase', 'REST API'],
  },
  {
    year: '2022 - Present',
    title: 'Content Creator',
    org: 'Self-Employed',
    desc: 'Creating high-quality digital content including photography, video production, and graphic design for social media and brand campaigns.',
    tags: ['Premiere Pro', 'Photoshop', 'Lightroom', 'Figma'],
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className={`section ${styles.timeline}`} id="experience">
      <div className="container" ref={ref}>
        <motion.div
          className="sectionHeader"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="sectionLabel">Experience</span>
          <h2 className="sectionTitle">
            My <span className="gradientText">Journey</span>
          </h2>
          <p className="sectionDescription">
            A timeline of my professional growth and key milestones.
          </p>
        </motion.div>

        <div className={styles.timelineGrid}>
          <div className={styles.timelineLine} />
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              className={`${styles.timelineItem} ${
                i % 2 !== 0 ? styles.timelineItemReverse : ''
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {i % 2 === 0 ? (
                <>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineYear}>{exp.year}</div>
                    <h3 className={styles.timelineTitle}>{exp.title}</h3>
                    <div className={styles.timelineOrg}>{exp.org}</div>
                    <p className={styles.timelineDesc}>{exp.desc}</p>
                    <div className={styles.timelineTags}>
                      {exp.tags.map((tag) => (
                        <span key={tag} className={styles.timelineTag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={styles.timelineDot}>
                    <div className={styles.timelineDotGlow} />
                  </div>
                  <div className={styles.timelineSpacer} />
                </>
              ) : (
                <>
                  <div className={styles.timelineSpacer} />
                  <div className={styles.timelineDot}>
                    <div className={styles.timelineDotGlow} />
                  </div>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineYear}>{exp.year}</div>
                    <h3 className={styles.timelineTitle}>{exp.title}</h3>
                    <div className={styles.timelineOrg}>{exp.org}</div>
                    <p className={styles.timelineDesc}>{exp.desc}</p>
                    <div className={styles.timelineTags}>
                      {exp.tags.map((tag) => (
                        <span key={tag} className={styles.timelineTag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
