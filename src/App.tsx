import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  {  label: 'ApplyUniNow', href: 'https://applyuninow.com/', font: 'font-comfortaa' },
  {  label: 'ApplyUniLoans', href: 'https://applyuniloans.com/', font: 'font-comfortaa' },
  {  label: 'ApplyUniHomes', href: 'https://applyunihomes.com/', font: 'font-comfortaa' },
  {  label: 'ApplyUniJobs', href: 'https://applyunijobs.com/', font: 'font-comfortaa' },
] as const

const NAV_DELAYS = [350, 450, 550, 650]

const WHATSAPP_NUMBER = '447734566688'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export function buildWhatsAppMessageUrl(text: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="5" cy="12" r="1.75" fill="currentColor" />
      <circle cx="12" cy="12" r="1.75" fill="currentColor" />
      <circle cx="19" cy="12" r="1.75" fill="currentColor" />
    </svg>
  )
}

type WhatsAppLinkProps = {
  className?: string
}

function WhatsAppLink({ className = '' }: WhatsAppLinkProps) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-btn ${className}`.trim()}
      aria-label="Contact us on WhatsApp"
    >
      <WhatsAppIcon className="whatsapp-btn-icon" />
      <span className="whatsapp-btn-text font-manrope">Whatsapp</span>
    </a>
  )
}

function NavLinks({ className = '' }: { className?: string }) {
  return (
    <>
      {NAV_ITEMS.map((item, index) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`nav-link ${item.font} ${className}`.trim()}
          style={{ animationDelay: `${NAV_DELAYS[index]}ms` }}
        >
          <span className="nav-label">{item.label}</span>
        </a>
      ))}
    </>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <div id="top" className="page">
      <main className="hero-stage">
        <div className="hero-stage__content">
          <header className="site-header">
            <a href="#top" className="logo-link" aria-label="UniFeatures home">
              <span className="logo-wordmark">UniFeatures</span>
            </a>

            <nav className="site-nav" aria-label="UniFeatures products">
              <NavLinks />
            </nav>

            <div className="header-actions">
              <button
                type="button"
                className="menu-toggle"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls="tablet-nav"
                onClick={() => setMenuOpen((open) => !open)}
              >
                <MenuIcon />
              </button>
              <WhatsAppLink className="whatsapp-btn--header" />
            </div>
          </header>

          {menuOpen && (
            <div
              className="mobile-nav-overlay"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            >
              <nav
                id="tablet-nav"
                className="mobile-nav"
                aria-label="UniFeatures products"
                onClick={(event) => event.stopPropagation()}
              >
                <NavLinks className="mobile-nav-link" />
              </nav>
            </div>
          )}

          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-content">
              <h1 id="hero-title" className="hero-title">
                <span className="hero-title--desktop">
                  Your Future, Our Commitment.
                  <br />
                  Crafting Global Upskilling journeys..
                </span>
                <span className="hero-title--mobile">
                  Your Future,
                  <br />
                  Our Commitment
                  <br />
                  Crafting Global
                  <br />
                  Upskilling journeys..
                </span>
              </h1>
            </div>

            <p className="hero-description">
              <span className="hero-description--desktop">
                Elevate your Global Networking with ApplyUniNow - Simplifying
                Appliccations, Unlocking Opportunities and Empower Graduates
                anywhere in the world.
              </span><br/>
              <br/>
              <span className="hero-description--mobile">
                Elevate your Global Networking with 
                <br />
                ApplyUniNow Simplifying Appliccations, 
                <br />
                Unlocking Opportunities & Empower 
                <br /> Graduates anywhere in the world.
              </span>
            </p>
          </section>

          <video
            className="hero-stage__video"
            aria-label="UniFeatures product preview"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260801_022931_e13cbef4-690a-42d2-b5ee-5b3b1f483c83.mp4"
              type="video/mp4"
            />
          </video>

          <nav className="mobile-products-nav" aria-label="UniFeatures products">
            <NavLinks className="mobile-product-link" />
          </nav>

          <p className="hero-copyright">
            copyright © 2026 AUNtech LTD. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
