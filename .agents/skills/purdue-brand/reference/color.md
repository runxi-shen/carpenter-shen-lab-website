# Purdue Color Palette

Source: marcom.purdue.edu/our-brand/visual-identity (public, fetched 2026-05-27). Values transcribed verbatim from the page.

## Primary

| Name | HEX | RGB | Role |
|---|---|---|---|
| **Boilermaker Gold** | `#CFB991` | 207, 185, 145 | THE Purdue color. Use as the dominant brand accent — headers, key UI, buttons, the gold underline. |
| **Black** | `#000000` | 0, 0, 0 | Co-primary. Type, dark surfaces, contrast partner to Boilermaker Gold. |

## Supporting palette

Use sparingly; never let supporting colors dominate over Boilermaker Gold.

| Name | HEX | RGB | Typical use |
|---|---|---|---|
| **Aged** | `#8E6F3E` | 142, 111, 62 | Darker gold for body-text accents, link color on light backgrounds, "subtle gold". Used on the site as `--accent-gold-dim`. |
| **Rush** | `#DAAA00` | 218, 170, 0 | Vibrant gold — calls to action, hover states, highlights. Site uses as `--accent-gold-bright`. |
| **Field** | `#DDB945` | 221, 185, 69 | Mid-bright gold — secondary highlights, hover accents. |
| **Dust** | `#EBD99F` | 235, 217, 159 | Pale gold tint — backgrounds, soft fills, highlight bands. |
| **Steel** | `#555960` | 85, 89, 96 | Cool dark gray — secondary body text on light backgrounds. |
| **Cool Gray** | `#6F727B` | 111, 114, 123 | Medium gray — captions, metadata. |
| **Railway Gray** | `#9D9795` | 157, 151, 149 | Warm mid-gray — dividers, muted UI. |
| **Steam** | `#C4BFC0` | 196, 191, 192 | Pale warm gray — borders, light backgrounds. |

## CMYK / PMS

Not published on the public page. **VERIFY-PDF**: pull exact CMYK and Pantone values from the Brand Guidelines PDF (June 2025, V06) before sending anything to print.

## Combination & contrast rules (inferred + site convention)

- **Gold on black** and **black on gold** are the canonical Purdue pairs. Both clear WCAG AA for large text.
- **Aged Gold `#8E6F3E` on white**: contrast ratio ≈ 5.4:1 — passes AA for normal text. Use this for body-copy links, not Boilermaker Gold (which fails AA on white).
- **Boilermaker Gold `#CFB991` on white**: contrast ratio ≈ 1.9:1 — **fails AA**. Never use for text on white. Reserve for decorative bars, dividers, large display headings on dark backgrounds, or icon strokes paired with a darker outline.
- **Boilermaker Gold on `#111` near-black**: contrast ratio ≈ 10:1 — strong; this is the site's hero/nav pattern.
- Do not introduce non-palette colors as primary accents. Any tertiary accent must be a tint/shade of a palette color or be flagged for Marcom review. **VERIFY-PDF**.

## Known deviations on this site

- `--accent-teal: #0D9488` / `--accent-teal-light: #14B8A6` in `src/assets/styles/global.css` are **not in the Purdue palette**. They appear on the homepage gradient text, hero glow, and `gold-underline` gradient. Decide: either swap to Rush `#DAAA00` + Aged `#8E6F3E` for an all-gold gradient, or document this teal as an approved lab-specific extension (and verify Purdue Marcom allows sub-brand extensions before publishing).
- The site already correctly uses Boilermaker Gold (`#CFB991`), Rush (`#DAAA00`), and Aged (`#8E6F3E`) — keep those exact hex values.

## Canonical CSS tokens

```css
:root {
  /* Purdue primary */
  --purdue-boilermaker-gold: #CFB991;
  --purdue-black: #000000;

  /* Purdue supporting */
  --purdue-aged:        #8E6F3E;
  --purdue-rush:        #DAAA00;
  --purdue-field:       #DDB945;
  --purdue-dust:        #EBD99F;
  --purdue-steel:       #555960;
  --purdue-cool-gray:   #6F727B;
  --purdue-railway-gray:#9D9795;
  --purdue-steam:       #C4BFC0;
}
```
