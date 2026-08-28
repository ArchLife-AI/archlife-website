import { DentalSection } from "@/components/DentalSection/DentalSection";
import { Divider } from "@/components/Divider/Divider";
import { HealthcareSection } from "@/components/HealthcareSection/HealthcareSection";
import { PageShell } from "@/components/PageShell/PageShell";

export const meta = () => [
  { title: "Healthcare Intelligence | ArchLife" },
  {
    name: "description",
    content:
      "ArchLife healthcare intelligence: operational visibility, dental coordination systems, workforce intelligence, and AI-enabled healthcare infrastructure.",
  },
];

export default function HealthcarePage() {
  return (
    <PageShell>
      <HealthcareSection />
      <Divider />
      <DentalSection />
      <section
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 clamp(1.5rem,8vw,8rem) clamp(5rem,10vw,8rem)",
        }}
      >
        <a
          href="/contact"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.72rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#F3EFE7",
            border: "1px solid rgba(200,139,90,0.4)",
            borderRadius: "2rem",
            padding: "0.9rem 2rem",
            textDecoration: "none",
            background: "rgba(200,139,90,0.06)",
            display: "inline-block",
          }}
        >
          Start a healthcare conversation
        </a>
      </section>
    </PageShell>
  );
}
