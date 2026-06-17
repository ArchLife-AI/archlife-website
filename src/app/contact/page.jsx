import { ContactSection } from "@/components/ContactSection/ContactSection";
import { PageShell } from "@/components/PageShell/PageShell";

export const meta = () => [
  { title: "Contact | ArchLife" },
  {
    name: "description",
    content:
      "Contact ArchLife for institutional partnerships, research collaboration, and healthcare intelligence initiatives.",
  },
];

export default function ContactPage() {
  return (
    <PageShell>
      <ContactSection />
    </PageShell>
  );
}
