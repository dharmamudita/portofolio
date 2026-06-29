'use client';

import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript,
  SiPython, SiFlutter, SiNodedotjs, SiTensorflow,
  SiFigma, SiGit, SiDocker, SiFirebase,
  SiMongodb, SiPostgresql,
} from 'react-icons/si';
import styles from './Marquee.module.css';

const techs = [
  { name: 'React', icon: <SiReact color="#61DAFB" /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
  { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
  { name: 'Python', icon: <SiPython color="#3776AB" /> },
  { name: 'Flutter', icon: <SiFlutter color="#02569B" /> },
  { name: 'Node.js', icon: <SiNodedotjs color="#339933" /> },
  { name: 'TensorFlow', icon: <SiTensorflow color="#FF6F00" /> },
  { name: 'Figma', icon: <SiFigma color="#F24E1E" /> },
  { name: 'Git', icon: <SiGit color="#F05032" /> },
  { name: 'Docker', icon: <SiDocker color="#2496ED" /> },
  { name: 'Firebase', icon: <SiFirebase color="#FFCA28" /> },
  { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql color="#4169E1" /> },
];

export default function Marquee() {
  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marqueeTrack}>
        {[0, 1].map((group) => (
          <div key={group} className={styles.marqueeGroup}>
            {techs.map((tech) => (
              <span key={`${group}-${tech.name}`}>
                <span className={styles.marqueeItem}>
                  <span className={styles.marqueeIcon}>{tech.icon}</span>
                  {tech.name}
                </span>
              </span>
            ))}
            {techs.map((tech) => (
              <span key={`${group}-dup-${tech.name}`}>
                <span className={styles.marqueeItem}>
                  <span className={styles.marqueeIcon}>{tech.icon}</span>
                  {tech.name}
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
