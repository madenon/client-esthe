import { motion } from 'framer-motion';
import { UserCheck, ShieldCheck, Star, Briefcase, FileText, Lock, CheckCircle, Bell, MessageCircle } from 'lucide-react';

const CvCandidat = () => {
  const engagementPoints = [
    {
      icon: <UserCheck className="text-[#ff4da6]" size={22} />,
      title: "Profil Certifié",
      content: "Votre CV est mis en avant auprès des meilleurs salons et instituts gérés par des professionnels."
    },
    {
      icon: <Lock className="text-[#3b82f6]" size={22} />,
      title: "Protection des Données",
      content: "Conformément à la loi n°2013-450, vos informations sont sécurisées et strictement confidentielles."
    },
    {
      icon: <Bell className="text-[#ff4da6]" size={22} />,
      title: "Alertes Directes",
      content: "Recevez des propositions directement via WhatsApp pour une réactivité maximale avec les gérants."
    }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen font-poppins pb-20">
      
      {/* HEADER SECTION - Style Premium */}
      <section className="relative overflow-hidden bg-[#0f172a] py-24 px-6 text-center">
        {/* Cercles décoratifs pour le côté "Beauté" */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#ff4da6] opacity-10 blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#3b82f6] opacity-10 blur-[100px] translate-x-1/2 translate-y-1/2" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-8">
            <Star size={14} className="text-[#ff4da6] fill-[#ff4da6]" />
            <span className="text-[10px] font-medium text-[#ff4da6] uppercase tracking-[0.2em]">
              Espace Talents Goorco
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 leading-[0.9]">
            Propulsez votre <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#ff4da6]">
              Carrière
            </span>
          </h1>

          <p className="text-slate-400 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed mb-12">
            Rejoignez la communauté des meilleurs coiffeurs, esthéticiennes et barbiers de Côte d'Ivoire.
          </p>

          {/* CTA CARD - Intégrée au Header */}
          <div className="max-w-md mx-auto bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl">
            <h3 className="text-white font-bold text-base mb-6">Prêt à rejoindre les plus grands salons ?</h3>
            <button className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-500/20 active:scale-95 text-[11px] flex items-center justify-center gap-3">
              <MessageCircle size={18} />
              Déposer mon profil via WhatsApp
            </button>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-slate-400 text-[9px] uppercase tracking-widest font-bold">Action 100% Gratuite</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-6xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* COLONNE GAUCHE - ENGAGEMENTS */}
          <div className="lg:col-span-1 space-y-4">
            {engagementPoints.map((point, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 hover:border-[#ff4da6]/30 transition-colors group"
              >
                <div className="bg-slate-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {point.icon}
                </div>
                <h3 className="font-black text-slate-900 mb-2 text-[11px] uppercase tracking-wider">{point.title}</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed italic">{point.content}</p>
              </motion.div>
            ))}
          </div>

          {/* COLONNE DROITE - CHARTE */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden"
            >
              {/* Filigrane discret */}
              <Briefcase className="absolute -right-10 -bottom-10 text-slate-50 opacity-[0.03]" size={300} />

              <div className="flex items-center gap-4 mb-10 border-b border-slate-50 pb-6">
                 <div className="p-3 bg-[#ff4da6]/10 rounded-2xl text-[#ff4da6]">
                    <FileText size={24} />
                 </div>
                 <div>
                    <h2 className="text-xl font-black uppercase tracking-tight text-slate-900 leading-none">Charte du Candidat</h2>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1 font-bold">Engagement Excellence</p>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                {[
                  { icon: <CheckCircle className="text-green-500" />, title: "Honnêteté", text: "Je m'engage à fournir des informations réelles sur mes diplômes et mon expérience." },
                  { icon: <Briefcase className="text-[#3b82f6]" />, title: "Sérieux", text: "Je m'engage à honorer les rendez-vous de test ou d'entretien fixés." },
                  { icon: <ShieldCheck className="text-[#ff4da6]" />, title: "Responsabilité", text: "Je comprends que le contrat final dépend de mon accord avec l'employeur." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 p-5 rounded-[1.5rem] border border-transparent hover:border-slate-100 hover:bg-slate-50/50 transition-all">
                    <div className="shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                      <p className="text-slate-500 text-xs mt-1 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-gradient-to-br from-slate-900 to-[#1e293b] rounded-[2rem] text-white">
                <h4 className="font-bold text-[#ff4da6] text-[10px] uppercase tracking-widest mb-2">Note Importante</h4>
                <p className="text-slate-300 text-[11px] leading-relaxed italic opacity-80">
                  Goorco valorise le talent local. En déposant votre CV, vous acceptez d'être contacté par des professionnels vérifiés. Tout abus ou faux profil sera banni pour préserver la qualité.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CvCandidat;