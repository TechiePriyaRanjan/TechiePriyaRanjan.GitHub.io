import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ children }) => {
  return (
    <span className="inline-block bg-slate-200/60 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 uppercase px-3 py-1 text-[9px] font-mono font-semibold tracking-widest rounded-sm">
      {children}
    </span>
  );
};

export default Badge;
