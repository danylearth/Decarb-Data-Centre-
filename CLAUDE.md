# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for the **Data Center Summit 2026** (Decarb Summits), May 13–14, 2026, NYC. Originally scaffolded from Google AI Studio as a Vite + React app. Deployed to Vercel as a static SPA plus one serverless function; `vercel.json` routes `/api/*` to the function and everything else to `index.html`.

## Commands

- `npm run dev` — Start Vite dev server on port 3000 (host `0.0.0.0`)
- `npm run build` — Production build to `dist/`
- `npm run lint` — Type-check with `tsc --noEmit` (no separate linter)
- `npm run preview` — Preview production build locally
- `npm run clean` — Remove `dist/`

Note: `vite dev` does NOT run the `/api/register` handler. To exercise the email flow end-to-end, use `vercel dev` (requires `vercel` CLI) or deploy a preview.

## Tech Stack

- **Vite 6** with React 19 and TypeScript
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin — no `tailwind.config` file; theme tokens live in `src/index.css` under `@theme`
- **Framer Motion** (`motion` package) — installed but not currently imported anywhere
- **Lucide React** for icons (`Linkedin`, `X`, `Menu`)
- **Google Material Symbols** loaded via external stylesheet in `index.html` (used as `<span className="material-symbols-outlined">check_circle</span>`)
- **Google Fonts**: Space Grotesk (headlines) and Inter (body), imported from `src/index.css`
- **Resend** (`resend` npm package) — transactional email from the Vercel serverless function
- **@google/genai** — installed but not currently used

## Architecture

### Frontend
Single-page app. All UI lives in `src/App.tsx` as a vertical stack of section components: `Navbar`, `Hero`, `FeaturedSpeakers`, `Speakers`, `Schedule`, `Attendance`, `Partners`, `FinalCTA`, `Footer`, plus a `TicketModal` portal anchored at the top of `<App>`. No routing library.

**Nav anchor → section ID mapping** (non-obvious — labels don't match section names):
- `Speakers` → `#speakers` (`Speakers` section)
- `Agenda` → `#agenda` (`Attendance` section — NOT the `Schedule` section)
- `Supporting Members` → `#sponsors` (`Partners` section)
- `Venue` → `#venue` (`FinalCTA` / sign-up form section)

The Hero's "VIEW AGENDA" button links to `#schedule` (the `Schedule` section), which is a separate anchor from the navbar's "Agenda" link. Be careful when changing either.

**Schedule** uses a local `activeDay` state to toggle between two hard-coded day objects. Session objects may have a `type` of `break`, `tba`, or `closing` that changes styling; anything else is treated as a regular session.

**TicketModal** is a controlled component whose open state lives in `App`. Both `Navbar` and `Hero` trigger it via `onGetTicket` props. The two ticket links are external Luma URLs (`luma.com/l0inulj5` for Day 1, `luma.com/9ouwc89o` for Day 2).

### Serverless API
`api/register.ts` is a Vercel Node function (`@vercel/node` types). On POST it sends two Resend emails in parallel: a notification to `scott.donachie@decarbsummits.com` and a branded HTML welcome email to the registrant. Both use `onboarding@resend.dev` as the `from` address (Resend's sandbox sender — switch to a verified domain before production traffic scales). Required fields: `firstName`, `lastName`, `company`, `position`, `email`; `phone` is optional.

The `FinalCTA` form in `src/App.tsx` POSTs JSON to `/api/register` and shows a success panel on 2xx or an inline error on failure.

### Assets
Local assets live in `public/` and are referenced with root-relative paths (e.g. `src="/rajiv-bazaj.webp"`):
- `decarb-summits.png` — logo (also used as favicon)
- `rajiv-bazaj.webp`, `bill-thomas.png`, `razi.png` — speaker photos

The Hero background image is hotlinked from `lh3.googleusercontent.com` (Google AI Studio asset); replace if you need a stable asset.

### Path alias
`@/` maps to the project root — configured in both `vite.config.ts` and `tsconfig.json`.

## Design System

Color theme in `src/index.css` via Tailwind `@theme`:
- `primary`: `#D4FF5B` (lime green accent)
- `on-primary`: `#08092d` (text on primary bg)
- `background` / `surface`: `#08092d`
- `surface-container`: `#0e1040`
- `surface-container-high`: `#151853`
- `surface-container-low`: `#0b0d36`
- `secondary`: `#A7A7D2`
- `outline`: `#43456A`
- `outline-variant`: `#2a2c4e`
- `error`: `#ffb4ab`
- Font families: `font-headline` (Space Grotesk), `font-body` (Inter)

Note: `font-label` appears in some class strings but is NOT defined in `@theme` — it falls back to the browser default. Either define it or remove the class when you touch affected markup.

The welcome email in `api/register.ts` hard-codes these color values as inline styles. If you change the palette, update both places.

## Environment Variables

Config loaded from `.env.local` (gitignored). See `.env.example` for reference.

- `GEMINI_API_KEY` — Exposed to the client bundle via `vite.config.ts` `define` (becomes `process.env.GEMINI_API_KEY` in client code). Currently unused but wired up. Do not put secrets you don't want shipped to the browser here.
- `RESEND_API_KEY` — Server-side only, read by `api/register.ts`. Must be set in the Vercel project env for the registration endpoint to work.
- `APP_URL` — Documented in `.env.example` (AI Studio injects it); not currently referenced in code.
