import React from 'react';
import BlogListItem from '@/components/molecules/BlogCard/BlogListItem';
import { BlogPost } from '@/lib/blog';

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className="flex justify-center mt-12 mb-12 py-12 md:py-24 border border-dashed border-[var(--border-color)]">
        <h2 className="text-xl md:text-2xl font-semibold text-[var(--muted)] tracking-tight">
          No articles published yet.
        </h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col mt-8 mb-12 border-t border-[var(--border-color)]">
      {posts.map((post, index) => (
        <BlogListItem key={post.id} post={post} index={index} />
      ))}
    </div>
  );
};

export default BlogList;
