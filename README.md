# Roy Lorrens Odhiambo — Personal Portfolio

A premium, production-ready personal portfolio website built with:
**React 18 · Vite · Tailwind CSS · Framer Motion · EmailJS**

---

## Project Structure

```
roy-portfolio/
├── public/
│   ├── favicon.svg               ← Replace with your logo
│   ├── roy-lorrens-cv.pdf        ← Add your actual CV here
│   └── og-image.jpg              ← Open Graph image (1200×630px)
│
├── src/
│   ├── assets/
│   │   └── images/               ← Add your portrait images here
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Expertise.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Podcast.jsx
│   │   │   ├── Book.jsx
│   │   │   ├── Leadership.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Resume.jsx
│   │   │   ├── Social.jsx
│   │   │   └── Contact.jsx
│   │   │
│   │   └── ui/
│   │       ├── Divider.jsx       ← SectionLabel, SectionTitle, GoldLine, etc.
│   │       ├── ScrollProgress.jsx
│   │       └── CursorGlow.jsx
│   │
│   ├── hooks/
│   │   └── useScrollReveal.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## Step 1 — Installation

```bash
# 1. Clone or download this project folder
cd roy-portfolio

# 2. Install all dependencies
npm install

# 3. Start the development server
npm run dev
```

Your site will be live at: **http://localhost:5173**

---

## Step 2 — Add Your Real Content

### Portrait / Headshot
Place your professional photos in `src/assets/images/`:
```
src/assets/images/
  portrait-hero.jpg     (3:4 ratio, min 800px wide)
  portrait-about.jpg    (1:1 ratio, min 600px wide)
```

Then in `Hero.jsx`, replace `<PortraitPlaceholder />` with:
```jsx
import portraitHero from '@assets/images/portrait-hero.jpg'
// ...
<img src={portraitHero} alt="Roy Lorrens Odhiambo" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
```

### CV / Resume PDF
Drop your CV PDF into `public/`:
```
public/roy-lorrens-cv.pdf
```
The Download CV button in `Resume.jsx` already links to `/roy-lorrens-cv.pdf`.

### Book Cover
Create a real book cover image and use it in `Book.jsx` instead of the CSS-generated cover.

### Real Podcast Links
Update the episode cards in `Podcast.jsx` with your real YouTube/Spotify URLs.

### Contact Information
In `Contact.jsx`, update:
```jsx
href="https://wa.me/254700000000"   // Replace with Roy's real WhatsApp number
```

### Social Links
In `Social.jsx` and `Footer.jsx`, update all `href` values with Roy's actual profile URLs.

---

## Step 3 — EmailJS Setup (Contact Form)

The contact form uses EmailJS to send messages directly to Roy's email without a backend.

### Create a free account
1. Go to **https://emailjs.com** and sign up (free plan = 200 emails/month)
2. Click **Add New Service** → choose Gmail, Outlook, or any email provider
3. Connect Roy's email account
4. Note your **Service ID** (e.g. `service_abc123`)

### Create an email template
1. Go to **Email Templates** → **Create New Template**
2. Set the template body:
```
New message from {{from_name}} ({{from_email}})

Subject: {{subject}}

{{message}}
```
3. Set **To Email** to Roy's real email address
4. Save and note your **Template ID** (e.g. `template_xyz789`)

### Get your Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**

### Add credentials to Contact.jsx
Open `src/components/sections/Contact.jsx` and replace:
```js
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'   // ← your service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'  // ← your template ID
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'   // ← your public key
```

### Test it
Run `npm run dev`, fill in the contact form, and check Roy's inbox.

---

## Step 4 — SEO Customization

In `index.html`, update:
```html
<link rel="canonical" href="https://roylorrens.com" />  ← Real domain
<meta property="og:url" content="https://roylorrens.com" />
<meta property="og:image" content="https://roylorrens.com/og-image.jpg" />
```

Add a real `public/og-image.jpg` (1200 × 630px) — this is what appears when the link is shared on WhatsApp, LinkedIn, Twitter.

In `public/`, also add:
```
robots.txt:
  User-agent: *
  Allow: /
  Sitemap: https://roylorrens.com/sitemap.xml
