import React from 'react';
import {
  CheckCircle2,
  Clock,
  Github,
  MapPin,
  ScanLine,
  Server,
  ShieldCheck,
  Wrench,
  WifiOff,
} from 'lucide-react';
import { SITE_CONFIG, withBase } from '../config/site';
import { ExternalLink, SiteLink } from '../components/SiteLink';

interface LandingPageProps {
  onNavigate: (path: string) => void;
  isDark: boolean;
}

const FEATURES = [
  {
    icon: Server,
    title: 'Straight to your server',
    description:
      'Sign in to your own HomeBox server with email and password, a bearer token or an API key. Proxy headers let you get past an access gate such as Cloudflare Access.',
  },
  {
    icon: WifiOff,
    title: 'Keeps working offline',
    description:
      'Items, locations, tags, maintenance and statistics stay cached on the device. Edits you make offline wait in Changes waiting until you send them with Sync now.',
  },
  {
    icon: ScanLine,
    title: 'Scan and snap',
    description:
      'Find an item by its asset ID, look up a product barcode (EAN or ISBN), or take a photo to start a new item or add to one you already have.',
  },
  {
    icon: MapPin,
    title: 'Locations and tags',
    description:
      'Browse a nested tree of rooms, shelves and boxes, and move items between them. Tags can have a parent, a colour and an icon.',
  },
  {
    icon: Wrench,
    title: 'Maintenance and labels',
    description:
      'Schedule maintenance with a date and a cost, and see what’s due on the home screen. Print item labels with the label maker built into HomeBox.',
  },
  {
    icon: ShieldCheck,
    title: 'Private by design',
    description:
      'There are no analytics, no ads and no developer server. Tokens stay in the iOS Keychain or Android Keystore. Your password is sent once to sign in and never stored.',
  },
] as const;

const HERO_SHOTS = [
  { file: '01-items.png', alt: 'Items list grouped by letter, with location and tag filters' },
  { file: '02-item.png', alt: 'Item detail for a cordless drill with quantity, tags, asset ID and manufacturer' },
] as const;

const SCREENSHOTS = [
  { file: '03-home.png', alt: 'Home screen with recently added items and maintenance that is due', caption: 'Recent items and what is due' },
  { file: '04-locations.png', alt: 'Locations list with a garage that holds a tool shelf', caption: 'Nested locations' },
  { file: '05-scan.png', alt: 'Scan screen with asset ID search, photo capture and barcode lookup', caption: 'Asset IDs, photos and barcodes' },
  { file: '06-outbox.png', alt: 'Changes waiting screen showing that every change is synced', caption: 'Changes waiting, under your control' },
] as const;

const CHECKS = [
  'Talks only to your HomeBox server',
  'Works on LAN, Tailscale and behind Cloudflare Access',
  'Offline cache with a queue of waiting changes',
  'No analytics, no ads',
] as const;

