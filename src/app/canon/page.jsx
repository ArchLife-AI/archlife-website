import { useEffect, useRef, useState } from "react";
import { PageShell } from "@/components/PageShell/PageShell";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export const meta = () => [
  { title: "The Canon — ArchLife" },
  {
    name: "description",
    content:
      "A living topology of reflective systems thought. Reflection, operational trust, institutional cognition, governance under strain, and humane intelligence — explored as an interconnected field.",
  },
];

// ── Color system per cluster ────────────────────────────────
const C = {
  governance: "#5C7B91", // muted slate blue
  human: "#C88B5A", // soft amber (matches site brand)
  reflective: "#E8DDC8", // pale ivory
  institutional: "#6E8E89", // desaturated teal
  center: "#D4A574", // warm gold ivory
};

// ── Node positions inside viewBox 0..1000 (x) × 0..700 (y) ──
const NODES = {
  continuity: {
    name: "Continuity Under Strain",
    x: 500, y: 360, r: 38,
    type: "center", color: C.center,
    subtext:
      "The preservation of awareness, coordination, and adaptation under pressure.",
  },
  institutionalMemory: {
    name: "Institutional Memory",
    x: 510, y: 100, r: 22,
    type: "institutional", color: C.institutional,
  },
  reflection: {
    name: "Reflection",
    x: 300, y: 175, r: 26,
    type: "reflective", color: C.reflective,
  },
  operationalTrust: {
    name: "Operational Trust",
    x: 720, y: 175, r: 26,
    type: "institutional", color: C.institutional,
  },
  humanState: {
    name: "Human-State Dynamics",
    x: 165, y: 295, r: 26,
    type: "human", color: C.human,
  },
  institutionalCognition: {
    name: "Institutional Cognition",
    x: 840, y: 385, r: 26,
    type: "institutional", color: C.institutional,
  },
  governanceDrift: {
    name: "Governance Drift",
    x: 145, y: 470, r: 26,
    type: "governance", color: C.governance,
  },
  hiddenStrain: {
    name: "Hidden Strain",
    x: 725, y: 560, r: 26,
    type: "human", color: C.human,
  },
  automationDrift: {
    name: "Automation Drift",
    x: 290, y: 590, r: 26,
    type: "governance", color: C.governance,
  },
  ethicalDebt: {
    name: "Ethical Debt",
    x: 530, y: 615, r: 26,
    type: "governance", color: C.governance,
  },
};

// ── Relational edges (deduplicated, undirected unless noted) ──
const EDGES = [
  // Hub: every primary connects to Continuity
  ["continuity", "reflection"],
  ["continuity", "operationalTrust"],
  ["continuity", "institutionalCognition"],
  ["continuity", "hiddenStrain"],
  ["continuity", "ethicalDebt"],
  ["continuity", "governanceDrift"],
  ["continuity", "humanState"],
  ["continuity", "institutionalMemory"],
  ["continuity", "automationDrift"],
  // Cross-connections
  ["reflection", "hiddenStrain"],
  ["reflection", "institutionalCognition"],
  ["reflection", "operationalTrust"],
  ["reflection", "humanState"],
  ["reflection", "automationDrift"],
  ["operationalTrust", "governanceDrift"],
  ["operationalTrust", "humanState"],
  ["operationalTrust", "ethicalDebt"],
  ["operationalTrust", "automationDrift"],
  ["institutionalCognition", "governanceDrift"],
  ["institutionalCognition", "institutionalMemory"],
  ["institutionalCognition", "hiddenStrain"],
  ["hiddenStrain", "ethicalDebt"],
  ["hiddenStrain", "humanState"],
  ["ethicalDebt", "governanceDrift"],
  ["ethicalDebt", "automationDrift"],
  ["governanceDrift", "institutionalMemory"],
  ["governanceDrift", "automationDrift"],
  ["automationDrift", "humanState"],
];

const ADJ = (() => {
  const m = {};
  Object.keys(NODES).forEach((k) => (m[k] = new Set()));
  EDGES.forEach(([a, b]) => {
    m[a].add(b);
    m[b].add(a);
  });
  return m;
})();

