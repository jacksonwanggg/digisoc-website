---
task: DigiSoc Website v2 — Light/Dark Mode, Image Sections, Swipeable Execs, Animations
test_command: "npm run build"
---

# Task: DigiSoc Website v2

Complete visual redesign of the UNSW DigiSoc website. The site already has routing, pages, and components from the previous build. This task transforms it into a **clean, modern, light-mode-first** website with a dark mode toggle, image-centric layout, swipeable exec carousel, and polished interactive animations.

---

## 🎨 Theme System — Light Mode (Default) + Dark Mode

### Core Concept

The default experience is **light mode**: clean pure white backgrounds with the DigiSoc brand purple `#6C5CE7` as the primary accent. Dark mode is a toggle that swaps to a deep purple-tinted dark theme.

### Light Mode Palette (Default)

```css
:root, [data-theme="light"] {
  --bg-primary: #FFFFFF;
  --bg-secondary: #F8F7FC;
  --bg-tertiary: #F0EEFF;
  --bg-card: #FFFFFF;

  --text-primary: #1A1A2E;
  --text-secondary: #4A4A6A;
  --text-muted: #8888A8;

  --primary: #6C5CE7;
  --primary-dark: #5A4BD6;
  --primary-light: #8677ED;
  --primary-bg: rgba(108, 92, 231, 0.08);
  --primary-bg-hover: rgba(108, 92, 231, 0.12);

  --accent: #FF6584;
  --accent-secondary: #43E8C3;

  --border: rgba(108, 92, 231, 0.12);
  --border-hover: rgba(108, 92, 231, 0.25);

  --shadow-sm: 0 2px 8px rgba(108, 92, 231, 0.06);
  --shadow-md: 0 4px 20px rgba(108, 92, 231, 0.08);
  --shadow-lg: 0 8px 40px rgba(108, 92, 231, 0.12);
  --shadow-hover: 0 12px 48px rgba(108, 92, 231, 0.15);

  --gradient-primary: linear-gradient(135deg, #6C5CE7 0%, #A855F7 100%);
  --gradient-hero: linear-gradient(135deg, #F8F7FC 0%, #F0EEFF 50%, #E8E4FF 100%);
  --gradient-accent: linear-gradient(135deg, #6C5CE7 0%, #FF6584 100%);

  --navbar-bg: rgba(255, 255, 255, 0.85);
  --navbar-border: rgba(108, 92, 231, 0.08);
  --card-bg: rgba(255, 255, 255, 0.8);
  --card-border: rgba(108, 92, 231, 0.1);
  --card-bg-hover: rgba(108, 92, 231, 0.04);
}
```

### Dark Mode Palette

```css
[data-theme="dark"] {
  --bg-primary: #0D0B1A;
  --bg-secondary: #161233;
  --bg-tertiary: #1E1845;
  --bg-card: #1A1640;

  --text-primary: #FFFFFE;
  --text-secondary: #C8C3E3;
  --text-muted: #9B95C4;

  --primary: #7C5CFC;
  --primary-dark: #6B4DE6;
  --primary-light: #9B82FC;
  --primary-bg: rgba(124, 92, 252, 0.12);
  --primary-bg-hover: rgba(124, 92, 252, 0.18);

  --border: rgba(124, 92, 252, 0.15);
  --border-hover: rgba(124, 92, 252, 0.35);

  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 8px 40px rgba(0, 0, 0, 0.5);
  --shadow-hover: 0 12px 48px rgba(124, 92, 252, 0.2);

  --gradient-hero: linear-gradient(135deg, #0D0B1A 0%, #161233 30%, #2D1B69 70%, #4A2D8C 100%);

  --navbar-bg: rgba(13, 11, 26, 0.85);
  --navbar-border: rgba(124, 92, 252, 0.1);
  --card-bg: rgba(26, 22, 64, 0.5);
  --card-border: rgba(124, 92, 252, 0.12);
  --card-bg-hover: rgba(124, 92, 252, 0.08);
}
```

### Theme Toggle Implementation

- Add a `ThemeToggle` component (sun/moon icon button) in the navbar
- Store preference in `localStorage` under key `digisoc-theme`
- Default to `"light"` if no preference saved
- Toggle sets `data-theme` attribute on `<html>` element
- Use smooth CSS transitions on all theme-dependent properties (300ms ease)
- All existing CSS must be refactored to use the new CSS variables instead of hardcoded colors

---

## 🖼️ Image-Centric Layout

### Hero Section — Group Photo Banner

When someone lands on the site, the **first thing they see** is a large full-width hero section featuring a DigiSoc group photo:

