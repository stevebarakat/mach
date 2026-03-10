import ServiceRow from './ServiceRow'

export default function ServicesTable({ services }) {
  return (
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
            <ServiceRow key={service.function} service={service} index={i} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
