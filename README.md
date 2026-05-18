# Inner Circle — Design System

A trust-based local-services platform launching in Rye, NY. Instead of finding a barber, tutor, or plumber through anonymous stars on Yelp, you see which providers people in your real social circle actually use and re-book. **The trust signal is revealed preference — what your friends do, not what strangers say.**

> "Your network knows best." — landing tagline (`WelcomeScreen.jsx`)

This design system distills the visual + content language of Inner Circle so future surfaces (landing redesigns, in-app screens, decks, partner / provider portals) hold the line.

---

## Index

| File / Folder | What it is |
|---|---|
| `colors_and_type.css` | All CSS variables: palette, type, radii, shadows, motion. Drop-in. |
| `assets/` | Mascot, logo marks, favicon. Copy from here — do not redraw. |
| `fonts/` | Webfont references. Inner Circle uses Google Fonts (Lora / Cormorant / Fredoka) — see below. |
| `preview/` | Design-system specimen cards (registered to the Design System tab). |
| `ui_kits/landing/` | Landing-page UI kit — recreates the marketing site components. |
| `ui_kits/app/` | Product UI kit — auth, MyCircle, MyFriends, MyEcosystem, Explore. |
| `SKILL.md` | Cross-compatible Agent Skill spec (use this file in Claude Code). |

---

## Sources

- **`Inner-Circle-main/`** — full product codebase (React + Vite + Tailwind + Supabase). The marketing page lives inline within `App.jsx`'s `WelcomeScreen.jsx`; the app proper is the four-tab experience (MyCircle / Friends / MyEcosystem / Explore).
- **`Inner-Circle-landing-main/`** — second clone of the same repo. Treated as identical.

Both are read-only mounted folders; everything we lifted lives in this project.

---

## Product context

Inner Circle is one app with three answers to the same question — "who do my people use for this?":

1. **MyCircle** — the providers *you* personally vouch for. An orbit visualization with you in the center; providers circle you. Add manually, then they sync to others' Friends views.
2. **MyEcosystem** — town-level directory across 12 categories (beauty, health, home, family, pets, food, professional, auto, wellness, education, events, shopping). Browse a category, see who in your circle uses what.
3. **MyFriends** — a vertical wheel of friends' circles. Each friend = an orbit of the providers they trust, with locks on private services and a request flow to unlock them.

A fourth tab — **Explore** — handles location-aware discovery (nearby provider scan + card feed).

Audience: affluent suburban households, 28–55, in towns like Rye, Scarsdale, Bronxville, Mamaroneck. People who *already* text friends for recs and would benefit from structure.

Business: free, ad-supported; optional ad-free paid tier. Provider listings are a secondary funnel.

---

## Content fundamentals

The voice is **warm, low-stakes, second-person, faintly literary**. It reads like a friend who has good taste — not like a marketing department.

### Tone
- **Lowercase + sentence case** for taglines and soft moments: `"your network knows best"` (the welcome subtitle is set in plain lowercase, no caps).
- **Sentence case** for headings: `"My Circle"`, `"Where in Westchester are you?"`. Never Title Case.
- **Plain language**, never marketing-speak. The empty state on MyCircle says *"Your circle starts with one trusted recommendation."* — declarative, calm, no exclamation.
- **Second person**. The product addresses *you* directly. "Tap to see inside their circle." "Nudge {friend} to add their circle →".
- **Soft imperatives end in a quiet `→`** instead of a button-y CTA word. The arrow is the verb.

### Casing & punctuation
- Tagline-style lines may break ALL grammar rules (lowercase, no period) when they're meant to feel personal.
- Body copy is properly capitalized and punctuated.
- Em-dashes are used freely for an editorial cadence — like this.
- Single quotes for affectionate scare-quotes ("inside their circle"); curly quotes when typographically possible.

### Word list — yes / no

| Use | Avoid |
|---|---|
| circle, ecosystem, friends, providers, trusted, recommend | network, vendors, professionals, reviews, ratings, stars |
| add, nudge, invite, vouch, re-book | submit, register, claim, onboard |
| your people, your circle, your friends | users, customers, members |
| town | community, area, locale |

