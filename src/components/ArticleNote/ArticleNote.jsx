import { PageShell } from "@/components/PageShell/PageShell";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export function P({ children, muted, lead }) {
  return (
    <p
      style={{
        fontFamily: lead
          ? "'Cormorant Garamond', serif"
          : "'Inter', sans-serif",
        fontSize: lead ? "1.18rem" : "0.95rem",
        fontStyle: lead ? "italic" : "normal",
        fontWeight: 300,
        lineHeight: lead ? 1.7 : 1.92,
        color: muted ? "rgba(156,163,175,0.7)" : "rgba(243,239,231,0.96)",
        margin: "0 0 1.4rem",
        maxWidth: 680,
      }}
    >
      {children}
    </p>
  );
}

export function Name({ children }) {
  return (
    <strong style={{ fontWeight: 500, color: "#C88B5A" }}>{children}</strong>
  );
}

export function Steps({ items }) {
  return (
    <ol
      style={{
        margin: "0 0 1.8rem",
        padding: 0,
        maxWidth: 680,
        listStyle: "none",
        counterReset: "note",
      }}
    >
      {items.map((item) => (
        <li
          key={item.title}
          style={{
            counterIncrement: "note",
            marginBottom: "1.4rem",
            paddingLeft: "2.2rem",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: 0,
              top: "0.15rem",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.62rem",
              letterSpacing: "0.14em",
              color: "#9B5E45",
            }}
          >
            {item.num}
          </span>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.25rem",
              fontWeight: 300,
              color: "#C88B5A",
              marginBottom: "0.45rem",
              lineHeight: 1.3,
            }}
          >
            {item.title}
          </div>
          <P>{item.body}</P>
        </li>
      ))}
    </ol>
  );
}

export function ArticleNote({
  title,
  category,
  dek,
  readTime,
  children,
}) {
  return (
    <PageShell>
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding:
            "clamp(7rem, 14vw, 11rem) clamp(1.5rem, 6vw, 5rem) clamp(2.5rem, 5vw, 4rem)",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        <Reveal>
          <SectionLabel>
            {category} · Note · {readTime}
          </SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.4rem, 5.8vw, 4.6rem)",
              fontWeight: 300,
              color: "#F3EFE7",
              lineHeight: 1.08,
              letterSpacing: "-0.012em",
              margin: "1.4rem 0 1rem",
              maxWidth: 860,
            }}
          >
            {title}
          </h1>
        </Reveal>
        {dek && (
          <Reveal delay={140}>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.05rem, 2vw, 1.35rem)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "rgba(243,239,231,0.62)",
                lineHeight: 1.5,
                letterSpacing: "0.005em",
                maxWidth: 640,
                margin: "0 0 1.2rem",
              }}
            >
              {dek}
            </p>
          </Reveal>
        )}
      </section>

      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: "0 clamp(1.5rem, 6vw, 5rem) clamp(3.6rem, 7vw, 5.4rem)",
          maxWidth: 820,
          margin: "0 auto",
        }}
      >
        {children}
      </section>

      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 6vw, 5rem)",
          maxWidth: 820,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <Reveal>
          <div
            style={{
              width: 1,
              height: 48,
              background:
                "linear-gradient(to bottom, transparent, rgba(200,139,90,0.25))",
              margin: "0 auto 2.4rem",
            }}
          />
        </Reveal>
        <Reveal delay={80}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.72rem",
              lineHeight: 1.9,
              color: "rgba(156,163,175,0.5)",
              fontWeight: 300,
              maxWidth: 520,
              margin: "0 auto 2.2rem",
            }}
          >
            A public-philosophy note by Dr. Ishaan Wadhwa. The longer Deep Canon
            essays live on the Canon.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <a
            href="/articles"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(156,163,175,0.5)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(200,139,90,0.3)",
              paddingBottom: 3,
              marginRight: "1.6rem",
              transition: "color 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#C88B5A";
              e.currentTarget.style.borderBottomColor = "rgba(200,139,90,0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(156,163,175,0.5)";
              e.currentTarget.style.borderBottomColor = "rgba(200,139,90,0.3)";
            }}
          >
            ← Articles
          </a>
          <a
            href="/canon"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(156,163,175,0.5)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(200,139,90,0.3)",
              paddingBottom: 3,
              transition: "color 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#C88B5A";
              e.currentTarget.style.borderBottomColor = "rgba(200,139,90,0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(156,163,175,0.5)";
              e.currentTarget.style.borderBottomColor = "rgba(200,139,90,0.3)";
            }}
          >
            Canon →
          </a>
        </Reveal>
      </section>
    </PageShell>
  );
}
