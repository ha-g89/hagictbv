import { useReveal } from '../hooks/useReveal'
import styles from './AiCapabilities.module.css'

const capabilities = [
  {
    level: 'automatisering',
    title: 'Geautomatiseerde feature-ontwikkeling',
    desc: 'AI schrijft, refactort en documenteert code op basis van uw specificaties. Nieuwe functies die vroeger dagen kostten, zijn nu klaar in uren. Uw developers focussen op architectuur; de repetitieve uitwerking neemt AI van hen over.',
  },
  {
    level: 'automatisering',
    title: 'Geautomatiseerd testen',
    desc: 'AI genereert volledige testsuites, detecteert regressies en valideert gedrag na elke wijziging. Van unit-tests tot end-to-end scenario\'s, minder handwerk, snellere doorlooptijden en meer vertrouwen bij elke release.',
  },
  {
    level: 'intelligentie',
    title: 'Slimme procesautomatisering',
    desc: 'Van documentverwerking en factuurherkenning tot complexe goedkeuringsflows. AI neemt terugkerende handelingen over en schakelt pas in bij uitzonderingen. Snellere doorlooptijden, minder fouten, meer focus.',
  },
  {
    level: 'intelligentie',
    title: 'Beslissingsondersteuning',
    desc: 'Realtime inzichten, voorspellingen en aanbevelingen gebaseerd op uw eigen data. AI signaleert patronen die voor een mens onzichtbaar blijven en geeft uw team de informatie om sneller en zelfverzekerder te besluiten.',
  },
  {
    level: 'autonomie',
    title: 'Autonoom modelbeheer',
    desc: 'AI-modellen die zichzelf monitoren, bijsturen en optimaliseren op basis van nieuwe data en gebruikersfeedback. Automatische A/B-tests, driftdetectie en rollback-mechanismen zorgen dat uw systemen scherp blijven.',
  },
  {
    level: 'autonomie',
    title: 'Zelfstandige AI-agenten',
    desc: 'Agenten die zelfstandig plannen opstellen, taken uitvoeren en bijsturen op basis van het resultaat. Denk aan een agent die zelfstandig marktinformatie verzamelt, rapporten opstelt en vervolgacties initieert.',
  },
]

const levels = [
  { key: 'automatisering', label: 'Automatisering' },
  { key: 'intelligentie',  label: 'Intelligentie' },
  { key: 'autonomie',      label: 'Autonomie' },
]

function CapabilityEntry({ cap, globalIndex }) {
  const [ref, visible] = useReveal()
  return (
    <article
      ref={ref}
      className={`${styles.entry} reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${(globalIndex % 2) * 0.1}s` }}
    >
      <span className={styles.entryNum}>{String(globalIndex + 1).padStart(2, '0')}</span>
      <h3 className={styles.entryTitle}>{cap.title}</h3>
      <p className={styles.entryDesc}>{cap.desc}</p>
    </article>
  )
}

function LevelGroup({ level, caps, startIndex }) {
  const [divRef, divVisible] = useReveal()

  return (
    <div className={styles.levelGroup}>
      <div
        ref={divRef}
        className={`${styles.levelDivider} reveal ${divVisible ? 'visible' : ''}`}
      >
        <span className={`${styles.levelLabel} ${styles[`label_${level.key}`]}`}>
          {level.label}
        </span>
        <div className={styles.levelLine} />
      </div>
      <div className={styles.entriesGrid}>
        {caps.map((cap, i) => (
          <CapabilityEntry key={cap.title} cap={cap} globalIndex={startIndex + i} />
        ))}
      </div>
    </div>
  )
}

export default function AiCapabilities() {
  const [headerRef, headerVisible] = useReveal()

  let startIndex = 0

  return (
    <section id="ai-toepassingen" className={styles.section}>
      <div className="container">
        <div
          ref={headerRef}
          className={`${styles.header} reveal ${headerVisible ? 'visible' : ''}`}
        >
          <span className="section-label">Wat AI voor u doet</span>
          <h2 className="section-title">Van automatisering tot autonomie</h2>
          <p className="section-subtitle">
            AI is geen enkelvoudige technologie. Het is een spectrum. Van eenvoudige
            taakautomatisering tot systemen die zelfstandig beslissingen nemen en
            zichzelf continu verbeteren.
          </p>
        </div>

        {levels.map((level) => {
          const caps = capabilities.filter((c) => c.level === level.key)
          const group = (
            <LevelGroup
              key={level.key}
              level={level}
              caps={caps}
              startIndex={startIndex}
            />
          )
          startIndex += caps.length
          return group
        })}
      </div>
    </section>
  )
}
