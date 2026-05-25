// import { MessageCircleMore } from 'lucide-react'; // L'icône exacte de votre image
// import { motion } from 'framer-motion';

// const WhatsAppFloat = () => {
//   const phoneNumber = "2250596132058"; 
//   const message = "Bonjour ! J'ai besoin de personnel et je souhaite avoir des informations.";

//   return (
//     <motion.a
//       href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
//       target="_blank"
//       rel="noopener noreferrer"
//       initial={{ opacity: 0, x: 20 }}
//       animate={{ 
//         opacity: 1, 
//         x: 0,
//         y: [0, -10, 0] 
//       }}
//       transition={{ 
//         duration: 0.8,
//         y: { 
//           repeat: Infinity, 
//           duration: 3, 
//           ease: "easeInOut" 
//         } 
//       }}
//       whileHover={{ scale: 1.02 }}
//       whileTap={{ scale: 0.92 }}
//       className="fixed bottom-6 right-6 z-[9999] bg-white border border-slate-100 flex items-center gap-4 pl-6 pr-2 py-2 rounded-full shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] group cursor-pointer touch-none"
//       style={{ 
//         WebkitTapHighlightColor: 'transparent',
//       }}
//     >
//       {/* Section Texte */}
//       <div className="flex flex-col items-start leading-tight">
//         <span className="text-[#0f172a] font-black text-[13px] uppercase tracking-tighter">
//           Besoin de personnel ou de travail ?
//         </span>
//         <span className="text-[#25D366] font-black text-[10px] uppercase tracking-widest flex items-center gap-1">
//           <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-pulse" />
//           En ligne
//         </span>
//       </div>

//       {/* Icône WhatsApp (Style identique à l'image) */}
//       <div className="relative">
//         <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
//         <div className="relative bg-[#25D366] text-white p-3.5 rounded-full shadow-md group-hover:scale-110 transition-transform flex items-center justify-center">
//           <MessageCircleMore size={24} strokeWidth={2.5} />
//         </div>
//       </div>
//     </motion.a>
//   );
// };

// export default WhatsAppFloat;