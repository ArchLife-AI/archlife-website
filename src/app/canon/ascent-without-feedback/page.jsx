import { PageShell } from "@/components/PageShell/PageShell";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export const meta = () => [
  { title: "Ascent Without Feedback | ArchLife" },
  {
    name: "description",
    content:
      "When growth, speed, and intelligence outrun the systems meant to hold them. A reading of ascent across individuals, teams, institutions, and AI systems — and the discipline of descent that makes return possible.",
  },
];

const ESSAY_IMAGE_SRC = "/ascent-illustration.webp";
const ESSAY_IMAGE_ALT =
  "An AI-rendered illustration of Icarus mid-fall, geometric framework overlaid: a radiant sun at the zenith, Icarus with broken wings descending through the centre, and a Hokusai-style great wave below — the full arc of ascent, fall, and the sea where return becomes possible.";

// ── Typographic helpers, scoped to this essay (mirror /canon/icarus). ──
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

export default function AscentWithoutFeedbackPage() {
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
          maxWidth: 1080,
          margin: "0 auto",
        }}
      >
        <Reveal>
          <SectionLabel>Deep Canon · Essay</SectionLabel>
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
              maxWidth: 980,
            }}
          >
            Ascent Without{" "}
            <em style={{ color: "#C88B5A", fontStyle: "italic" }}>Feedback.</em>
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
              maxWidth: 680,
              margin: "0 0 4rem",
            }}
          >
            When growth, speed, and intelligence outrun the systems meant to
            hold them.
          </p>
        </Reveal>

        {/* ── Illustration (renders only when ESSAY_IMAGE_SRC is set) ── */}
        {ESSAY_IMAGE_SRC && (
          <Reveal delay={200}>
            <figure
              style={{
                margin: 0,
                filter: "drop-shadow(0 24px 64px rgba(0,0,0,0.85))",
                maxWidth: 520,
                marginInline: "auto",
              }}
            >
              <img
                src={ESSAY_IMAGE_SRC}
                alt={ESSAY_IMAGE_ALT}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  opacity: 0.94,
                }}
              />
              <figcaption
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  color: "rgba(156,163,175,0.45)",
                  marginTop: "1.4rem",
                  textAlign: "center",
                  fontStyle: "italic",
                }}
              >
                The arc · ascent, fall, and the sea where return becomes
                possible
              </figcaption>
            </figure>
          </Reveal>
        )}
      </section>

      {/* ═══════════════════════════════════════
          OPENING
      ═══════════════════════════════════════ */}
      <Section>
        <Reveal>
          <P lead>The Icarus problem is not really about flight.</P>
        </Reveal>
        <Reveal delay={60}>
          <P lead>It is about ascent without feedback.</P>
        </Reveal>
        <Reveal delay={140}>
          <P>
            A person rises faster than their inner system can integrate. A team
            grows faster than its communication rhythms can hold. A startup
            scales faster than its operating discipline matures. A hospital
            adopts new tools faster than its governance can absorb. An AI
            system becomes more capable faster than the institution around it
            becomes more reflective.
          </P>
        </Reveal>
        <Reveal delay={200}>
          <P>
            From the outside, ascent often looks like success. More energy,
            more output, more speed, more capability, more ambition, more
            reach. These are usually celebrated because they resemble
            progress. The graph is moving upward. The product is shipping. The
            team is responding. The institution is expanding. The system
            appears alive.
          </P>
        </Reveal>
        <Reveal delay={260}>
          <P>But ascent is not always health.</P>
        </Reveal>
        <Reveal delay={320}>
          <P>
            Sometimes ascent is simply acceleration. Sometimes speed is a sign
            that something has become temporarily overpowered but not yet
            integrated. Sometimes a system rises because it has borrowed
            energy from its future, its people, its reserves, its trust, its
            memory, or its hidden margins.
          </P>
        </Reveal>
        <Reveal delay={380}>
          <P lead>
            The danger begins when a system continues to rise without knowing
            how to listen to what the rise is costing.
          </P>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════
          MOTION ≠ COHERENCE
      ═══════════════════════════════════════ */}
      <Section eyebrow="I.">
        <Reveal delay={40}>
          <H2>The mistake of reading motion as coherence.</H2>
        </Reveal>
        <Reveal delay={100}>
          <P>
            Modern systems are very good at measuring motion. They can measure
            throughput, response time, user growth, revenue, productivity,
            case volume, engagement, ticket closure, turnaround time, and
            model performance. These numbers are useful, but they can also
            create a dangerous illusion.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P lead>
            They can make a system appear coherent because it is moving.
          </P>
        </Reveal>
        <Reveal delay={220}>
          <P>
            A team that is constantly shipping may still be losing trust. A
            clinic that is seeing more patients may still be increasing hidden
            strain. A founder who is producing more ideas may still be losing
            the ability to prioritize. An AI workflow that is completing more
            tasks may still be degrading human judgment. A company that is
            growing quickly may still be accumulating unspoken operational
            debt.
          </P>
        </Reveal>
        <Reveal delay={280}>
          <P>Motion is not the same as coherence.</P>
        </Reveal>
        <Reveal delay={340}>
          <P>
            Coherence means that the system can still understand itself while
            it moves. It can still sense strain. It can still remember why
            decisions were made. It can still distinguish urgency from
            importance. It can still pause when needed. It can still notice
            when people are compensating silently for broken structure.
          </P>
        </Reveal>
        <Reveal delay={400}>
          <P>
            A system without feedback can move impressively for a while, but
            it gradually loses the ability to know what its own movement
            means.
          </P>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════
          WHAT FEEDBACK REALLY MEANS
      ═══════════════════════════════════════ */}
      <Section eyebrow="II.">
        <Reveal delay={40}>
          <H2>What feedback really means.</H2>
        </Reveal>
        <Reveal delay={100}>
          <P>
            Feedback is often reduced to metrics, reviews, dashboards,
            surveys, and performance reports. These are part of feedback, but
            they are not the whole thing.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P lead>
            Real feedback is the system's ability to receive information from
            reality before reality becomes damage.
          </P>
        </Reveal>
        <Reveal delay={220}>
          <P>
            It is the uncomfortable comment in a meeting that prevents a bad
            decision. It is the junior employee who can safely say that the
            process is not working. It is the clinician who is allowed to
            override an algorithm without fear. It is the founder who has
            someone close enough to notice when speed has become avoidance. It
            is the dashboard that shows not only output, but strain. It is the
            team ritual that makes hidden friction visible before resentment
            hardens.
          </P>
        </Reveal>
        <Reveal delay={280}>
          <P>
            Feedback is not simply information. It is a relationship between
            signal and response.
          </P>
        </Reveal>
        <Reveal delay={340}>
          <P>
            A system has feedback only when it can hear what is happening and
            change because of what it hears.{" "}
            <em style={{ color: "#C88B5A", fontStyle: "italic" }}>
              If the signal exists but cannot alter behavior, it is not
              feedback. It is decoration.
            </em>
          </P>
        </Reveal>
        <Reveal delay={400}>
          <P>
            This distinction matters because many systems create the
            appearance of feedback while protecting themselves from
            interruption. They collect inputs, but continue unchanged. They
            ask for concerns, but punish the person who raises them. They
            track incidents, but do not change incentives. They run
            retrospectives, but preserve the same overload. They monitor AI
            performance, but ignore how the workflow around the AI is
            mutating.
          </P>
        </Reveal>
        <Reveal delay={460}>
          <P>In such systems, feedback is present in form but absent in function.</P>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════
          INDIVIDUALS
      ═══════════════════════════════════════ */}
      <Section eyebrow="III. The individual">
        <Reveal delay={40}>
          <H2>Unsupported ascent in individuals.</H2>
        </Reveal>
        <Reveal delay={100}>
          <P>
            At the level of a person, ascent without feedback can feel
            intoxicating.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            There are periods when energy rises, ideas connect, and everything
            seems possible. The mind becomes fast. Work feels urgent and
            luminous. The future becomes vivid. Patterns emerge that were
            previously invisible. The person may feel unusually capable,
            unusually clear, unusually chosen by the moment.
          </P>
        </Reveal>
        <Reveal delay={220}>
          <P>
            Sometimes that energy is creative. Sometimes it is necessary.
            Sometimes it helps a person move out of stagnation. Not all
            intensity is dangerous, and not all acceleration is pathology.
          </P>
        </Reveal>
        <Reveal delay={280}>
          <P lead>But intensity needs witness.</P>
        </Reveal>
        <Reveal delay={340}>
          <P>
            Without feedback, the person inside the ascent may lose
            proportion. They may begin too many things at once. They may
            mistake urgency for truth. They may outrun sleep, food,
            relationships, finances, body signals, and ordinary limits. They
            may become persuasive to others before they have become clear to
            themselves.
          </P>
        </Reveal>
        <Reveal delay={400}>
          <P>
            The problem is not that they rose. The problem is that nothing
            around the rise helped them calibrate.
          </P>
        </Reveal>
        <Reveal delay={460}>
          <P>
            A humane life cannot depend only on self-control. Self-control is
            important, but it is weakest precisely when the system is most
            activated. This is why warnings are not enough. "Be careful" is
            not a structure. "Slow down" is not a system. "Don't overdo it" is
            not feedback unless there is a relationship, rhythm, or
            environment that helps the person actually slow down.
          </P>
        </Reveal>
        <Reveal delay={520}>
          <P>
            The healthier question is not: how do we prevent intensity?
          </P>
        </Reveal>
        <Reveal delay={580}>
          <P lead>
            The healthier question is: what kind of container allows intensity
            to become creation rather than collapse?
          </P>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════
          TEAMS
      ═══════════════════════════════════════ */}
      <Section eyebrow="IV. The team">
        <Reveal delay={40}>
          <H2>Unsupported ascent in teams.</H2>
        </Reveal>
        <Reveal delay={100}>
          <P>Teams also experience ascent.</P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            A small team suddenly finds traction. Work increases. More people
            want things from them. New opportunities appear. The team begins
            operating on adrenaline, goodwill, improvisation, and shared
            belief. For a while, this can feel magical. Everyone is stretched,
            but everyone is proud. The sense of momentum becomes part of the
            identity.
          </P>
        </Reveal>
        <Reveal delay={220}>
          <P>Then the hidden costs begin.</P>
        </Reveal>
        <Reveal delay={280}>
          <P>
            Decisions stop being documented. Knowledge stays inside a few
            people's heads. The loudest or fastest person becomes the
            coordination layer. Meetings multiply but clarity does not. New
            people join without understanding the old context. Workarounds
            become normal. Quality becomes uneven. People stop raising
            concerns because the system is too busy to hear them.
          </P>
        </Reveal>
        <Reveal delay={340}>
          <P>The team is still rising, but the feedback loops are weakening.</P>
        </Reveal>
        <Reveal delay={400}>
          <P>
            This is the phase where many teams mistake overload for
            commitment. They treat exhaustion as proof that the work matters.
            They treat confusion as a normal cost of growth. They assume the
            structure can be repaired later, after the current push, after the
            next milestone, after the next launch, after the next client,
            after the next crisis.
          </P>
        </Reveal>
        <Reveal delay={460}>
          <P>But later rarely arrives cleanly.</P>
        </Reveal>
        <Reveal delay={520}>
          <P>
            By the time the team decides to build structure, people may
            already be tired, trust may already be thinner, and the informal
            memory that held everything together may already be overloaded.
          </P>
        </Reveal>
        <Reveal delay={580}>
          <P lead>
            A team does not fail only when output stops. It can begin failing
            while output is still increasing.
          </P>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════
          INSTITUTIONS
      ═══════════════════════════════════════ */}
      <Section eyebrow="V. The institution">
        <Reveal delay={40}>
          <H2>Unsupported ascent in institutions.</H2>
        </Reveal>
        <Reveal delay={100}>
          <P>
            Institutions experience the same pattern, but with greater
            consequences.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            A hospital expands services without improving coordination. A
            public system digitizes records without strengthening frontline
            workflows. A company deploys AI tools without preparing human
            oversight. A university launches innovation programs without
            changing bureaucratic rhythms. A clinic increases patient volume
            without improving handoffs, documentation, escalation pathways,
            and staff recovery.
          </P>
        </Reveal>
        <Reveal delay={220}>
          <P>
            On paper, this looks like progress. More services, more tools,
            more technology, more dashboards, more reach.
          </P>
        </Reveal>
        <Reveal delay={280}>
          <P>
            But if feedback loops do not mature with capacity, growth becomes
            dangerous. The institution becomes larger without becoming more
            aware. It can do more, but understand less. It can process more
            cases, but notice fewer human signals. It can automate more steps,
            but lose sight of who is absorbing the ambiguity between them.
          </P>
        </Reveal>
        <Reveal delay={340}>
          <P>
            This is especially dangerous in healthcare, where operational
            weakness often hides beneath clinical competence. A hospital may
            have excellent doctors and still have fragile coordination. A
            dental network may have skilled clinicians and still lose
            continuity through poor handoffs. A lab may have advanced machines
            and still run on WhatsApp, memory, and manual chasing. A care
            system may appear functional while depending on invisible human
            compensation.
          </P>
        </Reveal>
        <Reveal delay={400}>
          <P lead>
            The institution rises, but the strain becomes distributed among
            people who may not have the authority to redesign the system.
          </P>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════
          AI SYSTEMS
      ═══════════════════════════════════════ */}
      <Section eyebrow="VI. The AI system">
        <Reveal delay={40}>
          <H2>Unsupported ascent in AI systems.</H2>
        </Reveal>
        <Reveal delay={100}>
          <P>
            AI makes the problem sharper because AI accelerates capability
            faster than most institutions can accelerate reflection.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            A team can suddenly generate code, content, summaries, decisions,
            dashboards, designs, and analyses at speeds that were impossible
            before. This feels empowering, and often it is. But the speed of
            production can outrun the speed of judgment.
          </P>
        </Reveal>
        <Reveal delay={220}>
          <P>
            More can be created before anyone has decided what should be
            created. More can be automated before anyone has mapped the
            workflow. More can be delegated before anyone has clarified
            accountability. More can be answered before anyone has checked
            whether the question was framed correctly.
          </P>
        </Reveal>
        <Reveal delay={280}>
          <P>This is ascent without feedback in its most modern form.</P>
        </Reveal>
        <Reveal delay={340}>
          <P>
            The danger is not only that AI may make mistakes. The deeper
            danger is that institutions may reorganize themselves around AI
            outputs before they understand the new dependencies being
            created. People may stop checking because the system usually
            works. Managers may trust dashboards without understanding the
            data behind them. Clinicians may accept summaries because they
            are tired. Teams may build agents that act across tools without
            clearly defining boundaries.
          </P>
        </Reveal>
        <Reveal delay={400}>
          <P>Capability rises, but governance does not rise with it.</P>
        </Reveal>
        <Reveal delay={460}>
          <P lead>
            That is where automation drift begins.
          </P>
        </Reveal>
        <Reveal delay={520}>
          <P>
            A tool that was meant to assist quietly becomes the de facto
            decision-maker. A human-in-the-loop process becomes a
            human-near-the-loop process. A review step becomes a ritual
            approval. A temporary shortcut becomes the new workflow. Everyone
            believes the system is still supervised because the diagram says
            so, but in practice the supervision has become thin.
          </P>
        </Reveal>
        <Reveal delay={580}>
          <P>
            The problem is not AI itself. The problem is acceleration without
            institutional learning.
          </P>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════
          THE FEEDBACK GAP — five-line map
      ═══════════════════════════════════════ */}
      <Section eyebrow="VII. The map">
        <Reveal delay={40}>
          <H2>The feedback gap.</H2>
        </Reveal>
        <Reveal delay={100}>
          <P>Every ascent creates a feedback requirement.</P>
        </Reveal>

        <Reveal delay={160}>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)",
              fontStyle: "italic",
              fontWeight: 300,
              lineHeight: 1.85,
              color: "rgba(243,239,231,0.88)",
              padding: "2rem 0",
              margin: "0 0 1.6rem",
              borderTop: "1px solid rgba(200,139,90,0.15)",
              borderBottom: "1px solid rgba(200,139,90,0.15)",
              maxWidth: 640,
            }}
          >
            If energy rises, reflection must rise.
            <br />
            If volume rises, coordination must rise.
            <br />
            If automation rises, governance must rise.
            <br />
            If ambition rises, containment must rise.
            <br />
            If complexity rises, sensemaking must rise.
          </div>
        </Reveal>

        <Reveal delay={220}>
          <P>When these do not rise together, a gap opens.</P>
        </Reveal>
        <Reveal delay={280}>
          <P>
            That gap is where hidden strain accumulates. It is where burnout
            begins to look like dedication. It is where workarounds become
            culture. It is where ethical debt accumulates quietly. It is
            where people learn that raising concerns is pointless. It is
            where systems begin drifting from what they say they are doing
            toward what pressure forces them to do.
          </P>
        </Reveal>
        <Reveal delay={340}>
          <P>
            The feedback gap is not always visible from above. Leaders often
            see the upward graph, not the narrowing margin underneath it.
            They see growth, speed, adoption, output, and engagement. They
            may not see the informal compensations that make those numbers
            possible.
          </P>
        </Reveal>
        <Reveal delay={400}>
          <P>
            This is why humane systems need more than performance indicators.
            They need strain indicators. They need ways to notice when
            success is becoming extractive. They need channels through which
            weak signals can travel upward without being punished, ignored,
            or absorbed into bureaucracy.
          </P>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════
          DESIGNING FOR SAFE ASCENT
      ═══════════════════════════════════════ */}
      <Section eyebrow="VIII. Design">
        <Reveal delay={40}>
          <H2>Designing for safe ascent.</H2>
        </Reveal>
        <Reveal delay={100}>
          <P>The answer is not to reject ascent.</P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            That would be unrealistic and undesirable. People need to grow.
            Teams need to build. Institutions need to improve. AI systems
            will become more capable. Healthcare needs better tools.
            Creativity needs intensity. Ambition is not the enemy.
          </P>
        </Reveal>
        <Reveal delay={220}>
          <P lead>The answer is to design ascent with feedback.</P>
        </Reveal>
        <Reveal delay={280}>
          <P>
            This means building rhythms that force reflection before
            collapse. It means creating decision logs so memory does not
            depend on one person. It means making escalation safe. It means
            tracking rework, fatigue, exceptions, and workarounds, not only
            output. It means distinguishing a temporary sprint from a new
            operating model. It means refusing to let "we are moving fast"
            become an excuse for losing the ability to understand what is
            happening.
          </P>
        </Reveal>
        <Reveal delay={340}>
          <P>
            For individuals, safe ascent may look like sleep rules, trusted
            check-ins, pacing rituals, medication adherence, reflective
            writing, boundaries around irreversible decisions, and people
            who are allowed to tell the truth when the ascent becomes too
            hot.
          </P>
        </Reveal>
        <Reveal delay={400}>
          <P>
            For teams, it may look like retrospectives that actually change
            work, explicit ownership, documentation, review gates, workload
            visibility, and the courage to slow one part of the system
            before the whole thing becomes brittle.
          </P>
        </Reveal>
        <Reveal delay={460}>
          <P>
            For institutions, it may look like governance that is close
            enough to operations to notice drift, dashboards that include
            strain, frontline participation in design, incident learning
            without blame, and AI deployment models that test not only model
            performance, but human-system behavior under pressure.
          </P>
        </Reveal>
        <Reveal delay={520}>
          <P>
            For AI-enabled workflows, safe ascent means human review that is
            meaningful, not ceremonial. It means tool boundaries, audit
            trails, fallback paths, escalation rules, and clarity about who
            is accountable when automation changes the shape of work.
          </P>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════
          THE DISCIPLINE OF DESCENT
      ═══════════════════════════════════════ */}
      <Section eyebrow="IX. Descent">
        <Reveal delay={40}>
          <H2>The discipline of descent.</H2>
        </Reveal>
        <Reveal delay={100}>
          <P>Safe ascent also requires descent.</P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            Descent is not failure. It is the return that allows energy to
            become integrated. It is the pause after a sprint, the review
            after a launch, the documentation after a breakthrough, the rest
            after intensity, the governance after adoption, the conversation
            after conflict.
          </P>
        </Reveal>
        <Reveal delay={220}>
          <P>
            Systems that only know how to rise eventually become afraid of
            slowing down. They begin to treat descent as weakness,
            inefficiency, or loss of momentum. This is dangerous because no
            living system can remain in ascent forever.
          </P>
        </Reveal>
        <Reveal delay={280}>
          <P>
            A person needs recovery. A team needs consolidation. An
            institution needs learning cycles. An AI workflow needs
            evaluation. A product needs maintenance. A culture needs memory.
          </P>
        </Reveal>
        <Reveal delay={340}>
          <P>Without descent, ascent becomes extraction.</P>
        </Reveal>
        <Reveal delay={400}>
          <P>With descent, ascent becomes growth.</P>
        </Reveal>
        <Reveal delay={460}>
          <P lead>
            This may be one of the most important design principles for
            humane systems: every phase of acceleration should have a
            corresponding phase of integration. If a system cannot come down
            safely, it was never truly safe at height.
          </P>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════
          WHAT ARCHLIFE ASKS
      ═══════════════════════════════════════ */}
      <Section eyebrow="X. What ArchLife asks">
        <Reveal delay={40}>
          <H2>The space between movement and meaning.</H2>
        </Reveal>
        <Reveal delay={100}>
          <P>
            ArchLife is interested in the space between movement and meaning.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            It asks what happens when human beings, institutions, and
            intelligent systems are pushed toward more speed, more
            productivity, more optimization, and more automation without
            being given equal capacity for reflection, care, and integration.
          </P>
        </Reveal>
        <Reveal delay={220}>
          <P>
            Ascent without feedback is one of the core patterns in that
            field. It appears in personal life as overextension. It appears
            in teams as coordination collapse. It appears in healthcare as
            hidden operational strain. It appears in AI as automation drift.
            It appears in institutions as growth without memory.
          </P>
        </Reveal>
        <Reveal delay={280}>
          <P>
            The task is not to stop ascent. The task is to make ascent
            accountable to life.
          </P>
        </Reveal>
        <Reveal delay={340}>
          <P>
            A humane system should be able to ask, while things are still
            going well: what is this speed costing, who is holding the hidden
            strain, what signals are being ignored, what decisions are
            becoming irreversible, what needs to slow down, and what kind of
            descent will allow this growth to become integrated?
          </P>
        </Reveal>
        <Reveal delay={400}>
          <P>
            The fall rarely begins at the moment of collapse. It begins
            earlier, in the period when everything appears to be rising and
            no one asks whether the system can still feel itself.
          </P>
        </Reveal>
        <Reveal delay={460}>
          <P>That is the danger.</P>
        </Reveal>
        <Reveal delay={520}>
          <P>And that is the work.</P>
        </Reveal>
        <Reveal delay={580}>
          <P>
            Not to fear height, but to build feedback around it. Not to
            punish intensity, but to give it rhythm. Not to worship
            acceleration, but to make it answerable to care.
          </P>
        </Reveal>

        <Reveal delay={640}>
          <div
            style={{
              marginTop: "2.6rem",
              paddingTop: "2.4rem",
              borderTop: "1px solid rgba(200,139,90,0.15)",
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.4rem, 2.8vw, 2rem)",
                fontStyle: "italic",
                fontWeight: 300,
                lineHeight: 1.55,
                color: "#C88B5A",
                margin: 0,
                maxWidth: 720,
                letterSpacing: "0.005em",
              }}
            >
              Because ascent is only beautiful when return remains possible.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════
          QUIET FOOTER — back to Canon + sibling link
      ═══════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: "clamp(6rem, 12vw, 10rem) clamp(1.5rem, 8vw, 8rem)",
          maxWidth: 760,
          margin: "0 auto",
          textAlign: "center",
          borderTop: "1px solid rgba(200,139,90,0.06)",
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
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(155,94,69,0.5)",
              marginBottom: "2rem",
            }}
          >
            ArchLife · Canon · Ascent Without Feedback
          </div>
        </Reveal>

        <Reveal delay={140}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.95rem",
              fontStyle: "italic",
              color: "rgba(156,163,175,0.6)",
              marginBottom: "1.6rem",
              lineHeight: 1.6,
            }}
          >
            Read first ·{" "}
            <a
              href="/canon/icarus"
              style={{
                color: "rgba(243,239,231,0.85)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(200,139,90,0.35)",
                paddingBottom: 2,
                transition: "color 0.35s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#C88B5A")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(243,239,231,0.85)")
              }
            >
              The Icarus Problem
            </a>
          </p>
        </Reveal>

        <Reveal delay={200}>
          <a
            href="/canon"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(243,239,231,0.85)",
              border: "1px solid rgba(200,139,90,0.3)",
              padding: "0.85rem 1.8rem",
              textDecoration: "none",
              background: "rgba(200,139,90,0.04)",
              transition: "all 0.4s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(200,139,90,0.12)";
              e.currentTarget.style.borderColor = "rgba(200,139,90,0.55)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(200,139,90,0.04)";
              e.currentTarget.style.borderColor = "rgba(200,139,90,0.3)";
            }}
          >
            ← Return to the Canon
          </a>
        </Reveal>
      </section>
    </PageShell>
  );
}
