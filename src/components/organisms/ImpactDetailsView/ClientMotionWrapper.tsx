'use client';

import React from 'react';
import { motion } from 'motion/react';

interface ClientMotionWrapperProps {
  children: React.ReactNode;
}

const ClientMotionWrapper: React.FC<ClientMotionWrapperProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default ClientMotionWrapper;
