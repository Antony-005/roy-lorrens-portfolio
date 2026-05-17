import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    // Only on pointer devices
    if (!window.matchMedia('(hover: hover)').matches) return

    const move = (e) => {
      if (ref.current) {
        ref.current.style.left = `${e.clientX}px`
        ref.current.style.top  = `${e.clientY}px`
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="cursor-glow"
      style={{ left: '-9999px', top: '-9999px' }}
    />
  )
}
