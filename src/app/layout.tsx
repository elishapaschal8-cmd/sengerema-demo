import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export const metadata: Metadata = {
  title: 'Sengerema Engineering Group Ltd | Electrical & Engineering Solutions Tanzania',
  description:
    'Sengerema Engineering Group Ltd delivers electrical infrastructure, rural electrification, power distribution and engineering solutions across Tanzania.',
  metadataBase: new URL('https://example.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-mist">
      <body className={`${inter.variable} ${manrope.variable} bg-mist text-ink`}>
        {children}
      </body>
    </html>
  );
}
