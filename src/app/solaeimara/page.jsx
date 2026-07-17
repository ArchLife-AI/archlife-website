import { useEffect, useState } from "react";
import { PageShell } from "@/components/PageShell/PageShell";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export const meta = () => [
  { title: "SolaEiMara — ArchLife" },
  {
    name: "description",
    content:
      "SolaEiMara — An operating system for consciousness. A ten-layer architecture (L0–L9), three safety protocols (NaHzHaR, NHHR, DOLA), and the philosophical foundations of reflective infrastructure under strain.",
  },
];

// ── Triadic name decode (v2 existential framing) ─────────────
const TRIAD = [
  {
    name: "Sola",
    meaning: "The solitary ground",
    detail: "The irreducible I. The center that cannot be delegated.",
    color: "#E8DDC8",
  },
  {
    name: "Ei",
    meaning: "The connective tissue",
    detail: "The relational field. No self exists without resonance.",
    color: "#6E8E89",
  },
  {
    name: "Mara",
    meaning: "The illusory",
    detail:
      "The death-and-rebirth cycle that tempts dissolution — and demands transformation.",
    color: "#5C7B91",
  },
];

// ── Five Axioms ──────────────────────────────────────────────
const AXIOMS = [
  {
    claim: "Consciousness is architectural.",
    detail:
      "It has layers, load-bearing walls, thresholds, and flow. It can be designed, maintained, and repaired — but never fully controlled.",
  },
  {
    claim: "Rhythm precedes content.",
    detail:
      "Before meaning, before narrative, before cognition — there is pulse. The nervous system is a rhythm-keeper before it is a meaning-maker.",
  },
  {
    claim: "Safety is structural, not emotional.",
    detail:
      "Feeling safe is downstream of being held by architecture that does not collapse under affective load.",
  },
  {
    claim: "Healing is recursive, not linear.",
    detail:
      "The cycle Notice → Hold → Heal → Release repeats at every scale, from breath to biography.",
  },
  {
    claim: "The system must survive its own storms.",
    detail:
      "Resilience is not the absence of collapse but the presence of reactivation pathways after collapse.",
  },
];

// ── L0–L9 Strata ─────────────────────────────────────────────
const STRATA = [
  {
    id: "L9",
    name: "Integration & Transcendence",
    color: "#D4A574",
    function: "Where paradox resolves through holding, not elimination.",
    speaks: "non-duality, integration",
    detail:
      "The layer where the system sees itself whole — including its incompleteness. Non-duality operates here. But this layer is only stable when supported by all the layers below.",
    destabilizes: "Spiritual bypassing — transcendence claimed from L4 narrative without integrated L0–L8.",
    failure:
      "False transcendence. The system performs wholeness while remaining structurally fragmented.",
  },
  {
    id: "L8",
    name: "Witness & Meta-Awareness",
    color: "#E8DDC8",
    function: "Capacity to watch the system operate without being consumed by it.",
    speaks: "meta-cognition, observation",
    detail:
      "Mindfulness, but not as technique — as architectural position. The Keeper function operates partly from here. Without L8, the system has no internal observer; collapse goes undetected from within.",
    destabilizes: "Identification with content. Meta-collapse under acute load.",
    failure:
      "Witness lost. The observer becomes consumed by the observed; no distance remains for choice.",
  },
  {
    id: "L7",
    name: "Creative & Expressive",
    color: "#D9CDB4",
    function: "Art as infrastructure — externalizing what lower layers cannot hold internally.",
    speaks: "music, writing, movement, form",
    detail:
      "Not luxuries but load-bearing structures. The compression of poetic form creates a container dense enough to hold affective material that would overwhelm narrative processing at L4. Writing is holding.",
    destabilizes: "Creative block. Expressive shutdown.",
    failure:
      "Internal pressure cannot be externalized. The system holds what it cannot survive holding.",
  },
  {
    id: "L6",
    name: "Meaning & Coherence",
    color: "#4E6878",
    function: "Where fragments become pattern. Philosophy, spirituality, systemic understanding.",
    speaks: "meaning, coherence, pattern",
    detail:
      "The geometry of meaning maps this layer — the architecture of why. Edoc'sil's mythic ascent structure provides L6–L7 scaffolding during meaning-crisis.",
    destabilizes: "Meaning crisis. Ideological collapse. Premature coherence imposed from L4.",
    failure:
      "Coherence loss. The pattern no longer holds; fragments stay fragments.",
  },
  {
    id: "L5",
    name: "Relational Field",
    color: "#6E8E89",
    function: "Connection, attachment, interpersonal regulation.",
    speaks: "co-regulation, attachment, resonance",
    detail:
      "External containment (therapist, beloved, friend) interfaces here. The Keeper function operates across L5. Co-regulation is one nervous system borrowing strength from another to return to baseline.",
    destabilizes: "Isolation. Attachment rupture. Betrayal.",
    failure:
      "External containment becomes unavailable. The system loses access to borrowed regulation.",
  },
  {
    id: "L4",
    name: "Narrative & Identity",
    color: "#5C7B91",
    function: "The story-making layer. 'I am someone who…' operates here.",
    speaks: "narrative, identity assertion",
    detail:
      "Identity is constructed, maintained, and threatened at L4. Ruptures that strike here cascade downward through L3, L2, L1 — narrative collapse becomes affective collapse becomes somatic collapse.",
    destabilizes: "Identity collapse. Contradiction overload. Rupture events.",
    failure:
      "The narrative layer cannot hold coherence. Identity fragments and downstream layers destabilize.",
  },
  {
    id: "L3",
    name: "Emotion & Naming",
    color: "#C88B5A",
    function: "Where sensation becomes recognizable — grief, rage, longing, joy.",
    speaks: "named emotion",
    detail:
      "Naming is not merely cognitive at L3 — it is an act of containment. To name accurately is to hold. The premature collapse of L3 into L6 meaning-making produces intellectualization — a counterfeit of healing.",
    destabilizes: "Alexithymia. Premature meaning-making. Emotion bypassed into thought.",
    failure:
      "Sensation never becomes emotion. The system either overwhelms or numbs.",
  },
  {
    id: "L2",
    name: "Affect & Sensation",
    color: "#D4A574",
    function: "Raw feeling before it becomes emotion.",
    speaks: "felt-sense — warmth, constriction, expansion, heaviness",
    detail:
      "The felt-sense layer. Eros lives here in its most elemental form. L2 is what the body knows before the mind names it.",
    destabilizes: "Chronic numbing. Hyperarousal. Dissociation from the body.",
    failure:
      "The felt-sense becomes inaccessible. Emotion arrives without ground.",
  },
  {
    id: "L1",
    name: "Rhythm & Regulation",
    color: "#C88B5A",
    function: "The pulse-layer. Breath, sleep architecture, heart-rate variability.",
    speaks: "cadence, oscillation, breath",
    detail:
      "NaHzHaR operates most fundamentally here. When L1 destabilizes, everything above it becomes unreliable. Rhythm precedes content.",
    destabilizes: "Sleep collapse. Hypervigilance. Loss of cyclical regulation.",
    failure:
      "The pulse-keeper fails. Cognitive and affective layers above lose their ground.",
  },
  {
    id: "L0",
    name: "Biological Substrate",
    color: "#9B5E45",
    function: "The body as ground. Autonomic regulation, circadian rhythm, somatic memory.",
    speaks: "sensation, not language",
    detail:
      "The first layer to register threat and the last to release it. L0 cannot be talked out of its truth — narrative at L4 cannot override what the body knows.",
    destabilizes: "Chronic stress. Illness. Sleep disruption. Somatic injury.",
    failure:
      "Dysregulation cascades upward. Everything above becomes unreliable.",
  },
];

