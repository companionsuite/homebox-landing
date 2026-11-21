export const SITE_CONFIG = {
  appName: 'Companion for HomeBox',
  appId: 'app.homebox.companion',
  issuesRepoUrl: 'https://github.com/companionsuite/homebox-landing',
  publisher: 'Companion Suite',
  siteUrl: 'https://homebox.milliways.si/',
  homeboxUrl: 'https://github.com/sysadminsmedia/homebox',
} as const;

/** Prefix a site path with the deploy base: with base '/docs/', '/privacy' becomes '/docs/privacy'. */
export function withBase(path: string): string {
  return import.meta.env.BASE_URL + path.replace(/^\//, '');
}
