import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Factory, Hotel, Building2, HeartPulse, Zap, Droplets, ArrowRight, RotateCcw } from 'lucide-react'

const industries = [
  { id: 'manufacturing', icon: Factory, label: 'Manufaktur', desc: 'Pabrik, assembly, processing' },
  { id: 'hospitality', icon: Hotel, label: 'Hotel & Resort', desc: 'Cooling tower, boiler laundry' },
  { id: 'office', icon: Building2, label: 'Gedung & Mall', desc: 'HVAC, cooling system' },
  { id: 'medical', icon: HeartPulse, label: 'Rumah Sakit', desc: 'Air medis, RO, sterilisasi' },
  { id: 'power', icon: Zap, label: 'Pembangkit Listrik', desc: 'Boiler skala besar, demIN' },
  { id: 'chemical', icon: Droplets, label: 'Kimia & Petrokimia', desc: 'WTP, WWTP, process water' },
]

const recommendations = {
  manufacturing: {
    headline: 'Solusi untuk Industri Manufaktur',
    products: [
      { name: 'Boiler Water Treatment', slug: '/products/boiler', tags: ['VB-700', 'VB-712', 'VB-720'], desc: 'Cegah kerak & korosi di sistem boiler produksi' },
      { name: 'Cooling Water Treatment', slug: '/products/cooling', tags: ['VC-150', 'VC-155', 'VC-165'], desc: 'Perawatan cooling tower & sistem chiller' },
      { name: 'Cleaning Chemicals', slug: '/products/cleaning', tags: ['VL-275', 'VL-279'], desc: 'Pembersih heat exchanger & peralatan produksi' },
    ],
    note: 'Program perawatan terintegrasi untuk efisiensi produksi optimal.',
  },
  hospitality: {
    headline: 'Solusi untuk Hotel & Resort',
    products: [
      { name: 'Cooling Water Treatment', slug: '/products/cooling', tags: ['VC-150', 'VC-170'], desc: 'Cooling tower & chiller untuk HVAC hotel' },
      { name: 'Boiler Water Treatment', slug: '/products/boiler', tags: ['VB-712', 'VB-738'], desc: 'Boiler laundry & hot water system' },
      { name: 'Water Treatment Systems', slug: '/products/equipment', tags: ['Softener', 'R/O'], desc: 'Air bersih berkualitas untuk tamu' },
    ],
    note: 'Solusi hemat energi untuk operasional hotel yang efisien.',
  },
  office: {
    headline: 'Solusi untuk Gedung & Mall',
    products: [
      { name: 'Cooling Water Treatment', slug: '/products/cooling', tags: ['VC-155', 'VC-165'], desc: 'Perawatan cooling tower & AHU gedung' },
      { name: 'Cleaning Chemicals', slug: '/products/cleaning', tags: ['VL-265', 'VL-295'], desc: 'Pembersih AC sentral & cooling coil' },
      { name: 'WTP Chemicals', slug: '/products/wtp-wwtp', tags: ['VISCO-602', 'VISCO-620'], desc: 'Pengolahan air untuk kebutuhan gedung' },
    ],
    note: 'Menjaga sistem HVAC gedung tetap efisien dan hemat listrik.',
  },
  medical: {
    headline: 'Solusi untuk Rumah Sakit & Klinik',
    products: [
      { name: 'R/O Membrane Solutions', slug: '/products/ro-membrane', tags: ['VRO-500', 'VRO-502'], desc: 'Air RO untuk hemodialysis & farmasi' },
      { name: 'Water Treatment Systems', slug: '/products/equipment', tags: ['R/O', 'EDI', 'UV'], desc: 'Sistem purifikasi air medis standar WHO' },
      { name: 'WTP Chemicals', slug: '/products/wtp-wwtp', tags: ['VISCO-602'], desc: 'Pengolahan IPAL rumah sakit' },
    ],
    note: 'Air medis berkualitas tinggi sesuai standar akreditasi.',
  },
  power: {
    headline: 'Solusi untuk Pembangkit Listrik',
    products: [
      { name: 'Boiler Water Treatment', slug: '/products/boiler', tags: ['VB-720', 'VB-738'], desc: 'Boiler tekanan tinggi PLTU/PLTG' },
      { name: 'Cleaning Chemicals', slug: '/products/cleaning', tags: ['VL-275', 'VL-279'], desc: 'Chemical cleaning tube dan heat exchanger' },
      { name: 'Water Treatment Systems', slug: '/products/equipment', tags: ['Demineralizer', 'EDI'], desc: 'Air umpan boiler berkualitas tinggi' },
    ],
    note: 'Menjaga keandalan dan efisiensi unit pembangkit.',
  },
  chemical: {
    headline: 'Solusi untuk Industri Kimia & Petrokimia',
    products: [
      { name: 'WTP & WWTP Chemicals', slug: '/products/wtp-wwtp', tags: ['VISCO-602', 'VISCO-632', 'VISCO-620'], desc: 'Pengolahan air proses & air limbah industri' },
      { name: 'Boiler Water Treatment', slug: '/products/boiler', tags: ['VB-700', 'VB-720'], desc: 'Boiler steam generation untuk proses kimia' },
      { name: 'Cooling Water Treatment', slug: '/products/cooling', tags: ['VC-155', 'VC-165'], desc: 'Cooling system untuk reaktor & kondenser' },
    ],
    note: 'Solusi water treatment untuk kompleksitas industri kimia.',
  },
}

