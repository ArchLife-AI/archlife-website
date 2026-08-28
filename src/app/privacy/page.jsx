import { PageShell } from "@/components/PageShell/PageShell";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export const meta = () => [
  { title: "Privacy notice | ArchLife" },
  {
    name: "description",
    content:
      "How SolaEiMara ArchLife Pvt Ltd handles information on archlife.in. A marketing-site notice, not a product privacy programme.",
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

export default function PrivacyPage() {
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
            Privacy notice
          </h1>
        </Reveal>
        <P>
          This page describes{" "}
          <em>archlife.in</em>, the public website of SolaEiMara ArchLife
          Private Limited (CIN U62020DC2026PTC472434). It is a notice about a
          brochure site. It is not a full DPDP compliance programme, and it is
          not the privacy notice for Institutional Mirror, The Sensorium, or
          MANthan.
        </P>

        <H2>Who we are</H2>
        <P>
          SolaEiMara ArchLife Private Limited, India. Questions:{" "}
          <a
            href="mailto:hello@archlife.in"
            style={{ color: "#C88B5A" }}
          >
            hello@archlife.in
          </a>
          .
        </P>

        <H2>What this site collects</H2>
        <P>
          This domain is a public brochure. Contact buttons open your own mail
          client via mailto. Until you send the message, we do not receive or
          store it on this host.
        </P>
        <P>
          The site uses Vercel Analytics to understand aggregate visits. That
          is a usage signal, not a patient record.
        </P>
        <P>
          We do not collect patient data, clinical records, or health
          information on archlife.in.
        </P>

        <H2>Sister hosts</H2>
        <P>
          Live prototypes and experiences run on other hosts and keep their own
          notices: mirror.archlife.in, thesensorium.archlife.in, and
          manthan.archlife.in. Do not assume this page covers those systems.
        </P>

        <H2>What we do not do here</H2>
        <P>
          We do not sell mailing lists from this site. We do not run a
          newsletter capture form on this domain today. We do not use this
          page to describe OTP sessions, sandboxes, or product databases.
        </P>

        <P>
          Last updated 28 August 2026. If the site starts collecting more, this
          notice will change.
        </P>
      </section>
    </PageShell>
  );
}
