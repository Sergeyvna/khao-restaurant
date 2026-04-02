const hours = [
  { days: 'Mon – Thu', time: '12:00 – 22:00' },
  { days: 'Friday',    time: '12:00 – 23:00' },
  { days: 'Saturday',  time: '10:00 – 23:00' },
  { days: 'Sunday',    time: '10:00 – 20:00' },
]

const contactDetails = [
  { label: 'Phone',        value: '0113 555 0188' },
  { label: 'Contact',        value: 'contact@khao.restaurant' },
  { label: 'Instagram',    value: '@khao.restaurant' },
]

export default function InfoSection() {
  return (
    <section className="info">
      <div className="card panel hours" id="hours">
        <div className="section-title">
          <h2>Opening times</h2>
        </div>
        <ul>
          {hours.map(({ days, time }) => (
            <li key={days}>
              <span>{days}</span>
              <span>{time}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card panel contact" id="contact">
        <div className="section-title">
          <h2>Contact</h2>
        </div>
        <ul>
          {contactDetails.map(({ label, value }) => (
            <li key={label}>
              <span>{label}</span>
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
