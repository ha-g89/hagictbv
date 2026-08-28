import { useState } from 'react'
import styles from './IctFunction.module.css'
import { software, documentation, DOWNLOAD_BASE } from './releases'

// Hardcoded toegangswachtwoord — pas hier aan.
const ACCESS_PASSWORD = '3ict-2026'
const SESSION_KEY = 'ictfunction-auth'

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('nl-NL', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

function Gate({ onUnlock }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  function submit(e) {
    e.preventDefault()
    if (value === ACCESS_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, '1')
      onUnlock()
    } else {
      setError(true)
      setValue('')
    }
  }

  return (
    <div className={styles.gate}>
      <form className={styles.gateBox} onSubmit={submit}>
        <span className={styles.gateBracket} aria-hidden="true">&lt;/&gt;</span>
        <span className="section-label">Beveiligde omgeving</span>
        <h1 className={styles.gateTitle}>3ICT Azure Function</h1>
        <p className={styles.gateText}>
          Voer het wachtwoord in dat u van HAG ICT heeft ontvangen.
        </p>
        <label className={styles.label} htmlFor="pw">Wachtwoord</label>
        <input
          id="pw"
          type="password"
          className={`${styles.input} ${error ? styles.inputError : ''}`}
          value={value}
          autoFocus
          autoComplete="off"
          onChange={(e) => { setValue(e.target.value); setError(false) }}
        />
        {error && <span className={styles.error}>Onjuist wachtwoord.</span>}
        <button type="submit" className={`btn btn-primary ${styles.gateBtn}`}>
          Toegang
        </button>
      </form>
    </div>
  )
}

function ReleaseList({ label, title, items }) {
  return (
    <section className={styles.block}>
      <div className={styles.blockHead}>
        <span className="section-label">{label}</span>
        <h2 className={styles.blockTitle}>{title}</h2>
      </div>
      {items.length === 0 ? (
        <p className={styles.empty}>Nog geen releases beschikbaar.</p>
      ) : (
        <ol className={styles.list}>
          {items.map((r, i) => (
            <li key={r.version} className={`${styles.row} ${i === 0 ? styles.rowLatest : ''}`}>
              <div className={styles.rowMeta}>
                <span className={styles.version}>v{r.version}</span>
                {i === 0 && <span className={styles.badge}>Nieuwste</span>}
                <span className={styles.date}>{formatDate(r.date)}</span>
              </div>
              <div className={styles.rowBody}>
                <ul className={styles.notes}>
                  {r.notes.map((n) => <li key={n}>{n}</li>)}
                </ul>
                <span className={styles.file}>
                  {r.file}{r.size ? ` · ${r.size}` : ''}
                </span>
                {r.releaseNotes?.length > 0 && (
                  <details className={styles.details}>
                    <summary className={styles.summary}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Releasenotes
                    </summary>
                    <div className={styles.rn}>
                      {r.releaseNotes.map((g) => (
                        <div key={g.heading} className={styles.rnGroup}>
                          <h4 className={styles.rnHeading}>{g.heading}</h4>
                          <ul className={styles.rnList}>
                            {g.items.map((it) => <li key={it}>{it}</li>)}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </details>
                )}
              </div>
              <a
                href={r.url || DOWNLOAD_BASE + r.file}
                download={r.file}
                rel="noopener"
                className={`btn ${i === 0 ? 'btn-primary' : 'btn-outline'} ${styles.dl}`}
              >
                Download
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 2v8M4.5 6.5L8 10l3.5-3.5M3 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </li>
          ))}
        </ol>
      )}
    </section>
  )
}

export default function IctFunction() {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem(SESSION_KEY) === '1'
  )

  if (!unlocked) return <Gate onUnlock={() => setUnlocked(true)} />

  return (
    <div className={styles.page}>
      <header className={styles.top}>
        <div className={`container ${styles.topInner}`}>
          <span className={styles.logo}>
            <span className={styles.logoBracket}>&lt;/&gt;</span>HAG ICT
          </span>
          <button
            className={styles.logout}
            onClick={() => { sessionStorage.removeItem(SESSION_KEY); setUnlocked(false) }}
          >
            Uitloggen
          </button>
        </div>
      </header>

      <main className="container">
        <div className={styles.hero}>
          <span className="section-label">Downloadportaal</span>
          <h1 className={styles.title}>3ICT Azure Function</h1>
          <p className="section-subtitle">
            Actuele software-releases en bijbehorende documentatie.
            Download altijd de nieuwste versie tenzij anders afgesproken.
          </p>
        </div>

        <ReleaseList label="Software" title="Releases" items={software} />
        <ReleaseList label="Documentatie" title="Handleidingen" items={documentation} />
      </main>

      <footer className={styles.bottom}>
        <div className="container">
          <span className={styles.copy}>
            &copy; {new Date().getFullYear()} HAG ICT B.V. — Vertrouwelijk
          </span>
        </div>
      </footer>
    </div>
  )
}