- Full-width hero image container (100vw, aspect-ratio 16/9 on desktop, taller on mobile)
- The group photo should be displayed as a CSS `background-image` with `background-size: cover` and `background-position: center`
- For now, use a **placeholder**: a large gradient container (using `--gradient-hero`) with a centered text overlay saying "DigiSoc Group Photo" and a camera icon — this makes it obvious where the real photo goes later
- Overlay the image with a semi-transparent gradient (from transparent to `--bg-primary`) at the bottom so text is readable
- On top of the image overlay, display:
  - The DigiSoc logo (from `/digisocLogo.jpeg`)
  - "UNSW Digital Society" title
  - Short tagline
  - CTA buttons: "Explore Events" and "Join Us"
- The entire hero should have a subtle Ken Burns style zoom animation (very slow, ~20s, scale 1.0→1.05)

### Image Placeholder Pattern

Throughout the site, wherever images are needed (group photos, event photos, exec portraits), create a consistent **placeholder component** `ImagePlaceholder`:
- Takes `width`, `height`, `label` props
- Renders a `--bg-tertiary` rounded box with a dashed `--border` border
- Centered camera/image SVG icon + the label text below it
- This makes it crystal clear where real photos will be swapped in later

### Exec Photo Slots

Each team member card should include an image area at the top:
- Circular or rounded-square image container (120×120px)
- Use `ImagePlaceholder` for now with the exec's initials as the label
- The image container should have a subtle gradient border ring using `--gradient-primary`
- On hover, the border should glow slightly

---

## 👥 Swipeable Executive Carousel

### Requirements

- Display **all team members** (expand to ~10 executives) in a **horizontally swipeable carousel**
- The carousel should work via:
  - **Mouse drag** on desktop (click and drag to scroll)
  - **Touch swipe** on mobile (native scroll momentum)
  - **Arrow buttons** on the left and right edges (visible on desktop, hidden on mobile)
  - **Scroll snap** so cards snap to position
- Each exec card shows:
  - Photo placeholder (circular, 120×120px)
  - Name
  - Role/title
  - Optional one-line bio
- Cards should be ~280px wide with 1.5rem gap
- Show partial cards at the edges to hint that scrolling is possible
- Add a subtle scroll indicator (dots or progress bar) below the carousel showing position
- The carousel container should have `overflow-x: auto` with `scroll-snap-type: x mandatory`
- Hide the native scrollbar with CSS (`scrollbar-width: none`, `::-webkit-scrollbar { display: none }`)
- Use NO external carousel libraries — pure CSS scroll snap + light JS for drag behavior

### Team Data

Expand the `team.ts` data file to include 10 executives:

```typescript
{ id: 1, name: "Alex Chen", role: "President", color: "#6C5CE7" }
{ id: 2, name: "Sarah Kim", role: "Vice President", color: "#FF6584" }
{ id: 3, name: "James Wu", role: "Secretary", color: "#43E8C3" }
{ id: 4, name: "Priya Sharma", role: "Treasurer", color: "#F9A826" }
{ id: 5, name: "David Park", role: "Events Director", color: "#00C9FF" }
{ id: 6, name: "Emma Liu", role: "Marketing Director", color: "#A855F7" }
{ id: 7, name: "Ryan Nguyen", role: "Tech Director", color: "#6C5CE7" }
{ id: 8, name: "Olivia Zhang", role: "Partnerships Director", color: "#FF6584" }
{ id: 9, name: "Liam Santos", role: "Design Lead", color: "#43E8C3" }
{ id: 10, name: "Chloe Wang", role: "Content Lead", color: "#F9A826" }
```

---

## 🔗 External Links

### Rubric Club Page

Add a prominent link to the DigiSoc Rubric page throughout the site:

**URL:** `https://campus.hellorubric.com/?s=6334`

- Add a "Get Tickets on Rubric" or "Find Us on Rubric" button/link in:
  - The hero section (as a third CTA or badge)
  - The events page (each event card can have a "Get Tickets" button pointing here)
  - The footer (as a link in the "Connect" column)
  - The contact/join page
- Use a consistent style: perhaps a pill/badge with a subtle distinct style so it's recognizable as an external link (e.g., small external link icon next to text)

### Social Links (Keep Existing)

- Instagram: https://www.instagram.com/unswdigisoc/?hl=en
- LinkedIn: https://www.linkedin.com/company/unsw-digisoc/?originalSubdomain=au
- Facebook: https://www.facebook.com/unswdigitalsociety/

---

## 🖼️ Logos, Favicon & Branding Assets

Two logo files exist in `public/`:

- `public/digisocLogo.jpeg` — the DigiSoc logo (purple background with white "D" mark)
- `public/rubric logo.png` — the Rubric platform logo

### DigiSoc Logo Usage

