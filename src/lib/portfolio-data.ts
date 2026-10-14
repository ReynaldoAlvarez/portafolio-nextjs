/**
 * Portafolio Data - Vidal Reynaldo Alvarez Challco
 * Software Engineer
 *
 * Datos verificados desde GitHub (github.com/ReynaldoAlvarez)
 * Última actualización: Octubre 2026
 */

export const profile = {
  name: "Vidal Reynaldo Alvarez Challco",
  shortName: "Vidal Alvarez",
  role: "Software Engineer",
  tagline: "Ingeniero de Software especializado en arquitecturas escalables, SaaS educativo con IA y desarrollo fullstack.",
  location: "La Paz, Bolivia",
  email: "vidal.r.a.777@gmail.com",
  resumeUrl: "/resumen-vidal-alvarez-2023.pdf",
  bio: [
    "Soy Software Engineer con más de 6 años de experiencia construyendo aplicaciones web, móviles y plataformas SaaS. Mi especialidad es el diseño de arquitecturas limpias y escalables utilizando TypeScript, Node.js, Next.js y Flutter.",
    "He liderado el desarrollo de plataformas educativas con integración de inteligencia artificial, sistemas geoespaciales empresariales y aplicaciones móviles de alta concurrencia. Actualmente enfoco mi trabajo en soluciones tecnológicas para el sector educativo público, combinando buenas prácticas de ingeniería con impacto social.",
    "Trabajo con metodologías ágiles (Scrum/Kanban), principios SOLID, arquitectura hexagonal y DevOps. Disfruto resolver problemas complejos y construir productos que generen valor real para las personas.",
  ],
  stats: [
    { label: "Años de experiencia", value: 6, suffix: "+" },
    { label: "Proyectos completados", value: 40, suffix: "+" },
    { label: "Clientes satisfechos", value: 25, suffix: "+" },
    { label: "Repositorios activos", value: 25, suffix: "" },
  ],
  social: {
    github: "https://github.com/ReynaldoAlvarez",
    linkedin: "https://linkedin.com/in/vidal-reynaldo-alvarez-challco-46633584",
    youtube: "https://youtube.com/@bunkerdev",
    website: "https://geopois.com",
  },
}

export type Project = {
  slug: string
  title: string
  subtitle: string
  description: string
  longDescription: string[]
  category: "Backend SaaS" | "Fullstack" | "Mobile" | "Web Platform" | "Geospatial"
  featured?: boolean
  technologies: string[]
  highlights: string[]
  link?: string
  github?: string
  demo?: string
  year: string
  status: "Producción" | "Activo" | "Mantenimiento"
}