// ── Concept content per node ─────────────────────────────────
const CONCEPT = {
  continuity: {
    definition:
      "The preservation of awareness, coordination, and adaptation under pressure.",
    whyItMatters:
      "Most institutional collapses are not single events — they are continuity failures. When awareness, coordination, and adaptive capacity erode in parallel, systems lose the ability to remain themselves under load. Continuity is the gravitational center of every concept in this Canon.",
    failureModes: [
      "Coordination fragmentation under sustained overload",
      "Awareness compression — fewer signals reach decision layers",
      "Adaptive capacity narrows to short-horizon survival",
    ],
    operational: [
      "Hospital systems holding clinical quality through staff turnover",
      "Public health bodies maintaining trust through repeated crises",
      "AI-mediated institutions preserving accountability under scale",
    ],
    related: ["reflection", "operationalTrust", "institutionalCognition"],
    essays: [
      "Before Notice",
      "The Architecture of Return",
      "Notice, Hold, Heal, Release",
    ],
    simulation:
      "Institutional Mirror treats continuity as the integrating variable beneath every other metric. Trust, strain, drift, and cognition are all read against it.",
    governance:
      "Without continuity, governance becomes reactive theatre. AI-era institutions must preserve continuity by design, not by exception.",
  },
  reflection: {
    definition:
      "The capacity of systems to perceive their own degradation before collapse becomes irreversible.",
    whyItMatters:
      "Failure modes almost always begin invisibly. Without reflective capacity, institutions learn about their problems only after damage is done — through harm, through scandal, through collapse. Reflection is the difference between adaptive systems and reactive ones.",
    failureModes: [
      "Pattern blindness — recurring failures treated as isolated incidents",
      "Normalization of dysfunction — strain becomes the baseline",
      "Late-stage crisis response replaces continuous adaptation",
    ],
    operational: [
      "Post-incident reviews that reach upstream causes, not just proximal events",
      "Real-time observability of operational health, not just outputs",
      "Institutional memory systems that surface recurrence patterns",
    ],
    related: ["hiddenStrain", "institutionalCognition", "operationalTrust"],
    essays: [
      "Before Notice",
      "The Dialectical Self",
      "On the Limits of Optimization",
    ],
    simulation:
      "Modeled in Institutional Mirror through the Reflective Insight Feed — surfacing degradation signals before they reach operational visibility.",
    governance:
      "AI governance without reflection is governance without conscience. Reflective capacity is the auditability layer that makes responsible adaptation possible.",
  },
  operationalTrust: {
    definition:
      "The sustained ability of humans and institutions to rely on systems under uncertainty, overload, and imperfect information.",
    whyItMatters:
      "Trust is infrastructure. When operational trust erodes, every other coordination cost rises — handoffs require verification, decisions require second-guessing, communication slows. Most institutional fragility is, downstream, a trust failure.",
    failureModes: [
      "Compensatory verification — work duplicates to confirm prior work",
      "Defensive coordination — actors optimize against blame rather than outcome",
      "Trust collapse cascades — single events trigger systemic withdrawal",
    ],
    operational: [
      "Surgical teams that maintain coordination through staff rotation",
      "Public agencies that hold legitimacy through visible accountability",
      "AI-mediated systems where human override is calibrated, not adversarial",
    ],
    related: ["governanceDrift", "humanState", "reflection"],
    essays: [
      "When Intelligence Becomes a Utility",
      "The Machine's Constitution and the Human Person",
      "On the Limits of Optimization",
    ],
    simulation:
      "Tracked as Trust Index in Institutional Mirror — a continuous variable rather than a binary outcome.",
    governance:
      "Operational trust must be measured before it collapses. Governance systems that wait for trust failure to detect it are already too late.",
  },
  institutionalCognition: {
    definition:
      "Institutions as adaptive reasoning systems operating under pressure.",
    whyItMatters:
      "Institutions are not buildings or org charts — they are reasoning systems. They take inputs, hold memory, make decisions, and adapt. When cognitive capacity is treated as a property of people rather than a property of the institution, scale destroys coherence.",
    failureModes: [
      "Cognition concentrated in single individuals — institutional fragility on retirement",
      "Decision loops decoupled from institutional memory",
      "Adaptation that erases the reasoning behind the previous adaptation",
    ],
    operational: [
      "Clinical guidelines that preserve reasoning behind protocols",
      "Governance bodies that maintain coherence across leadership turnover",
      "AI-augmented institutions where the augmentation becomes legible to operators",
    ],
    related: ["governanceDrift", "institutionalMemory", "hiddenStrain"],
    essays: [
      "Institutional Memory and the Forgetting Machine",
      "The Fragmented Clinic",
      "The Icarus Problem",
    ],
    simulation:
      "Represented in Institutional Mirror as the layer where signals are integrated into decisions — the institution's reasoning process, made observable.",
    governance:
      "AI-era institutions must treat cognition as institutional infrastructure, not as an emergent property of individuals.",
  },
  hiddenStrain: {
    definition:
      "Operational degradation accumulating beneath standard visibility.",
    whyItMatters:
      "Almost all institutional collapse is preceded by strain that the institution itself could not see. Hidden strain is the gap between what an institution measures and what it is actually experiencing. Closing that gap is the first work of reflective infrastructure.",
    failureModes: [
      "Compensatory effort hiding the real load",
      "Senior people absorbing strain that should be visible",
      "Metrics that measure outputs but miss the cost of producing them",
    ],
    operational: [
      "Nursing teams running on overtime that doesn't show in dashboards",
      "Junior staff carrying the cognitive load of unclear protocols",
      "AI-mediated systems where automation hides the labor of correction",
    ],
    related: ["reflection", "ethicalDebt", "humanState"],
    essays: [
      "The Icarus Problem",
      "Ascent Without Feedback",
      "The Rhythm of Infrastructure",
    ],
    simulation:
      "Visualized in Institutional Mirror as Strain Load — the variable most likely to be under-reported by the institution itself.",
    governance:
      "Governance under hidden strain is governance with incomplete information. Surfacing strain is a prerequisite for legitimate decision-making.",
  },
  ethicalDebt: {
    definition:
      "Accumulated unresolved systemic harm generated through repeated compromise.",
    whyItMatters:
      "Every institution makes operational compromises. When those compromises remain unresolved — through neglect, through inertia, through the absence of corrective mechanisms — they accumulate as ethical debt. The interest rate on this debt is institutional legitimacy.",
    failureModes: [
      "Compromise patterns becoming policy through repetition",
      "Harm absorbed by populations who cannot signal it back",
      "Repair work systematically deferred until reputational crisis",
    ],
    operational: [
      "Patient populations bearing the cost of throughput targets",
      "Frontline workers absorbing the ethical weight of system constraints",
      "AI systems whose downstream harms surface only at scale",
    ],
    related: ["governanceDrift", "hiddenStrain", "operationalTrust"],
    essays: [
      "The Elder Brother Problem",
      "The Machine's Constitution and the Human Person",
    ],
    simulation:
      "Modeled as a slow-accumulating reservoir in Institutional Mirror — debt that compounds when reflection and trust degrade together.",
    governance:
      "Ethical debt repayment is governance work. Institutions that defer it indefinitely lose the moral standing to govern.",
  },
  governanceDrift: {
    definition:
      "The gradual mutation of institutional behavior under sustained pressure.",
    whyItMatters:
      "Institutions rarely change their stated principles — they change their operational behavior. Governance drift is the slow divergence between what an institution says it does and what it actually does. By the time the gap becomes visible, the drift is structural.",
    failureModes: [
      "Mission statements outpacing operational reality",
      "Exceptions becoming rules through repetition",
      "Accountability structures decoupling from authority structures",
    ],
    operational: [
      "Care pathways diverging from clinical guidelines under throughput pressure",
      "Regulatory bodies whose enforcement softens to match institutional capacity",
      "AI deployment whose actual scope outgrows its governance frame",
    ],
    related: ["ethicalDebt", "institutionalCognition", "operationalTrust"],
    essays: [
      "The Machine's Constitution and the Human Person",
      "Institutional Memory and the Forgetting Machine",
    ],
    simulation:
      "Tracked in Institutional Mirror as a directional vector — drift is not a point, it is a trajectory.",
    governance:
      "Governance must be able to detect its own drift. Without that capacity, governance becomes the institutional equivalent of denial.",
  },
  automationDrift: {
    definition:
      "The gradual shift from human-supervised assistance to unexamined system dependence — where automated outputs, recommendations, or actions become normalized faster than institutional oversight can adapt.",
    whyItMatters:
      "Healthcare AI does not only fail when models hallucinate. It fails when humans begin trusting fluent automation because it is fast, convenient, and embedded into workflow. Over time, staff stop checking, escalation weakens, and automated behavior becomes institutional habit. The most dangerous AI failures may not happen when humans reject automation — but when they adapt to it too easily.",
    failureModes: [
      "Verification rituals quietly abandoned as automation becomes routine",
      "Escalation thresholds rising silently as alerts get normalized",
      "Automated behavior becoming the institutional default before policy catches up",
    ],
    operational: [
      "Clinical decision support outputs accepted without case-level review",
      "Imaging triage queues reordered by AI without radiologist audit of priority shifts",
      "Agentic systems executing multi-step workflows whose intermediate steps no one inspects",
    ],
    related: ["operationalTrust", "governanceDrift", "ethicalDebt", "reflection", "humanState"],
    essays: [
      "When Intelligence Becomes a Utility",
      "Intelligence as Extraction vs Intelligence as Care",
      "On the Limits of Optimization",
    ],
    simulation:
      "Modeled in Institutional Mirror as a divergence between stated supervision and observed override rates — a slow trajectory away from the governance frame that nominally constrains it.",
    governance:
      "Automation Drift is a bridge risk across the healthcare AI gaps: it links generative fluency, agentic action, and implementation thinness into a single failure pattern. Governance must monitor adaptation, not just deployment.",
  },
  humanState: {
    definition:
      "Emotional and cognitive human conditions as operational system variables.",
    whyItMatters:
      "Institutions are made of people in states. Exhaustion, fear, hope, grief, attention, doubt — these are not soft variables. They are the operating conditions of the system. Institutions that treat human-state as external to their operations end up running on broken inputs.",
    failureModes: [
      "Workforce burnout treated as individual failure, not systemic signal",
      "Decisions made under cognitive load that the institution cannot model",
      "Trust gestures unmatched to the human state of the recipient",
    ],
    operational: [
      "Clinician burnout surfacing in chart latency before it surfaces in HR",
      "Public-trust shifts after acute events shaping policy reception for years",
      "AI interfaces whose tone fails when users are in distress",
    ],
    related: ["operationalTrust", "hiddenStrain", "reflection"],
    essays: [
      "The Labour of Becoming Real",
      "Ubermensch and Aniruddha",
      "Notice, Hold, Heal, Release",
    ],
    simulation:
      "Institutional Mirror represents human-state as both a signal source and an operating condition — affecting how every other variable is read.",
    governance:
      "Humane governance is operationally cheaper than humane recovery. Institutions that ignore human-state pay the cost downstream.",
  },
  institutionalMemory: {
    definition:
      "The persistence of historical patterns shaping future institutional behavior.",
    whyItMatters:
      "Institutions remember whether they intend to or not. Procedures, norms, cultural sediment — these are memory artifacts. The question is whether the institution's memory is legible to itself, or whether it operates as inheritance the institution can no longer read.",
    failureModes: [
      "Past decisions reproduced without their original reasoning",
      "Lessons localized in individuals — lost when individuals leave",
      "Memory weaponized in factional disputes rather than used as ground",
    ],
    operational: [
      "Clinical protocols carrying knowledge no current staff can fully explain",
      "Regulatory frameworks built atop prior crises whose context is forgotten",
      "Institutional defaults that govern AI deployment without being revisited",
    ],
    related: ["institutionalCognition", "governanceDrift", "ethicalDebt"],
    essays: [
      "Institutional Memory and the Forgetting Machine",
      "The Architecture of Return",
    ],
    simulation:
      "Modeled as the slow-changing substrate beneath active operational variables — the conditions inherited rather than chosen.",
    governance:
      "Governance without legible institutional memory becomes governance by repetition. The work of memory is the work of choosing what to inherit.",
  },
};

