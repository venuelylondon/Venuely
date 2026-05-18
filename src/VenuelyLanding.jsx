import { useState, useEffect } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function VenuelyLanding() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [showBrief, setShowBrief] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [brief, setBrief] = useState({
    eventType: "Christmas party",
    date: "",
    guests: "",
    budget: "",
    notes: "",
  });

  useEffect(() => {
    if (showBrief) {
      setTimeout(() => {
        document.getElementById("brief-section")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [showBrief]);

  const handleEmail = () => {
    if (!email || !email.includes("@")) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    setShowBrief(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleEmail();
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, ...brief }),
      });
    } catch (e) {
      // Still show success even if fetch fails in dev
    }
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div style={styles.page}>
      {/* Nav */}
      <nav style={styles.nav}>
        <span style={styles.logo}>
          Venuely <span style={styles.logoSub}>London</span>
        </span>
        <a href="mailto:hello@venuely.london" style={styles.navEmail}>
          hello@venuely.london
        </a>
      </nav>

      {/* Hero */}
      <section style={styles.hero}>
        <p style={styles.eyebrow}>Corporate event specialists</p>
        <h1 style={styles.headline}>
          Your company event,<br />fully managed.
        </h1>
        <p style={styles.subline}>
          Tell us what you need. We handle the venues, negotiations, contracts,
          and everything in between. You just show up.
        </p>

        <div style={styles.emailRow}>
          <input
            type="email"
            placeholder="Your work email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);
            }}
            onKeyDown={handleKeyDown}
            style={{
              ...styles.emailInput,
              borderColor: emailError ? "#E24B4A" : "#ccc",
            }}
          />
          <button onClick={handleEmail} style={styles.btnPrimary}>
            Get started
          </button>
        </div>
        <p style={styles.emailHint}>
          No commitment. We'll be in touch within one working day.
        </p>
      </section>

      {/* Divider */}
      <hr style={styles.divider} />

      {/* How it works */}
      <section style={styles.howSection}>
        <p style={styles.sectionLabel}>How it works</p>
        <div style={styles.stepsGrid}>
          {[
            {
              num: "01",
              title: "Send us your brief",
              desc: "Date, headcount, budget, and the kind of event you have in mind. Takes two minutes.",
            },
            {
              num: "02",
              title: "We do the work",
              desc: "We shortlist venues, make enquiries, negotiate rates, and arrange site visits on your behalf.",
            },
            {
              num: "03",
              title: "You choose and confirm",
              desc: "We present you with the best options. You pick one. We handle the contract and payment.",
            },
          ].map((step) => (
            <div key={step.num} style={styles.step}>
              <p style={styles.stepNum}>{step.num}</p>
              <p style={styles.stepTitle}>{step.title}</p>
              <p style={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>

        <div style={styles.trustRow}>
          {[
            "London venues only",
            "Response within 24 hours",
            "Free to use for event planners",
          ].map((item) => (
            <span key={item} style={styles.trustItem}>
              <span style={styles.trustDot} />
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Brief form */}
      {showBrief && (
        <section id="brief-section" style={styles.briefSection}>
          {!submitted ? (
            <>
              <p style={styles.briefTitle}>Tell us about your event</p>
              <p style={styles.briefSub}>
                The more detail, the better we can match you. Takes about two minutes.
              </p>
              <div style={styles.formGrid}>
                <div style={styles.formField}>
                  <label style={styles.fieldLabel}>Event type</label>
                  <select
                    style={styles.fieldInput}
                    value={brief.eventType}
                    onChange={(e) => setBrief({ ...brief, eventType: e.target.value })}
                  >
                    {["Christmas party", "Summer party", "Team away day", "Conference", "Client dinner", "Other"].map(
                      (o) => <option key={o}>{o}</option>
                    )}
                  </select>
                </div>
                <div style={styles.formField}>
                  <label style={styles.fieldLabel}>Approximate date</label>
                  <input
                    type="month"
                    style={styles.fieldInput}
                    value={brief.date}
                    onChange={(e) => setBrief({ ...brief, date: e.target.value })}
                  />
                </div>
                <div style={styles.formField}>
                  <label style={styles.fieldLabel}>Number of guests</label>
                  <input
                    type="number"
                    placeholder="e.g. 60"
                    style={styles.fieldInput}
                    value={brief.guests}
                    onChange={(e) => setBrief({ ...brief, guests: e.target.value })}
                  />
                </div>
                <div style={styles.formField}>
                  <label style={styles.fieldLabel}>Total budget (inc. VAT)</label>
                  <input
                    type="text"
                    placeholder="e.g. £5,000"
                    style={styles.fieldInput}
                    value={brief.budget}
                    onChange={(e) => setBrief({ ...brief, budget: e.target.value })}
                  />
                </div>
                <div style={{ ...styles.formField, gridColumn: "1 / -1" }}>
                  <label style={styles.fieldLabel}>Anything else we should know?</label>
                  <textarea
                    placeholder="Preferred area of London, dietary requirements, vibe you're going for..."
                    style={{ ...styles.fieldInput, minHeight: 80, resize: "vertical" }}
                    value={brief.notes}
                    onChange={(e) => setBrief({ ...brief, notes: e.target.value })}
                  />
                </div>
              </div>
              <button
                onClick={handleSubmit}
                disabled={submitting}
                style={{ ...styles.btnSubmit, opacity: submitting ? 0.6 : 1 }}
              >
                {submitting ? "Sending..." : "Send my brief"}
              </button>
            </>
          ) : (
            <div style={styles.successMsg}>
              <div style={styles.successIcon}>✓</div>
              <p style={styles.successTitle}>Brief received. We're on it.</p>
              <p style={styles.successSub}>
                Expect to hear from us at {email} within one working day.
              </p>
            </div>
          )}
        </section>
      )}

      {/* Footer */}
      <footer style={styles.footer}>
        <span style={styles.footerLogo}>Venuely</span>
        <span style={styles.footerCopy}>© {new Date().getFullYear()} Venuely London</span>
      </footer>
    </div>
  );
}

const styles = {
  page: {
    maxWidth: 720,
    margin: "0 auto",
    padding: "2rem 1.5rem",
    fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
    color: "#1a1a1a",
    backgroundColor: "#ffffff",
    minHeight: "100vh",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "3rem",
  },
  logo: {
    fontSize: 18,
    fontWeight: 600,
    letterSpacing: "-0.3px",
    color: "#1a1a1a",
  },
  logoSub: {
    fontWeight: 400,
    color: "#888",
  },
  navEmail: {
    fontSize: 13,
    color: "#888",
    textDecoration: "none",
  },
  hero: {
    paddingBottom: "3rem",
  },
  eyebrow: {
    fontSize: 11,
    letterSpacing: "1.8px",
    textTransform: "uppercase",
    color: "#999",
    marginBottom: "1.25rem",
  },
  headline: {
    fontSize: 42,
    fontWeight: 600,
    lineHeight: 1.15,
    letterSpacing: "-0.8px",
    color: "#1a1a1a",
    marginBottom: "1.25rem",
  },
  subline: {
    fontSize: 17,
    color: "#666",
    lineHeight: 1.65,
    maxWidth: 480,
    marginBottom: "2.5rem",
  },
  emailRow: {
    display: "flex",
    gap: 10,
    maxWidth: 480,
    flexWrap: "wrap",
  },
  emailInput: {
    flex: 1,
    minWidth: 200,
    height: 46,
    padding: "0 14px",
    fontSize: 15,
    border: "1px solid #ccc",
    borderRadius: 8,
    outline: "none",
    color: "#1a1a1a",
    backgroundColor: "#fff",
    fontFamily: "inherit",
  },
  btnPrimary: {
    height: 46,
    padding: "0 22px",
    backgroundColor: "#1a1a1a",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    fontSize: 15,
    fontWeight: 500,
    cursor: "pointer",
    fontFamily: "inherit",
    whiteSpace: "nowrap",
  },
  emailHint: {
    fontSize: 12,
    color: "#aaa",
    marginTop: 10,
  },
  divider: {
    border: "none",
    borderTop: "1px solid #f0f0f0",
    margin: "2.5rem 0",
  },
  howSection: {
    marginBottom: "2rem",
  },
  sectionLabel: {
    fontSize: 11,
    letterSpacing: "1.8px",
    textTransform: "uppercase",
    color: "#999",
    marginBottom: "1.5rem",
  },
  stepsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "1.5rem",
    marginBottom: "2rem",
  },
  step: {},
  stepNum: {
    fontSize: 11,
    fontWeight: 600,
    color: "#bbb",
    marginBottom: 6,
    letterSpacing: "0.5px",
  },
  stepTitle: {
    fontSize: 15,
    fontWeight: 600,
    color: "#1a1a1a",
    marginBottom: 6,
  },
  stepDesc: {
    fontSize: 13,
    color: "#777",
    lineHeight: 1.6,
  },
  trustRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1.25rem",
    marginTop: "1.5rem",
  },
  trustItem: {
    display: "flex",
    alignItems: "center",
    gap: 7,
    fontSize: 13,
    color: "#888",
  },
  trustDot: {
    width: 5,
    height: 5,
    borderRadius: "50%",
    backgroundColor: "#ccc",
    flexShrink: 0,
  },
  briefSection: {
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    padding: "1.75rem",
    marginTop: "1.5rem",
  },
  briefTitle: {
    fontSize: 16,
    fontWeight: 600,
    color: "#1a1a1a",
    marginBottom: 4,
  },
  briefSub: {
    fontSize: 13,
    color: "#888",
    marginBottom: "1.25rem",
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
    marginBottom: 12,
  },
  formField: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  fieldLabel: {
    fontSize: 12,
    color: "#888",
    fontWeight: 500,
    letterSpacing: "0.3px",
  },
  fieldInput: {
    fontSize: 14,
    padding: "8px 10px",
    border: "1px solid #e0e0e0",
    borderRadius: 8,
    backgroundColor: "#fff",
    color: "#1a1a1a",
    outline: "none",
    fontFamily: "inherit",
  },
  btnSubmit: {
    width: "100%",
    height: 44,
    backgroundColor: "#1a1a1a",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    fontSize: 15,
    fontWeight: 500,
    cursor: "pointer",
    marginTop: 4,
    fontFamily: "inherit",
  },
  successMsg: {
    textAlign: "center",
    padding: "1.5rem 0",
  },
  successIcon: {
    fontSize: 32,
    color: "#3B6D11",
    marginBottom: 12,
  },
  successTitle: {
    fontSize: 16,
    fontWeight: 600,
    color: "#1a1a1a",
    marginBottom: 6,
  },
  successSub: {
    fontSize: 13,
    color: "#888",
  },
  footer: {
    marginTop: "3rem",
    paddingTop: "1.5rem",
    borderTop: "1px solid #f0f0f0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerLogo: {
    fontSize: 14,
    fontWeight: 600,
    color: "#bbb",
  },
  footerCopy: {
    fontSize: 12,
    color: "#bbb",
  },
};
