import React from 'react';
import { Globe, Network, Wifi } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export interface ConnectionMethod {
  id: string;
  badge: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  whenToUse: string;
  prerequisites: string[];
  steps: Array<{ title: string; detail: React.ReactNode }>;
  exampleUrls: string[];
  troubleshooting: string[];
}

const Code: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <code className="font-mono text-[0.92em]">{children}</code>
);

export const METHODS: ConnectionMethod[] = [
  {
    id: 'remote-url',
    badge: 'Option 1 · Anywhere',
    title: 'Remote address (HTTPS reverse proxy)',
    shortTitle: 'Remote address',
    subtitle: 'Connect from anywhere, on mobile data or Wi-Fi, with your own domain and TLS.',
    icon: Globe,
    whenToUse:
      'Best when you want to reach HomeBox away from home without turning on a VPN on your phone.',
    prerequisites: [
      'A domain or subdomain (for example homebox.yourdomain.com) that points to your server.',
      'A reverse proxy such as Caddy, Traefik or nginx that serves HTTPS in front of HomeBox.',
      'Your HomeBox email and password, or an API key.',
    ],
    steps: [
      {
        title: 'Put HomeBox behind an HTTPS reverse proxy',
        detail: (
          <>
            Set up <strong>Caddy</strong> (it gets a Let&apos;s Encrypt certificate for you),{' '}
            <strong>Traefik</strong> or <strong>nginx</strong> to forward HTTPS traffic to your HomeBox
            container, which listens on port <Code>7745</Code> by default.
          </>
        ),
      },
      {
        title: 'Open the address in a browser first',
        detail: (
          <>
            The Server URL is the same address you use to open HomeBox in a browser. If the HomeBox
            sign-in page loads in your phone&apos;s browser, the app can reach it too.
          </>
        ),
      },
      {
        title: `Connect in ${SITE_CONFIG.appName}`,
        detail: (
          <>
            On the <strong>Connect to HomeBox</strong> screen, enter your <Code>https://</Code> address as
            the <strong>Server URL</strong>. Under <strong>Sign in with</strong>, choose{' '}
            <strong>Email and password</strong>, <strong>Bearer token</strong> or <strong>API key</strong>,
            then tap <strong>Connect</strong>.
          </>
        ),
      },
      {
        title: 'Behind Cloudflare Access or another access gate?',
        detail: (
          <>
            Under <strong>Proxy headers</strong>, tap <strong>Add header</strong> and add your service
            token headers, for example <Code>CF-Access-Client-Id</Code> and{' '}
            <Code>CF-Access-Client-Secret</Code>.
          </>
        ),
      },
    ],
    exampleUrls: ['https://homebox.yourdomain.com', 'https://inventory.yourdomain.com'],
    troubleshooting: [
      'Sign-in rejected: check your email and password, or create a fresh API key. If you use Cloudflare Access, check that both service token headers are set.',
      'Certificate errors: your phone needs a trusted HTTPS certificate, such as one from Let’s Encrypt. A self-signed certificate fails unless its root CA is installed and trusted on the device.',
      'Blocked by the proxy: make sure the proxy forwards every path under /api/v1 to HomeBox.',
    ],
  },
  {
    id: 'local-network',
    badge: 'Option 2 · Home Wi-Fi',
    title: 'Same network (LAN IP address)',
    shortTitle: 'Same network',
    subtitle: 'Connect over your home or office Wi-Fi without putting HomeBox on the internet.',
    icon: Wifi,
    whenToUse:
      'Best when you only use the app at home and keep HomeBox on your local network.',
    prerequisites: [
      'Your phone and your HomeBox server are on the same Wi-Fi or LAN.',
      'The server’s local IP address (for example 192.168.1.50) and the HomeBox port (7745 by default).',
      'A host firewall that allows TCP traffic to that port from your LAN.',
    ],
    steps: [
      {
        title: 'Don’t enter "localhost" on your phone',
        detail: (
          <>
            On a phone, <Code>localhost</Code> or <Code>127.0.0.1</Code> means <strong>the phone
            itself</strong>, not your computer, NAS or home server. Use the server&apos;s LAN IP address
            or its <Code>.local</Code> name instead.
          </>
        ),
      },
      {
        title: 'Find the server’s LAN IP address and port',
        detail: (
          <>
            Check your router&apos;s list of connected devices, or run <Code>ipconfig getifaddr en0</Code>{' '}
            (macOS), <Code>hostname -I</Code> (Linux) or <Code>ipconfig</Code> (Windows). HomeBox listens
            on port <Code>7745</Code> unless you mapped it to another port in Docker.
          </>
        ),
      },
      {
        title: 'Check the Docker port binding',
        detail: (
          <>
            Publish the port as <Code>7745:7745</Code>, not <Code>127.0.0.1:7745:7745</Code>, which
            blocks every other device on your network.
          </>
        ),
      },
      {
        title: 'Enter the address and allow local network access',
        detail: (
          <>
            Enter <Code>http://192.168.x.x:7745</Code> as the Server URL. The app warns that{' '}
            <Code>http</Code> sends your password and token unencrypted, which is expected on a home
            network. On iOS, tap <strong>Allow</strong> when asked to find devices on your local network.
          </>
        ),
      },
    ],
    exampleUrls: ['http://192.168.1.50:7745', 'http://homebox.local:7745'],
    troubleshooting: [
      'Works only on the same Wi-Fi: on mobile data or a guest network the LAN address times out.',
      `Local network access denied on iOS: open Settings, then Privacy & Security, then Local Network, and turn on ${SITE_CONFIG.appName}.`,
      'Address changed after a reboot: give the server a fixed DHCP reservation in your router.',
    ],
  },
  {
    id: 'tailscale',
    badge: 'Option 3 · Private mesh VPN',
    title: 'Tailscale (nothing exposed to the internet)',
    shortTitle: 'Tailscale',
    subtitle: 'Reach HomeBox from anywhere over an encrypted WireGuard tailnet, with no open router ports.',
    icon: Network,
    whenToUse:
      'Best when you want remote access without opening ports on your router or running a public domain.',
    prerequisites: [
      'A Tailscale account (the free personal plan works).',
      'Tailscale on the machine that runs HomeBox, or a subnet router on your LAN.',
      'The Tailscale app on your phone, signed in to the same tailnet.',
    ],
    steps: [
      {
        title: 'Install Tailscale on the server and your phone',
        detail: (
          <>
            Install Tailscale on the HomeBox host and the <strong>Tailscale</strong> app on your phone, then
            sign in to the <strong>same tailnet</strong> on both.
          </>
        ),
      },
      {
        title: 'Find the server’s Tailscale address',
        detail: (
          <>
            In the Tailscale app or admin console, copy the server&apos;s <Code>100.x.y.z</Code> address or
            its MagicDNS name, such as <Code>homebox-host.tail1234.ts.net</Code>.
          </>
        ),
      },
      {
        title: 'Keep Tailscale connected',
        detail: <>Make sure the Tailscale VPN is connected on your phone whenever you sync with HomeBox.</>,
      },
      {
        title: 'Enter the Tailscale address with the HomeBox port',
        detail: (
          <>
            Enter <Code>http://100.x.y.z:7745</Code> or <Code>http://homebox-host:7745</Code> as the Server
            URL. If you use <Code>tailscale serve</Code> for HTTPS, enter your <Code>https://...ts.net</Code>{' '}
            address without <Code>:7745</Code>.
          </>
        ),
      },
    ],
    exampleUrls: ['http://100.101.102.103:7745', 'http://homebox-host.tail1234.ts.net:7745'],
    troubleshooting: [
      'Timeout away from home: check that Tailscale is connected on both the phone and the server.',
      'Wrong tailnet or ACLs: both devices must appear in the same admin console, and your ACLs must allow TCP port 7745.',
      'Server bound to localhost only: HomeBox must listen on 0.0.0.0:7745 or the Tailscale interface, not 127.0.0.1.',
    ],
  },
];

export const COMMON_ERRORS = [
  {
    title: 'Couldn’t connect: timeout or server unreachable',
    detail:
      'Your phone can’t reach that host and port. Check that you’re on the same Wi-Fi (for a LAN address), that Tailscale is connected (for 100.x.y.z), that HomeBox is running, and that no firewall blocks the port.',
  },
  {
    title: 'Sign-in rejected (401 or 403)',
    detail:
      'HomeBox rejected the email and password, token or API key, or a proxy in front of HomeBox blocked the request. Try the same sign-in in a browser, or add the Cloudflare Access headers under Proxy headers.',
  },
  {
    title: 'Wrong port',
    detail:
      'A direct connection usually uses port 7745 (http://192.168.1.50:7745). A reverse proxy over HTTPS uses the standard port 443, so leave :7745 out of https://homebox.yourdomain.com.',
  },
  {
    title: 'SSL or certificate error',
    detail:
      'Phones block untrusted and self-signed HTTPS certificates. Use a valid certificate from Let’s Encrypt (through Caddy, Traefik or nginx), or install and trust your private root CA on the device.',
  },
] as const;
