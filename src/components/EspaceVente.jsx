import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, ShoppingCart, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

const EspaceVente = () => {
   const articles = [
    {
      id: 1,
      category: "Mobilier",
      title: "3 Fauteuils de coiffure vintage en cuir noir",
      price: "450 000 FCFA",
      location: "Cocody, Angré",
      usageTime: "2 ans d'utilisation",
      img: "/cf.png"
    },
   
    {
      id: 3,
      category: "Accessoires",
      title: "Lot de 10 têtes malléables cheveux naturels",
      price: "75 000 FCFA",
      location: "Plateau",
      usageTime: "Neuf",
      img: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=400&q=80"
    },


    {
      id: 4,
      category: "Accessoires",
      title: "Tondeuse 2 en 1 professionnelle avec accessoires",
      price: "15 000 FCFA",
      location: "Plateau",
      usageTime: "Neuf",
      img: "/ton.png"
    },

     {
      id: 5,
      category: "Accessoires",
      title: "Accessoires pour salon de coiffure et esthétique",
      price: "3 000 FCFA",
      location: "Plateau",
      usageTime: "Neuf",
      img: "/lave.png"
    },

     {
      id: 4,
      category: "Accessoires",
      title: "Bac a shampoing seconde en  porcelaine",
      price: "12 500 FCFA",
      location: "Vente",
      usageTime: "Neuf",
      img: "/fau.png"
    },
     {
      id: 4,
      category: "Accessoires",
      title: "Lot de 10 têtes malléables cheveux naturels",
      price: "75 000 FCFA",
      location: "Plateau",
      usageTime: "Neuf",
      img: "/coi1.png"
    },
     {
      id: 4,
      category: "Accessoires",
      title: "Bac a shampoing seconde en  porcelaine",
      price: "12 00 FCFA",
      location: "Plateau",
      usageTime: "Neuf",
      img: "/coi2.png"
    },
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* EN-TÊTE ROBUSTE */}
        <header className="relative mb-16 text-left border-l-8 border-black pl-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-xs mb-2 block">
              Marketplace Professionnelle
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase">
              Équipement <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-600">
                D'Occasion
              </span>
            </h1>
            <div className="mt-6 flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">
                <ShieldCheck size={16} className="text-green-500" />
                <span className="text-sm font-bold text-slate-700">Vendeurs Vérifiés</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">
                <Sparkles size={16} className="text-orange-500" />
                <span className="text-sm font-bold text-slate-700">Top Qualité</span>
              </div>
            </div>
          </motion.div>
        </header>

        {/* GRILLE DES ARTICLES */}
        <div className="grid grid-cols-1 gap-8">
          {articles.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="group relative bg-white border-2 border-slate-900 rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] transition-all"
            >
              {/* SECTION IMAGE */}
              <div className="w-full md:w-64 h-64 md:h-auto overflow-hidden bg-slate-100 border-b-2 md:border-b-0 md:border-r-2 border-slate-900">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black text-white text-[10px] font-black px-3 py-1 uppercase rounded-full tracking-widest">
                    {item.condition}
                  </span>
                </div>
              </div>

              {/* CONTENU INFO */}
              <div className="flex-grow p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-orange-600 font-black text-xs uppercase tracking-widest">
                      {item.category}
                    </span>
                    <div className="bg-slate-50 border border-slate-200 px-3 py-1 rounded-lg flex items-center gap-2">
                      <MapPin size={14} className="text-slate-400" />
                      <span className="text-xs font-bold text-slate-600 uppercase tracking-tighter">{item.location}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h2>

                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center gap-2 text-slate-500">
                      <Clock size={16} />
                      <span className="text-sm font-medium">{item.usageTime}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-100">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Prix de vente</span>
                    <span className="text-3xl font-black text-slate-900">
                      {item.price} <span className="text-lg text-slate-400">FCFA</span>
                    </span>
                  </div>

                  <button className="w-full sm:w-auto bg-black hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-black uppercase text-sm tracking-widest flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg">
                    <ShoppingCart size={18} />
                    Contacter le vendeur
                  </button>
                </div>
              </div>

              {/* DÉCORATION SUBTILE */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={32} className="text-blue-100 -rotate-45" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER IMPACTANT */}
        <footer className="mt-24 bg-slate-900 rounded-[40px] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-500 blur-3xl"></div>
             <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-rose-500 blur-3xl"></div>
          </div>
          <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 relative z-10">
            Vous vendez du matériel ?
          </h3>
          <p className="text-slate-400 max-w-lg mx-auto mb-8 relative z-10 font-medium">
            Transformez votre ancien équipement en capital pour votre nouveau projet. Rejoignez les 200+ salons qui nous font confiance.
          </p>
          <button className="relative z-10 bg-white text-black px-10 py-5 rounded-full font-black uppercase text-sm tracking-[0.2em] hover:bg-orange-500 hover:text-white transition-all">
            Déposer une annonce gratuitement
          </button>
        </footer>
      </div>
    </div>
  );
};

export default EspaceVente;