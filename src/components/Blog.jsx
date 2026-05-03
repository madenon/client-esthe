import React from 'react';
import { ArrowRight, MapPin, MessageCircle, Heart, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

const Blog = () => {

  const salesOffers = [
    { 
  id: 1, 
  type: "Complet", 
  category: "Salon", 
  title: "L'ensemble à brader avec le fauteuil", 
  description: "Tête de perruque neuve 25mil, Lit pliable neuf avec son sac 115mil, Appareil hydrafacial 85mil", 
  location: "Abidjan, Riviera", 
  whatsapp: "2250596132058", 
  likes: 89, 
  price: "Prix à débattre" 
},
    { 
  id: 1, 
  type: "Formation", 
  category: "Salarié", 
  title: "L'ensemble à brader avec le fauteuil", 
  description: "Bonjour je recherche une coiffeuse et celle qui veulent se faire former dans le domaine de la coiffure nous sommes à bingerville précisément dans la zone de ENP ", 
  location: "Abidjan, Bingerville", 
  whatsapp: "0594478116", 
  likes: 89, 
  price: "Prix à débattre" 
},
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-[#f8fafc]">
      
      {/* Header Professionnel */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-slate-800 mb-2 uppercase tracking-tighter">Occasions & Liquidation</h2>
        <p className="text-slate-500 font-medium italic">Trouvez tout le matériel pour votre futur salon à prix réduit</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {salesOffers.map((item, index) => (
          <React.Fragment key={item.id}>
            
            {/* CARTE MATÉRIEL À VENDRE */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col group"
            >
              <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-6">
                  <span className="px-4 py-1.5 rounded-xl bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-wider">
                    {item.type} • {item.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400 bg-slate-50 px-3 py-1 rounded-lg">
                    <Heart size={14} className="fill-current text-red-400" />
                    <span className="text-xs font-bold">{item.likes}</span>
                  </div>
                </div>

                <div className="mb-4">
                    <span className="text-blue-600 font-black text-xl">{item.price}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                    {item.title}
                </h3>
               {/* Remplacez l'ancien bloc <p> par celui-ci */}
<p className="text-slate-500 text-sm leading-relaxed mb-6 italic">
  "{item.description}"
</p>
                <div className="flex items-center gap-2 text-slate-400 text-[11px] font-bold uppercase mb-6">
                  <MapPin size={14} className="text-blue-500" />
                  {item.location}
                </div>

                <a 
                  href={`https://wa.me/${item.whatsapp}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-[#1e293b] hover:bg-green-600 text-white font-bold py-4 rounded-2xl transition-all text-[11px] uppercase tracking-widest shadow-lg"
                >
                  <MessageCircle size={18} /> Contacter le vendeur
                </a>
              </div>
            </motion.div>

            {/* LA BANNIÈRE DE LIQUIDATION (Toutes les 10 annonces) */}
            {(index + 1) % 10 === 0 && (
              <div className="col-span-full my-10 px-2">
                <div className="relative overflow-hidden bg-gradient-to-br from-[#ff4e50] to-[#f9d423] rounded-[3rem] p-10 shadow-2xl">
                  <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="text-white text-center lg:text-left max-w-2xl">
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full mb-6">
                        <ShoppingBag size={16} />
                        <span className="text-[11px] font-black uppercase tracking-[0.2em]">Urgent / Vente Rapide</span>
                      </div>
                      <h3 className="text-3xl md:text-5xl font-black mb-4 leading-[1.1]">
                        Bonjour, je mets en vente <br /> tout le matériel de mon salon !
                      </h3>
                      <p className="text-white/90 text-lg font-medium">
                        C'est le moment de faire des affaires. Matériel professionnel complet disponible immédiatement.
                      </p>
                    </div>
                    
                    <button className="shrink-0 bg-white text-[#ff4e50] px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-4 shadow-2xl">
                      Voir la liste complète <ArrowRight size={20} />
                    </button>
                  </div>
                  
                  {/* Effets visuels comme sur ton image */}
                  <div className="absolute top-0 left-0 w-full h-full bg-white/5 pointer-events-none opacity-30 mix-blend-overlay"></div>
                  <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/20 rounded-full blur-[80px]"></div>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Blog;