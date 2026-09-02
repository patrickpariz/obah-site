'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/app/lib/supabase'

function WppIcon() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px', fill: 'white' }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export default function Eventos() {
  const [eventos, setEventos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchEventos() {
      const { data } = await supabase
        .from('events')
        .select('*, ticket_types(*)')
        .eq('active', true)
        .order('date', { ascending: true })
        .limit(6)
      setEventos(data || [])
      setLoading(false)
    }
    fetchEventos()
  }, [])

  useEffect(() => {
    if (!loading && eventos.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.12 })
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
      return () => observer.disconnect()
    }
  }, [loading, eventos])

  return (
    <section id="eventos" style={{ padding: '100px 40px', background: '#fff' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div className="reveal" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '56px', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#F5A623', marginBottom: '16px', display: 'block' }}>
              Agenda
            </span>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: '#2E2B26', letterSpacing: '-1px' }}>
              Próximos <em style={{ color: '#F5A623', fontWeight: 400 }}>eventos</em>
            </h2>
          </div>
          <a href="https://ingressos.obahoficial.com.br" target="_blank" style={{ fontSize: '13px', color: '#F5A623', textDecoration: 'none' }}>
            Ver todos os eventos →
          </a>
        </div>

        {loading && (
          <p style={{ color: '#8C8278', textAlign: 'center', padding: '60px 0' }}>Carregando eventos...</p>
        )}

        {!loading && eventos.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 24px', color: '#8C8278' }}>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>🎶</div>
            <p style={{ fontSize: '16px' }}>Em breve novos eventos por aqui.</p>
          </div>
        )}

        {!loading && eventos.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
            {eventos.map(function(ev) {
              const linkEvento = ev.slug
                ? 'https://ingressos.obahoficial.com.br/eventos/' + ev.slug
                : 'https://ingressos.obahoficial.com.br'

              const msgWpp = encodeURIComponent(
                'Vem pra Obah! ' + ev.name + ' - ' + (ev.date || 'Em breve') + '. Compre seu ingresso: ' + linkEvento
              )

              return (
                <div
                  key={ev.id}
                  style={{ background: '#FBF7EF', overflow: 'hidden', borderRadius: '4px', position: 'relative', transition: 'transform 0.2s, box-shadow 0.2s' }}
                  onMouseEnter={function(e) { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(46,43,38,0.12)' }}
                  onMouseLeave={function(e) { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  {ev.image_url
                    ? <img src={ev.image_url} alt={ev.name} style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} />
                    : <div style={{ width: '100%', height: '200px', background: '#F2EBD9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>{ev.emoji || '🎶'}</div>
                  }

                  <a
                    href={'https://wa.me/?text=' + msgWpp}
                    target="_blank"
                    onClick={function(e) { e.stopPropagation() }}
                    style={{ position: 'absolute', top: '12px', right: '12px', width: '36px', height: '36px', background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.2)', textDecoration: 'none' }}
                  >
                    <WppIcon />
                  </a>

                  <div style={{ padding: '16px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C8841A', background: '#FDE8B8', padding: '5px 10px', borderRadius: '2px', marginBottom: '10px', display: 'inline-block' }}>
                      📅 {ev.date || 'Em breve'}
                    </div>
                    <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '18px', fontWeight: 700, color: '#2E2B26', marginBottom: '14px', lineHeight: 1.2 }}>
                      {ev.name}
                    </h3>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <a
                        href={linkEvento}
                        target="_blank"
                        style={{ flex: 1, background: '#F5A623', color: '#fff', padding: '10px', fontSize: '12px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px', textAlign: 'center' }}
                      >
                        Comprar agora
                      </a>
                      <a
                        href={linkEvento}
                        target="_blank"
                        style={{ flex: 1, background: 'transparent', color: '#2E2B26', padding: '10px', fontSize: '12px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px', textAlign: 'center', border: '1.5px solid #2E2B26' }}
                      >
                        Saiba mais
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

      </div>
    </section>
  )
}