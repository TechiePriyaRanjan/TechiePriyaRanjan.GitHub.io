'use client';

import PageLayout from '@/components/templates/PageLayout/PageLayout';
import BlogList from '@/components/organisms/BlogList/BlogList';
import PageHeading from '@/components/molecules/PageHeading/PageHeading';
import BackToTop from '@/components/atoms/BackToTop/BackToTop';

import { BlogPost } from '@/lib/blog';

interface BlogPageContentProps {
  posts: BlogPost[];
}

export default function BlogPageContent({ posts }: BlogPageContentProps) {
  return (
    <PageLayout>
      <PageHeading
        pageName="BLOG"
        pageSubTitle="Writing"
        pageQuotation="Thoughts, reflections, and technical deep-dives on software engineering, design, and building for the web."
      />
      <BlogList posts={posts} />
      <BackToTop />
    </PageLayout>
  );
}
