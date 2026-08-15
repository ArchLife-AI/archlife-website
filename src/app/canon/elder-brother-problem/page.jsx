import { PageShell } from "@/components/PageShell/PageShell";
import { Reveal } from "@/components/Reveal/Reveal";
import { EssayArtwork } from "@/components/EssayArtwork/EssayArtwork";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export const meta = () => [
  { title: "The Elder Brother Problem | ArchLife" },
  {
    name: "description",
    content:
      "On loyalty, resentment, and the hidden wound of the one who stayed. Why systems that only celebrate return miss the deeper fracture — and what it means to repair both brothers.",
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

export default function ElderBrotherProblemPage() {
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
            The Elder Brother Problem
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
            On loyalty, resentment, and the hidden wound of the one who stayed
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
      <EssayArtwork src="/elder-brother-problem.webp" caption="Rembrandt · The Return of the Prodigal Son (the elder son) · c. 1668" />

      <Section eyebrow="I · The Other Figure">
        <Reveal>
          <P lead>
            The story of the Prodigal Son is usually remembered as a story about
            forgiveness.
          </P>
        </Reveal>
        <Reveal delay={60}>
          <P>
            The younger son leaves home, wastes his inheritance, collapses,
            returns in shame, and is received by the father with astonishing
            tenderness. The father does not make him crawl back into belonging.
            He does not reduce him to his worst season. He runs toward him,
            restores him, and celebrates his return.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            It is one of the most moving images of mercy in human storytelling.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            But there is another figure in the story, and he is harder to love.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>The elder brother.</P>
        </Reveal>
        <Reveal delay={140}>
          <P>
            He does not leave. He does not waste the inheritance. He does not
            disappear into excess, hunger, humiliation, or exile. He stays. He
            works. He obeys. He carries continuity while the younger brother is
            away.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            And when the younger brother returns, the elder brother does not
            rejoice.
          </P>
        </Reveal>
        <Reveal delay={180}>
          <P>He is angry.</P>
        </Reveal>
        <Reveal delay={200}>
          <P>
            He stands outside the celebration, unable to enter the house, unable
            to join the music, unable to accept the tenderness being offered to
            the one who left.
          </P>
        </Reveal>
        <Reveal delay={220}>
          <P>
            At first, it is easy to judge him. He seems cold, bitter,
            self-righteous, and ungenerous. But if we look more carefully, his
            resentment contains a wound that many systems prefer not to see.
          </P>
        </Reveal>
        <Reveal delay={240}>
          <P>He is not simply angry that his brother has been forgiven.</P>
        </Reveal>
        <Reveal delay={260}>
          <P muted>He is angry because his own faithfulness has gone unnoticed.</P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── II. The one who stayed ───────────────────────────────────────── */}
      <Section eyebrow="II · Infrastructure">
        <Reveal>
          <H2>The one who stayed</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            The elder brother's complaint is devastating because it is not
            entirely false.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            He has stayed in the field. He has followed the rules. He has done
            what was expected. He has not created a crisis. He has not demanded
            dramatic rescue. He has not forced the household to reorganize
            around his collapse.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>He has remained useful, responsible, and available.</P>
        </Reveal>
        <Reveal delay={120}>
          <P>In many systems, that kind of person slowly becomes invisible.</P>
        </Reveal>
        <Reveal delay={140}>
          <P>
            The reliable one becomes infrastructure. The stable one becomes
            background. The person who keeps showing up is assumed to be fine
            because they are still functioning. Their pain is less dramatic, so
            it attracts less care. Their needs are quieter, so they are easier
            to postpone.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            The younger brother's suffering becomes visible because he falls
            outward. The elder brother's suffering is hidden because he hardens
            inward.
          </P>
        </Reveal>
        <Reveal delay={180}>
          <P>This is the elder brother problem.</P>
        </Reveal>
        <Reveal delay={200}>
          <P>
            A system can become so focused on restoring the one who collapsed
            that it forgets to honor the one who carried the weight while
            collapse was happening.
          </P>
        </Reveal>
        <Reveal delay={220}>
          <P muted>That forgetting has consequences.</P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── III. Resentment as unacknowledged cost ───────────────────────── */}
      <Section eyebrow="III · Resentment as Information">
        <Reveal>
          <H2>Resentment as unacknowledged cost</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            Resentment is often treated as a moral failure. Sometimes it is. It
            can become cruel, possessive, punitive, and small. But resentment is
            also information.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>It often points to a cost that was carried without recognition.</P>
        </Reveal>
        <Reveal delay={100}>
          <P>The elder brother's anger says: I paid a price too.</P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            I stayed. I worked. I obeyed. I gave up certain freedoms. I carried
            the continuity of the house. I did not break the story open. I did
            not make my suffering dramatic enough to be seen.
          </P>
        </Reveal>
        <Reveal delay={140}>
          <P>And now the one who left receives a feast.</P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            That feeling is not limited to ancient parables. It appears in
            families, teams, institutions, workplaces, hospitals, friendships,
            and care systems.
          </P>
        </Reveal>
        <Reveal delay={180}>
          <P>
            The sibling who stayed near the parents while another disappeared
            may feel it. The employee who kept the department running while a
            more volatile colleague received repeated accommodations may feel
            it. The nurse who silently absorbed extra workload while leadership
            focused on crisis cases may feel it. The team member who never broke
            down but became tired of being dependable may feel it. The caregiver
            who supported someone through recovery, only to find that everyone
            celebrates the recovery while nobody asks what it cost to provide
            care, may feel it.
          </P>
        </Reveal>
        <Reveal delay={200}>
          <P>
            The elder brother is the voice of unacknowledged continuity.
          </P>
        </Reveal>
        <Reveal delay={220}>
          <P muted>
            He is what happens when responsibility is relied upon but not loved.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── IV. Two kinds of lostness ────────────────────────────────────── */}
      <Section eyebrow="IV · Two Kinds of Lostness">
        <Reveal>
          <H2>Two kinds of lostness</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            The younger son is obviously lost. He leaves home, loses
            everything, and returns from the far country.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>The elder brother is lost in a quieter way.</P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            He is physically at home, but emotionally outside the house. He
            lives near the father, but does not seem to feel close to him. He
            has access to belonging, but experiences himself as deprived. He has
            remained obedient, but his obedience has not become joy.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>That is a different kind of exile.</P>
        </Reveal>
        <Reveal delay={140}>
          <P>
            The younger brother is lost in excess. The elder brother is lost in
            resentment. The younger brother breaks relationship by leaving. The
            elder brother breaks relationship by remaining present without
            feeling loved.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            This distinction matters because systems often misread stability as
            health. They assume that the person who stayed is okay. They assume
            that the worker who kept working is okay. They assume that the child
            who behaved is okay. They assume that the clinician who kept
            functioning is okay. They assume that the team that kept delivering
            is okay.
          </P>
        </Reveal>
        <Reveal delay={180}>
          <P>But continuing is not the same as being well.</P>
        </Reveal>
        <Reveal delay={200}>
          <P muted>
            Sometimes the person who looks most stable is the person whose pain
            has had the fewest acceptable places to go.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── V. The younger brother's second shame ────────────────────────── */}
      <Section eyebrow="V · Corrosive Guilt">
        <Reveal>
          <H2>The younger brother's second shame</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>There is another wound hidden inside the story.</P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            Imagine the younger brother standing inside the celebration, still
            carrying the shock of being received. He has returned expecting
            humiliation, perhaps prepared to live as a servant, and instead the
            father has restored him as a son. The music begins. The household
            moves around him. The impossible has happened: he is home.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>Then he becomes aware of the elder brother's absence.</P>
        </Reveal>
        <Reveal delay={120}>
          <P>Or worse, he hears the anger.</P>
        </Reveal>
        <Reveal delay={140}>
          <P>
            The elder brother's coldness can become a second trial for the
            younger brother. The father's forgiveness may be real, but the
            brother's resentment can awaken the older shame still living inside
            him.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>This is the corrosive guilt of return.</P>
        </Reveal>
        <Reveal delay={180}>
          <P>
            The returning person may think: he is right. I did leave. I did
            waste what I was given. I did cause pain. I do not deserve this
            celebration. My restoration is unfair to the one who stayed.
          </P>
        </Reveal>
        <Reveal delay={200}>
          <P>
            Even after being forgiven, the younger brother may remain vulnerable
            to the accusation that his return is an injustice. The elder
            brother's anger can become an inner voice, confirming what shame
            already suspects: that mercy is excessive, that belonging is
            undeserved, that the person should not stand too fully in the warmth
            being offered.
          </P>
        </Reveal>
        <Reveal delay={220}>
          <P>This is why repair is fragile.</P>
        </Reveal>
        <Reveal delay={240}>
          <P>
            A person can be welcomed back by one part of the system and still
            feel rejected by another. They can be restored formally but remain
            exiled emotionally. They can receive forgiveness and still be unable
            to inhabit it because someone nearby refuses to let the old story
            soften.
          </P>
        </Reveal>
        <Reveal delay={260}>
          <P>
            In that sense, the elder brother's coldness does not only reveal his
            own wound. It also threatens the younger brother's return.
          </P>
        </Reveal>
        <Reveal delay={280}>
          <P muted>
            A system that receives the fallen but does not address the
            resentment of the faithful leaves both people unsafe.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── VI. The father's unfinished work ─────────────────────────────── */}
      <Section eyebrow="VI · The Father's Unfinished Work">
        <Reveal>
          <H2>The father's unfinished work</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            The father in the story does something extraordinary for the younger
            son. But he also has to leave the party and speak to the elder son.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>This matters.</P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            The father does not simply tell the elder brother to stop being
            resentful and come inside. He goes out to him. He dignifies the
            elder brother's anger by meeting him outside the celebration.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            That movement is important because it shows that the elder brother
            also needs pursuit.
          </P>
        </Reveal>
        <Reveal delay={140}>
          <P>
            The younger son was met on the road. The elder son is met outside
            the house.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>Both are outside in different ways.</P>
        </Reveal>
        <Reveal delay={180}>
          <P>
            A system of repair must understand this. The fallen are not the only
            ones who need to be brought back. The faithful can also drift into
            exile, even while standing inside the boundary of the system. Their
            exile is not geographical. It is emotional, relational, and moral.
          </P>
        </Reveal>
        <Reveal delay={200}>
          <P>
            The father's challenge is not simply to forgive the younger son. It
            is to restore the household without losing the elder son.
          </P>
        </Reveal>
        <Reveal delay={220}>
          <P>That is much harder than offering mercy to one person.</P>
        </Reveal>
        <Reveal delay={240}>
          <P muted>
            It requires holding two truths at once: the younger son must be
            allowed to return, and the elder son's loyalty must not be treated
            as disposable.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── VII. The faithful need more than duty ────────────────────────── */}
      <Section eyebrow="VII · Duty Without Nourishment">
        <Reveal>
          <H2>The faithful need more than duty</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            The elder brother's bitterness suggests that he has experienced his
            relationship with the father largely through duty. He has obeyed,
            but he does not seem to have felt abundance. He has remained, but he
            does not seem to have felt celebrated. He has had access to the
            household, but somehow not to delight.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            This is the danger of systems that rely on responsible people
            without nourishing them.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            Duty can sustain a system for a long time, but duty without
            recognition becomes brittle. Over time, the faithful begin to feel
            foolish. They wonder why they kept giving so much. They begin to
            envy the dramatic because crisis receives attention while steadiness
            receives expectation.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            In workplaces, this is how high performers become cynical. In
            families, this is how responsible children become quietly resentful.
            In healthcare, this is how caregivers become emotionally exhausted.
            In institutions, this is how the people who hold continuity begin to
            detach from the very system they once protected.
          </P>
        </Reveal>
        <Reveal delay={140}>
          <P>
            The faithful do not only need instructions. They need recognition,
            rest, participation, and joy. They need to know that their
            steadiness is not merely being consumed.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P muted>
            A system that only notices loyalty when it disappears is already
            degrading.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── VIII. The fairness problem ───────────────────────────────────── */}
      <Section eyebrow="VIII · Fairness ≠ Sameness">
        <Reveal>
          <H2>The fairness problem</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            The elder brother introduces the fairness problem into mercy.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            If someone can leave, fail, return, and be celebrated, what does
            that say to the one who never left? Does forgiveness make obedience
            meaningless? Does restoration ignore consequence? Does tenderness
            toward the fallen become injustice toward the faithful?
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>These questions cannot be brushed aside.</P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            A system that cannot answer them will produce resentment. People
            will begin to feel that the only way to receive care is to collapse
            dramatically. They will learn that quiet endurance is unrewarded
            while visible crisis is reorganized around. They will become less
            generous because generosity appears to have no memory of their cost.
          </P>
        </Reveal>
        <Reveal delay={140}>
          <P>
            This is why humane systems must distinguish equality from sameness.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            The younger brother needs restoration. The elder brother needs
            recognition. These are not identical needs, but both are real. The
            system fails if it treats only one as morally legitimate.
          </P>
        </Reveal>
        <Reveal delay={180}>
          <P>
            Fairness does not mean giving everyone the same response. It means
            seeing the truth of each position clearly enough that care does not
            become erasure.
          </P>
        </Reveal>
        <Reveal delay={200}>
          <P muted>
            The father's love must be large enough to receive the one who
            returns and also reassure the one who stayed that his place was
            never meaningless.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── IX. The danger of making him the villain ─────────────────────── */}
      <Section eyebrow="IX · Not the Villain">
        <Reveal>
          <H2>The danger of making the elder brother the villain</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            It is tempting to turn the elder brother into the villain of the
            story. This is emotionally convenient because it protects the beauty
            of forgiveness from complication.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            But if we make him only the villain, we repeat the system's original
            error: we fail to notice the one who stayed.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            His resentment may be ugly, but it is not random. His coldness may
            be harmful, but it has roots. He has mistaken his brother's
            restoration for his own erasure because the system has not made his
            belonging visible to him.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            This does not excuse cruelty. The elder brother's resentment can
            wound the returning brother deeply. It can turn forgiveness into
            guilt. It can make home feel conditional again. It can punish the
            younger brother for accepting mercy.
          </P>
        </Reveal>
        <Reveal delay={140}>
          <P>
            But understanding the elder brother matters because bitterness often
            grows where pain had no legitimate language.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            A humane system must be able to say: your resentment cannot govern
            the household, but your wound matters.
          </P>
        </Reveal>
        <Reveal delay={180}>
          <P muted>
            That sentence is difficult. It prevents resentment from becoming
            tyranny without dismissing the pain underneath it.
          </P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── X. Repair must include the carriers ─────────────────────────── */}
      <Section eyebrow="X · The Carriers">
        <Reveal>
          <H2>Repair must include the ones who carried the system</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            After any rupture, most attention goes to the visible event: the
            collapse, the return, the apology, the treatment, the resignation,
            the relapse, the mistake, the reconciliation.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            But every rupture has surrounding witnesses and carriers. Someone
            absorbed extra work. Someone held fear quietly. Someone maintained
            continuity. Someone became the stable one because instability had
            already occupied the centre.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            If those people are not included in repair, the repair remains
            incomplete.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            This is true in families after mental health crises. It is true in
            teams after burnout. It is true in hospitals after operational
            failure. It is true in organizations after a founder's volatility.
            It is true in any system where some people become the shock
            absorbers for other people's collapse.
          </P>
        </Reveal>
        <Reveal delay={140}>
          <P>
            The question is not whether the returning person deserves care. They
            do.
          </P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            The question is whether the system can care for them without
            consuming the people who stayed.
          </P>
        </Reveal>
        <Reveal delay={180}>
          <P muted>That is the deeper architecture.</P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── XI. Corrosive guilt ──────────────────────────────────────────── */}
      <Section eyebrow="XI · Atmosphere vs. Declaration">
        <Reveal>
          <H2>The younger brother and corrosive guilt</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            The younger brother's healing depends partly on whether the system
            can metabolize the elder brother's resentment.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            If the elder brother remains cold, the younger brother may begin to
            live in a state of corrosive guilt. This is not healthy
            accountability. Accountability helps a person repair what they can
            and live differently. Corrosive guilt does something else. It keeps
            the person permanently indebted to the pain they caused. It tells
            them that any joy after failure is betrayal. It makes restoration
            feel morally suspicious.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            A person under corrosive guilt may not leave physically, but they
            may never fully return. They may self-minimize, over-apologize,
            avoid celebration, refuse help, sabotage progress, or accept lesser
            belonging because full belonging feels unfair.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>This is another way systems lose people.</P>
        </Reveal>
        <Reveal delay={140}>
          <P muted>They may come home, but only as ghosts of themselves.</P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            That is why the elder brother's wound must be addressed not only for
            his sake, but for the younger brother's too. If resentment remains
            unnamed, it becomes the emotional law of the household. The father
            may declare the son restored, but the atmosphere may say otherwise.
          </P>
        </Reveal>
        <Reveal delay={180}>
          <P muted>And atmosphere often wins over declaration.</P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── XII. What ArchLife asks ──────────────────────────────────────── */}
      <Section eyebrow="XII · What ArchLife Asks">
        <Reveal>
          <H2>What ArchLife asks</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>
            The Elder Brother Problem asks whether a system can repair rupture
            without creating new resentment.
          </P>
        </Reveal>
        <Reveal delay={80}>
          <P>
            It asks whether we can welcome the fallen without making the
            faithful invisible. It asks whether we can honor endurance without
            becoming punitive toward return. It asks whether responsibility can
            be nourished before it hardens into bitterness.
          </P>
        </Reveal>
        <Reveal delay={100}>
          <P>
            This matters because every living system contains both brothers.
          </P>
        </Reveal>
        <Reveal delay={120}>
          <P>
            There is the part that leaves, breaks, collapses, spends, wanders,
            and returns ashamed. There is also the part that stays, works,
            obeys, carries, and becomes resentful when its cost is ignored.
          </P>
        </Reveal>
        <Reveal delay={140}>
          <P>A humane system cannot choose only one.</P>
        </Reveal>
        <Reveal delay={160}>
          <P>
            If it only celebrates return, it may wound continuity. If it only
            rewards continuity, it may make return impossible. If it cannot hold
            both, it becomes morally brittle.
          </P>
        </Reveal>
        <Reveal delay={180}>
          <P>
            The work is to build systems where the younger brother can come home
            without being trapped in corrosive guilt, and where the elder
            brother can be honored without being allowed to turn pain into
            permanent coldness.
          </P>
        </Reveal>
        <Reveal delay={200}>
          <P>
            The story does not end neatly because real repair does not end
            neatly. The music is playing inside the house, but the elder brother
            is still outside. The father is still pleading. The younger
            brother's restoration is real, but not yet fully integrated into the
            household.
          </P>
        </Reveal>
        <Reveal delay={220}>
          <P muted>That unfinishedness is the truth.</P>
        </Reveal>
        <Reveal delay={240}>
          <P>
            Repair is not a single welcome. It is the ongoing work of making
            belonging livable again for everyone who was changed by the rupture.
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
            The system is not healed when the fallen are forgiven. It is healed
            only when the cost of staying is finally seen.
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
              Read first
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
              ← The Architecture of Return — The household that receives people back
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
            ArchLife · Canon · The Elder Brother Problem
          </p>
        </Reveal>
      </section>
    </PageShell>
  );
}
