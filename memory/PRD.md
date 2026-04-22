# Bon Ton Fitness — Cinematic Landing Site

## Original problem statement
Build a premium, cinematic homepage for "Bon Ton Fitness" (Bangalore, India) — dark luxury theme (#0A0A0A), neon lime accent (#D6FF00), 4 fullscreen sections, smooth continuous scroll, realistic metallic 3D dumbbell that moves across ALL sections with scroll, infinite-scroll feel (Spidera / headphone landing page references). Later expanded to: scrape real data from bontonfitness.com, add Transformation page with before/after upload card, and build ALL remaining pages from the old site.

## Architecture
- **Frontend-only** React 19 + Tailwind 3 + Lenis (smooth scroll) + React Three Fiber 9 + drei 10 + Three.js
- **No backend / no MongoDB** (per user choice). User Transformation uploads persist to `localStorage` (key `bonton_transformations_v1`)
- Router: `/`, `/programs`, `/transformation`, `/careers`, `/contact`
- Critical compat shim: `/app/frontend/src/lib/r3f-shim.js` absorbs the `x-*` JSX attrs injected by `@emergentbase/visual-edits` babel plugin so R3F's `applyProps` doesn't crash on `<mesh>/<group>` elements.

## User personas
- Prospect visitor (mobile-first) — wants pricing, nearest branch, "Join Now"
- Existing member — wants to upload own before/after, share socials
- Job seeker — hits `/careers`, calls HMT Layout number to apply

## Core requirements (static)
- Dark luxury visual system (black + neon lime + white)
- Realistic 3D dumbbell scroll-driven across all home sections
- Smooth (non-snap) scrolling
- Branches, programs, facilities, contacts pulled from real bontonfitness.com
- Before/after upload with draggable slider on Transformation page

## What's been implemented (2026-04-22)
- **Home** (`/app/frontend/src/Home.jsx`) with 8 sections: Hero → About/Features → ClassesRail (horizontal pin-scroll) → Membership → Branches → Testimonials → GalleryMarquee (infinite) → FinalCTA/Footer
- **Procedural 3D metallic dumbbell** (`components/Dumbbell.jsx`) built from cylinders + hex plates + neon torus accents; driven by 9 keyframes across page scroll (`components/SceneCanvas.jsx`)
- **R3F ↔ visual-edits shim** (`lib/r3f-shim.js`) — patches THREE prototypes with 23 injected attribute keys so R3F never crashes
- **Navbar** with react-router links and mobile hamburger
- **Transformation page** (`pages/Transformation.jsx`): 3 seed transformations, upload form with live before/after slider preview, localStorage persistence, delete on user entries
- **Programs page**: 10 disciplines + 5 facilities (from real scrape)
- **Careers page**: 4 benefits + 4 role cards, all apply-by-phone to flagship 7022888883
- **Contact page**: form + all 5 real branch phones + FB/IG links
- **Real data** in `data/brand.js`: 5 branches (HMT Layout flagship, Anjana Nagar, Laggere, Chikka Gollarahatti, Nelamangala) with real phone numbers, 10 programs, gallery of 12 CDN images
- **Fonts**: Anton (display) + Outfit (body) + JetBrains Mono (ui labels)
- **Testing**: 100% pass on 18 checks (iteration_1.json)

## Prioritized backlog
- **P1**: Add GSAP ScrollTrigger for more dramatic scene transitions (current uses raw scroll + smoothstep)
- **P1**: Lead-capture backend — store "Join Now" submissions to MongoDB and send WhatsApp notification to flagship number
- **P2**: Real transformation gallery backed by admin-managed storage (currently local-only)
- **P2**: Class schedule per branch (Zumba timings, PT slots)
- **P2**: Google Reviews widget embed (1400+ reviews)
- **P3**: WhatsApp floating CTA button

## Next tasks list
- User choice of P1 above
- Optional: SEO meta tags + OG image
- Optional: PWA install
