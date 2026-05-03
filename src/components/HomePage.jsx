import { useState } from 'react';
import { MapPin, MessageCircle, Heart, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import AdBanner from './AdBanner';

const HomePage = () => {
  // Données mises à jour avec tes mots-clés métiers
  const jobOffers = [
    { id: 1, category: "Tresse", title: "Emploi Tresseuse Abidjan", description: "Le salon recrute tresseuse experte en pose tissage et tresses africaines. Poste basé à Yopougon.", location: "Abidjan, Yopougon", whatsapp: "2250596132058" },
    { id: 2, category: "Onglerie", title: "Emploi Prothésiste Ongulaire Gel", description: "Recrutement prothésiste ongulaire gel et résine pour un institut de beauté haut de gamme.", location: "Abidjan, Cocody", whatsapp: "2250596132058" },
    { id: 3, category: "Perruque", title: "Job Pose Perruque Abidjan", description: "Spécialiste wig styling recherchée pour pose perruque sans diplôme exigé. Travail soigné demandé.", location: "Abidjan, Marcory", whatsapp: "2250596132058" },
    { id: 4, category: "Barber", title: "Emploi Barber Abidjan", description: "Barber cherche salon à Cocody ? Nous recrutons pour coupe homme et design barbe moderne.", location: "Abidjan, Cocody", whatsapp: "2250596132058" },
    { id: 5, category: "Massage", title: "Emploi Masseuse Abidjan", description: "Recherche masseuse pour massage bien-être et soins esthétiques en institut de luxe.", location: "Abidjan, Zone 4", whatsapp: "2250596132058" },
    { id: 6, category: "Makeup", title: "Job Makeup Artist Abidjan", description: "Coiffeuse mariage et maquilleuse disponible pour prestations VIP et cérémonies.", location: "Abidjan, Plateau", whatsapp: "2250596132058" },
    { id: 7, category: "Dreadlocks", title: "Emploi Coiffeuse Dame Dreadlocks", description: "Salon recrute coiffeuse spécialisée en dreadlocks et soins naturels en Côte d'Ivoire.", location: "Abidjan, Riviera 2", whatsapp: "2250596132058" },
    { id: 8, category: "Tresse", title: "Job Pose Tissage CI", description: "Salon de coiffure recrute tresseuse polyvalente pour tresses et poses de mèches.", location: "Abidjan, Angré", whatsapp: "2250596132058" },
  ];

  const [filter, setFilter] = useState('Tous');
  const categories = ['Tous', 'Tresse', 'Onglerie', 'Perruque', 'Barber', 'Massage', 'Makeup', 'Dreadlocks'];

  // Fonction spécifique pour iPhone / iOS
  const getWhatsAppLink = (phone, title) => {
    const text = encodeURIComponent(`Bonjour Goor Recrutement, je suis intéressé par l'offre : ${title}`);
    // Détection iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    return isIOS 
      ? `whatsapp://send?phone=${phone}&text=${text}`
      : `https://wa.me/${phone}?text=${text}`;
  };

  const filteredOffers = filter === 'Tous' 
    ? jobOffers 
    : jobOffers.filter(offer => offer.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-poppins pb-20">
      <AdBanner />

      
      {/* HERO SECTION */}
      <section className="relative h-[480px] flex items-center justify-center text-center px-6 mb-12 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/leading.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-[#0f172a]/85 z-10" />

        <div className="relative z-20 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full mb-6"
          >
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase italic">N°1 Emploi Beauté CI</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-montserrat font-black text-4xl md:text-7xl text-white uppercase tracking-tighter mb-6 leading-none"
          >
            Goor <span className="text-blue-500">Recrutement</span>
          </motion.h1>
          <p className="text-slate-300 text-lg md:text-xl font-light max-w-2xl mx-auto">
            La première plateforme d'<strong>emploi coiffure et onglerie</strong> à Abidjan.
          </p>
        </div>
      </section>
      {/* FILTRES MÉTIERS */}
      <div className="max-w-7xl mx-auto px-6 mb-12 overflow-x-auto whitespace-nowrap py-4 no-scrollbar">
        <div className="flex gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-7 py-3 rounded-xl font-bold text-sm transition-all duration-300 shadow-sm border ${
                filter === cat 
                ? 'bg-blue-600 border-blue-600 text-white scale-105 shadow-blue-500/30' 
                : 'bg-white border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>


      {/* GRILLE DES OFFRES */}
      <motion.div 
        key={filter}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredOffers.map((offer) => (
          <motion.div 
            key={offer.id} 
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl shadow-sm border border-slate-200 p-7 hover:shadow-2xl transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
              <Briefcase size={120} />
            </div>

            <div className="flex justify-between items-center mb-6">
               <span className="bg-slate-100 text-slate-600 text-[10px] font-black uppercase px-4 py-1.5 rounded-full border border-slate-200">
                 {offer.category}
               </span>
               <Heart size={20} className="text-slate-300 hover:text-red-500 cursor-pointer transition-colors" />
            </div>

            <h3 className="font-montserrat font-bold text-xl text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
              {offer.title}
            </h3>
            
            <p className="text-slate-500 text-sm mb-8 leading-relaxed line-clamp-3">
              {offer.description}
            </p>

            <div className="flex items-center gap-2 text-slate-900 text-xs font-black bg-blue-50/50 w-fit px-4 py-2 rounded-xl mb-8">
              <MapPin size={16} className="text-blue-500" />
              {offer.location}
            </div>

            <motion.a 
              whileTap={{ scale: 0.96 }}
              href={getWhatsAppLink(offer.whatsapp, offer.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#0f172a] hover:bg-blue-600 text-white font-bold py-4 rounded-2xl transition-all shadow-lg"
            >
              <MessageCircle size={20} />
              DISCUTER SUR WHATSAPP
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HomePage;