function RecommendationCard({ rec }) {
  return (
    <Link to={rec.slug} className="sf-rec-card">
      <div className="sf-rec-card__header">
        <h4>{rec.name}</h4>
        <div className="sf-rec-card__tags">
          {rec.tags.map(t => <span key={t} className="sf-rec-tag">{t}</span>)}
        </div>
      </div>
      <p>{rec.desc}</p>
      <span className="sf-rec-card__link">Lihat Produk <ArrowRight size={13} /></span>
    </Link>
  )
}

export default function SolutionFinder() {
  const [selected, setSelected] = useState(null)

  const result = selected ? recommendations[selected] : null

  return (
    <div className="sf-widget">
      <div className="sf-widget__header">
        <div className="section-label">
          <span className="section-label__line" />Solution Finder
        </div>
        <h2 className="section-title">Temukan Solusi untuk Industri Anda</h2>
        <p className="section-desc">Pilih sektor industri Anda untuk mendapatkan rekomendasi produk water treatment yang paling sesuai.</p>
      </div>

      {/* Industry Selector */}
      <div className="sf-industries">
        {industries.map(ind => {
          const Icon = ind.icon
          return (
            <button
              key={ind.id}
              className={`sf-ind-btn${selected === ind.id ? ' sf-ind-btn--active' : ''}`}
              onClick={() => setSelected(selected === ind.id ? null : ind.id)}
            >
              <div className="sf-ind-btn__icon"><Icon size={22} /></div>
              <span className="sf-ind-btn__label">{ind.label}</span>
              <span className="sf-ind-btn__desc">{ind.desc}</span>
            </button>
          )
        })}
      </div>

      {/* Result */}
      {result && (
        <div className="sf-result">
          <div className="sf-result__header">
            <h3>{result.headline}</h3>
            <button className="sf-result__reset" onClick={() => setSelected(null)}>
              <RotateCcw size={14} /> Reset
            </button>
          </div>
          <div className="sf-result__cards">
            {result.products.map(rec => (
              <RecommendationCard key={rec.name} rec={rec} />
            ))}
          </div>
          <div className="sf-result__note">
            <span className="sf-result__note-dot" />
            {result.note}
          </div>
          <Link to="/contact" className="btn btn--accent sf-result__cta">
            Konsultasi Gratis <ArrowRight size={15} />
          </Link>
        </div>
      )}
    </div>
  )
}
