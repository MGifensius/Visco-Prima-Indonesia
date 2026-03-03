import { useState, useRef, useEffect } from 'react'
import { Plus, Minus } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    q: 'Apa yang membedakan produk VISCO® dari produk water treatment lainnya?',
    a: 'Produk VISCO® diformulasikan khusus untuk karakteristik air Indonesia yang umumnya memiliki kandungan mineral dan kesadahan tinggi. Formula ini dikembangkan selama 30+ tahun berdasarkan data lapangan dari ratusan industri di Indonesia, didukung tenaga analis berpengalaman yang melakukan monitoring langsung di lokasi pelanggan.',
  },
  {
    q: 'Apakah tersedia layanan konsultasi dan analisis air on-site?',
    a: 'Ya. Tim teknisi kami siap melakukan kunjungan ke lokasi Anda untuk analisis air secara langsung, evaluasi sistem water treatment yang ada, dan memberikan rekomendasi program treatment yang optimal. Layanan analisis awal ini gratis untuk calon pelanggan yang berminat.',
  },
  {
    q: 'Berapa lama proses pengiriman produk ke luar Jakarta?',
    a: 'Pulau Jawa umumnya 1–2 hari kerja. Sumatera dan Kalimantan 3–5 hari kerja. Sulawesi dan Papua 5–7 hari kerja. Kami bekerja sama dengan mitra logistik terpercaya untuk memastikan produk tiba dalam kondisi baik ke seluruh wilayah Indonesia.',
  },
  {
    q: 'Apakah tersedia kemasan trial sebelum pembelian dalam jumlah besar?',
    a: 'Tentu. Hampir seluruh produk kimia VISCO® tersedia dalam kemasan trial mulai dari 1 liter dan 5 kg. Kami juga memiliki program pilot project untuk instalasi peralatan water treatment. Hubungi tim sales kami untuk penawaran harga trial.',
  },
  {
    q: 'Bagaimana cara menentukan produk yang tepat untuk sistem kami?',
    a: 'Kami merekomendasikan untuk mengirimkan sampel air sistem Anda ke laboratorium kami (biaya gratis, ongkir ditanggung pelanggan). Hasil analisis akan menjadi dasar rekomendasi produk dan program dosing yang paling efektif. Proses ini biasanya selesai dalam 3–5 hari kerja.',
  },
  {
    q: 'Apakah VISCO® menyediakan training dan dukungan teknis?',
    a: 'Ya. Kami menyediakan training on-site gratis untuk teknisi atau operator pelanggan mencakup cara penggunaan produk, perhitungan dosis optimal, monitoring parameter air, interpretasi hasil uji, dan trouble-shooting umum. Training dapat dijadwalkan sesuai kebutuhan.',
  },
  {
    q: 'Seberapa sering monitoring dan kunjungan berkala dilakukan?',
    a: 'Untuk pelanggan aktif, kami merekomendasikan kunjungan monitoring minimal setiap bulan. Namun frekuensi dapat disesuaikan dengan kompleksitas sistem dan kebutuhan pelanggan — ada yang mingguan untuk sistem kritis, ada yang per kuartal untuk sistem yang sudah stabil.',
  },
  {
    q: 'Apakah produk VISCO® aman dan sesuai regulasi lingkungan?',
    a: 'Seluruh produk VISCO® diformulasikan memenuhi standar keamanan dan regulasi lingkungan Indonesia. Produk kami biodegradable dan tidak mengandung bahan berbahaya yang dilarang. Lembar Data Keselamatan (MSDS/SDS) tersedia untuk seluruh produk.',
  },
]

function AccordionItem({ faq, isOpen, onToggle, index }) {
  const bodyRef = useRef()

  useEffect(() => {
    if (!bodyRef.current) return
    if (isOpen) {
      gsap.to(bodyRef.current, { height: 'auto', duration: 0.38, ease: 'power2.out' })
      gsap.to(bodyRef.current, { opacity: 1, duration: 0.28, delay: 0.08 })
    } else {
      gsap.to(bodyRef.current, { height: 0, duration: 0.30, ease: 'power2.in' })
      gsap.to(bodyRef.current, { opacity: 0, duration: 0.20 })
    }
  }, [isOpen])

  return (
    <div className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
      <button className="faq-item__trigger" onClick={onToggle} aria-expanded={isOpen}>
        <span className="faq-item__num">Q{String(index + 1).padStart(2, '0')}</span>
        <span className="faq-item__question">{faq.q}</span>
        <span className="faq-item__icon">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <div className="faq-item__body" ref={bodyRef} style={{ height: 0, overflow: 'hidden', opacity: 0 }}>
        <div className="faq-item__answer">{faq.a}</div>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)
  const sectionRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-item', {
        opacity: 0, y: 20, stagger: 0.08, duration: 0.55, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="section-y bg-surface faq-section" ref={sectionRef}>
      <div className="container">
        <div className="faq-layout">
          <div className="faq-header">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Pertanyaan yang Sering Diajukan</h2>
            <p className="section-desc">
              Tidak menemukan jawaban yang Anda cari? Tim kami siap membantu.
            </p>
            <a href="mailto:visco_01@yahoo.com" className="btn btn--ghost faq-contact-btn">
              Ajukan Pertanyaan →
            </a>
          </div>

          <div className="faq-list">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
