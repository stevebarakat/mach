export const services = [
  {
    function: "Frontend",
    category: "Headless Application Framework",
    examples: ["Next.js", "Astro", "React Router Framework", "Tanstack Start"],
    primaryExample: "Next.js",
    reason:
      "Builds a decoupled frontend that consumes APIs from CMS, commerce, search, and other backend services, while optimizing for performance, SEO, and developer control.",
  },
  {
    function: "Content",
    category: "Headless CMS",
    examples: [
      "Contentful",
      "Contentstack",
      "Sanity",
      "Strapi",
      "Storyblok",
      "DatoCMS",
      "WordPress",
    ],
    primaryExample: "Contentful",
    reason:
      "Dedicated, API-first platforms built purely for content management and delivery. (WordPress can also be used as a content repository).",
  },
  {
    function: "E-commerce",
    category: "Composable Commerce Platform",
    examples: ["Shopify", "BigCommerce", "Commercetools", "Medusa"],
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
    category: "Transactional Email Service (ESP)",
    examples: ["SendGrid", "Mailgun", "Postmark", "AWS SES"],
    primaryExample: "SendGrid",
    reason:
      "Ensures reliable, high-volume delivery of transactional and marketing emails via API.",
  },
  {
    function: "Email Marketing",
    category: "Email Service Provider (ESP) / Marketing Automation Platform",
    examples: ["Mailchimp", "Klaviyo", "Brevo", "SendGrid Marketing Campaigns"],
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

export const serviceUrls = {
  "Next.js": "https://nextjs.org",
  Astro: "https://astro.build",
  "React Router Framework": "https://reactrouter.com",
  "Tanstack Start": "https://tanstack.com/start",
  Gatsby: "https://www.gatsbyjs.com",
  "Nuxt.js": "https://nuxt.com",
  Contentful: "https://www.contentful.com",
  Contentstack: "https://www.contentstack.com",
  Sanity: "https://www.sanity.io",
  Strapi: "https://strapi.io",
  Storyblok: "https://www.storyblok.com",
  DatoCMS: "https://www.datocms.com",
  WordPress: "https://wordpress.org",
  Shopify: "https://www.shopify.com",
  BigCommerce: "https://www.bigcommerce.com",
  Commercetools: "https://commercetools.com",
  Medusa: "https://medusajs.com",
  Eventbrite: "https://www.eventbrite.com",
  "Ticketmaster API": "https://developer.ticketmaster.com",
  HubSpot: "https://www.hubspot.com",
  Salesforce: "https://www.salesforce.com",
  ActiveCampaign: "https://www.activecampaign.com",
  Algolia: "https://www.algolia.com",
  "Elastic Cloud": "https://www.elastic.co/cloud",
  Weglot: "https://www.weglot.com",
  Lokalise: "https://lokalise.com",
  Phrase: "https://phrase.com",
  Typeform: "https://www.typeform.com",
  JotForm: "https://www.jotform.com",
  Formspree: "https://formspree.io",
  SendGrid: "https://sendgrid.com",
  Mailgun: "https://www.mailgun.com",
  Postmark: "https://postmarkapp.com",
  "AWS SES": "https://aws.amazon.com/ses",
  Mailchimp: "https://mailchimp.com",
  "SendGrid Marketing Campaigns":
    "https://sendgrid.com/solutions/email-marketing/",
  Klaviyo: "https://www.klaviyo.com",
  Brevo: "https://www.brevo.com",
};

export const machPills = [
  { letter: "M", word: "Microservices" },
  { letter: "A", word: "API-first" },
  { letter: "C", word: "Cloud-native" },
  { letter: "H", word: "Headless" },
];
