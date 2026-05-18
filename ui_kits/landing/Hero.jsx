// Hero — Inner Circle landing
function Hero() {
  return (
    <section style={{ position: 'relative', padding: '80px 64px 100px', overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 60, alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 18 }}>Now in Rye, NY · early access</div>
          <h1 className="h-display" style={{ margin: '0 0 22px' }}>
            your network<br/>knows best.
          </h1>
          <p className="body-lg" style={{ maxWidth: 460, margin: '0 0 32px', color: 'rgba(255,255,255,0.75)' }}>
            Inner Circle is the group chat for local recommendations — made structured. See which barbers, tutors, plumbers, and vets the people you actually trust are using. No stars from strangers.
          </p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary">Get early access →</button>
            <button className="btn btn-ghost">I'm a local provider →</button>
          </div>
          <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 10, color: '#71717a', fontSize: 12 }}>
            <div style={{ display: 'flex' }}>
              {['#fb7185','#34d399','#fbbf24','#60a5fa'].map((c,i) => (
                <div key={i} className="ava" style={{ background: c, width: 22, height: 22, fontSize: 9, marginLeft: i?-6:0, border: '2px solid #18181b' }}>{['SC','LK','AR','MJ'][i]}</div>
              ))}
            </div>
            <span>240+ Rye households already on the list</span>
          </div>
        </div>
        <OrbitGraphic />
      </div>
    </section>
  );
}
window.Hero = Hero;
