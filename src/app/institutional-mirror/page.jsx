import { useEffect } from "react";

const MIRROR_URL = "https://sandbox-v2.archlife.in";

export const meta = () => [
  { title: "Institutional Mirror | ArchLife" },
  {
    name: "description",
    content:
      "Institutional Mirror redirects to the ArchLife sandbox project.",
  },
];

export default function InstitutionalMirrorRedirect() {
  useEffect(() => {
    window.location.replace(MIRROR_URL);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#0D0F12",
        color: "#F3EFE7",
        fontFamily: "'Inter', sans-serif",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <a
        href={MIRROR_URL}
        style={{
          color: "#C88B5A",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          textDecoration: "none",
        }}
      >
        Opening Institutional Mirror
      </a>
    </main>
  );
}
