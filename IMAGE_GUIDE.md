# 📸 Image Placement Guide

All images go in `public/images/`. Total: **25 images** (21 original + 4 gallery).

---

## 📸 Gallery Photos (Home Page — "Galeri Proyek Kami")

**IMPORTANT**: Replace these placeholder images with the 4 client photos.
Each photo gets a CSS watermark "PT. Visco Prima Indonesia" automatically — no image editing needed.

| File Path | Description | Size |
|-----------|-------------|------|
| `public/images/gallery/gallery-1.jpg` | VISCO® Chemical Products (VL-285) | 800×600 |
| `public/images/gallery/gallery-2.jpg` | Industrial Storage Tanks | 800×600 |
| `public/images/gallery/gallery-3.jpg` | Water Treatment Plant Overview | 800×600 |
| `public/images/gallery/gallery-4.jpg` | On-Site Treatment Systems (VC-150) | 800×600 |

---

## Folder Structure

```
public/images/
├── hero-bg.jpg                          ← Home: full-screen hero background (1920×1080)
├── hero-visual.jpg                      ← Home: right-side image card (900×700)
├── about-hero.jpg                       ← About: page hero background (1600×800)
├── about-story.jpg                      ← About: company story left image (900×700)
├── contact-hero.jpg                     ← Contact: page hero background (1600×800)
├── products-hero.jpg                    ← Products: page hero background (1600×800)
└── products/
    ├── cat-boiler.jpg                   ← Products page: Boiler card (700×400)
    ├── cat-cooling.jpg                  ← Products page: Cooling card (700×400)
    ├── cat-cleaning.jpg                 ← Products page: Cleaning card (700×400)
    ├── cat-ro-membrane.jpg              ← Products page: R/O Membrane card (700×400)
    ├── cat-wtp-wwtp.jpg                 ← Products page: WTP/WWTP card (700×400)
    ├── hero-boiler.jpg                  ← Boiler category page: hero image (1200×800)
    ├── hero-cooling.jpg                 ← Cooling category page: hero image (1200×800)
    ├── hero-cleaning.jpg                ← Cleaning category page: hero image (1200×800)
    ├── hero-ro-membrane.jpg             ← R/O Membrane category page: hero image (1200×800)
    ├── hero-wtp-wwtp.jpg                ← WTP/WWTP category page: hero image (1200×800)
    ├── equip-filtration.jpg             ← Products page: Filtration equipment card (700×400)
    ├── equip-softener.jpg               ← Products page: Water Softener card (700×400)
    ├── equip-demineralizer.jpg          ← Products page: Demineralizer card (700×400)
    ├── equip-ro-system.jpg              ← Products page: R/O System card (700×400)
    └── equip-edi-uv.jpg                 ← Products page: EDI & UV card (700×400)
```

---

## Code Locations

| # | Image | File | Line |
|---|-------|------|------|
| 1 | `hero-bg.jpg` | `src/pages/Home.jsx` | ~89 |
| 2 | `hero-visual.jpg` | `src/pages/Home.jsx` | ~114 |
| 3 | `about-hero.jpg` | `src/pages/About.jsx` | ~35 |
| 4 | `about-story.jpg` | `src/pages/About.jsx` | ~61 |
| 5 | `contact-hero.jpg` | `src/pages/Contact.jsx` | ~33 |
| 6 | `products-hero.jpg` | `src/pages/Products.jsx` | ~42 |
| 7–11 | `products/cat-*.jpg` | `src/pages/Products.jsx` | ~20–24 |
| 12–16 | `products/hero-*.jpg` | `src/data/products.js` | ~12–44 |
| 17–21 | `products/equip-*.jpg` | `src/data/equipment.js` | ~12–167 |
