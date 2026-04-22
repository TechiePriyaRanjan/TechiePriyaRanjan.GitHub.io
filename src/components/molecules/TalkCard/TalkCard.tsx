import React from 'react';
import { Calendar, MapPin, MonitorPlay, Github } from 'lucide-react';
import Badge from '@/components/atoms/Badge/Badge';
import { motion } from 'motion/react';

export interface TalkDataType {
  id: number;
  title: string;
  tags: string[];
  date: string;
  place: string;
  slidesUrl: string;
  githubUrl: string;
}

interface TalkCardProps {
  talk: TalkDataType;
  index: number;
}

const TalkCard: React.FC<TalkCardProps> = ({ talk, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col border border-[var(--border-color)] bg-[var(--bg-color)] p-6 md:p-8 hover:shadow-xl transition-shadow duration-300 rounded-sm"
    >
      <div className="flex flex-wrap gap-2 mb-8 mt-2">
        {talk.tags.map(tag => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <h3 className="text-xl md:text-[22px] font-bold leading-[1.25] tracking-tight mb-20 text-[var(--text-color)]">
        {talk.title}
      </h3>

      <div className="mt-auto">
        <div className="flex flex-col gap-3 mb-8 text-xs font-mono text-[var(--muted)] opacity-80">
          <div className="flex items-center gap-3">
            <Calendar size={13} className="opacity-70" aria-hidden="true" /> {talk.date}
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={13} className="opacity-70" aria-hidden="true" /> {talk.place}
          </div>
        </div>

        <div className="h-[1px] w-full bg-[var(--text-color)] opacity-5 mb-5" /> 

        <div className="flex flex-wrap items-center gap-6 mt-1 text-[9px] uppercase font-bold tracking-widest text-[var(--text-color)] opacity-90">
          {talk.slidesUrl && (
            <a href={talk.slidesUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[var(--neon-green)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-[var(--text-color)] rounded-sm">
              <MonitorPlay size={12} aria-hidden="true" /> SLIDES
            </a>
          )}
          {talk.githubUrl && (
            <a href={talk.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[var(--neon-green)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-[var(--text-color)] rounded-sm">
              <Github size={12} aria-hidden="true" /> REPO
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TalkCard;
