import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/header';
import Nav from '@/components/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'e-Commerce',
  description: 'Some e-Commerce website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Nav />
          {children}

          <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <p>Copright 2024 - All rights reserved by Me</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