- **Favicon**: Update `index.html` to use `/digisocLogo.jpeg` as the site favicon instead of the default Vite icon
- **Navbar logo**: Replace the current gradient-box "D" icon with an `<img>` tag loading `/digisocLogo.jpeg`. Size it to ~36×36px with `border-radius: 8px` and `object-fit: cover`
- **Footer logo**: Display the DigiSoc logo in the footer brand section (left column)

### Rubric Logo Usage

- Wherever there is a "Find Us on Rubric" or "Get Tickets on Rubric" link, display the Rubric logo (`/rubric logo.png`) as an inline icon next to the link text
- Size the Rubric logo icon to ~20×20px inline with text, or ~28×28px for standalone link buttons
- Use it in:
  - The hero section Rubric badge/link
  - Event card "Get Tickets" buttons (small icon before text)
  - The footer "Connect" section next to the Rubric link
  - The contact/join page Rubric link card

---

## ✨ Entry Animations (Page Load)

When a user first visits or navigates to any page, kick off a burst of entrance animations:

### Floating Shapes Burst
- On initial page load, spawn 15–25 small geometric shapes (circles, triangles, squares, hexagons) that fly outward from the center of the viewport
- Shapes should be in the brand colors: `#6C5CE7`, `#A855F7`, `#FF6584`, `#43E8C3`
- They fly outward in random directions, rotating as they go, then fade out over ~1.5–2 seconds
- After the burst completes, the shapes are removed from the DOM
- This only plays on the **first page load** (not on every route change). Use a flag in sessionStorage
- In light mode, use semi-transparent shapes over the white background
- In dark mode, the shapes can be slightly more opaque/vibrant
- Use CSS `@keyframes` animations spawned via JS — no animation libraries

### Content Stagger-In
- After the shape burst, page content should animate in with a staggered cascade:
  - Navbar slides down from top (translateY -100% → 0, 400ms)
  - Hero content fades up (translateY 30px → 0, opacity 0 → 1, 600ms, 200ms delay)
  - Below-fold sections use scroll-triggered fade-in (already built from previous task)

---

## ✨ Mouse Cursor Effects

