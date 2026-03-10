import { serviceUrls } from '../data/services'

export default function ServiceRow({ service, index }) {
  return (
    <tr className="service-row" style={{ "--i": index }}>
      <td className="function-cell">
        <span className="function-label">{service.function}</span>
      </td>
      <td className="category-cell">{service.category}</td>
      <td className="examples-cell">
        <div className="example-badges">
          {service.examples.map((ex) => {
            const url = serviceUrls[ex]
            const className = `example-badge${ex === service.primaryExample ? " primary" : ""}`
            return url ? (
              <a key={ex} href={url} target="_blank" rel="noopener noreferrer" className={className}>
                {ex}
              </a>
            ) : (
              <span key={ex} className={className}>{ex}</span>
            )
          })}
        </div>
      </td>
      <td className="reason-cell">{service.reason}</td>
    </tr>
  )
}
