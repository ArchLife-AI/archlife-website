import { PageShell } from "@/components/PageShell/PageShell";
import { Reveal } from "@/components/Reveal/Reveal";
import { EssayArtwork } from "@/components/EssayArtwork/EssayArtwork";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export const meta = () => [
  { title: "The Labour of Becoming Real | ArchLife" },
  {
    name: "description",
    content:
      "On identity rupture, egocentrism, and the self rebuilt through love and labour. A reading of the slow work it takes to become real after the self has come apart.",
  },
];

// ── Typographic helpers, scoped to this essay ──────────────────────────────
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

// ── Dividing rule ──────────────────────────────────────────────────────────
function Rule() {
  return (
    <div
      style={{
        maxWidth: 820,
        margin: "0 auto",
        padding: "0 clamp(1.5rem, 6vw, 5rem)",
      }}
    >
      <div
        style={{ height: 1, background: "rgba(200,139,90,0.1)", width: "100%" }}
      />
    </div>
  );
}

// ── Set-apart couplet (the load-bearing two-line constructs) ───────────────
function Couplet({ lines }) {
  return (
    <div
      style={{
        borderLeft: "1px solid rgba(200,139,90,0.35)",
        paddingLeft: "1.8rem",
        margin: "1.6rem 0 2rem",
      }}
    >
      {lines.map((line, i) => (
        <p
          key={i}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
            fontStyle: "italic",
            fontWeight: 300,
            color: "#C88B5A",
            lineHeight: 1.6,
            margin: i === lines.length - 1 ? 0 : "0 0 0.8rem",
          }}
        >
          {line}
        </p>
      ))}
    </div>
  );
}

