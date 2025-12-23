import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AgeGate from '@/components/AgeGate';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zizounation - Expérience de Vape Premium',
  description: 'Boutique de produits de vape premium - RODMAN 15000 bouffées & Coolbar 12000 bouffées',
  keywords: 'vape, bouffées, RODMAN, Coolbar, vape premium',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <CartProvider>
          <AgeGate />
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

