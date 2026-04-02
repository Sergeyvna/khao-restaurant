const address = '21 King Street, Leeds, LS1 2HL'
const mapsQuery = encodeURIComponent(address)
const mapsEmbedSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCQ-GQf5wgiU5gI5Xa5TbpNXbuMYYuh4CA&q=${mapsQuery}`
const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`

const nearbyInfo = [
  { label: 'Leeds City Station', value: '7 min walk' },
  { label: 'Merrion Centre NCP', value: '4 min walk' },
  { label: 'Nearest bus stop', value: '2 min walk (line 1, 6, 97)' },
]

export default function LocationPage({ onBack }) {
  return (
    <div className="wrap">
      <div style={{ padding: '10px 0 28px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: '1px solid var(--line)',
            color: 'var(--muted)',
            padding: '8px 16px',
            borderRadius: '999px',
            fontSize: '0.88rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          ← Back
        </button>
        <div className="brand" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', letterSpacing: '0.08em' }}>
          Maison Noir
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <div className="eyebrow" style={{ marginBottom: '8px' }}>Find us</div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.4rem, 5vw, 4rem)', lineHeight: 1, margin: '0 0 10px' }}>
          Getting here
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '1.05rem', margin: 0 }}>{address}</p>
      </div>

      {/* Map embed */}
      <div className="card" style={{ overflow: 'hidden', borderRadius: '28px', marginBottom: '20px', height: '400px', position: 'relative' }}>
        <iframe
          title="Maison Noir location"
          src={mapsEmbedSrc}
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Note about API key */}
      <div style={{
        background: 'rgba(216,168,110,0.08)',
        border: '1px solid rgba(216,168,110,0.2)',
        borderRadius: '16px',
        padding: '14px 18px',
        marginBottom: '20px',
        fontSize: '0.85rem',
        color: 'var(--muted)',
      }}>
        <strong style={{ color: 'var(--accent)' }}>Note:</strong> Replace the <code style={{ background: 'rgba(255,255,255,0.06)', padding: '2px 6px', borderRadius: '4px' }}>key=</code> value in <code style={{ background: 'rgba(255,255,255,0.06)', padding: '2px 6px', borderRadius: '4px' }}>LocationPage.jsx</code> with your own Google Maps Embed API key to enable the live map.
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        {/* Directions CTA */}
        <div className="card panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: '8px' }}>Directions</div>
            <p style={{ color: 'var(--muted)', margin: '0 0 20px', lineHeight: 1.7 }}>
              Open Google Maps for turn-by-turn directions from your current location to our door.
            </p>
          </div>
          <a
            href={mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
            style={{
              display: 'inline-block',
              textAlign: 'center',
              padding: '14px 20px',
              borderRadius: '999px',
              background: 'var(--accent)',
              color: '#1b130b',
              fontWeight: 600,
              fontSize: '0.95rem',
            }}
          >
            Open in Google Maps →
          </a>
        </div>

      </div>

      <footer style={{ padding: '24px 0 10px', color: 'var(--muted)', fontSize: '0.95rem', textAlign: 'center' }}>
        © 2026 Khao Restaurant Ltd.
      </footer>
    </div>
  )
}
