// import { motion } from 'framer-motion';
// import { Target, Users, ShieldCheck, Rocket, Scissors, Award, Heart, Star } from 'lucide-react';

// const About = () => {
//   const values = [
//     {
//       icon: <Target className="text-blue-500" size={32} />,
//       title: "Notre Mission",
//       description: "Connecter les talents de la beauté aux opportunités qui changeront leur vie professionnelle."
//     },
//     {
//       icon: <Users className="text-blue-500" size={32} />,
//       title: "Proximité",
//       description: "Une plateforme pensée par un expert du terrain pour répondre aux réalités des salons ivoiriens."
//     },
//     {
//       icon: <ShieldCheck className="text-blue-500" size={32} />,
//       title: "Confiance",
//       description: "Un modèle payant qui garantit le sérieux des recruteurs et la qualité des candidats."
//     },
//     {
//       icon: <Rocket className="text-blue-500" size={32} />,
//       title: "Innovation",
//       description: "Simplifier le recrutement dans le bien-être grâce à une mise en relation directe et rapide."
//     }
//   ];

//   return (
//     <div className="bg-white min-h-screen font-poppins">
      
//       {/* SECTION HEADER - HERO */}
//       <section className="bg-[#0f172a] py-24 px-6 relative overflow-hidden">
//         <div className="absolute top-0 right-0 p-20 opacity-10 text-blue-500 transform rotate-12">
//             <Scissors size={300} />
//         </div>
//         <div className="max-w-4xl mx-auto text-center relative z-10">
//           <motion.h1 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="font-montserrat font-black text-4xl md:text-5xl text-white uppercase tracking-tighter mb-6"
//           >
//             À Propos de <span className="text-blue-500">Goorco CI</span>
//           </motion.h1>
//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
//           >
//             La plateforme ivoirienne dédiée aux métiers de la beauté et du bien-être.
//           </motion.p>
//         </div>
//       </section>

//       {/* SECTION QUI SOMMES-NOUS & FONDATEUR */}
//       <section className="py-24 px-6 max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
//           <motion.div 
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <div>
//                 <h2 className="font-montserrat font-bold text-3xl text-slate-900 uppercase mb-6 flex items-center gap-3">
//                    <div className="w-10 h-1 bg-blue-500"></div> Qui sommes-nous ?
//                 </h2>
//                 <p className="text-slate-600 leading-relaxed text-lg">
//                     <strong>Goorco</strong> est le point de rencontre privilégié des salons, barbershops, instituts et spas avec les meilleurs professionnels de Côte d'Ivoire.
//                 </p>
//             </div>

//             <div className="bg-blue-50 p-8 rounded-[2.5rem] border-l-8 border-blue-500 shadow-sm">
//                 <div className="flex items-center gap-4 mb-4">
//                     <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm">
//                         <Award size={24} />
//                     </div>
//                     <h3 className="font-black text-slate-900 uppercase text-sm tracking-widest">Le mot de Kalala</h3>
//                 </div>
//                 <p className="text-slate-700 italic leading-relaxed mb-4">
//                     "En tant que professionnel du secteur, je connais les réalités des salons : recrutements difficiles et manque de visibilité pour les vrais talents. Goorco est né pour offrir un outil pensé par un pro, pour des pros."
//                 </p>
//                 <p className="text-blue-600 font-bold text-sm">
//                     — Dje Bi Daouo Dieudonné (PDG de Goorco)
//                 </p>
//             </div>

//             <p className="text-slate-600 leading-relaxed">
//               Nous construisons une aventure locale et accessible où chaque offre et chaque profil compte. Notre vision est de structurer le recrutement dans la beauté en Côte d’Ivoire pour en faire une référence d'excellence.
//             </p>
//           </motion.div>

//           {/* VALEURS GRID */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
//             {values.map((value, index) => (
//               <motion.div 
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all group"
//               >
//                 <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
//                     {value.icon}
//                 </div>
//                 <h3 className="font-black text-slate-900 mb-3 uppercase text-xs tracking-widest">{value.title}</h3>
//                 <p className="text-sm text-slate-500 leading-relaxed">{value.description}</p>
//               </motion.div>
//             ))}

//             {/* PETIT BLOC COMMUNAUTÉ */}
//             <div className="sm:col-span-2 bg-[#1e293b] p-8 rounded-[2rem] text-white flex items-center justify-between overflow-hidden relative group">
//                 <div className="relative z-10">
//                     <h4 className="font-bold text-lg mb-1">Goorco CI, c’est notre plateforme à tous.</h4>
//                     <p className="text-slate-400 text-xs uppercase tracking-widest">Recruteurs • Candidats • Gérants • Apprentis</p>
//                 </div>
//                 <Heart className="text-red-500/20 absolute -right-4 top-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform" size={120} fill="currentColor" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SECTION MISSION AUJOURD'HUI (Full Width) */}
//       <section className="bg-slate-50 py-20 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//             <Star className="text-yellow-400 mx-auto mb-6 fill-yellow-400" size={40} />
//             <h2 className="font-montserrat font-black text-3xl text-slate-900 uppercase mb-8">Participer à l'excellence</h2>
//             <p className="text-slate-600 text-lg leading-relaxed mb-10">
//                 Goorco appartient à la communauté des professionnels ivoiriens de la beauté. La plateforme évolue avec vos retours pour répondre à vos besoins réels et quotidiens.
//             </p>
//             <div className="flex flex-wrap justify-center gap-4">
//                 <div className="px-6 py-3 bg-white rounded-full shadow-sm border border-slate-200 font-bold text-xs uppercase text-slate-500">
//                     #Coiffure
//                 </div>
//                 <div className="px-6 py-3 bg-white rounded-full shadow-sm border border-slate-200 font-bold text-xs uppercase text-slate-500">
//                     #Esthétique
//                 </div>
//                 <div className="px-6 py-3 bg-white rounded-full shadow-sm border border-slate-200 font-bold text-xs uppercase text-slate-500">
//                     #Barber
//                 </div>
//                 <div className="px-6 py-3 bg-white rounded-full shadow-sm border border-slate-200 font-bold text-xs uppercase text-slate-500">
//                     #BienÊtre
//                 </div>
//             </div>
//         </div>
//       </section>

//       {/* CALL TO ACTION SECTION */}
//       <section className="py-24 px-6 max-w-6xl mx-auto">
//         <motion.div 
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="bg-blue-600 py-20 px-6 rounded-[3rem] text-center text-white shadow-2xl shadow-blue-500/30 relative overflow-hidden"
//         >
//             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
//                 <div className="absolute top-10 left-10"><Scissors size={100} /></div>
//                 <div className="absolute bottom-10 right-10 rotate-45"><Award size={100} /></div>
//             </div>
            
//             <div className="relative z-10">
//                 <h2 className="font-montserrat font-black text-3xl md:text-4xl uppercase mb-6 tracking-tighter">
//                 Prêt à rejoindre la communauté ?
//                 </h2>
//                 <p className="mb-12 opacity-90 max-w-xl mx-auto font-light text-lg">
//                 Rejoignez Goorco et participons ensemble à structurer le recrutement dans la beauté en Côte d’Ivoire.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                     <button className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-[#1e293b] hover:text-white transition-all active:scale-95 shadow-lg">
//                         Découvrir les offres
//                     </button>
//                     <button className="bg-blue-700/50 backdrop-blur-sm border-2 border-white/20 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition-all active:scale-95">
//                         Nous contacter
//                     </button>
//                 </div>
//             </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default About;