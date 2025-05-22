'use client';

import React from 'react';
import { motion } from 'framer-motion';
import './animated-background.css';

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="animated-bg-pattern"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
    </div>
  );
}
