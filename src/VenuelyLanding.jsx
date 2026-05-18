import { useState, useEffect } from "react";

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
  const [brief, setBrief] = useState({ eventType: "Christmas party", budget: "Under £2,000", guests: "", requirements: "" });
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth <= 768);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
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
        body: JSON.stringify({ name, company, email, phone, eventType: brief.eventType, guests: brief.guests, budget: brief.budget === "Other" ? otherBudget : brief.budget, requirements: brief.requirements }),
      });
    } catch (e) {}
    setSubmitting(false);
    setSubmitted(true);
  };

  const bullets = [
    "London venue specialists",
    "Response within 24 hours",
    "Free to use for event planners",
    "Pre-authorised venue partnerships across London",
    "Deep industry knowledge, built from the inside",
    "Dedicated point of contact",
    "End to end contract and payment management",
    "Site visits arranged on your behalf",
    "Every brief handled with precision and care",
    "Working hours flexible to accommodate global time zones",
    "Confidential and discreet service",
  ];

  const h = { onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false) };
  const fade = (delay = 0) => ({ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: `all 0.8s ease ${delay}s` });
  const fieldStyle = { width: "100%", background: "white", border: "1px solid #d4c9b5", borderRadius: 6, padding: "11px 14px", fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#2c3a1e", outline: "none" };
  const labelStyle = { display: "block", fontSize: 12, color: "#8a9e7a", fontWeight: 500, letterSpacing: "0.3px", marginBottom: 5 };

  return (
    <div style={{ cursor: isMobile ? "auto" : "none", fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", background: "#f5f0e8", minHeight: "100vh", width: "100%" }}>

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

      {/* Offer banner */}
      <div style={{ background: "#1e2d1a", padding: isMobile ? "11px 1.25rem" : "11px 3rem", textAlign: "center" }}>
        <span style={{ fontSize: isMobile ? 12 : 13, color: "#8a9e7a" }}>
          <span style={{ color: "#e8e0d0", fontWeight: 500 }}>Sign-on offer: </span>
          Booking fees waived for all events confirmed before October 2026
        </span>
      </div>

      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: isMobile ? "1.25rem 1.25rem" : "1.75rem 3rem", background: "#f5f0e8", borderBottom: "1px solid #e0d8c8" }}>
        <div style={fade(0)}>
          <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: isMobile ? 28 : 38, fontWeight: 300, color: "#2c3a1e", letterSpacing: "-0.5px", lineHeight: 1 }}>Venuely</div>
          <div style={{ fontSize: 8, color: "#8a9e7a", letterSpacing: "4px", textTransform: "uppercase", marginTop: 5 }}>London</div>
        </div>
        <a href="mailto:hello@venuely.london" style={{ fontSize: isMobile ? 12 : 14, color: "#8a9e7a", textDecoration: "none", ...fade(0.2) }} {...h}>
          hello@venuely.london
        </a>
      </nav>

      {/* Hero split */}
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.2fr 0.8fr", minHeight: isMobile ? "auto" : "calc(100vh - 112px)" }}>

        {/* Left dark panel — hidden on mobile (form comes first) */}
        {!isMobile && (
        <div style={{ background: "#2c3a1e", padding: "4rem 3rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={fade(0.2)}>
            <p style={{ fontSize: 11, color: "#6b8a5a", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "1.25rem" }}>Corporate event specialists</p>
            <h1 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: 66, fontWeight: 300, color: "#e8e0d0", lineHeight: 1.02, letterSpacing: "-1.5px", marginBottom: "1.75rem" }}>
              Your event.<br />Fully<br />managed.
            </h1>
            <p style={{ fontSize: 16, color: "#8a9e7a", lineHeight: 1.85, maxWidth: 400, marginBottom: "2.5rem" }}>
              Tell us what you need. We handle venues, negotiations, contracts, and everything in between. Working with you every step of the way.
            </p>
          </div>
          <div style={fade(0.5)}>
            <div style={{ columns: 2, columnGap: "2.5rem" }}>
              {bullets.map(item => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10, breakInside: "avoid" }}>
                  <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#6b8a5a", flexShrink: 0, marginTop: 7 }} />
                  <span style={{ fontSize: 13, color: "#6b8a5a", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        )}

        {/* Right form panel */}
        <div style={{ background: "#f0ebe0", padding: isMobile ? "2.5rem 1.25rem" : "3.5rem 2.5rem", display: "flex", flexDirection: "column", justifyContent: "center", overflowY: "auto" }}>
          {!submitted ? (
            <div style={fade(0.4)}>
              {isMobile && (
                <div style={{ marginBottom: "2rem" }}>
                  <p style={{ fontSize: 11, color: "#6b8a5a", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "1rem" }}>Corporate event specialists</p>
                  <h1 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: 42, fontWeight: 300, color: "#2c3a1e", lineHeight: 1.05, letterSpacing: "-1px", marginBottom: "1rem" }}>
                    Your event.<br />Fully managed.
                  </h1>
                  <p style={{ fontSize: 15, color: "#8a9e7a", lineHeight: 1.75, marginBottom: 0 }}>
                    Tell us what you need. We handle venues, negotiations, contracts, and everything in between.
                  </p>
                </div>
              )}
              <p style={{ fontSize: 10, color: "#8a9e7a", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.75rem" }}>Get started</p>
              <p style={{ fontFamily: "Georgia, serif", fontSize: 28, color: "#2c3a1e", marginBottom: "1.75rem", fontWeight: 400, lineHeight: 1.2 }}>Tell us about<br />your event</p>

              <div style={{ marginBottom: 12 }}>
                <label style={labelStyle}>Your name</label>
                <input type="text" placeholder="your full name" value={name} onChange={e => setName(e.target.value)} style={fieldStyle} {...h} />
              </div>

              <div style={{ marginBottom: 12 }}>
                <label style={labelStyle}>Your company</label>
                <input type="text" placeholder="e.g. Acme Ltd" value={company} onChange={e => setCompany(e.target.value)} style={fieldStyle} {...h} />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 10, marginBottom: 12 }}>
                <div>
                  <label style={labelStyle}>Work email</label>
                  <input type="email" placeholder="your work email" value={email} onChange={e => { setEmail(e.target.value); setError(""); }} style={fieldStyle} {...h} />
                </div>
                <div>
                  <label style={labelStyle}>Phone number</label>
                  <input type="tel" placeholder="your phone number" value={phone} onChange={e => { setPhone(e.target.value); setError(""); }} style={fieldStyle} {...h} />
                </div>
              </div>

              {error && (
                <p style={{ color: "#993C1D", fontSize: 12, lineHeight: 1.5, marginBottom: 12 }}>{error}</p>
              )}

              <div style={{ marginBottom: 12 }}>
                <label style={labelStyle}>Event type</label>
                <select value={brief.eventType} onChange={e => setBrief({ ...brief, eventType: e.target.value })} style={fieldStyle} {...h}>
                  {["Christmas party","Summer party","Team away day","Conference","Client dinner","Exhibition","Awards show","Product launch","Special occasion","Wedding","Other"].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 10, marginBottom: 12 }}>
                <div>
                  <label style={labelStyle}>Number of guests</label>
                  <input type="number" placeholder="e.g. 60" value={brief.guests} onChange={e => setBrief({ ...brief, guests: e.target.value })} style={fieldStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Budget</label>
                  <select value={brief.budget} onChange={e => setBrief({ ...brief, budget: e.target.value })} style={fieldStyle} {...h}>
                    {["Under £2,000","£2,000 – £5,000","£5,000 – £10,000","£10,000 – £20,000","£20,000 – £30,000","£30,000 – £40,000","£40,000 – £50,000","£50,000+","Other"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>

              {brief.budget === "Other" && (
                <div style={{ marginBottom: 12 }}>
                  <label style={labelStyle}>Please specify your budget</label>
                  <input type="text" placeholder="e.g. £75,000" value={otherBudget} onChange={e => setOtherBudget(e.target.value)} style={fieldStyle} />
                </div>
              )}

              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Special requirements or requests</label>
                <textarea placeholder="tell us anything that will help us find the perfect venue for you" value={brief.requirements} onChange={e => setBrief({ ...brief, requirements: e.target.value })} style={{ ...fieldStyle, minHeight: 80, resize: "vertical" }} />
              </div>

              <p style={{ fontSize: 11, color: "#aaa", marginBottom: 10, lineHeight: 1.5 }}>
                By submitting this form you agree to be contacted by Venuely London regarding your event enquiry.
              </p>

              <button onClick={handleSubmit} disabled={submitting} style={{ width: "100%", background: "#2c3a1e", color: "#f0ebe0", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, padding: "14px", borderRadius: 6, border: "none", cursor: "none", opacity: submitting ? 0.6 : 1, transition: "opacity 0.2s" }} {...h}>
                {submitting ? "Sending..." : "Send my brief"}
              </button>
            </div>
          ) : (
            <div style={{ textAlign: "center", ...fade(0) }}>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 52, color: "#2c3a1e", marginBottom: "1rem" }}>✓</div>
              <p style={{ fontFamily: "Georgia, serif", fontSize: 26, color: "#2c3a1e", marginBottom: "0.75rem" }}>Brief received.</p>
              <p style={{ fontSize: 14, color: "#8a9e7a", lineHeight: 1.8 }}>We'll be in touch within one working day.</p>
            </div>
          )}
        </div>
      </div>

      {/* How it works */}
      <div style={{ padding: isMobile ? "3rem 1.25rem" : "4.5rem 3rem", background: "#f5f0e8" }}>
        <p style={{ fontSize: 10, color: "#8a9e7a", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "2.5rem" }}>How it works</p>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: isMobile ? "2rem" : "3rem", marginBottom: "4rem" }}>
          {[
            { num: "01", title: "Send us your brief", desc: "Date, headcount, budget, and the kind of event you have in mind. Takes two minutes." },
            { num: "02", title: "We do the work", desc: "We shortlist venues, negotiate rates, and arrange site visits on your behalf." },
            { num: "03", title: "You choose and confirm", desc: "We present the best options. You pick one. We handle the contract and payment." },
          ].map(step => (
            <div key={step.num} {...h}>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 52, fontWeight: 300, color: "#d4c9b5", lineHeight: 1, marginBottom: "0.75rem" }}>{step.num}</div>
              <div style={{ fontSize: 16, fontWeight: 500, color: "#2c3a1e", marginBottom: "0.5rem" }}>{step.title}</div>
              <div style={{ fontSize: 14, color: "#8a9e7a", lineHeight: 1.75 }}>{step.desc}</div>
            </div>
          ))}
        </div>

        {/* Book a meeting */}
        <div style={{ background: "#2c3a1e", borderRadius: 12, padding: isMobile ? "2rem 1.5rem" : "3rem", display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", marginBottom: "1.5rem", gap: "1.5rem" }}>
          <div>
            <p style={{ fontSize: 10, color: "#6b8a5a", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.75rem" }}>Not sure where to start?</p>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: isMobile ? 26 : 34, color: "#e8e0d0", fontWeight: 300, marginBottom: "0.75rem", lineHeight: 1.2 }}>Book a meeting with the team</h2>
            <p style={{ fontSize: 15, color: "#8a9e7a", maxWidth: 400, lineHeight: 1.8 }}>Book a free 20 minute call with us. We'll listen to what you need and take it from there.</p>
          </div>
          <a href="mailto:hello@venuely.london?subject=Book a call with Venuely" style={{ background: "#8a9e7a", color: "#2c3a1e", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, padding: "15px 32px", borderRadius: 6, textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0, alignSelf: isMobile ? "stretch" : "auto", textAlign: isMobile ? "center" : "left" }} {...h}>
            Book a call
          </a>
        </div>

        {/* Instagram */}
        <div style={{ background: "#f0ebe0", borderRadius: 12, padding: isMobile ? "1.5rem" : "2rem 2.5rem", display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", gap: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 46, height: 46, background: "#2c3a1e", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8e0d0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="#e8e0d0" stroke="none"/>
              </svg>
            </div>
            <div>
              <p style={{ fontSize: 16, fontWeight: 500, color: "#2c3a1e", marginBottom: 4 }}>Follow us on Instagram</p>
              <p style={{ fontSize: 13, color: "#8a9e7a" }}>@venuely.london</p>
            </div>
          </div>
          <a href="https://www.instagram.com/venuely.london/" target="_blank" rel="noreferrer" style={{ background: "#2c3a1e", color: "#f0ebe0", fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, padding: "12px 24px", borderRadius: 6, textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0, alignSelf: isMobile ? "stretch" : "auto", textAlign: isMobile ? "center" : "left" }} {...h}>
            Follow us
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ padding: isMobile ? "1.75rem 1.25rem" : "2rem 3rem", background: "#2c3a1e", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: 24, fontWeight: 300, color: "#e8e0d0" }}>Venuely</div>
          <div style={{ fontSize: 7, color: "#6b8a5a", letterSpacing: "3px", textTransform: "uppercase", marginTop: 3 }}>London</div>
        </div>
        <span style={{ fontSize: 12, color: "#6b8a5a" }}>© {new Date().getFullYear()} Venuely London</span>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        input:focus, select:focus, textarea:focus { border-color: #8a9e7a !important; box-shadow: 0 0 0 2px rgba(138,158,122,0.15); }
        input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        select { -webkit-appearance: none; appearance: none; }
      `}</style>
    </div>
  );
}
