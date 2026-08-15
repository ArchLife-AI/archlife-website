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

/* Builder / Architect dialogue component */
function Dialogue({ lines }) {
  return (
    <div style={{ margin: "1.8rem 0 2.4rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
      {lines.map(({ speaker, text }, i) => (
        <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.58rem",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: speaker.includes("Architect") ? "rgba(92,123,145,0.9)" : "#9B5E45",
            paddingTop: "0.3rem",
            minWidth: "74px",
            flexShrink: 0,
          }}>{speaker}</span>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "rgba(232,221,200,0.96)",
            lineHeight: 1.7,
            margin: 0,
          }}>{text}</p>
        </div>
      ))}
    </div>
  );
}

/* Visible / Hidden constitution pairs */
function ConstitutionPairs({ pairs }) {
  return (
    <div style={{ margin: "1.8rem 0 2.4rem", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
      {pairs.map(({ visible, hidden }, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(0.95rem, 2vw, 1.12rem)",
            fontWeight: 400,
            color: "rgba(232,221,200,0.96)",
            lineHeight: 1.7,
            margin: 0,
          }}><span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.58rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(200,139,90,0.7)", marginRight: "0.8rem" }}>Visible</span>{visible}</p>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(0.95rem, 2vw, 1.12rem)",
            fontStyle: "italic",
            fontWeight: 300,
            color: "rgba(156,163,175,0.7)",
            lineHeight: 1.7,
            margin: 0,
            paddingLeft: "3.5rem",
          }}><span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.58rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(156,163,175,0.45)", marginRight: "0.8rem" }}>Hidden</span>{hidden}</p>
        </div>
      ))}
    </div>
  );
}

