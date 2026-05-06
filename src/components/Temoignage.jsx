import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { testimonials } from '../apis/datas'; // Utilise ton fichier de données

const Temoignage = () => {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* EN-TÊTE DE LA SECTION */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter">
            La parole à nos <span className="text-blue-600">Talents</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#ff4da6] mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-500 mt-6 max-w-2xl mx-auto font-medium">
            Découvrez comment Goorco transforme le quotidien des professionnels de la beauté en Côte d'Ivoire.
          </p>
        </div>

        {/* GRILLE DES TÉMOIGNAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 relative flex flex-col"
            >
              {/* Icône de citation décorative */}
              <Quote className="absolute top-8 right-8 text-slate-100 group-hover:text-blue-50" size={40} />

              {/* Étoiles de notation */}
              <div className="flex gap-1 mb-5">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Contenu du message */}
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow italic">
                "{item.content}"
              </p>

              {/* Profil de l'utilisateur */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <div className="relative">
                  <img 
                    src={item.avatar} 
                    alt={item.name} 
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-blue-50"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base leading-none mb-1">
                    {item.name}
                  </h4>
                  <span className="text-blue-600 text-[10px] font-black uppercase tracking-widest">
                    {item.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Temoignage;