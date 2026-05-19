import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const links = [
  { href: '#diensten',   label: 'Diensten' },
  { href: '#werkwijze',  label: 'Werkwijze' },
  { href: '#over-ons',   label: 'Over ons' },
  { href: '#contact',    label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoBracket}>&lt;/&gt;</span>
          <span className={styles.logoMark}>HAG ICT</span>
        </a>

        <nav className={styles.links}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className={`btn btn-primary ${styles.cta}`}>
            Neem contact op
          </a>
        </nav>

        <button
          className={styles.burger}
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? styles.lineTop : ''} />
          <span className={open ? styles.lineMid : ''} />
          <span className={open ? styles.lineBot : ''} />
        </button>
      </div>

      {open && (
        <div className={styles.mobileMenu}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`btn btn-primary ${styles.mobileCta}`}
            onClick={() => setOpen(false)}
          >
            Neem contact op
          </a>
        </div>
      )}
    </header>
  )
}
