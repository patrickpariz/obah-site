'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/app/lib/supabase'

function WppIcon() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px', fill: 'white' }}>
      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
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
        .order('created_at', { ascending: false })
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
            {eventos.map((ev) => {
              const menorPreco = ev.ticket_types?.length
                ? Math.min(...ev.ticket_types.map(t => t.price))
                : null

              const msgWpp = encodeURIComponent(
                '🎉 ' + ev.name + '\n📅 ' + (ev.date || 'Em breve') + '\n📍 ' + (ev.location || 'Obah! Bar & Ginkeria') + '\n\nCompre seu ingresso: https://ingressos.obahoficial.com.br'
              )

              return (
                <div
                  key={ev.id}
                  onClick={() => window.open(`https://ingressos.obahoficial.com.br/eventos/${ev.slug}`, '_blank')}
                  style={{ background: '#FBF7EF', overflow: 'hidden', borderRadius: '4px', position: 'relative', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(46,43,38,0.12)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  {ev.image_url
                    ? <img src={ev.image_url} alt={ev.name} style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} />
                    : <div style={{ width: '100%', height: '200px', background: '#F2EBD9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>{ev.emoji || '🎶'}</div>
                  }

                  <a
                    href={'https://wa.me/?text=' + msgWpp}
                    target="_blank"
                    onClick={e => e.stopPropagation()}
                    style={{ position: 'absolute', top: '12px', right: '12px', width: '36px', height: '36px', background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.2)', textDecoration: 'none' }}
                  >
                    <WppIcon />
                  </a>

                  <div style={{ padding: '16px' }}>
                    <div style={{ display: 'inline-block', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C8841A', background: '#FDE8B8', padding: '5px 10px', borderRadius: '2px', marginBottom: '12px' }}>
                      📅 {ev.date || 'Em breve'}
                    </div>
                    <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '20px', fontWeight: 700, color: '#2E2B26', marginBottom: '8px', lineHeight: 1.2 }}>
                      {ev.name}
                    </h3>
                    <p style={{ fontSize: '13px', color: '#8C8278', lineHeight: 1.6, marginBottom: '16px' }}>
                      {ev.info_adicional || ev.description || ''}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ fontSize: '13px', color: '#8C8278' }}>
                        {menorPreco
                          ? <span>A partir de <strong style={{ fontSize: '16px', color: '#2E2B26' }}>R$ {menorPreco.toFixed(2).replace('.', ',')}</strong></span>
                          : <strong style={{ fontSize: '16px', color: '#2E2B26' }}>Gratuito</strong>
                        }
                      </div>
                      <span 
  onClick={e => { e.stopPropagation(); window.open(`https://ingressos.obahoficial.com.br/eventos/${ev.slug}`, '_blank'); }}
  style={{ background: '#F5A623', color: '#fff', padding: '10px 20px', fontSize: '12px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: '2px', cursor: 'pointer' }}>
  Ingressos
</span>
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