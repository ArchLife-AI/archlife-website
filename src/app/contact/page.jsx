import { ContactSection } from "@/components/ContactSection/ContactSection";
import { PageShell } from "@/components/PageShell/PageShell";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export const meta = () => [
  { title: "Contact ArchLife | Healthcare AI Governance and Operations" },
  {
    name: "description",
    content:
      "Contact ArchLife about Institutional Mirror, dental lab operating systems, research collaboration, and healthcare AI governance work.",
  },
];

const fonts = {
  sans: "var(--sans)",
  serif: "var(--serif)",
};

const inquiryRoutes = [
  {
    label: "Healthcare AI governance",
    status: "Institutional Mirror",
    body: "For hospital leaders, clinical AI teams, policy groups, and institutional partners examining how AI systems are governed under operational pressure.",
    href: "mailto:hello@archlife.in?subject=Institutional%20Mirror%20%2F%20Healthcare%20AI%20Governance",
  },
  {
    label: "Dental lab operations",
    status: "Pilot-ready",
    body: "For dental groups, labs, and operational teams exploring case accountability, turnaround visibility, and chairside-lab coordination.",
    href: "mailto:hello@archlife.in?subject=Dental%20Lab%20Operating%20Layer%20Pilot",
  },
  {
    label: "Research and collaboration",
    status: "Canon and fieldwork",
    body: "For researchers, builders, and institutions interested in humane systems, operational intelligence, and evidence-grounded AI interfaces.",
    href: "mailto:hello@archlife.in?subject=ArchLife%20Research%20Collaboration",
  },
  {
    label: "General inquiry",
    status: "ArchLife",
    body: "For ecosystem questions, speaking, writing, ecosystem navigation, or conversations that do not fit one product surface yet.",
    href: "mailto:hello@archlife.in?subject=ArchLife%20General%20Inquiry",
  },
];

const founderLinkedIn = "https://www.linkedin.com/in/dr-ishaan-wadhwa-98a017244";

export default function ContactPage() {
  return (
    <PageShell>
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: "clamp(6rem,12vw,9rem) clamp(1.5rem,6vw,5rem) clamp(3rem,8vw,6rem)",
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.8fr) minmax(320px, 1.2fr)",
            gap: "clamp(2rem,5vw,5rem)",
            alignItems: "start",
          }}
          className="contact-route-grid"
        >
          <div>
            <Reveal>
              <SectionLabel>Contact</SectionLabel>
            </Reveal>
            <Reveal delay={90}>
              <h1
                style={{
                  fontFamily: fonts.serif,
                  fontSize: "clamp(2.5rem,6vw,5.5rem)",
                  fontWeight: 300,
                  color: "var(--ink)",
                  lineHeight: 0.96,
                  margin: "0 0 var(--space-4)",
                  letterSpacing: 0,
                }}
              >
                Route the right conversation.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p
                style={{
                  fontFamily: fonts.sans,
                  fontSize: "0.95rem",
                  lineHeight: 1.9,
                  color: "#A8B0B9",
                  maxWidth: 520,
                  margin: "0 0 var(--space-4)",
                  fontWeight: 300,
                }}
              >
                ArchLife is small, founder-led, and designed around serious
                institutional conversations. Choose the closest route and send
                a short note with your context, role, and the surface you want
                to examine.
              </p>
            </Reveal>
            <Reveal delay={190}>
              <p
                style={{
                  fontFamily: fonts.sans,
                  fontSize: "0.74rem",
                  lineHeight: 1.7,
                  color: "rgba(216,222,230,0.62)",
                  maxWidth: 520,
                  margin: "0 0 var(--space-4)",
                  fontWeight: 300,
                }}
              >
                Dr. Ishaan Wadhwa joins the PGP in Applied AI &amp; Agentic
                Systems at Masters&apos; Union in August 2026.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div
                style={{
                  border: "1px solid rgba(156,163,175,0.16)",
                  background: "rgba(11,18,32,0.42)",
                  padding: "1.4rem",
                  maxWidth: 520,
                  borderRadius: 8,
                }}
              >
                <p
                  style={{
                    fontFamily: fonts.sans,
                    color: "#D8DEE6",
                    fontSize: "0.78rem",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  Useful context: the institution or team, current operational
                  pressure, relevant AI or workflow surface, and whether the ask
                  is exploratory, pilot-facing, research, or advisory.
                </p>
              </div>
            </Reveal>
            <Reveal delay={280}>
              <a
                href={founderLinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "1.25rem",
                  fontFamily: fonts.sans,
                  color: "rgba(243,239,231,0.72)",
                  fontSize: "0.76rem",
                  lineHeight: 1.5,
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(200,139,90,0.34)",
                  paddingBottom: 2,
                  letterSpacing: 0,
                  transition: "color 220ms ease, border-color 220ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--ink)";
                  e.currentTarget.style.borderBottomColor =
                    "rgba(200,139,90,0.68)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(243,239,231,0.72)";
                  e.currentTarget.style.borderBottomColor =
                    "rgba(200,139,90,0.34)";
                }}
              >
                Dr. Ishaan Wadhwa on LinkedIn
              </a>
            </Reveal>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "var(--space-2)",
            }}
            className="contact-route-card-grid"
          >
            {inquiryRoutes.map((route, index) => (
              <Reveal delay={120 + index * 70} key={route.label}>
                <a
                  href={route.href}
                  style={{
                    minHeight: 270,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "var(--space-3)",
                    padding: "1.35rem",
                    textDecoration: "none",
                    border: "1px solid rgba(156,163,175,0.16)",
                    background:
                      "linear-gradient(145deg, rgba(11,18,32,0.76), rgba(16,24,39,0.46))",
                    borderRadius: 8,
                    transition:
                      "border-color 240ms ease, transform 240ms ease, background 240ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(200,139,90,0.58)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.background =
                      "linear-gradient(145deg, rgba(18,28,45,0.82), rgba(22,32,48,0.54))";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(156,163,175,0.16)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.background =
                      "linear-gradient(145deg, rgba(11,18,32,0.76), rgba(16,24,39,0.46))";
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        minHeight: 28,
                        padding: "0.25rem 0.55rem",
                        borderRadius: 6,
                        border: "1px solid rgba(200,139,90,0.32)",
                        color: "#D8A477",
                        fontFamily: fonts.sans,
                        fontSize: "0.68rem",
                        lineHeight: 1.2,
                        letterSpacing: 0,
                        textTransform: "uppercase",
                      }}
                    >
                      {route.status}
                    </span>
                    <h2
                      style={{
                        fontFamily: fonts.serif,
                        fontSize: "clamp(1.55rem,2.4vw,2.35rem)",
                        fontWeight: 300,
                        color: "var(--ink)",
                        lineHeight: 1.05,
                        margin: "1.2rem 0 0.8rem",
                        letterSpacing: 0,
                      }}
                    >
                      {route.label}
                    </h2>
                    <p
                      style={{
                        fontFamily: fonts.sans,
                        color: "var(--muted)",
                        fontSize: "0.8rem",
                        lineHeight: 1.75,
                        margin: 0,
                        fontWeight: 300,
                      }}
                    >
                      {route.body}
                    </p>
                  </div>
                  <span
                    style={{
                      fontFamily: fonts.sans,
                      color: "var(--ink)",
                      fontSize: "0.74rem",
                      lineHeight: 1.4,
                      textTransform: "uppercase",
                      letterSpacing: 0,
                    }}
                  >
                    Start this inquiry
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <style>{`
        @media (max-width: 900px) {
          .contact-route-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 680px) {
          .contact-route-card-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </PageShell>
  );
}
