'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const categorias = [
  'Petiscos',
  'Cerveja',
  'Cerveja 600ml',
  'Bebidas',
  'Drinks',
  'Drinks Exclusivos',
  'Combos',
]

export default function Cardapio() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [categoriaAtiva, setCategoriaAtiva] = useState('Petiscos')

  useEffect(() => {
    async function fetchItems() {
      const { data } = await supabase
        .from('menu_items')
        .select('*')
        .eq('active', true)
        .order('order', { ascending: true })
      setItems(data || [])
      setLoading(false)
    }
    fetchItems()
  }, [])

  const itensFiltrados = items.filter(item => item.category === categoriaAtiva)

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '72px', minHeight: '100vh', background: '#FBF7EF' }}>

        <div style={{ background: '#2E2B26', padding: '60px 40px 40px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(245,166,35,0.8)', display: 'block', marginBottom: '12px' }}>
              Obah! Bar & Ginkeria
            </span>
            <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 700, color: '#fff', letterSpacing: '-2px', lineHeight: 1 }}>
              Nosso <em style={{ color: '#F5A623', fontWeight: 400 }}>cardápio</em>
            </h1>
          </div>
        </div>

        <div style={{ background: '#fff', borderBottom: '1px solid rgba(46,43,38,0.08)', position: 'sticky', top: '72px', zIndex: 50 }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px', display: 'flex', gap: '0', overflowX: 'auto' }}>
            {categorias.map(cat => (
              <button
                key={cat}
                onClick={() => setCategoriaAtiva(cat)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '16px 20px', fontSize: '13px', fontWeight: 500,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  color: categoriaAtiva === cat ? '#F5A623' : '#8C8278',
                  borderBottom: categoriaAtiva === cat ? '2px solid #F5A623' : '2px solid transparent',
                  whiteSpace: 'nowrap', transition: 'all 0.2s',
                  fontFamily: 'inherit'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 40px' }}>
          {loading && (
            <p style={{ textAlign: 'center', color: '#8C8278', padding: '60px 0' }}>Carregando cardapio...</p>
          )}

          {!loading && itensFiltrados.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 24px', color: '#8C8278' }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>🍽️</div>
              <p style={{ fontSize: '16px' }}>Nenhum item nessa categoria ainda.</p>
            </div>
          )}

          {!loading && itensFiltrados.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
              {itensFiltrados.map(item => (
                <div key={item.id} style={{ background: '#fff', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(46,43,38,0.08)' }}>
                  {item.image_url
                    ? <img src={item.image_url} alt={item.name} style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }} />
                    : <div style={{ width: '100%', height: '180px', background: '#F2EBD9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px' }}>🍽️</div>
                  }
                  <div style={{ padding: '16px' }}>
                    <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '17px', fontWeight: 700, color: '#2E2B26', marginBottom: '6px', lineHeight: 1.2 }}>
                      {item.name}
                    </h3>
                    {item.description && (
                      <p style={{ fontSize: '13px', color: '#8C8278', lineHeight: 1.6, marginBottom: '12px' }}>
                        {item.description}
                      </p>
                    )}
                    <p style={{ fontSize: '18px', fontWeight: 700, color: '#F5A623' }}>
                      R$ {Number(item.price).toFixed(2).replace('.', ',')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </main>
      <Footer />
    </>
  )
}