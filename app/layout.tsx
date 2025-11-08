import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vos Arkana ? Unveil Hidden Value',
  description:
    'Vos Arkana is an AI-native platform to reveal, organize, and act on hidden knowledge across your organization.',
  metadataBase: new URL('https://agentic-d1920b66.vercel.app'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Vos Arkana ? Unveil Hidden Value',
    description:
      'Reveal, organize, and act on your hidden knowledge with Vos Arkana.',
    url: 'https://agentic-d1920b66.vercel.app',
    siteName: 'Vos Arkana',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vos Arkana ? Unveil Hidden Value',
    description: 'An elegant, fast landing experience for Vos Arkana.'
  },
  icons: {
    icon: '/logo.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
