#!/usr/bin/env python3
"""Prepara la foto de Reynaldo: upscale 400→900 (Lanczos) + nitidez suave."""
from PIL import Image, ImageFilter

SRC = "/tmp/reynaldo-avatar.jpg"
DST = "/home/z/my-project/public/images/reynaldo.jpg"

img = Image.open(SRC).convert("RGB")
print(f"Original: {img.size}")

# Upscale 900x900 con Lanczos
img = img.resize((900, 900), Image.LANCZOS)

# Nitidez suave para compensar el upscale
img = img.filter(ImageFilter.UnsharpMask(radius=1.6, percent=68, threshold=2))

img.save(DST, "JPEG", quality=90, optimize=True, progressive=True)
print(f"Guardado: {DST} {img.size}")
