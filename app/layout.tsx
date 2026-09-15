import './globals.css';
import type { Metadata } from 'next';
import { Fredoka } from 'next/font/google';

// replaced the usual Inter font with Fredoka for that comic/animated feel
const fredoka = Fredoka({ subsets: ['latin'], weight: ['600'] });

export const metadata: Metadata = {
  title: 'Pokémon Results',
  description: 'Pokémon Results Front-End Application created with Next.js.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fredoka.className}>{children}</body>
    </html>
  );
}
