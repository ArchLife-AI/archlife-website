import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export function MedEvolvSection() {
  const pathways = [
    {
      n: "Analytical Transition",
      d: "Moving from clinical intervention to evidence-based operational thinking.",
    },
    {
      n: "AI-Enabled Careers",
      d: "Understanding how artificial intelligence reshapes professional roles in healthcare systems.",
    },
    {
      n: "Operational Futures",
      d: "Healthcare coordination, workflow design, and institutional infrastructure as a vocation.",
    },
    {
      n: "Professional Reinvention",
      d: "Cognitive evolution through structured educational infrastructure and peer cohort thinking.",
    },
  ];

  return (
    <section
      id="medevolv"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "clamp(6rem,14vw,12rem) clamp(1.5rem,8vw,8rem)",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <Reveal>
        <SectionLabel>MedEvolv</SectionLabel>
      </Reveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "6rem",
          alignItems: "start",
          marginTop: "1rem",
        }}
      >
        <div>
          <Reveal delay={80}>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)",
                fontWeight: 300,
                color: "#F3EFE7",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                marginBottom: "2rem",
              }}
            >
              Pathways for
              <br />
              healthcare
              <br />
              <em style={{ color: "#C88B5A", fontStyle: "italic" }}>
                professionals
              </em>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.88rem",
                lineHeight: 1.95,
                color: "#9CA3AF",
                fontWeight: 300,
                maxWidth: 400,
              }}
            >
              MedEvolv explores transition pathways for healthcare professionals
              moving into analytical, operational, and AI-enabled futures —
              cognitive evolution through educational infrastructure.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <a
              href="https://medevolv.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#F3EFE7",
                border: "1px solid rgba(200,139,90,0.4)",
                borderRadius: "2rem",
                padding: "0.85rem 1.8rem",
                textDecoration: "none",
                background: "rgba(200,139,90,0.06)",
                backdropFilter: "blur(8px)",
                display: "inline-block",
                marginTop: "2rem",
              }}
            >
              Visit MedEvolv.in
            </a>
          </Reveal>
        </div>

        {/* Flowing list — no boxes */}
        <div>
          {pathways.map((item, i) => (
            <Reveal key={item.n} delay={i * 90 + 100}>
              <div
                style={{
                  padding: "2.2rem 0",
                  borderTop:
                    i === 0
                      ? "1px solid rgba(200,139,90,0.18)"
                      : "1px solid rgba(200,139,90,0.08)",
                  transition: "border-color 0.5s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderTopColor =
                    "rgba(200,139,90,0.3)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderTopColor =
                    i === 0 ? "rgba(200,139,90,0.18)" : "rgba(200,139,90,0.08)")
                }
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.3rem",
                    fontWeight: 300,
                    color: "#F3EFE7",
                    marginBottom: "0.5rem",
                    letterSpacing: "0.01em",
                  }}
                >
                  {item.n}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.82rem",
                    lineHeight: 1.8,
                    color: "#9CA3AF",
                    fontWeight: 300,
                  }}
                >
                  {item.d}
                </div>
              </div>
            </Reveal>
          ))}
          <div
            style={{ borderTop: "1px solid rgba(200,139,90,0.08)", height: 1 }}
          />
        </div>
      </div>
    </section>
  );
}
