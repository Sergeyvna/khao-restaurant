import { useState } from 'react'

const foodMenu = [
  {
    id: 1,
    course: 'Starter',
    name: 'Charred Sourdough',
    description: 'Charred sourdough, whipped herb butter, smoked sea salt.',
    details: 'Made fresh daily with our house-milled flour. The herb butter is blended with chive, tarragon, and a touch of lemon zest.',
    allergens: ['Gluten', 'Dairy'],
    dietary: ['V'],
    price: '£8',
    kcal: '120 kcal',
  },
  {
    id: 2,
    course: 'Starter',
    name: 'Seared Scallops',
    description: 'Hand-dived scallops, cauliflower purée, crispy capers, brown butter.',
    details: 'Scallops sourced daily from Scottish waters. Served with a velvety cauliflower purée and sharp caper crumb for contrast.',
    allergens: ['Molluscs', 'Dairy'],
    dietary: [],
    price: '£14',
    kcal: '190 kcal',
  },
  {
    id: 3,
    course: 'Main',
    name: 'Braised Short Rib',
    description: 'Slow-braised short rib, root purée, seasonal greens, red wine jus.',
    details: '72-hour braised beef short rib glazed with a red wine and bone marrow jus. Served with celeriac purée and charred hispi cabbage.',
    allergens: ['Celery', 'Sulphites'],
    dietary: [],
    price: '£24',
    kcal: '540 kcal',
  },
  {
    id: 4,
    course: 'Main',
    name: 'Wild Mushroom Risotto',
    description: 'Arborio rice, porcini, truffle oil, aged parmesan, crispy shallots.',
    details: 'A rotating selection of wild and foraged mushrooms from local suppliers. Finished with aged Parmigiano-Reggiano and black truffle oil.',
    allergens: ['Dairy', 'Gluten'],
    dietary: ['V', 'GF option'],
    price: '£19',
    kcal: '420 kcal',
  },
  {
    id: 5,
    course: 'Dessert',
    name: 'Dark Chocolate Tart',
    description: 'Dark chocolate tart, crème fraîche, candied orange.',
    details: 'Valrhona 70% dark chocolate ganache in a buttery pastry shell. Candied Seville orange peel and a lightly whipped crème fraîche.',
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    dietary: ['V'],
    price: '£9',
    kcal: '310 kcal',
  },
  {
    id: 6,
    course: 'Dessert',
    name: 'Burnt Basque Cheesecake',
    description: 'Basque-style cheesecake, seasonal compote, honeycomb crumble.',
    details: 'Light and creamy centre with a caramelised top. Served warm with a rotating seasonal fruit compote and house-made honeycomb.',
    allergens: ['Dairy', 'Eggs', 'Gluten'],
    dietary: ['V'],
    price: '£10',
    kcal: '380 kcal',
  },
]

const cocktailMenu = [
  {
    id: 101,
    course: 'Signature',
    name: 'Noir Negroni',
    description: 'Aged gin, black walnut bitters, sweet vermouth, activated charcoal.',
    details: 'Our twist on the classic. We use a 5-year barrel-aged gin and our own house-infused black walnut bitters. Stirred 60 seconds over ice, served with a burnt orange coin.',
    allergens: ['Sulphites'],
    dietary: ['VG'],
    price: '£13',
    kcal: '185 kcal',
  },
  {
    id: 102,
    course: 'Signature',
    name: 'Truffle Martini',
    description: 'Vodka, dry vermouth, white truffle oil, salted olive.',
    details: 'A savoury martini for refined palates. White truffle oil is used sparingly to add depth without overpowering. Garnished with a hand-stuffed blue cheese olive.',
    allergens: ['Dairy'],
    dietary: [],
    price: '£15',
    kcal: '165 kcal',
  },
  {
    id: 103,
    course: 'Classics',
    name: 'Old Fashioned',
    description: 'Bourbon, demerara syrup, Angostura bitters, smoked orange peel.',
    details: 'Made with a Kentucky small-batch bourbon and house-made demerara syrup. We cold-smoke the orange peel tableside for a theatrical finish.',
    allergens: [],
    dietary: ['VG'],
    price: '£12',
    kcal: '175 kcal',
  },
  {
    id: 104,
    course: 'Classics',
    name: 'Espresso Martini',
    description: 'Vodka, Kahlúa, fresh espresso, vanilla sugar.',
    details: 'Made with a double shot of our house espresso blend, pulled fresh to order. Shaken hard for a frothy, velvety finish.',
    allergens: [],
    dietary: ['VG'],
    price: '£12',
    kcal: '195 kcal',
  },
  {
    id: 105,
    course: 'Low & No',
    name: 'Garden Spritz',
    description: 'Seedlip Garden, elderflower, cucumber, tonic, fresh mint.',
    details: 'A refreshing non-alcoholic option built around Seedlip Garden 108. Layered with elderflower cordial, fresh cucumber ribbons, and a generous mint bouquet.',
    allergens: [],
    dietary: ['VG', 'NA'],
    price: '£8',
    kcal: '65 kcal',
  },
  {
    id: 106,
    course: 'Low & No',
    name: 'Smoked Shrub Sour',
    description: 'Lapsang shrub, lemon, aquafaba, smoked salt, hibiscus foam.',
    details: 'A complex non-alcoholic sour built on a house-made lapsang souchong and apple cider vinegar shrub. Aquafaba provides a silky foam finish.',
    allergens: [],
    dietary: ['VG', 'NA'],
    price: '£8',
    kcal: '55 kcal',
  },
]

