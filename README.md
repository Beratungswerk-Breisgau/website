# Beratungswerk Breisgau Website

A simple, static website for Beratungswerk Breisgau consulting company, built with [11ty (Eleventy)](https://www.11ty.dev/).

## Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm run serve
```
This starts a local development server at `http://localhost:8080` with live reload.

### Build for Production
```bash
npm run build
```
This generates the static HTML in the `_site/` directory.

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
│   │   ├── warum-wir.md      # About Us
│   │   ├── leistungen.md     # Services (consolidates all service pages)
│   │   ├── referenzen.md     # References
│   │   ├── partner.md        # Partners
│   │   ├── kontakt.md        # Contact
│   │   └── impressum.md      # Legal (Impressum)
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

## How to Extend

### Change Colors
All colors are defined as CSS variables in `src/css/style.css`:

```css
:root {
  --color-primary: #4f7290;     /* Header background */
  --color-secondary: #ffffff;   /* White */
  --color-accent: #2c3e50;      /* Darker accents */
  --color-text: #333333;        /* Body text */
}
```

Edit these values to change the color scheme site-wide.

### Change Fonts
The font is set in `src/css/style.css`. Currently uses Montserrat from Google Fonts.

To change the font:
1. Replace the Google Fonts import in `src/_includes/layout.njk`
2. Update the `font-family` in `src/css/style.css`

### Update Company Info
Edit `src/_data/site.js` to change:
- Company name
- Email address
- Website URL
- Footer content

### Customize the Homepage Layout
The homepage is defined in `src/index.md` with a special `.hero` two-column layout:
- Left column: Text content
- Right column: Photo with caption

Edit `src/index.md` to change the homepage content.

### Add Images
Place images in the `img/` directory. Reference them in Markdown:
```markdown
![Alt text](/img/image-name.jpg)
```

### Styling Individual Pages
To add custom styles for a specific page:
1. Add a `<style>` tag in the markdown file or
2. Add a new CSS class to `src/css/style.css`

### Markdown Formatting
Standard Markdown syntax is supported:
- **Bold**: `**text**`
- *Italic*: `*text*`
- Links: `[text](url)`
- Lists: `* item` or `1. item`
- Headings: `# H1`, `## H2`, etc.

## Deployment

### GitHub Pages Setup

1. Initialize Git (if not already done):
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Create a GitHub repository at https://github.com

3. Push to GitHub:
```bash
git remote add origin https://github.com/yourusername/beratungswerk-breisgau.git
git branch -M main
git push -u origin main
```

4. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose branch: `main`
   - Choose folder: `_site`
   - Save

5. Point domain to GitHub Pages:
   - Add a `CNAME` file in the repository root with: `beratungswerk-breisgau.de`
   - Update your domain's DNS settings to point to GitHub Pages

6. Deploy (automatic):
   - Every push to `main` automatically rebuilds and deploys the site

### Build before pushing
Always run `npm run build` before committing to ensure `_site/` is up to date:
```bash
npm run build
git add .
git commit -m "Update content"
git push
```

## Troubleshooting

**Changes not appearing after editing?**
- Make sure you saved the file
- If using `npm run serve`, the browser should auto-refresh
- Manually refresh if needed (`Cmd+R` or `Ctrl+R`)

**Build fails?**
- Check that all `.md` files have the frontmatter block at the top (between `---`)
- Ensure file paths are correct in links

**Images not showing?**
- Verify images are in the `img/` directory
- Check the image path in your markdown (should be `/img/filename`)

## Need Help?

- [11ty Documentation](https://www.11ty.dev/docs/)
- [Markdown Guide](https://www.markdownguide.org/)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

---

**Built with [11ty](https://www.11ty.dev/) • Styled with Montserrat font**
