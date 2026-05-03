import { MapPin, Banknote, MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage = () => {
const jobOffers = [
  // --- SECTEUR TECH & BUREAU ---
  { id: 1, title: "Développeur React Junior", description: "Développement d'interfaces modernes et intégration d'API pour une startup tech.", price: "150.000 FCFA", location: "Abidjan, Cocody", whatsapp: "2250596132058" },
  { id: 2, title: "Commercial Terrain", description: "Prospection et vente de solutions immobilières auprès d'une clientèle haut de gamme.", price: "100.000 FCFA + Com", location: "San-Pédro", whatsapp: "2250596132058" },
  { id: 3, title: "Gestionnaire de Stock", description: "Suivi des inventaires et gestion logistique pour une chaîne de distribution.", price: "85.000 FCFA", location: "Bouaké", whatsapp: "2250596132058" },
  { id: 4, title: "Assistant Administratif", description: "Gestion du courrier, accueil téléphonique et organisation d'agendas professionnels.", price: "120.000 FCFA", location: "Abidjan, Plateau", whatsapp: "2250596132058" },

  // --- SERVICES À LA PERSONNE (Ménage & Nounou) ---
  { id: 5, title: "Nounou à domicile", description: "Garde de deux enfants en bas âge, aide aux devoirs et préparation des repas légers.", price: "60.000 FCFA", location: "Abidjan, Riviera 3", whatsapp: "2250596132058" },
  { id: 6, title: "Agent de Ménage", description: "Entretien régulier d'appartements : nettoyage, repassage et rangement.", price: "45.000 FCFA", location: "Abidjan, Marcory", whatsapp: "2250596132058" },
  { id: 7, title: "Gouvernante de Maison", description: "Gestion complète du foyer, cuisine et supervision du personnel de maison.", price: "90.000 FCFA", location: "Assinie", whatsapp: "2250596132058" },
  { id: 8, title: "Nounou de Nuit", description: "Surveillance et soins pour nouveau-né durant la nuit (20h - 06h).", price: "75.000 FCFA", location: "Abidjan, Angré", whatsapp: "2250596132058" },
  { id: 9, title: "Nettoyage de Bureaux", description: "Entretien quotidien des espaces de travail après les heures de bureau.", price: "50.000 FCFA", location: "Abidjan, Zone 4", whatsapp: "2250596132058" },

  // --- ESTHÉTIQUE & BIEN-ÊTRE ---
  { id: 10, title: "Esthéticienne Pro", description: "Soins du visage, épilation et conseils personnalisés en cosmétique.", price: "80.000 FCFA", location: "Abidjan, Deux-Plateaux", whatsapp: "2250596132058" },
  { id: 11, title: "Prothésiste Ongulaire", description: "Pose de gel, résine et nail art tendance pour une clientèle exigeante.", price: "70.000 FCFA", location: "Abidjan, Biétry", whatsapp: "2250596132058" },
  { id: 12, title: "Coiffeuse Tresses", description: "Spécialiste des tresses africaines, perruques et soins capillaires.", price: "55.000 FCFA", location: "Abidjan, Yopougon", whatsapp: "2250596132058" },
  { id: 13, title: "Masseur Bien-être", description: "Pratique de massages relaxants et sportifs à domicile ou en institut.", price: "95.000 FCFA", location: "Abidjan, Bassam", whatsapp: "2250596132058" },
  { id: 14, title: "Maquilleuse (Make-up Artist)", description: "Maquillage professionnel pour mariages, cérémonies et séances photos.", price: "15.000 FCFA / Presta", location: "Abidjan, Koumassi", whatsapp: "2250596132058" },
  { id: 15, title: "Technicien en Cils", description: "Pose d'extensions de cils (volume russe, cil à cil) et rehaussement.", price: "65.000 FCFA", location: "Abidjan, Cocody", whatsapp: "2250596132058" }
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