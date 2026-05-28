import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const offices = [
    {
      country: "Côte d'Ivoire",
      city: "Abidjan, Cocody",
      phone: "+225 05 96 13 20 58",
      whatsapp: "2250596132058",
      color: "bg-orange-500",
      // À REMPLACER : Mets ici le lien "src" de la carte d'Abidjan (commençant par https://www.google.com/maps/embed...)
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.2957924458873!2d-3.989718425251846!3d5.371761494607148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xffc27f000000001%3A0x7b587a8f11111111!2sCocody%2C%20Abidjan!5e0!3m2!1sfr!2sci!4v1716900000000!5m2!1sfr!2sci"
    },
    {
      country: "Maroc",
      city: "Casablanca, Maarif",
      phone: "+212 6 00 00 00 00",
      whatsapp: "212600000000",
      color: "bg-red-600",
      // À REMPLACER : Mets ici le lien "src" de la carte de Casablanca (commençant par https://www.google.com/maps/embed...)
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.9484835497207!2d-7.632431724495568!3d33.58073437333804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d29671555555%3A0x5555555555555555!2sMaarif%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1716900000000!5m2!1sfr!2sma"
    }
  ];

  const [activeMap, setActiveMap] = useState(offices[0].mapUrl);
  const [selectedOffice, setSelectedOffice] = useState(0);

  return (
    <div className="bg-slate-50 min-h-screen font-poppins pb-20">
      <section className="bg-[#0f172a] py-16 px-6 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-montserrat font-black text-4xl uppercase tracking-tighter"
        >
          Contactez <span className="text-blue-500">l'Équipe</span>
        </motion.h1>
        <p className="text-slate-400 mt-4 max-w-xl mx-auto font-light">
          Une question ? Un besoin de personnel ? Nos équipes à Abidjan et Casablanca vous répondent.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-1 space-y-6">
            {offices.map((office, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                onClick={() => {
                  setActiveMap(office.mapUrl);
                  setSelectedOffice(index);
                }}
                className={`bg-white rounded-2xl shadow-sm border p-6 cursor-pointer transition-all duration-300 ${
                  selectedOffice === index ? 'border-blue-500 ring-2 ring-blue-500/10 shadow-md' : 'border-slate-200 hover:shadow-md'
                }`}
              >
                <div className={`inline-block px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase mb-4 ${office.color}`}>
                  Bureau {office.country}
                </div>
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
                  <MapPin size={18} className="text-blue-500" /> {office.city}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-slate-600 text-sm">
                    <Phone size={16} /> {office.phone}
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 text-sm">
                    <Mail size={16} /> contact@monoffre.ci
                  </div>
                </div>

                <a 
                  href={`https://wa.me/${office.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} 
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-3 rounded-xl hover:bg-[#20ba5a] transition-all active:scale-95 shadow-lg shadow-green-500/10"
                >
                  <MessageCircle size={20} />
                  WHATSAPP {office.country.toUpperCase()}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Section Carte Interactive */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden min-h-[450px]"
          >
            <iframe 
              title="Géolocalisation Bureaux"
              src={activeMap} 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: "450px" }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;