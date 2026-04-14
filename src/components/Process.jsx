import { useReveal } from '../hooks/useReveal'
import styles from './Process.module.css'

const steps = [
  {
    number: '01',
    title: 'Kennismaking',
    desc: 'In een vrijblijvend gesprek leren we uw organisatie kennen. Wat zijn uw uitdagingen, ambities en lopende processen? Geen standaard pitch — wel echte vragen.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Analyse & strategie',
    desc: 'Wij brengen in kaart waar AI de meeste waarde oplevert. Geen theoretische rapporten, maar een concreet plan met prioriteiten, haalbaarheid en verwacht rendement.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Bouwen & integreren',
    desc: 'We bouwen de oplossing — van AI-koppeling tot volledige software — en integreren die naadloos in uw bestaande systemen. Iteratief, transparant en met uw team erbij.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="8 6 2 12 8 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Oplevering & support',
    desc: 'Na livegang blijven we beschikbaar. Wij monitoren, optimaliseren en begeleiden uw team zodat de investering in AI blijft renderen — ook op de lange termijn.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function Process() {
  const [headerRef, headerVisible] = useReveal()

  return (
    <section id="werkwijze" className={styles.section}>
      <div className="container">
        <div
          ref={headerRef}
          className={`${styles.header} reveal ${headerVisible ? 'visible' : ''}`}
        >
          <span className="section-label">Onze werkwijze</span>
          <h2 className="section-title">Van idee tot werkende AI</h2>
          <p className="section-subtitle">
            Wij werken in vier heldere stappen — van kennismaking tot doorlopende
            ondersteuning. Geen vage trajecten, wel meetbare resultaten.
          </p>
        </div>

        <ol className={styles.steps}>
          {steps.map((step, i) => (
            <ProcessStep key={step.number} step={step} index={i} />
          ))}
        </ol>
      </div>
    </section>
  )
}

function ProcessStep({ step, index }) {
  const [ref, visible] = useReveal()

  return (
    <li
      ref={ref}
      className={`${styles.step} reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className={styles.stepLeft}>
        <div className={styles.stepIconWrap}>
          {step.icon}
        </div>
        {index < steps.length - 1 && (
          <div className={styles.connector} aria-hidden="true" />
        )}
      </div>
      <div className={styles.stepBody}>
        <span className={styles.stepNumber}>{step.number}</span>
        <h3 className={styles.stepTitle}>{step.title}</h3>
        <p className={styles.stepDesc}>{step.desc}</p>
      </div>
    </li>
  )
}
