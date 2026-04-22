'use client';

import Navigation from '@/components/molecules/Navbar/Navbar';
import Footer from '@/components/molecules/Footer/Footer';
import WorkGrid from '@/components/organisms/WorkGrid/WorkGrid';
import { motion } from 'motion/react';

export default function WorkPage() {
  return (
    <div className="relative bg-[var(--bg-color)] text-[var(--text-color)] font-sans min-h-screen overflow-x-hidden flex flex-col transition-colors duration-300">
      <Navigation />

      <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16 flex flex-col">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="mb-8"
        >
          <p className="text-[10px] tracking-[0.3em] font-bold uppercase text-[var(--muted)] mb-4 md:mb-6">
            Projects
          </p>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-4 md:mb-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-[var(--text-color)] leading-[1.05]">
              SELECTED WORK
            </h1>
          </div>
          <p className="text-lg md:text-xl text-[var(--muted)] font-serif italic max-w-2xl leading-relaxed">
            &quot;A collection of open-source projects, tools, and technical experiments I&#39;ve built over the years.&quot;
          </p>
        </motion.div>

        <WorkGrid />
      </main>

      <Footer />
    </div>
  );
}
