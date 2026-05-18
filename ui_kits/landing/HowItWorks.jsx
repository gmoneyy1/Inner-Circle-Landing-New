// HowItWorks — three-section explanation
function HowItWorks() {
  const steps = [
    { n: '01', t: 'MyCircle', d: 'Add the providers you actually trust. They become the people your friends see when they need a rec.' },
    { n: '02', t: 'MyEcosystem', d: 'A town directory across beauty, home, pets, food and 8 more — filtered by who your circle uses.' },
    { n: '03', t: 'MyFriends', d: 'Tap into any friend’s circle. See what they re-book. The trust signal is what they do, not what they say.' },
  ];
  return (
    <section style={{ padding: '80px 64px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 12 }}>How it works</div>
          <h2 className="h1" style={{ margin: 0, maxWidth: 540 }}>Three views of the same question — <em style={{ color: '#a1a1aa' }}>who do my people use for this?</em></h2>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {steps.map(s => (
          <div key={s.n} className="card" style={{ padding: 28 }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 48, color: 'rgba(255,255,255,0.18)', lineHeight: 1, marginBottom: 14 }}>{s.n}</div>
            <h3 className="h2" style={{ margin: '0 0 10px' }}>{s.t}</h3>
            <p className="body" style={{ margin: 0 }}>{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
window.HowItWorks = HowItWorks;
