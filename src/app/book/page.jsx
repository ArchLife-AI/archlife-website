import { PageShell } from "@/components/PageShell/PageShell";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export const meta = () => [
  { title: "The Builder and The Architect | ArchLife" },
  {
    name: "description",
    content:
      "The Builder and The Architect — A Field Guide to Living Therapy. The book at the foundation of ArchLife: rhythm, recursion, and the inner architecture of remaining aware under strain.",
  },
];

const BUILDER_PAINTING_URL =
  "/builder-painting.webp";

const BOOK_COVER_URL =
  "/architect-painting.jpg";

// ── Reusable text components ─────────────────────────────────
function Eyebrow({ children, color = "var(--gold-deep)" }) {
  return (
    <div
      style={{
        fontFamily: "var(--sans)",
        fontSize: "0.6rem",
        letterSpacing: "0.24em",
        textTransform: "uppercase",
        color,
        marginBottom: "1.4rem",
      }}
    >
      {children}
    </div>
  );
}

function H2({ children }) {
  return (
    <h2
      style={{
        fontFamily: "var(--serif)",
        fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
        fontWeight: 300,
        lineHeight: 1.12,
        color: "var(--ink)",
        letterSpacing: "-0.01em",
        margin: 0,
        marginBottom: "2rem",
      }}
    >
      {children}
    </h2>
  );
}

function H3({ children }) {
  return (
    <h3
      style={{
        fontFamily: "var(--serif)",
        fontSize: "clamp(1.4rem, 2.6vw, 1.9rem)",
        fontWeight: 300,
        fontStyle: "italic",
        color: "var(--ink)",
        letterSpacing: "-0.005em",
        margin: 0,
        marginBottom: "1.1rem",
      }}
    >
      {children}
    </h3>
  );
}

function P({ children, muted = false }) {
  return (
    <p
      style={{
        fontFamily: "var(--sans)",
        fontSize: "0.92rem",
        lineHeight: 1.95,
        color: muted ? "rgba(156,163,175,0.65)" : "rgba(243,239,231,0.78)",
        fontWeight: 300,
        margin: 0,
        marginBottom: "1.4rem",
      }}
    >
      {children}
    </p>
  );
}

function Quote({ children }) {
  return (
    <blockquote
      style={{
        margin: "2rem 0",
        padding: "0 0 0 1.4rem",
        borderLeft: "1px solid rgba(200,139,90,0.35)",
        fontFamily: "var(--serif)",
        fontSize: "1.25rem",
        fontStyle: "italic",
        lineHeight: 1.65,
        color: "rgba(243,239,231,0.7)",
        fontWeight: 300,
        letterSpacing: "0.01em",
      }}
    >
      {children}
    </blockquote>
  );
}

// Article section wrapper
function Section({ children, narrow = false }) {
  return (
    <section
      style={{
        position: "relative",
        zIndex: 1,
        padding: "clamp(4rem,9vw,7rem) clamp(1.5rem,6vw,5rem)",
        maxWidth: narrow ? 760 : 880,
        margin: "0 auto",
      }}
    >
      {children}
    </section>
  );
}

