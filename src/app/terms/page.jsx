import { PageShell } from "@/components/PageShell/PageShell";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export const meta = () => [
  { title: "Terms of use | ArchLife" },
  {
    name: "description",
    content:
      "Terms for using archlife.in. Informational writing and prototypes, not medical advice or a contract formed by email.",
  },
];

function P({ children }) {
  return (
    <p
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.95rem",
        fontWeight: 300,
        lineHeight: 1.92,
        color: "rgba(243,239,231,0.96)",
        margin: "0 0 1.4rem",
        maxWidth: 680,
      }}
    >
      {children}
    </p>
  );
}

function H2({ children }) {
  return (
    <h2
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
        fontWeight: 300,
        color: "#F3EFE7",
        margin: "2.4rem 0 1rem",
      }}
    >
      {children}
    </h2>
  );
}

export default function TermsPage() {
  return (
    <PageShell>
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding:
            "clamp(7rem, 14vw, 11rem) clamp(1.5rem, 6vw, 5rem) clamp(4rem, 8vw, 7rem)",
          maxWidth: 820,
          margin: "0 auto",
        }}
      >
        <Reveal>
          <SectionLabel>Notice · 28 August 2026</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
              fontWeight: 300,
              color: "#F3EFE7",
              lineHeight: 1.08,
              margin: "1.4rem 0 1.6rem",
            }}
          >
            Terms of use
          </h1>
        </Reveal>
        <P>
          These terms apply to archlife.in, operated by SolaEiMara ArchLife
          Private Limited (CIN U62020DC2026PTC472434). Reading this site does
          not create a professional, clinical, or advisory relationship.
        </P>

        <H2>Informational only</H2>
        <P>
          Essays, articles, and product pages are for information and
          conversation. They are not medical advice, a clinical protocol, or a
          substitute for a licensed clinician or a local governance process.
        </P>

        <H2>Prototypes are not clinical systems</H2>
        <P>
          Institutional Mirror, The Sensorium, and MANthan are exploration
          surfaces. They are not clinical decision support, not live hospital
          monitoring, and not a mental-health assessment. Their own hosts carry
          additional boundaries.
        </P>

        <H2>Writing and marks</H2>
        <P>
          Unless stated otherwise, the essays, manifesto, and site copy remain
          intellectual property of SolaEiMara ArchLife Private Limited or the
          named authors. Do not republish them as your own.
        </P>

        <H2>Contact is not a contract</H2>
        <P>
          Sending mail to hello@archlife.in is an inquiry. No engagement,
          pilot, or retainer exists until it is written and agreed.
        </P>

        <H2>Questions</H2>
        <P>
          <a
            href="mailto:hello@archlife.in"
            style={{ color: "#C88B5A" }}
          >
            hello@archlife.in
          </a>
          . Last updated 28 August 2026.
        </P>
      </section>
    </PageShell>
  );
}
