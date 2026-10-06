import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.zeshan.store'),
  title: 'Muhammad Zeshan | Full-Stack Engineer',
  description:
    'Full-stack engineer with 4+ years of experience in scalable systems, data pipelines, ecommerce, and AI agent evaluation. React, Next.js, Node.js, TypeScript.',
  keywords: [
    'full-stack engineer',
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'real-time systems',
    'GraphQL',
    'healthcare tech',
    'web scraping',
    'AI evaluation',
    'n8n',
  ],
  authors: [{ name: 'Muhammad Zeshan' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <main className="max-w-[880px] mx-auto px-5 py-10 sm:px-6">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
