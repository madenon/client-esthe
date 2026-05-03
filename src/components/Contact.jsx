import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const offices = [
    {
      country: "Côte d'Ivoire",
      city: "Abidjan, Cocody",
      phone: "+225 05 96 13 20 58",
      whatsapp: "2250596132058",
      color: "bg-orange-500"
    },
    {
      country: "Maroc",
      city: "Casablanca, Maarif",
      phone: "+212 6 00 00 00 00", // Numéro à ajuster
      whatsapp: "212600000000",
      color: "bg-red-600"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-poppins pb-20">
      {/* Header Section */}
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
          
          {/* Cartes WhatsApp */}
          <div className="lg:col-span-1 space-y-6">
            {offices.map((office, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow"
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
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-3 rounded-xl hover:bg-[#20ba5a] transition-all active:scale-95 shadow-lg shadow-green-500/10"
                >
                  <MessageCircle size={20} />
                  WHATSAPP {office.country.toUpperCase()}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Google Maps Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden min-h-[450px]"
          >
            <iframe 
              title="Siège Abidjan"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127110.05731998592!2d-4.05322978586036!3d5.34843420894567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ea5311959121%3A0x3a70ba559599665!2sAbidjan%2C%20C%C3%B4te%20d&#39;Ivoire!5e0!3m2!1sfr!2s!4v1714700000000!5m2!1sfr!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
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