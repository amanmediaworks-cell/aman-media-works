# Aman Media Works — Website

Premium Black & Gold website for Aman Media Works e-commerce agency.

## Pages
- `/` — Home (Hero, Stats, Services, Why Us, CTA)
- `/about` — About Us
- `/services` — All Services
- `/blog` — Blog & Resources
- `/contact` — Contact Form + Free Audit

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Google Fonts** — Cormorant Garamond + DM Sans

---

## Setup Instructions

### Step 1 — Install Dependencies
```bash
npm install
```

### Step 2 — Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Step 3 — Build for Production
```bash
npm run build
```

---

## Deploy to Vercel (Free)

1. Push this folder to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click Deploy — done!

### Connect Your Domain (Hostinger)
After deploying on Vercel:
1. Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain (e.g. `amanmediaworks.com`)
3. Vercel will show you 2 DNS records
4. Go to Hostinger → DNS Zone Editor
5. Add those 2 records → Save
6. Wait 1-2 hours → Your site is LIVE! 🎉

---

## Customization

### Update Contact Email
In `components/Footer.tsx` — change `hello@amanmediaworks.com`

### Update Phone/WhatsApp
In `app/contact/page.tsx` — add your phone number

### Add Real Blog Posts
In `app/blog/page.tsx` — update the `posts` array

### Add Your Logo
Replace text logo in `components/Navbar.tsx` with an `<Image>` tag
