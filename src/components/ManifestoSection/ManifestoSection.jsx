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
      </div>
    </section>
  );
}
