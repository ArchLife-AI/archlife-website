import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export function PhilosophySection() {
  return (
    <section
      style={{
        position: "relative",
        zIndex: 1,
        padding: "clamp(6rem,12vw,10rem) clamp(1.5rem,8vw,8rem)",
        maxWidth: 1100,
        margin: "0 auto",
        borderTop: "1px solid rgba(200,139,90,0.06)",
      }}
    >
      <Reveal>
        <SectionLabel>Philosophy</SectionLabel>
      </Reveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "5rem",
          marginTop: "1rem",
          alignItems: "start",
        }}
      >
        <Reveal delay={60}>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "var(--ink)",
              letterSpacing: "-0.01em",
            }}
          >
            Calm systems
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              intelligence.
            </em>
          </h2>
        </Reveal>

        <div>
          <Reveal delay={100}>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: "0.86rem",
                lineHeight: 1.95,
                color: "var(--muted)",
                fontWeight: 300,
                marginBottom: "2rem",
              }}
            >
              ArchLife systems are designed to feel reflective, operationally
              legible, emotionally aware, cognitively layered, and
              institutionally trustworthy.
            </p>
          </Reveal>

          <div>
            {[
              "Not surveillance systems.",
              "Not optimization engines detached from human consequences.",
              "Reflective infrastructure designed for continuity under stress.",
            ].map((line, i) => (
              <Reveal key={line} delay={i * 60 + 140}>
                <p
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "1.1rem",
                    fontStyle: i < 2 ? "italic" : "normal",
                    fontWeight: 300,
                    color:
                      i < 2
                        ? "rgba(156,163,175,0.4)"
                        : "rgba(243,239,231,0.6)",
                    lineHeight: 1.7,
                    marginBottom: "0.6rem",
                    letterSpacing: "0.01em",
                  }}
                >
                  {line}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
