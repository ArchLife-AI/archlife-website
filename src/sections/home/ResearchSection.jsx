import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

const pillars = [
  {
    name: "Governance Systems",
    desc: "Operational governance frameworks for AI-mediated institutions — where oversight meets real-time uncertainty.",
  },
  {
    name: "Reflective Simulation",
    desc: "Modeling overload, adaptation, and hidden strain in environments before they manifest as visible failure.",
  },
  {
    name: "Human-Centered Infrastructure",
    desc: "Systems that preserve dignity, awareness, and coordination under sustained institutional pressure.",
  },
];

export function ResearchSection() {
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
        <SectionLabel>Research</SectionLabel>
      </Reveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "0",
          borderTop: "1px solid rgba(200,139,90,0.1)",
          marginTop: "2.5rem",
        }}
      >
        {pillars.map((p, i) => (
          <Reveal key={p.name} delay={i * 70 + 80}>
            <div
              style={{
                padding: "3rem 2.5rem 3rem 0",
                borderRight: i === pillars.length - 1 ? "none" : "1px solid rgba(200,139,90,0.05)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "0.58rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--gold-deep)",
                  marginBottom: "1.2rem",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "1.4rem",
                  fontWeight: 300,
                  color: "var(--ink)",
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                }}
              >
                {p.name}
              </div>
              <div
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "0.78rem",
                  lineHeight: 1.85,
                  color: "rgba(156,163,175,0.55)",
                  fontWeight: 300,
                }}
              >
                {p.desc}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={300}>
        <a
          href="/articles"
          style={{
            display: "inline-block",
            marginTop: "2.4rem",
            fontFamily: "var(--sans)",
            fontSize: "0.62rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(200,139,90,0.78)",
            textDecoration: "none",
            borderBottom: "1px solid rgba(200,139,90,0.28)",
            paddingBottom: 3,
          }}
        >
          Writing
        </a>
      </Reveal>
    </section>
  );
}
