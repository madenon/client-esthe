import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Ajout de l'icône Briefcase
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    // { name: 'RECRUTEMENT', href: '/recruteur' },
    { name: 'Blog de ventes', href: '/blog' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-[#0f172a]/10 font-montserrat text-white shadow-xl sticky top-0 z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
<Link to="/" className="flex items-center gap-4 cursor-pointer group">
  {/* Conteneur de l'icône PNG */}
  <div className="relative flex items-center justify-center w-12 h-12  rounded-xl shadow-lg  border-white/5">
    <img 
      src="/hero.png" 
      alt="Logo Goorcoco Cosmétique" 
      className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110" 
    />
    {/* Point lumineux décoratif */}
    <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-[#1e293b] shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
  </div>

  {/* Texte du Logo mis à jour */}
  <div className="flex flex-col justify-center">
    <div className="flex items-center gap-1.5">
      <span className="font-black text-2xl tracking-tighter leading-none">
        <span className="text-blue-700">Goor</span>
        <span className="text-[#ff4da6]">co</span>
        <span className="text-blue-500">.</span>
      </span>
    </div>
    
    {/* Slogan en sous-titre */}
    <div className="flex items-center gap-1 mt-1">
      <span className="text-[9px] font-medium text-[#ff4da6] uppercase tracking-[0.2em] leading-none">
        Coiffure <span className="text-blue-500/50">•</span> Esthétique <span className="text-blue-500/50">•</span> Opportunité
      </span>
    </div>
  </div>
</Link>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center space-x-10 text-black">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm uppercase font-semibold hover:text-blue-400 transition-colors duration-200 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
           
          </div>

          {/* BOUTON MOBILE */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-400 hover:text-white transition-colors">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* SIDEBAR MOBILE */}
      <div className={`fixed top-0 left-0 h-full w-72 bg-[#111a2e] transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out z-[60] shadow-2xl md:hidden border-r border-slate-800`}>
        <div className="p-8">
          <div className="flex justify-between items-center mb-12">
            <span className="font-bold text-xl text-blue-500 uppercase tracking-widest italic">Menu</span>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <X size={28} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-300 hover:text-blue-400 border-b border-slate-800/50 pb-2 transition-all"
              >
                {link.name}
              </Link>
            ))}
           
          </div>
        </div>
      </div>
      
      {/* Overlay pour le menu mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-[55] md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;