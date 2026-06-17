import { AtmosphericCanvas } from "@/components/AtmosphericCanvas/AtmosphericCanvas";
import { Footer } from "@/components/Footer/Footer";
import { GlobalStyles } from "@/components/GlobalStyles/GlobalStyles";
import { Nav } from "@/components/Navigation/Navigation";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

const pageShell = {
  background: "#0D0F12",
  minHeight: "100vh",
  color: "#F3EFE7",
  overflowX: "hidden",
  position: "relative",
};

const sectionStyle = {
  position: "relative",
  zIndex: 1,
  maxWidth: 1120,
  margin: "0 auto",
  padding: "clamp(5rem, 11vw, 9rem) clamp(1.4rem, 6vw, 5rem)",
};

const eyebrow = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.62rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#9B5E45",
};

const bodyText = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.9rem",
  lineHeight: 1.9,
  color: "#9CA3AF",
  fontWeight: 300,
};

const serifTitle = {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 300,
  color: "#F3EFE7",
  letterSpacing: "-0.01em",
};

const diagnosticSignals = [
  {
    label: "Case visibility",
    detail:
      "Where is every active case, who holds it, and which cases are already at risk of missing their delivery window?",
  },
  {
    label: "Latency",
    detail:
      "How long does it take for the lab to discover a delay, quality issue, rework risk, or material shortage?",
  },
  {
    label: "Technician load",
    detail:
      "Which technicians are overloaded, which are idle, and how much of that knowledge lives only in one senior person's head?",
  },
  {
    label: "Rework learning",
    detail:
      "Which case types, clinics, materials, technicians, or handoffs create repeat failures that the system never captures?",
  },
  {
    label: "Client experience",
    detail:
      "When does a dentist learn that a case is late: before the promised date, or only after calling the lab?",
  },
];

const discoverySteps = [
  "3 structured site visits inside the lab environment.",
  "Shadow the complete case lifecycle: intake, model work, fabrication, QC, dispatch, and rework.",
  "Interview Dr. Arora, the lab manager, senior technicians, and key operational owners.",
  "Map WhatsApp flows, spreadsheets, job cards, rework signals, inventory practices, and handoffs.",
  "Benchmark current operations against Indian dental lab realities and global LMS capability patterns.",
];

const deliverables = [
  {
    label: "Current State Operations Map",
    detail:
      "A clear map of workflows, handoffs, bottlenecks, decision points, and failure surfaces.",
  },
  {
    label: "Prioritized Problem Statement",
    detail:
      "The top operational pain points, ranked by estimated impact on delivery, rework, client trust, and cost.",
  },
  {
    label: "Quick Wins vs. Structural Fixes",
    detail:
      "What can be improved immediately without software, and what requires a purpose-built system.",
  },
  {
    label: "Technology Blueprint",
    detail:
      "The first version of the lab's operational nerve center: scope, expected impact, build logic, and cost bands.",
  },
  {
    label: "Phase 2 Build Proposal",
    detail:
      "A precise retainer proposal for the build phase, scoped only after the lab has been properly understood.",
  },
];

const buildModules = [
  "WhatsApp-native case tracking",
  "Dentist-facing status visibility",
  "Rework analytics",
  "Inventory forecasting",
  "Technician workload routing",
  "Dispatch and delivery confirmation",
  "Invoice and client history layer",
];

const team = [
  {
    name: "Dr. Ishaan Wadhwa",
    role: "Clinical Systems Strategist",
    detail:
      "BDS. Former Business Analyst at Clove Dental across 700+ clinics and 1,650+ doctors. Built healthcare operations, ETL, transfer, and audit systems.",
  },
  {
    name: "Siddharth Garg",
    role: "Strategy and Operations",
    detail:
      "IIT Roorkee. Founder's Office experience across Newton School, FactoryPlus, and Battery Smart. Early-stage operating systems and growth execution.",
  },
  {
    name: "Dr. Aakash Sahai",
    role: "Clinical Lead",
    detail:
      "AIIMS MDS in Endodontics. Senior Resident at VMMC/Safdarjung. Brings clinical credibility and institutional hospital context.",
  },
  {
    name: "Shresth Shukla",
    role: "AI and Data Engineering",
    detail:
      "EY Associate Consultant. Microsoft Fabric, Azure OpenAI, computer vision, data pipelines, and enterprise GenAI architecture.",
  },
  {
    name: "Prakhar Singh",
    role: "Healthtech GTM",
    detail:
      "Enterprise healthtech GTM at Innovaccer across provider, payer, and public sector pursuits.",
  },
  {
    name: "Vikramaditya Sethi",
    role: "Healthcare Operations Advisor",
    detail:
      "19+ years in healthcare contact centre operations. Leads national revenue operations at Clove Dental.",
  },
];

