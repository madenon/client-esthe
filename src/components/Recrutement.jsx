import { Briefcase, MapPin, Clock, UserCheck, Banknote, Gift, CheckCircle2 } from 'lucide-react';

const OFFRES_EMPLOI = [
  // ... vos offres précédentes
  {
    id: 19,
    nomOffre: "Vendeuse Conseil Cosmétique",
    localisation: "Plateau, Galerie Marchande",
    ageExige: "20 - 30 ans",
    experience: "1 an minimum",
    salaire: "95.000 FCFA",
    remunerationDetail: "Salaire fixe + commissions sur les ventes",
    description: "Boutique de luxe recherche une conseillère passionnée par l'univers de la beauté pour orienter une clientèle exigeante.",
    pointsCles: ["Excellente présentation", "Force de persuasion", "Maîtrise du maquillage"],
    avantages: [
      "Cadre de travail luxueux",
      "Formation aux produits offerte",
      "Réductions sur la gamme cosmétique",
      "Tenue de travail fournie"
    ]
  },
  {
    id: 20,
    nomOffre: "Cuisinier de Grillades",
    localisation: "Riviera 2, Espace Gastronomique",
    ageExige: "25 - 45 ans",
    experience: "3 ans minimum",
    salaire: "120.000 FCFA",
    description: "Expert en braise et assaisonnements locaux pour un restaurant spécialisé dans les poissons et poulets braisés.",
    pointsCles: ["Rapidité sous pression", "Hygiène irréprochable", "Sens du goût"],
    avantages: [
      "Repas de service inclus",
      "Équipement de cuisine moderne",
      "Primes de fin d'année",
      "Cadre dynamique"
    ]
  },
  {
    id: 21,
    nomOffre: "Hôtesse d'Accueil",
    localisation: "Cocody, Cabinet Médical",
    ageExige: "21 - 28 ans",
    experience: "Débutante acceptée",
    salaire: "85.000 FCFA",
    remunerationDetail: "Salaire fixe + assurance santé",
    description: "Accueil des patients, gestion des appels et prise de rendez-vous pour un cabinet dentaire privé.",
    pointsCles: ["Sourire permanent", "Bonne élocution", "Maîtrise de l'outil informatique"],
    avantages: [
      "Horaires stables (8h-17h)",
      "Environnement calme et professionnel",
      "Assurance maladie prise en charge",
      "Transport remboursé à 50%"
    ]
  },
  {
    id: 22,
    nomOffre: "Livreur à Moto Professionnel",
    localisation: "Marcory Zone 4",
    ageExige: "22 - 35 ans",
    experience: "2 ans minimum",
    salaire: "75.000 FCFA",
    remunerationDetail: "Salaire fixe + bonus par livraison réussie",
    description: "Livraison de colis fragiles et documents confidentiels pour une agence de logistique urbaine.",
    pointsCles: ["Permis de conduire valide", "Connaissance parfaite de la ville", "Ponctualité"],
    avantages: [
      "Moto de service fournie",
      "Dotation carburant hebdomadaire",
      "Crédit de communication offert",
      "Équipement de sécurité complet"
    ]
  },
  {
    id: 23,
    nomOffre: "Agent de Sécurité",
    localisation: "Yopougon, Zone Industrielle",
    ageExige: "25 - 45 ans",
    experience: "1 an minimum",
    salaire: "90.000 FCFA",
    remunerationDetail: "Salaire fixe + primes de nuit",
    description: "Surveillance d'un entrepôt de stockage. Contrôle des accès et rondes régulières.",
    pointsCles: ["Bonne condition physique", "Intégrité absolue", "Vigilance"],
    avantages: [
      "Uniforme et matériel fournis",
      "Formation aux premiers secours",
      "Prime de panier pour la nuit",
      "Stabilité d'emploi"
    ]
  },
  {
    id: 24,
    nomOffre: "Prothésiste Ongulaire",
    localisation: "Riviera Palmeraie",
    ageExige: "18 - 35 ans",
    experience: "1 an minimum",
    salaire: "70.000 FCFA",
    remunerationDetail: "Salaire de base + 20% de commission sur chaque cliente",
    description: "Pose de vernis permanent, gel, résine et nail art pour un salon de beauté spécialisé.",
    pointsCles: ["Créativité et minutie", "Sens de l'esthétique", "Rapidité"],
    avantages: [
      "Matériel de pose haut de gamme",
      "Ambiance conviviale",
      "Clientèle déjà établie",
      "Formation aux nouvelles techniques"
    ]
  },
  {
    id: 25,
    nomOffre: "Chauffeur de Taxi (Compteur)",
    localisation: "Abidjan (Toute zone)",
    ageExige: "30 - 50 ans",
    experience: "5 ans minimum",
    salaire: "Recette Journalière",
    remunerationDetail: "Rémunération basée sur le surplus de la recette fixée",
    description: "Recherche chauffeur sérieux pour l'exploitation d'un véhicule Toyota en parfait état.",
    pointsCles: ["Permis de conduire BCDE", "Grande discrétion", "Entretien du véhicule"],
    avantages: [
      "Véhicule climatisé et bien entretenu",
      "Prise en charge des réparations majeures",
      "Assurance à jour",
      "Liberté d'organisation"
    ]
  },
  {
    id: 26,
    nomOffre: "Vendeur Rayon Électroménager",
    localisation: "Koumassi, Grand Magasin",
    ageExige: "22 - 35 ans",
    experience: "1 an minimum",
    salaire: "110.000 FCFA",
    remunerationDetail: "Fixe + challenges mensuels sur les ventes",
    description: "Vente et démonstration d'appareils électroménagers (TV, Frigo, Split) pour une grande enseigne.",
    pointsCles: ["Connaissances techniques", "Aisance orale", "Esprit d'équipe"],
    avantages: [
      "Primes sur objectifs atteints",
      "Sécurité sociale (CNPS)",
      "Possibilité de promotion interne",
      "Cadre climatisé"
    ]
  },
  {
    id: 27,
    nomOffre: "Agent d'Entretien (H/F)",
    localisation: "Cocody Ambassades",
    ageExige: "25 - 45 ans",
    experience: "Débutant accepté",
    salaire: "60.000 FCFA",
    remunerationDetail: "Salaire fixe net",
    description: "Nettoyage et entretien quotidien des bureaux et espaces communs d'une institution.",
    pointsCles: ["Discrétion totale", "Efficacité", "Sérieux"],
    avantages: [
      "Produits d'entretien fournis",
      "Horaires flexibles",
      "Contrat stable",
      "Environnement de travail sécurisé"
    ]
  },
  {
    id: 28,
    nomOffre: "Barmaid / Serveuse",
    localisation: "Marcory Zone 4, Lounge Bar",
    ageExige: "20 - 30 ans",
    experience: "1 an minimum",
    salaire: "80.000 FCFA",
    remunerationDetail: "Fixe + pourboires conservés à 100%",
    description: "Service en salle et préparation de cocktails simples dans un cadre chic et branché.",
    pointsCles: ["Dynamisme", "Excellente présentation", "Politesse"],
    avantages: [
      "Service de transport raccompagnement la nuit",
      "Tenue chic fournie",
      "Repas du soir offert",
      "Cadre de travail VIP"
    ]
  }
];

