import { PageShell } from "@/components/PageShell/PageShell";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export const meta = () => [
  { title: "The Four Gaps in India's Healthcare AI Governance | ArchLife" },
  {
    name: "description",
    content:
      "A structured gap analysis of India's healthcare AI governance architecture against the global state of the art. Public release v1.0, August 2026.",
  },
];

// ── Typographic helpers, scoped to this publication. ──
function H2({ children }) {
  return (
    <h2
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
        fontWeight: 300,
        color: "#F3EFE7",
        lineHeight: 1.18,
        letterSpacing: "-0.005em",
        margin: "0 0 1.6rem",
      }}
    >
      {children}
    </h2>
  );
}

function P({ children, muted, lead }) {
  return (
    <p
      style={{
        fontFamily: lead
          ? "'Cormorant Garamond', serif"
          : "'Inter', sans-serif",
        fontSize: lead ? "1.18rem" : "0.95rem",
        fontStyle: lead ? "italic" : "normal",
        fontWeight: 300,
        lineHeight: lead ? 1.7 : 1.92,
        color: muted ? "rgba(156,163,175,0.7)" : "rgba(243,239,231,0.96)",
        margin: "0 0 1.4rem",
        maxWidth: 680,
      }}
    >
      {children}
    </p>
  );
}

function Section({ eyebrow, children }) {
  return (
    <section
      style={{
        position: "relative",
        zIndex: 1,
        padding: "clamp(3.6rem, 7vw, 5.4rem) clamp(1.5rem, 6vw, 5rem)",
        maxWidth: 820,
        margin: "0 auto",
      }}
    >
      {eyebrow && (
        <Reveal>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.58rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#9B5E45",
              marginBottom: "1.6rem",
            }}
          >
            {eyebrow}
          </div>
        </Reveal>
      )}
      {children}
    </section>
  );
}

function Gap({ name, children }) {
  return (
    <div style={{ marginBottom: "2.6rem" }}>
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.5rem",
          fontWeight: 300,
          color: "#C88B5A",
          lineHeight: 1.2,
          margin: "0 0 0.9rem",
          letterSpacing: "-0.005em",
        }}
      >
        {name}
      </h3>
      <P>{children}</P>
    </div>
  );
}

