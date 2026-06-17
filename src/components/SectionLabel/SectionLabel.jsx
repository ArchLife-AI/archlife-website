export function SectionLabel({ children }) {
  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.68rem",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "#9B5E45",
        marginBottom: "1.2rem",
      }}
    >
      {children}
    </div>
  );
}
