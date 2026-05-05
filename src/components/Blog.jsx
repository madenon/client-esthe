
const Blog = () => {
  return (
    <div style={{ background: '#faf9f7', minHeight: '100vh', padding: '48px 16px', fontFamily: "'DM Sans', sans-serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400&display=swap');
        .card-hover { transition: box-shadow 0.2s; }
        .card-hover:hover { box-shadow: 0 4px 24px rgba(0,0,0,0.07); }
        .btn-wa { transition: background 0.2s, transform 0.15s; }
        .btn-wa:hover { background: #128C7E !important; transform: scale(1.03); }
        .q-card { transition: box-shadow 0.2s; }
        .q-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
      `}</style>

      <article style={{ maxWidth: 740, margin: '0 auto', background: '#fff', borderRadius: 20, border: '0.5px solid #e5e5e5', overflow: 'hidden' }}>

        {/* EN-TÊTE */}
        <header style={{ background: '#111', padding: '48px 48px 40px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -40, right: -40, width: 180, height: 180, borderRadius: '50%', background: 'rgba(184,92,56,0.12)' }} />
          <div style={{ position: 'absolute', bottom: -20, left: 60, width: 80, height: 80, borderRadius: '50%', background: 'rgba(184,92,56,0.07)' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <div style={{ height: 1, background: 'rgba(255,255,255,0.15)', flex: 1 }} />
            <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
              Guide Recrutement · Goorco
            </span>
            <div style={{ height: 1, background: 'rgba(255,255,255,0.15)', flex: 1 }} />
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(26px, 3.5vw, 38px)',
            fontWeight: 900,
            lineHeight: 1.18,
            letterSpacing: '-.02em',
            margin: '0 0 16px',
            color: '#fff',
          }}>
            Recruter en salon de coiffure et esthétique en Côte d'Ivoire :{' '}
            <em style={{ fontStyle: 'italic', color: '#E07A52' }}>attitude</em>
            {' '}ou compétences déjà acquises ?
          </h1>

          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: 'rgba(255,255,255,0.45)', fontSize: 16, margin: 0 }}>
            Le guide Goorco pour éviter les mauvais recrutements et bâtir une équipe stable
          </p>
        </header>

        <div style={{ padding: '40px 48px 56px' }}>

          {/* INTRODUCTION */}
          <section style={{ marginBottom: 40 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: '#e8e8e8', border: '0.5px solid #e8e8e8', borderRadius: 14, overflow: 'hidden', marginBottom: 28 }}>
              {[
                { n: '9/10',   label: 'salons perdent temps & argent en recrutement' },
                { n: '50+',    label: 'candidatures non qualifiées par annonce' },
                { n: '3 sem.', label: 'avant la première démission en moyenne' },
              ].map((s, i) => (
                <div key={i} style={{ background: '#fff', padding: '18px 14px' }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 900, color: '#B85C38', lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: '#999', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 16, lineHeight: 1.8, margin: '0 0 14px', color: '#222' }}>
              En Côte d'Ivoire, <strong>9 salons sur 10</strong> perdent du temps et de l'argent sur le recrutement.
              Annonces postées sur Facebook, 50 candidatures non qualifiées, no-show à l'entretien, démission après 3 semaines.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, fontWeight: 500, margin: '0 0 20px', color: '#222' }}>
              Le problème n'est pas le manque de coiffeuses ou d'esthéticiennes. C'est la façon de recruter.
            </p>
            <div style={{ background: '#FDF6F2', borderLeft: '3px solid #B85C38', padding: '20px 24px', borderRadius: '0 10px 10px 0' }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 700, color: '#7A3520', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Chez Goorco, on accompagne les salons d'Abidjan, Yopougon, Cocody et Marcory à recruter plus vite et plus juste.
                Et la première question à se poser est simple : "Je recrute quelqu'un qui sait déjà tout faire, ou quelqu'un qui accepte d'apprendre et de s'adapter ?"
              </p>
            </div>
          </section>

          <div style={{ height: 1, background: '#f0f0f0', margin: '0 0 36px' }} />

          {/* SECTION 1 */}
          <section style={{ marginBottom: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <span style={{ background: '#B85C38', color: '#fff', width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>1</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, margin: 0, color: '#111' }}>
                Les 2 profils qui se présentent en entretien
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div className="card-hover" style={{ border: '0.5px solid #f0d5cc', borderLeft: '3px solid #B85C38', padding: '22px', borderRadius: 14, background: '#FDFAF9' }}>
                <h3 style={{ fontSize: 10, fontWeight: 600, color: '#B85C38', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 10 }}>Le profil "déjà compétent"</h3>
                <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 14, color: '#444' }}>Il maîtrise le dégradé, le lissage brésilien, la pose d'ongles, le soin visage. Il est opérationnel dès le jour 1.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span style={{ fontSize: 12, color: '#3B6D11' }}>✅ <strong>Avantage :</strong> Pas besoin de former.</span>
                  <span style={{ fontSize: 12, color: '#A32D2D' }}>❌ <strong>Risque :</strong> Coûte cher (120k–180k F), accepte mal les corrections.</span>
                </div>
              </div>

              <div className="card-hover" style={{ border: '0.5px solid #b5d4f4', borderLeft: '3px solid #185FA5', padding: '22px', borderRadius: 14, background: '#F5F9FE' }}>
                <h3 style={{ fontSize: 10, fontWeight: 600, color: '#185FA5', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 10 }}>Le profil "qui apprend"</h3>
                <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 14, color: '#444' }}>Il a 1 à 3 ans d'expérience, maîtrise les bases, mais veut progresser. Il accepte qu'on corrige son geste.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span style={{ fontSize: 12, color: '#3B6D11' }}>✅ <strong>Avantage :</strong> Plus loyal, reste 18 à 36 mois.</span>
                  <span style={{ fontSize: 12, color: '#854F0B' }}>⚠️ <strong>Risque :</strong> 2 à 3 semaines de formation.</span>
                </div>
              </div>
            </div>

            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 700, textAlign: 'center', padding: '20px 0', borderTop: '0.5px solid #f0f0f0', borderBottom: '0.5px solid #f0f0f0', margin: '20px 0 0', color: '#111', fontSize: 15 }}>
              En CI, les salons qui durent choisissent le 2ème profil. La technique s'apprend. L'attitude, non.
            </p>
          </section>

          <div style={{ height: 1, background: '#f0f0f0', margin: '0 0 36px' }} />

          {/* SECTION 2 */}
          <section style={{ marginBottom: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
              <span style={{ background: '#B85C38', color: '#fff', width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>2</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, margin: 0, color: '#111' }}>La grille Goorco</h2>
            </div>
            <p style={{ fontSize: 14, color: '#888', marginBottom: 20 }}>Oublie le CV de 2 pages. 80% de l'info vient du test pratique et de 3 questions ciblées.</p>

            <div style={{ background: '#111', padding: '24px', borderRadius: 14, marginBottom: 16 }}>
              <h4 style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: '#E07A52', textTransform: 'uppercase', letterSpacing: '.1em', margin: '0 0 8px' }}>A. Le test pratique (10 min)</h4>
              <p style={{ fontSize: 13, fontStyle: 'italic', color: 'rgba(255,255,255,0.4)', margin: '0 0 16px' }}>"Fais-lui faire, ne lui demande pas de raconter."</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {[
                  { label: 'Coiffure',    text: "Dégradé bas sur tête d'entraînement." },
                  { label: 'Esthétique', text: 'Nettoyage de peau sur ma main.' },
                ].map((item, i) => (
                  <div key={i} style={{ background: '#1e1e1e', border: '0.5px solid #333', borderRadius: 8, padding: '12px 14px' }}>
                    <strong style={{ fontSize: 12, color: '#fff' }}>{item.label} : </strong>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: 14, fontWeight: 600, color: '#111', marginBottom: 12 }}>B. 3 questions d'attitude</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  { q: "La dernière fois que ton responsable t'a corrigée ?", g: "J'ai écouté et refait.", b: "C'était pas ma faute." },
                  { q: "Un client demande une coupe inconnue ?",              g: "Je propose une alternative.", b: "Je tente au pif." },
                  { q: "Dans 6 mois, que veux-tu savoir faire ?",            g: "Réponse précise (ex: lissage).", b: "Rien, je sais tout." },
                ].map((item, index) => (
                  <div key={index} className="q-card" style={{ padding: '14px 16px', border: '0.5px solid #ebebeb', borderRadius: 12, background: '#fff' }}>
                    <p style={{ fontWeight: 500, fontSize: 14, color: '#111', margin: '0 0 8px' }}>{index + 1}. {item.q}</p>
                    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 12, color: '#3B6D11', fontWeight: 500 }}>✔ Bon signe : {item.g}</span>
                      <span style={{ fontSize: 12, color: '#A32D2D', fontWeight: 500 }}>✖ Mauvais signe : {item.b}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div style={{ height: 1, background: '#f0f0f0', margin: '0 0 36px' }} />

          {/* SECTION 3 - TABLEAU */}
          <section style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, margin: '0 0 16px', color: '#111' }}>3. Grille de notation</h2>
            <div style={{ overflowX: 'auto', borderRadius: 14, border: '0.5px solid #e8e8e8' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead style={{ background: '#faf9f7' }}>
                  <tr>
                    {['Critère', 'Poids', "Ce qu'on note"].map((h, i) => (
                      <th key={i} style={{ padding: '12px 16px', fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.1em', color: '#aaa', borderBottom: '0.5px solid #e8e8e8', textAlign: 'left' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { c: 'Attitude',          p: '40%', w: 80, d: 'Capacité à accepter une correction' },
                    { c: 'Technique de base', p: '30%', w: 60, d: 'Test pratique sur place' },
                    { c: 'Fiabilité',         p: '20%', w: 40, d: 'Ponctualité, filtre no-show' },
                    { c: 'Fit équipe',        p: '10%', w: 20, d: 'Présentation, langage' },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '0.5px solid #f0f0f0' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 500, color: '#111' }}>{row.c}</td>
                      <td style={{ padding: '13px 16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: '#B85C38' }}>{row.p}</span>
                          <div style={{ height: 4, width: row.w, borderRadius: 2, background: '#B85C38', flexShrink: 0 }} />
                        </div>
                      </td>
                      <td style={{ padding: '13px 16px', color: '#666' }}>{row.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div style={{ height: 1, background: '#f0f0f0', margin: '0 0 36px' }} />

          {/* SECTION 4 - GOORCO ROLE */}
          <section style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, margin: '0 0 16px', color: '#111' }}>4. Le rôle de Goorco</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
              {[
                { icon: '📞', title: 'Pré-qualification', sub: 'Appel de 3 minutes' },
                { icon: '🎤', title: 'Vocal WhatsApp',    sub: 'Présentation 30s' },
                { icon: '🔍', title: 'Vérification',      sub: 'Appel anciens patrons' },
              ].map((item, i) => (
                <div key={i} style={{ background: '#faf9f7', border: '0.5px solid #e8e8e8', borderRadius: 12, padding: '18px 12px', textAlign: 'center' }}>
                  <span style={{ fontSize: 22, display: 'block', marginBottom: 8 }}>{item.icon}</span>
                  <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.08em', color: '#222', margin: '0 0 4px' }}>{item.title}</p>
                  <p style={{ fontSize: 10, color: '#aaa', textTransform: 'uppercase', letterSpacing: '.06em', margin: 0 }}>{item.sub}</p>
                </div>
              ))}
            </div>
          </section>

          {/* À RETENIR */}
          <section style={{ background: '#111', borderRadius: 16, padding: '32px', marginBottom: 40, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120, borderRadius: '50%', background: 'rgba(184,92,56,0.12)' }} />
            <h2 style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, fontWeight: 400, color: '#E07A52', textTransform: 'uppercase', letterSpacing: '.14em', margin: '0 0 16px' }}>
              À retenir
            </h2>
            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', borderLeft: '3px solid #B85C38', paddingLeft: 20, margin: 0 }}>
              Recrute sur l'attitude, forme sur la technique. En Côte d'Ivoire, un staff qui accepte d'apprendre et qui reste 18 mois vaut plus qu'un "expert" qui part au bout de 2 mois pour 20 000 F de plus.
            </p>
          </section>

          {/* FOOTER CTA */}
          <footer style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 14, color: '#888', maxWidth: 320, margin: '0 auto 24px', lineHeight: 1.6 }}>
              Tu veux recevoir la grille d'entretien Goorco en PDF 1 page à imprimer pour ton salon ?
            </p>
            <button
              className="btn-wa"
              style={{
                background: '#25D366', color: '#fff',
                border: 'none', borderRadius: 50,
                padding: '16px 36px',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13, fontWeight: 700,
                letterSpacing: '.08em', textTransform: 'uppercase',
                cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 10,
                boxShadow: '0 8px 24px rgba(37,211,102,0.25)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M11.99 0C5.37 0 0 5.373 0 12c0 2.117.555 4.1 1.523 5.827L0 24l6.337-1.497A11.908 11.908 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 11.99 0z"/>
              </svg>
              Contacte-nous sur WhatsApp
            </button>
          </footer>

        </div>
      </article>
    </div>
  );
};

export default Blog;
