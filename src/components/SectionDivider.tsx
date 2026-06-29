'use client';

import { motion } from 'framer-motion';
import styles from './SectionDivider.module.css';

export default function SectionDivider() {
  return (
    <motion.div
      className={styles.divider}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className={styles.dividerLine} />
      <div className={styles.dividerGlow} />
      <div className={styles.dividerDot} />
    </motion.div>
  );
}
