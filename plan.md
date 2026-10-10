# Hope FC Academy Website Plan

## Scope
- One-page responsive website for Hope FC Academy, a Nigerian football academy.
- Use the supplied Hope FC logo and the provided contact/location details.
- Use temporary replaceable football photography, clearly organized as local asset slots.
- Keep the experience lightweight and static, with no login, database, or server features needed.

## Design direction
- **Design movement:** Editorial sports identity / match-day programme, combining confident typography, disciplined grid rhythm, and field-line geometry.
- **Core principles:** clarity first, team energy, local pride, and action-oriented contact paths.
- **Color philosophy:** deep navy and Hope blue anchor trust and the supplied badge; bright sky blue creates pace; warm amber adds match-day urgency without competing with the logo.
- **Layout paradigm:** an asymmetric magazine-style single page: a full-bleed hero, angled section markers, split editorial blocks, and an image rail instead of a uniform card grid.
- **Signature elements:** diagonal field-line rules, numbered development pillars, and blue/amber action buttons.
- **Interaction philosophy:** every interaction should feel direct and useful—smooth anchor navigation, clear focus states, tap-to-call and WhatsApp actions, and subtle image lift on hover.
- **Animation:** restrained entrance fade/slide for sections, a slow hero image drift, and small button/icon movements; respect reduced-motion preferences.
- **Typography system:** use Oswald for high-impact condensed headlines and Inter for body copy, labels, and utility text.
- **Brand essence:** a grounded Nigerian football academy helping young players grow their game and their character; personality: bold, hopeful, disciplined.
- **Brand voice:** direct, encouraging, and team-first. Example lines: “Bring your game. Build your future.” and “Together we play. Together we win.”
- **Wordmark & logo:** use the supplied shield logo as the visual anchor; pair it with a compact uppercase wordmark and the academy descriptor rather than recreating the mark in text.
- **Signature brand color:** Hope blue (#0757c9).

## Project structure
- `index.html` — semantic page structure, navigation, content, contact actions, and image slots.
- `styles.css` — responsive editorial sports visual system, layout, animation, and accessibility states.
- `script.js` — mobile navigation, current-year footer, smooth link behavior, and reveal-on-scroll.
- `server.mjs` — minimal static preview server on the configured port.
- `public/images/` — supplied logo plus replaceable football images.
- `public/manus-routes.json` — declared page routes for the website runtime.
- `app.config.ts` — durable project logo metadata.

## Serving/build approach
A dependency-free Node static server serves the project on port 3000 for Preview. A simple `dist` copy build produces a static publication root containing `index.html`, CSS, JavaScript, and `public/` assets.
