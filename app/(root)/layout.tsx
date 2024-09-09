import { Inter } from 'next/font/google'
import '../globals.css'
import Topbar from '@/components/shared/Topbar';
import LeftSidebar from '@/components/shared/LeftSidebar';
import RightSidebar from '@/components/shared/RightSidebar';
import Bottombar from '@/components/shared/Bottombar';
import { Metadata } from 'next';

const inter = Inter({ subsets: ["latin"]})

export const metadata: Metadata = {
  title: 'San Isidro Lonas',
  description: 'Presupuestador SIL',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
      className={inter.className}
      >
        <Topbar />
          
          <main>
            <LeftSidebar />

            <section className='main-container'>
              <div className='w-full max-w-4xl'>
              {children}
              </div>
            </section>

            <RightSidebar />
          </main>

        <Bottombar />
      </body>
    </html>
  );
}
