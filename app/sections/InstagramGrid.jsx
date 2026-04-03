'use client'

const BASE = 'https://vuujmapzqmdmphnvntbt.supabase.co/storage/v1/object/public/instagram'

const posts = [
  { url: BASE + '/1.JPG', alt: 'Drink Obah' },
  { url: BASE + '/2.JPG', alt: 'Ambiente Obah' },
  { url: BASE + '/3.JPG', alt: 'Petiscos Obah' },
  { url: BASE + '/4.JPG', alt: 'Show ao vivo Obah' },
  { url: BASE + '/5.JPG', alt: 'Pagode Obah' },
  { url: BASE + '/6.JPG', alt: 'Noite Obah' },
]

const msgWpp = encodeURIComponent(
  'Conhece a Obah! Bar Ginkeria? Bar, Ginkeria e Shows ao vivo em Sao Goncalo, RJ! Veja mais: https://www.obahoficial.com.br'
)

const instaUrl = 'https://instagram.com/obahginkeria'

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px', fill: 'white', flexShrink: 0 }}>
      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
    </svg>
  )
}

function InstaIcon() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px', fill: 'white', flexShrink: 0 }}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

function PostCard({ post }) {
  function handleEnter(e) {
    e.currentTarget.querySelector('.overlay').style.opacity = '1'
  }
  function handleLeave(e) {
    e.currentTarget.querySelector('.overlay').style.opacity = '0'
  }

  return (
    <a
      href={instaUrl}
      target="_blank"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ display: 'block', overflow: 'hidden', aspectRatio: '1/1', position: 'relative', textDecoration: 'none' }}
    >
      <img src={post.url} alt={post.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      <div className="overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(245,166,35,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s' }}>
        <InstaIcon />
      </div>
    </a>
  )
}

export default function InstagramGrid() {
  return (
    <section style={{ background: '#fff', padding: '80px 40px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#F5A623', display: 'block', marginBottom: '12px' }}>
              Instagram
            </span>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: '#2E2B26', letterSpacing: '-1px' }}>
              Siga o <em style={{ color: '#F5A623', fontWeight: 400 }}>Obah!</em>
            </h2>
            <p style={{ fontSize: '14px', color: '#8C8278', marginTop: '8px' }}>
              @obahginkeria · 85 mil seguidores
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href={'https://wa.me/?text=' + msgWpp}
              target="_blank"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#25D366', color: '#fff', padding: '12px 20px', borderRadius: '2px', fontSize: '12px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none' }}
            >
              <ShareIcon />
              Compartilhar
            </a>
            <a
              href={instaUrl}
              target="_blank"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#E1306C', color: '#fff', padding: '12px 20px', borderRadius: '2px', fontSize: '12px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none' }}
            >
              <InstaIcon />
              Ver no Instagram
            </a>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px' }}>
          {posts.map(function(post, i) {
            return <PostCard key={i} post={post} />
          })}
        </div>
      </div>
    </section>
  )
}