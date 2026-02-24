import { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'

const WA_NUMBER = '6221266929080'
const WA_MESSAGE = 'Halo, saya ingin konsultasi mengenai solusi water treatment untuk perusahaan kami.'

export default function WhatsAppFAB() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`

  return (
    <div className={`wa-fab-wrap${visible ? ' wa-fab-wrap--visible' : ''}`}>
      <a href={waUrl} target="_blank" rel="noopener noreferrer" className="wa-fab-main" aria-label="WhatsApp">
        <MessageCircle size={24} />
      </a>
    </div>
  )
}
