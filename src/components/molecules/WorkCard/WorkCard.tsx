import React from 'react';
import { FolderGit2, Github, ExternalLink, MonitorPlay } from 'lucide-react';
import { motion } from 'motion/react';
import Badge from '@/components/atoms/Badge/Badge';

export interface WorkProjectType {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  presentationUrl?: string;
}

interface WorkCardProps {
  project: WorkProjectType;
  index: number;
}

const WorkCard: React.FC<WorkCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col border border-[var(--border-color)] bg-[var(--bg-color)] p-4 md:p-5 hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 rounded-lg cursor-default h-full"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="text-[var(--text-color)] opacity-70 group-hover:opacity-100 transition-opacity">
          <FolderGit2 size={24} strokeWidth={1.5} />
        </div>
        <div className="flex items-center gap-3 text-[var(--muted)] z-10 transition-opacity">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub Repository" className="hover:text-[var(--text-color)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-color)] rounded-sm">
              <Github size={18} strokeWidth={2} />
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" aria-label="Live Demo" className="hover:text-[var(--text-color)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-color)] rounded-sm">
              <ExternalLink size={18} strokeWidth={2} />
            </a>
          )}
          {project.presentationUrl && (
            <a href={project.presentationUrl} target="_blank" rel="noreferrer" aria-label="Presentation Details" className="hover:text-[var(--text-color)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-color)] rounded-sm">
              <MonitorPlay size={18} strokeWidth={2} />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-lg md:text-xl font-bold tracking-tight mb-2 text-[var(--text-color)] group-hover:text-emerald-500 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-[13px] md:text-sm text-[var(--muted)] leading-relaxed mb-4 line-clamp-3 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </motion.div>
  );
};

export default WorkCard;
