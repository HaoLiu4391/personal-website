import { BASE, EDUCATION, INTRO, NEWS, PROJECTS, PUBLICATIONS, SITE, type Project } from "@/constants";
import { Inline } from "@/lib/inline";

function ProjectItem({ p }: { p: Project }) {
  const dot = <span className={p.paper ? "dot" : "dot open"}>{p.paper ? "●" : "○"}</span>;

  if (!p.bullets) {
    return (
      <li className="project">
        <span className="years">{p.years}</span>
        {dot}
        <div>
          {p.title}
          {p.where && (
            <span className="muted">
              {" "}
              <Inline text={p.where} />
            </span>
          )}
        </div>
      </li>
    );
  }

  return (
    <li className="project long">
      <span className="years">{p.years}</span>
      {dot}
      <div>
        <div className="p-title">{p.title}</div>
        <div className="muted p-meta">
          {p.where && <Inline text={p.where} />}
          {p.ongoing && <span className="mono small"> · ongoing</span>}
          {p.links?.map((l) => (
            <a key={l.label} className="mono small" href={l.url}>
              {" "}[{l.label}]
            </a>
          ))}
        </div>
        {p.figure && (
          <figure>
            <a href={`${BASE}${p.figure.src}`}>
              <img src={`${BASE}${p.figure.src}`} alt={p.figure.alt} loading="lazy" />
            </a>
            <figcaption>{p.figure.caption}</figcaption>
          </figure>
        )}
        <ul>
          {p.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default function Home() {
  return (
    <main>
      <section className="intro">
        <div>
          {INTRO.map((text) => (
            <p key={text}>
              <Inline text={text} />
            </p>
          ))}
          <p className="links">
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a href={SITE.scholar}>scholar</a>
            <a href={SITE.github}>github</a>
            <a href={SITE.x}>x</a>
            <a href={`${BASE}/cv`}>cv</a>
          </p>
        </div>
        <img
          className="photo"
          src={`${BASE}/photo.webp`}
          alt="Hao Liu in front of the old gate at Tsinghua University"
          width={112}
          height={140}
        />
      </section>

      <section id="news">
        <h2>News</h2>
        <ul className="dated">
          {NEWS.map((n) => (
            <li key={n.text}>
              <span className="date">{n.date}</span>
              <span>
                <Inline text={n.text} />
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section id="publications">
        <h2>Publications</h2>
        {PUBLICATIONS.map((p) => (
          <div className="pub" key={p.title}>
            <div>{p.title}</div>
            <div className="muted">
              <Inline text={p.authors} />
            </div>
            <div className="muted">
              {p.venue}
              {p.links.map((l) => (
                <a key={l.label} className="mono small" href={l.url}>
                  {" "}[{l.label}]
                </a>
              ))}{" "}
              <details className="bib">
                <summary className="mono small">[bib]</summary>
                <pre>{p.bib}</pre>
              </details>
            </div>
          </div>
        ))}
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <p className="legend">● has a paper</p>
        <ol className="projects">
          {PROJECTS.map((p) => (
            <ProjectItem key={p.title} p={p} />
          ))}
        </ol>
      </section>

      <section id="background">
        <h2>Background</h2>
        <ul className="dated">
          {EDUCATION.map((e) => (
            <li key={e.text}>
              <span className="date">{e.years}</span>
              <span>{e.text}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
