# homebox-landing

Landing page, How to Connect guide, Terms of Use, and Privacy Policy for **HomeBox Companion** (`app.homebox.companion`), hosted at [https://companionsuite.github.io/homebox-landing/](https://companionsuite.github.io/homebox-landing/).

HomeBox Companion is an independent companion app for [HomeBox](https://github.com/sysadminsmedia/homebox).
It is not affiliated with or endorsed by the HomeBox project.

## Stack

- Vite + React + TypeScript + Tailwind CSS v4
- Screenshots in `public/screenshots/` are captured from the app with demo data, in light and dark mode
- Deployed to GitHub Pages from the `gh-pages` branch

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The build writes the site to `site/`, with a copy of `index.html` for each route and a `404.html` fallback.

## Deploy to GitHub Pages

Commit the contents of `site/` to the `gh-pages` branch and push it.
