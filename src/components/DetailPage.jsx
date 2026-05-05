import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { jobOffers } from '../apis/datas';
import { MessageCircle, MapPin, ArrowLeft, Calendar, DollarSign, Briefcase } from 'lucide-react';

const DetailPage = () => {
  // 1. On récupère l'ID passé dans l'URL
  const { id } = useParams();

  // 2. On cherche l'offre qui correspond à cet ID
  // Note: on utilise Number(id) car l'id dans l'URL est une chaîne de caractères
  const offer = jobOffers.find((item) => item.id === Number(id));

  // 3. Si l'offre n'existe pas, on affiche un message d'erreur
  if (!offer) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-bold mb-4">Oups ! Offre introuvable.</h2>
        <Link to="/" className="text-blue-600 font-bold flex items-center gap-2">
          <ArrowLeft size={18} /> Retour à l'accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#f0f4f8] min-h-screen pb-20">
      {/* HEADER DE LA PAGE */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <ArrowLeft size={24} className="text-slate-600" />
          </Link>
          <span className="font-black text-sm uppercase tracking-widest text-slate-400">Détails de l'offre</span>
          <div className="w-10"></div> {/* Équilibre visuel */}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-8">
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
          
          {/* BANNIÈRE SUPÉRIEURE */}
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

          {/* CONTENU PRINCIPAL */}
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <p className="text-slate-400 text-[10px] uppercase font-bold mb-1">Type de contrat</p>
                <div className="flex items-center gap-2 text-slate-700 font-bold text-sm">
                  <Briefcase size={16} /> Temps plein
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <p className="text-slate-400 text-[10px] uppercase font-bold mb-1">Publié le</p>
                <div className="flex items-center gap-2 text-slate-700 font-bold text-sm">
                  <Calendar size={16} /> Récemment
                </div>
              </div>
            </div>

            <div className="prose prose-slate max-w-none">
              <h3 className="text-xl font-black text-slate-900 mb-4">Description du poste</h3>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                {offer.description}
              </p>
            </div>

            {/* SECTION WHATSAPP */}
            <div className="mt-12 p-8 bg-emerald-50 rounded-[2rem] border border-emerald-100 flex flex-col items-center text-center">
              <div className="bg-emerald-500 text-white p-4 rounded-2xl mb-4 shadow-lg shadow-emerald-200">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Prêt(e) à postuler ?</h3>
              <p className="text-emerald-700 text-sm mb-6 max-w-xs">
                Cliquez sur le bouton ci-dessous pour contacter directement l'employeur sur WhatsApp.
              </p>
              
              <a 
                href={`https://api.whatsapp.com/send?phone=${offer.whatsapp}&text=${encodeURIComponent(
                  `Bonjour, je vous contacte via Goorco.com pour l'offre suivante :\n\n` +
                  `📍 Poste : ${offer.title}\n` +
                  `💰 Salaire : ${offer.salary}\n` +
                  `🏠 Lieu : ${offer.location}\n\n` +
                  `Mon profil m'intéresse, est-ce toujours disponible ?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full md:w-auto md:px-12 bg-emerald-500 hover:bg-emerald-600 text-white font-black py-4 rounded-2xl transition-all shadow-xl shadow-emerald-200 uppercase tracking-widest text-xs"
              >
                Envoyer mon message WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DetailPage;