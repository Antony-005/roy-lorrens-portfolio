import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem', display: 'block' }}>
            Legal
          </span>
          <h1 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 300, color: 'var(--text)', marginBottom: '1rem' }}>
            Privacy Policy
          </h1>
          <div style={{ width: '48px', height: '1px', background: 'var(--gold)', marginBottom: '1.5rem' }} />
          <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
            Last updated: October 2026
          </p>
        </div>

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

          {[
            {
              title: '1. Introduction',
              body: 'Welcome to rlodhiambo.co.ke, the personal portfolio website of Roy Lorrens Odhiambo. This Privacy Policy explains how we collect, use, and protect information when you visit this website or use its contact features.',
            },
            {
              title: '2. Information We Collect',
              body: 'We collect information you voluntarily provide through our contact form, including your full name, email address, subject, and message. We do not collect sensitive personal data such as payment information, government identification, or health records.',
            },
            {
              title: '3. How We Use Your Information',
              body: 'Information submitted through the contact form is used solely to respond to your enquiry. Your details are not sold, rented, or shared with third parties for marketing purposes. Messages are delivered via EmailJS and go directly to Roy\'s email inbox.',
            },
            {
              title: '4. Analytics',
              body: 'This website uses Google Analytics 4 to collect anonymised data about how visitors interact with the site — including pages visited, time spent, device type, and general geographic location. This data is aggregated and does not personally identify you. You can opt out of Google Analytics tracking by using the Google Analytics Opt-out Browser Add-on available at tools.google.com/dlpage/gaoptout.',
            },
            {
              title: '5. Cookies',
              body: 'Google Analytics uses cookies to distinguish users and collect usage data. These are small text files stored on your device. By continuing to use this website, you consent to the use of these cookies. You can disable cookies through your browser settings at any time.',
            },
            {
              title: '6. Third-Party Services',
              body: 'This website uses the following third-party services: Google Analytics (usage tracking), EmailJS (contact form message delivery), and Google Fonts (typography). Each of these services has its own privacy policy governing their data practices.',
            },
            {
              title: '7. Data Retention',
              body: 'Contact form messages are retained in Roy\'s email inbox for as long as necessary to respond to your enquiry. Google Analytics data is retained for 14 months by default, as set by Google.',
            },
            {
              title: '8. Your Rights',
              body: 'You have the right to request access to, correction of, or deletion of any personal information you have submitted through this website. To exercise these rights, please contact Roy directly at lorrensroy05@gmail.com.',
            },
            {
              title: '9. External Links',
              body: 'This website contains links to external platforms including Amazon, YouTube, Instagram, TikTok, Facebook, LinkedIn, and Kickline254.com. We are not responsible for the privacy practices of these external sites and encourage you to review their respective privacy policies.',
            },
            {
              title: '10. Changes to This Policy',
              body: 'This Privacy Policy may be updated from time to time. Any changes will be reflected on this page with an updated date. Continued use of the website after changes constitutes acceptance of the revised policy.',
            },
            {
              title: '11. Contact',
              body: 'If you have any questions about this Privacy Policy, please contact Roy Lorrens Odhiambo at lorrensroy05@gmail.com.',
            },
          ].map((section) => (
            <div key={section.title} style={{ borderLeft: '1px solid var(--border2)', paddingLeft: '1.5rem' }}>
              <h2 style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.25rem', fontWeight: 400,
                color: 'var(--text)', marginBottom: '0.75rem',
              }}>
                {section.title}
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                {section.body}
              </p>
            </div>
          ))}

        </div>

        {/* Back link */}
        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border2)' }}>
          <Link
            to="/"
            style={{
              fontSize: '0.78rem', letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'var(--gold)',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            }}
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  )
}