import type { Metadata } from 'next';
import BlogPageContent from './BlogPageContent';

export const metadata: Metadata = {
  title: 'Blog — Writing & Technical Deep-Dives',
  description:
    'Thoughts, reflections, and technical deep-dives on software engineering, design, and building for the web by PriyaRanjan Dubey.',
  alternates: {
    canonical: 'https://priyaranjan.dev/blog',
  },
  openGraph: {
    title: 'Blog — Writing & Technical Deep-Dives',
    description:
      'Thoughts, reflections, and technical deep-dives on software engineering, design, and building for the web.',
    url: 'https://priyaranjan.dev/blog',
    type: 'website',
  },
  twitter: {
    title: 'Blog — Writing & Technical Deep-Dives | Priya Ranjan',
    description:
      'Thoughts, reflections, and technical deep-dives on software engineering, design, and building for the web.',
  },
};

export default function BlogPage() {
  return <BlogPageContent />;
}
