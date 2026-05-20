import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "How does Venuely work?",
    a: "Simple. You send us a brief — the date, the number of guests, the type of event, and your budget. We search our network of London venues, check availability, and send you a curated shortlist within 24 hours. You choose the one you like, and we handle the booking.",
  },
  {
    q: "Is it really free?",
    a: "Yes, completely free to you. We earn a commission directly from the venue once a booking is confirmed. There are no fees, no markups, and no hidden charges on your invoice.",
  },
  {
    q: "How quickly will I get a shortlist?",
    a: "We aim to have your shortlist back within 24 hours on business days. For urgent or same-week requests, let us know and we'll prioritise — we understand corporate timelines aren't always predictable.",
  },
  {
    q: "What areas of London do you cover?",
    a: "All of Greater London. We work across the City, West End, East London, South Bank, Canary Wharf, and everywhere in between. If you need a venue in a specific area or close to a particular station, just tell us.",
  },
  {
    q: "What types of events do you cover?",
    a: "Everything corporate: board dinners, client entertaining, team away days, company offsites, product launches, private dining, meetings, conferences, Christmas parties, and summer events. If it needs a venue, we can help.",
  },
  {
    q: "Do you have a minimum budget?",
    a: "No minimum. We've sourced venues for intimate dinners of six and large events for hundreds of guests. Whether your budget is £500 or £50,000, we'll find the best options available at that level.",
  },
  {
    q: "Who is this service for?",
    a: "We work mainly with PAs, executive assistants, and office managers who book events on behalf of their companies. If you're responsible for organising corporate events in London and want to save time, we're here for you.",
  },
  {
    q: "What information do you need to get started?",
    a: "The basics: date (or a range of dates), number of guests, type of event, and approximate budget. Anything extra — preferred location, AV requirements, dietary needs, style of room — helps us narrow down the shortlist, but you can always add detail as we go.",
  },
];

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const h = {};

  return (
    <div style={{ minHeight: "100vh", background: "#f5f0e8", fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { transition: opacity 0.2s ease; }
        a:hover { opacity: 0.8; }
        .vly-page { padding: 3rem 3rem 5rem; }
        @media (max-width: 768px) { .vly-page { padding: 2rem 1.25rem 3rem; } }
      `}</style>

      {/* Top bar */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.75rem 3rem", background: "#f5f0e8", borderBottom: "1px solid #e0d8c8" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 300, color: "#2c3a1e", letterSpacing: "-0.5px", lineHeight: 1, fontSize: 30 }}>Venuely</div>
          <div style={{ fontSize: 11, color: "#4f6a3f", letterSpacing: "5px", textTransform: "uppercase", marginTop: 5, paddingLeft: 2 }}>London</div>
        </Link>
        <Link to="/" style={{ color: "#2c3a1e", background: "#f0ebe0", border: "1px solid #d4c9b5", borderRadius: 6, textDecoration: "none", fontWeight: 500, fontSize: 15, padding: "10px 20px" }}>
          ← Back to home
        </Link>
      </nav>

      <div className="vly-page" style={{ maxWidth: 760, margin: "0 auto" }}>
        <p style={{ fontSize: 12, color: "#5e7150", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "0.75rem" }}>FAQ</p>
        <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 300, color: "#2c3a1e", lineHeight: 1.2, marginBottom: "0.5rem", fontSize: 40 }}>Frequently asked questions</h1>
        <p style={{ fontSize: 17, color: "#5e7150", marginBottom: "2.5rem" }}>Everything you need to know about working with Venuely.</p>

        <div style={{ borderTop: "1px solid #d4c9b5" }}>
          {faqs.map((item, i) => (
            <div key={i} style={{ borderBottom: "1px solid #d4c9b5" }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  textAlign: "left",
                  padding: "1.25rem 0",
                  fontSize: 17,
                  fontWeight: 600,
                  color: openFaq === i ? "#6b8a5a" : "#2c3a1e",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "1rem",
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "color 0.2s",
                }}
              >
                {item.q}
                <svg
                  width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  style={{ flexShrink: 0, transition: "transform 0.25s ease", transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {openFaq === i && (
                <div style={{ paddingBottom: "1.25rem", color: "#5e7150", lineHeight: 1.8, fontSize: 16 }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: "3.5rem", background: "#2c3a1e", borderRadius: 12, padding: "3rem", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Georgia, serif", color: "#e8e0d0", fontWeight: 300, marginBottom: "0.75rem", lineHeight: 1.2, fontSize: 28 }}>Ready to send us a brief?</h2>
          <p style={{ fontSize: 16, color: "#8a9e7a", maxWidth: 420, margin: "0 auto 1.75rem", lineHeight: 1.8 }}>Tell us about your event and we'll have a curated shortlist of London venues back to you within 24 hours.</p>
          <Link to="/" style={{ background: "#8a9e7a", color: "#2c3a1e", fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 600, borderRadius: 6, textDecoration: "none", padding: "15px 32px", display: "inline-block" }}>
            Send your brief →
          </Link>
        </div>
      </div>
    </div>
  );
}
