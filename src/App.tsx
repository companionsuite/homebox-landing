import React, { useCallback, useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { SITE_CONFIG, withBase } from './config/site';
import { ExternalLink, SiteLink } from './components/SiteLink';
import { LandingPage } from './pages/LandingPage';
import { ConnectPage } from './pages/ConnectPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

/** The route inside the site, with the deploy base and any trailing slash removed. */
function routeFromLocation(): string {
  const inside = window.location.pathname.slice(import.meta.env.BASE_URL.length - 1);
  const clean = inside.replace(/\/+$/, '');
  return clean === '' ? '/' : clean;
}

const NAV = [
  { to: '/connect', label: 'Connect' },
  { to: '/privacy', label: 'Privacy' },
  { to: '/terms', label: 'Terms' },
] as const;

export const App: React.FC = () => {
  const [path, setPath] = useState<string>(routeFromLocation);
  const [isDark, setIsDark] = useState<boolean>(() =>
    document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    const onPopState = () => setPath(routeFromLocation());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = useCallback((target: string) => {
    const [rawPath, hash] = target.split('#');
    const nextPath = rawPath || '/';
    if (routeFromLocation() !== nextPath) {
      window.history.pushState({}, '', withBase(target));
      setPath(nextPath);
    }
    if (hash) {
      requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView());
    } else {
      window.scrollTo({ top: 0 });
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('hb_landing_theme', next ? 'dark' : 'light');
    } catch {
      // Private windows can block storage; the toggle still works for this visit.
    }
  };

  const page =
    path === '/connect' || path === '/setup' ? (
      <ConnectPage onNavigate={navigate} />
    ) : path === '/privacy' ? (
      <PrivacyPage onNavigate={navigate} />
    ) : path === '/terms' ? (
      <TermsPage onNavigate={navigate} />
    ) : (
      <LandingPage onNavigate={navigate} isDark={isDark} />
    );

  return (
    <div className="flex min-h-svh flex-col">
      <header className="sticky inset-bs-0 z-30 border-be border-[var(--border-subtle)] bg-[var(--bg-surface-1)]/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <SiteLink
            to="/"
            onNavigate={navigate}
            className="flex items-center gap-2.5 font-display text-base font-semibold text-[var(--ink-primary)]"
          >
            <img src={withBase('/icon.svg')} alt="" width={32} height={32} className="size-8 flex-none rounded-lg" />
            <span className="max-sm:sr-only">{SITE_CONFIG.appName}</span>
          </SiteLink>

          <nav aria-label="Main" className="flex items-center gap-1 sm:gap-2">
            {NAV.map((item) => (
              <SiteLink
                key={item.to}
                to={item.to}
                onNavigate={navigate}
                current={path === item.to || (item.to === '/connect' && path === '/setup')}
                className="nav-link"
              >
                {item.label}
              </SiteLink>
            ))}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="btn btn-secondary ms-1 size-10 min-h-0 px-0"
            >
              {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1">{page}</main>

      <footer className="border-bs border-[var(--border-subtle)] bg-[var(--bg-surface-1)] py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-[var(--ink-muted)] sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="grid gap-1">
            <p>&copy; 2026 {SITE_CONFIG.appName}. Independent companion app for HomeBox.</p>
            <p>Not affiliated with or endorsed by the HomeBox project.</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <SiteLink to="/" onNavigate={navigate} className="nav-link px-0">Home</SiteLink>
            <SiteLink to="/connect" onNavigate={navigate} className="nav-link px-0">How to Connect</SiteLink>
            <SiteLink to="/privacy" onNavigate={navigate} className="nav-link px-0">Privacy Policy</SiteLink>
            <SiteLink to="/terms" onNavigate={navigate} className="nav-link px-0">Terms of Use</SiteLink>
            <ExternalLink href={SITE_CONFIG.issuesRepoUrl} className="nav-link px-0">GitHub</ExternalLink>
          </div>
        </div>
      </footer>
    </div>
  );
};
