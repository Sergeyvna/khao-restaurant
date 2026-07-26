const hours = [
  { day: 'Monday',    times: ['11 – 1 pm', '5 – 10 pm'] },
  { day: 'Tuesday',   times: ['Closed'] },
  { day: 'Wed - Sat', times: ['11 – 1 pm ', '5 – 10 pm'] },
  { day: 'Sunday',    times: ['11 – 9 pm'] },
]

const contactDetails = [
  { label: 'Phone',     value: '0117 401 6517' },
  { label: 'Contact',   value: 'contact@khao.restaurant' },
  { label: 'Instagram', value: '@khao.restaurant' },
]

export default function InfoSection() {
  return (
    <section className="info">
      <div className="card panel hours" id="hours">
        <div className="section-title">
          <h2>Opening times</h2>
        </div>
        <ul>
          {hours.map(({ day, times }) => {
            const isClosed = times.length === 1 && times[0] === 'Closed'
            return (
              <li key={day}>
                <span>{day}</span>
                <span
                  style={{
                    color: isClosed ? 'var(--muted)' : 'var(--text)',
                    fontStyle: isClosed ? 'italic' : 'normal',
                    fontWeight: isClosed ? 400 : 600,
                  }}
                >
                  {times.join('  ·  ')}
                </span>
              </li>
            )
          })}
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