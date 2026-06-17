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
    </PageShell>
  );
}
