'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 40px', height: '72px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: 'rgba(251,247,239,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(245,166,35,0.15)',
      boxShadow: scrolled ? '0 2px 24px rgba(46,43,38,0.08)' : 'none',
      transition: 'box-shadow 0.3s',
    }}>

      <a href="#home" style={{ textDecoration: 'none' }}>
        <span style={{ fontFamily: 'Georgia, serif', fontSize: '28px', fontStyle: 'italic', color: '#F5A623', lineHeight: 1 }}>
          Obah!
        </span>
        <span style={{ display: 'block', fontFamily: 'sans-serif', fontSize: '9px', fontWeight: 300, letterSpacing: '0.25em', color: '#8C8278', textTransform: 'uppercase', marginTop: '-2px' }}>
          Bar & Ginkeria
        </span>
      </a>

      <ul style={{ display: 'flex', alignItems: 'center', gap: '32px', listStyle: 'none', margin: 0, padding: 0 }}>
        {[
          { label: 'Sobre', href: '#sobre' },
          { label: 'Eventos', href: '#eventos' },
          { label: 'Comemore', href: '#comemore' },
          { label: 'Contato', href: '#contato' },
        ].map(item => (
          <li key={item.label}>
            <a href={item.href} style={{ fontSize: '13px', fontWeight: 400, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#3D3D3D', textDecoration: 'none' }}>
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <a href="https://ingressos.obahoficial.com.br" target="_blank" style={{ background: '#F5A623', color: '#fff', padding: '10px 22px', borderRadius: '2px', fontSize: '13px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Comprar ingressos
          </a>
        </li>
      </ul>

    </nav>
  )
}