import { useEffect, useRef, useState } from "react";
import { AtmosphericCanvas } from "@/components/AtmosphericCanvas/AtmosphericCanvas";
import { Nav } from "@/components/Navigation/Navigation";
import { Footer } from "@/components/Footer/Footer";
import { GlobalStyles } from "@/components/GlobalStyles/GlobalStyles";
import { ProductMapSection } from "@/components/ProductMapSection/ProductMapSection";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export const meta = () => [
  { title: "ArchLife | Healthcare AI Governance and Operations" },
  {
    name: "description",
    content:
      "ArchLife builds governance and operating systems for healthcare AI and high-strain institutions, spanning live prototypes, operational engagements, and research foundations.",
  },
];

const degradationModes = [
  "overload",
  "hidden strain",
  "normalized dysfunction",
  "fragmented coordination",
  "silent governance drift",
  "the slow erosion of reflective awareness",
];

const concepts = [
  {
    name: "Operational Trust",
    desc: "The ability of humans and institutions to rely on systems under uncertainty, overload, and imperfect information.",
  },
  {
    name: "Hidden Strain",
    desc: "Pressure accumulating beneath standard operational visibility.",
  },
  {
    name: "Ethical Debt",
    desc: "Unresolved institutional harm generated through repeated operational compromise.",
  },
  {
    name: "Governance Drift",
    desc: "The gradual mutation of institutional behavior under sustained pressure.",
  },
  {
    name: "Reflective Awareness",
    desc: "The capacity of systems to perceive their own degradation before collapse becomes irreversible.",
  },
];

const pillars = [
  {
    name: "Governance Systems",
    desc: "Operational governance frameworks for AI-mediated institutions — where oversight meets real-time uncertainty.",
  },
  {
    name: "Reflective Simulation",
    desc: "Modeling overload, adaptation, and hidden strain in environments before they manifest as visible failure.",
  },
  {
    name: "Human-Centered Infrastructure",
    desc: "Systems that preserve dignity, awareness, and coordination under sustained institutional pressure.",
  },
];

// ── Live mirror mockup nodes ──────────────────────────────────
const NODE_GRID = Array.from({ length: 48 }, (_, i) => ({
  id: i,
  state: i % 11 === 0 ? "critical" : i % 7 === 0 ? "degraded" : "stable",
  pulse: i % 13 === 0,
}));

const INSIGHTS = [
  { id: 0, tag: "STRAIN", text: "Coordination lag detected — Zone 4, +340ms above baseline" },
  { id: 1, tag: "TRUST", text: "Trust degradation signal normalizing — Dept 7 recovering" },
  { id: 2, tag: "DRIFT", text: "Governance pattern mutation detected — Phase 2 threshold" },
  { id: 3, tag: "LOAD", text: "Overload signal in surgical cluster — 3 cascades flagged" },
  { id: 4, tag: "AWARE", text: "Reflective loop re-engaged — institutional memory restored" },
  { id: 5, tag: "DEBT", text: "Ethical debt accumulation: 14 unresolved coordination gaps" },
  { id: 6, tag: "STRAIN", text: "Hidden pressure propagating to logistics layer — monitoring" },
];

