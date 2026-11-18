import { useState } from 'react'
import type { PropsWithChildren } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const logoUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkrmzCiSvsvGOZPhqyFF1oxKEUGWi9oDIi3uKnAO-THjjd44cJBUfNXSpfD1qy8SBpHA4bQAKJ1DWW6G2SwM5CLyAZxcHrg-XTHIEWztgunflIVkwY-oyGkJDAHlmP2xiii6-s9BViY1fnQJehVZdbbqIm5M2Vj3HeDAAGM4ykbVqbnC2He2vWZ6wxBTOokq5jw0INc85GCOAD9w8Reuzfv5SQHj52XVyFKvq5wUtol5ih6P0hm9XWmQ'

const menuItems = [
  { to: '/', label: 'Início', icon: 'shield' },
  { to: '/quem-somos', label: 'Quem Somos', icon: 'verified_user' },
  { to: '/servicos', label: 'Serviços', icon: 'military_tech' },
  { to: '/quem-somos', label: 'Diferenciais', icon: 'hotel_class', hash: '#diferenciais' },
  { to: '/contato', label: 'Eventos & Fotos', icon: 'photo_camera' },
  { to: '/contato', label: 'Depoimentos', icon: 'rate_review' },
  { to: '/contato', label: 'FAQ', icon: 'help_center', hash: '#faq' },
  { to: '/contato', label: 'Contato', icon: 'contact_phone' },
]

export default function Layout({ children }: PropsWithChildren) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="bg-surface text-on-surface font-body-md text-body-md flex flex-col min-h-screen">
      <header className="fixed top-0 w-full z-50 pt-safe bg-[#0A0A0A]/90 backdrop-blur-xl shadow-[0_4px_20px_rgba(245,185,33,0.06)]">
        <div className="h-16 px-space-md flex items-center justify-between max-w-6xl mx-auto w-full">
          <Link to="/" className="flex items-center gap-space-sm" onClick={closeMenu}>
            <img alt="RG Vigilante" className="w-9 h-9 object-contain drop-shadow-[0_2px_8px_rgba(245,185,33,0.3)]" src={logoUrl} />
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md tracking-wider text-primary-container leading-none uppercase">RG VIGILANTE</span>
              <span className="font-label-sm text-label-sm tracking-widest text-on-surface-variant/80 uppercase">SEGURANÇA PRIVADA</span>
            </div>
          </Link>
          <div className="flex items-center gap-space-xs">
            <Link className="h-11 px-space-sm flex items-center justify-center bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider rounded hover:bg-tertiary-container transition-colors shadow-[0_0_12px_rgba(245,185,33,0.3)]" to="/contato" onClick={closeMenu}>Orçamento</Link>
            <button className="w-11 h-11 flex items-center justify-center text-primary-container hover:bg-surface-container rounded transition-colors" onClick={() => setMenuOpen(v => !v)} type="button" aria-label="Menu">
              <span className="material-symbols-outlined text-[24px]">{menuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary-container/20 to-transparent"></div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-2xl pt-20 px-space-md pb-safe flex flex-col justify-between">
          <div className="flex flex-col gap-space-xs pt-space-md max-w-6xl mx-auto w-full">
            <div className="px-space-sm py-space-xs">
              <span className="font-label-sm text-label-sm text-outline tracking-widest uppercase">MATRIZ OPERACIONAL</span>
            </div>
            <nav className="flex flex-col">
              {menuItems.map((item, idx) => {
                const active = item.to === '/' ? location.pathname === '/' : location.pathname === item.to
                return (
                  <Link
                    key={`${item.label}-${idx}`}
                    to={item.to + (item.hash ?? '')}
                    onClick={closeMenu}
                    className={`h-12 px-space-sm flex items-center gap-space-sm font-label-md text-label-md uppercase tracking-wider rounded transition-colors ${active ? 'text-primary-container bg-surface-container/60' : 'text-on-surface-variant hover:text-on-surface'}`}
                  >
                    <span className="material-symbols-outlined text-primary-container text-[20px]">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </nav>
          </div>
          <div className="pb-space-lg flex justify-between items-center px-space-sm text-outline font-label-sm text-label-sm uppercase tracking-widest max-w-6xl mx-auto w-full">
            <span>DEFESA &amp; DISCIPLINA</span>
            <span>PROTOCOLO RG-2024</span>
          </div>
        </div>
      )}

      <main className="flex flex-col relative w-full pt-16 pb-24 bg-surface">
        <div className="w-full max-w-6xl mx-auto md:px-space-md lg:px-space-lg">
          {children}
        </div>
      </main>

      <a aria-label="WhatsApp Tático RG" className="fixed bottom-24 right-4 z-40 w-12 h-12 rounded-full bg-[#141414] text-primary-container flex items-center justify-center tactical-glow shadow-[0_4px_16px_rgba(0,0,0,0.8)]" href="https://wa.me/5577999939046" target="_blank" rel="noreferrer">
        <span className="material-symbols-outlined text-[26px] text-[#22c55e]">chat</span>
      </a>

      <nav className="fixed bottom-0 w-full z-50 pb-safe bg-[#0A0A0A]/90 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary-container/20 to-transparent"></div>
        <div className="flex justify-around items-center h-16 px-space-xs max-w-6xl mx-auto">
          <BottomLink to="/" icon="home" label="Início" />
          <BottomLink to="/servicos" icon="shield" label="Serviços" />
          <BottomLink to="/quem-somos" icon="verified" label="Padrão" />
          <BottomLink to="/contato" icon="call" label="Contato" />
        </div>
      </nav>
    </div>
  )
}

function BottomLink({ to, icon, label }: { to: string; icon: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center justify-center w-16 h-11 transition-colors ${isActive ? 'text-primary-container' : 'text-on-surface-variant hover:text-on-surface'}`
      }
    >
      <span className="material-symbols-outlined text-[20px]">{icon}</span>
      <span className="font-label-sm text-label-sm uppercase tracking-wider">{label}</span>
    </NavLink>
  )
}
