import { useReveal } from '../hooks/useReveal'
import styles from './About.module.css'

const stats = [
  { value: '100%', label: 'Maatwerk', desc: 'Elke oplossing op uw bedrijf afgestemd' },
  { value: '2+', label: 'Jaren actief', desc: 'Actief in Utrecht en omgeving' },
  { value: '∞', label: 'Ambitie', desc: 'Altijd op zoek naar de beste aanpak' },
]

export default function About() {
  const [textRef, textVisible] = useReveal()
  const [statsRef, statsVisible] = useReveal()

  return (
    <section id="over-ons" className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          {/* Text side */}
          <div ref={textRef} className={`${styles.text} reveal ${textVisible ? 'visible' : ''}`}>
            <span className="section-label">Over ons</span>
            <h2 className="section-title">
              Technologie die werkt<br />voor ú
            </h2>
            <p className={styles.body}>
              HAG ICT B.V. is een Utrechts bedrijf gespecialiseerd in AI-toepassingen
              voor het bedrijfsleven. Onze focus ligt op het begrijpen van hoe AI
              écht waarde toevoegt aan uw organisatie — en dat vervolgens bouwen
              ook.
            </p>
            <p className={styles.body}>
              Van AI-strategie en procesautomatisering tot maatwerksoftware met
              ingebakken intelligentie: wij zijn uw partner voor de stap van
              nieuwsgierigheid naar concrete resultaten.
            </p>

            <blockquote className={styles.callout}>
              <strong>Softwareontwikkeling verdwijnt niet — het versnelt.</strong>
              <span>
                Met AI schrijft u sneller betere code, levert u meer op in minder
                tijd en blijft u de concurrentie voor. Bedrijven die dit nu
                omarmen, bouwen een voorsprong die moeilijk in te halen is.
              </span>
            </blockquote>

            <a href="#contact" className={`btn btn-primary ${styles.cta}`}>
              Maak een afspraak
            </a>
          </div>

          {/* Stats side */}
          <div ref={statsRef} className={styles.stats}>
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`${styles.statCard} reveal ${statsVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
                <span className={styles.statDesc}>{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