function MirrorMockup() {
  const [tick, setTick] = useState(0);
  const [visibleInsights, setVisibleInsights] = useState([0, 1, 2]);

  useEffect(() => {
    const t = setInterval(() => {
      setTick((p) => p + 1);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    setVisibleInsights((prev) => {
      const next = [...prev];
      const candidate = (prev[0] + 1) % INSIGHTS.length;
      if (!next.includes(candidate)) {
        next.unshift(candidate);
        next.pop();
      }
      return next;
    });
  }, [tick]);

  const nodeColor = (state, pulse) => {
    if (state === "critical") return "rgba(200,80,60,0.75)";
    if (state === "degraded") return `rgba(200,139,90,${0.5 + (tick % 2) * 0.15})`;
    return "rgba(156,163,175,0.2)";
  };

  const tagColor = (tag) => {
    if (tag === "STRAIN" || tag === "DEBT") return "#C88B5A";
    if (tag === "TRUST" || tag === "AWARE") return "rgba(156,163,175,0.7)";
    if (tag === "DRIFT") return "rgba(200,80,60,0.75)";
    return "rgba(156,163,175,0.5)";
  };

  const metrics = [
    {
      label: "Governance Stability",
      value: 62 + Math.sin(tick * 0.4) * 4,
      color: "rgba(200,139,90,0.55)",
    },
    {
      label: "Trust Index",
      value: 48 + Math.sin(tick * 0.6) * 6,
      color: "rgba(200,139,90,0.4)",
    },
    {
      label: "Strain Load",
      value: 78 + Math.sin(tick * 0.3) * 3,
      color: "rgba(200,80,60,0.5)",
    },
  ];

  return (
    <div
      style={{
        background: "rgba(13,15,18,0.85)",
        border: "1px solid rgba(200,139,90,0.12)",
        backdropFilter: "blur(16px)",
        maxWidth: 780,
        width: "100%",
        margin: "0 auto",
        fontFamily: "'Inter', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Header bar */}
      <div
        style={{
          padding: "0.9rem 1.4rem",
          borderBottom: "1px solid rgba(200,139,90,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#C88B5A",
              animation: "pulse-dot 2s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(156,163,175,0.6)",
            }}
          >
            Institutional Mirror
          </span>
          <span
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.16em",
              color: "rgba(200,139,90,0.5)",
              textTransform: "uppercase",
            }}
          >
            · Illustrative Scenario
          </span>
        </div>
        <span
          style={{
            fontSize: "0.58rem",
            letterSpacing: "0.12em",
            color: "rgba(156,163,175,0.3)",
          }}
        >
          synthetic data
        </span>
      </div>

      {/* Main body */}
      <div
        className="mirror-body"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          borderBottom: "1px solid rgba(200,139,90,0.06)",
        }}
      >
        {/* Topology grid */}
        <div
          style={{
            padding: "1.4rem",
            borderRight: "1px solid rgba(200,139,90,0.06)",
          }}
        >
          <div
            style={{
              fontSize: "0.56rem",
              letterSpacing: "0.2em",
              color: "rgba(156,163,175,0.35)",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Operational Topology
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(8, 1fr)",
              gap: "6px",
            }}
          >
            {NODE_GRID.map((n) => (
              <div
                key={n.id}
                style={{
                  width: "100%",
                  aspectRatio: "1",
                  borderRadius: "2px",
                  background: nodeColor(n.state, n.pulse),
                  transition: "background 1.4s ease",
                }}
              />
            ))}
          </div>
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              gap: "1.2rem",
              alignItems: "center",
            }}
          >
            {[
              { label: "Stable", color: "rgba(156,163,175,0.2)" },
              { label: "Degraded", color: "rgba(200,139,90,0.6)" },
              { label: "Critical", color: "rgba(200,80,60,0.75)" },
            ].map((l) => (
              <div
                key={l.label}
                style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "1px",
                    background: l.color,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: "0.52rem",
                    color: "rgba(156,163,175,0.3)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {l.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Insight feed */}
        <div style={{ padding: "1.4rem" }}>
          <div
            style={{
              fontSize: "0.56rem",
              letterSpacing: "0.2em",
              color: "rgba(156,163,175,0.35)",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Reflective Insight Feed
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}
          >
            {visibleInsights.map((idx, pos) => (
              <div
                key={idx}
                style={{
                  opacity: pos === 0 ? 0.9 : pos === 1 ? 0.55 : 0.25,
                  transition: "opacity 1.2s ease",
                  borderLeft: `1px solid ${tagColor(INSIGHTS[idx].tag)}`,
                  paddingLeft: "0.8rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.52rem",
                    letterSpacing: "0.18em",
                    color: tagColor(INSIGHTS[idx].tag),
                    marginBottom: "0.2rem",
                  }}
                >
                  {INSIGHTS[idx].tag}
                </div>
                <div
                  style={{
                    fontSize: "0.68rem",
                    lineHeight: 1.6,
                    color: "rgba(243,239,231,0.6)",
                    fontWeight: 300,
                  }}
                >
                  {INSIGHTS[idx].text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Metrics bar */}
      <div
        style={{
          padding: "1rem 1.4rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.6rem",
        }}
      >
        {metrics.map((m) => (
          <div
            key={m.label}
            style={{ display: "flex", alignItems: "center", gap: "1rem" }}
          >
            <span
              style={{
                fontSize: "0.58rem",
                letterSpacing: "0.14em",
                color: "rgba(156,163,175,0.4)",
                textTransform: "uppercase",
                width: 160,
                flexShrink: 0,
              }}
            >
              {m.label}
            </span>
            <div
              style={{
                flex: 1,
                height: 2,
                background: "rgba(156,163,175,0.07)",
                borderRadius: 1,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${m.value}%`,
                  background: m.color,
                  transition: "width 1.8s ease",
                  borderRadius: 1,
                }}
              />
            </div>
            <span
              style={{
                fontSize: "0.58rem",
                color: "rgba(156,163,175,0.3)",
                width: 32,
                textAlign: "right",
                flexShrink: 0,
              }}
            >
              {Math.round(m.value)}%
            </span>
          </div>
        ))}
        <div
          style={{
            fontSize: "0.5rem",
            letterSpacing: "0.1em",
            color: "rgba(156,163,175,0.28)",
            lineHeight: 1.5,
            marginTop: "0.4rem",
            textTransform: "uppercase",
          }}
        >
          Illustrative scenario metrics. Not live clinical data.
        </div>
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────
export default function ArchLifePage() {
  return (
    <div
      style={{
        background: "#0D0F12",
        minHeight: "100vh",
        color: "#F3EFE7",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <AtmosphericCanvas />
      <Nav />
      <GlobalStyles />

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "8rem clamp(1.5rem, 6vw, 6rem) 6rem",
        }}
      >
        <Reveal>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#9B5E45",
              marginBottom: "2.8rem",
            }}
          >
            ArchLife
          </div>
        </Reveal>

        <Reveal delay={60}>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.6rem, 6vw, 5.2rem)",
              fontWeight: 300,
              lineHeight: 1.07,
              letterSpacing: "-0.02em",
              color: "#F3EFE7",
              maxWidth: 820,
              marginBottom: "2.8rem",
            }}
          >
            Governance and operating systems
            <br className="hero-br" />
            <em style={{ color: "#C88B5A", fontStyle: "italic" }}>
              for healthcare AI
            </em>
            <br className="hero-br" />
            and high-strain institutions.
          </h1>
        </Reveal>

        <Reveal delay={130}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.88rem",
              lineHeight: 1.95,
              color: "rgba(156,163,175,0.85)",
              maxWidth: 560,
              marginBottom: "3.8rem",
              fontWeight: 300,
            }}
          >
            ArchLife combines practical operating work with prototypes and
            research to help institutions recognise strain, make trade-offs
            visible, and govern AI with more care.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <a
              href="https://mirror.archlife.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#F3EFE7",
                border: "1px solid rgba(200,139,90,0.38)",
                padding: "0.9rem 2rem",
                textDecoration: "none",
                background: "rgba(200,139,90,0.07)",
                backdropFilter: "blur(8px)",
                transition: "all 0.4s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(200,139,90,0.14)";
                e.currentTarget.style.borderColor = "rgba(200,139,90,0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(200,139,90,0.07)";
                e.currentTarget.style.borderColor = "rgba(200,139,90,0.38)";
              }}
            >
              Explore Institutional Mirror
            </a>
            <a
              href="/dental-labs"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(156,163,175,0.6)",
                border: "1px solid rgba(156,163,175,0.12)",
                padding: "0.9rem 2rem",
                textDecoration: "none",
                transition: "all 0.4s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#F3EFE7";
                e.currentTarget.style.borderColor = "rgba(156,163,175,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(156,163,175,0.6)";
                e.currentTarget.style.borderColor = "rgba(156,163,175,0.12)";
              }}
            >
              For Dental Labs
            </a>
          </div>
        </Reveal>

        {/* Vertical thread down */}
        <Reveal delay={320}>
          <div
            style={{
              marginTop: "5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
              opacity: 0.22,
            }}
          >
            <div
              style={{
                width: 1,
                height: 56,
                background:
                  "linear-gradient(to bottom, transparent, rgba(200,139,90,0.8))",
              }}
            />
          </div>
        </Reveal>
      </section>

      <ProductMapSection />

      {/* ═══════════════════════════════════════
          WHY ARCHLIFE EXISTS
      ═══════════════════════════════════════ */}
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
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "#F3EFE7",
                letterSpacing: "-0.01em",
              }}
            >
              Systems fail
              <br />
              gradually before
              <br />
              they{" "}
              <em style={{ color: "#C88B5A", fontStyle: "italic" }}>
                fail visibly.
              </em>
            </h2>
          </Reveal>

          <div>
            <Reveal delay={100}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.88rem",
                  lineHeight: 1.95,
                  color: "#9CA3AF",
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
                        fontFamily: "'Cormorant Garamond', serif",
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
                  fontFamily: "'Inter', sans-serif",
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
                  fontFamily: "'Cormorant Garamond', serif",
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

      {/* ═══════════════════════════════════════
          CORE CONCEPTS
      ═══════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: "clamp(5rem,10vw,8rem) clamp(1.5rem,8vw,8rem)",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <Reveal>
          <SectionLabel>Core Concepts</SectionLabel>
        </Reveal>

        <Reveal delay={60}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
              fontWeight: 300,
              color: "#F3EFE7",
              marginBottom: "4rem",
              maxWidth: 540,
              lineHeight: 1.2,
              marginTop: "0.5rem",
            }}
          >
            Five forces at work inside every system under strain.
          </p>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
            borderTop: "1px solid rgba(200,139,90,0.1)",
          }}
          className="concepts-grid"
        >
          {concepts.map((c, i) => (
            <Reveal key={c.name} delay={i * 55 + 80}>
              <div
                className={`concept-card${i === concepts.length - 1 ? " concept-last" : ""}`}
                style={{
                  padding: "2.4rem 1.8rem 2.4rem 0",
                  borderRight: i === concepts.length - 1 ? "none" : "1px solid rgba(200,139,90,0.05)",
                  transition: "background 0.4s ease",
                  cursor: "default",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(200,139,90,0.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.58rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#9B5E45",
                    marginBottom: "1.1rem",
                  }}
                >
                  0{i + 1}
                </div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.3rem",
                    fontWeight: 300,
                    color: "#F3EFE7",
                    marginBottom: "0.8rem",
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {c.name}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.76rem",
                    lineHeight: 1.85,
                    color: "rgba(156,163,175,0.6)",
                    fontWeight: 300,
                  }}
                >
                  {c.desc}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          INSTITUTIONAL MIRROR
      ═══════════════════════════════════════ */}
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
          <SectionLabel>Flagship Prototype</SectionLabel>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "5rem",
            alignItems: "start",
            marginBottom: "5rem",
          }}
        >
          <div>
            <Reveal delay={60}>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                  fontWeight: 300,
                  lineHeight: 1.1,
                  color: "#F3EFE7",
                  letterSpacing: "-0.01em",
                  marginBottom: "2rem",
                }}
              >
                Institutions should be capable of noticing themselves{" "}
                <em style={{ color: "#C88B5A", fontStyle: "italic" }}>
                  deteriorating.
                </em>
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.86rem",
                  lineHeight: 1.95,
                  color: "#9CA3AF",
                  fontWeight: 300,
                  marginBottom: "1.6rem",
                }}
              >
                Institutional Mirror is a systemic governance simulator for
                clinical AI systems. It explores how overload, trust,
                escalation, and governance drift can interact under strain.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.82rem",
                  lineHeight: 1.85,
                  color: "rgba(156,163,175,0.5)",
                  fontWeight: 300,
                  marginBottom: "2.5rem",
                }}
              >
                This live prototype uses synthetic scenario data for reflective
                exploration. It is not a clinical decision system, monitoring
                product, or source of live hospital performance data.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <a
                href="https://mirror.archlife.in"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.68rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(156,163,175,0.55)",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(156,163,175,0.15)",
                  paddingBottom: "2px",
                  transition: "all 0.35s ease",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#C88B5A";
                  e.currentTarget.style.borderBottomColor =
                    "rgba(200,139,90,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(156,163,175,0.55)";
                  e.currentTarget.style.borderBottomColor =
                    "rgba(156,163,175,0.15)";
                }}
              >
                Open Institutional Mirror
              </a>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <MirrorMockup />
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          THE CANON
      ═══════════════════════════════════════ */}
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
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                  fontWeight: 300,
                  lineHeight: 1.1,
                  color: "#F3EFE7",
                  letterSpacing: "-0.01em",
                  marginBottom: "2rem",
                }}
              >
                Field Notes
                <br />
                Against{" "}
                <em style={{ color: "#C88B5A", fontStyle: "italic" }}>
                  Disappearance.
                </em>
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.86rem",
                  lineHeight: 1.95,
                  color: "#9CA3AF",
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
                  fontFamily: "'Inter', sans-serif",
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
                  e.currentTarget.style.color = "#F3EFE7";
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
                      fontFamily: "'Inter', sans-serif",
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
                      fontFamily: "'Cormorant Garamond', serif",
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

      {/* ═══════════════════════════════════════
          RESEARCH & SYSTEMS
      ═══════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: "clamp(5rem,10vw,8rem) clamp(1.5rem,8vw,8rem)",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <Reveal>
          <SectionLabel>Research</SectionLabel>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "0",
            borderTop: "1px solid rgba(200,139,90,0.1)",
            marginTop: "2.5rem",
          }}
        >
          {pillars.map((p, i) => (
            <Reveal key={p.name} delay={i * 70 + 80}>
              <div
                style={{
                  padding: "3rem 2.5rem 3rem 0",
                  borderRight: i === pillars.length - 1 ? "none" : "1px solid rgba(200,139,90,0.05)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.58rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#9B5E45",
                    marginBottom: "1.2rem",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.4rem",
                    fontWeight: 300,
                    color: "#F3EFE7",
                    marginBottom: "1rem",
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.name}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.78rem",
                    lineHeight: 1.85,
                    color: "rgba(156,163,175,0.55)",
                    fontWeight: 300,
                  }}
                >
                  {p.desc}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          DESIGN PHILOSOPHY
      ═══════════════════════════════════════ */}
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
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "#F3EFE7",
                letterSpacing: "-0.01em",
              }}
            >
              Calm systems
              <br />
              <em style={{ color: "#C88B5A", fontStyle: "italic" }}>
                intelligence.
              </em>
            </h2>
          </Reveal>

          <div>
            <Reveal delay={100}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.86rem",
                  lineHeight: 1.95,
                  color: "#9CA3AF",
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
                      fontFamily: "'Cormorant Garamond', serif",
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

      {/* ═══════════════════════════════════════
          FINAL QUOTE
      ═══════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: "clamp(8rem,16vw,14rem) clamp(1.5rem,8vw,8rem)",
          textAlign: "center",
          maxWidth: 720,
          margin: "0 auto",
        }}
      >
        <Reveal>
          <div
            style={{
              width: 1,
              height: 48,
              background:
                "linear-gradient(to bottom, transparent, rgba(200,139,90,0.25))",
              margin: "0 auto 4rem",
            }}
          />
        </Reveal>

        <Reveal delay={80}>
          <blockquote
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.3rem, 3vw, 1.9rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.75,
              color: "rgba(243,239,231,0.55)",
              letterSpacing: "0.01em",
              margin: 0,
              padding: 0,
              border: "none",
            }}
          >
            The purpose of reflection is not perfection.
            <br />
            <br />
            It is continuity.
            <br />
            <br />
            <span style={{ color: "rgba(243,239,231,0.35)" }}>
              The ability for people, systems, and institutions to remain aware
              enough of themselves to adapt before collapse becomes
              irreversible.
            </span>
          </blockquote>
        </Reveal>

        <Reveal delay={160}>
          <div
            style={{
              width: 1,
              height: 48,
              background:
                "linear-gradient(to bottom, rgba(200,139,90,0.25), transparent)",
              margin: "4rem auto 0",
            }}
          />
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER NAV ROW
      ═══════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: "3rem clamp(1.5rem,8vw,8rem)",
          borderTop: "1px solid rgba(200,139,90,0.06)",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        {[
          { label: "Canon", href: "/canon" },
          { label: "Institutional Mirror", href: "https://mirror.archlife.in", external: true },
          { label: "Dental Labs", href: "/dental-labs" },
          { label: "MedEvolv", href: "https://medevolv.in", external: true },
          { label: "Contact", href: "/contact" },
        ].map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.external ? "_blank" : undefined}
            rel={l.external ? "noopener noreferrer" : undefined}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.62rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(156,163,175,0.3)",
              textDecoration: "none",
              transition: "color 0.35s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "rgba(156,163,175,0.7)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(156,163,175,0.3)")
            }
          >
            {l.label}
          </a>
        ))}
      </section>

      <Footer />

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
        @media (max-width: 640px) {
          /* Hero headline: let text reflow naturally, suppress explicit breaks */
          .hero-br { display: none; }

          /* Origin section tighter gap */
          .origin-grid { gap: 3rem !important; }

          /* Concepts: 2-col on mobile with left padding so right-col cards breathe */
          .concepts-grid { grid-template-columns: 1fr 1fr !important; }
          .concept-card { padding-left: 1rem !important; }
          .concept-card.concept-last { border-right: none !important; }

          /* Mirror mockup: stack topology above insights on narrow screens */
          .mirror-body { grid-template-columns: 1fr !important; }
          .mirror-body > div:first-child {
            border-right: none !important;
            border-bottom: 1px solid rgba(200,139,90,0.06);
          }
        }
      `}</style>
    </div>
  );
}
