import { useReveal } from '../hooks/useReveal'
import styles from './About.module.css'

const stats = [
  { value: '100%', label: 'Maatwerk',      desc: 'Elke oplossing op uw bedrijf afgestemd' },
  { value: '2+',   label: 'Jaren actief',  desc: 'Actief in Utrecht en omgeving' },
  { value: '∞', label: 'Ambitie',     desc: 'Altijd op zoek naar de beste aanpak' },
]

function StatItem({ stat, index }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={`${styles.stat} reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <span className={styles.statValue}>{stat.value}</span>
      <div className={styles.statInfo}>
        <span className={styles.statLabel}>{stat.label}</span>
        <span className={styles.statDesc}>{stat.desc}</span>
      </div>
    </div>
  )
}

export default function About() {
  const [textRef, textVisible] = useReveal()

  return (
    <section id="over-ons" className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          {/* Text side */}
          <div ref={textRef} className={`${styles.textCol} reveal ${textVisible ? 'visible' : ''}`}>
            <span className="section-label">Over ons</span>
            <h2 className="section-title">
              Technologie die werkt voor u
            </h2>
            <p className={styles.body}>
              HAG ICT B.V. is een Utrechts bedrijf gespecialiseerd in AI-toepassingen
              voor het bedrijfsleven. Onze focus ligt op het begrijpen van hoe AI
              waarde toevoegt aan uw organisatie, en dat vervolgens bouwen ook.
            </p>
            <p className={styles.body}>
              Van AI-strategie en procesautomatisering tot maatwerksoftware met
              ingebakken intelligentie: wij zijn uw partner voor de stap van
              nieuwsgierigheid naar concrete resultaten.
            </p>

            <blockquote className={styles.quote}>
              <span className={styles.quoteChar} aria-hidden="true">"</span>
              <p className={styles.quoteMain}>
                Softwareontwikkeling verdwijnt niet. Het versnelt.
              </p>
              <p className={styles.quoteSub}>
                Met AI schrijft u sneller betere code, levert u meer op in
                minder tijd en blijft u de concurrentie voor. Bedrijven die
                dit nu omarmen, bouwen een voorsprong die moeilijk in te halen is.
              </p>
            </blockquote>

            <a href="#contact" className={`btn btn-primary ${styles.cta}`}>
              Maak een afspraak
            </a>
          </div>

          {/* Stats side */}
          <div className={styles.statsCol}>
            {stats.map((s, i) => (
              <StatItem key={s.label} stat={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
