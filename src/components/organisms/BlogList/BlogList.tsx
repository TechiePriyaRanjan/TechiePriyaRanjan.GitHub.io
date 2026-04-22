import React from 'react';
import BlogListItem, { BlogPostType } from '@/components/molecules/BlogCard/BlogListItem';

export const blogData: BlogPostType[] = [
  // {
  //   id: 1,
  //   title: 'The Art of Pragmatic Engineering',
  //   description: 'Why perfection is the enemy of shipping, and how to find the balance between elegant code and delivering value.',
  //   date: 'March 24, 2026',
  //   readTime: '6 min read',
  //   url: '#',
  // },
  // {
  //   id: 2,
  //   title: 'Rebuilding a Portfolio with Modern Tools',
  //   description: 'A deep dive into the design decisions, component architecture, and animation strategies used in my latest updates.',
  //   date: 'February 12, 2026',
  //   readTime: '8 min read',
  //   url: '#',
  // },
  // {
  //   id: 3,
  //   title: 'Mastering Design Tokens',
  //   description: 'Creating scalable, themeable, and maintainable utility variations by pushing configuration to its limits.',
  //   date: 'January 05, 2026',
  //   readTime: '5 min read',
  //   url: '#',
  // }
];

const BlogList = () => {
  if (!blogData || blogData.length === 0) {
    return (
      <div className="flex justify-center mt-12 mb-12 py-12 md:py-24 border border-dashed border-[var(--border-color)] rounded-xl">
        <h2 className="text-xl md:text-2xl font-semibold text-[var(--muted)] tracking-tight">
          No articles published yet.
        </h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col mt-8 mb-12 border-t border-[var(--border-color)]">
      {blogData.map((post, index) => (
        <BlogListItem key={post.id} post={post} index={index} />
      ))}
    </div>
  );
};

export default BlogList;
