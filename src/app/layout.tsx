'use client';
import { useThemeSwitcher } from '@/components/hooks/useThemeSwitcher'
import './globals.css'
import { Montserrat } from 'next/font/google'
const inter = Montserrat({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, toggleTheme ] = useThemeSwitcher();
  return (
    <html lang="en">
        <body className={`${inter.className} w-full bg-light dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8`}>{children}</body>
    </html>
  )
}
