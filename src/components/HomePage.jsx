import { useState, useRef } from "react";
import {
  Heart,
  Zap,
  Search,
  Users,
  Briefcase,
  MapPin,
  ChevronLeft,
  ChevronRight,
  CalendarDays
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { jobOffers as initialOffers } from "../apis/datas";
import Temoignage from "./Temoignage";

const HomePage = () => {
  const [activeZone, setActiveZone] = useState(null);
  const [activeCat, setActiveCat] = useState("Tous");
  const [userRole, setUserRole] = useState("Candidat");
  const [searchQuery, setSearchQuery] = useState("");
  const [offers, setOffers] = useState(initialOffers);
  const [serviceFilter, setServiceFilter] = useState("Tous");
  
  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const offersPerPage = 10;

  const resultsSectionRef = useRef(null);

  // Fonction pour descendre doucement vers les résultats
  const scrollToResults = () => {
    if (resultsSectionRef.current) {
      resultsSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Centralisation des changements de filtres pour éviter les useEffect
  const handleZoneChange = (zone) => {
    setActiveZone(activeZone === zone ? null : zone);
    setCurrentPage(1); // On réinitialise la page de manière synchrone lors de l'action
    setTimeout(scrollToResults, 100);
  };

  const handleServiceChange = (value) => {
    setServiceFilter(value);
    setCurrentPage(1); // On réinitialise la page ici aussi
    setTimeout(scrollToResults, 100);
  };

  // Fonction favori
  const toggleFavorite = (id) => {
    setOffers(
      offers.map((offer) => {
        if (offer.id === id) {
          return {
            ...offer,
            isFavorite: !offer.isFavorite,
            likes: offer.isFavorite ? offer.likes - 1 : offer.likes + 1,
          };
        }
        return offer;
      }),
    );
  };

  // =========================
  // FILTRAGE CALCULÉ À CHAQUE RENDU (Calcul Dérivé)
  // =========================
  const filteredOffers = offers.filter((offer) => {
    const matchZone = activeZone ? offer.zone === activeZone : true;
    const matchCat = activeCat === "Tous" || offer.category === activeCat;
    const query = searchQuery.toLowerCase();

    const matchSearch =
      offer.title.toLowerCase().includes(query) ||
      offer.description.toLowerCase().includes(query) ||
      offer.location.toLowerCase().includes(query) ||
      offer.category.toLowerCase().includes(query);

    const content = `
      ${offer.title}
      ${offer.description}
      ${offer.category}
      ${offer.location}
    `.toLowerCase();

    const matchService =
      serviceFilter === "Tous" ||
      (serviceFilter === "Travail" &&
        (content.includes("travail") || content.includes("emploi") || content.includes("recrutement"))) ||
      (serviceFilter === "Coiffeur" &&
        (content.includes("coiffeur") || content.includes("coiffeuse"))) ||
      (serviceFilter === "Esthéticienne" &&
        (content.includes("esthétique") || content.includes("esthéticienne"))) ||
      (serviceFilter === "Barbier" &&
        (content.includes("barbier") || content.includes("barber"))) ||
      (serviceFilter === "Apprenant" &&
        (content.includes("apprenti") || content.includes("stagiaire") || content.includes("formation"))) ||
      (serviceFilter === "Formation" &&
        (content.includes("formation") || content.includes("centre"))) ||
      (serviceFilter === "Gérance Libre" &&
        (content.includes("gérance libre") || content.includes("gerance libre"))) ||
      (content.includes("vente salon") || content.includes("fonds de commerce"));

    return matchZone && matchCat && matchSearch && matchService;
  });

  // CALCUL PAGINATION
  const indexOfLastOffer = currentPage * offersPerPage;
  const indexOfFirstOffer = indexOfLastOffer - offersPerPage;
  const currentOffers = filteredOffers.slice(indexOfFirstOffer, indexOfLastOffer);
  const totalPages = Math.ceil(filteredOffers.length / offersPerPage);

  const changePage = (page) => {
    setCurrentPage(page);
    setTimeout(scrollToResults, 100);
  };

  const serviceFilters = [
    "Tous",
    "Travail",
    "Coiffeuse",
    "Esthéticienne",
    "Barbier",
    "Apprenant",
    "Formation",
    "Gérance Libre",
  ];

  return (
    <div className="bg-[#f0f4f8] min-h-screen font-poppins pb-20 text-[#1e293b] relative">
      <section className="px-0 py-1 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              className={`flex items-center gap-2 px-1 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all shadow-sm ${
                userRole === "Candidat" ? "bg-blue-600 text-white" : "bg-white text-slate-400"
              }`}
              onClick={() => setUserRole("Candidat")}
            >
              <Users size={14} />
              <Link to="/espace-candidat">Espace Candidat</Link>
            </button>

            <button
              className={`flex items-center gap-2 px-1 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all shadow-sm ${
                userRole === "Employeur" ? "bg-white text-[#ff4da6]" : "bg-[#ff4da6] text-white"
              }`}
              onClick={() => setUserRole("Employeur")}
            >
              <Briefcase size={14} />
              <Link to="/espace-recruteur">Espace Recruteur</Link>
            </button>
          </div>

          <h2 className="text-3xl md:text-5xl font-black mb-4 text-blue-500">
            Goor<span className="text-[#ff4da6]">co</span><span className="text-blue-600">.com</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-4 max-w-2xl mx-auto mb-10">
            {/* FILTRE ZONE */}
            <div className="flex bg-blue-300 p-1.5 rounded-2xl shadow-xl shadow-blue-900/10 w-full md:flex-1 border border-slate-200">
              {["Abidjan", "Intérieur"].map((zone) => (
                <button
                  key={zone}
                  onClick={() => handleZoneChange(zone)}
                  className={`flex-1 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all ${
                    activeZone === zone ? "bg-[#1e293b] text-white" : "text-white hover:text-[#1e293b]"
                  }`}
                >
                  {zone}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 max-w-md mx-auto mb-3">
            <div>
              <span className="text-sm font-black text-slate-600 uppercase tracking-wider">
                Je cherche
              </span>
            </div>
            <select
              value={serviceFilter}
              onChange={(e) => handleServiceChange(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-4 text-sm font-bold text-slate-600 shadow-xl shadow-blue-900/5 focus:outline-none focus:border-pink-400"
            >
              {serviceFilters.map((filter) => (
                <option key={filter} value={filter}>
                  {`   ${filter}`}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <div ref={resultsSectionRef} className="max-w-6xl mx-auto px-1">
        <AnimatePresence mode="wait">
          {currentOffers.length > 0 ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {currentOffers.map((offer) => (
                  <motion.div
                    layout
                    key={offer.id}
                    className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden group hover:shadow-2xl transition-all duration-500 text-slate-800 flex flex-col"
                  >
                    {/* En-tête de la carte */}
                    <div className="bg-rose-50 relative flex flex-col items-center overflow-hidden w-full">
                      {offer.isUrgent && (
                        <div className="w-full bg-[#E10600] text-white py-3.5 flex items-center justify-center gap-2 text-xl font-black uppercase tracking-widest shadow-inner">
                          <span>URGENT</span>
                          <Zap size={20} fill="currentColor" className="animate-pulse" />
                        </div>
                      )}

                      <div className={`absolute right-4 bg-white/95 px-3 py-1.5 rounded-full shadow-sm flex items-center gap-2 text-slate-500 border border-slate-100 z-10 ${offer.isUrgent ? "top-16" : "top-4"}`}>
                        <Heart
                          size={14}
                          onClick={() => toggleFavorite(offer.id)}
                          className={`transition-all duration-300 cursor-pointer ${
                            offer.isFavorite ? "text-blue-500 fill-blue-500 scale-110" : "text-slate-400 group-hover:text-red-400"
                          }`}
                        />
                        <span className={`text-xs font-black tracking-tighter ${offer.isFavorite ? "text-blue-600" : "text-slate-500"}`}>
                          {offer.likes}
                        </span>
                      </div>

                      {offer.isFavorite && (
                        <div className={`absolute left-4 bg-blue-100 text-blue-600 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-sm border border-blue-200 z-10 ${offer.isUrgent ? "top-16" : "top-4"}`}>
                          <Heart size={11} fill="currentColor" />
                          Favori
                        </div>
                      )}

                      <div className={`py-10 text-center ${offer.isUrgent ? "pt-8 pb-10" : "py-12"}`}>
                        <h2 className="text-4xl font-black tracking-tight text-blue-600">
                          Goor<span className="text-[#ff4da6]">co</span>
                        </h2>
                      </div>
                    </div>

                    {/* Corps de la carte */}
                    <div className="p-7 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex gap-2">
                          <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider">
                            {offer.category}
                          </span>
                          <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1 ${offer.isDisponible !== false ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-600"}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${offer.isDisponible !== false ? "bg-emerald-500 animate-pulse" : "bg-red-500"}`}></span>
                            {offer.isDisponible !== false ? "Disponible" : "Indisponible"}
                          </span>
                        </div>
                        <span className="text-orange-600 font-black text-sm underline decoration-green-600 decoration-2 rounded-md px-0 py-1">
                          {offer.salary}
                        </span>
                      </div>

                      <h3 className="font-black text-[18px] mb-3 leading-snug text-slate-900">
                        {offer.title}
                      </h3>

                      <div className="flex items-center gap-1.5 mb-4">
                        <MapPin size={14} className="text-slate-400" />
                        <span className="text-[12px] font-bold uppercase text-slate-500">
                          {offer.location}
                        </span>
                      </div>

                      <p className="text-slate-500 text-[13px] leading-relaxed line-clamp-2 mb-6">
                        {offer.description}
                      </p>

                      <div className="mt-auto">
                        {offer?.img && (
                          <div className="w-full mb-4 overflow-hidden rounded-2xl">
                            <img src={offer.img} alt={offer.title} className="w-full h-52 object-cover rounded-2xl" />
                          </div>
                        )}

                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[11px] font-black uppercase tracking-[2px] text-slate-400">
                            Publié le 
                          </span>
                          <div className="flex items-center gap-1">
                            <CalendarDays size={14} className="text-slate-400" />
                            <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded-xl text-[11px] font-extrabold shadow-sm border border-slate-200">
                              {offer.date}
                            </span>
                          </div>
                        </div>

                        <Link
                          to={`/offre/${offer.id}`}
                          className="flex items-center justify-center gap-2 w-full bg-white border-2 border-slate-200 text-slate-600 font-black py-3.5 rounded-2xl transition-all text-[12px] uppercase tracking-widest hover:bg-slate-900 hover:text-white hover:border-slate-900"
                        >
                          Voir détails offre
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* PAGINATION */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-3 mt-14 flex-wrap">
                  <button
                    onClick={() => changePage(Math.max(currentPage - 1, 1))}
                    disabled={currentPage === 1}
                    className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center disabled:opacity-40"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => changePage(index + 1)}
                      className={`w-11 h-11 rounded-xl font-black text-sm transition-all ${
                        currentPage === index + 1
                          ? "bg-blue-600 text-white"
                          : "bg-white border border-slate-200 text-slate-500 hover:bg-blue-50"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    onClick={() => changePage(Math.min(currentPage + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center disabled:opacity-40"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="bg-white p-12 rounded-[3rem] shadow-xl shadow-blue-900/5 border border-slate-100 max-w-md">
                <Search size={48} className="text-slate-200 mx-auto mb-6" />
                <h3 className="font-bold text-2xl mb-3 text-slate-900">Aucun résultat</h3>
                <p className="text-slate-400 text-sm">
                  Nous n'avons trouvé aucune offre correspondant à vos critères actuels.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Temoignage />
    </div>
  );
};

export default HomePage;