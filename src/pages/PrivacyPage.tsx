import React from 'react';
import { Camera, HardDrive, History, KeyRound, Lock, Mail, Server, ShieldCheck, Sparkles, Trash2, Users } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { ExternalLink, SiteLink } from '../components/SiteLink';
import { LegalPage, LegalSection } from '../components/LegalPage';

interface PrivacyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => (
  <LegalPage icon={ShieldCheck} title="Privacy Policy">
    <p>
      {SITE_CONFIG.publisher} publishes {SITE_CONFIG.appName}, an unofficial client for{' '}
      <ExternalLink href={SITE_CONFIG.homeboxUrl} className="text-link">
        HomeBox
      </ExternalLink>
      , a self-hosted home inventory server. It is not affiliated with or endorsed by the HomeBox project.
    </p>

    <LegalSection icon={Lock} title="1. We collect nothing">
      <p>
        {SITE_CONFIG.publisher} runs no server for this app. We don&apos;t collect, store or see your
        inventory, your photos, your sign-in details or how you use the app. The app has{' '}
        <strong>no analytics, no advertising, no tracking and no crash reporting</strong>. We don&apos;t
        sell or share any data, because we never receive any.
      </p>
    </LegalSection>

    <LegalSection icon={Server} title="2. The app talks only to your HomeBox server">
      <p>
        The mobile app sends requests <strong>only</strong> to the HomeBox server address you enter on the
        Connect screen, along with any extra request headers you add for that server. You run that server,
        so your data stays under your control.
      </p>
    </LegalSection>

    <LegalSection icon={KeyRound} title="3. Sign-in details and the device Keychain">
      <ul className="list-disc space-y-1.5 ps-5">
        <li>
          <strong>Email and password:</strong> your password is sent once to your HomeBox server to sign
          in. The app never stores it. Your email address is kept on the device so the Connect screen can
          fill it in next time.
        </li>
        <li>
          <strong>Tokens, API keys and extra request headers:</strong> these are stored on the device in
          the iOS Keychain, or the Android Keystore on Android. They are used only to sign requests to your
          server.
        </li>
      </ul>
    </LegalSection>

    <LegalSection icon={HardDrive} title="4. Data kept on your device">
      <p>
        To work offline, the app keeps your settings, a cached copy of your items, locations, tags,
        maintenance and statistics, item photos it has shown you, and changes still waiting to be sent.
        This data stays in the app&apos;s storage on your device.
      </p>
    </LegalSection>

    <LegalSection icon={Camera} title="5. Camera, photos and local network">
      <p>
        The app uses the camera only when you take a photo of an item. It uses the photo picker only when
        you choose an existing photo to attach to an item, and the photo library only when you save an
        item photo. Barcodes and asset IDs are typed in, not read by the camera. Photos go only to your own
        HomeBox server. On iOS, the app asks for local network access so it can reach a HomeBox server in
        your home.
      </p>
    </LegalSection>

    <LegalSection icon={Sparkles} title="6. AI assist is not in the mobile app">
      <p>The mobile app has no AI features and sends nothing to any AI service.</p>
    </LegalSection>

    <LegalSection icon={Trash2} title="7. How to delete your data">
      <ul className="list-disc space-y-1.5 ps-5">
        <li>
          <strong>On your server:</strong> you can delete items, photos or your whole account on your
          HomeBox server. In the app, go to Settings, then Account, then Delete account to delete your
          account on that server.
        </li>
        <li>
          <strong>On your device:</strong> Sign out removes the stored sign-in token. In the app,
          Settings, then Reset local data erases the offline cache, the queue of unsent changes, the
          settings and the stored sign-in details. Deleting the app removes its offline cache and
          settings. iOS can keep Keychain items after an app is deleted, so use Reset local data before
          you delete the app to remove the stored sign-in details too.
        </li>
      </ul>
    </LegalSection>

    <LegalSection icon={Users} title="8. Children">
      <p>The app is not aimed at children and collects no data from anyone.</p>
    </LegalSection>

    <LegalSection icon={History} title="9. Changes to this policy">
      <p>If this policy changes, we&apos;ll post the new version on this page with a new date.</p>
    </LegalSection>

    <LegalSection icon={Mail} title="10. Contact">
      <p>
        For privacy questions, open an issue on{' '}
        <ExternalLink href={`${SITE_CONFIG.issuesRepoUrl}/issues`} className="text-link">
          GitHub
        </ExternalLink>
        . The{' '}
        <SiteLink to="/support" onNavigate={onNavigate} className="text-link">
          Support page
        </SiteLink>{' '}
        has help with connecting.
      </p>
    </LegalSection>
  </LegalPage>
);
