import React from 'react';
import { MonitorPlay, Github } from 'lucide-react';
import { motion } from 'motion/react';
import Badge from '@/components/atoms/Badge/Badge';
import { TalkDataType } from '@/components/molecules/TalkCard/TalkCard';

interface TalkListItemProps {
  talk: TalkDataType;
  index: number;
}

const TalkListItem: React.FC<TalkListItemProps> = ({ talk, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col md:flex-row md:items-center py-6 md:py-8 border-b border-[var(--border-color)] hover:bg-[var(--text-color)]/5 transition-colors duration-300 px-4 -mx-4  cursor-default"
    >
      {/* Date & Place on left for desktop */}
      <div className="w-full md:w-1/4 flex flex-col md:pr-4 shrink-0 mb-3 md:mb-0">
        <span className="text-[11px] md:text-sm font-mono tracking-widest text-[var(--muted)] group-hover:text-[var(--text-color)] transition-colors uppercase mb-1">{talk.date}</span>
        <span className="text-[11px] md:text-sm font-semibold opacity-90">{talk.place}</span>
      </div>

      {/* Title & Tags in Center */}
      <div className="w-full md:w-2/4 pr-4 md:pr-8 shrink-0 mb-4 md:mb-0 flex flex-col">
        <h3 className="text-xl md:text-[22px] font-bold group-hover:text-emerald-500 transition-colors tracking-tight mb-2">
          {talk.title}
        </h3>
        <div className="flex flex-wrap gap-2 mt-1">
          {talk.tags.map(tag => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>

      {/* Links on Right */}
      <div className="w-full md:w-1/4 flex items-center justify-start md:justify-end gap-6 shrink-0 mt-2 md:mt-0">
        {talk.slidesUrl && (
          <a href={talk.slidesUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:opacity-50 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-[var(--text-color)] rounded-sm">
            <MonitorPlay size={16} aria-hidden="true" /> SLIDES
          </a>
        )}
        {talk.githubUrl && (
          <a href={talk.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:opacity-50 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-[var(--text-color)] rounded-sm">
            <Github size={16} aria-hidden="true" /> REPO
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default TalkListItem;
