# Portafolio Personal — Vidal Reynaldo Alvarez Challco

Portafolio profesional de Software Engineer orientado al sector educativo público. Construido con Next.js 16, TypeScript, Tailwind CSS 4 y shadcn/ui.

## 🚀 Características

- **Next.js 16** con App Router y Turbopack
- **TypeScript 5** con tipado estricto
- **Tailwind CSS 4** con sistema de diseño personalizado
- **shadcn/ui** (Radix UI + Lucide icons)
- **Framer Motion 12** para animaciones
- **next-themes** para modo claro/oscuro
- **100% Responsive** (mobile-first)
- **SEO completo** (OpenGraph, Twitter cards, lang="es")
- **Single-page** con scroll suave entre secciones

## 📋 Secciones

1. **Hero** — Presentación con badge de disponibilidad y CV descargable
2. **Sobre mí** — Bio profesional + estadísticas animadas
3. **Proyecto Destacado** — Luminia (SaaS Educativo con IA)
4. **Proyectos** — Grid de 6 proyectos reales en producción
5. **Skills** — 6 categorías organizadas por nivel
6. **Experiencia** — Timeline animada de trayectoria laboral
7. **Contacto** — CTA profesional + redes sociales

## 🛠️ Instalación local

### Prerrequisitos

- Node.js 18.17+ o Bun 1.0+
- npm, yarn, pnpm o bun

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/ReynaldoAlvarez/portafolio-nextjs.git
cd portafolio-nextjs

# 2. Instalar dependencias
npm install
# o
yarn install
# o
pnpm install
# o
bun install

# 3. Ejecutar en modo desarrollo
npm run dev
# o
yarn dev
# o
bun run dev

# 4. Abrir en el navegador
# http://localhost:3000
```

### Build de producción

```bash
npm run build
npm run start
```

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── globals.css          # Sistema de diseño y estilos globales
│   ├── layout.tsx           # Layout raíz con SEO y ThemeProvider
│   └── page.tsx              # Página principal (ensambla todas las secciones)
├── components/
│   ├── portfolio/            # Componentes del portafolio
│   │   ├── header.tsx        # Navegación + theme toggle
│   │   ├── hero.tsx          # Sección hero
│   │   ├── about.tsx         # Sobre mí + estadísticas
│   │   ├── featured-project.tsx  # Proyecto destacado (Luminia)
│   │   ├── projects.tsx      # Grid de proyectos
│   │   ├── skills.tsx       # Skills por categoría
│   │   ├── experience.tsx   # Timeline de experiencia
│   │   ├── contact.tsx      # Sección de contacto
│   │   ├── footer.tsx       # Footer
│   │   └── theme-provider.tsx   # Provider de next-themes
│   └── ui/                   # Componentes shadcn/ui
└── lib/
    ├── portfolio-data.ts     # ⭐ Toda la información del portafolio
    └── utils.ts              # Utilidades (cn helper)
```

## ✏️ Cómo editar el contenido

Toda la información del portafolio está centralizada en un solo archivo:

**`src/lib/portfolio-data.ts`**

Edita este archivo para actualizar:
- `profile` — Tu nombre, bio, email, redes sociales, estadísticas
- `projects` — Lista de proyectos (título, descripción, tecnologías, links)
- `skillCategories` — Categorías y tecnologías con nivel
- `experiences` — Experiencia laboral

### Cambiar el CV

Reemplaza el archivo:
```
public/resumen-vidal-alvarez-2023.pdf
```
por tu CV actualizado (mismo nombre o actualiza la ruta en `portfolio-data.ts`).

## 🎨 Personalización de colores

Los colores se definen en `src/app/globals.css` usando variables CSS (oklch):

- `--primary` — Color primario (esmeralda por defecto)
- `--accent` — Color de acento (ámbar por defecto)
- `--background` — Color de fondo
- `--foreground` — Color de texto

## 🚀 Despliegue en Vercel

1. Sube el código a GitHub
2. Conecta el repositorio en [vercel.com](https://vercel.com)
3. Vercel detectará automáticamente Next.js
4. ¡Despliega!

## 📞 Contacto

- **Email:** vidal.r.a.777@gmail.com
- **GitHub:** [@ReynaldoAlvarez](https://github.com/ReynaldoAlvarez)
- **LinkedIn:** [Vidal Reynaldo Alvarez Challco](https://linkedin.com/in/vidal-reynaldo-alvarez-challco-46633584)
- **YouTube:** [@bunkerdev](https://youtube.com/@bunkerdev)

## 📄 Licencia

MIT © Vidal Reynaldo Alvarez Challco
