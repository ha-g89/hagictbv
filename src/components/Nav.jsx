import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const links = [
  { href: '#diensten', label: 'Diensten' },
  { href: '#over-ons', label: 'Over ons' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#" className={styles.logo}>
          <span className={styles.logoBracket}>&lt;/&gt;</span>
          <span className={styles.logoMark}>HAG ICT</span>
        </a>

        {/* Desktop links */}
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

        {/* Mobile burger */}
        <button
          className={styles.burger}
          aria-label="Menu openen"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? styles.burgerLineTop : ''} />
          <span className={open ? styles.burgerLineMid : ''} />
          <span className={open ? styles.burgerLineBot : ''} />
        </button>
      </div>

      {/* Mobile menu */}
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
