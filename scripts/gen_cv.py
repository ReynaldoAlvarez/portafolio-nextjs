#!/usr/bin/env python3
"""CV ATS de Vidal Reynaldo Alvarez Challco — 1 página A4, español.
Datos 100% verificados: EMI 2012, GEOPOIS.COM Madrid, GitHub/LinkedIn/YouTube reales."""

import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable,
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily

# ── Fuentes (FreeSerif cubre acentos del español) ──
FONT_DIR = "/usr/share/fonts/truetype/freefont"
pdfmetrics.registerFont(TTFont("FreeSerif", f"{FONT_DIR}/FreeSerif.ttf"))
pdfmetrics.registerFont(TTFont("FreeSerif-Bold", f"{FONT_DIR}/FreeSerifBold.ttf"))
pdfmetrics.registerFont(TTFont("FreeSerif-Italic", f"{FONT_DIR}/FreeSerifItalic.ttf"))
pdfmetrics.registerFont(TTFont("FreeSerif-BoldItalic", f"{FONT_DIR}/FreeSerifBoldItalic.ttf"))
registerFontFamily("FreeSerif", normal="FreeSerif", bold="FreeSerif-Bold",
                   italic="FreeSerif-Italic", boldItalic="FreeSerif-BoldItalic")

# ── Paleta (palette.generate) ──
ACCENT = colors.HexColor("#5024d5")
TEXT_PRIMARY = colors.HexColor("#191b1c")
TEXT_MUTED = colors.HexColor("#7c8388")

OUT = "/home/z/my-project/public/cv-reynaldo-alvarez.pdf"

# ── Estilos ──
name_style = ParagraphStyle("Name", fontName="FreeSerif", fontSize=23, leading=27,
                            alignment=TA_CENTER, textColor=TEXT_PRIMARY, spaceAfter=3)
tagline_style = ParagraphStyle("Tagline", fontName="FreeSerif", fontSize=11, leading=15,
                               alignment=TA_CENTER, textColor=ACCENT, spaceAfter=4)
contact_style = ParagraphStyle("Contact", fontName="FreeSerif", fontSize=9.5, leading=13,
                               alignment=TA_CENTER, textColor=TEXT_MUTED, spaceAfter=10)
section_title_style = ParagraphStyle("SectionTitle", fontName="FreeSerif", fontSize=12.5,
                                     leading=16, spaceBefore=12, spaceAfter=4, textColor=ACCENT)
job_title_style = ParagraphStyle("JobTitle", fontName="FreeSerif", fontSize=11, leading=14,
                                 textColor=TEXT_PRIMARY, spaceAfter=1)
job_meta_style = ParagraphStyle("JobMeta", fontName="FreeSerif", fontSize=9.5, leading=13,
                                textColor=TEXT_MUTED, spaceAfter=4)
bullet_style = ParagraphStyle("Bullet", fontName="FreeSerif", fontSize=10, leading=14.5,
                              leftIndent=14, bulletIndent=0, textColor=TEXT_PRIMARY,
                              spaceBefore=1, spaceAfter=1)
body_style = ParagraphStyle("Body", fontName="FreeSerif", fontSize=10, leading=14.5,
                            textColor=TEXT_PRIMARY, spaceAfter=2)


def section_header(title):
    return [
        Paragraph(f"<b>{title.upper()}</b>", section_title_style),
        HRFlowable(width="100%", thickness=0.8, color=ACCENT, spaceBefore=0, spaceAfter=6),
    ]


doc = SimpleDocTemplate(
    OUT, pagesize=A4,
    leftMargin=1.5 * cm, rightMargin=1.5 * cm, topMargin=1.5 * cm, bottomMargin=1.5 * cm,
    title="CV — Vidal Reynaldo Alvarez Challco",
    author="Vidal Reynaldo Alvarez Challco",
    subject="Ingeniero de Software — Arquitecto de Software",
    creator="Z.ai",
)

story = []

