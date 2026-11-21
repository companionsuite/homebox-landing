import React from 'react';
import { FileText } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { ExternalLink, SiteLink } from '../components/SiteLink';
import { LegalPage, LegalSection } from '../components/LegalPage';

interface TermsPageProps {
  onNavigate: (path: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => (
  <LegalPage icon={FileText} title="Terms of Use">
    <LegalSection title="1. Acceptance of terms">
      <p>
        By downloading or using {SITE_CONFIG.appName}, you agree to these Terms of Use. If you do not
        agree, do not use the app.
      </p>
    </LegalSection>

    <LegalSection title="2. Independent companion and your own server">
      <p>
        {SITE_CONFIG.appName} is an independent companion app for{' '}
        <ExternalLink href={SITE_CONFIG.homeboxUrl} className="text-link">
          HomeBox
        </ExternalLink>{' '}
        and is not affiliated with or endorsed by the HomeBox project. You are responsible for running,
        securing and backing up your own HomeBox server, API keys, network tunnels and data.
      </p>
    </LegalSection>

    <LegalSection title="3. Acceptable use and your data">
      <p>
        {SITE_CONFIG.appName} connects directly to the server you set up and caches your inventory on
        your device for offline use. You are responsible for making sure you have the right to store and
        manage the items, photos and documents you keep through the app.
      </p>
    </LegalSection>

    <LegalSection title="4. No warranty and limits of liability">
      <p>
        {SITE_CONFIG.appName} is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without
        warranties of any kind, express or implied. To the fullest extent the law allows, the maintainers
        are not liable for any indirect, incidental or consequential damages, including lost data or an
        unavailable server.
      </p>
    </LegalSection>

    <LegalSection title="5. Privacy and contact">
      <p>
        Your use of the app is also covered by our{' '}
        <SiteLink to="/privacy" onNavigate={onNavigate} className="text-link">
          Privacy Policy
        </SiteLink>
        . Send questions through{' '}
        <ExternalLink href={`${SITE_CONFIG.issuesRepoUrl}/issues`} className="text-link">
          our support page
        </ExternalLink>
        .
      </p>
    </LegalSection>
  </LegalPage>
);
