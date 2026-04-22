import React from 'react';
import Navigation from '@/components/molecules/Navbar/Navbar';
import Footer from '@/components/molecules/Footer/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="relative bg-[var(--bg-color)] text-[var(--text-color)] font-sans min-h-screen overflow-x-hidden flex flex-col transition-colors duration-300">
      <Navigation />

      <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:pt-0 md:pb-16 flex flex-col">
        {children}
      </main>

      <Footer />
    </div>
  );
}
