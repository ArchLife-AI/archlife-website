import { useEffect, useState } from "react";

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

export function MirrorMockup() {
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
    if (tag === "STRAIN" || tag === "DEBT") return "var(--gold)";
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
        fontFamily: "var(--sans)",
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
              background: "var(--gold)",
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
