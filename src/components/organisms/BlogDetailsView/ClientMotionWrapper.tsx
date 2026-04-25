'use client';

import React from 'react';
import { motion } from 'motion/react';

interface ClientMotionWrapperProps {
  children: React.ReactNode;
}

const ClientMotionWrapper: React.FC<ClientMotionWrapperProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default ClientMotionWrapper;
