export function FooterNavRow() {
  return (
    <section
      style={{
        position: "relative",
        zIndex: 1,
        padding: "3rem clamp(1.5rem,8vw,8rem)",
        borderTop: "1px solid rgba(200,139,90,0.06)",
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center",
      }}
    >
      {[
        { label: "Canon", href: "/canon" },
        { label: "Institutional Mirror", href: "https://mirror.archlife.in", external: true },
        { label: "Dental Labs", href: "/dental-labs" },
        { label: "MedEvolv", href: "https://medevolv.in", external: true },
        { label: "Contact", href: "/contact" },
      ].map((l) => (
        <a
          key={l.label}
          href={l.href}
          target={l.external ? "_blank" : undefined}
          rel={l.external ? "noopener noreferrer" : undefined}
          style={{
            fontFamily: "var(--sans)",
            fontSize: "0.62rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(156,163,175,0.3)",
            textDecoration: "none",
            transition: "color 0.35s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "rgba(156,163,175,0.7)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "rgba(156,163,175,0.3)")
          }
        >
          {l.label}
        </a>
      ))}
    </section>
  );
}