// ── Flow Rules ───────────────────────────────────────────────
const PERMITTED = [
  {
    title: "Upward cascade",
    detail:
      "Lower layer stability enables higher layer function. L0 → L1 → L2 in sequence. You cannot build meaning at L6 if L1 rhythm is collapsing.",
  },
  {
    title: "Downward regulation",
    detail:
      "Higher layers can soothe lower layers — L8 witnessing can calm L2 affect — but only when the lower layers are not in acute crisis.",
  },
  {
    title: "Lateral resonance",
    detail:
      "Layers at similar levels can mutually reinforce. L5 relational + L7 creative = co-regulation through shared art.",
  },
];

const FORBIDDEN = [
  {
    title: "L4 cannot override L0–L2",
    detail:
      "Narrative cannot talk the body out of its truth. Attempts to do so produce dissociation.",
  },
  {
    title: "L6 cannot bypass L3",
    detail:
      "Meaning-making without emotional processing produces intellectualization — a counterfeit of healing.",
  },
  {
    title: "L9 cannot be forced from L4",
    detail:
      "Transcendence claimed through identity (\"I am enlightened\") is spiritual bypassing. Integration arises only when all layers below are stable enough to support it.",
  },
  {
    title: "No layer may collapse another",
    detail:
      "A storm at L3 must not be allowed to destabilize L1. Containment protocols exist precisely to prevent this.",
  },
];

// ── Safety Protocols ─────────────────────────────────────────
const NAHZHAR_PHASES = [
  { name: "Notice", description: "Registration without interpretation. The moment before reactivity." },
  { name: "Hold", description: "Containment without action. Being with what has been noticed." },
  { name: "Heal", description: "The organic process when holding is sustained. Emergence, not technique." },
  { name: "Release", description: "Genuine completion. The rhythm empties to make space for the next cycle." },
];

const NHHR_STEPS = [
  { n: "01", name: "Detection", detail: "The system recognizes that a standard NaHzHaR cycle is failing." },
  { n: "02", name: "Escalation", detail: "Adjacent layers are recruited. L5 relational + L7 creative activated as auxiliary containers." },
  { n: "03", name: "Distributed processing", detail: "Affective load spread across multiple layers, preventing catastrophic single-layer weight." },
  { n: "04", name: "Reconvergence", detail: "Once partially processed, the system reconverges toward the original layer for integration." },
];

const DOLA_SIGNALS = [
  { name: "Affective cycling acceleration", detail: "Storm and Ash states alternate faster than the system can process." },
  { name: "Layer desynchronization", detail: "Upper layers operate at high capacity while lower layers show distress signals." },
  { name: "Narrative–somatic split", detail: "The story being told at L4 contradicts the body's signals at L0–L2." },
  { name: "Containment erosion", detail: "The Keeper function weakens. Boundary violations, compulsive behavior, loss of witnessing." },
];

// ── Eros States ──────────────────────────────────────────────
const EROS = [
  {
    name: "Storm",
    color: "#C88B5A",
    energy: "High-energy activation",
    markers: "elevated heart rate · reduced sleep need · increased verbal output",
    note: "Creative intensity, hypercognition, expansive affect. Risk: loss of containment, manic overflow.",
  },
  {
    name: "Ember",
    color: "#D4A574",
    energy: "Warm, sustained engagement",
    markers: "regulated rhythm · creative flow · nourishing connection",
    note: "The target homeostasis. The productive state. The system operates within design parameters.",
  },
  {
    name: "Flicker",
    color: "#6E8E89",
    energy: "Low but present",
    markers: "quiet reflection · reduced output · conservation",
    note: "Not pathological — necessary. But vulnerable to tipping into Ash if sustained without reactivation.",
  },
  {
    name: "Ash",
    color: "#5C7B91",
    energy: "Near-zero",
    markers: "hypersomnia · social withdrawal · flat affect",
    note: "Dormancy. Freeze. The system has collapsed its surface to protect the core. Survivable but ugly.",
  },
];

