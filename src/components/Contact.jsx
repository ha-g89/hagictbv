import { useReveal } from '../hooks/useReveal'
import styles from './Contact.module.css'

export default function Contact() {
  const [leftRef,  leftVisible]  = useReveal()
  const [rightRef, rightVisible] = useReveal()

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Contact</span>
          <h2 className="section-title">Laten we praten</h2>
          <p className="section-subtitle">
            Heeft u een idee of een vraag? Wij reageren binnen één werkdag.
          </p>
        </div>

        {/* Email hero */}
        <div className={styles.emailBlock}>
          <span className={styles.emailLabel}>E-mail</span>
          <a href="mailto:haci.cayci@hag-ict.com" className={styles.emailLink}>
            haci.cayci@hag-ict.com
          </a>
        </div>

        {/* Two-column details */}
        <div className={styles.grid}>
          {/* Contact items */}
          <div ref={leftRef} className={styles.details}>
            <ContactRow
              visible={leftVisible}
              delay={0}
              label="Telefoon"
              value="Binnenkort beschikbaar"
            />
            <ContactRow
              visible={leftVisible}
              delay={0.1}
              label="Locatie"
              value="Utrecht, Nederland"
            />
          </div>

          {/* Company card */}
          <div
            ref={rightRef}
            className={`${styles.companyBlock} reveal ${rightVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.12s' }}
          >
            <div className={styles.companyHeader}>
              <span className={styles.companyLogo}>
                <span className={styles.companyBracket}>&lt;/&gt;</span>HAG ICT
              </span>
              <span className={styles.companyTagline}>Slimme software voor moderne bedrijven</span>
            </div>
            <div className={styles.companyFields}>
              <CompanyField label="Bedrijfsnaam"     value="HAG ICT B.V." />
              <CompanyField label="Vestigingsplaats" value="Utrecht, Nederland" />
              <CompanyField label="KVK-nummer"       value="93459831" />
              <CompanyField label="BTW-nummer"       value="NL004314348B41" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ label, value, visible, delay }) {
  return (
    <div
      className={`${styles.contactRow} reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <span className={styles.rowLabel}>{label}</span>
      <span className={styles.rowValue}>{value}</span>
    </div>
  )
}

function CompanyField({ label, value }) {
  return (
    <div className={styles.field}>
      <span className={styles.fieldLabel}>{label}</span>
      <span className={styles.fieldValue}>{value}</span>
    </div>
  )
}
