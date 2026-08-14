import { ProjectProfile } from "@/components/ProjectProfile/ProjectProfile";

const project = {
  label: "MANthan",
  status: "Live interactive experience",
  heroBefore: "A hall where many voices",
  heroEmphasis: "meet.",
  lead:
    "MANthan is the Sensorium's central Symposium hall made interactive — a place to sit with what you are carrying, hear it named back to you, and let a room of music hold it for a while.",
  liveUrl: "https://manthan.archlife.in",
  liveAction: "Enter the hall",
  contactAction: "Discuss an institutional pilot",
  note:
    "A living-therapy experience. Not clinical care, therapy, or a mental health assessment.",
  introBefore: "A session that asks",
  introEmphasis: " what you are carrying.",
  intro:
    "MANthan opens the dialogue of The Builder and The Architect as a walking, listening experience. A session begins with a door, a pace, and one honest question — what are you carrying — and unfolds through placement into a room whose music matches the weight of it. The goal is not engagement or streaks. The goal is that you need it a little less over time.",
  features: [
    {
      title: "The Door",
      detail:
        "A one-time threshold. Returning visitors walk straight in, and the hall remembers where they left off — without ever scoring or optimising them.",
    },
    {
      title: "Placement",
      detail:
        "Your words are read as they are, and routed to a room whose meaning holds them — not labelled, diagnosed, or filed under a category you did not choose.",
    },
    {
      title: "The Return",
      detail:
        "Days later, the hall asks how the walk settled. The Return is a continuity beat, never a retention mechanic — dependence that declines is the only north-star.",
    },
  ],
  boundaries: {
    before: "The person",
    emphasis: " never pays.",
    items: [
      "MANthan is free for the person. Institutions buy graduation — better outcomes, not more engagement.",
      "A crisis off-ramp outranks every other beat. Acute language interrupts the session and routes to real help.",
      "The pilot keeps words on the device. Institutions see aggregates only, never individual sessions.",
    ],
  },
  nextTitle: "The hall is open to invited pilots.",
  nextBody:
    "The live experience is the best introduction. MANthan is currently in an invited pilot with Masters' Union students. For institutional pilots or research conversations about the work, contact ArchLife directly.",
  nextLiveAction: "Open MANthan",
};

export const meta = () => [
  { title: "MANthan | Living Therapy in the Sensorium's Hall | ArchLife" },
  {
    name: "description",
    content:
      "MANthan is the Sensorium's central Symposium hall made interactive — a living-therapy experience where a session begins with one question: what are you carrying.",
  },
];

export default function ManthanPage() {
  return <ProjectProfile project={project} />;
}
