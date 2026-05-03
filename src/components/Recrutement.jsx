import { motion } from 'framer-motion';
import { ShieldCheck, FileText, CreditCard, UserCheck, AlertTriangle, Scale, Clock, CheckCircle } from 'lucide-react';

const Recrutement = () => {
  const sections = [
    {
      icon: <UserCheck className="text-blue-500" size={24} />,
      title: "1. Éligibilité des Recruteurs",
      content: "L'accès à l'Espace Recruteur est réservé aux gérants de salons, propriétaires d'instituts de beauté, spas ou toute personne physique/morale ayant un besoin réel en personnel de coiffure et d'esthétique en Côte d'Ivoire."
    },
    {
      icon: <FileText className="text-blue-500" size={24} />,
      title: "2. Exactitude des Offres",
      content: "Chaque annonce doit correspondre à un poste réel et disponible. Le recruteur s'engage à fournir des informations honnêtes concernant le lieu de travail, les compétences requises et les conditions de rémunération."
    },
    {
      icon: <CreditCard className="text-blue-500" size={24} />,
      title: "3. Politique de Paiement",
      content: "Goorco CI fonctionne sur un modèle payant pour garantir la qualité du service. Les frais d'accès aux profils ou de publication d'offres sont non remboursables et servent à maintenir la vérification des talents sur la plateforme."
    },
    {
      icon: <AlertTriangle className="text-blue-500" size={24} />,
      title: "4. Éthique et Respect",
      content: "Le recruteur s'engage à traiter les candidats avec respect. Tout comportement discriminatoire, harcèlement ou offre trompeuse entraînera une suspension immédiate et définitive du compte sans préavis."
    }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen font-poppins pb-20">
      
      {/* Header Section */}
      <section className="bg-[#1e293b] py-16 px-6 text-center text-white">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full border border-blue-500/20 mb-6">
            <ShieldCheck size={16} />
            <span className="text-[10px] font-black uppercase tracking-widest">Espace Sécurisé</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">
            Conditions <span className="text-blue-500">Recruteur</span>
          </h1>
          <p className="text-slate-400 text-sm font-light max-w-xl mx-auto">
            Règles et engagements pour garantir un recrutement de qualité sur Goorco CI.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-6 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="bg-slate-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                {section.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-3">{section.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Détails supplémentaires */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-sm"
        >
          <div className="flex items-center gap-4 mb-8">
             <Scale className="text-blue-600" />
             <h2 className="text-xl font-black uppercase tracking-tight text-slate-900">Engagements de Goorco CI</h2>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1"><CheckCircle size={18} className="text-green-500" /></div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Vérification des profils</h4>
                <p className="text-slate-500 text-sm">Nous faisons de notre mieux pour filtrer les candidats, mais le choix final et la vérification des compétences techniques lors du test en salon incombent au recruteur.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1"><Clock size={18} className="text-blue-500" /></div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Disponibilité du service</h4>
                <p className="text-slate-500 text-sm">Goorco s'engage à maintenir la visibilité de vos offres 24h/24, sauf en cas de maintenance technique nécessaire à l'amélioration de la plateforme.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 p-6 bg-amber-50 rounded-2xl border border-amber-100">
            <p className="text-amber-800 text-xs leading-relaxed italic">
              * En utilisant l'Espace Recruteur, vous acceptez que Goorco CI serve uniquement d'intermédiaire technique. Le contrat de travail final est établi directement entre vous et le candidat.
            </p>
          </div>
        </motion.div>

        {/* Footer Action */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-xs mb-6 font-medium uppercase tracking-widest">Besoin d'aide pour recruter ?</p>
          <button className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-[#1e293b] transition-all shadow-lg shadow-blue-500/20 active:scale-95 text-[11px]">
            Contacter le support Kalala
          </button>
        </div>
      </section>
    </div>
  );
}

export default Recrutement;