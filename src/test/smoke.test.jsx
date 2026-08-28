import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Nav } from '@/components/Navigation/Navigation';
import { Footer } from '@/components/Footer/Footer';
import { HealthcareSection } from '@/components/HealthcareSection/HealthcareSection';

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '../..');

const INTERNAL_ROUTES = new Set([
  '/',
  '/about',
  '/articles',
  '/articles/four-gaps',
  '/articles/delhi-declaration',
  '/articles/limits-of-optimization',
  '/articles/institutional-memory',
  '/articles/notice-hold-heal-release',
  '/articles/rhythm-of-infrastructure',
  '/articles/intelligence-as-care',
  '/articles/fragmented-clinic',
  '/book',
  '/canon',
  '/canon/architecture-of-return',
  '/canon/ascent-without-feedback',
  '/canon/before-notice',
  '/canon/dialectical-self',
  '/canon/elder-brother-problem',
  '/canon/icarus',
  '/canon/labour-of-becoming-real',
  '/canon/machine-constitution',
  '/canon/spirituality-as-an-abstract-boat',
  '/canon/ubermensch-and-aniruddha',
  '/canon/when-intelligence-becomes-a-utility',
  '/contact',
  '/dental-labs',
  '/healthcare',
  '/institutional-mirror',
  '/manthan',
  '/manifesto',
  '/medevolv',
  '/sensorium',
  '/solaeimara',
]);

const EXTERNAL_DOMAINS = new Set([
  'mirror.archlife.in',
  'thesensorium.archlife.in',
  'manthan.archlife.in',
  'medevolv.in',
  'www.medevolv.in',
  'linkedin.com',
]);

describe('navigation links', () => {
  it('renders MANthan and The Sensorium links', () => {
    render(<Nav />);
    const manthanLinks = screen.getAllByRole('link', { name: /MANthan/ });
    expect(manthanLinks.length).toBeGreaterThan(0);
    for (const link of manthanLinks) {
      expect(link.getAttribute('href')).toBe('/manthan');
    }
    const sensoriumLinks = screen.getAllByRole('link', { name: /The Sensorium/ });
    expect(sensoriumLinks.length).toBeGreaterThan(0);
    for (const link of sensoriumLinks) {
      expect(link.getAttribute('href')).toBe('/sensorium');
    }
  });

  it('has no dead internal links in nav or footer', () => {
    render(
      <>
        <Nav />
        <Footer />
      </>
    );
    for (const link of screen.getAllByRole('link')) {
      const href = link.getAttribute('href') || '';
      if (href.startsWith('#')) continue;
      if (href.startsWith('mailto:')) continue;
      if (href.startsWith('http')) {
        const host = new URL(href).host;
        expect(
          [...EXTERNAL_DOMAINS].some((d) => host === d || host.endsWith('.' + d)),
          'external link host not allowed: ' + href
        ).toBe(true);
      } else {
        const path = href.split('#')[0] || '/';
        expect(INTERNAL_ROUTES.has(path), 'dead internal link: ' + href).toBe(true);
      }
    }
  });

  it('has no external asset URLs in nav/footer markup', () => {
    render(
      <>
        <Nav />
        <Footer />
      </>
    );
    const html = document.body.innerHTML;
    expect(html).not.toMatch(/fontawesome|ka-p\.|fonts\.googleapis|wallpapers\.com/);
  });

  it('prints the incorporated CIN and not pending', () => {
    render(<Footer />);
    expect(screen.getByText(/CIN:\s*U62020DC2026PTC472434/i)).toBeTruthy();
    expect(document.body.textContent).not.toMatch(/CIN:\s*pending/i);
  });
});

describe('healthcare CTA', () => {
  it('points Institutional Mirror at mirror.archlife.in', () => {
    if (typeof globalThis.IntersectionObserver === 'undefined') {
      globalThis.IntersectionObserver = class {
        observe() {}
        unobserve() {}
        disconnect() {}
      };
    }
    render(<HealthcareSection />);
    const mirrorLinks = screen
      .getAllByRole('link')
      .filter((link) => (link.getAttribute('href') || '').includes('mirror.archlife.in'));
    expect(mirrorLinks.length).toBeGreaterThan(0);
    for (const link of mirrorLinks) {
      expect(link.getAttribute('href')).toBe('https://mirror.archlife.in');
    }
    expect(document.body.innerHTML).not.toMatch(/hospital-simulator-eta\.vercel\.app/);
  });
});

describe('estate redirects and landings', () => {
  it('redirects /thesensorium to the Sensorium runtime', () => {
    const vercel = JSON.parse(readFileSync(join(repoRoot, 'vercel.json'), 'utf8'));
    const destinations = (vercel.redirects || [])
      .filter((rule) => rule.source === '/thesensorium' || rule.source === '/thesensorium/')
      .map((rule) => rule.destination);
    expect(destinations.length).toBeGreaterThan(0);
    for (const destination of destinations) {
      expect(destination).toBe('https://thesensorium.archlife.in');
    }
  });

  it('keeps /manthan as a landing rewrite, not a paywall', () => {
    const vercel = JSON.parse(readFileSync(join(repoRoot, 'vercel.json'), 'utf8'));
    const manthanRedirects = (vercel.redirects || []).filter((rule) =>
      String(rule.source).startsWith('/manthan')
    );
    expect(manthanRedirects).toEqual([]);
    expect(vercel.rewrites.some((rule) => rule.source === '/manthan')).toBe(true);
    const manthanPage = readFileSync(join(repoRoot, 'src/app/manthan/page.jsx'), 'utf8');
    expect(manthanPage).toMatch(/never pays/);
    expect(manthanPage).toMatch('https://manthan.archlife.in');
  });

  it('keeps prefers-reduced-motion', () => {
    const css = readFileSync(join(repoRoot, 'src/app/global.css'), 'utf8');
    expect(css).toMatch(/prefers-reduced-motion:\s*reduce/);
    const smoothScroll = readFileSync(
      join(repoRoot, 'src/components/SmoothScroll/SmoothScroll.jsx'),
      'utf8'
    );
    expect(smoothScroll).toMatch(/prefers-reduced-motion:\s*reduce/);
    expect(smoothScroll).toMatch(/if \(isTouchPrimary\) return;/);
    expect(smoothScroll).not.toMatch(/lenis\.stop\(/);
  });
});

describe('route modules render', () => {
  it('every canonical route has a default export', async () => {
    for (const path of INTERNAL_ROUTES) {
      const routeModule = await import('/src/app' + (path === '/' ? '' : path) + '/page.jsx');
      expect(routeModule.default, 'route ' + path + ' has a default export').toBeTruthy();
    }
  });
});
