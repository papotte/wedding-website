# Wedding Website - Next.js + Netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/b6b80c9c-1baf-494d-b533-0e674b4b5926/deploy-status)](https://app.netlify.com/sites/rr-wedding/deploys)

This is a minimal website for a wedding.
For getting started, make a copy of `.env.template` and add the information for your event.

This is a [Next.js](https://nextjs.org/) v13 project that uses
the [Next Netlify Starter Template](https://github.com/netlify-templates/next-netlify-starter).

We are deploying on Vercel, but this project is also compatible with Netlify.

## Table of Contents:

- [Getting Started](#getting-started)
- [Configuration](#configuration)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/[locale]/page.tsx`. The page auto-updates as you edit the file.

### Configuration

To change the color palette, edit `./colors.json`.

For further configuration, see the documentation for Tailwind CSS.

This project adds internationalization by default. Included languages are English and Spanish. To add or modify, change
the `locales` array in `src/middleware.ts` and add the appropriate translation files in `./src/locales/[locale].json`.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
