# abedinia.github.io

Simple personal static site for Aydin Abedinia.

## Overview

- Static HTML/CSS site with pages: `index.html`, `about.html`, `research.html`, `work.html`, `contact.html`.
- Includes a small `site.js` used for UI niceties.

## Local preview

Open `index.html` in your browser (no build step required):

```bash
# from the repo root
open index.html
```

Or serve locally with a simple HTTP server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Google Analytics

This site includes Google Analytics (GA4). The measurement ID is `G-3QX5RKQZKW` and the tracking snippet is embedded in each page's `<head>`. To change the ID, update the `gtag('config', '<YOUR_ID>')` call in the HTML files.

## Editing

- Edit the HTML files directly and refresh the browser to see changes.

## Notes

- Email links are `mailto:abedinia@duck.com`.
- Phone number was removed from the `contact.html` as requested.