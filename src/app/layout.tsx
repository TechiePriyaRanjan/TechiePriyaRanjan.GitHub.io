import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://priyaranjan.dev'),
  title: 'Priya Ranjan — Pragmatic Engineer Portfolio Website',
  description: 'Portfolio of PriyaRanjan Dubey, a pragmatic software engineer based in Bengaluru, India.',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[var(--bg-color)] text-[var(--text-color)] font-sans min-h-screen overflow-x-hidden transition-colors duration-300">
        {children}
      </body>
    </html>
  )
}
