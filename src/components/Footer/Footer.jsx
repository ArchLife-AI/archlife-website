export function Footer() {
  return (
    <>
      <footer
        style={{
          position: "relative",
          zIndex: 1,
          borderTop: "1px solid rgba(156,163,175,0.08)",
          padding: "2.5rem clamp(1.5rem,6vw,5rem)",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1rem",
            letterSpacing: "0.16em",
            color: "rgba(156,163,175,0.5)",
            textTransform: "uppercase",
          }}
        >
          ArchLife
        </div>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            color: "rgba(156,163,175,0.3)",
          }}
        >
          Healthcare AI governance and operating systems · archlife.in
        </div>
        <a
          href="https://www.linkedin.com/in/dr-ishaan-wadhwa-98a017244"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.62rem",
            letterSpacing: "0.08em",
            color: "rgba(156,163,175,0.36)",
            textTransform: "uppercase",
            textDecoration: "none",
            borderBottom: "1px solid rgba(156,163,175,0.16)",
            paddingBottom: 2,
            transition: "color 220ms ease, border-color 220ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "rgba(243,239,231,0.72)";
            e.currentTarget.style.borderBottomColor = "rgba(200,139,90,0.42)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "rgba(156,163,175,0.36)";
            e.currentTarget.style.borderBottomColor = "rgba(156,163,175,0.16)";
          }}
        >
          Dr. Ishaan Wadhwa
        </a>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.62rem",
            letterSpacing: "0.1em",
            color: "rgba(156,163,175,0.2)",
            textTransform: "uppercase",
          }}
        >
          © 2026 SolaEiMara ArchLife Private Limited
        </div>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.55rem",
            letterSpacing: "0.08em",
            color: "rgba(156,163,175,0.2)",
            textTransform: "uppercase",
          }}
        >
          CIN: U62020DC2026PTC472434
        </div>
      </footer>
    </>
  );
}
