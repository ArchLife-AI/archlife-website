import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

const offerings = [
  {
    title: "Institutional Mirror",
    status: "Live prototype",
    category: "Governance simulator",
    description:
      "A systemic stress-test environment for clinical AI systems, built to make strain, trust, and governance trade-offs visible through synthetic scenarios.",
    href: "https://mirror.archlife.in",
    action: "Explore the prototype",
    external: true,
  },
  {
    title: "Dental Lab Operating Layer",
    status: "Pilot-ready engagement",
    category: "Operating intelligence",
    description:
      "A discovery-led engagement for Indian dental labs that need clear case visibility, operational learning, and a practical path to scale.",
    href: "/dental-labs",
    action: "View the engagement",
  },
  {
    title: "MedEvolv",
    status: "Live public preview",
    category: "Healthcare career infrastructure",
    description:
      "A developing career-support surface for healthcare professionals exploring non-clinical pathways, with public job intelligence shown only when its feed can be verified.",
    href: "/medevolv",
    action: "View the project",
  },
  {
    title: "The Sensorium",
    status: "Live exploratory experience",
    category: "Intentional listening",
    description:
      "A spatial music experience for self-directed reflection, where movement and listening become a gentler way to explore an inner state.",
    href: "/sensorium",
    action: "Explore the project",
  },
  {
    title: "MANthan",
    status: "Live interactive experience",
    category: "Living therapy",
    description:
      "Living therapy sessions in the Sensorium's central hall — the interactive experience of The Builder and The Architect.",
    href: "https://manthan.archlife.in",
    action: "Open MANthan",
    external: true,
  },
];

const routes = [
  { label: "Healthcare AI governance", href: "https://mirror.archlife.in", external: true },
  { label: "Dental lab operations", href: "/dental-labs" },
  { label: "Intentional listening", href: "/sensorium" },
  { label: "Living therapy", href: "/manthan" },
  { label: "Research foundations", href: "/canon" },
  { label: "Partnerships", href: "/contact" },
];

