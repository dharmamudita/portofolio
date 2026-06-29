'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './PageLoader.module.css';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const duration = 2000;
    const interval = 20;
    const step = 100 / (duration / interval);
    let current = 0;

    const timer = setInterval(() => {
      current += step + Math.random() * step * 0.5;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setTimeout(() => {
          setLoading(false);
          // Show popup after loader exits
          setTimeout(() => {
            setShowPopup(true);
            // Hide popup after 2 seconds
            setTimeout(() => {
              setShowPopup(false);
            }, 2000);
          }, 600);
        }, 400);
      }
      setProgress(current);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className={styles.loader}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              className={styles.loaderLogo}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              DM
            </motion.div>
            <div className={styles.loaderBar}>
              <motion.div
                className={styles.loaderFill}
                style={{ width: `${progress}%` }}
              />
            </div>
            <motion.div
              className={styles.loaderText}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Loading Experience...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            className={styles.popupOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.popupContent}
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            >
              <div className={styles.popupIcon}>🚧</div>
              <h3 className={styles.popupTitle}>Pemberitahuan</h3>
              <p className={styles.popupText}>Mohon maaf, web ini sedang dalam pengembangan.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
