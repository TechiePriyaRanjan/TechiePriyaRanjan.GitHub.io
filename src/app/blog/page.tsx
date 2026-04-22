'use client';

import Navigation from '@/components/molecules/Navbar/Navbar';
import Footer from '@/components/molecules/Footer/Footer';
import BlogList from '@/components/organisms/BlogList/BlogList';
import PageHeading from '@/components/molecules/PageHeading/PageHeading';

export default function BlogPage() {
  return (
    <div className="relative bg-[var(--bg-color)] text-[var(--text-color)] font-sans min-h-screen overflow-x-hidden flex flex-col transition-colors duration-300">
      <Navigation />

      <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16 flex flex-col">
        <PageHeading
          pageName="BLOG"
          pageSubTitle="Writing"
          pageQuotation="&quot;Thoughts, reflections, and technical deep-dives on software engineering, design, and building for the web.&quot;"
        />

        <BlogList />
      </main>

      <Footer />
    </div>
  );
}