const Recrutement = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      <div className="bg-[#0f172a] text-white py-12 px-6 text-center">
        <h2 className="text-blue-500 font-bold text-xs uppercase tracking-[0.2em] mb-2">Espace Recrutement</h2>
        <h1 className="text-3xl font-black uppercase italic">
          Gestion des <span className="text-blue-500">Offres</span>
        </h1>
      </div>

      <div className="max-w-6xl mx-auto -mt-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {OFFRES_EMPLOI.map((offre) => (
            <div key={offre.id} className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col overflow-hidden">
              
              {/* Header de l'offre */}
              <div className="p-8 pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-blue-50 text-blue-600 p-3 rounded-2xl">
                    <Briefcase size={24} />
                  </div>
                  <span className="bg-green-100 text-green-700 text-[10px] font-black px-3 py-1 rounded-full uppercase">
                    Ouvert
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-800 uppercase leading-tight mb-2">
                  {offre.nomOffre}
                </h3>
                <div className="flex items-center gap-2 text-slate-500 text-sm italic font-medium">
                  <MapPin size={16} className="text-blue-500" />
                  {offre.localisation}
                </div>
              </div>

              {/* Badges Techniques */}
              <div className="grid grid-cols-2 border-y border-slate-50 bg-slate-50/30">
                <div className="p-4 border-r border-slate-100 text-center">
                  <p className="text-[10px] text-slate-400 uppercase font-black mb-1">Âge requis</p>
                  <div className="flex items-center justify-center gap-2 text-slate-700 font-bold">
                    <UserCheck size={16} className="text-blue-400" />
                    {offre.ageExige}
                  </div>
                </div>
                <div className="p-4 text-center">
                  <p className="text-[10px] text-slate-400 uppercase font-black mb-1">Expérience</p>
                  <div className="flex items-center justify-center gap-2 text-slate-700 font-bold">
                    <Clock size={16} className="text-blue-400" />
                    {offre.experience}
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6 flex-grow">
                {/* Description */}
                <div>
                  <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2">Description</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {offre.description}
                  </p>
                </div>

                {/* Section Avantages 🎁 */}
                {offre.avantages && (
                  <div className="bg-blue-50/50 rounded-3xl p-5">
                    <h4 className="text-[10px] font-black text-blue-700 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <Gift size={14} /> Ce que nous offrons
                    </h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {offre.avantages.map((adv, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[11px] text-slate-700 font-bold">
                          <CheckCircle2 size={14} className="text-green-500 shrink-0" />
                          {adv}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Section Salaire 💰 */}
                <div className="bg-[#0f172a] rounded-2xl p-5 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Banknote size={18} className="text-blue-400" />
                    <span className="text-[10px] uppercase font-black tracking-wider text-slate-400">Rémunération Attractive</span>
                  </div>
                  <p className="text-lg font-black text-blue-400">{offre.salaire}</p>
                  <p className="text-[10px] text-slate-400 italic">{offre.remunerationDetail}</p>
                </div>
              </div>

           

            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-white/50 rounded-3xl border border-dashed border-slate-300 text-center">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
            {OFFRES_EMPLOI.length} Postes disponibles • Goor Recrutement
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recrutement;