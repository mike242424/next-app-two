import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from './components/Navbar';
import AuthProvider from './auth/Provider';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500'] });

const mario = localFont({
  src: '../public/fonts/SuperMarioBros.woff',
  variable: '--font-mario',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  openGraph: {
    title: '...',
    description: '...',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="winter">
      <body className={mario.variable}>
        <AuthProvider>
          <Navbar />
          <main className="p-5">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
