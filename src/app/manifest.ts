import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vidal Alvarez - Software Engineer Portfolio',
    short_name: 'Vidal Alvarez',
    description: 'Portafolio profesional de Software Engineer especializado en arquitecturas escalables, SaaS educativo con IA y desarrollo fullstack.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a1a14',
    theme_color: '#1a4d3a',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'es-BO',
    dir: 'ltr',
    categories: ['education', 'productivity', 'developer'],
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
    shortcuts: [
      {
        name: 'Proyectos',
        short_name: 'Proyectos',
        description: 'Ver proyectos destacados',
        url: '/#proyectos',
      },
      {
        name: 'Contacto',
        short_name: 'Contacto',
        description: 'Información de contacto',
        url: '/#contacto',
      },
    ],
  }
}