export default function LabourOfBecomingRealPage() {
  return (
    <PageShell>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding:
            "clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 5rem) clamp(3rem, 6vw, 4rem)",
          maxWidth: 820,
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
              fontSize: "clamp(2.4rem, 6vw, 4.4rem)",
              fontWeight: 300,
              color: "#F3EFE7",
              lineHeight: 1.08,
              letterSpacing: "-0.015em",
              margin: "1.4rem 0 1.6rem",
            }}
          >
            The Labour of Becoming Real
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.1rem, 2.4vw, 1.45rem)",
              fontStyle: "italic",
              fontWeight: 300,
              color: "rgba(200,139,90,0.85)",
              lineHeight: 1.55,
              maxWidth: 620,
              margin: "0 0 2.4rem",
            }}
          >
            On identity rupture, egocentrism, and the self rebuilt through love
            and labour
          </p>
        </Reveal>
        <Reveal delay={180}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(156,163,175,0.45)",
            }}
          >
            ArchLife · Deep Canon
          </p>
        </Reveal>
      </section>

      <Rule />

      {/* ── I. The Two Selves ─────────────────────────────────────────────── */}
      <EssayArtwork src="/labour-of-becoming-real.webp" caption="Jean-Léon Gérôme · Pygmalion and Galatea · c. 1890" />

      <Section eyebrow="I · The Two Selves">
        <Reveal>
          <P lead>
            There is a kind of breakdown that is not only emotional but
            ontological. It does not simply make a person sad or afraid. It
            touches the question of who they are.
          </P>
        </Reveal>
        <Reveal delay={60}>
          <P>
            Identity rupture is what happens when the structure a person used to
            answer that question comes apart. The story they told about
            themselves no longer holds. The role that organized their days no
            longer fits. The continuity between who they were yesterday and who
            they are now thins to a thread.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            In the aftermath, two selves tend to appear. The first is the grand
            self: luminous, destined, exempt from ordinary limits, certain it is
            meant for something vast. The second is the collapsed self:
            worthless, exposed, unreal, certain it was always a fraud. They feel
            like opposites. A person can swing between them within a single day.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            But they are not opposites. The grand self and the collapsed self
            are organized around the same thing: intensity. Both are extreme.
            Both refuse the middle. Both treat the ordinary, the gradual, and the
            unremarkable as a kind of death. They are two faces of the same
            ungrounded condition.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            This is why becoming real is not a matter of choosing the humble
            self over the grand one. Humility, performed as another extreme,
            becomes its own theater. Becoming real means leaving the economy of
            intensity altogether — learning to exist without requiring every
            moment to prove that one is either magnificent or doomed.
          </P>
        </Reveal>
        <Reveal delay={140}>
          <P muted>That is harder than it sounds, and slower than anyone wants.</P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── II. When the Self Becomes Too Loud ────────────────────────────── */}
      <Section eyebrow="II · When the Self Becomes Too Loud">
        <Reveal>
          <H2>When the self becomes too loud</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            Egocentrism is usually moralized. We treat it as selfishness, vanity,
            or a failure of character. But it is more accurately understood as a
            frightened nervous system.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            When a person is not sure whether they exist in any stable way, they
            overcompensate by making themselves the center of everything. The
            loudness is not confidence. It is a search for evidence. If I am
            reflected back constantly, if I dominate the room, if everything
            orbits me, then perhaps I am real.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            The task, then, is not to annihilate the self. A self that is too
            quiet disappears, and disappearance is not healing. The task is
            calibration.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>The self must become important without becoming absolute.</P>
        </Reveal>
        <Reveal delay={140}>
          <P>
            Important enough to have needs, boundaries, and a point of view.
            Not so absolute that it consumes everything around it, that other
            people become mirrors, that the world becomes only the backdrop to
            one's own drama. A self that has found its right size can finally
            stop performing its own existence.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── III. The Crisis Before Action ─────────────────────────────────── */}
      <Section eyebrow="III · The Crisis Before Action">
        <Reveal>
          <H2>The crisis before action</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            In the Bhagavad Gita, Arjuna stands on the battlefield and cannot
            act. He is not a coward. He is a capable man suddenly emptied of the
            self that was supposed to do the acting. The structure that told him
            who he was — warrior, kinsman, defender — has fractured against the
            cost of what lies ahead.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            The crisis is recognizable to anyone who has stood at the edge of a
            decision and found that the person who was meant to make it has
            dissolved. Paralysis is not always weakness. Sometimes it is the
            honest response of a self that no longer knows on whose behalf it is
            choosing.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            Krishna's counsel is not "try harder" and not "stop caring." It is
            subtler: act without being possessed by the ego of action. Do the
            work that is yours to do, but release the grip on its fruits — the
            applause, the proof, the confirmation that the action makes you
            someone.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            This is not detachment as numbness. It is action freed from the need
            to constantly verify the self. When the ego no longer has to win
            something from every act, action becomes lighter, cleaner, and
            strangely more sustainable.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── IV. The Witness and the Wound ─────────────────────────────────── */}
      <Section eyebrow="IV · The Witness and the Wound">
        <Reveal>
          <H2>The witness and the wound</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            The non-dual traditions, the Ashtavakra Gita among them, offer a
            radical consolation: you are not the storm. You are the awareness in
            which the storm appears. The thoughts, the moods, the catastrophes —
            they move across consciousness like weather, and consciousness itself
            remains untouched. You are the witness.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            This teaching can be liberating. For a person drowning in their own
            states, the discovery that they are not identical to those states can
            be the first breath of air.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>But it is also dangerous, because it is so easily misused.</P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            "I am not my pain" can become a way to avoid ever feeling the pain.
            "I am pure awareness" can become a high, clean place from which a
            person never has to descend into the messy, specific, embodied wound.
            This is spiritual bypassing: dissociation dressed in sacred language.
          </P>
        </Reveal>
        <Reveal delay={140}>
          <P>
            Real witness does not float above the wound. It includes it. The
            point of stepping back from the storm is not to abandon the body that
            is being rained on — it is to be able to stay with it without being
            swept away. Awareness that cannot feel is not freedom. It is a more
            sophisticated form of leaving.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── V. The Self as Process ────────────────────────────────────────── */}
      <Section eyebrow="V · The Self as Process">
        <Reveal>
          <H2>The self as process</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            Buddhism makes a claim that sounds destabilizing and turns out to be
            a relief: the self is not a thing. It is a process. There is no fixed
            object at the center to be defended, polished, or proven. There is
            only a continuous becoming — a river that is never the same twice and
            never not itself.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            Much of Western thought arrives, by other roads, at a similar place.
            Erikson described identity as something forged across a sequence of
            crises, each one reworking the self. Jung spoke of integration — the
            slow incorporation of the disowned shadow. Kierkegaard defined the
            self as a relation that relates itself to itself, never finished,
            always in the act of becoming. Frankl insisted that meaning is not
            issued to us; it is found, chosen, and made.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            The common thread is this: the self is not discovered intact, waiting
            to be uncovered like a statue under marble. It is composed, over
            time, through what we do and what we refuse, through what we suffer
            and what we make of it.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P muted>
            Which means rupture is not the end of the self. It is the raw
            material of its next version.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── VI. Grandiosity and Shame Are Cousins ─────────────────────────── */}
      <Section eyebrow="VI · Grandiosity and Shame Are Cousins">
        <Reveal>
          <H2>Grandiosity and shame are cousins</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            Grandiosity and shame present themselves as enemies. One inflates,
            the other crushes. One says I am exceptional; the other says I am
            uniquely defective. It is tempting to think that healing means
            travelling from the first to the second — that the cure for an
            inflated self is to be humbled.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>But grandiosity and shame are cousins. They share a parent.</P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            Both are forms of specialness. Both refuse the ordinary. The grand
            self cannot bear to be average; the ashamed self is convinced it is
            singularly broken, which is its own backward kind of distinction. In
            both, the person remains the most important figure in the story —
            either the hero or the catastrophe.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            This is why moving from grandiosity to shame is not healing. It is
            only changing the currency while keeping the same obsession. The real
            movement is sideways, into the ordinary: the courage to be a person
            among people, neither exalted nor damned.
          </P>
        </Reveal>
        <Reveal delay={140}>
          <P>The courage to be ordinary is the courage to be real.</P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── VII. Radical Acceptance as Reality-Contact ────────────────────── */}
      <Section eyebrow="VII · Radical Acceptance as Reality-Contact">
        <Reveal>
          <H2>Radical acceptance as reality-contact</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            Radical acceptance is often mistaken for resignation, as if accepting
            reality meant approving of it or giving up on changing it. It is the
            opposite. Acceptance is contact with what is actually true.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            Before acceptance, an enormous amount of a person's energy goes into
            arguing with reality — insisting it should be otherwise, rehearsing
            how it was unfair, refusing to fully register where they actually
            stand. That argument is exhausting, and it changes nothing. It keeps
            a person fighting a war that has already happened.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            When reality is finally accepted — not endorsed, but seen — that
            energy is released. It becomes available for the only thing it can
            actually move: the next step.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <Couplet lines={["With acceptance, action becomes architecture."]} />
        </Reveal>
        <Reveal delay={140}>
          <P>
            It stops being frantic reaction and starts being construction. A
            person who knows exactly where they stand can finally build something
            that holds, because it is built on ground that is real.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── VIII. Love Without Labour, Labour Without Love ────────────────── */}
      <Section eyebrow="VIII · Love and Labour">
        <Reveal>
          <H2>Love without labour, labour without love</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            Becoming real is not achieved by insight alone. It requires two
            things that the modern imagination tends to keep apart, and each one
            fails without the other.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <Couplet
            lines={[
              "Love without labour becomes fantasy.",
              "Labour without love becomes punishment.",
            ]}
          />
        </Reveal>
        <Reveal delay={100}>
          <P>
            Love that is unwilling to do the work stays in the realm of feeling
            and longing. It imagines the rebuilt life, the repaired relationship,
            the recovered self — and never lays a brick. It is warm, and it is
            empty. It is fantasy.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            Labour without love becomes grim. Effort with no tenderness inside it
            turns into self-punishment — discipline as a sentence, productivity
            as penance. People in this mode often look impressive and feel
            terrible. The work is real, but it is being used to flagellate rather
            than to build.
          </P>
        </Reveal>
        <Reveal delay={140}>
          <P>
            Becoming real requires both at once: love willing to be patient and
            unglamorous, and labour animated by care rather than fear. The
            rebuilt self is the place where the two finally meet.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── IX. Wisdom After Rupture ──────────────────────────────────────── */}
      <Section eyebrow="IX · Wisdom After Rupture">
        <Reveal>
          <H2>Wisdom after rupture</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            What survives a rupture, if a person is fortunate, is not certainty.
            It is the ability to hold two truths at once without collapsing one
            into the other.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            This is the dialectical stance, the two-truths discipline: I am doing
            the best I can, and I need to do better. This is real, and it will
            pass. I am responsible, and I was not in control of everything. The
            untrained mind treats contradiction as a problem to be resolved by
            choosing a side. The mind tempered by rupture learns to stand inside
            the contradiction and stay functional there.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            Crucially, wisdom does not mean becoming flat, calm, and intensity-
            free. For some people, especially those whose nervous systems run
            hot, that would be a lie — and an unlivable one.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <Couplet
            lines={[
              "Wisdom is not the absence of intensity.",
              "It is the ability to give intensity a container.",
            ]}
          />
        </Reveal>
        <Reveal delay={140}>
          <P>
            The intensity does not have to be extinguished. It has to be held —
            channeled into work, into relationship, into making — so that it
            builds rather than burns. The same fire that once consumed a life can,
            inside a container, become its engine.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── X. Finding a Place in the Modern World ────────────────────────── */}
      <Section eyebrow="X · Finding a Place in the Modern World">
        <Reveal>
          <H2>Finding a place in the modern world</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            The modern world is not built for the slow labour of becoming real.
            It rewards the performed self over the actual one — the curated
            image, the rapid result, the appearance of arrival. It is fluent in
            grandiosity and fluent in shame, because both generate attention. It
            has very little vocabulary for the ordinary, the gradual, and the
            quietly rebuilt.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            This makes becoming real a faintly counter-cultural act. It requires
            tolerating being unimpressive for a while. It requires friction in a
            world engineered to remove it. It requires time in an economy that
            prices time by the minute and treats patience as inefficiency.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            To find a place in such a world is not to win its game. It is to
            build, somewhere inside it, a small territory that runs on different
            rules — where the self is allowed to be a process, where work is
            allowed to be love, and where intensity is given a container instead
            of a stage.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── XI. What It Takes to Be Alive Now ─────────────────────────────── */}
      <Section eyebrow="XI · What It Takes to Be Alive Now">
        <Reveal>
          <H2>What it takes to be alive now</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            To be alive now — really alive, not merely performing aliveness — is
            to resist both the inflation and the erasure of the self. It is to
            refuse the grand self that promises to make every moment a coronation,
            and to refuse the collapsed self that promises the strange comfort of
            being a hopeless case.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            It takes love and labour. It takes a container for intensity. It
            takes the willingness to be ordinary, to accept reality as the ground
            one actually builds on, and to keep relating to a self that is never
            finished.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            ArchLife is, in part, an argument that this inner labour and the
            design of humane systems are the same labour at different scales.
            A person rebuilds the self through love and work; a system rebuilds
            its people through structures that can receive them, hold their
            intensity, and let them begin again without shame.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            The self that survives rupture is not the self that was lost,
            restored. It is something new, built deliberately, on contact with
            what is real.
          </P>
        </Reveal>
      </Section>

      {/* ── Closing ─────────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding:
            "clamp(3.6rem, 7vw, 5.4rem) clamp(1.5rem, 6vw, 5rem) clamp(4rem, 8vw, 7rem)",
          maxWidth: 820,
          margin: "0 auto",
        }}
      >
        <Reveal>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.4rem, 3.2vw, 2.1rem)",
              fontStyle: "italic",
              fontWeight: 300,
              color: "#C88B5A",
              lineHeight: 1.5,
              maxWidth: 640,
              margin: "0 0 0.6rem",
            }}
          >
            The sky says: you are more than this.
          </p>
        </Reveal>
        <Reveal delay={40}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.4rem, 3.2vw, 2.1rem)",
              fontStyle: "italic",
              fontWeight: 300,
              color: "#C88B5A",
              lineHeight: 1.5,
              maxWidth: 640,
              margin: "0 0 3.6rem",
            }}
          >
            The soil says: begin here.
          </p>
        </Reveal>

        {/* Cross-links */}
        <Reveal delay={80}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
              borderTop: "1px solid rgba(200,139,90,0.1)",
              paddingTop: "2.4rem",
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(156,163,175,0.45)",
                margin: 0,
              }}
            >
              Read next
            </p>
            <a
              href="/canon/architecture-of-return"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.05rem",
                fontStyle: "italic",
                color: "rgba(243,239,231,0.7)",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C88B5A")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(243,239,231,0.7)")
              }
            >
              The Architecture of Return — Systems that can receive people back →
            </a>
            <a
              href="/canon"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(156,163,175,0.45)",
                textDecoration: "none",
                marginTop: "0.4rem",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "rgba(156,163,175,0.75)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(156,163,175,0.45)")
              }
            >
              ← Return to the Canon
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.62rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(156,163,175,0.25)",
              marginTop: "3rem",
            }}
          >
            ArchLife · Canon · The Labour of Becoming Real
          </p>
        </Reveal>
      </section>
    </PageShell>
  );
}
