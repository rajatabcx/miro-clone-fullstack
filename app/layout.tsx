import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ConvexClientProvider } from '@/providers/convex-client-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Miro Clone',
  description: 'This is miro clone, developed for leaning purposes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
        <Toaster position='top-right' />
      </body>
    </html>
  );
}
