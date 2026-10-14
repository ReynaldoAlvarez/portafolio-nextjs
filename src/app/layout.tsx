import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/portfolio/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vidal Reynaldo Alvarez Challco | Software Engineer",
  description:
    "Software Engineer especializado en arquitecturas escalables, SaaS educativo con IA y desarrollo fullstack con TypeScript, Next.js, Node.js y Flutter. Portafolio profesional orientado al sector público educativo.",
  keywords: [
    "Vidal Alvarez",
    "Reynaldo Alvarez",
    "Software Engineer",
    "Fullstack Developer",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Flutter",
    "SaaS Educativo",
    "Inteligencia Artificial",
    "Ministerio de Educación",
    "Desarrollo de Software",
    "Arquitectura de Software",
    "Prisma",
    "Express",
  ],
  authors: [{ name: "Vidal Reynaldo Alvarez Challco" }],
  creator: "Vidal Reynaldo Alvarez Challco",
  metadataBase: new URL("https://vidalalvarez.vercel.app"),
  alternates: {
    canonical: "https://vidalalvarez.vercel.app",
  },
  openGraph: {
    title: "Vidal Reynaldo Alvarez Challco | Software Engineer",
    description:
      "Portafolio profesional de Software Engineer especializado en SaaS educativo, arquitecturas escalables y desarrollo fullstack.",
    url: "https://vidalalvarez.vercel.app",
    siteName: "Vidal Alvarez - Portfolio",
    type: "profile",
    locale: "es_BO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidal Reynaldo Alvarez | Software Engineer",
    description:
      "Software Engineer especializado en arquitecturas escalables y SaaS educativo con IA.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <SonnerToaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
