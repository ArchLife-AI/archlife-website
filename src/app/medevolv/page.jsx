import { ProjectProfile } from "@/components/ProjectProfile/ProjectProfile";

const project = {
  label: "MedEvolv",
  status: "Live ecosystem product",
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
  nextTitle: "Continue to the live MedEvolv product.",
  nextBody:
    "Visit MedEvolv to explore its current public work. For an ecosystem or collaboration conversation, begin with ArchLife.",
  nextLiveAction: "Open MedEvolv",
};

export const meta = () => [
  { title: "MedEvolv | Healthcare Career Pathways | ArchLife" },
  {
    name: "description",
    content:
      "MedEvolv is an ArchLife ecosystem product exploring analytical, operational, and AI-enabled pathways for healthcare professionals.",
  },
];

export default function MedEvolvPage() {
  return <ProjectProfile project={project} />;
}
