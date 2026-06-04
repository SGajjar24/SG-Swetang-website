# Deployment Guide — swetang-portfolio.vercel.app

## Step 1: Prepare the folder

The complete site is in `C:\Users\sam\Desktop\Swetang_AI_Portfolio_v2\` and contains:

```
index.html       (main page)
styles.css       (all styles)
app.js           (interactivity)
vercel.json      (deploy config)
README.md        (docs)
DEPLOY.md        (this file)
```

## Step 2: Deploy to Vercel (3 options, pick one)

### Option A: Vercel Dashboard (drag-and-drop, easiest)

1. Open https://vercel.com/new in your browser
2. Log in (or sign up — GitHub login is fastest)
3. Drag the entire `Swetang_AI_Portfolio_v2` folder onto the upload area
4. Vercel auto-detects it's a static site — no build command needed
5. Click **Deploy**
6. Wait ~30 seconds
7. You'll get a URL like `swetang-ai-portfolio-v2.vercel.app`

### Option B: Vercel CLI (recommended — full control)

```powershell
# Open PowerShell in the project folder
cd "C:\Users\sam\Desktop\Swetang_AI_Portfolio_v2"

# Install Vercel CLI (one-time)
npm install -g vercel

# Login to your Vercel account
vercel login

# Deploy to production
vercel --prod
```

The CLI will ask:
- "Set up and deploy?" → Yes
- "Which scope?" → Your personal account
- "Link to existing project?" → No (or yes if you've deployed before)
- "Project name?" → `swetang-portfolio` (this is the important one)
- "In which directory is your code located?" → `./` (just press Enter)
- "Want to modify these settings?" → No

### Option C: GitHub + Vercel (best for ongoing updates)

1. Create a new GitHub repo (e.g., `swetang-portfolio`)
2. Push this folder to it:
   ```bash
   cd "C:\Users\sam\Desktop\Swetang_AI_Portfolio_v2"
   git init
   git add .
   git commit -m "Initial portfolio v2.0"
   git branch -M main
   git remote add origin https://github.com/SGajjar24/swetang-portfolio.git
   git push -u origin main
   ```
3. In Vercel dashboard: **Add New Project** → **Import Git Repository** → select your repo
4. Vercel auto-detects settings — just click **Deploy**
5. Future updates: just `git push` and Vercel auto-deploys

## Step 3: Connect to `swetang-portfolio.vercel.app`

This is the part that matters — making sure the new site lives at the **existing** URL, not a new one.

1. In Vercel dashboard, go to your new project
2. Click **Settings** → **Domains**
3. Type `swetang-portfolio.vercel.app` and click **Add**
4. If it's not already attached, Vercel will ask you to confirm
5. Vercel will auto-issue an SSL cert (takes ~30 seconds)

**If `swetang-portfolio.vercel.app` was previously on a different project:**

You have two options:

**A. Delete the old project first** (cleanest):
1. Go to old Vercel project → Settings → Danger Zone → Delete
2. Wait for the domain to be released (~5 min, sometimes instant)
3. Add `swetang-portfolio.vercel.app` to your new project

**B. Keep both and redirect:**
1. Old project stays at `swetang-portfolio.vercel.app`
2. New project gets a new URL
3. In the old project, set up a 301 redirect to the new URL

**Recommendation: Go with Option A** (delete old, redeploy new). Cleaner, no SEO penalty.

## Step 4: Verify the deployment

After deploy completes, visit `https://swetang-portfolio.vercel.app` and check:

- [ ] Hero loads with your name and 3 highlight terms (LLM evaluation, RAG, AI deployment)
- [ ] Status badge says "Open to global opportunities..."
- [ ] 4 stats show: 9+, 450+, 98%, 5+
- [ ] "About" section has 4 pillars
- [ ] "Experience" shows 4 jobs in reverse-chronological order
- [ ] Jetec entry has the new title "Senior Systems & Algorithm Engineer"
- [ ] "Projects" section has 4 GitHub cards with live links
- [ ] Clicking a project link opens the GitHub repo
- [ ] "Skills" has 6 categories with proper tags
- [ ] "Contact" section has 3 cards (Email, LinkedIn, GitHub)
- [ ] Bottom says "© 2026 Swetang Gajjar"
- [ ] Open in mobile view (DevTools → toggle device toolbar) — looks good
- [ ] Toggle dark mode (DevTools → Rendering → Emulate CSS prefers-color-scheme: dark) — looks good

## Step 5: Update LinkedIn (don't forget!)

Once the site is live, update your LinkedIn:

1. **Featured section** → Add a link to `https://swetang-portfolio.vercel.app`
2. **Contact info** → Add the website URL
3. **About section** → Mention the portfolio link

## Troubleshooting

### Domain already in use error
→ Delete the old Vercel project first, then re-add the domain

### Old site still showing
→ Hard refresh (Ctrl+Shift+R) or clear browser cache
→ Vercel CDN can take up to 5 minutes to propagate globally

### 404 on refresh
→ `vercel.json` is set up correctly to handle this — should be no 404s

### Build failed error
→ This site has no build step, so this shouldn't happen
→ If it does, ensure all files are at the root of the folder, not in a subfolder

### Fonts not loading
→ Check that the Google Fonts CDN URLs are accessible
→ The site uses `Inter` and `JetBrains Mono` from Google Fonts

## What to update over time

As your career progresses, update these sections:

| Section | Update frequency |
|---|---|
| Hero stats | When you cross a milestone (e.g., 500+ tasks → 600+ tasks) |
| About | When your value prop shifts |
| Experience | When you start/end a job |
| Projects | When you ship a new GitHub project |
| Skills | When you add a new tool/language |
| Contact | When your email or handles change |

The site is **2 files you edit** (`index.html` + maybe `styles.css`) and you re-deploy. That's it. No CMS, no database, no maintenance.
