import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import {
  Droplets, Flame, Snowflake, Wrench, Filter, Zap,
  ArrowRight, MapPin, Shield, Users, Globe, FileDown,
  Factory, Hotel, Building2,
  Beaker, Activity, CheckCircle
} from 'lucide-react'
import { usePageAnimations } from '../hooks/useAnimations'
import SEOHead from '../components/SEOHead'
import CountUpStat from '../components/ui/CountUpStat'
import FAQSection from '../components/sections/FAQSection'
import ProcessSteps from '../components/sections/ProcessSteps'
import SolutionFinder from '../components/sections/SolutionFinder'

/* ── Home Page ──────────────────────────────────────────────── */
export default function Home() {
  usePageAnimations()
  const heroRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.h-anim', { y: 50, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out', delay: 0.15 })
      gsap.from('.hero__img-wrap', { scale: 0.93, opacity: 0, duration: 1.1, ease: 'power3.out', delay: 0.6 })
      gsap.from('.hero__card', { scale: 0, opacity: 0, duration: 0.7, stagger: 0.18, ease: 'back.out(1.7)', delay: 1.1 })
      gsap.to('.hfc-1', { y: -10, duration: 3, ease: 'sine.inOut', yoyo: true, repeat: -1 })
      gsap.to('.hfc-2', { y: 8, duration: 2.5, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 0.5 })
      gsap.to('.hfc-3', { y: -6, duration: 3.5, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1 })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  const services = [
    { num: '01', icon: Flame,     title: 'Boiler Water Treatment',  to: '/products/boiler',
      desc: 'Pencegah kerak, korosi, endapan, dan pengontrol pH/alkalinity pada sistem boiler dan steam line industri.',
      tags: ['VB-700','VB-712','VB-720','VB-738'] },
    { num: '02', icon: Snowflake, title: 'Cooling Water Treatment', to: '/products/cooling',
      desc: 'Pencegah kerak, karat, lumut, dan biofouling pada cooling tower, chiller, serta sistem sirkulasi tertutup.',
      tags: ['VC-150','VC-155','VC-165','VC-170'] },
    { num: '03', icon: Wrench,    title: 'Cleaning Chemicals',      to: '/products/cleaning',
      desc: 'Pembersih kerak, silica, minyak, dan karat untuk boiler, heat exchanger, AC/AHU, dan peralatan industri.',
      tags: ['VL-275','VL-279','VL-265','VL-295'] },
    { num: '04', icon: Filter,    title: 'R/O Membrane Solutions',  to: '/products/ro-membrane',
      desc: 'Perawatan dan pembersihan membran R/O dan UF dari fouling mineral, biofilm, organik, dan koloid.',
      tags: ['VRO-500','VRO-502','VRO-1','VRO-5'] },
    { num: '05', icon: Droplets,  title: 'WTP & WWTP Chemicals',   to: '/products/wtp-wwtp',
      desc: 'Koagulan, flokulan, pH adjuster, penghilang warna, dan antifoam untuk pengolahan air bersih & limbah.',
      tags: ['VISCO-602','VISCO-632','VISCO-620'] },
    { num: '06', icon: Zap,       title: 'Water Treatment Systems', to: '/products/equipment',
      desc: 'Filter systems, water softener, demineralizer, reverse osmosis, EDI, dan UV sterilizer untuk industri.',
      tags: ['Filter','Softener','R/O','EDI','UV'] },
  ]

  const industries = [
    { icon: Factory,    label: 'Industri Manufaktur' },
    { icon: Activity,   label: 'Pembangkit Listrik' },
    { icon: Beaker,     label: 'Kimia & Petrokimia' },
    { icon: Hotel,      label: 'Hotel & Resort' },
    { icon: Building2,  label: 'Gedung & Mall' },
    { icon: Shield,     label: 'Rumah Sakit' },
  ]

  const whyUs = [
    { icon: CheckCircle, title: '30+ Tahun Pengalaman', desc: 'Melayani industri Indonesia sejak awal 1990-an dengan rekam jejak yang terbukti.' },
    { icon: Users,       title: 'Tim Analis Handal',    desc: 'Didukung tenaga ahli kimia dan engineer berpengalaman untuk analisis dan servis lapangan.' },
    { icon: Globe,       title: 'Jangkauan Nasional',   desc: 'Berkantor di Jakarta, melayani proyek water treatment di seluruh wilayah Indonesia.' },
    { icon: MapPin,      title: 'Produk Lengkap',       desc: '60+ produk kimia VISCO® dan 5 jenis sistem peralatan water treatment dalam satu atap.' },
  ]

  const stats = [
    { val: 30, suffix: '+', label: 'Tahun Pengalaman' },
    { val: 60, suffix: '+', label: 'Produk Kimia VISCO®' },
    { val: 5,  suffix: '',  label: 'Sistem Peralatan' },
    { val: 1,  suffix: '',  label: 'Kantor Pusat Jakarta' },
  ]

  return (
    <>
      <SEOHead
        path="/"
        description="PT. Visco Prima Indonesia — solusi water treatment terpercaya sejak 1990-an. Produk kimia VISCO® dan peralatan water treatment untuk industri, hotel, rumah sakit seluruh Indonesia."
      />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="hero" ref={heroRef}>
        <div className="hero__bg">
          {/* Replace with your own image: /public/images/hero-bg.jpg */}
          <img src="/images/hero-bg.jpg" alt="" loading="eager" fetchpriority="high" width="1920" height="1080" />
        </div>
        <div className="hero__overlay" />
        <div className="hero__grid" />
        <div className="hero__glow hero__glow-1" />
        <div className="hero__glow hero__glow-2" />
        <div className="hero__inner">
          <div className="hero__content">
            <p className="hero__tagline h-anim">PT. Visco Prima Indonesia · Est. 1990-an</p>
            <h1 className="hero__title h-anim">
              Solusi Terpercaya<br />
              <span className="gradient">Water<br />
              Treatment Indonesia</span>
            </h1>
            <p className="hero__sub h-anim">
              PT. Visco Prima Indonesia menyediakan produk kimia VISCO® bermutu tinggi dan peralatan instalasi pengolahan air untuk industri, hotel, rumah sakit, dan gedung perkantoran di seluruh Indonesia.
            </p>
            <div className="hero__actions h-anim">
              <Link to="/products" className="btn btn--accent">Lihat Produk <ArrowRight size={16} /></Link>
              <Link to="/contact" className="btn btn--outline">Hubungi Kami</Link>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__img-wrap">
              {/* Replace with your own image: /public/images/hero-visual.jpg */}
              <img src="/images/hero-visual.jpg" alt="Water Treatment Equipment" loading="eager" fetchpriority="high" width="900" height="700" />
              <div className="hero__img-gradient" />
              <div className="hero__img-frame" />
            </div>
            <div className="hero__card hero__card-1 hfc-1">
              <Droplets size={18} color="var(--accent)" />
              <div><strong>R/O &amp; Membran</strong><span>Perawatan &amp; Cleaning</span></div>
            </div>
            <div className="hero__card hero__card-2 hfc-2">
              <Flame size={18} color="var(--accent)" />
              <div><strong>Boiler Treatment</strong><span>Kerak · Korosi · Deposit</span></div>
            </div>
            <div className="hero__card hero__card-3 hfc-3">
              <Shield size={18} color="var(--accent)" />
              <div><strong>30+ Tahun</strong><span>Pengalaman Industri</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────── */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-bar__grid">
            {stats.map(s => (
              <div className="stats-bar__item gs-reveal" key={s.label}>
                <span className="stat-item__value">
                  <CountUpStat target={s.val} suffix={s.suffix} duration={2200} />
                </span>
                <span className="stat-item__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────── */}
      <div className="trust-bar">
        <div className="container">
          <div className="trust-bar__inner">
            <span className="trust-bar__label">Melayani</span>
            <div className="trust-bar__divider" />
            <div className="trust-bar__sectors">
              {industries.map(i => (
                <div className="trust-sector gs-reveal" key={i.label}>
                  <i.icon size={13} />
                  {i.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── SERVICES ──────────────────────────────────────── */}
      <section className="solutions-section">
        <div className="container">
          <div className="solutions-section__header gs-reveal">
            <div className="solutions-section__header-text">
              <span className="section-tag">Produk & Layanan</span>
              <h2 className="section-title">Rangkaian Solusi<br />Water Treatment</h2>
            </div>
            <p className="solutions-section__header-desc">
              Produk kimia VISCO® bermutu tinggi dan peralatan instalasi pengolahan air untuk kebutuhan industri, hotel, rumah sakit, dan gedung di seluruh Indonesia.
            </p>
          </div>

          <div className="sol-grid">
            {services.map((s, i) => (
              <Link to={s.to} className="sol-card gs-reveal" key={s.title}>
                <div className="sol-card__icon-wrap">
                  <s.icon size={22} className="sol-card__icon" />
                </div>
                <div className="sol-card__body">
                  <span className="sol-card__num">{s.num}</span>
                  <h3 className="sol-card__title">{s.title}</h3>
                  <p className="sol-card__desc">{s.desc}</p>
                  <div className="sol-card__tags">
                    {s.tags.slice(0, 3).map(t => <span key={t}>{t}</span>)}
                  </div>
                </div>
                <span className="sol-card__arrow">
                  Lihat Produk <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS STEPS ─────────────────────────────────── */}
      <ProcessSteps />

      {/* ── SOLUTION FINDER ───────────────────────────────── */}
      <section className="section-y bg-surface">
        <div className="container">
          <SolutionFinder />
        </div>
      </section>

      {/* ── WHY VISCO ─────────────────────────────────────── */}
      <section className="section-y">
        <div className="container">
          <div className="why-visco-grid">
            <div>
              <span className="section-tag gs-reveal">Tentang Kami</span>
              <h2 className="section-title gs-reveal">PT. Visco Prima Indonesia</h2>
              <p className="section-desc gs-reveal" style={{ marginBottom: 24 }}>
                Berawal dari komitmen memberikan solusi terbaik pada perawatan alat-alat produksi, PT. Visco Prima Indonesia dengan produk kimia bermerek VISCO® telah mengembangkan berbagai produk bermutu tinggi didukung tenaga analis handal.
              </p>
              <p className="section-desc gs-reveal" style={{ marginBottom: 32 }}>
                Produk kami banyak digunakan di industri, hotel, mall, gedung perkantoran, rumah sakit, serta untuk proses perancangan dan konstruksi Instalasi Pengolahan Air Bersih dan Air Limbah.
              </p>
              <div className="gs-reveal" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/about" className="btn btn--primary">Tentang Kami <ArrowRight size={15} /></Link>
                <a href="/Katalog_VISCO_2024.pdf" target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  <FileDown size={15} /> Download Katalog
                </a>
              </div>
            </div>
            <div className="value-grid gs-reveal">
              {whyUs.map(w => (
                <div className="value-card" key={w.title}>
                  <div className="value-card__icon"><w.icon size={22} color="#fff" /></div>
                  <h4>{w.title}</h4>
                  <p>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────── */}
      <section className="section-y bg-surface">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-tag gs-reveal">Industri yang Kami Layani</span>
            <h2 className="section-title gs-reveal">Dipercaya Lintas Industri</h2>
          </div>
          <div className="industries-grid">
            {industries.map(i => (
              <div className="industry-card gs-reveal" key={i.label}>
                <div className="industry-card__icon"><i.icon size={24} /></div>
                <span>{i.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <FAQSection />

      {/* ── CTA BANNER ────────────────────────────────────── */}
      <section className="cta-banner">
        <div className="cta-banner__glow" />
        <div className="container">
          <div className="cta-banner__content">
            <h2 className="gs-reveal">Siap Mulai Proyek Water Treatment?</h2>
            <p className="gs-reveal">Konsultasikan kebutuhan Anda dengan tim ahli PT. Visco Prima Indonesia. Gratis, tanpa komitmen.</p>
            <div className="cta-banner__actions gs-reveal">
              <Link to="/contact" className="btn btn--accent btn--lg">Hubungi Kami <ArrowRight size={18} /></Link>
              <a href="/Katalog_VISCO_2024.pdf" target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--lg">
                <FileDown size={18} /> Download Katalog
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
