import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const display = Space_Grotesk({
  variable: "--font-display-src",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Inter({
  variable: "--font-sans-src",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono-src",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Reynaldo Alvarez — Desarrollador Creativo",
  description:
    "Portafolio de Reynaldo Alvarez. Diseño y construyo experiencias digitales rápidas, accesibles y memorables: front-end, UI/UX, e-commerce y performance.",
  keywords: [
    "Reynaldo Alvarez",
    "portafolio",
    "desarrollador creativo",
    "front-end",
    "UI/UX",
    "Next.js",
    "React",
    "La Paz",
    "Bolivia",
  ],
  authors: [{ name: "Reynaldo Alvarez" }],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Reynaldo Alvarez — Desarrollador Creativo",
    description:
      "Diseño y construyo experiencias digitales rápidas, accesibles y memorables.",
    siteName: "Reynaldo Alvarez",
    type: "website",
    locale: "es_BO",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} antialiased bg-[#0a0a0b] text-zinc-100 font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
