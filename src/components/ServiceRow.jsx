export default function ServiceRow({ service, index }) {
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
  )
}
