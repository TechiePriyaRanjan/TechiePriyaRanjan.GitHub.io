import React from 'react';

interface StatCardProps {
  label: string;
  value: string;
  description?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, description }) => {
  return (
    <div className="p-6 rounded-xl border border-[var(--border-color)] bg-neutral-900/30 flex flex-col gap-2">
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
        {label}
      </span>
      <span className="text-3xl font-bold tracking-tight text-[var(--text-color)]">
        {value}
      </span>
      {description && (
        <p className="text-xs text-[var(--muted)] leading-relaxed mt-1">
          {description}
        </p>
      )}
    </div>
  );
};
