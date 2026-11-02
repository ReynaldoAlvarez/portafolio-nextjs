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
  title: "Reynaldo Alvarez — Software Engineer & Architect",
  description:
    "Vidal Reynaldo Alvarez Challco. Ingeniero de software (EMI 2012) especializado en backend y arquitectura: soluciones a medida con IA para educación y geointeligencia. Arquitecto de software en GEOPOIS.COM (Madrid).",
  keywords: [
    "Reynaldo Alvarez",
    "Vidal Reynaldo Alvarez Challco",
    "software engineer",
    "software architect",
    "backend",
    "arquitectura de software",
    "TypeScript",
    "GEOPOIS",
    "EMI",
    "educación e IA",
    "geointeligencia",
    "La Paz",
    "Madrid",
  ],
  authors: [{ name: "Vidal Reynaldo Alvarez Challco" }],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Reynaldo Alvarez — Software Engineer & Architect",
    description:
      "Backend, arquitecturas a medida e IA aplicada a la educación. GEOPOIS Madrid · EMI 2012.",
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
