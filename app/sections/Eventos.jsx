'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/app/lib/supabase'

export default function Eventos() {
  const [eventos, setEventos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchEventos() {
      const { data, error } = await supabase
        .from('events')
        .select('*, ticket_types(*)')
        .eq('active', true)
        .order('created_at', { ascending: false })
        .limit(6)

      console.log('eventos:', data, error)
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

      const elements = document.querySelectorAll('.reveal')
      elements.forEach(el => observer.observe(el))

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
            <p style={{ fontSize: '14px', marginTop: '4px' }}>Siga nossas redes para não perder nada!</p>
          </div>
        )}

        {!loading && eventos.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2px' }}>
            {eventos.map((ev) => {
              const menorPreco = ev.ticket_types?.length
                ? Math.min(...ev.ticket_types.map(t => t.price))
                : null

              return (
                <div key={ev.id} style={{ background: '#FBF7EF', overflow: 'hidden' }}>
                  {ev.image_url
                    ? <img src={ev.image_url} alt={ev.name} style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block' }} />
                    : (
                      <div style={{ width: '100%', height: '260px', background: '#F2EBD9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>
                        {ev.emoji || '🎶'}
                      </div>
                    )
                  }
                  <div style={{ padding: '24px' }}>
                    <div style={{ display: 'inline-block', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C8841A', background: '#FDE8B8', padding: '5px 10px', borderRadius: '2px', marginBottom: '12px' }}>
                      📅 {ev.date || 'Em breve'}
                    </div>
                    <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: 700, color: '#2E2B26', marginBottom: '8px', lineHeight: 1.2 }}>
                      {ev.name}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#8C8278', lineHeight: 1.6, marginBottom: '20px' }}>
                      {ev.info_adicional || ev.description || ''}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ fontSize: '13px', color: '#8C8278' }}>
                        {menorPreco
                          ? <>A partir de <strong style={{ fontSize: '18px', color: '#2E2B26' }}>R$ {menorPreco.toFixed(2).replace('.', ',')}</strong></>
                          : <strong style={{ fontSize: '18px', color: '#2E2B26' }}>Gratuito</strong>
                        }
                      </div>
                      <a href="https://ingressos.obahoficial.com.br" target="_blank" style={{ background: '#F5A623', color: '#fff', padding: '10px 20px', fontSize: '12px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px' }}>
                        Ingressos
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