import { Link } from "react-router-dom";

const steps = [
  {
    num: "01",
    title: "Send us your brief",
    desc: "Tell us what you need — event type, guest count, budget, preferred dates, and the vibe you're going for. Takes two minutes.",
  },
  {
    num: "02",
    title: "We do all the work",
    desc: "We shortlist venues from our pre-authorised London network, negotiate the best available rates, and arrange site visits on your behalf.",
  },
  {
    num: "03",
    title: "You choose, we close",
    desc: "We present your curated shortlist. You pick one. We handle the contract, supplier coordination, and payment — start to finish.",
  },
];

const timeline = [
  { time: "Within 24 hrs", desc: "We review your brief and confirm receipt with a personal response" },
  { time: "Within 48 hrs", desc: "We send a curated shortlist of the best-matched London venues" },
  { time: "You choose", desc: "We arrange site visits, attend them, and negotiate your rates" },
  { time: "All done", desc: "Contract, supplier coordination and payment handled end to end" },
];

export default function HowItWorksPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f5f0e8", fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { transition: opacity 0.2s ease; }
        a:hover { opacity: 0.8; }
        .vly-page { padding: 3rem 3rem 5rem; }
        .vly-hiw-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem; margin-bottom: 3.5rem; }
        .vly-hiw-timeline { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        @media (max-width: 768px) {
          .vly-page { padding: 2rem 1.25rem 3rem; }
          .vly-hiw-steps { grid-template-columns: 1fr; gap: 2rem; }
          .vly-hiw-timeline { grid-template-columns: 1fr 1fr; gap: 1.25rem; }
        }
      `}</style>

      {/* Top bar */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.75rem 3rem", background: "#f5f0e8", borderBottom: "1px solid #e0d8c8" }}>
        <Link to="/" style={{ textDecoration: "none", display: "inline-block", textAlign: "center" }}>
          <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 300, color: "#2c3a1e", letterSpacing: "-0.5px", lineHeight: 1, fontSize: 30 }}>Venuely</div>
          <div style={{ fontSize: 13, color: "#4f6a3f", letterSpacing: "7px", textTransform: "uppercase", marginTop: 6, paddingLeft: 7 }}>London</div>
        </Link>
        <Link to="/" style={{ color: "#2c3a1e", background: "#f0ebe0", border: "1px solid #d4c9b5", borderRadius: 6, textDecoration: "none", fontWeight: 500, fontSize: 15, padding: "10px 20px" }}>
          ← Back to home
        </Link>
      </nav>

      <div className="vly-page" style={{ maxWidth: 1000, margin: "0 auto" }}>
        <p style={{ fontSize: 12, color: "#5e7150", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "0.75rem" }}>How it works</p>
        <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 300, color: "#2c3a1e", lineHeight: 1.2, marginBottom: "0.5rem", fontSize: 40 }}>Three steps, no hassle.</h1>
        <p style={{ fontSize: 17, color: "#5e7150", marginBottom: "3rem" }}>From brief to booked — here's exactly how we take the work off your plate.</p>

        <div className="vly-hiw-steps">
          {steps.map((step) => (
            <div key={step.num} style={{ borderTop: "1px solid #d4c9b5", paddingTop: "1.5rem" }}>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 52, fontWeight: 300, color: "#d4c9b5", lineHeight: 1, marginBottom: "0.75rem" }}>{step.num}</div>
              <div style={{ fontSize: 17, fontWeight: 600, color: "#2c3a1e", marginBottom: "0.5rem" }}>{step.title}</div>
              <div style={{ fontSize: 15, color: "#5e7150", lineHeight: 1.8 }}>{step.desc}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div style={{ background: "#f0ebe0", borderRadius: 12, border: "1px solid #e0d8c8", padding: "2.5rem 3rem", marginBottom: "3.5rem" }}>
          <p style={{ fontSize: 12, color: "#5e7150", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "1.5rem" }}>What to expect after you submit</p>
          <div className="vly-hiw-timeline">
            {timeline.map((item, i) => (
              <div key={i}>
                <div style={{ fontSize: 12, fontWeight: 600, color: "#2c3a1e", marginBottom: 6, paddingBottom: 6, borderBottom: "2px solid #d4c9b5" }}>{item.time}</div>
                <div style={{ fontSize: 14, color: "#5e7150", lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
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
