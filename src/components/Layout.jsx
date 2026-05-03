import Footer from "./Footer";
import Navbar from "./Navbar";


const Layout = ({ children }) => {
  return (
    // relative = pour bien gérer les z-index des éléments fixed
    <div className="min-h-screen flex flex-col bg-white relative">
      
      {/* Navbar fixed */}
      <Navbar />

      {/* 
        On ajoute un padding-top équivalent à la hauteur de la Navbar
        pour éviter que le contenu passe dessous (surtout en mobile)
      */}
      <main className="w-full flex-1 relative z-0 pt-[90px] md:pt-[100px]">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;