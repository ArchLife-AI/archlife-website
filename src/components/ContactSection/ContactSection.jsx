import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "clamp(5rem,12vw,10rem) clamp(1.5rem,6vw,5rem)",
        maxWidth: 900,
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <Reveal>
        <SectionLabel>Contact</SectionLabel>
      </Reveal>
      <Reveal delay={100}>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 300,
            color: "#F3EFE7",
            lineHeight: 1.2,
            marginBottom: "1.5rem",
          }}
        >
          Begin the conversation
        </h2>
      </Reveal>
      <Reveal delay={180}>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.88rem",
            lineHeight: 1.9,
            color: "#9CA3AF",
            maxWidth: 480,
            margin: "0 auto 3rem",
            fontWeight: 300,
          }}
        >
          Choose a route for institutional partnerships, research collaboration,
          healthcare operations, or an early product conversation.
        </p>
      </Reveal>
      <Reveal delay={250}>
        <a
          href="/contact"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#F3EFE7",
            border: "1px solid rgba(200,139,90,0.4)",
            borderRadius: "2rem",
            padding: "1rem 2.8rem",
            textDecoration: "none",
            background: "rgba(200,139,90,0.06)",
            backdropFilter: "blur(8px)",
            display: "inline-block",
            transition: "all 0.5s ease",
            animation: "pulseGlow 5s ease-in-out infinite",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(200,139,90,0.14)";
            e.currentTarget.style.borderColor = "rgba(200,139,90,0.7)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(200,139,90,0.06)";
            e.currentTarget.style.borderColor = "rgba(200,139,90,0.4)";
          }}
        >
          Choose a conversation route
        </a>
      </Reveal>
    </section>
  );
}
