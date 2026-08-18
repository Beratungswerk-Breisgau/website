# Beratungswerk Breisgau Website

A simple, static website for Beratungswerk Breisgau consulting company, built with [11ty (Eleventy)](https://www.11ty.dev/).

It is hosted at [beratungswerk-breisgau.de](https://beratungswerk-breisgau.de/).

## Quick Start

1. Install 11ty and other dependencies with:
```bash
npm install
```
2. Start the local development server at `http://localhost:8080` with live reload:
```bash
npm run serve
```

## Deployment: GitHub Pages

The site is automatically built and deployed when changes are pushed to GitHub.

The site is deployed with GitHub Pages. There is a workflow that automatically builds and publishes the content.

## Project Structure

```
website/
├── src/
│   ├── index.md              # Homepage with two-column layout
│   ├── _includes/
│   │   └── layout.njk        # Base template (header, footer, nav)
│   ├── _data/
│   │   └── site.js           # Site-wide data (navigation, company info)
│   ├── pages/
│   │   └── page.md           # The pages that can be displayed on the site
│   └── css/
│       └── style.css         # All styling (Montserrat font, responsive design)
├── img/                      # Images (Lars Brügner photo)
├── .eleventy.js              # 11ty configuration
├── package.json              # Dependencies and scripts
└── _site/                    # Generated static HTML (output)
```

## How to Edit Content

### Edit Existing Pages

Pages are written in **Markdown** and stored in `src/pages/` and `src/index.md`.

1. Open a `.md` file in your editor
2. Edit the content (everything below the `---` section)
3. Save the file
4. If you're running `npm run serve`, the changes will automatically reload in your browser

**Example: Editing the About Us page**
```bash
# Open src/pages/warum-wir.md
# Edit the content
# Save the file
# Browser automatically refreshes
```

### Add a New Page

1. Create a new `.md` file in `src/pages/` with the following template:
```markdown
---
layout: layout.njk
title: Page Title
permalink: /pages/your-page-name/
---

# Page Title

Your content here...
```

2. Add the page to navigation in `src/_data/site.js`:
```javascript
nav: [
  // ... existing pages ...
  { title: "New Page", url: "/pages/your-page-name/" }
]
```

3. Save and the page will appear in the navigation menu.

### Edit Navigation

The main navigation menu is defined in `src/_data/site.js`. Modify the `nav` array to add, remove, or reorder menu items:

```javascript
nav: [
  { title: "Startseite", url: "/" },
  { title: "Über uns", url: "/pages/warum-wir/" },
  // Add new links here
]
```
