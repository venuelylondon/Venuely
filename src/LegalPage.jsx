import { Link } from 'react-router-dom'

const colors = {
  darkGreen: '#2c3a1e',
  cream: '#f0ebe0',
  warmBg: '#f5f0e8',
  mutedGreen: '#8a9e7a',
  lightGreen: '#6b8a5a',
  border: '#e0d8c8',
  borderMid: '#d4c9b5',
}

const privacyContent = {
  title: 'Privacy Policy',
  updated: 'Last updated: May 2026',
  sections: [
    {
      heading: 'What data we collect',
      body: 'When you submit an event brief through our website, we collect the following personal data: your name, company name, email address, phone number, and the event details you provide in the brief form.',
    },
    {
      heading: 'How we use your data',
      body: 'We use your personal data to respond to your event enquiry, to match you with suitable London venues, and to contact you about your event. We will not use your data for any other purpose without your consent.',
    },
    {
      heading: 'Who we share it with',
      body: 'We share relevant brief details with venue partners solely for the purpose of fulfilling your event enquiry. We do not sell your data. We do not share it with third parties for marketing purposes.',
    },
    {
      heading: 'Data retention',
      body: 'We retain your personal data for up to 24 months following your enquiry, or until you request deletion, whichever comes first.',
    },
    {
      heading: 'Your rights',
      body: 'You have the right to access, correct, or delete your personal data at any time. To exercise any of these rights, please email us at hello@venuely.london and we will respond within a reasonable timeframe.',
    },
    {
      heading: 'Cookies',
      body: 'This website does not use tracking cookies. We do not use analytics cookies, advertising cookies, or any other cookies that track your behaviour across websites.',
    },
    {
      heading: 'Third party services',
      body: 'Form submissions on this website are processed by Formspree (formspree.io). Please refer to the Formspree privacy policy for details of how they handle submitted data.',
    },
    {
      heading: 'Contact',
      body: 'If you have any questions about this privacy policy or how we handle your data, please contact us at hello@venuely.london.',
    },
  ],
}

const termsContent = {
  title: 'Terms of Service',
  updated: 'Last updated: May 2026',
  sections: [
    {
      heading: 'Service description',
      body: 'Venuely London provides a managed corporate event concierge service. We assist clients in finding, negotiating, and booking venues for corporate events in London. By using our website or submitting a brief, you agree to these terms.',
    },
    {
      heading: 'Free to use',
      body: 'Our service is free for event planners, PAs, and EAs. We are compensated through arrangements with venue partners and do not charge clients any fees for our services.',
    },
    {
      heading: 'No guarantee',
      body: 'While we make every effort to find the most suitable venue for your brief, we cannot guarantee availability or pricing at any specific venue. Venue availability and rates are subject to change and are confirmed only upon booking.',
    },
    {
      heading: 'Client responsibilities',
      body: 'Clients are responsible for providing accurate and complete brief information to enable us to identify suitable venues. Clients are also responsible for reviewing and approving any venue contracts before signing.',
    },
    {
      heading: 'Payment',
      body: 'Where Venuely London manages payment on behalf of a client, full terms will be agreed in writing before any transaction takes place. We will not process any payments without your explicit written approval.',
    },
    {
      heading: 'Limitation of liability',
      body: 'Venuely London acts as an intermediary between clients and venue partners. We are not liable for the actions, omissions, or failures of venue partners, including but not limited to cancellations, changes to availability, or issues arising during an event.',
    },
    {
      heading: 'Governing law',
      body: 'These terms are governed by the laws of England and Wales. Any disputes arising from or related to these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.',
    },
    {
      heading: 'Contact',
      body: 'If you have any questions about these terms, please contact us at hello@venuely.london.',
    },
  ],
}