export const projects: Project[] = [
  {
    slug: "luminia-edu-saas",
    title: "Luminia — API SaaS Educativo con IA",
    subtitle: "Plataforma SaaS para instituciones educativas con integración de IA",
    description:
      "API SaaS multi-tenant para gestión educativa con integración de inteligencia artificial. Construida con Express 5, Prisma 6, JWT, helmet, rate limiting, Winston logging, validación con Zod y tests con Jest.",
    longDescription: [
      "Luminia es una plataforma SaaS backend diseñada específicamente para el sector educativo. Implementa una arquitectura modular con separación por dominios (modules), configuración centralizada, jobs programados y capa compartida (shared) para máxima reutilización.",
      "La API incluye autenticación robusta con JWT y bcrypt, validación estricta con Zod, protección con Helmet y express-rate-limit, logs estructurados con Winston, compresión de respuestas, y soporte para despliegue en Vercel con migraciones automáticas de Prisma.",
      "Está pensada para servir a múltiples instituciones educativas (multi-tenant) con capacidad de integrar servicios de IA para asistencia pedagógica, evaluación automática y analítica de aprendizaje.",
    ],
    category: "Backend SaaS",
    featured: true,
    technologies: [
      "TypeScript",
      "Express 5",
      "Prisma 6",
      "PostgreSQL",
      "JWT",
      "Zod",
      "Jest",
      "Docker",
      "Winston",
      "Helmet",
    ],
    highlights: [
      "Arquitectura modular con separación por dominios (modules/config/shared/jobs)",
      "Autenticación JWT con bcrypt y manejo de cookies seguras",
      "Validación estricta de esquemas con Zod en cada endpoint",
      "Rate limiting y Helmet para seguridad de producción",
      "Migraciones Prisma con seed automático en Vercel",
      "Cobertura de tests con Jest y Supertest",
      "Despliegue con Docker y docker-compose",
      "Logs estructurados con Winston para observabilidad",
    ],
    link: "https://api-edu-saas-luminia.vercel.app",
    github: "https://github.com/ReynaldoAlvarez/api-edu-saas-luminia",
    demo: "https://api-edu-saas-luminia.vercel.app",
    year: "2026",
    status: "Producción",
  },
  {
    slug: "apitemplarios",
    title: "Apitemplarios — Backend Clean Architecture",
    subtitle: "API empresarial con arquitectura hexagonal y DDD",
    description:
      "Backend robusto implementando Clean Architecture con separación de capas core/infrastructure/modules/shared. Express 5, Prisma, Pino para logging estructurado, validación Zod y seguridad con bcrypt y JWT.",
    longDescription: [
      "Apitemplarios es un backend empresarial que sigue los principios de Clean Architecture y Domain-Driven Design. La separación clara entre core, infrastructure, modules y shared permite mantenibilidad, testeabilidad y escalabilidad.",
      "Implementa autenticación con JWT y bcrypt, validación de datos con Zod, logging estructurado con Pino y Pino-pretty, protección XSS y rate limiting. Incluye contexto de IA para asistir en el desarrollo (ai-context folder).",
    ],
    category: "Backend SaaS",
    technologies: [
      "TypeScript",
      "Express 5",
      "Prisma",
      "Pino",
      "JWT",
      "Zod",
      "Bcrypt",
      "Clean Architecture",
    ],
    highlights: [
      "Clean Architecture con capas core/infrastructure/modules/shared",
      "Logging estructurado con Pino y Pino-pretty",
      "Validación con Zod en toda la capa de entrada",
      "Seguridad con Helmet, JWT, bcrypt y xss-clean",
      "Contexto AI integrado para asistencia en desarrollo",
      "Tests con Jest y Supertest",
    ],
    github: "https://github.com/ReynaldoAlvarez/apitemplarios",
    year: "2026",
    status: "Activo",
  },
  {
    slug: "geopois",
    title: "Geopois — Plataforma Geoespacial",
    subtitle: "Plataforma de aprendizaje y servicios de información geográfica",
    description:
      "Plataforma web enfocada en tecnologías de información geográfica, formación interactiva y retroalimentación de contenido. Especialistas en SIG, bases de datos espaciales y visores web mapping.",
    longDescription: [
      "Geopois (geopois.com) es una plataforma en producción dedicada a las tecnologías de información geográfica. Ofrece tutoriales personalizados, formación interactiva y un espacio de retroalimentación para usuarios.",
      "El sistema integra visores web mapping, bases de datos espaciales PostgreSQL/PostGIS y servicios en la nube de AWS y Google Cloud. Es un proyecto en producción activa con usuarios reales.",
    ],
    category: "Geospatial",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "PostGIS",
      "AWS",
      "Google Cloud",
      "Tailwind CSS",
    ],
    highlights: [
      "Plataforma en producción con usuarios reales",
      "Visores web mapping interactivos",
      "Bases de datos espaciales con PostgreSQL/PostGIS",
      "Tutoriales personalizados y feedback de contenido",
      "Despliegue en AWS y Google Cloud",
    ],
    link: "https://www.geopois.com/",
    github: "https://github.com/ReynaldoAlvarez/lefleat-react-map",
    year: "2023",
    status: "Producción",
  },
  {
    slug: "zmove",
    title: "ZMove — App de Movilidad",
    subtitle: "Plataforma de ride-sharing para conductores y pasajeros",
    description:
      "Aplicación que permite a conductores crear viajes según sus necesidades y a pasajeros buscar los mejores viajes disponibles en su área geográfica. Backend Node.js, mobile Flutter, cloud AWS.",
    longDescription: [
      "ZMove (zmove.es) es una plataforma de movilidad tipo ride-sharing que conecta conductores con pasajeros. Los conductores publican viajes personalizados y los pasajeros encuentran opciones óptimas según su ubicación geográfica.",
      "La arquitectura combina un backend Node.js con Express y TypeScript, base de datos MongoDB, frontend móvil en Flutter para iOS y Android, y servicios en la nube AWS con MongoDB Atlas. Integra APIs de Google y OpenStreetMap para geolocalización.",
    ],
    category: "Mobile",
    technologies: [
      "Node.js",
      "Express",
      "TypeScript",
      "MongoDB",
      "Flutter",
      "Dart",
      "AWS",
      "Google Maps API",
      "OpenStreetMap",
    ],
    highlights: [
      "Aplicación móvil Flutter para iOS y Android",
      "Backend escalable con Node.js y Express",
      "Integración de Google Maps API y OpenStreetMap",
      "Geolocalización en tiempo real",
      "Despliegue en AWS con MongoDB Atlas",
    ],
    link: "https://zmove.es/",
    year: "2022",
    status: "Producción",
  },
  {
    slug: "bunkerbible",
    title: "BunkerBible — Plataforma de Contenido Cristiano",
    subtitle: "Servicio digital de podcasts, sermones y estudios bíblicos",
    description:
      "Plataforma que ofrece acceso a podcasts, sermones, estudios bíblicos y audiolibros cristianos. Categorización por autores, temas, recomendaciones personalizadas y tops de contenido.",
    longDescription: [
      "BunkerBible es una plataforma digital de contenido cristiano que ofrece podcasts, sermones, estudios bíblicos y audiolibros. Cada contenido está categorizado por autor y tema, con secciones AT/NT para estudios bíblicos.",
      "El sistema incluye recomendaciones personalizadas basadas en preferencias, top 3 de contenido más buscado y autores más populares. Construido con Next.js y React.",
    ],
    category: "Web Platform",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Netlify",
    ],
    highlights: [
      "Sistema de categorización por autor y tema",
      "Recomendaciones personalizadas de contenido",
      "Top de contenido más buscado",
      "Estudios bíblicos AT/NT categorizados",
      "Despliegue en Netlify",
    ],
    link: "https://bunkerbible.netlify.app/estudios-biblicos",
    year: "2022",
    status: "Producción",
  },
  {
    slug: "email-lite",
    title: "Email Lite — Servicio de Notificaciones",
    subtitle: "Microservicio de envío de correo con SMTP de Google y Nodemailer",
    description:
      "Microservicio ligero para envío de correos usando SMTP de Google y Nodemailer. Desplegado en Vercel con API REST minimalista.",
    longDescription: [
      "Email Lite es un microservicio enfocado en una sola responsabilidad: el envío de correos electrónicos. Utiliza Nodemailer con SMTP de Google y está optimizado para integrarse con otras plataformas SaaS.",
      "Forma parte de un ecosistema de servicios de notificaciones que el autor ha desarrollado, incluyendo api-email-notifications-saas, una versión SaaS más completa.",
    ],
    category: "Backend SaaS",
    technologies: ["TypeScript", "Node.js", "Nodemailer", "SMTP", "Vercel"],
    highlights: [
      "Microservicio con responsabilidad única",
      "SMTP de Google con Nodemailer",
      "API REST minimalista y rápida",
      "Despliegue serverless en Vercel",
    ],
    link: "https://email-lite.vercel.app",
    github: "https://github.com/ReynaldoAlvarez/email-lite",
    year: "2025",
    status: "Activo",
  },
  {
    slug: "seminary-biblical",
    title: "Seminary Biblical — Plataforma Educativa",
    subtitle: "Plataforma de aprendizaje teológico centrada en Cristo",
    description:
      "Plataforma open source enfocada en el aprendizaje de teología bíblica cristocéntrica. Construida con TypeScript para fines educativos.",
    longDescription: [
      "Seminary Biblical es un proyecto open source orientado al aprendizaje de teología bíblica con enfoque cristocéntrico. La plataforma facilita el acceso a recursos educativos teológicos de forma estructurada.",
      "Construido con TypeScript, demuestra la versatilidad del autor para aplicar buenas prácticas de ingeniería en proyectos con propósito social y educativo.",
    ],
    category: "Web Platform",
    technologies: ["TypeScript", "React", "Node.js"],
    highlights: [
      "Proyecto open source",
      "Enfoque educativo cristocéntrico",
      "Arquitectura escalable en TypeScript",
    ],
    github: "https://github.com/ReynaldoAlvarez/seminary-biblical",
    year: "2021",
    status: "Mantenimiento",
  },
]

