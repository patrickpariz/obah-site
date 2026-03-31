
'use client'

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '72px',
      background: '#FBF7EF',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse 60% 50% at 15% 50%, rgba(245,166,35,0.12) 0%, transparent 70%),
          radial-gradient(ellipse 50% 60% at 85% 40%, rgba(245,166,35,0.08) 0%, transparent 70%)
        `
      }} />

      <div style={{ position: 'relative', textAlign: 'center', maxWidth: '820px', padding: '0 24px' }}>
        <span style={{
          fontSize: '12px', fontWeight: 400, letterSpacing: '0.3em',
          textTransform: 'uppercase', color: '#F5A623', marginBottom: '20px', display: 'block'
        }}>
          Bar · Ginkeria · Casa de Shows · São Gonçalo, RJ
        </span>

        <h1 style={{
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(48px, 8vw, 96px)',
          fontWeight: 700,
          color: '#2E2B26',
          lineHeight: 0.95,
          letterSpacing: '-2px',
          marginBottom: '12px'
        }}>
          Eventos,<br />
          <em style={{ color: '#F5A623', fontWeight: 400 }}>momentos,</em><br />
          memórias.
        </h1>

        <p style={{
          fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: 300,
          color: '#4A4540', marginBottom: '48px', lineHeight: 1.6
        }}>
          Você merece o melhor. Venha viver noites inesquecíveis na Obah!
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#eventos" style={{
            background: '#F5A623', color: '#fff', padding: '15px 36px',
            fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em',
            textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px'
          }}>
            Ver próximos eventos
          </a>
          <a href="#comemore" style={{
            background: 'transparent', color: '#2E2B26', padding: '15px 36px',
            fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em',
            textTransform: 'uppercase', textDecoration: 'none',
            border: '1.5px solid #2E2B26', borderRadius: '2px'
          }}>
            Comemore conosco
          </a>
        </div>
      </div>
    </section>
  )
}