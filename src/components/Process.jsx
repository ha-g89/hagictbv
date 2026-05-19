import { useReveal } from '../hooks/useReveal'
import styles from './Process.module.css'

const steps = [
  {
    number: '01',
    title: 'Kennismaking',
    desc: 'In een vrijblijvend gesprek leren we uw organisatie kennen. Wat zijn uw uitdagingen, ambities en lopende processen? Geen standaard pitch, wel echte vragen.',
  },
  {
    number: '02',
    title: 'Analyse & strategie',
    desc: 'Wij brengen in kaart waar AI de meeste waarde oplevert. Geen theoretische rapporten, maar een concreet plan met prioriteiten, haalbaarheid en verwacht rendement.',
  },
  {
    number: '03',
    title: 'Bouwen & integreren',
    desc: 'We bouwen de oplossing, van AI-koppeling tot volledige software, en integreren die naadloos in uw bestaande systemen. Iteratief, transparant en met uw team erbij.',
  },
  {
    number: '04',
    title: 'Oplevering & support',
    desc: 'Na livegang blijven we beschikbaar. Wij monitoren, optimaliseren en begeleiden uw team zodat de investering in AI blijft renderen, ook op de lange termijn.',
  },
]

function ProcessStep({ step, index }) {
  const [ref, visible] = useReveal()
  return (
    <li
      ref={ref}
      className={`${styles.step} reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <span className={styles.stepNum}>{step.number}</span>
      <h3 className={styles.stepTitle}>{step.title}</h3>
      <p className={styles.stepDesc}>{step.desc}</p>
    </li>
  )
}

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
            Vier heldere stappen, van kennismaking tot doorlopende ondersteuning.
            Geen vage trajecten, wel meetbare resultaten.
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
