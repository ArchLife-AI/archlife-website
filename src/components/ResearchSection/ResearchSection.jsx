import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";
import { researchArticles } from "@/app/data/research";

export function ResearchSection() {
  return (
    <section
      id="research"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "clamp(6rem,14vw,12rem) clamp(1.5rem,8vw,8rem)",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <style>{`
        .research-row {
          display: grid;
          grid-template-columns: minmax(7rem, 12.5rem) minmax(0, 1fr) auto;
          gap: 3rem;
          padding: 3rem 0;
          border-top: 1px solid rgba(200,139,90,0.08);
          transition: border-color 0.5s ease;
          align-items: start;
          text-decoration: none;
          color: inherit;
        }
        .research-row:hover {
          border-top-color: rgba(200,139,90,0.3);
        }
        .research-row:hover .article-title {
          color: #C88B5A;
        }
        .research-readtime {
          text-align: right;
        }
        @media (max-width: 720px) {
          .research-row {
            grid-template-columns: 1fr;
            gap: 0.85rem;
            padding: 2.2rem 0;
          }
          .research-readtime {
            text-align: left;
          }
        }
      `}</style>
      <Reveal>
        <SectionLabel>Research & Thinking</SectionLabel>
      </Reveal>
      <Reveal delay={80}>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)",
            fontWeight: 300,
            color: "#F3EFE7",
            marginBottom: "5rem",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          Notes from
          <br />
          <em style={{ color: "#C88B5A", fontStyle: "italic" }}>
            inside the system
          </em>
        </h2>
      </Reveal>

      <div>
        {researchArticles.map((article, i) => (
          <Reveal key={article.id} delay={i * 70}>
            <a className="research-row" href={article.href}>
              <div style={{ paddingTop: "0.2rem" }}>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.62rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#9B5E45",
                    marginBottom: "1rem",
                  }}
                >
                  {article.category}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.35rem",
                  }}
                >
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.58rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "rgba(156,163,175,0.35)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div
                  className="article-title"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                    fontWeight: 300,
                    color: "#F3EFE7",
                    lineHeight: 1.3,
                    letterSpacing: "0.01em",
                    marginBottom: "0.9rem",
                    transition: "color 0.4s ease",
                  }}
                >
                  {article.title}
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.83rem",
                    lineHeight: 1.85,
                    color: "#9CA3AF",
                    fontWeight: 300,
                    margin: 0,
                  }}
                >
                  {article.excerpt}
                </p>
              </div>

              <div
                className="research-readtime"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.65rem",
                  color: "rgba(156,163,175,0.3)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  paddingTop: "0.25rem",
                }}
              >
                {article.readTime}
              </div>
            </a>
          </Reveal>
        ))}
        <div style={{ borderTop: "1px solid rgba(200,139,90,0.08)" }} />
      </div>
    </section>
  );
}
