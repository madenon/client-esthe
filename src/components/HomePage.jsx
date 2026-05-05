import { useState } from 'react';
import { Heart, CheckCircle, Zap, Search, ShieldCheck, Globe, Volume2, Users, Briefcase, MessageCircle, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import AdBanner from './AdBanner';
import { jobOffers } from '../apis/datas';

const HomePage = () => {
  const [activeZone, setActiveZone] = useState(null); 
  const [activeCat, setActiveCat] = useState('Tous');
  const [userRole, setUserRole] = useState('Candidat');
  const [searchQuery, setSearchQuery] = useState('');

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
      
       <section className="px-6 py-12 text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* SÉLECTEUR DE RÔLE (Inchangé) */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button 
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all shadow-sm ${userRole === 'Candidat' ? 'bg-blue-600 text-white' : 'bg-white text-slate-400'}`}
              onClick={() => setUserRole('Candidat')}
            >
              <Users size={14} /> Espace Candidat
            </button>
            <button 
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all shadow-sm ${userRole === 'Employeur' ? 'bg-white text-[#ff4da6]' : 'bg-[#ff4da6] text-white'}`}
              onClick={() => setUserRole('Employeur')}
            >
              <Briefcase size={14} /> Espace Recruteur
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
            {['Tous', 'Coiffeur', 'Esthétique', 'Mixte'].map((cat) => (
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
                <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 text-slate-800">
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

             {/* GRILLE DES OFFRES AMÉLIORÉE */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {filteredOffers.map((offer) => (
    <motion.div 
      layout
      key={offer.id}
      className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden group hover:shadow-2xl transition-all duration-500 text-slate-800 flex flex-col"
    >
      {/* HEADER DE LA CARTE */}
      <div className="h-32 bg-[#ff4da6]/90 relative flex items-center justify-center overflow-hidden">
        {/* Badge Urgent - S'affiche si offer.isUrgent est vrai */}
        {offer.isUrgent && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter flex items-center gap-1 animate-pulse z-10">
            <Zap size={12} fill="currentColor" /> Urgent
          </div>
        )}
        
        <div className="absolute top-4 right-4 bg-white/90 px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-2 text-slate-500">
          <Heart size={14} className="group-hover:text-red-500 transition-colors cursor-pointer" />
          <span className="text-xs font-bold">{offer.likes}</span>
        </div>
        <div className="text-4xl font-black text-slate-200 uppercase tracking-tighter">Goorco</div>
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
    </div>
  );
};

export default HomePage;




