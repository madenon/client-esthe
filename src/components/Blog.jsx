import { MessageCircle } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-[#faf9f7] px-3 py-6 font-sans">
      <article className="mx-auto max-w-4xl overflow-hidden rounded-[24px] border border-[#e7e7e7] bg-white shadow-sm">

        {/* HEADER */}
        <header className="relative overflow-hidden bg-[#111] px-6 py-14 md:px-12">
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[#B85C38]/10" />
          <div className="absolute bottom-0 left-20 h-20 w-20 rounded-full bg-[#B85C38]/10" />

          <div className="mb-8 flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-white/10" />

            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
              Guide Recrutement · Goorco
            </span>

            <div className="h-[1px] flex-1 bg-white/10" />
          </div>

          <h1 className="relative font-serif text-3xl font-black leading-tight tracking-[-0.03em] text-white md:text-5xl">
            Ton salon de coiffure ne grandit pas ?{" "}
            <span className="italic text-[#E07A52]">
              Le problème, c’est l’équipe,
            </span>{" "}
            pas le local
          </h1>

          <p className="mt-5 max-w-2xl font-serif text-lg italic leading-8 text-white/50">
            Le guide Goorco pour bâtir une équipe solide,
            fidèle et rentable en Côte d’Ivoire.
          </p>
        </header>

        {/* CONTENT */}
        <div className="px-5 py-10 md:px-12 md:py-14">

          {/* STATS */}
          <section className="mb-12">
            <div className="grid overflow-hidden rounded-2xl border border-[#ececec] md:grid-cols-3">
              {[
                {
                  number: "80%",
                  label: "des recrutements se font sans vrai processus",
                },
                {
                  number: "150k",
                  label: "salaires demandés avec peu d’expérience",
                },
                {
                  number: "3 sem.",
                  label: "avant un départ ou une démission",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border-b border-[#ececec] bg-white p-6 last:border-b-0 md:border-b-0 md:border-r last:md:border-r-0"
                >
                  <h3 className="font-serif text-4xl font-black text-[#B85C38]">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#777]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-[16px] leading-9 text-[#333]">
              ✂️ Ton salon est plein. Les clients affluent.
              Tu as la vision, les idées, les moyens.
              Et pourtant tu stagnes.
            </p>

            <div className="mt-7 rounded-r-2xl border-l-4 border-[#B85C38] bg-[#FDF6F2] p-6">
              <p className="font-serif text-[17px] italic leading-9 text-[#7A3520]">
                “J’ai des coiffeurs, mais pas de coiffeurs fiables,
                pros, autonomes. Je refuse des clients.
                Je repousse des projets. Je me retrouve seul à tout faire,
                et l’équipe que je rêve de construire reste un rêve.”
              </p>
            </div>

            <p className="mt-7 text-[15px] leading-9 text-[#444]">
              Ça te parle ? Normal. En Côte d’Ivoire,
              80% du recrutement se fait au bouche-à-oreille + WhatsApp.
              Zéro process, zéro filtre.
              Résultat : tu passes ta journée à éteindre des incendies
              au lieu de bâtir.
            </p>
          </section>

          <div className="mb-12 h-[1px] bg-[#f1f1f1]" />

          {/* SECTION 1 */}
          <section className="mb-14">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B85C38] text-sm font-bold text-white">
                1
              </span>

              <h2 className="font-serif text-2xl font-bold text-[#111]">
                Le vrai blocage : mentalité et formation,
                pas la main-d’œuvre
              </h2>
            </div>

            <div className="rounded-2xl border border-[#ececec] bg-white p-7">
              <p className="text-[15px] leading-9 text-[#333]">
                Le marché CI n’a pas un manque de coiffeurs.
                Il a un manque de coiffeurs qui veulent rester,
                apprendre et respecter le client.
              </p>

              <p className="mt-6 text-[15px] leading-9 text-[#333]">
                Beaucoup veulent le résultat sans passer
                par l’apprentissage.
                Ils maîtrisent 2 coupes,
                demandent 150k/mois,
                puis partent pour 20k de plus
                dès que l’occasion se présente.
              </p>

              <div className="mt-6 rounded-2xl border-l-4 border-[#B85C38] bg-[#FDF6F2] p-5">
                <p className="leading-8 font-semibold text-[#7A3520]">
                  Toi tu veux bâtir un empire.
                  Eux veulent un salaire.
                  Le mismatch est là.
                </p>
              </div>

              <p className="mt-6 text-[15px] leading-9 text-[#333]">
                Rester en mode “j’attends le coiffeur parfait”
                = rester bloqué.
                Le coiffeur parfait n’existe pas.
                Il se fabrique.
              </p>
            </div>
          </section>

          {/* SECTION 2 */}
          <section className="mb-14">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111] text-sm font-bold text-white">
                2
              </span>

              <h2 className="font-serif text-2xl font-bold text-[#111]">
                Passe de “recruter” à “former”
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">

              {/* CARD 1 */}
              <div className="rounded-2xl border border-[#f0d5cc] bg-[#FDFAF9] p-6 transition hover:shadow-xl">
                <span className="text-[11px] font-bold uppercase tracking-wide text-[#B85C38]">
                  Arrête d’attendre le profil prêt
                </span>

                <p className="mt-4 text-[14px] leading-8 text-[#444]">
                  Un senior à 180k/mois qui bouge tous les 2 mois
                  coûte plus cher qu’un junior à former.
                </p>

                <p className="mt-4 text-[14px] leading-8 text-[#444]">
                  Vise surtout :
                  2-3 ans d’expérience,
                  attitude correcte,
                  proximité du salon
                  et envie d’apprendre
                  le lissage,
                  le gel et le tissage.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="rounded-2xl border border-[#b5d4f4] bg-[#F5F9FE] p-6 transition hover:shadow-xl">
                <span className="text-[11px] font-bold uppercase tracking-wide text-[#185FA5]">
                  Crée un test pratique
                </span>

                <p className="mt-4 text-[14px] leading-8 text-[#444]">
                  Pas besoin de CV de 2 pages.
                  Fais venir la candidate
                  et teste-la directement.
                </p>

                <div className="mt-5 rounded-xl bg-white p-4 italic leading-8 text-[#185FA5]">
                  “Fais-moi un dégradé bas sur cette tête.
                  Je regarde la propreté,
                  la vitesse et la tenue du ciseau.”
                </div>

                <p className="mt-4 text-[14px] leading-8 text-[#444]">
                  Si elle refuse ou dit :
                  “je n’ai pas mon matériel”,
                  c’est mauvais signe.
                  Un pro s’adapte.
                </p>
              </div>
            </div>

            {/* ATTITUDE */}
            <div className="mt-6 rounded-2xl border border-[#ececec] bg-white p-7">
              <h3 className="mb-5 font-serif text-xl font-bold text-[#111]">
                Filtre l’attitude en 2 questions
              </h3>

              <div className="space-y-5">
                <div className="rounded-xl bg-[#faf9f7] p-5">
                  <p className="font-semibold text-[#111]">
                    “La dernière fois que le patron t’a corrigée,
                    tu as fait quoi ?”
                  </p>

                  <p className="mt-2 text-sm leading-7 text-[#666]">
                    Bon signe :
                    “J’ai écouté, j’ai refait.”
                  </p>
                </div>

                <div className="rounded-xl bg-[#faf9f7] p-5">
                  <p className="font-semibold text-[#111]">
                    “Client demande une coupe que tu connais pas,
                    tu fais quoi ?”
                  </p>

                  <p className="mt-2 text-sm leading-7 text-[#666]">
                    Bon signe :
                    “Je propose autre chose et je me renseigne.”
                  </p>
                </div>
              </div>

              <p className="mt-6 text-[15px] leading-8 text-[#333]">
                En CI, l’attitude reste.
                La technique se forme.
              </p>
            </div>
          </section>

          {/* SECTION 3 */}
          <section className="mb-14">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B85C38] text-sm font-bold text-white">
                3
              </span>

              <h2 className="font-serif text-2xl font-bold text-[#111]">
                Bâtis ton système, pas juste ton équipe
              </h2>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#ececec]">

              {[
                {
                  title: "Forme avec tes méthodes",
                  text:
                    "Documente 3 coupes phares, 1 protocole d’accueil et 1 standard d’hygiène. Même 2 pages A4 suffisent.",
                },
                {
                  title: "Attire des motivés",
                  text:
                    "Un gars motivé qui habite Yopougon vaut parfois mieux qu’une star à Marcory avec 1h30 de transport.",
                },
                {
                  title: "Crée une culture",
                  text:
                    "Récompense ponctualité, propreté et satisfaction client. Une petite prime coûte moins cher qu’un client perdu.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-6 ${
                    i !== 2 ? "border-b border-[#f1f1f1]" : ""
                  } ${i % 2 === 0 ? "bg-white" : "bg-[#faf9f7]"}`}
                >
                  <h3 className="text-lg font-semibold text-[#111]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[14px] leading-8 text-[#555]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-[15px] leading-9 text-[#333]">
              Tant que tu ne délègues pas,
              tu restes l’employé de ton salon.
            </p>
          </section>

          {/* SECTION 4 */}
          <section className="mb-14">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111] text-sm font-bold text-white">
                4
              </span>

              <h2 className="font-serif text-2xl font-bold text-[#111]">
                Ton salon devient un centre de talents
              </h2>
            </div>

            <div className="rounded-2xl border border-[#ececec] bg-white p-7">
              <p className="text-[15px] leading-9 text-[#333]">
                Les meilleurs salons de demain
                ne seront pas ceux qui attendent.
                Ce seront ceux qui forment.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Tu arrêtes de refuser des clients. Ton équipe suit.",
                  "Tu passes de gérant à dirigeant. Tu délègues l’opérationnel.",
                  "Ton salon devient une référence. Les bons profils viennent à toi.",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-xl bg-[#faf9f7] p-5"
                  >
                    <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#B85C38] text-xs font-bold text-white">
                      {index + 1}
                    </span>

                    <p className="text-[15px] leading-8 text-[#444]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-7 text-[15px] leading-9 text-[#333]">
                Ce que tu fais aujourd’hui en urgence,
                un staff formé le fait demain sans toi.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-[28px] bg-[#111] px-6 py-12 text-center md:px-12">
            <h2 className="font-serif text-3xl font-black leading-tight text-white md:text-5xl">
              Ton salon ne grandit pas à cause du local.
              <br />
              <span className="text-[#E07A52]">
                Il grandit quand ton équipe grandit.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-white/70">
              Arrête d’attendre.
              Crée ton système de recrutement + formation
              en 15 min par candidat.
              Les salons qui passent au niveau supérieur
              sont ceux qui bâtissent l’équipe
              qu’ils n’ont jamais trouvée.
            </p>

            <button className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold text-white transition hover:scale-[1.02] hover:bg-[#1ebe5d] md:w-auto">
              <MessageCircle size={18} />
              Contacte-nous sur WhatsApp
            </button>
          </section>

        </div>
      </article>
    </div>
  );
};

export default Blog;