// Ecosystem — town directory by category
const CATS = [
  ['Beauty',       '#fb7185', 24], ['Health',       '#34d399', 18],
  ['Home',         '#60a5fa', 31], ['Family',       '#0ea5e9', 12],
  ['Pets',         '#fbbf24',  9], ['Food',         '#fb923c', 27],
  ['Professional', '#8b5cf6', 14], ['Auto',         '#64748b',  7],
  ['Wellness',     '#f472b6', 16], ['Education',    '#22d3ee', 11],
  ['Events',       '#a78bfa',  8], ['Shopping',     '#eab308', 13],
];

function EcosystemView() {
  return (
    <div data-screen-label="04 Ecosystem" style={{ padding: '24px 0' }}>
      <div style={{ marginBottom: 6 }}>
        <div className="eyebrow">Rye, NY · ecosystem</div>
        <h1 className="h1" style={{ margin: '6px 0 0' }}>What your town actually uses.</h1>
        <p className="body" style={{ margin: '8px 0 0', maxWidth: 480 }}>Browse by category. Sorted by who in your circle has them on file.</p>
      </div>
      <div style={{ display: 'flex', gap: 8, margin: '18px 0', flexWrap: 'wrap' }}>
        <button className="chip chip-active">📍 Rye ▾</button>
        <button className="chip">All categories</button>
        <button className="chip">Friend-vouched only</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        {CATS.map(([n, c, count]) => (
          <div key={n} className="card" style={{ padding: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14 }}>
            <div className="ava" style={{ width: 40, height: 40, background: `linear-gradient(135deg, ${c}, ${c}cc)` }} />
            <div style={{ flex: 1 }}>
              <h3 className="h3" style={{ margin: 0, fontSize: 14 }}>{n}</h3>
              <div className="meta">{count} in town</div>
            </div>
            <span style={{ color: '#71717a' }}>›</span>
          </div>
        ))}
      </div>
    </div>
  );
}
window.EcosystemView = EcosystemView;
