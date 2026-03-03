import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import {
  ArrowRight, FileDown, Flame, Snowflake, Wrench, Filter,
  Droplets, Zap, ChevronRight, Package, Settings
} from 'lucide-react'
import { usePageAnimations } from '../hooks/useAnimations'
import { categoryInfo, products } from '../data/products'
import { equipmentCategories } from '../data/equipment'

const categoryIcons = {
  boiler: Flame,
  cooling: Snowflake,
  cleaning: Wrench,
  'ro-membrane': Filter,
  'wtp-wwtp': Droplets,
}

const categoryImages = {
  boiler:       '/images/products/cat-boiler.jpg',
  cooling:      '/images/products/cat-cooling.jpg',
  cleaning:     '/images/products/cat-cleaning.jpg',
  'ro-membrane':'/images/products/cat-ro-membrane.jpg',
  'wtp-wwtp':   '/images/products/cat-wtp-wwtp.jpg',
}

export default function Products() {
  usePageAnimations()
  const cats = Object.values(categoryInfo)

  return (
    <>
      <SEOHead
        path="/products"
        description="Produk kimia VISCO® dan peralatan water treatment — rangkaian lengkap untuk kebutuhan industri di seluruh Indonesia."
      />

      {/* ── PAGE HERO ─────────────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero__bg">
          {/* Replace: /public/images/products-hero.jpg */}
          <img src="/images/products-hero.jpg" alt="" loading="eager" />
        </div>
        <div className="page-hero__overlay" />
        <div className="page-hero__grid" />
        <div className="page-hero__accent" />
        <div className="container">
          <div className="page-hero__content">
            <nav className="breadcrumb">
              <Link to="/" className="breadcrumb__link">Beranda</Link>
              <span className="breadcrumb__sep">/</span>
              <span className="breadcrumb__current">Produk</span>
            </nav>
            <span className="section-tag section-label--light">Katalog Produk VISCO®</span>
            <h1>Produk & Peralatan<br />Water Treatment</h1>
            <p>Rangkaian lengkap produk kimia water treatment dan peralatan instalasi pengolahan air untuk memenuhi kebutuhan industri di seluruh Indonesia.</p>
          </div>
        </div>
      </section>

      {/* ── QUICK STATS ───────────────────────────────────── */}
      <div className="prod-stats-strip">
        <div className="container">
          <div className="prod-stats-strip__inner">
            <div className="prod-stats-strip__item">
              <Package size={18} />
              <strong>60+</strong>
              <span>Produk Kimia</span>
            </div>
            <div className="prod-stats-strip__divider" />
            <div className="prod-stats-strip__item">
              <Settings size={18} />
              <strong>5</strong>
              <span>Jenis Peralatan</span>
            </div>
            <div className="prod-stats-strip__divider" />
            <div className="prod-stats-strip__item">
              <Droplets size={18} />
              <strong>5</strong>
              <span>Kategori Kimia</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── INDUSTRIAL CHEMICALS ──────────────────────────── */}
      <section className="section-y" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="prod-section-header gs-reveal">
            <div>
              <span className="section-tag">VISCO® Industrial Chemicals</span>
              <h2 className="section-title">Produk Kimia Industri</h2>
            </div>
            <p className="section-desc">Produk kimia bermerek VISCO® untuk perawatan boiler, cooling system, membran R/O, pengolahan air bersih dan limbah.</p>
          </div>

          <div className="prod-cat-grid">
            {cats.map((cat) => {
              const count = products.filter(p => p.category === cat.slug).length
              const Icon = categoryIcons[cat.slug]
              return (
                <Link to={`/products/${cat.slug}`} className="prod-cat-card gs-reveal" key={cat.slug}>
                  <div className="prod-cat-card__img">
                    <img src={categoryImages[cat.slug]} alt={cat.title} loading="lazy" />
                    <div className="prod-cat-card__img-overlay" />
                    <div className="prod-cat-card__img-meta">
                      <span className="prod-cat-card__count">{count} produk</span>
                    </div>
                  </div>
                  <div className="prod-cat-card__body">
                    <div className="prod-cat-card__icon" style={{ '--cat-clr': cat.color }}>
                      {Icon && <Icon size={20} />}
                    </div>
                    <h3>{cat.title}</h3>
                    <p>{cat.description}</p>
                    <span className="prod-cat-card__link">
                      Lihat Produk <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WATER TREATMENT SYSTEMS ──────────────────────── */}
      <section className="section-y" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="prod-section-header gs-reveal">
            <div>
              <span className="section-tag">Water Treatment Systems</span>
              <h2 className="section-title">Peralatan & Instalasi</h2>
            </div>
            <p className="section-desc">Peralatan instalasi pengolahan air yang dirancang dan dikonstruksi oleh tenaga engineer berpengalaman.</p>
          </div>

          <div className="prod-equip-grid">
            {equipmentCategories.map((eq) => (
              <Link to="/products/equipment" className="prod-equip-card gs-reveal" key={eq.id}>
                <div className="prod-equip-card__img">
                  <img src={eq.image} alt={eq.shortTitle} loading="lazy" />
                  <div className="prod-equip-card__img-overlay" />
                  <span className="prod-equip-card__badge">{eq.models.length} model</span>
                </div>
                <div className="prod-equip-card__body">
                  <h3>{eq.shortTitle}</h3>
                  <p>{eq.description.substring(0, 100)}...</p>
                  <div className="prod-equip-card__specs">
                    {eq.specs?.slice(0, 2).map((s, i) => (
                      <span key={i} className="prod-equip-card__spec">{s}</span>
                    ))}
                  </div>
                  <span className="prod-equip-card__link">
                    Lihat Detail <ChevronRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATALOGUE CTA ─────────────────────────────────── */}
      <section className="prod-cta-section">
        <div className="prod-cta-section__glow" />
        <div className="container">
          <div className="prod-cta-section__inner gs-reveal">
            <div className="prod-cta-section__icon">
              <FileDown size={32} />
            </div>
            <div className="prod-cta-section__text">
              <h3>Download Katalog Produk VISCO® 2024</h3>
              <p>Unduh katalog lengkap berisi spesifikasi seluruh produk kimia dan peralatan water treatment dalam format PDF.</p>
            </div>
            <a href="/Katalog_VISCO_2024.pdf" target="_blank" rel="noopener noreferrer" className="btn btn--accent btn--lg">
              <FileDown size={18} /> Download PDF
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
