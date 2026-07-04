import { useState } from 'react'

/*
  ============================================================
  PLACEHOLDER DATA — replace names / descriptions / prices /
  kcal / allergens with your real menu. Counts match what you
  described:
    Starters        x6
    From the Kitchen: Stone Baked Pizza x2 + 5 other items
    Biryani         x2
    Sides           x6
    Desserts        x3
    Friday Special  x1 (shown as a banner, not in the accordion)
  ============================================================
*/

const fridaySpecial = {
  name: 'Pan-Fried Cod & Chips',
  description: 'Fresh pan-fried cod, seasoned chunky chips, house saland and homemade tartare sauce.',
  price: '£18',
  dietary: ["DF", "GF", "NF"],
}

const categories = [
  {
    key: 'main-menu',
    label: 'Main Menu',
    subgroups: [
      {
        heading: 'SMALL PLATES',
        items: [
          {
            id: 1,
            name: 'Quesadilla',
            description: 'Choose from: Paneer or Chicken Tikka House-marinated panner or chicken tikka, roasted begetables, melted cheese and fresh avocado.',
            dietary: ['NF'],
            price: '£9',
          },
          {
            id: 2,
            name: 'House Drumsticks',
            description: 'Two slow-roasted drumsticks, served with our seasonal house salad.',
            dietary: ['GF','NF'],
            price: '£8.5',
          },
          {
            id: 3,
            name: 'Tofu Bao',
            description: 'Steamed bao, herb-marinated tofu, hose pickles and fresh herbs.',
            dietary: ['DF','NF'],
            price: '£8',
          },
          {
            id: 4,
            name: 'Black-Eyed Bean Fritters',
            description: 'Crisp black-eyed bean fritters, house salad and mint chutney.',
            dietary: ['DF','GF','NF','V'],
            price: '£8',
          },
          {
            id: 5,
            name: 'Lamb Chops',
            description: 'Pan-seared lamb chops with warming spices, house salad and mint chutney.',
            dietary: ['DF','GF','NF'],
            price: '£12',
          },
           {
            id: 6,
            name: 'Seared Scallops',
            description: 'Fresh herb orzo salad with a light citrus dressing.',
            dietary: ['DF','NF'],
            price: '£13',
          },
        ],
      },
      {
        heading: 'From the Kitchen',
        subsections: [
          {
            heading: 'Stone Baked Pizza',
            items: [
              {
              id: `pizza-1`,
              name: `Roasted Chicken & Cheese`,
              description: 'Roasted chicken, mozzarella and fresh herbs.',
              dietary: [],
              price: '£16',
            },
            {
              id: `pizza-2`,
              name: `Vegetarian`,
              description: 'Roasted peppers, red onion, sweetcorn, mushrooms, mozzarella and fresh herbs.',
              dietary: [],
              price: '£15',
            },
            ]
          },
        ],
        items: [
              {
              id: `kitchen-1`,
              name: `Butter Chicken`,
              description: 'Chargrilled chicken in a velvety tomato butter suce finished with fragrant spices.',
              dietary: ['GF'],
              price: '£17',
            },
            {
              id: `kitchen-2`,
              name: `Jangli Maans`,
              description: 'Slow-braisedlamb on the bode wiht smoked spices and rich cooking juices.',
              dietary: ['DF','GF','NF'],
              price: '£18',
            },
            {
              id: `kitchen-3`,
              name: `Garden Harvest Bowl`,
              description: 'Spinach, roasted butternut squash, chickpeas, sweetcorn and carrots with fresh herbs.',
              dietary: ['DF','GF','NF','V'],
              price: '£16',
            },
            {
              id: `kitchen-4`,
              name: `Fire-Roasted Bean Chilli`,
              description: 'Roasted seasonal vegetables and mixed beans with smoked spices.',
              dietary: ['DF','GF','NF','V'],
              price: '£15',
            },
            {
              id: `kitchen-5`,
              name: `Charred Octopus`,
              description: 'Tender marinated octopus served with wild rice and seasonal greens.',
              dietary: ['DF','GF','NF'],
              price: '£20',
            },]
      },
      {
        heading: 'Biryani',
        items: [{
          id: `biryani-1`,
          name: `Chicken`,
          description: '',
          dietary: [],
          price: '£18',
        },
        {
          id: `biryani-2`,
          name: `Jackfruit`,
          description: 'Fragrant basmati rice layered with aromatic spices and served with a cooling raita.',
          dietary: ['GF','NF'],
          price: '£17',
        },
        ]
      },
      {
        heading: 'Sides',
        items: [{
          id: `side-1`,
          name: `Pilao Rice`,
          description: '',
          dietary: [],
          price: '£4',
        },
        {
          id: `side-2`,
          name: `Chunky Chips`,
          description: '',
          dietary: [],
          price: '£5',
        },
        {
          id: `side-3`,
          name: `Mountain Lambs`,
          description: '',
          dietary: [],
          price: '£6',
        },
        {
          id: `side-4`,
          name: `House Salad`,
          description: '',
          dietary: [],
          price: '£5',
        },
        {
          id: `side-5`,
          name: `Herb Orzo Salad`,
          description: '',
          dietary: [],
          price: '£5',
        },
        {
          id: `side-6`,
          name: `Fresh Bread`,
          description: '',
          dietary: [],
          price: '£4',
        },]
      },
      {
        heading: 'Desserts',
        items: [{
          id: `dessert-1`,
          name: `Mango & Pistachio Cream`,
          description: '',
          dietary: ['GF'],
          price: '£8',
        },
        {
          id: `dessert-2`,
          name: `Warm Vegan Brownie`,
          description: '',
          dietary: [],
          price: '£7',
        },
        {
          id: `dessert-3`,
          name: `Mochi Ice Cream`,
          description: '',
          dietary: [],
          price: '£7',
        },]
      },
    ],
  },
  {
    key: 'lunch-set',
    label: 'Lunch Set',
    availability: 'Available Monday – Saturday',
    intro: 'All lunch dishes include chips and your choice of soft drink.',
    items: [{
          id: `lunch-1`,
          name: `Chiken Tikka Burger`,
          description: 'House-marinated chicken tikka, crips saland and mint yoghurt.',
          dietary: ['NF'],
          price: '£12',
        },
        {
          id: `lunch-2`,
          name: `Beef Burger`,
          description: 'Seasoned beef, mature cheddar, crisp salad and house burger sauce.',
          dietary: ['NF'],
          price: '£13',
        },
        {
          id: `lunch-3`,
          name: `Vegan Burger`,
          description: 'Herb-marinated tofu, roasted tomato relish and house pickles.',
          dietary: ['NF','DF','V'],
          price: '£12',
        },
         {
          id: `lunch-4`,
          name: `Chicken Wrap`,
          description: 'House-marinated chicken tikka, crisp salad and mint sauce.',
          dietary: ['NF'],
          price: '£11',
        },
         {
          id: `lunch-5`,
          name: `Aubergine Wrap & Egg Wrap`,
          description: 'Roasted aubergine, egg and fresh herbs.',
          dietary: ['NF'],
          price: '£11',
        },
      ],
    footer: "All wraps are served in our chef's freshly baked homemade bread.",
  },
  {
    key: 'sunday-roast',
    label: 'Sunday Roast',
    availability: 'Every Sunday | Served until sold out',
    items: [{
          id: `roast-1`,
          name: `Slow-Braised Farm Beef`,
          description: 'Honey-glazed carrots, roasted potatoes, brocolli, corn on the cob, Yorkshire pudding and rich homemade gravy.',
          dietary: ['DF','NF'],
          price: '£22',
        },
        {
          id: `roast-2`,
          name: `Pan-Seared Seabass`,
          description: 'Served with roasted seasonal vegetables.',
          dietary: ['DF','NF'],
          price: '£21',
        },
        {
          id: `roast-3`,
          name: `Soya Chaap Roast`,
          description: 'Marinated soya chaap served with roasted seasonal vegetables.',
          dietary: ['GF','NF','V'],
          price: '£18',
        },
      ],
  },
  {
    key: 'cocktails',
    label: 'Cocktails',
    items: Array.from({ length: 6 }, (_, i) => ({
      id: `cocktail-${i + 1}`,
      name: `Cocktail ${i + 1}`,
      description: 'Short description.',
      details: 'Longer description.',
      allergens: [],
      dietary: [],
      price: '£0',
      kcal: '0 kcal',
    })),
  },
]

