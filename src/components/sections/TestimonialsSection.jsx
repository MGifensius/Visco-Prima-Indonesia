import { useState, useEffect, useRef } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    id: 1,
    quote: 'Produk VISCO® VB-712 sangat efektif mencegah kerak di sistem boiler kami. Konsumsi energi turun signifikan dan downtime hampir nol sejak menggunakan produk ini.',
    name: 'Budi Santoso',
    title: 'Engineering Manager',
    company: 'PT. Indocement Tunggal Prakarsa',
    industry: 'Manufaktur Semen',
    initials: 'BS',
    color: '#0A3D62',
    stars: 5,
  },
  {
    id: 2,
    quote: 'Tim VISCO® sangat responsif dan profesional. Analisis air dilakukan on-site dalam 24 jam dan solusinya langsung tepat sasaran. Masalah cooling tower kami tuntas.',
    name: 'Dewi Rahayu',
    title: 'Facility Manager',
    company: 'Hotel Mulia Jakarta',
    industry: 'Hospitality',
    initials: 'DR',
    color: '#0F5285',
    stars: 5,
  },
  {
    id: 3,
    quote: 'Setelah menggunakan VC-155 untuk cooling tower pabrik kami, biaya treatment turun 35% dan tidak ada lagi masalah biofouling. Rekomendasi produknya sangat akurat.',
    name: 'Ahmad Fauzi',
    title: 'Plant Manager',
    company: 'PT. Unilever Indonesia Tbk',
    industry: 'FMCG',
    initials: 'AF',
    color: '#00B4D8',
    stars: 5,
  },
  {
    id: 4,
    quote: 'Sistem R/O yang diinstalasi VISCO® berjalan melebihi spesifikasi. Kualitas air untuk kebutuhan medis terjaga konsisten. After-sales service-nya juga excellent.',
    name: 'Rina Kusuma',
    title: 'Kepala Teknik',
    company: 'RS. Pondok Indah Group',
    industry: 'Kesehatan',
    initials: 'RK',
    color: '#1B7AB8',
    stars: 5,
  },
  {
    id: 5,
    quote: 'Produk WTP chemicals VISCO® membantu kami memenuhi standar AMDAL dengan efisien. Tim teknisnya juga aktif memberikan support di lapangan.',
    name: 'Surya Wijaya',
    title: 'HSE Manager',
    company: 'PT. Pabrik Kertas Tjiwi Kimia',
    industry: 'Industri Kertas',
    initials: 'SW',
    color: '#0A3D62',
    stars: 5,
  },
]

function TestimonialCard({ t, active }) {
  return (
    <div className={`tcard${active ? ' tcard--active' : ''}`}>
      <div className="tcard__quote-icon"><Quote size={20} /></div>
      <div className="tcard__stars">
        {Array.from({ length: t.stars }).map((_, i) => (
          <Star key={i} size={14} fill="var(--accent)" color="var(--accent)" />
        ))}
      </div>
      <p className="tcard__text">&ldquo;{t.quote}&rdquo;</p>
      <div className="tcard__author">
        <div className="tcard__avatar" style={{ background: t.color }}>{t.initials}</div>
        <div className="tcard__info">
          <span className="tcard__name">{t.name}</span>
          <span className="tcard__meta">{t.title} · {t.company}</span>
          <span className="tcard__industry">{t.industry}</span>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tcard', {
        opacity: 0, y: 30,
        stagger: 0.12, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true }
      })
      gsap.from('.trating', {
        opacity: 0, y: 20, duration: 0.6,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  // Auto-rotate
  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % testimonials.length), 5000)
    return () => clearInterval(id)
  }, [])

  const prev = () => setActive(a => (a - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive(a => (a + 1) % testimonials.length)

  return (
    <section className="section-y testimonials-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-tag gs-reveal">Klien Kami</span>
          <h2 className="section-title gs-reveal">Dipercaya Industri Terkemuka</h2>
          <p className="section-desc gs-reveal">
            Lebih dari tiga dekade melayani berbagai sektor industri di seluruh Indonesia.
          </p>
        </div>

        {/* Rating Summary */}
        <div className="trating gs-reveal">
          <div className="trating__stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={22} fill="var(--accent)" color="var(--accent)" />
            ))}
          </div>
          <div className="trating__info">
            <span className="trating__score">4.9 / 5.0</span>
            <span className="trating__count">Berdasarkan 120+ ulasan pelanggan</span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="tgrid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} t={t} active={i === active} />
          ))}
        </div>

        {/* Navigation */}
        <div className="tnav">
          <button className="tnav__btn" onClick={prev} aria-label="Sebelumnya"><ChevronLeft size={20} /></button>
          <div className="tnav__dots">
            {testimonials.map((_, i) => (
              <button key={i} className={`tnav__dot${i === active ? ' tnav__dot--active' : ''}`}
                onClick={() => setActive(i)} aria-label={`Testimonial ${i + 1}`} />
            ))}
          </div>
          <button className="tnav__btn" onClick={next} aria-label="Berikutnya"><ChevronRight size={20} /></button>
        </div>
      </div>
    </section>
  )
}
