'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMonitor, FiServer, FiSmartphone, FiCpu, FiCamera, FiFilm, FiImage } from 'react-icons/fi';
import {
  SiReact, SiTypescript, SiJavascript,
  SiHtml5, SiNodedotjs, SiPython,
  SiFlutter, SiDart, SiTensorflow,
  SiFigma,
  SiMongodb, SiPostgresql, SiGit, SiDocker, SiFirebase,
} from 'react-icons/si';
import styles from './Skills.module.css';

const skillCategories = [
  {
    title: 'Frontend',
    description: 'Building beautiful interfaces',
    icon: <FiMonitor />,
    colorClass: 'Purple',
    skills: [
      { name: 'React / Next.js', icon: <SiReact color="#61DAFB" />, level: 90 },
      { name: 'TypeScript', icon: <SiTypescript color="#3178C6" />, level: 85 },
      { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" />, level: 92 },
      { name: 'HTML5 / CSS3', icon: <SiHtml5 color="#E34F26" />, level: 95 },
    ],
  },
  {
    title: 'Backend',
    description: 'Server-side development',
    icon: <FiServer />,
    colorClass: 'Cyan',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs color="#339933" />, level: 85 },
      { name: 'Python', icon: <SiPython color="#3776AB" />, level: 88 },
      { name: 'PostgreSQL', icon: <SiPostgresql color="#4169E1" />, level: 80 },
      { name: 'MongoDB', icon: <SiMongodb color="#47A248" />, level: 82 },
    ],
  },
  {
    title: 'Mobile',
    description: 'Cross-platform apps',
    icon: <FiSmartphone />,
    colorClass: 'Pink',
    skills: [
      { name: 'Flutter', icon: <SiFlutter color="#02569B" />, level: 80 },
      { name: 'Dart', icon: <SiDart color="#0175C2" />, level: 78 },
      { name: 'React Native', icon: <SiReact color="#61DAFB" />, level: 75 },
      { name: 'Firebase', icon: <SiFirebase color="#FFCA28" />, level: 85 },
    ],
  },
  {
    title: 'AI & ML',
    description: 'Intelligent solutions',
    icon: <FiCpu />,
    colorClass: 'Green',
    skills: [
      { name: 'TensorFlow', icon: <SiTensorflow color="#FF6F00" />, level: 75 },
      { name: 'Python ML', icon: <SiPython color="#3776AB" />, level: 82 },
      { name: 'Data Science', icon: <SiPython color="#3776AB" />, level: 78 },
      { name: 'Computer Vision', icon: <FiCpu color="#00E5FF" />, level: 70 },
    ],
  },
  {
    title: 'Creative',
    description: 'Design & content creation',
    icon: <FiCamera />,
    colorClass: 'Warm',
    skills: [
      { name: 'Figma', icon: <SiFigma color="#F24E1E" />, level: 85 },
      { name: 'Premiere Pro', icon: <FiFilm color="#9999FF" />, level: 88 },
      { name: 'Photoshop', icon: <FiImage color="#31A8FF" />, level: 80 },
      { name: 'Photography', icon: <FiCamera color="#00E5FF" />, level: 85 },
    ],
  },
  {
    title: 'DevOps',
    description: 'Deploy & infrastructure',
    icon: <FiServer />,
    colorClass: 'Blue',
    skills: [
      { name: 'Git', icon: <SiGit color="#F05032" />, level: 88 },
      { name: 'Docker', icon: <SiDocker color="#2496ED" />, level: 75 },
      { name: 'CI/CD', icon: <FiServer color="#4A8BFF" />, level: 72 },
      { name: 'Linux', icon: <FiMonitor color="#FCC624" />, level: 78 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className={`section ${styles.skills}`} id="skills">
      <div className="container" ref={ref}>
        <motion.div
          className="sectionHeader"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="sectionLabel">Skills</span>
          <h2 className="sectionTitle">
            My <span className="gradientText">Tech Arsenal</span>
          </h2>
          <p className="sectionDescription">
            Technologies and tools I use to bring ideas to life, from concept
            to deployment.
          </p>
        </motion.div>

        <div className={styles.skillsCategories}>
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className={`${styles.categoryCard} ${
                styles[`category${category.colorClass}`]
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
            >
              <div className={styles.categoryHeader}>
                <div
                  className={`${styles.categoryIcon} ${
                    styles[`icon${category.colorClass}`]
                  }`}
                >
                  {category.icon}
                </div>
                <div>
                  <div className={styles.categoryTitle}>{category.title}</div>
                  <div className={styles.categoryDescription}>
                    {category.description}
                  </div>
                </div>
              </div>

              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className={styles.skillItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: catIndex * 0.15 + skillIndex * 0.1 + 0.3,
                    }}
                  >
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>
                        <span className={styles.skillIcon}>{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.progressBar}>
                      <motion.div
                        className={`${styles.progressFill} ${
                          styles[`fill${category.colorClass}`]
                        }`}
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1.5,
                          delay: catIndex * 0.15 + skillIndex * 0.1 + 0.5,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
