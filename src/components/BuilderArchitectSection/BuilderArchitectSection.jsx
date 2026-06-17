import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

// Upload the painting via the app and replace this URL
const BUILDER_PAINTING_URL = "https://dtvoeevhaseb5.cloudfront.net/user-uploads/b0bcbb41-787e-4371-9d7d-88ad7ea72424.png";

const PAINTING_READY = BUILDER_PAINTING_URL !== "PASTE_CLOUDFRONT_URL_HERE";

export function BuilderArchitectSection() {
  const builderAttributes = [
    "The ward. The operations floor.",
    "Faith and fear as twin engines.",
    "Naive in the way only earnestness can be.",
    "Hands that know things words do not.",
    "The grind. The earned ground.",
  ];

  const architectAttributes = [
    "Systems beneath systems.",
    "Virtue as navigation — not principle, compass.",
    "Wisdom forged from collapse.",
    "The future as inheritance.",
    "The long view. The livable structure.",
  ];

  return (
    <section
      id="builder"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "clamp(6rem,14vw,12rem) clamp(1.5rem,8vw,8rem)",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <Reveal>
        <SectionLabel>The Builder &amp; The Architect</SectionLabel>
      </Reveal>

      {/* Central immersive statement */}
      <Reveal delay={80}>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)",
            fontWeight: 300,
            lineHeight: 1.12,
            color: "#F3EFE7",
            letterSpacing: "-0.01em",
            maxWidth: 820,
            marginBottom: "5rem",
          }}
        >
          Ideas without execution remain abstraction. Execution without
          reflection becomes{" "}
          <em style={{ color: "#C88B5A", fontStyle: "italic" }}>
            destabilization.
          </em>
        </p>
      </Reveal>

      {/* Painting — clean, no frame */}
      {PAINTING_READY && (
        <Reveal delay={80}>
          <div
            style={{
              margin: "0 auto 6rem",
              maxWidth: "min(860px, 94%)",
              filter: "drop-shadow(0 24px 64px rgba(0,0,0,0.85))",
            }}
          >
            <img
              src={BUILDER_PAINTING_URL}
              alt="The Builder and The Architect"
              style={{
                width: "100%",
                display: "block",
                animation: "breathe 13s ease-in-out infinite",
              }}
            />
          </div>
        </Reveal>
      )}

      {/* Editorial split */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          borderTop: "1px solid rgba(200,139,90,0.12)",
          paddingTop: "5rem",
        }}
        className="builder-split"
      >
        {/* The Builder */}
        <Reveal delay={PAINTING_READY ? 0 : 120}>
          <div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.62rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#9B5E45",
                marginBottom: "1.5rem",
              }}
            >
              The Builder
            </div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)",
                fontWeight: 300,
                lineHeight: 1.55,
                color: "#F3EFE7",
                marginBottom: "2.5rem",
                fontStyle: "italic",
              }}
            >
              The one who shows up before the language exists for what
              they&apos;re doing.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
              }}
            >
              {builderAttributes.map((t) => (
                <div
                  key={t}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.78rem",
                    color: "rgba(156,163,175,0.65)",
                    fontWeight: 300,
                    letterSpacing: "0.03em",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    lineHeight: 1.6,
                  }}
                >
                  <div
                    style={{
                      width: 20,
                      height: 0.5,
                      background: "rgba(155,94,69,0.5)",
                      flexShrink: 0,
                      marginTop: "0.6em",
                    }}
                  />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* The Architect */}
        <Reveal delay={PAINTING_READY ? 80 : 200}>
          <div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.62rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(156,163,175,0.5)",
                marginBottom: "1.5rem",
              }}
            >
              The Architect
            </div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)",
                fontWeight: 300,
                lineHeight: 1.55,
                color: "#F3EFE7",
                marginBottom: "2.5rem",
              }}
            >
              The one who survives the ascent and builds from what survives it.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
              }}
            >
              {architectAttributes.map((t) => (
                <div
                  key={t}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.78rem",
                    color: "rgba(156,163,175,0.65)",
                    fontWeight: 300,
                    letterSpacing: "0.03em",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    lineHeight: 1.6,
                  }}
                >
                  <div
                    style={{
                      width: 20,
                      height: 0.5,
                      background: "rgba(156,163,175,0.3)",
                      flexShrink: 0,
                      marginTop: "0.6em",
                    }}
                  />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Book feature */}
      <Reveal delay={300}>
        <div
          style={{
            marginTop: "8rem",
            display: "flex",
            gap: "4rem",
            alignItems: "center",
            borderTop: "1px solid rgba(200,139,90,0.08)",
            paddingTop: "5rem",
          }}
          className="book-feature"
        >
          <img
            src="https://dtvoeevhaseb5.cloudfront.net/user-uploads/4c9e5e73-63c8-4ab9-b7ee-80d0d73f6505.jpg"
            alt="The Builder and The Architect"
            style={{
              width: "min(180px, 38vw)",
              aspectRatio: "2/3",
              objectFit: "cover",
              flexShrink: 0,
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(200,139,90,0.07)",
              transition: "transform 0.6s ease, box-shadow 0.6s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-5px) rotate(-0.5deg)";
              e.currentTarget.style.boxShadow =
                "0 30px 80px rgba(0,0,0,0.6), 0 0 40px rgba(200,139,90,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow =
                "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(200,139,90,0.07)";
            }}
          />
          <div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#9B5E45",
                marginBottom: "1rem",
              }}
            >
              The Testament
            </div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontWeight: 300,
                color: "#F3EFE7",
                lineHeight: 1.25,
                marginBottom: "0.5rem",
              }}
            >
              The Builder &amp; The Architect
            </div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1rem",
                fontStyle: "italic",
                color: "#9CA3AF",
                marginBottom: "0.8rem",
              }}
            >
              The Testament to Living Therapy
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(156,163,175,0.4)",
              }}
            >
              Dr. Ishaan Wadhwa
            </div>
          </div>
        </div>
      </Reveal>

      <style>{`
        @media (max-width: 640px) {
          .builder-split {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
          .book-feature {
            flex-direction: column !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
