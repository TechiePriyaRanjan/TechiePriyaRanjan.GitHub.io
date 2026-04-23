'use client';

import PageLayout from '@/components/templates/PageLayout/PageLayout';
import TalksGrid from '@/components/organisms/TalksGrid/TalksGrid';
import PageHeading from '@/components/molecules/PageHeading/PageHeading';

export default function SpeakingPageContent() {
  // View mode toggle is available in TalksGrid — uncomment and wire up when ready.
  // import { useState } from 'react';
  // import { LayoutGrid, GripHorizontal } from 'lucide-react';
  // const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  return (
    <PageLayout>
      <PageHeading
        pageName="TALKS & CONFERENCES"
        pageSubTitle="Public Speaking"
        pageQuotation="I love sharing my knowledge with the community. Here are some of the places I've had the opportunity to speak at."
      />
      <TalksGrid viewMode="list" />
    </PageLayout>
  );
}