export default function FourGapsPage() {
  return (
    <PageShell>
      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding:
            "clamp(7rem, 14vw, 11rem) clamp(1.5rem, 6vw, 5rem) clamp(2.5rem,5vw,4rem)",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        <Reveal>
          <SectionLabel>Healthcare AI · Publication · v1.0</SectionLabel>
        </Reveal>

        <Reveal delay={80}>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.8rem, 6.6vw, 5.4rem)",
              fontWeight: 300,
              color: "#F3EFE7",
              lineHeight: 1.05,
              letterSpacing: "-0.012em",
              margin: "1.4rem 0 1rem",
              maxWidth: 900,
            }}
          >
            The Four <em style={{ color: "#C88B5A", fontStyle: "italic" }}>Gaps</em>{" "}
            in India's Healthcare AI Governance.
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.05rem, 2vw, 1.4rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "rgba(243,239,231,0.62)",
              lineHeight: 1.5,
              letterSpacing: "0.005em",
              maxWidth: 640,
              margin: "0 0 3rem",
            }}
          >
            A structured gap analysis of India's governance architecture against
            the global state of the art. Public release v1.0, August 2026.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.68rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(156,163,175,0.55)",
            }}
          >
            Dr. Ishaan Wadhwa · Healthcare Vertical Lead, AI Collective Delhi
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════
          OPENING
      ═══════════════════════════════════════ */}
      <Section>
        <Reveal>
          <P lead>
            India has, in four years, assembled a healthcare AI governance
            architecture most countries have not attempted. SAHI. BODH. DPDP.
            ABDM. ICMR. CDSCO. Six instruments, six institutions, one patient.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P lead>It has one flaw. None of it reaches the ward.</P>
        </Reveal>
        <Reveal delay={140}>
          <P>
            The law that binds — DPDP, with penalties to ₹250 crore — does not
            know what an AI system is. The instruments that know — SAHI, BODH,
            NHRP — bind no one. The standard that could enforce — NABH
            accreditation — requires no AI governance at all.
          </P>
        </Reveal>
        <Reveal delay={200}>
          <P>
            This document names the four structural gaps, evidences each, and
            says plainly what closes them.
          </P>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════
          THE FOUR GAPS
      ═══════════════════════════════════════ */}
      <Section eyebrow="The Four Gaps">
        <Reveal>
          <Gap name="Gap One — The Implementation Cliff.">
            India's governance operates at the level of principles, frameworks,
            and guidance. No institution is responsible for translating it into
            hospital-level practice. SAHI says so itself: a guiding and enabling
            framework, not a prescriptive mandate. The strategy names the
            implementation layer — and leaves it empty by design.
          </Gap>
        </Reveal>
        <Reveal>
          <Gap name="Gap Two — The Generative AI Blind Spot.">
            Every layer was designed for AI systems that produce discrete,
            auditable outputs. None was designed for systems that hallucinate
            confidently, fail in ways that look like success, and cannot be
            validated by test-dataset benchmarking. BODH — the national
            validation platform — is a classical-ML instrument in an LLM era.
          </Gap>
        </Reveal>
        <Reveal>
          <Gap name="Gap Three — The Participation Deficit.">
            The governance was built in rooms where ward nurses, junior
            residents, ASHA workers, tier-2 administrators, and patients were
            structurally absent. The participation architecture determines the
            governance architecture. India's reflects the people who built it.
          </Gap>
        </Reveal>
        <Reveal>
          <Gap name="Gap Four — The Agentic AI Horizon.">
            India's stack governs AI that produces outputs. It has no
            vocabulary for AI that takes action — that books, routes,
            escalates, documents, or decides within clinical workflows.
            Semi-agentic systems are already deployed. The governance does not
            see them.
          </Gap>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════
          2026 EVIDENCE
      ═══════════════════════════════════════ */}
      <Section eyebrow="Why This Matters Now — The 2026 Evidence">
        <Reveal>
          <P>
            <span style={{ color: "#C88B5A" }}>The world started enforcing. </span>
            The EU AI Act began enforcement on 2 August 2026. Healthcare AI is
            high-risk; obligations apply from December 2027 (stand-alone) and
            August 2028 (product-integrated). Indian vendors who export or
            interoperate inherit these dates. The global compliance environment
            arrives on a fixed schedule.
          </P>
        </Reveal>
        <Reveal delay={60}>
          <P>
            <span style={{ color: "#C88B5A" }}>
              India wrote the validation mandate into national policy.{" "}
            </span>
            The National Health Research Policy 2026 says developing methods for
            validation of AI-based tools "is of critical importance" and
            mandates standing validation centres (section 4.6.4). No
            institution, budget, or timeline is named. The mandate is real; the
            machinery is not.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            <span style={{ color: "#C88B5A" }}>
              The evaluation crisis got named by its own field.{" "}
            </span>
            MAST (Nature Medicine, 2026) — authored by the researchers who built
            the benchmarks — admits them: saturated, in training data,
            single-turn, context-free. The question it poses is the one BODH
            cannot yet answer: when the AI beats the benchmark, who judges the
            benchmark?
          </P>
        </Reveal>
        <Reveal delay={180}>
          <P>
            <span style={{ color: "#C88B5A" }}>Outcomes beat scores. </span>
            A systematic review of 17 AI systems built to protect healthcare
            staff from violence found near-perfect detection scores — and zero
            studies measuring whether violence actually decreased. The gap
            between what AI scores and what AI changes is the governance gap. In
            India, that gap is structural: the instruments exist, the
            enforcement does not.
          </P>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════
          WHAT CLOSES EACH GAP
      ═══════════════════════════════════════ */}
      <Section eyebrow="What Closes Each Gap">
        <Reveal>
          <P>
            <span style={{ color: "#C88B5A" }}>Gap One </span>
            closes with institutional infrastructure — governance units,
            escalation paths, documented decision trails. NABH incorporation of
            AI governance requirements is the single highest-leverage action
            available without parliamentary time. SAHI Recommendation 19 names
            the unit; NABH could require it.
          </P>
        </Reveal>
        <Reveal delay={60}>
          <P>
            <span style={{ color: "#C88B5A" }}>Gap Two </span>
            closes with LLM-specific evaluation methodology. QUEST provides the
            template for BODH. ELCAP provides the deployment taxonomy
            (patient-facing, professional-facing, background) that Indian
            regulation lacks.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            <span style={{ color: "#C88B5A" }}>Gap Three </span>
            closes with participation architecture — governance processes that
            go to the hospital, not the conference room. The DiME Playbook's
            finding stands: 70% of AI pilots fail on people and process, not
            technology.
          </P>
        </Reveal>
        <Reveal delay={180}>
          <P>
            <span style={{ color: "#C88B5A" }}>Gap Four </span>
            closes with vocabulary India can adopt today. Canada's guide on
            agentic AI gives it: bounded autonomy (explicit permission levels),
            recoverability (pause, rollback, immutable logs), automation drift
            (spot-checking human and system drift). The concepts exist. The
            adaptation is tractable. The adoption has not begun.
          </P>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════
          WHAT WE ARE DOING
      ═══════════════════════════════════════ */}
      <Section eyebrow="What We Are Doing About It">
        <Reveal>
          <P>
            The AI Collective Delhi Healthcare Chapter is building the
            implementation layer this analysis shows is missing. An embedded
            governance cohort — eight to ten clinicians, engineers, researchers,
            and governance specialists — inside a Delhi NCR hospital with a live
            AI deployment, producing the artefacts no national body produces:
            NASSS complexity assessments, DECIDE-AI evaluation reports, TEHAI
            readiness instruments, ethical debt logs, risk registers. Published
            openly. Adaptable by any comparable hospital.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P lead>Not reports. Working governance documents.</P>
        </Reveal>
        <Reveal delay={140}>
          <P>The analysis is the map. The cohort is the road. The invitation is open.</P>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: "clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 5rem)",
          maxWidth: 820,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <Reveal>
          <div
            style={{
              width: 1,
              height: 48,
              background:
                "linear-gradient(to bottom, transparent, rgba(200,139,90,0.25))",
              margin: "0 auto 3rem",
            }}
          />
        </Reveal>
        <Reveal delay={80}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.72rem",
              lineHeight: 1.9,
              color: "rgba(156,163,175,0.5)",
              fontWeight: 300,
              maxWidth: 640,
              margin: "0 auto 2.5rem",
            }}
          >
            Dr. Ishaan Wadhwa is Healthcare Vertical Lead of the AI Collective,
            Delhi chapter. The full working analysis — the six-layer audit
            against thirteen global frameworks — is available to collaborators
            on request. Sources: SAHI (MoHFW, Feb 2026); BODH (NHA/ICMR/IIT-B/AIIMS,
            2026); DPDP Act 2023 + Rules 2025; ABDM (NHA); ICMR AI Ethics
            Guidelines 2023; CDSCO MDR 2017; NABH Digital Health Standards 2nd
            Ed (2025); NHRP 2026; EU AI Act + Digital Omnibus; FDA TPLC draft
            (2025); MAST (Nature Medicine 2026); Safety Science 201 (2026);
            QUEST (2024); ELCAP (2025); DiME Playbook (2025); Canada Guide on
            Agentic AI (2025); WHO EB158 (2026).
          </p>
        </Reveal>
        <Reveal delay={140}>
          <a
            href="/articles"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(156,163,175,0.5)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(200,139,90,0.3)",
              paddingBottom: 3,
              transition: "color 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#C88B5A";
              e.currentTarget.style.borderBottomColor = "rgba(200,139,90,0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(156,163,175,0.5)";
              e.currentTarget.style.borderBottomColor = "rgba(200,139,90,0.3)";
            }}
          >
            ← Back to Articles
          </a>
        </Reveal>
      </section>
    </PageShell>
  );
}
