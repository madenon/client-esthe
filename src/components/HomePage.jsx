
import { useState, useEffect } from 'react';
import { Heart, CheckCircle, Zap, Search, ShieldCheck, Globe, Volume2, Users, Briefcase, Cookie, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import AdBanner from './AdBanner';

const HomePage = () => {
  const [activeZone, setActiveZone] = useState(null); 
  const [activeCat, setActiveCat] = useState('Tous');
  const [userRole, setUserRole] = useState('Candidat');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCookies, setShowCookies] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('goorco-cookies');
    if (!consent) {
      setShowCookies(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('goorco-cookies', 'true');
    setShowCookies(false);
  };

const jobOffers = [
  { 
    id: 1, 
    zone: "Abidjan", 
    category: "Coiffeur", 
    title: "Urgent : Coiffeur assidu", 
    description: "Besoin urgent de coiffeur assidu et patient qui habite a Yopougon Maroc ou aux alentours.", 
    location: "Abidjan, Yopougon Maroc", 
    salary: "À débattre",
    whatsapp: "2250596659858", 
    likes: 12 
  },
  { 
    id: 8, 
    zone: "Abidjan", 
    category: "Coiffeur", 
    title: "Expert(e) en Perruques & Customisation", 
    description: "Recherche d'un(e) coiffeur(se) spécialisé(e) dans la customisation et la pose de perruques. Disponibilité immédiate.", 
    location: "Abidjan, Bingerville", 
    salary: "100.000 FCFA",
    whatsapp: "2250101747343", 
    likes: 45 
  },
  { 
    id: 2, 
    zone: "Abidjan", 
    category: "Coiffeur", 
    title: "Besoin coiffeuse et prothésiste", 
    description: "J’ai besoin d’une coiffeuse qui maitrise bien les poses et une prothésiste ongulaire qui maîtrise toutes les techniques.", 
    location: "Abidjan, Yopougon", 
    salary: "90.000 FCFA",
    whatsapp: "2250544639154",
    likes: 34 
  },
  { 
    id: 3, 
    zone: "Abidjan", 
    category: "Esthétique", 
    title: "Besoin de 2 filles (Pédicure/Soins)", 
    description: "Besoin de 2 filles pour faire pédicure manucure et soins de visage à Yop maroc et Treichville. De 8h à 20h.", 
    location: "Yopougon / Treichville", 
    salary: "80.000 FCFA",
    whatsapp: "2250544639154", 
    likes: 56 
  },
  { 
    id: 4, 
    zone: "Intérieur", 
    category: "Coiffeur", 
    title: "Coiffeuse à Bassam", 
    description: "Besoin d'une coiffeuse à Bassam avec dortoir disponible immédiatement.", 
    location: "Grand-Bassam", 
    salary: "50.000 FCFA",
    whatsapp: "2250544639154", 
    likes: 28 
  },
  { 
    id: 5, 
    zone: "Abidjan", 
    category: "Coiffeur", 
    title: "Coiffeuse experte en poses", 
    description: "Besoin d'une coiffeuse à abatta qui maîtrise surtout les pose perruque. Heure : 9h a 20h 30.", 
    location: "Abidjan, Abatta", 
    salary: "70.000 FCFA",
    whatsapp: "2250544639154", 
    likes: 12 
  },
  { 
    id: 6, 
    zone: "Abidjan", 
    category: "Coiffeur", 
    title: "Coiffeur professionnel", 
    description: "Besoin d'un coiffeur professionnel à abatta. Heure : 9h a 20h 30.", 
    location: "Abidjan, Abatta", 
    salary: "60.000 FCFA",
    whatsapp: "2250544639154", 
    likes: 15 
  },
  { 
    id: 7, 
    zone: "Intérieur", 
    category: "Coiffeur", 
    title: "Urgent : Coiffeur avec dortoir", 
    description: "Besoin urgement d'un coiffeur à sikasso département de grand lahou avec dortoir.", 
    location: "Grand-Lahou, Sikasso", 
    salary: "À débattre",
    whatsapp: "2250700732532", 
    likes: 8 
  }
];
  // Logique de filtrage
  const filteredOffers = jobOffers.filter(offer => {
    const matchZone = activeZone ? offer.zone === activeZone : true;
    const matchCat = activeCat === 'Tous' || offer.category === activeCat;
    const matchSearch = 
      offer.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      offer.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchZone && matchCat && matchSearch;
  });

  return (
    <div className="bg-[#f0f4f8] min-h-screen font-poppins pb-20 text-[#1e293b] relative">
      <AdBanner />
      
      {/* SECTION HERO */}
      <section className="px-6 py-12 text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* SÉLECTEUR DE RÔLE */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Link 
              to="/espace-candidat"
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all shadow-sm ${userRole === 'Candidat' ? 'bg-blue-600 text-white shadow-blue-200' : 'bg-white text-slate-400 hover:text-blue-600'}`}
              onClick={() => setUserRole('Candidat')}
            >
              <Users size={14} /> Espace Candidat
            </Link>
            <Link 
              to="/espace-recruteur"
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all shadow-sm ${userRole === 'Employeur' ? 'bg-[#ff4da6] text-white' : 'bg-white text-slate-400 hover:text-[#ff4da6]'}`}
              onClick={() => setUserRole('Employeur')}
            >
              <Briefcase size={14} /> Espace Recruteur
            </Link>
          </div>

          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Goo<span className="text-[#ff4da6]">co</span><span className="text-blue-600">.com</span>
          </h2>
          
          <div className="inline-flex items-center gap-2 bg-[#e8fbf3] text-[#00b67a] px-4 py-1.5 rounded-full border border-[#00b67a]/20 mb-10">
            <CheckCircle size={14} />
            <span className="text-[10px] font-bold uppercase tracking-wider">Plateforme Vérifiée</span>
          </div>

          <p className="text-slate-500 mb-8 font-medium">
            {userRole === 'Candidat' 
              ? "Trouvez votre prochain emploi en un clic parmi les meilleurs salons." 
              : "Recrutez les meilleurs talents de Côte d'Ivoire en quelques secondes."}
          </p>

          {/* BARRE DE RECHERCHE & FILTRE ZONE */}
          <div className="flex flex-col md:flex-row items-center gap-4 max-w-2xl mx-auto mb-12">
            <div className="relative w-full md:flex-[1.5]">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text"
                placeholder="Rechercher un poste, un salon..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white pl-14 pr-6 py-4 rounded-2xl shadow-xl shadow-blue-900/5 border border-slate-200 focus:outline-none focus:border-blue-400 text-sm"
              />
            </div>

            <div className="flex bg-white p-1.5 rounded-2xl shadow-xl shadow-blue-900/5 w-full md:flex-1 border border-slate-200">
              <button 
                onClick={() => setActiveZone(activeZone === 'Abidjan' ? null : 'Abidjan')}
                className={`flex-1 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all ${activeZone === 'Abidjan' ? 'bg-[#1e293b] text-white' : 'text-slate-400 hover:text-[#1e293b]'}`}
              >
                Abidjan
              </button>
              <button 
                onClick={() => setActiveZone(activeZone === 'Intérieur' ? null : 'Intérieur')}
                className={`flex-1 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all ${activeZone === 'Intérieur' ? 'bg-[#1e293b] text-white' : 'text-slate-400 hover:text-[#1e293b]'}`}
              >
                Intérieur
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION RÉSULTATS */}
      <div className="max-w-6xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {filteredOffers.length > 0 ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* CARTES INFOS */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                        <Globe size={18} />
                      </div>
                      <h4 className="font-black text-xs uppercase tracking-widest">À propos de Goorco</h4>
                    </div>
                    <button className="flex items-center gap-2 text-[10px] font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors">
                      <Volume2 size={14} /> Écouter
                    </button>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed italic">
                    Goorco est la plateforme leader en Côte d'Ivoire pour les métiers de la beauté. Nous connectons les talents passionnés avec les meilleurs établissements du pays.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 group hover:border-blue-200 transition-colors">
                    <div className="bg-blue-50 p-3 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <ShieldCheck size={20} />
                    </div>
                    <span className="font-bold text-[11px] uppercase tracking-wider text-slate-600">Offres Vérifiées</span>
                  </div>
                  <div className="bg-[#1e293b] p-6 rounded-[2rem] text-white shadow-lg relative overflow-hidden group">
                    <div className="relative z-10">
                      <h4 className="font-black text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Zap size={14} className="text-yellow-400 fill-yellow-400" /> Recrutement Rapide
                      </h4>
                      <p className="text-slate-400 text-[10px] leading-tight">Contact direct via WhatsApp pour une réponse en moins de 24h.</p>
                    </div>
                    <MessageCircle size={80} className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              </div>

              {/* GRILLE DES OFFRES */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredOffers.map((offer) => (
                  <motion.div 
                    layout
                    key={offer.id}
                    className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden group hover:shadow-2xl transition-all duration-500"
                  >
                    {/* Header Image */}
                    <div className="h-40 bg-[#ff4da6] relative flex items-center justify-center">
                      <div className="absolute top-4 right-4 bg-white/90 px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-2 text-slate-500">
                        <Heart size={14} className="group-hover:text-red-500 transition-colors" />
                        <span className="text-xs font-bold">{offer.likes}</span>
                      </div>
                      <div className="text-5xl font-black text-white/20 uppercase tracking-tighter">Goorco</div>
                    </div>

                    <div className="p-7">
                      <div className="flex flex-col gap-1 mb-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-[12px] text-slate-500 font-medium">
                            <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-600 uppercase text-[10px] font-bold tracking-wider">{offer.category}</span>
                            <span className="text-slate-300">•</span>
                            <span>{offer.location}</span>
                          </div>
                          {/* Badge Salaire */}
                          <span className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded-lg text-[10px] font-black border border-emerald-100">
                            {offer.salary}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Briefcase size={14} className="text-slate-700" />
                          <span className="text-[13px] text-slate-700 font-medium">Temps plein</span>
                        </div>
                      </div>

                      <h3 className="font-semibold text-[20px] text-[#1a0dab] group-hover:underline mb-4 leading-snug min-h-[56px]">
                        {offer.title}
                      </h3>

                      <div className="space-y-3 mb-8">
                        <h4 className="text-[#202124] font-bold text-[16px]">Description</h4>
                        <p className="text-[#3c4043] text-[13px] leading-relaxed line-clamp-3">
                          {offer.description}
                        </p>
                      </div>

                      <a 
                        href={`https://wa.me/${offer.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full bg-[#1a73e8] hover:bg-[#1765cc] text-white font-bold py-3.5 rounded-2xl transition-all text-[14px] shadow-lg shadow-blue-200"
                      >
                        <MessageCircle size={18} /> Postuler sur WhatsApp
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="bg-white p-12 rounded-[3rem] shadow-xl shadow-blue-900/5 border border-slate-100 max-w-md">
                <Search size={48} className="text-slate-200 mx-auto mb-6" />
                <h3 className="font-bold text-2xl mb-3">Aucun résultat</h3>
                <p className="text-slate-400 text-sm">Nous n'avons trouvé aucune offre correspondant à vos critères actuels.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* BANDEAU COOKIES FIXED */}
      <AnimatePresence>
        {showCookies && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            exit={{ y: 100, opacity: 0 }} 
            className="fixed bottom-6 left-6 right-6 z-[100] max-w-lg md:mx-auto"
          >
            <div className="bg-[#1e293b] text-white p-5 rounded-[2rem] shadow-2xl flex flex-col md:flex-row items-center gap-4 border border-slate-700">
               <Cookie className="text-blue-400 shrink-0" size={24} />
               <p className="text-[11px] text-slate-300 flex-1 text-center md:text-left">
                 En utilisant Goorco, vous acceptez l'utilisation de cookies pour améliorer votre recherche d'emploi.
               </p>
               <div className="flex gap-2">
                 <button onClick={acceptCookies} className="bg-blue-600 px-6 py-2 rounded-xl text-[11px] font-black uppercase whitespace-nowrap">Accepter</button>
                 <button onClick={() => setShowCookies(false)} className="bg-slate-700 p-2 rounded-xl"><X size={16}/></button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;