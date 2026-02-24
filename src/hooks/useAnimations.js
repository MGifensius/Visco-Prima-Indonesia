import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function usePageAnimations(deps = []) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.gs-reveal').forEach(el => {
        gsap.fromTo(el,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' }
          }
        )
      })
      gsap.utils.toArray('.gs-reveal-left').forEach(el => {
        gsap.fromTo(el,
          { x: -40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' }
          }
        )
      })
      gsap.utils.toArray('.gs-reveal-right').forEach(el => {
        gsap.fromTo(el,
          { x: 40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' }
          }
        )
      })
    })
    return () => ctx.revert()
  }, deps)
}
