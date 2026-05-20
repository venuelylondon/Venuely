import { useState } from 'react'
import { Link } from 'react-router-dom'

const posts = [
  {
    slug: 'best-corporate-event-venues-london',
    title: 'Best Corporate Event Venues in London (2026 Guide)',
    date: '15 May 2026',
    readTime: '6 min read',
    excerpt:
      'From intimate boardroom dinners to company-wide away days, London has a venue for every occasion. Here are our top picks — and how to get them without lifting a finger.',
    content: `
London is one of the world's great cities for corporate events. The range of venues is extraordinary: converted warehouses in Shoreditch, private dining rooms in Mayfair, rooftop terraces in the City, historic livery halls in EC2. But knowing where to look — and who to call — takes time most PAs and EAs simply don't have.

This guide pulls together our favourite venue types across London, with a brief on what makes each one work for corporate bookings.

## Private Dining Rooms in Mayfair & St James's

The West End remains the gold standard for client entertaining. Private dining rooms at restaurants along Dover Street, Jermyn Street and Berkeley Square offer attentive service, exceptional food, and the kind of discretion that senior executives expect. Most seat between 8 and 30 guests and include AV on request. Budgets typically start at £80–£120 per head for a set menu with drinks.

**Best for:** Board dinners, client entertaining, partner lunches

## Warehouse Venues in Shoreditch & Bermondsey

East London's creative venues have matured considerably. What started as scrappy pop-up spaces are now well-equipped event venues with proper catering, production teams, and flexible layouts. Brick-and-timber interiors photograph brilliantly and tend to impress guests who are tired of hotel ballrooms.

**Best for:** Product launches, team away days, company parties, internal conferences

## Rooftop Terraces

London's rooftop scene has expanded every year. From the Shard's corporate event floor to lesser-known terraces in Canary Wharf and the South Bank, rooftop events create a natural talking point and work well for summer receptions. Many have indoor fallback spaces for unpredictable weather.

**Best for:** Summer receptions, client drinks, informal networking

## Livery Halls & Historic Venues

London's livery companies — Goldsmiths, Skinners, Drapers and dozens more — open their halls for external hire. These are extraordinary rooms: vaulted ceilings, silver plate, centuries of history. Clients who have never experienced them are reliably impressed. Many also have catering partners and can accommodate 50–400 guests.

**Best for:** Gala dinners, award ceremonies, formal client entertainment

## Hotel Event Spaces

London's five-star hotels — The Savoy, Claridge's, The Dorchester, The Goring — offer event spaces that combine prestige with a full-service approach. Dedicated events teams handle everything. Pricing is higher but the reliability factor is unmatched for high-stakes events.

**Best for:** Large conferences, prestigious client events, international delegations

---

## How to Book Without the Headache

The challenge with London venues isn't finding them — it's the time it takes to brief each one, chase availability, compare quotes, and negotiate terms. A venue finder service handles all of that for you.

Venuely works with PAs, EAs and office managers across London. You send us one brief — date, numbers, type of event, budget range — and we come back with a shortlist within 24 hours. The service is free to you; we earn a commission from the venue when a booking is confirmed.

[Get in touch →](mailto:hello@venuely.london)
    `.trim(),
  },
  {
    slug: 'venue-finding-guide-for-pas',
    title: 'London Venue Finding: The Complete Guide for PAs & EAs',
    date: '19 May 2026',
    readTime: '8 min read',
    excerpt:
      'Booking a venue in London is one of the most time-consuming tasks in a PA\'s diary. This guide covers everything: how to brief a venue, what to ask, and how to avoid the most common mistakes.',
    content: `
Finding the right venue for a corporate event in London is rarely as simple as Googling "event venue London" and picking the first result. There are hundreds of options, enormous variation in quality, and a long list of details to confirm before anything is booked. This guide is written for PAs, EAs, and office managers who want to do it well — and ideally, do it fast.

## Start with a Clear Brief

The single most important thing you can do is get your brief right before you start searching. A good venue brief covers:

- **Date and flexibility** — fixed date, or a range?
- **Guest numbers** — confirmed headcount, or an estimate?
- **Event type** — dinner, drinks reception, conference, away day, hybrid?
- **Budget** — total budget, or per head?
- **Location** — central London, near an office, near a station?
- **AV requirements** — screen, projector, microphone, hybrid video?
- **Catering style** — sit-down, standing, canapés, full restaurant service?
- **Start and end time** — setup time, pack-down, hard out?

The more detail you can give, the faster you'll get useful responses back.

## Types of Corporate Event Venues

London broadly has five categories of corporate venue:

**Hotels** — reliable, full-service, higher cost. Good for large conferences or prestige events where ease matters more than character.

**Restaurants with private rooms** — excellent for dinners and lunches. Food quality tends to be higher than hotel catering. Room hire is often free if you hit a minimum spend.

**Dry-hire spaces** — you bring your own catering and production. More work, more flexibility, lower cost per head on larger events.

**Unusual / heritage venues** — museums, livery halls, rooftops, converted spaces. High impact, more planning required.

**Serviced venues / business centres** — purpose-built meeting and event rooms. Functional but rarely impressive.

## Questions to Ask Every Venue

When you're requesting quotes, always ask:

1. Is the date available for an exclusive booking?
2. What is the minimum spend / room hire fee?
3. Is VAT included in your quote?
4. What AV is included, and what costs extra?
5. Is there a dedicated event coordinator on the day?
6. What is your cancellation policy?
7. Is there a noise curfew?
8. Is there parking or a loading bay for suppliers?
9. Can we bring our own wine / what is the corkage fee?
10. When do final numbers need to be confirmed?

Getting these answers upfront prevents nasty surprises closer to the event.

## Common Mistakes to Avoid

**Not confirming exclusivity** — especially at restaurants, make sure no other group is in an adjacent private room that could bleed noise into yours.

**Forgetting setup time** — if your event starts at 7pm and you need the room dressed and AV tested by 6pm, book the room from at least 5pm. Setup time is rarely free.

**Underestimating guest numbers** — venues price based on minimum numbers. If only 12 of 20 guests turn up, you often still pay for 20.

**Not reading the cancellation policy** — London venues typically require 50% deposit and have strict cancellation tiers. Always read and negotiate this before signing.

**Leaving it too late** — popular venues in central London get booked weeks and often months in advance, especially for Thursday and Friday evenings. Start looking early.

## Should You Use a Venue Finder?

The alternative to doing all of the above yourself is to use a specialist venue finding service. A good venue finder will:

- Interpret your brief and suggest venues you haven't thought of
- Check availability before approaching you with options
- Negotiate rates on your behalf
- Manage the back-and-forth with each venue
- Arrange site visits if needed
- Handle the contract and deposit logistics

The best venue finders work specifically in London and know the market in detail — which venues are reliably good, which have slipped, which have new event managers worth knowing.

**Venuely** is a free venue finding service for London PAs and EAs. Send us a brief and we'll have a shortlist back to you within 24 hours. There's no fee — we earn commission from the venue only when a booking is confirmed.

[Send us your brief →](mailto:hello@venuely.london)
    `.trim(),
  },
]