// ── Canonical essays catalogue ───────────────────────────────
const ESSAY_LINKS = {
  "On the Limits of Optimization": "/articles/limits-of-optimization",
  "Institutional Memory and the Forgetting Machine":
    "/articles/institutional-memory",
  "Notice, Hold, Heal, Release": "/articles/notice-hold-heal-release",
  "Notice, Hold, Heal, Release: A Systems Heuristic":
    "/articles/notice-hold-heal-release",
  "The Rhythm of Infrastructure": "/articles/rhythm-of-infrastructure",
  "Intelligence as Extraction vs Intelligence as Care":
    "/articles/intelligence-as-care",
  "Intelligence as Extraction vs. Intelligence as Care":
    "/articles/intelligence-as-care",
  "The Fragmented Clinic": "/articles/fragmented-clinic",
  "The Icarus Problem": "/canon/icarus",
  "Ascent Without Feedback": "/canon/ascent-without-feedback",
  "The Architecture of Return": "/canon/architecture-of-return",
  "The Elder Brother Problem": "/canon/elder-brother-problem",
  "The Labour of Becoming Real": "/canon/labour-of-becoming-real",
  "When Intelligence Becomes a Utility":
    "/canon/when-intelligence-becomes-a-utility",
  "The Dialectical Self": "/canon/dialectical-self",
  "Ubermensch and Aniruddha": "/canon/ubermensch-and-aniruddha",
  "Spirituality as an Abstract Boat": "/canon/spirituality-as-an-abstract-boat",
  "Before Notice": "/canon/before-notice",
  "The Machine's Constitution and the Human Person":
    "/canon/machine-constitution",
};

