import React from 'react';
import { SITE_CONFIG } from '../config/site';

type Icon = React.ComponentType<{ className?: string }>;

interface LegalPageProps {
  icon: Icon;
  title: string;
  children: React.ReactNode;
}

/** The shared frame of the Privacy, Support and Terms pages. */
export const LegalPage: React.FC<LegalPageProps> = ({ icon: PageIcon, title, children }) => (
  <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
    <div className="mbe-8 grid justify-items-start gap-3">
      <span className="pill">
        <PageIcon className="size-3.5" />
        {title}
      </span>
      <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      <p className="text-sm text-[var(--ink-muted)]">
        Last updated: November 21, 2026 &middot; App: {SITE_CONFIG.appName} ({SITE_CONFIG.appId}) &middot;
        Publisher: {SITE_CONFIG.publisher}
      </p>
    </div>
    <div className="grid gap-6 text-[15px] leading-relaxed text-[var(--ink-secondary)]">{children}</div>
  </article>
);

interface LegalSectionProps {
  icon?: Icon;
  title: string;
  children: React.ReactNode;
}

export const LegalSection: React.FC<LegalSectionProps> = ({ icon: SectionIcon, title, children }) => (
  <section className="card grid gap-3 p-6">
    <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-[var(--ink-primary)]">
      {SectionIcon ? <SectionIcon className="size-5 flex-none text-[var(--accent)]" /> : null}
      {title}
    </h2>
    {children}
  </section>
);