export type SkillCategory = {
  title: string
  icon: string
  skills: { name: string; level: "Experto" | "Avanzado" | "Intermedio" }[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend & Arquitectura",
    icon: "server",
    skills: [
      { name: "Node.js", level: "Experto" },
      { name: "Express 5", level: "Experto" },
      { name: "TypeScript", level: "Experto" },
      { name: "Clean Architecture", level: "Avanzado" },
      { name: "Microservicios", level: "Avanzado" },
      { name: "SaaS Multi-tenant", level: "Avanzado" },
      { name: "JWT & OAuth", level: "Experto" },
      { name: "REST APIs", level: "Experto" },
    ],
  },
  {
    title: "Bases de Datos",
    icon: "database",
    skills: [
      { name: "PostgreSQL", level: "Experto" },
      { name: "Prisma ORM", level: "Experto" },
      { name: "MongoDB", level: "Avanzado" },
      { name: "MySQL", level: "Avanzado" },
      { name: "PostGIS", level: "Intermedio" },
      { name: "Redis", level: "Intermedio" },
    ],
  },
  {
    title: "Frontend Web",
    icon: "layout",
    skills: [
      { name: "Next.js 16", level: "Experto" },
      { name: "React 19", level: "Experto" },
      { name: "Tailwind CSS 4", level: "Experto" },
      { name: "shadcn/ui", level: "Avanzado" },
      { name: "Framer Motion", level: "Avanzado" },
      { name: "Redux Toolkit", level: "Avanzado" },
    ],
  },
  {
    title: "Mobile",
    icon: "smartphone",
    skills: [
      { name: "Flutter", level: "Avanzado" },
      { name: "Dart", level: "Avanzado" },
      { name: "iOS / Android", level: "Avanzado" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: [
      { name: "Vercel", level: "Experto" },
      { name: "AWS", level: "Avanzado" },
      { name: "Google Cloud", level: "Intermedio" },
      { name: "Docker", level: "Avanzado" },
      { name: "CI/CD", level: "Avanzado" },
      { name: "GitHub Actions", level: "Avanzado" },
    ],
  },
  {
    title: "Calidad & Seguridad",
    icon: "shield",
    skills: [
      { name: "Jest", level: "Avanzado" },
      { name: "Zod", level: "Experto" },
      { name: "Helmet", level: "Avanzado" },
      { name: "Rate Limiting", level: "Avanzado" },
      { name: "Winston Logging", level: "Avanzado" },
      { name: "ESLint & Prettier", level: "Experto" },
    ],
  },
]

export type Experience = {
  position: string
  company: string
  companyLink: string
  period: string
  location: string
  description: string
  achievements: string[]
}

export const experiences: Experience[] = [
  {
    position: "Software Engineer / Founder",
    company: "BunkerDev",
    companyLink: "https://hansa.com.bo",
    period: "2023 — Presente",
    location: "Remoto / EEUU",
    description:
      "Liderazgo técnico en el desarrollo de aplicaciones web y móviles para clientes de BunkerDev. Diseño de arquitecturas, implementación y mantenimiento del stack completo.",
    achievements: [
      "Diseño y desarrollo de API SaaS educativa con IA (Luminia)",
      "Implementación de Clean Architecture en backends empresariales",
      "Despliegue y mantenimiento de plataformas en producción",
    ],
  },
  {
    position: "Software Engineer",
    company: "Geopois",
    companyLink: "https://www.geopois.com",
    period: "2020 — 2023",
    location: "Madrid, España",
    description:
      "Ingeniero de Software encargado de la arquitectura de la aplicación, desarrollo web y móvil para clientes de la compañía especializada en información geográfica.",
    achievements: [
      "Arquitectura de plataforma geoespacial con PostGIS",
      "Desarrollo de visores web mapping interactivos",
      "Integración con Google Maps y OpenStreetMap APIs",
    ],
  },
  {
    position: "Geographic Information System Engineer",
    company: "Hansa",
    companyLink: "https://hansa.com.bo",
    period: "2018 — 2020",
    location: "La Paz, Bolivia",
    description:
      "Ingeniero encargado del desarrollo hasta el despliegue del Sistema de Información Geográfica de la empresa, división Industria y Construcción.",
    achievements: [
      "Implementación de SIG para división industrial",
      "Despliegue de visores cartográficos empresariales",
      "Integración con sistemas de geomarketing",
    ],
  },
]
