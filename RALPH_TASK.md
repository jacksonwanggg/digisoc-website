---
task: Build the UNSW DigiSoc Website (Vite + React + TypeScript)
test_command: "npm run build"
---

# Task: UNSW DigiSoc Website (Vite + React + TypeScript)

Build a modern, mobile-first marketing website for **UNSW Digital Society (DigiSoc)** using Vite, React, and TypeScript.

This site replaces the current Wix website with a clean, fast, fully responsive frontend app.

---

## 🌐 Overview

The website should clearly communicate:

- Who DigiSoc is
- What DigiSoc does
- Upcoming events
- The executive team
- How to connect / join

It should feel:

- Modern
- Clean
- Tech-focused
- Student-friendly
- Polished enough to represent a serious UNSW society

Pure frontend only. No backend.

---

## 🔗 Required Routes

Use `react-router-dom` and implement the following routes:

- `/` → Home
- `/about` → About DigiSoc
- `/events` → Events + Upcoming Events
- `/team` → Executive Team
- `/contact` (or `/join`) → Get involved / social links

Each route must render a proper page layout (not just placeholders).

---

## 📱 Responsiveness

- Fully responsive
- Works cleanly on mobile first
- Proper spacing and typography on desktop
- Navigation collapses into mobile menu on small screens

---

## 🎨 Design Requirements

The UI should feel premium and modern.

Include:

- generate images as needed pelase
- Gradient hero section on homepage
- Soft background shapes / blobs (CSS-based)
- Smooth hover effects on cards and buttons
- Clean typography hierarchy
- Subtle shadows
- Generous whitespace

Use consistent spacing and reusable layout components.

No external UI libraries required (but allowed if clean).

---

## 🏠 Homepage Content

The homepage should include:

### Hero Section
- Title: “UNSW DigiSoc”
- Short mission statement inspired by:  
  > The UNSW Digital Society aims to empower students interested in all things digital by building the skills required to succeed.

- CTA buttons:
  - “Explore Events”
  - “Join the Community”

### Sections
- About Preview
- Featured / Upcoming Event Highlight
- Executive Team Preview
- Call to action footer

---

## 📅 Events Page

Should include:

- Section: “Upcoming Events”
- Event cards with:
  - Event title
  - Short description
  - Date
  - Button (Register / Learn More)

Use mock data inside a TypeScript array.

---

## 👥 Team Page

Display executive team members.

Requirements:

- Card layout grid
- Temporary placeholder avatars
  - Use generated SVGs or gradient circles
  - Do NOT rely on external hosted images
- Each card should include:
  - Name
  - Role

Example roles:
- President
- Vice President
- Events Director
- Partnerships Director
- Tech Director

---

## 🔗 Social Links (Required)

These must be clearly visible in header and footer:

- Instagram  
  https://www.instagram.com/unswdigisoc/?hl=en

- LinkedIn  
  https://www.linkedin.com/company/unsw-digisoc/?originalSubdomain=au

- Facebook  
  https://www.facebook.com/unswdigitalsociety/

Icons preferred (SVG).

---

## 🧱 Project Structure

Suggested structure:

```
src/
  components/
    Navbar.tsx
    Footer.tsx
    Hero.tsx
    EventCard.tsx
    TeamCard.tsx
    Container.tsx
  pages/
    Home.tsx
    About.tsx
    Events.tsx
    Team.tsx
    Contact.tsx
  data/
    events.ts
    team.ts
  App.tsx
  main.tsx
```

Use proper TypeScript types for:

- Event
- TeamMember
- Props for reusable components

No `any`.

---

## 🧠 Success Criteria

1. [x] `npm run build` succeeds with no TypeScript errors
2. [x] All routes render correctly
3. [x] Site is fully responsive on mobile
4. [x] Social links are visible and clickable
5. [x] Events are rendered from typed mock data
6. [x] Team members render from typed mock data
7. [x] No `any` types used
8. [x] Clean, reusable component structure
9. [x] Modern, polished UI aesthetic
10. [x] Layout does not break on small screens

---

## 💅 Extra Polish (Optional but Recommended)

- Add animated gradient background
- Add scroll reveal animation
- Add glassmorphism card effects
- Add smooth scrolling
- Add subtle motion transitions
- Add favicon + proper page title

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

Build it like it represents the future of digital at UNSW.
Make it feel legit.
Make it feel modern.
Make it feel like DigiSoc.