# abedinia.github.io

Personal site for **Aydin Abedinia** — AI/ML researcher and engineer.

One page, plain HTML and CSS, no build step, no dependencies, no third-party
requests at runtime. The only JavaScript on the site is the light/dark toggle.

## Files

```
index.html        The whole site
styles.css        All styles, including the print stylesheet
site.js           Light/dark toggle (the only script)

work.html         → redirect to /#experience   (old links)
research.html     → redirect to /#research
contact.html      → redirect to /#contact
about.html        → redirect to /

sitemap.xml       robots.txt

assets/
  fonts/          Inter 400/500/600 + JetBrains Mono 400, self-hosted woff2
  favicon.svg     Vector mark; favicon-32 / apple-touch-icon / icon-192 / icon-512
  og.png          1200×630 social card

image/icmlt2025/  Conference photos: talk.jpg, group.jpg, certificate.jpg
```

## Local preview

```bash
python3 -m http.server 8000   # http://localhost:8000
```

## Editing

Everything lives in `index.html`, in reading order: intro, research,
publications, ICMLT 2025, open source, experience, education, contact.
Add a publication by copying an `<article class="pub">` block; add a job or a
course by copying a `<div class="row">`.

Colours are CSS custom properties on `:root` in `styles.css`, redefined once
for dark mode (`prefers-color-scheme`) and once for the manual override
(`[data-theme=dark]`), so no colour is defined only inside a media query.

`@media print` at the bottom of `styles.css` turns the page into a plain
one-column CV: navigation, toggle and photos are dropped and link targets are
printed after publication titles.

## Photos

`index.html` expects three files in `image/icmlt2025/`:

| file              | what it is                         |
|-------------------|------------------------------------|
| `talk.jpg`        | presenting the paper at ICMLT 2025 |
| `group.jpg`       | ICMLT / CCCE 2025 group photo      |
| `certificate.jpg` | certificate of presentation        |

Resize before committing, e.g.:

```bash
sips -Z 1400 original.jpeg --out image/icmlt2025/talk.jpg
```

## Notes

No analytics and no tracking scripts are loaded. The published email is
`abedinia@duck.com`. The site names the UniGe / DITEN affiliation but not a
postal address.
