import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Flame, Snowflake, Wrench, Filter, Droplets, Beaker, X, Menu, ArrowRight, FileDown, Gauge } from 'lucide-react'

const chemItems = [
  { to: '/products/boiler',      icon: Flame,     label: 'Boiler Water Treatment',    desc: 'Kerak · Korosi · Deposit' },
  { to: '/products/cooling',     icon: Snowflake,  label: 'Cooling Water Treatment',   desc: 'Scale · Korosi · Biofouling' },
  { to: '/products/cleaning',    icon: Wrench,     label: 'Cleaning Chemicals',         desc: 'Boiler · HE · AC/AHU' },
  { to: '/products/ro-membrane', icon: Filter,     label: 'R/O Membrane Solutions',    desc: 'Mineral · Biofilm · Organik' },
  { to: '/products/wtp-wwtp',   icon: Droplets,   label: 'WTP & WWTP Chemicals',      desc: 'Koagulan · Flokulan · pH' },
]
const equipItem = { to: '/products/equipment', icon: Beaker, label: 'Water Treatment Systems', desc: 'Filter · Softener · R/O · EDI · UV' }

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMegaOpen(false)
    setMobileOpen(false)
  }, [location.pathname])

  const isActive = (path) => path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}${megaOpen ? ' navbar--mega' : ''}`}>
        <div className="navbar__bar">
          {/* Logo */}
          <Link to="/" className="navbar__logo">
            <img src="/visco-logo.png" alt="Visco" className="navbar__logo-img" />
            <div className="navbar__logo-text">
              <span className="navbar__logo-brand">PT. <em>VISCO</em> PRIMA INDONESIA</span>
              <span className="navbar__logo-sub">Water Treatment Specialist</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="navbar__nav">
            <div className={`navbar__item${isActive('/') ? ' navbar__item--active' : ''}`}>
              <Link to="/" className="navbar__link">Beranda</Link>
              <div className="navbar__underline" />
            </div>

            {/* Products with mega */}
            <div className={`navbar__item${isActive('/products') ? ' navbar__item--active' : ''}${megaOpen ? ' navbar__item--open' : ''}`}
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}>
              <button className="navbar__link" style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                Produk <ChevronDown size={14} className={`navbar__chev${megaOpen ? ' navbar__chev--up' : ''}`} />
              </button>
              <div className="navbar__underline" />
            </div>

            <div className={`navbar__item${isActive('/about') ? ' navbar__item--active' : ''}`}>
              <Link to="/about" className="navbar__link">Tentang Kami</Link>
              <div className="navbar__underline" />
            </div>

            <Link to="/contact" className="navbar__cta">Hubungi Kami</Link>
          </div>

          {/* Burger */}
          <button className="navbar__burger" onClick={() => setMobileOpen(true)} aria-label="Menu">
            <Menu size={24} />
          </button>
        </div>

        {/* Mega dropdown */}
        <div className={`mega${megaOpen ? ' mega--open' : ''}`}
          onMouseEnter={() => setMegaOpen(true)}
          onMouseLeave={() => setMegaOpen(false)}>
          <div className="mega__inner">
            <div className="mega__left">
              <div className="mega__brand">Produk & Peralatan VISCO®</div>
              <p className="mega__desc">Rangkaian lengkap produk kimia water treatment dan peralatan instalasi pengolahan air untuk industri Indonesia.</p>
              <Link to="/products" className="mega__all-link">Lihat Semua Produk <ArrowRight size={14} /></Link>
              <br />
              <a href="/Katalog_VISCO_2024.pdf" target="_blank" rel="noopener noreferrer" className="mega__download">
                <FileDown size={14} /> Download Katalog PDF
              </a>
            </div>
            <div className="mega__right">
              <div className="mega__group-label">VISCO® Industrial Chemicals</div>
              {chemItems.map(item => (
                <Link to={item.to} key={item.to} className="mega__link">
                  <item.icon size={16} className="mega__link-icon" />
                  <div className="mega__link-text">
                    <span className="mega__link-title">{item.label}</span>
                    <span className="mega__link-desc">{item.desc}</span>
                  </div>
                  <ArrowRight size={13} className="mega__link-arrow" />
                </Link>
              ))}
              <div className="mega__group-label">Water Treatment Systems</div>
              <Link to={equipItem.to} className="mega__link" style={{ gridColumn: '1/-1' }}>
                <Gauge size={16} className="mega__link-icon" />
                <div className="mega__link-text">
                  <span className="mega__link-title">{equipItem.label}</span>
                  <span className="mega__link-desc">{equipItem.desc}</span>
                </div>
                <ArrowRight size={13} className="mega__link-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mega overlay */}
      <div className={`mega-overlay${megaOpen ? ' mega-overlay--show' : ''}`}
        onMouseEnter={() => setMegaOpen(false)} />

      {/* Mobile overlay */}
      <div className={`mob-overlay${mobileOpen ? ' mob-overlay--show' : ''}`}
        onClick={() => setMobileOpen(false)} />

      {/* Mobile Drawer */}
      <div className={`mob-drawer${mobileOpen ? ' mob-drawer--open' : ''}`}>
        <div className="mob-drawer__head">
          <div className="mob-drawer__logo">
            <img src="/visco-logo.png" alt="Visco" className="mob-drawer__logo-img" />
            <span className="mob-drawer__logo-text">PT. <em>VISCO</em> PRIMA INDONESIA</span>
          </div>
          <button className="mob-drawer__close" onClick={() => setMobileOpen(false)} aria-label="Tutup">
            <X size={18} />
          </button>
        </div>
        <div className="mob-drawer__nav">
          <Link to="/" className="mob-link">Beranda</Link>

          {/* Products toggle */}
          <button className="mob-link mob-link--toggle" onClick={() => setMobileProductsOpen(!mobileProductsOpen)}>
            Produk <ChevronDown size={16} style={{ transform: mobileProductsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s' }} />
          </button>
          <div className={`mob-sub${mobileProductsOpen ? ' mob-sub--open' : ''}`}>
            <div className="mob-sub-inner">
              <span className="mob-sub-label">Kimia Industri</span>
              {chemItems.map(item => (
                <Link to={item.to} key={item.to}>
                  <item.icon size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                  {item.label}
                </Link>
              ))}
              <span className="mob-sub-label" style={{ marginTop: 8 }}>Peralatan</span>
              <Link to="/products/equipment">
                <Gauge size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                Water Treatment Systems
              </Link>
              <Link to="/products" style={{ fontWeight: 700, color: 'var(--accent)', marginTop: 4 }}>
                <ArrowRight size={14} style={{ flexShrink: 0 }} /> Semua Produk
              </Link>
            </div>
          </div>

          <Link to="/about" className="mob-link">Tentang Kami</Link>
          <Link to="/contact" className="mob-link mob-link--cta">Hubungi Kami</Link>
          <a href="/Katalog_VISCO_2024.pdf" target="_blank" rel="noopener noreferrer" className="mob-link mob-link--dl">
            <FileDown size={15} /> Download Katalog
          </a>
        </div>
      </div>
    </>
  )
}
