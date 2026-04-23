import type { Metadata } from 'next';
import SpeakingPageContent from './SpeakingPageContent';

export const metadata: Metadata = {
  title: 'Speaking — Talks & Conferences',
  description:
    'Conference talks and public speaking engagements by PriyaRanjan Dubey — sharing knowledge on software engineering, frontend development, and web technologies.',
  alternates: {
    canonical: 'https://priyaranjan.dev/speaking',
  },
  openGraph: {
    title: 'Speaking — Talks & Conferences',
    description:
      'Conference talks and public speaking engagements by PriyaRanjan Dubey.',
    url: 'https://priyaranjan.dev/speaking',
    type: 'website',
  },
  twitter: {
    title: 'Speaking — Talks & Conferences | Priya Ranjan',
    description:
      'Conference talks and public speaking engagements by PriyaRanjan Dubey.',
  },
};

export default function SpeakingPage() {
  return <SpeakingPageContent />;
}
