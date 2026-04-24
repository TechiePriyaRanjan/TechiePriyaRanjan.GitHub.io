'use client';

import React, { useState } from 'react';
import CategoryFilter from '@/components/molecules/CategoryFilter/CategoryFilter';
import ImpactCard from '@/components/molecules/ImpactCard/ImpactCard';
import { motion, AnimatePresence } from 'motion/react';
import { ImpactItem } from '@/lib/impact';

interface ImpactGridProps {
  items: ImpactItem[];
}

const categories = ['All', 'Mentorship', 'Volunteering', 'Hackathons', 'Open Source'];

const ImpactGrid: React.FC<ImpactGridProps> = ({ items }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = items.filter(item => 
    activeCategory === 'All' || item.category.toLowerCase() === activeCategory.toLowerCase()
  );

  return (
    <div className="mt-8">
      <CategoryFilter 
        categories={categories} 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      <div className="flex flex-col min-h-[400px] border-t border-[var(--border-color)]">
        <AnimatePresence mode="popLayout">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <ImpactCard key={item.id} item={item} index={index} />
            ))
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center py-24 border border-dashed border-[var(--border-color)] rounded-2xl mt-8"
            >
              <p className="text-[var(--muted)] font-medium">No items found in this category.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ImpactGrid;
