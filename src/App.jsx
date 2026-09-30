import { useEffect, useRef, useState } from "react";
import { experience, links, otherProjects, projects } from "./portfolio";
import { createEmailUrl } from "./utils/contact";
import portrait from "./assets/tega-profile.jpg";
import accessScreenshot from "./assets/access-wealth.png";

function Arrow({ diagonal = false, className = "" }) {
  return (
    <svg
      className={`arrow ${className}`}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalLink({ href, children, className = "", ...props }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
      <Arrow diagonal />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const button = useRef(null);
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    };
    const onHashChange = () => setOpen(false);
    const media = window.matchMedia("(min-width: 761px)");
    const onResize = (event) => {
      if (event.matches) setOpen(false);
    };
    window.addEventListener("keydown", close);
    window.addEventListener("hashchange", onHashChange);
    media.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", close);
      window.removeEventListener("hashchange", onHashChange);
      media.removeEventListener("change", onResize);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a
          href="#top"
          className="wordmark"
          aria-label="Tega Oboraruvwe, back to top"
          onClick={() => setOpen(false)}
        >
          tega<span className="logo-dot">.</span>
          <span className="wordmark-suffix">dev</span>
        </a>
        <button
          ref={button}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true">{open ? "×" : "+"}</span>
        </button>
        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          className={`primary-nav ${open ? "is-open" : ""}`}
        >
          <a href="#projects" onClick={() => setOpen(false)}>
            Selected work
          </a>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#experience" onClick={() => setOpen(false)}>
            Experience
          </a>
          <a
            href="#contact"
            className="nav-contact"
            onClick={() => setOpen(false)}
          >
            Let’s talk <Arrow diagonal />
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" />
          TEGA OBORARUVWE
        </p>
        <p className="role-label">Senior React Native Engineer</p>
        <h1 id="hero-title">
          I build reliable
          <br />
          <span>mobile & web</span>
          <br />
          products.
        </h1>
        <p className="hero-description">
          React Native, Expo, and TypeScript.
          <br className="desktop-break" /> From mobile payments to real-time
          commerce, I turn complex workflows into clear, dependable experiences.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#projects">
            Explore my work <Arrow />
          </a>
          <ExternalLink className="text-link" href={links.cv}>
            View CV
          </ExternalLink>
        </div>
      </div>
      <div className="hero-visual">
        <div className="portrait-frame">
          <span className="portrait-index">ENGINEER / BUILDER</span>
          <img
            src={portrait}
            alt="Tega Oboraruvwe"
            width="400"
            height="400"
            fetchPriority="high"
          />
          <span className="portrait-cross" aria-hidden="true">
            ✳
          </span>
        </div>
        <div className="hero-note">
          <span className="note-icon" aria-hidden="true">
            <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
              <rect
                x="5"
                y="2"
                width="14"
                height="24"
                rx="3"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M10 5h4M11 23h2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <div>
            <strong>
              Thoughtful interfaces.
              <br />
              Solid engineering.
            </strong>
            <span>Mobile-first. End to end.</span>
          </div>
        </div>
        <p className="portrait-caption">Built for the details that matter.</p>
      </div>
      <div className="experience-strip">
        <span className="eyebrow">EXPERIENCE ACROSS</span>
        <div>
          <span>Rapptr Labs</span>
          <span>Access Wealth</span>
          <span>Sabi</span>
          <span>Chowdeck</span>
        </div>
        <a href="#experience" aria-label="Explore work experience">
          <Arrow />
        </a>
      </div>
    </section>
  );
}

