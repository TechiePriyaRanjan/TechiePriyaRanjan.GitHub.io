import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export interface BlogPostType {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  url: string;
}

interface BlogListItemProps {
  post: BlogPostType;
  index: number;
}

const BlogListItem: React.FC<BlogListItemProps> = ({ post, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col md:flex-row md:items-center py-6 md:py-8 border-b border-[var(--border-color)] hover:bg-[var(--text-color)]/5 transition-colors duration-300 px-4 -mx-4 rounded-xl cursor-default"
    >
      {/* Title & Description on left */}
      <div className="w-full md:w-3/4 pr-4 md:pr-12 shrink-0 mb-4 md:mb-0 flex flex-col">
         <h3 className="text-xl md:text-[22px] font-bold group-hover:text-emerald-500 transition-colors tracking-tight mb-2 md:mb-3">
           {post.title}
         </h3>
         <p className="text-sm md:text-[15px] text-[var(--muted)] leading-relaxed max-w-3xl">
           {post.description}
         </p>
      </div>

      {/* Meta data and Link on Right */}
      <div className="w-full md:w-1/4 flex flex-col items-start md:items-end gap-2 shrink-0">
         <div className="flex items-center gap-3 text-[11px] md:text-xs font-mono tracking-wider md:tracking-widest text-[var(--muted)] uppercase opacity-80">
           <Calendar size={13} className="opacity-60" aria-hidden="true" /> {post.date}
         </div>
         <div className="flex items-center gap-3 text-[10px] md:text-[11px] font-mono tracking-wider md:tracking-widest text-[var(--muted)] uppercase opacity-80 mb-3 md:mb-4">
           <Clock size={13} className="opacity-60" aria-hidden="true" /> {post.readTime}
         </div>
         
         <a href={post.url} className="flex items-center gap-2 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--text-color)] opacity-80 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-[var(--text-color)] rounded-sm group-hover:translate-x-1 duration-300 mt-1">
           READ ARTICLE <ArrowRight size={14} aria-hidden="true" />
         </a>
      </div>
    </motion.div>
  );
};

export default BlogListItem;