function PostList({ onSelect }) {
  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '4rem 1.5rem' }}>
      <Link to="/" style={{ color: '#6B7280', fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: '2.5rem' }}>
        ← Back to home
      </Link>
      <h1 style={{ fontSize: 36, fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>Venuely Blog</h1>
      <p style={{ color: '#6B7280', fontSize: 17, marginBottom: '3rem' }}>Venue finding guides, London event inspiration, and advice for PAs & EAs.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {posts.map((post) => (
          <article
            key={post.slug}
            onClick={() => onSelect(post.slug)}
            style={{
              border: '1px solid #E5E7EB',
              borderRadius: 12,
              padding: '1.75rem 2rem',
              cursor: 'pointer',
              transition: 'box-shadow 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            <div style={{ display: 'flex', gap: 12, marginBottom: '0.75rem', color: '#6B7280', fontSize: 14 }}>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 600, color: '#111827', marginBottom: '0.6rem', lineHeight: 1.35 }}>{post.title}</h2>
            <p style={{ color: '#6B7280', lineHeight: 1.7, marginBottom: '1.25rem' }}>{post.excerpt}</p>
            <span style={{ color: '#D85D3A', fontWeight: 600, fontSize: 15 }}>Read article →</span>
          </article>
        ))}
      </div>
    </div>
  )
}

function renderMarkdown(text) {
  const lines = text.split('\n')
  const elements = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (line.startsWith('## ')) {
      elements.push(<h2 key={i} style={{ fontSize: 22, fontWeight: 700, color: '#111827', marginTop: '2.5rem', marginBottom: '0.75rem' }}>{line.slice(3)}</h2>)
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(<p key={i} style={{ fontWeight: 600, color: '#374151', marginBottom: '0.5rem' }}>{line.replace(/\*\*/g, '')}</p>)
    } else if (line.startsWith('- **')) {
      const bold = line.match(/\*\*(.*?)\*\*/)
      const rest = line.replace(/^- \*\*.*?\*\*/, '').replace(/^—/, '').trim()
      elements.push(
        <li key={i} style={{ color: '#374151', lineHeight: 1.75, marginBottom: '0.4rem' }}>
          <strong>{bold ? bold[1] : ''}</strong>{rest ? ` — ${rest}` : ''}
        </li>
      )
    } else if (/^\d+\. /.test(line)) {
      elements.push(<li key={i} style={{ color: '#374151', lineHeight: 1.75, marginBottom: '0.4rem', listStyleType: 'decimal', marginLeft: 20 }}>{line.replace(/^\d+\. /, '')}</li>)
    } else if (line.startsWith('[') && line.includes('](')) {
      const m = line.match(/\[(.*?)\]\((.*?)\)/)
      if (m) {
        elements.push(
          <p key={i} style={{ marginTop: '1.5rem' }}>
            <a href={m[2]} style={{ background: '#D85D3A', color: '#fff', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, display: 'inline-block' }}>{m[1]}</a>
          </p>
        )
      }
    } else if (line.startsWith('---')) {
      elements.push(<hr key={i} style={{ border: 'none', borderTop: '1px solid #E5E7EB', margin: '2rem 0' }} />)
    } else if (line.trim()) {
      elements.push(<p key={i} style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem' }}>{line}</p>)
    }
    i++
  }
  return elements
}

function PostDetail({ slug, onBack }) {
  const post = posts.find(p => p.slug === slug)
  if (!post) return null
  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '4rem 1.5rem' }}>
      <button
        onClick={onBack}
        style={{ background: 'none', border: 'none', color: '#6B7280', fontSize: 15, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: '2.5rem', padding: 0 }}
      >
        ← Back to blog
      </button>
      <div style={{ display: 'flex', gap: 12, color: '#6B7280', fontSize: 14, marginBottom: '1rem' }}>
        <span>{post.date}</span><span>·</span><span>{post.readTime}</span>
      </div>
      <h1 style={{ fontSize: 32, fontWeight: 700, color: '#111827', lineHeight: 1.3, marginBottom: '1.5rem' }}>{post.title}</h1>
      <p style={{ color: '#6B7280', fontSize: 18, lineHeight: 1.7, borderLeft: '3px solid #D85D3A', paddingLeft: '1rem', marginBottom: '2.5rem' }}>{post.excerpt}</p>
      <div>{renderMarkdown(post.content)}</div>
      <div style={{ marginTop: '4rem', background: '#FFF7F5', borderRadius: 12, padding: '2rem', textAlign: 'center' }}>
        <p style={{ fontWeight: 600, color: '#111827', fontSize: 19, marginBottom: '0.5rem' }}>Need a venue in London?</p>
        <p style={{ color: '#6B7280', marginBottom: '1.25rem' }}>Send us a brief and get a curated shortlist within 24 hours. It's free.</p>
        <a href="mailto:hello@venuely.london" style={{ background: '#D85D3A', color: '#fff', padding: '12px 28px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, display: 'inline-block' }}>
          Get in touch →
        </a>
      </div>
    </div>
  )
}

export default function BlogPage() {
  const [activeSlug, setActiveSlug] = useState(null)

  return (
    <div style={{ minHeight: '100vh', background: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {activeSlug
        ? <PostDetail slug={activeSlug} onBack={() => setActiveSlug(null)} />
        : <PostList onSelect={setActiveSlug} />
      }
    </div>
  )
}
