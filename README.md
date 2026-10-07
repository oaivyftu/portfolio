# Vincent Studio Company

Marketing website for Vincent Studio Company, a software studio offering web and mobile development, product design, cloud/DevOps and technical consulting. Built with Next.js (App Router), Tailwind CSS and `next-intl` (English and French).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (redirects to `/en`).

## Where to edit content

| What | Where |
| --- | --- |
| Brand name, emails, LinkedIn, site URL | `data/site.ts` (set `NEXT_PUBLIC_SITE_URL` in production) |
| Services, process, FAQ, stats copy (EN/FR) | `messages/en.json`, `messages/fr.json` |
| Which items appear on each section | `data/site.ts` (`serviceKeys`, `processKeys`, `faqKeys`, ...) |
| Case studies | `data/index.ts` (`projects`), images in `public/` |
| Accent colour | `tailwind.config.ts` (`accent`) |

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — lint