function MenuItem({ item }) {
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
            <span
              key={tag}
              style={{
                fontSize: '0.7rem',
                fontWeight: 600,
                padding: '3px 8px',
                borderRadius: '999px',
                border: '1px solid var(--accent)',
                color: 'var(--accent)',
                background: 'transparent',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

function FridaySpecialBanner({ item }) {
  return (
    <div
      style={{
        border: '1px solid var(--accent)',
        borderRadius: '12px',
        padding: '18px 20px',
        marginBottom: '32px',
        background: 'linear-gradient(135deg, rgba(217,119,87,0.08), transparent)',
      }}
    >
      <div
        style={{
          fontSize: '0.7rem',
          color: 'var(--accent)',
          textTransform: 'uppercase',
          letterSpacing: '0.25em',
          fontWeight: 700,
          marginBottom: '10px',
        }}
      >
        Friday Special
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: '0 0 6px', fontSize: '1.1rem' }}>{item.name}</h3>
          <p style={{ margin: 0, color: 'var(--muted)', lineHeight: 1.7, fontSize: '0.92rem' }}>{item.description}</p>
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '1rem' }}>{item.price}</div>
          <div style={{ color: 'var(--muted)', fontSize: '0.78rem', marginTop: '2px' }}>{item.kcal}</div>
        </div>
      </div>
    </div>
  )
}

