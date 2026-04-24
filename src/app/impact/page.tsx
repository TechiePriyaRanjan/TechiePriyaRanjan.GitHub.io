import type { Metadata } from 'next';
import ImpactPageContent from './ImpactPageContent';
import { getAllImpactItems } from '@/lib/impact';

export const metadata: Metadata = {
  title: 'Impact — Community & Mentorship',
  description:
    'Explore the community impact, mentorship, and volunteering efforts by PriyaRanjan Dubey — helping developers grow and contributing to the open-source ecosystem.',
  alternates: {
    canonical: 'https://priyaranjan.dev/impact',
  },
  openGraph: {
    title: 'Impact — Community & Mentorship',
    description:
      'Community impact, mentorship, and volunteering efforts by PriyaRanjan Dubey.',
    url: 'https://priyaranjan.dev/impact',
    type: 'website',
  },
  twitter: {
    title: 'Impact — Community & Mentorship | Priya Ranjan',
    description:
      'Community impact, mentorship, and volunteering efforts by PriyaRanjan Dubey.',
  },
};

export default async function ImpactPage() {
  const items = await getAllImpactItems();
  return <ImpactPageContent items={items} />;
}
