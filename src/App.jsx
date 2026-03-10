import { useState, useEffect } from 'react'

const services = [
  {
    function: "Frontend",
    category: "Headless Application Framework",
    examples: ["Next.js", "Gatsby", "Nuxt.js"],
    primaryExample: "Next.js",
    reason:
      "Builds a fast, decoupled user interface optimized for performance and SEO.",
  },
  {
    function: "Content",
    category: "Headless CMS",
    examples: ["Contentful", "Contentstack", "Sanity", "WordPress"],
    primaryExample: "Contentful",
    reason:
      "Dedicated, API-first platforms built purely for content management and delivery. (WordPress can also be used as a content repository).",
  },
  {
    function: "E-commerce",
    category: "Composable Commerce Platform",
    examples: ["Shopify", "BigCommerce", "commercetools"],
    primaryExample: "Shopify",
    reason:
      "Specialized platforms handling product data, inventory, and transactions via robust APIs.",
  },
  {
    function: "Events",
    category: "Event Management Platform",
    examples: ["Eventbrite", "Ticketmaster API"],
    primaryExample: "Eventbrite",
    reason:
      "Manages event logistics and ticketing at scale, integrating via its API.",
  },
  {
    function: "CRM/Automation",
    category: "CRM & Automation Platform",
    examples: ["HubSpot", "Salesforce", "ActiveCampaign"],
    primaryExample: "HubSpot",
    reason:
      "Manages customer relationships and automates workflows using integrated APIs.",
  },
  {
    function: "Search",
    category: "Search-as-a-Service",
    examples: ["Algolia", "Elastic Cloud"],
    primaryExample: "Algolia",
    reason:
      "Provides instant, scalable search functionality via a dedicated, managed API.",
  },
  {
    function: "Translations",
    category: "Translation Management System (TMS)",
    examples: ["Weglot", "Lokalise", "Phrase"],
    primaryExample: "Weglot",
    reason:
      "Manages multilingual content via a cloud-based dashboard and API integration.",
  },
  {
    function: "Forms",
    category: "Forms-as-a-Service",
    examples: ["Typeform", "JotForm", "Formspree"],
    primaryExample: "Typeform",
    reason:
      "Dedicated services for building and managing forms, using APIs for submission handling.",
  },
  {
    function: "Email Delivery",
    category: "Email Service Provider (ESP)",
    examples: ["SendGrid", "Mailgun", "Postmark", "AWS SES"],
    primaryExample: "SendGrid",
    reason:
      "Ensures reliable, high-volume delivery of transactional and marketing emails via API.",
  },
  {
    function: "Email Marketing",
    category: "Email Service Provider (ESP) / Marketing Automation Platform",
    examples: ["Mailchimp", "SendGrid Marketing Campaigns", "Klaviyo", "Brevo"],
    primaryExample: "Mailchimp",
    reason:
      "Handles audience management, email campaigns, and automated customer messaging via APIs, making it easy to integrate as a decoupled service in a MACH architecture.",
  },
];

const glueItems = [
  {
    label: "APIs",
    description: "Every service must communicate via a well-documented API.",
  },
  {
    label: "The Frontend Application",
    description:
      "The Next.js application acts as the orchestration layer, fetching data from all these different APIs and presenting a single, seamless user experience.",
  },
  {
    label: "Integration Tools",
    description:
      "Tools like Zapier or Make may be used to sync data between the backend services (e.g., syncing a Typeform submission to HubSpot CRM).",
  },
];

const machPills = [
  { letter: "M", word: "Microservices" },
  { letter: "A", word: "API-first" },
  { letter: "C", word: "Cloud-native" },
  { letter: "H", word: "Headless" },
];

function ServiceRow({ service, index }) {
  return (
    <tr className="service-row" style={{ "--i": index }}>
      <td className="function-cell">
        <span className="function-label">{service.function}</span>
      </td>
      <td className="category-cell">{service.category}</td>
      <td className="examples-cell">
        <div className="example-badges">
          {service.examples.map((ex) => (
            <span
              key={ex}
              className={`example-badge${ex === service.primaryExample ? " primary" : ""}`}
            >
              {ex}
            </span>
          ))}
        </div>
      </td>
      <td className="reason-cell">{service.reason}</td>
    </tr>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export default function App() {
  const [dark, setDark] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e) => setDark(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <div className="app">
      <header className="header">
        <div className="header-top">
          <div className="header-eyebrow">Reference Guide</div>
          <button className="theme-toggle" onClick={() => setDark(d => !d)}>
            {dark ? <SunIcon /> : <MoonIcon />}
            {dark ? 'Light' : 'Dark'}
          </button>
        </div>
        <h1 className="header-title">MACH Architecture</h1>
        <p className="header-subtitle">
          Services for building a "best-of-breed" stack for e-commerce and
          content-driven businesses. One specialized, API-first service per
          business function.
        </p>
        <div className="mach-pills">
          {machPills.map(({ letter, word }) => (
            <div key={letter} className="mach-pill">
              <span className="mach-pill-letter">{letter}</span>
              <span>{word}</span>
            </div>
          ))}
        </div>
      </header>

      <main>
        <div className="table-wrapper">
          <table className="services-table">
            <thead>
              <tr>
                <th>Function</th>
                <th>Service Category</th>
                <th>Example Services</th>
                <th>Why MACH</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, i) => (
                <ServiceRow
                  key={service.function}
                  service={service}
                  index={i}
                />
              ))}
            </tbody>
          </table>
        </div>

        <section className="glue-section">
          <h2 className="glue-title">The Stack "Glue"</h2>
          <p className="glue-intro">
            These services are decoupled. What unifies them:
          </p>
          <div className="glue-cards">
            {glueItems.map((item) => (
              <div key={item.label} className="glue-card">
                <div className="glue-card-label">{item.label}</div>
                <div className="glue-card-desc">{item.description}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
