'use client';
import { useThemeSwitcher } from '@/components/hooks/useThemeSwitcher'
import './globals.css'
import { Montserrat } from 'next/font/google'
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';

const inter = Montserrat({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, toggleTheme ] = useThemeSwitcher();
  return (
    <html lang="en">
      
        <body className={`${inter.className} bg-light dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 pr-16 pl-16`}>
        <NavBar />
          {children}
          <Analytics />
          <Footer />
          </body>
    </html>
  )
}
