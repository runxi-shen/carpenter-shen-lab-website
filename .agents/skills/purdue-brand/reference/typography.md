# Purdue Typography

Source: marcom.purdue.edu/our-brand/visual-identity (public, fetched 2026-05-27).

## Official typefaces

| Typeface | Role | Notes |
|---|---|---|
| **Acumin Pro** (sans-serif) | Headlines, subheads, callouts, body copy — the workhorse face. | Use Acumin Pro, Acumin Pro SemiCondensed, or Acumin Pro Condensed. Requires Adobe Fonts license. |
| **United Sans** (display sans) | Brief callouts, factoids, numbers, emphasis. | High-impact display only. Don't set long text in it. |
| **Source Serif Pro** (serif) | Small sizes, long-form text, sophisticated applications. | Free via Google Fonts (now versioned as Source Serif 4). |

## System fallbacks (per Purdue Marcom)

When the brand fonts are unavailable:

| Brand face | System fallback |
|---|---|
| United Sans | **Impact** |
| Acumin Pro | **Franklin Gothic** |
| Source Serif Pro | **Georgia** |

## Free web-safe alternates used on this site

The lab site uses Google Fonts because Acumin/United require paid licenses. These are intentional substitutions, documented in CLAUDE.md:

| Brand face | Free alternate (Google Fonts) | CSS var |
|---|---|---|
| Acumin Pro | **Barlow** (400, 500, 600, 700, 900) | `--font-heading` |
| United Sans | **Barlow Condensed** (400, 500, 600, 700) | `--font-display` |
| Source Serif Pro | **Source Serif 4** (400, 600, 700) | `--font-body` |

This is an approved-by-the-lab deviation, not a Purdue-sanctioned one. **VERIFY-PDF**: confirm the official guidelines allow alternate web fonts for affiliated sites. If not, switch to licensed Adobe Fonts via a Purdue-paid Typekit account before publishing widely.

## Detailed type rules

The public page mentions but does not publish exact values for leading, tracking, and scale. **VERIFY-PDF** against the Brand Guidelines PDF.

Current site values (`src/assets/styles/global.css`) that should be kept unless the PDF specifies otherwise:

```
h1 → clamp(2.5rem, 5vw, 4rem) — Barlow 700, letter-spacing -0.01em, line-height 1.15
h2 → clamp(1.8rem, 3.5vw, 2.8rem) — Barlow 700
h3 → clamp(1.3rem, 2.5vw, 1.8rem) — Barlow 700
body → Source Serif 4, line-height 1.7, text-align: justify
.section-label → Barlow Condensed 600, letter-spacing 0.14em, UPPERCASE
.mono-label → Barlow Condensed 600, 0.8rem, letter-spacing 0.1em, UPPERCASE
```

## Do / don't

- **Do** set all UI/headings in Barlow (the Acumin stand-in) and all paragraphs in Source Serif 4.
- **Do** use Barlow Condensed for labels, badges, section eyebrows.
- **Do** justify body paragraphs (per CLAUDE.md house style).
- **Don't** use em dashes in body text (per CLAUDE.md — use commas or restructure).
- **Don't** mix in additional typefaces (no Inter, no Roboto, no Montserrat). The three-face system is the entire system.
- **Don't** italicize Source Serif 4 for emphasis if it would visually clash with the heading face; bold is usually safer.
