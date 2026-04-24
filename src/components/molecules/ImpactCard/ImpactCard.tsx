'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import Badge from '@/components/atoms/Badge/Badge';

export interface ImpactItem {
  id: number;
  title: string;
  category: string;
  date: string;
  description: string;
  link?: string;
  organization?: string;
}

interface ImpactCardProps {
  item: ImpactItem;
  index: number;
}

const ImpactCard: React.FC<ImpactCardProps> = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col md:flex-row py-6 md:py-8 border-b border-[var(--border-color)] hover:bg-[var(--text-color)]/5 transition-colors duration-300 px-4 -mx-4 cursor-default"
    >
      {/* Content Section (Left) */}
      <div className="w-full md:w-3/4 pr-4 md:pr-12 shrink-0 mb-4 md:mb-0 flex flex-col">
        <div className="flex items-center gap-3 mb-1.5">
          <h3 className="text-xl md:text-[22px] font-bold text-[var(--text-color)] group-hover:text-emerald-500 transition-colors tracking-tight">
            {item.title}
          </h3>
          <Badge>{item.category}</Badge>
        </div>

        {item.organization && (
          <p className="text-[11px] md:text-xs font-bold text-[var(--muted)] tracking-[0.15em] uppercase mb-3 opacity-80">
            @ {item.organization}
          </p>
        )}

        <p className="text-sm md:text-[15px] text-[var(--muted)] leading-relaxed max-w-3xl">
          {item.description}
        </p>
      </div>

      {/* Meta Section (Right) */}
      <div className="w-full md:w-1/4 flex flex-col items-start md:items-end justify-between shrink-0">
        <div className="flex items-center gap-2 text-[11px] md:text-xs font-mono tracking-wider md:tracking-widest text-[var(--muted)] uppercase opacity-70">
          <Calendar size={13} className="opacity-60" /> {item.date}
        </div>

        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--text-color)] opacity-80 hover:opacity-100 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-[var(--text-color)] rounded-sm group-hover:translate-x-1 duration-300 mt-3"
          >
            VIEW DETAILS <ArrowRight size={14} aria-hidden="true" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ImpactCard;
