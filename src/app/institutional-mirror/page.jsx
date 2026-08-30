import { AtmosphericCanvas } from "@/components/AtmosphericCanvas/AtmosphericCanvas";
import { Footer } from "@/components/Footer/Footer";
import { GlobalStyles } from "@/components/GlobalStyles/GlobalStyles";
import { Nav } from "@/components/Navigation/Navigation";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

const MIRROR_URL = "https://mirror.archlife.in";

const pageShell = {
  background: "var(--bg)",
  minHeight: "100vh",
  color: "var(--ink)",
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

const bodyText = {
  color: "var(--muted)",
  fontFamily: "var(--sans)",
  fontSize: "0.9rem",
  fontWeight: 300,
  lineHeight: 1.9,
};

const titleText = {
  color: "var(--ink)",
  fontFamily: "var(--serif)",
  fontWeight: 300,
  letterSpacing: 0,
};

const lenses = [
  {
    label: "Strain pathways",
    detail:
      "How overload, coordination lag, and deferred decisions can compound before a system reports a visible failure.",
  },
  {
    label: "Operational trust",
    detail:
      "How trust changes when people cannot see what an AI-mediated system is doing, why, or who remains accountable.",
  },
  {
    label: "Governance drift",
    detail:
      "How policies, handoffs, and escalation norms can change under pressure without a deliberate governance decision.",
  },
];

const audiences = [
  "Clinical AI leaders establishing meaningful oversight before deployment.",
  "Hospital operations teams examining the human and coordination cost of automation.",
  "Researchers and governance partners testing how institutional stress becomes legible.",
];

const boundaries = [
  "It is not clinical decision support.",
  "It does not use patient data or live hospital telemetry.",
  "It is not a staff, department, or hospital performance score.",
  "It does not replace a clinical safety case, formal audit, or local governance process.",
];

function Row({ label, detail, index }) {
  return (
    <Reveal delay={index * 70}>
      <div
        className="mirror-row"
        style={{
          borderTop: "1px solid rgba(200,139,90,0.1)",
          display: "grid",
          gap: "clamp(1.5rem, 5vw, 4rem)",
          gridTemplateColumns: "minmax(180px, 0.85fr) minmax(0, 1.55fr)",
          padding: "2rem 0",
        }}
      >
        <div
          style={{
            ...titleText,
            fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
            lineHeight: 1.2,
          }}
        >
          {label}
        </div>
        <p style={{ ...bodyText, margin: 0 }}>{detail}</p>
      </div>
    </Reveal>
  );
}

export const meta = () => [
  { title: "Institutional Mirror | Healthcare AI Governance Simulator | ArchLife" },
  {
    name: "description",
    content:
      "Institutional Mirror is an ArchLife governance-simulation prototype for clinical AI systems. It uses synthetic scenarios to explore strain, trust, escalation, and governance drift.",
  },
];

export default function InstitutionalMirrorPage() {
  return (
    <div style={pageShell}>
      <AtmosphericCanvas />
      <Nav />
      <GlobalStyles />

      <main>
        <section
          className="mirror-hero"
          style={{
            ...sectionStyle,
            alignItems: "center",
            display: "flex",
            minHeight: "88vh",
            paddingTop: "9rem",
          }}
        >
          <div style={{ maxWidth: 930 }}>
            <Reveal>
              <SectionLabel>Institutional Mirror</SectionLabel>
            </Reveal>
            <Reveal delay={45}>
              <div
                style={{
                  border: "1px solid rgba(200,139,90,0.3)",
                  color: "var(--gold)",
                  display: "inline-block",
                  fontFamily: "var(--sans)",
                  fontSize: "0.58rem",
                  letterSpacing: "0.16em",
                  lineHeight: 1.2,
                  marginBottom: "1.45rem",
                  padding: "0.35rem 0.55rem",
                  textTransform: "uppercase",
                }}
              >
                Live prototype
              </div>
            </Reveal>
            <Reveal delay={90}>
              <h1
                style={{
                  ...titleText,
                  fontSize: "clamp(3rem, 7.5vw, 6.3rem)",
                  lineHeight: 1.02,
                  margin: "0 0 2rem",
                  maxWidth: 900,
                }}
              >
                A governance simulator for
                <br />
                <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
                  clinical AI systems.
                </em>
              </h1>
            </Reveal>
            <Reveal delay={145}>
              <p
                style={{
                  ...bodyText,
                  fontSize: "clamp(1rem, 2vw, 1.16rem)",
                  margin: "0 0 2.5rem",
                  maxWidth: 690,
                }}
              >
                Institutional Mirror makes the human, operational, and governance
                cost of AI visible before those costs are treated as normal. It is
                a place to examine how strain, trust, escalation, and oversight
                interact under pressure.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mirror-actions">
                <a
                  href={MIRROR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mirror-primary-action"
                >
                  Open the live prototype
                </a>
                <a href="/contact" className="mirror-secondary-action">
                  Discuss a governance use case
                </a>
              </div>
            </Reveal>
            <Reveal delay={250}>
              <p className="mirror-status-note">
                Synthetic scenario data. Not clinical decision support. Not live
                hospital monitoring.
              </p>
            </Reveal>
          </div>
        </section>

        <section style={{ ...sectionStyle, borderTop: "1px solid rgba(200,139,90,0.08)" }}>
          <Reveal>
            <SectionLabel>Why It Exists</SectionLabel>
          </Reveal>
          <div className="mirror-intro-grid">
            <Reveal delay={70}>
              <h2
                style={{
                  ...titleText,
                  fontSize: "clamp(2.35rem, 5vw, 4.25rem)",
                  lineHeight: 1.08,
                  margin: "0",
                  maxWidth: 620,
                }}
              >
                When an institution is under strain, the first loss is often
                <em style={{ color: "var(--gold)", fontStyle: "italic" }}> awareness.</em>
              </h2>
            </Reveal>
            <Reveal delay={135}>
              <div>
                <p style={{ ...bodyText, marginTop: 0 }}>
                  New AI systems can make individual tasks faster while quietly
                  changing accountability, coordination, and the information people
                  use to make consequential decisions.
                </p>
                <p style={{ ...bodyText, marginBottom: 0 }}>
                  Institutional Mirror is a deliberate pause before deployment: a
                  way to reason about those changes as a system, not as a feature
                  checklist.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section style={sectionStyle}>
          <Reveal>
            <SectionLabel>What It Makes Legible</SectionLabel>
          </Reveal>
          <div style={{ marginTop: "2rem" }}>
            {lenses.map((lens, index) => (
              <Row key={lens.label} {...lens} index={index} />
            ))}
          </div>
        </section>

        <section
          style={{
            ...sectionStyle,
            borderTop: "1px solid rgba(200,139,90,0.08)",
          }}
        >
          <Reveal>
            <SectionLabel>Who It Is For</SectionLabel>
          </Reveal>
          <div className="mirror-audience-grid">
            {audiences.map((audience, index) => (
              <Reveal key={audience} delay={index * 80 + 70}>
                <div className="mirror-audience-item">
                  <div className="mirror-audience-index">{String(index + 1).padStart(2, "0")}</div>
                  <p>{audience}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          style={{
            ...sectionStyle,
            borderTop: "1px solid rgba(200,139,90,0.08)",
          }}
        >
          <Reveal>
            <SectionLabel>Boundaries</SectionLabel>
          </Reveal>
          <div className="mirror-boundaries-grid">
            <Reveal delay={70}>
              <h2
                style={{
                  ...titleText,
                  fontSize: "clamp(2.25rem, 4.8vw, 4rem)",
                  lineHeight: 1.1,
                  margin: 0,
                  maxWidth: 480,
                }}
              >
                Exploration is not
                <em style={{ color: "var(--gold)", fontStyle: "italic" }}> deployment.</em>
              </h2>
            </Reveal>
            <div>
              {boundaries.map((boundary, index) => (
                <Reveal key={boundary} delay={index * 65 + 110}>
                  <p className="mirror-boundary-item">{boundary}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          style={{
            ...sectionStyle,
            borderTop: "1px solid rgba(200,139,90,0.08)",
          }}
        >
          <Reveal>
            <SectionLabel>Questions</SectionLabel>
          </Reveal>
          <Reveal delay={60}>
            <h2
              style={{
                ...titleText,
                fontSize: "clamp(2.25rem, 4.8vw, 4rem)",
                lineHeight: 1.1,
                margin: "2rem 0 0.5rem",
                maxWidth: 620,
              }}
            >
              What this is, and is not.
            </h2>
          </Reveal>
          {[
            {
              label: "What it is",
              detail:
                "A governance simulator for clinical AI. You walk synthetic scenarios to see how strain, trust, escalation, and oversight interact before those costs look normal.",
            },
            {
              label: "What it is not",
              detail:
                "Not clinical decision support. Not a live hospital monitor. Not a staff, department, or hospital performance score.",
            },
            {
              label: "Whose data",
              detail:
                "Synthetic scenario data only. No patient records. No live hospital telemetry.",
            },
            {
              label: "Who it is for",
              detail:
                "Clinical AI leaders, hospital operations teams, and governance partners who need the trade-offs visible before deployment.",
            },
          ].map((item, index) => (
            <Row
              key={item.label}
              label={item.label}
              detail={item.detail}
              index={index}
            />
          ))}
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
          <Reveal delay={75}>
            <div className="mirror-next-step">
              <h2>Begin with a scenario. Then bring the real question.</h2>
              <p>
                Open the live prototype independently, or start a conversation about
                the governance question your institution needs to make visible.
              </p>
              <div className="mirror-actions">
                <a
                  href={MIRROR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mirror-primary-action"
                >
                  Open the live prototype
                </a>
                <a href="/contact" className="mirror-secondary-action">
                  Contact ArchLife
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />

      <style>{`
        .mirror-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-items: center;
        }
        .mirror-primary-action {
          background: rgba(200,139,90,0.08);
          border: 1px solid rgba(200,139,90,0.45);
          color: var(--ink);
          font-family: var(--sans);
          font-size: 0.7rem;
          letter-spacing: 0.14em;
          line-height: 1.2;
          padding: 0.95rem 1.7rem;
          text-decoration: none;
          text-transform: uppercase;
        }
        .mirror-secondary-action {
          color: rgba(156,163,175,0.82);
          font-family: var(--sans);
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          line-height: 1.5;
          padding: 0.7rem 0;
          text-decoration: none;
          text-transform: uppercase;
        }
        .mirror-status-note {
          color: rgba(156,163,175,0.5);
          font-family: var(--sans);
          font-size: 0.64rem;
          letter-spacing: 0.08em;
          line-height: 1.7;
          margin: 1.8rem 0 0;
          text-transform: uppercase;
        }
        .mirror-intro-grid,
        .mirror-boundaries-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(280px, 0.85fr);
          gap: clamp(3rem, 9vw, 8rem);
          align-items: start;
          margin-top: 2rem;
        }
        .mirror-audience-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid rgba(200,139,90,0.12);
          margin-top: 2.5rem;
        }
        .mirror-audience-item {
          border-right: 1px solid rgba(200,139,90,0.08);
          min-height: 210px;
          padding: 2rem 2rem 2rem 0;
        }
        .mirror-audience-grid > div:not(:first-child) .mirror-audience-item {
          padding-left: 2rem;
        }
        .mirror-audience-grid > div:last-child .mirror-audience-item {
          border-right: none;
          padding-right: 0;
        }
        .mirror-audience-index {
          color: var(--gold-deep);
          font-family: var(--sans);
          font-size: 0.58rem;
          letter-spacing: 0.16em;
          line-height: 1.3;
        }
        .mirror-audience-item p {
          color: rgba(243,239,231,0.78);
          font-family: var(--serif);
          font-size: clamp(1.3rem, 2.3vw, 1.65rem);
          font-weight: 300;
          line-height: 1.35;
          margin: 1.15rem 0 0;
        }
        .mirror-boundary-item {
          border-top: 1px solid rgba(200,139,90,0.1);
          color: rgba(243,239,231,0.72);
          font-family: var(--sans);
          font-size: 0.84rem;
          font-weight: 300;
          line-height: 1.75;
          margin: 0;
          padding: 1.1rem 0;
        }
        .mirror-next-step {
          border-top: 1px solid rgba(200,139,90,0.2);
          border-bottom: 1px solid rgba(200,139,90,0.08);
          padding: clamp(3rem, 7vw, 5rem) 0;
        }
        .mirror-next-step h2 {
          color: var(--ink);
          font-family: var(--serif);
          font-size: clamp(2.3rem, 5vw, 4.4rem);
          font-weight: 300;
          letter-spacing: 0;
          line-height: 1.08;
          margin: 0 0 1.6rem;
          max-width: 760px;
        }
        .mirror-next-step p {
          color: var(--muted);
          font-family: var(--sans);
          font-size: 0.9rem;
          font-weight: 300;
          line-height: 1.9;
          margin: 0 0 2.4rem;
          max-width: 650px;
        }
        @media (max-width: 760px) {
          .mirror-hero {
            align-items: flex-start !important;
            min-height: auto !important;
            padding-bottom: 5rem !important;
          }
          .mirror-intro-grid,
          .mirror-boundaries-grid,
          .mirror-audience-grid,
          .mirror-row {
            grid-template-columns: 1fr !important;
          }
          .mirror-audience-item,
          .mirror-audience-grid > div:not(:first-child) .mirror-audience-item,
          .mirror-audience-grid > div:last-child .mirror-audience-item {
            border-bottom: 1px solid rgba(200,139,90,0.1);
            border-right: none;
            min-height: 0;
            padding: 1.7rem 0;
          }
        }
      `}</style>
    </div>
  );
}
