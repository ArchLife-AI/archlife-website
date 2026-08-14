import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

const degradationModes = [
  "overload",
  "hidden strain",
  "normalized dysfunction",
  "fragmented coordination",
  "silent governance drift",
  "the slow erosion of reflective awareness",
];

export function OriginSection() {
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
        <SectionLabel>Origin</SectionLabel>
      </Reveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "5rem",
          marginTop: "1rem",
          alignItems: "start",
        }}
        className="origin-grid"
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
            Systems fail
            <br />
            gradually before
            <br />
            they{" "}
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              fail visibly.
            </em>
          </h2>
        </Reveal>

        <div>
          <Reveal delay={100}>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: "0.88rem",
                lineHeight: 1.95,
                color: "var(--muted)",
                fontWeight: 300,
                marginBottom: "1.5rem",
              }}
            >
              Most institutions do not collapse because of a single
              catastrophic event. They degrade through:
            </p>
          </Reveal>

          <div style={{ marginBottom: "2.2rem" }}>
            {degradationModes.map((m, i) => (
              <Reveal key={m} delay={i * 45 + 140}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "0.9rem",
                    padding: "0.6rem 0",
                    borderTop: "1px solid rgba(200,139,90,0.06)",
                  }}
                >
                  <div
                    style={{
                      width: 16,
                      height: 0.5,
                      background: "rgba(200,139,90,0.25)",
                      flexShrink: 0,
                      marginBottom: "0.18em",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "1.1rem",
                      fontWeight: 300,
                      color: "rgba(243,239,231,0.55)",
                      fontStyle: "italic",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {m}
                  </span>
                </div>
              </Reveal>
            ))}
            <div
              style={{
                borderTop: "1px solid rgba(200,139,90,0.06)",
                height: 1,
              }}
            />
          </div>

          <Reveal delay={420}>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: "0.84rem",
                lineHeight: 1.9,
                color: "rgba(156,163,175,0.55)",
                fontWeight: 300,
                marginBottom: "1.4rem",
              }}
            >
              As AI systems become operational participants inside healthcare,
              governance, logistics, education, and public infrastructure, the
              challenge is no longer simply intelligence. The challenge is
              whether institutions can remain aware enough of themselves to
              adapt responsibly under pressure.
            </p>
          </Reveal>

          <Reveal delay={460}>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: "1.05rem",
                fontStyle: "italic",
                color: "rgba(200,139,90,0.5)",
                fontWeight: 300,
                letterSpacing: "0.01em",
              }}
            >
              ArchLife exists to explore that problem.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
