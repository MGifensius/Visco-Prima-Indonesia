import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Preloader({ onComplete }) {
  const ref = useRef()
  const bar = useRef()

  useEffect(() => {
    gsap.to(bar.current, {
      width: '100%', duration: 1.6, ease: 'power2.inOut',
      onComplete: () => {
        gsap.to(ref.current, {
          yPercent: -100, duration: 0.65, ease: 'power3.inOut',
          onComplete: () => onComplete()
        })
      }
    })
  }, [])

  return (
    <div className="preloader" ref={ref}>
      <div className="preloader-content">
        <img src="/visco-logo.png" alt="Visco" className="preloader-logo-img" />
        <div className="preloader-text">
          <div className="preloader-brand">PT. <span>VISCO</span> PRIMA INDONESIA</div>
          <div className="preloader-sub">Water & Waste Water Treatment Specialist</div>
        </div>
      </div>
      <div className="preloader-bar">
        <div className="preloader-fill" ref={bar} />
      </div>
    </div>
  )
}
