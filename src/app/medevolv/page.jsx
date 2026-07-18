import { ProjectProfile } from "@/components/ProjectProfile/ProjectProfile";

const project = {
  label: "MedEvolv",
  status: "Live public preview",
  heroBefore: "Pathways for healthcare",
  heroEmphasis: "professionals in transition.",
  lead:
    "MedEvolv explores how healthcare professionals can move toward analytical, operational, and AI-enabled futures without losing sight of the systems and people their work affects.",
  liveUrl: "https://medevolv.in",
  liveAction: "Visit MedEvolv",
  contactAction: "Discuss the ecosystem",
  introBefore: "Professional evolution needs more than",
  introEmphasis: " a new toolset.",
  intro:
    "Healthcare work is changing under the pressure of technology, new operating models, and different expectations of care. MedEvolv is the ArchLife ecosystem surface concerned with the people navigating that change.",
  featuresLabel: "Pathways",
  features: [
    {
      title: "Analytical transition",
      detail:
        "Moving from clinical intervention to evidence-based operational thinking, while retaining the context that makes healthcare work consequential.",
    },
    {
      title: "AI-enabled careers",
      detail:
        "Exploring how artificial intelligence changes professional roles, capabilities, and choices across healthcare systems.",
    },
    {
      title: "Operational futures",
      detail:
        "Treating coordination, workflow design, and institutional infrastructure as meaningful areas of professional practice.",
    },
  ],
  nextTitle: "Continue to the MedEvolv public preview.",
  nextBody:
    "Visit MedEvolv to see its current public pathways and job-intelligence preview. Learning, practitioner, placement, pricing, and credential offerings remain under development.",
  nextLiveAction: "Open MedEvolv",
};

export const meta = () => [
  { title: "MedEvolv | Healthcare Career Pathways | ArchLife" },
  {
    name: "description",
    content:
      "MedEvolv is an ArchLife public preview developing career infrastructure for healthcare professionals exploring analytical, operational, and AI-enabled pathways.",
  },
];

export default function MedEvolvPage() {
  return <ProjectProfile project={project} />;
}
