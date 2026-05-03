import { MapPin, Banknote, MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage = () => {
  const jobOffers = [
    { id: 1, title: "Développeur React Junior", description: "Nous recherchons un talent passionné par le web pour intégrer une équipe dynamique à Abidjan.", price: "450.000 FCFA", location: "Abidjan, Cocody", whatsapp: "2250596132058" },
    { id: 2, title: "Commercial Terrain", description: "Développez notre portefeuille client dans le secteur de l'immobilier de luxe.", price: "300.000 FCFA + Com", location: "San-Pédro", whatsapp: "2250596132058" },
    { id: 3, title: "Gestionnaire de Stock", description: "Optimisation des flux logistiques et suivi rigoureux des inventaires en entrepôt.", price: "250.000 FCFA", location: "Bouaké", whatsapp: "2250596132058" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-poppins pb-10 overflow-x-hidden">
      
      {/* SECTION HERO AVEC IMAGE DE FOND */}
      <section className="relative h-[500px] flex items-center justify-center text-center px-6 mb-12 overflow-hidden">
        
        {/* L'image d'arrière-plan */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/leading.png')", // Remplace par ton image locale si besoin
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Overlay sombre pour la lisibilité */}
        <div className="absolute inset-0 bg-[#0f172a]/75 z-10" />

        {/* Contenu textuel (au-dessus de l'image) */}
        <div className="relative z-20 max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-montserrat font-black text-4xl md:text-6xl text-white uppercase tracking-tighter mb-4"
          >
            Trouvez votre <span className="text-blue-500">Opportunité</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-slate-200 font-light text-lg md:text-xl"
          >
            Explorez les meilleures offres d'emploi et services en Côte d'Ivoire.
          </motion.p>
        </div>
      </section>

      {/* Grille des Offres Animée */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobOffers.map((offer) => (
            <motion.div 
              key={offer.id} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="p-6">
                <h3 className="font-montserrat font-bold text-xl text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {offer.title}
                </h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  {offer.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-bold">
                    <Banknote size={14} />
                    {offer.price}
                  </div>
                  <div className="flex items-center gap-2 bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full text-xs font-medium">
                    <MapPin size={14} />
                    {offer.location}
                  </div>
                </div>

                <motion.a 
                  whileTap={{ scale: 0.95 }}
                  href={`https://wa.me/${offer.whatsapp}?text=Bonjour, je souhaite postuler pour l'offre : ${offer.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-500/20"
                >
                  <MessageCircle size={20} />
                  POSTULER VIA WHATSAPP
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;