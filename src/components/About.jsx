import { motion } from 'framer-motion';
import { Target, Users, ShieldCheck, Rocket } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="text-blue-500" size={32} />,
      title: "Notre Mission",
      description: "Connecter les talents d'Afrique de l'Ouest aux opportunités qui changeront leur vie."
    },
    {
      icon: <Users className="text-blue-500" size={32} />,
      title: "Proximité",
      description: "Une présence forte à Abidjan et Casablanca pour comprendre vos besoins locaux."
    },
    {
      icon: <ShieldCheck className="text-blue-500" size={32} />,
      title: "Confiance",
      description: "Toutes nos offres sont vérifiées pour garantir une expérience sécurisée."
    },
    {
      icon: <Rocket className="text-blue-500" size={32} />,
      title: "Innovation",
      description: "Utiliser la technologie pour simplifier le recrutement et la recherche de services."
    }
  ];

  return (
    <div className="bg-white min-h-screen font-poppins">
      {/* Header Section */}
      <section className="bg-[#0f172a] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-montserrat font-black text-3xl md:text-2xl text-white uppercase tracking-tighter mb-6"
          >
            À Propos de <span className="text-blue-500">MonOffre</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl font-light leading-relaxed"
          >
            Plus qu'une plateforme, nous sommes le pont entre vos ambitions et la réalité du marché ivoirien.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-montserrat font-bold text-3xl text-slate-900 uppercase">
              Qui sommes-nous ?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Fondée avec la volonté de dynamiser le marché de l'emploi en Côte d'Ivoire, 
              <strong> MonOffre</strong> est devenue la solution privilégiée pour ceux qui recherchent 
              du personnel qualifié ou des opportunités sérieuses.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Nous croyons fermement que chaque talent mérite d'être trouvé et que chaque entreprise 
              mérite les meilleurs collaborateurs. C'est pourquoi nous mettons l'humain au cœur de notre technologie.
            </p>
          </motion.div>

          {/* Valeurs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-500">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 py-16 px-6 mx-6 rounded-3xl mb-20 text-center text-white shadow-xl shadow-blue-500/20">
        <h2 className="font-montserrat font-black text-3xl uppercase mb-4">
          Prêt à commencer l'aventure ?
        </h2>
        <p className="mb-8 opacity-90 max-w-xl mx-auto font-light">
          Rejoignez des milliers d'utilisateurs qui font confiance à MonOffre chaque jour.
        </p>
        <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-slate-100 transition-all active:scale-95">
          Découvrir les offres
        </button>
      </section>
    </div>
  );
};

export default About;