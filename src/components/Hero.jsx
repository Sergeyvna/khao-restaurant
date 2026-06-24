export default function Hero() {
  const handleLocationClick = () => {
    const address = encodeURIComponent('36 Stokes Croft, Bristol BS1 3QD');
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${address}`,
      '_blank'
    );
  };

  return (
    <div className="hero">
      <div className="card hero-main">
        <div>
          <div className="eyebrow">Modern restaurant</div>
          <h1>Seasonal dining with a refined edge.</h1>
          <p className="lead">
            Enter your text here. This is a great spot to describe your restaurant,
            share your story, or highlight what makes you unique.
          </p>
          <div className="actions">
            <a className="btn primary" href="#menu">Browse Menu</a>
            <a className="btn" href="#contact">Book a Table</a>
          </div>
        </div>
      </div>

      <div className="hero-aside">
        <div className="card image">
          <div className="badge">Fine dining • Cocktails</div>
        </div>

        <button
          onClick={handleLocationClick}
          className="panel"
          style={{
            display: 'block',
            width: '100%',
            textAlign: 'left',
            cursor: 'pointer',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid var(--line)',
            borderRadius: '28px',
            padding: '26px',
            color: 'var(--text)',
            transition: 'border-color 0.2s, background 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(216,168,110,0.4)';
            e.currentTarget.style.background = 'rgba(216,168,110,0.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--line)';
            e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
          }}
        >
          <div className="eyebrow">Location</div>
          <div style={{ fontSize: '1.15rem', marginTop: '8px', lineHeight: '1.6' }}>
            36 Stokes Croft<br />
            Bristol, BS1 3QD
          </div>
        </button>
      </div>
    </div>
  );
}