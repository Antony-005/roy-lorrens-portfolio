import { useEffect } from 'react'

/**
 * useScrollReveal
 * Attaches an IntersectionObserver to all `.reveal` elements
 * and adds the `.visible` class when they enter the viewport.
 * Call once at the App level.
 */
export default function useScrollReveal(threshold = 0.12) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [threshold])
}
