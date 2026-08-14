# Flow Asset Drop-In Lane

Generated assets from Google Flow (flow.google) land here, get compressed,
and move into public/ as drop-in replacements.

## Slots

- **logo.webp** — gold-on-dark ArchLife mark. Replaces public/logo.webp (currently 6.7KB).
  Target: square, works at 34px nav size and favicon.
- **icarus.webp** — hero tapestry in the Icarus vein but original. Replaces public/icarus.webp.
  Target: 1920w max, WebP, moody dark tones so the gold overlay text stays legible.
- **section-glyphs/** — optional small decorative glyphs per section (Hero/Origin/Concepts/Mirror/Canon/Research/Philosophy).
  Only wired if they earn their weight; the site ships without them.

## Workflow

1. Generate in Flow, download, drop files here.
2. Agent compresses (sharp-cli / npx sharp) and moves to public/.
3. Update the component reference, rebuild, deploy.

Nothing in the site blocks on this lane. It is an upgrade path, not a dependency.
