import { ArticleNote, Name, P } from "@/components/ArticleNote/ArticleNote";

export const meta = () => [
  { title: "Intelligence as Extraction vs. Intelligence as Care | ArchLife" },
  {
    name: "description",
    content:
      "The dominant AI paradigm extracts signal from the clinic. A humane alternative would bring intelligence to the clinic, and leave care with the clinician.",
  },
];

export default function IntelligenceAsCarePage() {
  return (
    <ArticleNote
      title="Intelligence as Extraction vs. Intelligence as Care"
      category="AI & Human Systems"
      dek="AI should not siphon the clinic into a model and sell a fraction of that intelligence back as a subscription."
      readTime="2 min"
    >
      <P>
        The dominant paradigm of Silicon Valley is Intelligence as Extraction. It
        views hospitals, clinics, and labs as massive mines of raw data. The
        objective is to siphon this data into central servers, train a monolithic
        model, and sell a fraction of that intelligence back to the clinicians as
        a subscription service.
      </P>
      <P>This model is structurally parasitic. It hollows out the institution.</P>
      <P>
        ArchLife is building the counter-architecture:{" "}
        <Name>Intelligence as Care</Name>.
      </P>
      <P>
        We believe that AI should not extract data from the clinic; it should be
        brought to the clinic. The intelligence should remain within the
        institutional walls, acting as an exoskeleton for the clinical team. It
        should protect patient privacy by design, not by legal loophole.
      </P>
      <P>
        Intelligence as Care means the system takes on the burden of liability
        tracking, administrative overhead, and coordination memory, leaving the
        human doctor free to do the one thing the machine cannot: care for the
        patient.
      </P>
    </ArticleNote>
  );
}
