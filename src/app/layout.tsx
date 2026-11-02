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

/* ——— Constantes del sitio (dominio real del portafolio) ——— */
const SITE_URL = "https://vidalalvarez.vercel.app";
const SITE_TITLE = "Reynaldo Alvarez — Software Engineer & Arquitecto de Backend";
const SITE_DESCRIPTION =
  "Vidal Reynaldo Alvarez Challco. Ingeniero de software (EMI 2012) con 12+ años de experiencia: ingeniero de software GIS en Hansa Ltda., ingeniero y arquitecto principal en GEOPOIS.COM (Madrid) y hoy soluciones a medida y SaaS educativo con IA desde Luminia. Backend, arquitectura y proyectos en producción.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s — Reynaldo Alvarez",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Reynaldo Alvarez — Portafolio",
  generator: "Next.js 16",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Reynaldo Alvarez",
    "Vidal Reynaldo Alvarez Challco",
    "Vidal Alvarez",
    "software engineer",
    "software architect",
    "ingeniero de software Bolivia",
    "arquitecto de software",
    "backend developer",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "PostGIS",
    "SaaS educativo",
    "inteligencia artificial educación",
    "GEOPOIS",
    "Luminia",
    "Hansa Ltda",
    "GIS",
    "geointeligencia",
    "EMI Escuela Militar de Ingeniería",
    "La Paz Bolivia",
    "Madrid",
  ],
  authors: [{ name: "Vidal Reynaldo Alvarez Challco", url: SITE_URL }],
  creator: "Vidal Reynaldo Alvarez Challco",
  publisher: "Vidal Reynaldo Alvarez Challco",
  category: "technology",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-BO": "/",
      "es": "/",
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Reynaldo Alvarez — Software Engineer",
    title: SITE_TITLE,
    description:
      "Ingeniero de software — backend y arquitectura: Hansa (GIS) → GEOPOIS.COM (arquitecto principal, Madrid) → Luminia (soluciones a medida). SaaS educativo con IA en producción. EMI 2012 · 12+ años.",
    locale: "es_BO",
    alternateLocale: ["es_ES", "es_419"],
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Reynaldo Alvarez — Software Engineer & Arquitecto de Backend",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Ingeniero de software — backend, arquitectura y IA. Hansa → GEOPOIS (Madrid) → Luminia. SaaS educativo en producción.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

/* ——— Datos estructurados JSON-LD (schema.org) ——— */
function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vidal Reynaldo Alvarez Challco",
    alternateName: ["Reynaldo Alvarez", "Vidal Alvarez"],
    givenName: "Vidal Reynaldo",
    familyName: "Alvarez Challco",
    jobTitle: "Software Engineer & Arquitecto de Backend",
    description: SITE_DESCRIPTION,
    email: "mailto:vidal.r.a.777@gmail.com",
    telephone: "+591",
    image: `${SITE_URL}/images/profile/vidal-profile-800.webp`,
    url: SITE_URL,
    nationality: { "@type": "Country", name: "Bolivia" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "La Paz",
      addressCountry: "BO",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: 'Escuela Militar de Ingeniería "Mcal. Antonio José de Sucre"',
      sameAs: "https://es.wikipedia.org/wiki/Escuela_Militar_de_Ingenier%C3%ADa",
    },
    knowsLanguage: [
      { "@type": "Language", name: "es" },
      { "@type": "Language", name: "qu" },
      { "@type": "Language", name: "en" },
    ],
    sameAs: [
      "https://www.linkedin.com/in/vidal-reynaldo-alvarez-challco-46633584/",
      "https://github.com/ReynaldoAlvarez",
      "https://www.youtube.com/@bunkerdev",
    ],
    knowsAbout: [
      "Arquitectura de software",
      "Backend",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "PostGIS",
      "SaaS multi-tenant",
      "Inteligencia artificial",
      "GIS",
      "Clean Architecture",
      "Docker",
      "Flutter",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Engineer",
      occupationalCategory: "15-1252.00 Software Developers",
      skills: "Backend, Arquitectura, IA, GIS",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Reynaldo Alvarez — Portafolio",
    url: SITE_URL,
    inLanguage: "es",
    description: SITE_DESCRIPTION,
    author: {
      "@type": "Person",
      name: "Vidal Reynaldo Alvarez Challco",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}

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
        <JsonLd />
      </body>
    </html>
  );
}
