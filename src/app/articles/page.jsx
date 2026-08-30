import { PageShell } from "@/components/PageShell/PageShell";
import { ResearchSection } from "@/components/ResearchSection/ResearchSection";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export const meta = () => [
  { title: "Articles | ArchLife" },
  {
    name: "description",
    content:
      "ArchLife articles, research notes, and long-form systems writing — including the Healthcare AI governance publications of the AI Collective Delhi chapter.",
  },
];

const publications = [
  {
    title: "A Standing Capability",
    sub: "What DHR's draft National Health Research Policy 2026 actually says about healthcare AI — and what a SHALL is not",
    href: "/articles/nhrp-draft",
    meta: "Publication · August 2026",
  },
  {
    title: "The Four Gaps in India's Healthcare AI Governance",
    sub: "A structured gap analysis of India's governance architecture against the global state of the art",
    href: "/articles/four-gaps",
    meta: "Publication v1.0 · August 2026",
  },
  {
    title: "The Delhi Declaration on Healthcare AI Governance",
    sub: "The founding position paper of the AI Collective Delhi Healthcare Chapter — second edition",
    href: "/articles/delhi-declaration",
    meta: "Second Edition · August 2026",
  },
];

export default function ArticlesPage() {
  return (
    <PageShell>
      <section
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 900,
          margin: "0 auto",
          padding: "clamp(4rem,10vw,8rem) clamp(1.5rem,6vw,5rem)",
        }}
      >
        <Reveal>
          <SectionLabel>Publications</SectionLabel>
        </Reveal>
        <Reveal delay={100}>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)",
              lineHeight: 1.4,
              color: "var(--ink)",
              fontWeight: 300,
              margin: "0 0 2.5rem",
            }}
          >
            Healthcare AI{" "}
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              governance.
            </em>
          </h2>
        </Reveal>
        <div>
          {publications.map((p, i) => (
            <Reveal key={p.href} delay={i * 90}>
              <a
                href={p.href}
                style={{
                  display: "block",
                  padding: "2.2rem 0",
                  borderTop: "1px solid rgba(200,139,90,0.08)",
                  textDecoration: "none",
                  transition: "background 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(200,139,90,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--gold-deep)",
                    marginBottom: "0.7rem",
                  }}
                >
                  {p.meta}
                </div>
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "1.5rem",
                    fontWeight: 300,
                    color: "var(--ink)",
                    lineHeight: 1.25,
                    marginBottom: "0.5rem",
                  }}
                >
                  {p.title}
                </div>
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "1.05rem",
                    fontStyle: "italic",
                    fontWeight: 300,
                    color: "rgba(243,239,231,0.55)",
                    lineHeight: 1.5,
                  }}
                >
                  {p.sub}
                </div>
                <div
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginTop: "1rem",
                  }}
                >
                  Read →
                </div>
              </a>
            </Reveal>
          ))}
          <div style={{ borderTop: "1px solid rgba(200,139,90,0.08)" }} />
        </div>
        <Reveal delay={200}>
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: "0.78rem",
              lineHeight: 1.85,
              color: "rgba(156,163,175,0.55)",
              fontWeight: 300,
              margin: "3rem 0 0",
            }}
          >
            Published by Dr. Ishaan Wadhwa, Healthcare Vertical Lead, AI
            Collective Delhi. The full working analysis — the six-layer audit
            against thirteen global frameworks — is available to collaborators
            on request. There is no newsletter form on this site. If you want
            the Four Gaps working analysis, write to{" "}
            <a
              href="mailto:hello@archlife.in?subject=Four%20Gaps"
              style={{ color: "rgba(200,139,90,0.85)", textDecoration: "none" }}
            >
              hello@archlife.in
            </a>{" "}
            with the subject Four Gaps.
          </p>
        </Reveal>
      </section>
      <ResearchSection />
    </PageShell>
  );
}
