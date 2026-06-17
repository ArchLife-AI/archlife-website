import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export function NHHRSection() {
  const [nhhrPhase, setNhhrPhase] = useState(0);
  const nhhrRef = useRef(null);
  const firedRef = useRef(false);

  useEffect(() => {
    const el = nhhrRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !firedRef.current) {
          firedRef.current = true;
          let phase = 0;
          const interval = setInterval(() => {
            phase += 1;
            setNhhrPhase(phase);
            if (phase >= 4) clearInterval(interval);
          }, 1300);
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const phases = [
    {
      word: "Notice",
      subtext:
        "To notice is to perceive what systems obscure.\nPatterns. Signals. Strain. Human cost.",
      color: "#9B5E45",
      number: "I",
    },
    {
      word: "Hold",
      subtext:
        "To hold is to resist impulsive optimization.\nReflection requires containment.\nMeaning requires time. Systems require rhythm.",
      color: "#C88B5A",
      number: "II",
    },
    {
      word: "Heal",
      subtext:
        "Healing is not correction.\nIt is recursive integration — of memory,\nawareness, relationship, and structure.",
      color: "#B8A070",
      number: "III",
    },
    {
      word: "Release",
      subtext:
        "Release is not abandonment.\nIt is transformation without collapse.\nMovement without fragmentation.",
      color: "#9CA3AF",
      number: "IV",
    },
  ];

  return (
    <section
      id="nhhr"
      ref={nhhrRef}
      style={{
        position: "relative",
        zIndex: 1,
        padding: "clamp(6rem,14vw,12rem) clamp(1.5rem,8vw,8rem)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel>Humane Recursion</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)",
              fontWeight: 300,
              color: "#F3EFE7",
              marginBottom: "6rem",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            A heuristic for
            <br />
            <em style={{ color: "#C88B5A", fontStyle: "italic" }}>
              humane systems
            </em>
          </h2>
        </Reveal>

        {/* Full-width stacked phases — no grid boxes */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {phases.map((phase, i) => {
            const revealed = nhhrPhase > i;
            return (
              <div
                key={phase.word}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr 1.6fr",
                  gap: "3rem",
                  padding: "4rem 0",
                  borderTop: `1px solid ${revealed ? "rgba(200,139,90,0.12)" : "rgba(156,163,175,0.05)"}`,
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 1.4s ease ${i * 120}ms, transform 1.4s ease ${i * 120}ms, border-color 0.6s ease`,
                  alignItems: "start",
                }}
              >
                {/* Roman numeral */}
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.8rem",
                    letterSpacing: "0.2em",
                    color: "rgba(156,163,175,0.3)",
                    paddingTop: "0.5rem",
                  }}
                >
                  {phase.number}
                </div>

                {/* Word */}
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    fontWeight: 300,
                    color: phase.color,
                    lineHeight: 1,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {phase.word}
                </div>

                {/* Text */}
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: 2,
                    color: "#9CA3AF",
                    margin: 0,
                    fontWeight: 300,
                    whiteSpace: "pre-line",
                    paddingTop: "0.5rem",
                  }}
                >
                  {phase.subtext}
                </p>
              </div>
            );
          })}

          {/* Final line */}
          <div
            style={{
              borderTop: "1px solid rgba(200,139,90,0.15)",
              paddingTop: "5rem",
              marginTop: "1rem",
              opacity: nhhrPhase >= 4 ? 1 : 0,
              transition: "opacity 1.8s ease 0.5s",
            }}
          >
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.3rem, 2.8vw, 2rem)",
                fontWeight: 300,
                color: "#F3EFE7",
                letterSpacing: "0.06em",
                marginBottom: "1.2rem",
              }}
            >
              Notice &rarr; Hold &rarr; Heal &rarr; Release
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.78rem",
                color: "rgba(156,163,175,0.55)",
                lineHeight: 1.8,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 300,
                maxWidth: 520,
              }}
            >
              A heuristic for humane recursion, reflexive systems, and
              emotionally intelligent infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
