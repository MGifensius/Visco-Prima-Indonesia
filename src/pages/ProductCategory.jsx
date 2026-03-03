import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Droplets } from 'lucide-react'
import { usePageAnimations } from '../hooks/useAnimations'
import { categoryInfo, products } from '../data/products'

function ProductImage({ product, catColor, catBg }) {
  // Hash for slight variation per product (size, position)
  const hash = product.id.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
  const variant = hash % 3  // 0, 1, or 2 — slight visual variation
  const shortCode = product.code.replace('VISCO® ', '')

  return (
    <div className="pcard__img" style={{ background: `linear-gradient(145deg, ${catBg}, ${catColor}0a)` }}>
      <svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', padding: '8px' }}>

        {/* Subtle background blobs */}
        <circle cx={30 + variant * 20} cy={20 + variant * 10} r={38 + variant * 8}
          fill={catColor} opacity="0.05" />
        <circle cx={190 - variant * 15} cy={130 - variant * 10} r={44 + variant * 6}
          fill={catColor} opacity="0.04" />

        {/* ── JERRYCAN BODY ── */}
        {/* Main body */}
        <rect x="62" y="42" width="96" height="104" rx="10" fill={catColor} opacity="0.88" />

        {/* Top shoulder (slightly narrower) */}
        <rect x="72" y="28" width="76" height="20" rx="6" fill={catColor} opacity="0.92" />

        {/* Neck */}
        <rect x="88" y="16" width="44" height="16" rx="5" fill={catColor} opacity="0.95" />

        {/* Cap */}
        <rect x="94" y="8" width="32" height="11" rx="5.5" fill={catColor} />
        <rect x="97" y="9" width="14" height="6" rx="3" fill="white" opacity="0.22" />

        {/* Left handle */}
        <path d="M62 58 Q44 58 44 76 Q44 96 62 96"
          stroke={catColor} strokeWidth="11" fill="none"
          strokeLinecap="round" opacity="0.65" />
        {/* Handle highlight */}
        <path d="M62 58 Q46 58 46 76 Q46 96 62 96"
          stroke="white" strokeWidth="3" fill="none"
          strokeLinecap="round" opacity="0.1" />

        {/* Right side grip indentation */}
        <rect x="150" y="70" width="8" height="50" rx="4" fill="black" opacity="0.08" />

        {/* ── WHITE LABEL PANEL ── */}
        <rect x="72" y="68" width="76" height="64" rx="5" fill="white" opacity="0.97" />

        {/* Label top color band */}
        <rect x="72" y="68" width="76" height="12" rx="5" fill={catColor} opacity="0.12" />
        <rect x="72" y="74" width="76" height="6" fill={catColor} opacity="0.08" />

        {/* VISCO® brand */}
        <text x="110" y="90" textAnchor="middle" fill={catColor}
          fontSize="10.5" fontWeight="800" fontFamily="'Syne', Arial, sans-serif"
          letterSpacing="0.5">VISCO®</text>

        {/* Product code */}
        <text x="110" y="103" textAnchor="middle" fill={catColor}
          fontSize="6.8" fontWeight="700" fontFamily="Arial, sans-serif"
          opacity="0.65" letterSpacing="0.3">{shortCode}</text>

        {/* Divider */}
        <rect x="78" y="107" width="64" height="1.2" rx="0.6" fill={catColor} opacity="0.15" />

        {/* Description stub lines */}
        <rect x="78" y="113" width="58" height="2.2" rx="1.1" fill={catColor} opacity="0.12" />
        <rect x="78" y="119" width="48" height="2.2" rx="1.1" fill={catColor} opacity="0.09" />
        <rect x="78" y="125" width="54" height="2.2" rx="1.1" fill={catColor} opacity="0.07" />

        {/* ── SURFACE DETAIL ── */}
        {/* Left body shine */}
        <rect x="64" y="46" width="12" height="96" rx="6" fill="white" opacity="0.07" />
        {/* Top shine */}
        <rect x="64" y="42" width="90" height="8" rx="4" fill="white" opacity="0.1" />

        {/* Grip ribs on right side */}
        <rect x="152" y="82" width="5" height="4" rx="1.5" fill="white" opacity="0.12" />
        <rect x="152" y="90" width="5" height="4" rx="1.5" fill="white" opacity="0.12" />
        <rect x="152" y="98" width="5" height="4" rx="1.5" fill="white" opacity="0.12" />
        <rect x="152" y="106" width="5" height="4" rx="1.5" fill="white" opacity="0.12" />
        <rect x="152" y="114" width="5" height="4" rx="1.5" fill="white" opacity="0.12" />

        {/* Bottom shadow */}
        <ellipse cx="110" cy="148" rx="44" ry="5" fill={catColor} opacity="0.08" />
      </svg>

      {/* Bottom gradient overlay */}
      <div className="pcard__img-overlay"
        style={{ background: `linear-gradient(to top, ${catColor}18, transparent 60%)` }} />
    </div>
  )
}

