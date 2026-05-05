import React from 'react';

const Blog = () => {
  return (
    <div style={{ background: '#faf9f7', minHeight: '100vh', padding: '20px 10px', fontFamily: "'DM Sans', sans-serif" }}>

      {/* SECTION CSS POUR LE RESPONSIVE */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400&display=swap');
        
        .card-hover { transition: box-shadow 0.2s; }
        .card-hover:hover { box-shadow: 0 4px 24px rgba(0,0,0,0.07); }
        .btn-wa { transition: background 0.2s, transform 0.15s; }
        .btn-wa:hover { background: #128C7E !important; transform: scale(1.03); }
        .q-card { transition: box-shadow 0.2s; }
        .q-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.06); }

        /* Classes de grilles adaptatives */
        .responsive-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
        }

        .responsive-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        /* AJUSTEMENTS MOBILE (Écrans inférieurs à 600px) */
        @media (max-width: 600px) {
          .responsive-grid-3, .responsive-grid-2 {
            grid-template-columns: 1fr !important; /* Force le passage à une seule colonne */
          }
          .blog-container {
            border-radius: 0 !important;
            border: none !important;
          }
          .blog-header {
            padding: 40px 20px !important;
          }
          .blog-content {
            padding: 30px 16px !important;
          }
          .stat-item {
            border-bottom: 1px solid #eee;
          }
        }
      `}</style>

      <article className="blog-container" style={{ maxWidth: 740, margin: '0 auto', background: '#fff', borderRadius: 20, border: '0.5px solid #e5e5e5', overflow: 'hidden' }}>

        {/* EN-TÊTE */}
        <header className="blog-header" style={{ background: '#111', padding: '48px 48px 40px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -40, right: -40, width: 180, height: 180, borderRadius: '50%', background: 'rgba(184,92,56,0.12)' }} />
          <div style={{ position: 'absolute', bottom: -20, left: 60, width: 80, height: 80, borderRadius: '50%', background: 'rgba(184,92,56,0.07)' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <div style={{ height: 1, background: 'rgba(255,255,255,0.15)', flex: 1 }} />
            <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>
              Guide Recrutement · Goorco
            </span>
            <div style={{ height: 1, background: 'rgba(255,255,255,0.15)', flex: 1 }} />
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(24px, 5vw, 38px)',
            fontWeight: 900,
            lineHeight: 1.18,
            letterSpacing: '-.02em',
            margin: '0 0 16px',
            color: '#fff',
            position: 'relative'
          }}>
            Recruter en salon de coiffure et esthétique en Côte d'Ivoire :{' '}
            <em style={{ fontStyle: 'italic', color: '#E07A52' }}>attitude</em>
            {' '}ou compétences déjà acquises ?
          </h1>

          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: 'rgba(255,255,255,0.45)', fontSize: 16, margin: 0 }}>
            Le guide Goorco pour éviter les mauvais recrutements et bâtir une équipe stable
          </p>
        </header>

        <div className="blog-content" style={{ padding: '40px 48px 56px' }}>

          {/* INTRODUCTION AVEC STATS */}
          <section style={{ marginBottom: 40 }}>
            <div className="responsive-grid-3" style={{ background: '#e8e8e8', border: '0.5px solid #e8e8e8', borderRadius: 14, overflow: 'hidden', marginBottom: 28 }}>
              {[
                { n: '9/10',   label: 'salons perdent temps & argent en recrutement' },
                { n: '50+',    label: 'candidatures non qualifiées par annonce' },
                { n: '3 sem.', label: 'avant la première démission en moyenne' },
              ].map((s, i) => (
                <div key={i} className="stat-item" style={{ background: '#fff', padding: '18px 14px' }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 900, color: '#B85C38', lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: '#999', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 16, lineHeight: 1.8, margin: '0 0 14px', color: '#222' }}>
              En Côte d'Ivoire, <strong>9 salons sur 10</strong> perdent du temps et de l'argent sur le recrutement.
              Annonces postées sur Facebook, 50 candidatures non qualifiées, no-show à l'entretien, démission après 3 semaines.
            </p>
            <div style={{ background: '#FDF6F2', borderLeft: '3px solid #B85C38', padding: '20px 24px', borderRadius: '0 10px 10px 0' }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 700, color: '#7A3520', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Chez Goorco, on accompagne les salons d'Abidjan, Yopougon, Cocody et Marcory à recruter plus vite et plus juste.
              </p>
            </div>
          </section>

          <div style={{ height: 1, background: '#f0f0f0', margin: '0 0 36px' }} />

          {/* SECTION 1 - PROFILS */}
          <section style={{ marginBottom: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <span style={{ background: '#B85C38', color: '#fff', width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>1</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, margin: 0, color: '#111' }}>
                Les 2 profils d'entretien
              </h2>
            </div>

            <div className="responsive-grid-2">
              <div className="card-hover" style={{ border: '0.5px solid #f0d5cc', borderLeft: '3px solid #B85C38', padding: '22px', borderRadius: 14, background: '#FDFAF9' }}>
                <h3 style={{ fontSize: 10, fontWeight: 600, color: '#B85C38', textTransform: 'uppercase', marginBottom: 10 }}>Le profil "déjà compétent"</h3>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: '#444' }}>Opérationnel dès le jour 1.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 10 }}>
                  <span style={{ fontSize: 12, color: '#3B6D11' }}>✅ Pas besoin de former.</span>
                  <span style={{ fontSize: 12, color: '#A32D2D' }}>❌ Coûte cher.</span>
                </div>
              </div>

              <div className="card-hover" style={{ border: '0.5px solid #b5d4f4', borderLeft: '3px solid #185FA5', padding: '22px', borderRadius: 14, background: '#F5F9FE' }}>
                <h3 style={{ fontSize: 10, fontWeight: 600, color: '#185FA5', textTransform: 'uppercase', marginBottom: 10 }}>Le profil "qui apprend"</h3>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: '#444' }}>Veut progresser et s'adapter.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 10 }}>
                  <span style={{ fontSize: 12, color: '#3B6D11' }}>✅ Plus loyal.</span>
                  <span style={{ fontSize: 12, color: '#854F0B' }}>⚠️ 2-3 semaines de formation.</span>
                </div>
              </div>
            </div>
          </section>

          <div style={{ height: 1, background: '#f0f0f0', margin: '36px 0' }} />

          {/* SECTION TABLEAU RESPONSIVE */}
          <section style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, margin: '0 0 16px', color: '#111' }}>3. Grille de notation</h2>
            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', borderRadius: 14, border: '0.5px solid #e8e8e8' }}>
              <table style={{ width: '100%', minWidth: '500px', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead style={{ background: '#faf9f7' }}>
                  <tr>
                    {['Critère', 'Poids', "Ce qu'on note"].map((h, i) => (
                      <th key={i} style={{ padding: '12px 16px', fontSize: 10, fontWeight: 500, textTransform: 'uppercase', color: '#aaa', borderBottom: '0.5px solid #e8e8e8', textAlign: 'left' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { c: 'Attitude', p: '40%', d: 'Accepter une correction' },
                    { c: 'Technique', p: '30%', d: 'Test pratique sur place' },
                    { c: 'Fiabilité', p: '20%', d: 'Ponctualité' },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '0.5px solid #f0f0f0' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 500, color: '#111' }}>{row.c}</td>
                      <td style={{ padding: '13px 16px', color: '#B85C38' }}>{row.p}</td>
                      <td style={{ padding: '13px 16px', color: '#666' }}>{row.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 11, color: '#aaa', marginTop: 8, textAlign: 'right' }}>← Balayez pour voir tout le tableau sur mobile</p>
          </section>

          {/* FOOTER CTA */}
          <footer style={{ textAlign: 'center' }}>
            <button className="btn-wa" style={{
                background: '#25D366', color: '#fff', border: 'none', borderRadius: 50,
                padding: '16px 36px', fontSize: 13, fontWeight: 700, cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', gap: 10, width: '100%', justifyContent: 'center'
              }}>
              Contacte-nous sur WhatsApp
            </button>
          </footer>

        </div>
      </article>
    </div>
  );
};

export default Blog;