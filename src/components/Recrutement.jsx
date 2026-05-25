// import { motion } from 'framer-motion';
// import { ShieldCheck, FileText, CreditCard, UserCheck, AlertTriangle, Scale, Clock, CheckCircle, MessageCircle, Star } from 'lucide-react';

// const Recrutement = () => {
//   const sections = [
//     {
//       icon: <UserCheck className="text-[#3b82f6]" size={22} />,
//       title: "1. Éligibilité",
//       content: "Accès réservé aux gérants de salons, spas et instituts ayant un besoin réel en personnel qualifié en Côte d'Ivoire."
//     },
//     {
//       icon: <FileText className="text-[#ff4da6]" size={22} />,
//       title: "2. Exactitude",
//       content: "Chaque annonce doit correspondre à un poste réel avec des informations honnêtes sur le lieu et la rémunération."
//     },
//     {
//       icon: <CreditCard className="text-[#3b82f6]" size={22} />,
//       title: "3. Paiement",
//       content: "Modèle payant garantissant la qualité. Les frais servent à maintenir la vérification rigoureuse des talents."
//     },
//     {
//       icon: <AlertTriangle className="text-[#ff4da6]" size={22} />,
//       title: "4. Éthique",
//       content: "Respect mutuel exigé. Tout comportement abusif entraîne une suspension immédiate et définitive sans préavis."
//     }
//   ];

//   return (
//     <div className="bg-[#f8fafc] min-h-screen font-poppins pb-20">
      
//       {/* HEADER SECTION - Même style sombre & premium que Candidat */}
//       <section className="relative overflow-hidden bg-[#0f172a] py-24 px-6 text-center">
//         {/* Effets de lumière décoratifs */}
//         <div className="absolute top-0 left-0 w-64 h-64 bg-[#3b82f6] opacity-10 blur-[100px] -translate-x-1/2 -translate-y-1/2" />
//         <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#ff4da6] opacity-10 blur-[100px] translate-x-1/2 translate-y-1/2" />

//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="relative z-10 max-w-4xl mx-auto"
//         >
//           <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-8">
//             <ShieldCheck size={14} className="text-[#3b82f6]" />
//             <span className="text-[10px] font-medium text-[#3b82f6] uppercase tracking-[0.2em]">
//               Espace Sécurisé Recruteur
//             </span>
//           </div>

//           <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 leading-[0.9]">
//             Conditions <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#ff4da6]">
//               Recrutement
//             </span>
//           </h1>

//           <p className="text-slate-400 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed mb-12">
//             Règles et engagements pour garantir une expérience de recrutement d'excellence sur Goorco CI.
//           </p>

//           {/* CTA CARD - Même format que Candidat */}
//           <div className="max-w-md mx-auto bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl">
//             <h3 className="text-white font-bold text-base mb-6">Besoin d'aide pour vos recrutements ?</h3>
//             <button className="w-full bg-[#ff4da6] hover:bg-[#e64495] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest transition-all shadow-lg shadow-pink-500/20 active:scale-95 text-[11px] flex items-center justify-center gap-3">
//               <MessageCircle size={18} />
//               Contacter le support Kalala
//             </button>
//             <div className="mt-4 flex items-center justify-center gap-2">
//               <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
//               <span className="text-slate-400 text-[9px] uppercase tracking-widest font-bold">Assistance 24/7</span>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* MAIN CONTENT */}
//       <section className="max-w-6xl mx-auto px-6 -mt-12 relative z-20">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
//           {/* COLONNE GAUCHE - LES 4 POINTS */}
//           <div className="lg:col-span-1 space-y-4">
//             {sections.map((section, index) => (
//               <motion.div 
//                 key={index}
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 hover:border-[#3b82f6]/30 transition-colors group"
//               >
//                 <div className="bg-slate-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                   {section.icon}
//                 </div>
//                 <h3 className="font-black text-slate-900 mb-2 text-[11px] uppercase tracking-wider">{section.title}</h3>
//                 <p className="text-slate-500 text-[11px] leading-relaxed italic">{section.content}</p>
//               </motion.div>
//             ))}
//           </div>

//           {/* COLONNE DROITE - ENGAGEMENTS PLATEFORME */}
//           <div className="lg:col-span-2">
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden"
//             >
//               {/* Filigrane discret */}
//               <Scale className="absolute -right-10 -bottom-10 text-slate-50 opacity-[0.03]" size={300} />

//               <div className="flex items-center gap-4 mb-10 border-b border-slate-50 pb-6">
//                  <div className="p-3 bg-[#3b82f6]/10 rounded-2xl text-[#3b82f6]">
//                     <Scale size={24} />
//                  </div>
//                  <div>
//                     <h2 className="text-xl font-black uppercase tracking-tight text-slate-900 leading-none">Engagements Goorco</h2>
//                     <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1 font-bold">Transparence & Qualité</p>
//                  </div>
//               </div>

//               <div className="grid grid-cols-1 gap-4">
//                 {[
//                   { icon: <CheckCircle className="text-green-500" />, title: "Vérification des profils", text: "Nous filtrons les candidats, mais le choix final et le test technique en salon incombent au recruteur." },
//                   { icon: <Clock className="text-[#3b82f6]" />, title: "Disponibilité du service", text: "Goorco s'engage à maintenir la visibilité de vos offres 24h/24, hors maintenances techniques." },
//                   { icon: <Star className="text-[#ff4da6]" />, title: "Mise en relation", text: "Nous facilitons le contact via WhatsApp pour une réactivité immédiate entre vous et les talents." }
//                 ].map((item, i) => (
//                   <div key={i} className="flex gap-5 p-5 rounded-[1.5rem] border border-transparent hover:border-slate-100 hover:bg-slate-50/50 transition-all">
//                     <div className="shrink-0 mt-1">{item.icon}</div>
//                     <div>
//                       <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
//                       <p className="text-slate-500 text-xs mt-1 leading-relaxed">{item.text}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-10 p-6 bg-gradient-to-br from-slate-900 to-[#1e293b] rounded-[2rem] text-white">
//                 <h4 className="font-bold text-[#3b82f6] text-[10px] uppercase tracking-widest mb-2">Responsabilité</h4>
//                 <p className="text-slate-300 text-[11px] leading-relaxed italic opacity-80">
//                   En utilisant l'Espace Recruteur, vous acceptez que Goorco CI serve uniquement d'intermédiaire technique. Le contrat de travail final est établi directement entre vous et le candidat sans intervention de la plateforme.
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Recrutement;