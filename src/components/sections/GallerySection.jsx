import { useState } from 'react'
import { X } from 'lucide-react'

const galleryImages = [
  {
    src: '/images/gallery/gallery-1.jpg',
    caption: 'VISCO® Chemical Products',
    alt: 'VISCO VL-285 chemical containers at water treatment facility',
  },
  {
    src: '/images/gallery/gallery-2.jpg',
    caption: 'Industrial Storage Tanks',
    alt: 'Large industrial storage tanks at client site',
  },
  {
    src: '/images/gallery/gallery-3.jpg',
    caption: 'Waste Water Treatment Plant',
    alt: 'Overview of waste water treatment plant installation',
  },
  {
    src: '/images/gallery/gallery-4.jpg',
    caption: 'On-Site Treatment Systems',
    alt: 'VISCO chemical treatment equipment at client facility',
  },
]

const WATERMARK = 'PT. Visco Prima Indonesia'

export default function GallerySection() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <>
      <section className="gallery-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 8 }}>
            <div className="section-tag gs-reveal">Dokumentasi Lapangan</div>
            <h2 className="section-title gs-reveal">Galeri Proyek Kami</h2>
            <p className="section-desc gs-reveal" style={{ margin: '0 auto' }}>
              Dokumentasi penerapan produk dan instalasi water treatment di berbagai lokasi industri.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="gallery-item gs-reveal"
                onClick={() => setLightbox(idx)}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="gallery-item__overlay" />
                <span className="gallery-item__caption">{img.caption}</span>
                <span className="gallery-item__watermark">{WATERMARK}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className={`gallery-lightbox${lightbox !== null ? ' active' : ''}`}
          onClick={() => setLightbox(null)}
        >
          <button className="gallery-lightbox__close" onClick={() => setLightbox(null)}>
            <X size={20} />
          </button>
          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <span className="gallery-lightbox__watermark">{WATERMARK}</span>
        </div>
      )}
    </>
  )
}
