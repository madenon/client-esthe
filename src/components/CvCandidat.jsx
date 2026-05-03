import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, ShieldCheck, Star, Briefcase, FileText, Lock, CheckCircle, Bell } from 'lucide-react';

const CvCandidat = () => {
  const engagementPoints = [
    {
      icon: <UserCheck className="text-blue-500" size={24} />,
      title: "Profil Certifié",
      content: "Votre CV est mis en avant auprès des meilleurs salons et instituts de Côte d'Ivoire gérés par des professionnels."
    },
    {
      icon: <Lock className="text-blue-500" size={24} />,
      title: "Protection des Données",
      content: "Conformément à la loi n°2013-450, vos informations personnelles sont sécurisées et ne sont partagées qu'avec des recruteurs sérieux."
    },
    {
      icon: <Bell className="text-blue-500" size={24} />,
      title: "Alertes Directes",
      content: "Recevez des propositions directement via WhatsApp pour une réactivité maximale avec les gérants."
    }
  ];

  return (
    <div className="bg-[#fcfdfe] min-h-screen font-poppins pb-20">
      
      {/* HEADER SECTION */}
      <section className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] py-20 px-6 text-center text-white">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full border border-blue-500/30 mb-8">
            <Star size={16} className="fill-blue-400" />
            <span className="text-[10px] font-black uppercase tracking-widest">Espace Talents Goorco</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-tight">
            Propulsez votre <span className="text-blue-500">Carrière</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
            Rejoignez la communauté des meilleurs coiffeurs, esthéticiennes et barbiers de Côte d'Ivoire.
          </p>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-6xl mx-auto px-6 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* COLONNE GAUCHE - ENGAGEMENTS */}
          <div className="lg:col-span-1 space-y-6">
            {engagementPoints.map((point, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100"
              >
                <div className="bg-blue-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
                  {point.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide">{point.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed italic">{point.content}</p>
              </motion.div>
            ))}
          </div>

          {/* COLONNE DROITE - CONDITIONS & INFOS */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                 <FileText className="text-blue-600" />
                 <h2 className="text-xl font-black uppercase tracking-tight text-slate-900">Charte du Candidat</h2>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                  <CheckCircle size={20} className="text-green-500 shrink-0" />
                  <p className="text-slate-600 text-sm">
                    <strong>Honnêteté :</strong> Je m'engage à fournir des informations réelles sur mes diplômes et mon expérience en salon.
                  </p>
                </div>

                <div className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                  <Briefcase size={20} className="text-blue-500 shrink-0" />
                  <p className="text-slate-600 text-sm">
                    <strong>Sérieux :</strong> Je m'engage à honorer les rendez-vous de test ou d'entretien fixés avec les recruteurs.
                  </p>
                </div>

                <div className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                  <ShieldCheck size={20} className="text-blue-500 shrink-0" />
                  <p className="text-slate-600 text-sm">
                    <strong>Responsabilité :</strong> Je comprends que Goorco est un intermédiaire et que le contrat final dépend de mon accord avec l'employeur.
                  </p>
                </div>
              </div>

              <div className="mt-10 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-blue-900 text-xs uppercase mb-2">Note Importante</h4>
                <p className="text-blue-800 text-[11px] leading-relaxed italic">
                  Goorco valorise le talent local. En déposant votre CV, vous acceptez d'être contacté par des professionnels vérifiés. Tout abus ou faux profil sera banni pour préserver la qualité de la plateforme.
                </p>
              </div>
            </motion.div>

            {/* ACTION FOOTER */}
            <div className="text-center bg-[#1e293b] p-10 rounded-[2.5rem] text-white">
                <h3 className="font-bold text-lg mb-4">Prêt à briller dans les plus grands salons ?</h3>
                <button className="bg-blue-600 text-white px-12 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20 active:scale-95 text-xs">
                    Déposer mon CV / Profil Via WhatsApp
                </button>
                <p className="mt-4 text-slate-400 text-[10px] uppercase tracking-widest">Action 100% Gratuite pour les talents</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CvCandidat;