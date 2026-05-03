import { useState } from 'react';
import { MapPin, MessageCircle, Heart, Briefcase, Search, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AdBanner from './AdBanner';

const HomePage = () => {
  // 1. Données avec distinction Zone (Abidjan / Intérieur)
  const jobOffers = [
    { id: 1, zone: "Abidjan", category: "Coiffeur", title: "Emploi Tresseuse Abidjan", description: "Le salon recrute tresseuse experte en pose tissage. Poste basé à Yopougon.", location: "Abidjan, Yopougon", whatsapp: "2250596132058" },
    { id: 2, zone: "Abidjan", category: "Esthétique", title: "Prothésiste Ongulaire Gel", description: "Recrutement prothésiste ongulaire gel et résine pour un institut de luxe.", location: "Abidjan, Cocody", whatsapp: "2250596132058" },
    { id: 3, zone: "Intérieur", category: "Coiffeur", title: "Barber expérimenté - San Pedro", description: "Hôtel cherche barber pour sa clientèle VIP. Logement possible.", location: "San Pedro, Centre", whatsapp: "2250596132058" },
    { id: 4, zone: "Intérieur", category: "Esthétique", title: "Masseuse Bien-être - Yamoussoukro", description: "Institut recherche masseuse qualifiée pour soins corporels.", location: "Yamoussoukro", whatsapp: "2250596132058" },
    { id: 5, zone: "Abidjan", category: "Coiffeur", title: "Spécialiste Dreadlocks", description: "Salon Riviera 2 cherche expert en locks et soins naturels.", location: "Abidjan, Riviera", whatsapp: "2250596132058" },
  ];

  const [activeZone, setActiveZone] = useState('Abidjan'); // 'Abidjan' ou 'Intérieur'
  const [activeCat, setActiveCat] = useState('Tous');

  const categories = ['Tous', 'Coiffeur', 'Esthétique'];

  // Filtrage combiné (Zone + Catégorie)
  const filteredOffers = jobOffers.filter(offer => {
    const matchZone = offer.zone === activeZone;
    const matchCat = activeCat === 'Tous' || offer.category === activeCat;
    return matchZone && matchCat;
  });

  const getWhatsAppLink = (phone, title) => {
    const text = encodeURIComponent(`Bonjour Goor Recrutement, je suis intéressé par l'offre : ${title}`);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    return isIOS ? `whatsapp://send?phone=${phone}&text=${text}` : `https://wa.me/${phone}?text=${text}`;
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen font-poppins pb-20">
      <AdBanner />

      {/* HERO SECTION PROFESSIONNELLE */}
      <section className="relative h-[400px] flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#0f172a]" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent z-10" />
        
        <div className="relative z-20 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-montserrat font-black text-2xl md:text-4xl text-white uppercase mb-4"
          >
            Trouvez votre <span className="text-blue-500">Futur Job</span>
          </motion.h1>
          <p className="text-slate-300 text-lg font-light italic">La référence du recrutement beauté en Côte d'Ivoire</p>
        </div>
      </section>

      {/* BARRE DE RECHERCHE & FILTRES (L'INTERFACE "PRO") */}
      <div className="max-w-5xl mx-auto px-6 -mt-16 relative z-30">
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/10 p-4 md:p-8 border border-slate-100">
          
          {/* Sélecteur de Zone (Abidjan vs Intérieur) */}
          <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-8 w-full max-w-md mx-auto">
            <button 
              onClick={() => { setActiveZone('Abidjan'); setActiveCat('Tous'); }}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all ${activeZone === 'Abidjan' ? 'bg-white text-blue-600 shadow-md' : 'text-slate-500'}`}
            >
              <MapPin size={18} /> Abidjan
            </button>
            <button 
              onClick={() => { setActiveZone('Intérieur'); setActiveCat('Tous'); }}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all ${activeZone === 'Intérieur' ? 'bg-white text-blue-600 shadow-md' : 'text-slate-500'}`}
            >
              <Globe size={18} /> Intérieur du pays
            </button>
          </div>

          {/* Filtre Métiers */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all border ${
                  activeCat === cat 
                  ? 'bg-[#0f172a] border-[#0f172a] text-white shadow-lg' 
                  : 'bg-white border-slate-200 text-slate-500 hover:border-blue-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* RÉSULTATS */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
          <h2 className="text-slate-900 font-black text-xl uppercase tracking-tight">
             Offres disponibles : <span className="text-blue-600">{activeZone}</span>
          </h2>
          <span className="text-slate-400 text-sm font-bold">{filteredOffers.length} Postes ouverts</span>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredOffers.length > 0 ? (
              filteredOffers.map((offer) => (
                <motion.div 
                  key={offer.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-7 hover:shadow-xl transition-all group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                      <Briefcase size={24} />
                    </div>
                    <span className={`text-[10px] font-black px-3 py-1 rounded-lg ${offer.category === 'Coiffeur' ? 'bg-orange-100 text-orange-600' : 'bg-purple-100 text-purple-600'}`}>
                      {offer.category.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="font-montserrat font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-2 italic">"{offer.description}"</p>

                  <div className="flex items-center gap-2 text-[#0f172a] text-[11px] font-bold mb-6 bg-slate-50 w-fit px-3 py-1.5 rounded-lg">
                    <MapPin size={14} className="text-blue-500" />
                    {offer.location}
                  </div>

                  <motion.a 
                    whileTap={{ scale: 0.95 }}
                    href={getWhatsAppLink(offer.whatsapp, offer.title)}
                    className="flex items-center justify-center gap-3 w-full bg-[#0f172a] hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg text-xs tracking-widest"
                  >
                    <MessageCircle size={18} /> POSTULER VIA WHATSAPP
                  </motion.a>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-slate-400 font-medium text-lg">Aucune offre disponible pour cette sélection pour le moment.</p>
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;