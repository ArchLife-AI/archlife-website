import { PageShell } from "@/components/PageShell/PageShell";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionLabel } from "@/components/SectionLabel/SectionLabel";

export function ProjectProfile({ project }) {
  return (
    <PageShell>
      <main>
        <section className="project-profile-section project-profile-hero">
          <div className="project-profile-hero-copy">
            <Reveal>
              <SectionLabel>{project.label}</SectionLabel>
            </Reveal>
            <Reveal delay={55}>
              <div className="project-profile-status">{project.status}</div>
            </Reveal>
            <Reveal delay={105}>
              <h1>
                {project.heroBefore}
                <br />
                <em>{project.heroEmphasis}</em>
              </h1>
            </Reveal>
            <Reveal delay={155}>
              <p className="project-profile-lead">{project.lead}</p>
            </Reveal>
            <Reveal delay={210}>
              <div className="project-profile-actions">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-profile-primary-action"
                >
                  {project.liveAction}
                </a>
                <a href="/contact" className="project-profile-secondary-action">
                  {project.contactAction}
                </a>
              </div>
            </Reveal>
            {project.note && (
              <Reveal delay={265}>
                <p className="project-profile-note">{project.note}</p>
              </Reveal>
            )}
          </div>
        </section>

        <section className="project-profile-section project-profile-intro">
          <Reveal>
            <SectionLabel>What It Explores</SectionLabel>
          </Reveal>
          <div className="project-profile-intro-grid">
            <Reveal delay={75}>
              <h2>
                {project.introBefore}
                <em>{project.introEmphasis}</em>
              </h2>
            </Reveal>
            <Reveal delay={130}>
              <p>{project.intro}</p>
            </Reveal>
          </div>
        </section>

        <section className="project-profile-section">
          <Reveal>
            <SectionLabel>{project.featuresLabel || "Current Experience"}</SectionLabel>
          </Reveal>
          <div className="project-profile-features">
            {project.features.map((feature, index) => (
              <Reveal key={feature.title} delay={90 + index * 75}>
                <article className="project-profile-feature">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h2>{feature.title}</h2>
                  <p>{feature.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {project.boundaries && (
          <section className="project-profile-section project-profile-boundaries">
            <Reveal>
              <SectionLabel>Boundaries</SectionLabel>
            </Reveal>
            <div className="project-profile-boundaries-grid">
              <Reveal delay={70}>
                <h2>
                  {project.boundaries.before}
                  <em>{project.boundaries.emphasis}</em>
                </h2>
              </Reveal>
              <Reveal delay={130}>
                <div>
                  {project.boundaries.items.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        )}

        <section className="project-profile-section project-profile-next-step">
          <Reveal>
            <SectionLabel>Next Step</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <div className="project-profile-next-step-inner">
              <h2>{project.nextTitle}</h2>
              <p>{project.nextBody}</p>
              <div className="project-profile-actions">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-profile-primary-action"
                >
                  {project.nextLiveAction}
                </a>
                <a href="/contact" className="project-profile-secondary-action">
                  Contact ArchLife
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <style>{`
        .project-profile-section { position: relative; z-index: 1; max-width: 1120px; margin: 0 auto; padding: clamp(5rem, 11vw, 9rem) clamp(1.4rem, 6vw, 5rem); }
        .project-profile-hero { align-items: center; display: flex; min-height: 88vh; padding-top: 9rem; }
        .project-profile-hero-copy { max-width: 930px; }
        .project-profile-status { border: 1px solid rgba(200,139,90,0.3); color: #C88B5A; display: inline-block; font-family: 'Inter', sans-serif; font-size: 0.58rem; letter-spacing: 0.16em; line-height: 1.2; margin-bottom: 1.45rem; padding: 0.35rem 0.55rem; text-transform: uppercase; }
        .project-profile-hero h1, .project-profile-intro h2, .project-profile-boundaries h2, .project-profile-next-step h2 { color: #F3EFE7; font-family: 'Cormorant Garamond', serif; font-weight: 300; letter-spacing: 0; }
        .project-profile-hero h1 { font-size: clamp(3rem, 7.5vw, 6.3rem); line-height: 1.02; margin: 0 0 2rem; }
        .project-profile-hero em, .project-profile-intro em, .project-profile-boundaries em { color: #C88B5A; font-style: italic; }
        .project-profile-lead, .project-profile-intro p, .project-profile-feature p, .project-profile-boundaries p, .project-profile-next-step p { color: #9CA3AF; font-family: 'Inter', sans-serif; font-size: 0.9rem; font-weight: 300; line-height: 1.9; }
        .project-profile-lead { font-size: clamp(1rem, 2vw, 1.16rem); margin: 0 0 2.5rem; max-width: 690px; }
        .project-profile-actions { align-items: center; display: flex; flex-wrap: wrap; gap: 1rem; }
        .project-profile-primary-action { background: rgba(200,139,90,0.08); border: 1px solid rgba(200,139,90,0.45); color: #F3EFE7; font-family: 'Inter', sans-serif; font-size: 0.7rem; letter-spacing: 0.14em; line-height: 1.2; padding: 0.95rem 1.7rem; text-decoration: none; text-transform: uppercase; }
        .project-profile-secondary-action { color: rgba(156,163,175,0.82); font-family: 'Inter', sans-serif; font-size: 0.68rem; letter-spacing: 0.12em; line-height: 1.5; padding: 0.7rem 0; text-decoration: none; text-transform: uppercase; }
        .project-profile-note { color: rgba(156,163,175,0.5); font-family: 'Inter', sans-serif; font-size: 0.64rem; letter-spacing: 0.08em; line-height: 1.7; margin: 1.8rem 0 0; text-transform: uppercase; }
        .project-profile-intro, .project-profile-boundaries { border-top: 1px solid rgba(200,139,90,0.08); }
        .project-profile-intro-grid, .project-profile-boundaries-grid { align-items: start; display: grid; gap: clamp(3rem, 9vw, 8rem); grid-template-columns: minmax(0, 1fr) minmax(280px, 0.85fr); margin-top: 2rem; }
        .project-profile-intro h2, .project-profile-boundaries h2 { font-size: clamp(2.35rem, 5vw, 4.25rem); line-height: 1.08; margin: 0; }
        .project-profile-intro p { margin: 0; }
        .project-profile-features { border-top: 1px solid rgba(200,139,90,0.12); display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); margin-top: 2.5rem; }
        .project-profile-feature { border-right: 1px solid rgba(200,139,90,0.08); min-height: 250px; padding: 2rem 2rem 2rem 0; }
        .project-profile-features > div:not(:first-child) .project-profile-feature { padding-left: 2rem; }
        .project-profile-features > div:last-child .project-profile-feature { border-right: none; padding-right: 0; }
        .project-profile-feature span { color: #9B5E45; font-family: 'Inter', sans-serif; font-size: 0.58rem; letter-spacing: 0.16em; line-height: 1.3; }
        .project-profile-feature h2 { color: #F3EFE7; font-family: 'Cormorant Garamond', serif; font-size: clamp(1.45rem, 2.5vw, 1.85rem); font-weight: 300; letter-spacing: 0; line-height: 1.2; margin: 1.15rem 0 0.8rem; }
        .project-profile-feature p { font-size: 0.8rem; margin: 0; }
        .project-profile-boundaries p { border-top: 1px solid rgba(200,139,90,0.1); color: rgba(243,239,231,0.72); font-size: 0.84rem; margin: 0; padding: 1.1rem 0; }
        .project-profile-next-step { padding-bottom: clamp(7rem, 13vw, 11rem); }
        .project-profile-next-step-inner { border-bottom: 1px solid rgba(200,139,90,0.08); border-top: 1px solid rgba(200,139,90,0.2); padding: clamp(3rem, 7vw, 5rem) 0; }
        .project-profile-next-step h2 { font-size: clamp(2.3rem, 5vw, 4.4rem); line-height: 1.08; margin: 0 0 1.6rem; max-width: 760px; }
        .project-profile-next-step p { margin: 0 0 2.4rem; max-width: 650px; }
        @media (max-width: 760px) {
          .project-profile-hero { align-items: flex-start; min-height: auto; padding-bottom: 5rem; }
          .project-profile-intro-grid, .project-profile-boundaries-grid, .project-profile-features { grid-template-columns: 1fr; }
          .project-profile-feature, .project-profile-features > div:not(:first-child) .project-profile-feature, .project-profile-features > div:last-child .project-profile-feature { border-bottom: 1px solid rgba(200,139,90,0.1); border-right: none; min-height: 0; padding: 1.7rem 0; }
        }
      `}</style>
    </PageShell>
  );
}
