export default function GlueSection({ glueItems }) {
  return (
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
  )
}
