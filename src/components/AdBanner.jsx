import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdBanner = () => {
  const [index, setIndex] = useState(0);

  const slides = useMemo(() => [
    {
      icon: <ShoppingBag className="text-blue-400" />,
      title: <>Besoin de <span className="text-blue-500">matériel pro ?</span></>,
      description: "Liquidation d'un stock de mèches humaines et synthétiques suite à fermeture de boutique",
      buttonText: "Voir les annonces",
      link: "/blog",
      // Remplace par tes vrais liens d'images PNG
      imgUrl: "/esthe.png", 
      accentColor: "bg-orange-600/20"
    },
    {
      icon: <Sparkles className="text-pink-400" />,
      title: <>Liquidez votre <span className="text-pink-500">matériel !</span></>,
      description: "Je mets en vente tout le matériel : 3 fauteuils, 2 bacs de lavage, miroirs et comptoir. État quasi neuf.",
      buttonText: "Vendre maintenant",
      link: "/contact",
      // Remplace par tes vrais liens d'images PNG
      imgUrl: "/esth.png",
      accentColor: "bg-pink-600/20"
    }
  ], []);

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
      <div className="relative overflow-hidden rounded-[2.5rem] bg-blue-700 p-8 md:p-12 shadow-2xl border border-slate-800 min-h-[400px] md:min-h-[320px] flex items-center">
        
        {/* Effet de fond lumineux dynamique */}
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] -mr-32 -mt-32 transition-colors duration-1000 ${slides[index].accentColor}`} />
        
        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Zone de texte animée */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center md:items-start"
              >
                <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl w-fit mb-6 border border-white/10">
                  {slides[index].icon}
                </div>
                <h2 className="text-white font-black text-3xl md:text-5xl uppercase tracking-tighter mb-4 leading-[1.1]">
                  {slides[index].title}
                </h2>
                <p className="text-slate-400 text-sm md:text-lg max-w-md font-medium mb-8">
                  {slides[index].description}
                </p>
                
                <Link
                  to={slides[index].link}
                  className="bg-white text-[#0f172a] font-black px-8 py-4 rounded-2xl shadow-xl hover:bg-slate-100 transition-all flex items-center gap-3 text-xs uppercase tracking-widest group"
                >
                  {slides[index].buttonText}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ZONE IMAGE (C'est ici qu'on gère le visuel PNG) */}
          <div className="flex-1 relative flex justify-center items-center h-[200px] md:h-[300px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 1.1, opacity: 0 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="relative"
              >
                {/* Cercle décoratif derrière l'image */}
                <div className={`absolute inset-0 scale-125 blur-3xl opacity-30 rounded-full ${index === 0 ? 'bg-orange-500' : 'bg-pink-500'}`} />
                
                <img 
                  src={slides[index].imgUrl} 
                  alt="Matériel de beauté"
                  className="w-auto h-48 md:h-64 object-contain relative z-20 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  // Si vous n'avez pas encore d'images, vous pouvez utiliser des placeholders :
                  // src={`https://via.placeholder.com/400x400/0f172a/ffffff?text=Image+PNG`}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Indicateurs de progression */}
        <div className="absolute bottom-8 left-1/2 md:left-12 transform -translate-x-1/2 md:translate-x-0 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? 'w-12 bg-white' : 'w-3 bg-slate-700'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AdBanner;