### Emoji policy
**Sparingly, never decoratively.** The source uses 📍 for "location chip" and 👤 for the friend-count signal — both are functional, not ornamental. Never use emoji as bullet points, headings, or icons.

### Examples
- Hero subtitle: *"your network knows best"*
- MyCircle empty state primary: *"Your circle starts with one trusted recommendation."*
- MyCircle empty state secondary: *"Add providers you trust and they'll orbit you here."*
- Locked-service tooltip: *"Private"*
- Friend card hint: *"Tap to see inside their circle"*
- No-providers empty state: *"Be the first in your circle to add a {Category} provider here."*

These are the existing voice. New copy should sound like it was written by the same person.

---

## Visual foundations

### Palette
Inner Circle ships **dark by default** (`#18181b` zinc-900). The light theme exists but is the alternate. A third theme — **photobooth** — flips the app into a hand-painted navy watercolor mode for editorial moments; see `colors_and_type.css`.

- **Surfaces** are glassy translucent panels — `rgba(255,255,255,0.06)` over the dark base, with a 1px white-alpha hairline and an inset top highlight. Never solid colored cards.
- **Category accents** are 2-stop Tailwind gradients (e.g. rose-400 → rose-500 for Beauty). Used on the small orb avatars that ring each person — never as flat backgrounds.
- **Trust signal** is emerald — and only emerald. Reserved for "your friends use this" moments.

### Typography
- **Lora** (serif) is the primary face for everything. It carries the editorial, almost letterpress-y feeling that separates Inner Circle from generic SaaS sans-serif. `* { font-family: 'Lora' }` is set globally in `index.css`.
- **Cormorant Garamond** is loaded for display moments (hero, posters) but used sparingly in source.
- **Fredoka** powers the mascot voice (`.font-fredoka`) — soft rounded sans, used when "innie" speaks.
- Headings are `semibold` with `tracking-tight`; body is regular.

### Iconography
Lucide (`lucide-react`) is the icon library. **All icons in product are line icons, ~1.5 stroke, ~14–20px.** Filled icons appear only in the small category orbs. See `ICONOGRAPHY` below.

### Layout & shape
- Generous border radii: `rounded-xl` (12) for inputs/buttons, `rounded-2xl` (16) for cards, `rounded-3xl` (24) for hero cards and modals. The photobooth theme breaks symmetry — `24px 22px 26px 20px` — to feel hand-cut.
- Heavy whitespace; content rarely fills the viewport. The MyCircle / Friends views center a single orbit in dead space.
- Composition is **radial**, not gridded. Orbits, halos, rings of icons. The center is always you (or a friend) — providers circle.

### Backgrounds
- Default: flat zinc-900. No gradient. No noise.
- Optional "liquid glass" depth blobs (`.glass-bg`) — two large soft radial gradients (indigo 0.15, violet 0.12) pinned to opposite corners. Used on landing.
- Photobooth: layered watercolor washes + SVG brushstrokes + 4.5% grain (`feTurbulence`). See `index.css` for the data-URI.

### Motion
- **`cubic-bezier(0.16, 1, 0.3, 1)`** is the house easing — a soft overshoot ease-out, used for slide-in transitions.
- **Orbit-spin** at 90s/rev for provider rings; counter-spin on inner orbs so the labels stay upright.
- **Float-1 / float-2 / float-3** — slow ambient drift (8–11s) for icon clouds on empty states.
- **Pulse-soft** at ~50% opacity for the center halo.
- No bouncy springs. Everything decelerates.

### Hover / press
- Buttons: lighten by ~4% on hover (`hover:bg-zinc-100` over white; `hover:bg-white/[0.08]` over glass). No transform.
- Orbs: `hover:scale-125 hover:z-20` + a white drop-shadow glow (`drop-shadow(0 0 10px rgba(255,255,255,0.35))`).
- Press states: rely on the hover darken; no explicit `:active` shrink.

### Borders
- Hairlines only: `1px solid rgba(255,255,255,0.08)` on glass, `1px solid #e5e7eb` on light.
- Dashed `1px` rings appear inside orbits to mark the rail providers ride on.

### Shadows
- Card shadow on dark uses a soft drop + an *inset top highlight* to keep the glass look: `0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.12)`.
- Orb glow is a `drop-shadow` filter (not box-shadow), so it follows the round mask.

