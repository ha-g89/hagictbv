import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

const PLAIN  = 'Meer uit uw bedrijf halen '
const ACCENT = 'met AI'
const FULL   = PLAIN + ACCENT

function nextDelay(i) {
  const char = FULL[i] ?? ''
  if (char === ' ') return 55
  if (i === PLAIN.length) return 130
  return 36 + Math.random() * 28
}

export default function Hero() {
  const [count, setCount]  = useState(0)
  const [done, setDone]    = useState(false)

  useEffect(() => {
    if (count >= FULL.length) {
      const t = setTimeout(() => setDone(true), 900)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setCount((c) => c + 1), nextDelay(count))
    return () => clearTimeout(t)
  }, [count])

  const plainVisible  = PLAIN.slice(0, Math.min(count, PLAIN.length))
  const accentVisible = ACCENT.slice(0, Math.max(0, count - PLAIN.length))
  const typing        = count < FULL.length

  return (
    <section className={styles.hero}>
      {/* Right decorative panel */}
      <div className={styles.panel} aria-hidden="true">
        <span className={styles.panelMark}>&lt;/&gt;</span>
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          {/* Badge */}
          <div className={styles.badge}>
            AI-specialist voor bedrijfssoftware
          </div>

          {/* Headline */}
          <h1 className={styles.title}>
            <span className={styles.prompt} aria-hidden="true">{'>'}&nbsp;</span>
            {plainVisible}
            {accentVisible && (
              <span className={styles.titleAccent}>{accentVisible}</span>
            )}
            <span
              className={`${styles.cursor} ${done ? styles.cursorDone : ''} ${!typing ? styles.cursorBlink : ''}`}
              aria-hidden="true"
            >|</span>
          </h1>

          {/* Subtitle */}
          <p className={`${styles.subtitle} ${done ? styles.fadeIn : styles.invisible}`}>
            HAG ICT B.V. helpt bedrijven in Utrecht en daarbuiten om AI
            concreet in te zetten, van strategie tot werkende software.
            Geen hype, wel meetbaar resultaat.
          </p>

          {/* CTAs */}
          <div
            className={`${styles.actions} ${done ? styles.fadeIn : styles.invisible}`}
            style={{ animationDelay: '0.15s' }}
          >
            <a href="#contact" className="btn btn-primary">
              Start een gesprek
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#diensten" className="btn btn-outline">
              Bekijk onze aanpak
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className={`${styles.scrollHint} ${done ? styles.fadeIn : styles.invisible}`}
        style={{ animationDelay: '0.35s' }}
        aria-hidden="true"
      >
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
