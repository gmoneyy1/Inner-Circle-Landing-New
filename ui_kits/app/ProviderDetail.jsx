// Provider detail sheet
function ProviderDetail({ p, onClose }) {
  if (!p) return null;
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)', zIndex: 50, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }} onClick={onClose}>
      <div className="card" onClick={e => e.stopPropagation()} style={{ width: '100%', maxWidth: 460, padding: 26, borderRadius: '24px 24px 0 0', background: '#18181b', borderColor: 'rgba(255,255,255,0.08)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div className="ava" style={{ width: 80, height: 80, background: p.c, fontSize: 22, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25)' }}>{p.l}</div>
          <h2 className="h2" style={{ margin: '8px 0 0' }}>{p.n}</h2>
          <div className="meta">{p.s}</div>
          <span className="pill-trust" style={{ marginTop: 6 }}>Sarah, Liz & 2 others re-book</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 20, fontSize: 13, color: '#d4d4d8' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}><span style={{ color: '#71717a' }}>Town</span><span>Rye, NY</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}><span style={{ color: '#71717a' }}>In circle</span><span>You + 3 friends</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}><span style={{ color: '#71717a' }}>Re-book rate</span><span>Used 4 times</span></div>
        </div>
        <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
          <button className="btn btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>Text Sarah</button>
          <button className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>Save to my circle →</button>
        </div>
      </div>
    </div>
  );
}
window.ProviderDetail = ProviderDetail;
