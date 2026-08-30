import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

const concepts = [
  {
    name: "Operational Trust",
    desc: "The ability of humans and institutions to rely on systems under uncertainty, overload, and imperfect information.",
  },
  {
    name: "Hidden Strain",
    desc: "Pressure accumulating beneath standard operational visibility.",
  },
  {
    name: "Ethical Debt",
    desc: "Unresolved institutional harm generated through repeated operational compromise.",
  },
  {
    name: "Governance Drift",
    desc: "The gradual mutation of institutional behaviour under sustained pressure.",
  },
  {
    name: "Reflective Awareness",
    desc: "The capacity of systems to perceive their own degradation before collapse becomes irreversible.",
  },
];

export function ConceptsSection() {
  return (
    <section
      style={{
        position: "relative",
        zIndex: 1,
        padding: "clamp(5rem,10vw,8rem) clamp(1.5rem,8vw,8rem)",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <Reveal>
        <SectionLabel>Core Concepts</SectionLabel>
      </Reveal>

      <Reveal delay={60}>
        <p
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
            fontWeight: 300,
            color: "var(--ink)",
            marginBottom: "4rem",
            maxWidth: 540,
            lineHeight: 1.2,
            marginTop: "0.5rem",
          }}
        >
          Five forces at work inside every system under strain.
        </p>
      </Reveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
          borderTop: "1px solid rgba(200,139,90,0.1)",
        }}
        className="concepts-grid"
      >
        {concepts.map((c, i) => (
          <Reveal key={c.name} delay={i * 55 + 80}>
            <div
              className={`concept-card${i === concepts.length - 1 ? " concept-last" : ""}`}
              style={{
                padding: "2.4rem 1.8rem 2.4rem 0",
                borderRight: i === concepts.length - 1 ? "none" : "1px solid rgba(200,139,90,0.05)",
                transition: "background 0.4s ease",
                cursor: "default",
                height: "100%",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(200,139,90,0.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              <div
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "0.58rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--gold-deep)",
                  marginBottom: "1.1rem",
                }}
              >
                0{i + 1}
              </div>
              <div
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "1.3rem",
                  fontWeight: 300,
                  color: "var(--ink)",
                  marginBottom: "0.8rem",
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                }}
              >
                {c.name}
              </div>
              <div
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "0.76rem",
                  lineHeight: 1.85,
                  color: "rgba(156,163,175,0.6)",
                  fontWeight: 300,
                }}
              >
                {c.desc}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
