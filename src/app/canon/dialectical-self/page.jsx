import { PageShell } from "@/components/PageShell/PageShell";
import { Reveal } from "@/components/Reveal/Reveal";
import { EssayArtwork } from "@/components/EssayArtwork/EssayArtwork";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export const meta = () => [
  { title: "The Dialectical Self | ArchLife" },
  {
    name: "description",
    content:
      "On radical acceptance, two-sided truths, and the wisdom of becoming whole without becoming rigid. A reading of the discipline that can hold contradiction without collapsing into one side of it.",
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

export default function DialecticalSelfPage() {
  return (
    <PageShell>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", zIndex: 1, padding: "clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 5rem) clamp(3rem, 6vw, 4rem)", maxWidth: 820, margin: "0 auto" }}>
        <Reveal><SectionLabel>Deep Canon · Essay</SectionLabel></Reveal>
        <Reveal delay={80}>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.4rem, 6vw, 4.4rem)", fontWeight: 300, color: "#F3EFE7", lineHeight: 1.08, letterSpacing: "-0.015em", margin: "1.4rem 0 1.6rem" }}>
            The Dialectical Self
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.1rem, 2.4vw, 1.45rem)", fontStyle: "italic", fontWeight: 300, color: "rgba(200,139,90,0.85)", lineHeight: 1.55, maxWidth: 620, margin: "0 0 2.4rem" }}>
            On radical acceptance, two-sided truths, and the wisdom of becoming
            whole without becoming rigid
          </p>
        </Reveal>
        <Reveal delay={180}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(156,163,175,0.45)" }}>
            ArchLife · Deep Canon
          </p>
        </Reveal>
      </section>

      <Rule />

      {/* ── I. A Human Being Is Rarely One Thing ─────────────────────────── */}
      <EssayArtwork src="/dialectical-self.webp" caption="Caravaggio · Narcissus · c. 1599" />

      <Section eyebrow="I · A Human Being Is Rarely One Thing">
        <Reveal>
          <P lead>A human being is rarely one thing at a time.</P>
        </Reveal>
        <Reveal delay={60}>
          <P>We are wounded and responsible. Gifted and limited. Strong and frightened. Loving and resentful. We want to change, and we want to be accepted as we are. We want freedom, and we want safety. We want intensity, and we want peace. We want to belong, and we want to remain ourselves.</P>
        </Reveal>
        <Reveal delay={80}>
          <P>Much of suffering begins when the mind tries to choose one truth and exile the other. I am either broken or brilliant. Either victim or responsible. Either spiritual or clinical. Either disciplined or free. The self becomes more real when it can hold difficult truths without needing to collapse into one of them.</P>
        </Reveal>
        <Reveal delay={100}>
          <P>This is the heart of dialectical wisdom. It is not the lazy claim that "both sides have a point" in every situation. It is the deeper discipline of remaining in contact with truths that feel emotionally incompatible, without using one truth to destroy the other.</P>
        </Reveal>
        <Reveal delay={120}>
          <P muted>That discipline is not abstract. It is one of the most practical forms of sanity available to a human being.</P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── II. Acceptance and Change ────────────────────────────────────── */}
      <Section eyebrow="II · Acceptance and Change">
        <Reveal>
          <H2>Acceptance and change</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>The central dialectic in many therapeutic traditions, especially Dialectical Behaviour Therapy, is the tension between acceptance and change. A person must accept reality as it is, and they must also work to change what can be changed. This sounds simple until one tries to live it.</P>
        </Reveal>
        <Reveal delay={80}>
          <P>Acceptance without change can become resignation. A person calls avoidance self-compassion, calls fear authenticity, calls stagnation peace. Change without acceptance can become violence against the self. A person says "I must improve" from a place of disgust and tries to build a better life from hatred of the life they have.</P>
        </Reveal>
        <Reveal delay={100}>
          <Couplet lines={["Acceptance says: this is real. Change says: reality is not finished.", "Acceptance says: stop lying about where you are. Change says: do not build a temple around where you are."]} />
        </Reveal>
        <Reveal delay={120}>
          <P>Together, they create a path. Without acceptance, change is built on denial. Without change, acceptance becomes a hiding place. The dialectical self learns to say: I will begin exactly here, and I will not pretend that here is the end.</P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── III. Radical Acceptance Is Not Passivity ─────────────────────── */}
      <Section eyebrow="III · Radical Acceptance Is Not Passivity">
        <Reveal>
          <H2>Radical acceptance is not passivity</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>Radical acceptance is often misunderstood as weakness, passivity, or spiritual numbness. It is none of these. Radical acceptance is the refusal to waste life fighting the fact that reality is real.</P>
        </Reveal>
        <Reveal delay={80}>
          <P>It does not mean approving of what happened. It does not mean calling pain good or staying in harmful situations. It simply means that before a person can respond wisely, they must stop arguing with the existence of the thing they are responding to. The imaginary self cannot build a real life. Radical acceptance brings the person back to the ground.</P>
        </Reveal>
        <Reveal delay={100}>
          <P>Reality, once accepted, becomes usable. A diagnosis can become a map. A limit can become a design constraint. A failure can become information. A pattern can become something to work with rather than something to hide from.</P>
        </Reveal>
        <Reveal delay={120}>
          <P muted>Acceptance is not the end of movement. It is the ground from which honest movement begins.</P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── IV. The Middle Way and the Nervous System ────────────────────── */}
      <Section eyebrow="IV · The Middle Way and the Nervous System">
        <Reveal>
          <H2>The Middle Way and the human nervous system</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>The Buddhist Middle Way is often described as a path between indulgence and self-mortification. This is not only ancient wisdom. It is nervous-system wisdom. Human beings swing between extremes — overwork and collapse, control and impulsivity, grandiosity and shame, attachment and withdrawal. The mind seeks relief by running to the opposite pole, but the opposite pole is not always freedom. Sometimes it is only the other side of the same imbalance.</P>
        </Reveal>
        <Reveal delay={80}>
          <P>A person exhausted by chaos may become rigid. A person ashamed of dependence may worship independence. A person wounded by ambition may call all ambition ego. A person wounded by passivity may call all rest weakness. The Middle Way is not bland moderation. It is the living intelligence that refuses to be possessed by extremes.</P>
        </Reveal>
        <Reveal delay={100}>
          <P>It asks: what does this moment actually require? Sometimes discipline. Sometimes tenderness. Sometimes rest. Sometimes effort. Sometimes surrender. Sometimes confrontation. Sometimes silence. Sometimes speech. Sometimes medication. Sometimes meditation. Sometimes the spreadsheet. Sometimes the prayer.</P>
        </Reveal>
        <Reveal delay={120}>
          <Couplet lines={["Wisdom is not loyalty to one mode.", "Wisdom is responsiveness without self-betrayal."]} />
        </Reveal>
      </Section>

      <Rule />

      {/* ── V. Yin and Yang, Not Winner and Loser ────────────────────────── */}
      <Section eyebrow="V · Yin and Yang, Not Winner and Loser">
        <Reveal>
          <H2>Yin and yang, not winner and loser</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>The yin-yang symbol is powerful because it does not treat opposites as enemies. Each contains the seed of the other. Light and dark, activity and receptivity, firmness and softness, movement and stillness, structure and flow. Modern identity often wants victory, not integration.</P>
        </Reveal>
        <Reveal delay={80}>
          <P>The ambitious part wants to defeat the tired part. The spiritual part wants to transcend the practical part. The wounded part wants to silence the responsible part. But the psyche does not heal by civil war. The point is not to let every part govern equally — some impulses must not be obeyed, some patterns need firm limits — but even the difficult parts of the self often carry information. Fear may contain a need for safety. Anger may contain a violated boundary. Collapse may contain exhaustion. Control may contain terror of chaos.</P>
        </Reveal>
        <Reveal delay={100}>
          <P>The dialectical self listens without surrendering sovereignty. It does not say every inner voice is wise. It says every inner voice may be carrying something that needs to be understood before it can be transformed.</P>
        </Reveal>
        <Reveal delay={120}>
          <P muted>Indulgence lets every part act. Suppression lets only the approved parts speak. Integration listens deeply, then chooses responsibly.</P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── VI. Two Truths Can Both Hurt ─────────────────────────────────── */}
      <Section eyebrow="VI · Two Truths Can Both Hurt">
        <Reveal>
          <H2>Two truths can both hurt</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>The phrase "two things can be true" has become common, almost too common. The real difficulty is not that two things can be true. The difficulty is that two truths can both hurt.</P>
        </Reveal>
        <Reveal delay={80}>
          <Litany lines={[
            "You can have been genuinely wounded, and you can still be responsible for how you respond.",
            "You can deserve compassion, and you can still need to change.",
            "You can have done your best with the tools you had, and your best may still have harmed someone.",
            "You can be gifted, and your gifts may still need discipline before they can be trusted.",
            "You can love someone, and still not be able to be close to them.",
            "You can forgive, and still need boundaries.",
            "You can accept your mind, and still need treatment.",
            "You can have spiritual depth, and still be vulnerable to delusion, avoidance, or inflation.",
            "You can want greatness, and still need to sleep.",
          ]} />
        </Reveal>
        <Reveal delay={100}>
          <P>These truths do not cancel each other. They refine each other. A rigid self wants one truth to win because it wants emotional simplicity. The dialectical self learns to live in the and.</P>
        </Reveal>
        <Reveal delay={120}>
          <Litany lines={[
            "I was wounded, and I am responsible.",
            "I accept myself, and I am changing.",
            "I am more than my mind, and my mind needs care.",
            "I am not reducible to my past, and my past must be integrated.",
            "I can rise, and I must remain grounded.",
            "I can be loved, and I must become trustworthy.",
          ]} />
        </Reveal>
        <Reveal delay={140}>
          <P muted>The and is where maturity begins.</P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── VII. The Wound of Overcontrol ────────────────────────────────── */}
      <Section eyebrow="VII · The Wound of Overcontrol">
        <Reveal>
          <H2>RO-DBT and the wound of overcontrol</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>Some suffering looks messy from the outside. Some suffering looks functional. There are people whose pain does not appear as chaos, but as control. They are disciplined, careful, restrained, responsible, morally serious, perectionistic, threat-sensitive, emotionally guarded, and often high-performing. They do not explode outward. They tighten inward.</P>
        </Reveal>
        <Reveal delay={80}>
          <P>Radically Open DBT focuses on this kind of suffering — the kind that comes from excessive inhibition, rigidity, social guardedness, and difficulty with openness. Not every person who is suffering looks dysregulated. Some look admirable. Some look reliable. Some look like the elder brother: dutiful, controlled, loyal, quietly resentful, and emotionally far from joy.</P>
        </Reveal>
        <Reveal delay={100}>
          <P>Overcontrol is tricky because it often gets rewarded. The world likes people who show up, follow rules, meet deadlines, manage themselves, and do not make their pain inconvenient. But a life can be externally successful and internally airless.</P>
        </Reveal>
        <Reveal delay={120}>
          <P>Control without openness becomes a prison. The question is not whether to have structure. The question is whether the structure still allows life to enter. Can the person receive feedback without shame? Can they play? Can they admit need? Can they be wrong without self-collapse? Can they loosen without falling apart?</P>
        </Reveal>
        <Reveal delay={140}>
          <Couplet lines={["Rigid control says: if I loosen, I will be unsafe.", "Flexible control says: I can remain grounded while allowing contact."]} />
        </Reveal>
      </Section>

      <Rule />

      {/* ── VIII. The Gita and Inner Balance ─────────────────────────────── */}
      <Section eyebrow="VIII · The Gita and Inner Balance">
        <Reveal>
          <H2>The Gita and the discipline of inner balance</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>The Gita's vision of equanimity is often misunderstood as emotional flatness. But equanimity is not the absence of feeling. It is freedom from total enslavement to every fluctuation. Pleasure comes, pain comes. Praise comes, blame comes. Work succeeds and fails. Relationships warm and cool. A person without inner balance is thrown entirely by these movements. Praise becomes intoxication. Criticism becomes annihilation. Success becomes destiny. Failure becomes death.</P>
        </Reveal>
        <Reveal delay={80}>
          <P>The Gita asks for another posture: act fully, but do not let the fruit of action become the owner of your soul. Feel deeply, but do not let every feeling become law. Participate in life, but do not make the changing world the only mirror in which you can recognize yourself.</P>
        </Reveal>
        <Reveal delay={100}>
          <P>The modern world is built to destabilize the mind. Notifications, metrics, likes, performance reviews, financial uncertainty, and constant visibility keep the self in a state of evaluation. The person becomes dependent on external signals for internal permission to exist.</P>
        </Reveal>
        <Reveal delay={120}>
          <Couplet lines={["Equanimity is not indifference. It is the recovery of inner proportion.", "It lets the person say: this matters, but it is not all that I am."]} />
        </Reveal>
      </Section>

      <Rule />

      {/* ── IX. Aristotle and the Practiced Self ─────────────────────────── */}
      <Section eyebrow="IX · Aristotle and the Practiced Self">
        <Reveal>
          <H2>Aristotle and the practiced self</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>Western philosophy offers a grounding through Aristotle's understanding of virtue as habit. A person does not become brave by admiring courage. They become brave by practicing courage. Character is formed through repeated action until certain ways of being become more natural.</P>
        </Reveal>
        <Reveal delay={80}>
          <P>Modern culture often treats identity as declaration. Say who you are. Brand who you are. Announce who you are becoming. But the self becomes trustworthy through repetition. If you want to be honest, practice truth in small moments. If you want to be loving, practice love when irritation arises. If you want to be grounded, practice returning to the body before crisis.</P>
        </Reveal>
        <Reveal delay={100}>
          <P>Authenticity is not doing whatever one feels. Feelings are real, but they are not always wise. Authenticity is living in increasing alignment with what is true, valuable, and responsibly yours.</P>
        </Reveal>
        <Reveal delay={120}>
          <Litany lines={[
            "Love without practice remains sentiment.",
            "Insight without practice remains performance.",
            "Acceptance without practice remains mood.",
            "Spirituality without practice remains aesthetic.",
          ]} />
        </Reveal>
        <Reveal delay={140}>
          <P muted>The self is reinforced by what it repeatedly does.</P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── X. The Authentic Self Is Not Impulse ─────────────────────────── */}
      <Section eyebrow="X · The Authentic Self Is Not Impulse">
        <Reveal>
          <H2>The authentic self is not impulse</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>The phrase "authentic self" is dangerous if it is not disciplined. Many people use authenticity to mean immediacy: whatever I feel most strongly must be the truth of me. But some strong feelings are trauma responses. Some are cravings. Some are old wounds speaking in present-tense language.</P>
        </Reveal>
        <Reveal delay={80}>
          <P>To be authentic is not to obey every inner event. It is to become honest enough to distinguish the deeper self from passing weather. The authentic self is not the loudest self. It is not always the most intense self. Sometimes the authentic self is the one that waits, listens, refuses to send the message yet, honors the feeling without making it sovereign.</P>
        </Reveal>
        <Reveal delay={100}>
          <P>Ashtavakra's non-dual insight helps here: if awareness is wider than the passing contents of the mind, then not every thought needs to become identity. Not every emotion needs to become command. Not every story needs to become a prison. The witness must still descend into life — but it can do so with more interior space.</P>
        </Reveal>
        <Reveal delay={120}>
          <P muted>The authentic self is not discovered by fleeing the human condition. It is discovered by becoming more truthful inside it.</P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── XI. Wisdom as Reality-Contact ────────────────────────────────── */}
      <Section eyebrow="XI · Wisdom as Reality-Contact">
        <Reveal>
          <H2>Wisdom as reality-contact</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>Wisdom is often imagined as a kind of loftiness. But wisdom may be much more ordinary than that. Wisdom is reality-contact. It is the capacity to know what is happening without immediately distorting it to protect the ego — to say: I am tired. I am jealous. I am avoiding. I am overreaching. I need help. I was wrong. This is too much. This does not matter as much as my mind says it does.</P>
        </Reveal>
        <Reveal delay={80}>
          <P>Wisdom is also the ability to act in proportion. Not every discomfort is danger. Not every opportunity is destiny. Not every criticism is humiliation. Not every delay is rejection. Not every powerful idea is instruction. Not every collapse is identity. Not every success is confirmation of superiority.</P>
        </Reveal>
        <Reveal delay={100}>
          <P>The wise person may still feel all of these things. Wisdom does not eliminate inner weather. It changes the relationship to weather.</P>
        </Reveal>
        <Reveal delay={120}>
          <Couplet lines={["A storm is allowed to be a storm without being crowned as king.", "This is one of the most practical forms of freedom."]} />
        </Reveal>
      </Section>

      <Rule />

      {/* ── XII. Love and Labour Again ───────────────────────────────────── */}
      <Section eyebrow="XII · Love and Labour Again">
        <Reveal>
          <H2>Love and labour again</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>The dialectical self is built through love and labour, and their relationship is not symmetric. They must be held together, but they make different demands:</P>
        </Reveal>
        <Reveal delay={80}>
          <Litany lines={[
            "Love says: all of you deserves to be met with compassion.",
            "Labour says: not all of you should be allowed to drive.",
            "Love says: your wounded parts are not disgusting.",
            "Labour says: they still need discipline.",
            "Love says: you are allowed to begin again.",
            "Labour says: begin again in behaviour, not only in feeling.",
            "Love says: you are more than your history.",
            "Labour says: integrate your history so you do not keep repeating it.",
            "Love says: you are not alone.",
            "Labour says: do not make other people carry what you refuse to face.",
          ]} />
        </Reveal>
        <Reveal delay={100}>
          <P>Without love, labour becomes self-punishment. Without labour, love becomes self-soothing without transformation. To thrive today, a person needs both. Tenderness with structure. Ambition with limits. Openness with discernment. Spirituality with common sense. Self-acceptance with responsibility. Courage with humility.</P>
        </Reveal>
        <Reveal delay={120}>
          <P muted>This is not easy. It is the work of a lifetime.</P>
        </Reveal>
      </Section>

      <Rule />

      {/* ── XIII. What Thriving Looks Like Now ───────────────────────────── */}
      <Section eyebrow="XIII · What Thriving Looks Like Now">
        <Reveal>
          <H2>What thriving looks like now</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>To thrive in the modern world is not to become endlessly optimized. It is not to become invulnerable, constantly productive, perfectly regulated, spiritually serene, and emotionally frictionless. That is not thriving. That is a fantasy designed by systems that do not understand living beings.</P>
        </Reveal>
        <Reveal delay={80}>
          <P>To thrive is to become integrated enough that life can move through you without shattering you each time. It is to have rhythms that protect you, relationships that can tell you the truth, work that does not fully sever you from yourself, and a philosophical frame large enough to hold suffering without turning suffering into identity.</P>
        </Reveal>
        <Reveal delay={100}>
          <P>Thriving may look like taking medication consistently. It may look like keeping sleep sacred. It may look like choosing a smaller promise and actually keeping it. It may look like not turning every insight into a public declaration. It may look like building slowly when the ego wants spectacle. It may look like receiving love without testing it to destruction. It may look like allowing joy without suspicion.</P>
        </Reveal>
        <Reveal delay={120}>
          <Couplet lines={["Thriving is not always dramatic.", "Often, it is the quiet restoration of trust between the self and life."]} />
        </Reveal>
      </Section>

      <Rule />

      {/* ── XIV. What ArchLife Asks ───────────────────────────────────────── */}
      <Section eyebrow="XIV · What ArchLife Asks">
        <Reveal>
          <H2>What ArchLife asks</H2>
        </Reveal>
        <Reveal delay={60}>
          <P>ArchLife asks whether human beings can become whole inside a world that profits from fragmentation. It asks whether we can live with intensity without worshipping it, with vulnerability without being ruled by it, with ambition without being possessed by it, and with technology without becoming divided by it.</P>
        </Reveal>
        <Reveal delay={80}>
          <P>The dialectical self is central to this because a fragmented world constantly pressures people into single-sided identities. Be efficient or be irrelevant. Be spiritual or be scientific. Be strong or be soft. Be ambitious or be peaceful. Be accepting or be changing. Be human or be optimized. ArchLife refuses these false choices. It asks for integration.</P>
        </Reveal>
        <Reveal delay={100}>
          <P>Not a shallow integration that blends everything into vague harmony, but a demanding integration that lets each truth correct the others. Eastern and western philosophy, therapy and spirituality, ambition and tenderness, acceptance and change, selfhood and service, sky and soil.</P>
        </Reveal>
        <Reveal delay={120}>
          <P>The dialectical self is not a final state. It is a practice of returning. Returning from extremes. Returning from fantasy. Returning from shame. Returning from inflation. Returning from collapse. Returning from rigidity. Returning from the seductive simplicity of one-sided truth. Again and again, the self is asked to become more real.</P>
        </Reveal>
        <Reveal delay={140}>
          <P muted>Not perfect. Not pure. Not invulnerable. Real.</P>
        </Reveal>
      </Section>

      {/* ── Closing ───────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", zIndex: 1, padding: "clamp(3.6rem, 7vw, 5.4rem) clamp(1.5rem, 6vw, 5rem) clamp(4rem, 8vw, 7rem)", maxWidth: 820, margin: "0 auto" }}>
        <Reveal>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.4rem, 3.2vw, 2.1rem)", fontStyle: "italic", fontWeight: 300, color: "#C88B5A", lineHeight: 1.5, maxWidth: 640, margin: "0 0 0.6rem" }}>
            The coin has two sides.
          </p>
        </Reveal>
        <Reveal delay={40}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.4rem, 3.2vw, 2.1rem)", fontStyle: "italic", fontWeight: 300, color: "#C88B5A", lineHeight: 1.5, maxWidth: 640, margin: "0 0 3.6rem" }}>
            The work is to become whole enough to hold it.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", borderTop: "1px solid rgba(200,139,90,0.1)", paddingTop: "2.4rem" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(156,163,175,0.45)", margin: 0 }}>
              Read next
            </p>
            <a href="/canon/ubermensch-and-aniruddha" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", fontStyle: "italic", color: "rgba(243,239,231,0.7)", textDecoration: "none", transition: "color 0.3s ease" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#C88B5A")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(243,239,231,0.7)")}>
              Ubermensch and Aniruddha — The kind of strength that does not need to dominate →
            </a>
            <a href="/canon" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(156,163,175,0.45)", textDecoration: "none", marginTop: "0.4rem", transition: "color 0.3s ease" }} onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(156,163,175,0.75)")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(156,163,175,0.45)")}>
              ← Return to the Canon
            </a>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(156,163,175,0.25)", marginTop: "3rem" }}>
            ArchLife · Canon · The Dialectical Self
          </p>
        </Reveal>
      </section>
    </PageShell>
  );
}
