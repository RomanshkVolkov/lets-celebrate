import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
import { luxurious } from '@/utils/fonts';

export const metadata: Metadata = {
   title: 'Lets Celebrate!',
   description: 'Lets Celebrate!',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="es">
         <body className={luxurious.className}>
            <Providers>{children}</Providers>
         </body>
      </html>
   );
}
