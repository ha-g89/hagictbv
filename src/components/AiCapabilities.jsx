import { useReveal } from '../hooks/useReveal'
import styles from './AiCapabilities.module.css'

const capabilities = [
  {
    level: 'automatisering',
    levelLabel: 'Automatisering',
    title: 'Geautomatiseerde feature-ontwikkeling',
    desc: 'AI schrijft, refactort en documenteert code op basis van uw specificaties. Nieuwe functies die vroeger dagen kostten, zijn nu klaar in uren — inclusief nette commit-berichten en gedocumenteerde keuzes. Uw developers focussen op architectuur; de repetitieve uitwerking neemt AI van hen over.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="8 6 2 12 8 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3"/>
      </svg>
    ),
  },
  {
    level: 'automatisering',
    levelLabel: 'Automatisering',
    title: 'Geautomatiseerd testen',
    desc: 'AI genereert volledige testsuites, detecteert regressies en valideert gedrag na elke wijziging. Van unit-tests tot end-to-end scenario\'s — minder handwerk, snellere doorlooptijden en meer vertrouwen bij elke release. Bugs worden gevonden vóórdat ze de eindgebruiker bereiken.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    level: 'intelligentie',
    levelLabel: 'Intelligentie',
    title: 'Slimme procesautomatisering',
    desc: 'Van documentverwerking en factuurherkenning tot complexe goedkeuringsflows — AI neemt terugkerende handelingen over en schakelt pas in bij uitzonderingen. Het resultaat: snellere doorlooptijden, minder fouten en medewerkers die zich richten op werk dat écht waarde toevoegt.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 8h4M7 11h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="16" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    level: 'intelligentie',
    levelLabel: 'Intelligentie',
    title: 'Beslissingsondersteuning',
    desc: 'Realtime inzichten, voorspellingen en aanbevelingen gebaseerd op uw eigen data. Of het nu gaat om klantgedrag, voorraadplanning of risicoanalyse — AI signaleert patronen die voor een mens onzichtbaar blijven en geeft uw team de informatie om sneller en zelfverzekerder te besluiten.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    level: 'autonomie',
    levelLabel: 'Autonomie',
    title: 'Autonoom modelbeheer',
    desc: 'AI-modellen die zichzelf monitoren, bijsturen en optimaliseren op basis van nieuwe data en gebruikersfeedback. Automatische A/B-tests tussen modelversies, driftdetectie en rollback-mechanismen zorgen ervoor dat uw AI-systemen scherp blijven — zonder continue handmatige ingrepen.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    level: 'autonomie',
    levelLabel: 'Autonomie',
    title: 'Zelfstandige AI-agenten',
    desc: 'Agenten die zelfstandig plannen opstellen, taken uitvoeren en bijsturen op basis van het resultaat — 24/7, zonder menselijke tussenkomst voor elke stap. Denk aan een agent die zelfstandig marktinformatie verzamelt, rapporten opstelt en vervolgacties initieert op basis van vooraf vastgestelde doelen.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

function CapabilityCard({ cap, index }) {
  const [ref, visible] = useReveal()

  return (
    <article
      ref={ref}
      className={`${styles.card} ${styles[`level_${cap.level}`]} reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index % 2) * 0.1 + Math.floor(index / 2) * 0.08}s` }}
    >
      <div className={styles.cardTop}>
        <div className={styles.iconWrap}>{cap.icon}</div>
        <span className={`${styles.badge} ${styles[`badge_${cap.level}`]}`}>
          {cap.levelLabel}
        </span>
      </div>
      <h3 className={styles.cardTitle}>{cap.title}</h3>
      <p className={styles.cardDesc}>{cap.desc}</p>
    </article>
  )
}

export default function AiCapabilities() {
  const [headerRef, headerVisible] = useReveal()
  const [spectrumRef, spectrumVisible] = useReveal()

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
            AI is geen enkelvoudige technologie — het is een spectrum. Van eenvoudige
            taakautomatisering tot systemen die zelfstandig beslissingen nemen en
            zichzelf continu verbeteren. Hieronder ziet u waar AI vandaag al concreet
            waarde levert.
          </p>
        </div>

        {/* Spectrum indicator */}
        <div
          ref={spectrumRef}
          className={`${styles.spectrum} reveal ${spectrumVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.1s' }}
          aria-hidden="true"
        >
          <div className={styles.spectrumBar}>
            <div className={styles.spectrumFill} />
          </div>
          <div className={styles.spectrumLabels}>
            <span>Automatisering</span>
            <span>Intelligentie</span>
            <span>Autonomie</span>
          </div>
        </div>

        {/* Capabilities grid */}
        <div className={styles.grid}>
          {capabilities.map((cap, i) => (
            <CapabilityCard key={cap.title} cap={cap} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