function ProjectVisual({ id }) {
  if (id === "access-wealth")
    return (
      <figure className="project-visual access-visual">
        <img
          src={accessScreenshot}
          alt="Access Wealth public website showing its wealth management offering"
          width="3444"
          height="2004"
          loading="lazy"
        />
        <figcaption>Company website · Product context</figcaption>
      </figure>
    );
  if (id === "borderguide")
    return (
      <figure className="project-visual border-visual">
        <div className="visual-topline">
          <span className="border-brand">
            <span aria-hidden="true">↗</span> BorderGuide
          </span>
          <span>STUDY ROADMAP</span>
        </div>
        <div className="roadmap-heading">
          Your next chapter.
          <br />
          <em>A clearer way there.</em>
        </div>
        <div className="roadmap-list">
          <div>
            <span>01</span>
            <p>
              Discover courses<small>Find a direction that fits</small>
            </p>
            <span aria-hidden="true">↗</span>
          </div>
          <div>
            <span>02</span>
            <p>
              Build your roadmap<small>Make the next step clear</small>
            </p>
            <span aria-hidden="true">↗</span>
          </div>
          <div>
            <span>03</span>
            <p>
              Check the sources<small>Understand the guidance</small>
            </p>
            <span aria-hidden="true">↗</span>
          </div>
        </div>
        <figcaption>
          Product journey illustration · Not an app screenshot
        </figcaption>
      </figure>
    );
  return (
    <figure className="project-visual chowdeck-visual">
      <div className="visual-topline">
        <span className="vendor-brand">
          Chowdeck<span>Vendor Hub</span>
        </span>
        <span>ORDER WORKFLOW</span>
      </div>
      <div className="order-flow">
        <div className="flow-row">
          <span className="flow-check" aria-hidden="true">
            ✓
          </span>
          <div>
            <strong>New order</strong>
            <small>Review and accept</small>
          </div>
          <span className="flow-pill">Receive</span>
        </div>
        <div className="flow-connector" />
        <div className="flow-row">
          <span className="flow-check" aria-hidden="true">
            ↻
          </span>
          <div>
            <strong>In preparation</strong>
            <small>Keep the status in sync</small>
          </div>
          <span className="flow-pill">Update</span>
        </div>
        <div className="flow-connector" />
        <div className="flow-row">
          <span className="flow-check" aria-hidden="true">
            ↗
          </span>
          <div>
            <strong>Ready for pickup</strong>
            <small>Move the order forward</small>
          </div>
          <span className="flow-pill">Notify</span>
        </div>
      </div>
      <figcaption>Workflow illustration · Not an app screenshot</figcaption>
    </figure>
  );
}

function CaseStudy({ project }) {
  return (
    <article className={`case-study case-${project.id}`}>
      <ProjectVisual id={project.id} />
      <div className="case-copy">
        <div className="case-meta">
          <span>
            {project.number} / {project.name}
          </span>
          <span>{project.type}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="case-description">{project.description}</p>
        <ul className="tags" aria-label="Project focus">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <details className="case-details">
          <summary>
            My contribution<span aria-hidden="true">+</span>
          </summary>
          <div className="case-detail-content">
            <p className="detail-label">{project.role}</p>
            <p>{project.contribution}</p>
            <h4>Engineering focus</h4>
            <p>{project.focus}</p>
            <p className="attribution">{project.status}</p>
          </div>
        </details>
        <ExternalLink href={project.url} className="project-link">
          {project.linkLabel}
        </ExternalLink>
      </div>
    </article>
  );
}

