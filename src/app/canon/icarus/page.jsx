import { PageShell } from "@/components/PageShell/PageShell";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export const meta = () => [
  { title: "The Icarus Problem | ArchLife" },
  {
    name: "description",
    content:
      "On ascent, collapse, and the systems that fail to notice. A reading of Bruegel's Landscape with the Fall of Icarus.",
  },
];

// The actual painting this essay reads: Bruegel's "Landscape with the Fall of
// Icarus" (Royal Museums of Fine Arts of Belgium, c. 1560) — public domain.
// Local HD copy (was previously a low-res hotlink of an unrelated AI wallpaper).
const BRUEGEL_SRC = "/bruegel-icarus.webp";

// ── Typographic helpers, scoped to this essay. ──
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

export default function IcarusEssayPage() {
  return (
    <PageShell>
      {/* ═══════════════════════════════════════
          HERO — Bruegel foregrounded
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
              maxWidth: 900,
            }}
          >
            The Icarus{" "}
            <em style={{ color: "#C88B5A", fontStyle: "italic" }}>Problem.</em>
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
              margin: "0 0 4rem",
            }}
          >
            On ascent, collapse, and the systems that fail to notice.
          </p>
        </Reveal>

        {/* ── Painting — foregrounded ── */}
        <Reveal delay={200}>
          <figure
            style={{
              margin: 0,
              filter: "drop-shadow(0 24px 64px rgba(0,0,0,0.85))",
            }}
          >
            <img
              src={BRUEGEL_SRC}
              alt="Landscape with the Fall of Icarus — Pieter Bruegel the Elder. A farmer plows a field in the foreground. A shepherd looks up at the sky. A ship sails through a quiet bay. In the lower right, almost hidden, a pair of legs disappears beneath the surface of the water."
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                opacity: 0.92,
              }}
            />
            <figcaption
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                color: "rgba(156,163,175,0.45)",
                marginTop: "1.4rem",
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              Pieter Bruegel the Elder · Landscape with the Fall of Icarus ·
              c. 1560
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════
          OPENING
      ═══════════════════════════════════════ */}
      <Section>
        <Reveal>
          <P>
            There is a painting I keep returning to:{" "}
            <em>Landscape with the Fall of Icarus</em>, often associated with
            Pieter Bruegel the Elder. At first glance, it does not announce
            itself as a painting about catastrophe. It looks, instead, like an
            ordinary landscape filled with ordinary work. A farmer bends into
            his field. A shepherd stands near his flock. A fisherman waits by
            the water. Ships move across a quiet bay. The world appears warm,
            productive, and intact.
          </P>
        </Reveal>
        <Reveal delay={60}>
          <P>
            Only after looking carefully does the tragedy become visible. Near
            the edge of the painting, almost hidden in the water, a pair of
            legs disappears beneath the surface. That is Icarus, the boy who
            flew too close to the sun, whose wax wings melted, and who fell
            from the sky into the sea.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            What makes the painting so unsettling is not only that Icarus
            falls. It is that almost no one seems to notice. The plowman
            continues his work. The shepherd looks elsewhere. The fisherman
            remains absorbed in his task. The ship keeps moving. The day does
            not stop for the boy who has fallen out of the sky.
          </P>
        </Reveal>
        <Reveal delay={180}>
          <P lead>
            That quietness is what makes the painting painful. It does not
            show tragedy as spectacle. It shows tragedy as something that can
            happen at the edge of attention while the world continues to
            function.
          </P>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════
          THE CRUELTY OF ORDINARY CONTINUITY
      ═══════════════════════════════════════ */}
      <Section eyebrow="I.">
        <Reveal delay={40}>
          <H2>The cruelty of ordinary continuity.</H2>
        </Reveal>
        <Reveal delay={100}>
          <P>
            Most collapses do not look dramatic from a distance. They often
            appear, at first, as continuity. Work continues, messages are
            answered, meetings happen, patients move through the system,
            dashboards stay active, deadlines are met, and the surface of life
            remains strangely normal.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            From the outside, everything appears to be working. The field is
            still being plowed. The ship is still sailing. The system is still
            producing output. Yet somewhere inside the frame, something human
            has already begun to disappear.
          </P>
        </Reveal>
        <Reveal delay={220}>
          <P>
            This is the quiet horror of{" "}
            <em>Landscape with the Fall of Icarus</em>. It shows us that a
            world can remain operational while failing to care. It can preserve
            rhythm while losing attention. It can continue its tasks while
            becoming blind to the suffering that does not interrupt its
            schedule loudly enough.
          </P>
        </Reveal>
        <Reveal delay={280}>
          <P>
            That feels painfully close to real life. Collapse is often missed
            not because no one is cruel, but because everyone is busy. People
            are occupied by their own roles, their own deadlines, their own
            survival, and their own limited field of vision. The fall happens
            in a corner of the system, and by the time someone looks closely,
            the event has already become irreversible.
          </P>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════
          THE USUAL LESSON IS TOO SMALL
      ═══════════════════════════════════════ */}
      <Section eyebrow="II.">
        <Reveal delay={40}>
          <H2>The usual lesson is too small.</H2>
        </Reveal>
        <Reveal delay={100}>
          <P>
            The common lesson of Icarus is simple: do not fly too close to the
            sun. It is usually read as a warning against arrogance, ambition,
            disobedience, and the intoxication of going too far too fast.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            There is truth in that interpretation, but it has always felt
            incomplete to me. It makes the problem too individual. It turns
            Icarus into a cautionary figure and leaves the world around him
            mostly unquestioned.
          </P>
        </Reveal>
        <Reveal delay={220}>
          <P>
            The deeper question is not only why Icarus flew too high. The
            deeper question is{" "}
            <em style={{ color: "#C88B5A", fontStyle: "italic" }}>
              why the flight was so poorly held.
            </em>{" "}
            Who was watching the ascent? What signs were missed? What kind of
            world allows someone to rise dangerously and fall quietly? What
            would it mean to build a system that does not wait for collapse
            before it begins to pay attention?
          </P>
        </Reveal>
        <Reveal delay={280}>
          <P lead>
            That, to me, is the Icarus problem. It is not ambition itself. It
            is not intensity itself. It is not the desire to rise, create,
            build, or touch something brighter than ordinary life. The problem
            is ascent without feedback.
          </P>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════
          ASCENT CAN BE BEAUTIFUL
      ═══════════════════════════════════════ */}
      <Section eyebrow="III.">
        <Reveal delay={40}>
          <H2>Ascent can be beautiful.</H2>
        </Reveal>
        <Reveal delay={100}>
          <P>
            There is a kind of rising that can feel almost sacred when you are
            inside it. Ideas begin to connect faster than usual. Work becomes
            electric. Language sharpens. Patterns appear everywhere. The future
            feels strangely close, as if a wall has thinned between what exists
            and what could exist.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            There is beauty in that state. It can produce art, strategy,
            invention, courage, and motion. It can help a person break through
            long periods of inertia. It can make life feel briefly and
            intensely alive.
          </P>
        </Reveal>
        <Reveal delay={220}>
          <P>
            So the answer cannot simply be to never rise. That would be too
            small, and perhaps even cruel. Some people are built with unusual
            intensity. Some minds do not move in straight lines. Some lives are
            shaped by periods of acceleration, repair, collapse, and return. To
            tell such a person only to avoid height is not wisdom. It is fear
            pretending to be wisdom.
          </P>
        </Reveal>
        <Reveal delay={280}>
          <P>
            The better question is how to make flight survivable. How do we
            build around intensity without worshipping it? How do we protect
            the person who is rising without extinguishing the energy that
            makes the rise meaningful? How do we create enough feedback,
            rhythm, witness, and descent so that flight does not automatically
            become danger?
          </P>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════
          A WARNING IS NOT A SYSTEM
      ═══════════════════════════════════════ */}
      <Section eyebrow="IV.">
        <Reveal delay={40}>
          <H2>A warning is not a system.</H2>
        </Reveal>
        <Reveal delay={100}>
          <P>
            Icarus had wings, and he had a warning. His father told him not to
            fly too high or too low. But a warning is not the same as a holding
            structure.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            A warning says: be careful. A system says: here is how we will
            notice if danger is approaching, here is how we will slow down,
            here is who will check in, here is what we will do if the heat
            becomes too much, and here is how we return safely.
          </P>
        </Reveal>
        <Reveal delay={220}>
          <P>
            That difference matters because many institutions, families,
            teams, and inner lives operate mostly on warnings. Do not burn
            out. Do not overdo it. Do not take too much on. Do not ignore the
            signs. Do not fly too close to the sun.
          </P>
        </Reveal>
        <Reveal delay={280}>
          <P>
            But warnings alone are weak. They depend on the person in danger
            being able to self-monitor precisely at the moment when
            self-monitoring may be most compromised. They place the burden of
            safety on the person already inside the heat.
          </P>
        </Reveal>
        <Reveal delay={340}>
          <P lead>
            A more humane system does not only tell people not to fall. It
            builds ways to notice when the conditions for falling are
            beginning to form.
          </P>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════
          HIDDEN STRAIN AND INVISIBLE COLLAPSE
      ═══════════════════════════════════════ */}
      <Section eyebrow="V.">
        <Reveal delay={40}>
          <H2>Hidden strain and invisible collapse.</H2>
        </Reveal>
        <Reveal delay={100}>
          <P>This is not only a personal problem. It is also an institutional one.</P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            Teams fall this way. Hospitals fall this way. Startups fall this
            way. Families fall this way. Public systems fall this way.
          </P>
        </Reveal>
        <Reveal delay={220}>
          <P>
            From the outside, everything may look functional. The dashboard
            may remain green, the team may continue replying to messages, the
            product roadmap may keep moving, the clinic may keep seeing
            patients, the founder may still sound confident on calls, and the
            institution may still appear stable from a distance.
          </P>
        </Reveal>
        <Reveal delay={280}>
          <P>
            But underneath that apparent continuity, strain can be
            accumulating quietly. People may be compensating manually for
            broken processes. Junior staff may be absorbing impossible
            ambiguity. One person may have become the memory of the entire
            system. Workarounds may have replaced governance. Speed may have
            been mistaken for health. Output may have been mistaken for
            coherence.
          </P>
        </Reveal>
        <Reveal delay={340}>
          <P>
            Then, eventually, something fails. A person breaks down. A process
            collapses. A patient is harmed. A team loses trust. A system
            reaches a point where the damage can no longer be hidden.
          </P>
        </Reveal>
        <Reveal delay={400}>
          <P>
            At that point, people ask how it happened. But the honest answer
            is that it had been happening for a long time. It was just
            happening at the edge of the painting.
          </P>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════
          WHAT THE PAINTING TEACHES SYSTEMS
      ═══════════════════════════════════════ */}
      <Section eyebrow="VI.">
        <Reveal delay={40}>
          <H2>What the painting teaches systems.</H2>
        </Reveal>
        <Reveal delay={100}>
          <P>
            The painting teaches a brutal lesson: a system can continue while
            failing to notice what matters.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            It can remain productive while becoming less humane. It can
            preserve workflow while losing sensitivity. It can reward motion
            so consistently that stillness begins to look like weakness. It
            can mistake uninterrupted activity for resilience.
          </P>
        </Reveal>
        <Reveal delay={220}>
          <P lead>
            But resilience is not the ability to keep plowing while someone
            drowns. Resilience is the ability to notice that someone is
            missing from the field. It is the capacity to pause, to look
            again, to treat small signals as worthy of attention before they
            become evidence of damage.
          </P>
        </Reveal>
        <Reveal delay={280}>
          <P>
            This is where Icarus becomes more than myth. He becomes a
            diagnostic image. He asks every system a difficult question:{" "}
            <em style={{ color: "#C88B5A", fontStyle: "italic" }}>
              who is allowed to fall unnoticed here?
            </em>
          </P>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════
          THE ARCHLIFE READING OF ICARUS
      ═══════════════════════════════════════ */}
      <Section eyebrow="VII. The ArchLife reading">
        <Reveal delay={40}>
          <H2>
            The Icarus problem is a warning against{" "}
            <em style={{ color: "#C88B5A", fontStyle: "italic" }}>
              unsupported intensity.
            </em>
          </H2>
        </Reveal>
        <Reveal delay={100}>
          <P>
            For ArchLife, the Icarus problem is not a warning against
            ambition. It is a warning against unsupported intensity.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            It describes what happens when energy outruns reflection, when
            intelligence outruns integration, when acceleration outruns
            rhythm, and when systems celebrate flight without building safe
            descent.
          </P>
        </Reveal>
        <Reveal delay={220}>
          <P>
            A humane system cannot be designed only for average states. It
            must also be designed for fluctuation, pressure, fatigue,
            ambition, grief, overload, and the moments when people cannot
            fully protect themselves from their own momentum.
          </P>
        </Reveal>
        <Reveal delay={280}>
          <P>
            This applies to individuals, but it also applies to teams,
            institutions, care systems, and AI-enabled workflows. The question
            is not simply how to make people more efficient. The deeper
            question is how to build systems that can notice when efficiency
            is turning into erasure.
          </P>
        </Reveal>
        <Reveal delay={340}>
          <P lead>
            The Icarus problem asks us to design not only for performance, but
            for return. Not only for ascent, but for descent. Not only for
            brilliance, but for integration.
          </P>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════
          THE BETTER LESSON
      ═══════════════════════════════════════ */}
      <Section eyebrow="Coda. The better lesson">
        <Reveal delay={40}>
          <P>
            Maybe the lesson of Icarus was never simply "do not fly." Maybe
            the better lesson is that{" "}
            <em style={{ color: "#C88B5A", fontStyle: "italic" }}>
              flight needs witness.
            </em>
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            If people are going to rise, build, create, accelerate, and reach
            beyond themselves, then they need more than warnings. They need
            feedback. They need rhythm. They need people who can notice when
            the sun is getting too close. They need systems that can recognize
            not only visible failure, but dangerous brightness.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            Because sometimes the fall does not begin when the wings melt.
            Sometimes the fall begins much earlier, when everyone mistakes
            ascent for proof that everything is fine.
          </P>
        </Reveal>
        <Reveal delay={220}>
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
                fontSize: "clamp(1.3rem, 2.4vw, 1.7rem)",
                fontStyle: "italic",
                fontWeight: 300,
                lineHeight: 1.65,
                color: "rgba(243,239,231,0.92)",
                margin: 0,
                maxWidth: 720,
              }}
            >
              And perhaps the most humane thing a system can do, in such a
              moment, is not to push someone higher or pull them down in fear,
              but to say with steadiness:
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.4rem, 2.8vw, 2rem)",
                fontStyle: "italic",
                fontWeight: 300,
                lineHeight: 1.55,
                color: "#C88B5A",
                margin: "1.8rem 0 0",
                maxWidth: 720,
                letterSpacing: "0.005em",
              }}
            >
              I see the height, I see the heat, come back slowly, we are still
              here.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ═══════════════════════════════════════
          QUIET FOOTER — back to Canon
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
            ArchLife · Canon · The Icarus Problem
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
            Continue ·{" "}
            <a
              href="/canon/ascent-without-feedback"
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
              Ascent Without Feedback →
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
