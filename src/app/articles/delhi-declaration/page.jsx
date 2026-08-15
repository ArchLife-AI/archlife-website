import { PageShell } from "@/components/PageShell/PageShell";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export const meta = () => [
  { title: "The Delhi Declaration on Healthcare AI Governance | ArchLife" },
  {
    name: "description",
    content:
      "The founding position paper of the AI Collective Delhi Healthcare Chapter — second edition, August 2026. The manifesto preserved verbatim; the evidence and timeline renewed.",
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

function Commitment({ n, title, children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "44px 1fr",
        gap: "1.6rem",
        marginBottom: "2.4rem",
        alignItems: "start",
      }}
    >
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.6rem",
          fontWeight: 300,
          color: "#C88B5A",
          lineHeight: 1,
          paddingTop: "0.1rem",
        }}
      >
        {n}
      </div>
      <div>
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.35rem",
            fontWeight: 300,
            color: "#F3EFE7",
            lineHeight: 1.2,
            margin: "0 0 0.8rem",
            letterSpacing: "-0.005em",
          }}
        >
          {title}
        </h3>
        <P>{children}</P>
      </div>
    </div>
  );
}

export default function DelhiDeclarationPage() {
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
          textAlign: "center",
        }}
      >
        <Reveal>
          <SectionLabel>Healthcare AI · Founding Position · Second Edition</SectionLabel>
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
            The Delhi{" "}
            <em style={{ color: "#C88B5A", fontStyle: "italic" }}>Declaration.</em>
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.68rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(156,163,175,0.55)",
              marginBottom: "1.6rem",
            }}
          >
            On Healthcare AI Governance
          </div>
        </Reveal>

        <Reveal delay={180}>
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
              margin: "0 auto 3rem",
            }}
          >
            Second Edition, August 2026. Supersedes the May 2026 founding
            manifesto in evidence and timeline; the words of the manifesto
            itself stand unchanged.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.68rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(156,163,175,0.55)",
            }}
          >
            Prepared by Dr. Ishaan Wadhwa · Healthcare Vertical Lead, AI Collective Delhi
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════
          WHAT THIS IS
      ═══════════════════════════════════════ */}
      <Section eyebrow="What This Is">
        <Reveal>
          <P>
            This is the founding position paper of the AI Collective Delhi
            Healthcare Chapter. It is addressed to the institutions shaping how
            AI enters Indian healthcare — and to the people who will be most
            affected when that process goes wrong.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            The arrival of AI in Indian healthcare is not a prospect. It is a
            live deployment. Radiology workflows. Triage systems. Chronic-disease
            protocols. Administrative decisions. The integration is happening at
            a pace that exceeds the institutional capacity to govern it.
          </P>
        </Reveal>
        <Reveal delay={140}>
          <P>
            India's architecture is serious — ABDM, DPDP, SAHI, BODH, ICMR,
            CDSCO. It is also, by its own design, incomplete at exactly the layer
            where failure happens: the hospital, the ward, the OPD.
          </P>
        </Reveal>
        <Reveal delay={200}>
          <P lead>
            Governance is not something that happens to an AI system after it is
            built. It is built into the system, the workflow, and the
            institution from day one. In the absence of hospital-level
            governance, clinical AI is not innovation. It is unmanaged risk.
          </P>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════
          COMMITMENTS
      ═══════════════════════════════════════ */}
      <Section eyebrow="What We Commit To">
        <Reveal>
          <Commitment n="01" title="We will embed.">
            Before the end of 2026, the first cycle of an embedded governance
            cohort completes inside a Delhi NCR hospital: eight to ten
            clinicians, engineers, UX researchers, data scientists, and
            governance specialists working alongside a live AI deployment,
            producing governance artefacts any comparable Indian hospital can
            adapt. Not reports. Working documents — NASSS complexity
            assessments, DECIDE-AI evaluation reports, TEHAI readiness
            instruments, ethical debt logs, risk registers.
          </Commitment>
        </Reveal>
        <Reveal>
          <Commitment n="02" title="We will publish.">
            Openly, without restriction. The gap analysis of India's governance
            architecture against thirteen global frameworks — the most
            comprehensive produced for any LMIC health system — goes public with
            this Declaration. The analysis is the map.
          </Commitment>
        </Reveal>
        <Reveal>
          <Commitment n="03" title="We will convene — but not endlessly.">
            A working community, not a conference series. Every session produces
            something: a decision, a document, a question the next session
            answers. Convening for its own sake is not governance work.
          </Commitment>
        </Reveal>
        <Reveal>
          <Commitment n="04" title="We will tell the truth.">
            About the frameworks, the institutions, the AI systems — and
            ourselves. The May edition committed to a September cohort start. It
            will not happen; the hospital partner is not yet secured. We say
            this plainly. Accurate information, even when it is unwelcome, is
            the only input that produces good governance.
          </Commitment>
        </Reveal>
        <Reveal>
          <Commitment n="05" title="We will remain grounded.">
            Every claim sourced. Every recommendation grounded in clinical
            settings, not conference rooms. We will never claim to represent
            patients, nurses, or frontline workers unless we have worked
            alongside them and incorporated their knowledge into our findings.
          </Commitment>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════
          THE WORLD WHILE WE WROTE
      ═══════════════════════════════════════ */}
      <Section eyebrow="What The World Did While We Wrote This">
        <Reveal>
          <P>
            <span style={{ color: "#C88B5A" }}>The EU started enforcing. </span>
            The AI Act is in enforcement since 2 August 2026. Healthcare AI is
            high-risk. The compliance clock is running for every Indian vendor
            who exports or interoperates.
          </P>
        </Reveal>
        <Reveal delay={60}>
          <P>
            <span style={{ color: "#C88B5A" }}>India named the mandate. </span>
            The National Health Research Policy 2026 calls AI validation methods
            "of critical importance" and mandates standing validation centres.
            The words exist. The centres do not. Yet.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            <span style={{ color: "#C88B5A" }}>
              The researchers named their own crisis.{" "}
            </span>
            MAST — Nature Medicine, 2026 — from the authors of the benchmarks
            themselves: saturated, in training data, insufficient. The question
            is not whether AI will outscore humans. It is who judges when it
            does.
          </P>
        </Reveal>
        <Reveal delay={180}>
          <P>
            <span style={{ color: "#C88B5A" }}>Scores are not outcomes. </span>
            Seventeen AI systems built to protect healthcare staff from
            violence, near-perfect scores, zero studies measuring whether
            violence decreased. The lesson generalises to every deployment:
            detecting is not helping; measuring the wrong thing is its own
            failure mode.
          </P>
        </Reveal>
        <Reveal delay={240}>
          <P>
            <span style={{ color: "#C88B5A" }}>
              The Global South has a template.{" "}
            </span>
            Singapore shipped AIHGle 2.0 and earned WHO's highest regulatory
            maturity rating. Small-state answers exist. India can adapt, or
            India can wait for the compliance environment to arrive from
            abroad. One of these is sovereignty. The other is cost.
          </P>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════
          WHAT WE ASK
      ═══════════════════════════════════════ */}
      <Section eyebrow="What We Ask Of The Institutions">
        <Reveal>
          <P>
            <span style={{ color: "#C88B5A" }}>To CDSCO: </span>
            AI-specific SaMD guidance — the FDA's lifecycle model, adapted. The
            grey zone between device and decision-support is where good vendors
            stall and bad ones accelerate.
          </P>
        </Reveal>
        <Reveal delay={60}>
          <P>
            <span style={{ color: "#C88B5A" }}>To MeitY: </span>
            Sectoral DPDP guidance for health data and AI. The binding law needs
            to know what an AI system is.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            <span style={{ color: "#C88B5A" }}>To MoHFW: </span>
            SAHI implementation guidance. Recommendation 19 names the governance
            unit. Nothing staffs it.
          </P>
        </Reveal>
        <Reveal delay={180}>
          <P>
            <span style={{ color: "#C88B5A" }}>To NABH: </span>
            Require AI governance units in the Digital Health Standards.
            Accreditation is the lever. This is the single highest-leverage
            regulatory action available to India without parliamentary time.
          </P>
        </Reveal>
        <Reveal delay={240}>
          <P>
            <span style={{ color: "#C88B5A" }}>To BODH and NHRP: </span>
            Coordinate. Name BODH the validation-centre substrate, and add LLM
            and agentic evaluation methodology. Otherwise India builds two
            validation systems, neither of which can see a hallucination.
          </P>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════
          THE MANIFESTO
      ═══════════════════════════════════════ */}
      <Section eyebrow="The Manifesto">
        <Reveal>
          <P muted>
            What follows is not a summary. It is the declaration — what we
            believe, and what we commit to. Unchanged from the founding edition.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P lead>
            We believe that AI in Indian healthcare will be governed well or
            governed badly — and that the difference will not be decided in
            Delhi's ministries, but in the wards, OPDs, and operations rooms of
            hospitals across this country.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P lead>
            We believe that governance is not a document. It is a practice.
            Frameworks do not govern AI systems. Institutions, with trained
            people, clear processes, and accountable structures, govern AI
            systems. Building those institutions — at the hospital level, in the
            Indian context, grounded in Indian clinical reality — is the work no
            one else is doing, and the work we are committing to doing.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P lead>
            We believe that the people most affected by AI in healthcare —
            patients, nurses, junior doctors, ASHA workers, ward administrators
            — have been absent from every governance conversation that has
            happened so far. We commit to changing that, not symbolically, but
            structurally: by designing processes that require their
            participation, by producing artefacts that reflect their knowledge,
            and by refusing to call any governance work complete that does not
            account for their experience.
          </P>
        </Reveal>
        <Reveal delay={200}>
          <P lead>
            We believe that India's governance architecture is serious,
            well-intentioned, and insufficient — not because its designers
            failed, but because the implementation layer it requires has not yet
            been built. We are building it. We will do this with rigour, with
            honesty, and with respect for the institutions whose work we are
            building on.
          </P>
        </Reveal>
        <Reveal delay={240}>
          <P lead>
            We believe that the test of any governance framework is not whether
            it sounds right, but whether it holds when something goes wrong. Our
            job is to be in the room when it goes wrong — to have built the
            infrastructure that makes failure visible, recoverable, and
            instructive rather than hidden, catastrophic, and repeated.
          </P>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════
          INVITATION
      ═══════════════════════════════════════ */}
      <Section eyebrow="An Invitation">
        <Reveal>
          <P>
            This declaration is addressed to seven entities. It is written for
            anyone who has watched AI enter Indian healthcare and felt the
            absence of governance — anyone who has deployed a tool and wondered
            who they would call if it failed, anyone who has been told a
            clinical decision was made by an algorithm without knowing how or
            why, anyone who has been in a room where the governance conversation
            never happened because no one knew how to start it.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P lead>We are starting it.</P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            If you work in a hospital and you are deploying AI — or being asked
            to deploy AI, or watching AI arrive without being asked — we want to
            hear from you. Not as a survey respondent. As a collaborator.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            If you are a clinician, an engineer, a UX researcher, a lawyer, a
            governance specialist, or a patient advocate who wants to do serious
            governance work in a real clinical setting — the cohort is how.
            Applications open with the hospital partnership; the commitment
            stands: before the end of 2026, the first cycle completes.
          </P>
        </Reveal>
        <Reveal delay={200}>
          <P>
            If you have been thinking about this for longer than most people
            think is reasonable, and you have been called, at some point, a mad
            person for it — you are exactly who this work is for.
          </P>
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
            Dr. Ishaan Wadhwa — Healthcare Vertical Lead, AI Collective Delhi.
            Second edition, August 2026. The manifesto is preserved verbatim
            from the founding edition. Sources and the full policy stack:
            available to collaborators on request.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <a
            href="/articles/four-gaps"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(156,163,175,0.5)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(200,139,90,0.3)",
              paddingBottom: 3,
              marginRight: "2rem",
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
            Read the Four Gaps analysis
          </a>
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
