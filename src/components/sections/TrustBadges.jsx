import { useRef, useEffect } from 'react'
import gsap from 'gsap'

// Major Indonesian company names VISCO® serves
const clients = [
  'Indocement', 'Unilever', 'Astra International', 'PT. PLN (Persero)',
  'Krakatau Steel', 'Hotel Mulia', 'RS. Pondok Indah', 'Grand Hyatt',
  'Summarecon', 'Pertamina', 'Sinar Mas', 'WIKA',
]

const certs = [
  { label: 'ISO 9001', sub: 'Quality Management' },
  { label: 'SNI', sub: 'Standar Nasional Indonesia' },
  { label: 'MSDS', sub: 'Material Safety Data' },
  { label: 'AMDAL', sub: 'Compliance Ready' },
]

function CertBadge({ cert }) {
  return (
    <div className="cert-badge">
      <div className="cert-badge__icon">{cert.label}</div>
      <span>{cert.sub}</span>
    </div>
  )
}

function ClientLogo({ name }) {
  return (
    <div className="client-logo">
      <span>{name}</span>
    </div>
  )
}

export default function TrustBadges() {
  const marqueeRef = useRef()

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return
    gsap.to(marquee, {
      x: '-50%',
      duration: 30,
      ease: 'none',
      repeat: -1,
    })
  }, [])

  return (
    <div className="trust-section">
      <div className="container">
        {/* Certifications */}
        <div className="cert-row">
          {certs.map(c => <CertBadge key={c.label} cert={c} />)}
        </div>

        {/* Client logos marquee */}
        <div className="client-marquee-wrap">
          <div className="client-marquee-label">Dipercaya oleh</div>
          <div className="client-marquee">
            <div className="client-marquee__track" ref={marqueeRef}>
              {[...clients, ...clients].map((name, i) => (
                <ClientLogo key={`${name}-${i}`} name={name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
