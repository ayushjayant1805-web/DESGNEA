"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

type Package = {
  name: string;
  range: string;
  suffix?: string;
  label: string;
  summary: string;
  items: string[];
  recommended?: boolean;
};

const systemSteps = [
  {
    number: "01",
    title: "Discover",
    text: "Find the real constraint, customer truth and commercial opportunity.",
  },
  {
    number: "02",
    title: "Position",
    text: "Create a clear reason to choose you and a message people remember.",
  },
  {
    number: "03",
    title: "Build",
    text: "Turn the strategy into brand, content and digital experiences.",
  },
  {
    number: "04",
    title: "Capture",
    text: "Design campaigns and journeys that turn attention into intent.",
  },
  {
    number: "05",
    title: "Convert",
    text: "Connect landing pages, CRM and follow-up into a cleaner sales path.",
  },
  {
    number: "06",
    title: "Improve",
    text: "Read the signals, close the leaks and compound what works.",
  },
];

const services = [
  {
    number: "01",
    title: "Strategy & positioning",
    text: "Market clarity, offer architecture, messaging and a practical growth roadmap.",
  },
  {
    number: "02",
    title: "Brand & creative",
    text: "A distinct identity and visual system that makes every touchpoint feel related.",
  },
  {
    number: "03",
    title: "Content & production",
    text: "Ideas, scripts, shoots, edits and design—built around a consistent narrative.",
  },
  {
    number: "04",
    title: "Web & technology",
    text: "Fast, clear digital experiences with ongoing technical care where it matters.",
  },
  {
    number: "05",
    title: "Acquisition",
    text: "Campaign thinking, performance creative and conversion paths shaped as one system.",
  },
  {
    number: "06",
    title: "CRM & automation",
    text: "Lead capture, follow-up logic and simple workflows that reduce missed opportunity.",
  },
];

const oneTimePackages: Package[] = [
  {
    name: "Launch OS",
    range: "₹35K–₹50K",
    label: "Build the foundation",
    summary:
      "For a business that needs to look clear, credible and ready to convert.",
    items: [
      "Growth audit and focused action map",
      "Positioning and core messaging",
      "Visual direction and essential brand kit",
      "Conversion-focused landing experience",
      "Lead capture, analytics and CRM-ready setup",
    ],
  },
  {
    name: "Growth OS",
    range: "₹60K–₹90K",
    label: "Connect the growth journey",
    summary:
      "For a growing business ready to align its brand, content, website and lead flow.",
    items: [
      "Growth strategy and offer architecture",
      "Complete identity and messaging system",
      "Multi-page conversion website",
      "Launch content and campaign toolkit",
      "CRM workflow and essential automation",
      "Measurement framework and handover",
    ],
    recommended: true,
  },
  {
    name: "Scale OS",
    range: "₹1.05L–₹1.55L",
    label: "Build for the next stage",
    summary:
      "For a business with more offers, audiences or channels that need one operating system.",
    items: [
      "Deep growth and customer-journey strategy",
      "Expanded brand and creative ecosystem",
      "Advanced website and conversion journeys",
      "Multi-campaign content architecture",
      "Sales enablement, CRM and automation design",
      "Launch support and optimisation roadmap",
    ],
  },
];

const monthlyPackages: Package[] = [
  {
    name: "Momentum OS",
    range: "₹35K–₹50K",
    suffix: "/ month",
    label: "Create consistent momentum",
    summary:
      "A complete content and digital-care rhythm for businesses building market presence.",
    items: [
      "10–15 reels with end-to-end production",
      "12–16 designed posts",
      "20–30 story frames",
      "Up to 2 planned shoot days",
      "Monthly strategy, publishing and reporting",
      "Website maintenance and lead-capture checks",
    ],
  },
  {
    name: "Growth Engine OS",
    range: "₹60K–₹85K",
    suffix: "/ month",
    label: "Operate the growth engine",
    summary:
      "A connected creative, campaign and conversion system with deeper monthly ownership.",
    items: [
      "16–22 reels with end-to-end production",
      "16–20 designed posts",
      "30–45 story frames",
      "Up to 3 planned shoot days",
      "Campaign concepts and performance creative",
      "Landing-page, CRM and automation support",
      "Monthly growth review and optimisation",
    ],
    recommended: true,
  },
  {
    name: "Scale Partner OS",
    range: "₹95K–₹1.40L",
    suffix: "/ month",
    label: "Embed a growth partner",
    summary:
      "High-output production and cross-channel orchestration for a more complex growth stage.",
    items: [
      "24–32 reels with end-to-end production",
      "20–28 designed posts",
      "45–60 story frames",
      "Up to 4 planned shoot days",
      "Multi-channel campaign direction",
      "Continuous website, funnel and CRM care",
      "Priority optimisation and strategic support",
    ],
  },
];