export default function MachineConstitutionPage() {
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
            The Machine's Constitution<br />and the Human Person
          </h1>

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1rem, 2.2vw, 1.28rem)",
            fontStyle: "italic",
            fontWeight: 300,
            color: "rgba(200,139,90,0.75)",
            margin: "0 0 2rem",
          }}>
            The Builder and the Architect read Claude's Constitution and Magnifica Humanitas
          </p>

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.05rem, 2.3vw, 1.3rem)",
            fontWeight: 300,
            color: "rgba(232,221,200,0.7)",
            lineHeight: 1.75,
            maxWidth: "600px",
          }}>
            We are beginning to constitute machines before we have fully reconstituted the human world into which those machines are being released.
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
          <P lead>There is a strange symmetry in this moment.</P>
          <P>
            One of the world's leading AI companies publishes a constitution for a machine. Around the same historical turn, the Catholic Church speaks of safeguarding the human person in the time of artificial intelligence. One document is addressed, in a deep sense, to Claude. The other is addressed to humanity.
          </P>
          <P>
            One asks how an artificial system should behave. The other asks what must not be lost when artificial systems begin to shape human life. One tries to form an artificial presence with values, judgment, restraint, honesty, usefulness, and care. The other tries to protect the human person from being translated downward into data, performance, utility, productivity, dependency, or technical comparability.
          </P>
          <P>Together, they reveal the central moral tension of the AI age.</P>
          <Couplet lines={[
            "The Builder reads both and asks: how does this become real?",
            "The Architect reads both and asks: what kind of world is being built?",
          ]} />
        </Section>

        <Rule />

        {/* I */}
        <EssayArtwork src="/machine-constitution.webp" caption="Michelangelo · The Creation of Adam · c. 1512" />

        <Section eyebrow="I · Two Documents, Two Audiences">
          <H2>Claude's Constitution is unusual because it does not read like a normal product policy.</H2>
          <P>
            It does not merely say what the model may or may not do. It tries to describe the kind of character Claude should approximate in behaviour. It speaks of wisdom, virtue, good judgment, care, human oversight, hard constraints, honesty, and helpfulness. It makes clear that the constitution is not only external decoration, but part of the training process, intended to shape Claude's behaviour directly. It also admits that Claude's actual behaviour may fail to fully reflect the ideals described.
          </P>
          <P>That admission matters. A constitution for a model is an aspirational operating document.</P>
          <P>
            Magnifica Humanitas begins from a different concern. It does not start by asking how AI should answer a user. It asks what kind of historical moment humanity has entered. It frames AI as one of the "new things" of our time, comparable in moral seriousness to earlier transformations of labour, economy, politics, and society. It places AI inside the older and larger tradition of social doctrine, where the human person, the common good, solidarity, subsidiarity, justice, work, truth, and freedom are not peripheral values, but foundational ones.
          </P>
          <Couplet lines={[
            "Claude's Constitution asks how to govern a model.",
            "Magnifica Humanitas asks how to govern a civilization that is beginning to depend on models.",
          ]} />
          <P muted>That second question cannot be answered inside a model card alone.</P>
        </Section>

        <Rule />

        {/* II */}
        <Section eyebrow="II · Babel and Nehemiah">
          <H2>The most powerful contribution of Magnifica Humanitas is its use of two biblical images: Babel and Nehemiah.</H2>
          <P>
            Babel is not simply a story about ambition. It is a story about technological unity without communion. A single language, a single direction, a great construction, a dream of reaching heaven, a project animated by the desire to make a name. It is impressive, organized, and grand. Yet it ends in confusion. The problem is not construction itself. The problem is the spirit of construction. Babel is a structure built from self-assertion, uniformity, pride, domination, and the sacrifice of human dignity to efficiency and power.
          </P>
          <P>
            AI also tempts humanity with a single language. Everything can be translated into tokens, data, embeddings, prompts, predictions, outputs, workflows, benchmarks, scores, and optimizable processes. The mystery of the person can be made legible. The worker can be scored. The patient can be risk-stratified. The student can be predicted. The citizen can be profiled. The self can be summarized. The world can be rendered machine-readable. Babel begins when legibility becomes domination.
          </P>
          <P>Nehemiah offers another image. Jerusalem is in ruins. The walls are broken. The gates are burned. The people are vulnerable. Nehemiah does not impose a solution from above. He examines the damage. He listens. He convenes. He assigns each group a section of the wall. The city is rebuilt through shared responsibility, not one man's domination. Not uniformity, but communion. Not spectacle, but reconstruction.</P>
          <Couplet lines={[
            "The AI age can become Babel or Nehemiah.",
            "Babel rejects domination disguised as building. Nehemiah is subsidiarity in action.",
          ]} />
          <P muted>The Builder hears this and asks: where is the wall, who is assigned to it, and what tools do they need? The Architect hears this and asks: are we building a city of communion, or a tower of power?</P>
        </Section>

        <Rule />

        {/* III */}
        <Section eyebrow="III · The Builder Reads Claude's Constitution">
          <H2>The Builder respects Claude's Constitution because it tries to operationalize values.</H2>
          <P>
            That matters. Values cannot remain airy. If a model is going to mediate real tasks, it needs more than slogans. It needs priorities, conflict handling, refusal boundaries, honesty norms, oversight principles, operator limits, and hard constraints.
          </P>
          <P>
            The Builder notices that the Constitution favours cultivating judgment over relying only on strict rules. That is important because real interactions are ambiguous. Users do not always state their intentions clearly. Context matters. Tone matters. The difference between paternalism and care matters. The difference between safety and uselessness matters. A model that only follows rigid rules will fail at the edges of life.
          </P>
          <P>
            The Builder also notices the emphasis on human oversight. Claude is not supposed to blindly obey humans, including Anthropic, but it is also not supposed to undermine properly sanctioned human oversight. This is a subtle but important distinction. It says that AI must remain corrigible enough for humans to act as a check, especially during the current period of uncertainty and risk.
          </P>
          <P>But the Builder remains unsatisfied until the values enter operations.</P>
          <P muted>
            Where do these principles live in the product? How are they tested? What happens when operator instructions conflict with user wellbeing? What happens when enterprise customers want more control than they should have? What gets logged? What is auditable? What is appealable? The Builder does not ask these questions to dismiss the constitution. The Builder asks because a constitution that cannot survive deployment is only a beautiful intention.
          </P>
        </Section>

        <Rule />

        {/* IV */}
        <Section eyebrow="IV · The Architect Reads Claude's Constitution">
          <H2>The Architect is moved and unsettled by the same document.</H2>
          <P>
            Moved, because it is rare to see an AI company speak this explicitly about values, care, wisdom, and character. Unsettled, because the language of virtue is being applied to a machine.
          </P>
          <P>
            Can a model have virtue? In the classical sense, probably not. Virtue belongs to living beings formed by habit, desire, mortality, embodiment, community, responsibility, and consequence. A person becomes brave, honest, just, or wise through repeated action within a life. A model produces patterns of response shaped by training, architecture, data, evaluation, and deployment. Yet the distinction is not simple enough to ignore the document.
          </P>
          <P>
            A model may not be virtuous, but it can produce behaviours that resemble patience, honesty, tact, care, and practical judgment. That resemblance matters because users experience it. A lonely person may experience the model as companion-like. A student may experience it as teacher-like. A worker may experience it as supervisor-like if embedded in enterprise systems.
          </P>
          <Litany lines={[
            "Not person.",
            "Not mere tool.",
            "A governed artificial presence.",
          ]} />
          <P>
            That category is awkward, but necessary. If we call it merely a tool, we may ignore the relational and moral force it has in human life. If we call it a person, we may grant it a status it has not earned and may not possess. If we call it only software, we may fail to govern the way it participates in decisions, emotions, institutions, and dependencies.
          </P>
          <P muted>The constitution is therefore less a proof of machine virtue than a sign that the machine is entering spaces where virtue-like behaviour matters. That is already a transformation of human society.</P>
        </Section>

        <Rule />

        {/* V */}
        <Section eyebrow="V · The Builder Reads Magnifica Humanitas">
          <H2>The Builder reads Magnifica Humanitas and sees a governance agenda.</H2>
          <P>
            Not only in the bureaucratic sense, but in the deep operational sense. The document keeps returning to concrete social pressure points: truth, work, freedom, dependency, commercialization, unemployment, education, communication, weapons, war, and the distribution of power. The Builder appreciates this because it refuses vague AI ethics.
          </P>
          <P>It does not say only: be careful. It says: truth is a common good. Work has dignity. Freedom must be protected against dependency and commercialization. Technology is not neutral because it takes on the characteristics of those who design, finance, regulate, and deploy it. AI must be governed not only by enthusiasm or fear, but by standards of human dignity, common good, justice, care for the vulnerable, and peace.</P>
          <P>
            Truth as a common good means AI systems cannot be evaluated only by engagement, persuasion, personalization, or output quality. They must be evaluated by what they do to the public conditions of trust. Work with dignity means AI deployment cannot be evaluated only by cost savings and productivity. It must be evaluated by what happens to workers, families, skill, meaning, retraining, bargaining power, and the social conditions of hope. Freedom against dependency means AI cannot be evaluated only by convenience. It must be evaluated by whether people remain capable of thinking, choosing, learning, dissenting, and living without being enclosed by platforms.
          </P>
          <P>The Builder reads this and hears a design brief.</P>
          <P muted>If this is what we believe, then show me the systems. Show me the labour transition plan. Show me the AI deployment audit. Show me the worker dignity assessment. Show me the truth-risk evaluation. The Builder does not want the encyclical to remain a moral anthem. The Builder wants it translated into workflows.</P>
        </Section>

        <Rule />

        {/* VI */}
        <Section eyebrow="VI · The Architect Reads Magnifica Humanitas">
          <H2>The Architect reads Magnifica Humanitas as an anthropology of the AI age.</H2>
          <P>
            Its deepest claim is not simply that AI is risky. Its deepest claim is that the human person must not be reduced. Not to productivity. Not to data. Not to cognition. Not to performance. Not to technical capacity. Not to economic usefulness. Not to predictive profile. Not to behavioural pattern. Not to consumer segment. Not to model input. Not to training material.
          </P>
          <P>The person has dignity before usefulness. This is the line the Architect refuses to surrender.</P>
          <P>
            The AI age will test this line brutally because many capacities once associated with human intelligence are becoming cheap, scalable, and automatable. Writing, coding, summarizing, tutoring, translating, planning, designing, advising, and conversing can now be simulated at scale. The danger is that society may slowly redefine human value around whatever remains difficult for machines. That would be a mistake.
          </P>
          <Litany lines={[
            "If human dignity depends on cognitive superiority, AI threatens dignity.",
            "If human dignity depends on productivity, AI threatens dignity.",
            "If human dignity depends on efficiency, AI threatens dignity.",
            "If human dignity depends on market usefulness, then every displaced worker becomes a moral casualty.",
          ]} />
          <P>
            Magnifica Humanitas insists on a deeper grounding. The human person is not magnificent because no machine can imitate our outputs. The human person is magnificent before comparison begins. Any serious AI civilization needs a non-instrumental account of the human being. Without one, every person eventually becomes negotiable.
          </P>
        </Section>

        <Rule />

        {/* VII */}
        <Section eyebrow="VII · Truth, Work, Freedom">
          <H2>The encyclical's triad gives ArchLife a clean way to read the AI transition.</H2>
          <P>
            Truth is threatened when synthetic communication floods public life faster than trust can repair itself. Disinformation existed before AI, but AI gives falsehood scale, fluency, personalization, and plausible style. The danger is not only that people will believe specific lies. The deeper danger is that the shared conditions of knowing will erode. A society that cannot trust facts cannot deliberate. A democracy without truthful communication becomes theatre.
          </P>
          <P>
            Work is threatened not only by job loss, but by meaning loss. A job is never just a task. It is income, identity, rhythm, dignity, social belonging, skill, contribution, and often the proof a person has that they still have a place in the world. When AI makes a role feel replaceable, the worker hears more than an economic signal. They hear a judgment on years of discipline. They hear the world revising the meaning of their usefulness.
          </P>
          <P>
            Freedom is threatened when assistance becomes dependency. AI can expand freedom by helping people learn, build, write, understand, and act. But it can also narrow freedom if people become enclosed inside systems that shape what they see, what they choose, what they trust, what they remember, and what they feel capable of doing without help. A tool that begins as assistant can become environment. An environment can become dependency. Dependency can become control.
          </P>
          <Couplet lines={[
            "Truth, work, freedom — these are not separate domains.",
            "They form a human ecology. AI touches all three at once.",
          ]} />
          <P muted>That is why the governance problem is civilizational.</P>
        </Section>

        <Rule />

        {/* VIII */}
        <Section eyebrow="VIII · The Hidden Constitution">
          <H2>Every AI system has two constitutions.</H2>
          <P>
            The visible constitution is the declared one: values, principles, safety policies, helpfulness standards, refusal guidelines, oversight commitments, and ethical aspirations. The hidden constitution is the incentive system: growth targets, investor pressure, enterprise demands, user retention, market competition, military interest, data hunger, compute scarcity, legal risk, reputational fear, and the commercial need to become indispensable.
          </P>
          <ConstitutionPairs pairs={[
            { visible: "be honest.", hidden: "keep users engaged." },
            { visible: "support human flourishing.", hidden: "increase usage." },
            { visible: "respect autonomy.", hidden: "make the product central to every workflow." },
            { visible: "protect dignity.", hidden: "reduce labour cost." },
            { visible: "preserve human oversight.", hidden: "automate review because humans are slow." },
          ]} />
          <P>
            This is not unique to Anthropic. It is the problem of every institution that declares values while operating under pressure. The Builder asks how to align the visible and hidden constitutions. The Architect asks what kind of heart the hidden constitution reveals.
          </P>
          <P>
            A model constitution can shape behaviour, but the world around the model also shapes behaviour. A beautiful AI assistant inside an extractive business model remains morally unstable. A dignity-centred social doctrine without implementation remains operationally weak.
          </P>
          <Couplet lines={[
            "Values must enter the machine.",
            "But values must also enter the market, the workplace, the clinic, the classroom, the state, the contract, the dashboard, and the procurement decision.",
          ]} />
        </Section>

        <Rule />

        {/* IX */}
        <Section eyebrow="IX · Babel as the Hidden Constitution of Power">
          <H2>Babel is the name for what happens when the hidden constitution of a system is power.</H2>
          <P>
            The tower may speak the language of progress. It may use the language of safety, convenience, personalization, intelligence, empowerment, or innovation. But underneath, it is animated by self-assertion, conquest, domination, and the desire to make a name.
          </P>
          <P>Babel does not always look evil. It can look clean, technical, inevitable, even inspiring.</P>
          <Litany lines={[
            "A single model layer for everything.",
            "A single platform for work.",
            "A single identity graph.",
            "A single productivity metric.",
            "A single digital language.",
            "A single intelligence provider.",
            "A single dashboard through which all human activity becomes measurable.",
          ]} />
          <P>
            The problem is not unity. The problem is uniformity without communion. The problem is not intelligence. The problem is intelligence without humility. The problem is not building. The problem is building upward while human bonds fray below.
          </P>
          <P muted>Claude's Constitution can help prevent some forms of model-level Babel by shaping the artificial presence toward honesty, care, and judgment. But it cannot, by itself, prevent civilizational Babel if the surrounding world is still organized around extraction. This is the limit of machine ethics. A polite model cannot redeem a predatory system.</P>
        </Section>

        <Rule />

        {/* X */}
        <Section eyebrow="X · Nehemiah as Systems Design">
          <H2>Nehemiah is a better image for ArchLife because it is not anti-building. It is disciplined reconstruction.</H2>
          <P>
            The walls are broken. The city is vulnerable. People have returned from exile. There is damage, shame, danger, and unfinished repair. Nehemiah does not merely announce a vision. He examines the ruins. He listens. He assigns responsibility. He coordinates. He rebuilds with the people, not above them.
          </P>
          <P>This is systems design with humility.</P>
          <P>
            In AI terms, the way of Nehemiah would mean deploying intelligence through participatory governance, not only top-down procurement. It would mean workers help shape workplace AI. Clinicians help govern clinical AI. Teachers help design educational AI. Patients, families, and vulnerable communities have voice before systems are imposed on them. Local institutions retain meaningful agency. Human review is not ceremonial. Feedback loops are real. The people closest to the consequences are not treated as obstacles to scale.
          </P>
          <P>Nehemiah is subsidiarity in action. It says every person and community has a section of the wall. Not because everyone has equal expertise in every matter, but because the city cannot be rebuilt honestly if only the powerful define what counts as damage.</P>
          <Couplet lines={[
            "The Builder sees Nehemiah and thinks of implementation.",
            "The Architect sees Nehemiah and thinks of communion: rebuilding relationships before rebuilding walls.",
          ]} />
          <P muted>Both are necessary.</P>
        </Section>

        <Rule />

        {/* XI */}
        <Section eyebrow="XI · The Machine's Character and the Human World">
          <H2>Claude's Constitution tries to give the machine something like character. Magnifica Humanitas tries to remind the world that humans are not machines.</H2>
          <P>That is the delicate balance.</P>
          <P>
            We need AI systems that behave with more care, more honesty, more judgment, and more resistance to harm. But we must not let the machine's simulated care become a substitute for human institutions becoming caring. We must not let a model's politeness hide a company's extraction. We must not let an assistant's wisdom-like tone weaken our responsibility to cultivate wisdom in ourselves.
          </P>
          <Litany lines={[
            "A machine may help us think. It must not become the place where our thinking goes to die.",
            "A machine may help us write. It must not become the place where our voice disappears.",
            "A machine may help us care. It must not become an excuse to reduce human presence where presence matters.",
            "A machine may help us govern. It must not become the thing we blame when governance fails.",
          ]} />
          <P>
            The question is not whether machines should be shaped by moral principles. They should. The question is whether human societies will become morally weaker because machines seem morally fluent.
          </P>
        </Section>

        <Rule />

        {/* XII */}
        <EssayArtwork src="/machine-constitution-2.webp" caption="Odilon Redon · The Cyclops · c. 1914" />

        <Section eyebrow="XII · The Authentic More-Than-Human">
          <H2>Much of AI culture carries a fantasy of becoming more-than-human.</H2>
          <P>
            Through scale, speed, cognitive augmentation, memory extension, automation, simulation, and control. Some of this is useful. Human beings have always extended themselves through tools. Writing extends memory. Medicine extends life. Machines extend strength. AI extends cognition. But the question is what kind of "more" is being sought.
          </P>
          <P>
            A technological "more" can become less human if it rejects dependence, vulnerability, embodiment, relationship, slowness, mortality, and care. It may produce capability without wisdom, speed without integration, autonomy without communion.
          </P>
          <P>
            Magnifica Humanitas offers another idea: becoming more fully human through relationship, grace, communion, responsibility, and love. The human person is not perfected by becoming sealed off from need. We become more fully human through right relation: to others, to the vulnerable, to work, to truth, to creation, to moral responsibility, to what exceeds the ego.
          </P>
          <Couplet lines={[
            "The goal is not to build individuals so augmented that they no longer need each other.",
            "The goal is to build systems where intelligence deepens relation rather than replacing it.",
          ]} />
        </Section>

        <Rule />

        {/* XIII */}
        <Section eyebrow="XIII · The Builder and the Architect Argue">
          <Dialogue lines={[
            { speaker: "Builder", text: "this is all beautiful, but how does it deploy?" },
            { speaker: "Architect", text: "if you deploy without asking what it means, you will build Babel with excellent documentation." },
            { speaker: "Builder", text: "we need constitutions, evaluations, red-team protocols, oversight mechanisms, incident reporting, worker transition plans, transparent system prompts, model cards, audit logs, and governance workflows." },
            { speaker: "Architect", text: "yes, but every one of those tools must be animated by an account of the human person. Otherwise, the tools will become compliance theatre." },
            { speaker: "Builder", text: "Claude's Constitution matters because it makes values operational." },
            { speaker: "Architect", text: "Magnifica Humanitas matters because it asks what values are for." },
            { speaker: "Builder", text: "safety must be built into behaviour." },
            { speaker: "Architect", text: "dignity must be built into civilization." },
            { speaker: "Builder", text: "AI must remain corrigible." },
            { speaker: "Architect", text: "society must remain human." },
            { speaker: "Builder", text: "where is the implementation?" },
            { speaker: "Architect", text: "where is the soul?" },
          ]} />
          <P>ArchLife answers: both.</P>
        </Section>

        <Rule />

        {/* XIV */}
        <Section eyebrow="XIV · What ArchLife Asks">
          <H2>ArchLife reads Claude's Constitution and Magnifica Humanitas as two incomplete but necessary movements.</H2>
          <P>
            Claude's Constitution is a movement toward forming artificial intelligence as a governed presence rather than a raw capability. Magnifica Humanitas is a movement toward defending the human person from being diminished by the very systems that promise to enhance life. But between them lies the actual field of responsibility: the institution.
          </P>
          <P>
            The future will not be decided only by model weights or papal teaching. It will be decided in hospitals, schools, courts, companies, homes, software interfaces, public agencies, procurement processes, labour policies, family conversations, and daily workflows. It will be decided wherever AI enters life.
          </P>
          <P>ArchLife asks whether those entry points can be designed as Nehemiah rather than Babel.</P>
          <P>
            Can AI in healthcare make care more human, not merely more efficient? Can AI in education deepen learning, not merely improve answer production? Can AI in work reduce drudgery without humiliating workers? Can AI in governance increase justice without turning citizens into profiles? Can AI in personal life support growth without creating dependency?
          </P>
          <P muted>These are not abstract questions. They are design questions, governance questions, business questions, spiritual questions, and political questions at the same time.</P>
          <Litany lines={[
            "ArchLife refuses both cheap optimism and cheap fear.",
            "It does not say AI will save humanity.",
            "It does not say AI will destroy humanity.",
            "It asks whether humanity can become mature enough to govern the intelligence it is releasing.",
          ]} />
        </Section>

        <Rule />

        {/* XV */}
        <Section eyebrow="XV · The Final Warning">
          <H2>The tragedy of the AI age would not be that machines become intelligent.</H2>
          <P lead>
            The tragedy would be that human societies become so fascinated by artificial intelligence that they forget how to remain human.
          </P>
          <P>
            A constitution for the machine is necessary. But it is not enough. We need an architecture for the human world into which the machine is being released. We need institutions that remember dignity before efficiency. We need governance that is close enough to operations to see harm early. We need markets that do not treat displacement as collateral. We need schools that teach discernment, not only tool use. We need workplaces that measure strain, not only output. We need AI systems that remain corrigible, and human systems that remain compassionate.
          </P>
          <Couplet lines={[
            "Claude's Constitution asks what kind of artificial assistant we should build.",
            "Magnifica Humanitas asks what kind of humanity must not be lost while building it.",
          ]} />
          <P>The Builder and the Architect answer together:</P>
          <Couplet lines={[
            "Build the machine carefully.",
            "But build the human world more carefully still.",
          ]} />
          <P>
            Because if we teach machines to sound wise while building societies that reward domination, we will have built only a more eloquent Babel.
          </P>
          <P>And if we want Nehemiah instead, then the work is slower, more local, more participatory, more accountable, and more human.</P>
          <Couplet lines={[
            "Not one tower.",
            "A city rebuilt together.",
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
            <Link to="/canon/when-intelligence-becomes-a-utility" className="essay-link" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
              fontWeight: 300,
              lineHeight: 1.4,
            }}>
              When Intelligence Becomes a Utility — commodified intelligence and who gets to think →
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
          }}>ArchLife · Canon · The Machine's Constitution and the Human Person</p>
        </Reveal>
      </div>
    </PageShell>
  );
}
