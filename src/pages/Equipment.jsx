import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Gauge, ChevronRight } from 'lucide-react'
import { usePageAnimations } from '../hooks/useAnimations'
import { equipmentCategories } from '../data/equipment'

function EquipmentCard({ eq, isActive, onClick }) {
  return (
    <button className={`eqcard${isActive ? ' eqcard--active' : ''}`} onClick={onClick}>
      <div className="eqcard__img-placeholder"><Gauge size={20} /></div>
      <div className="eqcard__body">
        <h4>{eq.shortTitle}</h4>
        {eq.specs && <div className="eqcard__specs">{eq.specs.map((s, i) => <span key={i}>{s}</span>)}</div>}
      </div>
      <ChevronRight size={16} className="eqcard__arrow" />
    </button>
  )
}

function SpecTable({ columns, keys, rows, title }) {
  return (
    <>
      {title && <h3 style={{ marginTop: 32, fontSize: '1.15rem', color: 'var(--text)' }}>{title}</h3>}
      <div className="equip-table-wrap" style={title ? { marginTop: 12 } : undefined}>
        <table className="equip-table">
          <thead><tr>{columns.map(c => <th key={c}>{c}</th>)}</tr></thead>
          <tbody>{rows.map((row, i) => <tr key={i}>{keys.map(k => <td key={k}>{row[k]}</td>)}</tr>)}</tbody>
        </table>
      </div>
    </>
  )
}

function DetailPanel({ active }) {
  return (
    <div className="equip-detail" key={active.id}>
      <div className="equip-detail__hero">
        <img src={active.image} alt={active.shortTitle} loading="lazy" />
        <div className="equip-detail__hero-overlay">
          <h2>{active.title}</h2>
          {active.specs && <div className="equip-detail__hero-specs">{active.specs.map((s, i) => <span key={i}>{s}</span>)}</div>}
        </div>
      </div>

      <div className="equip-detail__content">
        <p className="equip-panel-desc">{active.description}</p>
        <SpecTable columns={active.columns} keys={active.keys} rows={active.models} />

        {active.mixedBedModels && (
          <SpecTable
            title="Mixed Bed Deionizer (AMB)"
            columns={['Model', 'Capacity (m³/h)', 'Exchange Cap. (grains)', 'Piping (inch)']}
            keys={['model', 'capacity', 'exchange', 'piping']}
            rows={active.mixedBedModels}
          />
        )}

        {active.portableModels && (
          <>
            <h3 style={{ marginTop: 32, fontSize: '1.15rem' }}>Portable Mixed Bed Deionizer (PMB)</h3>
            <p className="equip-panel-desc" style={{ marginBottom: 12 }}>Tersedia dalam ukuran Small, Medium, Large, dan King untuk kemudahan penggantian.</p>
            <SpecTable
              columns={['Model', 'Size', 'Dimension (mm)', 'Piping']}
              keys={['model', 'size', 'dimension', 'piping']}
              rows={active.portableModels}
            />
          </>
        )}

        {active.largeModels && (
          <SpecTable
            title="Tap / Brackish Water R/O — Large Industrial (RL)"
            columns={active.columns}
            keys={active.keys}
            rows={active.largeModels}
          />
        )}

        {active.seaWaterModels && (
          <SpecTable
            title="Sea Water R/O (SWR) — High Pressure Desalination"
            columns={active.columns}
            keys={active.keys}
            rows={active.seaWaterModels}
          />
        )}

        {active.uvModels && (
          <SpecTable
            title="UV Sterilizer (AUV)"
            columns={['Model', 'Capacity', 'Power', 'Dimension (mm)']}
            keys={['model', 'capacity', 'power', 'dimension']}
            rows={active.uvModels}
          />
        )}
      </div>
    </div>
  )
}

export default function Equipment() {
  usePageAnimations()
  const [tab, setTab] = useState('filtration')
  const active = equipmentCategories.find(e => e.id === tab)
  const detailRef = useRef()

  const handleTabClick = (id) => {
    setTab(id)
    // Scroll to top of detail area
    if (detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <section className="equip-page-hero">
        {/* Placeholder for hero image — replace with your own */}
        <div className="equip-page-hero__img-col">
          <img src="/images/equipment-hero.jpg" alt="Water Treatment Equipment" loading="eager" />
          <div className="equip-page-hero__img-overlay" />
        </div>
        <div className="equip-page-hero__content-col">
          <div className="container">
            <nav className="breadcrumb breadcrumb--dark">
              <Link to="/" className="breadcrumb__link">Beranda</Link>
              <span className="breadcrumb__sep">/</span>
              <Link to="/products" className="breadcrumb__link">Produk</Link>
              <span className="breadcrumb__sep">/</span>
              <span className="breadcrumb__current">Water Treatment Systems</span>
            </nav>
            <span className="equip-page-hero__label">Water Treatment Systems</span>
            <h1 className="equip-page-hero__title">Peralatan & Instalasi<br />Pengolahan Air</h1>
            <p className="equip-page-hero__desc">PT. Visco Prima Indonesia merancang dan mengkonstruksi berbagai instalasi pengolahan air dengan beragam kapasitas sesuai kebutuhan industri Anda.</p>
            <div className="equip-page-hero__chips">
              <span>Filtration System</span>
              <span>Water Softener</span>
              <span>R/O System</span>
              <span>EDI & UV</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y" ref={detailRef} style={{ scrollMarginTop: 80 }}>
        <div className="container">
          <div className="equip-layout gs-reveal">
            <aside className="equip-sidebar">
              <div className="equip-sidebar__label">Kategori Peralatan</div>
              {equipmentCategories.map(eq => (
                <EquipmentCard key={eq.id} eq={eq} isActive={tab === eq.id} onClick={() => handleTabClick(eq.id)} />
              ))}
            </aside>
            {active && <DetailPanel active={active} />}
          </div>

          {/* Mobile tabs */}
          <div className="equip-tabs-mobile gs-reveal">
            <div className="equip-tabs">
              {equipmentCategories.map(eq => (
                <button key={eq.id} className={`equip-tab${tab === eq.id ? ' active' : ''}`} onClick={() => handleTabClick(eq.id)}>
                  {eq.shortTitle}
                </button>
              ))}
            </div>
            {active && <DetailPanel active={active} />}
          </div>
        </div>
      </section>
    </>
  )
}
