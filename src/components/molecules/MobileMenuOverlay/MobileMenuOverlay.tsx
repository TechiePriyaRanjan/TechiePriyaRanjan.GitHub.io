import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LinkItem {
  name: string;
  href: string;
}

interface MobileMenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  links: LinkItem[];
}

const MobileMenuOverlay: React.FC<MobileMenuOverlayProps> = ({ isOpen, onClose, links }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--bg-color)] sm:hidden"
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute top-6 left-6 p-2 text-[var(--bg-color)] bg-[var(--text-color)] shadow-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--text-color)] rounded-sm"
            onClick={onClose}
            aria-label="Close Mobile Menu"
          >
            <X size={24} aria-hidden="true" />
          </button>
          <nav>
            <ul className="text-center space-y-6 uppercase tracking-[4px] font-mono text-xl">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={onClose}
                    className="relative text-[var(--text-color)] shadow-[0_-3px_0_0_var(--text-color)_inset] hover:shadow-[0_-20px_0_0_var(--text-color)_inset] transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-8 focus-visible:ring-[var(--text-color)] rounded-sm px-2"
                    aria-label={`Navigate to ${link.name}`}
                  >
                    {link.name.slice(0, -1)}
                    <span className="tracking-normal">{link.name.slice(-1)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuOverlay;
