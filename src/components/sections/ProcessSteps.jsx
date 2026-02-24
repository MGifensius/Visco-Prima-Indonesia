import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare, FlaskConical, ClipboardCheck, Activity, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Konsultasi Awal',
    desc: 'Diskusikan kebutuhan dan tantangan water treatment industri Anda dengan tim ahli VISCO®.',
    detail: 'Via telepon, email, atau kunjungan langsung',
    highlight: 'Gratis & Tanpa Komitmen',
  },
  {
    num: '02',
    icon: FlaskConical,
    title: 'Analisis Air',
    desc: 'Tim teknisi kami melakukan pengambilan dan analisis sampel air secara menyeluruh untuk diagnosa sistem.',
    detail: 'Laporan hasil analisis dalam 3–5 hari kerja',
    highlight: 'Analisis Komprehensif',
  },
  {
    num: '03',
    icon: ClipboardCheck,
    title: 'Rekomendasi Solusi',
    desc: 'Berdasarkan hasil analisis, kami merancang program treatment optimal dengan produk VISCO® yang tepat.',
    detail: 'Termasuk panduan dosis dan jadwal monitoring',
    highlight: 'Solusi Terukur',
  },
  {
    num: '04',
    icon: Activity,
    title: 'Implementasi & Monitoring',
    desc: 'Implementasi produk dengan panduan teknisi dan kunjungan monitoring berkala.',
    detail: 'Support 24/7 untuk sistem kritis',
    highlight: 'Dukungan Penuh',
  },
]

function StepCard({ step, index, total }) {
  const Icon = step.icon
  return (
    <div className="ps-card">
      {/* Timeline node */}
      <div className="ps-card__node">
        <div className="ps-card__node-ring">
          <Icon size={20} />
        </div>
        {index < total - 1 && <div className="ps-card__node-line" />}
      </div>

      {/* Content */}
      <div className="ps-card__content">
        <div className="ps-card__badge">{step.highlight}</div>
        <div className="ps-card__num">{step.num}</div>
        <h3 className="ps-card__title">{step.title}</h3>
        <p className="ps-card__desc">{step.desc}</p>
        <div className="ps-card__detail">
          <span className="ps-card__detail-dot" />
          {step.detail}
        </div>
      </div>
    </div>
  )
}

export default function ProcessSteps() {
  const sectionRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ps-card', {
        opacity: 0, y: 48, stagger: 0.2, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
      })
      gsap.from('.ps-card__node-line', {
        scaleY: 0, stagger: 0.2, duration: 0.6, ease: 'power2.out', transformOrigin: 'top center',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true },
      })
      gsap.from('.ps-card__node-ring', {
        scale: 0, stagger: 0.2, duration: 0.5, ease: 'back.out(1.7)',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="section-y ps-section" ref={sectionRef}>
      <div className="container">
        <div className="ps-section__header">
          <div className="ps-section__header-left">
            <span className="section-tag gs-reveal">Cara Kami Kerja</span>
            <h2 className="section-title gs-reveal">Empat Langkah Menuju<br />Sistem yang Optimal</h2>
          </div>
          <div className="ps-section__header-right gs-reveal">
            <p className="section-desc">
              Proses terstruktur dan transparan menuju efisiensi water treatment terbaik untuk industri Anda.
            </p>
            <Link to="/contact" className="btn btn--primary btn--sm" style={{ marginTop: 16 }}>
              Mulai Konsultasi <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="ps-timeline">
          {steps.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} total={steps.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
