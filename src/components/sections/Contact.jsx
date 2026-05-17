import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FiMail, FiMapPin, FiBriefcase, FiSend } from 'react-icons/fi'
import { SectionLabel, SectionTitle, GoldLine } from '@ui/Divider'


const EMAILJS_SERVICE_ID  = 'service_p7150yr'
const EMAILJS_TEMPLATE_ID = 'template_4lkdwrh'
const EMAILJS_PUBLIC_KEY  = 'cd9nAxl5qY640edes'
// ────────────────────────────────────────────────────────────────────

const INPUT_STYLE = {
  width: '100%', background: 'var(--dark)', border: '1px solid var(--border2)',
  color: 'var(--text)', padding: '0.85rem 1rem',
  fontFamily: '"DM Sans", sans-serif', fontSize: '0.9rem',
  outline: 'none', transition: 'border-color 0.2s',
}

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'
  const [values, setValues] = useState({ from_name: '', from_email: '', subject: '', message: '' })

  const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setValues({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" style={{ padding: '6rem 0', background: 'var(--surface)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <SectionLabel>Get In Touch</SectionLabel>
          <SectionTitle>Contact Roy</SectionTitle>
          <GoldLine />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}
             className="contact-grid">

          {/* Info */}
          <div className="reveal">
            <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.8rem', fontWeight: 300, color: 'var(--text)', marginBottom: '1rem' }}>
              Let's Build Something Meaningful
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Whether you're looking for a strategic HR partner, a speaker for your event, a podcast collaboration, or simply want to connect — Roy is open to purposeful conversations.
            </p>

            {[
              { icon: FiMail,    text: 'lorrensroy05@gmail.com' },
              { icon: FiMapPin,  text: 'Nairobi, Kenya' },
              { icon: FiBriefcase, text: 'Available for consulting & speaking' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid var(--border2)', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                <div style={{ width: '36px', height: '36px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-dim)', flexShrink: 0 }}>
                  <Icon size={16} />
                </div>
                {text}
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/254743764430"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                marginTop: '1.75rem', padding: '0.85rem 1.5rem',
                border: '1px solid rgba(37,211,102,0.3)',
                color: 'rgba(37,211,102,0.75)',
                fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                background: 'rgba(37,211,102,0.04)', transition: 'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(37,211,102,0.6)'; e.currentTarget.style.color = 'rgba(37,211,102,1)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(37,211,102,0.3)'; e.currentTarget.style.color = 'rgba(37,211,102,0.75)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Roy
            </a>
          </div>

          {/* Form */}
          <div className="reveal reveal-delay-1">
            <form ref={formRef} onSubmit={handleSubmit}>
              {[
                { label: 'Full Name', name: 'from_name', type: 'text', placeholder: 'Your full name' },
                { label: 'Email Address', name: 'from_email', type: 'email', placeholder: 'your@email.com' },
                { label: 'Subject', name: 'subject', type: 'text', placeholder: 'How can Roy help you?' },
              ].map((field) => (
                <div key={field.name} style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={values[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    style={INPUT_STYLE}
                    onFocus={e => e.target.style.borderColor = 'var(--gold-dim)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border2)'}
                  />
                </div>
              ))}

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  placeholder="Tell Roy about your project, collaboration idea, or just say hello..."
                  required
                  rows={5}
                  style={{ ...INPUT_STYLE, resize: 'none' }}
                  onFocus={e => e.target.style.borderColor = 'var(--gold-dim)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border2)'}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}
              >
                {status === 'sending' ? 'Sending...' : (<><FiSend size={14} /> Send Message</>)}
              </button>

              {status === 'success' && (
                <div style={{ marginTop: '0.75rem', padding: '0.75rem 1rem', background: 'rgba(29,158,117,0.08)', border: '1px solid rgba(29,158,117,0.2)', color: '#5DCAA5', fontSize: '0.82rem' }}>
                  ✓ Message sent. Roy will be in touch soon.
                </div>
              )}
              {status === 'error' && (
                <div style={{ marginTop: '0.75rem', padding: '0.75rem 1rem', background: 'rgba(216,90,48,0.08)', border: '1px solid rgba(216,90,48,0.2)', color: '#F0997B', fontSize: '0.82rem' }}>
                  ✗ Something went wrong. Please try emailing directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important;gap:3rem!important}}`}</style>
    </section>
  )
}
