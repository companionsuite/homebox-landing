// The static host has no rewrites, so each client route gets its own copy of
// index.html. That gives /connect/, /privacy/, /support/ and /terms/ a real HTTP 200.
import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs';

const OUT = 'site';
const ROUTES = ['connect', 'privacy', 'support', 'terms'];

for (const route of ROUTES) {
  mkdirSync(`${OUT}/${route}`, { recursive: true });
  copyFileSync(`${OUT}/index.html`, `${OUT}/${route}/index.html`);
}
copyFileSync(`${OUT}/index.html`, `${OUT}/404.html`);
writeFileSync(`${OUT}/.nojekyll`, '');
