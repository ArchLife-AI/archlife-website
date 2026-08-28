import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export function DentalSection() {
  const threads = [
    {
      n: "Coordination at Scale",
      d: "Mapping how clinical intent travels — and fractures — across 700+ clinics / 1,650+ doctors operating within a single institutional ecosystem.",
    },
    {
      n: "Operational Data Research",
      d: "Studying what the numbers inside a dental enterprise actually measure: not outcomes, but the invisible cost of coordination failure disguised as workflow.",
    },
    {
      n: "Human-Systems Interface",
      d: "Where the clinical hand meets the institutional machine. Research into the gap between what practitioners know and what systems record.",
    },
  ];

  return (
    <section
      id="dental"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "clamp(6rem,14vw,12rem) clamp(1.5rem,8vw,8rem)",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <Reveal>
        <SectionLabel>Clinical Ground</SectionLabel>
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
        {/* Left — framing statement */}
        <div>
          <Reveal delay={60}>
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
              The clinic as
              <br />
              a laboratory
              <br />
              <em style={{ color: "#C88B5A", fontStyle: "italic" }}>
                for systems.
              </em>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.88rem",
                lineHeight: 1.95,
                color: "#9CA3AF",
                fontWeight: 300,
                maxWidth: 400,
                marginBottom: "1.8rem",
              }}
            >
              The BDS was not the endpoint. It was the entry point — into a
              system too large to see from any single chair. At Clove Dental,
              the operational scale became the research environment: 700+
              clinics / 1,650+ doctors, and the recurring question of why
              clinical intelligence so rarely reaches the people who need it.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                lineHeight: 1.85,
                color: "rgba(156,163,175,0.6)",
                fontWeight: 300,
                maxWidth: 380,
              }}
            >
              This is where the conviction formed: that fragmentation is not a
              technical failure. It is a design failure — and design can be
              corrected.
            </p>
          </Reveal>
        </div>

        {/* Right — research threads */}
        <div>
          {threads.map((item, i) => (
            <Reveal key={item.n} delay={i * 80 + 80}>
              <div
                style={{
                  padding: "2.2rem 0",
                  borderTop:
                    i === 0
                      ? "1px solid rgba(200,139,90,0.18)"
                      : "1px solid rgba(200,139,90,0.08)",
                  transition: "border-color 0.4s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderTopColor =
                    "rgba(200,139,90,0.32)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderTopColor =
                    i === 0
                      ? "rgba(200,139,90,0.18)"
                      : "rgba(200,139,90,0.08)")
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
                    lineHeight: 1.85,
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
            style={{
              borderTop: "1px solid rgba(200,139,90,0.08)",
              height: 1,
            }}
          />
        </div>
      </div>
    </section>
  );
}
