# abedinia.github.io

Personal site for **Aydin Abedinia** — PhD researcher in edge AI, backend and MLOps engineer.

Plain HTML and CSS. No build step, no framework, no dependencies. The only
JavaScript is the light/dark toggle. Fonts are
self-hosted, so the only third-party request at runtime is Google Analytics.

## Layout

Three columns, the way a good academic site reads: who you are on the left,
what you did in the middle, how to reach you on the right. It collapses to two
columns under 1100px and to one column under 820px, where the left card becomes
a compact header with a horizontally scrolling nav.

```
┌──────────┬───────────────────────────┬───────────┐
│ profile  │  page content             │  contact  │
│ nav      │                           │  rail     │
│ socials  │                           │           │
└──────────┴───────────────────────────┴───────────┘
```

## Files

```
index.html          About — who I am, interests, key skills, numbers
research.html       Research — current doctoral work, threads, the doctorate
publications.html   Publications — published, accepted, under review
work.html           Work — timeline, teaching & mentoring, tools
projects.html       Projects — open-source research code and experiments
education.html      Education — degrees, talks, honours, languages
contact.html        Contact

about.html          → redirect to / (old link)

styles.css          All styles, including the print stylesheet
site.js             Theme toggle + print button (the only script)
sitemap.xml         robots.txt

assets/
  fonts/            Inter 400/500/600 + JetBrains Mono 400/500, self-hosted woff2
  favicon.svg       Green tile with the "A" mark; PNG sizes derive from it
  favicon-32.png  apple-touch-icon.png  icon-192.png  icon-512.png
  og.png            1200×630 social card

image/icmlt2025/    Conference photos: talk.jpg, group.jpg, certificate.jpg
image/profile.jpg   Optional — see "Profile photo" below
```

## Colours

Persian palette, used sparingly: the page is white, green carries structure
(links, the active nav item, timeline markers) and red appears only as an
accent — the second half of the `.flagline` rule, the "under review" badge, the
second bullet style.

Everything is a custom property on `:root` in `styles.css`, redefined once for
system dark mode (`prefers-color-scheme`) and once for the manual override
(`[data-theme=dark]`), so no colour is ever defined only inside a media query.

| token | light | role |
|-------|-------|------|
| `--page`  | `#f7f9f7` | behind the cards |
| `--card`  | `#ffffff` | the cards themselves |
| `--green` | `#1b7f43` | links, active state, structure |
| `--red`   | `#c5102a` | accent only |

## Profile photo

The sidebar shows an **AA** monogram until you drop a square photo at
`image/profile.jpg`. Nothing else to change — the `<img>` is already in every
page and removes itself if the file is missing.

```bash
sips -Z 380 -c 380 380 original.jpeg --out image/profile.jpg
```

## CV

There is no PDF to keep in sync. `@media print` at the bottom of `styles.css`
turns any page into a plain one-column document: the nav, socials, contact rail
and photos drop out, the left card becomes a letterhead with name, role and
contact line, and link targets are printed after publication titles. Use the
browser's own print command (Cmd/Ctrl-P).

## Editing

Each page is standalone. The sidebar and contact rail are **duplicated across
all seven pages** — that is the price of having no build step. If you change a
nav item, a social link or the motto, change it in all seven, or the pages will
disagree with each other.

Adding content:

- a publication → copy an `<article class="pub">` block in `publications.html`
- a job, course or degree → copy a `<li>` inside a `<ul class="tl">`
- a repository → copy a `<li>` in `<ul class="repos">`
- a section label → `<div class="eyebrow">Label</div>`

## Local preview

```bash
python3 -m http.server 8000   # http://localhost:8000
```

## Notes

Google Analytics (GA4), measurement ID `G-9020WB8L7L`, is inlined at the end of
each `<head>`. It is gated on hostname: it only loads when `location.hostname`
is in the `HOSTS` allowlist in that snippet, so forks, local previews and
`file://` opens send nothing. If you add a custom domain, add it to `HOSTS` on
every page or the site will stop reporting.

The published email is `abedinia@duck.com`. The site names the UniGe / DITEN
affiliation but no postal address and no phone number.
