import { motion } from 'framer-motion';
import { MapPin, Clock, Tag, ArrowRight } from 'lucide-react';

const EspaceVente = () => {
  // 1. Nos données (Simulant une API)
  const articles = [
    {
      id: 1,
      category: "Mobilier",
      title: "3 Fauteuils de coiffure vintage en cuir noir",
      price: "450 000 FCFA",
      location: "Cocody, Angré",
      usageTime: "2 ans d'utilisation",
      img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&q=80"
    },
    {
      id: 2,
      category: "Équipement",
      title: "Bac de lavage ergonomique avec douchette",
      price: "180 000 FCFA",
      location: "Yopougon, Maroc",
      usageTime: "6 mois (Quasi neuf)",
      img: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&q=80"
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
    // Ajoute ici 7 autres articles sur le même modèle...
  ];

  return (
    <section className="bg-white min-h-screen py-12 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* EN-TÊTE STYLE MAGAZINE */}
        <div className="border-b-2 border-slate-900 pb-4 mb-10">
          <h1 className="text-4xl font-black uppercase tracking-tighter text-slate-900">
            Équipement <span className="text-rose-500">&</span> Occasions
          </h1>
          <p className="text-slate-500 text-sm mt-2 font-medium">
            Les meilleures opportunités pour équiper votre salon au meilleur prix.
          </p>
        </div>

        {/* LISTE DES ARTICLES */}
        <div className="flex flex-col">
          {articles.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-row items-center gap-6 py-8 border-b border-slate-100 hover:bg-slate-50 transition-all cursor-pointer"
            >
              {/* IMAGE (Carrée comme sur le modèle) */}
              <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* CONTENU DROITE */}
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-rose-500">
                    {item.category}
                  </span>
                </div>

                <h2 className="text-lg md:text-xl font-bold text-slate-900 leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h2>

                {/* INFOS COMPLÉMENTAIRES */}
                <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400 font-bold uppercase tracking-tighter">
                  <div className="flex items-center gap-1">
                    <Tag size={12} className="text-slate-300" />
                    <span className="text-green-600">{item.price}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={12} />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{item.usageTime}</span>
                  </div>
                </div>
              </div>

              {/* FLÈCHE DISCRÈTE */}
              <div className="hidden md:block text-slate-200 group-hover:text-blue-500 transition-colors">
                <ArrowRight size={24} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* PIED DE PAGE */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 italic text-sm">
            Chaque jour, découvrez de nouveaux équipements pour bâtir votre équipe stable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EspaceVente;