const dietaryStyles = {
  'V':         { background: '#1a2e1a', color: '#7ec87e' },
  'VG':        { background: '#1a2a1a', color: '#5ebd5e' },
  'GF option': { background: '#2a2410', color: '#c9a84c' },
  'NA':        { background: '#1a1f2e', color: '#7896c8' },
}

function MenuItem({ item }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="item">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: '0 0 6px', fontSize: '1.05rem' }}>{item.name}</h3>
          <p style={{ margin: 0, color: 'var(--muted)', lineHeight: 1.7, fontSize: '0.92rem' }}>{item.description}</p>
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '1rem' }}>{item.price}</div>
          <div style={{ color: 'var(--muted)', fontSize: '0.78rem', marginTop: '2px' }}>{item.kcal}</div>
        </div>
      </div>

      {item.dietary.length > 0 && (
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '10px' }}>
          {item.dietary.map((tag) => (
            <span key={tag} style={{ fontSize: '0.7rem', fontWeight: 600, padding: '3px 8px', borderRadius: '999px', ...(dietaryStyles[tag] || {}) }}>
              {tag}
            </span>
          ))}
        </div>
      )}

      <div style={{
        overflow: 'hidden',
        maxHeight: expanded ? '200px' : '0',
        opacity: expanded ? 1 : 0,
        transition: 'max-height 0.3s ease, opacity 0.25s ease',
      }}>
        <p style={{ margin: '12px 0 0', color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.75, borderTop: '1px solid var(--line)', paddingTop: '12px' }}>
          {item.details}
        </p>
        {item.allergens.length > 0 && (
          <p style={{ margin: '8px 0 0', fontSize: '0.78rem', color: 'var(--muted)', opacity: 0.6 }}>
            Contains: {item.allergens.join(', ')}
          </p>
        )}
      </div>

      <button
        onClick={() => setExpanded((e) => !e)}
        style={{
          marginTop: '12px',
          background: 'none',
          border: '1px solid var(--line)',
          color: 'var(--muted)',
          padding: '6px 14px',
          borderRadius: '999px',
          fontSize: '0.78rem',
          cursor: 'pointer',
        }}
      >
        {expanded ? '↑ Less info' : '↓ More info'}
      </button>
    </div>
  )
}

export default function MenuSection() {
  const [activeMenu, setActiveMenu] = useState('food')
  const items = activeMenu === 'food' ? foodMenu : cocktailMenu
  const courses = [...new Set(items.map((i) => i.course))]

  return (
    <section id="menu">
      <div className="section-title">
        <h2>Menu</h2>
        <div style={{ display: 'flex', gap: '8px' }}>
          {[{ key: 'food', label: 'Food' }, { key: 'cocktails', label: 'Cocktails' }].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveMenu(key)}
              style={{
                padding: '8px 18px',
                borderRadius: '999px',
                border: '1px solid',
                borderColor: activeMenu === key ? 'transparent' : 'var(--line)',
                background: activeMenu === key ? 'var(--accent)' : 'transparent',
                color: activeMenu === key ? '#1b130b' : 'var(--muted)',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {courses.map((course) => (
        <div key={course} style={{ marginBottom: '28px' }}>
          <div style={{
            fontSize: '0.72rem',
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            fontWeight: 700,
            marginBottom: '12px',
            paddingBottom: '8px',
            borderBottom: '1px solid var(--line)',
          }}>
            {course}
          </div>
          <div className="menu">
            {items.filter((i) => i.course === course).map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
