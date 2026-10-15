import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/portfolio/theme-provider";

// Retro-modern typography: Space Grotesk (geometric display) + JetBrains Mono (code)
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Keep Geist as fallback
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://vidalalvarez.vercel.app";
const SITE_NAME = "Vidal Alvarez - Software Engineer Portfolio";
const SITE_TITLE = "Vidal Reynaldo Alvarez Challco | Software Engineer";
const SITE_DESCRIPTION =
  "Software Engineer con 12+ años de experiencia en arquitecturas escalables, microservicios y SaaS educativo con IA. Especialista en TypeScript, Node.js, Angular, Next.js, Flutter y Prisma. Ingeniero de Sistemas (EMI 2012).";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Vidal Alvarez",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js 16",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Vidal Alvarez",
    "Reynaldo Alvarez",
    "Vidal Reynaldo Alvarez Challco",
    "Software Engineer",
    "Ingeniero de Software",
    "Ingeniero de Sistemas",
    "EMI Escuela Militar de Ingeniería",
    "Fullstack Developer Bolivia",
    "Desarrollador La Paz",
    "TypeScript",
    "Angular",
    "Next.js",
    "Node.js",
    "Flutter",
    "Dart",
    "Express",
    "Prisma ORM",
    "Microservicios",
    "Clean Architecture",
    "SaaS Educativo",
    "SaaS Multi-tenant",
    "Inteligencia Artificial Educativa",
    "Plataforma SaaS",
    "PostgreSQL",
    "PostGIS",
    "Docker",
    "AWS",
    "Vercel",
    "DevOps",
    "CI/CD",
    "Ministerio de Educación Bolivia",
    "Sector Público",
    "Desarrollo de Software Bolivia",
    "Arquitectura de Software",
    "Sistemas Distribuidos",
    "API REST",
    "JWT",
    "Zod",
    "Jest",
    "Geopois",
    "BunkerDev",
    "Luminia",
  ],
  authors: [
    { name: "Vidal Reynaldo Alvarez Challco", url: SITE_URL },
  ],
  creator: "Vidal Reynaldo Alvarez Challco",
  publisher: "Vidal Reynaldo Alvarez Challco",
  category: "Technology",
  classification: "Software Engineering Portfolio",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "es-BO": SITE_URL,
      "es": SITE_URL,
      "en": SITE_URL,
    },
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vidal Reynaldo Alvarez Challco - Software Engineer Portfolio",
        type: "image/png",
      },
    ],
    locale: "es_BO",
    alternateLocale: ["es_ES", "en_US"],
    type: "profile",
    firstName: "Vidal Reynaldo",
    lastName: "Alvarez Challco",
    username: "ReynaldoAlvarez",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    site: "@bunkerdev",
    creator: "@bunkerdev",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
    bingbot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
    yandex: {
      index: true,
      follow: true,
    },
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180" },
    ],
    other: [
      { rel: "mask-icon", url: "/icon.svg" },
    ],
  },
  appleWebApp: {
    title: "Vidal Alvarez",
    statusBarStyle: "black-translucent",
    capable: true,
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  verification: {
    google: "google-site-verification-token",
  },
  other: {
    "profile:username": "ReynaldoAlvarez",
    "author": "Vidal Reynaldo Alvarez Challco",
    "language": "Spanish",
    "geo.region": "BO-L",
    "geo.placename": "La Paz, Bolivia",
    "geo.position": "-16.4897;-68.1193",
    "ICBM": "-16.4897, -68.1193",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1a4d3a" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1a14" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark light",
};

// JSON-LD Structured Data for SEO
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vidal Reynaldo Alvarez Challco",
  alternateName: "Vidal Alvarez",
  url: SITE_URL,
  image: `${SITE_URL}/images/profile/vidal-profile.png`,
  jobTitle: "Software Engineer",
  description: SITE_DESCRIPTION,
  email: "mailto:vidal.r.a.777@gmail.com",
  nationality: "Bolivian",
  address: {
    "@type": "PostalAddress",
    addressLocality: "La Paz",
    addressRegion: "La Paz",
    addressCountry: "BO",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Escuela Militar de Ingeniería \"Mcal. Antonio José de Sucre\"",
    alternateName: "EMI",
    sameAs: "https://es.wikipedia.org/wiki/Escuela_Militar_de_Ingenier%C3%ADa",
  },
  knowsAbout: [
    "Software Architecture",
    "Microservices",
    "Clean Architecture",
    "Domain-Driven Design",
    "TypeScript",
    "Node.js",
    "Angular",
    "Next.js",
    "React",
    "Flutter",
    "Prisma ORM",
    "PostgreSQL",
    "PostGIS",
    "Docker",
    "AWS",
    "SaaS Multi-tenant",
    "Educational Technology",
    "Artificial Intelligence",
    "DevOps",
  ],
  sameAs: [
    "https://github.com/ReynaldoAlvarez",
    "https://linkedin.com/in/vidal-reynaldo-alvarez-challco-46633584",
    "https://youtube.com/@bunkerdev",
    "https://geopois.com",
  ],
  worksFor: {
    "@type": "Organization",
    name: "BunkerDev",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  author: personSchema,
  inLanguage: "es-BO",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?s={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Vidal Reynaldo Alvarez Challco - Software Engineering Services",
  description: "Servicios de ingeniería de software: arquitectura de microservicios, SaaS educativo, desarrollo fullstack.",
  url: SITE_URL,
  image: `${SITE_URL}/images/profile/vidal-profile.png`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "La Paz",
    addressCountry: "BO",
  },
  areaServed: ["Bolivia", "España", "Estados Unidos", "Worldwide"],
  serviceType: [
    "Software Architecture",
    "Fullstack Development",
    "Microservices",
    "SaaS Development",
    "Educational Technology",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, websiteSchema, professionalServiceSchema]),
          }}
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://vercel.com" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
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
