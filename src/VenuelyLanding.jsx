import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkoegwqp";


export default function VenuelyLanding() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [otherBudget, setOtherBudget] = useState("");
  const [error, setError] = useState("");
  const [brief, setBrief] = useState({
    eventType: "",
    budget: "",
    guests: "",
    preferredDate: "",
    requirements: "",
  });
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    setTimeout(() => setVisible(true), 100);
    const tryPlay = () => {
      const vid = videoRef.current;
      if (!vid) return;
      vid.muted = true;
      // Force reload the src to bypass Chrome's deferred loading
      const src = vid.src || vid.currentSrc;
      if (src) {
        vid.src = src;
        vid.load();
      }
      vid.play().catch(() => {
        // Retry on user interaction
        const retry = () => { vid.play().catch(() => {}); document.removeEventListener('click', retry); document.removeEventListener('scroll', retry); };
        document.addEventListener('click', retry, { once: true });
        document.addEventListener('scroll', retry, { once: true });
      });
    };
    setTimeout(tryPlay, 300);
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSubmit = async () => {
    setError("");
    if (!email && !phone) {
      setError("Please provide at least a work email or phone number to continue.");
      return;
    }
    if (email && !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubmitting(true);
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          company,
          email,
          phone,
          eventType: brief.eventType,
          guests: brief.guests,
          preferredDate: brief.preferredDate,
          budget: brief.budget === "Other / Not sure yet" ? otherBudget : brief.budget,
          requirements: brief.requirements,
        }),
      });
    } catch (e) {}
    setSubmitting(false);
    setSubmitted(true);
  };

  const bullets = [
    "London venue specialists",
    "Response within 24 hours, guaranteed",
    "Free to use — no fees, ever",
    "Pre-authorised venue partnerships across London",
    "Deep industry knowledge, built from the inside",
    "Dedicated point of contact throughout",
    "End-to-end contract and payment management",
    "Site visits arranged and attended on your behalf",
    "Every brief handled with precision and care",
    "Flexible around your working hours and time zones",
    "Confidential and discreet service",
  ];

  const h = { onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false) };
  const fade = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: `all 0.8s ease ${delay}s`,
  });

  const fieldStyle = {
    width: "100%",
    background: "white",
    border: "1px solid #d4c9b5",
    borderRadius: 6,
    padding: "12px 14px",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 17,
    color: "#2c3a1e",
    outline: "none",
    WebkitAppearance: "none",
    appearance: "none",
    boxSizing: "border-box",
  };

  const labelStyle = {
    display: "block",
    fontSize: 13,
    color: "#5e7150",
    fontWeight: 500,
    letterSpacing: "0.3px",
    marginBottom: 5,
  };

  const eventTypes = [
    "Select event type…",
    "Christmas Party",
    "Summer Party",
    "Team Away Day",
    "Conference",
    "Client Dinner",
    "Private Dining",
    "Drinks Reception",
    "Product Launch",
    "Awards Show",
    "Networking Event",
    "Exhibition",
    "Special Occasion",
    "Other",
  ];

  const budgetOptions = [
    "Select a budget…",
    "Under £5,000",
    "£5,000 – £10,000",
    "£10,000 – £20,000",
    "£20,000 – £30,000",
    "£30,000 – £50,000",
    "£50,000+",
    "Other / Not sure yet",
  ];

  return (
    <div className="vly-root" style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", background: "#f5f0e8", minHeight: "100vh", width: "100%" }}>

      {/* Custom V cursor - desktop only */}
      {!isMobile && (
        <div style={{
          position: "fixed",
          top: cursor.y - 24,
          left: cursor.x - 12,
          pointerEvents: "none",
          zIndex: 9999,
          transform: hovered ? "scale(1.4)" : "scale(1)",
          transition: "transform 0.15s ease, top 0.05s ease, left 0.05s ease",
        }}>
          <svg width="24" height="32" viewBox="0 0 24 32">
            <text x="12" y="28" fontFamily="Georgia, 'Times New Roman', serif" fontSize="32" fontWeight="300" fill="#e8e0d0" textAnchor="middle" stroke="#2c3a1e" strokeWidth="1.5" paintOrder="stroke">V</text>
          </svg>
        </div>
      )}

      {/* Announcement banner */}
      <div className="vly-banner" style={{ background: "#1e2d1a", textAlign: "center" }}>
        <span style={{ fontSize: 14, color: "#5e7150" }}>
          <span style={{ color: "#e8e0d0", fontWeight: 500 }}>Now open: </span>
          Accepting new clients for summer and autumn 2026 events
        </span>
      </div>

      {/* Nav */}
      <nav className="vly-nav" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f5f0e8", borderBottom: "1px solid #e0d8c8" }}>
        <Link to="/" style={{ ...fade(0), textDecoration: "none", display: "inline-block", textAlign: "center" }}>
          <div className="vly-logo" style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 300, color: "#2c3a1e", letterSpacing: "-0.5px", lineHeight: 1 }}>Venuely</div>
          <div style={{ fontSize: 15, color: "#4f6a3f", letterSpacing: "8px", textTransform: "uppercase", marginTop: 7, paddingLeft: 8 }}>London</div>
        </Link>
        <div className="vly-nav-right" style={{ display: "flex", alignItems: "center", gap: "2rem", ...fade(0.2) }}>
          <div className="vly-nav-links" style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}>
            <Link to="/how-it-works" className="vly-nav-link" style={{ fontSize: 15, color: "#2c3a1e", textDecoration: "none", fontWeight: 500 }}>How it works</Link>
            <Link to="/faq" className="vly-nav-link" style={{ fontSize: 15, color: "#2c3a1e", textDecoration: "none", fontWeight: 500 }}>FAQ</Link>
            <Link to="/what-we-do" className="vly-nav-link" style={{ fontSize: 15, color: "#2c3a1e", textDecoration: "none", fontWeight: 500 }}>What we do</Link>
            <Link to="/partners" className="vly-nav-link" style={{ fontSize: 15, color: "#2c3a1e", textDecoration: "none", fontWeight: 500 }}>Partners</Link>
          </div>
          <a
            href="#brief-form"
            className="vly-nav-cta"
            style={{ color: "#2c3a1e", background: "#f0ebe0", border: "1px solid #d4c9b5", borderRadius: 6, textDecoration: "none", fontWeight: 500 }}
            {...h}
          >
            Send a brief →
          </a>
        </div>
      </nav>

      {/* Trust bar */}
      <div className="vly-trust-bar" style={{ background: "#f0ebe0", borderBottom: "1px solid #e0d8c8", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {["Free service — no fees, ever", "London specialists", "Response within 24 hours"].map((item, i) => (
          <span key={i} style={{ color: "#5e7150", display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ color: "#4f6a3f" }}>✓</span>
            {item}
          </span>
        ))}
      </div>

      {/* Hero split */}
      <div className="vly-hero">

        {/* Left dark panel - desktop only */}
        <div className="vly-hero-left" style={{ background: "#2c3a1e", padding: "4rem 3rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={fade(0.2)}>
            <p style={{ fontSize: 12, color: "#6b8a5a", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "1.25rem" }}>Corporate event concierge · London</p>
            <h1 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: 66, fontWeight: 300, color: "#e8e0d0", lineHeight: 1.02, letterSpacing: "-1.5px", marginBottom: "1.75rem" }}>
              Brief us once.<br />We handle<br />everything.
            </h1>
            <p style={{ fontSize: 17, color: "#8a9e7a", lineHeight: 1.85, maxWidth: 400, marginBottom: "2.5rem" }}>
              Venuely is a fully managed corporate event concierge for PAs and EAs in London. Tell us what you need — we take it from there. Venues, negotiation, contracts, site visits and payment. Completely free to use.
            </p>
          </div>
          <div style={fade(0.5)}>
            <div style={{ columns: 2, columnGap: "2.5rem" }}>
              {bullets.map(item => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10, breakInside: "avoid" }}>
                  <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#6b8a5a", flexShrink: 0, marginTop: 7 }} />
                  <span style={{ fontSize: 14, color: "#6b8a5a", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right form panel */}
        <div id="brief-form" className="vly-form-panel" style={{ background: "#f0ebe0", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {!submitted ? (
            <div style={fade(0.4)}>
              {/* Mobile-only hero copy */}
              <div className="vly-mobile-hero" style={{ marginBottom: "2rem" }}>
                <p style={{ fontSize: 12, color: "#4f6a3f", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "1rem" }}>Corporate event concierge · London</p>
                <h1 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: 38, fontWeight: 300, color: "#2c3a1e", lineHeight: 1.05, letterSpacing: "-1px", marginBottom: "1rem" }}>
                  Brief us once.<br />We handle<br />everything.
                </h1>
                <p style={{ fontSize: 16, color: "#5e7150", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                  Venuely is a fully managed corporate event concierge for PAs and EAs. Free to use. Every brief answered within 24 hours.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  {["Free service — no fees, ever", "Response within 24 hours, guaranteed", "Venues, contracts and payment handled for you"].map((b, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <span style={{ color: "#4f6a3f", fontSize: 14, marginTop: 1 }}>✓</span>
                      <span style={{ fontSize: 14, color: "#5e7150", lineHeight: 1.5 }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p style={{ fontSize: 12, color: "#5e7150", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.6rem" }}>Submit your brief</p>
              <p style={{ fontFamily: "Georgia, serif", fontSize: 26, color: "#2c3a1e", marginBottom: "1.5rem", fontWeight: 400, lineHeight: 1.2 }}>Tell us about<br />your event</p>

              {/* Name */}
              <div style={{ marginBottom: 12 }}>
                <label style={labelStyle}>Your name</label>
                <input type="text" placeholder="your full name" value={name} onChange={e => setName(e.target.value)} style={fieldStyle} {...h} />
              </div>

              {/* Company */}
              <div style={{ marginBottom: 12 }}>
                <label style={labelStyle}>Your company</label>
                <input type="text" placeholder="e.g. Acme Ltd" value={company} onChange={e => setCompany(e.target.value)} style={fieldStyle} {...h} />
              </div>

              {/* Email + Phone */}
              <div className="vly-grid2" style={{ marginBottom: 12 }}>
                <div>
                  <label style={labelStyle}>Work email</label>
                  <input type="email" placeholder="your work email" value={email} onChange={e => { setEmail(e.target.value); setError(""); }} style={fieldStyle} {...h} />
                </div>
                <div>
                  <label style={labelStyle}>Phone number</label>
                  <input type="tel" placeholder="your phone number" value={phone} onChange={e => { setPhone(e.target.value); setError(""); }} style={fieldStyle} {...h} />
                </div>
              </div>

              {/* Error message */}
              {error && (
                <div style={{ color: "#993C1D", fontSize: 12, lineHeight: 1.5, marginBottom: 12 }}>
                  {error}
                </div>
              )}

              {/* Event type */}
              <div style={{ marginBottom: 12 }}>
                <label style={labelStyle}>Type of event</label>
                <select
                  value={brief.eventType}
                  onChange={e => setBrief({ ...brief, eventType: e.target.value })}
                  style={{ ...fieldStyle, color: brief.eventType === "" ? "#a09888" : "#2c3a1e" }}
                  {...h}
                >
                  {eventTypes.map(o => (
                    <option key={o} value={o === "Select event type…" ? "" : o}>{o}</option>
                  ))}
                </select>
              </div>

              {/* Guests + Preferred date */}
              <div className="vly-grid2" style={{ marginBottom: 12 }}>
                <div>
                  <label style={labelStyle}>Number of guests</label>
                  <input type="number" placeholder="e.g. 60" value={brief.guests} onChange={e => setBrief({ ...brief, guests: e.target.value })} style={fieldStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Preferred date</label>
                  <input type="text" placeholder="e.g. late September 2025" value={brief.preferredDate} onChange={e => setBrief({ ...brief, preferredDate: e.target.value })} style={fieldStyle} {...h} />
                </div>
              </div>

              {/* Budget */}
              <div style={{ marginBottom: 12 }}>
                <label style={labelStyle}>Approximate budget</label>
                <select
                  value={brief.budget}
                  onChange={e => setBrief({ ...brief, budget: e.target.value })}
                  style={{ ...fieldStyle, color: brief.budget === "" ? "#a09888" : "#2c3a1e" }}
                  {...h}
                >
                  {budgetOptions.map(o => (
                    <option key={o} value={o === "Select a budget…" ? "" : o}>{o}</option>
                  ))}
                </select>
              </div>

              {/* Other budget */}
              {brief.budget === "Other / Not sure yet" && (
                <div style={{ marginBottom: 12 }}>
                  <label style={labelStyle}>Please give us a rough idea</label>
                  <input type="text" placeholder="e.g. around £75,000 or flexible" value={otherBudget} onChange={e => setOtherBudget(e.target.value)} style={fieldStyle} {...h} />
                </div>
              )}

              {/* Requirements */}
              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Anything else we should know?</label>
                <textarea
                  placeholder="tell us anything that will help us find the perfect venue for you"
                  value={brief.requirements}
                  onChange={e => setBrief({ ...brief, requirements: e.target.value })}
                  style={{ ...fieldStyle, minHeight: 80, resize: "vertical" }}
                  {...h}
                />
              </div>

              {/* Consent */}
              <p style={{ fontSize: 12, color: "#6f6e5c", marginBottom: 10, lineHeight: 1.6 }}>
                By submitting this brief you agree to be contacted by Venuely London regarding your event enquiry.
              </p>

              {/* Submit button */}
              <button
                onClick={handleSubmit}
                disabled={submitting}
                style={{ width: "100%", background: "#2c3a1e", color: "#f0ebe0", fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 500, padding: "15px", borderRadius: 6, border: "none", cursor: "pointer", opacity: submitting ? 0.65 : 1, transition: "opacity 0.2s", letterSpacing: "0.2px" }}
                {...h}
              >
                {submitting ? "Sending your brief…" : "Send My Brief →"}
              </button>

              {/* Reassurance */}
              <p style={{ fontSize: 13, color: "#5e7150", marginTop: 10, lineHeight: 1.6, textAlign: "center" }}>
                We'll review your brief and be in touch within 24 hours. No spam, ever.
              </p>
            </div>
          ) : (
            <div style={{ textAlign: "center", ...fade(0) }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#2c3a1e", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e8e0d0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p style={{ fontFamily: "Georgia, serif", fontSize: 26, color: "#2c3a1e", marginBottom: "0.75rem", fontWeight: 300 }}>Brief received.</p>
              <p style={{ fontSize: 15, color: "#5e7150", lineHeight: 1.8, maxWidth: 280, margin: "0 auto" }}>Thank you — we'll review your brief and be in touch within 24 hours.</p>
            </div>
          )}
        </div>
      </div>

      {/* How it works + sections below hero */}
      <div id="how-it-works" className="vly-how" style={{ background: "#f5f0e8" }}>
        {/* Book a call CTA */}
        <div className="vly-cta-card" style={{ background: "#2c3a1e", borderRadius: 12, marginBottom: "1.5rem", textAlign: "center" }}>
          <p style={{ fontSize: 12, color: "#6b8a5a", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.75rem" }}>Prefer to talk it through?</p>
          <h2 className="vly-cta-heading" style={{ fontFamily: "Georgia, serif", color: "#e8e0d0", fontWeight: 300, marginBottom: "0.75rem", lineHeight: 1.2 }}>Book a free 20-minute call</h2>
          <p style={{ fontSize: 16, color: "#8a9e7a", maxWidth: 480, margin: "0 auto 1.75rem", lineHeight: 1.8 }}>Not sure where to start? Talk to someone who knows London's venue scene inside out. We'll help you shape your brief and find the right fit — no pressure, no obligation.</p>
          <a href="mailto:hello@venuely.london?subject=Book a call with Venuely" className="vly-cta-btn" style={{ background: "#8a9e7a", color: "#2c3a1e", fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 600, borderRadius: 6, textDecoration: "none" }} {...h}>
            Book a free call →
          </a>
        </div>

        {/* Video showcase section */}
        <div className="vly-video-section" style={{ marginBottom: "3rem" }}>
          <p style={{ fontSize: 12, color: "#5e7150", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "0.75rem", textAlign: "center" }}>A glimpse of what we do</p>
          <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 300, color: "#2c3a1e", lineHeight: 1.2, marginBottom: "2rem", textAlign: "center" }} className="vly-section-heading">London, at its finest.</h2>
          <div className="vly-video-frame" style={{ position: "relative", margin: "0 auto", borderRadius: 12, overflow: "hidden", border: "1px solid #e0d8c8", background: "#2c3a1e", maxWidth: 560 }}>
            <video
              ref={videoRef}
              src="/venuely_promo.mp4"
              poster="/venuely_promo_poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              style={{ display: "block", width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* YouTube */}
        <div className="vly-ig-card" style={{ background: "#f0ebe0", borderRadius: 12, marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 46, height: 46, background: "#2c3a1e", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#e8e0d0">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.546 15.568V8.432L15.818 12l-6.272 3.568z"/>
              </svg>
            </div>
            <div>
              <p style={{ fontSize: 17, fontWeight: 500, color: "#2c3a1e", marginBottom: 4 }}>Subscribe on YouTube</p>
              <p style={{ fontSize: 14, color: "#5e7150" }}>Venuely London — venue tours, event films, and behind the scenes</p>
            </div>
          </div>
          <a href="https://www.youtube.com/@venuelylondon" target="_blank" rel="noreferrer" className="vly-ig-btn" style={{ background: "#2c3a1e", color: "#f0ebe0", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, borderRadius: 6, textDecoration: "none" }} {...h}>
            Subscribe →
          </a>
        </div>

        {/* LinkedIn */}
        <div className="vly-ig-card" style={{ background: "#f0ebe0", borderRadius: 12, marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 46, height: 46, background: "#2c3a1e", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#e8e0d0">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.339 9.708H5.667V18h2.672V9.708zM7.003 6.5a1.55 1.55 0 1 0 0 3.099 1.55 1.55 0 0 0 0-3.099zM18.333 13.205c0-2.317-1.235-3.396-2.882-3.396-1.328 0-1.923.731-2.255 1.244v-1.345h-2.671c.035.754 0 8.292 0 8.292h2.671v-4.631c0-.24.017-.48.088-.652.193-.48.633-.977 1.371-.977.967 0 1.354.737 1.354 1.817V18h2.672l.052-4.795z"/>
              </svg>
            </div>
            <div>
              <p style={{ fontSize: 17, fontWeight: 500, color: "#2c3a1e", marginBottom: 4 }}>Follow us on LinkedIn</p>
              <p style={{ fontSize: 14, color: "#5e7150" }}>Venuely London — venue insights, news, and corporate event tips</p>
            </div>
          </div>
          <a href="https://www.linkedin.com/company/venuely-london/" target="_blank" rel="noreferrer" className="vly-ig-btn" style={{ background: "#2c3a1e", color: "#f0ebe0", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, borderRadius: 6, textDecoration: "none" }} {...h}>
            Follow us →
          </a>
        </div>

        {/* Instagram */}
        <div className="vly-ig-card" style={{ background: "#f0ebe0", borderRadius: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 46, height: 46, background: "#2c3a1e", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8e0d0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="#e8e0d0" stroke="none"/>
              </svg>
            </div>
            <div>
              <p style={{ fontSize: 17, fontWeight: 500, color: "#2c3a1e", marginBottom: 4 }}>Follow us on Instagram</p>
              <p style={{ fontSize: 14, color: "#5e7150" }}>@venuely.london</p>
            </div>
          </div>
          <a href="https://www.instagram.com/venuely.london/" target="_blank" rel="noreferrer" className="vly-ig-btn" style={{ background: "#2c3a1e", color: "#f0ebe0", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, borderRadius: 6, textDecoration: "none" }} {...h}>
            Follow us →
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="vly-footer" style={{ background: "#2c3a1e", textAlign: "center" }}>
        {/* Logo lockup */}
        <div className="vly-footer-logo" style={{ display: "inline-block", textAlign: "center" }}>
          <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: 30, fontWeight: 300, color: "#e8e0d0", lineHeight: 1, letterSpacing: "-0.5px" }}>Venuely</div>
          <div style={{ fontSize: 12, color: "#a8bc98", letterSpacing: "6px", textTransform: "uppercase", marginTop: 6, paddingLeft: 6 }}>London</div>
        </div>

        <p style={{ fontSize: 15, color: "#8a9e7a", marginTop: "1.25rem", lineHeight: 1.7, maxWidth: 360, marginLeft: "auto", marginRight: "auto" }}>
          Corporate event concierge for PAs and EAs in London.
        </p>

        <a href="mailto:hello@venuely.london" style={{ display: "inline-block", marginTop: "1.25rem", fontSize: 16, fontWeight: 500, color: "#e8e0d0", textDecoration: "none", borderBottom: "1px solid rgba(168,188,152,0.4)", paddingBottom: 2 }} {...h}>
          hello@venuely.london
        </a>

        {/* Nav links */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5rem", flexWrap: "wrap", marginTop: "1.75rem" }}>
          <Link to="/how-it-works" style={{ fontSize: 14, color: "#a8bc98", textDecoration: "none", fontWeight: 500 }} {...h}>How it works</Link>
          <Link to="/what-we-do" style={{ fontSize: 14, color: "#a8bc98", textDecoration: "none", fontWeight: 500 }} {...h}>What we do</Link>
          <Link to="/faq" style={{ fontSize: 14, color: "#a8bc98", textDecoration: "none", fontWeight: 500 }} {...h}>FAQ</Link>
          <Link to="/blog" style={{ fontSize: 14, color: "#a8bc98", textDecoration: "none", fontWeight: 500 }} {...h}>Blog</Link>
          <Link to="/partners" style={{ fontSize: 14, color: "#a8bc98", textDecoration: "none", fontWeight: 500 }} {...h}>Partners</Link>
          <Link to="/privacy" style={{ fontSize: 14, color: "#a8bc98", textDecoration: "none", fontWeight: 500 }} {...h}>Privacy Policy</Link>
          <Link to="/terms" style={{ fontSize: 14, color: "#a8bc98", textDecoration: "none", fontWeight: 500 }} {...h}>Terms of Service</Link>
          <a href="https://www.instagram.com/venuely.london/" target="_blank" rel="noreferrer" style={{ fontSize: 14, color: "#a8bc98", textDecoration: "none", fontWeight: 500 }} {...h}>Instagram</a>
        </div>

        {/* Divider */}
        <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.12)", margin: "2rem auto 1.5rem" }} />

        {/* Bottom line */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
          <span style={{ fontSize: 13, color: "#6b8a5a" }}>© {new Date().getFullYear()} Venuely London. All rights reserved.</span>
          <span style={{ fontSize: 13, color: "#4f6a3f" }}>·</span>
          <span style={{ fontSize: 13, color: "#6b8a5a" }}>Free venue finding service</span>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        input:focus, select:focus, textarea:focus {
          border-color: #8a9e7a !important;
          box-shadow: 0 0 0 3px rgba(138,158,122,0.15);
        }
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        textarea { resize: vertical; }
        a { transition: opacity 0.2s ease; }
        a:hover { opacity: 0.8; }
        button:not(:disabled):hover { opacity: 0.88; }
        ::placeholder { color: #b0a898; }

        /* ── Desktop cursor ── */
        .vly-root { cursor: none; }

        /* ── Banner ── */
        .vly-banner { padding: 11px 3rem; }

        /* ── Nav ── */
        .vly-nav { padding: 1.75rem 3rem; }
        .vly-logo { font-size: 46px; }
        .vly-nav-cta { font-size: 15px; padding: 10px 20px; }
        .vly-nav-link { transition: opacity 0.2s ease; }
        .vly-nav-link:hover { opacity: 0.65; }

        /* ── Trust bar ── */
        .vly-trust-bar { padding: 10px 3rem; gap: 2.5rem; }
        .vly-trust-bar span { font-size: 13px; }

        /* ── Hero ── */
        .vly-hero {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          min-height: calc(100vh - 120px);
        }
        .vly-hero-left { display: flex; }
        .vly-mobile-hero { display: none; }
        .vly-form-panel { padding: 3.5rem 2.5rem; }

        /* ── Form two-col grids ── */
        .vly-grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }

        /* ── Section headings ── */
        .vly-section-heading { font-size: 36px; }

        /* ── How it works container ── */
        .vly-how { padding: 5rem 3rem; }
        .vly-steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }

        /* ── Timeline card ── */
        .vly-timeline-card { padding: 2.5rem 3rem; }
        .vly-timeline-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        /* ── Why Venuely card ── */
        .vly-why-card { padding: 3rem; }
        .vly-proof-bar {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          padding: 1.5rem;
        }
        .vly-proof-stat { font-size: 30px; }
        .vly-why-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        /* ── FAQ section ── */
        .vly-faq-section { max-width: 100%; }

        /* ── Video showcase section ── */
        .vly-video-section { max-width: 100%; }
        .vly-video-frame { box-shadow: 0 8px 32px rgba(44,58,30,0.12); }

        /* ── CTA card ── */
        .vly-cta-card {
          display: block;
          padding: 3.5rem 3rem;
        }
        .vly-cta-heading { font-size: 32px; }
        .vly-cta-btn {
          padding: 15px 32px;
          white-space: nowrap;
          flex-shrink: 0;
          display: inline-block;
        }

        /* ── Instagram card ── */
        .vly-ig-card {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: 2rem 2.5rem;
          gap: 1rem;
          border: 1px solid #e0d8c8;
        }
        .vly-ig-btn {
          padding: 12px 24px;
          white-space: nowrap;
          flex-shrink: 0;
          display: inline-block;
        }

        /* ── Footer ── */
        .vly-footer { padding: 2.5rem 3rem; }

        /* ══════════════════════════════════════
           MOBILE  ≤ 768 px
        ══════════════════════════════════════ */
        @media (max-width: 768px) {

          .vly-root { cursor: auto; }

          .vly-banner { padding: 10px 1.25rem; font-size: 13px; }

          .vly-nav { padding: 1rem 1.25rem; }
          .vly-logo { font-size: 32px; }
          .vly-nav-cta { font-size: 13px; padding: 8px 14px; }
          .vly-nav-links { display: none !important; }
          .vly-nav-right { gap: 0 !important; }

          .vly-trust-bar { padding: 10px 1.25rem; gap: 0.75rem; }
          .vly-trust-bar span { font-size: 12px; }

          .vly-hero { display: block; min-height: auto; }
          .vly-hero-left { display: none; }
          .vly-mobile-hero { display: block; }
          .vly-form-panel { padding: 2rem 1.25rem; }

          .vly-grid2 { grid-template-columns: 1fr; }

          .vly-section-heading { font-size: 26px; }

          .vly-how { padding: 2.5rem 1.25rem; }
          .vly-steps { grid-template-columns: 1fr; gap: 2rem; }

          .vly-timeline-card { padding: 1.75rem 1.25rem; }
          .vly-timeline-grid { grid-template-columns: 1fr 1fr; gap: 1.25rem; }

          .vly-why-card { padding: 1.75rem 1.25rem; }
          .vly-proof-bar { grid-template-columns: 1fr; gap: 1rem; padding: 1.25rem; }
          .vly-proof-stat { font-size: 24px; }
          .vly-why-grid { grid-template-columns: 1fr; }

          .vly-cta-card {
            padding: 2.5rem 1.25rem;
          }
          .vly-cta-heading { font-size: 24px; }
          .vly-cta-btn { width: 100%; text-align: center; padding: 14px; }

          .vly-ig-card {
            flex-direction: column;
            align-items: flex-start;
            padding: 1.5rem 1.25rem;
          }
          .vly-ig-btn { width: 100%; text-align: center; padding: 12px; }

          .vly-footer { padding: 2rem 1.25rem; }
        }
      `}</style>
    </div>
  );
}