export function ProductMapSection() {
  return (
    <section
      id="work"
      style={{
        position: "relative",
        zIndex: 1,
        maxWidth: 1100,
        margin: "0 auto",
        padding: "clamp(5rem, 10vw, 8rem) clamp(1.5rem, 8vw, 8rem)",
        borderTop: "1px solid rgba(200,139,90,0.1)",
      }}
    >
      <div className="product-map-intro">
        <Reveal>
          <div>
            <SectionLabel>Where To Begin</SectionLabel>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.25rem, 5vw, 3.9rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: 0,
                color: "#F3EFE7",
                margin: "1.2rem 0 0",
                maxWidth: 540,
              }}
            >
              A small set of systems with distinct jobs.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={90}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.86rem",
              lineHeight: 1.95,
              color: "#9CA3AF",
              fontWeight: 300,
              margin: "0",
              maxWidth: 440,
            }}
          >
            ArchLife works across live prototypes, operating engagements, and
            healthcare products. Each has a different maturity, audience, and
            next step.
          </p>
        </Reveal>
      </div>

      <div className="product-map-grid">
        {offerings.map((offering, index) => (
          <Reveal key={offering.title} delay={index * 80 + 100}>
            <article className="product-map-item">
              <div>
                <div className="product-map-status">{offering.status}</div>
                <div className="product-map-category">{offering.category}</div>
                <h3 className="product-map-title">{offering.title}</h3>
                <p className="product-map-description">{offering.description}</p>
              </div>
              <a
                href={offering.href}
                target={offering.external ? "_blank" : undefined}
                rel={offering.external ? "noopener noreferrer" : undefined}
                className="product-map-link"
              >
                {offering.action}
              </a>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={360}>
        <div className="product-map-routes">
          <span className="product-map-routes-label">Find your route</span>
          {routes.map((route) => (
            <a
              key={route.label}
              href={route.href}
              target={route.external ? "_blank" : undefined}
              rel={route.external ? "noopener noreferrer" : undefined}
            >
              {route.label}
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={430}>
        <div className="product-map-foundation">
          <span>Research foundation</span>
          <p>
            The Canon holds the concepts, field notes, and governance framework
            that inform the work.
          </p>
          <a href="/canon">Enter the Canon</a>
        </div>
      </Reveal>

      <style>{`
        .product-map-intro {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(260px, 0.9fr);
          gap: clamp(2.5rem, 8vw, 7rem);
          align-items: end;
        }
        .product-map-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-top: clamp(3.5rem, 7vw, 5.5rem);
          border-top: 1px solid rgba(200,139,90,0.14);
        }
        .product-map-item {
          min-height: 360px;
          padding: 2rem 2rem 2rem 0;
          border-right: 1px solid rgba(200,139,90,0.1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .product-map-grid > div:last-child .product-map-item {
          padding-right: 0;
          border-right: none;
        }
        .product-map-grid > div:not(:first-child) .product-map-item {
          padding-left: 2rem;
        }
        .product-map-status {
          display: inline-block;
          border: 1px solid rgba(200,139,90,0.28);
          padding: 0.3rem 0.5rem;
          color: #C88B5A;
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          font-weight: 400;
          letter-spacing: 0.14em;
          line-height: 1.2;
          text-transform: uppercase;
        }
        .product-map-category {
          margin-top: 1.25rem;
          color: rgba(156,163,175,0.72);
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.16em;
          line-height: 1.4;
          text-transform: uppercase;
        }
        .product-map-title {
          margin: 0.75rem 0 1rem;
          color: #F3EFE7;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.5rem, 2.8vw, 2rem);
          font-weight: 300;
          line-height: 1.15;
        }
        .product-map-description {
          margin: 0;
          color: rgba(156,163,175,0.78);
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 300;
          line-height: 1.85;
        }
        .product-map-link,
        .product-map-foundation a {
          color: rgba(243,239,231,0.72);
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.14em;
          line-height: 1.4;
          text-decoration: none;
          text-transform: uppercase;
        }
        .product-map-link {
          align-self: flex-start;
          margin-top: 2rem;
          border-bottom: 1px solid rgba(200,139,90,0.35);
          padding-bottom: 0.3rem;
        }
        .product-map-routes {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem 1.6rem;
          align-items: center;
          margin-top: 3.25rem;
          padding: 1.25rem 0;
          border-top: 1px solid rgba(156,163,175,0.1);
          border-bottom: 1px solid rgba(156,163,175,0.1);
        }
        .product-map-routes-label,
        .product-map-foundation span {
          color: #9B5E45;
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.16em;
          line-height: 1.4;
          text-transform: uppercase;
        }
        .product-map-routes a {
          color: rgba(156,163,175,0.72);
          font-family: 'Inter', sans-serif;
          font-size: 0.78rem;
          letter-spacing: 0.05em;
          line-height: 1.4;
          text-decoration: none;
        }
        .product-map-foundation {
          display: grid;
          grid-template-columns: 0.75fr 1.35fr auto;
          gap: 1.5rem;
          align-items: center;
          padding: 2rem 0 0;
        }
        .product-map-foundation p {
          margin: 0;
          color: rgba(156,163,175,0.6);
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 300;
          line-height: 1.75;
        }
        @media (max-width: 980px) {
          .product-map-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .product-map-grid > div:nth-child(2) .product-map-item {
            border-right: none;
            padding-right: 0;
          }
          .product-map-grid > div:nth-child(3) .product-map-item {
            padding-left: 0;
            border-top: 1px solid rgba(200,139,90,0.1);
          }
          .product-map-grid > div:nth-child(4) .product-map-item {
            border-top: 1px solid rgba(200,139,90,0.1);
          }
        }
        @media (max-width: 760px) {
          .product-map-intro,
          .product-map-foundation {
            grid-template-columns: 1fr;
          }
          .product-map-grid {
            grid-template-columns: 1fr;
            margin-top: 3rem;
          }
          .product-map-item,
          .product-map-grid > div:last-child .product-map-item,
          .product-map-grid > div:not(:first-child) .product-map-item,
          .product-map-grid > div:nth-child(2) .product-map-item,
          .product-map-grid > div:nth-child(3) .product-map-item,
          .product-map-grid > div:nth-child(4) .product-map-item {
            min-height: 0;
            padding: 2rem 0;
            border-right: none;
            border-bottom: 1px solid rgba(200,139,90,0.1);
          }
          .product-map-foundation {
            gap: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}
