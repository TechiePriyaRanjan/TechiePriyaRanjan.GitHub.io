'use client';

import React from 'react';
import { motion } from 'motion/react';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="flex flex-wrap gap-2 md:gap-4 mb-8"
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`text-[10px] uppercase font-bold tracking-widest px-4 py-2 rounded-[3px] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-[var(--text-color)] ${activeCategory === category
              ? "bg-[var(--text-color)] text-[var(--bg-color)] shadow-sm"
              : "border border-[var(--border-color)] hover:border-[var(--text-color)]/50 text-[var(--text-color)] opacity-70 hover:opacity-100"
            }`}
        >
          {category}
        </button>
      ))}
    </motion.div>
  );
};

export default CategoryFilter;