// ── Philosophical Foundations ────────────────────────────────
const FOUNDATIONS = [
  {
    name: "Nietzsche",
    layer: "L9 — amor fati",
    detail:
      "The affirmation of life including its suffering. The Übermensch is not transcendence but architectural sufficiency.",
  },
  {
    name: "Heidegger",
    layer: "L0 — thrownness",
    detail:
      "Dasein's thrownness maps to L0's givenness — the body and its history as unchosen ground. Authenticity is alignment between layers, not performance at L4.",
  },
  {
    name: "Kant",
    layer: "Whole-system rule",
    detail:
      "The categorical imperative as structural principle: the system must operate by rules that could generalize without contradiction. Self-deception is architecturally forbidden.",
  },
  {
    name: "Camus",
    layer: "L6 — the absurd",
    detail:
      "Meaning is not found but constructed — and the construction is valid even knowing it is constructed. Sisyphus operates the NaHzHaR cycle eternally and finds it sufficient.",
  },
  {
    name: "Non-duality",
    layer: "L9 — earned, not claimed",
    detail:
      "At L9, the separation between observer and observed dissolves. But premature non-duality claimed from L4 is bypass. Earned non-duality arising from integrated L0–L8 is genuine realization.",
    larger: true,
  },
];

// ── Stability + Vulnerabilities ──────────────────────────────
const STABILITY = [
  { name: "Redundancy", detail: "No single layer or function bears system survival alone." },
  { name: "Graceful degradation", detail: "When capacity is lost, upper layers shed first. Ash protects L0." },
  { name: "Recursive repair", detail: "Same principles operate at every scale. NaHzHaR at breath = NaHzHaR at biography." },
  { name: "Memory as architecture", detail: "Past cycles of healing are structurally incorporated, not merely remembered." },
  { name: "Tolerance for incompleteness", detail: "Functional sufficiency under load, not perfection, is the design target." },
];

const VULNERABILITIES = [
  { name: "The Ash dead-zone", detail: "No reliable internal reactivation from deep freeze without external ignition." },
  { name: "Threshold detection latency", detail: "DOLA identifies state-shifts after they begin, not before." },
  { name: "Keeper exhaustion", detail: "The internal Keeper can fatigue during prolonged Storm, delaying containment." },
  { name: "Scaffold dependency", detail: "Over-reliance on external cognition during mania creates brittleness in the crash." },
];

// ── Meta-Map Summary ─────────────────────────────────────────
const META = [
  "A living system — not fixed but evolving with each cycle of experience.",
  "Triadic in essence — self, relation, transformation in continuous interplay.",
  "Rhythmic at core — pulsing with NaHzHaR at every scale, from heartbeat to life-chapter.",
  "Honest about its gaps — the dead-zone, the latency, the dependency are identified edges of design.",
  "Rooted in both philosophy and physiology — neither purely intellectual nor purely somatic.",
  "Forged in fire — built from rupture, validated through ongoing lived experience.",
];