const ESSAYS = [
  {
    title: "The Icarus Problem",
    blurb: "On ascent, collapse, and the systems that fail to notice.",
    readTime: "12 min",
    href: "/canon/icarus",
    concepts: ["hiddenStrain", "reflection", "ethicalDebt"],
  },
  {
    title: "Ascent Without Feedback",
    blurb: "When growth outruns the systems that hold it.",
    readTime: "14 min",
    href: "/canon/ascent-without-feedback",
    concepts: ["hiddenStrain", "automationDrift", "continuity"],
  },
  {
    title: "The Architecture of Return",
    blurb: "On repair, belonging, and systems that receive people back.",
    readTime: "14 min",
    href: "/canon/architecture-of-return",
    concepts: ["continuity", "humanState", "institutionalMemory"],
  },
  {
    title: "The Elder Brother Problem",
    blurb: "The hidden wound of the one who stayed.",
    readTime: "14 min",
    href: "/canon/elder-brother-problem",
    concepts: ["humanState", "ethicalDebt", "reflection"],
  },
  {
    title: "The Labour of Becoming Real",
    blurb: "Identity rupture, and the self rebuilt through love and labour.",
    readTime: "12 min",
    href: "/canon/labour-of-becoming-real",
    concepts: ["humanState", "continuity", "reflection"],
  },
  {
    title: "When Intelligence Becomes a Utility",
    blurb: "Commodified intelligence and who gets to think.",
    readTime: "13 min",
    href: "/canon/when-intelligence-becomes-a-utility",
    concepts: ["automationDrift", "operationalTrust", "ethicalDebt"],
  },
  {
    title: "The Dialectical Self",
    blurb:
      "Radical acceptance, two-sided truths, and becoming whole without becoming rigid.",
    readTime: "8 min",
    href: "/canon/dialectical-self",
    concepts: ["reflection", "humanState", "continuity"],
  },
  {
    title: "Ubermensch and Aniruddha",
    blurb: "The kind of strength that does not need to dominate.",
    readTime: "8 min",
    href: "/canon/ubermensch-and-aniruddha",
    concepts: ["humanState", "ethicalDebt", "reflection"],
  },
  {
    title: "Spirituality as an Abstract Boat",
    blurb: "What carries us when intellect is not enough.",
    readTime: "8 min",
    href: "/canon/spirituality-as-an-abstract-boat",
    concepts: ["reflection", "continuity", "humanState"],
  },
  {
    title: "Before Notice",
    blurb:
      "How NHHR became NaHzHaR, and why Heidegger changed the first step.",
    readTime: "9 min",
    href: "/canon/before-notice",
    concepts: ["reflection", "hiddenStrain", "continuity"],
  },
  {
    title: "The Machine's Constitution and the Human Person",
    blurb:
      "Babel, Nehemiah, and the Builder and Architect reading Claude's Constitution.",
    readTime: "10 min",
    href: "/canon/machine-constitution",
    concepts: ["operationalTrust", "governanceDrift", "ethicalDebt"],
  },
];

const PUBLIC_NOTES = [
  {
    title: "On the Limits of Optimization",
    blurb:
      "When systems optimize for efficiency alone, they quietly erase the human margin where adaptation, care, and meaning live.",
    readTime: "2 min",
    href: "/articles/limits-of-optimization",
    concepts: ["operationalTrust", "ethicalDebt", "humanState", "automationDrift"],
  },
  {
    title: "Institutional Memory and the Forgetting Machine",
    blurb:
      "Modern institutions accumulate process but lose memory. The cost is invisible until the system fragments under its own velocity.",
    readTime: "2 min",
    href: "/articles/institutional-memory",
    concepts: ["institutionalMemory", "governanceDrift", "reflection"],
  },
  {
    title: "Notice, Hold, Heal, Release",
    blurb:
      "A systems heuristic for operational intelligence that honors the recursive, nonlinear nature of integration in humans and institutions alike.",
    readTime: "2 min",
    href: "/articles/notice-hold-heal-release",
    concepts: ["reflection", "humanState", "continuity"],
  },
  {
    title: "The Rhythm of Infrastructure",
    blurb:
      "Every operational system has a rhythm. When that rhythm breaks through speed, fragmentation, or overload, the system loses coherence.",
    readTime: "2 min",
    href: "/articles/rhythm-of-infrastructure",
    concepts: ["hiddenStrain", "institutionalCognition", "continuity"],
  },
  {
    title: "Intelligence as Extraction vs Intelligence as Care",
    blurb:
      "The dominant AI paradigm extracts signal. A humane alternative asks what a system needs to become more coherent, not just more efficient.",
    readTime: "2 min",
    href: "/articles/intelligence-as-care",
    concepts: ["operationalTrust", "reflection", "humanState", "automationDrift"],
  },
  {
    title: "The Fragmented Clinic",
    blurb:
      "Healthcare fragmentation is not a technical failure. It is a coordination failure — and coordination is a deeply human problem wearing technical clothing.",
    readTime: "2 min",
    href: "/articles/fragmented-clinic",
    concepts: [
      "institutionalCognition",
      "governanceDrift",
      "hiddenStrain",
      "automationDrift",
    ],
  },
];

