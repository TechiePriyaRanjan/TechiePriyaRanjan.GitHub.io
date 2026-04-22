'use client';

import { useState } from 'react';
import Navigation from '@/components/molecules/Navbar/Navbar';
import Footer from '@/components/molecules/Footer/Footer';
import TalksGrid, { talksData } from '@/components/organisms/TalksGrid/TalksGrid';
import PageHeading from '@/components/molecules/PageHeading/PageHeading';
import { LayoutGrid, GripHorizontal } from 'lucide-react';

export default function SpeakingPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  return (
    <div className="relative bg-[var(--bg-color)] text-[var(--text-color)] font-sans min-h-screen overflow-x-hidden flex flex-col transition-colors duration-300">
      <Navigation />

      <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16 flex flex-col">
        <PageHeading
          pageName="TALKS & CONFERENCES"
          pageSubTitle="Public Speaking"
          pageQuotation="&quot;I love sharing my knowledge with the community. Here are some of the places I've had the opportunity to speak at.&quot;"
        >
          {talksData && talksData.length > 0 && (
            <div className="flex items-center bg-[var(--text-color)]/5 rounded-md p-1 self-start md:self-auto shrink-0">
              {viewMode === 'grid' ? (
                <button
                  onClick={() => setViewMode('list')}
                  className="p-2 rounded-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--text-color)] hover:bg-[var(--bg-color)] shadow-sm text-[var(--text-color)] opacity-70 hover:opacity-100"
                  aria-label="Switch to List View"
                >
                  <GripHorizontal size={20} />
                </button>
              ) : (
                <button
                  onClick={() => setViewMode('grid')}
                  className="p-2 rounded-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--text-color)] hover:bg-[var(--bg-color)] shadow-sm text-[var(--text-color)] opacity-70 hover:opacity-100"
                  aria-label="Switch to Grid View"
                >
                  <LayoutGrid size={20} />
                </button>
              )}
            </div>
          )}
        </PageHeading>

        <TalksGrid viewMode={viewMode} />
      </main>

      <Footer />
    </div>
  );
}