export default function ProductCategory() {
  usePageAnimations()
  const { category } = useParams()
  const catInfo = categoryInfo[category]
  const [activeSubcat, setActiveSubcat] = useState(null)
  const [heroImgError, setHeroImgError] = useState(false)

  if (!catInfo) {
    return (
      <section className="section-y" style={{ textAlign: 'center', paddingTop: 180 }}>
        <div className="container">
          <h2>Kategori tidak ditemukan</h2>
          <p style={{ marginTop: 12, color: 'var(--text-light)' }}>Kategori produk yang Anda cari tidak tersedia.</p>
          <Link to="/products" className="btn btn-dark" style={{ marginTop: 24 }}>
            <ArrowLeft size={18} /> Kembali ke Katalog
          </Link>
        </div>
      </section>
    )
  }

  const catProducts = products.filter(p => p.category === category)

  // Group products by subcategory
  const subcategories = []
  const subcatMap = {}
  catProducts.forEach(p => {
    const sub = p.subcategory || 'Lainnya'
    if (!subcatMap[sub]) {
      subcatMap[sub] = []
      subcategories.push(sub)
    }
    subcatMap[sub].push(p)
  })

  const filteredSubcats = activeSubcat ? [activeSubcat] : subcategories

  return (
    <>
      {/* HERO HEADER */}
      <section className="cat-page-hero" style={{ '--cat-color': catInfo.color, '--cat-bg': catInfo.bg }}>
        <div className="cat-page-hero__img-col">
          {catInfo.heroImage && !heroImgError ? (
            <img src={catInfo.heroImage} alt={catInfo.title} onError={() => setHeroImgError(true)} loading="eager" />
          ) : (
            <div className="cat-page-hero__img-placeholder" />
          )}
          <div className="cat-page-hero__img-overlay" />
        </div>
        <div className="cat-page-hero__content-col">
          <div className="container">
            <nav className="breadcrumb breadcrumb--dark">
              <Link to="/" className="breadcrumb__link">Beranda</Link>
              <span className="breadcrumb__sep">/</span>
              <Link to="/products" className="breadcrumb__link">Produk</Link>
              <span className="breadcrumb__sep">/</span>
              <span className="breadcrumb__current">{catInfo.title}</span>
            </nav>
            <span className="cat-page-hero__label">VISCO® Industrial Chemicals</span>
            <h1 className="cat-page-hero__title">{catInfo.title}</h1>
            <p className="cat-page-hero__desc">{catInfo.description}</p>
            <div className="cat-page-hero__stats">
              <div className="cat-page-hero__stat">
                <strong>{catProducts.length}</strong>
                <span>Produk</span>
              </div>
              <div className="cat-page-hero__stat-divider" />
              <div className="cat-page-hero__stat">
                <strong>{subcategories.length}</strong>
                <span>Kategori</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUBCATEGORY FILTER */}
      {subcategories.length > 1 && (
        <section className="subcat-filter-section" style={{ borderBottom: `1px solid ${catInfo.color}15` }}>
          <div className="container">
            <div className="subcat-filter">
              <button
                className={`subcat-chip${!activeSubcat ? ' active' : ''}`}
                style={{ '--chip-color': catInfo.color, '--chip-bg': catInfo.bg }}
                onClick={() => setActiveSubcat(null)}
              >
                Semua ({catProducts.length})
              </button>
              {subcategories.map(sub => (
                <button
                  key={sub}
                  className={`subcat-chip${activeSubcat === sub ? ' active' : ''}`}
                  style={{ '--chip-color': catInfo.color, '--chip-bg': catInfo.bg }}
                  onClick={() => setActiveSubcat(activeSubcat === sub ? null : sub)}
                >
                  {sub} ({subcatMap[sub].length})
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PRODUCTS GROUPED BY SUBCATEGORY */}
      <section className="section-y bg-surface" style={{ paddingTop: 72 }}>
        <div className="container">
          {filteredSubcats.map(sub => (
            <div className="subcat-section gs-reveal" key={sub}>
              <div className="subcat-header">
                <div>
                  <h3 className="subcat-header__title section-title" style={{ fontSize: "var(--text-xl)" }}>{sub}</h3>
                  <span className="subcat-header__count">{subcatMap[sub].length} produk</span>
                </div>
              </div>
              <div className="pcard-grid">
                {subcatMap[sub].map(product => (
                  <article className="pcard" key={product.id}>
                    <ProductImage product={product} catColor={catInfo.color} catBg={catInfo.bg} />
                    <div className="pcard__body">
                      <span className="pcard__code" style={{ color: catInfo.color, background: `${catInfo.color}12` }}>{product.code}</span>
                      <h3 className="pcard__name">{product.name}</h3>
                      <p className="pcard__desc">{product.description}</p>
                      <div className="pcard__func" style={{ background: catInfo.bg, color: catInfo.color }}>
                        <Droplets size={14} /> {product.fungsi}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}

          {catProducts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <p style={{ color: 'var(--text-light)', fontSize: '1.05rem' }}>Belum ada produk dalam kategori ini.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
