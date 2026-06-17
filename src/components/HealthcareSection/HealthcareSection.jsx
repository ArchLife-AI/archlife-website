import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export function HealthcareSection() {
  const threads = [
    {
      n: "Operational Visibility",
      d: "Mapping the invisible flows of clinical coordination — before fragmentation becomes catastrophic.",
    },
    {
      n: "Workforce Intelligence",
      d: "Understanding systemic strain before it becomes invisible suffering embedded in institutional memory.",
    },
    {
      n: "Workflow Coordination",
      d: "Reconnecting disconnected handoffs across institutional systems through reflective infrastructure.",
    },
    {
      n: "AI-Enabled Infrastructure",
      d: "Intelligence that observes and supports human systems, rather than extracting from them.",
    },
  ];

  const credentials = [
    "Delhi AI Collective",
    "AI Healthcare Vertical",
    "BITS Pilani — Executive MBA in AI",
    "Masters' Union Ecosystem",
    "Medoc Health",
  ];

  return (
    <section
      id="healthcare"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "clamp(6rem,14vw,12rem) clamp(1.5rem,8vw,8rem)",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <Reveal>
        <SectionLabel>Healthcare Intelligence</SectionLabel>
      </Reveal>

      <Reveal delay={80}>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)",
            fontWeight: 300,
            color: "#F3EFE7",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            maxWidth: 700,
            marginBottom: "2rem",
          }}
        >
          Operational visibility
          <br />
          within fragmented
          <br />
          <em style={{ color: "#C88B5A", fontStyle: "italic" }}>ecosystems.</em>
        </h2>
      </Reveal>

      <Reveal delay={160}>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9rem",
            lineHeight: 1.95,
            color: "#9CA3AF",
            fontWeight: 300,
            maxWidth: 560,
            marginBottom: "6rem",
            fontStyle: "italic",
          }}
        >
          Beginning with dental coordination systems, workforce transformation,
          and AI-enabled operational infrastructure.
        </p>
      </Reveal>

      <Reveal delay={220}>
        <a
          href="/dental-labs"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.72rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#F3EFE7",
            border: "1px solid rgba(200,139,90,0.4)",
            borderRadius: "2rem",
            padding: "0.9rem 2rem",
            textDecoration: "none",
            background: "rgba(200,139,90,0.06)",
            backdropFilter: "blur(8px)",
            display: "inline-block",
            marginBottom: "5rem",
          }}
        >
          View Dental Lab Intelligence
        </a>
      </Reveal>

      {/* Flowing thread list */}
      <div>
        {threads.map((item, i) => (
          <Reveal key={item.n} delay={i * 90}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.6fr",
                gap: "3rem",
                padding: "2.8rem 0",
                borderTop: "1px solid rgba(200,139,90,0.08)",
                transition: "border-color 0.5s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderTopColor = "rgba(200,139,90,0.28)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderTopColor = "rgba(200,139,90,0.08)")
              }
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
                  fontWeight: 300,
                  color: "#F3EFE7",
                  lineHeight: 1.3,
                  letterSpacing: "0.01em",
                }}
              >
                {item.n}
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
                {item.d}
              </div>
            </div>
          </Reveal>
        ))}

        {/* Institutional Mirror — in practice */}
        <Reveal delay={420}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.6fr",
              gap: "3rem",
              padding: "2.8rem 0",
              borderTop: "1px solid rgba(200,139,90,0.18)",
              transition: "border-color 0.5s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderTopColor = "rgba(200,139,90,0.4)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderTopColor = "rgba(200,139,90,0.18)")
            }
          >
            <div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#9B5E45",
                  marginBottom: "0.6rem",
                }}
              >
                In Practice
              </div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
                  fontWeight: 300,
                  color: "#F3EFE7",
                  lineHeight: 1.3,
                  letterSpacing: "0.01em",
                }}
              >
                Institutional Mirror
              </div>
            </div>
            <div style={{ alignSelf: "center" }}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  lineHeight: 1.85,
                  color: "#9CA3AF",
                  fontWeight: 300,
                  margin: "0 0 0.8rem",
                }}
              >
                A governance simulation tool that asks what operating under
                pressure actually costs — and why.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2rem",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="https://hospital-simulator-eta.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.68rem",
                    letterSpacing: "0.12em",
                    color: "rgba(156,163,175,0.45)",
                    textDecoration: "none",
                    transition: "color 0.35s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "rgba(200,139,90,0.8)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(156,163,175,0.45)")
                  }
                >
                  hospital-simulator-eta.vercel.app
                </a>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.62rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(156,163,175,0.28)",
                    fontStyle: "italic",
                  }}
                >
                  Built with AI. Governed by judgment.
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <div style={{ borderTop: "1px solid rgba(200,139,90,0.08)" }} />
      </div>

      {/* Credibility strip */}
      <Reveal delay={520}>
        <div
          style={{
            marginTop: "5rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem 3.5rem",
            alignItems: "center",
          }}
        >
          {credentials.map((c) => (
            <div
              key={c}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(156,163,175,0.32)",
              }}
            >
              {c}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
