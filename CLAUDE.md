# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Commands

- **Install**: `npm install`
- **Dev server**: `npm run dev` (Vite dev server at http://localhost:5173)
- **Build**: `npm run build` (Runs TypeScript check then Vite build)
- **Lint**: `npm lint` (ESLint check, no auto-fix)
- **Preview**: `npm run preview` (Preview production build locally)

## Tech Stack

- **React 19** with TypeScript
- **Vite 7** for build tooling and fast dev server
- **React Router DOM 7** for client-side routing
- **CSS Variables** for light/dark theming (stored in `index.css`)

## Project Architecture

### High-Level Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Route-level page components (one per route)
├── data/           # Static data exports (team, events, sponsors)
├── hooks/          # Custom React hooks
├── index.css       # Global styles with CSS variables
├── App.tsx         # Route definitions and global layout
└── main.tsx        # React DOM entry point
```

### Key Architectural Patterns

**1. Theme System**: `useTheme` hook manages light/dark mode
   - Stored in `localStorage` with key `digisoc-theme`
   - Applied via `data-theme` attribute on `document.documentElement`
   - All color values use CSS variables, defined in `index.css`
   - Theme toggle passed through Navbar → Footer/components

**2. Page Meta & SEO**: `useDocumentMeta` hook manages document title and meta tags
   - Used in every page component
   - Automatically updates `<title>`, `og:*` tags, and canonical links
   - Base title: "UNSW DigiSoc"
   - All pages include Open Graph and Twitter meta tags

**3. Scroll-based Animations**:
   - `useInView` hook: detects when elements enter viewport
   - `ScrollReveal` component: wrapper that adds fade-in animation when in view
   - `scroll-reveal` CSS class handles the animation
   - Apply to sections to create entrance animations

**4. Global Visual Effects**:
   - `MouseGlow`: cursor-following glow effect
   - `StarTrail`: particle trail following cursor
   - `EntranceAnimation`: page entrance animation
   - Rendered in `App.tsx` as global overlays (not in main flow)

**5. Routing**: React Router v7 with catch-all `*` route for 404
   - Routes defined in `App.tsx`
   - `ScrollToTop` component scrolls to top on route change
   - Base path is `/` (defined in `vite.config.ts`)

### Component Organization

- **Reusable components**: `components/` folder
  - `Navbar`, `Footer`: global layout components
  - `ScrollReveal`, `AnimatedCard`: animation wrappers
  - `Hero`, `EventCard`, `TeamCard`: content-specific components
  - `MouseGlow`, `StarTrail`, `FloatingOrbs`: visual effects
  - `ThemeToggle`, `MagneticButton`: interactive elements

- **Pages**: `pages/` folder
  - One component per route: `Home`, `About`, `Events`, `Team`, `Contact`, `Sponsors`, `DigiPost`, `NotFound`
  - Each page calls `useDocumentMeta()` for SEO

### Data Layer

Static data in `src/data/`:
- `team.ts`: executive team profiles (used in `/team` and home carousel)
- `events.ts`: event listings (used in `/events`)
- `sponsors.ts`: sponsor information (used in `/sponsors`)

Data is imported and rendered by respective pages—no API layer.

## Styling Approach

- Global styles in `src/index.css`
- CSS Variables for theming: `--color-bg`, `--color-text`, `--color-primary`, etc.
- Light theme (default) defined as `body` rules; dark theme as `[data-theme="dark"]` rules
- Component-level styles: inline `className` strings (no CSS modules or styled-components)
- Animations: `@keyframes` in global CSS, applied via class names

## Common Development Tasks

**Adding a new page:**
1. Create component in `src/pages/PageName.tsx`
2. Import in `App.tsx`
3. Add `<Route path="/path" element={<PageName />} />`
4. Call `useDocumentMeta()` in component for SEO

**Adding scroll animations:**
- Wrap content in `<ScrollReveal>` component (optional `delay` prop in ms)
- CSS handles the animation on `.scroll-reveal.visible` class

**Updating theme colors:**
- Edit CSS variables in `src/index.css` under `body` and `[data-theme="dark"]` rules
- All components automatically use updated colors

**Carousel/interactive components:**
- `ExecCarousel`: swipeable carousel (used on home and team pages)
- Accept array of items and optional `onSelect` handler

## Build & Deployment

- TypeScript check runs before Vite build: `npm run build` calls `tsc -b && vite build`
- Production build output: `dist/` folder
- Vite plugins: React refresh + custom `routeHtmlPlugin` for route-based HTML generation

## ESLint Configuration

- Uses Flat Config (ESLint v9+): `eslint.config.js`
- Rules: JavaScript recommended, TypeScript recommended, React Hooks rules, React Refresh rules
- Global ignores: `dist/` folder
- Run: `npm run lint`
