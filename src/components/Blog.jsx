import  { useState } from 'react';
import { MessageCircle, ChevronDown, ChevronUp } from "lucide-react";

const Blog = () => {
  const [expandedBlog1, setExpandedBlog1] = useState(false);
  const [expandedBlog2, setExpandedBlog2] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf9f7] font-sans">
      <div className="mx-auto max-w-4xl px-3 py-6">
        
        {/* --- HEADER --- */}
        <header className="relative overflow-hidden rounded-t-[24px] bg-[#111] px-6 py-14 md:px-12 border border-[#e7e7e7] border-b-0 text-white">
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[#B85C38]/10" />
          <div className="absolute bottom-0 left-20 h-20 w-20 rounded-full bg-[#B85C38]/10" />

          <div className="mb-8 flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-white/10" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
              Discipline & Management · Goorco
            </span>
            <div className="h-[1px] flex-1 bg-white/10" />
          </div>

          <h1 className="relative font-serif text-3xl font-black leading-tight tracking-[-0.03em] md:text-5xl">
            Coiffeurs : 10 Cartons Rouges <span className="italic text-[#E07A52]">qui tuent ton salon</span> et ton salaire
          </h1>

          <p className="mt-5 max-w-2xl font-serif text-lg italic leading-8 text-white/50">
            🚨 Ici on ne flatte personne. On corrige ce qui bouffe tes revenus, ta réputation et l’avenir de ton équipe.
          </p>
        </header>

        {/* --- CONTENEUR DES DEUX BLOGS --- */}
        <div className="bg-white border border-[#e7e7e7] rounded-b-[24px] shadow-sm divide-y divide-[#f1f1f1]">
          
          {/* BLOG 1 : TON SALON NE GRANDIT PAS */}

            <section className="p-6 md:p-10">

            <img className="w-full h-[400px] md:h-[370px] object-cover rounded-2xl" src="/blimg.jpeg" alt="" />
            <h2 className="text-xl md:text-2xl font-black text-[#111] leading-tight mb-6">
              Recruter en salon de coiffure et esthétique en Côte d’Ivoire : attitude ou compétences déjà acquises ?
            </h2>
            
            <div className="text-[#444] leading-relaxed space-y-4">
              <p className="italic font-bold text-[#E07A52]">
                *Le guide Goorco pour éviter les mauvais recrutements et bâtir une équipe stable*
              </p>
              
              {!expandedBlog2 ? (
                <button 
                  onClick={() => setExpandedBlog2(true)}
                  className="flex items-center gap-2 text-[#E07A52] font-bold hover:underline"
                >
                  Lire la suite <ChevronDown size={18} />
                </button>
              ) : (
                <div className="space-y-6 pt-2">
                  <p>En Côte d’Ivoire, 9 salons sur 10 perdent du temps et de l’argent sur le recrutement. Annonces postées sur Facebook, 50 candidatures non qualifiées, no-show à l’entretien, démission après 3 semaines.</p>
                  <p>Le problème n’est pas le manque de coiffeuses ou d’esthéticiennes. C’est la façon de recruter.</p>
                  <p>Chez Goorco, on accompagne les salons d’Abidjan, Yopougon, Cocody et Marcory à recruter plus vite et plus juste. Et la première question à se poser est simple :</p>
                  <p className="font-bold underline italic">*Je recrute quelqu’un qui sait déjà tout faire, ou quelqu’un qui accepte d’apprendre et de s’adapter ?*</p>

                  <h3 className="font-black text-[#111] text-lg uppercase pt-4">1. Les 2 profils qui se présentent en entretien</h3>
                  <p><strong>*Le profil “déjà compétent”*</strong><br />
                  Il maîtrise le dégradé, le lissage brésilien, la pose d’ongles, le soin visage. Il est opérationnel dès le jour 1.<br />
                  *Avantage* : Tu gagnes du temps, pas besoin de former.<br />
                  *Risque* : Il coûte cher, 120 000 à 180 000 F CFA/mois à Abidjan pour un senior. Il part vite si un autre salon propose 20 000 F de plus. Il accepte mal les méthodes différentes des siennes.</p>

                  <p><strong>*Le profil “qui apprend et s’adapte”*</strong><br />
                  Il a 1 à 3 ans d’expérience, maîtrise les bases, mais veut progresser. Il accepte qu’on corrige son geste, qu’on lui montre ta méthode salon.<br />
                  *Avantage* : Plus loyal, moins cher, évolutif, reste 18 à 36 mois. Il devient ton meilleur élément.<br />
                  *Risque* : Il te coûte 2 à 3 semaines de formation au départ.</p>
                  <p>En CI, les salons qui durent choisissent le 2ème profil. La technique s’apprend. L’attitude, non.</p>

                  <h3 className="font-black text-[#111] text-lg uppercase pt-4">2. Ce qu’un recruteur doit regarder en entretien : la grille Goorco</h3>
                  <p>Oublie le CV de 2 pages. Dans la coiffure et l’esthétique, 80% de l’info vient du test pratique et de 3 questions ciblées.</p>
                  <p><strong>*A. Le test pratique de 10 minutes : pas de théorie*</strong><br />
                  Fais-lui faire, ne lui demande pas de raconter.<br />
                  - Coiffure : “Fais un dégradé bas sur cette tête d’entraînement”. Regarde la propreté, la vitesse, la tenue du ciseau.<br />
                  - Esthétique : “Fais un nettoyage de peau sur ma main”. Regarde l’hygiène, le geste, l’écoute.<br />
                  Si elle refuse, panique ou dit “j’ai pas mon matériel”, c’est un non. Un pro s’adapte avec ce qu’il a.</p>

                  <p><strong>*B. 3 questions pour tester l’attitude et l’adaptabilité*</strong><br />
                  Pose-les en français simple. L’objectif est de voir comment elle réagit à la correction et au changement.</p>
                  <p>
                    1. *“La dernière fois que ton responsable t’a corrigée, tu as fait quoi ?”*<br />
                    Bon signe : “J’ai écouté, j’ai refait, maintenant c’est ma méthode”.<br />
                    Mauvais signe : “C’était pas ma faute”, “Elle m’aimait pas”.
                  </p>
                  <p>
                    2. *“Un client te demande une coupe que tu connais pas. Tu fais quoi ?”*<br />
                    Bon signe : “Je dis que je vais me renseigner et je propose une alternative”.<br />
                    Mauvais signe : “Je tente au pif” ou “Je refuse”.
                  </p>
                  <p>
                    3. *“Dans 6 mois, qu’est-ce que tu veux savoir faire que tu ne sais pas faire aujourd’hui ?”*<br />
                    Bon signe : Réponse précise. “Je veux apprendre le lissage brésilien”.<br />
                    Mauvais signe : “Rien, je sais déjà tout”.
                  </p>

                  <p><strong>*C. La fiabilité : le filtre anti no-show*</strong><br />
                  Les absences et les départs à 2 semaines tuent la rentabilité d’un salon. Demande : “Tu peux venir tester demain à 9h à Yopougon ?” Une réponse claire “Oui chef” vaut mieux qu’un “Je te dis demain”.</p>

                  <h3 className="font-black text-[#111] text-lg uppercase pt-4">3. La grille de notation à utiliser pour chaque candidate</h3>
                  <p>Quand Goorco envoie un profil à un salon partenaire, on note sur 4 critères. Tu peux faire pareil :</p>
                  <div className="overflow-hidden rounded-xl border border-[#ececec]">
                    <div className="grid grid-cols-3 bg-[#faf9f7] p-4 font-bold border-b">
                      <span className="col-span-1">Critère</span>
                      <span className="col-span-1">Poids</span>
                      <span className="col-span-1">Ce qu’on note</span>
                    </div>
                    <div className="grid grid-cols-3 p-4 border-b">
                      <span className="font-bold">Technique de base</span>
                      <span>30%</span>
                      <span>Test pratique fait sur place</span>
                    </div>
                    <div className="grid grid-cols-3 p-4 border-b font-bold text-[#B85C38]">
                      <span>Attitude et apprentissage</span>
                      <span>40%</span>
                      <span>Réponses aux questions, capacité à accepter une correction</span>
                    </div>
                    <div className="grid grid-cols-3 p-4 border-b">
                      <span className="font-bold">Fiabilité et ponctualité</span>
                      <span>20%</span>
                      <span>Ponctualité, réponse au téléphone, clarté sur la dispo</span>
                    </div>
                    <div className="grid grid-cols-3 p-4">
                      <span className="font-bold">Fit équipe et salon</span>
                      <span>10%</span>
                      <span>Entente avec l’équipe, présentation, langage</span>
                    </div>
                  </div>
                  <p>Une candidate à 2/5 sur l’attitude ne passera pas, même avec une technique à 5/5. Un mauvais comportement détruit l’ambiance du salon.</p>

                  <h3 className="font-black text-[#111] text-lg uppercase pt-4">4. Le rôle de Goorco : te faire gagner du temps</h3>
                  <p>En Côte d’Ivoire, un patron de salon n’a pas de temps à perdre en tri de CV. Notre process avant de t’envoyer un profil :</p>
                  <p>
                    1. *Appel de pré-qualification 3 min* : Lieu d’habitation, salaire souhaité, dispo pour test demain.<br />
                    2. *Vocal de présentation 30s* : La candidate se présente en vocal WhatsApp. Tu entends si elle est sérieuse avant même de la voir.<br />
                    3. *Vérification rapide* : Un appel à l’ancien salon pour confirmer ponctualité et comportement.
                  </p>
                  <p>Résultat : tu reçois 2 profils max, déjà filtrés, prêts pour le test pratique.</p>

                  <div className="border-t pt-6 mt-6">
                    <p className="font-bold">*À retenir*</p>
                    <p>Recrute sur l’attitude, forme sur la technique. En Côte d’Ivoire, un staff qui accepte d’apprendre et qui reste 18 mois vaut plus qu’un “expert” qui part au bout de 2 mois pour 20 000 F de plus.</p>
                    <p>Tu veux recevoir la grille d’entretien Goorco en PDF 1 page à imprimer pour ton salon ? Contacte-nous sur WhatsApp et on te l’envoie gratuitement.</p>
                  </div>

                  <button 
                    onClick={() => setExpandedBlog2(false)}
                    className="flex items-center gap-2 text-[#777] font-bold hover:underline pt-4"
                  >
                    Réduire <ChevronUp size={18} />
                  </button>
                </div>
              )}
            </div>
          </section>
          <section className="p-6 md:p-10">
            <div className="max-w-5xl mx-auto px-6 mb-16">
  <img 
    src="/entre.png" 
    alt="" 
    className="w-full h-[500px] md:h-[610px] object-cover rounded-2xl"
  />
</div>
       
            <h2 className="text-xl md:text-2xl font-black text-[#111] leading-tight mb-6">
              Titre : Ton salon de coiffure ne grandit pas ? Le problème, c’est l’équipe, pas le local
            </h2>
            
            <div className="text-[#444] leading-relaxed space-y-4">
              <p className="text-lg font-bold">
                ✂️ Ton salon est plein. Les clients affluent. Tu as la vision, les idées, les moyens. Et pourtant tu stagnes.
              </p>
              
              {!expandedBlog1 ? (
                <button 
                  onClick={() => setExpandedBlog1(true)}
                  className="flex items-center gap-2 text-[#E07A52] font-bold hover:underline"
                >
                  Lire la suite <ChevronDown size={18} />
                </button>
              ) : (
                <div className="space-y-6 pt-2">
                  <p>Hier matin, un patron de salon m’a écrit exactement ça :</p>
                  <p className="italic bg-[#faf9f7] p-4 rounded-xl border-l-4 border-[#B85C38]">
                    “J’ai des coiffeurs, mais pas de coiffeurs fiables, pros, autonomes. Je refuse des clients. Je repousse des projets. Je me retrouve seul à tout faire, et l’équipe que je rêve de construire reste un rêve.”
                  </p>
                  <p>
                    Ça te parle ? Normal. En Côte d’Ivoire, 80% du recrutement se fait au bouche-à-oreille + WhatsApp. Zéro process, zéro filtre. Résultat : tu passes ta journée à éteindre des incendies au lieu de bâtir.
                  </p>
                  <p>Voici pourquoi, et comment inverser la tendance.</p>

                  <h3 className="font-black text-[#111] text-lg uppercase pt-4">1. Le vrai blocage : mentalité et formation, pas la main-d’œuvre</h3>
                  <p>Le marché CI n’a pas un manque de coiffeurs. Il a un manque de coiffeurs qui veulent rester, apprendre, et respecter le client.</p>
                  <p>Beaucoup veulent le résultat sans passer par l’apprentissage. Ils maîtrisent 2 coupes, demandent 150k/mois, et partent pour 20k de plus dès que l’occasion se présente. Toi tu veux bâtir un empire. Eux veulent un salaire. Le mismatch est là.</p>
                  <p>Rester en mode “j’attends le coiffeur parfait” = rester bloqué. Le coiffeur parfait n’existe pas. Il se fabrique.</p>

                  <h3 className="font-black text-[#111] text-lg uppercase pt-4">2. Passe de “recruter” à “former” : ton seul levier de croissance en CI</h3>
                  <p>Les salons qui explosent à Abidjan ne trouvent pas des stars. Ils les construisent. Voilà ce qui marche :</p>
                  <p><strong>*1. Arrête d’attendre le profil prêt à l’emploi*</strong><br />
                  Un senior à 180k/mois qui bouge tous les 2 mois te coûte plus cher qu’un junior à former. Vise 2-3 ans d’exp, maîtrise des bases, et surtout : attitude ok, habite à 20 min du salon, veut apprendre le lissage, le tissage, le gel.</p>
                  <p><strong>*2. Crée ton test pratique de 10 min*</strong><br />
                  Pas de CV de 2 pages. Fais venir la candidate et dis : “Fais-moi un dégradé bas sur cette tête. Je regarde la propreté, la vitesse, la tenue du ciseau.” Si elle refuse ou dit “j’ai pas mon matos”, out. Un pro s’adapte.</p>
                  <p><strong>*3. Filtre l’attitude en 2 questions*</strong><br />
                  - “La dernière fois que le patron t’a corrigée, tu as fait quoi ?”<br />
                  Bon signe : “J’ai écouté, j’ai refait.”<br />
                  - “Client demande une coupe que tu connais pas, tu fais quoi ?”<br />
                  Bon signe : “Je propose autre chose et je me renseigne.”<br />
                  En CI, l’attitude reste. La technique se forme.</p>

                  <h3 className="font-black text-[#111] text-lg uppercase pt-4">3. Bâtis ton système, pas juste ton équipe</h3>
                  <p>Tant que tu délègues pas, tu restes l’employé de ton salon.</p>
                  <p><strong>*Forme en interne avec tes méthodes*</strong> : Documente 3 coupes phares, 1 protocole d’accueil, 1 standard d’hygiène. Même 2 pages A4 suffisent.</p>
                  <p><strong>*Attire des motivés, pas des expérimentés*</strong> : Un gars qui veut apprendre le brésilien et qui habite Yopougon vaut 3 stars qui viennent de Marcory à 1h30 de transport.</p>
                  <p><strong>*Crée une culture d’excellence*</strong> : Récompense la ponctualité, la propreté, le client satisfait. 5k F CFA de prime par mois pour 0 retard coûte moins cher qu’un client perdu.</p>
                  <p>Le marché ne te donnera pas l’équipe que tu veux. Fabrique-la.</p>

                  <h3 className="font-black text-[#111] text-lg uppercase pt-4">4. Ton salon devient un centre de talents</h3>
                  <p>Les meilleurs salons de demain ne seront pas ceux qui attendent. Ce seront ceux qui forment.</p>
                  <p>Quand tu formes, 3 choses changent :<br />
                  1. Tu arrêtes de refuser des clients. Ton équipe suit.<br />
                  2. Tu passes de gérant à dirigeant. Tu délègues l’opérationnel.<br />
                  3. Ton salon devient une référence. Les bons profils viennent à toi.</p>
                  <p>Ce que tu fais aujourd’hui en urgence, un staff formé le fait demain sans toi.</p>

                  <div className="bg-[#111] text-white p-6 rounded-2xl my-6">
                    <p className="font-bold">*En résumé* :</p>
                    <p className="italic">Ton salon ne grandit pas à cause du local. Il grandit quand ton équipe grandit. Arrête d’attendre. Crée ton système de recrutement + formation en 15 min par candidat. Les salons qui passent au niveau supérieur en CI sont ceux qui bâtissent l’équipe qu’ils n’ont jamais trouvée.</p>
                  </div>

                  <button 
                    onClick={() => setExpandedBlog1(false)}
                    className="flex items-center gap-2 text-[#777] font-bold hover:underline pt-4"
                  >
                    Réduire <ChevronUp size={18} />
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* BLOG 2 : RECRUTER EN SALON DE COIFFURE ET ESTHÉTIQUE */}
        
        </div>

        {/* --- FOOTER --- */}
        <footer className="mt-12 rounded-[28px] bg-[#111] px-6 py-12 text-center md:px-12 border border-[#e7e7e7]">
          <h2 className="font-serif text-3xl font-black leading-tight text-white md:text-5xl">
            Ton salon grandit quand <br />
            <span className="text-[#E07A52]">ton équipe grandit.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-white/70">
            Recrute sur l’attitude, forme sur la technique. Besoin de la grille d'entretien PDF ? Contacte-nous.
          </p>
          <button className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold text-white transition hover:scale-[1.02] hover:bg-[#1ebe5d] md:w-auto">
            <MessageCircle size={18} />
            Obtenir la grille gratuite sur WhatsApp
          </button>
        </footer>

      </div>
    </div>
  );
};

export default Blog;