function Work() {
  return (
    <section id="projects" className="work-section section-anchor">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2>
              Work with
              <br />
              <span className="serif-emphasis">real-world stakes.</span>
            </h2>
          </div>
          <p>
            Independent products and professional contributions across study
            planning, fintech, and commerce.
          </p>
        </div>
        <div className="case-studies">
          {projects.map((project) => (
            <CaseStudy key={project.id} project={project} />
          ))}
        </div>
        <details className="project-archive">
          <summary>
            <span>
              More from the portfolio{" "}
              <span className="archive-count">{otherProjects.length}</span>
            </span>
            <span className="archive-toggle" aria-hidden="true">
              +
            </span>
          </summary>
          <div className="archive-grid">
            {otherProjects.map(([name, category, url]) => (
              <ExternalLink key={name} href={url} className="archive-link">
                <span>
                  <strong>{name}</strong>
                  <small>{category}</small>
                </span>
              </ExternalLink>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about-section section-anchor shell">
      <div>
        <p className="eyebrow">02 / THE WAY I WORK</p>
        <h2>
          Good products
          <br />
          are built in
          <br />
          <span className="serif-emphasis">the details.</span>
        </h2>
        <ExternalLink className="text-link" href={links.github}>
          Explore my GitHub
        </ExternalLink>
      </div>
      <div className="about-copy">
        <p className="about-lead">
          I’m Tega, a software engineer focused on mobile products and the
          systems behind them.
        </p>
        <p>
          My strongest work sits where a clean interface meets a complicated
          workflow: authentication, payments, order states, unreliable networks,
          and third-party APIs.
        </p>
        <p>
          I work across the stack to make those experiences dependable, from the
          first screen to the service behind it.
        </p>
        <div className="capabilities">
          <div>
            <span>01</span>
            <h3>Mobile engineering</h3>
            <p>
              React Native · Expo · TypeScript
              <br />
              iOS & Android · Release workflows
            </p>
          </div>
          <div>
            <span>02</span>
            <h3>Payments & product flows</h3>
            <p>
              Onboarding · KYC · Transactions
              <br />
              Authentication · Real-time states
            </p>
          </div>
          <div>
            <span>03</span>
            <h3>Full-stack delivery</h3>
            <p>
              React · Node.js · REST · GraphQL
              <br />
              API integrations · Data-driven interfaces
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const renderRole = (job) => (
    <article className="experience-row" key={job.company}>
      <p className="experience-date">{job.dates}</p>
      <div>
        <h3>{job.company}</h3>
        <p className="experience-role">{job.role}</p>
      </div>
      <p className="experience-summary">{job.summary}</p>
    </article>
  );
  return (
    <section id="experience" className="experience-section section-anchor">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / EXPERIENCE</p>
            <h2>
              A builder in
              <br />
              <span className="serif-emphasis">good company.</span>
            </h2>
          </div>
          <ExternalLink href={links.cv} className="text-link">
            View full CV
          </ExternalLink>
        </div>
        <div className="experience-list">
          {experience.slice(0, 4).map(renderRole)}
        </div>
        <details className="earlier-experience">
          <summary>
            Earlier experience <span aria-hidden="true">+</span>
          </summary>
          <div>{experience.slice(4).map(renderRole)}</div>
        </details>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", senderEmail: "", message: "" });
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 3000);
    } catch {
      setStatus(
        "Copy isn’t available here. You can select the email address above or use the email link.",
      );
    }
  };
  const submit = (event) => {
    event.preventDefault();
    setStatus(
      "Your email app will open with this draft. Review it there and press Send. If nothing opens, email me directly using the address above.",
    );
    window.location.href = createEmailUrl(links.email, form);
  };
  const update = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setStatus("");
  };
  return (
    <section id="contact" className="contact-section section-anchor">
      <div className="shell">
        <p className="eyebrow">04 / LET’S CONNECT</p>
        <div className="contact-heading">
          <h2>
            Have something
            <br />
            <span className="serif-emphasis">worth building?</span>
          </h2>
          <p>
            Let’s talk about your team, your product, or the problem you’re
            working on.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <span className="contact-label">START A CONVERSATION</span>
            <a className="email-link" href={`mailto:${links.email}`}>
              {links.email}
              <Arrow diagonal />
            </a>
            <button className="copy-button" type="button" onClick={copyEmail}>
              {copied ? "Email copied ✓" : "Copy email address"}
            </button>
            <span className="sr-only" role="status">
              {copied ? "Email address copied to clipboard" : ""}
            </span>
            <div className="contact-links">
              <ExternalLink href={links.github}>GitHub</ExternalLink>
              <ExternalLink href={links.linkedin}>LinkedIn</ExternalLink>
              <ExternalLink href={links.cv}>View CV</ExternalLink>
              <ExternalLink href={links.twitter}>X / Twitter</ExternalLink>
            </div>
          </div>
          <form onSubmit={submit} className="contact-form">
            <div className="form-row">
              <div>
                <label htmlFor="contact-name">Your name</label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={update}
                  required
                  placeholder="Alex Morgan"
                  maxLength="120"
                />
              </div>
              <div>
                <label htmlFor="contact-email">Email address</label>
                <input
                  id="contact-email"
                  name="senderEmail"
                  type="email"
                  autoComplete="email"
                  value={form.senderEmail}
                  onChange={update}
                  required
                  placeholder="alex@company.com"
                  maxLength="254"
                />
              </div>
            </div>
            <label htmlFor="contact-message">What are you working on?</label>
            <textarea
              id="contact-message"
              name="message"
              rows="4"
              value={form.message}
              onChange={update}
              required
              placeholder="A little about your project or role…"
              maxLength="2500"
            />
            <div className="form-footer">
              <p>
                Opens a draft in your email app.
                <br />
                You review and send it from there.
              </p>
              <button className="button button-lime" type="submit">
                Open email app <Arrow diagonal />
              </button>
            </div>
            <p className="form-status" role="status">
              {status}
            </p>
          </form>
        </div>
        <footer className="site-footer">
          <a href="#top" className="wordmark">
            tega<span className="logo-dot">.</span>
            <span className="wordmark-suffix">dev</span>
          </a>
          <p>© {new Date().getFullYear()} Tega Oboraruvwe</p>
          <a className="back-top" href="#top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </footer>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div id="top" />
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Hero />
        <Work />
        <About />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
