import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";
import { MirrorMockup } from "./MirrorMockup";

export function MirrorSection() {
  return (
    <section
      style={{
        position: "relative",
        zIndex: 1,
        padding: "clamp(6rem,12vw,10rem) clamp(1.5rem,8vw,8rem)",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <Reveal>
        <SectionLabel>Flagship Prototype</SectionLabel>
      </Reveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "5rem",
          alignItems: "start",
          marginBottom: "5rem",
        }}
      >
        <div>
          <Reveal delay={60}>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "var(--ink)",
                letterSpacing: "-0.01em",
                marginBottom: "2rem",
              }}
            >
              Institutions should be capable of noticing themselves{" "}
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
                deteriorating.
              </em>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: "0.86rem",
                lineHeight: 1.95,
                color: "var(--muted)",
                fontWeight: 300,
                marginBottom: "1.6rem",
              }}
            >
              Institutional Mirror is a systemic governance simulator for
              clinical AI systems. It explores how overload, trust,
              escalation, and governance drift can interact under strain.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: "0.82rem",
                lineHeight: 1.85,
                color: "rgba(156,163,175,0.5)",
                fontWeight: 300,
                marginBottom: "2.5rem",
              }}
            >
              This live prototype uses synthetic scenario data for reflective
              exploration. It is not a clinical decision system, monitoring
              product, or source of live hospital performance data.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <a
              href="/institutional-mirror"
              style={{
                fontFamily: "var(--sans)",
                fontSize: "0.68rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(156,163,175,0.55)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(156,163,175,0.15)",
                paddingBottom: "2px",
                transition: "all 0.35s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--gold)";
                e.currentTarget.style.borderBottomColor =
                  "rgba(200,139,90,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(156,163,175,0.55)";
                e.currentTarget.style.borderBottomColor =
                  "rgba(156,163,175,0.15)";
              }}
            >
              Explore Institutional Mirror
            </a>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <MirrorMockup />
        </Reveal>
      </div>
    </section>
  );
}
