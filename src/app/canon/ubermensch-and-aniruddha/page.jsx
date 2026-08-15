import { PageShell } from "@/components/PageShell/PageShell";
import { Reveal } from "@/components/Reveal/Reveal";
import { EssayArtwork } from "@/components/EssayArtwork/EssayArtwork";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export const meta = () => [
  { title: "Ubermensch and Aniruddha | ArchLife" },
  {
    name: "description",
    content:
      "On ambition, self-overcoming, patient love, and the kind of strength that does not need to dominate. A reading of the heroic impulse and the correction it requires.",
  },
];

function H2({ children }) {
  return (
    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 300, color: "#F3EFE7", lineHeight: 1.18, letterSpacing: "-0.005em", margin: "0 0 1.6rem" }}>
      {children}
    </h2>
  );
}

function P({ children, muted, lead }) {
  return (
    <p style={{ fontFamily: lead ? "'Cormorant Garamond', serif" : "'Inter', sans-serif", fontSize: lead ? "1.18rem" : "0.95rem", fontStyle: lead ? "italic" : "normal", fontWeight: 300, lineHeight: lead ? 1.7 : 1.92, color: muted ? "rgba(156,163,175,0.7)" : "rgba(243,239,231,0.96)", margin: "0 0 1.4rem", maxWidth: 680 }}>
      {children}
    </p>
  );
}

