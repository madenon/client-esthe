import { useState } from 'react';
import { Heart, Zap, Search, ShieldCheck, Globe, Volume2, Users, Briefcase, MessageCircle, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { jobOffers as initialOffers, jobOffers } from '../apis/datas';
import Temoignage from './Temoignage';
import AdBanner from './AdBanner';

const HomePage = () => {
  const [activeZone, setActiveZone] = useState(null); 
  const [activeCat, setActiveCat] = useState('Tous');
  const [userRole, setUserRole] = useState('Candidat');
  const [searchQuery, setSearchQuery] = useState('');
  const [offers, setOffers] = useState(initialOffers);

  // 2. Fonction pour basculer le favori
  const toggleFavorite = (id) => {
    setOffers(offers.map(offer => {
      if (offer.id === id) {
        return {
          ...offer,
          isFavorite: !offer.isFavorite,
          // Optionnel : on ajuste les likes en même temps
          likes: offer.isFavorite ? offer.likes - 1 : offer.likes + 1
        };
      }
      return offer;
    }));
  };

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
      
      
       <section className="px-6 py-12 text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* SÉLECTEUR DE RÔLE (Inchangé) */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button 
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all shadow-sm ${userRole === 'Candidat' ? 'bg-blue-600 text-white' : 'bg-white text-slate-400'}`}
              onClick={() => setUserRole('Candidat')}
            >
              <Users size={14} /> <Link to="/espace-candidat">Espace Candidat</Link>
            </button>
            <button 
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all shadow-sm ${userRole === 'Employeur' ? 'bg-white text-[#ff4da6]' : 'bg-[#ff4da6] text-white'}`}
              onClick={() => setUserRole('Employeur')}
            >
              <Briefcase size={14} /> <Link to="/espace-recruteur"> Espace Recruteur </Link> 
            </button>
          </div>

          <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900">
            Goo<span className="text-[#ff4da6]">co</span><span className="text-blue-600">.com</span>
          </h2>

          {/* BARRE DE RECHERCHE & FILTRE ZONE */}
          <div className="flex flex-col md:flex-row items-center gap-4 max-w-2xl mx-auto mb-10">
            <div className="relative w-full md:flex-[1.5]">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text"
                placeholder="Rechercher (ex: Yopougon, Coiffeuse...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white pl-14 pr-6 py-4 rounded-2xl shadow-xl shadow-blue-900/5 border border-slate-200 focus:outline-none focus:border-blue-400 text-sm"
              />
            </div>

            <div className="flex bg-blue-600 p-1.5 rounded-2xl shadow-xl shadow-blue-900/5 w-full md:flex-1 border border-slate-200">
              {['Abidjan', 'Intérieur'].map((zone) => (
                <button 
                  key={zone}
                  onClick={() => setActiveZone(activeZone === zone ? null : zone)}
                  className={`flex-1 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all ${activeZone === zone ? 'bg-[#1e293b] text-white' : 'text-white hover:text-[#1e293b]'}`}
                >
                  {zone}
                </button>
              ))}
            </div>
          </div>

          {/* NOUVEAU : FILTRE PAR CATÉGORIE (TRÈS IMPORTANT) */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['Tous', 'Coiffure', 'Esthétique', 'Mixte'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${activeCat === cat ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-slate-100 text-slate-500 hover:border-blue-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <AdBanner />

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
             
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {filteredOffers.map((offer) => (
    <motion.div 
      layout
      key={offer.id}
      className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden group hover:shadow-2xl transition-all duration-500 text-slate-800 flex flex-col"
    >
{/* HEADER DE LA CARTE */}
{/* HEADER DE LA CARTE - Fond Rose par défaut */}
<div className="h-32 bg-rose-100/50 relative flex items-center justify-center overflow-hidden">
  
  {/* CONTENEUR DES BADGES (Haut Gauche) */}
  <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
    
    {/* Badge Urgent : Rouge */}
    {offer.isUrgent && (
      <div className="bg-white text-red-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter flex items-center gap-1 shadow-sm animate-pulse">
        <Zap size={12} fill="currentColor" /> Urgent
      </div>
    )}

    {/* Badge Favorite : Bleu */}
    {offer.isFavorite && (
      <div className="bg-white text-blue-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter flex items-center gap-1 shadow-sm">
        <Heart size={12} fill="currentColor" /> Favorite
      </div>
    )}
  </div>
  
  {/* BLOC LIKES (Haut Droite) */}
  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-2 text-slate-500">
    <Heart 
      size={14} 
      className={`transition-all duration-300 cursor-pointer ${
        offer.isFavorite 
          ? "text-blue-500 fill-blue-500 scale-110" // Le cœur devient bleu s'il est favori
          : "text-slate-400 group-hover:text-red-400"
      }`} 
    />
    <span className={`text-xs font-bold ${offer.isFavorite ? "text-blue-600" : "text-slate-500"}`}>
      {offer.likes}
    </span>
  </div>
  
  {/* Logo en arrière-plan (Rose discret) */}
  <div className="text-4xl font-black text-rose-200/50 uppercase tracking-tighter select-none">
    Goorco
  </div>
</div>

      {/* CONTENU DE LA CARTE */}
      <div className="p-7 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider">
            {offer.category}
          </span>
          <span className="text-[#10b981] font-black text-sm">
            {offer.salary}
          </span>
        </div>

        <h3 className="font-bold text-[18px] text-slate-900 mb-3 leading-snug">
          {offer.title}
        </h3>

        <div className="flex items-center gap-1.5 text-slate-500 mb-4">
          <MapPin size={14} className="text-blue-500" />
          <span className="text-[12px] font-medium uppercase">{offer.location}</span>
        </div>

        <p className="text-slate-500 text-[13px] leading-relaxed line-clamp-2 mb-6">
          {offer.description}
        </p>

        {/* BOUTON VOIR DÉTAILS - Remplace le bouton WhatsApp */}
        <div className="mt-auto">
          <Link 
            to={`/offre/${offer.id}`}
            className="flex items-center justify-center gap-2 w-full bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-black py-3.5 rounded-2xl transition-all text-[12px] uppercase tracking-widest"
          >
            Voir détails offre
          </Link>
        </div>
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
                <h3 className="font-bold text-2xl mb-3 text-slate-900">Aucun résultat</h3>
                <p className="text-slate-400 text-sm">Nous n'avons trouvé aucune offre correspondant à vos critères actuels.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
        <Temoignage />
    </div>
  );
};

export default HomePage;




