export function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        zIndex: 1,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "8rem 2rem 6rem",
      }}
    >
      <div
        style={{
          animation: "fadeSlowIn 2s ease forwards",
          maxWidth: 900,
        }}
      >
        {/* Logo with Grand Radiant glow */}
        <div
          style={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "2.8rem",
          }}
        >
          {/* Radiant halo layers */}
          <div
            style={{
              position: "absolute",
              width: 140,
              height: 140,
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse, rgba(200,139,90,0.12) 0%, transparent 70%)",
              animation: "breathe 5s ease-in-out infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 100,
              height: 100,
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse, rgba(200,139,90,0.18) 0%, transparent 65%)",
              animation: "breathe 7s ease-in-out infinite 1s",
            }}
          />
          <img
            src="/logo.png"
            alt="ArchLife"
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              objectFit: "cover",
              position: "relative",
              zIndex: 1,
              animation: "breathe 6s ease-in-out infinite",
              boxShadow:
                "0 0 32px rgba(200,139,90,0.2), 0 0 80px rgba(200,139,90,0.08)",
            }}
          />
        </div>

        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#9B5E45",
            marginBottom: "2.5rem",
            animation: "fadeSlowIn 2.5s ease forwards",
          }}
        >
          Systems Architecture Initiative
        </div>

        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: "0.01em",
            color: "#F3EFE7",
            margin: "0 0 1.8rem",
            animation: "breathe 6s ease-in-out infinite",
          }}
        >
          The Institutional
          <br />
          <em style={{ fontStyle: "italic", color: "#C88B5A" }}>Mirror</em>
        </h1>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
            lineHeight: 1.85,
            color: "#9CA3AF",
            maxWidth: 580,
            margin: "0 auto 3.5rem",
            fontWeight: 300,
            letterSpacing: "0.02em",
          }}
        >
          ArchLife explores operational intelligence,
          <br />
          reflexive systems, and humane infrastructure
          <br />
          across healthcare, institutions,
          <br />
          and AI-era coordination systems.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1.2rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/healthcare"
            className="arch-btn-primary"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#F3EFE7",
              border: "1px solid rgba(200,139,90,0.4)",
              borderRadius: "2rem",
              padding: "0.85rem 2.2rem",
              textDecoration: "none",
              background: "rgba(200,139,90,0.06)",
              backdropFilter: "blur(8px)",
              transition: "all 0.5s ease",
              animation: "pulseGlow 4s ease-in-out infinite",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(200,139,90,0.14)";
              e.currentTarget.style.borderColor = "rgba(200,139,90,0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(200,139,90,0.06)";
              e.currentTarget.style.borderColor = "rgba(200,139,90,0.4)";
            }}
          >
            Explore Healthcare
          </a>
          <a
            href="https://mirror.archlife.in"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#9CA3AF",
              border: "1px solid rgba(156,163,175,0.18)",
              borderRadius: "2rem",
              padding: "0.85rem 2.2rem",
              textDecoration: "none",
              background: "rgba(156,163,175,0.04)",
              backdropFilter: "blur(8px)",
              transition: "all 0.5s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#F3EFE7";
              e.currentTarget.style.borderColor = "rgba(156,163,175,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#9CA3AF";
              e.currentTarget.style.borderColor = "rgba(156,163,175,0.18)";
            }}
          >
            Open the Mirror
          </a>
        </div>

      </div>

      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          animation: "driftUp 4s ease-in-out infinite",
        }}
      >
        <div
          style={{
            width: 1,
            height: 40,
            background:
              "linear-gradient(to bottom, transparent, rgba(156,163,175,0.4))",
          }}
        />
        <div
          style={{
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: "rgba(200,139,90,0.5)",
          }}
        />
      </div>
    </section>
  );
}
