import React from 'react';
import { Camera, HardDrive, Lock, Server, ShieldCheck, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { ExternalLink, SiteLink } from '../components/SiteLink';
import { LegalPage, LegalSection } from '../components/LegalPage';

interface PrivacyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => (
  <LegalPage icon={ShieldCheck} title="Privacy Policy">
    <LegalSection icon={Lock} title="1. Nothing collected by us, no analytics">
      <p>
        {SITE_CONFIG.appName} is built for a private, self-hosted HomeBox server. We run no developer
        server that collects, stores or reads your inventory, your credentials or how you use the app. The
        app contains <strong>no third-party analytics, no advertising SDKs and no telemetry or crash
        trackers</strong>.
      </p>
    </LegalSection>

    <LegalSection icon={Server} title="2. A direct connection to your HomeBox server">
      <p>
        In the mobile app, network requests go <strong>only</strong> to the HomeBox server address you
        enter, with any proxy headers you add (for example a Cloudflare Access service token).
      </p>
      <ul className="list-disc space-y-1.5 ps-5">
        <li>
          <strong>Email and password:</strong> your credentials are sent once to your HomeBox server to
          sign in. The app never stores your password.
        </li>
        <li>
          <strong>Tokens, API keys and proxy headers:</strong> these are stored on your device, in the iOS
          Keychain or the Android Keystore, and used only to authenticate requests to your server.
        </li>
      </ul>
    </LegalSection>

    <LegalSection icon={HardDrive} title="3. Storage on your device and the offline cache">
      <p>
        To work offline, {SITE_CONFIG.appName} keeps your settings, a cached copy of your items,
        locations, tags, item types, maintenance and statistics, item photos it has shown you, and any
        changes still waiting to be sent. This data stays in the app&apos;s local storage on your device.
        Deleting the app removes it.
      </p>
    </LegalSection>

    <LegalSection icon={Camera} title="4. Camera, photo and local network permissions">
      <p>
        The app asks for the camera only when you take a photo of an item or scan, and for the photo
        library only when you choose an existing photo or save an item photo. On iOS it also asks to use
        the local network so it can reach a HomeBox server in your home. Photos go only to your own
        HomeBox server.
      </p>
    </LegalSection>

    <LegalSection icon={Sparkles} title="5. AI assist (self-hosted web version only)">
      <p>
        AI assist is <strong>not available in the mobile app</strong>. If you run the separate
        self-hosted web companion server and choose to use AI assist, the item name, notes or photo and
        your list of locations and tags are sent to <strong>Google Gemini</strong> with your own API key,
        or to your own OpenAI-compatible model, depending on how you set up that server.
      </p>
    </LegalSection>

    <LegalSection title="6. Contact and support">
      <p>
        For privacy questions or support, open an issue on{' '}
        <ExternalLink href={`${SITE_CONFIG.issuesRepoUrl}/issues`} className="text-link">
          GitHub
        </ExternalLink>
        . You can also go back to the{' '}
        <SiteLink to="/#support" onNavigate={onNavigate} className="text-link">
          Support section
        </SiteLink>
        .
      </p>
    </LegalSection>
  </LegalPage>
);
