---
name: inner-circle-design
description: Use this skill to generate well-branded interfaces and assets for Inner Circle, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key files:
- `README.md` — full product context, content fundamentals, visual foundations, iconography
- `colors_and_type.css` — all design tokens (palette, type, radii, shadows, motion easing)
- `assets/innie.png` — mascot (watercolor character, never recolor)
- `assets/favicon.ico`
- `ui_kits/landing/` — marketing site components (Hero, OrbitGraphic, HowItWorks, CompareStrip, ProviderCTA, FAQ, Footer)
- `ui_kits/app/` — product app components (MyCircleView, FriendsView, EcosystemView, ProviderDetail)
- `ui_kits/shared.css` — shared component styles for both kits
- `preview/` — design system specimen cards (colors, type, spacing, components)

Voice: warm, lowercase taglines, sentence-case headings, second person, soft `→` instead of marketing CTAs. Never "users / customers / vendors / network." Always "your circle / your people / providers / town."

Visual: dark by default (zinc-900 base), glassy translucent surfaces with hairline borders, Lora serif globally, radial/orbit compositions, emerald is reserved for trust signals only.
