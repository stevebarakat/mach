import { serviceUrls } from '../data/services'

export default function ServiceRow({ service, index }) {
  return (
    <tr className="service-row" style={{ "--i": index }}>
      <td className="function-cell" data-label="Function">
        <span className="function-label">{service.function}</span>
      </td>
      <td className="category-cell" data-label="Category">{service.category}</td>
      <td className="examples-cell" data-label="Examples">
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
      <td className="reason-cell" data-label="Why MACH">{service.reason}</td>
    </tr>
  )
}
