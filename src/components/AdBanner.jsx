import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdBanner = () => {
  const [index, setIndex] = useState(0);

  const slides = useMemo(() => [
    {
      id: 'slide-1',
      icon: <ShoppingBag className="text-blue-400" />,
      title: <>Besoin de <span className="text-blue-500">matériel pro ?</span></>,
      description: "Liquidation d'un stock de mèches humaines et synthétiques suite à fermeture de boutique",
      buttonText: "Voir les annonces",
      link: "/blog",
      imgUrl: "/esthe.png", 
      accentColor: "from-orange-600/30", // Changé pour un dégradé
      themeColor: "bg-orange-500"
    },
    {
      id: 'slide-2',
      icon: <Sparkles className="text-pink-400" />,
      title: <>Liquidez votre <span className="text-pink-500">matériel !</span></>,
      description: "Je mets en vente tout le matériel : 3 fauteuils, 2 bacs de lavage, miroirs et comptoir. État quasi neuf.",
      buttonText: "Vendre maintenant",
      link: "/contact",
      imgUrl: "/esth.png",
      accentColor: "from-pink-600/30",
      themeColor: "bg-pink-500"
    }
  ], []);

  // Fonction pour changer de slide de manière sécurisée
  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  // Gestion du Timer automatique
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000); // 6 secondes pour laisser le temps de lire
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto px-4 md:px-6 mb-12 select-none"
    >
     {/* SURTITRE ANIMÉ (EFFET MARQUEE) */}
{/* BANDEAU DÉFILANT ANIMÉ */}
<div className="w-full overflow-hidden bg-white/50 border-y border-rose-100 py-2 mb-4">
  <div className="relative flex max-w-[100vw]">
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: "-50%" }} // On déplace de la moitié car le texte est doublé
      transition={{
        repeat: Infinity,
        duration: 15, // Plus rapide pour le mobile
        ease: "linear",
      }}
      className="flex whitespace-nowrap"
    >
      {/* Première occurrence du texte */}
      <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-blue-900 font-black px-4">
        Équipement & Opportunités ! Vous vendez ou cherchez du matériel pro ? 
        Découvrez nos annonces exclusives pour coiffeurs et esthéticiennes. — 
      </span>

      {/* Deuxième occurrence pour l'effet de boucle infinie sans trou */}
      <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-blue-900 font-black px-4">
        Équipement & Opportunités ! Vous vendez ou cherchez du matériel pro ? 
        Découvrez nos annonces exclusives pour coiffeurs et esthéticiennes. — 
      </span>
    </motion.div>
  </div>
</div>
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0f172a] p-8 md:p-12 shadow-2xl border border-white/5 min-h-[450px] md:min-h-[350px] flex items-center transition-all duration-700">
        
        {/* Effet de fond lumineux dynamique (Gradient radial) */}
        <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${slides[index].accentColor} to-transparent opacity-40 transition-colors duration-1000`} />
        
        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* ZONE TEXTE */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col items-center md:items-start"
              >
                <div className="bg-white/5 backdrop-blur-xl p-3 md:p-4 rounded-2xl w-fit mb-6 border border-white/10 shadow-inner">
                  {slides[index].icon}
                </div>
                
                <h2 className="text-white font-black text-2xl md:text-4xl uppercase tracking-tighter mb-4 leading-tight">
                  {slides[index].title}
                </h2>
                
                <p className="text-slate-400 text-sm md:text-base max-w-sm mb-8 font-medium leading-relaxed">
                  {slides[index].description}
                </p>
                
                <Link
                  to={slides[index].link}
                  className="bg-white text-slate-950 font-black px-8 py-4 rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 text-[10px] uppercase tracking-widest group"
                >
                  {slides[index].buttonText}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ZONE IMAGE */}
          <div className="flex-1 relative flex justify-center items-center h-[180px] md:h-[280px] w-full order-1 md:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.5, type: "spring", damping: 15 }}
                className="relative flex justify-center items-center"
              >
                {/* Halo lumineux derrière l'image */}
                <div className={`absolute w-32 h-32 md:w-48 md:h-48 blur-[60px] md:blur-[100px] opacity-60 rounded-full ${slides[index].themeColor} transition-colors duration-1000`} />
                
                <img 
                  src={slides[index].imgUrl} 
                  alt="Promotion Goorco"
                  className="w-auto h-32 md:h-56 object-contain relative z-20 drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/200?text=Goorco"; }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* INDICATEURS */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 md:left-12 transform -translate-x-1/2 md:translate-x-0 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Aller au slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? 'w-10 bg-white' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AdBanner;