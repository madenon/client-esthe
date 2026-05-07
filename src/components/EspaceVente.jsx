import { motion } from 'framer-motion';
import { MapPin, Clock, ShoppingCart, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      price: "75000 FCFA",
      location: "Plateau",
      usageTime: "Neuf",
      img: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=400&q=80"
    },


    {
      id: 9,
      category: "Accessoires",
      title: "Tondeuse 2 en 1 professionnelle avec accessoires",
      price: "15000 FCFA",
      location: "Plateau",
      usageTime: "Neuf",
      img: "/ton.png"
    },

     {
      id: 5,
      category: "Accessoires",
      title: "Accessoires pour salon de coiffure et esthétique",
      price: "175000 FCFA",
      location: "Plateau",
      usageTime: "Neuf",
      img: "/lave.png"
    },

     {
      id: 11,
      category: "Accessoires",
      title: " Bac a shampoing seconde en  porcelaine",
      price: "12500 FCFA",
      location: "Vente",
      usageTime: "Seconde main",
      img: "/fau.png"
    },
     {
      id: 12,
      category: "Accessoires",
      title: "Lot de 10 têtes malléables cheveux naturels",
      price: "75000 FCFA",
      location: "Plateau",
      usageTime: "Neuf",
      img: "/coi1.png"
    },
     {
      id: 4,
      category: "Accessoires",
      title: "Bac a shampoing seconde en  porcelaine",
      price: "12000 FCFA",
      location: "Plateau",
      usageTime: "Neuf",
      img: "/coi2.png"
    },
    
  ];

return (
    <div className="bg-[#fcfcfd] min-h-screen py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* EN-TÊTE ÉPURÉ */}
        <header className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <div className="flex items-center gap-2 text-rose-500 font-bold tracking-wider uppercase text-[10px] mb-3">
                <span className="w-8 h-[2px] bg-rose-500"></span>
                Marketplace Pro
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
                Équipement <span className="text-slate-400 font-light">&</span> <br />
                <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">Occasions</span>
              </h1>
            </div>
            
            <div className="flex gap-3">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100 text-xs font-semibold text-slate-600">
                <ShieldCheck size={14} className="text-blue-500" /> Vendeurs Vérifiés
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100 text-xs font-semibold text-slate-600">
                <Sparkles size={14} className="text-amber-500" /> Top Qualité
              </div>
            </div>
          </motion.div>
        </header>

        {/* LISTE DES ARTICLES */}
        <div className="grid grid-cols-1 gap-6">
          {articles.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-white border border-slate-100 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* IMAGE SECTION */}
              <div className="w-full md:w-56 h-56 md:h-auto overflow-hidden bg-slate-50 relative">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-[9px] font-bold px-2 py-1 uppercase rounded-md shadow-sm border border-slate-100">
                    {item.condition || "Vérifié"}
                  </span>
                </div>
              </div>

              {/* INFO SECTION */}
              <div className="flex-grow p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest bg-rose-50 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <MapPin size={12} />
                      <span className="text-[11px] font-medium uppercase">{item.location}</span>
                    </div>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight mb-4 group-hover:text-rose-600 transition-colors">
                    {item.title}
                  </h2>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-slate-700 bg-slate-50 px-2.5 py-1 rounded-lg">
                      <Clock size={13} />
                      <span className="text-[11px] font-semibold font-mono">{item.usageTime}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row items-center justify-between gap-4 mt-8 pt-5 border-t border-slate-50">
                  <div>
                    <span className="text-[10px] block font-bold text-slate-400 uppercase mb-0.5">Offre</span>
                    <span className="text-2xl font-black text-slate-900 leading-none">
                      {item.price}<span className="text-sm font-bold text-slate-400">FCFA</span>
                    </span>
                  </div>

                  <Link to="/contact" className="bg-slate-900 hover:bg-rose-600 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all active:scale-95 shadow-sm">
                    <ShoppingCart size={15} />
                    Contact
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER PLUS DOUX */}
        <footer className="mt-20 py-12 px-8 rounded-3xl bg-slate-900 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">Vendez votre matériel</h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto mb-8 font-medium">
              Rejoignez les professionnels qui renouvellent leur matériel via Goorco. Simple, rapide et sécurisé.
            </p>
            <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-rose-500 hover:text-white transition-all">
              Déposer une annonce
            </button>
          </div>
          {/* Cercles de fond subtils */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        </footer>
      </div>
    </div>
  );
};

export default EspaceVente;