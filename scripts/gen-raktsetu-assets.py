#!/usr/bin/env python3
"""Generate RaktSetu brand assets: app icon + 1200x630 OG card.

Brand: privacy-first blood donor & recipient connect platform.
Colors: brand #c62828, brand-dark #8e1c1c, brand-light #fdecea, white bg.
Motif: blood drop (teardrop) — circle top + tapered point.
"""
from PIL import Image, ImageDraw, ImageFont

BRAND = (198, 40, 40)        # #c62828
BRAND_DARK = (142, 28, 28)   # #8e1c1c
BRAND_LIGHT = (253, 236, 234)  # #fdecea
WHITE = (255, 255, 255)
DARK = (23, 23, 23)          # #171717

FONT_DIR = "/usr/share/fonts/truetype/dejavu"


def font(size, bold=True):
    name = "DejaVuSans-Bold.ttf" if bold else "DejaVuSans.ttf"
    return ImageFont.truetype(f"{FONT_DIR}/{name}", size)


def teardrop(draw, cx, cy, r, color, point_h=None):
    """Draw a blood-drop teardrop centered at (cx, cy) with radius r.
    point_h = extra height of the taper below the circle (default r*0.9)."""
    if point_h is None:
        point_h = int(r * 0.9)
    # circle part
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=color)
    # taper: triangle from circle sides down to point
    bottom = cy + r + point_h
    draw.polygon([
        (cx - r, cy),
        (cx + r, cy),
        (cx, bottom),
    ], fill=color)


def rounded_rect(draw, box, radius, fill):
    draw.rounded_rectangle(box, radius=radius, fill=fill)


def make_icon():
    S = 512
    img = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    # rounded-square background with subtle vertical brand gradient
    bg = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    bgd = ImageDraw.Draw(bg)
    for y in range(S):
        t = y / S
        r = int(BRAND[0] + (BRAND_DARK[0] - BRAND[0]) * t)
        g = int(BRAND[1] + (BRAND_DARK[1] - BRAND[1]) * t)
        b = int(BRAND[2] + (BRAND_DARK[2] - BRAND[2]) * t)
        bgd.line([(0, y), (S, y)], fill=(r, g, b, 255))
    mask = Image.new("L", (S, S), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, S - 1, S - 1], radius=110, fill=255)
    img.paste(bg, (0, 0), mask)

    # white teardrop
    d = ImageDraw.Draw(img)
    cx, cy, r = S // 2, 230, 120
    teardrop(d, cx, cy, r, WHITE, point_h=95)
    # inner red drop highlight (smaller)
    teardrop(d, cx, 252, 62, BRAND, point_h=48)

    img.save("public/icon.png")
    print("icon.png saved")


def make_og():
    W, H = 1200, 630
    img = Image.new("RGB", (W, H), WHITE)
    d = ImageDraw.Draw(img)

    # top-left soft brand band + bottom accent
    d.rounded_rectangle([0, 0, W - 1, 8], radius=0, fill=BRAND)
    d.rectangle([0, 0, W - 1, 8], fill=BRAND)

    # faint large drop watermark right side
    wm = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    wmd = ImageDraw.Draw(wm)
    teardrop(wmd, 950, 250, 210, (*BRAND, 14), point_h=150)
    img = Image.alpha_composite(img.convert("RGBA"), wm).convert("RGB")
    d = ImageDraw.Draw(img)

    # main red teardrop logo left
    teardrop(d, 190, 315, 105, BRAND, point_h=85)
    teardrop(d, 190, 332, 50, BRAND_LIGHT, point_h=38)

    # wordmark
    f_big = font(74, bold=True)
    f_mid = font(34, bold=False)
    f_small = font(26, bold=False)
    d.text((340, 200), "RaktSetu", font=f_big, fill=BRAND_DARK)
    d.text((342, 295), "Privacy-first blood donor & recipient", font=f_mid, fill=DARK)
    d.text((342, 340), "connect platform.", font=f_mid, fill=DARK)

    # mini bullet feature line
    d.ellipse([344, 425, 354, 435], fill=BRAND)
    f_feat = font(24, bold=False)
    d.text((366, 421),
           "Find blood banks · Post verified urgent requests",
           font=f_feat, fill=(90, 90, 90))
    d.text((366, 452),
           "· Connect with opt-in donors",
           font=f_feat, fill=(90, 90, 90))

    # footer
    d.rounded_rectangle([40, 555, 1160, 575], radius=10, fill=BRAND_LIGHT)
    f_ft = font(22, bold=False)
    d.text((52, 559), "raktsetu.vercel.app", font=f_ft, fill=BRAND_DARK)

    img.save("public/og-image.png", quality=92)
    print("og-image.png saved")


if __name__ == "__main__":
    make_icon()
    make_og()
