export default function Footer() {
  const reviews = [
    {
      nome: 'Cristina Oliveira',
      tempo: '2 meses atrás',
      texto: 'Um dos poucos espaços bons para se curtir em São Gonçalo. Tem pagode aos finais de semana e DJ nos intervalos. Os petiscos são maravilhosos e cerveja num preço bom e gelada.',
      estrelas: 5
    },
    {
      nome: 'Cliente Google',
      tempo: '9 meses atrás',
      texto: 'Comemorei os aniversários da minha família lá e ainda faremos mais nesse ano. Bom atendimento, comida e show ao vivo. Recomendo. Pra ver jogo é o melhor telão e aos domingos tem um rodízio que é perfeito.',
      estrelas: 5
    },
    {
      nome: 'Cely Bezerra',
      tempo: 'Um mês atrás',
      texto: 'Lugar bacana, preço excelente, fácil acesso, música boa e bebida gelada.',
      estrelas: 5
    },
  ]

  const StarIcon = () => (
    <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px', fill: '#F5A623' }}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )

  return (
    <>
      {/* Reviews Google */}
      <section style={{ background: '#FBF7EF', padding: '80px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#F5A623', display: 'block', marginBottom: '12px' }}>
              Avaliações
            </span>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: '#2E2B26', letterSpacing: '-1px' }}>
              O que dizem sobre <em style={{ color: '#F5A623', fontWeight: 400 }}> Obah</em>
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '16px' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[1,2,3,4,5].map(i => (
                  <svg key={i} viewBox="0 0 24 24" style={{ width: '20px', height: '20px', fill: '#F5A623' }}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <span style={{ fontSize: '18px', fontWeight: 500, color: '#2E2B26' }}>4,6</span>
              <span style={{ fontSize: '14px', color: '#8C8278' }}>· 504 avaliações no Google</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            {reviews.map((review) => (
              <div key={review.nome} style={{ background: '#fff', borderRadius: '8px', padding: '24px', border: '1px solid rgba(46,43,38,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#F5A623', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 500, fontSize: '16px', flexShrink: 0 }}>
                    {review.nome[0]}
                  </div>
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: 500, color: '#2E2B26', margin: 0 }}>{review.nome}</p>
                    <p style={{ fontSize: '12px', color: '#8C8278', margin: 0 }}>{review.tempo}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '2px', marginBottom: '10px' }}>
                  {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
                </div>
                <p style={{ fontSize: '14px', color: '#4A4540', lineHeight: 1.7, margin: 0 }}>{review.texto}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a
              href="https://share.google/qYun0sNnhG05ctz2V"
              target="_blank"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff', border: '1.5px solid #F5A623', color: '#F5A623', padding: '12px 28px', borderRadius: '2px', fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none' }}
            >
              Ver todas as avaliações no Google
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#2E2B26', padding: '56px 40px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', paddingBottom: '48px', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '32px' }}>
            <div>
              <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '36px', color: '#F5A623', display: 'block', marginBottom: '4px', lineHeight: 1 }}>Obah!</span>
              <span style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '20px', display: 'block' }}>Bar & Ginkeria</span>
              <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', maxWidth: '280px' }}>
                Eventos, momentos, e encontros. Você merece o melhor — e Obah entrega.
              </p>
            </div>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '20px', display: 'block' }}>Navegação</span>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { label: 'Home', href: '#home' },
                  { label: 'Sobre', href: '#sobre' },
                  { label: 'Eventos', href: '#eventos' },
                  { label: 'Comemore conosco', href: '#comemore' },
                  { label: 'Contato', href: '#contato' },
                ].map(item => (
                  <li key={item.label}>
                    <a href={item.href} style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '20px', display: 'block' }}>Links</span>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { label: 'Comprar ingressos', href: 'https://ingressos.obahoficial.com.br' },
                  { label: 'Instagram', href: 'https://instagram.com/obahginkeria' },
                  { label: 'WhatsApp', href: 'https://wa.me/5521993753021' },
                ].map(item => (
                  <li key={item.label}>
                    <a href={item.href} target="_blank" style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', color: 'rgba(255,255,255,0.25)', flexWrap: 'wrap', gap: '8px' }}>
            <span>© 2026 Obah! Bar & Ginkeria. Todos os direitos reservados.</span>
            <span>Plataforma de ingressos: <a href="https://ingressos.obahoficial.com.br" target="_blank" style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>Ingressorio</a></span>
          </div>
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <a
        href="https://wa.me/5521993753021"
        target="_blank"
        style={{ position: 'fixed', bottom: '28px', right: '28px', zIndex: 99, width: '52px', height: '52px', background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(37,211,102,0.35)', textDecoration: 'none' }}
      >
        <svg viewBox="0 0 24 24" style={{ width: '28px', height: '28px', fill: 'white' }}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  )
}