export const SITE_CONFIG = {
  appName: 'HomeBox Companion',
  appId: 'app.homebox.companion',
  issuesRepoUrl: 'https://github.com/companionsuite/homebox-landing',
  siteUrl: 'https://companionsuite.github.io/homebox-landing/',
  homeboxUrl: 'https://github.com/sysadminsmedia/homebox',
} as const;

/** Prefix a site path with the deploy base: '/privacy' becomes '/homebox-landing/privacy'. */
export function withBase(path: string): string {
  return import.meta.env.BASE_URL + path.replace(/^\//, '');
}
