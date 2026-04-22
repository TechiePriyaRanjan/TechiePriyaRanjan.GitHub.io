'use client';

import Navigation from '@/components/molecules/Navbar/Navbar';
import Footer from '@/components/molecules/Footer/Footer';
import WorkGrid from '@/components/organisms/WorkGrid/WorkGrid';
import PageHeading from '@/components/molecules/PageHeading/PageHeading';

export default function WorkPage() {
  return (
    <div className="relative bg-[var(--bg-color)] text-[var(--text-color)] font-sans min-h-screen overflow-x-hidden flex flex-col transition-colors duration-300">
      <Navigation />

      <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16 flex flex-col">
        <PageHeading
          pageName="SELECTED WORK"
          pageSubTitle="Projects"
          pageQuotation="&quot;A collection of open-source projects, tools, and technical experiments I&#39;ve built over the years.&quot;"
        />

        <WorkGrid />
      </main>

      <Footer />
    </div>
  );
}
