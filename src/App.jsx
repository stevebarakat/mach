const services = [
  {
    function: 'Frontend',
    category: 'Headless Application Framework',
    examples: ['Next.js', 'Gatsby', 'Nuxt.js'],
    primaryExample: 'Next.js',
    reason:
      'Builds a fast, decoupled user interface optimized for performance and SEO.',
  },
  {
    function: 'Content',
    category: 'Headless CMS',
    examples: ['Contentful', 'Contentstack', 'Sanity', 'WordPress'],
    primaryExample: 'Contentful',
    reason:
      'Dedicated, API-first platforms built purely for content management and delivery. (WordPress can also be used as a content repository).',
  },
  {
    function: 'E-commerce',
    category: 'Composable Commerce Platform',
    examples: ['Shopify', 'BigCommerce', 'commercetools'],
    primaryExample: 'Shopify',
    reason:
      'Specialized platforms handling product data, inventory, and transactions via robust APIs.',
  },
  {
    function: 'Events',
    category: 'Event Management Platform',
    examples: ['Eventbrite', 'Ticketmaster API'],
    primaryExample: 'Eventbrite',
    reason: 'Manages event logistics and ticketing at scale, integrating via its API.',
  },
  {
    function: 'Email Delivery',
    category: 'Email Service Provider (ESP)',
    examples: ['SendGrid', 'Mailgun', 'Postmark', 'AWS SES'],
    primaryExample: 'SendGrid',
    reason:
      'Ensures reliable, high-volume delivery of transactional and marketing emails via API.',
  },
  {
    function: 'CRM/Automation',
    category: 'CRM & Automation Platform',
    examples: ['HubSpot', 'Salesforce', 'ActiveCampaign'],
    primaryExample: 'HubSpot',
    reason: 'Manages customer relationships and automates workflows using integrated APIs.',
  },
  {
    function: 'Search',
    category: 'Search-as-a-Service',
    examples: ['Algolia', 'Elastic Cloud'],
    primaryExample: 'Algolia',
    reason: 'Provides instant, scalable search functionality via a dedicated, managed API.',
  },
  {
    function: 'Translations',
    category: 'Translation Management System (TMS)',
    examples: ['Weglot', 'Lokalise', 'Phrase'],
    primaryExample: 'Weglot',
    reason: 'Manages multilingual content via a cloud-based dashboard and API integration.',
  },
  {
    function: 'Forms',
    category: 'Forms-as-a-Service',
    examples: ['Typeform', 'JotForm', 'Formspree'],
    primaryExample: 'Typeform',
    reason:
      'Dedicated services for building and managing forms, using APIs for submission handling.',
  },
  {
    function: 'Email Marketing',
    category: 'Email Service Provider (ESP) / Marketing Automation Platform',
    examples: ['Mailchimp', 'SendGrid Marketing Campaigns', 'Klaviyo', 'Brevo'],
    primaryExample: 'Mailchimp',
    reason:
      'Handles audience management, email campaigns, and automated customer messaging via APIs, making it easy to integrate as a decoupled service in a MACH architecture.',
  },
]

const glueItems = [
  {
    label: 'APIs',
    description: 'Every service must communicate via a well-documented API.',
  },
  {
    label: 'The Frontend Application',
    description:
      'The Next.js application acts as the orchestration layer, fetching data from all these different APIs and presenting a single, seamless user experience.',
  },
  {
    label: 'Integration Tools',
    description:
      'Tools like Zapier or Make may be used to sync data between the backend services (e.g., syncing a Typeform submission to HubSpot CRM).',
  },
]

function ServiceRow({ service }) {
  return (
    <tr>
      <td>
        <strong>{service.function}</strong>
      </td>
      <td>{service.category}</td>
      <td>
        {service.examples.map((ex) => (
          <span key={ex}>
            {ex === service.primaryExample ? <strong>{ex}</strong> : ex}
            {ex !== service.examples[service.examples.length - 1] ? ', ' : ''}
          </span>
        ))}
      </td>
      <td>{service.reason}</td>
    </tr>
  )
}

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>MACH Architecture Services List</h1>
      <p>
        The following list outlines the services needed to build a robust,
        "best-of-breed" MACH (Microservices, API-first, Cloud-native, Headless)
        architecture for a typical e-commerce and content-driven business. The
        philosophy here is to use a specialized, API-first service for each major
        business function:
      </p>

      <table>
        <thead>
          <tr>
            <th>Function</th>
            <th>Service Category</th>
            <th>Example Services</th>
            <th>Why they are used in a MACH stack</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <ServiceRow key={service.function} service={service} />
          ))}
        </tbody>
      </table>

      <h2>Summary of the MACH Stack "Glue"</h2>
      <p>The services above are separate. The "glue" that unifies them is:</p>
      <ul>
        {glueItems.map((item) => (
          <li key={item.label}>
            <strong>{item.label}:</strong> {item.description}
          </li>
        ))}
      </ul>
    </div>
  )
}