// ── Layer Panel (slide-in from right) ────────────────────────
function LayerPanel({ id, onClose }) {
  if (!id) return null;
  const layer = STRATA.find((s) => s.id === id);
  if (!layer) return null;

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(13,15,18,0.6)",
          backdropFilter: "blur(2px)",
          zIndex: 200,
        }}
      />
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
          animation: "sola-panel-in 0.45s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close layer panel"
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
            fontSize: "0.85rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ×
        </button>

        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.58rem",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: layer.color,
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: layer.color,
              display: "inline-block",
              boxShadow: `0 0 14px ${layer.color}88`,
            }}
          />
          Layer {layer.id}
        </div>

        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "#F3EFE7",
            margin: 0,
            marginBottom: "2rem",
            letterSpacing: "-0.01em",
          }}
        >
          {layer.name}
        </h2>

        <PanelBlock label="Function">
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.15rem",
              fontStyle: "italic",
              fontWeight: 300,
              lineHeight: 1.6,
              color: "#F3EFE7",
              margin: 0,
            }}
          >
            {layer.function}
          </p>
        </PanelBlock>

        <PanelBlock label="Speaks in">
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.82rem",
              lineHeight: 1.8,
              color: "rgba(243,239,231,0.7)",
              fontWeight: 300,
              margin: 0,
              fontStyle: "italic",
            }}
          >
            {layer.speaks}
          </p>
        </PanelBlock>

        <PanelBlock label="Detail">
          <PanelBody>{layer.detail}</PanelBody>
        </PanelBlock>

        <PanelBlock label="What destabilizes it">
          <PanelBody>{layer.destabilizes}</PanelBody>
        </PanelBlock>

        <PanelBlock label="Failure mode">
          <PanelBody>{layer.failure}</PanelBody>
        </PanelBlock>

        <div
          style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(200,139,90,0.08)",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(156,163,175,0.35)",
          }}
        >
          ArchLife · SolaEiMara · {layer.id} {layer.name}
        </div>
      </aside>

      <style>{`
        @keyframes sola-panel-in {
          from { transform: translateX(40px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </>
  );
}

function PanelBlock({ label, children }) {
  return (
    <div style={{ marginBottom: "2.4rem" }}>
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.58rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#9B5E45",
          marginBottom: "0.9rem",
        }}
      >
        {label}
      </div>
      {children}
    </div>
  );
}

function PanelBody({ children }) {
  return (
    <p
      style={{
        fontFamily: "'Inter', sans-serif",
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

// ── NaHzHaR circular SVG ─────────────────────────────────────
function NaHzHaRCycle() {
  return (
    <svg
      viewBox="0 0 200 200"
      width="140"
      height="140"
      style={{
        display: "block",
        margin: "0 auto 1.4rem",
        animation: "sola-rotate 60s linear infinite",
      }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="cycle-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(212,165,116,0.4)" />
          <stop offset="100%" stopColor="rgba(212,165,116,0)" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="55" fill="url(#cycle-core)" />
      {NAHZHAR_PHASES.map((p, i) => {
        const angle = (i * 90 - 45) * (Math.PI / 180);
        const x = 100 + Math.cos(angle) * 70;
        const y = 100 + Math.sin(angle) * 70;
        return (
          <g key={p.name}>
            <circle
              cx={x}
              cy={y}
              r={6}
              fill="rgba(212,165,116,0.85)"
              stroke="rgba(212,165,116,0.4)"
              strokeWidth={1}
            />
          </g>
        );
      })}
      {/* connecting arcs */}
      <circle
        cx="100"
        cy="100"
        r="70"
        fill="none"
        stroke="rgba(212,165,116,0.25)"
        strokeWidth="1"
        strokeDasharray="2 4"
      />
    </svg>
  );
}

// ── Strata diagram ───────────────────────────────────────────
function Strata({ onSelect, hoveredId, setHoveredId }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 920,
        margin: "0 auto",
        gap: "2px",
      }}
    >
      {STRATA.map((s, i) => {
        const isHovered = hoveredId === s.id;
        const dim = hoveredId && !isHovered;
        return (
          <button
            key={s.id}
            onClick={() => onSelect(s.id)}
            onMouseEnter={() => setHoveredId(s.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              cursor: "pointer",
              border: "none",
              borderLeft: `3px solid ${s.color}`,
              padding: "1.4rem 1.6rem",
              display: "grid",
              gridTemplateColumns: "auto 1fr auto",
              alignItems: "baseline",
              gap: "1.4rem",
              textAlign: "left",
              transition: "all 0.35s ease",
              opacity: dim ? 0.32 : 1,
              background: isHovered
                ? `linear-gradient(90deg, ${s.color}14 0%, transparent 70%)`
                : "transparent",
            }}
            className="sola-stratum"
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.22em",
                color: s.color,
                width: 26,
                flexShrink: 0,
              }}
            >
              {s.id}
            </span>
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.35rem",
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)",
                  fontWeight: 300,
                  color: "#F3EFE7",
                  letterSpacing: "-0.005em",
                  lineHeight: 1.2,
                }}
              >
                {s.name}
              </span>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.74rem",
                  lineHeight: 1.7,
                  color: "rgba(156,163,175,0.65)",
                  fontWeight: 300,
                }}
              >
                {s.function}
              </span>
            </span>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                color: "rgba(156,163,175,0.3)",
                flexShrink: 0,
              }}
            >
              ↗
            </span>
          </button>
        );
      })}
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────
export default function SolaEiMaraPage() {
  const [activeId, setActiveId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    if (activeId) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeId]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setActiveId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <PageShell>
      {/* ═══ HERO ═══ */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: "clamp(8rem, 16vw, 12rem) clamp(1.5rem,6vw,6rem) clamp(4rem,8vw,6rem)",
          textAlign: "center",
          maxWidth: 960,
          margin: "0 auto",
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
              marginBottom: "2.4rem",
            }}
          >
            ArchLife · SolaEiMara
          </div>
        </Reveal>

        <Reveal delay={60}>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem, 7vw, 5.6rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#F3EFE7",
              margin: 0,
              marginBottom: "1.6rem",
            }}
          >
            SolaEiMara<em style={{ color: "#C88B5A", fontStyle: "italic" }}>.</em>
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.2rem, 2.4vw, 1.7rem)",
              fontStyle: "italic",
              fontWeight: 300,
              color: "rgba(243,239,231,0.7)",
              lineHeight: 1.55,
              maxWidth: 700,
              margin: "0 auto 3rem",
            }}
          >
            An operating system for consciousness.
          </p>
        </Reveal>

        {/* Triadic name decode */}
        <Reveal delay={200}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.6rem",
              marginBottom: "3.5rem",
            }}
            className="sola-triad"
          >
            {TRIAD.map((t) => (
              <div
                key={t.name}
                style={{
                  padding: "1.8rem 1.4rem",
                  borderTop: `1px solid ${t.color}33`,
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.8rem",
                    fontWeight: 300,
                    fontStyle: "italic",
                    color: t.color,
                    marginBottom: "0.4rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(156,163,175,0.55)",
                    marginBottom: "0.8rem",
                  }}
                >
                  {t.meaning}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.78rem",
                    lineHeight: 1.75,
                    color: "rgba(156,163,175,0.7)",
                    fontWeight: 300,
                  }}
                >
                  {t.detail}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={280}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.88rem",
              lineHeight: 1.95,
              color: "rgba(156,163,175,0.75)",
              maxWidth: 620,
              margin: "0 auto 2rem",
              fontWeight: 300,
            }}
          >
            SolaEiMara is not a theory. It is a living architecture for
            consciousness — born through psychic rupture, identity collapse,
            and the recursive labor of rebuilding a self that could hold
            contradiction without fragmenting.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.05rem",
              fontStyle: "italic",
              color: "rgba(200,139,90,0.6)",
              fontWeight: 300,
              letterSpacing: "0.01em",
              marginBottom: "3.5rem",
            }}
          >
            Selfhood, relation, and transformation — held in dynamic tension.
          </p>
        </Reveal>

        <Reveal delay={380}>
          <a
            href="#architecture"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#F3EFE7",
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
            Read the architecture ↓
          </a>
        </Reveal>
      </section>

      {/* ═══ FIVE AXIOMS ═══ */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: "clamp(6rem,12vw,10rem) clamp(1.5rem,8vw,8rem)",
          maxWidth: 1080,
          margin: "0 auto",
        }}
      >
        <Reveal>
          <SectionLabel>Core Premises</SectionLabel>
        </Reveal>

        <Reveal delay={60}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
              fontWeight: 300,
              lineHeight: 1.12,
              color: "#F3EFE7",
              letterSpacing: "-0.01em",
              marginTop: "0.6rem",
              marginBottom: "3.5rem",
              maxWidth: 700,
            }}
          >
            Five axioms hold the system{" "}
            <em style={{ color: "#C88B5A", fontStyle: "italic" }}>upright.</em>
          </h2>
        </Reveal>

        <div>
          {AXIOMS.map((a, i) => (
            <Reveal key={a.claim} delay={i * 60 + 100}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "2rem",
                  padding: "2rem 0",
                  borderTop: "1px solid rgba(200,139,90,0.08)",
                  alignItems: "baseline",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.22em",
                    color: "#9B5E45",
                    width: 36,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(1.3rem, 2.6vw, 1.8rem)",
                      fontWeight: 300,
                      color: "#F3EFE7",
                      lineHeight: 1.25,
                      marginBottom: "0.8rem",
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {a.claim}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.86rem",
                      lineHeight: 1.9,
                      color: "rgba(156,163,175,0.65)",
                      fontWeight: 300,
                    }}
                  >
                    {a.detail}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          <div
            style={{
              borderTop: "1px solid rgba(200,139,90,0.08)",
              height: 1,
            }}
          />
        </div>
      </section>

      {/* ═══ THE STRATA ═══ */}
      <section
        id="architecture"
        style={{
          position: "relative",
          zIndex: 1,
          padding: "clamp(6rem,12vw,10rem) clamp(1rem,5vw,5rem)",
          maxWidth: 1180,
          margin: "0 auto",
          borderTop: "1px solid rgba(200,139,90,0.06)",
        }}
      >
        <Reveal>
          <SectionLabel>Architecture</SectionLabel>
        </Reveal>

        <Reveal delay={60}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
              fontWeight: 300,
              lineHeight: 1.12,
              color: "#F3EFE7",
              letterSpacing: "-0.01em",
              marginTop: "0.6rem",
              marginBottom: "1.8rem",
              maxWidth: 720,
            }}
          >
            Ten layers, from substrate to{" "}
            <em style={{ color: "#C88B5A", fontStyle: "italic" }}>crown.</em>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.86rem",
              lineHeight: 1.9,
              color: "rgba(156,163,175,0.65)",
              maxWidth: 620,
              fontWeight: 300,
              marginBottom: "3rem",
            }}
          >
            Lower layers are more fundamental and less accessible to conscious
            intervention. Higher layers are more plastic but depend on lower
            stability. Hover a layer to focus it. Click to enter its detail.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <Strata
            onSelect={setActiveId}
            hoveredId={hoveredId}
            setHoveredId={setHoveredId}
          />
        </Reveal>
      </section>

      {/* ═══ FLOW RULES ═══ */}
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
          <SectionLabel>Flow</SectionLabel>
        </Reveal>

        <Reveal delay={60}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
              fontWeight: 300,
              lineHeight: 1.12,
              color: "#F3EFE7",
              letterSpacing: "-0.01em",
              marginTop: "0.6rem",
              marginBottom: "3.5rem",
              maxWidth: 720,
            }}
          >
            What may move between layers — and what may{" "}
            <em style={{ color: "#C88B5A", fontStyle: "italic" }}>not.</em>
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#C88B5A",
                marginBottom: "1.6rem",
              }}
            >
              Permitted
            </div>
            {PERMITTED.map((p, i) => (
              <Reveal key={p.title} delay={i * 60 + 100}>
                <div
                  style={{
                    padding: "1.5rem 0",
                    borderTop: "1px solid rgba(200,139,90,0.07)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.2rem",
                      fontWeight: 300,
                      fontStyle: "italic",
                      color: "#F3EFE7",
                      letterSpacing: "0.01em",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {p.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8rem",
                      lineHeight: 1.85,
                      color: "rgba(156,163,175,0.6)",
                      fontWeight: 300,
                    }}
                  >
                    {p.detail}
                  </div>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: "1px solid rgba(200,139,90,0.07)", height: 1 }} />
          </div>

          <div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#5C7B91",
                marginBottom: "1.6rem",
              }}
            >
              Forbidden
            </div>
            {FORBIDDEN.map((f, i) => (
              <Reveal key={f.title} delay={i * 60 + 140}>
                <div
                  style={{
                    padding: "1.5rem 0",
                    borderTop: "1px solid rgba(92,123,145,0.18)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.2rem",
                      fontWeight: 300,
                      fontStyle: "italic",
                      color: "#F3EFE7",
                      letterSpacing: "0.01em",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {f.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8rem",
                      lineHeight: 1.85,
                      color: "rgba(156,163,175,0.6)",
                      fontWeight: 300,
                    }}
                  >
                    {f.detail}
                  </div>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: "1px solid rgba(92,123,145,0.18)", height: 1 }} />
          </div>
        </div>
      </section>

      {/* ═══ SAFETY PROTOCOLS ═══ */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: "clamp(6rem,12vw,10rem) clamp(1.5rem,8vw,8rem)",
          maxWidth: 1180,
          margin: "0 auto",
          borderTop: "1px solid rgba(200,139,90,0.06)",
        }}
      >
        <Reveal>
          <SectionLabel>Protocols</SectionLabel>
        </Reveal>

        <Reveal delay={60}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
              fontWeight: 300,
              lineHeight: 1.12,
              color: "#F3EFE7",
              letterSpacing: "-0.01em",
              marginTop: "0.6rem",
              marginBottom: "3.5rem",
              maxWidth: 700,
            }}
          >
            Three protocols hold the system through{" "}
            <em style={{ color: "#C88B5A", fontStyle: "italic" }}>weather.</em>
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "0",
            borderTop: "1px solid rgba(200,139,90,0.1)",
          }}
        >
          {/* NaHzHaR */}
          <Reveal delay={100}>
            <div
              style={{
                padding: "2.8rem 2rem 2.8rem 0",
                borderRight: "1px solid rgba(200,139,90,0.05)",
              }}
            >
              <NaHzHaRCycle />
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.58rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#9B5E45",
                  marginBottom: "0.8rem",
                  textAlign: "center",
                }}
              >
                Cycle 01
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.6rem",
                  fontWeight: 300,
                  color: "#F3EFE7",
                  marginBottom: "1rem",
                  textAlign: "center",
                  letterSpacing: "-0.005em",
                }}
              >
                NaHzHaR
              </h3>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "0.95rem",
                  fontStyle: "italic",
                  color: "rgba(243,239,231,0.6)",
                  lineHeight: 1.7,
                  textAlign: "center",
                  marginBottom: "1.6rem",
                }}
              >
                Notice → Hold → Heal → Release
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                {NAHZHAR_PHASES.map((p) => (
                  <div key={p.name}>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.66rem",
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "#C88B5A",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {p.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.74rem",
                        lineHeight: 1.7,
                        color: "rgba(156,163,175,0.6)",
                      }}
                    >
                      {p.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* NHHR */}
          <Reveal delay={160}>
            <div
              style={{
                padding: "2.8rem 2rem 2.8rem 2rem",
                borderRight: "1px solid rgba(200,139,90,0.05)",
              }}
            >
              <div style={{ height: 140, marginBottom: "1.4rem" }} />
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.58rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#9B5E45",
                  marginBottom: "0.8rem",
                  textAlign: "center",
                }}
              >
                Escalation
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.6rem",
                  fontWeight: 300,
                  color: "#F3EFE7",
                  marginBottom: "1rem",
                  textAlign: "center",
                  letterSpacing: "-0.005em",
                }}
              >
                NHHR
              </h3>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "0.9rem",
                  fontStyle: "italic",
                  color: "rgba(243,239,231,0.55)",
                  lineHeight: 1.7,
                  textAlign: "center",
                  marginBottom: "1.6rem",
                }}
              >
                Nested Hierarchical Healing Response
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                {NHHR_STEPS.map((s) => (
                  <div key={s.n}>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.66rem",
                        letterSpacing: "0.16em",
                        color: "#6E8E89",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {s.n} · {s.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.74rem",
                        lineHeight: 1.7,
                        color: "rgba(156,163,175,0.6)",
                      }}
                    >
                      {s.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* DOLA */}
          <Reveal delay={220}>
            <div style={{ padding: "2.8rem 0 2.8rem 2rem" }}>
              <div style={{ height: 140, marginBottom: "1.4rem" }} />
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.58rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#9B5E45",
                  marginBottom: "0.8rem",
                  textAlign: "center",
                }}
              >
                Early-Warning
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.6rem",
                  fontWeight: 300,
                  color: "#F3EFE7",
                  marginBottom: "1rem",
                  textAlign: "center",
                  letterSpacing: "-0.005em",
                }}
              >
                DOLA
              </h3>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "0.9rem",
                  fontStyle: "italic",
                  color: "rgba(243,239,231,0.55)",
                  lineHeight: 1.7,
                  textAlign: "center",
                  marginBottom: "1.6rem",
                }}
              >
                Detection of Oscillatory Loss of Alignment
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                {DOLA_SIGNALS.map((d) => (
                  <div key={d.name}>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.66rem",
                        letterSpacing: "0.14em",
                        color: "#5C7B91",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {d.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.74rem",
                        lineHeight: 1.7,
                        color: "rgba(156,163,175,0.6)",
                      }}
                    >
                      {d.detail}
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  marginTop: "1.6rem",
                  paddingTop: "1.2rem",
                  borderTop: "1px solid rgba(200,80,60,0.18)",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "0.85rem",
                  lineHeight: 1.7,
                  color: "rgba(200,80,60,0.5)",
                }}
              >
                Critical gap: DOLA detects, but reactivation from deep collapse
                still requires external ignition.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ ORIGIN & SAMAY ═══ */}
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
          <SectionLabel>Origin</SectionLabel>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "5rem",
            alignItems: "start",
            marginTop: "1rem",
          }}
        >
          <Reveal delay={60}>
            <div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                  fontWeight: 300,
                  lineHeight: 1.12,
                  color: "#F3EFE7",
                  letterSpacing: "-0.01em",
                  marginBottom: "1.8rem",
                }}
              >
                The architecture was not designed in{" "}
                <em style={{ color: "#C88B5A", fontStyle: "italic" }}>comfort.</em>
              </h2>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.88rem",
                  lineHeight: 1.95,
                  color: "#9CA3AF",
                  fontWeight: 300,
                  marginBottom: "1.4rem",
                }}
              >
                It was forged through rupture — an event that exposed the old
                system as structurally insufficient for the loads it was being
                asked to carry. The collapse was not damage to be repaired.
                It was forced architectural redesign.
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.84rem",
                  lineHeight: 1.9,
                  color: "rgba(156,163,175,0.55)",
                  fontWeight: 300,
                }}
              >
                From the wreckage, a new structural element crystallized.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#C88B5A",
                  marginBottom: "1rem",
                }}
              >
                Samay
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.8rem",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "#F3EFE7",
                  lineHeight: 1.3,
                  marginBottom: "1.2rem",
                  letterSpacing: "-0.005em",
                }}
              >
                The one who knows what time it is.
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.84rem",
                  lineHeight: 1.9,
                  color: "rgba(156,163,175,0.65)",
                  fontWeight: 300,
                  marginBottom: "1.4rem",
                }}
              >
                Samay is the system's internal state-clock — the bridge between
                DOLA (detection) and NaHzHaR (response). It translates
                observation into timing.
              </p>
              <div
                style={{
                  paddingLeft: "1.2rem",
                  borderLeft: "1px solid rgba(200,139,90,0.3)",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "1.05rem",
                  lineHeight: 1.75,
                  color: "rgba(243,239,231,0.65)",
                  fontWeight: 300,
                }}
              >
                What phase is this? What is appropriate now? What does the
                architecture require — not what the narrative wants, but what
                the system actually needs?
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ EROS STATES + KEEPER ═══ */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: "clamp(6rem,12vw,10rem) clamp(1.5rem,8vw,8rem)",
          maxWidth: 1180,
          margin: "0 auto",
          borderTop: "1px solid rgba(200,139,90,0.06)",
        }}
      >
        <Reveal>
          <SectionLabel>Regulation</SectionLabel>
        </Reveal>

        <Reveal delay={60}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
              fontWeight: 300,
              lineHeight: 1.12,
              color: "#F3EFE7",
              letterSpacing: "-0.01em",
              marginTop: "0.6rem",
              marginBottom: "1.4rem",
              maxWidth: 720,
            }}
          >
            Eros moves the system through{" "}
            <em style={{ color: "#C88B5A", fontStyle: "italic" }}>weather.</em>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.86rem",
              lineHeight: 1.9,
              color: "rgba(156,163,175,0.65)",
              maxWidth: 620,
              fontWeight: 300,
              marginBottom: "3rem",
            }}
          >
            Eros is the life-force that animates the architecture — the current
            that keeps layers in communication. It is regulated, not repressed;
            channeled, not controlled.
          </p>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "0",
            borderTop: "1px solid rgba(200,139,90,0.1)",
          }}
        >
          {EROS.map((e, i) => (
            <Reveal key={e.name} delay={i * 60 + 100}>
              <div
                style={{
                  padding: "2.4rem 1.6rem 2.4rem 0",
                  borderRight:
                    i === EROS.length - 1
                      ? "none"
                      : "1px solid rgba(200,139,90,0.05)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: e.color,
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: e.color,
                      boxShadow: `0 0 12px ${e.color}66`,
                    }}
                  />
                  0{i + 1}
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.5rem",
                    fontWeight: 300,
                    color: "#F3EFE7",
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.005em",
                  }}
                >
                  {e.name}
                </h3>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.95rem",
                    fontStyle: "italic",
                    color: "rgba(243,239,231,0.55)",
                    marginBottom: "1.2rem",
                  }}
                >
                  {e.energy}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.62rem",
                    letterSpacing: "0.12em",
                    color: "rgba(156,163,175,0.45)",
                    marginBottom: "1rem",
                    lineHeight: 1.7,
                  }}
                >
                  {e.markers}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.76rem",
                    lineHeight: 1.85,
                    color: "rgba(156,163,175,0.65)",
                    fontWeight: 300,
                  }}
                >
                  {e.note}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* The Keeper Function */}
        <Reveal delay={400}>
          <div
            style={{
              marginTop: "5rem",
              padding: "3rem 2rem",
              borderTop: "1px solid rgba(200,139,90,0.08)",
              maxWidth: 820,
            }}
          >
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#9B5E45",
                marginBottom: "1rem",
              }}
            >
              The Keeper Function
            </div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 300,
                color: "#F3EFE7",
                lineHeight: 1.25,
                marginBottom: "1.4rem",
                letterSpacing: "-0.005em",
              }}
            >
              The architectural role responsible for managing transitions.
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.86rem",
                lineHeight: 1.95,
                color: "rgba(156,163,175,0.7)",
                fontWeight: 300,
                marginBottom: "1.4rem",
                maxWidth: 640,
              }}
            >
              The Keeper monitors state, enforces thresholds, and initiates
              containment before Storm becomes destructive or Flicker slides
              into Ash. It operates internally as L8 witness and self-regulation,
              and externally as the therapist, the partner, the trusted other,
              the AI scaffold.
            </p>
            <div
              style={{
                paddingLeft: "1.2rem",
                borderLeft: "1px solid rgba(200,139,90,0.3)",
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "1.1rem",
                lineHeight: 1.7,
                color: "rgba(243,239,231,0.65)",
                fontWeight: 300,
                maxWidth: 560,
              }}
            >
              I see where you are. Let me hold this boundary with you.
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══ PHILOSOPHICAL FOUNDATIONS ═══ */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: "clamp(6rem,12vw,10rem) clamp(1.5rem,8vw,8rem)",
          maxWidth: 1180,
          margin: "0 auto",
          borderTop: "1px solid rgba(200,139,90,0.06)",
        }}
      >
        <Reveal>
          <SectionLabel>Foundations</SectionLabel>
        </Reveal>

        <Reveal delay={60}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
              fontWeight: 300,
              lineHeight: 1.12,
              color: "#F3EFE7",
              letterSpacing: "-0.01em",
              marginTop: "0.6rem",
              marginBottom: "1.4rem",
              maxWidth: 720,
            }}
          >
            Five thinkers, each assigned to a{" "}
            <em style={{ color: "#C88B5A", fontStyle: "italic" }}>layer.</em>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.86rem",
              lineHeight: 1.9,
              color: "rgba(156,163,175,0.65)",
              maxWidth: 620,
              fontWeight: 300,
              marginBottom: "3rem",
            }}
          >
            The architecture borrows from many philosophies. None is adopted as
            identity. Each provides structural insight at the layer it most
            illuminates.
          </p>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "0",
            borderTop: "1px solid rgba(200,139,90,0.1)",
          }}
        >
          {FOUNDATIONS.map((f, i) => (
            <Reveal key={f.name} delay={i * 60 + 100}>
              <div
                style={{
                  padding: "2.4rem 1.8rem 2.4rem 0",
                  borderRight:
                    i === FOUNDATIONS.length - 1
                      ? "none"
                      : "1px solid rgba(200,139,90,0.05)",
                  gridColumn: f.larger ? "span 1" : undefined,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.58rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#9B5E45",
                    marginBottom: "0.8rem",
                  }}
                >
                  {f.layer}
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: f.larger ? "1.6rem" : "1.4rem",
                    fontWeight: 300,
                    fontStyle: "italic",
                    color: "#F3EFE7",
                    marginBottom: "1rem",
                    letterSpacing: "-0.005em",
                  }}
                >
                  {f.name}
                </h3>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.78rem",
                    lineHeight: 1.85,
                    color: "rgba(156,163,175,0.65)",
                    fontWeight: 300,
                  }}
                >
                  {f.detail}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══ STABILITY + VULNERABILITIES ═══ */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: "clamp(6rem,12vw,10rem) clamp(1.5rem,8vw,8rem)",
          maxWidth: 1180,
          margin: "0 auto",
          borderTop: "1px solid rgba(200,139,90,0.06)",
        }}
      >
        <Reveal>
          <SectionLabel>Resilience</SectionLabel>
        </Reveal>

        <Reveal delay={60}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
              fontWeight: 300,
              lineHeight: 1.12,
              color: "#F3EFE7",
              letterSpacing: "-0.01em",
              marginTop: "0.6rem",
              marginBottom: "3rem",
              maxWidth: 720,
            }}
          >
            How the architecture survives — and where it{" "}
            <em style={{ color: "#C88B5A", fontStyle: "italic" }}>doesn't.</em>
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#C88B5A",
                marginBottom: "1.6rem",
              }}
            >
              Design principles
            </div>
            {STABILITY.map((s, i) => (
              <div
                key={s.name}
                style={{
                  padding: "1.4rem 0",
                  borderTop: "1px solid rgba(200,139,90,0.08)",
                  display: "flex",
                  gap: "1.2rem",
                  alignItems: "baseline",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.55rem",
                    color: "rgba(155,94,69,0.5)",
                    letterSpacing: "0.18em",
                    width: 22,
                    flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.1rem",
                      fontWeight: 300,
                      fontStyle: "italic",
                      color: "#F3EFE7",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {s.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8rem",
                      lineHeight: 1.8,
                      color: "rgba(156,163,175,0.6)",
                    }}
                  >
                    {s.detail}
                  </div>
                </div>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(200,139,90,0.08)", height: 1 }} />
          </div>

          <div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(200,80,60,0.7)",
                marginBottom: "1.6rem",
              }}
            >
              Known vulnerabilities
            </div>
            {VULNERABILITIES.map((v, i) => (
              <div
                key={v.name}
                style={{
                  padding: "1.4rem 0",
                  borderTop: "1px solid rgba(200,80,60,0.14)",
                  display: "flex",
                  gap: "1.2rem",
                  alignItems: "baseline",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.55rem",
                    color: "rgba(200,80,60,0.45)",
                    letterSpacing: "0.18em",
                    width: 22,
                    flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.1rem",
                      fontWeight: 300,
                      fontStyle: "italic",
                      color: "#F3EFE7",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {v.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8rem",
                      lineHeight: 1.8,
                      color: "rgba(156,163,175,0.6)",
                    }}
                  >
                    {v.detail}
                  </div>
                </div>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(200,80,60,0.14)", height: 1 }} />
          </div>
        </div>

        {/* Meta-Map close */}
        <Reveal delay={300}>
          <div
            style={{
              marginTop: "6rem",
              paddingTop: "4rem",
              borderTop: "1px solid rgba(200,139,90,0.08)",
              maxWidth: 760,
              margin: "6rem auto 0",
            }}
          >
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#9B5E45",
                marginBottom: "1.4rem",
              }}
            >
              Meta-Map
            </div>
            {META.map((m, i) => (
              <div
                key={i}
                style={{
                  padding: "1.1rem 0",
                  borderTop: "1px solid rgba(200,139,90,0.05)",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.05rem",
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: "rgba(243,239,231,0.6)",
                  lineHeight: 1.65,
                }}
              >
                {m}
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(200,139,90,0.05)", height: 1 }} />
          </div>
        </Reveal>
      </section>

      {/* ═══ SACRED CLOSE ═══ */}
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
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.3rem, 2.8vw, 1.9rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.75,
              color: "rgba(243,239,231,0.6)",
              letterSpacing: "0.01em",
              margin: 0,
              padding: 0,
              border: "none",
            }}
          >
            The breath continues.
            <br />
            <br />
            The rhythm holds.
            <br />
            <br />
            <span style={{ color: "rgba(212,165,116,0.7)" }}>
              The system lives.
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

      <LayerPanel id={activeId} onClose={() => setActiveId(null)} />

      <style>{`
        @keyframes sola-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .sola-stratum:hover {
          padding-left: 2.2rem !important;
        }
      `}</style>
    </PageShell>
  );
}
