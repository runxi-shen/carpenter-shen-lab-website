---
name: purdue-brand
description: "Use when designing, redesigning, auditing, or polishing any visual surface of the Carpenter-Shen Lab website (or any Purdue-affiliated lab/center site) to make sure colors, typography, logo usage, graphic elements, voice, and lockups conform to Purdue's official brand guidelines (June 2025, v06). Pair with impeccable / frontend-design: load this skill first so brand constraints are in scope, then run the design or audit pass. Covers color palette compliance (Boilermaker Gold + supporting colors only), Acumin/United/Source Serif typography (and Barlow/Barlow Condensed/Source Serif 4 free alternates), logo clear-space and lockup rules, diagonal/type-offset graphic devices, photography style, voice attributes (Driven, Balanced, Intentional, Innovative, Inclusive, Respected), and the 'Persistent Pursuit of the Next Giant Leap' messaging frame. Not for backend, infra, or non-visual concerns."
argument-hint: "[audit|tokens|checklist|voice|logo|color|typography]"
user-invocable: true
allowed-tools:
  - Read
  - Grep
  - Glob
  - Edit
  - Write
  - Bash(grep *)
  - Bash(rg *)
license: Project-internal. Brand rules sourced from publicly documented Purdue Marketing & Communications guidance at marcom.purdue.edu and the lab's downloaded Brand Guidelines PDF (June 2025, V06).
---

Enforces Purdue University brand compliance on the Carpenter-Shen Lab site. Use **before** and **alongside** [impeccable](../impeccable/SKILL.md) and the `frontend-design` skill, so every design choice is checked against the official palette, typography, and voice.

## How to use

1. **Load context.** Read every file under `reference/` in this skill. They are the ground truth for Purdue's brand rules:
   - [reference/color.md](reference/color.md) — full palette with HEX/RGB/CMYK
   - [reference/typography.md](reference/typography.md) — Acumin Pro / United Sans / Source Serif Pro and the Barlow / Barlow Condensed / Source Serif 4 free alternates the site uses
   - [reference/logo.md](reference/logo.md) — clear-space, minimum size, sub-brand lockup rules
   - [reference/graphic-elements.md](reference/graphic-elements.md) — diagonals (77°), type-offset weights
   - [reference/voice.md](reference/voice.md) — six brand attributes + messaging frame
   - [reference/checklist.md](reference/checklist.md) — pass/fail audit list
2. **Cross-reference the project.** `DESIGN.md` and `PRODUCT.md` at the repo root mirror these rules so impeccable's loader picks them up automatically. If those two files exist, skim them; if they don't, read the references directly.
3. **Apply against the surface in scope.** Either:
   - Run the audit subcommand (`/purdue-brand audit` or argument `audit`) — produces a pass/fail report against [reference/checklist.md](reference/checklist.md).
   - Or feed the loaded rules to the design pass. When the user invokes impeccable next, all six attributes and the palette/type constraints are already in context, so impeccable's `craft`/`shape`/`polish` runs stay brand-safe.
4. **Flag deviations explicitly** rather than silently fixing them. Some are intentional (the site uses Barlow instead of Acumin because Acumin requires Adobe Fonts; documented in CLAUDE.md). Others (the legacy `#0D9488` teal accent) are NOT in the Purdue palette and should be called out.

## Subcommands

| Argument | What it does |
|----------|--------------|
| (none) or `audit` | Read [reference/checklist.md](reference/checklist.md), grep the codebase for color/font/logo usage, report compliance line-by-line with file:line citations. |
| `tokens` | Emit the canonical CSS custom-property block (palette + font stacks). Useful when seeding a new component or refactoring `global.css`. |
| `checklist` | Print the audit checklist as-is for the user to skim. |
| `color` | Load [reference/color.md](reference/color.md) only — useful when picking a color for a new component. |
| `typography` | Load [reference/typography.md](reference/typography.md) only. |
| `logo` | Load [reference/logo.md](reference/logo.md) only — clear-space, lockups, sub-brand patterns. |
| `voice` | Load [reference/voice.md](reference/voice.md) — for copy edits, hero headlines, calls to action. |

## Pairing with impeccable

impeccable's design laws (OKLCH, theme commitment, anti-AI aesthetics) and Purdue's brand rules can conflict. When they do, **brand wins** for color identity and typography (Purdue requires specific hex values and font families; impeccable cannot override that). impeccable still drives composition, hierarchy, spacing, motion, and contrast strategy — apply its laws within the Purdue palette.

Practical handoff pattern:

```
/purdue-brand audit                # establish current compliance
/impeccable shape <surface>         # plan the design within brand constraints
/impeccable craft <surface>         # implement
/purdue-brand audit                # confirm the new code stays compliant
```

## Source provenance

The reference files were compiled from:
- `marcom.purdue.edu/our-brand/visual-identity/` (public, fetched 2026-05-27) — palette hex codes, font families, diagonal angle, type-offset weights
- `marcom.purdue.edu/our-brand/voice-tone/` (public) — six brand attributes, messaging frame
- The user-supplied **508_MM-25-1248800-BrandGuidelines-June2025-V06-1.pdf** — *referenced by name but not made accessible to this session*. Any rule below tagged **VERIFY-PDF** is inferred from the public pages or the existing site code and should be cross-checked against the official PDF before relying on it.

To update this skill: drop the official PDF anywhere readable, ask Claude to re-read each `reference/` file against the PDF, and remove the **VERIFY-PDF** tags as each rule is confirmed.
