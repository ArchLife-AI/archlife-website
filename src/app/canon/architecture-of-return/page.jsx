import { PageShell } from "@/components/PageShell/PageShell";
import { Reveal } from "@/components/Reveal/Reveal";
import { EssayArtwork } from "@/components/EssayArtwork/EssayArtwork";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export const meta = () => [
  { title: "The Architecture of Return | ArchLife" },
  {
    name: "description",
    content:
      "What the Prodigal Son teaches about repair, belonging, and systems that can receive people back. A reading of return as structural design, not sentiment.",
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

export default function ArchitectureOfReturnPage() {
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
            The Architecture of Return
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
            What the Prodigal Son teaches about repair, belonging, and systems
            that can receive people back
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

      {/* ── I. Opening ──────────────────────────────────────────────────── */}
      <EssayArtwork src="/architecture-of-return.webp" caption="Rembrandt · The Return of the Prodigal Son · c. 1668" />

      <Section eyebrow="I · The Question">
        <Reveal>
          <P lead>
            Every system eventually has to answer a question it would rather
            avoid: what do we do when someone returns from failure?
          </P>
        </Reveal>
        <Reveal delay={60}>
          <P>
            Not when someone performs well. Not when someone follows the rules.
            Not when someone remains useful, stable, agreeable, and easy to
            integrate. Those situations are simple enough. Most systems know how
            to reward competence, obedience, productivity, and continuity.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>The harder question arrives after rupture.</P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            A person leaves, fails, collapses, burns through trust, falls into
            shame, loses their way, or becomes difficult to recognize even to
            themselves. Then, at some later point, they return. They may come
            back quietly, awkwardly, partially, without the language to explain
            what happened. They may carry regret, exhaustion, humiliation,
            anger, illness, or a changed relationship with who they used to be.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>At that moment, the system must decide what kind of system it is.</P>
        </Reveal>
        <Reveal delay={140}>
          <P>
            Will it receive the person back, or will it preserve their failure
            as their permanent identity? Will it create a path of repair, or
            will it create a corridor of suspicion? Will it allow return without
            humiliation, or will it demand that the person repeatedly perform
            shame as the price of re-entry?
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>This is why the story of the Prodigal Son has lasted.</P>
        </Reveal>
        <Reveal delay={180}>
          <P>
            It is not only a religious story about forgiveness. It is a story
            about whether a household can survive rupture without becoming
            punitive, and whether love can remain larger than the record of a
            person's worst season.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── II. The son who leaves ───────────────────────────────────────── */}
      <Section eyebrow="II · The Son Who Leaves">
        <Reveal>
          <H2>The son who leaves</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            The younger son's story is the more dramatic one. He asks for his
            inheritance, leaves home, spends what he has, loses everything, and
            eventually finds himself in a state of hunger and degradation.
            Whatever confidence carried him away from home has disappeared. The
            world he thought would open for him has narrowed into survival.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            When he decides to return, he does not come back with pride. He
            rehearses a reduced version of himself. He no longer imagines
            returning as a son. He imagines returning as a servant, someone who
            may be tolerated if he lowers his claim to belonging.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>That detail matters.</P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            Failure often teaches people to negotiate against their own worth.
            After collapse, a person may no longer believe they have the right
            to return as themselves. They may feel that the only acceptable
            re-entry is a diminished one: less visible, less demanding, less
            loved, less trusted, less entitled to tenderness.
          </P>
        </Reveal>
        <Reveal delay={140}>
          <P>
            Many systems accept this bargain. They may allow the person back,
            but only as someone permanently marked by failure. The person
            returns, but not fully. They are present, but not restored. They are
            included, but not trusted. They are forgiven in language, but exiled
            in atmosphere.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>The father in the story refuses that bargain.</P>
        </Reveal>
        <Reveal delay={180}>
          <P>
            He does not wait for the son to complete his rehearsed speech before
            moving toward him. He does not begin with interrogation, probation,
            or moral accounting. He does not reduce the son to the damage he
            caused or the foolishness of his departure. He sees him from far
            away and runs toward him.
          </P>
        </Reveal>
        <Reveal delay={200}>
          <P>That movement is the heart of the story.</P>
        </Reveal>
        <Reveal delay={220}>
          <P>The father does not merely permit return. He participates in it.</P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── III. Return ≠ Permission ─────────────────────────────────────── */}
      <Section eyebrow="III · Return ≠ Permission">
        <Reveal>
          <H2>Return is not the same as permission</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            There is a difference between allowing someone back and receiving
            them back.
          </P>
        </Reveal>
        <Reveal delay={80}>
          {/* The canonical distinction — set apart */}
          <div
            style={{
              borderLeft: "1px solid rgba(200,139,90,0.35)",
              paddingLeft: "1.8rem",
              margin: "1.6rem 0 2rem",
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#C88B5A",
                lineHeight: 1.6,
                margin: "0 0 0.8rem",
              }}
            >
              Permission says: you may enter.
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#C88B5A",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Reception says: you are still part of us.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <P>
            Permission can be cold, bureaucratic, and conditional. It can open
            the door while keeping the person emotionally outside. Reception is
            different. Reception restores relationship. It says that the
            person's failure is real, but it is not the whole truth of them. It
            says that repair is not possible if a person is kept permanently
            kneeling at the threshold.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            The father's response is not sentimental weakness. It is an act of
            reconstitution. He gives the son a robe, a ring, sandals, and a
            place in the household again. These are not decorative gestures.
            They are symbols of restored standing. The son is not merely fed; he
            is re-identified.
          </P>
        </Reveal>
        <Reveal delay={140}>
          <P>
            This is what humane systems often fail to understand. When someone
            returns from rupture, practical reintegration is not enough. A
            person may need a role, but they also need dignity. They may need
            accountability, but they also need a future. They may need
            boundaries, but they also need a way not to be trapped forever
            inside the narrative of what went wrong.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>Without that, return becomes another form of exile.</P>
        </Reveal>
        <Reveal delay={180}>
          <P muted>The person is technically back, but spiritually outside.</P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── IV. Architecture beneath forgiveness ────────────────────────── */}
      <Section eyebrow="IV · Architecture, Not Impulse">
        <Reveal>
          <H2>The architecture beneath forgiveness</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            Forgiveness is often treated as a feeling, but in real systems it
            also has architecture.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            If a family, team, institution, or community wants to receive return
            well, it cannot rely only on emotional generosity in a moment of
            crisis. It needs structures that make repair possible without making
            humiliation the central mechanism.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            That architecture includes memory, but not weaponized memory. It
            includes accountability, but not permanent degradation. It includes
            boundaries, but not exile disguised as caution. It includes the
            ability to ask what happened without reducing the person to the
            event.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            A good system does not pretend rupture did not happen. That would be
            dishonest and unsafe. The younger son did leave. He did waste what
            he was given. He did create pain. Return does not erase consequence.
          </P>
        </Reveal>
        <Reveal delay={140}>
          <P>But consequence is not the same as identity.</P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            This distinction is essential. If a system cannot separate a person
            from their worst episode, it cannot truly repair. It can punish,
            monitor, manage, and tolerate, but it cannot restore.
          </P>
        </Reveal>
        <Reveal delay={180}>
          <P>
            The architecture of return asks for a more difficult discipline: to
            remember what happened without making the person live forever inside
            it.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── V. Why systems struggle ──────────────────────────────────────── */}
      <Section eyebrow="V · Why Systems Struggle">
        <Reveal>
          <H2>Why systems struggle with return</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            Systems often struggle with return because return is disruptive.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            It interrupts the moral clarity that systems prefer. Before return,
            everyone has a clean story. The person who left was irresponsible.
            The person who failed was weak. The person who broke trust was
            unsafe. The person who collapsed was unreliable. These stories may
            contain truth, but they are still incomplete.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            Return complicates the story. It asks whether people can change,
            whether shame can soften, whether relationship can survive damage,
            whether the future can be different from the evidence of the past.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            Many systems resist that complication because punishment is easier
            to administer than restoration. Suspicion is easier than
            discernment. Exile is easier than reintegration. A label is easier
            than an ongoing relationship.
          </P>
        </Reveal>
        <Reveal delay={140}>
          <P>
            There is also fear. If we receive one person back too generously,
            will everyone think failure has no cost? If we restore belonging too
            quickly, will loyalty become meaningless? If we celebrate return,
            will we dishonor those who never left?
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            These are not trivial concerns. A system that receives return badly
            can create new injustice. It can ignore harm, bypass accountability,
            or place the burden of forgiveness on those who were hurt. It can
            celebrate the returning person while neglecting those who stayed.
          </P>
        </Reveal>
        <Reveal delay={180}>
          <P>This is why return requires architecture, not impulse.</P>
        </Reveal>
        <Reveal delay={200}>
          <P>
            A humane system must be able to do two things at once: create a
            path back for the fallen, and honor the cost carried by the
            faithful.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── VI. Return after collapse ────────────────────────────────────── */}
      <Section eyebrow="VI · Return After Collapse">
        <Reveal>
          <H2>Return after collapse</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            The story becomes especially powerful when read beyond its religious
            frame.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>People return from many kinds of exile.</P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            They return after burnout, after illness, after addiction, after
            depression, after mania, after public failure, after professional
            mistakes, after family conflict, after debt, after grief, after
            disappearing from their own life for a while. They return after
            becoming someone they did not intend to become.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            And when they return, they often carry a private fear: will I only
            be seen as what happened to me?
          </P>
        </Reveal>
        <Reveal delay={140}>
          <P>
            This fear is not irrational. Many systems are poor at receiving
            altered people. They like people either before the collapse or after
            the success story is complete. They are less comfortable with the
            middle space, where someone has survived but is not yet fully
            reconstructed.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>That middle space is where return needs the most care.</P>
        </Reveal>
        <Reveal delay={180}>
          <P>
            A person coming back from collapse may not need celebration in a
            loud sense. They may need steadiness. They may need a way to rebuild
            trust gradually. They may need meaningful work that is not
            overwhelming. They may need people who can hold both truth and
            tenderness. They may need a system that does not confuse fragility
            with uselessness.
          </P>
        </Reveal>
        <Reveal delay={200}>
          <P>
            The father's welcome is not only emotional; it is existential. It
            says: your life is not over because you lost your way.
          </P>
        </Reveal>
        <Reveal delay={220}>
          <P muted>That sentence is the beginning of repair.</P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── VII. Return in institutions ──────────────────────────────────── */}
      <Section eyebrow="VII · Institutions">
        <Reveal>
          <H2>Return in institutions</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>Institutions also need an architecture of return.</P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            A workplace needs to know how to receive someone after burnout or
            conflict. A healthcare system needs to know how to receive a patient
            who relapses, misses appointments, or returns after non-adherence
            without treating them as a moral failure. A school needs to know how
            to receive a student who falls behind. A family needs to know how to
            receive the member who left, broke down, or became difficult. A
            justice system, if it is to be humane, must ask whether it is
            designed only to punish or also to reintegrate.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            Without return pathways, systems become brittle. People learn that
            once they fail, they are safer staying away. They avoid asking for
            help because help will come with a permanent label. They hide
            relapse, weakness, confusion, and overload because disclosure may
            cost them belonging.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            A system without return does not eliminate failure. It only drives
            failure underground.
          </P>
        </Reveal>
        <Reveal delay={140}>
          <P>
            This is especially dangerous in care systems. When people fear
            humiliation, they delay return until the damage is worse. When
            employees fear blame, they hide mistakes until they become incidents.
            When patients feel judged, they disengage. When families make return
            too shameful, estrangement becomes easier than repair.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            A humane institution does not merely ask how to prevent people from
            falling out of the system. It asks how to make coming back possible.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── VIII. Restoration ≠ indulgence ───────────────────────────────── */}
      <Section eyebrow="VIII · Restoration ≠ Indulgence">
        <Reveal>
          <H2>The difference between restoration and indulgence</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            There is a necessary caution here. Restoration is not indulgence.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            To receive someone back does not mean pretending nothing happened,
            erasing responsibility, or demanding that others immediately feel
            safe. The younger son's restoration is beautiful, but it does not
            answer every practical question about trust, inheritance, or the
            older brother's wound. The story is powerful partly because it
            leaves those tensions alive.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            Real return requires discernment. Some harms need boundaries. Some
            patterns require time. Some relationships cannot be restored to
            their previous form. Some people can be welcomed without being given
            immediate access to everything they once had. Some systems must
            protect others while still refusing to dehumanize the one who
            failed.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            The question is not whether return should have structure. It must.
          </P>
        </Reveal>
        <Reveal delay={140}>
          <P>
            The question is whether the structure is designed for repair or
            permanent suspicion.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            A reparative structure says: we will move carefully, but we will
            move toward life. A punitive structure says: you may be back, but
            you will always be the person who left.
          </P>
        </Reveal>
        <Reveal delay={180}>
          <P muted>Only one of those makes healing possible.</P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── IX. The shame threshold ──────────────────────────────────────── */}
      <Section eyebrow="IX · The Shame Threshold">
        <Reveal>
          <H2>The shame threshold</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>Every system has a shame threshold.</P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            This is the amount of humiliation a person must cross before they
            are allowed to return.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            In some systems, the shame threshold is low. A person can say, "I
            failed," and be met with seriousness, boundaries, and care. In other
            systems, the threshold is unbearable. A person must beg, perform
            guilt, accept permanent inferiority, or wait until their suffering
            becomes visible enough to be believed.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>High shame thresholds destroy repair.</P>
        </Reveal>
        <Reveal delay={140}>
          <P>
            They teach people to hide until they are desperate. They make return
            feel like self-erasure. They preserve the power of the group by
            making the returning person prove that they no longer threaten the
            moral order.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            The father in the story lowers the shame threshold. He does not
            remove accountability, but he refuses to make humiliation the
            gateway to belonging. He reaches the son before the village can
            fully define him by disgrace. He interrupts the social process by
            which a person becomes permanently reduced.
          </P>
        </Reveal>
        <Reveal delay={180}>
          <P muted>That is not softness. It is protection against moral exile.</P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── X. The system that runs toward you ───────────────────────────── */}
      <Section eyebrow="X · Watching the Road">
        <Reveal>
          <H2>The system that runs toward you</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            Perhaps the most moving part of the story is that the father sees
            the son while he is still far off.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>This means the father has not stopped looking.</P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            The son is not required to complete the entire journey alone before
            love responds. The father's attention reaches outward. He is not
            passive. He does not wait at the doorway in cold authority. He runs.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            This image matters because many systems claim to value return but
            remain passive. They say their doors are open, but they do not
            notice who is too ashamed to approach. They say people can ask for
            help, but they do not build conditions in which asking feels safe.
            They say restoration is possible, but they wait for the most wounded
            person to perform the most difficult movement alone.
          </P>
        </Reveal>
        <Reveal delay={140}>
          <P>
            A system that can receive return must notice people while they are
            still far off.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            That may mean early outreach, non-punitive check-ins, low-friction
            re-entry, clear repair pathways, compassionate documentation, or
            simply a culture in which absence triggers concern before judgment.
          </P>
        </Reveal>
        <Reveal delay={180}>
          <P>The question is not only whether the door is open.</P>
        </Reveal>
        <Reveal delay={200}>
          <P muted>The question is whether anyone is watching the road.</P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── XI. What ArchLife asks ───────────────────────────────────────── */}
      <Section eyebrow="XI · What ArchLife Asks">
        <Reveal>
          <H2>What ArchLife asks</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            ArchLife is concerned with continuity, but not the brittle kind of
            continuity that depends on everyone staying intact, compliant, and
            productive forever.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            Real continuity must include rupture. It must include breakdown,
            return, repair, forgiveness, accountability, and changed forms of
            belonging.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            The architecture of return asks whether our systems can hold a
            person's full arc, not only their useful phase. It asks whether we
            can design families, teams, institutions, and intelligent systems
            that do not permanently exile people for becoming difficult, ashamed,
            ill, mistaken, or temporarily lost.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>It also asks whether we can build return pathways before they are needed.</P>
        </Reveal>
        <Reveal delay={140}>
          <P>
            Because when collapse happens, it is often too late to invent
            tenderness from scratch. Systems reveal their true design in the
            moment someone comes back with nothing to offer except their need to
            be received.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            A humane system is not only measured by how well it prevents
            failure. It is measured by what it does when someone returns from
            failure.
          </P>
        </Reveal>
        <Reveal delay={180}>
          <P>
            Does it demand humiliation, or does it make repair possible? Does it
            preserve the record of collapse, or does it allow a future? Does it
            keep the person at the threshold, or does it restore them to
            relationship?
          </P>
        </Reveal>
        <Reveal delay={200}>
          <P>
            The Prodigal Son is not only a story about a son who came home. It
            is a story about a household that had to decide whether home still
            meant anything after failure.
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
              margin: "0 0 3.6rem",
            }}
          >
            When someone has lost their way, do we become the kind of place they
            can return to?
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
            ArchLife · Canon · The Architecture of Return
          </p>
        </Reveal>
      </section>
    </PageShell>
  );
}
