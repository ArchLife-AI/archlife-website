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
              BDS &middot; Business Analyst, Clove Dental &middot; Organiser and Healthcare Lead, The AI Collective Delhi NCR Chapter
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.6rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(155,94,69,0.5)",
                marginBottom: "0.9rem",
                lineHeight: 1.6,
              }}
            >
              PGP, Applied AI &amp; Agentic Systems, Masters&apos; Union &middot; Joining August 2026
            </div>
            <a
              href="https://www.linkedin.com/in/dr-ishaan-wadhwa-98a017244"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.72rem",
                lineHeight: 1.5,
                color: "rgba(243,239,231,0.68)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(200,139,90,0.32)",
                paddingBottom: 2,
                marginBottom: "1.2rem",
                letterSpacing: 0,
                transition: "color 220ms ease, border-color 220ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#F3EFE7";
                e.currentTarget.style.borderBottomColor =
                  "rgba(200,139,90,0.68)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(243,239,231,0.68)";
                e.currentTarget.style.borderBottomColor =
                  "rgba(200,139,90,0.32)";
              }}
            >
              LinkedIn profile
            </a>
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

            <div
              style={{
                borderTop: "1px solid rgba(200,139,90,0.16)",
                marginTop: "2.75rem",
                paddingTop: "2.75rem",
              }}
            >
              <img
                src="/aakash-sahai.jpeg"
                alt="Dr. Aakash Sahai"
                style={{
                  width: "100%",
                  aspectRatio: "3/4",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                  marginBottom: "1.8rem",
                  filter: "brightness(0.94) contrast(1.03) saturate(0.86)",
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
                Dr. Aakash Sahai
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
                Director, ArchLife
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(155,94,69,0.5)",
                  marginBottom: "1.15rem",
                  lineHeight: 1.6,
                }}
              >
                Founder, Lajpat Nagar Dental Clinic &middot; Endodontist
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  color: "rgba(156,163,175,0.72)",
                  lineHeight: 1.75,
                  margin: "0 0 1.1rem",
                  fontWeight: 300,
                }}
              >
                Dr. Aakash Sahai is an expert endodontist and founder of Lajpat
                Nagar Dental Clinic in South Delhi. His perspective brings
                frontline clinical practice, practice ownership, and endodontic
                expertise into ArchLife&apos;s work on humane healthcare systems and
                operations.
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  color: "rgba(156,163,175,0.72)",
                  lineHeight: 1.75,
                  margin: "0 0 1.35rem",
                  fontWeight: 300,
                }}
              >
                He grounds the work in the daily realities of care delivery:
                clinical judgment, patient trust, coordination, and the operating
                conditions of an independent dental practice.
              </p>
              <div
                style={{
                  borderTop: "1px solid rgba(200,139,90,0.12)",
                  paddingTop: "1rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.64rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(216,222,230,0.58)",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  BDS, ESIC Dental College (2014-2019)
                  <br />
                  MDS, Endodontics, AIIMS Delhi (July 2020-July 2024)
                  <br />
                  Endodontics Specialty Clinic, VMMC &amp; Safdarjung Hospital
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
