'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ['home', 'sobre', 'eventos', 'comemore', 'contato']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Sobre', href: '#sobre', id: 'sobre' },
    { label: 'Eventos', href: '#eventos', id: 'eventos' },
    { label: 'Comemore', href: '#comemore', id: 'comemore' },
    { label: 'Contato', href: '#contato', id: 'contato' },
  ]

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 40px', height: '72px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(251,247,239,0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(245,166,35,0.15)',
        boxShadow: scrolled ? '0 2px 24px rgba(46,43,38,0.08)' : 'none',
        transition: 'box-shadow 0.3s',
      }}>
        <a href="#home" style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: 'Georgia, serif', fontSize: '28px', fontStyle: 'italic', color: '#F5A623', lineHeight: 1 }}>Obah!</span>
          <span style={{ display: 'block', fontSize: '9px', fontWeight: 300, letterSpacing: '0.25em', color: '#8C8278', textTransform: 'uppercase', marginTop: '-2px' }}>Bar & Ginkeria</span>
        </a>

        <ul className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '32px', listStyle: 'none', margin: 0, padding: 0 }}>
          {links.map(item => (
            <li key={item.label}>
              <a href={item.href} style={{
                fontSize: '13px', fontWeight: 400, letterSpacing: '0.06em',
                textTransform: 'uppercase', textDecoration: 'none',
                color: activeSection === item.id ? '#F5A623' : '#3D3D3D',
                borderBottom: activeSection === item.id ? '1.5px solid #F5A623' : '1.5px solid transparent',
                paddingBottom: '2px', transition: 'color 0.2s',
              }}>{item.label}</a>
            </li>
          ))}
          <li>
            <a href="https://ingressos.obahoficial.com.br" target="_blank" style={{ background: '#F5A623', color: '#fff', padding: '10px 22px', borderRadius: '2px', fontSize: '13px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Comprar ingressos
            </a>
          </li>
        </ul>

        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', flexDirection: 'column', gap: '5px', background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}>
          <span style={{ display: 'block', width: '24px', height: '2px', background: menuOpen ? '#F5A623' : '#3D3D3D', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ display: 'block', width: '24px', height: '2px', background: menuOpen ? '#F5A623' : '#3D3D3D', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: '24px', height: '2px', background: menuOpen ? '#F5A623' : '#3D3D3D', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </nav>

      {menuOpen && (
        <div style={{ position: 'fixed', top: '72px', left: 0, right: 0, zIndex: 99, background: 'rgba(251,247,239,0.98)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(245,166,35,0.15)', padding: '24px 40px 32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {links.map(item => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} style={{ fontSize: '18px', fontWeight: 400, letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', color: activeSection === item.id ? '#F5A623' : '#3D3D3D' }}>
              {item.label}
            </a>
          ))}
          <a href="https://ingressos.obahoficial.com.br" target="_blank" onClick={() => setMenuOpen(false)} style={{ background: '#F5A623', color: '#fff', padding: '14px 22px', borderRadius: '2px', fontSize: '14px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', textAlign: 'center', marginTop: '8px' }}>
            Comprar ingressos
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}