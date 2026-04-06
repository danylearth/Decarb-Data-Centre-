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

Single-page app with all UI in `src/App.tsx` as a vertical stack of section components (Navbar, Hero, Highlights, Speakers, Attendance, Partners, FinalCTA, Footer). No routing, no backend API calls in current state.

**Path alias**: `@/` maps to project root (configured in both `vite.config.ts` and `tsconfig.json`).

## Design System

Color theme defined in `src/index.css` via Tailwind `@theme`:
- Primary: `#D4FF5B` (lime green accent)
- Background/Surface: deep navy (`#08092d` family)
- Secondary text: `#A7A7D2`
- Font families: `font-headline` (Space Grotesk), `font-body` (Inter)

## Environment Variables

- `GEMINI_API_KEY` — Exposed to client via `vite.config.ts` `define`. Required if Gemini AI features are added.
- Config loaded from `.env.local` (gitignored). See `.env.example` for reference.