### Transparency & blur
Used heavily. The chrome (header, modals, panels) is `rgba(...) + backdrop-filter: blur(6–12px)`. Provides depth without inventing new colors.

### Imagery vibe
Warm, slightly under-saturated, hand-drawn. The mascot — **innie** — is a watercolor figure (charcoal outline + warm cream + dusty teal hoodie). Any imagery should feel hand-made, not stock-photo glossy. Avoid: tropical gradients, AI 3D illustrations, isometric SaaS imagery.

---

## ICONOGRAPHY

**Library:** [`lucide-react`](https://lucide.dev). Installed at `^0.x` in `package.json`. All icons in product code come from this set.

**Stroke / size:** Default lucide weight (1.5–2px). Common sizes — `14` (inline meta), `16` (buttons), `20` (nav), `28` (welcome hero).

**Common icons** (lifted directly from `App.jsx` and `services.js`):

- **Navigation / chrome**: `Users`, `Bell`, `Settings`, `Sun`, `Moon`, `Search`, `ArrowRight`, `ArrowLeft`, `ChevronRight`, `ChevronDown`, `X`, `Check`, `Lock`, `Sparkles`
- **Categories**: `Scissors` (beauty/pet groomer), `Dumbbell` (fitness), `Heart` (wellness/yoga), `Camera` (photo), `ChefHat` (food), `Wrench` (handyman/tech), `Home` (real estate / roofer), `Dog` (pets), `Cat`, `Car` (auto), `Truck` (towing), `Hammer`, `Paintbrush`, `Droplets` (plumber), `Zap` (electrician), `TreePine` (lawn), `Gem` (nails), `Eye` (lash), `Stethoscope` (chiro/vet), `GraduationCap` (tutoring), `Baby`, `Music`, `Disc3` (DJ), `Flower2`, `Wine`, `BookOpen`, `Scale` (lawyer), `Briefcase`, `ShoppingBag`, `Shirt`, `Gift`, `PartyPopper`, `MapPin`, `Star`, `Send`, `Mail`, `Phone`, `MessageSquare`, `Instagram`, `Facebook`

**CDN access for prototyping:** lucide is on a CDN — drop `<script src="https://unpkg.com/lucide@latest"></script>` in an HTML mock and use `<i data-lucide="scissors"></i>`. The UI kits do this.

**Custom SVGs:** Only `Google` (the colored G logo, hand-coded inline in `WelcomeScreen.jsx` for the sign-in button). No other custom icon assets.

**Emoji as icons:** Two functional uses only — `📍` (location chip) and `👤` (friend social signal). Otherwise never.

**Mascot:** `innie` (see `assets/innie.png`) — a 1024×~1400 watercolor character. Used at large size on brand moments, not as an inline icon. Hand-drawn aesthetic: charcoal sketch outline, cream face, dusty teal hoodie. Treat with affection — never crop tight, never recolor, never overlay text on top of the face.

**Unicode chars:** `→` for soft CTAs/affordances. `·` (interpunct) as a separator. Em-dashes `—` for cadence. No other unicode flourishes.

---

## Substitutions flagged

- **Fonts:** Lora, Cormorant Garamond, and Fredoka are all loaded from Google Fonts in `index.html`. We do the same — no font files copied locally. If you want a tighter local-first setup, please drop `.woff2` files into `fonts/` and I'll wire them.
- **Icons:** Lucide is CDN-referenced from prototypes; the production app installs `lucide-react`.
- **Mascot:** Only one mascot pose (`innie.png`) exists in the codebase. If more poses, badge colors, or scenes are needed, please commission or share.

---

## How to use this system

1. Drop `colors_and_type.css` into a page and wrap content in `.ic-root`.
2. Reach for the utility classes (`.ic-h1`, `.ic-body`, `.ic-eyebrow`, `.ic-mascot`) for instant correct type.
3. Build with the variables, not raw colors. Especially `--ic-cat-*` for category accents.
4. Open the right UI kit (`ui_kits/landing/` or `ui_kits/app/`) to lift real components.
5. When you need to communicate trust → emerald. Anything else, neutral. Never invent a new accent color.

---

## What's incomplete / asks

See the chat — flagged at the end.
