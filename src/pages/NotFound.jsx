import { Link } from 'react-router-dom'
import { Droplets, Home, ArrowLeft } from 'lucide-react'
import SEOHead from '../components/SEOHead'

export default function NotFound() {
  return (
    <>
      <SEOHead title="Halaman Tidak Ditemukan (404)" description="Halaman yang Anda cari tidak tersedia." />
      <section className="notfound-section">
        <div className="notfound-bg" />
        <div className="container">
          <div className="notfound-content">
            <div className="notfound-icon">
              <Droplets size={40} />
            </div>
            <div className="notfound-code">404</div>
            <h1>Halaman Tidak Ditemukan</h1>
            <p>Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan. Silakan kembali ke beranda atau telusuri produk kami.</p>
            <div className="notfound-actions">
              <Link to="/" className="btn btn--accent">
                <Home size={16} /> Ke Beranda
              </Link>
              <Link to="/products" className="btn btn--ghost">
                <ArrowLeft size={16} /> Lihat Produk
              </Link>
            </div>
            <div className="notfound-links">
              <span>Mungkin Anda mencari:</span>
              <Link to="/products/boiler">Boiler Treatment</Link>
              <Link to="/products/cooling">Cooling Treatment</Link>
              <Link to="/products/equipment">Peralatan</Link>
              <Link to="/contact">Kontak</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
