import { PageShell } from "@/components/PageShell/PageShell";
import { ResearchSection } from "@/components/ResearchSection/ResearchSection";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export const meta = () => [
  { title: "Articles | ArchLife" },
  {
    name: "description",
    content:
      "ArchLife articles, research notes, and long-form systems writing. Medium links will be added here.",
  },
];

export default function ArticlesPage() {
  return (
    <PageShell>
      <ResearchSection />
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
          <SectionLabel>External Archive</SectionLabel>
        </Reveal>
        <Reveal delay={100}>
          <p
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)",
              lineHeight: 1.4,
              color: "var(--ink)",
              fontWeight: 300,
              margin: "2rem 0 0",
            }}
          >
            Medium essays and research archive links will be connected here.
          </p>
        </Reveal>
      </section>
    </PageShell>
  );
}
