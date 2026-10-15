#!/usr/bin/env python3
"""
CV Profesional - Vidal Reynaldo Alvarez Challco
Software Engineer - Orientado a Ministerio de Educación
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm, mm
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle,
    KeepTogether, ListFlowable, ListItem
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily

# ── Font Registration ──
# Use Liberation Sans (clean, modern, ATS-friendly) + Liberation Serif for headings
FONT_DIR = '/usr/share/fonts'

pdfmetrics.registerFont(TTFont('LiberationSans', f'{FONT_DIR}/truetype/liberation/LiberationSans-Regular.ttf'))
pdfmetrics.registerFont(TTFont('LiberationSans-Bold', f'{FONT_DIR}/truetype/liberation/LiberationSans-Bold.ttf'))
pdfmetrics.registerFont(TTFont('LiberationSans-Italic', f'{FONT_DIR}/truetype/liberation/LiberationSans-Italic.ttf'))
pdfmetrics.registerFont(TTFont('LiberationSans-BoldItalic', f'{FONT_DIR}/truetype/liberation/LiberationSans-BoldItalic.ttf'))
registerFontFamily('LiberationSans',
                   normal='LiberationSans',
                   bold='LiberationSans-Bold',
                   italic='LiberationSans-Italic',
                   boldItalic='LiberationSans-BoldItalic')

pdfmetrics.registerFont(TTFont('LiberationSerif', f'{FONT_DIR}/truetype/liberation/LiberationSerif-Regular.ttf'))
pdfmetrics.registerFont(TTFont('LiberationSerif-Bold', f'{FONT_DIR}/truetype/liberation/LiberationSerif-Bold.ttf'))
registerFontFamily('LiberationSerif',
                   normal='LiberationSerif',
                   bold='LiberationSerif-Bold')

BODY_FONT = 'LiberationSans'
BODY_FONT_BOLD = 'LiberationSans-Bold'
BODY_FONT_ITALIC = 'LiberationSans-Italic'
HEADING_FONT = 'LiberationSerif-Bold'

# ── Color Palette (Professional Navy + Emerald Accent) ──
ACCENT = colors.HexColor('#1a4d3a')        # Esmeralda oscuro - profesional, educativo
ACCENT_LIGHT = colors.HexColor('#2d6a4f')   # Esmeralda medio
TEXT_PRIMARY = colors.HexColor('#1a1a1a')   # Casi negro
TEXT_MUTED = colors.HexColor('#4a5568')     # Gris oscuro para texto secundario
TEXT_LIGHT = colors.HexColor('#718096')      # Gris medio para meta info
RULE_COLOR = colors.HexColor('#cbd5e0')      # Línea separadora gris claro
ACCENT_BG = colors.HexColor('#f0f4f1')       # Fondo sutil esmeralda claro

# ── Styles ──
name_style = ParagraphStyle(
    'CVName', fontName=HEADING_FONT, fontSize=20,
    leading=24, alignment=TA_CENTER, spaceAfter=2,
    textColor=ACCENT
)

role_style = ParagraphStyle(
    'CVRole', fontName=BODY_FONT_BOLD, fontSize=11,
    leading=14, alignment=TA_CENTER, textColor=TEXT_PRIMARY,
    spaceAfter=3
)

contact_style = ParagraphStyle(
    'CVContact', fontName=BODY_FONT, fontSize=9,
    leading=12, alignment=TA_CENTER, textColor=TEXT_MUTED,
    spaceAfter=8
)

section_title_style = ParagraphStyle(
    'CVSectionTitle', fontName=HEADING_FONT, fontSize=11,
    leading=14, spaceBefore=6, spaceAfter=1,
    textColor=ACCENT, alignment=TA_LEFT
)

job_title_style = ParagraphStyle(
    'CVJobTitle', fontName=BODY_FONT_BOLD, fontSize=10,
    leading=12, spaceAfter=0.5, textColor=TEXT_PRIMARY
)

job_meta_style = ParagraphStyle(
    'CVJobMeta', fontName=BODY_FONT_ITALIC, fontSize=9,
    leading=11, textColor=TEXT_LIGHT, spaceAfter=2
)

bullet_style = ParagraphStyle(
    'CVBullet', fontName=BODY_FONT, fontSize=9.5,
    leading=12, leftIndent=12, bulletIndent=2,
    spaceBefore=0.5, spaceAfter=0.5, textColor=TEXT_PRIMARY,
    alignment=TA_JUSTIFY
)

body_style = ParagraphStyle(
    'CVBody', fontName=BODY_FONT, fontSize=9.5,
    leading=12.5, spaceAfter=2, textColor=TEXT_PRIMARY,
    alignment=TA_JUSTIFY
)

skill_cat_style = ParagraphStyle(
    'CVSkillCat', fontName=BODY_FONT_BOLD, fontSize=9.5,
    leading=11.5, textColor=ACCENT, spaceAfter=0
)

skill_val_style = ParagraphStyle(
    'CVSkillVal', fontName=BODY_FONT, fontSize=9.5,
    leading=11.5, textColor=TEXT_PRIMARY, spaceAfter=2,
    leftIndent=8
)

# ── Helpers ──
def section_header(title):
    """Section title + thin rule separator."""
    return [
        Paragraph(title.upper(), section_title_style),
        HRFlowable(width='100%', thickness=1.2, color=ACCENT,
                   spaceBefore=1, spaceAfter=6),
    ]

def experience_entry(title, company, dates, location, bullets):
    """One work experience block."""
    elements = [
        Paragraph(f'<b>{title}</b>', job_title_style),
        Paragraph(f'{company}  |  {dates}  |  {location}', job_meta_style),
    ]
    for b in bullets:
        elements.append(Paragraph(f'\u2022 {b}', bullet_style))
    elements.append(Spacer(1, 4))
    return elements

def education_entry(degree, school, dates, details=None):
    """One education block."""
    elements = [
        Paragraph(f'<b>{degree}</b>', job_title_style),
        Paragraph(f'{school}  |  {dates}', job_meta_style),
    ]
    if details:
        elements.append(Paragraph(details, body_style))
    elements.append(Spacer(1, 4))
    return elements

def skills_two_column(categories):
    """
    Skills as two-column table for compact layout.
    categories = [('Backend', 'Node.js, Express...'), ('Frontend', 'Angular, React...')]
    """
    # Build pairs for two-column layout
    data = []
    row = []
    for i, (cat, vals) in enumerate(categories):
        cell = [
            Paragraph(cat, skill_cat_style),
            Paragraph(vals, skill_val_style),
        ]
        row.append(cell)
        if len(row) == 2:
            data.append(row)
            row = []
    # Handle odd last item
    if row:
        row.append([Paragraph('', body_style)])
        data.append(row)

    col_width = (A4[0] - 3*cm) / 2
    table = Table(data, colWidths=[col_width, col_width])
    table.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
        ('TOPPADDING', (0, 0), (-1, -1), 2),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
    ]))
    return [table]


# ── Build Document ──
OUTPUT_PATH = '/home/z/my-project/public/resumen-vidal-alvarez-2023.pdf'

doc = SimpleDocTemplate(
    OUTPUT_PATH, pagesize=A4,
    leftMargin=1.5*cm, rightMargin=1.5*cm,
    topMargin=1.3*cm, bottomMargin=1.3*cm,
    title='CV - Vidal Reynaldo Alvarez Challco - Software Engineer',
    author='Vidal Reynaldo Alvarez Challco',
    creator='Vidal Reynaldo Alvarez Challco',
    subject='Curriculum Vitae - Software Engineer'
)

story = []

# ═══════════════════════════════════════════════════════════════
# HEADER
# ═══════════════════════════════════════════════════════════════
story.append(Paragraph('VIDAL REYNALDO ALVAREZ CHALLCO', name_style))
story.append(Paragraph('Software Engineer | Arquitecto de Soluciones Escalables', role_style))
story.append(Paragraph(
    'vidal.r.a.777@gmail.com  |  La Paz, Bolivia  |  +591 7XXXXXXX<br/>'
    'github.com/ReynaldoAlvarez  |  linkedin.com/in/vidal-reynaldo-alvarez-challco-46633584  |  geopois.com',
    contact_style
))

# ═══════════════════════════════════════════════════════════════
# RESUMEN PROFESIONAL
# ═══════════════════════════════════════════════════════════════
story.extend(section_header('Resumen Profesional'))
story.append(Paragraph(
    'Software Engineer con más de 12 años de experiencia profesional desarrollando software '
    'para compañías en Bolivia, España y Estados Unidos. Ingeniero de Sistemas graduado de la '
    'Escuela Militar de Ingeniería "Mcal. Antonio José de Sucre" (EMI, La Paz — 2012). '
    'Especializado en arquitectura de microservicios, sistemas distribuidos y aplicaciones '
    'educativas con integración de inteligencia artificial. Liderazgo técnico en proyectos desde '
    'la concepción arquitectónica hasta el despliegue en producción, con experiencia en sector '
    'público, geoespacial, logístico y educativo. Comprometido con las buenas prácticas de '
    'ingeniería, metodologías ágiles y la creación de soluciones tecnológicas que generen valor social.',
    body_style
))

# ═══════════════════════════════════════════════════════════════
# EXPERIENCIA PROFESIONAL
# ═══════════════════════════════════════════════════════════════
story.extend(section_header('Experiencia Profesional'))

story.extend(experience_entry(
    'Software Engineer / Founder',
    'BunkerDev',
    'Ene 2023 — Presente',
    'Remoto / Estados Unidos',
    [
        'Liderazgo técnico en el diseño y desarrollo de Luminia, API SaaS educativa con integración de IA, implementando arquitectura modular con Express 5, Prisma 6, JWT, Helmet y rate limiting.',
        'Implementación de arquitectura de microservicios con separación por dominios (modules, config, shared, jobs), escalable a múltiples instituciones educativas (multi-tenant).',
        'Diseño de backends empresariales con Clean Architecture (Apitemplarios): capas core, infrastructure, modules y shared, logging estructurado con Pino, validación con Zod y seguridad con bcrypt y JWT.',
        'Despliegue y mantenimiento de plataformas en producción con Docker, docker-compose y CI/CD en Vercel con migraciones automáticas de Prisma.',
        'Mentoría técnica y establecimiento de estándares de code review y buenas prácticas SOLID en el equipo.',
    ]
))

story.extend(experience_entry(
    'Software Engineer',
    'Geopois',
    'Ene 2020 — Dic 2022',
    'Madrid, España',
    [
        'Arquitectura y desarrollo de plataforma geoespacial (geopois.com) con visores web mapping interactivos, PostgreSQL/PostGIS y servicios en AWS y Google Cloud.',
        'Desarrollo de microservicios para procesamiento de datos geoespaciales, integrando Google Maps API y OpenStreetMap para geolocalización en tiempo real.',
        'Implementación de APIs REST escalables con Node.js, Express y TypeScript, con arquitectura orientada a servicios para aplicaciones web y móviles.',
    ]
))

story.extend(experience_entry(
    'Software Engineer / GIS Engineer',
    'Hansa Ltda. — Div. Industria y Construcción',
    'Ene 2015 — Dic 2019',
    'La Paz, Bolivia',
    [
        'Diseño, desarrollo y despliegue del Sistema de Información Geográfica empresarial, desde la arquitectura inicial hasta la puesta en producción.',
        'Implementación de visores cartográficos con Google Cloud y sistemas de geomarketing con geofences y puntos de fluctuación.',
        'Desarrollo de módulos CRM geoespaciales para monitoreo de clientes mediante cercas geográficas, con PHP, JavaScript, MySQL y Google Cloud.',
    ]
))

# ═══════════════════════════════════════════════════════════════
# PROYECTOS DESTACADOS
# ═══════════════════════════════════════════════════════════════
story.extend(section_header('Proyectos Destacados'))

story.append(Paragraph(
    '\u2022 <b>Luminia — API SaaS Educativo con IA</b> (2025 — Presente, Producción): '
    'Plataforma SaaS backend multi-tenant para sector educativo con capacidad de integrar IA pedagógica. '
    'Stack: Express 5, Prisma 6, PostgreSQL, JWT, Zod, Jest, Docker. '
    '<font color="#718096">github.com/ReynaldoAlvarez/api-edu-saas-luminia</font>',
    bullet_style
))
story.append(Paragraph(
    '\u2022 <b>ZMove — App de Movilidad</b> (2022, Producción): '
    'Plataforma ride-sharing con backend Node.js/Express/MongoDB, app móvil Flutter para iOS y Android, '
    'integración de Google Maps API y OpenStreetMap, despliegue en AWS. '
    '<font color="#718096">zmove.es</font>',
    bullet_style
))
story.append(Paragraph(
    '\u2022 <b>BunkerBible — Plataforma de Contenido</b> (2022, Producción): '
    'Servicio digital de podcasts, sermones y estudios bíblicos con categorización por autores y temas, '
    'recomendaciones personalizadas y top de contenido. Stack: Next.js, React, Netlify.',
    bullet_style
))

# ═══════════════════════════════════════════════════════════════
# COMPETENCIAS TÉCNICAS
# ═══════════════════════════════════════════════════════════════
story.extend(section_header('Competencias Técnicas'))

story.extend(skills_two_column([
    ('Lenguajes de Programación',
     'TypeScript, JavaScript, Dart, Go, PHP, C++, SQL'),
    ('Frontend Web',
     'Angular, Next.js 16, React 19, Tailwind CSS 4, Redux Toolkit, '
     'Framer Motion, shadcn/ui, Handlebars, Bootstrap'),
    ('Backend & Microservicios',
     'Node.js, Express 5, Clean Architecture, Domain-Driven Design (DDD), '
     'arquitectura hexagonal, APIs REST, JWT, OAuth, microservicios '
     'multi-tenant, message queues, event-driven architecture'),
    ('Frameworks Backend',
     'Express, NestJS (conocimiento), Prisma ORM, TypeORM, Mongoose'),
    ('Mobile',
     'Flutter, Dart, iOS, Android, integración de Google Maps y '
     'OpenStreetMap, geolocalización en tiempo real'),
    ('Bases de Datos',
     'PostgreSQL, PostGIS, MongoDB, MySQL, Redis, SQLite'),
    ('Cloud & DevOps',
     'AWS (EC2, S3, Lambda), Google Cloud, Vercel, Docker, docker-compose, '
     'CI/CD con GitHub Actions, PM2, Nginx'),
    ('Arquitectura & Patrones',
     'Microservicios, Clean Architecture, SOLID, Hexagonal, '
     'Repository Pattern, Dependency Injection, CQRS (conocimiento)'),
    ('Calidad & Seguridad',
     'Jest, Supertest, Zod, Helmet, express-rate-limit, Winston, Pino, '
     'ESLint, Prettier, Husky, lint-staged'),
    ('Metodologías & Herramientas',
     'Scrum, Kanban, Git, GitHub Actions, Jira, Trello, '
     'Postman, Swagger/OpenAPI'),
]))

# ═══════════════════════════════════════════════════════════════
# EDUCACIÓN
# ═══════════════════════════════════════════════════════════════
story.extend(section_header('Educación'))

story.extend(education_entry(
    'Licenciatura en Ingeniería de Sistemas',
    'Escuela Militar de Ingeniería "Mcal. Antonio José de Sucre" (EMI)',
    '2007 — 2012  |  La Paz, Bolivia',
    'Formación en ingeniería de sistemas con enfoque en arquitectura de software, '
    'bases de datos, sistemas distribuidos e ingeniería geoespacial.'
))

# ═══════════════════════════════════════════════════════════════
# CERTIFICACIONES Y FORMACIÓN COMPLEMENTARIA
# ═══════════════════════════════════════════════════════════════
story.extend(section_header('Certificaciones y Formación'))

story.append(Paragraph(
    '\u2022 <b>Arquitectura de Microservicios</b> — Patrones de diseño, '
    'comunicación entre servicios, API Gateway, Service Discovery y resiliencia.',
    bullet_style
))
story.append(Paragraph(
    '\u2022 <b>Clean Architecture & DDD</b> — Domain-Driven Design, '
    'separación de capas, entidades, casos de uso y adaptadores.',
    bullet_style
))
story.append(Paragraph(
    '\u2022 <b>Angular</b> — Desarrollo de SPAs con Angular, '
    'TypeScript, RxJS, NgModules, standalone components y signals.',
    bullet_style
))
story.append(Paragraph(
    '\u2022 <b>Cloud Computing</b> — AWS (EC2, S3, Lambda), '
    'Google Cloud Platform y despliegue serverless en Vercel.',
    bullet_style
))
story.append(Paragraph(
    '\u2022 <b>Docker & Contenedores</b> — Containerización de '
    'microservicios, docker-compose y orquestación.',
    bullet_style
))

story.append(Spacer(1, 6))

# ═══════════════════════════════════════════════════════════════
# IDIOMAS
# ═══════════════════════════════════════════════════════════════
story.extend(section_header('Idiomas'))

story.append(Paragraph(
    '<b>Español:</b> Nativo  |  <b>Inglés:</b> Profesional (B2-C1)  |  '
    '<b>Quechua:</b> Intermedio',
    body_style
))

story.append(Spacer(1, 4))

# ═══════════════════════════════════════════════════════════════
# LOGROS CLAVE Y MÉTRICAS
# ═══════════════════════════════════════════════════════════════
story.extend(section_header('Logros Clave y Métricas'))

story.append(Paragraph(
    '\u2022 <b>12+ años de experiencia profesional</b> en desarrollo de software para '
    'compañías en Bolivia, España y Estados Unidos, desde 2015.',
    bullet_style
))
story.append(Paragraph(
    '\u2022 <b>25+ repositorios activos</b> en GitHub con proyectos en producción, '
    'cubriendo arquitecturas SaaS, microservicios, aplicaciones móviles y plataformas geoespaciales.',
    bullet_style
))
story.append(Paragraph(
    '\u2022 <b>Plataforma Luminia</b> desplegada en producción con arquitectura '
    'multi-tenant lista para servir a múltiples instituciones educativas simultáneamente.',
    bullet_style
))
story.append(Paragraph(
    '\u2022 <b>Geopois.com</b> en producción activa con usuarios reales, '
    'combinando visores web mapping, PostgreSQL/PostGIS y servicios en AWS y Google Cloud.',
    bullet_style
))
story.append(Paragraph(
    '\u2022 <b>Liderazgo de equipos técnicos</b> distribuidos (Bolivia, España, EEUU), '
    'con metodologías ágiles Scrum y Kanban, estableciendo estándares de code review y CI/CD.',
    bullet_style
))

story.append(Spacer(1, 4))

# ═══════════════════════════════════════════════════════════════
# DISPONIBILIDAD Y ENLACES PROFESIONALES
# ═══════════════════════════════════════════════════════════════
story.extend(section_header('Disponibilidad y Enlaces Profesionales'))

story.append(Paragraph(
    '<b>Disponibilidad:</b> Inmediata para modalidad presencial o remota, '
    'con disposición a viajes según requerimientos del proyecto.',
    body_style
))
story.append(Paragraph(
    '<b>Portafolio web:</b> vidalalvarez.vercel.app  |  '
    '<b>GitHub:</b> github.com/ReynaldoAlvarez  |  '
    '<b>LinkedIn:</b> linkedin.com/in/vidal-reynaldo-alvarez-challco-46633584',
    body_style
))

# ═══════════════════════════════════════════════════════════════
# BUILD
# ═══════════════════════════════════════════════════════════════
doc.build(story)

import os
size = os.path.getsize(OUTPUT_PATH)
print(f'✅ CV generado exitosamente: {OUTPUT_PATH}')
print(f'   Tamaño: {size:,} bytes ({size/1024:.1f} KB)')
