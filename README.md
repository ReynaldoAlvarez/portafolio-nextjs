# Portafolio v2 — Vidal Reynaldo Alvarez Challco

Portafolio personal con diseño editorial de alto contraste (tinta `#0a0a0b` + acento volt `#c8f550`), construido desde cero con Next.js 16 y verificado visualmente en desktop y móvil.

**Software Engineer · Backend & Arquitectura de Software** — EMI 2012, enfocado en educación pública e IA, con estándar de calidad FAANG.

## 🚀 Características

- **Next.js 16** con App Router y React 19
- **TypeScript 5** con tipado estricto
- **Tailwind CSS 4** con sistema de diseño propio (tokens `@theme`, utilities `@utility`)
- **Framer Motion 12** — scroll reveals, spotlight, texto scramble, botón magnético
- **Tipografía**: Space Grotesk (display), Inter (texto), JetBrains Mono (código)
- **Micro-interacciones**: cursor personalizado, barra de progreso de scroll, marquee
- **100% responsive** (mobile-first, verificado a 390px)
- **SEO completo**: metadata ES, OpenGraph (`og.jpg`), Twitter cards, JSON-LD (`Person`), `sitemap.ts`, `robots.ts`, `manifest.ts`, PWA icons

## 📋 Contenido

- **Experiencia destacada**: Hansa Ltda (Software Engineer · GIS), Geopois.com (Ingeniero y Arquitecto Principal de Software, Madrid), Luminia.com.bo (desarrollo a medida)
- **Proyectos en producción** tomados del GitHub real: geopois.com, bunkerdev, gmaps-tools, API Templarios, Bunker Bible, EmailLite
- **CV descargable** (`/resumen-vidal-alvarez-2023.pdf`) desde navbar, hero y contacto
- Enlaces reales: [GitHub](https://github.com/ReynaldoAlvarez) · [LinkedIn](https://www.linkedin.com/in/vidal-reynaldo-alvarez-challco-46633584/)

## 🛠️ Comandos

```bash
bun install     # instalar dependencias
bun run dev     # servidor de desarrollo en http://localhost:3000
bun run build   # build de producción
bun run start   # servir build de producción
bun run lint    # ESLint
```

Requiere Node.js >= 20 (ver `.nvmrc`).

## 📁 Estructura

```
src/
├── app/                    # layout (SEO), page, globals.css, sitemap, robots, manifest
├── components/
│   └── portfolio/          # hero, about, experience, projects, services,
│                           # contact, navbar, footer, marquee, reveal,
│                           # section-heading, custom-cursor, scroll-progress
└── lib/                    # utilidades
public/
├── images/profile/         # foto de perfil (png + webp optimizados)
├── images/                 # capturas de proyectos reales
├── resumen-vidal-alvarez-2023.pdf   # CV descargable
└── og.jpg                  # imagen OpenGraph
```

## 🚢 Despliegue

Configurado para **Vercel** (push a `main` despliega automáticamente): scripts estándar `next build` / `next start`, `.nvmrc` con Node 24 y `engines.node >= 20`.

## 📄 Licencia

Uso personal — © Reynaldo Alvarez
