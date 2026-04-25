'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface PreProps extends React.HTMLAttributes<HTMLPreElement> {
  'data-language'?: string;
  'data-theme'?: string;
}

export const Pre: React.FC<PreProps> = ({ children, className, ...props }) => {
  const [copied, setCopied] = useState(false);
  
  // Extract text content for copying
  const getTextContent = (node: any): string => {
    if (typeof node === 'string') return node;
    if (Array.isArray(node)) return node.map(getTextContent).join('');
    if (node?.props?.children) return getTextContent(node.props.children);
    return '';
  };

  const handleCopy = () => {
    const text = getTextContent(children);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lang = props['data-language'] || 'text';

  return (
    <figure className="relative group">
      <div className="flex items-center justify-between px-4 py-2 rounded-t-xl border-x border-t border-[var(--border-color)] bg-neutral-900/80 backdrop-blur-sm text-[10px] font-mono tracking-widest text-[var(--muted)] uppercase">
        <span>{lang}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 hover:text-[var(--text-color)] transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check size={12} className="text-emerald-500" />
              <span className="text-emerald-500">Copied</span>
            </>
          ) : (
            <>
              <Copy size={12} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre 
        {...props} 
        className={`${className} !mt-0 !rounded-t-none border-t-0`}
      >
        {children}
      </pre>
    </figure>
  );
};
