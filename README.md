# Swetang Gajjar — Portfolio v2.0

A clean, modern, Vercel-style single-page portfolio for **swetang-portfolio.vercel.app**.

Built with pure HTML, CSS, and vanilla JavaScript — no build step, no dependencies, no framework bloat. Deploys to Vercel in under 60 seconds.

## ✨ Features

- **Single-page design** with smooth-scroll navigation
- **Vercel-inspired design system** — clean, technical, monochromatic with blue-purple accents
- **Light + dark mode** (auto-detected via `prefers-color-scheme`)
- **Fully responsive** — mobile-first, breakpoints at 480/768/1024px
- **ATS-friendly content** — all text is real text (not images), perfect for screen readers and recruiters using Ctrl+F
- **Open Graph + Twitter Card meta tags** — beautiful LinkedIn previews
- **Accessibility built-in** — skip link, semantic HTML, ARIA labels, keyboard nav
- **Performance** — no build step, ~50KB total, loads in <1s on 3G
- **SEO-ready** — proper meta description, structured headings, schema-ready

## 📁 File Structure

```
Swetang_AI_Portfolio_v2/
├── index.html          # Main page (semantic, accessible, SEO-ready)
├── styles.css          # Vercel-inspired design system (1000+ lines, fully documented)
├── app.js              # Mobile nav, smooth scroll, scroll reveal, header state
├── vercel.json          # Deploy config with security headers
├── README.md           # This file
└── DEPLOY.md           # Step-by-step Vercel deploy guide
```

## 🎨 Design System

- **Typography:** Inter (body, headings) + JetBrains Mono (eyebrows, badges, dates)
- **Palette:** Pure black/white, with a blue→purple gradient for accents
- **Spacing scale:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128 px
- **Border radius:** 8 / 12 / 999 (pills)
- **Shadows:** Subtle elevation, never heavy
- **Motion:** Subtle scroll-reveal animations, 200-500ms ease-out

## 🚀 Deploy in 60 Seconds

### Option A: Vercel Dashboard (easiest)

1. Go to https://vercel.com/new
2. Drag-and-drop this entire folder
3. Connect your custom domain (optional) or use the auto-generated `.vercel.app` URL
4. Done

### Option B: Vercel CLI (recommended for `swetang-portfolio.vercel.app`)

```bash
# From the project folder
npm i -g vercel
vercel login
vercel link --yes
vercel --prod
```

### Option C: GitHub + Vercel

1. Push this folder to a GitHub repo
2. Import the repo in Vercel
3. Set domain to `swetang-portfolio.vercel.app`
4. Auto-deploys on every `git push`

## 📝 Customization

### Update Personal Info

All content is in `index.html`. Key sections to update:

- **Hero badge** (line 65): "Open to global opportunities · Remote, US, Canada, EU, UK, AU"
- **Hero title** (line 67): The 1-sentence value prop
- **Stats** (lines 85-105): 4 numbers — keep these in sync with your resume
- **About** (lines 113-150): The narrative
- **Experience** (lines 165-275): Job entries — add/remove as needed
- **Projects** (lines 280-380): GitHub repos with live links
- **Contact** (lines 405-475): Email, LinkedIn, GitHub

### Change Colors

In `styles.css`, line 14-16, edit:

```css
--gradient-start: #0070f3;  /* Blue */
--gradient-end:   #7928ca;  /* Purple */
```

Popular alternatives:
- `linear-gradient(135deg, #10b981, #059669)` — green
- `linear-gradient(135deg, #f59e0b, #ef4444)` — orange→red
- `linear-gradient(135deg, #06b6d4, #3b82f6)` — cyan→blue

### Add a Custom Domain

In `vercel.json`, replace the default with your domain. Or set in Vercel dashboard under Settings → Domains.

## 🔍 SEO Checklist (already done in `index.html`)

- [x] Title tag (60 chars, includes primary keyword)
- [x] Meta description (155 chars, includes value prop)
- [x] Meta keywords
- [x] Open Graph tags (title, description, image, url, type)
- [x] Twitter Card tags
- [x] Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- [x] Single `<h1>` per page
- [x] Proper heading hierarchy (h1 → h2 → h3)
- [x] Alt text on SVG icons (decorative, marked as such)
- [x] Internal anchor links
- [x] External links with `rel="noopener noreferrer"`
- [x] Mobile viewport meta
- [x] Theme color meta
- [x] Favicon

## 🛠 Maintenance

The site has **zero dependencies and zero build step**. To update content:

1. Edit `index.html` or `styles.css` directly in any text editor
2. Push to GitHub (if using Git integration) or re-deploy via `vercel --prod`
3. Changes go live in 30-60 seconds

## 📜 License

Personal portfolio — content © Swetang Gajjar. Code MIT-licensed, free to fork and adapt.
