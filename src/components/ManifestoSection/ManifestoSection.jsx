import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export function ManifestoSection() {
  return (
    <section
      id="manifesto"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "clamp(7rem,16vw,14rem) clamp(1.5rem,6vw,5rem)",
        textAlign: "center",
      }}
    >
      <Reveal>
        <SectionLabel>Manifesto</SectionLabel>
      </Reveal>

      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <Reveal delay={150}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.9rem, 3.5vw, 2.7rem)",
              fontWeight: 300,
              lineHeight: 1.85,
              color: "#F3EFE7",
              marginBottom: "3rem",
              fontStyle: "italic",
            }}
          >
            "The next generation of infrastructure cannot merely optimize
            intelligence. It must deepen reflection, protect human rhythm,
            restore operational coherence, and preserve meaning within
            increasingly complex systems."
          </p>
        </Reveal>

        <Reveal delay={350}>
          <div
            style={{
              width: 40,
              height: 1,
              background: "rgba(200,139,90,0.4)",
              margin: "0 auto 2.5rem",
            }}
          />
        </Reveal>

        <Reveal delay={450}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "#C88B5A",
              fontStyle: "italic",
            }}
          >
            "The future of intelligence
            <br />
            must also become the future of care."
          </p>
        </Reveal>

        <Reveal delay={550}>
          <a
            href="/manifesto"
            style={{
              fontFamily: "var(--sans)",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--gold)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(200,139,90,0.35)",
              paddingBottom: 3,
              display: "inline-block",
              marginTop: "0.5rem",
              transition: "color 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#F3EFE7";
              e.currentTarget.style.borderBottomColor =
                "rgba(200,139,90,0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--gold)";
              e.currentTarget.style.borderBottomColor =
                "rgba(200,139,90,0.35)";
            }}
          >
            Read the full manifesto →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
