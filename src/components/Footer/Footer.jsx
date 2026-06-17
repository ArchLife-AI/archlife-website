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
          Systems Architecture Initiative · archlife.in
        </div>
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
          CIN: pending
        </div>
      </footer>
    </>
  );
}
