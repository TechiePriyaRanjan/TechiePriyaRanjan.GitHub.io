'use client';

import { useState } from 'react';
import HamburgerButton from '@/components/atoms/HamburgerButton/HamburgerButton';
import NavLinks from '@/components/atoms/NavLinks/NavLinks';
import MobileMenuOverlay from '@/components/molecules/MobileMenuOverlay/MobileMenuOverlay';
import ThemeToggle from '@/components/atoms/ThemeToggle/ThemeToggle';

const links = [
  { name: 'Home', href: '#' },
  { name: 'Work', href: '#' },
  { name: 'Speaking', href: '#' },
  { name: 'Blog', href: '#' },
  // { name: 'Podcasts', href: '#' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <header className="hidden md:flex justify-between items-center px-12 py-8 shrink-0 w-full max-w-7xl mx-auto">
        <div className="text-4xl font-signature text-[var(--text-color)] drop-shadow-sm">PriyaRanjan</div>
        <div className="flex gap-8 items-center">
          <NavLinks links={links} />
          <ThemeToggle />
        </div>
      </header>

      {/* Mobile Theme Toggle */}
      <div className="md:hidden">
        <ThemeToggle />
      </div>

      {/* Mobile Menu Icon */}
      <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(true)} />

      {/* Mobile Full Screen Menu */}
      <MobileMenuOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} links={links} />
    </>
  );
};

export default Navigation;