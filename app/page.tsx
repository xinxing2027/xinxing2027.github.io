"use client";

import { useEffect, useState } from "react";

const work = [
  {
    number: "01",
    title: "Statistical Arbitrage",
    meta: "Second Author · Online · 05/2024—09/2024",
    description:
      "Developed an alpha strategy using Markov chains and the Fama–French three-factor model, then tested a market-neutral long–short portfolio on 2015–2023 data.",
    href: "https://www.researchgate.net/publication/396809736_How_Markov_Chain_and_Fama-French_Be_Used_in_Practical_Financial_Alpha_Strategy",
    status: "Published paper",
  },
  {
    number: "02",
    title: "Complex Functions",
    meta: "Key Member · Suzhou · 07/2024—08/2024",
    description:
      "Analyzed and visualized complex functions with MATLAB, LaTeX, and Mathematica, comparing conformal mapping and color-coding techniques.",
    href: "/complex-functions-poster.jpg",
    status: "Research project",
  },
  {
    number: "03",
    title: "Personal Portfolio",
    meta: "Design · Development · 2026",
    description:
      "A living home for selected research, projects, and notes from the build process.",
    href: "https://github.com/xinxing2027/xinxing2027.github.io",
    status: "Live build",
  },
  {
    number: "04",
    title: "AI Optical Module Cycle",
    meta: "UBS Competition · AI Analysis · 04/2026",
    description:
      "Used Python and AI agents to screen industry news and financial data, structure company signals, and build a peer-valuation framework using PE, PEG, EV/EBITDA, and 2026E scenarios.",
    status: "Competition",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("en", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "America/New_York",
        }).format(new Date()),
      );

    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Xinxing — home">
          <span className="brand-pixel" aria-hidden="true" />
          XINXING
        </a>

        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Primary">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="header-status">
          <span className="pulse" aria-hidden="true" />
          ONLINE <span className="status-divider">/</span> {time || "00:00:00"} ET
        </div>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
      </header>

      <main id="top">
        <section className="hero-grid" aria-labelledby="hero-title">
          <div className="panel hero-copy">
            <span className="crosshair" aria-hidden="true">＋</span>
            <div>
              <p className="eyebrow">Independent practice / Digital experiments</p>
              <h1 id="hero-title">Xinxing</h1>
              <p className="role">
                Independent Builder
                <br />
                <span>&amp; Creative Technologist</span>
              </p>
            </div>
            <p className="intro">
              I turn early ideas into clear, useful digital experiences—working
              across product thinking, visual systems, and code.
            </p>
          </div>

          <aside className="panel signal-panel" aria-label="Practice statement">
            <div className="signal-top">
              <p className="eyebrow dark">System note / 001</p>
              <span className="coordinates">31.2304° N / 121.4737° E</span>
            </div>
            <div className="signal-index" aria-hidden="true">01</div>
            <div className="signal-bottom">
              <p>Building thoughtful systems at the edge of technology and culture.</p>
              <a href="#work" aria-label="Explore selected work">EXPLORE ↓</a>
            </div>
          </aside>
        </section>

        <section className="panel work-grid" id="work" aria-labelledby="work-title">
          <div className="work-heading">
            <div>
              <p className="eyebrow">Selected output</p>
              <h2 id="work-title">Work</h2>
            </div>
            <span>2026 / 04 MODULES</span>
          </div>

          {work.map((project) => {
            const content = (
              <>
                <div className="project-top">
                  <span>PROJECT / {project.number}</span>
                  <span className="project-status">{project.status}</span>
                </div>
                <div>
                  <h3>{project.title}</h3>
                  <p className="project-meta">{project.meta}</p>
                  <p className="project-description">{project.description}</p>
                </div>
                <span className="project-arrow" aria-hidden="true">
                  {project.href ? "↗" : "→"}
                </span>
              </>
            );

            return project.href ? (
              <a
                className="project"
                href={project.href}
                key={project.number}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} — opens in a new tab`}
              >
                {content}
              </a>
            ) : (
              <article className="project project-muted" key={project.number}>
                {content}
              </article>
            );
          })}
        </section>

        <section
          className="panel education"
          id="education"
          aria-labelledby="education-title"
        >
          <div className="education-heading">
            <div>
              <p className="eyebrow">Academic record / 002</p>
              <h2 id="education-title">Education</h2>
            </div>
            <span>02 INSTITUTIONS</span>
          </div>

          <div className="education-list">
            <article className="education-entry">
              <div className="education-index">01 / GRADUATE</div>
              <div className="education-main">
                <h3>
                  Courant Institute of Mathematical Sciences
                  <span>New York University</span>
                </h3>
                <p className="education-degree">M.S. in Mathematics</p>
                <p className="education-courses">
                  Numerical Analysis · Partial Differential Equations ·
                  Scientific Computing · Risk Management · Probability Theory ·
                  Stochastic Processes and Pricing
                </p>
              </div>
              <div className="education-meta">
                <span>New York, USA</span>
                <time>09/2025—05/2027</time>
              </div>
            </article>

            <article className="education-entry">
              <div className="education-index">02 / UNDERGRADUATE</div>
              <div className="education-main">
                <h3>Xi&apos;an Jiaotong-Liverpool University</h3>
                <p className="education-degree">
                  B.S. in Financial Mathematics
                </p>
                <p className="education-courses">
                  Methods of Applied Mathematics · Foundations of Financial
                  Computing · Probability and Statistics · Econometrics I ·
                  Microeconomics · Macroeconomics · Risk Management · Financial
                  Accounting · Financial Management · Programming for Financial
                  Mathematics
                </p>
              </div>
              <div className="education-meta">
                <span>Suzhou, China</span>
                <time>09/2021—06/2025</time>
              </div>
            </article>
          </div>
        </section>

        <section className="lower-grid">
          <div className="panel about" id="about">
            <div>
              <p className="eyebrow">Profile / 003</p>
              <h2>About</h2>
            </div>
            <div className="about-copy">
              <p>
                I am Xinxing—an independent builder learning in public and
                creating a body of work one deliberate project at a time.
              </p>
              <p>
                This site is the starting point: a growing archive for the
                things I make, test, and discover.
              </p>
            </div>
          </div>

          <div className="panel contact" id="contact">
            <p className="eyebrow dark">Open channel / 004</p>
            <div className="contact-list">
              <a
                className="contact-link"
                href="mailto:xinxing2027@outlook.com"
              >
                <span className="contact-kind">Email</span>
                <span className="contact-value">xinxing2027@outlook.com</span>
                <span className="contact-arrow" aria-hidden="true">↗</span>
              </a>
              <a className="contact-link" href="tel:+17019785527">
                <span className="contact-kind">US</span>
                <span className="contact-value">+1 701 978 5527</span>
                <span className="contact-arrow" aria-hidden="true">↗</span>
              </a>
              <a className="contact-link" href="tel:+8618887260206">
                <span className="contact-kind">CN</span>
                <span className="contact-value">+86 188 8726 0206</span>
                <span className="contact-arrow" aria-hidden="true">↗</span>
              </a>
              <a
                className="contact-link"
                href="https://github.com/xinxing2027"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-kind">Code</span>
                <span className="contact-value">GitHub</span>
                <span className="contact-arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Xinxing</span>
        <span>Built with intention</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