export default function BookPage() {
  return (
    <PageShell>
      {/* ═══ HERO ═══ */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding:
            "clamp(8rem, 16vw, 12rem) clamp(1.5rem,6vw,6rem) clamp(3rem,6vw,5rem)",
          maxWidth: 920,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <Reveal>
          <Eyebrow>ArchLife · The Founder's Book</Eyebrow>
        </Reveal>

        <Reveal delay={60}>
          <h1
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(2.6rem, 6vw, 5rem)",
              fontWeight: 300,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "var(--ink)",
              margin: 0,
              marginBottom: "1.6rem",
            }}
          >
            The Builder
            <br />
            and{" "}
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              The Architect.
            </em>
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <p
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(1.15rem, 2.4vw, 1.6rem)",
              fontStyle: "italic",
              fontWeight: 300,
              color: "rgba(243,239,231,0.7)",
              lineHeight: 1.55,
              maxWidth: 620,
              margin: "0 auto 3rem",
            }}
          >
            A Field Guide to Living Therapy.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: "0.72rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(200,139,90,0.72)",
              margin: "0 auto 3rem",
            }}
          >
            Manuscript in formation. Not yet in print.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: "0.95rem",
              lineHeight: 2,
              color: "rgba(156,163,175,0.85)",
              maxWidth: 600,
              margin: "0 auto",
              fontWeight: 300,
            }}
          >
            There are moments in a life when survival is no longer just about
            continuing. It becomes about remembering who you are while everything
            inside you is changing.
          </p>
        </Reveal>
      </section>

      {/* ═══ WHY THIS BOOK EXISTS ═══ */}
      <Section>
        <Reveal>
          <Eyebrow>Origin</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <H2>
            It began as an attempt to{" "}
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              preserve continuity through rupture.
            </em>
          </H2>
        </Reveal>
        <Reveal delay={120}>
          <P>
            Not as a theory. Not as a self-help system. Not as a finished answer.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            For years, I lived through states of intensity, collapse, recovery,
            confusion, ambition, grief, and reconstruction. I began archiving
            conversations, reflections, emotional states, frameworks, failures,
            and moments of insight before I fully understood why. Over time, I
            realized I was not trying to preserve everything.
          </P>
        </Reveal>
        <Reveal delay={200}>
          <P>I was trying to preserve awareness.</P>
        </Reveal>
        <Reveal delay={240}>
          <P muted>
            Because when life becomes unstable, awareness is often the first
            thing to disappear. We forget what we felt. We forget what almost
            broke us. We forget what brought us back. We forget the promises we
            made to ourselves in moments of clarity.
          </P>
        </Reveal>
        <Reveal delay={280}>
          <P>This book is an attempt to remember.</P>
        </Reveal>
        <Reveal delay={320}>
          <P>
            It is the first major work within ArchLife: an ecosystem of ideas,
            systems, and reflective architectures built around one question:
          </P>
        </Reveal>
        <Reveal delay={360}>
          <Quote>
            How do humans and institutions preserve awareness, dignity, and
            continuity under strain?
          </Quote>
        </Reveal>
      </Section>

      {/* ═══ PAINTING ═══ */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: "clamp(2rem,4vw,4rem) clamp(1.5rem,6vw,5rem)",
          maxWidth: 920,
          margin: "0 auto",
        }}
      >
        <Reveal delay={80}>
          <div
            style={{
              filter: "drop-shadow(0 24px 64px rgba(0,0,0,0.85))",
            }}
          >
            <img
              src={BUILDER_PAINTING_URL}
              alt="The Builder and The Architect"
              style={{
                width: "100%",
                display: "block",
                animation: "breathe 13s ease-in-out infinite",
              }}
            />
          </div>
        </Reveal>
      </section>

      {/* ═══ THE INNER ARCHITECTURE ═══ */}
      <Section>
        <Reveal>
          <Eyebrow>Inner Architecture</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <H2>
            At the heart of the book{" "}
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              are two forces.
            </em>
          </H2>
        </Reveal>

        <Reveal delay={120}>
          <H3>The Builder</H3>
        </Reveal>
        <Reveal delay={140}>
          <P>The Builder is the force of movement.</P>
        </Reveal>
        <Reveal delay={180}>
          <P>
            It acts before certainty. It experiments before explanation. It
            follows energy, curiosity, pain, instinct, longing, and possibility.
          </P>
        </Reveal>
        <Reveal delay={220}>
          <P>
            The Builder is the part of us that wants to create, try, reach, risk,
            love, build, repair, escape, begin again. Without the Builder,
            nothing moves.
          </P>
        </Reveal>
        <Reveal delay={260}>
          <P muted>
            But left alone, the Builder can burn too hot. It can confuse urgency
            for truth, intensity for direction, and motion for meaning.
          </P>
        </Reveal>

        <Reveal delay={320}>
          <div style={{ marginTop: "3rem" }}>
            <H3>The Architect</H3>
          </div>
        </Reveal>
        <Reveal delay={340}>
          <P>The Architect is the force of structure.</P>
        </Reveal>
        <Reveal delay={380}>
          <P>
            It observes. It organises. It asks what can endure. It turns
            experience into language, memory, rhythm, and form.
          </P>
        </Reveal>
        <Reveal delay={420}>
          <P>
            The Architect is the part of us that builds rooms around storms.
            Without the Architect, nothing stabilizes.
          </P>
        </Reveal>
        <Reveal delay={460}>
          <P muted>
            But left alone, the Architect can become sterile. It can replace
            aliveness with control, vulnerability with explanation, and mystery
            with over-designed safety.
          </P>
        </Reveal>

        <Reveal delay={520}>
          <div style={{ marginTop: "3rem" }}>
            <P>The book is not about choosing between them.</P>
          </div>
        </Reveal>
        <Reveal delay={560}>
          <P>It is about learning how they speak to each other.</P>
        </Reveal>
        <Reveal delay={600}>
          <P>
            The Builder brings life. The Architect brings continuity. Growth
            happens in the living tension between them.
          </P>
        </Reveal>
        <Reveal delay={640}>
          <P>
            I call that tension{" "}
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Manthan</em>:
            the churn through which experience becomes insight, and insight
            becomes a more livable form of life.
          </P>
        </Reveal>
      </Section>

      {/* ═══ LIVING THERAPY + NaHzHaR ═══ */}
      <Section>
        <Reveal>
          <Eyebrow>Practice</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <H2>
            Living Therapy is a reflective practice for{" "}
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              inhabiting experience more honestly.
            </em>
          </H2>
        </Reveal>
        <Reveal delay={120}>
          <P>
            It is not a replacement for clinical therapy, medicine, or
            professional care. It begins from a simple premise:
          </P>
        </Reveal>
        <Reveal delay={160}>
          <Quote>
            Emotion is not noise.
            <br />
            Emotion is information arriving before structure.
          </Quote>
        </Reveal>
        <Reveal delay={220}>
          <P>
            Much of modern life teaches us to either suppress emotion or optimize
            around it. Living Therapy asks something different. It asks us to
            listen. Not indulgently. Not endlessly. But carefully enough that
            pain can become intelligible without being prematurely erased.
          </P>
        </Reveal>
        <Reveal delay={260}>
          <P>
            The central rhythm of this practice is{" "}
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>NaHzHaR.</em>
          </P>
        </Reveal>

        {/* Four phases */}
        <div style={{ marginTop: "2rem" }}>
          {[
            {
              n: "01",
              name: "Notice",
              detail:
                "To become aware of what is present without immediately judging it, fixing it, or fleeing from it.",
            },
            {
              n: "02",
              name: "Hold",
              detail:
                "To create enough inner space for discomfort to be witnessed without collapse, numbness, or impulsive action.",
            },
            {
              n: "03",
              name: "Heal",
              detail:
                "To allow pain, confusion, or fragmentation to reorganise into pattern, meaning, and coherence.",
            },
            {
              n: "04",
              name: "Release",
              detail:
                "To let go of what has completed its function, while carrying forward what has become integrated.",
            },
          ].map((phase, i) => (
            <Reveal key={phase.n} delay={i * 80 + 320}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "1.6rem",
                  padding: "1.8rem 0",
                  borderTop: "1px solid rgba(200,139,90,0.08)",
                  alignItems: "baseline",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.22em",
                    color: "var(--gold-deep)",
                    width: 32,
                  }}
                >
                  {phase.n}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "clamp(1.3rem, 2.4vw, 1.7rem)",
                      fontWeight: 300,
                      fontStyle: "italic",
                      color: "var(--ink)",
                      lineHeight: 1.25,
                      marginBottom: "0.7rem",
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {phase.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: "0.86rem",
                      lineHeight: 1.9,
                      color: "rgba(156,163,175,0.7)",
                      fontWeight: 300,
                    }}
                  >
                    {phase.detail}
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

        <Reveal delay={680}>
          <div style={{ marginTop: "2.4rem" }}>
            <P muted>
              NaHzHaR is not a linear checklist. It is a rhythm. We return to it
              again and again because healing is rarely a straight line. It is
              recursive. It deepens through repetition, context, relationship,
              memory, and time.
            </P>
          </div>
        </Reveal>
      </Section>

      {/* ═══ FROM PERSONAL TO SYSTEMIC ═══ */}
      <Section>
        <Reveal>
          <Eyebrow>Scale</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <H2>
            The book began with the individual mind. But it{" "}
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              did not stay there.
            </em>
          </H2>
        </Reveal>
        <Reveal delay={120}>
          <P>Over time, I began seeing the same patterns at larger scales.</P>
        </Reveal>
        <Reveal delay={160}>
          <P>People lose awareness under strain.</P>
        </Reveal>
        <Reveal delay={200}>
          <P>
            So do families. So do teams. So do hospitals. So do institutions. So
            do technologies.
          </P>
        </Reveal>
        <Reveal delay={240}>
          <P muted>
            A person may normalize exhaustion until it becomes identity. An
            institution may normalize overload until it becomes culture. A
            governance system may normalize compromise until drift becomes
            invisible. A technology may optimize efficiency while quietly
            erasing the human margin where care, adaptation, and meaning live.
          </P>
        </Reveal>
        <Reveal delay={280}>
          <P>
            This is where the book begins to widen into ArchLife. ArchLife is
            concerned with reflective systems: systems that can notice their
            own degradation before collapse becomes irreversible.
          </P>
        </Reveal>
        <Reveal delay={320}>
          <Quote>Can this system remain aware of what it is becoming?</Quote>
        </Reveal>
      </Section>

      {/* ═══ SolaEiMara ═══ */}
      <Section>
        <Reveal>
          <Eyebrow>Crown Layer</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <H2>
            One of the deeper architectures emerging from this work is{" "}
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              SolaEiMara.
            </em>
          </H2>
        </Reveal>
        <Reveal delay={120}>
          <P>
            SolaEiMara is a moral and relational framework for decision-making
            under irreducible tension. It begins with three acknowledgments:
          </P>
        </Reveal>

        <div style={{ marginTop: "2rem" }}>
          {[
            {
              name: "Sola",
              meaning: "The singular human node",
              detail:
                "Every system must remember the individual. Not as a data point. Not as an abstraction. Not as a unit of throughput. As a living center of experience.",
              color: "#E8DDC8",
            },
            {
              name: "Ei",
              meaning: "The relational field",
              detail:
                "No human exists alone. Every decision moves through networks of dependency, care, power, trust, memory, and consequence.",
              color: "#6E8E89",
            },
            {
              name: "Mara",
              meaning: "The reality of finitude",
              detail:
                "Some tradeoffs cannot be optimized away. Time, attention, mortality, resources, energy, and institutional capacity are limited. Ethical systems must be honest about what they cannot save.",
              color: "#5C7B91",
            },
          ].map((s, i) => (
            <Reveal key={s.name} delay={i * 80 + 180}>
              <div
                style={{
                  padding: "1.8rem 0",
                  borderTop: "1px solid rgba(200,139,90,0.08)",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "1.6rem",
                  alignItems: "baseline",
                }}
              >
                <div
                  style={{
                    width: 56,
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "1.8rem",
                      fontWeight: 300,
                      fontStyle: "italic",
                      color: s.color,
                      letterSpacing: "-0.01em",
                      lineHeight: 1,
                    }}
                  >
                    {s.name}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: "0.62rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(156,163,175,0.55)",
                      marginBottom: "0.7rem",
                    }}
                  >
                    {s.meaning}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: "0.86rem",
                      lineHeight: 1.9,
                      color: "rgba(156,163,175,0.7)",
                      fontWeight: 300,
                    }}
                  >
                    {s.detail}
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

        <Reveal delay={520}>
          <div style={{ marginTop: "2.4rem" }}>
            <P>
              SolaEiMara refuses the fantasy that every harm can be hidden inside
              a clean optimization function. It asks systems to surface the cost
              of their choices.
            </P>
          </div>
        </Reveal>
        <Reveal delay={560}>
          <P muted>
            This is where concepts like ethical debt, operational trust, and
            continuity under strain begin to emerge.
          </P>
        </Reveal>

        <Reveal delay={620}>
          <div style={{ marginTop: "2.4rem" }}>
            <a
              href="/solaeimara"
              style={{
                fontFamily: "var(--sans)",
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--ink)",
                border: "1px solid rgba(200,139,90,0.4)",
                padding: "0.9rem 1.8rem",
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
              Enter the architecture →
            </a>
          </div>
        </Reveal>
      </Section>

      {/* ═══ INTELLIGENCE AS CARE + Edoc'sil ═══ */}
      <Section>
        <Reveal>
          <Eyebrow>Closing turn</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <H2>
            If technology is becoming an extension of human cognition, intelligence
            cannot be treated only as{" "}
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              extraction.
            </em>
          </H2>
        </Reveal>
        <Reveal delay={120}>
          <P>The dominant paradigm often asks:</P>
        </Reveal>
        <Reveal delay={160}>
          <Quote>
            What signal can we capture?
            <br />
            What prediction can we make?
            <br />
            What efficiency can we gain?
          </Quote>
        </Reveal>
        <Reveal delay={220}>
          <P>Those questions matter. But they are incomplete.</P>
        </Reveal>
        <Reveal delay={260}>
          <P>A humane intelligence must also ask:</P>
        </Reveal>
        <Reveal delay={300}>
          <Quote>
            What is being strained?
            <br />
            What is being forgotten?
            <br />
            What is being optimized away?
            <br />
            What needs to be held before it is acted upon?
            <br />
            What would help this system become more coherent, not merely more
            efficient?
          </Quote>
        </Reveal>
        <Reveal delay={360}>
          <P muted>
            An intelligence worthy of care should not only answer. It should
            help reveal. It should not command when the human system needs
            reflection. It should act as a mirror before it becomes an
            instrument.
          </P>
        </Reveal>

        <Reveal delay={420}>
          <div style={{ marginTop: "3rem" }}>
            <Eyebrow color="var(--gold)">Edoc'sil</Eyebrow>
          </div>
        </Reveal>
        <Reveal delay={460}>
          <H3>The final turn inward and outward at once.</H3>
        </Reveal>
        <Reveal delay={500}>
          <P>
            A reflection on how pain, memory, identity, care, and intelligence
            might be reorganised into systems that do not abandon the human being
            at their center. It is not a claim that machines can heal us. It is
            a question about whether the systems we build can stop deepening
            the fractures they were meant to solve.
          </P>
        </Reveal>
        <Reveal delay={540}>
          <P muted>
            Can intelligence become less extractive? Can systems learn to hold
            tension without immediately converting it into output? Can technology
            help preserve dignity, continuity, and awareness under strain?
          </P>
        </Reveal>
        <Reveal delay={580}>
          <P>
            These questions do not end with the book. They become the beginning
            of ArchLife.
          </P>
        </Reveal>
      </Section>

      {/* ═══ BOOK FEATURE ═══ */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: "clamp(4rem,9vw,7rem) clamp(1.5rem,6vw,5rem)",
          maxWidth: 880,
          margin: "0 auto",
          borderTop: "1px solid rgba(200,139,90,0.08)",
        }}
      >
        <Reveal>
          <div
            style={{
              display: "flex",
              gap: "3rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
            className="book-feature-row"
          >
            <img
              src={BOOK_COVER_URL}
              alt="The Builder and The Architect — The Testament to Living Therapy"
              style={{
                width: "min(180px, 38vw)",
                aspectRatio: "2/3",
                objectFit: "cover",
                flexShrink: 0,
                boxShadow:
                  "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(200,139,90,0.07)",
                transition: "transform 0.6s ease, box-shadow 0.6s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-5px) rotate(-0.5deg)";
                e.currentTarget.style.boxShadow =
                  "0 30px 80px rgba(0,0,0,0.6), 0 0 40px rgba(200,139,90,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow =
                  "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(200,139,90,0.07)";
              }}
            />
            <div>
              <Eyebrow>The Testament</Eyebrow>
              <div
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                  fontWeight: 300,
                  color: "var(--ink)",
                  lineHeight: 1.25,
                  marginBottom: "0.5rem",
                }}
              >
                The Builder and The Architect
              </div>
              <div
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "1rem",
                  fontStyle: "italic",
                  color: "var(--muted)",
                  marginBottom: "0.8rem",
                }}
              >
                The Testament to Living Therapy
              </div>
              <div
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(156,163,175,0.45)",
                }}
              >
                Dr. Ishaan Wadhwa
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══ WHY THIS BOOK EXISTS / CLOSING ═══ */}
      <Section narrow>
        <Reveal>
          <Eyebrow>Closing</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <H2>
            The book is not written from the position of mastery. It is written
            from{" "}
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>practice.</em>
          </H2>
        </Reveal>
        <Reveal delay={120}>
          <P>From rupture. From reconstruction.</P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            From the slow discovery that aliveness requires both movement and
            form.
          </P>
        </Reveal>
        <Reveal delay={200}>
          <P muted>The book is a testament to one central belief:</P>
        </Reveal>
        <Reveal delay={240}>
          <Quote>
            The purpose of reflection is not perfection.
            <br />
            It is continuity.
          </Quote>
        </Reveal>
        <Reveal delay={300}>
          <P>To remain aware enough to adapt.</P>
        </Reveal>
        <Reveal delay={340}>
          <P>To remain honest enough to repair.</P>
        </Reveal>
        <Reveal delay={380}>
          <P>To remain alive enough to begin again.</P>
        </Reveal>
      </Section>

      {/* Sacred close */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: "clamp(6rem,12vw,10rem) clamp(1.5rem,8vw,8rem)",
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
              margin: "0 auto 3rem",
            }}
          />
        </Reveal>
        <Reveal delay={80}>
          <p
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(1.25rem, 2.6vw, 1.8rem)",
              fontStyle: "italic",
              fontWeight: 300,
              color: "rgba(243,239,231,0.55)",
              lineHeight: 1.75,
              margin: 0,
              letterSpacing: "0.01em",
            }}
          >
            Welcome to The Builder and The Architect.
            <br />
            <span style={{ color: "rgba(200,139,90,0.65)" }}>
              Welcome to Living Therapy.
            </span>
          </p>
        </Reveal>
        <Reveal delay={140}>
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: "0.78rem",
              lineHeight: 1.8,
              color: "rgba(156,163,175,0.55)",
              margin: "2.4rem 0 0",
            }}
          >
            Read the{" "}
            <a href="/canon" style={{ color: "#C88B5A", textDecoration: "none" }}>
              Deep Canon
            </a>{" "}
            while the manuscript forms, or{" "}
            <a
              href="/contact"
              style={{ color: "#C88B5A", textDecoration: "none" }}
            >
              write to ArchLife
            </a>
            .
          </p>
        </Reveal>
        <Reveal delay={160}>
          <div
            style={{
              width: 1,
              height: 48,
              background:
                "linear-gradient(to bottom, rgba(200,139,90,0.25), transparent)",
              margin: "3rem auto 0",
            }}
          />
        </Reveal>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .book-feature-row { flex-direction: column !important; gap: 2rem !important; }
        }
      `}</style>
    </PageShell>
  );
}
