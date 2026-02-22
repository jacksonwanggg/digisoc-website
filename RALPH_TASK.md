---
task: DigiSoc Theme Overhaul — Purple Space Aesthetic with Interactive Animations
test_command: "npm run build"
---

# Task: DigiSoc Theme Overhaul — Purple Space Aesthetic with Interactive Animations

Redesign the existing UNSW DigiSoc website to match the official DigiSoc branding: a **deep purple/violet space-inspired theme** with interactive mouse-driven animations, floating particles, and polished micro-interactions throughout.

The site already has the correct layout, routing, and content structure. This task is purely about **visual transformation and animation polish**.

---

## 🎨 Brand Color Palette

Replace the current CSS custom properties with the official DigiSoc color palette extracted from brand assets:

```css
:root {
  /* Primary — vibrant DigiSoc purple */
  --primary: #7C5CFC;
  --primary-dark: #6B4DE6;
  --primary-light: #9B82FC;

  /* Accent — mint/cyan green (from DigiSoc's UI accents) */
  --accent: #43E8C3;
  --accent-secondary: #FF6584;

  /* Backgrounds — deep space purples */
  --dark: #0D0B1A;
  --dark-light: #161233;
  --dark-mid: #1E1845;

  /* Surface layers */
  --gray-900: #1A1640;
  --gray-800: #252050;
  --gray-700: #342E65;
  --gray-400: #9B95C4;
  --gray-300: #C8C3E3;
  --white: #FFFFFE;

  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #7C5CFC 0%, #B44CF0 50%, #FF6584 100%);
  --gradient-hero: linear-gradient(135deg, #0D0B1A 0%, #161233 30%, #2D1B69 70%, #4A2D8C 100%);
  --gradient-card: linear-gradient(145deg, rgba(124, 92, 252, 0.08) 0%, rgba(67, 232, 195, 0.04) 100%);
  --gradient-accent: linear-gradient(135deg, #43E8C3 0%, #7C5CFC 100%);
}
```

These colors are derived from the DigiSoc brand materials:
- Logo: white mark on `#6C5CE7` purple
- Event banners: deep purple `#1A0B3B` → `#4A2D8C` gradients
- UI accents: mint/cyan `#43E8C3` borders and highlights
- Secondary accent: pink `#FF6584` for warmth

---

## ✨ Interactive Animations (Mouse-Driven)

