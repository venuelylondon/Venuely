import { useState, useEffect } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkoegwqp";

export default function VenuelyLanding() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [otherBudget, setOtherBudget] = useState("");
  const [brief, setBrief] = useState({ eventType: "Christmas party", budget: "Under £2,000", guests: "", requirements: "" });
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const handleSubmit = async () => {
    if (!email || !email.includes("@")) return;
    setSubmitting(true);
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, ...brief, budget: brief.budget === "Other" ? otherBudget : brief.budget }),
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
  const field = { width: "100%", background: "white", border: "1px solid #d4c9b5", borderRadius: 6, padding: "11px 14px", fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#2c3a1e", outline: "none" };
  const label = { display: "block", fontSize: 12, color: "#8a9e7a", fontWeight: 500, letterSpacing: "0.3px", marginBottom: 5 };

  // Thin serif V cursor path - matches the wordmark style
  const VCursor = () => (
    <div style={{ position: "fixed", top: cursor.y - 24, left: cursor.x - 12, pointerEvents: "none", zIndex: 9999, transform: hovered ? "scale(1.4)" : "scale(1)", transition: "transform 0.15s ease, top 0.05s ease, left 0.05s ease" }}>
      <svg width="24" height="32" viewBox="0 0 24 32">
        <text x="12" y="28" fontFamily="Georgia, 'Times New Roman', serif" fontSize="32" fontWeight="300" fill="#e8e0d0" textAnchor="middle" stroke="#2c3a1e" strokeWidth="0.5">V</text>
      </svg>
    </div>
  );

  return (
    <div style={{ cursor: "none", fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", background: "#f5f0e8", minHeight: "100vh", width: "100%" }}>
      <VCursor />

      {/* Offer banner */}
      <div style={{ background: "#1e2d1a", padding: "11px 3rem", textAlign: "center" }}>
        <span style={{ fontSize: 13, color: "#8a9e7a" }}>
          <span style={{ color: "#e8e0d0", fontWeight: 500 }}>Sign-on offer: </span>
          Booking fees waived for all events confirmed before October 2026
        </span>
      </div>

      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.75rem 3rem", background: "#f5f0e8", borderBottom: "1px solid #e0d8c8" }}>
        <div style={fade(0)}>
          <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: 38, fontWeight: 300, color: "#2c3a1e", letterSpacing: "-0.5px", lineHeight: 1 }}>Venuely</div>
          <div style={{ fontSize: 8, color: "#8a9e7a", letterSpacing: "4px", textTransform: "uppercase", marginTop: 5 }}>London</div>
        </div>
        <a href="mailto:hello@venuely.london" style={{ fontSize: 14, color: "#8a9e7a", textDecoration: "none", ...fade(0.2) }} {...h}>hello@venuely.london</a>
      </nav>

      {/* Hero */}
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", minHeight: "calc(100vh - 112px)" }}>

        {/* Left */}
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
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 2.5rem" }}>
              {bullets.map(item => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#6b8a5a", flexShrink: 0, marginTop: 7 }} />
                  <span style={{ fontSize: 13, color: "#6b8a5a", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right form */}
        <div style={{ background: "#f0ebe0", padding: "3.5rem 2.5rem", display: "flex", flexDirection: "column", justifyContent: "center", overflowY: "auto" }}>
          {!submitted ? (
            <div style={fade(0.4)}>
              <p style={{ fontSize: 10, color: "#8a9e7a", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.75rem" }}>Get started</p>
              <p style={{ fontFamily: "Georgia, serif", fontSize: 28, color: "#2c3a1e", marginBottom: "1.75rem", fontWeight: 400, lineHeight: 1.2 }}>Tell us about<br />your event</p>

              <div style={{ marginBottom: 12 }}>
                <label style={label}>Work email</label>
                <input type="email" placeholder="you@company.com" value={email} onChange={e => setEmail(e.target.value)} style={field} {...h} />
              </div>

              <div style={{ marginBottom: 12 }}>
                <label style={label}>Event type</label>
                <select value={brief.eventType} onChange={e => setBrief({ ...brief, eventType: e.target.value })} style={field} {...h}>
                  {["Christmas party","Summer party","Team away day","Conference","Client dinner","Exhibition","Awards show","Product launch","Special occasion","Wedding","Other"].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
                <div>
                  <label style={label}>Number of guests</label>
                  <input type="number" placeholder="e.g. 60" value={brief.guests} onChange={e => setBrief({ ...brief, guests: e.target.value })} style={field} />
                </div>
                <div>
                  <label style={label}>Budget</label>
                  <select value={brief.budget} onChange={e => setBrief({ ...brief, budget: e.target.value })} style={field} {...h}>
                    {["Under £2,000","£2,000 – £5,000","£5,000 – £10,000","£10,000 – £20,000","£20,000 – £30,000","£30,000 – £40,000","£40,000 – £50,000","£50,000+","Other"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>

              {brief.budget === "Other" && (
                <div style={{ marginBottom: 12 }}>
                  <label style={label}>Please specify your budget</label>
                  <input type="text" placeholder="e.g. £75,000" value={otherBudget} onChange={e => setOtherBudget(e.target.value)} style={field} />
                </div>
              )}

              <div style={{ marginBottom: 16 }}>
                <label style={label}>Special requirements or requests</label>
                <textarea placeholder="Dietary requirements, preferred areas of London, accessibility needs, anything that helps us find the perfect venue..." value={brief.requirements} onChange={e => setBrief({ ...brief, requirements: e.target.value })} style={{ ...field, minHeight: 80, resize: "vertical" }} />
              </div>

              <button onClick={handleSubmit} disabled={submitting} style={{ width: "100%", background: "#2c3a1e", color: "#f0ebe0", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, padding: "14px", borderRadius: 6, border: "none", cursor: "none", opacity: submitting ? 0.6 : 1, transition: "opacity 0.2s, transform 0.15s", transform: hovered ? "scale(1.01)" : "scale(1)" }} {...h}>
                {submitting ? "Sending..." : "Send my brief"}
              </button>
            </div>
          ) : (
            <div style={{ textAlign: "center", ...fade(0) }}>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 52, color: "#2c3a1e", marginBottom: "1rem" }}>✓</div>
              <p style={{ fontFamily: "Georgia, serif", fontSize: 26, color: "#2c3a1e", marginBottom: "0.75rem" }}>Brief received.</p>
              <p style={{ fontSize: 14, color: "#8a9e7a", lineHeight: 1.8 }}>We'll be in touch at {email}<br />within one working day.</p>
            </div>
          )}
        </div>
      </div>

      {/* How it works */}
      <div style={{ padding: "4.5rem 3rem", background: "#f5f0e8" }}>
        <p style={{ fontSize: 10, color: "#8a9e7a", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "2.5rem" }}>How it works</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "3rem", marginBottom: "4rem" }}>
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
        <div style={{ background: "#2c3a1e", borderRadius: 12, padding: "3rem", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <p style={{ fontSize: 10, color: "#6b8a5a", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.75rem" }}>Not sure where to start?</p>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 34, color: "#e8e0d0", fontWeight: 300, marginBottom: "0.75rem", lineHeight: 1.2 }}>Book a meeting with the team</h2>
            <p style={{ fontSize: 15, color: "#8a9e7a", maxWidth: 400, lineHeight: 1.8 }}>Book a free 20 minute call with us. We'll listen to what you need and take it from there.</p>
          </div>
          <a href="mailto:hello@venuely.london?subject=I'd like to book a call" style={{ background: "#8a9e7a", color: "#2c3a1e", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, padding: "15px 32px", borderRadius: 6, textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0 }} {...h}>
            Book a call
          </a>
        </div>

        {/* Instagram */}
        <div style={{ background: "#f0ebe0", borderRadius: 12, padding: "2rem 2.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
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
              <p style={{ fontSize: 13, color: "#8a9e7a" }}>@venuely.london · Venue inspiration, event ideas and behind the scenes</p>
            </div>
          </div>
          <a href="https://www.instagram.com/venuely.london/" target="_blank" rel="noreferrer" style={{ background: "#2c3a1e", color: "#f0ebe0", fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, padding: "12px 24px", borderRadius: 6, textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0 }} {...h}>
            Follow us
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ padding: "2rem 3rem", background: "#2c3a1e", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: 24, fontWeight: 300, color: "#e8e0d0" }}>Venuely</div>
          <div style={{ fontSize: 7, color: "#6b8a5a", letterSpacing: "3px", textTransform: "uppercase", marginTop: 3 }}>London</div>
        </div>
        <span style={{ fontSize: 12, color: "#6b8a5a" }}>© {new Date().getFullYear()} Venuely London</span>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; }
        input:focus, select:focus, textarea:focus { border-color: #8a9e7a !important; box-shadow: 0 0 0 2px rgba(138,158,122,0.15); }
        @media (max-width: 768px) {
          .hero { grid-template-columns: 1fr !important; }
          nav, .how { padding: 1.5rem !important; }
          h1 { font-size: 48px !important; }
        }
      `}</style>
    </div>
  );
}
