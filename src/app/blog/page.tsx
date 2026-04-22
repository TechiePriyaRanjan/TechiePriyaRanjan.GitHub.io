'use client';

import PageLayout from '@/components/templates/PageLayout/PageLayout';
import BlogList from '@/components/organisms/BlogList/BlogList';
import PageHeading from '@/components/molecules/PageHeading/PageHeading';

export default function BlogPage() {
  return (
    <PageLayout>
      <PageHeading
        pageName="BLOG"
        pageSubTitle="Writing"
        pageQuotation="Thoughts, reflections, and technical deep-dives on software engineering, design, and building for the web."
      />
      <BlogList />
    </PageLayout>
  );
}
