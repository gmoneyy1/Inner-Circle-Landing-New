// CompareStrip — Yelp/Google vs Inner Circle
function CompareStrip() {
  return (
    <section style={{ padding: '60px 64px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <div className="card" style={{ padding: 28, opacity: 0.55 }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>How you used to do it</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
            {Array.from({length:5}).map((_,i)=>(<span key={i} style={{ color: '#fbbf24', fontSize: 18 }}>★</span>))}
            <span className="meta" style={{ marginLeft: 6 }}>4.6 · 312 reviews</span>
          </div>
          <p className="body" style={{ margin: '0 0 12px' }}>
            “Great service, would recommend!” — <span style={{ color: '#71717a' }}>username_4827, 2 years ago</span>
          </p>
          <p className="meta" style={{ margin: 0 }}>You don't know any of these people.</p>
        </div>
        <div className="card" style={{ padding: 28, borderColor: 'rgba(16,185,129,0.3)' }}>
          <div className="eyebrow" style={{ marginBottom: 14, color: '#6ee7b7' }}>How Inner Circle does it</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: -8, marginBottom: 10 }}>
            {[['SC','#fb7185'],['LK','#34d399'],['MJ','#60a5fa']].map(([l,c],i)=>(
              <div key={i} className="ava" style={{ background: c, width: 28, height: 28, fontSize: 10, marginLeft: i?-8:0, border: '2px solid #18181b' }}>{l}</div>
            ))}
            <span className="pill-trust" style={{ marginLeft: 10 }}>Sarah, Liz & 1 other re-book</span>
          </div>
          <p className="body" style={{ margin: '0 0 12px' }}>
            <em>“She’s the only one I trust with my hair.”</em> — Sarah
          </p>
          <p className="meta" style={{ margin: 0 }}>People you actually know.</p>
        </div>
      </div>
    </section>
  );
}
window.CompareStrip = CompareStrip;
