# Hybrid AdSense + Storefront (Next.js App Router)

A free-to-deploy template that combines:
- **Blog / content** (optimized for Google AdSense)
- **Storefront** (products, cart, Stripe Payment Link checkout)

## Quick start
1) Install deps
```bash
npm i
npm run dev
```
2) Add your **AdSense Publisher ID** in `app/layout.tsx` (replace `ca-pub-XXXX`).
3) (Optional) Put a real **Stripe Payment Link** in `app/cart/page.tsx` to accept payments.
4) Deploy to **Vercel** (free): push to GitHub → Import in Vercel → Deploy.

## Notes
- This template uses a **localStorage cart** (no backend required).
- Replace placeholder content in `data/products.tsx` and `app/blog/*`.
- When ready, buy a custom domain and map it in Vercel for better AdSense approval.
