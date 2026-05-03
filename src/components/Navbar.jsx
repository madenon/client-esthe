import  { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Chemins correspondants à tes routes dans App.js
  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-[#0f172a] font-montserrat text-white shadow-lg sticky top-0 z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO (Utilisation de Link pour un retour accueil fluide) */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="relative p-1 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300">
              <img 
                className="w-9 h-9 object-contain bg-[#0f172a] rounded-md p-1" 
                src="/hero.png" 
                alt="Logo MonOffre" 
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-2xl tracking-tighter uppercase leading-none">
                Mon<span className="text-blue-500">Offre</span>
              </span>
            </div>
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href} // Changé de 'href' à 'to'
                className="text-sm font-semibold hover:text-blue-400 transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* BOUTON MOBILE */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-slate-800 rounded-full transition-colors">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* SIDEBAR MOBILE */}
      <div className={`fixed top-0 left-0 h-full w-72 bg-[#0f172a] transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out z-50 shadow-2xl md:hidden border-r border-slate-800`}>
        <div className="p-8">
          <div className="flex justify-between items-center mb-12">
            <span className="font-bold text-xl text-blue-500 uppercase tracking-widest">Menu</span>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <X size={28} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href} // Redirection mobile fluide
                onClick={() => setIsOpen(false)} // Ferme le menu après clic
                className="text-lg font-medium text-slate-300 hover:text-blue-400 border-b border-slate-800/50 pb-2 transition-all active:pl-2"
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-blue-500 text-white w-full py-4 rounded-xl font-bold mt-4 shadow-lg hover:bg-blue-600 transition-colors">
              Publier une offre
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;