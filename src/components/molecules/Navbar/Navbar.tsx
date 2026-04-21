'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const links = [
  { name: 'Home', href: '#' },
  { name: 'Work', href: '#' },
  { name: 'Speaking', href: '#' },
  { name: 'Podcasts', href: '#' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <header className="hidden md:flex justify-between items-center px-12 py-8 shrink-0 w-full max-w-7xl mx-auto">
        <div className="text-4xl font-signature text-[var(--text-color)] drop-shadow-sm">PriyaRanjan</div>
        <nav className="flex gap-8 items-center uppercase text-xs font-semibold tracking-widest">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[var(--text-color)] hover:opacity-50 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-[var(--text-color)] rounded-sm"
              aria-label={`Navigate to ${link.name}`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </header>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden fixed top-6 left-6 z-50 p-2 text-[var(--text-color)] opacity-70 hover:opacity-100 transition-opacity cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-color)] rounded-sm"
        onClick={() => setIsOpen(true)}
        aria-label="Open Mobile Menu"
        aria-expanded={isOpen}
      >
        <Menu size={28} aria-hidden="true" />
      </button>

      {/* Mobile Full Screen Menu */}
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
              onClick={() => setIsOpen(false)}
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
                      onClick={() => setIsOpen(false)}
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
    </>
  );
};

export default Navigation;