export const meta = () => [
  { title: "Dental Lab Operational Intelligence | ArchLife" },
  {
    name: "description",
    content:
      "An ArchLife engagement page for dental lab operational intelligence: Phase 1 discovery, workflow mapping, and the path toward a Case Intelligence System.",
  },
];

function Metric({ value, label }) {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(200,139,90,0.2)",
        paddingTop: "1.1rem",
      }}
    >
      <div
        style={{
          ...serifTitle,
          fontSize: "clamp(2rem, 4vw, 3.2rem)",
          lineHeight: 1,
          color: "#C88B5A",
          marginBottom: "0.8rem",
        }}
      >
        {value}
      </div>
      <div
        style={{
          ...eyebrow,
          color: "rgba(156,163,175,0.48)",
          lineHeight: 1.6,
        }}
      >
        {label}
      </div>
    </div>
  );
}

function Row({ label, detail, index }) {
  return (
    <Reveal delay={index * 70}>
      <div
        className="den-row"
        style={{
          display: "grid",
          gridTemplateColumns: "0.9fr 1.6fr",
          gap: "clamp(1.5rem, 5vw, 4rem)",
          padding: "2.1rem 0",
          borderTop: "1px solid rgba(200,139,90,0.1)",
        }}
      >
        <div
          style={{
            ...serifTitle,
            fontSize: "clamp(1.25rem, 2.4vw, 1.7rem)",
            lineHeight: 1.25,
          }}
        >
          {label}
        </div>
        <p style={{ ...bodyText, margin: 0 }}>{detail}</p>
      </div>
    </Reveal>
  );
}

