import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export function AboutSection() {
  return (
    <section
      id="about"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "clamp(6rem,14vw,12rem) clamp(1.5rem,8vw,8rem)",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "6rem",
          alignItems: "start",
        }}
      >
        <div>
          <Reveal>
            <SectionLabel>About ArchLife</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 300,
                color: "#F3EFE7",
                lineHeight: 1.2,
                marginBottom: "2rem",
              }}
            >
              An intellectual
              <br />
              systems origin story
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              {[
                {
                  n: "01 — Clinical Reality",
                  t: "Observing healthcare fragmentation from the inside — not as a statistic. As the daily operational reality of 700 clinics, 1,650 doctors, and the invisible toll of disconnected systems on the people trying to hold them together.",
                },
                {
                  n: "02 — Systems Awareness",
                  t: "Realizing that suffering is often infrastructural. That the wound is frequently in the coordination layer, not the clinical one.",
                },
                {
                  n: "03 — Operational Intelligence",
                  t: "Transitioning from intervention to systems design. From treating symptoms to mapping structures. From reaction to reflection.",
                },
                {
                  n: "04 — ArchLife",
                  t: "The emergence of humane infrastructure thinking. A reflective systems architecture initiative exploring the space where intelligence, care, and operations intersect.",
                },
              ].map((item, i) => (
                <div
                  key={item.n}
                  style={{
                    paddingLeft: "1.2rem",
                    borderLeft: "1px solid rgba(200,139,90,0.2)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.65rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#9B5E45",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.n}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.85rem",
                      lineHeight: 1.85,
                      color: "#9CA3AF",
                      margin: 0,
                      fontWeight: 300,
                    }}
                  >
                    {item.t}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          {/* No box — photo sits directly in the flow */}
          <div>
            <img
              src="https://dtvoeevhaseb5.cloudfront.net/user-uploads/4d540347-1e99-47f1-96c6-e7e01ef97024.jpg"
              alt="Dr. Ishaan Wadhwa"
              style={{
                width: "100%",
                aspectRatio: "3/4",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
                marginBottom: "1.8rem",
                filter: "brightness(0.9) contrast(1.04) saturate(0.85)",
              }}
            />
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.15rem",
                color: "#F3EFE7",
                marginBottom: "0.3rem",
                fontWeight: 400,
              }}
            >
              Dr. Ishaan Wadhwa
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.62rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#9B5E45",
                marginBottom: "0.4rem",
              }}
            >
              Founder, ArchLife
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.6rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(155,94,69,0.5)",
                marginBottom: "0.9rem",
              }}
            >
              BDS &middot; Business Analyst, Clove Dental &middot; Healthcare Lead, AI Collective
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                color: "rgba(156,163,175,0.6)",
                lineHeight: 1.7,
                margin: 0,
                fontWeight: 300,
              }}
            >
              Systems architecture. Healthcare intelligence.
              <br />
              Humane infrastructure. Reflexive systems.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
