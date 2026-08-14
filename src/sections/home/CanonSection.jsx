import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export function CanonSection() {
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
        <SectionLabel>Canon</SectionLabel>
      </Reveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "5rem",
          alignItems: "center",
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
              Field Notes
              <br />
              Against{" "}
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
                Disappearance.
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
                maxWidth: 400,
              }}
            >
              ArchLife began as an attempt to preserve continuity across
              fragmentation. The Canon documents the philosophical,
              operational, and governance foundations behind the ecosystem:
              reflection, operational trust, institutional cognition,
              continuity under strain, and humane infrastructure for adaptive
              systems.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <a
              href="/canon"
              style={{
                fontFamily: "var(--sans)",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(156,163,175,0.5)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(156,163,175,0.12)",
                paddingBottom: "2px",
                transition: "all 0.35s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--ink)";
                e.currentTarget.style.borderBottomColor =
                  "rgba(200,139,90,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(156,163,175,0.5)";
                e.currentTarget.style.borderBottomColor =
                  "rgba(156,163,175,0.12)";
              }}
            >
              Enter the Canon
            </a>
          </Reveal>
        </div>

        {/* Canon thread list */}
        <Reveal delay={100}>
          <div>
            {[
              "Reflection",
              "Operational trust",
              "Institutional cognition",
              "Continuity under strain",
              "Humane infrastructure for adaptive systems",
            ].map((item, i) => (
              <div
                key={item}
                style={{
                  padding: "1.5rem 0",
                  borderTop: "1px solid rgba(200,139,90,0.07)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.2rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "0.55rem",
                    color: "rgba(155,94,69,0.45)",
                    letterSpacing: "0.18em",
                    width: 18,
                    flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "1.15rem",
                    fontWeight: 300,
                    color: "rgba(243,239,231,0.6)",
                    fontStyle: "italic",
                    letterSpacing: "0.01em",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
            <div
              style={{
                borderTop: "1px solid rgba(200,139,90,0.07)",
                height: 1,
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
