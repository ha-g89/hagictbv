import { useState, useEffect, useRef } from 'react'
import styles from './Footer.module.css'

const navLinks = [
  { href: '#diensten', label: 'Diensten' },
  { href: '#over-ons', label: 'Over ons' },
  { href: '#contact', label: 'Contact' },
]

const BRACKET = '</>'
const TEXT = ' HAG ICT'
const FULL_LOGO = BRACKET + TEXT

export default function Footer() {
  const year = new Date().getFullYear()
  const logoRef = useRef(null)
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const [done, setDone] = useState(false)

  // Start typing when logo scrolls into view
  useEffect(() => {
    const el = logoRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect() } },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Type characters
  useEffect(() => {
    if (!started) return
    if (count >= FULL_LOGO.length) { setTimeout(() => setDone(true), 600); return }
    const t = setTimeout(() => setCount(c => c + 1), count < BRACKET.length ? 80 : 55)
    return () => clearTimeout(t)
  }, [started, count])

  const bracketVisible = BRACKET.slice(0, Math.min(count, BRACKET.length))
  const textVisible = TEXT.slice(0, Math.max(0, count - BRACKET.length))

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <a href="#" className={styles.logo} ref={logoRef}>
            {bracketVisible && <span className={styles.logoBracket}>{bracketVisible}</span>}
            <span>{textVisible}</span>
            {!done && started && <span className={styles.logoCursor} aria-hidden="true">|</span>}
          </a>
          <p className={styles.tagline}>
            Slimme software voor moderne bedrijven.
          </p>
        </div>

        {/* Nav */}
        <nav className={styles.nav} aria-label="Footer navigatie">
          <span className={styles.navHeading}>Navigatie</span>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className={styles.navLink}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* Contact */}
        <div className={styles.contact}>
          <span className={styles.navHeading}>Contact</span>
          <a href="mailto:haci.cayci@hag-ict.com" className={styles.navLink}>
            haci.cayci@hag-ict.com
          </a>
          <span className={styles.navLink} style={{ color: 'var(--color-text-dim)' }}>
            Utrecht, Nederland
          </span>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <span className={styles.copy}>
            © {year} HAG ICT B.V. — Alle rechten voorbehouden.
          </span>
        </div>
      </div>
    </footer>
  )
}
