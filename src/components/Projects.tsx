'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCpu, FiShoppingBag, FiBarChart2, FiFilm, FiMessageCircle } from 'react-icons/fi';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'AI-Powered Portfolio Generator',
    description:
      'Platform berbasis AI yang secara otomatis menghasilkan website portfolio profesional dari data pengguna menggunakan machine learning dan NLP.',
    category: 'AI / Web App',
    tags: ['Next.js', 'Python', 'TensorFlow', 'OpenAI'],
    icon: <FiCpu />,
    gradient: 'linear-gradient(135deg, #234178 0%, #4A8BFF 50%, #00E5FF 100%)',
    featured: true,
    github: '#',
    demo: '#',
  },
  {
    title: 'E-Commerce Mobile App',
    description:
      'Aplikasi e-commerce cross-platform dengan fitur AR untuk preview produk, payment gateway, dan real-time tracking.',
    category: 'Mobile App',
    tags: ['Flutter', 'Firebase', 'Stripe', 'Dart'],
    icon: <FiShoppingBag />,
    gradient: 'linear-gradient(135deg, #0a1128 0%, #234178 100%)',
    featured: false,
    github: '#',
    demo: '#',
  },
  {
    title: 'Smart Campus Dashboard',
    description:
      'Dashboard analytics untuk monitoring kampus dengan IoT sensor data, real-time visualization, dan predictive maintenance.',
    category: 'Web App',
    tags: ['React', 'Node.js', 'MongoDB', 'D3.js'],
    icon: <FiBarChart2 />,
    gradient: 'linear-gradient(135deg, #1a3266 0%, #00E5FF 100%)',
    featured: false,
    github: '#',
    demo: '#',
  },
  {
    title: 'Content Creator Toolkit',
    description:
      'Suite tools untuk content creator termasuk video editor sederhana, thumbnail generator, dan social media scheduler.',
    category: 'Creative Tool',
    tags: ['Next.js', 'FFmpeg', 'Canvas API', 'AWS'],
    icon: <FiFilm />,
    gradient: 'linear-gradient(135deg, #111d3a 0%, #4A8BFF 100%)',
    featured: false,
    github: '#',
    demo: '#',
  },
  {
    title: 'Real-Time Chat Application',
    description:
      'Aplikasi chat real-time dengan fitur video call, file sharing, end-to-end encryption, dan AI-powered smart replies.',
    category: 'Full-Stack',
    tags: ['React', 'Socket.io', 'WebRTC', 'PostgreSQL'],
    icon: <FiMessageCircle />,
    gradient: 'linear-gradient(135deg, #234178 0%, #5EEFFF 100%)',
    featured: false,
    github: '#',
    demo: '#',
  },
];

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -12, y: x * 12 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={cardRef}
      className={`${styles.projectCard} ${
        project.featured ? styles.projectFeatured : ''
      }`}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
    >
      <div className={styles.projectImageWrapper} style={{ background: project.gradient }}>
        <div className={styles.projectImage}>{project.icon}</div>
        <div className={styles.projectGlare} />
        <div className={styles.projectOverlay}>
          <a
            href={project.demo}
            className={`${styles.overlayButton} ${styles.overlayButtonPrimary}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink /> Live Demo
          </a>
          <a
            href={project.github}
            className={`${styles.overlayButton} ${styles.overlayButtonSecondary}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub /> Source
          </a>
        </div>
      </div>

      <div className={styles.projectContent}>
        <div className={styles.projectCategory}>{project.category}</div>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>
        <div className={styles.projectTags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.projectTag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.cardBorderGlow} />
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className={`section ${styles.projects}`} id="projects">
      <div className="container" ref={ref}>
        <motion.div
          className="sectionHeader"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="sectionLabel">Projects</span>
          <h2 className="sectionTitle">
            Featured <span className="gradientText">Works</span>
          </h2>
          <p className="sectionDescription">
            A showcase of projects that demonstrate my expertise across
            different technologies and domains.
          </p>
        </motion.div>

        <div className={styles.projectsGrid}>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
