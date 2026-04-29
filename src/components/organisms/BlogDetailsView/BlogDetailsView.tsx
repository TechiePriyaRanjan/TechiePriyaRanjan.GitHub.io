import React from 'react';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import ClientMotionWrapper from './ClientMotionWrapper';
import { Callout } from '@/components/mdx/Callout';
import { CodeBlock } from '@/components/mdx/CodeBlock';
import { StatCard } from '@/components/mdx/StatCard';
import { Pre } from '@/components/mdx/Pre';
import BackToTop from '@/components/atoms/BackToTop/BackToTop';
import rehypePrettyCode from 'rehype-pretty-code';

const mdxComponents = {
  Callout,
  CodeBlock,
  StatCard,
  pre: Pre,
};

/** @type {import('rehype-pretty-code').Options} */
const rehypeOptions = {
  theme: 'github-dark-dimmed',
  keepBackground: true,
  grid: true,
  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
};

interface BlogDetailsViewProps {
  post: BlogPost;
}

const BlogDetailsView: React.FC<BlogDetailsViewProps> = ({ post }) => {
  return (
    <ClientMotionWrapper>
      <div className="pb-24">
        {/* Header / Back Button */}
        <div className="mb-10 flex justify-between items-center group border-t border-[var(--border-color)] pt-8">
          <Link href="/blog">
            <button
              className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest px-4 py-2 rounded-[3px] border border-[var(--border-color)] hover:border-[var(--text-color)]/50 text-[var(--text-color)] transition-all duration-300 group"
            >
              <ArrowLeft size={16} className="-translate-x-0 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </button>
          </Link>
        </div>

        <article className="flex flex-col gap-8 max-w-4xl mx-auto">
          {/* Post Header */}
          <header className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-6 text-[11px] md:text-xs font-mono tracking-widest text-[var(--muted)] uppercase opacity-80">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="opacity-60" /> {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="opacity-60" /> {post.readTime}
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--text-color)] leading-[1.1]">
              {post.title}
            </h1>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-1.5 px-3 py-1 bg-[var(--text-color)]/5 text-[var(--muted)] text-[10px] font-bold uppercase tracking-widest rounded-full border border-[var(--border-color)]">
                    <Tag size={10} className="opacity-60" /> {tag}
                  </span>
                ))}
              </div>
            )}

            {post.coverImage && (
              <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl bg-neutral-900 mt-4">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </header>

          {/* Post Content */}
          <div className="prose prose-invert max-w-none mt-4 text-lg leading-relaxed prose-p:my-6 prose-headings:text-[var(--text-color)] prose-headings:tracking-tight prose-a:text-emerald-500 hover:prose-a:text-emerald-400 prose-strong:text-[var(--text-color)] prose-code:text-emerald-300 prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-[var(--border-color)]">
            <MDXRemote 
              source={post.content} 
              components={mdxComponents} 
              options={{
                mdxOptions: {
                  rehypePlugins: [[rehypePrettyCode, rehypeOptions]],
                },
              }}
            />
          </div>
        </article>
        <BackToTop />
      </div>
    </ClientMotionWrapper>
  );
};

export default BlogDetailsView;