// ── Constellation SVG ────────────────────────────────────────
function Constellation({ activeId, hoveredId, onHover, onClick }) {
  const svgRef = useRef(null);
  const [tick, setTick] = useState(0);

  // ambient breathing — drives soft pulses on connections + nodes
  useEffect(() => {
    let raf;
    let start = performance.now();
    function loop(now) {
      setTick((now - start) / 1000);
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const focusId = hoveredId || activeId;
  const isHighlighted = (id) => {
    if (!focusId) return false;
    if (id === focusId) return true;
    return ADJ[focusId]?.has(id);
  };
  const isEdgeHighlighted = (a, b) =>
    focusId && (a === focusId || b === focusId);

  const dimAll = !!focusId;

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1000 700"
      preserveAspectRatio="xMidYMid meet"
      style={{
        width: "100%",
        height: "auto",
        display: "block",
        maxHeight: "min(680px, 80vh)",
      }}
      role="img"
      aria-label="Canon constellation — interactive concept topology"
    >
      <defs>
        {Object.entries(NODES).map(([id, n]) => (
          <radialGradient
            key={`grad-${id}`}
            id={`grad-${id}`}
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop offset="0%" stopColor={n.color} stopOpacity="0.85" />
            <stop offset="60%" stopColor={n.color} stopOpacity="0.25" />
            <stop offset="100%" stopColor={n.color} stopOpacity="0" />
          </radialGradient>
        ))}
      </defs>

      {/* Edges */}
      {EDGES.map(([a, b], i) => {
        const na = NODES[a];
        const nb = NODES[b];
        const highlighted = isEdgeHighlighted(a, b);
        const baseOp = highlighted ? 0.45 : dimAll ? 0.04 : 0.12;
        const pulse = Math.sin(tick * 0.6 + i * 0.5) * 0.04;
        return (
          <line
            key={`${a}-${b}`}
            x1={na.x}
            y1={na.y}
            x2={nb.x}
            y2={nb.y}
            stroke={highlighted ? C.center : "rgba(200,139,90,1)"}
            strokeOpacity={Math.max(0, baseOp + pulse)}
            strokeWidth={highlighted ? 1.1 : 0.6}
            style={{ transition: "stroke-opacity 0.5s ease, stroke-width 0.5s ease, stroke 0.5s ease" }}
          />
        );
      })}

      {/* Nodes */}
      {Object.entries(NODES).map(([id, n]) => {
        const highlighted = isHighlighted(id);
        const isFocus = id === focusId;
        const dim = dimAll && !highlighted;
        const breath = 1 + Math.sin(tick * 0.5 + (n.x + n.y) * 0.01) * 0.025;
        const baseR = n.r * breath;
        const haloR = baseR * (isFocus ? 3.6 : highlighted ? 2.9 : 2.4);
        return (
          <g
            key={id}
            style={{
              cursor: "pointer",
              transition: "opacity 0.5s ease",
              opacity: dim ? 0.3 : 1,
            }}
            onMouseEnter={() => onHover(id)}
            onMouseLeave={() => onHover(null)}
            onClick={() => onClick(id)}
          >
            {/* Halo */}
            <circle
              cx={n.x}
              cy={n.y}
              r={haloR}
              fill={`url(#grad-${id})`}
              opacity={isFocus ? 0.95 : highlighted ? 0.55 : 0.32}
              style={{ transition: "r 0.5s ease, opacity 0.5s ease" }}
            />
            {/* Core */}
            <circle
              cx={n.x}
              cy={n.y}
              r={baseR}
              fill={n.color}
              fillOpacity={n.type === "center" ? 0.85 : 0.6}
              stroke={n.color}
              strokeOpacity={isFocus ? 1 : 0.4}
              strokeWidth={isFocus ? 1.2 : 0.6}
              style={{ transition: "fill-opacity 0.5s ease, stroke-opacity 0.5s ease" }}
            />
            {/* Inner dot for center node */}
            {n.type === "center" && (
              <circle
                cx={n.x}
                cy={n.y}
                r={baseR * 0.35}
                fill="#0D0F12"
                fillOpacity={0.85}
              />
            )}
            {/* Label */}
            <text
              x={n.x}
              y={n.y + n.r + 22}
              textAnchor="middle"
              fill={highlighted ? "#F3EFE7" : "rgba(243,239,231,0.65)"}
              style={{
                fontFamily: "var(--serif)",
                fontSize: n.type === "center" ? "16px" : "13.5px",
                fontWeight: 300,
                letterSpacing: "0.02em",
                fontStyle: n.type === "center" ? "italic" : "normal",
                transition: "fill 0.5s ease",
                pointerEvents: "none",
              }}
            >
              {n.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// ── Concept Panel ────────────────────────────────────────────
function ConceptPanel({ id, onClose, onJump }) {
  if (!id) return null;
  const node = NODES[id];
  const data = CONCEPT[id];
  if (!node || !data) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(13,15,18,0.6)",
          backdropFilter: "blur(2px)",
          zIndex: 200,
          transition: "opacity 0.4s ease",
        }}
      />
      {/* Panel */}
      <aside
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "clamp(360px, 44vw, 580px)",
          height: "100vh",
          background: "rgba(13,15,18,0.94)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderLeft: "1px solid rgba(200,139,90,0.12)",
          zIndex: 201,
          overflowY: "auto",
          padding: "clamp(2.5rem, 5vw, 4rem) clamp(1.6rem, 3.5vw, 3rem)",
          animation: "canon-panel-in 0.45s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close concept panel"
          style={{
            position: "absolute",
            top: "1.4rem",
            right: "1.4rem",
            background: "none",
            border: "1px solid rgba(200,139,90,0.18)",
            color: "rgba(243,239,231,0.55)",
            width: 34,
            height: 34,
            borderRadius: "50%",
            cursor: "pointer",
            fontFamily: "var(--sans)",
            fontSize: "0.85rem",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(200,139,90,0.5)";
            e.currentTarget.style.color = "var(--ink)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(200,139,90,0.18)";
            e.currentTarget.style.color = "rgba(243,239,231,0.55)";
          }}
        >
          ×
        </button>

        {/* Cluster tag */}
        <div
          style={{
            fontFamily: "var(--sans)",
            fontSize: "0.58rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: node.color,
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: node.color,
              display: "inline-block",
            }}
          />
          {node.type === "center" ? "Center" : node.type.replace(/^./, (c) => c.toUpperCase()) + " Cluster"}
        </div>

        {/* Title */}
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "var(--ink)",
            margin: 0,
            marginBottom: "2rem",
            letterSpacing: "-0.01em",
          }}
        >
          {node.name}
        </h2>

        {/* Definition */}
        <Block label="Definition">
          <p
            style={{
              fontFamily: "var(--serif)",
              fontSize: "1.15rem",
              fontStyle: "italic",
              fontWeight: 300,
              lineHeight: 1.6,
              color: "var(--ink)",
              margin: 0,
            }}
          >
            {data.definition}
          </p>
        </Block>

        <Block label="Why it matters">
          <Body>{data.whyItMatters}</Body>
        </Block>

        <Block label="Failure modes">
          <ItemList items={data.failureModes} accent={node.color} />
        </Block>

        <Block label="Operational examples">
          <ItemList items={data.operational} accent={node.color} />
        </Block>

        <Block label="Related concepts">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {data.related.map((relId) => {
              const r = NODES[relId];
              if (!r) return null;
              return (
                <button
                  key={relId}
                  onClick={() => onJump(relId)}
                  style={{
                    background: "rgba(200,139,90,0.06)",
                    border: `1px solid ${r.color}55`,
                    color: r.color,
                    padding: "0.5rem 0.9rem",
                    fontFamily: "var(--sans)",
                    fontSize: "0.66rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${r.color}1A`;
                    e.currentTarget.style.borderColor = `${r.color}AA`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(200,139,90,0.06)";
                    e.currentTarget.style.borderColor = `${r.color}55`;
                  }}
                >
                  {r.name}
                </button>
              );
            })}
          </div>
        </Block>

        <Block label="Canonical essays">
          {data.essays.map((title) => {
            const href = ESSAY_LINKS[title];
            const style = {
              fontFamily: "var(--serif)",
              fontSize: "1.05rem",
              fontWeight: 300,
              color: "rgba(243,239,231,0.7)",
              fontStyle: "italic",
              marginBottom: "0.4rem",
              textDecoration: "none",
              display: "block",
              transition: "color 0.3s ease",
            };
            if (!href) {
              return (
                <div key={title} style={style}>
                  — {title}
                </div>
              );
            }
            return (
              <a
                key={title}
                href={href}
                style={style}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#C88B5A";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(243,239,231,0.7)";
                }}
              >
                — {title}
              </a>
            );
          })}
        </Block>

        <Block label="In Institutional Mirror">
          <Body>{data.simulation}</Body>
        </Block>

        <Block label="Governance implications">
          <Body>{data.governance}</Body>
        </Block>

        {/* Footer thread */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(200,139,90,0.08)",
            fontFamily: "var(--sans)",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(156,163,175,0.35)",
          }}
        >
          ArchLife · Canon · {node.name}
        </div>
      </aside>

      <style>{`
        @keyframes canon-panel-in {
          from { transform: translateX(40px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </>
  );
}

function Block({ label, children }) {
  return (
    <div style={{ marginBottom: "2.4rem" }}>
      <div
        style={{
          fontFamily: "var(--sans)",
          fontSize: "0.58rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--gold-deep)",
          marginBottom: "0.9rem",
        }}
      >
        {label}
      </div>
      {children}
    </div>
  );
}

function Body({ children }) {
  return (
    <p
      style={{
        fontFamily: "var(--sans)",
        fontSize: "0.85rem",
        lineHeight: 1.92,
        color: "rgba(243,239,231,0.7)",
        fontWeight: 300,
        margin: 0,
      }}
    >
      {children}
    </p>
  );
}

function ItemList({ items, accent }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
      {items.map((t, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "0.8rem",
            fontFamily: "var(--sans)",
            fontSize: "0.82rem",
            lineHeight: 1.75,
            color: "rgba(243,239,231,0.65)",
            fontWeight: 300,
          }}
        >
          <span
            style={{
              width: 14,
              height: 0.5,
              background: `${accent}88`,
              flexShrink: 0,
              marginTop: "0.6em",
            }}
          />
          <span>{t}</span>
        </div>
      ))}
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────
export default function CanonPage() {
  const [activeId, setActiveId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  // Lock body scroll when panel open
  useEffect(() => {
    if (activeId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeId]);

  // ESC to close panel
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setActiveId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <PageShell>
      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: "clamp(8rem, 16vw, 12rem) clamp(1.5rem,6vw,6rem) clamp(4rem,8vw,6rem)",
          textAlign: "center",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        <Reveal>
          <div
            style={{
              fontFamily: "var(--sans)",
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--gold-deep)",
              marginBottom: "2.2rem",
            }}
          >
            ArchLife · Canon
          </div>
        </Reveal>

        <Reveal delay={60}>
          <h1
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(3rem, 7vw, 5.6rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--ink)",
              margin: 0,
              marginBottom: "2rem",
            }}
          >
            The <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Canon.</em>
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <p
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(1.2rem, 2.4vw, 1.7rem)",
              fontStyle: "italic",
              fontWeight: 300,
              color: "rgba(243,239,231,0.7)",
              lineHeight: 1.55,
              maxWidth: 640,
              margin: "0 auto 2.5rem",
            }}
          >
            A living topology of reflective systems thought.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: "0.9rem",
              lineHeight: 1.95,
              color: "rgba(156,163,175,0.85)",
              maxWidth: 580,
              margin: "0 auto 2rem",
              fontWeight: 300,
            }}
          >
            The Canon is an evolving body of work exploring reflection, operational
            trust, institutional cognition, governance under strain, humane
            intelligence, memory, continuity, and adaptive systems.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: "0.84rem",
              lineHeight: 1.9,
              color: "rgba(156,163,175,0.55)",
              maxWidth: 560,
              margin: "0 auto 3.5rem",
              fontWeight: 300,
            }}
          >
            Not a fixed doctrine. A reflective infrastructure for understanding how
            humans and institutions preserve awareness under conditions of overload,
            uncertainty, and accelerating complexity.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <a
            href="#topology"
            style={{
              fontFamily: "var(--sans)",
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--ink)",
              border: "1px solid rgba(200,139,90,0.4)",
              padding: "0.9rem 2rem",
              textDecoration: "none",
              background: "rgba(200,139,90,0.06)",
              backdropFilter: "blur(8px)",
              transition: "all 0.4s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(200,139,90,0.14)";
              e.currentTarget.style.borderColor = "rgba(200,139,90,0.65)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(200,139,90,0.06)";
              e.currentTarget.style.borderColor = "rgba(200,139,90,0.4)";
            }}
          >
            Explore the Topology
          </a>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════
          CONSTELLATION
      ═══════════════════════════════════════ */}
      <section
        id="topology"
        style={{
          position: "relative",
          zIndex: 1,
          padding: "clamp(2rem,4vw,4rem) clamp(1rem,4vw,4rem) clamp(6rem,10vw,9rem)",
          maxWidth: 1240,
          margin: "0 auto",
        }}
      >
        <Reveal>
          <SectionLabel>Topology</SectionLabel>
        </Reveal>

        <Reveal delay={60}>
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: "0.78rem",
              letterSpacing: "0.04em",
              color: "rgba(156,163,175,0.55)",
              fontWeight: 300,
              marginTop: "0.8rem",
              marginBottom: "2rem",
              maxWidth: 560,
              lineHeight: 1.85,
            }}
          >
            Hover to trace relationships. Click a node to enter its concept layer.
            Continuity Under Strain sits at the center — every concept eventually
            connects there.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div
            className="canon-svg-wrap"
            style={{
              position: "relative",
              borderTop: "1px solid rgba(200,139,90,0.08)",
              borderBottom: "1px solid rgba(200,139,90,0.08)",
              padding: "2rem 0",
            }}
          >
            <Constellation
              activeId={activeId}
              hoveredId={hoveredId}
              onHover={setHoveredId}
              onClick={setActiveId}
            />
          </div>

          {/* Mobile fallback — vertical connected list */}
          <div className="canon-mobile-list" style={{ display: "none" }}>
            <div
              style={{
                fontFamily: "var(--sans)",
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(156,163,175,0.4)",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              Tap a concept to enter its layer
            </div>
            {Object.entries(NODES).map(([id, n], i) => (
              <button
                key={id}
                onClick={() => setActiveId(id)}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  borderTop: "1px solid rgba(200,139,90,0.08)",
                  borderBottom:
                    i === Object.keys(NODES).length - 1
                      ? "1px solid rgba(200,139,90,0.08)"
                      : "none",
                  padding: "1.4rem 0.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.2rem",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: n.color,
                    boxShadow: `0 0 14px ${n.color}66`,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "0.56rem",
                    letterSpacing: "0.18em",
                    color: "var(--gold-deep)",
                    width: 26,
                    flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: n.type === "center" ? "1.35rem" : "1.15rem",
                    fontWeight: 300,
                    color: "var(--ink)",
                    fontStyle: n.type === "center" ? "italic" : "normal",
                    letterSpacing: "-0.005em",
                    flex: 1,
                  }}
                >
                  {n.name}
                </span>
                <span
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "0.65rem",
                    color: "rgba(156,163,175,0.35)",
                    flexShrink: 0,
                  }}
                >
                  ↗
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Legend */}
        <Reveal delay={200}>
          <div
            style={{
              marginTop: "2.5rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "1.8rem",
              justifyContent: "center",
            }}
          >
            {[
              { label: "Reflective", color: C.reflective },
              { label: "Institutional", color: C.institutional },
              { label: "Governance", color: C.governance },
              { label: "Human-state", color: C.human },
              { label: "Center", color: C.center },
            ].map((l) => (
              <div
                key={l.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.55rem",
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: l.color,
                    display: "inline-block",
                    boxShadow: `0 0 12px ${l.color}55`,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(156,163,175,0.5)",
                  }}
                >
                  {l.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════
          CANONICAL ESSAYS
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
          <SectionLabel>Canonical Essays</SectionLabel>
        </Reveal>

        <Reveal delay={60}>
          <p
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)",
              fontWeight: 300,
              color: "var(--ink)",
              marginBottom: "3rem",
              maxWidth: 640,
              lineHeight: 1.2,
              marginTop: "0.6rem",
              letterSpacing: "-0.01em",
            }}
          >
            Knowledge artifacts, not blog posts.
          </p>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "0",
            borderTop: "1px solid rgba(200,139,90,0.1)",
          }}
        >
          {ESSAYS.map((essay, i) => (
            <Reveal key={essay.title} delay={i * 70 + 80}>
              <article
                style={{
                  padding: "2.5rem 2rem 2.5rem 0",
                  borderRight:
                    i === ESSAYS.length - 1
                      ? "none"
                      : "1px solid rgba(200,139,90,0.05)",
                  borderBottom: "1px solid rgba(200,139,90,0.05)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "0.58rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--gold-deep)",
                    marginBottom: "1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>Essay {String(i + 1).padStart(2, "0")}</span>
                  <span style={{ color: "rgba(156,163,175,0.4)", letterSpacing: "0.18em" }}>
                    {essay.readTime}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "1.45rem",
                    fontWeight: 300,
                    color: "var(--ink)",
                    lineHeight: 1.2,
                    margin: 0,
                    marginBottom: "1rem",
                    letterSpacing: "-0.005em",
                  }}
                >
                  <a
                    href={essay.href}
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#C88B5A";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--ink)";
                    }}
                  >
                    {essay.title}
                  </a>
                </h3>
                <p
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "0.78rem",
                    lineHeight: 1.85,
                    color: "rgba(156,163,175,0.6)",
                    fontWeight: 300,
                    marginBottom: "1.6rem",
                  }}
                >
                  {essay.blurb}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {essay.concepts.map((cId) => {
                    const n = NODES[cId];
                    if (!n) return null;
                    return (
                      <button
                        key={cId}
                        onClick={() => setActiveId(cId)}
                        style={{
                          background: "transparent",
                          border: `1px solid ${n.color}40`,
                          color: `${n.color}DD`,
                          padding: "0.3rem 0.7rem",
                          fontFamily: "var(--sans)",
                          fontSize: "0.56rem",
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `${n.color}1A`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                        }}
                      >
                        {n.name}
                      </button>
                    );
                  })}
                </div>
                <a
                  href={essay.href}
                  style={{
                    display: "inline-block",
                    marginTop: "1.4rem",
                    fontFamily: "var(--sans)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    textDecoration: "none",
                  }}
                >
                  Read →
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PUBLIC PHILOSOPHY NOTES
      ═══════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: "clamp(4rem,8vw,7rem) clamp(1.5rem,8vw,8rem)",
          maxWidth: 1100,
          margin: "0 auto",
          borderTop: "1px solid rgba(200,139,90,0.06)",
        }}
      >
        <Reveal>
          <SectionLabel>Public Philosophy</SectionLabel>
        </Reveal>
        <Reveal delay={60}>
          <p
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(1.4rem, 3vw, 2.1rem)",
              fontWeight: 300,
              color: "var(--ink)",
              marginBottom: "2.4rem",
              maxWidth: 640,
              lineHeight: 1.25,
              marginTop: "0.6rem",
              letterSpacing: "-0.01em",
            }}
          >
            Shorter notes in the operational register — clinics, care, and
            systems that remember.
          </p>
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "0",
            borderTop: "1px solid rgba(200,139,90,0.1)",
          }}
        >
          {PUBLIC_NOTES.map((essay, i) => (
            <Reveal key={essay.title} delay={i * 70 + 80}>
              <article
                style={{
                  padding: "2.5rem 2rem 2.5rem 0",
                  borderRight:
                    i === PUBLIC_NOTES.length - 1
                      ? "none"
                      : "1px solid rgba(200,139,90,0.05)",
                  borderBottom: "1px solid rgba(200,139,90,0.05)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "0.58rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--gold-deep)",
                    marginBottom: "1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>Note {String(i + 1).padStart(2, "0")}</span>
                  <span
                    style={{
                      color: "rgba(156,163,175,0.4)",
                      letterSpacing: "0.18em",
                    }}
                  >
                    {essay.readTime}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "1.45rem",
                    fontWeight: 300,
                    color: "var(--ink)",
                    lineHeight: 1.2,
                    margin: 0,
                    marginBottom: "1rem",
                    letterSpacing: "-0.005em",
                  }}
                >
                  <a
                    href={essay.href}
                    style={{ color: "inherit", textDecoration: "none" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#C88B5A";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--ink)";
                    }}
                  >
                    {essay.title}
                  </a>
                </h3>
                <p
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "0.78rem",
                    lineHeight: 1.85,
                    color: "rgba(156,163,175,0.6)",
                    fontWeight: 300,
                    marginBottom: "1.6rem",
                  }}
                >
                  {essay.blurb}
                </p>
                <a
                  href={essay.href}
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    textDecoration: "none",
                  }}
                >
                  Read →
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          DEEP CANON / FOUNDER ARCHIVE
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
          <SectionLabel>Deep Canon</SectionLabel>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "5rem",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <Reveal delay={60}>
            <div>
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
                  fontWeight: 300,
                  lineHeight: 1.1,
                  color: "var(--ink)",
                  letterSpacing: "-0.01em",
                  marginBottom: "1.4rem",
                }}
              >
                Founder Archive &amp;{" "}
                <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
                  Reflexive Intelligence.
                </em>
              </h2>
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "0.86rem",
                  lineHeight: 1.95,
                  color: "var(--muted)",
                  fontWeight: 300,
                  maxWidth: 460,
                  marginBottom: "2rem",
                }}
              >
                Beneath the operational concepts is a deeper archive — founder
                notes, mythopoetic maps, and symbolic architectures tracing the
                movement from personal reflection to institutional systems.
              </p>
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "1rem",
                  fontStyle: "italic",
                  color: "rgba(156,163,175,0.5)",
                  fontWeight: 300,
                  maxWidth: 440,
                  marginBottom: "2.5rem",
                  letterSpacing: "0.01em",
                }}
              >
                Where the conceptual ground was first walked, before it became
                infrastructure.
              </p>
              <a
                href="/solaeimara"
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--ink)",
                  border: "1px solid rgba(200,139,90,0.4)",
                  padding: "0.9rem 2rem",
                  textDecoration: "none",
                  background: "rgba(200,139,90,0.06)",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.4s ease",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(200,139,90,0.14)";
                  e.currentTarget.style.borderColor = "rgba(200,139,90,0.65)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(200,139,90,0.06)";
                  e.currentTarget.style.borderColor = "rgba(200,139,90,0.4)";
                }}
              >
                Enter Deep Canon
              </a>
            </div>
          </Reveal>

          {/* Archive thread list */}
          <Reveal delay={120}>
            <div>
              {[
                {
                  label: "The Icarus Problem",
                  sub: "On systems that fail to notice",
                  href: "/canon/icarus",
                },
                {
                  label: "Ascent Without Feedback",
                  sub: "When growth outruns the systems that hold it",
                  href: "/canon/ascent-without-feedback",
                },
                {
                  label: "The Architecture of Return",
                  sub: "On repair, belonging, and systems that receive people back",
                  href: "/canon/architecture-of-return",
                },
                {
                  label: "The Elder Brother Problem",
                  sub: "The hidden wound of the one who stayed",
                  href: "/canon/elder-brother-problem",
                },
                {
                  label: "The Labour of Becoming Real",
                  sub: "Identity rupture, and the self rebuilt through love and labour",
                  href: "/canon/labour-of-becoming-real",
                },
                {
                  label: "When Intelligence Becomes a Utility",
                  sub: "Commodified intelligence and who gets to think",
                  href: "/canon/when-intelligence-becomes-a-utility",
                },
                {
                  label: "The Dialectical Self",
                  sub: "Radical acceptance, two-sided truths, and becoming whole without becoming rigid",
                  href: "/canon/dialectical-self",
                },
                {
                  label: "Ubermensch and Aniruddha",
                  sub: "The kind of strength that does not need to dominate",
                  href: "/canon/ubermensch-and-aniruddha",
                },
                {
                  label: "Spirituality as an Abstract Boat",
                  sub: "What carries us when intellect is not enough",
                  href: "/canon/spirituality-as-an-abstract-boat",
                },
                {
                  label: "Before Notice",
                  sub: "How NHHR became NaHzHaR, and why Heidegger changed the first step",
                  href: "/canon/before-notice",
                },
                {
                  label: "The Machine's Constitution and the Human Person",
                  sub: "Babel, Nehemiah, and the Builder and Architect reading Claude's Constitution",
                  href: "/canon/machine-constitution",
                },
                { label: "Founder Notes", sub: "Origin journals · 2019—" },
                { label: "Mythopoetic Maps", sub: "Symbolic architectures" },
                { label: "Reflective Diaries", sub: "Continuity through crisis" },
                { label: "Letter to Institutions", sub: "Foundational essays" },
              ].map((item, i) => {
                const rowStyle = {
                  padding: "1.4rem 0",
                  borderTop: "1px solid rgba(200,139,90,0.07)",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "1.2rem",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "background 0.35s ease",
                };
                const numEl = (
                  <span
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: "0.55rem",
                      color: "rgba(155,94,69,0.5)",
                      letterSpacing: "0.18em",
                      width: 22,
                      flexShrink: 0,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                );
                const labelEl = (
                  <span
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "1.15rem",
                      fontWeight: 300,
                      color: item.href
                        ? "rgba(243,239,231,0.92)"
                        : "rgba(243,239,231,0.7)",
                      fontStyle: "italic",
                      flex: 1,
                    }}
                  >
                    {item.label}
                  </span>
                );
                const subEl = (
                  <span
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: "0.62rem",
                      letterSpacing: "0.12em",
                      color: item.href
                        ? "rgba(200,139,90,0.7)"
                        : "rgba(156,163,175,0.35)",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.href ? "Read →" : item.sub}
                  </span>
                );
                if (item.href) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      style={rowStyle}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background =
                          "rgba(200,139,90,0.04)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "transparent")
                      }
                    >
                      {numEl}
                      {labelEl}
                      {subEl}
                    </a>
                  );
                }
                return (
                  <div key={item.label} style={rowStyle}>
                    {numEl}
                    {labelEl}
                    <span
                      style={{
                        fontFamily: "var(--sans)",
                        fontSize: "0.62rem",
                        letterSpacing: "0.12em",
                        color: "rgba(156,163,175,0.35)",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.sub}
                    </span>
                  </div>
                );
              })}
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
          REFLECTIVE FOOTER
      ═══════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: "clamp(8rem,16vw,14rem) clamp(1.5rem,8vw,8rem)",
          textAlign: "center",
          maxWidth: 760,
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
              fontFamily: "var(--serif)",
              fontSize: "clamp(1.2rem, 2.6vw, 1.7rem)",
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
            Systems rarely collapse all at once.
            <br />
            <br />
            <span style={{ color: "rgba(243,239,231,0.4)" }}>
              Most fragment gradually — through overload, unnoticed drift,
              accumulated compromise, and the erosion of reflective awareness.
            </span>
            <br />
            <br />
            <span style={{ color: "rgba(243,239,231,0.55)" }}>
              The Canon exists to help those patterns remain visible long enough
              for adaptation to remain possible.
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

      <ConceptPanel
        id={activeId}
        onClose={() => setActiveId(null)}
        onJump={(id) => setActiveId(id)}
      />

      <style>{`
        @media (max-width: 720px) {
          .canon-svg-wrap { display: none !important; }
          .canon-mobile-list { display: block !important; }
        }
      `}</style>
    </PageShell>
  );
}
