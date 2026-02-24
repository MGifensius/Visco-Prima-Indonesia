import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import { Shield, Users, Globe, Award, Truck, HeartHandshake, ArrowRight, MapPin, Flame, Snowflake, Filter, Droplets, Wrench, Zap, Phone } from 'lucide-react'
import { usePageAnimations } from '../hooks/useAnimations'

const values = [
  { icon: Shield,         title: 'Kualitas',    desc: 'Produk kimia VISCO® bermutu tinggi yang telah teruji di berbagai sektor industri Indonesia.' },
  { icon: HeartHandshake, title: 'Pelayanan',   desc: 'Didukung tenaga analis handal dan berpengalaman untuk memberikan pelayanan terbaik.' },
  { icon: Award,          title: 'Keandalan',   desc: 'Lebih dari 30 tahun pengalaman dalam menyediakan solusi water treatment untuk industri.' },
  { icon: Truck,          title: 'Jangkauan Nasional', desc: 'Berkantor di Jakarta dan melayani proyek water treatment di seluruh wilayah Indonesia.' },
]

const capabilities = [
  { icon: Flame,     title: 'Boiler Water Treatment',            desc: 'Pencegah kerak, korosi, deposit, pembusaan, pengontrol pH/alkalinity, dan fuel additives.' },
  { icon: Snowflake, title: 'Cooling Water Treatment',           desc: 'Pencegah kerak, karat, algae, micro-organisme, slime, dan korosi pada cooling tower & chiller.' },
  { icon: Wrench,    title: 'Cleaning Chemicals',                desc: 'Pembersih kerak, silica, minyak, karat untuk boiler, heat exchanger, AC/AHU, mesin, dan pipa.' },
  { icon: Filter,    title: 'R/O Membrane Treatment & Cleaner',  desc: 'Perawatan dan pembersihan membran R/O & UF dari berbagai jenis fouling dan endapan.' },
  { icon: Droplets,  title: 'WTP & WWTP Chemicals',              desc: 'Coagulant, flocculant, pH adjuster, color remover, antifoam untuk pengolahan air bersih dan limbah.' },
  { icon: Zap,       title: 'Perancangan & Konstruksi Instalasi', desc: 'Filter systems, water softener, demineralizer, reverse osmosis, EDI, UV sterilizer, dan dosing system.' },
]

const branches = [
  { city: 'Jakarta Utara', note: 'Kantor Pusat', address: 'Kompleks Perkantoran Northland No 35-36, Jl. R.E. Martadinata – Ancol, Jakarta Utara 14430', phone: '(62-21) 2669 2908', main: true },
]

