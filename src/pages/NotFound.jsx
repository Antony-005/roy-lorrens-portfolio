import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6"
         style={{ background: 'var(--dark)' }}>
      <p style={{ fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>
        Error 404
      </p>
      <h1 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(3rem,8vw,6rem)', fontWeight: 300, color: 'var(--text)', marginBottom: '1rem' }}>
        Page Not Found
      </h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '400px' }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary">Return Home</Link>
    </div>
  )
}
