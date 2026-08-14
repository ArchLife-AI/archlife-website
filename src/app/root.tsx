import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';

import { Analytics } from '@vercel/analytics/react';
import '@fontsource/inter/latin-300.css';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import '@fontsource/cormorant-garamond/latin-300.css';
import '@fontsource/cormorant-garamond/latin-400.css';
import '@fontsource/cormorant-garamond/latin-300-italic.css';
import '@fontsource/cormorant-garamond/latin-400-italic.css';
import './global.css';

const PUBLIC_CANONICAL_PATHS = [
  '/',
  '/about',
  '/articles',
  '/book',
  '/canon',
  '/contact',
  '/dental-labs',
  '/healthcare',
  '/institutional-mirror',
  '/medevolv',
  '/sensorium',
  '/solaeimara',
];

function useCanonicalHref() {
  const pathname =
    typeof window !== 'undefined' ? window.location.pathname : '';
  const normalizedPath =
    pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  if (!PUBLIC_CANONICAL_PATHS.includes(normalizedPath)) return null;
  return `https://archlife.in${normalizedPath === '/' ? '/' : normalizedPath}`;
}

export function Layout({ children }: { children: React.ReactNode }) {
  const canonicalHref = useCanonicalHref();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        {canonicalHref && <link rel="canonical" href={canonicalHref} />}
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <Analytics />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}