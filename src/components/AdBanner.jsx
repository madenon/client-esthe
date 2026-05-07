import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  ArrowRight, Scissors, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdBanner = () => {
  const [index, setIndex] = useState(0);

  // 1. Données mises à jour pour l'Espace Vente
  const slides = useMemo(() => [
    {
      id: 'slide-1',
      icon: <Package className="text-rose-400" />,
      title: <>Matériel de <span className="text-rose-500">Coiffure ?</span></>,
      description: "Trouvez des bacs, fauteuils et séchoirs professionnels d'occasion à prix réduits.",
      buttonText: "Parcourir l'Espace Vente",
      link: "/espace-de-vente",
      imgUrl: "/model1.png",
      accentColor: "from-rose-200/30",
      themeColor: "bg-rose-500"
    },
    {
      id: 'slide-2',
      icon: <Scissors className="text-blue-400" />,
      title: <>Vendez votre <span className="text-blue-500">Équipement !</span></>,
      description: "Votre salon change de look ? Publiez gratuitement vos annonces de matériel pro ici.",
      buttonText: "Publier une annonce",
      link: "/espace-de-vente",
      imgUrl: "/model.png",
      accentColor: "from-blue-600/30",
      themeColor: "bg-blue-500"
    }
  ], []);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto px-4 md:px-6 mb-12 select-none"
    >
      {/* BANDEAU DÉFILANT (MARQUEE) */}
      <div className="w-full overflow-hidden bg-white border-y border-rose-100 py-2 mb-4">
        <div className="relative flex max-w-[100vw]">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="flex whitespace-nowrap"
          >
            {[1, 2].map((i) => (
              <span key={i} className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-blue-900 font-black px-4">
                Équipement & Opportunités ! Vendez ou cherchez du matériel pro pour coiffeurs et esthéticiennes. — 
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0f172a] p-8 md:p-12 shadow-2xl border border-white/5 min-h-[450px] md:min-h-[350px] flex items-center transition-all duration-700">
        
        {/* Fond dégradé dynamique */}
        <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${slides[index].accentColor} to-transparent opacity-40 transition-colors duration-1000`} />
        
        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* TEXTE */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center md:items-start"
              >
                <div className="bg-white/5 backdrop-blur-xl p-3 md:p-4 rounded-2xl w-fit mb-6 border border-white/10">
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

          {/* IMAGE ANIMÉE */}
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
                <div className={`absolute w-32 h-32 md:w-48 md:h-48 blur-[60px] opacity-60 rounded-full ${slides[index].themeColor} transition-colors duration-1000`} />
                <img 
                  src={slides[index].imgUrl} 
                  alt="Vente matériel"
                  className="w-auto h-44 md:h-56 object-contain relative z-20 drop-shadow-2xl"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/200?text=Goorco"; }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* INDICATEURS DE SLIDES */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 md:left-12 transform -translate-x-1/2 md:translate-x-0 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
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