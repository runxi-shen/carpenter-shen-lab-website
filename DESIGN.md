# DESIGN — Carpenter-Shen Lab Website

> Read by [impeccable](.agents/skills/impeccable/SKILL.md) (`load-context.mjs`). Authoritative design tokens for this project. When in doubt, the deeper spec is in [.agents/skills/purdue-brand/reference/](.agents/skills/purdue-brand/reference/).

## Color

All accents come from the official Purdue palette. See [purdue-brand/reference/color.md](.agents/skills/purdue-brand/reference/color.md) for HEX/RGB and contrast guidance.

```
Primary
  Boilermaker Gold  #CFB991   — dominant brand accent
  Black             #000000   — co-primary; dark surfaces

Supporting (use sparingly, never let them eclipse Boilermaker Gold)
  Aged              #8E6F3E   — link color on light surfaces; subtle gold
  Rush              #DAAA00   — vibrant gold; CTAs and hovers
  Field             #DDB945   — secondary highlights
  Dust              #EBD99F   — pale tint backgrounds
  Steel             #555960   — secondary body text on light
  Cool Gray         #6F727B   — captions, metadata
  Railway Gray      #9D9795   — dividers, muted UI
  Steam             #C4BFC0   — soft borders

Surfaces (light theme — current)
  Warm cream        #FAF7EF   — page background, header, hero
  Deep cream        #F2EDDF   — alt section background
  Pure white        #FFFFFF   — cards, elevated surfaces
  Near-black text   #1A1A1A
  Footer dark       #1A1A1A   — only surface still dark, kept for hierarchy contrast
```

### Color strategy

**Committed** (impeccable taxonomy). One saturated color — Boilermaker Gold + its Aged/Rush family — carries identity in 30–60% of compositions. The hero is a warm-cream surface with a gold radial wash and a transparent abstract cell illustration; text is near-black; CTA is a black pill with cream label. The footer stays dark for visual rhythm.

### Known deviation — resolved

The legacy `--accent-teal` (`#0D9488`) and `--accent-teal-light` (`#14B8A6`) tokens are now **aliased to `--purdue-rush` and `--purdue-field`** in `global.css`. All teal accents now render as Purdue golds without per-component edits. The aliases can be deleted once every component is refactored to reference `--purdue-*` directly.

## Typography

The hero now leads with **Source Serif 4** — the Purdue-official serif — set as an editorial display headline with italic emphasis on key phrases (impeccable's "commit to a bold direction"). Barlow stays for UI and secondary headings.

```
Display              Source Serif 4 (italic-aware)   — Purdue-official serif
                     weights: 400 600 700 + italic
                     Hero headline: 600, italic for emphasis
                     letter-spacing -0.02em

Heading / UI         Barlow      — Acumin Pro free alternate
                     weights: 400 500 600 700
                     CTAs, nav, secondary headings

Labels / eyebrows    Barlow Condensed   — United Sans free alternate
                     weights: 500 600 700
                     UPPERCASE, letter-spacing 0.16em–0.18em

Body / long-form     Source Serif 4
                     weights: 400 600 700
                     line-height 1.65, text-align: justify
```

Scale (current):

```
hero h1   clamp(2.4rem, 5.4vw, 4.6rem)  — Source Serif 4 italic-aware
h1        clamp(2.75rem, 6vw, 5.25rem)
h2        clamp(2rem, 4vw, 3.25rem)
h3        clamp(1.4rem, 2.5vw, 1.9rem)
body      1rem (16px), line-height 1.65
```

Rules: no em dashes. Justified body. Section subtitles override to `text-center`.

## Elevation & cards

```
.card-base
  background: white
  border: 1px solid rgba(0,0,0,0.06)
  border-radius: 12px
  shadow rest:   0 1px 3px rgba(0,0,0,0.04)
  shadow hover:  0 4px 24px rgba(0,0,0,0.08), 0 0 0 1px #CFB991
  hover transform: translateY(-2px)
```

## Motion

Quiet. Two named animations:

- `fade-in` (0.6s ease-out)
- `slide-up` (0.6s ease-out, 20px)

Anything more aggressive needs justification. No parallax. No scroll-jacking. No infinite loops competing for attention.

## Graphic devices

- **Diagonals**: 77° (matches Acumin italic incline). See [purdue-brand/reference/graphic-elements.md](.agents/skills/purdue-brand/reference/graphic-elements.md).
- **Type offset / outline**: 0.5–1pt stroke (~1–2px web).
- **`.section-label`**: Barlow Condensed 600, 1rem, UPPERCASE, letter-spacing 0.14em, gold, flanked by 2rem gold rules.
- **`.mono-label`**: Barlow Condensed 600, 0.8rem, UPPERCASE, letter-spacing 0.1em, gold-dim.
- **`.gold-underline`**: 3px gradient bar 4px below text. Currently gold→teal; should become gold→Rush for full Purdue compliance.
- **`.dot-grid`**: 40px gold dots at 15% opacity, decorative on dark hero only.

## Layout & grid

- Max content width: `max-w-7xl` (~1280px).
- 12-column grid, generous gutters (`gap-12 lg:gap-16`).
- Vertical rhythm in multiples of 8px.
- Surfaces alternate dark (hero, nav, footer at `#111`) and light (content at white / `#F5F5F0`).

## Accessibility

- Boilermaker Gold `#CFB991` is decorative-only on white — fails AA. Use Aged `#8E6F3E` for text/links on light surfaces.
- Focus states must be visible on both `#111` and `#FFF` backgrounds.
- All interactive affordances include a non-color signal (weight, underline, icon).

## Don't

- Don't introduce a 4th typeface.
- Don't recolor the Purdue mark (when added) or modify it in any way.
- Don't use marketing superlatives ("world-class", "cutting-edge") — kills the "Respected" attribute.
- Don't use Boilermaker Gold for body text on white.
- Don't drift the gold gradient into non-palette colors without a Marcom note.
