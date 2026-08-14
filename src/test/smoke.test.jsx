import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Nav } from '@/components/Navigation/Navigation';
import { Footer } from '@/components/Footer/Footer';

const INTERNAL_ROUTES = new Set([
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
      expect(link.getAttribute('href')).toBe('https://manthan.archlife.in');
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
});

describe('route modules render', () => {
  it('every canonical route has a default export', async () => {
    for (const path of INTERNAL_ROUTES) {
      const routeModule = await import('/src/app' + (path === '/' ? '' : path) + '/page.jsx');
      expect(routeModule.default, 'route ' + path + ' has a default export').toBeTruthy();
    }
  });
});
