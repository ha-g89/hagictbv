import { useReveal } from '../hooks/useReveal'
import styles from './Services.module.css'

const aiPoints = [
  { title: 'AI-strategie & advies',         desc: 'Wij bepalen samen waar AI in uw organisatie de meeste waarde oplevert, concreet, haalbaar en zonder buzzwords.' },
  { title: 'AI in softwareontwikkeling',    desc: 'Van slimme code-assistenten tot geautomatiseerde testsuites: wij versnellen uw development-proces met AI-tooling.' },
  { title: 'Procesautomatisering',          desc: 'Terugkerende taken, documentverwerking of beslissingslogica, wij bouwen AI-oplossingen die uw team echt ontlasten.' },
  { title: 'Chatbots & kennissystemen',     desc: 'Op maat gemaakte AI-assistenten die uw interne kennis ontsluiten of klanten 24/7 te woord staan.' },
  { title: 'Predictieve analyses',          desc: 'Datagedreven inzichten die helpen bij betere beslissingen, van forecasting tot anomaliedetectie.' },
  { title: 'Integratie in bestaande systemen', desc: 'AI hoeft niet alles te vervangen. Wij koppelen het slim aan wat u al heeft.' },
]

const softwarePoints = [
  'Webapplicaties & portalen op maat',
  'Mobiele apps (iOS & Android)',
  'API-koppelingen & systeemintegratie',
]

export default function Services() {
  const [featuredRef, featuredVisible] = useReveal()
  const [supportRef, supportVisible]   = useReveal()

  return (
    <section id="diensten" className={styles.section}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.sectionNum}>01</span>
          <h2 className="section-title">AI als kern van uw bedrijf</h2>
          <p className="section-subtitle">
            Wij helpen bedrijven om AI niet als experiment te zien, maar als een
            structureel voordeel, ingebouwd in uw software en processen.
          </p>
        </div>

        {/* Featured: AI integration */}
        <article
          ref={featuredRef}
          className={`${styles.featured} reveal ${featuredVisible ? 'visible' : ''}`}
        >
          <div className={styles.featuredHead}>
            <div className={styles.featuredMeta}>
              <span className={styles.featuredTag}>Kernspecialisatie</span>
              <h3 className={styles.featuredTitle}>
                AI-integratie in bedrijfsprocessen & software
              </h3>
            </div>
            <p className={styles.featuredDesc}>
              Onze hoofdactiviteit: bedrijven begeleiden bij het zinvol inzetten van
              kunstmatige intelligentie. Dat betekent niet alleen tools leveren, maar
              begrijpen hoe uw organisatie werkt en AI daar naadloos in verweven.
            </p>
          </div>

          <div className={styles.pointsGrid}>
            {aiPoints.map((p) => (
              <div key={p.title} className={styles.point}>
                <strong className={styles.pointTitle}>{p.title}</strong>
                <span className={styles.pointDesc}>{p.desc}</span>
              </div>
            ))}
          </div>
        </article>

        {/* Supporting: Software dev */}
        <div
          ref={supportRef}
          className={`${styles.supporting} reveal ${supportVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.08s' }}
        >
          <div className={styles.supportingInner}>
            <div className={styles.supportingLeft}>
              <span className={styles.supportingTag}>Aanvullend</span>
              <h3 className={styles.supportingTitle}>Software- & app-ontwikkeling</h3>
              <p className={styles.supportingDesc}>
                Softwareontwikkeling verdwijnt niet, maar met AI gaat alles
                een stuk sneller. Wij bouwen maatwerksoftware en mobiele apps
                waarbij AI standaard meedenkt.
              </p>
            </div>
            <ul className={styles.supportingPoints}>
              {softwarePoints.map((pt) => (
                <li key={pt} className={styles.supportingPoint}>
                  <span className={styles.pointDash} aria-hidden="true">—</span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