function shotSrc(file: string, isDark: boolean): string {
  return withBase(`/screenshots/${isDark ? 'dark-' : ''}${file}`);
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate, isDark }) => (
  <div>
    <section className="border-be border-[var(--border-subtle)] bg-[var(--bg-surface-1)]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-[var(--space-section)] sm:px-6 lg:grid-cols-[1.15fr_1fr]">
        <div className="grid justify-items-start gap-6">
          <span className="pill">
            <img src={withBase('/icon.svg')} alt="" width={14} height={14} className="size-3.5 flex-none rounded-[4px]" />
            Companion app for HomeBox
          </span>

          <h1 className="font-display text-[length:var(--text-hero)] leading-[1.08] font-bold tracking-tight">
            Your HomeBox inventory, in your pocket.
          </h1>

          <p className="text-lg leading-relaxed text-[var(--ink-secondary)]">
            An offline-first mobile app for your self-hosted HomeBox server. Find any item, scan
            asset IDs and barcodes, log maintenance, and keep editing when the signal drops.
          </p>

          <p className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-2)] px-4 py-2.5 text-sm font-medium">
            <Clock className="size-4 flex-none text-[var(--accent)]" />
            Coming soon to iPhone, iPad and Android
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#features" className="btn btn-primary">Explore features</a>
            <SiteLink to="/connect" onNavigate={onNavigate} className="btn btn-secondary">
              How to Connect
            </SiteLink>
          </div>

          <ul className="grid gap-2.5 text-sm text-[var(--ink-secondary)] sm:grid-cols-2">
            {CHECKS.map((check) => (
              <li key={check} className="flex items-start gap-2">
                <CheckCircle2 className="mbs-0.5 size-4 flex-none text-[var(--accent)]" />
                {check}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto grid w-full max-w-md grid-cols-2 items-start gap-4 sm:max-w-lg sm:gap-5">
          {HERO_SHOTS.map((shot, index) => (
            <div key={shot.file} className={`shot ${index === 1 ? 'mbs-8' : ''}`}>
              <img src={shotSrc(shot.file, isDark)} alt={shot.alt} width={780} height={1688} className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="features" className="mx-auto max-w-6xl px-4 py-[var(--space-section)] sm:px-6">
      <div className="grid max-w-2xl gap-3">
        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
          Built for a self-hosted home inventory
        </h2>
        <p className="text-[var(--ink-secondary)]">
          Made for HomeBox v0.27.1 and its full API, with the daily jobs one tap away and your data on
          your own server.
        </p>
      </div>

      <div className="mbs-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <div key={title} className="card grid content-start gap-3 p-6">
            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
              <Icon className="size-5" />
            </span>
            <h3 className="font-display text-base font-semibold">{title}</h3>
            <p className="text-sm leading-relaxed text-[var(--ink-secondary)]">{description}</p>
          </div>
        ))}
      </div>
    </section>

    <section id="screenshots" className="border-y border-[var(--border-subtle)] bg-[var(--bg-surface-1)] py-[var(--space-section)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid max-w-2xl gap-3">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">A look inside</h2>
          <p className="text-[var(--ink-secondary)]">
            Captured from the app with demo data. Switch the page theme to see dark mode.
          </p>
        </div>

        <div className="mbs-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,9.5rem),1fr))] gap-6">
          {SCREENSHOTS.map((shot) => (
            <figure key={shot.file} className="grid gap-3">
              <div className="shot">
                <img src={shotSrc(shot.file, isDark)} alt={shot.alt} width={780} height={1688} loading="lazy" className="w-full" />
              </div>
              <figcaption className="text-center text-sm font-medium text-[var(--ink-secondary)]">
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>

    <section id="support" className="mx-auto max-w-6xl px-4 py-[var(--space-section)] sm:px-6">
      <div className="card grid gap-8 rounded-3xl p-8 sm:p-10 lg:grid-cols-[2fr_1fr] lg:items-center">
        <div className="grid gap-3">
          <h2 className="font-display text-2xl font-bold tracking-tight">Support and contact</h2>
          <p className="leading-relaxed text-[var(--ink-secondary)]">
            Need help connecting to your HomeBox server or setting proxy headers, or want to report a
            bug? Open an issue on GitHub.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <SiteLink to="/connect" onNavigate={onNavigate} className="text-link">How to Connect</SiteLink>
            <span aria-hidden className="text-[var(--ink-muted)]">&middot;</span>
            <SiteLink to="/support" onNavigate={onNavigate} className="text-link">Support</SiteLink>
            <span aria-hidden className="text-[var(--ink-muted)]">&middot;</span>
            <SiteLink to="/privacy" onNavigate={onNavigate} className="text-link">Privacy Policy</SiteLink>
            <span aria-hidden className="text-[var(--ink-muted)]">&middot;</span>
            <SiteLink to="/terms" onNavigate={onNavigate} className="text-link">Terms of Use</SiteLink>
          </div>
        </div>
        <ExternalLink href={`${SITE_CONFIG.issuesRepoUrl}/issues`} className="btn btn-primary">
          <Github className="size-4" />
          GitHub Issues
        </ExternalLink>
      </div>
    </section>
  </div>
);