```

---

## Step 5 — Build for Production

```bash
npm run build
```

This creates a `dist/` folder with fully optimized, minified files ready to deploy.

Preview the production build locally:
```bash
npm run preview
```

---

## Step 6 — Deploy to Vercel (Recommended — Free)

Vercel is the fastest and easiest option for React + Vite sites.

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts:
# - Link to existing project? No
# - Project name: roy-lorrens-portfolio
# - Directory: ./
# - Build command: npm run build
# - Output dir: dist
```

**Or deploy via Vercel dashboard:**
1. Push the project to a GitHub repository
2. Go to **https://vercel.com** → Import Project
3. Connect your GitHub and select the repo
4. Settings are auto-detected (Vite)
5. Click **Deploy**

Every future `git push` auto-deploys. Total time: ~2 minutes.

**Add custom domain on Vercel:**
1. Go to your project → **Settings** → **Domains**
2. Add `roylorrens.com` (or your domain)
3. Update your domain's DNS: add a CNAME pointing to `cname.vercel-dns.com`

---

## Step 7 — Deploy to Netlify (Alternative — Free)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build first
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

Or drag-and-drop the `dist/` folder at **https://app.netlify.com/drop**.

**Important:** For React Router to work on Netlify, add this file:
```
public/_redirects

Contents:
/*  /index.html  200
```

---

## Step 8 — Analytics Setup

### Google Analytics 4
1. Go to **https://analytics.google.com** → Create property
2. Get your Measurement ID (e.g. `G-XXXXXXXXXX`)
3. Add to `index.html` just before `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Microsoft Clarity (Heatmaps — Free)
1. Go to **https://clarity.microsoft.com** → Create project
2. Copy the script and add to `index.html`

---

## Step 9 — Performance Checklist

Before going live, verify:

- [ ] Replace all portrait placeholders with real images
- [ ] Compress images using https://squoosh.app (WebP format)
- [ ] Add real CV PDF to `public/`
- [ ] Add real `og-image.jpg` (1200×630px) to `public/`
- [ ] Set all real social media URLs
- [ ] Configure EmailJS credentials
- [ ] Test contact form end-to-end
- [ ] Update WhatsApp number
- [ ] Update canonical URL in `index.html`
- [ ] Run `npm run build` and test `npm run preview`
- [ ] Test on mobile (Chrome DevTools → Device toolbar)
- [ ] Check https://pagespeed.web.dev — aim for 90+
- [ ] Submit sitemap to Google Search Console

---

## Future Scalability

The codebase is structured for easy addition of:

| Feature               | How to Add |
|-----------------------|------------|
| Blog / Articles       | Add `src/pages/Blog.jsx` + new Route in App.jsx |
| Booking / Calendar    | Embed Calendly or integrate Cal.com |
| Newsletter            | Add Mailchimp/ConvertKit form |
| CMS                   | Connect Contentful or Sanity.io as data source |
| Admin Dashboard       | Add protected routes with JWT auth |
| AI Chatbot            | Embed a Claude-powered widget |
| Podcast CMS           | Connect RSS feed or Buzzsprout API |
| Analytics Dashboard   | Add a `/admin` route with chart components |
| Speaking Events       | New `Events.jsx` section component |

---

## Tech Stack Summary

| Tool           | Purpose                        |
|----------------|-------------------------------|
| React 18       | UI library                    |
| Vite           | Build tool (fast HMR)         |
| Tailwind CSS   | Utility CSS framework         |
| Framer Motion  | Page & scroll animations      |
| React Router   | Client-side routing           |
| EmailJS        | Contact form email sending    |
| React Helmet   | SEO meta tag management       |
| React CountUp  | Animated stat counters        |
| React Icons    | Icon library                  |
| Lucide React   | Additional icons              |

---

## Color Tokens (Brand Reference)

```css
--gold:        #C9A84C   /* Primary accent */
--gold-light:  #E8C96A   /* Hover state */
--gold-dim:    #8A6E2F   /* Subtle accent */
--dark:        #0D1117   /* Page background */
--surface:     #161B22   /* Card background */
--surface2:    #1C2331   /* Hover background */
--text:        #F0EDE6   /* Primary text */
--text-muted:  #8892A0   /* Body text */
--text-dim:    #5A6478   /* Labels, captions */
```

---

Built with precision for **Roy Lorrens Odhiambo**.
