// ProviderCTA + FAQ + Footer
function ProviderCTA() {
  return (
    <section style={{ padding: '80px 64px' }}>
      <div className="card" style={{ padding: '48px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40, alignItems: 'center', background: 'rgba(255,255,255,0.03)' }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 12 }}>For providers</div>
          <h2 className="h1" style={{ margin: '0 0 12px' }}>Get listed where the recommendations already happen.</h2>
          <p className="body-lg" style={{ margin: 0, maxWidth: 480 }}>If you're already the person being texted around Rye, Scarsdale, or Bronxville — make sure your work is credited. Listings are free.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <input className="input" placeholder="Business name" />
          <input className="input" placeholder="Email" />
          <button className="btn btn-primary" style={{ justifyContent: 'center' }}>Apply to list →</button>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const qs = [
    ['Is this just Yelp with friends?', 'No. Yelp shows you ratings from anyone. Inner Circle shows you what people in your actual social graph keep going back to. Re-booking is the signal — not a star.'],
    ['Where is it available?', 'Early access is open in Rye, NY first, then expanding through lower Westchester (Scarsdale, Bronxville, Mamaroneck, Larchmont).'],
    ['How much does it cost?', 'Free. There is an optional ad-free tier later. We will never gate your friends’ recommendations behind a paywall.'],
    ['Can I keep some providers private?', 'Yes — every entry in your circle can be marked private. Friends see a lock and can request to unlock.'],
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section style={{ padding: '40px 64px 80px' }}>
      <div className="eyebrow" style={{ marginBottom: 18 }}>Frequently asked</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {qs.map(([q,a], i) => (
          <div key={i} className="card" style={{ padding: '18px 24px', cursor: 'pointer' }} onClick={() => setOpen(open === i ? -1 : i)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 className="h3" style={{ margin: 0 }}>{q}</h3>
              <span style={{ color: '#a1a1aa', fontSize: 18 }}>{open === i ? '–' : '+'}</span>
            </div>
            {open === i && <p className="body" style={{ margin: '14px 0 0', maxWidth: 700 }}>{a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ padding: '40px 64px 36px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#71717a', fontSize: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div className="ava" style={{ width: 28, height: 28, background: '#fff', color: '#18181b', fontSize: 11 }}>IC</div>
        <span style={{ fontFamily: "'Lora',serif", fontSize: 14, color: '#fff', fontWeight: 600 }}>Inner Circle</span>
        <span style={{ marginLeft: 12 }}>· Rye, NY</span>
      </div>
      <div style={{ display: 'flex', gap: 22 }}>
        <a style={{ color: '#71717a', textDecoration: 'none' }}>Privacy</a>
        <a style={{ color: '#71717a', textDecoration: 'none' }}>Terms</a>
        <a style={{ color: '#71717a', textDecoration: 'none' }}>Contact</a>
      </div>
    </footer>
  );
}
window.ProviderCTA = ProviderCTA; window.FAQ = FAQ; window.Footer = Footer;