function Section({ eyebrow, children }) {
  return (
    <section style={{ position: "relative", zIndex: 1, padding: "clamp(3.6rem, 7vw, 5.4rem) clamp(1.5rem, 6vw, 5rem)", maxWidth: 820, margin: "0 auto" }}>
      {eyebrow && (
        <Reveal>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9B5E45", marginBottom: "1.6rem" }}>
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
    <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 clamp(1.5rem, 6vw, 5rem)" }}>
      <div style={{ height: 1, background: "rgba(200,139,90,0.1)", width: "100%" }} />
    </div>
  );
}

function Couplet({ lines }) {
  return (
    <div style={{ borderLeft: "1px solid rgba(200,139,90,0.35)", paddingLeft: "1.8rem", margin: "1.6rem 0 2rem" }}>
      {lines.map((line, i) => (
        <p key={i} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)", fontStyle: "italic", fontWeight: 300, color: "#C88B5A", lineHeight: 1.6, margin: i === lines.length - 1 ? 0 : "0 0 0.8rem" }}>
          {line}
        </p>
      ))}
    </div>
  );
}

function Litany({ lines }) {
  return (
    <div style={{ margin: "1.6rem 0 2rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
      {lines.map((line, i) => (
        <p key={i} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(0.95rem, 2vw, 1.15rem)", fontStyle: "italic", fontWeight: 300, color: "rgba(200,139,90,0.8)", lineHeight: 1.6, margin: 0 }}>
          {line}
        </p>
      ))}
    </div>
  );
}

export default function UbermenschAndAniruddhaPage() {
  return (
    <PageShell>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", zIndex: 1, padding: "clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 5rem) clamp(3rem, 6vw, 4rem)", maxWidth: 820, margin: "0 auto" }}>
        <Reveal><SectionLabel>Deep Canon · Essay</SectionLabel></Reveal>
        <Reveal delay={80}>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.4rem, 6vw, 4.4rem)", fontWeight: 300, color: "#F3EFE7", lineHeight: 1.08, letterSpacing: "-0.015em", margin: "1.4rem 0 1.6rem" }}>
            Ubermensch and Aniruddha
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.1rem, 2.4vw, 1.45rem)", fontStyle: "italic", fontWeight: 300, color: "rgba(200,139,90,0.85)", lineHeight: 1.55, maxWidth: 640, margin: "0 0 2.4rem" }}>
            On ambition, self-overcoming, patient love, and the kind of strength
            that does not need to dominate
          </p>
        </Reveal>
        <Reveal delay={180}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(156,163,175,0.45)" }}>
            ArchLife · Deep Canon
          </p>
        </Reveal>
      </section>

      <Rule />

      {/* ── I. When Survival Is Not Enough ───────────────────────────────── */}
      <EssayArtwork src="/ubermensch-and-aniruddha.webp" caption="Annibale Carracci · Hercules at the Crossroads · c. 1596" />

      <Section eyebrow="I · When Survival Is Not Enough">
        <Reveal>
          <P lead>There are seasons of life when survival is not enough.</P>
        </Reveal>
        <Reveal delay={60}>
          <P>A person does not only want to endure; they want to rise. They want to become more than the frightened, wounded, confused, dependent, or ashamed version of themselves they have known. They want to stop living as a consequence of what happened to them and begin living as an answer to it.</P>
        </Reveal>
        <Reveal delay={80}>
          <P>Western philosophy has many names for this impulse, but few are as charged as Nietzsche's image of the Ubermensch — the one who overcomes the given human condition and creates new values rather than simply obeying inherited ones. The idea is often flattened into a crude fantasy of domination and exceptionalism, but at its deepest, it speaks to a real hunger: the desire to become strong enough to stop living as a copy of what the world has already permitted.</P>
        </Reveal>
        <Reveal delay={100}>
          <P>There is truth in this. Sometimes it is necessary to become fierce. Sometimes the self must be forged, not merely discovered. But there is also danger here. Self-overcoming can become another form of self-abandonment. A person may try to transcend their wound by becoming contemptuous of vulnerability itself — mistaking hardness for strength, deciding that needing others is weakness, that love is softness, that ordinary human limits are insults to destiny.</P>
        </Reveal>
        <Reveal delay={120}>
          <P>That is where another archetype becomes necessary. For me, that archetype is Aniruddha — not as an abstract doctrine, but as a living symbol of patient love, endurance, steadiness, and the kind of force that does not need to dominate in order to be strong. Aniruddha does not ask only how to overcome the world. He asks how to remain loving while enduring it.</P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── II. The Intoxication of Self-Overcoming ───────────────────────── */}
      <Section eyebrow="II · The Intoxication of Self-Overcoming">
        <Reveal>
          <H2>The intoxication of self-overcoming</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>There is a reason the fantasy of becoming beyond ordinary humanity is so attractive. Ordinary humanity hurts. It is full of dependence, embarrassment, fatigue, hunger, jealousy, longing, confusion, aging, illness, and the repeated humiliation of needing things we cannot fully control. When life has made a person feel powerless, the promise of self-overcoming feels like oxygen.</P>
        </Reveal>
        <Reveal delay={80}>
          <P>Nietzsche matters here because he does not flatter weakness. He refuses easy consolation. He asks whether a person can transform suffering into form, whether they can create values instead of merely inheriting them, whether they can live with enough intensity to say yes to existence even when existence is painful. That is not a small teaching.</P>
        </Reveal>
        <Reveal delay={100}>
          <P>The heroic impulse has its place. It says: get up. Train. Build. Think harder. Speak more honestly. Stop lying to yourself. Become capable. Become disciplined. Become someone your younger self could trust. There is love hidden even in that severity.</P>
        </Reveal>
        <Reveal delay={120}>
          <P muted>But severity alone cannot complete a human life.</P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── III. When Strength Becomes Contempt ──────────────────────────── */}
      <Section eyebrow="III · When Strength Becomes Contempt">
        <Reveal>
          <H2>When strength becomes contempt</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>The self that wants to overcome can become cruel if it is not softened by love. At first, it is cruel only toward weakness inside itself — it hates the tired part, the needy part, the afraid part. It wants to cut those parts away and become pure force. It tells itself this is discipline, but often it is disgust wearing discipline's clothes.</P>
        </Reveal>
        <Reveal delay={80}>
          <P>Later, the cruelty turns outward. The person looks at others with impatience: why are they so slow? Why do they need so much reassurance? This is where self-overcoming becomes spiritually dangerous. It begins as liberation from weakness, but can become contempt for the human condition.</P>
        </Reveal>
        <Reveal delay={100}>
          <P>A person in this state may become productive, impressive, even magnetic. They may build things and speak with power. But inside, they are often still at war with their own vulnerability. They have not healed weakness; they have exiled it. And whatever is exiled inside the self usually returns through the way we treat other people.</P>
        </Reveal>
        <Reveal delay={120}>
          <P>This is why love must enter the architecture of strength. Not sentimental love. Not love that excuses every pattern. But love as the force that refuses to let strength become dehumanization. The weak part is not the enemy. The frightened part is not shameful. Courage grows better in care than in contempt.</P>
        </Reveal>
        <Reveal delay={140}>
          <Couplet lines={["Without this correction, the heroic self becomes another tyrant.", "It frees the person from one prison by building another."]} />
        </Reveal>
      </Section>

      <Rule />

      {/* ── IV. Aniruddha as Patient Force ───────────────────────────────── */}
      <Section eyebrow="IV · Aniruddha as Patient Force">
        <Reveal>
          <H2>Aniruddha as patient force</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>Aniruddha, as an inner symbol, offers a different quality of strength. He is not passive. He is not weak. He is force without abandonment — love that does not collapse, steadiness that does not need spectacle, the strength that can stay.</P>
        </Reveal>
        <Reveal delay={80}>
          <P>Much of modern ambition is built around leaving. Leaving the old self, the small town, the weak crowd, the past. Leaving the people who do not understand. But if leaving becomes the only grammar of growth, the self becomes rootless. Aniruddha offers another question: what can be transformed by staying in loving relation?</P>
        </Reveal>
        <Reveal delay={100}>
          <P>Staying does not always mean staying in the same place. It means not abandoning the human. Not abandoning tenderness. Not abandoning the body. Not abandoning those who depend on us. Not abandoning the slower forms of truth because they do not flatter the heroic self.</P>
        </Reveal>
        <Reveal delay={120}>
          <Couplet lines={["Aniruddha asks for a strength that can endure without hardening,", "act without domination, protect without possession, and love without becoming weak."]} />
        </Reveal>
        <Reveal delay={140}>
          <P muted>That is a high form of power. It is also much less glamorous than conquest.</P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── V. The Gita's Steady Person ──────────────────────────────────── */}
      <Section eyebrow="V · The Gita's Steady Person">
        <Reveal>
          <H2>The Gita's steady person</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>The Bhagavad Gita gives us another image of strength: the sthitaprajna, the person of steady wisdom. This figure is not impressive in the modern sense. They are not defined by speed, status, charisma, or domination. Their strength is measured by steadiness under inner weather — not enslaved by every desire, not shattered by every loss, not inflated by every success, not destroyed by every criticism.</P>
        </Reveal>
        <Reveal delay={80}>
          <P>They act, but they are not possessed by action. They feel, but they are not ruled by every feeling. Their steadiness comes from integration, not suppression. They are not numb. They are not above life. Steady wisdom is alive. It has warmth. It can hold intensity without being enslaved by it. It can say yes and no from a place deeper than impulse.</P>
        </Reveal>
        <Reveal delay={100}>
          <Litany lines={[
            "The Ubermensch asks: can you create yourself beyond inherited values?",
            "The Gita asks: can the person who acts become free from being consumed by the fruits of action?",
            "Aniruddha asks: can the self that becomes strong remain loving?",
          ]} />
        </Reveal>
        <Reveal delay={120}>
          <Litany lines={[
            "Become, but do not become possessed by becoming.",
            "Overcome, but do not learn contempt.",
            "Act, but do not make outcome your god.",
            "Love, but do not collapse into helplessness.",
            "Endure, but do not turn endurance into bitterness.",
          ]} />
        </Reveal>
      </Section>

      <Rule />

      {/* ── VI. Power Without Dharma Becomes Ruin ────────────────────────── */}
      <Section eyebrow="VI · Power Without Dharma">
        <Reveal>
          <H2>Power without dharma becomes ruin</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>The Mahabharata is full of powerful people — warriors, teachers, strategists, oath-keepers, masters of weapons and speech. Yet power alone does not save them. Again and again, the epic shows that strength without dharma becomes destructive. Gifted people can be dangerous. Loyal people can be complicit. Brilliant people can be blind. Humiliated people can become vengeful. Righteous people can become cruel.</P>
        </Reveal>
        <Reveal delay={80}>
          <P>The heroic self needs this warning. It is not enough to be strong. It is not enough to be exceptional. The question is: to what is your strength accountable?</P>
        </Reveal>
        <Reveal delay={100}>
          <Litany lines={[
            "If strength is accountable only to the ego, it becomes domination.",
            "If strength is accountable only to resentment, it becomes revenge.",
            "If strength is accountable only to ambition, it becomes extraction.",
            "If strength is accountable only to purity, it becomes judgment.",
          ]} />
        </Reveal>
        <Reveal delay={120}>
          <P>Strength needs dharma, but dharma needs humility. Otherwise, a person simply calls their desire sacred and proceeds. If your great mission is making you sleep less, harm people more, ignore feedback, despise ordinary care, and treat loved ones as obstacles, it may not be dharma yet. It may be ego with a divine vocabulary.</P>
        </Reveal>
        <Reveal delay={140}>
          <P muted>A grounded path should make a person more capable of truth, not less. More capable of repair, not less. More capable of love, not less.</P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── VII. The Danger of Becoming a Symbol to Yourself ─────────────── */}
      <Section eyebrow="VII · The Danger of Becoming a Symbol to Yourself">
        <Reveal>
          <H2>The danger of becoming a symbol to yourself</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>One of the hidden dangers of intense inner life is that a person can become a symbol to themselves. They stop being a human being and start living as a mythic figure: the chosen one, the exile, the genius, the healer, the revolutionary, the tragic one, the one whose suffering has cosmic meaning.</P>
        </Reveal>
        <Reveal delay={80}>
          <P>Some symbolic life is necessary — human beings need myth. But the problem begins when the symbol becomes too tight. A person becomes more attached to the story of their life than to the actual life. They may interpret correction as persecution and concern as limitation.</P>
        </Reveal>
        <Reveal delay={100}>
          <P>This is where the Ubermensch fantasy becomes dangerous for a wounded person. It offers a mythic escape from humiliation: you were not broken, you were becoming superior. You were not lost, you were beyond the herd. A grain of truth can still become poison if it removes the need for humility.</P>
        </Reveal>
        <Reveal delay={120}>
          <P>Aniruddha corrects this by bringing the mythic self back into relationship. The question becomes not "How great am I?" but "Can I love well?" Not "Will they recognize my destiny?" but "Can I become someone whose strength makes life safer, warmer, and more possible for others?"</P>
        </Reveal>
        <Reveal delay={140}>
          <P muted>That is a more difficult mythology, because it cannot be proven by performance alone. It must be lived.</P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── VIII. Aristotle and the Habits of Becoming ───────────────────── */}
      <Section eyebrow="VIII · Aristotle and the Habits of Becoming">
        <Reveal>
          <H2>Aristotle and the habits of becoming</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>Aristotle brings greatness down into habit. Virtue, for Aristotle, is not merely a feeling or a declaration. It is cultivated through repeated action. A person becomes brave by doing brave things. Character is not only what one believes about oneself; it is what becomes reliable through practice.</P>
        </Reveal>
        <Reveal delay={80}>
          <P>A person who wants to become loving must practice love when ego is irritated. A person who wants to become disciplined must practice discipline when inspiration is absent. A person who wants to become wise must practice reality-contact when fantasy is attractive. A person who wants to become strong must practice strength in ways that do not secretly depend on contempt.</P>
        </Reveal>
        <Reveal delay={100}>
          <P>This is where self-overcoming becomes less theatrical and more honest. It is not only the mountain, the manifesto, the great project, the dramatic reinvention. It is the ordinary repetition through which the self becomes trustworthy. Sleep. Work. Repair. Study. Return. Listen. Apologize. Make fewer promises and keep more of them. Let someone else be right. Risk action without demanding applause.</P>
        </Reveal>
        <Reveal delay={120}>
          <Couplet lines={["The heroic self wants transformation to feel like fire.", "Character often forms like soil."]} />
        </Reveal>
      </Section>

      <Rule />

      {/* ── IX. Simone Weil and Attention ────────────────────────────────── */}
      <Section eyebrow="IX · Simone Weil and Attention">
        <Reveal>
          <H2>Simone Weil and attention</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>There is another kind of strength that is almost the opposite of domination: attention. Simone Weil treated attention as a profound moral and spiritual act. To truly attend to another person is to suspend the hungry self long enough to let reality appear. This kind of attention is rare because the ego wants to use everything for its own story — confirmation, advantage, comfort, superiority, or escape.</P>
        </Reveal>
        <Reveal delay={80}>
          <P>It is much easier to impose oneself on the world than to perceive the world accurately. It is easier to speak powerfully than to listen without preparing one's own victory. It is easier to become impressive than to become available to truth. Aniruddha belongs here too. Patient love requires attention — seeing the other person not as an instrument of one's destiny or an audience for one's becoming, but as a real being with their own centre of experience.</P>
        </Reveal>
        <Reveal delay={100}>
          <P>For someone driven by self-overcoming, this can be humbling. Other people slow down the myth. They interrupt the clean line of ascent. They ask for care, patience, compromise, and ordinary presence. But perhaps that interruption is necessary.</P>
        </Reveal>
        <Reveal delay={120}>
          <Couplet lines={["A greatness that cannot be interrupted by love is not greatness yet."]} />
        </Reveal>
      </Section>

      <Rule />

      {/* ── X. Frankl and Meaning as Responsibility ──────────────────────── */}
      <Section eyebrow="X · Frankl and Meaning as Responsibility">
        <Reveal>
          <H2>Frankl and meaning as responsibility</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>Viktor Frankl grounds the discussion of meaning after suffering. Meaning, for Frankl, is not simply self-expression or inner intensity. It is discovered through responsibility, through the task life places before a person, through love, work, and the stance one takes toward unavoidable suffering.</P>
        </Reveal>
        <Reveal delay={80}>
          <P>People who have suffered often search for a meaning large enough to redeem the pain. That search is understandable. But meaning becomes dangerous when it becomes narcissistic — when suffering is treated as proof of special destiny rather than as a demand for deeper responsibility.</P>
        </Reveal>
        <Reveal delay={100}>
          <Couplet lines={["The question is not only: what did my suffering mean?", "The question is: what does my survival now ask of me?"]} />
        </Reveal>
        <Reveal delay={120}>
          <Litany lines={[
            "The Ubermensch may say: I will transform suffering into power.",
            "Aniruddha may say: I will transform suffering into love that can be trusted.",
            "Frankl may add: I will transform suffering into responsibility toward life.",
          ]} />
        </Reveal>
        <Reveal delay={140}>
          <P>Pain does not automatically make a person wise. Pain can make people bitter, grandiose, frightened, controlling, or cruel. Pain becomes wisdom only when it is metabolized through truth, love, discipline, and responsibility. That is labour.</P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── XI. Strength After Mental Rupture ────────────────────────────── */}
      <Section eyebrow="XI · Strength After Mental Rupture">
        <Reveal>
          <H2>Strength after mental rupture</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>After mental rupture, the desire to become strong can be urgent. There may be a need to rebuild trust with oneself. Can I rely on my mind? Can I trust my energy? Can I trust my judgment? Can others trust me? Can I build a life that does not keep collapsing under its own intensity?</P>
        </Reveal>
        <Reveal delay={80}>
          <P>In that context, strength is not optional. A person may need routines, treatment, boundaries, sleep discipline, financial caution, supportive relationships, work rhythms, and honest feedback. They may need to learn which states of mind should not be allowed to make major decisions — to distinguish vision from impulse, insight from acceleration, spirituality from inflation, ambition from avoidance.</P>
        </Reveal>
        <Reveal delay={100}>
          <P>The heroic self may resist this because it wants freedom without constraint. It wants to believe that intensity is proof of truth. But a life built only around intensity cannot be trusted for long. Aniruddha offers another model: patient strength. It does not shame intensity, but it gives intensity rhythm. It does not kill ambition, but it asks ambition to become accountable. It refuses greatness that requires the sacrifice of sleep, sanity, tenderness, and truth.</P>
        </Reveal>
        <Reveal delay={120}>
          <Couplet lines={["This is the kind of strength that can survive beyond the dramatic season.", "It is the strength not only to rise, but to return."]} />
        </Reveal>
      </Section>

      <Rule />

      {/* ── XII. The Modern World and the Cult of Becoming ───────────────── */}
      <Section eyebrow="XII · The Cult of Becoming">
        <Reveal>
          <H2>The modern world and the cult of becoming</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>Modern culture is obsessed with becoming. Become successful. Become optimized. Become visible. Become fit. Become healed. Become enlightened. Become a founder. Become the best version of yourself. Some of this is useful. Growth is good. Agency is good. But the modern cult of becoming can make a person feel permanently unfinished in a punishing way. The self becomes a project without sabbath.</P>
        </Reveal>
        <Reveal delay={80}>
          <P>Every weakness becomes content for improvement. Every wound becomes a potential brand. Every interest becomes monetizable. Every spiritual insight becomes a public identity. Every moment of rest becomes suspect because someone else is building, shipping, scaling, posting, learning, or winning. In such a world, the Ubermensch can be misread as the patron saint of endless self-optimization. But endless optimization is not self-overcoming. Often, it is self-rejection with better tools.</P>
        </Reveal>
        <Reveal delay={100}>
          <P>Aniruddha interrupts this by asking whether becoming has remained connected to love. If growth makes a person less gentle, less honest, less capable of friendship, less able to rest, less able to receive care, then what exactly is being grown?</P>
        </Reveal>
        <Reveal delay={120}>
          <Couplet lines={["Not all growth is humanizing.", "Some growth is just expansion."]} />
        </Reveal>
      </Section>

      <Rule />

      {/* ── XIII. The Strong Self and the Loving Self ─────────────────────── */}
      <Section eyebrow="XIII · The Strong Self and the Loving Self">
        <Reveal>
          <H2>The strong self and the loving self</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>A person needs both the strong self and the loving self. The strong self protects boundaries, does difficult work, tells the truth, withstands discomfort, refuses self-pity, takes responsibility, builds competence, and acts when action is needed. The loving self softens shame, notices the body, forgives without erasing accountability, remains tender toward vulnerability, stays in relationship, and prevents discipline from becoming violence.</P>
        </Reveal>
        <Reveal delay={80}>
          <P>If the loving self exists without the strong self, a person may become indulgent, vague, avoidant, and unable to act. If the strong self exists without the loving self, a person may become rigid, harsh, isolated, and secretly afraid of their own need.</P>
        </Reveal>
        <Reveal delay={100}>
          <P>This is where dialectical wisdom enters. Two truths must be held at once: I must become stronger, and I must not hate the parts of me that are not strong yet. I must take responsibility, and I must not reduce myself to my mistakes. I must pursue excellence, and I must not let excellence become the condition for deserving love. I must build, and I must remain human while building.</P>
        </Reveal>
        <Reveal delay={120}>
          <Couplet lines={["This is not a compromise in the weak sense.", "It is a higher difficulty."]} />
        </Reveal>
      </Section>

      <Rule />

      {/* ── XIV. What Wisdom Looks Like Here ─────────────────────────────── */}
      <Section eyebrow="XIV · What Wisdom Looks Like Here">
        <Reveal>
          <H2>What wisdom looks like here</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>Wisdom in this domain does not look like rejecting ambition. It looks like purifying ambition. It asks: what is this ambition serving? Is it serving love, contribution, craft, truth, responsibility, and life? Or is it serving revenge, insecurity, status, escape, domination, and the need to prove that the wound did not win?</P>
        </Reveal>
        <Reveal delay={80}>
          <P>Wisdom also does not reject power. It asks whether power has become answerable to care. A wise person may still want to build something large. They may still want excellence. They may still want to lead, create, influence, and transform. But they become increasingly suspicious of any dream that requires them to become less truthful, less loving, less embodied, or less accountable.</P>
        </Reveal>
        <Reveal delay={100}>
          <P>Some victories deform the victor. Some forms of success make the soul less habitable. Some ambitions demand that a person amputate too much of their tenderness. Some heights are real, but the air is not breathable there.</P>
        </Reveal>
        <Reveal delay={120}>
          <Couplet lines={["Wisdom learns to ask not only whether the mountain can be climbed,", "but whether the climber can remain human at the summit."]} />
        </Reveal>
      </Section>

      <Rule />

      {/* ── XV. What ArchLife Asks ────────────────────────────────────────── */}
      <Section eyebrow="XV · What ArchLife Asks">
        <Reveal>
          <H2>What ArchLife asks</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>ArchLife asks what kind of strength can help human beings survive the modern world without becoming cruel, fragmented, or spiritually inflated. The Ubermensch and Aniruddha are not enemies. They are two poles that must be brought into conversation. The Ubermensch without Aniruddha becomes height without warmth. Aniruddha without self-overcoming risks love without sufficient force. One teaches the refusal of inherited smallness. The other teaches the refusal to abandon the human in the pursuit of greatness.</P>
        </Reveal>
        <Reveal delay={80}>
          <Litany lines={[
            "I will not remain trapped in the old self, but I will not become cruel to escape it.",
            "I will become more capable, but not less loving.",
            "I will build, but not worship building.",
            "I will rise, but not despise the ground.",
            "I will discipline my mind, but not hate my vulnerability.",
            "I will endure, but not harden into resentment.",
            "I will seek truth, but not use truth as a weapon against tenderness.",
          ]} />
        </Reveal>
        <Reveal delay={100}>
          <P>But perhaps this is what adulthood requires after rupture: not the death of the heroic self, but its initiation into love.</P>
        </Reveal>
      </Section>

      {/* ── Closing ───────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", zIndex: 1, padding: "clamp(3.6rem, 7vw, 5.4rem) clamp(1.5rem, 6vw, 5rem) clamp(4rem, 8vw, 7rem)", maxWidth: 820, margin: "0 auto" }}>
        <Reveal>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.4rem, 3.2vw, 2.1rem)", fontStyle: "italic", fontWeight: 300, color: "#C88B5A", lineHeight: 1.5, maxWidth: 640, margin: "0 0 0.6rem" }}>
            The fire says: become.
          </p>
        </Reveal>
        <Reveal delay={40}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.4rem, 3.2vw, 2.1rem)", fontStyle: "italic", fontWeight: 300, color: "#C88B5A", lineHeight: 1.5, maxWidth: 640, margin: "0 0 3.6rem" }}>
            The patience says: remain human.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", borderTop: "1px solid rgba(200,139,90,0.1)", paddingTop: "2.4rem" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(156,163,175,0.45)", margin: 0 }}>
              Read next
            </p>
            <a href="/canon/spirituality-as-an-abstract-boat" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", fontStyle: "italic", color: "rgba(243,239,231,0.7)", textDecoration: "none", transition: "color 0.3s ease" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#C88B5A")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(243,239,231,0.7)")}>
              Spirituality as an Abstract Boat — What carries us when intellect is not enough →
            </a>
            <a href="/canon" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(156,163,175,0.45)", textDecoration: "none", marginTop: "0.4rem", transition: "color 0.3s ease" }} onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(156,163,175,0.75)")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(156,163,175,0.45)")}>
              ← Return to the Canon
            </a>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(156,163,175,0.25)", marginTop: "3rem" }}>
            ArchLife · Canon · Ubermensch and Aniruddha
          </p>
        </Reveal>
      </section>
    </PageShell>
  );
}