const goals = [
  {
    number: "01",
    title: "Clarity",
    text: "Every decision starts from one commercial direction.",
  },
  {
    number: "02",
    title: "Continuity",
    text: "Every customer touchpoint feels like the same business.",
  },
  {
    number: "03",
    title: "Conversion",
    text: "Attention has a deliberate path towards action.",
  },
  {
    number: "04",
    title: "Capability",
    text: "The system becomes easier to run, measure and improve.",
  },
];

const faqs = [
  {
    question: "Should we start with a one-time build or a monthly partnership?",
    answer:
      "Choose a one-time Growth OS when the foundation—positioning, brand, website or lead journey—needs to be built or repaired. Choose a monthly partnership when the foundation is ready and you need consistent production, campaigns, technical care and optimisation. We can also sequence both.",
  },
  {
    question: "Does the monthly retainer include production?",
    answer:
      "Yes. Monthly plans are designed around full content production: planning, concepts, scripts, scheduled shoot days, editing, design and publishing support. Exact locations, travel, talent and specialised production requirements are scoped during discovery.",
  },
  {
    question: "Can Desgnea maintain our website and growth technology?",
    answer:
      "Yes. Technical maintenance, landing-page updates, lead-capture checks, CRM support and essential automations can sit inside the monthly operating rhythm. The level of support follows the chosen scope.",
  },
  {
    question: "Can the packages be tailored?",
    answer:
      "Yes. The ranges create a clear starting point, while the final system is shaped around your current stage, internal team, channels and highest-priority growth constraint.",
  },
];

