import React from 'react';
import { Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] font-montserrat text-white pt-12 pb-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Section 1 : Identité visuelle (Logo Amélioré) */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 group cursor-pointer">
              {/* Conteneur de l'image avec un effet de bordure subtil */}
              <div className="relative p-1 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                <img 
                  className="w-10 h-10 object-contain bg-[#0f172a] rounded-md p-1" 
                  src="/hero.png" 
                  alt="Logo MonOffre" 
                />
              </div>
              
              {/* Texte du Logo avec style typographique */}
              <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tighter uppercase leading-none">
                  Goo<span className="text-blue-500">r</span>
                </span>
                <span className="text-[10px] text-blue-400 tracking-[0.2em] font-light uppercase">
                 Coiffure • Esthétique • Opportunité
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm max-w-sm leading-relaxed border-l-2 border-blue-500/30 pl-4">
              Votre plateforme de confiance pour les meilleures opportunités. 
            </p>
          </div>

          {/* Section 2 : Coordonnées des Sièges (inchangée mais alignée) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
            {/* Siège Abidjan */}
            <div className="space-y-3">
              <h3 className="text-blue-500 font-bold text-sm uppercase tracking-widest">Abidjan</h3>
              <div className="flex items-center gap-3 group">
                <div className="bg-slate-800 p-2 rounded-full group-hover:bg-blue-500/20 transition-colors">
                  <Phone size={18} className="text-blue-500" />
                </div>
                <span className="text-sm font-medium">+225 05 96 13 20 58</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-slate-500" />
                <span className="text-xs text-slate-400 italic">Côte d'Ivoire</span>
              </div>
            </div>

            {/* Siège Maroc */}
            <div className="space-y-3">
              <h3 className="text-blue-500 font-bold text-sm uppercase tracking-widest">Maroc</h3>
              <div className="flex items-center gap-3 group">
                <div className="bg-slate-800 p-2 rounded-full group-hover:bg-blue-500/20 transition-colors">
                  <Phone size={18} className="text-blue-500" />
                </div>
                <span className="text-sm font-medium">+212 7 82 61 70 02</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-slate-500" />
                <span className="text-xs text-slate-400 italic">Casablanca</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[10px] uppercase tracking-widest">
          <p>© {new Date().getFullYear()} MonOffre. Réalisé avec excellence.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;