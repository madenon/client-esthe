import { useState } from 'react';
import { Heart, CheckCircle, Zap, MapPin, MessageCircle, Search, ShieldCheck, RefreshCw, Globe, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HomePage = () => {
  const [activeZone, setActiveZone] = useState(null); 
  const [activeCat, setActiveCat] = useState('Tous');

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

  const filteredOffers = jobOffers.filter(offer => 
    offer.zone === activeZone && (activeCat === 'Tous' || offer.category === activeCat)
  );

  return (
    <div className="bg-[#f0f4f8] min-h-screen font-poppins pb-20 text-[#1e293b]">
      
      {/* SECTION HERO */}
      <section className="px-6 py-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Goor<span className="text-blue-600"></span> <span className="font-light text-slate-400 italic">Recrute !</span>
          </h2>
          <div className="inline-flex items-center gap-2 bg-[#e8fbf3] text-[#00b67a] px-4 py-1.5 rounded-full border border-[#00b67a]/20 mb-10">
            <CheckCircle size={14} />
            <span className="text-[10px] font-bold uppercase tracking-wider">Plateforme Vérifiée</span>
          </div>

          <p className="text-slate-500 mb-8 font-medium">Trouvez les meilleurs candiats ici  ou votre prochain emploi en un clic.</p>

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
              {/* NOUVELLE SECTION : DESCRIPTION & REASSURANCE (Style Image Fournie) */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                
                {/* Colonne Gauche : Description */}
                <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
                   <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                            <Globe size={18} />
                        </div>
                        <h4 className="font-black text-xs uppercase tracking-widest">À propos de Goor</h4>
                      </div>
                      <button className="flex items-center gap-2 text-[10px] font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors">
                        <Volume2 size={14} /> Écouter
                      </button>
                   </div>
                  
                   <p className="text-slate-500 text-sm leading-relaxed italic">
                    Goor est une page blanche qui ne demande qu'à être remplie de créativité et d'ingéniosité, offrant des possibilités infinies pour la croissance de votre carrière ou de votre salon.
                   </p>
                </div>

                {/* Colonne Droite : Badges de confiance */}
                <div className="flex flex-col gap-4">
                    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 group hover:border-blue-200 transition-colors">
                        <div className="bg-blue-50 p-3 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                            <ShieldCheck size={20} />
                        </div>
                        <span className="font-bold text-[11px] uppercase tracking-wider text-slate-600">Offres Vérifiées</span>
                    </div>
                    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 group hover:border-green-200 transition-colors">
                        <div className="bg-green-50 p-3 rounded-xl text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                            <RefreshCw size={20} />
                        </div>
                        <span className="font-bold text-[11px] uppercase tracking-wider text-slate-600">Mise à jour quotidienne</span>
                    </div>
                    <div className="bg-[#1e293b] p-6 rounded-[2rem] text-white shadow-lg relative overflow-hidden group">
                        <div className="relative z-10">
                            <h4 className="font-black text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                                <Zap size={14} className="text-yellow-400 fill-yellow-400" />
                                Recrutement Rapide
                            </h4>
                            <p className="text-slate-400 text-[10px] leading-tight">
                                Contactez directement les gérants via WhatsApp pour une réponse en moins de 24h.
                            </p>
                        </div>
                        <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
                            <MessageCircle size={80} />
                        </div>
                    </div>
                </div>
              </div>

              {/* GRILLE D'OFFRES */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredOffers.map((offer) => (
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
                      <div className="text-5xl font-black text-slate-200 group-hover:text-blue-500/10 transition-all">GOOR</div>
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
              <div className="bg-white p-12 rounded-[3rem] shadow-xl shadow-blue-900/5 border border-slate-100 max-w-md">
                <div className="bg-slate-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Search size={36} className="text-slate-300" />
                </div>
                <h3 className="font-bold text-2xl mb-3">Explorez les opportunités</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Sélectionnez <span className="text-[#1e293b] font-bold">Abidjan</span> ou <span className="text-[#1e293b] font-bold">l'Intérieur</span> pour découvrir les salons qui recrutent en ce moment.
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