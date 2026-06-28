# Purdue Brand Compliance Checklist

Run through this for every PR that touches a visual surface. For each item, cite `file:line` evidence.

## Color

- [ ] Every hex value used in `src/assets/styles/global.css` and component inline styles comes from the official palette: `#CFB991` `#000000` `#8E6F3E` `#DAAA00` `#DDB945` `#EBD99F` `#555960` `#6F727B` `#9D9795` `#C4BFC0` — plus neutral whites/near-blacks for surfaces. See [color.md](color.md).
- [ ] **No non-palette accents.** Currently flagged: `#0D9488` and `#14B8A6` (teal) in `global.css`. Either replaced with Purdue colors or explicitly documented as an approved lab-specific extension.
- [ ] Boilermaker Gold `#CFB991` is **never** used for body text on white (fails WCAG AA). It is OK on `#111` near-black backgrounds, on `#000`, and for large decorative type.
- [ ] Aged Gold `#8E6F3E` is the link color on white surfaces.
- [ ] Rush `#DAAA00` is the hover / highlight color.

## Typography

- [ ] All UI/headings use Barlow (Acumin Pro stand-in).
- [ ] All long-form body uses Source Serif 4 (Source Serif Pro stand-in).
- [ ] All labels/eyebrows use Barlow Condensed (United Sans stand-in).
- [ ] No additional typefaces have crept in (no Inter, Roboto, Montserrat, etc.).
- [ ] Body paragraphs are justified; section subtitles override that to `text-center`.
- [ ] No em dashes appear in body text.

## Logo & sub-brand

- [ ] The lab's `cs-logo.svg` is composed next to (not on top of) any Purdue wordmark.
- [ ] If/when the Purdue wordmark is added, it uses an unmodified Marcom-supplied file.
- [ ] Clear space around the Purdue mark equals the wordmark cap-height. **VERIFY-PDF**.
- [ ] The Purdue mark is at least 100px wide on web. **VERIFY-PDF**.
- [ ] "Carpenter-Shen Lab" is presented as subordinate to the Purdue identifier in the header/footer lockup.

## Graphic elements

- [ ] Any decorative diagonal uses **77°** (matches Acumin italic incline).
- [ ] Outline / type-offset effects use 0.5–1pt stroke weight (≈ 1–2px web).
- [ ] No skewed, rotated, or modified Purdue marks.

## Voice & copy

- [ ] Hero / headline copy embodies at least two of the six attributes (Driven, Balanced, Intentional, Innovative, Inclusive, Respected).
- [ ] No marketing superlatives ("world-class", "cutting-edge").
- [ ] Claims are backed by specific evidence (numbers, named tools, named collaborators).
- [ ] Collaborators are named (the lab is "Carpenter-Shen", joint billing).

## Accessibility (brand-adjacent but required)

- [ ] Text on hero `#111` background uses gold or `#F5F5F0` — contrast verified ≥ 4.5:1.
- [ ] Interactive elements have non-color affordances (underline, weight change, icon) in addition to color.
- [ ] Focus styles are visible on dark and light surfaces.

## How to run the audit

```bash
# Surface every hex value in styles + components:
rg -n '#[0-9A-Fa-f]{3,6}' src/

# Find typefaces:
rg -n 'font-family|fontFamily' src/

# Check for non-palette colors specifically:
rg -n '#0D9488|#14B8A6' src/
```

Then walk each checkbox above, citing the lines that pass or fail.
