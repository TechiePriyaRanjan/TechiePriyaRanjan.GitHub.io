import React from 'react';
import { motion } from 'motion/react';

interface PageHeadingProps {
  pageName: string;
  pageSubTitle: string;
  pageQuotation: React.ReactNode;
  children?: React.ReactNode;
}

const PageHeading: React.FC<PageHeadingProps> = ({
  pageName,
  pageSubTitle,
  pageQuotation,
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <p className="text-[10px] tracking-[0.3em] font-bold uppercase text-[var(--muted)] mb-4 md:mb-6">
        {pageSubTitle}
      </p>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-4 md:mb-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-[var(--text-color)] leading-[1.05]">
          {pageName}
        </h1>
        {children}
      </div>
      <p className="text-lg md:text-xl text-[var(--muted)] font-serif italic max-w-2xl leading-relaxed">
        {pageQuotation}
      </p>
    </motion.div>
  );
};

export default PageHeading;
