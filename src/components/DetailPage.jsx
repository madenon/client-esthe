import{ useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { jobOffers } from '../apis/datas';
import { FaWhatsapp } from "react-icons/fa";
import { 
  MapPin, ArrowLeft, Calendar, 
  DollarSign, Briefcase, Share2, Users 
} from 'lucide-react';

const DetailPage = () => {
  // 1. Récupération de l'ID et de l'offre
  const { id } = useParams();
  const offer = jobOffers.find((item) => item.id === Number(id));

  // 🔄 Force le défilement tout en haut au chargement de la page de détails
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]); // Se déclenche à chaque fois que l'ID de l'offre change

  // 2. Construction de l'URL de l'offre pour le partage
  const shareUrl = `${window.location.origin}/offre/${id}`;

  // 3. Logique de partage universelle
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Offre Goorco : ${offer?.title}`,
          text: `Regarde cette offre d'emploi que j'ai trouvée sur Goorco : ${offer?.title}`,
          url: shareUrl,
        });
      } catch (error) {
        console.log("Erreur de partage :", error);
      }
    } else {
      // Solution de secours si le partage natif n'est pas dispo
      navigator.clipboard.writeText(shareUrl);
      alert("Lien de l'offre copié dans le presse-papier !");
    }
  };

  // 4. Si l'offre n'existe pas
  if (!offer) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-[#1e293b]">
        <h2 className="text-2xl font-bold mb-4">Oups ! Offre introuvable.</h2>
        <Link to="/" className="text-blue-600 font-bold flex items-center gap-2">
          <ArrowLeft size={18} /> Retour à l'accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#f0f4f8] min-h-screen pb-20 font-poppins text-[#1e293b]">
      {/* HEADER FIXE */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <ArrowLeft size={24} className="text-slate-600" />
          </Link>
          <span className="font-black text-sm uppercase tracking-widest text-slate-400">Détails de l'offre</span>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-8">
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
          
          {/* BANNIÈRE BLEUE */}
          <div className="bg-blue-600 p-10 text-white">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold uppercase">
                {offer.category}
              </span>
              {offer.isUrgent && (
                <span className="bg-red-500 px-3 py-1 rounded-lg text-[10px] font-bold uppercase animate-pulse">
                  Urgent
                </span>
              )}
            </div>
            <h1 className="text-3xl font-black mb-4 leading-tight">{offer.title}</h1>
            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span className="font-medium">{offer.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign size={18} />
                <span className="font-bold text-white">{offer.salary}</span>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            {/* GRILLE INFOS RAPIDES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
               <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
                  <Briefcase className="text-blue-500" size={20} />
                  <div>
                    <p className="text-slate-400 text-[10px] uppercase font-bold">Contrat</p>
                    <p className="text-slate-700 font-bold text-sm">Temps plein</p>
                  </div>
               </div>
               <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
                  <Calendar className="text-blue-500" size={20} />
                  <div>
                    <p className="text-slate-400 text-[10px] uppercase font-bold">Publication</p>
                    <p className="text-slate-700 font-bold text-sm">{offer.date || "Récemment"}</p>
                  </div>
               </div>
            </div>

            {/* DESCRIPTION */}
            <div className="prose prose-slate max-w-none mb-12">
              <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">Description du poste</h3>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                {offer.description}
              </p>
            </div>

            <hr className="border-slate-100 mb-12" />

            {/* --- ZONE D'ACTIONS DOUBLES --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* BLOC 1 : POSTULER (WHATSAPP) */}
              <div className="p-8 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 flex flex-col items-center text-center">
                <div className="bg-emerald-500 text-white p-4 rounded-2xl mb-4 shadow-lg shadow-emerald-200">
                  <FaWhatsapp size={32} />
                </div>
                
                <a 
                  href={`https://api.whatsapp.com/send?phone=${offer.whatsapp}&text=${encodeURIComponent(
                    `Bonjour, je vous contacte via Goorco.com pour l'offre : ${offer.title}\nLien : ${shareUrl}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black py-4 rounded-2xl transition-all shadow-md uppercase tracking-widest text-[10px]"
                >
                  Intéressé par cette offre
                </a>
                <p className="text-blue-700 text-xs mb-6">
                  Demandez le contact via WhatsApp en indiquant sa référence  
                </p>
              </div>

              {/* BLOC 2 : PARTAGER (AMIS) */}
              <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100 flex flex-col items-center text-center">
                <div className="bg-blue-600 text-white p-4 rounded-2xl mb-4 shadow-lg shadow-blue-200">
                  <Users size={32} />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Aider un ami ?</h3>
                <p className="text-blue-700 text-xs mb-6">
                  Partagez cette opportunité avec quelqu'un de votre entourage.
                </p>
                <button 
                  onClick={handleShare}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-2xl transition-all shadow-md uppercase tracking-widest text-[10px] flex items-center justify-center gap-2"
                >
                  <Share2 size={16} /> Partager l'offre
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
