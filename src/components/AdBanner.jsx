import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdBanner = () => {
  const [index, setIndex] = useState(0);

  // Utilisation de useMemo pour éviter de redéfinir les slides inutilement
  const slides = useMemo(() => [
    {
      icon: <ShoppingBag className="text-orange-400" />,
      title: <>Besoin de <span className="text-orange-500">matériel pro ?</span></>,
      description: "Liquidation d'un stock de mèches humaines et synthétiques suite à fermeture de boutique",
      buttonText: "Voir les annonces",
      link: "/blog"
    },
    {
      icon: <Sparkles className="text-pink-400" />,
      title: <>Liquidez votre <span className="text-pink-500">matériel !</span></>,
      description: "Je mets en vente tout le matériel : 3 fauteuils, 2 bacs de lavage, miroirs et comptoir. État quasi neuf.",
      buttonText: "Vendre maintenant",
      link: "/contact" // Ou le lien vers le formulaire de dépôt
    }
  ], []);

  // Défilement automatique
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 md:px-6 mb-12"
    >
      <div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-[#0f172a] p-8 md:p-12 shadow-2xl border border-slate-800 min-h-[350px] md:min-h-[280px] flex items-center">
        
        {/* Effet de fond lumineux dynamique */}
        <div 
          className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] -mr-20 -mt-20 transition-colors duration-1000 ${
            index === 0 ? 'bg-orange-600/20' : 'bg-pink-600/20'
          }`} 
        />
        
        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Zone de texte animée */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col items-center md:items-start"
              >
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl w-fit mb-6 border border-white/10 shadow-inner">
                  {slides[index].icon}
                </div>
                <h2 className="text-white font-black text-2xl md:text-4xl uppercase tracking-tighter mb-4 leading-tight">
                  {slides[index].title}
                </h2>
                <p className="text-slate-400 text-sm md:text-base max-w-md font-medium leading-relaxed">
                  {slides[index].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bouton d'action dynamique */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full md:w-auto"
          >
            <Link
              to={slides[index].link}
              className="bg-white text-[#0f172a] font-black px-10 py-5 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 whitespace-nowrap text-xs uppercase tracking-widest group w-full"
            >
              {slides[index].buttonText}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Indicateurs (Points) */}
        <div className="absolute bottom-6 left-1/2 md:left-12 transform -translate-x-1/2 md:translate-x-0 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? 'w-8 bg-orange-500' : 'w-2 bg-slate-700'
              }`}
              aria-label={`Aller au slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default AdBanner;