// OrbitGraphic — the central trust visualization
function OrbitGraphic() {
  const ring1 = [
    { c: '#fb7185', l: 'MS', s: 'Maria’s Salon' },
    { c: '#34d399', l: 'RP', s: 'Rye Pilates' },
    { c: '#60a5fa', l: 'TH', s: 'Tom (Handy)' },
    { c: '#fbbf24', l: 'JK', s: 'Jake · Dogs' },
    { c: '#f472b6', l: 'EL', s: 'Ella · Tutor' },
    { c: '#a78bfa', l: 'BV', s: 'Bro Vintners' },
  ];
  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: '1', maxWidth: 480, margin: '0 auto' }}>
      {/* outer dashed rail */}
      <div style={{ position: 'absolute', inset: '8%', border: '1px dashed rgba(255,255,255,0.15)', borderRadius: '50%' }} />
      <div style={{ position: 'absolute', inset: '22%', border: '1px dashed rgba(255,255,255,0.08)', borderRadius: '50%' }} />
      {/* halo */}
      <div style={{ position: 'absolute', inset: '32%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%)', animation: 'pulse-soft 4s ease-in-out infinite' }} />
      {/* center: you */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
        <div className="ava" style={{ width: 88, height: 88, background: '#fff', color: '#18181b', fontSize: 22, fontWeight: 600 }}>YOU</div>
      </div>
      {/* orbiting ring */}
      <div className="orbit-spin" style={{ position: 'absolute', inset: 0 }}>
        {ring1.map((p, i) => {
          const ang = (i / ring1.length) * Math.PI * 2 - Math.PI / 2;
          const r = 42; // % from center
          const x = 50 + r * Math.cos(ang);
          const y = 50 + r * Math.sin(ang);
          return (
            <div key={i} className="counter-spin" style={{ position: 'absolute', top: `${y}%`, left: `${x}%`, transform: 'translate(-50%,-50%)', textAlign: 'center' }}>
              <div className="ava" style={{ width: 52, height: 52, background: p.c, fontSize: 13, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)' }}>{p.l}</div>
              <div style={{ fontSize: 9, color: '#a1a1aa', marginTop: 6, whiteSpace: 'nowrap' }}>{p.s}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
window.OrbitGraphic = OrbitGraphic;
