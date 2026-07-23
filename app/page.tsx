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
    title: "AI Optical Module Cycle",
    meta: "UBS Competition · AI Analysis · 04/2026",
    description:
      "Used Python and AI agents to screen industry news and financial data, structure company signals, and build a peer-valuation framework using PE, PEG, EV/EBITDA, and 2026E scenarios.",
    href: "/ubs-ai-optical-module-competition-2026.pptx",
    status: "Competition pitch",
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
    title: "Complex Functions",
    meta: "Key Member · Suzhou · 07/2024—08/2024",
    description:
      "Analyzed and visualized complex functions with MATLAB, LaTeX, and Mathematica, comparing conformal mapping and color-coding techniques.",
    href: "/complex-functions-poster.jpg",
    status: "Research project",
  },
  {
    number: "05",
    title: "Black–Scholes & Heat Kernel",
    meta: "Undergraduate Thesis · Financial Mathematics · 2025",
    description:
      "Derived diffusion equations with Fourier transforms and Green’s functions, then connected the heat kernel to Black–Scholes pricing and the Fokker–Planck equation.",
    href: "/black-scholes-heat-kernel-thesis-2025.pdf",
    status: "BSc thesis",
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
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
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

        <section className="panel work-grid" id="work" aria-labelledby="work-title">
          <div className="work-heading">
            <div>
              <p className="eyebrow">Selected output</p>
              <h2 id="work-title">Work</h2>
            </div>
            <span>05 PROJECTS / RESEARCH</span>
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
          className="panel experience"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="experience-heading">
            <div>
              <p className="eyebrow">Professional record / 003</p>
              <h2 id="experience-title">Experience</h2>
            </div>
            <span>01 INTERNSHIP</span>
          </div>

          <article className="experience-entry">
            <div className="experience-index">01 / INTERNSHIP</div>
            <div className="experience-main">
              <h3>Bank of China</h3>
              <p className="experience-role">
                Lobby Manager Intern &amp; Marketing Intern
              </p>
              <ul>
                <li>
                  Assisted customers with balance inquiries, deposits, and
                  withdrawals while providing professional guidance and
                  maintaining smooth daily lobby operations.
                </li>
                <li>
                  Supported a county-wide credit-card promotion, coordinated
                  discounts and giveaways, and secured cooperation agreements
                  through phone, email, and on-site outreach.
                </li>
                <li>
                  Identified customer needs, delivered personalized solutions,
                  and worked with team members to resolve complaints; completed
                  training in anti-money-laundering and fraud prevention.
                </li>
              </ul>
            </div>
            <div className="experience-meta">
              <span>Dali, China</span>
              <time>06/2023—07/2023</time>
            </div>
          </article>
        </section>

        <section className="panel about" id="about" aria-labelledby="about-title">
          <div className="about-heading">
            <div>
              <p className="eyebrow">Profile / 004</p>
              <h2 id="about-title">About me</h2>
            </div>
            <p className="about-lead">
              Curious by nature,
              <br />
              determined by choice.
            </p>
          </div>

          <div className="about-story">
            <p>
              I&apos;m Xinxing, an optimistic and adventurous mathematics
              student who enjoys discovering unfamiliar places, trying new
              things, swimming, and documenting everyday life through social
              media.
            </p>
            <p>
              Once I set a goal, I give it my full attention. Challenges rarely
              discourage me—I prefer to step back, understand the problem, and
              find a practical way forward. Friends call me their “little
              sunshine” because I bring warmth, energy, and a positive outlook
              to the people around me.
            </p>
          </div>

          <div className="about-details" aria-label="Activities and skills">
            <article>
              <span>01 / SERVICE</span>
              <h3>Blue Sky Rescue Team</h3>
              <p>
                Volunteer with the Civilian Emergency Response Force; supported
                rescue communications and logistics during the 2023 Türkiye
                earthquake response.
              </p>
            </article>
            <article>
              <span>02 / LEADERSHIP</span>
              <h3>Water Sports Association</h3>
              <p>
                Led the teaching department, organized daily swim training, and
                helped deliver two university club recruitment events.
              </p>
            </article>
            <article>
              <span>03 / COMMUNITY</span>
              <h3>Class Monitor</h3>
              <p>
                Coordinated student activities and served as a communication
                bridge between classmates, teachers, and the university.
              </p>
            </article>
          </div>

          <div className="photo-gallery" aria-labelledby="gallery-title">
            <div className="gallery-intro">
              <p className="eyebrow">Personal archive</p>
              <h3 id="gallery-title">Life, outside the numbers.</h3>
              <p>
                A space for travel, swimming, volunteering, and the moments I
                choose to remember.
              </p>
            </div>
            <div className="photo-slots" aria-label="Personal photo gallery">
              <figure className="photo-slot photo-slot-portrait">
                <img
                  src="/photos/world-cup.jpg"
                  alt="Xinxing at a football event"
                  loading="lazy"
                />
                <figcaption><span>01</span><strong>Game day</strong></figcaption>
              </figure>
              <figure className="photo-slot photo-slot-wide">
                <img
                  src="/photos/adventure.jpg?v=2"
                  alt="Xinxing rappelling beside a waterfall"
                  loading="lazy"
                />
                <figcaption><span>02</span><strong>Into the wild</strong></figcaption>
              </figure>
              <figure className="photo-slot">
                <img
                  src="/photos/spring.jpg"
                  alt="Xinxing smiling beside spring blossoms"
                  loading="lazy"
                />
                <figcaption><span>03</span><strong>Spring</strong></figcaption>
              </figure>
              <figure className="photo-slot photo-slot-wide">
                <img
                  src="/photos/swimming.jpg"
                  alt="Xinxing competing in a swimming race"
                  loading="lazy"
                />
                <figcaption><span>04</span><strong>In motion</strong></figcaption>
              </figure>
              <figure className="photo-slot">
                <img
                  src="/photos/friends.jpg?v=2"
                  alt="Xinxing enjoying the sunshine beside purple flowers"
                  loading="lazy"
                />
                <figcaption><span>05</span><strong>Little sunshine</strong></figcaption>
              </figure>
              <figure className="photo-slot photo-slot-wide">
                <img
                  src="/photos/everyday-moment.jpg"
                  alt="Xinxing visiting a mountain landscape"
                  loading="lazy"
                />
                <figcaption><span>06</span><strong>Out there</strong></figcaption>
              </figure>
              <figure className="photo-slot photo-slot-wide">
                <img
                  src="/photos/midtown-night.jpg"
                  alt="The Manhattan skyline illuminated at night"
                  loading="lazy"
                />
                <figcaption><span>07</span><strong>City lights</strong></figcaption>
              </figure>
              <figure className="photo-slot photo-slot-portrait">
                <img
                  src="/photos/fearless.jpg"
                  alt="Xinxing standing beside the Fearless Girl statue"
                  loading="lazy"
                />
                <figcaption><span>08</span><strong>Fearless</strong></figcaption>
              </figure>
              <figure className="photo-slot photo-slot-wide">
                <img
                  src="/photos/sunset-skyline.jpg"
                  alt="New York skyline beneath a colorful sunset"
                  loading="lazy"
                />
                <figcaption><span>09</span><strong>Afterglow</strong></figcaption>
              </figure>
              <figure className="photo-slot photo-slot-wide">
                <img
                  src="/photos/river-night.jpg"
                  alt="New York bridges and skyline viewed across the river at night"
                  loading="lazy"
                />
                <figcaption><span>10</span><strong>Across the river</strong></figcaption>
              </figure>
            </div>
          </div>

          <div className="skills-line">
            <span>TOOLS</span>
            <p>Python · MATLAB · R · Stata · Java · MS Office</p>
            <span>LANGUAGES</span>
            <p>Mandarin Chinese · English</p>
            <span>AWARD</span>
            <p>2× Silver + 1× Bronze · XJTLU Swimming Competition, 2023</p>
          </div>
        </section>

        <section className="lower-grid lower-grid-contact">
          <div className="panel contact" id="contact">
            <p className="eyebrow dark">Open channel / 005</p>
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
