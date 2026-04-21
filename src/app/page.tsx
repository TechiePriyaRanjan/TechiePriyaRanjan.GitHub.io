'use client';

import Hero from '@/components/organisms/Hero/Hero';
import Navigation from '@/components/molecules/Navbar/Navbar';
import ThemeToggle from '@/components/atoms/ThemeToggle/ThemeToggle';

export default function Page() {
  return (
    <div className="relative bg-[var(--bg-color)] text-[var(--text-color)] font-sans min-h-screen overflow-x-hidden flex flex-col transition-colors duration-300">
      <ThemeToggle />
      <Navigation />

      <main className="flex-1 w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
        <Hero />
      </main>

      <footer className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-end shrink-0">
        <div className="hidden md:block" />
        <div className="text-right w-full md:w-auto mt-8 md:mt-0">
          <p className="text-[10px] text-[var(--muted)] uppercase tracking-widest">
            Inspired from{' '}
            <a
              href="https://travisneilson.com/"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--text-color)] opacity-70 hover:opacity-100 hover:underline transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-[var(--text-color)] rounded-[2px]"
            >
              Travis Neilson&apos;s portfolio
            </a>
          </p>
          <p className="text-[10px] mt-1 text-[var(--muted)] tracking-widest uppercase">
            PR.DEV © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
