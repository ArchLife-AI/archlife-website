import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export function MirrorSection() {
  const fragments = [
    {
      label: "Healthcare overload",
      desc: "Clinics running on reactive throughput. Invisible workforce strain. Fragmented patient pathways.",
    },
    {
      label: "Disconnected workflows",
      desc: "Coordination gaps that compound across handoffs, eroding institutional coherence silently.",
    },
    {
      label: "Invisible labor",
      desc: "Human effort absorbed into operational noise — unmeasured, unrecognized, unsustained.",
    },
    {
      label: "Operational congestion",
      desc: "Information velocity without signal clarity. Busyness mistaken for operational health.",
    },
    {
      label: "Fragmented communication",
      desc: "Multi-system organizations speaking in parallel rather than in coordination.",
    },
  ];

  return (
    <section
      id="mirror"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "clamp(6rem,14vw,12rem) clamp(1.5rem,8vw,8rem)",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <Reveal>
        <SectionLabel>Institutional Mirror</SectionLabel>
      </Reveal>

      <Reveal delay={80}>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "#F3EFE7",
            maxWidth: 720,
            marginBottom: "5rem",
            letterSpacing: "-0.01em",
          }}
        >
          Modern systems optimize{" "}
          <em style={{ color: "#C88B5A", fontStyle: "italic" }}>reaction,</em>
          <br />
          not reflection.
        </h2>
      </Reveal>

      {/* Flowing fragment list — no boxes */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {fragments.map((item, i) => (
          <Reveal key={item.label} delay={i * 90}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.4fr",
                gap: "3rem",
                padding: "2.8rem 0",
                borderTop: "1px solid rgba(200,139,90,0.1)",
                transition: "border-color 0.5s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderTopColor = "rgba(200,139,90,0.3)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderTopColor = "rgba(200,139,90,0.1)")
              }
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                  fontWeight: 300,
                  color: "#F3EFE7",
                  lineHeight: 1.3,
                  letterSpacing: "0.01em",
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  lineHeight: 1.85,
                  color: "#9CA3AF",
                  fontWeight: 300,
                  alignSelf: "center",
                }}
              >
                {item.desc}
              </div>
            </div>
          </Reveal>
        ))}

        {/* Resolution row */}
        <Reveal delay={520}>
          <div
            style={{
              padding: "2.8rem 0",
              borderTop: "1px solid rgba(200,139,90,0.28)",
              borderBottom: "1px solid rgba(200,139,90,0.1)",
            }}
          >
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                fontWeight: 300,
                color: "#C88B5A",
                fontStyle: "italic",
              }}
            >
              Reflexive reconstruction
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={620}>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)",
            lineHeight: 1.85,
            color: "rgba(156,163,175,0.75)",
            maxWidth: 640,
            marginTop: "5rem",
            fontStyle: "italic",
            fontWeight: 300,
          }}
        >
          "Most modern systems accelerate reaction, fragment attention, and
          obscure operational reality. ArchLife explores infrastructure capable
          of reflection, coordination, and humane intelligence."
        </p>
      </Reveal>
    </section>
  );
}
