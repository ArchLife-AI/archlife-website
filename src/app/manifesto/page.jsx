import { PageShell } from "@/components/PageShell/PageShell";
import { Reveal } from "@/components/Reveal/Reveal";
import { Link } from "react-router";

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

function Creed({ lines }) {
  return (
    <div style={{ margin: "2rem 0 2.4rem", display: "flex", flexDirection: "column", gap: "1.1rem" }}>
      {lines.map((line, i) => (
        <p key={i} style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(0.95rem, 2vw, 1.18rem)",
          fontWeight: 400,
          color: "rgba(232,221,200,0.96)",
          lineHeight: 1.75,
          margin: 0,
          paddingLeft: "1.4rem",
          borderLeft: "2px solid rgba(155,94,69,0.22)",
        }}>{line}</p>
      ))}
    </div>
  );
}

export default function ManifestoPage() {
  return (
    <PageShell>
      {/* ── HERO ── */}
      <Reveal>
        <section style={{
          minHeight: "62vh",
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
          }}>ArchLife · Founding Document</p>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.6rem, 7vw, 5.2rem)",
            fontWeight: 300,
            color: "#F3EFE7",
            letterSpacing: "-0.01em",
            lineHeight: 1.08,
            margin: "0 0 1.6rem",
          }}>
            ArchLife
          </h1>

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.05rem, 2.4vw, 1.35rem)",
            fontWeight: 300,
            color: "rgba(232,221,200,0.75)",
            lineHeight: 1.7,
            maxWidth: "620px",
            margin: 0,
          }}>
            A field of thought and practice for building humane systems in an age of acceleration.
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

        {/* OPENING */}
        <Section>
          <P lead>
            ArchLife begins from a simple observation: modern life is becoming faster, more automated, more optimized, more intelligent, and more interconnected, but not necessarily more humane. We are gaining tools that can produce, predict, summarize, automate, and scale at unprecedented speed, yet many of the systems around us still fail at the oldest human tasks: noticing suffering, holding complexity, remembering context, honoring dignity, and creating paths back after rupture.
          </P>
          <P>ArchLife exists because intelligence alone is not enough.</P>
          <Litany lines={[
            "A system can be intelligent and still be cruel.",
            "A workflow can be efficient and still be extractive.",
            "An institution can be productive and still be forgetful.",
            "A person can be high-performing and still be breaking.",
            "A technology can be powerful and still deepen fragmentation.",
            "A society can accelerate and still lose its capacity to care.",
          ]} />
          <P>
            ArchLife asks what it would mean to design systems that do not merely move faster, but become more capable of attention, repair, continuity, and ethical memory.
          </P>
        </Section>

        <Rule />

        {/* WHERE */}
        <Section eyebrow="Where ArchLife Lives">
          <H2>ArchLife does not live only on a website.</H2>
          <P>The website is only one doorway. It lives wherever there is a question of how life is held by structure.</P>
          <P>
            It lives in healthcare systems where patients move through workflows that may or may not see them as whole people. It lives in hospitals, clinics, dental labs, care teams, and administrative processes where hidden strain accumulates long before visible failure.
          </P>
          <P>
            It lives in AI governance, where institutions are adopting intelligent tools faster than their cultures, workflows, and accountability structures can absorb. It lives in the question of whether AI will deepen human agency or simply make people easier to process, monitor, replace, and optimize.
          </P>
          <P>
            It lives in work, where people are asked to be productive, resilient, flexible, available, authentic, and constantly improving, often inside systems that do not adequately notice fatigue, grief, ambiguity, or moral pressure.
          </P>
          <P>
            It lives in mental health, not as a substitute for medicine or therapy, but as a philosophical concern with identity rupture, acceptance, rhythm, return, selfhood, and the labour of becoming real after collapse.
          </P>
          <P>
            It lives in ecology, because no serious philosophy of systems can ignore the material world. Data centres, chemicals, waste, energy, water, logistics, procurement, and institutional hygiene are not separate from care. The physical body of a system matters.
          </P>
          <P>
            It lives in knowledge management, because a person or institution that cannot remember itself cannot evolve responsibly. Memory, documentation, reflection, and continuity are not administrative luxuries. They are the nervous system of humane action.
          </P>
          <P>
            It lives in myth, art, scripture, literature, and story, because human beings do not survive by data alone. We need Icarus to understand dangerous ascent. We need the Prodigal Son to understand return. We need the elder brother to understand resentment and unacknowledged continuity. We need Arjuna to understand action under moral pressure.
          </P>
          <P muted>ArchLife lives wherever the world asks: what happens to the human being inside the system?</P>
        </Section>

        <Rule />

        {/* AIMS */}
        <Section eyebrow="What ArchLife Aims to Do">
          <H2>ArchLife aims to build a language, a method, and a set of practical systems for humane design under strain.</H2>
          <P>It wants to name the invisible before it becomes catastrophic.</P>
          <P>
            It wants to notice hidden strain before collapse. It wants to understand ascent before the fall. It wants to create return pathways after rupture. It wants to honor those who stayed, not only those who dramatically return. It wants to protect the faithful from becoming invisible infrastructure. It wants to build systems where intelligence does not require the fragmentation of the human being.
          </P>
          <Couplet lines={[
            "Reflection without action becomes aesthetic.",
            "Execution without reflection becomes extraction.",
          ]} />
          <P>
            ArchLife sits between the two. It wants to think deeply enough to see what is happening, and build carefully enough to change the conditions under which harm repeats.
          </P>
          <P muted>
            The same patterns recur across every domain: overload, drift, rupture, forgetting, shame, acceleration, abstraction, return, care, repair, release. ArchLife's work is to recognize those patterns and build better responses.
          </P>
        </Section>

        <Rule />

        {/* WHY */}
        <Section eyebrow="Why ArchLife Exists">
          <H2>ArchLife exists because too many systems are designed for output while being underdesigned for life.</H2>
          <P>
            They measure what moves, but not what strains. They reward speed, but not integration. They celebrate innovation, but not continuity. They deploy tools, but do not build the governance required to hold them. They speak of care, but often fail to notice the labour that makes care possible.
          </P>
          <P>The modern world is full of broken feedback loops.</P>
          <P>
            People burn out before institutions admit the workflow is wrong. Patients fall through gaps before systems recognize the handoff failed. Workers become obsolete before anyone honors the knowledge they carried. Families celebrate recovery without naming the cost borne by caregivers. AI tools enter workflows before accountability has matured. Cities grow before ecology is respected. Organizations produce dashboards that show green while the people inside them quietly go red.
          </P>
          <P>
            It begins from the belief that systems should not require human beings to become less human in order to function. A good system should not depend on invisible sacrifice. It should not treat exhaustion as dedication, confusion as adaptability, silence as consent, or compliance as wellbeing. It should not create intelligence at the cost of wisdom, speed at the cost of dignity, or productivity at the cost of integration.
          </P>
          <P>ArchLife exists because care needs architecture.</P>
          <P>
            Good intention is not enough. Compassion without structure collapses under pressure. Ethics without workflow remains decorative. Governance without lived reality becomes theatre.
          </P>
          <Couplet lines={[
            "Love without labour becomes fantasy.",
            "Labour without love becomes punishment.",
          ]} />
          <P>ArchLife asks for both.</P>
          <Litany lines={[
            "Care and structure.",
            "Reflection and action.",
            "Memory and movement.",
            "Intelligence and humility.",
            "Ambition and descent.",
            "Acceptance and change.",
            "Humanity and systems discipline.",
          ]} />
        </Section>

        <Rule />

        {/* THE MANIFESTO */}
        <Section eyebrow="The Manifesto">
          <H2>What we believe.</H2>
          <Creed lines={[
            "We believe that human beings are not merely users, workers, patients, customers, data points, resources, or productivity units.",
            "We believe that systems carry moral consequences, even when they appear neutral.",
            "We believe that what a system makes visible determines what it can care for.",
            "We believe that hidden strain is one of the most important signals a system can learn to detect.",
            "We believe that acceleration without feedback becomes dangerous.",
            "We believe that intelligence without humility becomes extraction.",
            "We believe that automation without accountability becomes drift.",
            "We believe that optimization without care erases the human margin where adaptation, meaning, and dignity live.",
            "We believe that continuity matters. The people who stay, maintain, remember, repair, and carry the system must not be treated as invisible infrastructure.",
            "We believe that return matters. A humane system must create paths back after failure, illness, exile, shame, burnout, or rupture.",
            "We believe that repair must include both the fallen and the faithful.",
            "We believe that the authentic self is not merely found. It is discovered and reinforced through love and labour.",
            "We believe that institutions, like people, need memory. Without memory, they repeat harm under new names.",
            "We believe that technology should expand human agency, not simply make human beings more legible to control.",
            "We believe that AI must be governed not only as a model problem, but as a sociotechnical, ecological, psychological, and institutional force.",
            "We believe that ecology is not an optional moral garnish. Every system has a body. Every abstraction has material cost.",
            "We believe that ancient wisdom and modern systems thinking can speak to each other, but only if both are kept honest by reality.",
            "We believe that no philosophy is serious if it cannot survive Monday morning.",
            "We believe that the future should be built by people who can hold complexity without losing tenderness.",
          ]} />
        </Section>

        <Rule />

        {/* INTENDS */}
        <Section eyebrow="What ArchLife Intends">
          <H2>ArchLife intends to become a living body of knowledge and a practical systems studio.</H2>
          <P>
            As a body of knowledge, it develops the Canon: essays, concepts, frameworks, myths, and maps that help explain how human systems break, heal, drift, remember, accelerate, and return.
          </P>
          <P>
            As a method, it develops NaHzHaR: a recursive philosophy of awareness, care, repair, and release. In its simplest rhythm, it says: Notice, Hold, Heal, Release. In its deeper form, it asks what comes before Notice — what field, mood, structure, technology, history, or institution makes some things visible and others invisible?
          </P>
          <P>
            As a practice, it builds tools and prototypes that make these ideas operational. Institutional Mirror explores governance, hidden strain, automation drift, and ethical debt in AI-mediated healthcare. MedEvolv explores healthcare operations, learning, and workflow intelligence.
          </P>
          <P muted>These are not random projects. They are different instruments pointed at the same question: how do we build systems that can hold life better?</P>
        </Section>

        <Rule />

        {/* WANTS */}
        <Section eyebrow="What ArchLife Wants">
          <H2>ArchLife wants to become a home for serious, humane, systems-level thinking that does not abandon implementation.</H2>
          <P>
            It wants to create language for things people feel but cannot yet name: the exhaustion hidden beneath performance, the resentment of those who stayed, the guilt of return, the danger of ascent without feedback, the violence of corporate fragmentation, the ecological body of intelligence, the shame of becoming a beginner again, the strange labour of becoming real.
          </P>
          <P>It wants to build bridges between worlds that are usually separated.</P>
          <Litany lines={[
            "Between healthcare and philosophy.",
            "Between AI and care.",
            "Between operations and ethics.",
            "Between mental health and systems design.",
            "Between Eastern and Western thought.",
            "Between mythology and management.",
            "Between ecology and business.",
            "Between personal repair and institutional reform.",
            "Between software and soul.",
          ]} />
          <Litany lines={[
            "It wants to be rigorous without becoming cold.",
            "It wants to be tender without becoming vague.",
            "It wants to be ambitious without becoming grandiose.",
            "It wants to be useful without becoming merely instrumental.",
          ]} />
          <P>
            It wants to build a future in which intelligence is not worshipped, but integrated. In which systems are not judged only by what they produce, but by what kind of human beings they require and create. In which work does not demand severance from the self. In which care is not left to heroic individuals compensating for broken structures. In which institutions can remember, reflect, and repair before collapse forces them to.
          </P>
        </Section>

        <Rule />

        {/* ENVISIONS */}
        <Section eyebrow="What ArchLife Envisions">
          <H2>A world where systems are designed with awareness of human fluctuation, not denial of it.</H2>
          <Litany lines={[
            "A world where healthcare workflows notice strain before harm.",
            "A world where AI deployments are stress-tested not only for accuracy, but for trust, fatigue, accountability, drift, and human consequence.",
            "A world where workers are not discarded because tools changed faster than institutions cared to retrain them.",
            "A world where experienced people are invited into transition with dignity, not mocked as obsolete.",
            "A world where productivity systems include recovery, not only output.",
            "A world where digital infrastructure respects ecology.",
            "A world where knowledge does not vanish when people leave, burn out, or break.",
            "A world where return after failure is possible without humiliation.",
            "A world where ambition is given rhythm, and intensity is given witness.",
            "A world where intelligence serves wisdom, rather than replacing it.",
          ]} />
          <P>
            This is not a utopian claim. ArchLife does not imagine that systems can remove suffering, conflict, limitation, or ambiguity from life.
          </P>
          <P>
            It asks for something more grounded and more difficult. It asks that we build systems mature enough to notice reality earlier, hold complexity longer, heal more honestly, and release what no longer needs to govern from the dark.
          </P>
          <P>It asks that we stop treating life as an inconvenience to optimization.</P>
          <P>It asks that the future remain human.</P>
        </Section>

        <Rule />

        {/* SIMPLEST VERSION */}
        <Section eyebrow="The Simplest Version">
          <H2>ArchLife exists to ask:</H2>
          <Couplet lines={["What happens to life inside systems?"]} />
          <P>And then:</P>
          <Couplet lines={[
            "How do we build systems that are intelligent enough to notice,",
            "humble enough to hold,",
            "caring enough to heal,",
            "and wise enough to release?",
          ]} />
          <P muted>That is the work. That is the field. That is ArchLife.</P>
        </Section>

        <Rule />

        {/* EXPLORE */}
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
            }}>Start here</p>
            <Link to="/canon" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
              fontWeight: 300,
              lineHeight: 1.4,
              color: "rgba(200,139,90,0.85)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(200,139,90,0.3)",
              transition: "border-color 0.2s",
            }}>
              Explore the Canon — the body of knowledge behind the field →
            </Link>
          </div>
        </Reveal>

        <Rule />

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
          }}>ArchLife · Manifesto</p>
        </Reveal>
      </div>
    </PageShell>
  );
}
