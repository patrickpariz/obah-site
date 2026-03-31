export default function Sobre() {
  return (
    <section id="sobre" style={{ padding: '100px 40px', background: '#FBF7EF' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

          <div style={{ position: 'relative' }}>
            <div style={{
              width: '100%', aspectRatio: '4/5',
              background: 'linear-gradient(160deg, #FDE8B8 0%, #F2EBD9 100%)',
              borderRadius: '2px', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: '64px'
            }}>
              🍹
            </div>
            <div style={{
              position: 'absolute', bottom: '-24px', right: '-24px',
              width: '120px', height: '120px', background: '#F5A623',
              borderRadius: '50%', display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '2px'
            }}>
              <span style={{ fontFamily: 'Georgia, serif', fontSize: '32px', fontWeight: 700, color: '#fff', lineHeight: 1 }}>+5</span>
              <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.85)', textAlign: 'center', letterSpacing: '0.05em' }}>anos de<br />história</span>
            </div>
          </div>

          <div style={{ paddingRight: '16px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#F5A623', marginBottom: '16px', display: 'block' }}>
              Nossa história
            </span>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: '#2E2B26', letterSpacing: '-1px', marginBottom: '24px' }}>
              Lugar de <em style={{ color: '#F5A623', fontWeight: 400 }}>gente boa</em>
            </h2>
            <p style={{ fontSize: '16px', fontWeight: 300, color: '#4A4540', lineHeight: 1.8, marginBottom: '36px' }}>
              A Obah nasceu do desejo de criar um espaço onde São Gonçalo pudesse se reunir, celebrar e criar memórias. Um bar diferente, uma ginkeria com alma, um palco para grandes noites.
              <br /><br />
              Aqui cada detalhe é pensado para você ter a melhor experiência — desde o drink autoralmente preparado até o show que vai te fazer dançar até o amanhecer.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
              {['Bar', 'Ginkeria', 'Shows ao vivo', 'São Gonçalo'].map(tag => (
                <span key={tag} style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C8841A', border: '1px solid #F5A623', padding: '6px 14px', borderRadius: '1px' }}>
                  {tag}
                </span>
              ))}
            </div>
            <a href="#eventos" style={{ background: '#F5A623', color: '#fff', padding: '15px 36px', fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px' }}>
              Ver eventos
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}