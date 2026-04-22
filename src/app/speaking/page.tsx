'use client';

import { useState } from 'react';
import PageLayout from '@/components/templates/PageLayout/PageLayout';
import TalksGrid, { talksData } from '@/components/organisms/TalksGrid/TalksGrid';
import PageHeading from '@/components/molecules/PageHeading/PageHeading';
import { LayoutGrid, GripHorizontal } from 'lucide-react';

export default function SpeakingPage() {
  // const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  return (
    <PageLayout>
      <PageHeading
        pageName="TALKS & CONFERENCES"
        pageSubTitle="Public Speaking"
        pageQuotation="I love sharing my knowledge with the community. Here are some of the places I've had the opportunity to speak at."
      >
        {/*
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
        */}
      </PageHeading>

      <TalksGrid viewMode="list" />
    </PageLayout>
  );
}
