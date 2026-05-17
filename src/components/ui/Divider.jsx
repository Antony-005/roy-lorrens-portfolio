// ─── Section Divider ────────────────────────────────────
export function Divider() {
  return <div className="section-divider" />
}
export default Divider

// ─── Section Label ───────────────────────────────────────
export function SectionLabel({ children }) {
  return (
    <span style={{
      fontSize: '0.72rem', letterSpacing: '0.25em',
      textTransform: 'uppercase', color: 'var(--gold)',
      marginBottom: '0.75rem', display: 'block',
    }}>
      {children}
    </span>
  )
}

// ─── Section Title ───────────────────────────────────────
export function SectionTitle({ children, style }) {
  return (
    <h2
      style={{
        fontFamily: '"Cormorant Garamond", serif',
        fontSize: 'clamp(2rem,4vw,3rem)',
        fontWeight: 300, color: 'var(--text)',
        marginBottom: '1.25rem', lineHeight: 1.15,
        ...style,
      }}
    >
      {children}
    </h2>
  )
}

// ─── Gold Line ───────────────────────────────────────────
export function GoldLine({ center }) {
  return (
    <div
      className="gold-line"
      style={center ? { margin: '0 auto 2.5rem' } : {}}
    />
  )
}

// ─── Portrait Placeholder ────────────────────────────────
export function PortraitPlaceholder({ label = 'Professional Portrait', style }) {
  return (
    <div style={{
      width: '100%', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: '0.75rem', color: 'var(--text-dim)',
      background: 'linear-gradient(135deg, var(--surface) 0%, var(--surface2) 100%)',
      ...style,
    }}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
           style={{ width: '64px', height: '64px', opacity: 0.25 }}>
        <circle cx="50" cy="38" r="18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 85c0-19.3 15.7-35 35-35s35 15.7 35 35" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
        {label}
      </span>
    </div>
  )
}
