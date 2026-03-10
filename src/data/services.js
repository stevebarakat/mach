export const services = [
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

export const glueItems = [
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

export const machPills = [
  { letter: "M", word: "Microservices" },
  { letter: "A", word: "API-first" },
  { letter: "C", word: "Cloud-native" },
  { letter: "H", word: "Headless" },
];
