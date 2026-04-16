# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for the **Data Center Summit 2026** (Decarb Summits). Originally scaffolded from Google AI Studio as a Vite + React app. Deployed to Vercel as a static SPA with a catch-all rewrite (`vercel.json`).

## Commands

- `npm run dev` — Start dev server on port 3000
- `npm run build` — Production build (outputs to `dist/`)
- `npm run lint` — Type-check with `tsc --noEmit` (no separate linter)
- `npm run preview` — Preview production build locally
- `npm run clean` — Remove `dist/`

## Tech Stack

- **Vite 6** with React 19 and TypeScript
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin (no `tailwind.config` file — theme is defined in `src/index.css` using `@theme`)
- **Framer Motion** (`motion` package) for animations
- **Lucide React** for icons
- **Google Material Symbols** loaded via external stylesheet (used as `<span className="material-symbols-outlined">`)
- **Google Fonts**: Space Grotesk (headlines) and Inter (body), imported in `src/index.css`

## Architecture

Single-page app with all UI in `src/App.tsx` as a vertical stack of section components: `Navbar`, `Hero`, `FeaturedSpeakers`, `Speakers`, `Attendance`, `Partners`, `FinalCTA`, `Footer`. No routing, no backend API calls in current state.

**Nav anchor → section ID mapping** (non-obvious — the navbar labels don't match the IDs):
- Speakers → `#speakers` (`Speakers` section)
- Agenda → `#agenda` (`Attendance` section)
- Sponsors → `#sponsors` (`Partners` section)
- Venue → `#venue` (`FinalCTA` section)

**Registration form** (`FinalCTA`): UI-only — `handleSubmit` sets local state to show a success message but does not POST to any backend.

**Local assets** in `public/`: `decarb-summits.png` (logo), `rajiv-bazaj.webp`, `bill-thomas.png` (speaker photos). Referenced with root-relative paths (e.g. `/rajiv-bazaj.webp`).

**Path alias**: `@/` maps to project root (configured in both `vite.config.ts` and `tsconfig.json`).

## Design System

Color theme defined in `src/index.css` via Tailwind `@theme` (full token list):
- `primary`: `#D4FF5B` (lime green accent)
- `on-primary`: `#08092d` (text on primary bg)
- `background` / `surface`: `#08092d`
- `surface-container`: `#0e1040`
- `surface-container-high`: `#151853`
- `surface-container-low`: `#0b0d36`
- `secondary`: `#A7A7D2`
- `outline`: `#43456A`
- `outline-variant`: `#2a2c4e`
- Font families: `font-headline` (Space Grotesk), `font-body` (Inter)

Note: `font-label` is used in `App.tsx` but is not defined in the theme — it falls back to the browser default.

## Environment Variables

- `GEMINI_API_KEY` — Exposed to client via `vite.config.ts` `define`. Required if Gemini AI features are added.
- Config loaded from `.env.local` (gitignored). See `.env.example` for reference.
