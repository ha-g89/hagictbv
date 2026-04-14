import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background glow */}
      <div className={styles.glow} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          AI-specialist voor bedrijfssoftware
        </div>

        <h1 className={styles.title}>
          Meer uit uw bedrijf halen{' '}
          <span className={styles.titleAccent}>met AI</span>
        </h1>

        <p className={styles.subtitle}>
          HAG ICT B.V. helpt bedrijven in Utrecht en daarbuiten om AI
          concreet in te zetten — van strategie tot werkende software.
          Geen hype, wel meetbaar resultaat.
        </p>

        <div className={styles.actions}>
          <a href="#contact" className="btn btn-primary">
            Start een gesprek
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#diensten" className="btn btn-outline">
            Bekijk onze aanpak
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint} aria-hidden="true">
        <div className={styles.scrollDot} />
      </div>
    </section>
  )
}
