import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Priya Ranjan — Portfolio',
    short_name: 'PriyaRanjan',
    description: 'Portfolio of PriyaRanjan Dubey, a pragmatic software engineer based in Bengaluru, India.',
    start_url: '/',
    display: 'standalone',
    background_color: '#faf9f6',
    theme_color: '#1a1a1a',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
