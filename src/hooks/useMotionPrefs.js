import { useEffect, useState } from 'react'

// Определяет, нужно ли снижать эффекты: reduced-motion, мобильные, слабые устройства.
export function useMotionPrefs() {
  const [prefs, setPrefs] = useState({ reduced: false, mobile: false, webgl: true })

  useEffect(() => {
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mqMobile = window.matchMedia('(max-width: 768px)')

    const check = () => {
      let webgl = true
      try {
        const c = document.createElement('canvas')
        webgl = !!(c.getContext('webgl2') || c.getContext('webgl'))
      } catch {
        webgl = false
      }
      setPrefs({ reduced: mqReduce.matches, mobile: mqMobile.matches, webgl })
    }

    check()
    mqReduce.addEventListener('change', check)
    mqMobile.addEventListener('change', check)
    return () => {
      mqReduce.removeEventListener('change', check)
      mqMobile.removeEventListener('change', check)
    }
  }, [])

  return prefs
}
