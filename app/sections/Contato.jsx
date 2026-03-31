'use client'

import { useState } from 'react'

export default function Contato() {
  const [enviado, setEnviado] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <section id="contato" style={{ padding: '100px 40px', background: '#F2EBD9' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            <div>
              <span style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#F5A623', marginBottom: '16px', display: 'block' }}>
                Onde estamos
              </span>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: '#2E2B26', letterSpacing: '-1px' }}>
                Vem pra <em style={{ color: '#F5A623', fontWeight: 400 }}>Obah!</em>
              </h2>
            </div>

            <div>
              <span style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#F5A623', marginBottom: '8px', display: 'block' }}>
                Endereço
              </span>
              <p style={{ fontSize: '16px', fontWeight: 300, color: '#2E2B26', lineHeight: 1.6 }}>
                Rua Exemplo, 123 — Bairro<br />
                São Gonçalo, RJ — CEP 00000-000
              </p>
            </div>

            <div>
              <span style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#F5A623', marginBottom: '12px', display: 'block' }}>
                Horário de funcionamento
              </span>
              {[
                { dia: 'Segunda a quarta', hora: null },
                { dia: 'Quinta e sexta', hora: '18h – 00h' },
                { dia: 'Sábado', hora: '17h – 02h' },
                { dia: 'Domingo', hora: '15h – 22h' },
              ].map(item => (
                <div key={item.dia} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#4A4540', padding: '8px 0', borderBottom: '1px solid rgba(46,43,38,0.08)' }}>
                  <span>{item.dia}</span>
                  {item.hora
                    ? <span style={{ color: '#8C8278' }}>{item.hora}</span>
                    : <span style={{ color: '#8C8278', fontStyle: 'italic' }}>Fechado</span>
                  }
                </div>
              ))}
            </div>

            <div>
              <span style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#F5A623', marginBottom: '8px', display: 'block' }}>
                Redes sociais
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <a href="https://instagram.com/obahoficial" target="_blank" style={{ fontSize: '16px', fontWeight: 300, color: '#2E2B26', textDecoration: 'none' }}>
                  @obahoficial
                </a>
                <a href="https://wa.me/5521000000000" target="_blank" style={{ fontSize: '16px', fontWeight: 300, color: '#2E2B26', textDecoration: 'none' }}>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div>
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#F5A623', marginBottom: '16px', display: 'block' }}>
              Fale conosco
            </span>
            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', fontWeight: 700, color: '#2E2B26', marginBottom: '28px' }}>
              Manda uma <em style={{ color: '#F5A623', fontWeight: 400 }}>mensagem</em>
            </h3>

            {enviado ? (
              <div style={{ textAlign: 'center', padding: '48px 24px' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>✓</div>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '22px', color: '#F5A623', marginBottom: '8px' }}>Mensagem enviada!</h3>
                <p style={{ fontSize: '14px', color: '#8C8278' }}>Retornaremos em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { type: 'text', placeholder: 'Seu nome' },
                  { type: 'email', placeholder: 'Seu e-mail' },
                ].map(field => (
                  <input key={field.placeholder} type={field.type} placeholder={field.placeholder} required style={{ width: '100%', background: '#fff', border: '1px solid rgba(46,43,38,0.12)', borderRadius: '2px', padding: '14px 16px', fontSize: '14px', fontFamily: 'inherit', color: '#2E2B26', outline: 'none' }} />
                ))}
                <textarea placeholder="Sua mensagem..." rows={4} required style={{ width: '100%', background: '#fff', border: '1px solid rgba(46,43,38,0.12)', borderRadius: '2px', padding: '14px 16px', fontSize: '14px', fontFamily: 'inherit', color: '#2E2B26', outline: 'none', resize: 'vertical' }} />
                <button type="submit" style={{ background: '#F5A623', color: '#fff', border: 'none', padding: '14px 28px', fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'inherit', borderRadius: '2px', cursor: 'pointer', alignSelf: 'flex-start' }}>
                  Enviar mensagem
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}