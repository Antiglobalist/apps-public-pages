# Anik Apps portfolio

Static HTML, CSS and a small progressive-enhancement script. No application framework, build tool, package dependencies or third-party JavaScript is required.

## Local preview

Run from the repository root:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open `http://127.0.0.1:8765/about-dev/`.

## Design and implementation

A light graphite-and-indigo engineering portfolio. One self-hosted Manrope variable font; explicit color, spacing, type, radius and container tokens; consistent inline SVG icons.

The previous Foundation page is preserved at `/about-dev/concepts/foundation-v1/`, including its original motion files. Earlier concepts remain available under `/about-dev/concepts/`.

The current design includes:

- Value-led hero with primary Telegram contact, secondary work navigation and an illustrated 3D device composition. No fabricated product metrics.
- Four service cards with different dimensions and visual treatments: mobile, backend, launch, engineering.
- Alternating project-reference layouts for phone screenshots and a desktop/mobile composition.
- Compact requirements → agents → engineering review → production workflow.
- Experience section limited to supplied facts (10+ years development, 7+ remote, developer/tech lead, architecture, modernization, hiring).
- Final contact and compact footer.
- Mobile navigation disclosure with Escape handling, automatic close on selection and focus transfer to the requested section.
- One-time intersection-triggered reveals, small hover feedback and gentle hero animation. OS reduced-motion preferences suppress animations and smooth scrolling. All content and links remain usable without JS.

## Files

- `index.html`: semantic sections, content and inline SVGs.
- `styles.css`: complete responsive design system, 850px tablet and 600px mobile composition changes.
- `motion.css`: isolated motion definitions with reduced-motion overrides.
- `motion.js`: navigation and progressive motion enhancements.
- `assets/fonts/`: local Latin variable WOFF2 and SIL OFL license.
- `assets/references/`: optimized third-party previews, credits and source documentation.
- `assets/favicon.svg`: small brand favicon.

## Temporary project references — replacement required

The owner explicitly authorized third-party app screenshots until real projects are supplied. Loop and Joplin are labelled “Reference preview,” “Third-party application,” and “My role: None — reference only.” They are NOT represented as Anik Apps projects.

Replace each complete `article[data-project]` in `index.html` when real material is available:

1. Title, project type, description and actual development role.
2. Platform / technology metadata and verified original product or repository URL.
3. Optimized images, intrinsic width/height and accurate alternative text.
4. Remove the temporary-reference labels only when the card describes a verified owner project.

Credits and source URLs are recorded in `assets/references/SOURCES.md`. Do not replace those with invented portfolio metrics or client claims. Candy Crush project materials exist elsewhere in this repository but were not assumed to establish a full development role.

## Validation

The page has no build pipeline. Relevant checks are JavaScript syntax, HTML/asset/fragment validation, browser console, responsive screenshots and real keyboard/menu/anchor/motion interactions. Required viewport widths: 1440, 1024, 768, 390 and 360 pixels. Screenshots and the validation record are kept outside the repository in the task's visualization directory.

Changes are submitted through a pull request; publishing follows the repository’s GitHub Pages configuration.

## Localization and branding

The header offers EN / RU switching through `i18n.js`, with a persisted language choice. Page content, metadata and accessible labels are translated; text embedded in illustrations and reference screenshots remains English. The ribbon-A identity is used in the header, footer, favicon and device artwork. PNG icons, Apple Touch Icon, Safari mask icon and web manifest are included. Generated illustration sources and prompt notes are in `assets/illustrations/`.
