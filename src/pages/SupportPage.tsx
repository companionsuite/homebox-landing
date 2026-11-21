import React from 'react';
import { CloudOff, Globe, KeyRound, LifeBuoy, Mail, Network, ShieldCheck, Smartphone, Unlock } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { ExternalLink, SiteLink } from '../components/SiteLink';
import { LegalPage, LegalSection } from '../components/LegalPage';
import { Code } from '../content/connect-methods';

interface SupportPageProps {
  onNavigate: (path: string) => void;
}

export const SupportPage: React.FC<SupportPageProps> = ({ onNavigate }) => (
  <LegalPage icon={LifeBuoy} title="Support">
    <p>
      {SITE_CONFIG.appName} is published by {SITE_CONFIG.publisher}. It&apos;s an unofficial client for
      HomeBox and isn&apos;t affiliated with or endorsed by the HomeBox project. If the problem is with the
      HomeBox server itself, see the{' '}
      <ExternalLink href={SITE_CONFIG.homeboxUrl} className="text-link">
        HomeBox project
      </ExternalLink>
      .
    </p>

    <LegalSection icon={Smartphone} title="How to connect">
      <ol className="list-decimal space-y-1.5 ps-5">
        <li>Open the app. The Connect screen opens first.</li>
        <li>
          In <strong>Server URL</strong>, enter the address you use to open HomeBox in a browser, for
          example <Code>https://homebox.example.com</Code>.
        </li>
        <li>Choose how to sign in: email and password, a bearer token, or an API key.</li>
        <li>Tap <strong>Connect</strong>. Your items load, and the app keeps a copy for offline use.</li>
      </ol>
      <p>
        The full guide, with setups for a home network, a VPN and a reverse proxy, is on the{' '}
        <SiteLink to="/connect" onNavigate={onNavigate} className="text-link">
          How to Connect
        </SiteLink>{' '}
        page.
      </p>
    </LegalSection>

    <h2 className="font-display text-2xl font-bold tracking-tight text-[var(--ink-primary)]">
      Common connection problems
    </h2>

    <LegalSection icon={Unlock} title="My server is on my home network and uses http">
      <p>
        Many home servers only answer on http, for example <Code>http://192.168.1.50:7745</Code>. If you
        type an address without <Code>http://</Code> or <Code>https://</Code>, the app uses https. So for
        an http-only server, type <Code>http://</Code> at the start. The app will then warn you that your
        password and token travel unencrypted, which is fine on a home network you trust.
      </p>
    </LegalSection>

    <LegalSection icon={Network} title="iOS asks about Local Network access">
      <p>
        To reach a server in your home, the iOS app needs local network access. The first time, iOS asks
        to find devices on your local network. Tap <strong>Allow</strong>, then tap{' '}
        <strong>Connect</strong> again. If you tapped Don&apos;t Allow, open the iPhone Settings app, go to
        Privacy &amp; Security, then Local Network, and turn on {SITE_CONFIG.appName}.
      </p>
    </LegalSection>

    <LegalSection icon={Globe} title="The address or port is wrong">
      <p>
        Use the same address that opens HomeBox in a browser on the same phone. A direct connection
        usually uses port 7745. An https address behind a reverse proxy usually needs no port.
      </p>
    </LegalSection>

    <LegalSection icon={KeyRound} title="Sign-in fails">
      <p>
        Check your email and password in a browser first. If your server sits behind an access gate, add
        the headers it needs in the <strong>Proxy headers</strong> section of the Connect screen.
      </p>
    </LegalSection>

    <LegalSection icon={CloudOff} title="Changes made offline">
      <p>
        Edits you make without a connection wait in a queue on your device. The Home tab shows them, and
        they&apos;re sent when the server is reachable again.
      </p>
    </LegalSection>

    <LegalSection icon={Mail} title="Contact">
      <p>
        To report a bug or ask for help, open an issue on{' '}
        <ExternalLink href={`${SITE_CONFIG.issuesRepoUrl}/issues`} className="text-link">
          GitHub
        </ExternalLink>
        . You&apos;ll need a free GitHub account. Don&apos;t post passwords, tokens or your server address
        in an issue.
      </p>
    </LegalSection>

    <LegalSection icon={ShieldCheck} title="Privacy">
      <p>
        The app collects no data. The{' '}
        <SiteLink to="/privacy" onNavigate={onNavigate} className="text-link">
          Privacy Policy
        </SiteLink>{' '}
        has the details.
      </p>
    </LegalSection>
  </LegalPage>
);
