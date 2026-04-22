'use client';

import Footer from '@/components/molecules/Footer/Footer';
import Navigation from '@/components/molecules/Navbar/Navbar';
import Hero from '@/components/organisms/Hero/Hero';

export default function Page() {
  return (
    <div className="relative bg-[var(--bg-color)] text-[var(--text-color)] font-sans min-h-screen overflow-x-hidden flex flex-col transition-colors duration-300">
      <Navigation />

      <main className="flex-1 w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
        <Hero />
      </main>

      <Footer />
    </div>
  );
}
