import React from 'react';
import { Menu } from 'lucide-react';

interface HamburgerButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ onClick, isOpen }) => {
  return (
    <button
      className="md:hidden fixed top-6 left-6 z-50 p-2 bg-[var(--bg-color)]/90 backdrop-blur-md shadow-sm border border-gray-200 dark:border-gray-800 text-[var(--text-color)] opacity-90 hover:opacity-100 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-color)] rounded-md"
      onClick={onClick}
      aria-label="Open Mobile Menu"
      aria-expanded={isOpen}
    >
      <Menu size={28} aria-hidden="true" />
    </button>
  );
};

export default HamburgerButton;
