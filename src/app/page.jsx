import { AtmosphericCanvas } from "@/components/AtmosphericCanvas/AtmosphericCanvas";
import { Nav } from "@/components/Navigation/Navigation";
import { Footer } from "@/components/Footer/Footer";
import { GlobalStyles } from "@/components/GlobalStyles/GlobalStyles";
import { ProductMapSection } from "@/components/ProductMapSection/ProductMapSection";
import { HeroSection } from "@/sections/home/HeroSection";
import { OriginSection } from "@/sections/home/OriginSection";
import { ConceptsSection } from "@/sections/home/ConceptsSection";
import { MirrorSection } from "@/sections/home/MirrorSection";
import { CanonSection } from "@/sections/home/CanonSection";
import { ResearchSection } from "@/sections/home/ResearchSection";
import { PhilosophySection } from "@/sections/home/PhilosophySection";
import { FinalQuote } from "@/sections/home/FinalQuote";
import { FooterNavRow } from "@/sections/home/FooterNavRow";

export const meta = () => [
  { title: "ArchLife | Healthcare AI Governance and Operations" },
  {
    name: "description",
    content:
      "ArchLife builds governance and operating systems for healthcare AI and high-strain institutions, spanning live prototypes, operational engagements, and research foundations.",
  },
];

// ── Page ─────────────────────────────────────────────────────
export default function ArchLifePage() {
  return (
    <div
      style={{
        background: "var(--bg)",
        minHeight: "100vh",
        color: "var(--ink)",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <AtmosphericCanvas />
      <Nav />
      <GlobalStyles />

      <HeroSection />
      <ProductMapSection />
      <OriginSection />
      <ConceptsSection />
      <MirrorSection />
      <CanonSection />
      <ResearchSection />
      <PhilosophySection />
      <FinalQuote />
      <FooterNavRow />

      <Footer />

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
        @media (max-width: 640px) {
          /* Hero headline: let text reflow naturally, suppress explicit breaks */
          .hero-br { display: none; }

          /* Origin section tighter gap */
          .origin-grid { gap: 3rem !important; }

          /* Concepts: 2-col on mobile with left padding so right-col cards breathe */
          .concepts-grid { grid-template-columns: 1fr 1fr !important; }
          .concept-card { padding-left: 1rem !important; }
          .concept-card.concept-last { border-right: none !important; }

          /* Mirror mockup: stack topology above insights on narrow screens */
          .mirror-body { grid-template-columns: 1fr !important; }
          .mirror-body > div:first-child {
            border-right: none !important;
            border-bottom: 1px solid rgba(200,139,90,0.06);
          }
        }
      `}</style>
    </div>
  );
}
