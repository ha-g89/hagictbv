import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Contact</span>
          <h2 className="section-title">Laten we praten</h2>
          <p className="section-subtitle">
            Heeft u een idee of een vraag? Neem contact met ons op — wij
            reageren binnen één werkdag.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Contact details */}
          <div className={styles.details}>
            <ContactItem
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="m22 6-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              }
              label="E-mail"
              value="haci.cayci@hag-ict.com"
              href="mailto:haci.cayci@hag-ict.com"
            />
            <ContactItem
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.41 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              label="Telefoon"
              value="— (binnenkort beschikbaar)"
            />
            <ContactItem
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              }
              label="Locatie"
              value="Utrecht, Nederland"
            />
          </div>

          {/* Company info card */}
          <div className={styles.companyCard}>
            <div className={styles.companyHeader}>
              <div className={styles.companyLogo}>
                <span className={styles.companyLogoBracket}>&lt;/&gt;</span>
                <span>HAG ICT</span>
              </div>
              <span className={styles.companyTagline}>
                Slimme software voor moderne bedrijven
              </span>
            </div>
            <div className={styles.companyDivider} />
            <div className={styles.companyFields}>
              <CompanyField label="Bedrijfsnaam" value="HAG ICT B.V." />
              <CompanyField label="Vestigingsplaats" value="Utrecht, Nederland" />
              <CompanyField label="KVK-nummer" value="93459831" />
              <CompanyField label="BTW-nummer" value="NL004314348B41" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({ icon, label, value, href }) {
  return (
    <div className={styles.contactItem}>
      <div className={styles.contactIcon}>{icon}</div>
      <div>
        <span className={styles.contactLabel}>{label}</span>
        {href ? (
          <a href={href} className={styles.contactValue + ' ' + styles.contactLink}>
            {value}
          </a>
        ) : (
          <span className={styles.contactValue}>{value}</span>
        )}
      </div>
    </div>
  )
}

function CompanyField({ label, value }) {
  return (
    <div className={styles.companyField}>
      <span className={styles.fieldLabel}>{label}</span>
      <span className={styles.fieldValue}>{value}</span>
    </div>
  )
}
