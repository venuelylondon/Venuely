import { Link } from "react-router-dom";

const proof = [
  { stat: "100% free", label: "No fees to event planners, ever" },
  { stat: "< 24 hrs", label: "Guaranteed response to every brief" },
  { stat: "End-to-end", label: "Venues, contracts and payment handled" },
];

const reasons = [
  { title: "Free to use — no fees, ever", desc: "We're paid by venues, not by you. Our service is completely free for event planners and EAs." },
  { title: "Response within 24 hours", desc: "Every brief receives a personal response within one business day — not an auto-reply, not a chatbot." },
  { title: "Fully managed service", desc: "We handle venues, negotiation, contracts and payment. You stay in control without the admin." },
  { title: "London specialists", desc: "We know London's venue market inside out — the hidden gems, the best rates, and the ones to avoid." },
  { title: "Discreet and professional", desc: "We represent you and your company, not the venue. Every brief is handled in complete confidence." },
  { title: "A real person, not a ticket", desc: "You get a dedicated point of contact who knows your brief and keeps you updated at every stage." },
];

export default function WhatWeDoPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f5f0e8", fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { transition: opacity 0.2s ease; }
        a:hover { opacity: 0.8; }
        .vly-page { padding: 3rem 3rem 5rem; }
        .vly-wwd-proof { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 3rem; }
        .vly-wwd-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
        @media (max-width: 768px) {
          .vly-page { padding: 2rem 1.25rem 3rem; }
          .vly-wwd-proof { grid-template-columns: 1fr; gap: 1rem; }
          .vly-wwd-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Top bar */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.75rem 3rem", background: "#f5f0e8", borderBottom: "1px solid #e0d8c8" }}>
        <Link to="/" style={{ textDecoration: "none", display: "inline-block", textAlign: "center" }}>
          <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 300, color: "#2c3a1e", letterSpacing: "-0.5px", lineHeight: 1, fontSize: 38 }}>Venuely</div>
          <div style={{ fontSize: 15, color: "#4f6a3f", letterSpacing: "8px", textTransform: "uppercase", marginTop: 7, paddingLeft: 8 }}>London</div>
        </Link>
        <Link to="/" style={{ color: "#2c3a1e", background: "#f0ebe0", border: "1px solid #d4c9b5", borderRadius: 6, textDecoration: "none", fontWeight: 500, fontSize: 15, padding: "10px 20px" }}>
          ← Back to home
        </Link>
      </nav>

      <div className="vly-page" style={{ maxWidth: 1000, margin: "0 auto" }}>
        <p style={{ fontSize: 12, color: "#5e7150", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "0.75rem" }}>What we do</p>
        <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 300, color: "#2c3a1e", lineHeight: 1.2, marginBottom: "0.5rem", fontSize: 40 }}>Why PAs and EAs choose Venuely</h1>
        <p style={{ fontSize: 17, color: "#5e7150", marginBottom: "3rem", maxWidth: 620 }}>We take the work of finding, negotiating and booking London venues off your plate — completely free, and handled end to end.</p>

        {/* Proof bar */}
        <div className="vly-wwd-proof">
          {proof.map((p, i) => (
            <div key={i} style={{ background: "#2c3a1e", borderRadius: 8, padding: "1.75rem 1.5rem", textAlign: "center" }}>
              <div style={{ fontFamily: "Georgia, serif", fontWeight: 300, color: "#e8e0d0", fontSize: 28, marginBottom: 6 }}>{p.stat}</div>
              <div style={{ fontSize: 13, color: "#6b8a5a", lineHeight: 1.5 }}>{p.label}</div>
            </div>
          ))}
        </div>

        {/* Reasons grid */}
        <div className="vly-wwd-grid" style={{ marginBottom: "3.5rem" }}>
          {reasons.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "1.5rem", background: "#f0ebe0", borderRadius: 8, border: "1px solid #e0d8c8" }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#6b8a5a", flexShrink: 0, marginTop: 7 }} />
              <div>
                <div style={{ fontSize: 16, fontWeight: 600, color: "#2c3a1e", marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: "#5e7150", lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: "#2c3a1e", borderRadius: 12, padding: "3rem", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Georgia, serif", color: "#e8e0d0", fontWeight: 300, marginBottom: "0.75rem", lineHeight: 1.2, fontSize: 28 }}>Ready to get started?</h2>
          <p style={{ fontSize: 16, color: "#8a9e7a", maxWidth: 420, margin: "0 auto 1.75rem", lineHeight: 1.8 }}>Send us your brief and we'll have a curated shortlist of London venues back to you within 24 hours. It's completely free.</p>
          <Link to="/" style={{ background: "#8a9e7a", color: "#2c3a1e", fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 600, borderRadius: 6, textDecoration: "none", padding: "15px 32px", display: "inline-block" }}>
            Send your brief →
          </Link>
        </div>
      </div>
    </div>
  );
}
