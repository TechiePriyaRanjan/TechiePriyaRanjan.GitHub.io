import React from 'react';
import { Info, AlertCircle, AlertTriangle } from 'lucide-react';

interface CalloutProps {
  children: React.ReactNode;
  type?: 'info' | 'warning' | 'danger';
}

export const Callout: React.FC<CalloutProps> = ({ children, type = 'info' }) => {
  const styles = {
    info: 'bg-emerald-500/5 border-emerald-500/20 text-emerald-300',
    warning: 'bg-amber-500/5 border-amber-500/20 text-amber-300',
    danger: 'bg-rose-500/5 border-rose-500/20 text-rose-300',
  };

  const icons = {
    info: <Info size={18} className="text-emerald-400" />,
    warning: <AlertTriangle size={18} className="text-amber-400" />,
    danger: <AlertCircle size={18} className="text-rose-400" />,
  };

  return (
    <div className={`my-8 flex gap-4 p-4 border rounded-xl ${styles[type]}`}>
      <div className="mt-1 shrink-0">{icons[type]}</div>
      <div className="text-sm leading-relaxed prose-p:my-0">{children}</div>
    </div>
  );
};
