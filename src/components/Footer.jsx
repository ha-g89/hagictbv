import styles from './Footer.module.css'

const navLinks = [
  { href: '#diensten', label: 'Diensten' },
  { href: '#over-ons', label: 'Over ons' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <a href="#" className={styles.logo}>
            <span>HAG</span>
            <span className={styles.logoAccent}>ICT</span>
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
          <a href="mailto:info@hag-ict.com" className={styles.navLink}>
            info@hag-ict.com
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
