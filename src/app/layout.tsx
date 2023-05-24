
import './globals.css'
import { Montserrat } from 'next/font/google'
const inter = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'VidalAlvarez',
  description: 'portafolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}
