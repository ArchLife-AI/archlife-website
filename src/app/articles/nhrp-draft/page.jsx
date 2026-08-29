import { PageShell } from "@/components/PageShell/PageShell";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export const meta = () => [
  { title: "A Standing Capability | ArchLife" },
  {
    name: "description",
    content:
      "A close reading of DHR's draft National Health Research Policy 2026. Clause 4.6.4.1 names independent validation of AI-based tools. A SHALL in a draft is not a centre.",
  },
  {
    property: "og:title",
    content: "A Standing Capability | ArchLife",
  },
  {
    property: "og:description",
    content:
      "A close reading of DHR's draft National Health Research Policy 2026. Clause 4.6.4.1 names independent validation of AI-based tools. A SHALL in a draft is not a centre.",
  },
];

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

function Clause({ name, children }) {
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

function linkHover(e, on) {
  e.currentTarget.style.color = on ? "#C88B5A" : "rgba(156,163,175,0.5)";
  e.currentTarget.style.borderBottomColor = on
    ? "rgba(200,139,90,0.7)"
    : "rgba(200,139,90,0.3)";
}

export default function NhrpDraftPage() {
  return (
    <PageShell>
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
          <SectionLabel>Healthcare AI · Publication · August 2026</SectionLabel>
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
            A standing{" "}
            <em style={{ color: "#C88B5A", fontStyle: "italic" }}>capability.</em>
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
            What the Department of Health Research&apos;s draft National Health
            Research Policy 2026 actually says about healthcare AI — and what a
            SHALL is not.
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

      <Section>
        <Reveal>
          <P lead>
            India now has a draft national research policy that says the
            sentence the field has been waiting for. Independent validation of
            health technologies. Methods for AI-based tools, named as critical.
            Centres, protocols, trained people, public findings.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P lead>That is not the same as having the centres.</P>
        </Reveal>
        <Reveal delay={140}>
          <P>
            The document is a Department of Health Research draft, posted for
            public opinion in July 2026. It is not a gazette. It is not an
            appropriation. It is not an operating programme with a named host,
            a budget line, and a completed validation. Treating the clause as
            if those already exist is how a serious draft becomes a rumour.
          </P>
        </Reveal>
        <Reveal delay={200}>
          <P>
            This reading stays with the text. Four clauses that matter for
            healthcare AI. Then the sentence the draft does not write.
          </P>
        </Reveal>
      </Section>

      <Section eyebrow="What This Document Is">
        <Reveal>
          <H2>
            A DHR draft.{" "}
            <em style={{ color: "#C88B5A", fontStyle: "italic" }}>
              Not a statute.
            </em>
          </H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            The PDF on dhr.gov.in is 132 pages:{" "}
            <em>National Health Research Policy 2026</em>, Ministry of Health
            and Family Welfare, Department of Health Research. The public-opinion
            letter is F. No. T.11014/01/2020-HR, dated 6 July 2026.
            Comments were invited until 27 July 2026.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            It is a research-ecosystem instrument. Stewardship through a
            National Health Research Stewardship Committee convened by DHR and
            chaired by the Principal Scientific Adviser. ICMR as scientific
            and technical support. An agenda, enabling systems, ethics,
            translation, assessment. Healthcare AI appears inside that
            architecture — as a frontier domain, as a validation problem, as a
            consent and disclosure problem — not as a free-standing AI Act.
          </P>
        </Reveal>
        <Reveal delay={180}>
          <P>
            One more boundary. PIB PRID 2296281 is not this policy. That
            release concerns Rajya Sabha Standing Committee reports. Citing it
            as NHRP is a category error. The primary is the DHR PDF.
          </P>
        </Reveal>
      </Section>

      <Section eyebrow="Four Clauses That Matter">
        <Reveal>
          <Clause name="One — The frontier is named.">
            Section 3.3.1.3 places digital health, artificial intelligence and
            data science in health among the emerging and frontier areas that
            require greater focus. That is agenda language. It tells the
            research system what to deepen. It does not tell a hospital how to
            govern a live model on a ward.
          </Clause>
        </Reveal>
        <Reveal>
          <Clause name="Two — The validation SHALL.">
            Clause 4.6.4.1 is the strongest sentence in the draft for
            healthcare AI. The research ecosystem shall maintain a standing
            capability for independent validation of health technologies from
            institutions, industry, and innovators. Developing methods for the
            validation of artificial intelligence-based tools is of critical
            importance. Validation centres with standardised protocols, trained
            personnel, and quality-assured facilities shall be established or
            strengthened. Validation is to be recognised as research work, and
            findings shall be made public to inform procurement, regulation,
            and programme inclusion.
          </Clause>
        </Reveal>
        <Reveal>
          <Clause name="Three — Disclosure in the laboratory.">
            Section 5.3.9 expects responsible use of AI in research. Where AI
            tools are used in design, conduct, analysis, or writing, that use
            shall be disclosed. Researchers remain accountable for integrity,
            accuracy, and originality. This is a conduct rule for the people
            who write papers. It is not a deployment rule for the people who
            take clinical action.
          </Clause>
        </Reveal>
        <Reveal>
          <Clause name="Four — Consent for the model, not only the study.">
            Section 5.6.2 says health research data used to develop AI and
            other computational tools shall meet the same standards of
            transparency, consent, equity, and accountability as other health
            research. Consent processes shall communicate anticipated uses,
            including algorithm development and model training, and provide for
            participant choice. Section 5.6.3 asks the full development
            lifecycle: bias, validation across diverse groups, explainability
            where outputs inform decisions, provenance, and harm. Oversight is
            to be proportionate to risk and intended use.
          </Clause>
        </Reveal>
      </Section>

      <Section eyebrow="What the SHALL Does Not Do">
        <Reveal>
          <P>
            <span style={{ color: "#C88B5A" }}>It does not name a host. </span>
            No city, no ICMR institute, no hospital, no budget code, no
            timeline. &quot;Shall be established or strengthened&quot; is future
            tense across diverse settings. Strengthening implies something
            already exists somewhere. The draft does not say where.
          </P>
        </Reveal>
        <Reveal delay={60}>
          <P>
            <span style={{ color: "#C88B5A" }}>It does not bind a ward. </span>
            DPDP binds. NABH can bind through accreditation. This draft, until
            adopted and given machinery, binds no clinician and no vendor. The
            people who will meet the model first — junior residents, nurses,
            technicians — are not given an office to call.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            <span style={{ color: "#C88B5A" }}>
              It does not close the method gap.{" "}
            </span>
            Naming AI-based tools as critical is honest. It is also incomplete.
            A standing capability still has to decide what counts as validation
            when the system is generative, when failure looks like fluency, when
            a benchmark can sit inside the training data. The draft requires
            methods. It does not supply them.
          </P>
        </Reveal>
        <Reveal delay={180}>
          <P>
            <span style={{ color: "#C88B5A" }}>
              It does not spend the GDP line.{" "}
            </span>
            The headline table in section 1.7.4 sets health research investment
            at 0.024 percent of GDP in 2026-27, with draft targets of 0.072 by
            2037 and 0.15 by 2047. Those are research-ecosystem ambitions. They
            are not a funded validation-centre programme. Do not fold them into
            a story about centres that have already opened.
          </P>
        </Reveal>
      </Section>

      <Section eyebrow="Why the Draft Still Matters">
        <Reveal>
          <P>
            Because the sentence is now in a national research policy draft, not
            only in a conference slide. Because public findings, tied to
            procurement and programme inclusion, is the right direction of
            travel: validation that cannot be seen cannot govern. Because
            consent that names model training is rarer than consent that names
            a questionnaire — and the draft names it.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            Because a country can have SAHI, BODH, ICMR ethics guidance, and
            still lack a place where a live clinical model is independently
            checked under Indian conditions. The draft notices that absence.
            Noticing is not staffing. It is the first honest step.
          </P>
        </Reveal>
        <Reveal delay={140}>
          <P lead>
            The mandate in the text is real. The machinery is not. Both
            sentences have to be true at once.
          </P>
        </Reveal>
      </Section>

      <Section eyebrow="What We Are Doing About It">
        <Reveal>
          <P>
            ArchLife&apos;s public work on this stack is already on this site:
            the Four Gaps analysis, and the Delhi Declaration. This page is the
            instrument-level companion. It exists so that collaborators, and
            anyone quoting NHRP in a hospital meeting, can point at the clause
            without inflating it.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            The implementation layer the draft cannot write — hospital-level
            artefacts, decision trails, evaluation that survives a hallucination
            — is the work of the AI Collective Delhi Healthcare Chapter&apos;s
            embedded governance cohort. Working documents. Not a second national
            centre announced from a laptop.
          </P>
        </Reveal>
        <Reveal delay={140}>
          <P>
            If you are sitting with this PDF and asking who validates the tool
            on your floor: that is the right question. The draft asks it. The
            answer is still local evidence, not a national building that is not
            there.
          </P>
        </Reveal>
      </Section>

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
            Delhi chapter. Primary: Department of Health Research,{" "}
            <em>National Health Research Policy 2026</em> (draft PDF,
            dhr.gov.in); public-opinion letter F. No. T.11014/01/2020-HR, 6
            July 2026. Clauses cited: 3.3.1.3, 4.6.4.1, 5.3.9, 5.6.2–5.6.3,
            1.7.4. This is a reading of a draft. It is not a claim that
            validation centres are funded, staffed, or operating. The wider
            policy stack is available to collaborators on request.
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
            onMouseEnter={(e) => linkHover(e, true)}
            onMouseLeave={(e) => linkHover(e, false)}
          >
            Read the Four Gaps analysis
          </a>
          <a
            href="/articles/delhi-declaration"
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
            onMouseEnter={(e) => linkHover(e, true)}
            onMouseLeave={(e) => linkHover(e, false)}
          >
            The Delhi Declaration
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
            onMouseEnter={(e) => linkHover(e, true)}
            onMouseLeave={(e) => linkHover(e, false)}
          >
            ← Back to Articles
          </a>
        </Reveal>
      </section>
    </PageShell>
  );
}
