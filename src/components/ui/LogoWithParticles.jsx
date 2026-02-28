import { useState, useCallback, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const COLORS = [
  '#c9a093',
  '#B79A6B',
  '#865c52',
  '#D6B2A6',
  '#d4c5a5',
  '#e8d5cc',
]

const createBatch = (batchId) =>
  Array.from({ length: 8 }, (_, i) => {
    const size = Math.random() * 6 + 3
    return {
      key: `${batchId}-${i}`,
      sx: Math.random() * 80 + 10,
      sy: Math.random() * 70 + 15,
      dx: (Math.random() - 0.5) * 70,
      dy: -(Math.random() * 45 + 20),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size,
      ml: -size / 2,
      mt: -size / 2,
      dur: Math.random() * 0.55 + 0.5,
      delay: Math.random() * 0.1,
    }
  })

const LogoWithParticles = ({ children, className = '' }) => {
  const [batches, setBatches] = useState([])
  const intervalRef = useRef(null)

  const spawnBatch = useCallback(() => {
    const id = Date.now() + Math.random()
    setBatches((prev) => [...prev, { id, list: createBatch(id) }])
    setTimeout(() => setBatches((prev) => prev.filter((b) => b.id !== id)), 1400)
  }, [])

  const startParticles = useCallback(() => {
    if (intervalRef.current) return
    spawnBatch()
    intervalRef.current = setInterval(spawnBatch, 350)
  }, [spawnBatch])

  const stopParticles = useCallback(() => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }, [])

  useEffect(() => {
    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <div
      className={`relative inline-flex ${className}`}
      style={{ overflow: 'visible' }}
      onMouseEnter={startParticles}
      onMouseLeave={stopParticles}
    >
      {children}

      {batches.flatMap(({ list }) =>
        list.map((p) => (
          <motion.span
            key={p.key}
            aria-hidden="true"
            initial={{ opacity: 1, x: 0, y: 0, scale: 0 }}
            animate={{ opacity: 0, x: p.dx, y: p.dy, scale: 1 }}
            transition={{ duration: p.dur, delay: p.delay, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              top: `${p.sy}%`,
              left: `${p.sx}%`,
              width: p.size,
              height: p.size,
              marginLeft: p.ml,
              marginTop: p.mt,
              borderRadius: '50%',
              backgroundColor: p.color,
              pointerEvents: 'none',
              zIndex: 20,
            }}
          />
        ))
      )}
    </div>
  )
}

export default LogoWithParticles
