import React from 'react';
import { withBase } from '../config/site';

interface SiteLinkProps {
  to: string;
  onNavigate: (path: string) => void;
  className?: string;
  current?: boolean;
  children: React.ReactNode;
}

/** An in-site link: a real href for new tabs and crawlers, client routing on a plain click. */
export const SiteLink: React.FC<SiteLinkProps> = ({ to, onNavigate, className, current, children }) => (
  <a
    href={withBase(to)}
    aria-current={current ? 'page' : undefined}
    className={className}
    onClick={(e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      onNavigate(to);
    }}
  >
    {children}
  </a>
);

interface ExternalLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({ href, className, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
    {children}
  </a>
);