export default function DentalLabsPage() {
  return (
    <div style={pageShell}>
      <AtmosphericCanvas />
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(90deg, rgba(13,15,18,0.62) 0%, rgba(13,15,18,0.34) 48%, rgba(13,15,18,0.58) 100%), linear-gradient(180deg, rgba(13,15,18,0.18) 0%, rgba(13,15,18,0.68) 100%)",
        }}
      />
      <Nav />
      <GlobalStyles />

      <main>
        <section
          className="den-hero"
          style={{
            ...sectionStyle,
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            paddingTop: "9rem",
          }}
        >
          <div>
            <Reveal>
              <div style={{ ...eyebrow, marginBottom: "2rem" }}>
                ArchLife for Dental Labs
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1
                className="den-hero-title"
                style={{
                  ...serifTitle,
                  fontSize: "clamp(3.1rem, 8vw, 7rem)",
                  lineHeight: 1.02,
                  maxWidth: 980,
                  margin: "0 0 2rem",
                  textShadow: "0 2px 32px rgba(0,0,0,0.72)",
                }}
              >
                Operational intelligence
                <br />
                for a dental lab
                <br />
                <em style={{ color: "#C88B5A", fontStyle: "italic" }}>
                  ready to scale.
                </em>
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p
                style={{
                  ...bodyText,
                  fontSize: "clamp(1rem, 2vw, 1.18rem)",
                  maxWidth: 680,
                  margin: "0 0 3rem",
                }}
              >
                A focused Phase 1 discovery engagement for growth-stage dental
                labs in India: mapping the hidden operating system behind case flow,
                technician load, rework, inventory, dispatch, and dentist-facing
                visibility.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <a
                  href="#engagement"
                  className="den-primary-link"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.72rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#F3EFE7",
                    border: "1px solid rgba(200,139,90,0.45)",
                    borderRadius: "2rem",
                    padding: "0.9rem 2rem",
                    textDecoration: "none",
                    background: "rgba(200,139,90,0.08)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  View Phase 1
                </a>
                <a
                  href="mailto:hello@archlife.in?subject=Dental%20Lab%20Operational%20Intelligence"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.72rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#9CA3AF",
                    textDecoration: "none",
                    padding: "0.9rem 0",
                  }}
                >
                  Start the alignment call
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section style={sectionStyle}>
          <Reveal>
            <SectionLabel>Why This Project Matters</SectionLabel>
          </Reveal>
          <div
            className="den-intro-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "clamp(3rem, 8vw, 7rem)",
              alignItems: "start",
              marginTop: "2rem",
            }}
          >
            <Reveal delay={70}>
              <h2
                style={{
                  ...serifTitle,
                  fontSize: "clamp(2.4rem, 5vw, 4.4rem)",
                  lineHeight: 1.1,
                  margin: 0,
                }}
              >
                The modern dental lab is not a typical lab.
                <br />
                The next constraint is
                <em style={{ color: "#C88B5A", fontStyle: "italic" }}>
                  {" "}
                  operating intelligence.
                </em>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div>
                <p style={{ ...bodyText, marginTop: 0 }}>
                  The best Indian dental labs already carry the clinical and
                  technical signals of a frontier operation: CAD/CAM, DMLS, 3D
                  printing, serious machinery, dentist relationships, academic
                  collaboration, and strong client satisfaction.
                </p>
                <p style={bodyText}>
                  The gap is not what the lab can make. The gap is whether the
                  lab can see, route, learn from, and scale the work moving
                  through it.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div
              className="den-metrics"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "clamp(1.5rem, 4vw, 3.5rem)",
                marginTop: "5rem",
              }}
            >
              <Metric value="$699.7M" label="Indian dental lab market in 2023" />
              <Metric value="$1.13B" label="Projected market size by 2030" />
              <Metric value="80-90%" label="Indian labs still largely unorganized" />
            </div>
          </Reveal>
        </section>

        <section style={sectionStyle}>
          <Reveal>
            <SectionLabel>The Core Failure</SectionLabel>
          </Reveal>
          <Reveal delay={70}>
            <h2
              style={{
                ...serifTitle,
                fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
                lineHeight: 1.08,
                maxWidth: 780,
                margin: "1.8rem 0 4rem",
              }}
            >
              Most dental labs do not fail because they lack skill.
              <br />
              They fail because they lack
              <em style={{ color: "#C88B5A", fontStyle: "italic" }}>
                {" "}
                visibility.
              </em>
            </h2>
          </Reveal>
          <div>
            {diagnosticSignals.map((item, index) => (
              <Row
                key={item.label}
                label={item.label}
                detail={item.detail}
                index={index}
              />
            ))}
          </div>
        </section>

        <section id="engagement" style={sectionStyle}>
          <Reveal>
            <SectionLabel>Phase 1 Discovery</SectionLabel>
          </Reveal>
          <div
            className="den-intro-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "0.9fr 1.1fr",
              gap: "clamp(3rem, 8vw, 7rem)",
              alignItems: "start",
              marginTop: "2rem",
            }}
          >
            <Reveal delay={80}>
              <div>
                <h2
                  style={{
                    ...serifTitle,
                    fontSize: "clamp(2.4rem, 5vw, 4rem)",
                    lineHeight: 1.1,
                    margin: "0 0 1.5rem",
                  }}
                >
                  A paid problem-discovery engagement.
                  <br />
                  Not a software sale.
                </h2>
                <p style={bodyText}>
                  The first commercial step is a rigorous 3-4 week discovery
                  engagement that turns the lab's real operating reality into
                  a precise build brief.
                </p>
              </div>
            </Reveal>
            <div>
              {discoverySteps.map((step, index) => (
                <Reveal key={step} delay={index * 70}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "52px 1fr",
                      gap: "1.4rem",
                      padding: "1.45rem 0",
                      borderTop: "1px solid rgba(200,139,90,0.1)",
                    }}
                  >
                    <div
                      style={{
                        ...eyebrow,
                        color: "rgba(200,139,90,0.6)",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div style={{ ...bodyText, margin: 0 }}>{step}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <Reveal>
            <SectionLabel>What The Lab Gets</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <p
              style={{
                ...serifTitle,
                fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)",
                lineHeight: 1.35,
                maxWidth: 760,
                margin: "2rem 0 3.5rem",
              }}
            >
              One dense, specific deliverable that lets the lab owner see the lab
              clearly: what works, what breaks, what costs money, what can be
              fixed now, and what deserves to be built.
            </p>
          </Reveal>
          <div>
            {deliverables.map((item, index) => (
              <Row
                key={item.label}
                label={item.label}
                detail={item.detail}
                index={index}
              />
            ))}
          </div>
        </section>

        <section style={sectionStyle}>
          <Reveal>
            <SectionLabel>Phase 2 Direction</SectionLabel>
          </Reveal>
          <div
            className="den-intro-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.05fr 0.95fr",
              gap: "clamp(3rem, 8vw, 7rem)",
              alignItems: "start",
              marginTop: "2rem",
            }}
          >
            <Reveal delay={80}>
              <div>
                <h2
                  style={{
                    ...serifTitle,
                    fontSize: "clamp(2.5rem, 5.5vw, 4.6rem)",
                    lineHeight: 1.04,
                    margin: "0 0 2rem",
                  }}
                >
                  The likely first build:
                  <br />
                  <em style={{ color: "#C88B5A", fontStyle: "italic" }}>
                    Case Intelligence System.
                  </em>
                </h2>
                <p style={{ ...bodyText, maxWidth: 600 }}>
                  A lightweight, mobile-first job tracking layer for Indian
                  dental lab reality. It should work with WhatsApp-native
                  behavior, not fight it. It should give the lab manager and
                  dentist clients real-time visibility without forcing a Western
                  enterprise LMS onto the floor.
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div
                style={{
                  borderTop: "1px solid rgba(200,139,90,0.2)",
                  paddingTop: "1rem",
                }}
              >
                {buildModules.map((module) => (
                  <div
                    key={module}
                    style={{
                      ...bodyText,
                      color: "rgba(243,239,231,0.78)",
                      borderBottom: "1px solid rgba(156,163,175,0.08)",
                      padding: "1rem 0",
                    }}
                  >
                    {module}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section style={sectionStyle}>
          <Reveal>
            <SectionLabel>Why ArchLife</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2
              style={{
                ...serifTitle,
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                lineHeight: 1.12,
                maxWidth: 800,
                margin: "2rem 0 4rem",
              }}
            >
              Clinical dentistry, large-scale healthcare operations, AI
              engineering, and healthtech GTM in one engagement team.
            </h2>
          </Reveal>
          <div>
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 60}>
                <div
                  className="den-team-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "0.75fr 0.85fr 1.4fr",
                    gap: "2rem",
                    padding: "1.7rem 0",
                    borderTop: "1px solid rgba(200,139,90,0.09)",
                    alignItems: "start",
                  }}
                >
                  <div
                    style={{
                      ...serifTitle,
                      fontSize: "1.3rem",
                      lineHeight: 1.25,
                    }}
                  >
                    {member.name}
                  </div>
                  <div style={{ ...eyebrow, color: "rgba(200,139,90,0.72)" }}>
                    {member.role}
                  </div>
                  <div style={{ ...bodyText, margin: 0 }}>{member.detail}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          style={{
            ...sectionStyle,
            paddingBottom: "clamp(7rem, 13vw, 11rem)",
          }}
        >
          <Reveal>
            <SectionLabel>Next Step</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <div
              style={{
                borderTop: "1px solid rgba(200,139,90,0.18)",
                borderBottom: "1px solid rgba(200,139,90,0.08)",
                padding: "clamp(3rem, 7vw, 5rem) 0",
                marginTop: "2rem",
              }}
            >
              <h2
                style={{
                  ...serifTitle,
                  fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
                  lineHeight: 1.08,
                  maxWidth: 780,
                  margin: "0 0 2rem",
                }}
              >
                Schedule the 30-minute alignment call.
              </h2>
              <p
                style={{
                  ...bodyText,
                  maxWidth: 650,
                  margin: "0 0 2.5rem",
                }}
              >
                Walk through the engagement, agree on scope, confirm Phase 1,
                and schedule the first site visit within five working days.
              </p>
              <a
                href="mailto:hello@archlife.in?subject=Dental%20Lab%20Operational%20Intelligence%20alignment%20call"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#F3EFE7",
                  border: "1px solid rgba(200,139,90,0.45)",
                  borderRadius: "2rem",
                  padding: "1rem 2.4rem",
                  textDecoration: "none",
                  background: "rgba(200,139,90,0.08)",
                  display: "inline-block",
                }}
              >
                hello@archlife.in
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 760px) {
          .den-hero {
            min-height: auto !important;
            align-items: flex-start !important;
            padding-top: 8rem !important;
            padding-bottom: 5rem !important;
          }
          .den-hero-title {
            font-size: clamp(2.65rem, 12vw, 3.25rem) !important;
            line-height: 1.04 !important;
          }
          .den-intro-grid,
          .den-metrics,
          .den-row,
          .den-team-row {
            grid-template-columns: 1fr !important;
          }
          .den-team-row {
            gap: 0.7rem !important;
          }
        }
      `}</style>
    </div>
  );
}
