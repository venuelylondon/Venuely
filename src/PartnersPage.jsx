import { useState } from "react";
import { Link } from "react-router-dom";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkoegwqp";

const reasons = [
  {
    title: "Qualified enquiries",
    desc: "We only bring you briefs that genuinely fit your space — matched on capacity, style, location and budget. No time-wasters.",
  },
  {
    title: "We handle the admin",
    desc: "Negotiation, site visits, contracts and payment are managed by us. You get a confirmed booking with the paperwork already done.",
  },
  {
    title: "A curated network",
    desc: "We work with a hand-picked roster of London venues and suppliers. Joining puts you in front of corporate event planners and PAs actively booking.",
  },
];

export default function PartnersPage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [hovered, setHovered] = useState(false);

  const h = { onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false) };

  const labelStyle = { display: "block", fontSize: 13, fontWeight: 500, color: "#2c3a1e", marginBottom: 6 };
  const fieldStyle = {
    width: "100%", padding: "12px 14px", fontSize: 15, fontFamily: "'DM Sans', sans-serif",
    color: "#2c3a1e", background: "#fff", border: "1px solid #d4c9b5", borderRadius: 6, outline: "none",
  };

  const handleSubmit = async () => {
    setError("");
    if (!email) {
      setError("Please provide an email address so we can get back to you.");
      return;
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubmitting(true);
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          formType: "Supplier / partner enquiry",
          name,
          company,
          email,
          message,
        }),
      });
    } catch (e) {}
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f5f0e8", fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { transition: opacity 0.2s ease; }
        a:hover { opacity: 0.8; }
        .vly-page { padding: 3rem 3rem 5rem; }
        .vly-partner-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 3.5rem; align-items: start; }
        .vly-partner-reasons { display: grid; grid-template-columns: 1fr; gap: 1.75rem; }
        ::placeholder { color: #b0a898; }
        @media (max-width: 768px) {
          .vly-page { padding: 2rem 1.25rem 3rem; }
          .vly-partner-grid { grid-template-columns: 1fr; gap: 2.5rem; }
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
        <p style={{ fontSize: 12, color: "#5e7150", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "0.75rem" }}>Partner with us</p>
        <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 300, color: "#2c3a1e", lineHeight: 1.2, marginBottom: "0.5rem", fontSize: 40 }}>Become a supplier or partner.</h1>
        <p style={{ fontSize: 17, color: "#5e7150", marginBottom: "3rem", maxWidth: 620 }}>Run a venue or supply events in London? We'd love to hear from you. Join our curated network and we'll bring you qualified corporate briefs that fit your space — and handle the admin from enquiry to booking.</p>

        <div className="vly-partner-grid">
          {/* Reasons */}
          <div className="vly-partner-reasons">
            {reasons.map((r) => (
              <div key={r.title} style={{ borderTop: "1px solid #d4c9b5", paddingTop: "1.25rem" }}>
                <div style={{ fontSize: 17, fontWeight: 600, color: "#2c3a1e", marginBottom: "0.4rem" }}>{r.title}</div>
                <div style={{ fontSize: 15, color: "#5e7150", lineHeight: 1.8 }}>{r.desc}</div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div id="partner-form" style={{ background: "#f0ebe0", borderRadius: 12, border: "1px solid #e0d8c8", padding: "2rem" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
                <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 300, color: "#2c3a1e", fontSize: 24, marginBottom: "0.5rem" }}>Thank you.</h2>
                <p style={{ fontSize: 15, color: "#5e7150", lineHeight: 1.7 }}>We've received your details and will be in touch shortly to talk about working together.</p>
              </div>
            ) : (
              <>
                <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 300, color: "#2c3a1e", fontSize: 22, marginBottom: "1.25rem" }}>Tell us about you</h2>

                <div style={{ marginBottom: 12 }}>
                  <label style={labelStyle}>Your name</label>
                  <input type="text" placeholder="your full name" value={name} onChange={e => setName(e.target.value)} style={fieldStyle} {...h} />
                </div>

                <div style={{ marginBottom: 12 }}>
                  <label style={labelStyle}>Venue or company</label>
                  <input type="text" placeholder="e.g. The Old Sessions House" value={company} onChange={e => setCompany(e.target.value)} style={fieldStyle} {...h} />
                </div>

                <div style={{ marginBottom: 12 }}>
                  <label style={labelStyle}>Email</label>
                  <input type="email" placeholder="your email" value={email} onChange={e => { setEmail(e.target.value); setError(""); }} style={fieldStyle} {...h} />
                </div>

                {error && (
                  <div style={{ color: "#993C1D", fontSize: 12, lineHeight: 1.5, marginBottom: 12 }}>
                    {error}
                  </div>
                )}

                <div style={{ marginBottom: 16 }}>
                  <label style={labelStyle}>Tell us about your space or service</label>
                  <textarea placeholder="capacity, location, event types you host, anything else we should know" value={message} onChange={e => setMessage(e.target.value)} style={{ ...fieldStyle, minHeight: 90, resize: "vertical" }} {...h} />
                </div>

                <button onClick={handleSubmit} disabled={submitting} style={{ width: "100%", padding: "14px", fontSize: 16, fontWeight: 600, fontFamily: "'DM Sans', sans-serif", color: "#2c3a1e", background: "#8a9e7a", border: "none", borderRadius: 6, cursor: submitting ? "default" : "pointer", opacity: submitting ? 0.7 : 1 }} {...h}>
                  {submitting ? "Sending…" : "Submit enquiry →"}
                </button>

                <p style={{ fontSize: 12, color: "#6f6e5c", marginTop: 12, lineHeight: 1.6 }}>
                  Prefer email? Reach us at <a href="mailto:hello@venuely.london?subject=Supplier / partner enquiry" style={{ color: "#2c3a1e", fontWeight: 500 }}>hello@venuely.london</a>.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