function LunchSetContent({ category }) {
  return (
    <div>
      <p style={{ margin: '0 0 16px', color: 'var(--accent)', fontWeight: 600, fontSize: '0.95rem' }}>
        {category.availability}
      </p>
      <div style={{ borderTop: '1px solid var(--line)', marginBottom: '16px' }} />

      <p style={{ margin: '0 0 16px', color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.7 }}>
        {category.intro}
      </p>
      <div style={{ borderTop: '1px solid var(--line)', marginBottom: '20px' }} />

      <div>
        {category.items.map((item) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              gap: '12px',
              padding: '14px 0',
              borderBottom: '1px solid var(--line)',
            }}
          >
            <div>
              <h3 style={{ margin: '0 0 4px', fontSize: '1.02rem' }}>{item.name}</h3>
              <p style={{ margin: 0, color: 'var(--muted)', lineHeight: 1.6, fontSize: '0.9rem' }}>{item.description}</p>
            </div>
            <div style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '1rem', flexShrink: 0 }}>{item.price}</div>
          </div>
        ))}
      </div>

      {category.footer && (
        <p style={{ margin: '20px 0 0', color: 'var(--muted)', fontSize: '0.85rem', fontStyle: 'italic' }}>
          {category.footer}
        </p>
      )}
    </div>
  )
}

function SundayRoastContent({ category }) {
  return (
    <div>
      <p style={{ margin: '0 0 16px', color: 'var(--accent)', fontWeight: 600, fontSize: '0.95rem' }}>
        {category.availability}
      </p>

      <p style={{ margin: '0 0 16px', color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.7 }}>
        {category.intro}
      </p>
      <div style={{ borderTop: '1px solid var(--line)', marginBottom: '20px' }} />

      <div>
        {category.items.map((item) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              gap: '12px',
              padding: '14px 0',
              borderBottom: '1px solid var(--line)',
            }}
          >
            <div>
              <h3 style={{ margin: '0 0 4px', fontSize: '1.02rem' }}>{item.name}</h3>
              <p style={{ margin: 0, color: 'var(--muted)', lineHeight: 1.6, fontSize: '0.9rem' }}>{item.description}</p>
            </div>
            <div style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '1rem', flexShrink: 0 }}>{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  )
}



function CategoryContent({ category }) {
  return (
    <div>
      {category.items && (
        <div className="menu">
          {category.items.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      )}

      {category.subgroups &&
        category.subgroups.map((group, gi) => (
          <div key={gi} style={{ marginBottom: '40px' }}>
            {group.heading && (
              <div
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  marginBottom: '18px',
                  paddingBottom: '10px',
                  borderBottom: '2px solid var(--accent)',
                }}
              >
                {group.heading}
              </div>
            )}
            {group.items && (
              <div className="menu">
                {group.items.map((item) => (
                  <MenuItem key={item.id} item={item} />
                ))}
              </div>
            )}

            {group.subsections &&
              group.subsections.map((sub, si) => (
                <div key={si} style={{ marginTop: group.items ? '28px' : 0 }}>
                  <div
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: 'var(--muted)',
                      marginBottom: '12px',
                    }}
                  >
                    {sub.heading}
                  </div>
                  <div className="menu">
                    {sub.items.map((item) => (
                      <MenuItem key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              ))}
          </div>
        ))}
    </div>
  )
}

function DietaryKey() {
  const entries = [
    { tag: 'GF', label: 'Gluten-free' },
    { tag: 'DF', label: 'Dairy-free' },
    { tag: 'NF', label: 'Nut-free' },
    { tag: 'V', label: 'Vegan' },
  ]

  return (
    <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--line)' }}>
      <div
        style={{
          fontSize: '0.85rem',
          fontWeight: 700,
          color: 'var(--accent)',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          marginBottom: '14px',
        }}
      >
        Dietary Information
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {entries.map(({ tag, label }) => (
          <div key={tag} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 600,
                padding: '3px 8px',
                borderRadius: '999px',
                border: '1px solid var(--accent)',
                color: 'var(--accent)',
              }}
            >
              {tag}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function MenuSection() {
  const [activeKey, setActiveKey] = useState(categories[0].key)
  const activeCategory = categories.find((c) => c.key === activeKey)

  return (
    <section id="menu">
      <div className="section-title">
        <h2>Menu</h2>
      </div>

      <FridaySpecialBanner item={fridaySpecial} />

      {/* tab pills — only the selected category renders below */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
        {categories.map((c) => (
          <button
            key={c.key}
            onClick={() => setActiveKey(c.key)}
            style={{
              padding: '10px 20px',
              borderRadius: '999px',
              border: '1px solid',
              borderColor: activeKey === c.key ? 'transparent' : 'var(--line)',
              background: activeKey === c.key ? 'var(--accent)' : 'transparent',
              color: activeKey === c.key ? '#1b130b' : 'var(--muted)',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {c.label}
          </button>
        ))}
      </div>

      {activeCategory.key === 'lunch-set' ? (
          <LunchSetContent category={activeCategory} />
        ) : activeCategory.key === 'sunday-roast' ? (
          <SundayRoastContent category={activeCategory} />
        ) : (
          <CategoryContent category={activeCategory} />
        )
      }

      <DietaryKey />
    </section>
  )
}