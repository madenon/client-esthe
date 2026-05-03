import { useState } from 'react';
import { Heart, CheckCircle, Zap, MapPin, MessageCircle, Search, ShieldCheck, RefreshCw, Globe, Volume2, Users, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HomePage = () => {
  const [activeZone, setActiveZone] = useState(null); 
  const [activeCat, setActiveCat] = useState('Tous');
  const [userRole, setUserRole] = useState('Candidat'); // Nouveau : pour diviser Candidat / Employeur
  const [searchQuery, setSearchQuery] = useState(''); // Nouveau : pour la recherche

  const jobOffers = [
    { id: 1, zone: "Abidjan", category: "Coiffeur", title: "Emploi Tresseuse Abidjan", description: "Le salon recrute tresseuse experte en pose tissage et tresses africaines. Poste basé à Yopougon.", location: "Abidjan, Yopougon", whatsapp: "2250596132058", likes: 23 },
    { id: 2, zone: "Abidjan", category: "Esthétique", title: "Prothésiste Ongulaire Gel", description: "Recrutement prothésiste ongulaire gel et résine pour un institut de luxe à Cocody.", location: "Abidjan, Cocody", whatsapp: "2250596132058", likes: 12 },
    { id: 3, zone: "Intérieur", category: "Coiffeur", title: "Barber expérimenté - San Pedro", description: "Hôtel cherche barber pour sa clientèle VIP. Logement possible en bord de mer.", location: "San Pedro", whatsapp: "2250596132058", likes: 15 },
    { id: 4, zone: "Abidjan", category: "Coiffeur", title: "Spécialiste Pose Perruque", description: "Recherche experte en wig styling et pose de perruques sans colle à Marcory.", location: "Abidjan, Marcory", whatsapp: "2250596132058", likes: 89 },
    { id: 5, zone: "Intérieur", category: "Esthétique", title: "Masseuse Bien-être - Yamoussoukro", description: "Institut recherche masseuse qualifiée pour soins corporels et massage relaxant.", location: "Yamoussoukro", whatsapp: "2250596132058", likes: 20 },
    { id: 6, zone: "Abidjan", category: "Coiffeur", title: "Expert Dreadlocks & Soins", description: "Salon spécialisé cherche coiffeur/se expert en locks et soins naturels.", location: "Abidjan, Riviera 2", whatsapp: "2250596132058", likes: 34 },
    { id: 7, zone: "Abidjan", category: "Esthétique", title: "Makeup Artist / Maquilleuse", description: "Besoin d'une maquilleuse disponible pour mariages et événements VIP au Plateau.", location: "Abidjan, Plateau", whatsapp: "2250596132058", likes: 56 },
    { id: 8, zone: "Intérieur", category: "Coiffeur", title: "Coiffeuse Dame Polyvalente", description: "Grand salon à Bouaké cherche coiffeuse sachant tout faire (tresses, coupes, soins).", location: "Bouaké", whatsapp: "2250596132058", likes: 28 },
  ];

  // Filtrage combiné : Zone + Catégorie + Recherche
  const filteredOffers = jobOffers.filter(offer => 
    offer.zone === activeZone && 
    (activeCat === 'Tous' || offer.category === activeCat) &&
    (offer.title.toLowerCase().includes(searchQuery.toLowerCase()) || offer.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="bg-[#f0f4f8] min-h-screen font-poppins pb-20 text-[#1e293b]">
      
      {/* SECTION HERO */}
      <section className="px-6 py-12 text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* SÉLECTEUR DE RÔLE (Candidat / Employeur) */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button 
              onClick={() => setUserRole('Candidat')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all shadow-sm ${userRole === 'Candidat' ? 'bg-blue-600 text-white shadow-blue-200' : 'bg-white text-slate-400 hover:text-blue-600'}`}
            >
              <Users size={14} /> Espace Candidat
            </button>
            <button 
              onClick={() => setUserRole('Employeur')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all shadow-sm ${userRole === 'Employeur' ? 'bg-blue-600 text-white shadow-blue-200' : 'bg-white text-slate-400 hover:text-blue-600'}`}
            >
              <Briefcase size={14} /> Espace  Recruteur 
            </button>
          </div>

          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Goorco<span className="text-blue-600">.com</span> <span className="font-light text-slate-400 italic"> </span>
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

          {/* BARRE DE RECHERCHE & SÉLECTEUR DE ZONE */}
          <div className="flex flex-col md:flex-row items-center gap-4 max-w-2xl mx-auto mb-12">
            {/* Barre de recherche */}
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

            {/* Sélecteur de zone */}
            <div className="flex bg-white p-1.5 rounded-2xl shadow-xl shadow-blue-900/5 w-full md:flex-1 border border-slate-200">
              <button 
                onClick={() => setActiveZone('Abidjan')}
                className={`flex-1 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all ${activeZone === 'Abidjan' ? 'bg-[#1e293b] text-white' : 'text-slate-400 hover:text-[#1e293b]'}`}
              >
                Abidjan
              </button>
              <button 
                onClick={() => setActiveZone('Intérieur')}
                className={`flex-1 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all ${activeZone === 'Intérieur' ? 'bg-[#1e293b] text-white' : 'text-slate-400 hover:text-[#1e293b]'}`}
              >
                Intérieur
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {activeZone ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* SECTION À PROPOS (Style Image Fournie) */}
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
                    Goorco est une plateforme conçue pour connecter l'excellence. Que vous soyez un talent cherchant à s'épanouir ou un établissement en quête de perfection, nous offrons les outils pour faire grandir votre vision.
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
                                <Zap size={14} className="text-yellow-400 fill-yellow-400" />
                                Recrutement Rapide
                            </h4>
                            <p className="text-slate-400 text-[10px] leading-tight">Contact direct via WhatsApp pour une réponse en moins de 24h.</p>
                        </div>
                        <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
                            <MessageCircle size={80} />
                        </div>
                    </div>
                </div>
              </div>

              {/* GRILLE D'OFFRES AVEC RÉSULTATS DE RECHERCHE */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredOffers.length > 0 ? (
                  filteredOffers.map((offer) => (
                    <motion.div 
                      layout
                      key={offer.id}
                      className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden group hover:shadow-2xl transition-all duration-500"
                    >
                      <div className="h-40 bg-slate-50 relative flex items-center justify-center">
                        <div className="absolute top-4 right-4 bg-white/90 px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-2 text-slate-500">
                          <Heart size={14} className="group-hover:text-red-500 transition-colors" />
                          <span className="text-xs font-bold">{offer.likes}</span>
                        </div>
                        <div className="text-5xl font-black text-slate-200 group-hover:text-blue-500/10 transition-all">Goorco</div>
                      </div>

                      <div className="p-7">
                        <div className="flex gap-2 mb-4">
                          <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-lg ${offer.category === 'Coiffeur' ? 'bg-orange-50 text-orange-600' : 'bg-purple-50 text-purple-600'}`}>
                            {offer.category}
                          </span>
                          <span className="flex items-center gap-1 text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-slate-100 text-slate-500 rounded-lg">
                            <MapPin size={10} /> {offer.location}
                          </span>
                        </div>
                        <h3 className="font-bold text-lg mb-2 leading-tight">{offer.title}</h3>
                        <p className="text-slate-400 text-xs leading-relaxed mb-8 line-clamp-2 italic">"{offer.description}"</p>
                        <a 
                          href={`https://wa.me/${offer.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-3 w-full bg-[#1e293b] hover:bg-blue-600 text-white font-bold py-4 rounded-2xl transition-all text-[11px] uppercase tracking-widest shadow-lg"
                        >
                          <MessageCircle size={16} /> Postuler maintenant
                        </a>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full py-10 text-center text-slate-400 text-sm font-medium">
                    Aucun résultat trouvé pour votre recherche dans cette zone.
                  </div>
                )}
              </div>
            </motion.div>
          ) : (
            /* ÉTAT PAR DÉFAUT */
            <motion.div 
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="bg-white p-12 rounded-[3rem] shadow-xl shadow-blue-900/5 border border-slate-100 max-w-md">
                <div className="bg-slate-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Search size={36} className="text-slate-300" />
                </div>
                <h3 className="font-bold text-2xl mb-3">Recherchez maintenant</h3>
                <p className="text-slate-400 text-sm">
                  Utilisez la barre de recherche ou choisissez votre zone ci-dessus.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HomePage;