# ── Encabezado ──
story.append(Paragraph("<b>VIDAL REYNALDO ALVAREZ CHALLCO</b>", name_style))
story.append(Paragraph("Ingeniero de Software · Arquitecto de Software — Backend, arquitecturas e IA aplicada", tagline_style))
story.append(Paragraph(
    "La Paz, Bolivia  |  github.com/ReynaldoAlvarez  |  linkedin.com/in/vidal-reynaldo-alvarez-challco-46633584  |  YouTube: @bunkerdev",
    contact_style,
))

# ── Resumen profesional ──
story.extend(section_header("Resumen profesional"))
story.append(Paragraph(
    "Ingeniero de software orientado al backend, graduado de la Escuela Militar de "
    "Ingeniería (2012). A lo largo de 14 años he diseñado y construido soluciones a medida "
    "aplicando distintas arquitecturas y las mejores prácticas de la industria. Mi dominio "
    "principal es el sector educativo: plataformas escritas a mano, hoy potenciadas con "
    "inteligencia artificial integrada. Actualmente trabajo como ingeniero arquitecto de "
    "software en GEOPOIS.COM (Madrid), donde diseño sistemas de geointeligencia a escala.",
    body_style,
))

# ── Experiencia ──
story.extend(section_header("Experiencia"))

story.append(Paragraph("<b>Ingeniero Arquitecto de Software</b>", job_title_style))
story.append(Paragraph("GEOPOIS.COM  |  Madrid, España", job_meta_style))
for b in [
    "Arquitectura y desarrollo de plataformas de geointeligencia: GIS, web mapping, geomarketing y web scraping.",
    "Stack geoespacial de producción: PostgreSQL/PostGIS, Leaflet, Mapbox, OpenLayers y GeoServer.",
    "Diseño de soluciones a medida seleccionando la arquitectura adecuada para cada problema (capas, hexagonal, microservicios, event-driven).",
]:
    story.append(Paragraph(f"• {b}", bullet_style))
story.append(Spacer(1, 6))

story.append(Paragraph("<b>Soluciones educativas e IA — Proyectos propios</b>", job_title_style))
story.append(Paragraph("Remoto  |  La Paz, Bolivia", job_meta_style))
for b in [
    "Luminia: API SaaS para educación con inteligencia artificial integrada — TypeScript, Prisma y Docker, desplegada en Vercel.",
    "BunkerDev: producción de contenido formativo de tecnología en YouTube.",
    "Código escrito a mano con rigor de industria: tipado estricto, tests y despliegue continuo.",
]:
    story.append(Paragraph(f"• {b}", bullet_style))
story.append(Spacer(1, 6))

# ── Educación ──
story.extend(section_header("Educación"))
story.append(Paragraph("<b>Ingeniería — Escuela Militar de Ingeniería (EMI)</b>", job_title_style))
story.append(Paragraph("La Paz, Bolivia  |  Graduado en 2012", job_meta_style))
story.append(Spacer(1, 4))

# ── Proyectos destacados ──
story.extend(section_header("Proyectos destacados"))
for b in [
    "Luminia — SaaS educativo con IA integrada (TypeScript, Prisma, Docker, Vercel): github.com/ReynaldoAlvarez/api-edu-saas-luminia · demo: api-edu-saas-luminia.vercel.app",
    "Google Maps JS API v3 utilities — utilidades y mejoras sobre la librería oficial de Google Maps: github.com/ReynaldoAlvarez/v3-utility-library",
]:
    story.append(Paragraph(f"• {b}", bullet_style))
story.append(Spacer(1, 4))

# ── Competencias ──
story.extend(section_header("Competencias"))
for cat, vals in [
    ("Lenguajes", "TypeScript, JavaScript"),
    ("Backend", "Node.js, APIs REST, Prisma, Docker"),
    ("Frontend", "React"),
    ("Datos y GIS", "PostgreSQL, PostGIS, Leaflet, Mapbox, OpenLayers, GeoServer"),
    ("Arquitectura", "Soluciones a medida: capas, hexagonal, microservicios, event-driven"),
    ("Inteligencia artificial", "Integración de IA en productos educativos (Luminia)"),
    ("DevOps", "Git, Docker, Vercel, despliegue continuo"),
]:
    story.append(Paragraph(f"<b>{cat}:</b>  {vals}", body_style))

doc.build(story)
size = os.path.getsize(OUT)
print(f"OK -> {OUT} ({size} bytes)")