function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className={`logo-lockup${inverted ? " logo-lockup--inverted" : ""}`}>
      <Image
        src="/brand/desgnea-horizontal.png"
        alt="Desgnea"
        width={438}
        height={154}
        priority={!inverted}
      />
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="section-label">
      <span />
      {children}
    </p>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [packageMode, setPackageMode] = useState<"one-time" | "monthly">(
    "monthly",
  );

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((item) => {
      revealObserver.observe(item);
    });

    const setProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      document.documentElement.style.setProperty(
        "--scroll-progress",
        `${progress}%`,
      );
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    setProgress();
    window.addEventListener("scroll", setProgress, { passive: true });
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", setProgress);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const activePackages =
    packageMode === "one-time" ? oneTimePackages : monthlyPackages;

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top">
      <div className="scroll-progress" aria-hidden="true" />

      <header className="site-header">
        <div className="shell site-header__inner">
          <a href="#top" className="brand-link" aria-label="Desgnea home">
            <Logo />
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#system">The system</a>
            <a href="#services">Capabilities</a>
            <a href="#difference">Why Desgnea</a>
            <a href="#packages">Packages</a>
          </nav>

          <a
            className="header-cta"
            href="mailto:desgneastudio@gmail.com?subject=Growth%20System%20Discovery"
          >
            Book a growth call
            <ArrowUpRight aria-hidden="true" />
          </a>

          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <nav
          id="mobile-navigation"
          className={`mobile-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Mobile navigation"
        >
          <a href="#system" onClick={closeMenu}>
            The system <ArrowRight />
          </a>
          <a href="#services" onClick={closeMenu}>
            Capabilities <ArrowRight />
          </a>
          <a href="#difference" onClick={closeMenu}>
            Why Desgnea <ArrowRight />
          </a>
          <a href="#packages" onClick={closeMenu}>
            Packages <ArrowRight />
          </a>
          <a
            href="mailto:desgneastudio@gmail.com?subject=Growth%20System%20Discovery"
            onClick={closeMenu}
          >
            Book a growth call <ArrowUpRight />
          </a>
        </nav>
      </header>

      <section className="hero section-pad">
        <div className="hero-grid" aria-hidden="true" />
        <div className="shell hero__inner">
          <div className="hero__copy">
            <SectionLabel>Growth System Studio</SectionLabel>
            <h1>
              Your business doesn’t need more marketing.
              <span>It needs a growth system.</span>
            </h1>
            <p className="hero__lead">
              Desgnea connects strategy, brand, content, technology,
              acquisition and automation into one system designed to attract,
              convert and retain customers.
            </p>
            <div className="hero__actions">
              <a
                className="button button--primary"
                href="mailto:desgneastudio@gmail.com?subject=Growth%20System%20Discovery"
              >
                Book a Growth Discovery
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="button button--quiet" href="#system">
                Explore the system
                <ArrowDownRight aria-hidden="true" />
              </a>
            </div>
            <div className="hero__outcomes" aria-label="Growth outcomes">
              <span>Attract</span>
              <i />
              <span>Convert</span>
              <i />
              <span>Retain</span>
            </div>
          </div>
        </div>
      </section>

      <section className="problem section-pad section-dark">
        <div className="shell">
          <div className="problem__top" data-reveal>
            <SectionLabel>The real growth problem</SectionLabel>
            <h2>
              Growth rarely breaks in one place.
              <span>It leaks between disconnected parts.</span>
            </h2>
            <p>
              A strong brand cannot rescue a weak journey. More content cannot
              fix unclear positioning. More leads cannot solve broken follow-up.
              The parts have to work together.
            </p>
          </div>

          <div className="leak-grid">
            <article className="leak-card" data-reveal>
              <span className="leak-card__number">01</span>
              <h3>Attention without direction</h3>
              <p>Activity grows, but the market still cannot explain why you matter.</p>
              <div className="leak-line" aria-hidden="true" />
            </article>
            <article className="leak-card" data-reveal>
              <span className="leak-card__number">02</span>
              <h3>Leads without continuity</h3>
              <p>Interest arrives, then disappears between pages, people and tools.</p>
              <div className="leak-line" aria-hidden="true" />
            </article>
            <article className="leak-card" data-reveal>
              <span className="leak-card__number">03</span>
              <h3>Execution without a system</h3>
              <p>Every vendor produces output, but no one owns the whole journey.</p>
              <div className="leak-line" aria-hidden="true" />
            </article>
          </div>

          <p className="problem__statement" data-reveal>
            Every disconnected part creates a place where growth can leak.
            <strong>
              Desgnea becomes the connecting layer that brings those parts
              together.
            </strong>
          </p>
        </div>
      </section>

      <section id="system" className="system-section section-pad">
        <div className="shell">
          <div className="section-heading" data-reveal>
            <div>
              <SectionLabel>The Desgnea Growth System</SectionLabel>
              <h2>One direction. Six connected moves.</h2>
            </div>
            <p>
              A practical operating model that follows the customer journey,
              from first signal to sustained growth.
            </p>
          </div>

          <div className="system-steps">
            {systemSteps.map((step, index) => (
              <article
                className="system-step"
                data-reveal
                key={step.number}
                style={{ "--step-delay": `${index * 70}ms` } as React.CSSProperties}
              >
                <div className="system-step__top">
                  <span>{step.number}</span>
                  <span className="system-step__dot" aria-hidden="true" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>

          <div className="system-summary" data-reveal>
            <span className="system-summary__eyebrow">The outcome</span>
            <p>
              Positioning creates attention. Brand builds trust. Content keeps
              the conversation moving. Technology captures intent. Follow-up
              converts it. Measurement makes the whole system smarter.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="capabilities section-pad">
        <div className="shell">
          <div className="section-heading" data-reveal>
            <div>
              <SectionLabel>Connected capabilities</SectionLabel>
              <h2>Everything has a role. Nothing works in isolation.</h2>
            </div>
            <p>
              We build the smallest complete system your next stage actually
              needs—then keep it coherent as it grows.
            </p>
          </div>

          <div className="capability-grid">
            {services.map((service, index) => (
              <article
                className={`capability-card capability-card--${index + 1}`}
                data-reveal
                key={service.number}
              >
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ArrowUpRight aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="difference" className="difference section-pad section-lilac">
        <div className="shell">
          <div className="difference__intro" data-reveal>
            <SectionLabel>Why Desgnea</SectionLabel>
            <h2>Not another vendor in the chain. The system that connects it.</h2>
            <p>
              We are not different because we do everything. We are different
              because we understand how everything must work together.
            </p>
          </div>

          <div className="comparison-wrap" data-reveal>
            <table className="comparison-table">
              <caption className="sr-only">
                Comparison between typical freelancers, typical agencies and
                Desgnea
              </caption>
              <thead>
                <tr>
                  <th scope="col">What you need</th>
                  <th scope="col">Typical freelancer</th>
                  <th scope="col">Typical agency</th>
                  <th scope="col" className="is-desgnea">Desgnea</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Ownership</th>
                  <td>A defined task</td>
                  <td>A channel or campaign</td>
                  <td className="is-desgnea">The connected growth journey</td>
                </tr>
                <tr>
                  <th scope="row">Direction</th>
                  <td>Usually client-led</td>
                  <td>Team or service-led</td>
                  <td className="is-desgnea">One shared commercial strategy</td>
                </tr>
                <tr>
                  <th scope="row">Coordination</th>
                  <td>You connect the pieces</td>
                  <td>Handoffs across teams</td>
                  <td className="is-desgnea">One operating rhythm</td>
                </tr>
                <tr>
                  <th scope="row">Technology</th>
                  <td>Often outside scope</td>
                  <td>Frequently separated</td>
                  <td className="is-desgnea">Built into the customer journey</td>
                </tr>
                <tr>
                  <th scope="row">Measurement</th>
                  <td>Delivery completed</td>
                  <td>Channel reporting</td>
                  <td className="is-desgnea">Attention → enquiry → conversion</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="difference__pillars">
            <div data-reveal>
              <span>01</span>
              <h3>Less coordination</h3>
              <p>Fewer briefs, handoffs and gaps for your team to manage.</p>
            </div>
            <div data-reveal>
              <span>02</span>
              <h3>More continuity</h3>
              <p>One idea carries from strategy to screen to sales follow-up.</p>
            </div>
            <div data-reveal>
              <span>03</span>
              <h3>Clearer decisions</h3>
              <p>Work is judged by its role in the system, not by output alone.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="engagement section-pad">
        <div className="shell">
          <div className="section-heading" data-reveal>
            <div>
              <SectionLabel>Ways to work together</SectionLabel>
              <h2>Build the system. Or keep it moving.</h2>
            </div>
            <p>
              Start with the model that matches the gap in your business today.
            </p>
          </div>

          <div className="engagement-grid">
            <article className="engagement-card" data-reveal>
              <span className="engagement-card__index">01</span>
              <p className="engagement-card__type">One-Time Growth OS</p>
              <h3>Build the foundation.</h3>
              <p>
                Strategy, identity, website, conversion journey and launch
                assets shaped as one decisive build.
              </p>
              <a href="#packages" onClick={() => setPackageMode("one-time")}>
                Explore one-time packages <ArrowRight />
              </a>
            </article>
            <article className="engagement-card engagement-card--accent" data-reveal>
              <span className="engagement-card__index">02</span>
              <p className="engagement-card__type">Monthly Growth Partner</p>
              <h3>Operate the engine.</h3>
              <p>
                Full production, publishing, campaigns, technology care and
                optimisation in one monthly rhythm.
              </p>
              <a href="#packages" onClick={() => setPackageMode("monthly")}>
                Explore monthly packages <ArrowRight />
              </a>
            </article>
          </div>
        </div>
      </section>

      <section id="packages" className="packages section-pad section-dark">
        <div className="shell">
          <div className="packages__header" data-reveal>
            <div>
              <SectionLabel>Engagements</SectionLabel>
              <h2>Choose where your system needs support.</h2>
            </div>
            <div className="package-toggle" role="tablist" aria-label="Package type">
              <button
                id="one-time-packages-tab"
                type="button"
                role="tab"
                aria-controls="packages-panel"
                aria-selected={packageMode === "one-time"}
                className={packageMode === "one-time" ? "is-active" : ""}
                onClick={() => setPackageMode("one-time")}
              >
                One-time
              </button>
              <button
                id="monthly-packages-tab"
                type="button"
                role="tab"
                aria-controls="packages-panel"
                aria-selected={packageMode === "monthly"}
                className={packageMode === "monthly" ? "is-active" : ""}
                onClick={() => setPackageMode("monthly")}
              >
                Monthly
              </button>
            </div>
          </div>

          <div
            id="packages-panel"
            className="package-grid"
            role="tabpanel"
            aria-labelledby={
              packageMode === "one-time"
                ? "one-time-packages-tab"
                : "monthly-packages-tab"
            }
            aria-label={
              packageMode === "one-time"
                ? "One-time Growth OS packages"
                : "Monthly Growth Partner packages"
            }
          >
            {activePackages.map((item) => (
              <article
                className={`package-card${item.recommended ? " package-card--recommended" : ""}`}
                key={`${packageMode}-${item.name}`}
              >
                {item.recommended && (
                  <span className="package-card__badge">Recommended</span>
                )}
                <div className="package-card__top">
                  <p>{item.label}</p>
                  <h3>{item.name}</h3>
                  <div className="package-card__price">
                    <strong>{item.range}</strong>
                    {item.suffix && <span>{item.suffix}</span>}
                  </div>
                  <p className="package-card__summary">{item.summary}</p>
                </div>
                <ul>
                  {item.items.map((feature) => (
                    <li key={feature}>
                      <Check aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:desgneastudio@gmail.com?subject=${encodeURIComponent(`${item.name} — Growth Discovery`)}`}
                >
                  Discuss {item.name}
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>

          <p className="packages__note">
            Estimated engagement ranges. Final scope is confirmed after
            discovery. Media spend, third-party software, travel, talent and
            applicable GST are separate unless explicitly included.
          </p>
        </div>
      </section>

      <section className="vision section-pad">
        <div className="vision__orbit vision__orbit--one" aria-hidden="true" />
        <div className="vision__orbit vision__orbit--two" aria-hidden="true" />
        <div className="shell vision__inner">
          <div className="vision__statement" data-reveal>
            <SectionLabel>Our vision</SectionLabel>
            <h2>
              Make growth feel connected, measurable and easier to operate.
            </h2>
            <p>
              We want every business we work with to move from scattered
              activity to a system that creates clarity, trust and momentum.
            </p>
          </div>

          <div className="goal-grid">
            {goals.map((goal) => (
              <article key={goal.number} data-reveal>
                <span>{goal.number}</span>
                <h3>{goal.title}</h3>
                <p>{goal.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process section-pad section-lilac">
        <div className="shell">
          <div className="section-heading" data-reveal>
            <div>
              <SectionLabel>How we work</SectionLabel>
              <h2>Clear enough to follow. Flexible enough to fit.</h2>
            </div>
            <p>
              A focused process with visible decisions, shared priorities and
              fewer surprises.
            </p>
          </div>

          <ol className="process-list">
            {[
              ["01", "Discover", "Understand the business, audience and constraint."],
              ["02", "Define", "Set the strategy, scope, priorities and measures."],
              ["03", "Build", "Create the connected assets and journeys."],
              ["04", "Launch", "Put the system into the market with intent."],
              ["05", "Improve", "Learn, refine and strengthen the next move."],
            ].map(([number, title, text]) => (
              <li key={number} data-reveal>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <ArrowDownRight aria-hidden="true" />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="faq section-pad">
        <div className="shell faq__grid">
          <div className="faq__intro" data-reveal>
            <SectionLabel>Good questions</SectionLabel>
            <h2>Before we build anything.</h2>
            <p>
              The right engagement starts with a clear view of what is included
              and what the business actually needs.
            </p>
          </div>
          <div className="faq__items">
            {faqs.map((faq) => (
              <details key={faq.question} data-reveal>
                <summary>
                  <span>{faq.question}</span>
                  <ChevronDown aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="final-cta section-pad section-dark">
        <div className="final-cta__grid" aria-hidden="true" />
        <div className="shell final-cta__inner" data-reveal>
          <SectionLabel>Your next growth move</SectionLabel>
          <h2>Stop adding more pieces. Start building the system.</h2>
          <p>
            Tell us where growth feels disconnected. We’ll help you identify
            the highest-leverage place to begin.
          </p>
          <a
            className="button button--light"
            href="mailto:desgneastudio@gmail.com?subject=Growth%20System%20Discovery"
          >
            Book a Growth System Discovery
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a className="final-cta__email" href="mailto:desgneastudio@gmail.com">
            desgneastudio@gmail.com
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell site-footer__top">
          <Logo inverted />
          <p>
            Strategy. Brand. Content. Technology. Acquisition. Automation.
            <strong>Connected for growth.</strong>
          </p>
        </div>
        <div className="shell site-footer__bottom">
          <span>© {new Date().getFullYear()} Desgnea</span>
          <div>
            <a href="mailto:desgneastudio@gmail.com">Email</a>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
