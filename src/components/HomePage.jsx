import { useState, useEffect, useRef } from "react";
import {
  Heart,
  Zap,
  Search,
  Users,
  Briefcase,
  MapPin,
  ChevronLeft,
  ChevronRight,
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

  // 2. Fonction pour descendre doucement vers les résultats
  const scrollToResults = () => {
    if (resultsSectionRef.current) {
      resultsSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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

  // FILTRAGE

  useEffect(() => {
    setCurrentPage(1);

    setTimeout(() => {
      scrollToResults();
    }, 100);
  }, [activeZone, activeCat, searchQuery, serviceFilter]);

  // CALCUL PAGINATION
  const indexOfLastOffer = currentPage * offersPerPage;
  const indexOfFirstOffer = indexOfLastOffer - offersPerPage;

const filteredOffers = offers.filter((offer) => {

  // =========================
  // ZONE
  // =========================
  const matchZone = activeZone
    ? offer.zone === activeZone
    : true;

  // =========================
  // CATEGORIE
  // =========================
  const matchCat =
    activeCat === "Tous" ||
    offer.category === activeCat;

  // =========================
  // RECHERCHE TEXTE
  // =========================
  const query = searchQuery.toLowerCase();

  const matchSearch =
    offer.title.toLowerCase().includes(query) ||
    offer.description.toLowerCase().includes(query) ||
    offer.location.toLowerCase().includes(query) ||
    offer.category.toLowerCase().includes(query);

  // =========================
  // CONTENU GLOBAL
  // =========================
  const content = `
    ${offer.title}
    ${offer.description}
    ${offer.category}
    ${offer.location}
  `.toLowerCase();

  // =========================
  // FILTRE METIER / SERVICE
  // =========================
  const matchService =

    serviceFilter === "Tous" ||

    (
      serviceFilter === "Travail" &&
      (
        content.includes("travail") ||
        content.includes("emploi") ||
        content.includes("recrutement")
      )
    ) ||

    (
      serviceFilter === "Coiffeur" &&
      (
        content.includes("coiffeur") ||
        content.includes("coiffeuse")
      )
    ) ||

    (
      serviceFilter === "Esthéticienne" &&
      (
        content.includes("esthétique") ||
        content.includes("esthéticienne")
      )
    ) ||

    (
      serviceFilter === "Barbier" &&
      (
        content.includes("barbier") ||
        content.includes("barber")
      )
    ) ||

    (
      serviceFilter === "Apprenant" &&
      (
        content.includes("apprenti") ||
        content.includes("stagiaire") ||
        content.includes("formation")
      )
    ) ||

    (
      serviceFilter === "Formation" &&
      (
        content.includes("formation") ||
        content.includes("centre")
      )
    ) ||

    (
      serviceFilter === "Gérance Libre" &&
      (
        content.includes("gérance libre") ||
        content.includes("gerance libre")
      )
    ) ||

    (
      serviceFilter === "Salon à Vendre" &&
      (
        content.includes("salon à vendre") ||
        content.includes("vente salon") ||
        content.includes("fonds de commerce")
      )
    );

  // =========================
  // RESULTAT FINAL
  // =========================
  return (
    matchZone &&
    matchCat &&
    matchSearch &&
    matchService
  );

});
  const currentOffers = filteredOffers.slice(
    indexOfFirstOffer,
    indexOfLastOffer,
  );
  const totalPages = Math.ceil(filteredOffers.length / offersPerPage);

  const changePage = (page) => {
    setCurrentPage(page);

    setTimeout(() => {
      scrollToResults();
    }, 100);
  };

  const serviceFilters = [
    "Tous",
    "Travail",
    "Coiffeur",
    "Esthéticienne",
    "Barbier",
    "Apprenant",
    "Formation",
    "Gérance Libre",
    "Salon à Vendre",
  ];
  return (
    <div className="bg-[#f0f4f8] min-h-screen font-poppins pb-20 text-[#1e293b] relative">
      <section className="px-0 py-12 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              className={`flex items-center gap-2 px-1 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all shadow-sm ${
                userRole === "Candidat"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-400"
              }`}
              onClick={() => setUserRole("Candidat")}
            >
              <Users size={14} />
              <Link to="/espace-candidat">Espace Candidat</Link>
            </button>

            <button
              className={`flex items-center gap-2 px-1 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all shadow-sm ${
                userRole === "Employeur"
                  ? "bg-white text-[#ff4da6]"
                  : "bg-[#ff4da6] text-white"
              }`}
              onClick={() => setUserRole("Employeur")}
            >
              <Briefcase size={14} />
              <Link to="/espace-recruteur">Espace Recruteur</Link>
            </button>
          </div>

          <h2 className="text-3xl md:text-5xl font-black mb-4 text-blue-500">
            Goor
            <span className="text-[#ff4da6]">co</span>
            <span className="text-blue-600">.com</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-4 max-w-2xl mx-auto mb-10">
            {/* INPUT RECHERCHE : On peut aussi scroller quand l'utilisateur valide ou tape */}
            <div className="relative w-full md:flex-[1.5]">
              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Rechercher (ex: Yopougon, Coiffeuse...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && scrollToResults()} // Optionnel: Scroll sur Entrée
                className="w-full bg-white pl-14 pr-6 py-4 rounded-2xl shadow-xl shadow-blue-900/5 border border-slate-200 focus:outline-none focus:border-blue-400 text-sm"
              />
            </div>

            {/* FILTRE ZONE : On ajoute scrollToResults au clic */}
            <div className="flex bg-blue-600 p-1.5 rounded-2xl shadow-xl shadow-blue-900/5 w-full md:flex-1 border border-slate-200">
              {["Abidjan", "Intérieur"].map((zone) => (
                <button
                  key={zone}
                  onClick={() => {
                    setActiveZone(activeZone === zone ? null : zone);
                    scrollToResults(); // <--- ICI on descend
                  }}
                  className={`flex-1 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all ${
                    activeZone === zone
                      ? "bg-[#1e293b] text-white"
                      : "text-white hover:text-[#1e293b]"
                  }`}
                >
                  {zone}
                </button>
              ))}
            </div>
          </div>

   <div className="flex items-center gap-3 max-w-md mx-auto mb-10">
  
  

<select
  value={serviceFilter}
  onChange={(e) => setServiceFilter(e.target.value)}
  className="flex-1 bg-white border border-slate-200 rounded-2xl px-4 py-4 text-sm font-bold text-slate-600 shadow-xl shadow-blue-900/5 focus:outline-none focus:border-pink-400"
>
  {serviceFilters.map((filter) => (
    <option key={filter} value={filter}>
      {`Je cherche :   ${filter}`}
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
                    <div className="h-32 bg-rose-50 relative flex items-center justify-center overflow-hidden">
                      <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                        {offer.isUrgent && (
                          <div className="bg-red-100 text-red-600 px-1 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter flex items-center gap-1 shadow-sm animate-pulse border border-red-200">
                            <Zap size={12} fill="currentColor" />
                            Urgent
                          </div>
                        )}

                        {offer.isFavorite && (
                          <div className="bg-blue-100 text-blue-600 px-1 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter flex items-center gap-1 shadow-sm border border-blue-200">
                            <Heart size={12} fill="currentColor" />
                            Favorite
                          </div>
                        )}
                      </div>

                      <div className="absolute top-4 right-4 bg-white/90 px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-2 text-slate-500 border border-slate-100">
                        <Heart
                          size={14}
                          onClick={() => toggleFavorite(offer.id)}
                          className={`transition-all duration-300 cursor-pointer ${
                            offer.isFavorite
                              ? "text-blue-500 fill-blue-500 scale-110"
                              : "text-slate-400 group-hover:text-red-400"
                          }`}
                        />

                        <span
                          className={`text-xs font-black tracking-tighter ${
                            offer.isFavorite
                              ? "text-blue-600"
                              : "text-slate-500"
                          }`}
                        >
                          {offer.likes}
                        </span>
                      </div>

                      <h2 className="text-3xl md:text-5xl font-black mb-4 text-blue-600">
                        Goor
                        <span className="text-[#ff4da6]">co</span>
                      </h2>
                    </div>

                    <div className="p-7 flex flex-col flex-grow">
                      {/* ... début du p-7 ... */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex gap-2">
                          <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider">
                            {offer.category}
                          </span>

                          {/* BADGE DE DISPONIBILITÉ */}
                          <span
                            className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1 ${
                              offer.isDisponible !== false
                                ? "bg-emerald-100 text-emerald-600"
                                : "bg-red-100 text-red-600"
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                offer.isDisponible !== false
                                  ? "bg-emerald-500 animate-pulse"
                                  : "bg-red-500"
                              }`}
                            ></span>
                            {offer.isDisponible !== false
                              ? "Disponible"
                              : "Indisponible"}
                          </span>
                        </div>

                        <span className="text-orange-600 font-black text-sm underline decoration-green-600 decoration-2 rounded-md px-0 py-1">
                          {offer.salary}
                        </span>
                      </div>
                      {/* ... suite du titre ... */}

                      <h3
                        className={`font-black text-[18px] mb-3 leading-snug transition-colors duration-300 ${
                          offer.isUrgent
                            ? "text-gray-600"
                            : offer.isFavorite
                              ? "text-blue-600"
                              : "text-slate-900"
                        }`}
                      >
                        {offer.title}
                      </h3>

                      <div className="flex items-center gap-1.5 mb-4">
                        <MapPin
                          size={14}
                          className={
                            offer.isUrgent
                              ? "text-red-500"
                              : offer.isFavorite
                                ? "text-blue-500"
                                : "text-slate-400"
                          }
                        />

                        <span className="text-[12px] font-bold uppercase text-slate-500">
                          {offer.location}
                        </span>
                      </div>

                      <p className="text-slate-500 text-[13px] leading-relaxed line-clamp-2 mb-6">
                        {offer.description}
                      </p>

                      <div className="mt-auto">
                        <Link
                          to={`/offre/${offer.id}`}
                          className={`flex items-center justify-center gap-2 w-full bg-white border-2 font-black py-3.5 rounded-2xl transition-all text-[12px] uppercase tracking-widest ${
                            offer.isUrgent
                              ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                              : offer.isFavorite
                                ? "border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                                : "border-slate-200 text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900"
                          }`}
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
                    onClick={() =>
                      changePage(Math.min(currentPage + 1, totalPages))
                    }
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

                <h3 className="font-bold text-2xl mb-3 text-slate-900">
                  Aucun résultat
                </h3>

                <p className="text-slate-400 text-sm">
                  Nous n'avons trouvé aucune offre correspondant à vos critères
                  actuels.
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
