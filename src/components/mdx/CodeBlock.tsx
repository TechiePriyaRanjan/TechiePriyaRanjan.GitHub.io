import React from 'react';

interface CodeBlockProps {
  children: React.ReactNode;
  language?: string;
  filename?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children, filename }) => {
  return (
    <div className="my-8 rounded-xl border border-[var(--border-color)] bg-neutral-900/50 overflow-hidden">
      {filename && (
        <div className="px-4 py-2 border-b border-[var(--border-color)] bg-neutral-900 text-[10px] font-mono tracking-widest text-[var(--muted)] uppercase">
          {filename}
        </div>
      )}
      <div className="p-4 overflow-x-auto font-mono text-sm leading-relaxed text-emerald-300">
        {children}
      </div>
    </div>
  );
};
