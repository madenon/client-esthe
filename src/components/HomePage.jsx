import { useState } from 'react';
import { Heart, CheckCircle, Zap, MapPin, MessageCircle, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HomePage = () => {
  // 1. État initial à null pour ne rien afficher par défaut
  const [activeZone, setActiveZone] = useState(null); 
  const [activeCat, setActiveCat] = useState('Tous');

  const jobOffers = [
    { id: 1, zone: "Abidjan", category: "Coiffeur", title: "Emploi Tresseuse Abidjan", description: "Le salon recrute tresseuse experte en pose tissage et tresses africaines. Poste basé à Yopougon.", location: "Abidjan, Yopougon", whatsapp: "2250596132058", likes: 63 },
    { id: 2, zone: "Abidjan", category: "Esthétique", title: "Prothésiste Ongulaire Gel", description: "Recrutement prothésiste ongulaire gel et résine pour un institut de luxe à Cocody.", location: "Abidjan, Cocody", whatsapp: "2250596132058", likes: 12 },
    { id: 3, zone: "Intérieur", category: "Coiffeur", title: "Barber expérimenté - San Pedro", description: "Hôtel cherche barber pour sa clientèle VIP. Logement possible en bord de mer.", location: "San Pedro", whatsapp: "2250596132058", likes: 45 },
    { id: 4, zone: "Abidjan", category: "Coiffeur", title: "Spécialiste Pose Perruque", description: "Recherche experte en wig styling et pose de perruques sans colle à Marcory.", location: "Abidjan, Marcory", whatsapp: "2250596132058", likes: 89 },
    { id: 5, zone: "Intérieur", category: "Esthétique", title: "Masseuse Bien-être - Yamoussoukro", description: "Institut recherche masseuse qualifiée pour soins corporels et massage relaxant.", location: "Yamoussoukro", whatsapp: "2250596132058", likes: 21 },
    { id: 6, zone: "Abidjan", category: "Coiffeur", title: "Expert Dreadlocks & Soins", description: "Salon spécialisé cherche coiffeur/se expert en locks et soins naturels.", location: "Abidjan, Riviera 2", whatsapp: "2250596132058", likes: 34 },
    { id: 7, zone: "Abidjan", category: "Esthétique", title: "Makeup Artist / Maquilleuse", description: "Besoin d'une maquilleuse disponible pour mariages et événements VIP au Plateau.", location: "Abidjan, Plateau", whatsapp: "2250596132058", likes: 56 },
    { id: 8, zone: "Intérieur", category: "Coiffeur", title: "Coiffeuse Dame Polyvalente", description: "Grand salon à Bouaké cherche coiffeuse sachant tout faire (tresses, coupes, soins).", location: "Bouaké", whatsapp: "2250596132058", likes: 28 },
  ];

  const filteredOffers = jobOffers.filter(offer => 
    offer.zone === activeZone && (activeCat === 'Tous' || offer.category === activeCat)
  );

  return (
    <div className="bg-[#f0f4f8] min-h-screen font-poppins pb-20">
      
      {/* SECTION HERO */}
      <section className="px-6 py-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-[#1e293b] mb-4">
            Goor<span className="text-blue-600"> Recrute !</span> <span className="font-light">est là pour vous !</span>
          </h2>
          <div className="inline-flex items-center gap-2 bg-[#e8fbf3] text-[#00b67a] px-4 py-1.5 rounded-full border border-[#00b67a]/20 mb-10">
            <CheckCircle size={14} />
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#00b67a]">Plateforme Vérifiée</span>
          </div>

          <p className="text-slate-500 mb-8 font-medium">Choisissez votre zone pour voir les offres disponibles</p>

          {/* SÉLECTEUR DE ZONE */}
          <div className="flex bg-white p-2 rounded-2xl shadow-xl shadow-blue-900/5 max-w-sm mx-auto mb-12 border border-slate-200">
            <button 
              onClick={() => setActiveZone('Abidjan')}
              className={`flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${activeZone === 'Abidjan' ? 'bg-[#1e293b] text-white' : 'text-slate-400 hover:text-[#1e293b]'}`}
            >
              Abidjan
            </button>
            <button 
              onClick={() => setActiveZone('Intérieur')}
              className={`flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${activeZone === 'Intérieur' ? 'bg-[#1e293b] text-white' : 'text-slate-400 hover:text-[#1e293b]'}`}
            >
              Intérieur
            </button>
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
              {/* BANDEAU "FORT INTÉRÊT" */}
              <div className="bg-white rounded-3xl p-6 border-l-[6px] border-blue-500 shadow-sm flex items-center gap-6 mb-12">
                <div className="bg-blue-500 p-3 rounded-2xl text-white">
                  <Zap size={24} fill="currentColor" />
                </div>
                <div>
                  <h4 className="font-black text-[#1e293b] text-sm uppercase tracking-tight">Fort intérêt à {activeZone}</h4>
                  <p className="text-slate-500 text-xs mt-1">
                    {filteredOffers.length > 0 
                      ? `${filteredOffers.length * 4} salons consultent actuellement ces profils.`
                      : "De nouvelles offres arrivent très bientôt dans cette zone."}
                  </p>
                </div>
              </div>

              {/* GRILLE D'OFFRES */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredOffers.map((offer) => (
                  <motion.div 
                    layout
                    key={offer.id}
                    className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden group hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="h-44 bg-slate-50 relative flex items-center justify-center">
                      <div className="absolute top-4 right-4 bg-white/90 px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-2 text-slate-500">
                        <Heart size={14} className="group-hover:text-red-500 transition-colors" />
                        <span className="text-xs font-bold">{offer.likes}</span>
                      </div>
                      <div className="text-5xl font-black text-slate-200 group-hover:text-blue-500/10">GOOR</div>
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
                      <h3 className="font-bold text-lg text-[#1e293b] mb-2 leading-tight">{offer.title}</h3>
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
                ))}
              </div>
            </motion.div>
          ) : (
            /* ÉTAT PAR DÉFAUT (VIDE) */
            <motion.div 
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-blue-900/5 border border-slate-100">
                <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search size={32} className="text-slate-300" />
                </div>
                <h3 className="text-[#1e293b] font-bold text-xl mb-2">Prêt à trouver un job ?</h3>
                <p className="text-slate-400 text-sm max-w-xs mx-auto">
                  Cliquez sur <span className="font-bold text-[#1e293b]">Abidjan</span> ou <span className="font-bold text-[#1e293b]">Intérieur</span> ci-dessus pour lancer la recherche.
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