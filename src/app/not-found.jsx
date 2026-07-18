import { PageShell } from "@/components/PageShell/PageShell";

export const meta = () => [
  { title: "Page Not Found | ArchLife" },
  { name: "description", content: "The requested ArchLife page could not be found." },
  { name: "robots", content: "noindex, nofollow" },
];

export default function NotFound() {
  return (
    <PageShell>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
          maxWidth: 800,
          margin: "0 auto",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <span
          style={{
            color: "#C88B5A",
            fontSize: "0.8rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          404
        </span>
        <h1
          style={{
            color: "#F3EFE7",
            fontSize: "2.5rem",
            fontWeight: 300,
            marginBottom: "1.5rem",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          This route does not exist.
        </h1>
        <p
          style={{
            color: "#9CA3AF",
            fontSize: "1rem",
            lineHeight: 1.6,
            marginBottom: "2.5rem",
            maxWidth: 500,
          }}
        >
          The page may have moved, or the address may be incomplete. Return to
          ArchLife or begin a conversation with the team.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.5rem",
            alignItems: "center",
          }}
        >
          <a
            href="/"
            style={{
              color: "#C88B5A",
              textDecoration: "none",
              fontSize: "0.9rem",
              borderBottom: "1px solid #C88B5A",
              paddingBottom: "0.2rem",
            }}
          >
            Return home
          </a>
          <a
            href="/contact"
            style={{
              color: "#9CA3AF",
              textDecoration: "none",
              fontSize: "0.9rem",
              borderBottom: "1px solid rgba(156, 163, 175, 0.4)",
              paddingBottom: "0.2rem",
            }}
          >
            Contact ArchLife
          </a>
        </div>
      </main>
    </PageShell>
  );
}
