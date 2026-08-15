import { PageShell } from "@/components/PageShell/PageShell";
import { Reveal } from "@/components/Reveal/Reveal";
import { EssayArtwork } from "@/components/EssayArtwork/EssayArtwork";
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

/* Experimental sequence block for the Disclose→Notice→Hold→Heal→Release form */
function Sequence({ steps }) {
  return (
    <div style={{ margin: "2rem 0 2.4rem", display: "flex", flexDirection: "column", gap: "1.4rem" }}>
      {steps.map(({ label, text }, i) => (
        <div key={i} style={{ display: "flex", gap: "1.2rem", alignItems: "flex-start" }}>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.62rem",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#9B5E45",
            paddingTop: "0.35rem",
            minWidth: "60px",
          }}>{label}</span>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
            fontWeight: 400,
            color: "rgba(232,221,200,0.96)",
            lineHeight: 1.75,
            margin: 0,
          }}>{text}</p>
        </div>
      ))}
    </div>
  );
}

export default function BeforeNoticePage() {
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
            Before Notice
          </h1>

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1rem, 2.2vw, 1.28rem)",
            fontStyle: "italic",
            fontWeight: 300,
            color: "rgba(200,139,90,0.75)",
            margin: "0 0 2rem",
          }}>
            How NHHR became NaHzHaR, and why Heidegger changed the first step
          </p>

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.05rem, 2.3vw, 1.3rem)",
            fontWeight: 300,
            color: "rgba(232,221,200,0.7)",
            lineHeight: 1.75,
            maxWidth: "600px",
          }}>
            Before I notice something, I am already somewhere.
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
            There was a time when NHHR was not yet Notice, Hold, Heal, Release.
          </P>
          <P>
            It began as something more technical, almost like a systems phrase trying to become human before it knew how. <em style={{ fontStyle: "italic", color: "rgba(200,139,90,0.8)" }}>Nuanced Humanistic Heuristic Recursion</em> was an attempt to name a process that was already happening: a way of moving through complexity without flattening it, a way of seeing human patterns recursively, a way of refusing both mechanical optimization and vague compassion.
          </P>
          <P>The words were clumsy, but the impulse was alive.</P>
          <Litany lines={[
            "Nuanced, because reality is rarely one thing at a time.",
            "Humanistic, because systems that forget the human eventually become violent, even when efficient.",
            "Heuristic, because life rarely gives perfect algorithms. We use practical wisdom, imperfect rules, lived judgment, and adaptive patterns.",
            "Recursive, because healing, learning, design, and awareness do not move in straight lines. They return, deepen, revise, repeat.",
          ]} />
          <P>
            Eventually, the phrase softened into something more embodied: Notice. Hold. Heal. Release. That version was cleaner. It could be remembered. It could be practiced. It could move from a theory of systems into a rhythm of care.
          </P>
          <P>But it was still missing something. Because it assumed that the first act was noticing. Heidegger complicated that.</P>
        </Section>

        <Rule />

        {/* I */}
        <EssayArtwork src="/before-notice.webp" caption="Caspar David Friedrich · Wanderer above the Sea of Fog · c. 1818" />

        <Section eyebrow="I · The Problem with Beginning at Notice">
          <H2>Notice sounds like the beginning.</H2>
          <P>
            In ordinary language, it feels like the moment awareness starts. I notice a feeling. I notice a pattern. I notice a wound. I notice a system failure. I notice that I am tired. I notice that I am angry. I notice that a process is breaking. I notice that a relationship has changed. I notice that the dashboard is green but the people are not okay.
          </P>
          <P>But phenomenology asks us to slow down.</P>
          <P>
            Before I notice something, I am already somewhere. I am already in a world. I am already shaped by mood, concern, memory, language, body, history, tools, relationships, fear, desire, and expectation. I do not encounter reality as a detached observer looking at neutral objects. I encounter a world that already matters.
          </P>
          <P>
            Heidegger's central disruption is this: the human being is not first a mind looking out at the world. The human being is <em style={{ fontStyle: "italic", color: "rgba(200,139,90,0.8)" }}>being-in-the-world</em>. We are already involved. Already situated. Already thrown into meanings we did not choose. Already living inside moods that disclose reality before we form clear thoughts about it.
          </P>
          <Couplet lines={[
            "Notice is not the true beginning.",
            "Before Notice, there is the field in which noticing becomes possible.",
          ]} />
        </Section>

        <Rule />

        {/* II */}
        <Section eyebrow="II · Attunement Before Attention">
          <H2>A person does not simply notice from nowhere.</H2>
          <P>
            A tired person notices differently from a rested person. A frightened person notices differently from a safe person. A grieving person notices differently from a joyful person. A clinician under overload notices differently from one with time. A junior employee in a punitive hierarchy notices differently from a leader with permission to speak. A patient who has been dismissed before notices a hospital differently from a patient who expects care.
          </P>
          <P>The world is not disclosed to all of them in the same way.</P>
          <P>
            Heidegger's idea of mood or attunement helps reveal this. Mood is not merely an internal emotional state. It is a way the world becomes available to us. Anxiety, boredom, fear, grief, wonder, shame, love, and urgency each open a different world.
          </P>
          <Litany lines={[
            "When I am anxious, the world appears as threat.",
            "When I am ashamed, the world appears as judgment.",
            "When I am ambitious, the world appears as possibility and obstacle.",
            "When I am depressed, the world appears as weight.",
            "When I am loved, the world appears as more survivable.",
            "When I am safe, the world becomes more detailed.",
          ]} />
          <P>
            This matters because "notice" is never neutral. What we notice depends on how the world has already been disclosed to us. A person in shame may notice only evidence of unworthiness. A person in grandiosity may notice only evidence of destiny. A burnt-out institution may notice only what threatens throughput. A corporation may notice only what can be measured. A hospital may notice the patient as a case before noticing them as a person. An AI system may notice only what its training, objective, and interface make legible.
          </P>
          <Couplet lines={[
            "So before we ask \"what did you notice?\" we must ask:",
            "What kind of world were you already living in when noticing began?",
          ]} />
        </Section>

        <Rule />

        {/* III */}
        <Section eyebrow="III · The Pre-Notice Stage">
          <H2>If NHHR begins with Notice, NaHzHaR begins slightly earlier.</H2>
          <P>Not with an action, but with a condition. Before Notice, there is <strong style={{ fontWeight: 400, color: "#E8DDC8" }}>arrival into the field</strong>.</P>
          <P>
            Before I notice, I am already thrown into a situation. I have a body. I have a history. I have fear. I have habits. I have inherited language. I have unfinished grief. I have social position. I have obligations. I have tools. I have fatigue. I have ambitions. I have blind spots. I have a world that has already taught me what is worth seeing and what can be ignored.
          </P>
          <P>
            This pre-Notice stage is not easy to name because it is not a normal step. It is not something one does in the same way one notices, holds, heals, or releases. It is more like a clearing. It is the moment of asking:
          </P>
          <Litany lines={[
            "What is the field?",
            "What is already shaping perception?",
            "What mood is disclosing the world?",
            "What has become invisible because it is too familiar?",
            "What is being treated as obvious before it has been examined?",
            "What kind of being-in-the-world is this system producing?",
          ]} />
          <P muted>This is not abstract. In personal healing, it means asking what state of being makes certain thoughts believable. In institutional design, it means asking what working environment makes certain failures invisible. In AI governance, it means asking what ontology a system imposes before it begins producing answers.</P>
        </Section>

        <Rule />

        {/* IV */}
        <Section eyebrow="IV · From NHHR to NaHzHaR">
          <H2>The movement from NHHR to NaHzHaR was not just a rebranding. It was a deepening.</H2>
          <P>NHHR was a rhythm. <strong style={{ fontWeight: 400, color: "#E8DDC8" }}>Notice. Hold. Heal. Release.</strong></P>
          <P>NaHzHaR became a philosophy of relation.</P>
          <P>
            It began to ask not only how a person or system processes what appears, but how appearance itself is shaped. It became less like a checklist and more like a way of inhabiting complexity.
          </P>
          <P>
            The spelling itself began to feel less mechanical. NaHzHaR became less acronym and more living word, a container for recursive awareness, repair, humility, and release. The earlier NHHR wanted to help us respond. NaHzHaR asks us to examine the world in which response becomes possible.
          </P>
          <P>
            This is crucial because many failures occur before anyone notices them as failures. A person can live for years in a self-story that makes suffering feel deserved. A team can live inside a culture where overwork appears normal. A hospital can live inside a workflow where patient distress appears as queue pressure. A company can live inside a growth logic where burnout appears as commitment. An AI system can live inside an optimization frame where harm appears as acceptable error.
          </P>
          <Couplet lines={[
            "By the time Notice begins, the world has already been interpreted.",
            "NaHzHaR asks us to examine the clearing before the signal.",
          ]} />
        </Section>

        <Rule />

        {/* V */}
        <Section eyebrow="V · Heidegger and the Hidden World of Tools">
          <H2>Tools often disappear when they work.</H2>
          <P>
            A hammer, in Heidegger's famous example, is not usually encountered as an object of analysis. It is simply used. It becomes visible as an object when it breaks, when it fails, when the flow is interrupted.
          </P>
          <P>This is incredibly relevant to systems.</P>
          <P>
            Most infrastructure remains invisible until it fails. Most emotional labour remains invisible until the person carrying it collapses. Most institutional memory remains invisible until the person who holds it leaves. Most software assumptions remain invisible until an edge case breaks the workflow. Most social norms remain invisible until someone violates them. Most bodies remain invisible to their owners until pain interrupts function.
          </P>
          <P>
            This means that many systems notice too late because functioning hides dependency. When something works smoothly, we stop seeing it.
          </P>
          <P>
            This is why NaHzHaR must pay attention not only to breakdown, but to smoothness. Smoothness can be healthy, but it can also be concealment. A process may appear smooth because someone is silently absorbing friction. A team may appear functional because one person is translating chaos into order. A clinical workflow may appear stable because nurses are compensating for bad design. An AI product may appear magical because invisible human labour, environmental cost, and data extraction have been pushed out of view.
          </P>
          <Couplet lines={[
            "Heidegger helps us see that the world is full of ready-to-hand structures that disappear into use.",
            "NaHzHaR asks us to notice them before they break.",
          ]} />
        </Section>

        <Rule />

        {/* VI */}
        <Section eyebrow="VI · Notice Becomes Ethical">
          <H2>Once we understand this, Notice is no longer a simple act of perception.</H2>
          <P lead>It becomes ethical.</P>
          <P>
            To notice well is not merely to observe what is obvious. It is to become responsible for the conditions under which the non-obvious can appear.
          </P>
          <Litany lines={[
            "Who is allowed to speak?",
            "Whose pain is legible?",
            "What forms of labour are hidden?",
            "What gets measured?",
            "What gets dismissed as noise?",
            "What does the system call normal because it has never paid the cost itself?",
            "What kinds of being does this institution produce?",
          ]} />
          <P>
            This changes the entire meaning of care. Care is not only what happens after suffering becomes visible. Care is also the work of making suffering visible early enough to matter.
          </P>
          <P>
            A system that says "we did not notice" may be telling the truth at one level. But NaHzHaR asks the next question: why was the system built in such a way that this could remain unnoticed? That question is uncomfortable because it moves us from innocence to responsibility. Not all blindness is chosen. But many forms of blindness are maintained by design, convenience, incentive, hierarchy, speed, or fear.
          </P>
        </Section>

        <Rule />

        {/* VII */}
        <Section eyebrow="VII · The Pre-Notice Human">
          <H2>At the level of a person, the pre-Notice stage is tender.</H2>
          <P>
            Before someone notices their pattern, they are already living inside it. Before they notice their shame, shame has already shaped what they believe they deserve. Before they notice their grandiosity, grandiosity has already made certain risks feel meaningful. Before they notice their exhaustion, exhaustion has already narrowed the world. Before they notice their loneliness, loneliness has already taught them how to interpret silence.
          </P>
          <P>This is why healing cannot begin with accusation.</P>
          <P>
            If a person did not notice something earlier, it may not be because they were stupid, selfish, or weak. It may be because their world was disclosed in a way that made the truth unavailable. A child raised in chaos may notice danger before love. A person shaped by rejection may notice abandonment before care. A person trained by performance may notice usefulness before need. A person in survival mode may notice threat before beauty. A person in crisis may notice signs and patterns before proportion.
          </P>
          <P>Healing begins when the world can be disclosed differently.</P>
          <P>
            This is more than cognition. It is relational, bodily, environmental, and spiritual. A safe room discloses a different world. A loving witness discloses a different world. Sleep discloses a different world. Medication can disclose a different world. Art can disclose a different world. A faithful friend can disclose a different world. A good system can disclose a different world.
          </P>
          <P muted>This is why NaHzHaR is not only internal reflection. It is field design. Change the field, and different noticing becomes possible.</P>
        </Section>

        <Rule />

        {/* VIII */}
        <Section eyebrow="VIII · The Pre-Notice Institution">
          <H2>Institutions also have pre-Notice fields.</H2>
          <P>
            A hospital notices what its forms, queues, dashboards, staffing ratios, hierarchies, and legal anxieties allow it to notice. A school notices what its exams and discipline systems allow it to notice. A company notices what its KPIs and incentives allow it to notice. A family notices what its myths and loyalties allow it to notice. A state notices what its categories allow it to notice.
          </P>
          <P>This means institutions do not simply miss things by accident. They miss according to structure.</P>
          <P>
            If a hospital tracks bed turnover but not caregiver exhaustion, it will notice flow before strain. If a company tracks output but not trust, it will notice productivity before corrosion. If an AI governance framework tracks model accuracy but not automation drift, it will notice performance before dependency. If a family tracks obedience but not loneliness, it will notice rebellion before despair.
          </P>
          <P>NaHzHaR asks institutions to examine their pre-Notice architecture.</P>
          <Litany lines={[
            "What does this system make visible?",
            "What does it hide?",
            "What kind of suffering has to become extreme before it qualifies as real?",
            "What kind of person can speak here without being punished?",
            "What is treated as background because it has always been background?",
          ]} />
          <P muted>It does not merely say: notice problems. It says: redesign the world so that important problems can appear before they become catastrophes.</P>
        </Section>

        <Rule />

        {/* IX */}
        <Section eyebrow="IX · Technology and Enframing">
          <H2>Technology does not merely give us tools.</H2>
          <P>
            It can reveal the world in a particular way. It can make reality appear as resource, standing reserve, something to be optimized, extracted, ordered, and used. This is Heidegger's later idea of enframing — and it is visible everywhere now.
          </P>
          <Litany lines={[
            "The worker appears as productivity.",
            "The patient appears as data.",
            "The student appears as performance.",
            "The user appears as engagement.",
            "The forest appears as carbon credit.",
            "The river appears as input.",
            "The mind appears as attention supply.",
            "The human conversation appears as training data.",
            "The self appears as a profile.",
          ]} />
          <P>
            AI intensifies this danger because it is very good at making the world legible in machine-actionable forms. That can be helpful. But legibility is never innocent. To make something legible is also to decide what matters about it.
          </P>
          <Couplet lines={[
            "What does this technology reveal,",
            "and what does it conceal by the way it reveals?",
          ]} />
          <P muted>
            A healthcare AI system may reveal risk while concealing context. A productivity platform may reveal output while concealing exhaustion. A governance dashboard may reveal compliance while concealing fear. A generative AI tool may reveal speed while concealing dependency, ecological cost, and deskilling. This is not an argument against technology. It is an argument for deeper noticing before Notice.
          </P>
        </Section>

        <Rule />

        {/* X */}
        <Section eyebrow="X · From Recursion to Reverence">
          <H2>The original NHHR carried the word recursion because life returns.</H2>
          <P>
            A wound returns until it is understood. A pattern returns until it is integrated. A system failure returns until its conditions change. A family story returns through generations. An institutional drift returns through new language. A technological danger returns under the name of progress.
          </P>
          <P>Recursion can be mechanical, but in NaHzHaR it becomes reverential.</P>
          <P>
            To return to something is not always to repeat it. Sometimes it is to meet it at a deeper level. The same pain returns, but now with more language. The same pattern returns, but now with more witness. The same institutional failure returns, but now with better instruments. The same philosophical question returns, but now embodied by a different life.
          </P>
          <P>Notice, Hold, Heal, Release is therefore not a linear sequence. It is a spiral.</P>
          <P>
            A person may move through NaHzHaR many times. Each time, the Notice changes because the field changes. Each Hold becomes deeper because the person or system can tolerate more reality. Each Heal becomes more precise because the wound is better understood. Each Release becomes less like rejection and more like integration.
          </P>
          <Couplet lines={[
            "Release does not mean forgetting.",
            "It means the thing no longer has to govern from the dark.",
          ]} />
        </Section>

        <Rule />

        {/* XI */}
        <Section eyebrow="XI · The Experimental Shape of NaHzHaR">
          <H2>If NaHzHaR were written as a sequence now, it might look like this.</H2>
          <Sequence steps={[
            { label: "Disclose", text: "Not as an action one controls, but as a humility toward the field. What world is already showing itself? What mood, structure, history, or technology is shaping what can appear?" },
            { label: "Notice", text: "Name what has emerged. Let the signal become visible. Do not rush past it." },
            { label: "Hold", text: "Stay with the phenomenon without immediate extraction, denial, solution, performance, or panic. Let it become more fully itself." },
            { label: "Heal", text: "Respond with care, truth, structure, repair, redesign, treatment, apology, governance, or whatever the situation demands." },
            { label: "Release", text: "Let what has been seen and integrated stop ruling unseen. Release the grip, not the learning. Release the possession, not the memory." },
          ]} />
          <P>
            But perhaps Disclose is not a formal step. Perhaps it is the atmosphere around all steps. The precondition. The clearing.
          </P>
          <P muted>That is why the essay is called <em style={{ fontStyle: "italic" }}>Before Notice</em>. Because what comes before Notice may be the most important thing of all.</P>
        </Section>

        <Rule />

        {/* XII */}
        <Section eyebrow="XII · What ArchLife Asks">
          <H2>ArchLife asks how human beings and systems can notice what matters before damage becomes undeniable.</H2>
          <P>
            NaHzHaR is one answer, but it is not a finished doctrine. It is a living discipline of recursive awareness. It began as a technical phrase, became a healing rhythm, and is now becoming a philosophy of field, care, and release.
          </P>
          <P>Its development matters because many modern systems fail at the level before Notice. They do not merely fail to respond. They fail to perceive. They fail to perceive because their worlds have been structured to hide the very things that would require response.</P>
          <Litany lines={[
            "A person cannot heal what their shame will not let them see.",
            "A team cannot repair what its hierarchy will not let people say.",
            "A hospital cannot govern what its dashboards do not make visible.",
            "An AI system cannot protect what its ontology does not recognize.",
            "A society cannot care for what its economy teaches it to treat as background.",
          ]} />
          <P>
            NaHzHaR must therefore begin not with the eye, but with the clearing. Not only: what do we notice? But: what kind of world makes this noticeable? And what kind of world would allow the hidden thing to appear before it has to become a crisis?
          </P>
          <P>That is the task. To build selves, teams, technologies, institutions, and cultures where reality can disclose itself early enough for care to arrive.</P>
          <P muted>Not perfect awareness. Not total control. Not surveillance disguised as compassion. A more humble thing.</P>

          <Couplet lines={[
            "A world where the faint signal has somewhere to appear.",
            "A world where Notice is not an accident.",
            "A world where healing begins before the scream.",
          ]} />
        </Section>

        <Rule />

        {/* READ NEXT */}
        <Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", padding: "2rem 0 0" }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.68rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#9B5E45",
              margin: 0,
            }}>Read next</p>
            <Link to="/canon/ascent-without-feedback" className="essay-link" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
              fontWeight: 300,
              lineHeight: 1.4,
            }}>
              Ascent Without Feedback — when growth outruns the systems that hold it →
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
          }}>ArchLife · Canon · Before Notice</p>
        </Reveal>
      </div>
    </PageShell>
  );
}
