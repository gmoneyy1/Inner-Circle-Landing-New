// MyCircle — orbit of providers you trust
const CIRCLE_PROVIDERS = [
  { l: 'MS', c: '#fb7185', n: 'Maria\u2019s Salon',    s: 'Haircuts' },
  { l: 'RP', c: '#34d399', n: 'Rye Pilates',           s: 'Personal Training' },
  { l: 'TH', c: '#60a5fa', n: 'Tom Handyman',          s: 'Home repair' },
  { l: 'JK', c: '#fbbf24', n: 'Jake',                  s: 'Dog walker' },
  { l: 'EL', c: '#f472b6', n: 'Ella Park',             s: 'Math tutor' },
  { l: 'BV', c: '#a78bfa', n: 'Bro Vintners',          s: 'Wine club' },
  { l: 'DR', c: '#22d3ee', n: 'Dr. Reyes',             s: 'Pediatrician' },
];

function MyCircleView({ onSelect }) {
  return (
    <div data-screen-label="02 MyCircle" style={{ padding: '24px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: 16 }}>
        <div className="eyebrow">Your circle</div>
        <h1 className="h1" style={{ margin: '8px 0 0' }}>{CIRCLE_PROVIDERS.length} trusted providers</h1>
        <p className="meta" style={{ margin: '8px 0 0' }}>The people you re-book. The ones friends see.</p>
      </div>
      <div style={{ position: 'relative', aspectRatio: '1', maxWidth: 560, margin: '20px auto' }}>
        <div style={{ position: 'absolute', inset: '6%', border: '1px dashed rgba(255,255,255,0.12)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', inset: '24%', border: '1px dashed rgba(255,255,255,0.06)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', inset: '36%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.12), transparent 70%)', animation: 'pulse-soft 4s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
          <div className="ava" style={{ width: 84, height: 84, background: '#fff', color: '#18181b', fontSize: 20, fontWeight: 600 }}>JD</div>
          <div style={{ textAlign: 'center', fontSize: 11, marginTop: 8, color: '#a1a1aa' }}>You</div>
        </div>
        <div className="orbit-spin" style={{ position: 'absolute', inset: 0 }}>
          {CIRCLE_PROVIDERS.map((p, i) => {
            const ang = (i / CIRCLE_PROVIDERS.length) * Math.PI * 2 - Math.PI / 2;
            const r = 38;
            const x = 50 + r * Math.cos(ang);
            const y = 50 + r * Math.sin(ang);
            return (
              <div key={i} className="counter-spin" style={{ position: 'absolute', top: `${y}%`, left: `${x}%`, transform: 'translate(-50%,-50%)', width: 0, height: 0, cursor: 'pointer' }} onClick={() => onSelect && onSelect(p)}>
                <div className="ava" style={{ position: 'absolute', top: -28, left: -28, width: 56, height: 56, background: p.c, fontSize: 13, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25)' }}>{p.l}</div>
                <div style={{ position: 'absolute', top: 34, left: '50%', transform: 'translateX(-50%)', textAlign: 'center', width: 110 }}>
                  <div style={{ fontSize: 10, color: '#fff', whiteSpace: 'nowrap' }}>{p.n}</div>
                  <div style={{ fontSize: 9, color: '#71717a', whiteSpace: 'nowrap' }}>{p.s}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <button className="btn" style={{ background: 'transparent', color: '#71717a', border: '1px dashed #3f3f46', padding: '8px 16px', borderRadius: 12, fontSize: 12 }}>+ Add provider</button>
      </div>
    </div>
  );
}
window.MyCircleView = MyCircleView;
