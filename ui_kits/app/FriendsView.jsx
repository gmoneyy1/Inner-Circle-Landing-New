// Friends — vertical stack of friend circles
const FRIENDS = [
  { name: 'Sarah Chen',  c: '#fb7185', l: 'SC', town: 'Rye',       n: 8, locked: 1 },
  { name: 'Liz Kapoor',  c: '#34d399', l: 'LK', town: 'Rye',       n: 12, locked: 3 },
  { name: 'Mike Jordan', c: '#60a5fa', l: 'MJ', town: 'Scarsdale', n: 6,  locked: 0 },
  { name: 'Alex Reyes',  c: '#fbbf24', l: 'AR', town: 'Bronxville',n: 9,  locked: 2 },
];
const PROVIDER_DOTS = [
  ['#fb7185','#34d399','#60a5fa','#fbbf24','#a78bfa','#22d3ee'],
  ['#fb923c','#f472b6','#10b981','#8b5cf6','#0ea5e9','#e879f9','#fbbf24'],
  ['#fb7185','#60a5fa','#34d399','#fbbf24'],
  ['#a78bfa','#fb923c','#34d399','#60a5fa','#f472b6'],
];

function FriendCard({ f, dots, onOpen }) {
  return (
    <div className="card" style={{ padding: 22, cursor: 'pointer' }} onClick={onOpen}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
        <div className="ava" style={{ width: 48, height: 48, background: f.c, fontSize: 14 }}>{f.l}</div>
        <div style={{ flex: 1 }}>
          <h3 className="h3" style={{ margin: 0 }}>{f.name}</h3>
          <div className="meta">{f.town} · {f.n} providers · {f.locked} private</div>
        </div>
        <span style={{ color: '#a1a1aa', fontSize: 18 }}>›</span>
      </div>
      <div style={{ position: 'relative', height: 120 }}>
        <div style={{ position: 'absolute', inset: '4px 0', border: '1px dashed rgba(255,255,255,0.08)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
          <div className="ava" style={{ width: 36, height: 36, background: f.c, fontSize: 11 }}>{f.l}</div>
        </div>
        {dots.map((c, i) => {
          const ang = (i / dots.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + 42 * Math.cos(ang);
          const y = 50 + 42 * Math.sin(ang);
          return <div key={i} className="ava" style={{ position: 'absolute', top: `${y}%`, left: `${x}%`, transform: 'translate(-50%,-50%)', width: 22, height: 22, background: c, fontSize: 9 }} />;
        })}
      </div>
      <div style={{ marginTop: 12, fontSize: 11, color: '#71717a', textAlign: 'center' }}>Tap to see inside their circle</div>
    </div>
  );
}

function FriendsView({ onOpen }) {
  return (
    <div data-screen-label="03 Friends" style={{ padding: '24px 0' }}>
      <div style={{ marginBottom: 18 }}>
        <div className="eyebrow">Your friends</div>
        <h1 className="h1" style={{ margin: '6px 0 0' }}>{FRIENDS.length} circles in your network</h1>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {FRIENDS.map((f, i) => <FriendCard key={i} f={f} dots={PROVIDER_DOTS[i]} onOpen={() => onOpen && onOpen(f)} />)}
      </div>
    </div>
  );
}
window.FriendsView = FriendsView;
