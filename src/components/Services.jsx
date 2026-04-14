import styles from './Services.module.css'

const aiPoints = [
  { title: 'AI-strategie & advies', desc: 'Wij bepalen samen waar AI in uw organisatie de meeste waarde oplevert — concreet, haalbaar en zonder buzzwords.' },
  { title: 'AI in softwareontwikkeling', desc: 'Van slimme code-assistenten tot geautomatiseerde testsuites: wij versnellen uw development-proces met AI-tooling.' },
  { title: 'Procesautomatisering', desc: 'Terugkerende taken, documentverwerking of beslissingslogica — wij bouwen AI-oplossingen die uw team echt ontlasten.' },
  { title: 'Chatbots & kennissystemen', desc: 'Op maat gemaakte AI-assistenten die uw interne kennis ontsluiten of klanten 24/7 te woord staan.' },
  { title: 'Predictieve analyses', desc: 'Datagedreven inzichten die helpen bij betere beslissingen, van forecasting tot anomaliedetectie.' },
  { title: 'Integratie in bestaande systemen', desc: 'AI hoeft niet alles te vervangen. Wij koppelen het slim aan wat u al heeft.' },
]

export default function Services() {
  return (
    <section id="diensten" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Onze aanpak</span>
          <h2 className="section-title">AI als kern van uw bedrijf</h2>
          <p className="section-subtitle">
            Wij helpen bedrijven om AI niet als experiment te zien, maar als een
            structureel voordeel — ingebouwd in uw software en processen.
          </p>
        </div>

        {/* Featured AI card */}
        <article className={styles.featured}>
          <div className={styles.featuredTop}>
            <div className={styles.featuredLeft}>
              <div className={styles.featuredIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className={styles.featuredLabel}>Kernspecialisatie</span>
              <h3 className={styles.featuredTitle}>
                AI-integratie in bedrijfsprocessen & software
              </h3>
              <p className={styles.featuredDesc}>
                Onze hoofdactiviteit: bedrijven begeleiden bij het zinvol inzetten van
                kunstmatige intelligentie. Dat betekent niet alleen tools leveren, maar
                begrijpen hoe uw organisatie werkt — en AI daar naadloos in verweven.
              </p>
            </div>
          </div>
          <div className={styles.featuredGrid}>
            {aiPoints.map((p) => (
              <div key={p.title} className={styles.featuredPoint}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <strong>{p.title}</strong>
                  <span>{p.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* Supporting service */}
        <div className={styles.supporting}>
          <span className={styles.supportingLabel}>Aanvullend</span>
          <article className={styles.card}>
            <div className={styles.cardIcon}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <polyline points="16 18 22 12 16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="8 6 2 12 8 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Software- & app-ontwikkeling</h3>
            <p className={styles.cardDesc}>
              Softwareontwikkeling verdwijnt niet — maar met AI gaat alles
              wél een stuk sneller. Wij bouwen maatwerksoftware en mobiele apps
              waarbij AI standaard meedenkt: van slimmere code tot kortere
              doorlooptijden. Gebruik die snelheid in uw voordeel.
            </p>
            <ul className={styles.cardPoints}>
              {[
                'Webapplicaties & portalen op maat',
                'Mobiele apps (iOS & Android)',
                'API-koppelingen & systeemintegratie',
              ].map((pt) => (
                <li key={pt} className={styles.cardPoint}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {pt}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
