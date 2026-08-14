import { Reveal } from "@/components/Reveal/Reveal";

export function FinalQuote() {
  return (
    <section
      style={{
        position: "relative",
        zIndex: 1,
        padding: "clamp(8rem,16vw,14rem) clamp(1.5rem,8vw,8rem)",
        textAlign: "center",
        maxWidth: 720,
        margin: "0 auto",
      }}
    >
      <Reveal>
        <div
          style={{
            width: 1,
            height: 48,
            background:
              "linear-gradient(to bottom, transparent, rgba(200,139,90,0.25))",
            margin: "0 auto 4rem",
          }}
        />
      </Reveal>

      <Reveal delay={80}>
        <blockquote
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(1.3rem, 3vw, 1.9rem)",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1.75,
            color: "rgba(243,239,231,0.55)",
            letterSpacing: "0.01em",
            margin: 0,
            padding: 0,
            border: "none",
          }}
        >
          The purpose of reflection is not perfection.
          <br />
          <br />
          It is continuity.
          <br />
          <br />
          <span style={{ color: "rgba(243,239,231,0.35)" }}>
            The ability for people, systems, and institutions to remain aware
            enough of themselves to adapt before collapse becomes
            irreversible.
          </span>
        </blockquote>
      </Reveal>

      <Reveal delay={160}>
        <div
          style={{
            width: 1,
            height: 48,
            background:
              "linear-gradient(to bottom, rgba(200,139,90,0.25), transparent)",
            margin: "4rem auto 0",
          }}
        />
      </Reveal>
    </section>
  );
}
