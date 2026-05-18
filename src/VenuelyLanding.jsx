import { useState, useEffect, useRef } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkoegwqp";

export default function VenuelyLanding() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [brief, setBrief] = useState({ eventType: "Christmas party", budget: "", guests: "" });
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const pageRef = useRef(null);

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
        body: JSON.stringify({ email, ...brief }),
      });
    } catch (e) {}
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div ref={pageRef} style={{ cursor: "none", fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", background: "#f5f0e8", minHeight: "100vh" }}>

      {/* Custom V cursor */}
      <div style={{
        position: "fixed", top: cursor.y - 20, left: cursor.x - 14,
        pointerEvents: "none", zIndex: 9999,
        transition: "top 0.08s ease, left 0.08s ease",
        transform: hovered ? "scale(1.4)" : "scale(1)",
      }}>
        <svg width="28" height="32" viewBox="0 0 28 32">
          <polygon points="2,4 14,28 26,4 20,4 14,18 8,4" fill="#2c3a1e" opacity="0.85"/>
        </svg>
      </div>

      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.75rem 3rem", background: "#f5f0e8", borderBottom: "1px solid #e0d8c8" }}>
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(-10px)", transition: "all 0.6s ease" }}>
          <div style={{ fontFamily: "Georgia, serif", fontSize: 34, fontWeight: 400, color: "#2c3a1e", letterSpacing: "-0.5px", lineHeight: 1 }}>Venuely</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 8, color: "#8a9e7a", letterSpacing: "4px", textTransform: "uppercase", marginTop: 4 }}>London</div>
        </div>
        <a href="mailto:hello@venuely.london" style={{ fontSize: 13, color: "#8a9e7a", textDecoration: "none", opacity: visible ? 1 : 0, transition: "opacity 0.8s ease 0.2s" }}
          onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          hello@venuely.london
        </a>
      </nav>

      {/* Hero split */}
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", minHeight: "calc(100vh - 85px)" }}>

        {/* Left dark panel */}
        <div style={{ background: "#2c3a1e", padding: "4rem 3rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.8s ease 0.2s" }}>
            <p style={{ fontSize: 10, color: "#6b8a5a", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "1.25rem" }}>Corporate event specialists</p>
            <h1 style={{ fontFamily: "Georgia, serif", fontSize: 58, fontWeight: 400, color: "#e8e0d0", lineHeight: 1.05, letterSpacing: "-1.5px", marginBottom: "1.75rem" }}>
              Your event.<br />Fully<br />managed.
            </h1>
            <p style={{ fontSize: 15, color: "#8a9e7a", lineHeight: 1.8, maxWidth: 360 }}>
              Tell us what you need. We handle venues, negotiations, contracts, and everything in between. You just show up.
            </p>
          </div>
          <div style={{ opacity: visible ? 1 : 0, transition: "opacity 1s ease 0.6s" }}>
            {["London venues only", "Response within 24 hours", "Free to use for event planners"].map(item => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#6b8a5a", flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: "#6b8a5a" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right form panel */}
        <div style={{ background: "#f0ebe0", padding: "4rem 3rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {!submitted ? (
            <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease 0.4s" }}>
              <p style={{ fontSize: 10, color: "#8a9e7a", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.75rem" }}>Get started</p>
              <p style={{ fontFamily: "Georgia, serif", fontSize: 28, color: "#2c3a1e", marginBottom: "2rem", fontWeight: 400, lineHeight: 1.2 }}>Tell us about<br />your event</p>
              {[
                { label: "Work email", type: "email", placeholder: "you@company.com", val: email, set: setEmail, key: "email" },
              ].map(f => (
                <div key={f.key} style={{ marginBottom: 14 }}>
                  <label style={{ display: "block", fontSize: 11, color: "#8a9e7a", fontWeight: 500, letterSpacing: "0.5px", marginBottom: 5 }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} value={f.val} onChange={e => f.set(e.target.value)}
                    onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
                    style={{ width: "100%", background: "white", border: "1px solid #d4c9b5", borderRadius: 6, padding: "10px 14px", fontFamily: "inherit", fontSize: 14, color: "#2c3a1e", outline: "none" }} />
                </div>
              ))}
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", fontSize: 11, color: "#8a9e7a", fontWeight: 500, letterSpacing: "0.5px", marginBottom: 5 }}>Event type</label>
                <select value={brief.eventType} onChange={e => setBrief({ ...brief, eventType: e.target.value })}
                  onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
                  style={{ width: "100%", background: "white", border: "1px solid #d4c9b5", borderRadius: 6, padding: "10px 14px", fontFamily: "inherit", fontSize: 14, color: "#2c3a1e", outline: "none" }}>
                  {["Christmas party", "Summer party", "Team away day", "Conference", "Client dinner", "Other"].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
                <div>
                  <label style={{ display: "block", fontSize: 11, color: "#8a9e7a", fontWeight: 500, letterSpacing: "0.5px", marginBottom: 5 }}>Guests</label>
                  <input type="number" placeholder="e.g. 60" value={brief.guests} onChange={e => setBrief({ ...brief, guests: e.target.value })}
                    style={{ width: "100%", background: "white", border: "1px solid #d4c9b5", borderRadius: 6, padding: "10px 14px", fontFamily: "inherit", fontSize: 14, color: "#2c3a1e", outline: "none" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 11, color: "#8a9e7a", fontWeight: 500, letterSpacing: "0.5px", marginBottom: 5 }}>Budget</label>
                  <input type="text" placeholder="e.g. £5,000" value={brief.budget} onChange={e => setBrief({ ...brief, budget: e.target.value })}
                    style={{ width: "100%", background: "white", border: "1px solid #d4c9b5", borderRadius: 6, padding: "10px 14px", fontFamily: "inherit", fontSize: 14, color: "#2c3a1e", outline: "none" }} />
                </div>
              </div>
              <button onClick={handleSubmit} disabled={submitting}
                onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
                style={{ width: "100%", background: "#2c3a1e", color: "#f0ebe0", fontFamily: "inherit", fontSize: 15, fontWeight: 500, padding: "14px", borderRadius: 6, border: "none", cursor: "none", opacity: submitting ? 0.6 : 1, transition: "opacity 0.2s, transform 0.15s", transform: hovered ? "scale(1.01)" : "scale(1)" }}>
                {submitting ? "Sending..." : "Send my brief"}
              </button>
            </div>
          ) : (
            <div style={{ textAlign: "center", opacity: visible ? 1 : 0, transition: "opacity 0.5s" }}>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 48, color: "#2c3a1e", marginBottom: "1rem" }}>✓</div>
              <p style={{ fontFamily: "Georgia, serif", fontSize: 24, color: "#2c3a1e", marginBottom: "0.5rem" }}>Brief received.</p>
              <p style={{ fontSize: 14, color: "#8a9e7a" }}>We'll be in touch within one working day.</p>
            </div>
          )}
        </div>
      </div>

      {/* How it works */}
      <div style={{ padding: "4rem 3rem", background: "#f5f0e8" }}>
        <p style={{ fontSize: 10, color: "#8a9e7a", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "2.5rem" }}>How it works</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "3rem" }}>
          {[
            { num: "01", title: "Send us your brief", desc: "Date, headcount, budget, and the kind of event you have in mind. Takes two minutes." },
            { num: "02", title: "We do the work", desc: "We shortlist venues, negotiate rates, and arrange site visits on your behalf." },
            { num: "03", title: "You choose and confirm", desc: "We present the best options. You pick one. We handle the contract and payment." },
          ].map(step => (
            <div key={step.num}
              onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
              style={{ transition: "transform 0.2s ease", cursor: "none" }}>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 48, color: "#d4c9b5", lineHeight: 1, marginBottom: "0.75rem" }}>{step.num}</div>
              <div style={{ fontSize: 15, fontWeight: 500, color: "#2c3a1e", marginBottom: "0.5rem" }}>{step.title}</div>
              <div style={{ fontSize: 13, color: "#8a9e7a", lineHeight: 1.7 }}>{step.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ padding: "1.75rem 3rem", background: "#2c3a1e", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: 20, color: "#e8e0d0", fontWeight: 400 }}>Venuely</div>
          <div style={{ fontSize: 8, color: "#6b8a5a", letterSpacing: "3px", textTransform: "uppercase", marginTop: 2 }}>London</div>
        </div>
        <span style={{ fontSize: 12, color: "#6b8a5a" }}>© {new Date().getFullYear()} Venuely London</span>
      </footer>

      {/* Mobile styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