### 1. Mouse Glow Follower (Global)
Create a `MouseGlow` component rendered at the App level that:
- Tracks the mouse position across the entire page
- Renders a large (300–400px), soft radial gradient glow that follows the cursor
- Uses `pointer-events: none` and a low `z-index` so it doesn't block interactions
- The glow color should be a soft purple `rgba(124, 92, 252, 0.08)` blending into the background
- Use `requestAnimationFrame` for smooth 60fps tracking with slight easing/lerp (don't snap directly to cursor — lag behind slightly for a fluid feel)
- On mobile, hide the glow (check for `hover: hover` media query)

### 2. Mouse Parallax on Hero
- The hero section's blob elements and grid pattern should shift slightly based on mouse position (parallax effect)
- Move blobs opposite to cursor direction at ~2–5% of cursor offset for subtle depth
- Use `transform: translate3d()` for GPU acceleration

### 3. Card Tilt Effect
- On hover, cards should subtly tilt toward the mouse cursor (3D perspective tilt)
- Max tilt: ~5–8 degrees on both axes
- Add a shiny highlight gradient overlay that follows the mouse position on the card
- Smooth transition in/out (ease out on enter, spring back on leave)
- Only on devices that support hover (use `@media (hover: hover)`)

### 4. Magnetic Buttons
- Primary CTA buttons should have a subtle "magnetic" pull effect
- When the mouse is within ~50px of the button, the button shifts slightly toward the cursor
- Snaps back smoothly when the mouse leaves the area
- Keep the movement subtle (max 4–6px displacement)

---

## 🌌 Ambient Animations (Auto-Playing)

### 5. Floating Star Particles
Create a `StarField` component that:
- Renders 40–60 small dots/stars across the hero section background
- Stars vary in size (1–3px), opacity (0.2–0.7), and animation duration
- Each star gently twinkles (opacity pulse) and drifts slowly upward or diagonally
- Use CSS animations with randomized delays and durations (no heavy JS)
- Stars should be absolutely positioned with `pointer-events: none`

### 6. Floating Orbs / Planets
- Add 2–3 large, softly blurred floating orbs in the hero section
- Colors: purple (#7C5CFC), pink (#FF6584), and cyan (#43E8C3)
- Each orb floats on its own slow orbit path using CSS `@keyframes`
- Different sizes (150px–350px), different animation durations (15s–25s)
- Low opacity (0.08–0.15) with heavy blur (60–100px)

### 7. Scroll-Triggered Fade-In
- All sections, cards, and content blocks should fade in + slide up as they enter the viewport
- Use `IntersectionObserver` (no external libraries)
- Stagger children within grid sections (e.g., cards appear one by one with 100ms delay)
- Transition: opacity 0→1, translateY 30px→0, duration ~600ms, ease-out
- Elements should only animate once (not re-animate on scroll back up)

### 8. Gradient Border Shimmer on Cards
- Cards should have an animated gradient border that subtly shifts/rotates
- Use a `background` gradient on a pseudo-element with `@keyframes` rotating the angle
- Subtle and slow (8–12s cycle)
- The border should be thin (1–2px) and only visible on hover or as a very faint ambient effect

---

## 🧩 Component-Specific Polish

### Navbar
- Frosted glass effect: `backdrop-filter: blur(20px)` with purple-tinted background `rgba(13, 11, 26, 0.85)`
- Active link indicator should use the accent gradient (`--gradient-accent`) instead of primary
- On scroll, slightly darken the navbar background and increase blur

### Hero Section
- Background: deep space gradient (`--gradient-hero`)
- Add the `StarField` particles behind the content
- Add floating orb elements
- Subtle grid pattern overlay with purple lines at very low opacity
- The hero badge should have a glowing pulse animation on its border
- CTA buttons should use the magnetic effect

### Cards (Event & Team)
- Glassmorphism: `background: rgba(26, 22, 64, 0.5)` with `backdrop-filter: blur(12px)`
- Border: 1px solid `rgba(124, 92, 252, 0.15)`
- On hover: border brightens to `rgba(124, 92, 252, 0.4)`, tilt effect activates, shadow glows purple
- Team card avatars: gradient ring around them using `--gradient-primary`

### Footer
- Deep dark background with subtle star particles (fewer than hero, ~15–20)
- Social icon buttons: on hover, glow with the brand purple

### CTA Section
- Floating orbs in background (similar to hero but fewer)
- Gradient text should pulse very subtly (cycle between 2 gradient positions over ~8s)

---

## 🎯 Technical Requirements

1. **No external animation libraries** — use CSS animations, `requestAnimationFrame`, and `IntersectionObserver` only
2. **Performance first** — all animations must use `transform` and `opacity` only (GPU composited properties). No animating `width`, `height`, `top`, `left`, `margin`, etc.
3. **Mobile-friendly** — disable mouse-based effects on touch devices. Keep ambient animations but reduce particle counts by ~50%
4. **Respect `prefers-reduced-motion`** — if the user has reduced motion enabled, disable all non-essential animations (keep basic transitions, remove particles/floats/parallax)
5. **TypeScript** — all new components must be properly typed with no `any`
6. **Clean code** — reusable hooks for mouse tracking (`useMousePosition`), intersection observer (`useInView`), etc.

---

## 📁 Suggested New Files

```
src/
  components/
    MouseGlow.tsx          — Global mouse-following glow
    StarField.tsx          — Floating star particles
    FloatingOrbs.tsx       — Ambient floating orb elements
    AnimatedCard.tsx       — Card wrapper with tilt effect
    MagneticButton.tsx     — Button with magnetic hover pull
    ScrollReveal.tsx       — Wrapper for scroll-triggered fade-in
  hooks/
    useMousePosition.ts    — Global mouse position tracker
    useInView.ts           — IntersectionObserver hook
    useTilt.ts             — Card tilt calculation hook
```

---

## ✅ Success Criteria

1. [x] Color palette updated to DigiSoc purple/space theme across all CSS variables
2. [x] Gradient backgrounds updated (hero, page headers, CTA sections)
3. [x] Mouse glow follower works smoothly across the site
4. [x] Hero section has mouse-driven parallax on background elements
5. [x] Cards have 3D tilt effect on hover with shine overlay
6. [x] CTA buttons have magnetic hover effect
7. [x] Star particles float in hero and footer backgrounds
8. [x] Floating orbs animate in hero section
9. [x] All content fades in on scroll with staggered timing
10. [x] Cards have animated gradient border shimmer
11. [x] Navbar has proper frosted glass with scroll-aware darkening
12. [x] All animations use GPU-composited properties only (transform/opacity)
13. [x] Mouse effects disabled on touch/mobile devices
14. [x] `prefers-reduced-motion` respected — animations disabled for users who prefer it
15. [x] `npm run build` succeeds with no TypeScript errors
16. [x] No `any` types used in new code
17. [x] Site remains fully responsive on mobile

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

Make it feel like you've stepped into a DigiSoc event poster.
Purple glow everywhere. Stars drifting. Cards that react to your presence.
It should feel alive, interactive, and unmistakably DigiSoc.
