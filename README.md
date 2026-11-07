# UPWORD — Hospitality Digital Growth Agency

Official single-page business website for **UPWORD** (*"Your Complete Hospitality Digital Growth Partner."*), founded by **Shubham Upadhyay** and headquartered in **Indore, Madhya Pradesh, India**.

UPWORD provides specialized digital growth services for hotels, resorts, guest houses, homestays, pilgrimage accommodations, cafes, and restaurants across:
- **Nashik, Maharashtra**
- **Trimbakeshwar, Maharashtra**
- **Ujjain, Madhya Pradesh**
- **Indore, Madhya Pradesh**

---

## Business & Contact Configuration

All core business details are centrally managed in [`src/config/business.ts`](src/config/business.ts):
- **Company**: UPWORD
- **Founder**: Shubham Upadhyay
- **Category**: Hospitality Digital Growth Agency
- **Headquarters**: Indore, Madhya Pradesh, India
- **Phone**: `+91 9131093658` (`tel:+919131093658`)
- **WhatsApp**: `+91 9131093658` (`https://wa.me/919131093658`)
- **Email**: `null` *(Not configured yet; can be updated in `src/config/business.ts` once active)*

---

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite (`dist` production output)
- **Styling**: Tailwind CSS v4 + CSS Custom Properties (`src/styles/tokens.css`)
- **Icons**: Lucide React (`lucide-react`)
- **Data Visualization**: Recharts (`recharts`)

---

## Project Structure

```text
├── public/
│   ├── images/                  # Static hospitality & social preview images
│   ├── favicon.svg              # UPWORD gold-on-charcoal monogram favicon
│   ├── manifest.webmanifest     # Web App Manifest
│   ├── robots.txt               # Search crawler directives
│   └── sitemap.xml              # XML Sitemap
├── src/
│   ├── assets/                  # Vite-bundled high-resolution hospitality images
│   ├── components/              # Reusable UI primitives (BrandLogo, Button, Card, Container, IconBox, Section, SeoHead, FloatingWhatsAppButton)
│   ├── config/                  # Central business config (business.ts) & SEO/JSON-LD config (seo.ts)
│   ├── data/                    # Structured data modules (services, workflow, analyticsDemo, focusCities, markets)
│   ├── hooks/                   # Custom React hooks (useScrollPosition)
│   ├── layouts/                 # MainLayout (3-zone sticky header, mobile drawer, footer, floating WhatsApp)
│   ├── sections/                # Page sections (Hero, About, FocusCities, Services, Workflow, Analytics, Pricing, Contact)
│   ├── styles/                  # Design tokens (tokens.css)
│   ├── App.tsx                  # Root application layout & section composition
│   ├── index.css                # Global Tailwind v4 & utility styles
│   └── main.tsx                 # Application entry point
├── .env.example                 # Environment variable template
├── index.html                   # HTML entry point with SEO meta tags & Schema.org JSON-LD
├── package.json                 # Scripts & dependencies
├── tsconfig.json                # TypeScript configuration
├── vercel.json                  # Vercel deployment & rewrite rules
└── vite.config.ts               # Vite bundler configuration
```

---

## Local Development & Build

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
Runs on `http://localhost:3000`:
```bash
npm run dev
```

### 3. Typecheck (Lint)
```bash
npm run lint
```

### 4. Production Build
Outputs the production bundle to the `dist/` directory:
```bash
npm run build
```

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## Environment Variables

Copy `.env.example` to `.env` (or configure in Vercel Project Settings):

| Variable | Description | Example |
| :--- | :--- | :--- |
| `VITE_SITE_URL` | Canonical production URL used for `<link rel="canonical">`, `og:url`, and Schema.org JSON-LD. | `https://upword.in` |

---

## GitHub & Vercel Deployment Guide

1. **Create a GitHub Repository**: Create a new repository on [GitHub](https://github.com/new) (e.g., `upword-website`).
2. **Push the Code**:
   ```bash
   git init
   git add .
   git commit -m "Initial production release of UPWORD website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/upword-website.git
   git push -u origin main
   ```
3. **Import in Vercel**: Log in to [Vercel](https://vercel.com), click **Add New... → Project**, and import your `upword-website` GitHub repository.
4. **Build Settings** (auto-detected via `vercel.json`):
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. **Deploy & Connect Custom Domain**: Click **Deploy**. Under **Project Settings → Domains**, add your custom domain when ready and set `VITE_SITE_URL` under **Settings → Environment Variables**.
