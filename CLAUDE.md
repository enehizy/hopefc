# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A static one-page marketing site for Hope FC Academy, a youth football academy in Jeddo Okpe, Delta State, Nigeria. There is no backend, database, auth, or framework — just HTML, CSS, and vanilla JS served by Vite. There are no tests or linters.

## Commands

```sh
npm run dev      # Vite dev server
npm run build    # production build to dist/ (gitignored)
npm run preview  # serve the built dist/
```

## Architecture

The live site is the three root-level files:

- `index.html` — all page content and markup. Sections are anchored by id (`#academy`, `#development`, `#contact`) and linked from the header nav.
- `styles.css` — the whole visual system. Design tokens (colors, radius, shadow) are CSS custom properties on `:root`; use them instead of hard-coded values.
- `script.js` — mobile nav toggle (`.menu-toggle` / `.site-nav.is-open`), footer year (`#year`), and reveal-on-scroll: any element with class `.reveal` gets `.is-visible` added by an IntersectionObserver.

Static assets live in `public/` and are referenced with root-absolute paths (`/images/...`). Photos in `public/images/` are placeholders meant to be swapped for real academy photos.

**`src/` is unused Vite starter boilerplate** (`main.js`, `counter.js`, `assets/`). `index.html` does not load it, and `src/main.js` imports a `./style.css` that does not exist. Don't edit `src/` expecting changes to show up on the site.

`app.config.ts` and `public/manus-routes.json` are metadata for the Manus hosting runtime the site was first scaffolded on; Vite does not read them.

`script.js` must stay loaded with `type="module"`. Without it, Vite leaves the script out of `dist/` and the built site loses all its JS behaviour.

## Known issues

- `plan.md` mentions a `server.mjs` static server on port 3000 and a copy-based `dist` build. Neither exists; Vite replaced both.

## Design & content guidance

The current design (which replaced the one described in `plan.md`) is a clean, bold sportswear-retail style:

- Big full-bleed photos, huge uppercase condensed headlines, plain white space, and rounded pill buttons. Avoid decorative glyph icons, gradient cards, and similar flourishes.
- Fonts: **Anton** for display headlines (the `.display` class) and a Helvetica stack for body text, with Archivo loaded as the fallback.
- Colours are muted (desaturated) versions of the crest blues. The user found the full-strength crest blue too intense.
  - `--royal #3a5a92`, `--navy #1e2f55`, `--deep #151f38`, and `--sky #b7c6e2` as the accent. Text is white, with `--text-soft` for secondary copy.
  - The body has a fixed backdrop of soft radial "blooms" over navy. Sections are transparent or lightly tinted (`.block-navy`) so the backdrop shows through.
- The look is glassy. Frosted panels use the `.glass` class (translucent white, a hairline border, a top highlight and `backdrop-filter` blur). The header, mobile menu, photo captions and the giant hero "Book a trial" button use the same recipe.
  - Glass laid over photos needs a blue tint in its background. Without it, the glass picks up the grass and sand colours and turns olive or beige.
- The hero photo fades into the backdrop with `mask-image`, not a colour overlay, so there's no visible seam.
- `hope-fc-logo.png` has a white background, not a transparent one. Placing it on blue (e.g. the watermark in `.statement`) needs `mix-blend-mode: multiply`, or the white square shows.
- Use the real academy photos (`hopefc_*.jpg`, `student_playing.jpg`). `field-overhead.jpg`, `player-action.jpg`, `team-training.jpg` and `training-action.jpg` are unused stock images.
- Keep motion restrained and respect `prefers-reduced-motion`.
- When screenshotting with headless Edge or Chrome, note that the window won't render narrower than about 492px. To check a true phone width, load the page inside an iframe of that width.
- Voice: direct, encouraging, team-first ("Bring your game. Build your future.", "Together we play. Together we win.").
- Required contact details (keep these accurate across the page):
  - Address: Jeddo Primary School Field, Jeddo Okpe, Delta State, Nigeria
  - Phone and WhatsApp: 09034963630. Use a `tel:` link, plus `https://wa.me/2349034963630` for WhatsApp.
  - Email: hopefcacademy@gmail.com, as a `mailto:` link.
