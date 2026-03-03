import { useState } from 'react'
import SEOHead from '../components/SEOHead'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Globe, Send, Clock, Building2, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react'
import { usePageAnimations } from '../hooks/useAnimations'

const branches = [
  { city: 'Jakarta Utara', address: 'Kompleks Perkantoran Northland No 35-36, Jl. R.E. Martadinata – Ancol, Jakarta Utara 14430', note: 'Kantor Pusat', phone: '(62-21) 2669 2908', whatsapp: '+6281311556697' },
]

export default function Contact() {
  usePageAnimations()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setTimeout(() => { setSubmitted(false); e.target.reset() }, 4000)
    }, 1200)
  }

  return (
    <>
      <SEOHead title="Hubungi Kami" path="/contact" description="Konsultasi water treatment gratis dengan tim ahli PT. Visco Prima Indonesia. Berlokasi di Ancol, Jakarta Utara." />
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">
          {/* Replace: /public/images/contact-hero.jpg */}
          <img src="/images/contact-hero.jpg" alt="" loading="eager" />
        </div>
        <div className="page-hero__overlay" />
        <div className="page-hero__grid" />
        <div className="page-hero__accent" />
        <div className="container">
          <div className="page-hero__content">
            <nav className="breadcrumb">
              <Link to="/" className="breadcrumb__link">Beranda</Link>
              <span className="breadcrumb__sep">/</span>
              <span className="breadcrumb__current">Hubungi Kami</span>
            </nav>
            <span className="section-tag section-label--light">Kontak & Konsultasi</span>
            <h1>Kami Siap Membantu</h1>
            <p>Tim ahli PT. Visco Prima Indonesia siap membantu Anda menemukan solusi water treatment yang tepat untuk industri Anda. Konsultasi gratis, tanpa komitmen.</p>
          </div>
        </div>
      </section>

      {/* Info Strips */}
      <div className="contact-strip-bar">
        <div className="container">
          <div className="contact-strips">
            <a href="tel:+622126692908" className="contact-strip">
              <div className="contact-strip__icon"><Phone size={20} /></div>
              <div>
                <span className="contact-strip__label">Telepon</span>
                <span className="contact-strip__value">(62-21) 2669 2908</span>
                <span className="contact-strip__sub">Hunting Line</span>
              </div>
            </a>
            <a href="mailto:visco_01@yahoo.com" className="contact-strip">
              <div className="contact-strip__icon"><Mail size={20} /></div>
              <div>
                <span className="contact-strip__label">Email</span>
                <span className="contact-strip__value">visco_01@yahoo.com</span>
                <span className="contact-strip__sub">Balasan 1×24 jam kerja</span>
              </div>
            </a>
            <a href="https://wa.me/6281311556697" target="_blank" rel="noopener noreferrer" className="contact-strip">
              <div className="contact-strip__icon" style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}><MessageCircle size={20} /></div>
              <div>
                <span className="contact-strip__label">WhatsApp</span>
                <span className="contact-strip__value">+62 813 1155 6697</span>
                <span className="contact-strip__sub">Chat langsung dengan tim kami</span>
              </div>
            </a>
            <div className="contact-strip">
              <div className="contact-strip__icon"><Clock size={20} /></div>
              <div>
                <span className="contact-strip__label">Jam Operasional</span>
                <span className="contact-strip__value">Senin – Jumat</span>
                <span className="contact-strip__sub">08.00 – 17.00 WIB</span>
              </div>
            </div>
            <a href="https://www.viscochemical.com" target="_blank" rel="noopener noreferrer" className="contact-strip">
              <div className="contact-strip__icon"><Globe size={20} /></div>
              <div>
                <span className="contact-strip__label">Website</span>
                <span className="contact-strip__value">www.viscochemical.com</span>
                <span className="contact-strip__sub">Informasi produk lengkap</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Main */}
      <section className="section-y">
        <div className="container">
          <div className="contact-main-grid">
            {/* Form */}
            <div>
              <span className="section-tag gs-reveal">Kirim Pesan</span>
              <h2 className="section-title gs-reveal">Ceritakan Kebutuhan Anda</h2>
              <p className="section-desc gs-reveal" style={{ marginBottom: 32 }}>Isi formulir di bawah dan tim kami akan menghubungi Anda secepatnya dengan solusi yang tepat.</p>
              <form className="contact-form gs-reveal" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group"><label htmlFor="name">Nama Lengkap *</label><input type="text" id="name" placeholder="Nama Anda" required /></div>
                  <div className="form-group"><label htmlFor="company">Perusahaan</label><input type="text" id="company" placeholder="Nama Perusahaan" /></div>
                </div>
                <div className="form-row">
                  <div className="form-group"><label htmlFor="email">Email *</label><input type="email" id="email" placeholder="email@perusahaan.com" required /></div>
                  <div className="form-group"><label htmlFor="phone">No. Telepon</label><input type="tel" id="phone" placeholder="+62 xxx xxxx xxxx" /></div>
                </div>
                <div className="form-group">
                  <label htmlFor="service">Layanan yang Dibutuhkan</label>
                  <select id="service">
                    <option value="">Pilih layanan...</option>
                    <option value="boiler">Boiler Water Treatment</option>
                    <option value="cooling">Cooling Water Treatment</option>
                    <option value="cleaning">Cleaning Chemicals</option>
                    <option value="ro">R/O Membrane Treatment & Cleaner</option>
                    <option value="wtp">WTP & WWTP Chemicals</option>
                    <option value="equipment">Peralatan Water Treatment</option>
                    <option value="consultation">Konsultasi Umum</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Pesan *</label>
                  <textarea id="message" placeholder="Ceritakan kebutuhan water treatment Anda..." required />
                </div>
                <button type="submit" className="btn btn--accent contact-submit" disabled={loading || submitted}>
                  {submitted ? <><CheckCircle2 size={18} /> Pesan Terkirim!</>
                    : loading ? <><span className="btn-spinner" /> Mengirim...</>
                    : <><Send size={17} /> Kirim Pesan</>}
                </button>
              </form>
            </div>

            {/* Branches + Map */}
            <div>
              <span className="section-tag gs-reveal">Lokasi Kami</span>
              <h2 className="section-title gs-reveal">Kantor Pusat</h2>
              <div className="contact-branch-grid contact-branch-single gs-reveal">
                {branches.map(b => (
                  <div className="branch-card" key={b.city}>
                    <div className="branch-card__pin"><Building2 size={16} color="var(--accent-mid)" /></div>
                    <span className="branch-card__note">{b.note}</span>
                    <h4>{b.city}</h4>
                    <p>{b.address}</p>
                    {b.phone && <a href={`tel:${b.phone.replace(/\D/g,'')}`} className="branch-card__phone"><Phone size={12} />{b.phone}</a>}
                    {b.whatsapp && <a href={`https://wa.me/${b.whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer" className="branch-card__whatsapp"><MessageCircle size={12} />{b.whatsapp}</a>}
                  </div>
                ))}
              </div>
              <div className="contact-map gs-reveal">
                <iframe
                  title="PT. Visco Prima Indonesia"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.0073513799553!2d106.83954489999999!3d-6.129712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1e18dbddc1fb%3A0x4173642a3136bb76!2sPT.%20Visco%20Prima%20Indonesia!5e0!3m2!1sen!2sid!4v1772502527981!5m2!1sen!2sid"
                  width="100%" height="300" style={{ border: 0, borderRadius: 'var(--r-lg)' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="contact-address-full gs-reveal">
                <MapPin size={15} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />
                <p>Kompleks Perkantoran Northland No 35-36, Jl. R.E. Martadinata – Ancol, Jakarta Utara, DKI Jakarta 14430</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
