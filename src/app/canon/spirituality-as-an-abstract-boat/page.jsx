import { PageShell } from "@/components/PageShell/PageShell";
import { Reveal } from "@/components/Reveal/Reveal";
import { EssayArtwork } from "@/components/EssayArtwork/EssayArtwork";
import { Link } from "react-router";

export const meta = () => [
  { title: "Spirituality as an Abstract Boat | ArchLife" },
  {
    name: "description",
    content:
      "On the Gita, the modern battlefield, and what carries us when intellect is not enough. A Deep Canon essay.",
  },
];

/* ─── local typographic helpers ─── */
function H2({ children }) {
  return (
    <h2 style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "clamp(1.45rem, 3.2vw, 2rem)",
      fontWeight: 400,
      color: "#E8DDC8",
      letterSpacing: "0.02em",
      margin: "0 0 1.1rem",
      lineHeight: 1.25,
    }}>{children}</h2>
  );
}

function P({ children, muted, lead }) {
  return (
    <p style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: lead
        ? "clamp(1.1rem, 2.4vw, 1.35rem)"
        : "clamp(0.95rem, 2vw, 1.15rem)",
      fontWeight: 400,
      color: muted ? "rgba(156,163,175,0.78)" : "rgba(232,221,200,0.96)",
      lineHeight: 1.82,
      margin: "0 0 1.3rem",
    }}>{children}</p>
  );
}

function Section({ eyebrow, children }) {
  return (
    <Reveal>
      <section style={{ marginBottom: "3.6rem" }}>
        {eyebrow && (
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.68rem",
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#9B5E45",
            margin: "0 0 1.2rem",
          }}>{eyebrow}</p>
        )}
        {children}
      </section>
    </Reveal>
  );
}

function Rule() {
  return (
    <hr style={{
      border: "none",
      borderTop: "1px solid rgba(155,94,69,0.18)",
      margin: "2.8rem 0",
    }} />
  );
}

function Couplet({ lines }) {
  return (
    <div style={{
      borderLeft: "2px solid rgba(200,139,90,0.45)",
      paddingLeft: "1.4rem",
      margin: "1.8rem 0 2.2rem",
    }}>
      {lines.map((line, i) => (
        <p key={i} style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(1rem, 2.2vw, 1.22rem)",
          fontStyle: "italic",
          fontWeight: 300,
          color: "rgba(200,139,90,0.9)",
          lineHeight: 1.65,
          margin: i < lines.length - 1 ? "0 0 0.3rem" : "0",
        }}>{line}</p>
      ))}
    </div>
  );
}

function Litany({ lines }) {
  return (
    <div style={{ margin: "1.6rem 0 2rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
      {lines.map((line, i) => (
        <p key={i} style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
          fontStyle: "italic",
          fontWeight: 300,
          color: "rgba(200,139,90,0.8)",
          lineHeight: 1.6,
          margin: 0,
        }}>{line}</p>
      ))}
    </div>
  );
}

