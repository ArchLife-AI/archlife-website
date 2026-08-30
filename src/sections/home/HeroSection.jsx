import { Reveal } from "@/components/Reveal/Reveal";

export function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        zIndex: 1,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "8rem clamp(1.5rem, 6vw, 6rem) 6rem",
      }}
    >
      <Reveal>
        <div
          style={{
            fontFamily: "var(--sans)",
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--gold-deep)",
            marginBottom: "2.8rem",
          }}
        >
          ArchLife
        </div>
      </Reveal>

      <Reveal delay={60}>
        <h1
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2.6rem, 6vw, 5.2rem)",
            fontWeight: 300,
            lineHeight: 1.07,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            maxWidth: 820,
            marginBottom: "2.8rem",
          }}
        >
          Governance and operating systems
          <br className="hero-br" />
          <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
            for healthcare AI
          </em>
          <br className="hero-br" />
          and high-strain institutions.
        </h1>
      </Reveal>

      <Reveal delay={130}>
        <p
          style={{
            fontFamily: "var(--sans)",
            fontSize: "0.88rem",
            lineHeight: 1.95,
            color: "rgba(156,163,175,0.85)",
            maxWidth: 560,
            marginBottom: "1.6rem",
            fontWeight: 300,
          }}
        >
          ArchLife combines practical operating work with prototypes and
          research to help institutions recognise strain, make trade-offs
          visible, and govern AI with more care. Start with the prototype, the
          lab engagement, or the writing.
        </p>
      </Reveal>

      <Reveal delay={180}>
        <p
          style={{
            fontFamily: "var(--sans)",
            fontSize: "0.68rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(156,163,175,0.45)",
            marginBottom: "2.4rem",
          }}
        >
          Founded by Dr. Ishaan Wadhwa
        </p>
      </Reveal>

      <Reveal delay={200}>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href="/institutional-mirror"
            style={{
              fontFamily: "var(--sans)",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--ink)",
              border: "1px solid rgba(200,139,90,0.38)",
              padding: "0.9rem 2rem",
              textDecoration: "none",
              background: "rgba(200,139,90,0.07)",
              backdropFilter: "blur(8px)",
              transition: "all 0.4s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(200,139,90,0.14)";
              e.currentTarget.style.borderColor = "rgba(200,139,90,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(200,139,90,0.07)";
              e.currentTarget.style.borderColor = "rgba(200,139,90,0.38)";
            }}
          >
            Explore Institutional Mirror
          </a>
          <a
            href="/dental-labs"
            style={{
              fontFamily: "var(--sans)",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(156,163,175,0.6)",
              border: "1px solid rgba(156,163,175,0.12)",
              padding: "0.9rem 2rem",
              textDecoration: "none",
              transition: "all 0.4s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--ink)";
              e.currentTarget.style.borderColor = "rgba(156,163,175,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(156,163,175,0.6)";
              e.currentTarget.style.borderColor = "rgba(156,163,175,0.12)";
            }}
          >
            View the lab engagement
          </a>
          <a
            href="/articles"
            style={{
              fontFamily: "var(--sans)",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(156,163,175,0.6)",
              border: "1px solid rgba(156,163,175,0.12)",
              padding: "0.9rem 2rem",
              textDecoration: "none",
              transition: "all 0.4s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--ink)";
              e.currentTarget.style.borderColor = "rgba(156,163,175,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(156,163,175,0.6)";
              e.currentTarget.style.borderColor = "rgba(156,163,175,0.12)";
            }}
          >
            Read the writing
          </a>
        </div>
      </Reveal>

      {/* Vertical thread down */}
      <Reveal delay={320}>
        <div
          style={{
            marginTop: "5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            opacity: 0.22,
          }}
        >
          <div
            style={{
              width: 1,
              height: 56,
              background:
                "linear-gradient(to bottom, transparent, rgba(200,139,90,0.8))",
            }}
          />
        </div>
      </Reveal>
    </section>
  );
}
