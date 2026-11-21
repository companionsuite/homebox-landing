import React from 'react';
import { AlertTriangle, ArrowLeft, CheckCircle2, Info, KeyRound, Server, Shield } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { ExternalLink, SiteLink } from '../components/SiteLink';
import { COMMON_ERRORS, METHODS } from '../content/connect-methods';

interface ConnectPageProps {
  onNavigate: (path: string) => void;
}

const panel = 'rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface-2)] p-4';
const label = 'text-xs font-semibold tracking-wider text-[var(--ink-muted)] uppercase';

export const ConnectPage: React.FC<ConnectPageProps> = ({ onNavigate }) => (
  <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
    <div className="mbe-10 grid justify-items-start gap-4">
      <SiteLink to="/" onNavigate={onNavigate} className="nav-link inline-flex items-center gap-1.5 px-0">
        <ArrowLeft className="size-4" />
        Back to Home
      </SiteLink>
      <span className="pill">
        <Server className="size-3.5" />
        Connection guide
      </span>
      <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        How to connect to your HomeBox server
      </h1>
      <p className="max-w-2xl leading-relaxed text-[var(--ink-secondary)]">
        {SITE_CONFIG.appName} talks directly from your phone or tablet to your own self-hosted HomeBox
        server. Pick the setup that matches how you run your server.
      </p>
      <div className="flex flex-wrap gap-2">
        {METHODS.map(({ id, icon: Icon, shortTitle }) => (
          <a key={id} href={`#${id}`} className="btn btn-secondary min-h-10 px-3.5 font-medium">
            <Icon className="size-4 text-[var(--accent)]" />
            {shortTitle}
          </a>
        ))}
      </div>
    </div>

    <section className="mbe-10 flex flex-col gap-3 rounded-2xl border border-[var(--border-subtle)] bg-[var(--accent-soft)] p-5 sm:flex-row sm:items-start sm:p-6">
      <span className="inline-flex size-10 flex-none items-center justify-center rounded-xl bg-[var(--bg-surface-1)] text-[var(--accent)]">
        <Info className="size-5" />
      </span>
      <div className="grid gap-1">
        <h2 className="font-display text-base font-semibold">Start with the address you already use</h2>
        <p className="text-sm leading-relaxed text-[var(--ink-secondary)]">
          The <strong>Server URL</strong> is the address you use to open HomeBox in a browser. If it opens
          in your phone&apos;s browser, the app can use it too. The app calls the HomeBox API under{' '}
          <code className="font-mono">/api/v1</code>.
        </p>
      </div>
    </section>

    <div className="grid gap-8">
      {METHODS.map((method) => {
        const Icon = method.icon;
        return (
          <section key={method.id} id={method.id} className="card grid gap-6 rounded-3xl p-6 sm:p-8">
            <div className="grid justify-items-start gap-2">
              <span className="pill">
                <Icon className="size-3.5" />
                {method.badge}
              </span>
              <h2 className="font-display text-2xl font-bold tracking-tight">{method.title}</h2>
              <p className="text-sm leading-relaxed text-[var(--ink-secondary)]">{method.subtitle}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className={`${panel} grid content-start gap-2`}>
                <h3 className={label}>When to use</h3>
                <p className="text-sm leading-relaxed text-[var(--ink-secondary)]">{method.whenToUse}</p>
              </div>
              <div className={`${panel} grid content-start gap-2`}>
                <h3 className={label}>Example Server URL</h3>
                {method.exampleUrls.map((url) => (
                  <div key={url} className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-1)] px-3 py-1.5 font-mono text-xs break-all sm:text-sm">
                    {url}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-2.5">
              <h3 className="text-sm font-semibold">Before you start</h3>
              <ul className="grid gap-2 text-sm text-[var(--ink-secondary)]">
                {method.prerequisites.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mbs-0.5 size-4 flex-none text-[var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-3">
              <h3 className="text-sm font-semibold">Step by step</h3>
              <ol className="grid gap-3">
                {method.steps.map((step, index) => (
                  <li key={step.title} className="flex items-start gap-3 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-canvas)] p-4">
                    <span className="flex size-6 flex-none items-center justify-center rounded-full bg-[var(--accent)] text-xs font-bold text-[var(--on-accent)]">
                      {index + 1}
                    </span>
                    <div className="grid gap-1 text-sm leading-relaxed">
                      <div className="font-semibold">{step.title}</div>
                      <p className="text-[var(--ink-secondary)]">{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className={`${panel} grid gap-2.5`}>
              <h3 className="flex items-center gap-2 text-sm font-semibold">
                <Shield className="size-4 text-[var(--accent)]" />
                Troubleshooting
              </h3>
              <ul className="list-disc space-y-1.5 ps-5 text-sm leading-relaxed text-[var(--ink-secondary)]">
                {method.troubleshooting.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}
    </div>

    <section id="troubleshooting" className="card mbs-12 grid gap-6 rounded-3xl p-6 sm:p-8">
      <div className="grid gap-2">
        <h2 className="flex items-center gap-2.5 font-display text-2xl font-bold tracking-tight">
          <AlertTriangle className="size-5 flex-none text-[var(--accent)]" />
          Common connection errors
        </h2>
        <p className="text-sm text-[var(--ink-secondary)]">
          Quick checks when the Connect to HomeBox screen shows &ldquo;Couldn&rsquo;t connect&rdquo;.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {COMMON_ERRORS.map((err) => (
          <div key={err.title} className="grid content-start gap-2 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-canvas)] p-4">
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <KeyRound className="size-4 flex-none text-[var(--accent)]" />
              {err.title}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--ink-secondary)]">{err.detail}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-bs border-[var(--border-subtle)] pbs-6 text-sm">
        <p className="text-[var(--ink-secondary)]">
          Still stuck? Open an issue on{' '}
          <ExternalLink href={`${SITE_CONFIG.issuesRepoUrl}/issues`} className="text-link">
            GitHub
          </ExternalLink>
          .
        </p>
        <SiteLink to="/" onNavigate={onNavigate} className="text-link">
          Return to Home &rarr;
        </SiteLink>
      </div>
    </section>
  </div>
);
