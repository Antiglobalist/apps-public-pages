# Antik Apps portfolio

Static HTML, CSS and a small progressive-enhancement script. No application framework, build tool, package dependencies or third-party JavaScript is required.

## Local preview

Run from the repository root:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open `http://127.0.0.1:8765/about-dev/` for English or `http://127.0.0.1:8765/about-dev/ru/` for Russian.

## Design and implementation

A light graphite-and-indigo engineering portfolio. One self-hosted Manrope variable font; explicit color, spacing, type, radius and container tokens; consistent inline SVG icons.

The previous Foundation page is preserved at `/about-dev/concepts/foundation-v1/`, including its original motion files. Earlier concepts remain available under `/about-dev/concepts/`.

The current design includes:

- Value-led hero with primary Telegram contact, secondary work navigation and an illustrated 3D device composition. No fabricated product metrics.
- Four service cards with different dimensions and visual treatments: mobile, backend, launch, engineering.
- A Geo Transit portfolio entry with real Android and iPhone screenshots and a link to the official site.
- Compact requirements → agents → engineering review → production workflow.
- Experience section limited to supplied facts (10+ years development, 7+ remote, developer/tech lead, architecture, modernization, hiring).
- Final contact and compact footer.
- Mobile navigation disclosure with Escape handling, automatic close on selection and focus transfer to the requested section.
- One-time intersection-triggered reveals, small hover feedback and gentle hero animation. OS reduced-motion preferences suppress animations and smooth scrolling. All content and links remain usable without JS.

## Files

- `index.html` and `ru/index.html`: English and Russian HTML with shared styles, assets, and section IDs.
- `styles.css`: complete responsive design system, 850px tablet and 600px mobile composition changes.
- `motion.css`: isolated motion definitions with reduced-motion overrides.
- `motion.js`: navigation and progressive motion enhancements.
- `assets/fonts/`: local Latin variable WOFF2 and SIL OFL license.
- `assets/projects/geo-transit/`: screenshots from the Geo Transit project.
- `assets/references/`: previews and credits for archived concepts.
- `assets/favicon.svg`: small brand favicon.

## Geo Transit

The Android live map and iPhone journey planner screenshots come from the official Geo Transit landing page assets in the `georgia-transit-mobile` repository, commit `dbca6ef`. The project card links to [the Geo Transit website](https://www.geotransit.com.ge/).

## Validation

The page has no build pipeline. Relevant checks are JavaScript syntax, HTML/asset/fragment validation, browser console, responsive screenshots and real keyboard/menu/anchor/motion interactions. Required viewport widths: 1440, 1024, 768, 390 and 360 pixels. Screenshots and the validation record are kept outside the repository in the task's visualization directory.

Changes are submitted through a pull request; publishing follows the repository’s GitHub Pages configuration.

## Localization and branding

The EN and RU links navigate to separate URLs. Each page serves localized content, metadata and accessible labels in its initial HTML. Both use self-referencing canonicals, reciprocal `hreflang`, and entries in the repository sitemap. Design concepts use `noindex`.

The Geo Transit screenshots retain their original interface language. The ribbon-A identity is used in the header, footer, favicon and device artwork. PNG icons, Apple Touch Icon, Safari mask icon and web manifest are included. Generated illustration sources and prompt notes are in `assets/illustrations/`.
