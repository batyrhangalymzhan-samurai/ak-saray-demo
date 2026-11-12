import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

// Карточка с 3D-наклоном за курсором и пружинной анимацией
export default function TiltCard({ children, className = '', strength = 10, disabled = false }) {
  const ref = useRef(null)
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)

  const sx = useSpring(px, { stiffness: 180, damping: 18, mass: 0.6 })
  const sy = useSpring(py, { stiffness: 180, damping: 18, mass: 0.6 })

  const rotateX = useTransform(sy, [0, 1], [strength, -strength])
  const rotateY = useTransform(sx, [0, 1], [-strength, strength])
  const glareX = useTransform(sx, [0, 1], ['0%', '100%'])
  const glareY = useTransform(sy, [0, 1], ['0%', '100%'])

  const onMove = (e) => {
    if (disabled || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }
  const onLeave = () => {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={disabled ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
      className={`relative overflow-hidden will-change-transform ${className}`}
    >
      {children}
      {!disabled && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(245,240,232,0.14), transparent 45%)`,
            ),
          }}
        />
      )}
    </motion.div>
  )
}