export default function LegalPage({ page }) {
  const content = page === 'privacy' ? privacyContent : termsContent

  return (
    <div style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", background: colors.warmBg, minHeight: '100vh', width: '100%' }}>

      {/* Nav — matches main site */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: colors.warmBg, borderBottom: `1px solid ${colors.border}`, padding: '1.75rem 3rem' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 300, color: colors.darkGreen, letterSpacing: '-0.5px', lineHeight: 1, fontSize: 38 }}>Venuely</div>
          <div style={{ fontSize: 8, color: colors.mutedGreen, letterSpacing: '4px', textTransform: 'uppercase', marginTop: 5 }}>London</div>
        </Link>
        <Link
          to="/"
          style={{ color: colors.darkGreen, background: colors.cream, border: `1px solid ${colors.borderMid}`, borderRadius: 6, textDecoration: 'none', fontWeight: 500, fontSize: 14, padding: '10px 20px' }}
        >
          Send a brief →
        </Link>
      </nav>

      {/* Content area */}
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '4rem 2rem 5rem' }}>

        {/* Page header */}
        <div style={{ marginBottom: '3rem', paddingBottom: '2rem', borderBottom: `1px solid ${colors.borderMid}` }}>
          <p style={{ fontSize: 11, color: colors.mutedGreen, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Legal</p>
          <h1 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 300, color: colors.darkGreen, fontSize: 42, letterSpacing: '-1px', lineHeight: 1.1, marginBottom: '0.75rem' }}>
            {content.title}
          </h1>
          <p style={{ fontSize: 13, color: colors.mutedGreen }}>{content.updated}</p>
        </div>

        {/* Intro paragraph */}
        <p style={{ fontSize: 15, color: colors.darkGreen, lineHeight: 1.85, marginBottom: '3rem' }}>
          {page === 'privacy'
            ? 'At Venuely London, we take your privacy seriously. This policy explains what personal data we collect, how we use it, and your rights as a data subject.'
            : 'These terms govern your use of the Venuely London website and services. Please read them carefully before submitting a brief or engaging our services.'}
        </p>

        {/* Sections */}
        {content.sections.map((section, i) => (
          <div key={i} style={{ marginBottom: '2.5rem', paddingBottom: '2.5rem', borderBottom: i < content.sections.length - 1 ? `1px solid ${colors.border}` : 'none' }}>
            <h2 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 300, color: colors.darkGreen, fontSize: 22, marginBottom: '0.75rem', lineHeight: 1.2 }}>
              {section.heading}
            </h2>
            <p style={{ fontSize: 15, color: '#4a5a3a', lineHeight: 1.85 }}>
              {section.body}
            </p>
          </div>
        ))}

        {/* Cross-link to the other legal page */}
        <div style={{ marginTop: '3rem', padding: '1.5rem 2rem', background: colors.cream, borderRadius: 8, border: `1px solid ${colors.borderMid}` }}>
          <p style={{ fontSize: 13, color: colors.mutedGreen, lineHeight: 1.7 }}>
            {page === 'privacy'
              ? <>Also see our <Link to="/terms" style={{ color: colors.darkGreen, fontWeight: 500 }}>Terms of Service</Link>.</>
              : <>Also see our <Link to="/privacy" style={{ color: colors.darkGreen, fontWeight: 500 }}>Privacy Policy</Link>.</>}
            {' '}Questions? Email us at{' '}
            <a href="mailto:hello@venuely.london" style={{ color: colors.darkGreen, fontWeight: 500 }}>hello@venuely.london</a>.
          </p>
        </div>
      </div>

      {/* Footer — matches main site */}
      <footer style={{ background: colors.darkGreen, padding: '2.5rem 3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.25rem' }}>
          <div>
            <div style={{ fontFamily: "Georgia, serif", fontSize: 24, fontWeight: 300, color: '#e8e0d0' }}>Venuely</div>
            <div style={{ fontSize: 7, color: colors.lightGreen, letterSpacing: '3px', textTransform: 'uppercase', marginTop: 3 }}>London</div>
            <p style={{ fontSize: 13, color: colors.mutedGreen, marginTop: 10, lineHeight: 1.6 }}>Corporate event concierge for PAs and EAs.</p>
          </div>
          <a href="mailto:hello@venuely.london" style={{ fontSize: 14, color: '#a8bc98', textDecoration: 'none' }}>hello@venuely.london</a>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: 12, color: colors.lightGreen }}>© {new Date().getFullYear()} Venuely London. All rights reserved.</span>
            <span style={{ fontSize: 12, color: colors.lightGreen }}>·</span>
            <Link to="/privacy" style={{ fontSize: 12, color: colors.lightGreen, textDecoration: 'none' }}>Privacy Policy</Link>
            <span style={{ fontSize: 12, color: colors.lightGreen }}>·</span>
            <Link to="/terms" style={{ fontSize: 12, color: colors.lightGreen, textDecoration: 'none' }}>Terms of Service</Link>
          </div>
          <span style={{ fontSize: 12, color: colors.lightGreen }}>Free venue finding service · London</span>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { transition: opacity 0.2s ease; }
        a:hover { opacity: 0.75; }

        @media (max-width: 768px) {
          nav { padding: 1rem 1.25rem !important; }
          nav a:first-child div:first-child { font-size: 26px !important; }
          nav a:last-child { font-size: 12px !important; padding: 8px 14px !important; }
          footer { padding: 2rem 1.25rem !important; }
        }
      `}</style>
    </div>
  )
}
