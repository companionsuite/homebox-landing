# homebox-landing

Landing page, How to Connect guide, Support page, Terms of Use, and Privacy Policy for **Companion for HomeBox** (`app.homebox.companion`), hosted at [https://homebox.milliways.si/](https://homebox.milliways.si/).

Companion for HomeBox is an unofficial, independent app. It is not affiliated with or endorsed by the HomeBox project.
It works with [HomeBox](https://github.com/sysadminsmedia/homebox).

## Stack

- Vite + React + TypeScript + Tailwind CSS v4
- Screenshots in `public/screenshots/` are captured from the app with demo data, in light and dark mode
- Built with `npm run build` and deployed from `site/`

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

## Deploy

The site is built with `npm run build` and deployed from `site/`.
