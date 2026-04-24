'use client';

import React, { useState } from 'react';
import CategoryFilter from '@/components/molecules/CategoryFilter/CategoryFilter';
import ImpactCard, { ImpactItem } from '@/components/molecules/ImpactCard/ImpactCard';
import { motion, AnimatePresence } from 'motion/react';

const impactData: ImpactItem[] = [
  {
    id: 1,
    title: "Frontend Mentor",
    organization: "TechStars Accelerator",
    date: "2024 - Present",
    category: "Mentorship",
    description: "Assisting early-stage startups in architecting scalable and performant frontend applications using React and Tailwind.",
    link: "#"
  },
  {
    id: 2,
    title: "Core Contributor",
    organization: "React Open Source",
    date: "2023 - 2024",
    category: "Open Source",
    description: "Contributed features and bug fixes to core accessibility utilities used by thousands of developers globally.",
    link: "#"
  },
  {
    id: 3,
    title: "Lead Organizer",
    organization: "React India Hackathon",
    date: "Oct 2023",
    category: "Hackathons",
    description: "Organized a 48-hour hackathon for 500+ attendees focusing on generative AI concepts and frontend UX.",
    link: "#"
  },
  {
    id: 4,
    title: "STEM Volunteer",
    organization: "Local High Schools",
    date: "2022 - 2023",
    category: "Volunteering",
    description: "Taught basic HTML, CSS, and interactive JavaScript to underrepresented students in local tech programs.",
    link: "#"
  },
  {
    id: 5,
    title: "Hackathon Winner",
    organization: "Global AI Summit",
    date: "March 2022",
    category: "Hackathons",
    description: "Built an accessibility-focused tool for visually impaired users. Won 1st place in the UX/UI category.",
    link: "#"
  }
];

const categories = ['All', 'Mentorship', 'Volunteering', 'Hackathons', 'Open Source'];

const ImpactGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = impactData.filter(item =>
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
