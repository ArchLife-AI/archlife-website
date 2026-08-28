import { ArticleNote, Name, P, Steps } from "@/components/ArticleNote/ArticleNote";

export const meta = () => [
  { title: "Notice, Hold, Heal, Release | ArchLife" },
  {
    name: "description",
    content:
      "A systems heuristic for operational intelligence: notice the strain, hold the context, heal the structure, then return to flow.",
  },
];

export default function NoticeHoldHealReleasePage() {
  return (
    <ArticleNote
      title="Notice, Hold, Heal, Release"
      category="Recursive Healing"
      dek="Most software only knows how to Notice — alert fatigue — or Release — dismiss. Infrastructure that lasts has to Hold and Heal."
      readTime="2 min"
    >
      <P>
        The core operating rhythm of the <Name>SolaEiMara</Name> architecture —
        and the foundational heartbeat of any resilient system — is the loop:
        Notice, Hold, Heal, Release.
      </P>
      <Steps
        items={[
          {
            num: "01",
            title: "Notice",
            body: "The act of rendering the invisible visible. Before you can fix a fractured clinical handoff or an exhausted workforce, the system must have the sensory apparatus to notice the strain.",
          },
          {
            num: "02",
            title: "Hold",
            body: "The capacity to contain the tension without rushing to a cheap solution. When an error occurs, the system must hold the context — the blame, the history, the data — without collapsing into panic.",
          },
          {
            num: "03",
            title: "Heal",
            body: "The structural intervention. This is not a bandage. It is the realignment of the system’s architecture to support the human operators within it.",
          },
          {
            num: "04",
            title: "Release",
            body: "The return to flow. Once the structural defect is repaired, the system releases the stored tension and returns to operational rhythm.",
          },
        ]}
      />
      <P>
        Most software only knows how to Notice (alert fatigue) or Release
        (dismiss). ArchLife builds infrastructure that knows how to Hold and
        Heal.
      </P>
    </ArticleNote>
  );
}
