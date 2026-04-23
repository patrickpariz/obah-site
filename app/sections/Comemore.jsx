'use client'

import { useState } from 'react'
import { supabase } from '@/app/lib/supabase'
import { useReveal } from '@/app/hooks/useReveal'

export default function Comemore() {
  const [enviado, setEnviado] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    nome: '', whatsapp: '', tipo: '', data: '', convidados: '', mensagem: ''
  })

  useReveal()

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    await supabase.from('messages').insert([{
      name: form.nome,
      email: form.whatsapp,
      message: `Tipo: ${form.tipo} | Data: ${form.data} | Convidados: ${form.convidados} | ${form.mensagem}`,
    }])
    setLoading(false)
    setEnviado(true)
  }

  const inputStyle = {
    width: '100%', background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)', borderRadius: '2px',
    padding: '14px 16px', fontSize: '14px', fontFamily: 'inherit',
    color: '#fff', outline: 'none'
  }

  const labelStyle = {
    display: 'block', fontSize: '11px', letterSpacing: '0.15em',
    textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '8px'
  }

  return (
    <section id="comemore" style={{ padding: '80px 24px', background: '#2E2B26', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-120px', right: '-120px', width: '400px', height: '400px', borderRadius: '50%', border: '80px solid rgba(245,166,35,0.08)' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'start' }}>

          <div className="reveal">
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(245,166,35,0.8)', marginBottom: '16px', display: 'block' }}>
              Eventos privados
            </span>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: '#fff', letterSpacing: '-1px', marginBottom: '24px' }}>
              Comemore <em style={{ color: '#F5A623', fontWeight: 400 }}>conosco</em>
            </h2>
            <p style={{ fontSize: '16px', fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '36px' }}>
              Aniversários, confraternizações, lançamentos, casamentos — nosso espaço foi feito para os seus melhores momentos. Fale com a gente e vamos criar algo especial para você.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Espaço climatizado para até 200 pessoas',
                'Cardápio e open bar personalizados',
                'Estrutura de som e iluminação profissional',
                'Estacionamento no local',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>
                  <div style={{ width: '6px', height: '6px', background: '#F5A623', borderRadius: '50%', flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            {enviado ? (
              <div style={{ textAlign: 'center', padding: '60px 24px' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>✓</div>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '22px', color: '#F5A623', marginBottom: '12px' }}>Recebemos seu pedido!</h3>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)' }}>Em breve nossa equipe entrará em contato pelo WhatsApp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={labelStyle}>Seu nome</label>
                    <input name="nome" type="text" placeholder="João Silva" required style={inputStyle} value={form.nome} onChange={handleChange} />
                  </div>
                  <div>
                    <label style={labelStyle}>WhatsApp</label>
                    <input name="whatsapp" type="tel" placeholder="(21) 99999-0000" required style={inputStyle} value={form.whatsapp} onChange={handleChange} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Tipo de evento</label>
                  <select name="tipo" required style={inputStyle} value={form.tipo} onChange={handleChange}>
                    <option value="">Selecione...</option>
                    {['Aniversário', 'Confraternização', 'Casamento / Noivado', 'Evento corporativo', 'Outro'].map(op => (
                      <option key={op} value={op}>{op}</option>
                    ))}
                  </select>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={labelStyle}>Data do evento</label>
                    <input name="data" type="date" style={inputStyle} value={form.data} onChange={handleChange} />
                  </div>
                  <div>
                    <label style={labelStyle}>Nº de convidados</label>
                    <input name="convidados" type="number" placeholder="ex: 80" min="10" style={inputStyle} value={form.convidados} onChange={handleChange} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Mensagem</label>
                  <textarea name="mensagem" placeholder="Conte um pouco mais sobre o seu evento..." rows={4} style={{ ...inputStyle, resize: 'vertical' }} value={form.mensagem} onChange={handleChange} />
                </div>
                <button type="submit" disabled={loading} style={{ width: '100%', background: loading ? '#C8841A' : '#F5A623', color: '#fff', border: 'none', padding: '16px', fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'inherit', borderRadius: '2px', cursor: loading ? 'not-allowed' : 'pointer' }}>
                  {loading ? 'Enviando...' : 'Solicitar orçamento'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}