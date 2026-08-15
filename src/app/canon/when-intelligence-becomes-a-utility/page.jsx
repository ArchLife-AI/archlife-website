import { PageShell } from "@/components/PageShell/PageShell";
import { Reveal } from "@/components/Reveal/Reveal";
import { EssayArtwork } from "@/components/EssayArtwork/EssayArtwork";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export const meta = () => [
  { title: "When Intelligence Becomes a Utility | ArchLife" },
  {
    name: "description",
    content:
      "Commodified intelligence, ecological debt, and the systems that will decide who gets to think. On intelligence sold by the meter and the politics of who is allowed to participate in thought.",
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

// ── Set-apart couplet (load-bearing constructs) ────────────────────────────
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

export default function WhenIntelligenceBecomesUtilityPage() {
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
            When Intelligence Becomes a Utility
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
              maxWidth: 640,
              margin: "0 0 2.4rem",
            }}
          >
            Commodified intelligence, ecological debt, and the systems that will
            decide who gets to think
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

      {/* ── I. Intelligence on a Meter ────────────────────────────────────── */}
      <EssayArtwork src="/when-intelligence-becomes-a-utility.webp" caption="William Blake · Newton · 1795" />

      <Section eyebrow="I · Intelligence on a Meter">
        <Reveal>
          <P lead>
            We are entering an age in which intelligence is sold the way
            electricity is sold: metered, billed, delivered on demand, priced by
            the token.
          </P>
        </Reveal>
        <Reveal delay={60}>
          <P>
            It is an extraordinary thing to be able to summon reasoning,
            language, analysis, and synthesis from a tap. For most of history,
            access to that kind of cognitive help was scarce — bound to
            education, institutions, mentors, and time. Now it arrives instantly,
            cheaply, and at scale.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            But there is a quiet error inside the metaphor, and the error matters.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            Intelligence is not electricity. Electricity powers a process that is
            external to you — it runs the machine, lights the room, turns the
            motor. Intelligence participates in the process of being you. It
            enters your thinking, your judgment, your memory, your attention, your
            sense of what is true and what is worth doing.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            So when intelligence is placed on a meter, it is not only a commodity
            that is being metered. It is participation in thought itself. And the
            terms on which that participation is sold will shape who gets to think
            well, who gets to think at all, and who is merely thought about.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── II. The Dream of Abundant Intelligence ────────────────────────── */}
      <Section eyebrow="II · The Dream of Abundant Intelligence">
        <Reveal>
          <H2>The dream of abundant intelligence</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            The promise is genuinely beautiful, and it should not be dismissed.
            Abundant intelligence is offered as the great equalizer: the student
            with no tutor, the founder with no team, the patient with no
            specialist, the worker with no mentor — all suddenly given a powerful
            mind to think alongside.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            This is the Promethean dream. Fire, once held only by the gods,
            brought down and handed to ordinary people. Cognition, once
            concentrated in elite institutions, distributed to everyone.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            But the myth contains its own warning. Stolen fire has always
            required a politics of fire. Someone tends the hearth. Someone owns
            the flame. Someone decides who is allowed close enough to be warmed by
            it and who is kept at the cold edge of the circle.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            Abundance is never neutral. It always arrives inside an ownership
            structure. The question is never simply whether intelligence becomes
            abundant — it is who controls the abundance, on what terms, and with
            what power over those who come to depend on it.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── III. The Utility Trap ─────────────────────────────────────────── */}
      <Section eyebrow="III · The Utility Trap">
        <Reveal>
          <H2>The utility trap</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            There is a predictable arc by which conveniences become coercions.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <Couplet lines={["Optional tools become mandatory environments."]} />
        </Reveal>
        <Reveal delay={100}>
          <P>
            A technology arrives as a choice. Early adopters use it for advantage.
            Soon enough, the advantage becomes the baseline. To not use it is to
            fall behind — to be slower, more expensive, less legible to the
            systems that now assume everyone is using it. At that point the tool
            is no longer a tool. It is the environment.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            Email did this. The smartphone did this. The search engine did this.
            Each began as something you could opt into and became something you
            cannot meaningfully opt out of without paying a social and economic
            penalty.
          </P>
        </Reveal>
        <Reveal delay={140}>
          <P>
            Commodified intelligence is following the same arc, faster. Once it
            is woven into hiring, healthcare, credit, education, and work, opting
            out stops being a lifestyle preference and becomes a form of exile.
            The trap is not that the tool is bad. The trap is that dependence
            arrives disguised as freedom.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── IV. The New Scarcity ──────────────────────────────────────────── */}
      <Section eyebrow="IV · The New Scarcity">
        <Reveal>
          <H2>The new scarcity</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            When the base layer of cognition becomes cheap, scarcity does not
            vanish. It moves upward.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            If reasoning, drafting, summarizing, and routine analysis can be had
            for pennies, then those capacities stop being where value lives. The
            scarce layer rises to what cannot yet be cheaply generated: judgment,
            taste, originality, the courage to take responsibility, the ability to
            decide what is actually worth doing and to stand behind the choice.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            For those positioned at that higher layer, this is liberating —
            cheap cognition amplifies their reach. For those whose work was
            precisely the middle layer now being automated, it is destabilizing.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <Couplet
            lines={["The middle of knowledge work may become the new factory floor."]}
          />
        </Reveal>
        <Reveal delay={140}>
          <P>
            Just as automation hollowed out the manual middle of the last
            century — leaving high-skill design above and precarious service work
            below — commodified intelligence threatens to hollow the cognitive
            middle. The competent professional whose value was reliable,
            mid-level thinking may find that reliable, mid-level thinking is now
            the cheapest input in the system.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── V. The Elder Brothers of Commodified Intelligence ─────────────── */}
      <Section eyebrow="V · The Elder Brothers">
        <Reveal>
          <H2>The elder brothers of commodified intelligence</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            This is where the{" "}
            <a
              href="/canon/elder-brother-problem"
              style={{
                color: "rgba(200,139,90,0.9)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(200,139,90,0.3)",
              }}
            >
              Elder Brother Problem
            </a>{" "}
            returns.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            Consider the people who did everything right. They trained for years.
            They mastered a craft. They stayed faithful to a profession, built
            their identity on hard-won competence, and expected that competence to
            hold its value. Then the ground moved beneath them — not because they
            failed, but because the thing they were excellent at became abundant
            and cheap.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            They are the elder brothers of this transition. Like the faithful son
            who stayed and worked the fields while the prodigal was celebrated,
            they carried the weight, kept the discipline, and now watch a new
            order arrive that seems to honor speed over loyalty and novelty over
            mastery. Their resentment is not a character flaw. It is information
            about a cost that was carried without recognition.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>Their bitterness is often grief wearing armor.</P>
        </Reveal>
        <Reveal delay={140}>
          <P>
            A humane transition has to be able to hold that grief — to recognize
            the dignity of what is being displaced — without letting it harden
            into a politics of pure refusal. Because the danger runs both ways.
            The future should not be built as revenge against the past, and the
            past should not be defended as revenge against the future.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── VI. Ageism and the Shame of Becoming a Beginner Again ─────────── */}
      <Section eyebrow="VI · Beginning Again">
        <Reveal>
          <H2>Ageism and the shame of becoming a beginner again</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            Fast transitions are cruel in a particular way: they force
            experienced people to become beginners again, often late in their
            careers, in front of audiences who knew them as masters.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            There is a specific shame in this. Cultures that equate seniority with
            competence make it humiliating to not know — and the people with the
            most to relearn are frequently those for whom not-knowing carries the
            highest social cost. The senior clinician, the veteran engineer, the
            seasoned manager: each is asked to hold authority and ignorance at the
            same moment.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            A system that wants its people to adapt must protect the dignity of
            the re-learner. It must make beginning again something other than a
            confession of obsolescence. Otherwise people will not adapt — they
            will hide, bluff, or disengage, because the shame of visible
            learning is greater than the cost of quietly falling behind.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── VII. The Environmental Body of Intelligence ───────────────────── */}
      <Section eyebrow="VII · The Environmental Body">
        <Reveal>
          <H2>The environmental body of intelligence</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            The chat window is calm. A cursor blinks in a clean white field, and
            cognition seems to cost nothing. But the softness of the interface
            conceals the hardness of what powers it.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <Couplet lines={["The interface is soft because the infrastructure is hard."]} />
        </Reveal>
        <Reveal delay={100}>
          <P>
            Behind the gentle prompt lie data centers the size of towns, drawing
            power on the scale of cities, cooled by water drawn from real
            watersheds, built from minerals torn out of real ground by real
            labour. Intelligence-as-utility has a body, and that body eats energy,
            water, and earth.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            This is the ecological debt of commodified intelligence. Every
            metered token has a shadow cost that does not appear on the bill — a
            cost paid by ecosystems and, disproportionately, by the communities
            nearest the infrastructure and furthest from its benefits. A theory of
            abundant intelligence that ignores its planetary body is not a theory
            of abundance. It is a deferral of the invoice.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── VIII. Dune and the Politics of the Resource ───────────────────── */}
      <Section eyebrow="VIII · Dune">
        <Reveal>
          <H2>Dune and the politics of the resource</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            In <em>Dune</em>, a single substance — the spice — underwrites
            everything: travel, commerce, prescience, power. Whoever controls the
            spice controls the universe, and the entire political order organizes
            itself around the flow of one irreplaceable resource.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <Couplet lines={["The spice must flow. So must the tokens."]} />
        </Reveal>
        <Reveal delay={100}>
          <P>
            When a single resource becomes the substrate of all power, politics
            becomes the politics of that resource — its extraction, its
            chokepoints, its rationing, its defense. Compute, and the energy and
            minerals beneath it, is becoming such a resource. The companies and
            states that control the flow of intelligence will hold a kind of
            leverage that earlier monopolies could only approximate, because this
            commodity is woven into thought itself.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── IX. Foundation and the Dream of Prediction ────────────────────── */}
      <Section eyebrow="IX · Foundation">
        <Reveal>
          <H2>Foundation and the dream of prediction</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            Asimov's <em>Foundation</em> imagines psychohistory: a mathematics so
            powerful it can predict the trajectory of civilizations and steer them
            across millennia. It is the dream of removing uncertainty from history
            — of finally knowing, and therefore controlling, what comes next.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            Predictive intelligence offers a smaller version of the same dream:
            anticipate the customer, the voter, the patient, the worker; model
            them well enough to manage outcomes before they happen. It is
            seductive precisely because uncertainty is uncomfortable and
            prediction promises relief.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            But there is a line that prediction crosses. To be modelled and
            anticipated without any voice in the modelling is to be governed
            without consent. Prediction without participation becomes empire — a
            quiet rule exercised over people who were never asked, by systems
            that treat their futures as data points rather than as lives still
            being lived.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── X. Pantheon and the Question of Personhood ────────────────────── */}
      <Section eyebrow="X · Pantheon">
        <Reveal>
          <H2>Pantheon and the question of personhood</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            <em>Pantheon</em> imagines uploaded minds — human consciousness
            rendered as data, copied, and run on machines. The usual debate fixes
            on whether a full upload is really the person, really conscious,
            really alive. That debate, while fascinating, may miss the nearer
            danger.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            The threat is not that all of a human can be digitized. It is that
            enough of the human can be captured to make the human negotiable.
            Enough of your patterns, preferences, voice, and judgment can be
            modelled to stand in for you, to be priced, traded, deployed, or
            withheld.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            Once personhood is partially capturable, it becomes a thing that can
            be owned in pieces. You do not have to be fully replaced to be
            partially expropriated. The question shifts from "is the copy a
            person?" to "who owns the parts of me that have been captured, and
            what may they do with them?"
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── XI. Pluribus and the Comfort of the Hive ──────────────────────── */}
      <Section eyebrow="XI · Pluribus">
        <Reveal>
          <H2>Pluribus and the comfort of the hive</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            <em>Pluribus</em> imagines a benevolent collective — a hive that
            absorbs individuals into a shared, frictionless, contented whole. No
            conflict, no loneliness, no painful individuation. Just belonging,
            total and warm.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            The horror of it is not cruelty. It is comfort. The danger is being
            dissolved by benevolence — losing the self not to a boot but to an
            embrace, surrendering selfhood because the surrender feels so good and
            asks so little.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <Couplet
            lines={[
              "Friction is not always failure.",
              "Sometimes friction is where selfhood lives.",
            ]}
          />
        </Reveal>
        <Reveal delay={120}>
          <P>
            The resistance of a separate mind — its capacity to disagree, to
            withhold, to want something the collective does not — is not a defect
            to be optimized away. It is often the very texture of being a person.
            A system that removes all friction in the name of harmony may be
            removing the conditions under which individuals continue to exist.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── XII. The Pluribus Problem in Work ─────────────────────────────── */}
      <Section eyebrow="XII · The Pluribus Problem in Work">
        <Reveal>
          <H2>The Pluribus problem in work</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            The hive arrives in workplaces wearing the language of seamlessness.
            Integrate the intelligence layer; remove the friction; let everything
            flow. It sounds like pure efficiency, and much of it is.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            But some of the friction being removed is the friction where judgment,
            dissent, and individual responsibility used to live. The pause before
            agreement. The colleague who says this is wrong. The person who
            refuses to sign off. When a team is optimized into frictionlessness,
            it can lose the very capacities — to notice, to object, to take
            ownership — that protected it from its own mistakes.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P muted>
            A system that cannot tolerate friction cannot tolerate the people who
            generate it, which means it slowly cannot tolerate conscience.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── XIII. Commodified Intelligence and Class ──────────────────────── */}
      <Section eyebrow="XIII · Intelligence and Class">
        <Reveal>
          <H2>Commodified intelligence and class</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            The deepest division may not be between those who have intelligence
            and those who do not. Everyone will have some. The division will be
            between two kinds of intelligence, distributed along lines of power.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <Couplet
            lines={[
              "Sovereign intelligence helps you think.",
              "Managed intelligence helps institutions process you.",
            ]}
          />
        </Reveal>
        <Reveal delay={100}>
          <P>
            The well-positioned will have sovereign intelligence: tools that
            answer to them, amplify their agency, extend their judgment, and keep
            their secrets. The rest will increasingly meet managed intelligence:
            systems that score them, route them, screen them, and decide about
            them — intelligence that serves the institution's purposes, not
            theirs.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            Both groups will say they use AI. They will mean opposite things. One
            is a mind you wield. The other is a mind wielded upon you. The
            difference between them is the new shape of class.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── XIV. What the World Needs ─────────────────────────────────────── */}
      <Section eyebrow="XIV · Cognitive Justice">
        <Reveal>
          <H2>What the world needs</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            What this moment requires is something we do not yet have: a theory of
            cognitive justice.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            Not merely a theory of access — whether people can buy the product —
            but a theory of participation: who gets to think with the best tools,
            who is merely processed by them, whose judgment is amplified and whose
            is overridden, and on what terms the substrate of thought is owned,
            priced, and governed.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            Cognitive justice would ask whether intelligence strengthens a
            person's agency or quietly relocates it. It would treat the dignity of
            the thinker — not just the efficiency of the output — as something a
            system is obligated to protect. It would count the ecological body and
            the displaced elder brothers as part of the ledger, not as
            externalities.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── XV. What ArchLife Asks ────────────────────────────────────────── */}
      <Section eyebrow="XV · What ArchLife Asks">
        <Reveal>
          <H2>What ArchLife asks</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            ArchLife does not ask whether intelligence is powerful. That question
            is already answered. It asks a harder one: whether intelligence can
            become abundant without becoming extractive.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            Whether the systems we build around it can serve life without
            flattening life — without reducing people to data, professionals to
            obsolete inventory, individuals to frictionless components, and the
            planet to a line item deferred. Whether abundance can be designed so
            that it amplifies agency rather than relocating it upward into the
            hands that own the flame.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            This is the same question ArchLife asks everywhere, now wearing the
            largest clothes it has yet worn. Can a system hold a person's full
            humanity while it processes them? Can it remain accountable to the
            people inside it, especially the ones it is tempted to treat as
            inputs?
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            The technology will not answer this. The systems built around it will.
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
              maxWidth: 660,
              margin: "0 0 0.6rem",
            }}
          >
            Because commodified intelligence will not only answer our questions.
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
              maxWidth: 660,
              margin: "0 0 3.6rem",
            }}
          >
            It will reveal the quality of the systems asking them.
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
              href="/canon/elder-brother-problem"
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
              The Elder Brother Problem — The hidden wound of the one who stayed →
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
            ArchLife · Canon · When Intelligence Becomes a Utility
          </p>
        </Reveal>
      </section>
    </PageShell>
  );
}
