import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  Sparkles, UserPlus } from 'lucide-react';

const AdBanner = () => {
  const [index, setIndex] = useState(0);

  // 1. Définition des textes qui défilent
  const slides = [
    {
      icon: <Sparkles className="text-blue-400" />,
      title: <>À la recherche <span className="text-blue-500">de travail ?</span></>,
      description: "Contactez-nous dès maintenant pour intégrer les meilleurs salons de coiffure et instituts de beauté d'Abidjan."
    },
    {
      icon: <UserPlus className="text-blue-400" />,
      title: <>Besoin de <span className="text-blue-500">personnel ?</span></>,
      description: "Vous êtes un professionnel ? Trouvez rapidement du personnel qualifié et sérieux pour booster votre activité."
    }
  ];

  // 2. Logique de défilement automatique (toutes les 5 secondes)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const getAdWhatsAppLink = () => {
    const phone = "2250596132058";
    const message = encodeURIComponent("Bonjour Goorco Recrutement, je souhaite en savoir plus sur vos services.");
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    return isIOS 
      ? `whatsapp://send?phone=${phone}&text=${message}`
      : `https://wa.me/${phone}?text=${message}`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-6 mb-12"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0f172a] p-8 md:p-12 shadow-xl border border-slate-800 min-h-[320px] md:min-h-[280px] flex items-center">
        
        {/* Background Animé */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-20 -mt-20" />
        
        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Zone de texte avec Animation de défilement */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col items-center md:items-start"
              >
                <div className="bg-blue-500/20 p-3 rounded-2xl w-fit mb-4">
                  {slides[index].icon}
                </div>
                <h2 className="text-white font-montserrat font-black text-2xl md:text-4xl uppercase tracking-tighter mb-3 leading-tight">
                  {slides[index].title}
                </h2>
                <p className="text-slate-400 text-sm md:text-base max-w-md font-medium">
                  {slides[index].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bouton CTA */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={getAdWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-black px-10 py-5 rounded-2xl shadow-lg shadow-blue-900/20 transition-all flex items-center gap-3 whitespace-nowrap text-xs uppercase tracking-widest"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            Contactez-nous
          </motion.a>
        </div>

        {/* Indicateurs de défilement (Petits points en bas) */}
        <div className="absolute bottom-6 left-1/2 md:left-12 transform -translate-x-1/2 md:translate-x-0 flex gap-2">
          {slides.map((_, i) => (
            <div 
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-8 bg-blue-500' : 'w-2 bg-slate-700'}`}
            />
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default AdBanner;