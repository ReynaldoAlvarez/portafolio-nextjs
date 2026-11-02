"""Compone la imagen OG 1200x630 del portafolio con la foto real de Vidal."""
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1200, 630
INK = (10, 10, 11)
INK2 = (17, 17, 19)
VOLT = (200, 245, 80)
Z100 = (244, 244, 245)
Z400 = (160, 160, 170)
Z600 = (113, 113, 122)

BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
REG = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
MONO = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf"
MONO_B = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf"

img = Image.new("RGB", (W, H), INK)

# --- Glow volt superior (radial simulada) ---
glow = Image.new("RGB", (W, H), INK)
gd = ImageDraw.Draw(glow)
gd.ellipse([W // 2 - 700, -560, W // 2 + 700, 240], fill=(26, 30, 16))
glow = glow.filter(ImageFilter.GaussianBlur(120))
img = Image.blend(img, glow, 0.85)

d = ImageDraw.Draw(img)

# --- Grano sutil ---
import random
random.seed(7)
noise = Image.new("RGB", (W, H), (0, 0, 0))
nd = ImageDraw.Draw(noise)
for _ in range(2600):
    x, y = random.randrange(W), random.randrange(H)
    c = random.choice([(255, 255, 255), (0, 0, 0)])
    nd.point((x, y), c)
noise = noise.filter(ImageFilter.GaussianBlur(0.4))
img = Image.blend(img, Image.blend(img, noise, 0.05), 0.5)

d = ImageDraw.Draw(img)

# --- Foto (derecha) con marco desplazado ---
PHOTO = 470
photo = Image.open("/home/z/my-project/public/images/profile/vidal-profile.png").convert("RGB")
photo = photo.resize((PHOTO, PHOTO), Image.LANCZOS)

# máscara redondeada
mask = Image.new("L", (PHOTO, PHOTO), 0)
ImageDraw.Draw(mask).rounded_rectangle([0, 0, PHOTO, PHOTO], radius=36, fill=255)
px, py = W - PHOTO - 70, (H - PHOTO) // 2

# marco desplazado decorativo
d.rounded_rectangle(
    [px + 18, py + 18, px + PHOTO + 18, py + PHOTO + 18],
    radius=36, outline=(200, 245, 80, 40), width=2,
)
img.paste(photo, (px, py), mask)

# chip inferior sobre la foto
chip = "OPEN TO WORK · BACKEND / ARQUITECTURA"
f_chip = ImageFont.truetype(MONO_B, 17)
cw = d.textlength(chip, font=f_chip)
pad = 14
d.rounded_rectangle(
    [px + 24, py + PHOTO - 58, px + 24 + cw + pad * 2, py + PHOTO - 10],
    radius=20, fill=(8, 8, 9),
)
d.ellipse([px + 24 + pad, py + PHOTO - 58 + 22, px + 24 + pad + 10, py + PHOTO - 58 + 32], fill=VOLT)
d.text((px + 24 + pad + 20, py + PHOTO - 58 + 14), chip, font=f_chip, fill=Z100)

# --- Texto (izquierda) ---
TX = 78

# badge superior
d.text((TX, 74), "// SOFTWARE ENGINEER", font=ImageFont.truetype(MONO_B, 19), fill=VOLT)

# Nombre masivo
f_name1 = ImageFont.truetype(BOLD, 108)
d.text((TX - 4, 122), "REYNALDO", font=f_name1, fill=Z100)
# ALVAREZ en outline: texto relleno INK + contorno Z100
d.text((TX - 4, 238), "ALVAREZ", font=f_name1, fill=INK, stroke_width=3, stroke_fill=Z400)

# línea de rol
f_role = ImageFont.truetype(BOLD, 33)
d.text((TX, 384), "Backend · Arquitectura de Software · IA", font=f_role, fill=Z100)

# trayectoria
f_traj = ImageFont.truetype(MONO, 22)
d.text((TX, 446), "EMI 2012 · Hansa Ltda (GIS) → GEOPOIS Madrid", font=f_traj, fill=Z600)
d.text((TX, 480), "→ Luminia · Soluciones a medida + IA", font=f_traj, fill=Z600)

# separador + url
d.line([TX, 536, TX + 470, 536], fill=(50, 50, 54), width=2)
d.text((TX, 560), "vidalalvarez.vercel.app", font=ImageFont.truetype(MONO_B, 24), fill=VOLT)

img.save("/home/z/my-project/public/og.jpg", "JPEG", quality=88, optimize=True)
img.resize((600, 315)).save("/tmp/og-preview.jpg", "JPEG", quality=80)
print("OG guardada:", img.size)