export default function About() {
  usePageAnimations()
  return (
    <>
      <SEOHead title="Tentang Kami" path="/about" description="PT. Visco Prima Indonesia — lebih dari 30 tahun melayani kebutuhan water treatment industri Indonesia dengan produk VISCO® bermutu tinggi dan tim analis berpengalaman." />
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">
          {/* Replace: /public/images/about-hero.jpg */}
          <img src="/images/about-hero.jpg" alt="" loading="eager" />
        </div>
        <div className="page-hero__overlay" />
        <div className="page-hero__grid" />
        <div className="page-hero__accent" />
        <div className="container">
          <div className="page-hero__content">
            <nav className="breadcrumb">
              <Link to="/" className="breadcrumb__link">Beranda</Link>
              <span className="breadcrumb__sep">/</span>
              <span className="breadcrumb__current">Tentang Kami</span>
            </nav>
            <span className="section-tag section-label--light">Profil Perusahaan</span>
            <h1>PT. Visco Prima Indonesia</h1>
            <p>Water & Waste Water Treatment Plants and Chemicals — Memberikan solusi terbaik pada perawatan alat-alat/mesin produksi untuk mencapai tingkat efisiensi yang diharapkan.</p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-y">
        <div className="container">
          <div className="about-grid">
            <div style={{ position: 'relative' }} className="gs-reveal-left">
              <div className="about-image-wrap">
                {/* Replace: /public/images/about-story.jpg */}
                <img src="/images/about-story.jpg" alt="VISCO® Industrial Water Treatment" loading="lazy" />
                <div className="about-image-overlay" />
                <div className="about-image-label">
                  <h4>VISCO® Chemicals</h4>
                  <p>Produk kimia bermutu tinggi untuk water treatment</p>
                </div>
              </div>
              <div className="about-badge"><h3>30+</h3><p>Tahun</p></div>
            </div>
            <div className="gs-reveal-right">
              <span className="section-tag">Tentang Kami</span>
              <h2 className="section-title">Solusi Water Treatment Terpercaya</h2>
              <p className="section-desc" style={{ marginBottom: 16 }}>
                Berawal dari usaha memberikan solusi terbaik pada perawatan alat-alat/mesin produksi, <strong>PT. Visco Prima Indonesia</strong> dengan produk kimianya yang bermerek <strong>VISCO®</strong> telah mengembangkan berbagai produk kimia bermutu tinggi serta didukung oleh tenaga analis yang handal.
              </p>
              <p className="section-desc" style={{ marginBottom: 16 }}>
                Produk kimia kami meliputi kimia perawatan boiler, cooling sistem (cooling tower & chiller), radiator/genset dan kimia pembersih kerak & karat, serta kimia untuk proses pengolahan air bersih dan air limbah.
              </p>
              <p className="section-desc">
                Produk kami banyak digunakan di industri-industri, hotel, mall, gedung perkantoran, rumah sakit, dan lain-lain. Kami juga melayani proses perancangan dan konstruksi Instalasi Pengolahan Air Bersih dan Air Limbah.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-y bg-surface">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-tag gs-reveal">Mengapa Memilih Kami</span>
            <h2 className="section-title gs-reveal">Keunggulan PT. Visco Prima Indonesia</h2>
          </div>
          <div className="value-grid">
            {values.map((v, i) => (
              <div className="value-card gs-reveal" key={i}>
                <div className="value-card__icon"><v.icon size={22} color="#fff" /></div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-y">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-tag gs-reveal">Kemampuan Kami</span>
            <h2 className="section-title gs-reveal">Bidang Keahlian</h2>
            <p className="section-desc gs-reveal">PT. Visco Prima Indonesia melayani berbagai kebutuhan water treatment dari produk kimia hingga perancangan dan konstruksi instalasi.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map((c, i) => (
              <div className="capability-card gs-reveal" key={i}>
                <div className="icon-box icon-box--md icon-box--accent"><c.icon size={20} /></div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="section-y bg-surface">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-tag gs-reveal">Lokasi Kami</span>
            <h2 className="section-title gs-reveal">Kantor Pusat</h2>
            <p className="section-desc gs-reveal">Kunjungi atau hubungi kantor kami di Jakarta untuk konsultasi dan informasi produk.</p>
          </div>
          <div className="branch-grid branch-grid--single" style={{ margin: '0 auto' }}>
            {branches.map((b, i) => (
              <div className={`branch-card${b.main ? ' branch-card--main' : ''} gs-reveal`} key={i}>
                <div className="branch-card__pin"><MapPin size={18} color="var(--accent-mid)" /></div>
                <span className="branch-card__note">{b.note}</span>
                <h4>{b.city}</h4>
                <p>{b.address}</p>
                {b.phone && (
                  <a href={`tel:${b.phone.replace(/\D/g, '')}`} className="branch-card__phone">
                    <Phone size={13} /> {b.phone}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-banner__glow" />
        <div className="container">
          <div className="cta-banner__content">
            <h2 className="gs-reveal">Siap Bekerja Sama?</h2>
            <p className="gs-reveal">Hubungi tim PT. Visco Prima Indonesia untuk konsultasi kebutuhan water treatment Anda.</p>
            <div className="cta-banner__actions gs-reveal">
              <Link to="/contact" className="btn btn--accent btn--lg">Hubungi Kami <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
