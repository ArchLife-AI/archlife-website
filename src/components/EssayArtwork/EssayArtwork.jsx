import { Reveal } from "@/components/Reveal/Reveal";

// Shared centerpiece artwork for canon essays.
// Sits just under the hero; one relevant public-domain painting per essay.
export function EssayArtwork({ src, caption }) {
  return (
    <Reveal>
      <figure
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1000,
          margin: "0 auto",
          padding: "0 clamp(1rem, 4vw, 2.5rem) clamp(2.4rem, 5vw, 3.5rem)",
        }}
      >
        <img
          src={src}
          alt={caption}
          loading="lazy"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            borderRadius: 2,
            boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
            opacity: 0.95,
          }}
        />
        <figcaption
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.72rem",
            letterSpacing: "0.1em",
            color: "rgba(156,163,175,0.5)",
            marginTop: "1rem",
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          {caption}
        </figcaption>
      </figure>
    </Reveal>
  );
}
