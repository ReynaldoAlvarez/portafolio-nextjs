import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Reynaldo Alvarez — Software Engineer",
    short_name: "R. Alvarez",
    description:
      "Portafolio de Vidal Reynaldo Alvarez Challco: ingeniero de software especializado en backend, arquitectura, GIS y SaaS educativo con IA.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0b",
    theme_color: "#0a0a0b",
    orientation: "portrait-primary",
    scope: "/",
    lang: "es-BO",
    dir: "ltr",
    categories: ["portfolio", "developer", "technology"],
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Proyectos en producción",
        short_name: "Proyectos",
        description: "Ver proyectos lanzados y en producción",
        url: "/#proyectos",
      },
      {
        name: "Trayectoria",
        short_name: "Trayectoria",
        description: "Hansa, GEOPOIS y Luminia",
        url: "/#trayectoria",
      },
      {
        name: "Contacto",
        short_name: "Contacto",
        description: "Email, CV y redes profesionales",
        url: "/#contacto",
      },
    ],
  };
}
