# Purdue Graphic Elements

Source: marcom.purdue.edu/our-brand/visual-identity (public, fetched 2026-05-27).

## Diagonals

> "For most diagonal band applications, we recommend an angle of **77°**, which matches the incline of the italic style of Acumin Pro."

- Diagonal bands, slashes, and motion lines should be set at 77°.
- This applies to background ribbons, decorative dividers, and any compositional diagonal.

CSS implementation example:

```css
.purdue-diagonal {
  transform: rotate(13deg); /* 90° − 77° = 13° from vertical, or use 77° from horizontal directly */
  background: linear-gradient(77deg, var(--purdue-boilermaker-gold) 0%, var(--purdue-rush) 100%);
}
```

## Type Offset (outline-style display text)

> "The outline thickness will be determined by the scale of the text. Generally, the line-weight will be **0.5 or 1.0 points**."

- Used for headline-scale type with an offset outline behind the fill.
- Keep stroke weight thin — 0.5pt to 1pt at print scale, ≈ 1–2px at typical web display scale.
- Don't apply to body or small text; it loses legibility.

## Additional decorative devices

**VERIFY-PDF.** The PDF likely defines additional motion bars, frames, or pattern systems not exposed on the public page. Treat the site's current devices as approximations until confirmed:

- `.section-label` (the gold rule + uppercase eyebrow) — house-style, not from official Purdue brand. Keep unless the PDF specifies a different section-eyebrow treatment.
- `.gold-underline` — currently a Boilermaker Gold → teal gradient. Either switch to Boilermaker Gold → Rush for all-Purdue, or document the teal as a lab-specific extension. See [color.md](color.md).
- `.dot-grid` — decorative; subtle gold dots at 15% opacity on dark hero. Acceptable as long as it doesn't distract from the Purdue mark when one is added.

## Layout & grid

**VERIFY-PDF.** Public guidance is absent. Defaults the site uses (and that should be retained unless the PDF says otherwise):

- 12-column grid; max content width 7xl (≈ 1280px).
- Generous vertical rhythm — multiples of 8px.
- Hero, content, footer alternate dark/light surfaces for high contrast.
