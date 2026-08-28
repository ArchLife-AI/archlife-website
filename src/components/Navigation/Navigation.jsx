import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const links = [
    { label: "Projects", href: "/#work" },
    { label: "Dental Labs", href: "/dental-labs" },
    { label: "Healthcare", href: "/healthcare" },
    { label: "The Sensorium", href: "/sensorium" },
    { label: "MANthan", href: "/manthan" },
    { label: "Articles", href: "/articles" },
    { label: "Canon", href: "/canon" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "1.2rem 2.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(13,15,18,0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(200,139,90,0.07)" : "none",
        transition: "background 0.9s ease, border-bottom 0.9s ease",
      }}
    >
      {/* Logo */}
      <a
        href="/"
        aria-label="ArchLife home"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          padding: 0,
        }}
      >
        <img
          src="/logo.webp"
          alt="ArchLife"
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 0 14px rgba(200,139,90,0.22)",
          }}
        />
        <span
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "1.15rem",
            letterSpacing: "0.2em",
            color: "#F3EFE7",
            fontWeight: 400,
            textTransform: "uppercase",
          }}
        >
          ArchLife
        </span>
      </a>

      {/* Desktop links */}
      {!isMobile && (
        <div style={{ display: "flex", alignItems: "center", gap: "clamp(1rem, 2.4vw, 2.5rem)" }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#9CA3AF",
                fontSize: "0.72rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                padding: "4px 0",
                transition: "color 0.35s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F3EFE7")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
            >
              {l.label}{l.external && (<span aria-hidden="true" style={{ marginLeft: "0.3em", fontSize: "0.8em", color: "#C88B5A" }}>↗</span>)}
            </a>
          ))}
        </div>
      )}

      {/* Mobile hamburger */}
      {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "6px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <div
            style={{
              width: 22,
              height: 1,
              background: menuOpen ? "rgba(200,139,90,0.7)" : "#9CA3AF",
              transition: "all 0.3s",
              transform: menuOpen
                ? "rotate(45deg) translate(4px, 4px)"
                : "none",
            }}
          />
          <div
            style={{
              width: 16,
              height: 1,
              background: "#9CA3AF",
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.3s",
            }}
          />
          <div
            style={{
              width: 22,
              height: 1,
              background: menuOpen ? "rgba(200,139,90,0.7)" : "#9CA3AF",
              transition: "all 0.3s",
              transform: menuOpen
                ? "rotate(-45deg) translate(4px, -4px)"
                : "none",
            }}
          />
        </button>
      )}

      {/* Mobile menu */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(13,15,18,0.97)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderBottom: "1px solid rgba(200,139,90,0.08)",
            padding: "2rem 2.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.4rem",
          }}
          id="mobile-navigation"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              onClick={() => setMenuOpen(false)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#9CA3AF",
                fontSize: "0.8rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                textAlign: "left",
                padding: 0,
              }}
            >
              {l.label}{l.external && (<span aria-hidden="true" style={{ marginLeft: "0.3em", fontSize: "0.8em", color: "#C88B5A" }}>↗</span>)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
