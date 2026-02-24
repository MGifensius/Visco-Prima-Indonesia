import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, FileDown, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div>
            <Link to="/" className="footer__logo">
              <img src="/visco-logo.png" alt="Visco" className="footer__logo-img" />
              <div className="footer__logo-text">
                <span className="footer__logo-brand">PT. <em>VISCO</em> PRIMA INDONESIA</span>
                <span className="footer__logo-tagline">Water Treatment Specialist</span>
              </div>
            </Link>
            <p className="footer__desc">Solusi terpercaya untuk kebutuhan pengolahan air bersih dan air limbah industri Indonesia sejak 1990-an.</p>
            <a href="/Katalog_VISCO_2024.pdf" target="_blank" rel="noopener noreferrer" className="footer__dl">
              <FileDown size={13} /> Download Katalog PDF
            </a>
          </div>

          {/* Chemicals */}
          <div className="footer__col">
            <h5>Kimia Industri</h5>
            <Link to="/products/boiler">Boiler Water Treatment</Link>
            <Link to="/products/cooling">Cooling Water Treatment</Link>
            <Link to="/products/cleaning">Cleaning Chemicals</Link>
            <Link to="/products/ro-membrane">R/O Membrane Solutions</Link>
            <Link to="/products/wtp-wwtp">WTP & WWTP Chemicals</Link>
          </div>

          {/* Equipment */}
          <div className="footer__col">
            <h5>Peralatan</h5>
            <Link to="/products/equipment">Filtration Systems</Link>
            <Link to="/products/equipment">Water Softeners</Link>
            <Link to="/products/equipment">Demineralizer</Link>
            <Link to="/products/equipment">R/O Systems</Link>
            <Link to="/products/equipment">EDI & UV Sterilizer</Link>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h5>Hubungi Kami</h5>
            <div className="footer__contact-row">
              <MapPin size={13} className="footer__contact-icon" />
              <div className="footer__contact-text">
                <span className="footer__contact-label">Kantor Pusat</span>
                <span className="footer__contact-value">Kompleks Perkantoran Northland No 35-36, Jl. R.E. Martadinata – Ancol, Jakarta Utara</span>
              </div>
            </div>
            <div className="footer__contact-row">
              <Phone size={13} className="footer__contact-icon" />
              <div className="footer__contact-text">
                <span className="footer__contact-label">Telepon</span>
                <span className="footer__contact-value"><a href="tel:+622126692908">(62-21) 2669 2908</a></span>
                <span className="footer__contact-sub">Fax: (62-21) 2669 2836</span>
              </div>
            </div>
            <div className="footer__contact-row">
              <Mail size={13} className="footer__contact-icon" />
              <div className="footer__contact-text">
                <span className="footer__contact-label">Email</span>
                <span className="footer__contact-value"><a href="mailto:visco_01@yahoo.com">visco_01@yahoo.com</a></span>
              </div>
            </div>
            <div className="footer__contact-row">
              <Clock size={13} className="footer__contact-icon" />
              <div className="footer__contact-text">
                <span className="footer__contact-label">Jam Operasional</span>
                <span className="footer__contact-value">Senin – Jumat, 08.00 – 17.00 WIB</span>
              </div>
            </div>

          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; {new Date().getFullYear()} PT. Visco Prima Indonesia. All rights reserved.</span>
          <div className="footer__bottom-links">
            <Link to="/about">Tentang Kami</Link>
            <Link to="/contact">Kontak</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