export default function SpiritualityAsAnAbstractBoatPage() {
  return (
    <PageShell>
      <style>{`
        .essay-link {
          color: rgba(200,139,90,0.85);
          text-decoration: none;
          border-bottom: 1px solid rgba(200,139,90,0.3);
          transition: border-color 0.2s;
        }
        .essay-link:hover { border-color: rgba(200,139,90,0.7); }
      `}</style>

      {/* ── HERO ── */}
      <Reveal>
        <section style={{
          minHeight: "54vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "clamp(5rem,12vw,9rem) clamp(1.2rem,6vw,7rem) clamp(2.4rem,5vw,4rem)",
          maxWidth: "860px",
          margin: "0 auto",
        }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.68rem",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#9B5E45",
            marginBottom: "1.4rem",
          }}>Deep Canon · Essay</p>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.2rem, 6vw, 4.2rem)",
            fontWeight: 300,
            color: "#F3EFE7",
            letterSpacing: "-0.01em",
            lineHeight: 1.12,
            margin: "0 0 1.4rem",
          }}>
            Spirituality as an Abstract Boat
          </h1>

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1rem, 2.2vw, 1.28rem)",
            fontStyle: "italic",
            fontWeight: 300,
            color: "rgba(200,139,90,0.75)",
            margin: "0 0 2rem",
          }}>
            On the Gita, the modern battlefield, and what carries us when intellect is not enough
          </p>

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.05rem, 2.3vw, 1.3rem)",
            fontWeight: 300,
            color: "rgba(232,221,200,0.7)",
            lineHeight: 1.75,
            maxWidth: "600px",
          }}>
            Something that can carry a person across waters that intellect can see but cannot cross by itself.
          </p>
        </section>
      </Reveal>

      {/* ── BODY ── */}
      <div style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "0 clamp(1.2rem,6vw,7rem) clamp(4rem,8vw,7rem)",
      }}>
        <Rule />

        {/* I */}
        <EssayArtwork src="/spirituality-as-an-abstract-boat.webp" caption="Thomas Cole · The Voyage of Life: Manhood · 1842" />

        <Section eyebrow="I · The Edge of the Method">
          <H2>There are moments when thinking is not enough.</H2>
          <P lead>
            The mind reaches its own edge — not because it has failed, but because it has gone as far as method can go. Beyond that edge: grief that will not resolve into analysis, decisions too charged with moral weight to compute, loss that must be metabolised and not merely understood. In those moments, something else is required.
          </P>
          <P>
            For most of human history, that something else was called spirituality. Not religion in its institutional form — though religion sometimes carried it — but a deeper current underneath: a way of holding life that did not collapse under the weight of living it.
          </P>
          <P>
            This essay is an attempt to think clearly about that current. Not to defend it, not to dismiss it, but to ask honestly: what is it, what does it do, and what does it not do?
          </P>
          <P muted>
            The answer I keep returning to is the one in the title. Spirituality, at its best, is a boat. Something that can carry a person across waters that intellect can see but cannot cross by itself.
          </P>
        </Section>

        <Rule />

        {/* II */}
        <Section eyebrow="II · What Spirituality Is Not Allowed to Replace">
          <H2>The boat is not the shore.</H2>
          <P>
            Before going further, a necessary boundary. Spirituality is not a substitute for the concrete. It does not replace sleep, food, medication, or therapy. It does not replace repair — the apology that must be made, the conversation that must be had, the relationship that requires active work. It does not replace effort, money, responsibility, or the body.
          </P>
          <P>
            When spirituality is used to avoid these, it becomes something else: a form of dissociation with sacred language. The grandiose formulation — "I am detached, I am beyond, I am at peace" — can be a way of abandoning one's actual life while claiming to transcend it.
          </P>
          <P>
            The test is practical. Not: does this tradition feel profound? But: does this spirituality make me more truthful, more loving, more responsible, more grounded, more capable of repair? The tree is known by its fruit.
          </P>
          <Couplet lines={[
            "A boat that cannot touch shore is not a boat.",
            "It is a drift.",
          ]} />
          <P muted>
            The aim of this essay is the boat that can touch shore — the one that helps us arrive, not the one that helps us float away.
          </P>
        </Section>

        <Rule />

        {/* III */}
        <Section eyebrow="III · Arjuna on the Battlefield">
          <H2>The Bhagavad Gita does not begin with calm enlightenment.</H2>
          <P lead>
            It begins with moral injury.
          </P>
          <P>
            Arjuna — a trained warrior, a skilled man, someone who has done the work — arrives at the field of Kurukshetra and collapses. Not from cowardice. From the full recognition of what is about to happen. He sees his teachers, his cousins, his family arrayed across the field. He understands that winning this war means destroying the people who made him. His bow falls. His body trembles. He asks to not fight.
          </P>
          <P>
            What follows is not Krishna dismissing the paralysis. He addresses it fully, philosophically, practically — across eighteen chapters. But the starting point is not "here is a calm technique for avoiding suffering." The starting point is a human being in crisis, asking for help from a friend who happens to carry something deeper.
          </P>
          <P>
            This matters. Spirituality that has not passed through the test of moral complexity is decorative. The Gita was not written for times of ease. It was written for the battlefield — for the moment when all options are terrible and action is still required.
          </P>
        </Section>

        <Rule />

        {/* IV */}
        <Section eyebrow="IV · The Modern Battlefield">
          <H2>Kurukshetra is everywhere now.</H2>
          <P>
            The modern battlefield is not a physical field. It is moral congestion. Too many claims on one nervous system. A world that demands you act while withholding the clarity that would make action feel righteous. The email that must be sent, the meeting that must be attended, the care that must be given, the ambition that must be tended — all at the same time, none of them yielding a clean victory.
          </P>
          <P>
            We do not have Arjuna's clarity about who the enemy is. We often do not know. We have competing duties, competing loyalties, competing selves. We win something and lose something in the same decision. We help one person and inadvertently harm another. We build a career and sometimes neglect a relationship. The field never resolves.
          </P>
          <P muted>
            Kurukshetra is wherever action becomes morally charged and avoidance becomes impossible.
          </P>
          <P>
            Which is to say: most of adult life.
          </P>
          <P>
            The question is not whether we need a boat. The question is whether the boat we have is actually a boat — or just a raft we built from leftover certainties.
          </P>
        </Section>

        <Rule />

        {/* V */}
        <Section eyebrow="V · Action Without Possession">
          <H2>The ego does not only want pleasure. It wants ownership.</H2>
          <P>
            It wants the outcome to confirm the self. Every action becomes a referendum: did this work? Was I right? Did the result validate me? When the ego is in charge of action, it cannot tolerate ambiguity or failure. It needs the fruit — needs it as proof of its own value.
          </P>
          <P>
            This is the insight at the heart of the Gita's teaching on karma yoga. Not that action should be joyless. Not that outcomes do not matter. But that the ego's ownership of outcomes introduces a distortion that corrupts both the action and the actor. When we act to prove ourselves, we cannot think clearly. When we need to win, we cannot serve.
          </P>
          <Couplet lines={[
            "Spirituality interrupts this ownership.",
            "It does not erase the self, but it loosens the fist.",
          ]} />
          <P>
            This is not easy detachment. It is disciplined participation. The boat does not take you away from the river — it helps you move through it without being capsized by the need to control what the river does.
          </P>
          <P muted>
            You act because it is right to act. You act because you love the people the action is for. You act because refusal would be a betrayal. And then you release the outcome into the world, which has never belonged to you.
          </P>
        </Section>

        <Rule />

        {/* VI */}
        <Section eyebrow="VI · Dharma Is Not Personal Branding">
          <H2>The word dharma has been colonised by wellness culture.</H2>
          <P>
            It has come to mean something like "your authentic path" or "your soul's purpose" — a flattering notion that your truest calling is also your most marketable identity. Dharma has become a premium product: discover yours, live it, become your best self.
          </P>
          <P>
            This is a significant misreading. Dharma in the Mahabharata is not a brand. It is a duty that emerges from your position in the world — your relationships, your skills, your moment in history. It is often inconvenient. It is frequently not what you would choose. Arjuna's dharma was to fight a war he did not want to fight. That was not his personal brand. It was his obligation, given who he was and where he stood.
          </P>
          <P>
            The modern version strips out the obligation and keeps the aspiration. It takes the concept of sacred duty and converts it into a lifestyle. It removes the part about difficulty and keeps the part about destiny.
          </P>
          <Couplet lines={[
            "Dharma is not always the grand thing.",
            "Sometimes it is the next honest thing.",
          ]} />
          <P muted>
            The email that must be sent. The apology that cannot be deferred any longer. The task that nobody else will do. The conversation you have been avoiding. Sometimes that is dharma. Not beautiful. Not inspiring. But necessary.
          </P>
        </Section>

        <Rule />

        {/* VII */}
        <Section eyebrow="VII · Mahabharata and Moral Ambiguity">
          <H2>The Mahabharata does not offer clean heroes.</H2>
          <P>
            It offers complex ones. Yudhishthira, the righteous king, gambles his wife and his kingdom. Arjuna, the great warrior, has to be talked into fighting by a god. Karna, arguably the most loyal man in the epic, is on the wrong side. Draupadi, wronged beyond what any person should have to endure, carries her wound into every decision.
          </P>
          <P>
            The epic is not a morality play. It is a document of what happens when good people face impossible situations and choose imperfectly. The Gita does not emerge from an easy moment. It emerges from the worst moment, surrounded by the evidence that goodness does not guarantee right outcomes.
          </P>
          <P>
            Spirituality as a boat does not remove ambiguity. It keeps us from drowning in it. It provides enough steadiness to act when the clarity we want is not available — to make the best decision available, bear its consequences, and remain a person who can still try again.
          </P>
          <P muted>
            A tradition that cannot survive contact with tragedy is not a boat. It is a decoration for fair weather.
          </P>
        </Section>

        <Rule />

        {/* VIII */}
        <Section eyebrow="VIII · The Witness and the Actor">
          <H2>There is a practice that appears across traditions.</H2>
          <P lead>
            It goes by different names: the witness consciousness in Vedanta, the observer in Buddhism, the inner witness in contemplative Christianity. The practice is to cultivate a part of oneself that can watch without collapsing into what it watches.
          </P>
          <P>
            This practice is genuinely useful. The person who can observe their own anger without becoming only anger, who can watch fear without being entirely fear — that person has more room to choose. The witness creates a gap between the stimulus and the response, and in that gap, something like freedom can live.
          </P>
          <P>
            But the witness practice is often misunderstood as detachment from action. As if the spiritual goal is to become a pure observer, floating above life, uncaptured by its claims. This is the error. The Gita's Arjuna does not transcend the battlefield from a distance. He re-enters it.
          </P>
          <Couplet lines={[
            "The witness says: You are more than this.",
            "Action says: Begin here anyway.",
          ]} />
          <P>
            The mature path is not witness versus action. It is witness within action — the capacity to remain present to oneself while moving through the world, neither captured by every reaction nor absented by the effort to stay clean.
          </P>
          <Couplet lines={[
            "The sky gives freedom.",
            "The soil gives truth.",
          ]} />
        </Section>

        <Rule />

        {/* IX */}
        <Section eyebrow="IX · Spirituality After Mental Rupture">
          <H2>There is a particular danger at the intersection of spiritual openness and psychological fragility.</H2>
          <P>
            In periods of crisis — breakdown, loss, the aftermath of trauma, the dissolution of identity — a person becomes more permeable. The ordinary filters are down. This creates genuine openings: insights arrive that ordinary functioning would have blocked, connections become visible that the defended self could not see.
          </P>
          <P>
            But insight before integration is ready is not always a gift. When the nervous system is already overwhelmed, states that feel like spiritual awakening can be states of disintegration — grandiosity mistaken for enlightenment, sleeplessness mistaken for illumination, recklessness mistaken for freedom from attachment.
          </P>
          <P>
            The test is the same: what does this do to the fruit? Does this state make me kinder, more stable, more capable of ordinary care? Or does it make me more erratic, harder to be close to, less accountable?
          </P>
          <P muted>
            Sometimes the most spiritual act is to sleep. To eat. To take the medication. To call the person who knows you and ask for the ordinary anchor of being seen.
          </P>
          <P>
            A boat must be seaworthy before it can carry anything across. The work of building that seaworthiness is not separate from the spiritual life. It is part of it.
          </P>
        </Section>

        <Rule />

        {/* X */}
        <Section eyebrow="X · The Boat and the Shore">
          <H2>Every tradition that has survived has eventually produced monks.</H2>
          <P>
            People who leave ordinary life, who dedicate themselves entirely to the interior, who treat renunciation as the deepest form of the path. This is one legitimate reading: that the world is a school and the lesson, once learned, points beyond it.
          </P>
          <P>
            But most people are not monks. Most people have children, mortgages, careers, ageing parents, unfinished arguments, medical appointments, and friends who are struggling. The boat that only works for those who have left the shore is not a boat for most of us.
          </P>
          <P>
            The test of a spirituality is whether it works in contact with ordinary life — whether it helps someone be more present at the dinner table, more patient in the hospital corridor, more honest in the difficult meeting. Whether it helps them return to their specific, unglamorous, irreplaceable life and do it with more care.
          </P>
          <Couplet lines={[
            "The point is not to remain forever above life.",
            "The point is to come back differently.",
          ]} />
          <P muted>
            The spiritual retreat, the meditation practice, the moment of genuine stillness — these are not the destination. They are preparation for re-entry. The boat was always meant to reach the shore.
          </P>
        </Section>

        <Rule />

        {/* XI */}
        <Section eyebrow="XI · The Common-Sense Sacred">
          <H2>Across traditions, the description of spiritual maturity has a surprising quality: it is ordinary.</H2>
          <P>
            The sage in the Gita eats and sleeps and moves through the world. The bodhisattva returns to the marketplace. The Stoic emperor writes his private notes and goes back to govern. The contemplative returns to the garden. Something happens in the interior that makes the exterior more navigable — not more exciting, not more extraordinary, but more navigable.
          </P>
          <P>
            This is what I mean by the common-sense sacred. Not a mystical transformation that removes the person from ordinary consequence, but a widening — of time, of compassion, of the capacity to bear uncertainty without acting destructively. A person who can hold more before reacting.
          </P>
          <P>
            Common sense and spirituality are not enemies. Common sense says: the body matters, relationships matter, consequences are real, effort is required. Spirituality, at its best, says the same things — but adds the larger frame in which those things make sense. Together they form something like a way of living that respects both mystery and consequence.
          </P>
        </Section>

        <Rule />

        {/* XII */}
        <Section eyebrow="XII · What Carries Us Now">
          <H2>Modern people are spiritually homeless in a particular way.</H2>
          <P>
            Not all of us — the religious traditions are still very much alive, and many people find them genuinely sustaining. But a significant number of people have lost the inheritance without finding a replacement. The inherited tradition no longer speaks to their actual experience, but nothing else has arrived to take its place. They are neither inside nor outside; they are in a kind of permanent transit.
          </P>
          <P>
            This is not a failure of the person. It is a consequence of living in a period when the old maps no longer match the terrain. When inherited answers stop working, the honest response is to say so — not to perform a faith you do not have, not to perform a certainty you have not earned.
          </P>
          <P>
            What carries people in this state is usually a patchwork: some insight from one tradition, some practice from another, some philosophy, some therapy, some literature, some friendship, some recurring experience of beauty or responsibility that insists on mattering. This is not incoherence. It is spiritual craftsmanship — building a boat from what is actually available, testing it against what actually needs crossing.
          </P>
          <P muted>
            The question is not whether the boat matches an approved design. The question is whether it carries life truthfully.
          </P>
        </Section>

        <Rule />

        {/* XIII */}
        <Section eyebrow="XIII · What ArchLife Asks">
          <H2>This project returns, as it always does, to the same question.</H2>
          <P lead>
            Not: which tradition is correct? But: what helps a person live more honestly, more lovingly, more responsibly, across the full span of an actual life?
          </P>
          <P>
            The answer this project keeps finding is composite. The Bhagavad Gita and the Mahabharata. The Buddha's analysis of suffering and the path out of it. Ashtavakra's radical non-dual witness. The Stoic discipline of attention and response. Viktor Frankl's discovery that meaning can be found even in a concentration camp. Camus's insistence that we must imagine Sisyphus happy.
          </P>
          <P>
            None of these traditions removes the work of living. They help us carry it. They do not offer an exit from difficulty; they offer a way of moving through difficulty that leaves the person more whole on the other side.
          </P>
          <Litany lines={[
            "To receive what is alive from the old without becoming trapped by what is dead.",
            "To build what is new without severing ourselves from what is ancient.",
            "To hold the mystery without fleeing into it.",
            "To act in the world without being owned by what happens there.",
          ]} />
          <P>
            That is the project. Not spiritual tourism. Not the performance of wisdom. The actual, difficult, ongoing labour of carrying one's specific life across the waters that separate what one is from what one is trying to become.
          </P>
        </Section>

        <Rule />

        {/* CLOSING */}
        <Section eyebrow="The Prayer Beneath Action">
          <H2>Perhaps spirituality begins where the ego's certainty ends.</H2>
          <P lead>
            Not in the retreat from the world, but in the re-entry. In the email that must be sent, the apology that must be made, the care that must be given — in all of it, some posture that says: I am here, I will try, I do not own what follows.
          </P>
          <P>
            That posture is not passivity. It is a kind of radical participation — full engagement without the ego's desperate clutch on the outcome. It is the warrior who fights because fighting is the right thing, not because winning will confirm his worth. It is the parent who cares not because the child's success will redeem the parent, but because the child is worth caring for. It is the builder who builds not to be remembered, but because something needs building.
          </P>
          <P>
            This is the spirituality that survives contact with life. Not the one that floats above it, pristine and unsoiled, but the one that gets into the river, uses the boat for what it was made for, and arrives on the other shore changed — more responsible, more humble, more capable of beginning again.
          </P>

          <Couplet lines={[
            "The point of the boat was never to avoid the shore.",
            "It was to help us arrive there alive.",
          ]} />
        </Section>

        <Rule />

        {/* READ NEXT */}
        <Reveal>
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            padding: "2rem 0 0",
          }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.68rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#9B5E45",
              margin: 0,
            }}>Read next</p>
            <Link to="/canon/dialectical-self" className="essay-link" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
              fontWeight: 300,
              lineHeight: 1.4,
            }}>
              The Dialectical Self — Radical acceptance, two-sided truths, and becoming whole without becoming rigid →
            </Link>
          </div>
        </Reveal>

        <Rule />

        {/* FOOTER */}
        <Reveal>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.68rem",
            fontWeight: 400,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(156,163,175,0.35)",
            textAlign: "center",
            paddingBottom: "2rem",
          }}>ArchLife · Canon · Spirituality as an Abstract Boat</p>
        </Reveal>
      </div>
    </PageShell>
  );
}
