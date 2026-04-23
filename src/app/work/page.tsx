import type { Metadata } from 'next';
import WorkPageContent from './WorkPageContent';

export const metadata: Metadata = {
  title: 'Work — Selected Projects & Open Source',
  description:
    'A collection of open-source projects, tools, and technical experiments built by PriyaRanjan Dubey — spanning React, Next.js, and modern web technologies.',
  alternates: {
    canonical: 'https://priyaranjan.dev/work',
  },
  openGraph: {
    title: 'Work — Selected Projects & Open Source',
    description:
      'A collection of open-source projects, tools, and technical experiments built by PriyaRanjan Dubey.',
    url: 'https://priyaranjan.dev/work',
    type: 'website',
  },
  twitter: {
    title: 'Work — Selected Projects & Open Source | Priya Ranjan',
    description:
      'A collection of open-source projects, tools, and technical experiments built by PriyaRanjan Dubey.',
  },
};

export default function WorkPage() {
  return <WorkPageContent />;
}