### Star Trail on Mouse Move
- As the user moves the mouse, spawn small star/sparkle particles at the cursor position
- Each particle: 4–8px, random rotation, random color from `[#6C5CE7, #A855F7, #FF6584, #43E8C3]`
- Particles should drift slightly in a random direction, scale down, and fade out over ~600ms
- Throttle spawning to ~1 particle per 40ms of movement (don't spam hundreds)
- Use `pointer-events: none` and a high z-index overlay
- On mobile / touch devices, disable this entirely (check `@media (hover: hover)`)
- Respect `prefers-reduced-motion` — disable if user prefers reduced motion

### Keep Existing Mouse Effects
- The MouseGlow, card tilt, and magnetic button effects from the previous build should remain
- Adjust their colors to work in both light and dark mode:
  - Light mode glow: `rgba(108, 92, 231, 0.06)` (subtle on white)
  - Dark mode glow: `rgba(124, 92, 252, 0.08)`

---

## 🧩 Component-Specific Updates

### Navbar
- Frosted glass: `backdrop-filter: blur(20px)` with `var(--navbar-bg)`
- Left: DigiSoc logo image (`/digisocLogo.jpeg`, 36×36px) + "DigiSoc" text
- Center/right: nav links
- Far right: Theme toggle (sun/moon icon) + social icons
- Mobile: hamburger menu with theme toggle included in the mobile menu

### Hero
- Full-width group photo placeholder (see Image-Centric Layout section)
- Logo + title + tagline + CTAs overlaid on the photo
- "Find Us on Rubric" badge/link
- Floating shapes in background (subtle, ambient, separate from the page-load burst)
- StarField particles (keep from previous build, adjust opacity for light mode)

### Home Page Sections
After the hero:
1. **About Preview** — "Who is DigiSoc?" with 3 feature cards (Learn, Connect, Grow)
2. **Gallery Section** (NEW) — A grid of 4–6 `ImagePlaceholder` boxes labeled "DigiSoc Event Photo 1", "Workshop Photo", "Social Night", etc. This is where real photos go later
3. **Upcoming Events** — event cards with "Get Tickets" linking to Rubric
4. **Meet the Team** — the swipeable exec carousel (NOT a grid anymore)
5. **CTA Section** — "Ready to Get Involved?"

### Events Page
- Each event card should include an image placeholder at the top
- "Register" / "Get Tickets" buttons should link to the Rubric URL

### Team Page
- The team page should use the swipeable carousel as the primary display
- Below the carousel, optionally show a larger "About the Team" section with an `ImagePlaceholder` for a team group photo

### Contact / Join Page
- Include the Rubric link prominently ("Find us on Rubric" card/button)

### Footer
- DigiSoc logo image in footer brand (left column)
- Rubric link with Rubric logo icon (`/rubric logo.png`) in the "Connect" section
- Social links (Instagram, LinkedIn, Facebook)
- **Copyright notice** at the very bottom: `© DigiSoc 2026. All rights reserved.` (or `© UNSW Digital Society 2026`) — centered, small muted text, separated from the rest of the footer by a thin border-top line

---

## 📱 Responsive Design

- **Mobile first** — all layouts must work on 375px+ screens
- Navbar collapses to hamburger on mobile with full-screen overlay menu
- Hero photo scales to fill viewport width, taller aspect ratio on mobile
- Exec carousel: swipeable with touch, no arrow buttons on mobile
- Cards stack vertically on mobile
- Gallery grid: 1 column on mobile, 2 on tablet, 3 on desktop
- Theme toggle accessible in both desktop and mobile nav
- Font sizes use `clamp()` for fluid typography
- Tap targets minimum 44×44px on mobile

---

## 📁 Suggested New / Modified Files

```
public/
  digisocLogo.jpeg              — Already exists, use as logo + favicon
  rubric logo.png               — Already exists, use as icon next to Rubric links

src/
  components/
    ThemeToggle.tsx              — Sun/moon toggle button
    ExecCarousel.tsx             — Swipeable horizontal exec carousel
    ImagePlaceholder.tsx         — Reusable placeholder for future images
    EntranceAnimation.tsx        — Floating shapes burst on first load
    StarTrail.tsx                — Mouse star/sparkle trail
    Gallery.tsx                  — Photo gallery grid section

  hooks/
    useTheme.ts                  — Theme state management (localStorage + data-theme)

  data/
    team.ts                      — Expand to 10 executives
```

---

## 🎯 Technical Requirements

1. **No external UI or animation libraries** — pure CSS + `requestAnimationFrame` + `IntersectionObserver`
2. **No external carousel libraries** — use CSS scroll snap + vanilla JS drag
3. **Performance** — all animations use `transform` and `opacity` only
4. **Mobile-friendly** — mouse effects disabled on touch devices, carousel works with touch swipe
5. **Respect `prefers-reduced-motion`** — disable non-essential animations
6. **TypeScript** — all new components properly typed, no `any`
7. **Theme transitions** — smooth 300ms ease transition when toggling light/dark
8. **Accessible** — theme toggle has `aria-label`, carousel has `aria-label`, proper color contrast in both modes
9. **Favicon** — update `index.html` to reference DigiSoc logo

---

## ✅ Success Criteria

1. [ ] Light mode is the default — pure white backgrounds with `#6C5CE7` purple accents
2. [ ] Dark mode toggle works — stored in localStorage, toggles `data-theme` on `<html>`
3. [ ] All CSS refactored to use theme-aware CSS variables (no hardcoded colors)
4. [ ] Smooth 300ms transition between light and dark mode
5. [ ] Hero section shows full-width group photo placeholder with overlay text and CTAs
6. [ ] DigiSoc logo (`digisocLogo.jpeg`) used in navbar, footer, and as favicon
7. [ ] Rubric logo (`rubric logo.png`) displayed as icon next to all Rubric links (hero, events, footer, contact)
8. [ ] `ImagePlaceholder` component used throughout for future photo slots
9. [ ] Home page has a gallery section with 4–6 photo placeholders
10. [ ] Exec carousel is horizontally swipeable (drag on desktop, touch on mobile)
11. [ ] Exec carousel has scroll snap, arrow buttons (desktop), and position indicator
12. [ ] Team data expanded to 10 executives
13. [ ] Rubric link (`https://campus.hellorubric.com/?s=6334`) in hero, events, footer, and contact page
14. [ ] Footer has copyright notice: "© DigiSoc 2026" at the bottom
15. [ ] Floating shapes burst animation plays on first page load
16. [ ] Mouse star/sparkle trail follows cursor on desktop
17. [ ] Entry stagger animation on page content (navbar slides down, hero fades up)
18. [ ] Existing animations preserved (MouseGlow, card tilt, magnetic buttons, scroll reveal, star field, floating orbs) and adjusted for both themes
19. [ ] Site is fully responsive (mobile 375px+ through desktop)
20. [ ] `prefers-reduced-motion` respected
21. [ ] `npm run build` succeeds with no TypeScript errors
22. [ ] No `any` types in new code

---

## Ralph Instructions

1. Work on the next incomplete criterion (marked [ ])
2. Check off completed criteria (change [ ] to [x])
3. Run build after changes
4. Commit frequently
5. When ALL criteria are [x], output:

```
<ralph>COMPLETE</ralph>
```

6. If stuck on the same issue 3+ times, output:

```
<ralph>GUTTER</ralph>
```

---

Clean. White. Purple. Swipeable.
Light by default, dark when you want it.
Photos front and center. Animations that feel alive.
Make it feel like a real society website — polished, inviting, unmistakably DigiSoc.
