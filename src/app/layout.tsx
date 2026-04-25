import type { Metadata } from 'next';
import './globals.css';
import '@/styles/syntax.css';

/* ── Site Constants ── */
const SITE_URL = 'https://priyaranjan.dev';
const SITE_NAME = 'Priya Ranjan — Portfolio';
const SITE_TITLE = 'Priya Ranjan — Pragmatic Engineer Portfolio';
const SITE_DESCRIPTION =
  'Portfolio of PriyaRanjan Dubey — a pragmatic software engineer based in Bengaluru, India. Explore projects, blog posts, and conference talks on web development, React, and modern frontend architecture.';
const OG_IMAGE = '/images/og-image.png';

/* ── Next.js Metadata API ── */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  /* Title template: sub-pages render as "Page Title | Priya Ranjan" */
  title: {
    default: SITE_TITLE,
    template: '%s | Priya Ranjan',
  },

  description: SITE_DESCRIPTION,

  keywords: [
    'Priya Ranjan',
    'PriyaRanjan Dubey',
    'software engineer',
    'frontend developer',
    'web developer',
    'React developer',
    'Next.js',
    'Bengaluru',
    'India',
    'portfolio',
    'pragmatic engineer',
    'full stack developer',
    'JavaScript',
    'TypeScript',
  ],

  authors: [{ name: 'PriyaRanjan Dubey', url: SITE_URL }],
  creator: 'PriyaRanjan Dubey',
  publisher: 'PriyaRanjan Dubey',

  /* Crawling & indexing directives */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  /* Canonical & alternate URLs */
  alternates: {
    canonical: SITE_URL,
  },

  /* ── Open Graph (Facebook, LinkedIn, WhatsApp, Slack, etc.) ── */
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'PriyaRanjan Dubey — Pragmatic Engineer',
        type: 'image/png',
      },
    ],
  },

  /* ── Twitter / X Cards ── */
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: '@techiepriyarnjn',
    site: '@techiepriyarnjn',
    images: {
      url: OG_IMAGE,
      alt: 'PriyaRanjan Dubey — Pragmatic Engineer',
    },
  },

  /* ── Search Console verified via DNS TXT record ── */

  /* ── GEO meta tags for local / regional SEO ── */
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Bengaluru',
    'geo.position': '12.9716;77.5946',
    'ICBM': '12.9716, 77.5946',
    'content-language': 'en-IN',
    'revisit-after': '7 days',
    'rating': 'general',
    'distribution': 'global',
    'coverage': 'worldwide',
  },

  /* ── App category for search engines ── */
  category: 'technology',
};

/* ── JSON-LD Structured Data (Person + WebSite + ProfilePage) ── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { '@id': `${SITE_URL}/#person` },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'PriyaRanjan Dubey',
      alternateName: 'Priya Ranjan',
      url: SITE_URL,
      jobTitle: 'Software Engineer',
      description:
        'Pragmatic software engineer based in Bengaluru, India, specialising in modern web development with React, Next.js, and TypeScript.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
      },
      sameAs: [
        'https://twitter.com/techiepriyarnjn',
        'https://www.linkedin.com/in/techiepriyaranjan/',
        'https://github.com/TechiePriyaRanjan',
        'https://www.instagram.com/techiepriyarnjn/',
      ],
      image: `${SITE_URL}/images/PriyaRanjan.jpg`,
      knowsAbout: [
        'React',
        'Next.js',
        'JavaScript',
        'TypeScript',
        'CSS',
        'HTML',
        'Node.js',
        'Frontend Development',
        'Web Performance',
        'Software Architecture',
      ],
    },
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: SITE_TITLE,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#person` },
      mainEntity: { '@id': `${SITE_URL}/#person` },
      inLanguage: 'en-IN',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className="bg-[var(--bg-color)] text-[var(--text-color)] font-sans min-h-screen overflow-x-hidden transition-colors duration-300">
        {/* JSON-LD structured data for rich search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
