import { ArticleNote, Name, P } from "@/components/ArticleNote/ArticleNote";

export const meta = () => [
  { title: "The Fragmented Clinic | ArchLife" },
  {
    name: "description",
    content:
      "Healthcare fragmentation is not a technical failure. It is a coordination failure — a human problem wearing technical clothing.",
  },
];

export default function FragmentedClinicPage() {
  return (
    <ArticleNote
      title="The Fragmented Clinic"
      category="Institutional Cognition"
      dek="A patient’s journey is not a path. It is a series of disconnected islands, and the patient is forced to become their own unreliable narrator."
      readTime="2 min"
    >
      <P>
        A patient’s journey through modern healthcare is not a continuous path;
        it is a series of disconnected islands.
      </P>
      <P>
        The GP island. The specialist island. The diagnostic lab island. The
        dental technician island.
      </P>
      <P>
        At every bridge between these islands, information is lost, context is
        stripped, and the patient is forced to become their own unreliable
        narrator. This fragmentation is not an accident; it is a design failure.
        We have built deep vertical silos of expertise but have entirely
        forgotten to build the horizontal connective tissue.
      </P>
      <P>
        The <Name>Ouroboros</Name> — the serpent eating its own tail — reminds us
        that the end must connect to the beginning. The recall appointment must
        connect to the original diagnosis. The lab’s remake analysis must feed
        back into the dentist’s impression technique.
      </P>
      <P>
        To heal the fragmented clinic, we do not need more specialized islands.
        We need the ocean that connects them. We need an underlying layer of
        continuous, operationally legible intelligence.
      </P>
    </ArticleNote>
  );
}
