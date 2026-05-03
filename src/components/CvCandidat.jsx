import  { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { User,  Briefcase, GraduationCap, Send, Camera, FileCheck, CheckCircle2 } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const CvCandidat = () => {
  const cvRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [pdfReady, setPdfReady] = useState(false); // État pour gérer l'affichage du bouton WhatsApp
  
  const [formData, setFormData] = useState({
    nomComplet: '',
    age: '',
    email: '',
    telephone: '',
    quartier: '',
    metier: '',
    experience: '',
    specialites: '',
    dernierDiplome: '',
    disponibilite: 'Immédiate'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setPdfReady(false); // Réinitialise si l'utilisateur modifie ses infos
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const generatePDF = async () => {
    if (!formData.nomComplet || !formData.telephone) {
      alert("Veuillez remplir au moins le nom et le téléphone.");
      return;
    }

    setIsGenerating(true);
    const element = cvRef.current;
    
    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff"
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      
      const fileName = `CV_${formData.nomComplet.replace(/\s+/g, '_')}.pdf`;
      pdf.save(fileName);
      
      setPdfReady(true); // Active le bouton WhatsApp après succès
    } catch (error) {
      console.error("Erreur PDF:", error);
      alert("Erreur lors de la création du PDF.");
    } finally {
      setIsGenerating(false);
    }
  };

  const openWhatsApp = () => {
    const message = `*NOUVEAU CV CANDIDAT - GOOR RECRUTEMENT*
------------------------------
👤 *NOM :* ${formData.nomComplet}
🎂 *ÂGE :* ${formData.age} ans
💇‍♂️ *MÉTIER :* ${formData.metier}
📍 *QUARTIER :* ${formData.quartier}
📧 *EMAIL :* ${formData.email || 'Non précisé'}
🎓 *NIVEAU :* ${formData.dernierDiplome || 'Non précisé'}
------------------------------
_J'ai généré mon CV en PDF, je vous l'envoie ci-joint._`;

    const whatsappUrl = `https://wa.me/212669703561?text=${encodeURIComponent(message)}`;
    
    // Sur iPhone, window.open avec _blank est plus fiable qu'une redirection directe
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-slate-100 min-h-screen pb-20 font-sans">
      <div className="bg-[#0f172a] text-white py-12 px-6 text-center">
        <h1 className="text-3xl font-black uppercase tracking-tight">
          Générer mon <span className="text-blue-500">Profil Pro</span>
        </h1>
        <p className="text-slate-400 text-sm mt-2">Étape 1 : Créer le PDF | Étape 2 : Envoyer</p>
      </div>

      <div className="max-w-2xl mx-auto -mt-10 px-4">
        {/* Zone CV (Capture) */}
        <div 
          ref={cvRef} 
          className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-200"
          style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}
        >
          <div className="border-b-4 border-blue-600 pb-6 mb-8 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-black text-slate-800 uppercase leading-none">CV Candidat</h2>
              <p className="text-blue-600 font-bold text-sm">Propulsé par Goor.ci</p>
            </div>
            {imagePreview && (
              <img src={imagePreview} alt="Profil" className="w-20 h-20 rounded-xl object-cover border-2 border-slate-100" />
            )}
          </div>

          <div className="space-y-6">
            <section>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <User size={14} /> État Civil
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 bg-slate-50 p-3 rounded-xl">
                        <p className="text-[10px] text-slate-500 uppercase font-bold">Nom et Prénoms</p>
                        <input type="text" name="nomComplet" onChange={handleChange} required placeholder="Ex: Mariam Koné" className="w-full bg-transparent font-bold text-slate-800 outline-none" />
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl">
                        <p className="text-[10px] text-slate-500 uppercase font-bold">Âge</p>
                        <input type="number" name="age" onChange={handleChange} required placeholder="25" className="w-full bg-transparent font-bold text-slate-800 outline-none" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-3 rounded-xl">
                    <p className="text-[10px] text-slate-500 uppercase font-bold">Téléphone</p>
                    <input type="tel" name="telephone" onChange={handleChange} required placeholder="07..." className="w-full bg-transparent font-bold text-slate-800 outline-none" />
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl">
                    <p className="text-[10px] text-slate-500 uppercase font-bold">Quartier</p>
                    <input type="text" name="quartier" onChange={handleChange} required placeholder="Angré" className="w-full bg-transparent font-bold text-slate-800 outline-none" />
                  </div>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl">
                  <p className="text-[10px] text-slate-500 uppercase font-bold">Email (Facultatif)</p>
                  <input type="email" name="email" onChange={handleChange} placeholder="exemple@mail.com" className="w-full bg-transparent font-bold text-slate-800 outline-none" />
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <GraduationCap size={14} /> Formation
              </h3>
              <div className="bg-slate-50 p-3 rounded-xl">
                  <p className="text-[10px] text-slate-500 uppercase font-bold">Niveau d'étude (Facultatif)</p>
                  <input type="text" name="dernierDiplome" onChange={handleChange} placeholder="Ex: CAP Coiffure, Terminale..." className="w-full bg-transparent font-bold text-slate-800 outline-none" />
              </div>
            </section>

            <section>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Briefcase size={14} /> Métier
              </h3>
              <div className="space-y-4">
                <div className="bg-slate-50 p-3 rounded-xl">
                  <p className="text-[10px] text-slate-500 uppercase font-bold">Métier Principal</p>
                  <select name="metier" onChange={handleChange} required className="w-full bg-transparent font-bold text-slate-800 outline-none">
                    <option value="">Sélectionner...</option>
                    <option value="Coiffeuse Dame">Coiffeuse Dame</option>
                    <option value="Barber">Barber</option>
                    <option value="Tresseuse">Tresseuse</option>
                    <option value="Prothésiste Ongulaire">Prothésiste Ongulaire</option>
                  </select>
                </div>
              </div>
            </section>

            {!imagePreview && (
              <div className="border-2 border-dashed border-blue-200 rounded-2xl p-6 text-center">
                <Camera className="mx-auto text-blue-400 mb-2" />
                <p className="text-xs text-slate-500 font-bold uppercase">Ma Photo</p>
                <input type="file" accept="image/*" onChange={handleImageChange} className="mt-2 text-[10px]" />
              </div>
            )}
          </div>
        </div>

        {/* BOUTONS D'ACTION */}
        <div className="mt-8 space-y-4">
          {!pdfReady ? (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={generatePDF}
              disabled={isGenerating}
              className={`w-full ${isGenerating ? 'bg-slate-400' : 'bg-blue-600'} text-white font-black py-5 rounded-2xl shadow-xl flex items-center justify-center gap-3 uppercase tracking-widest transition-all`}
            >
              {isGenerating ? "Création du PDF..." : "Étape 1 : Créer mon CV PDF"}
            </motion.button>
          ) : (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileTap={{ scale: 0.95 }}
              onClick={openWhatsApp}
              className="w-full bg-[#25D366] text-white font-black py-5 rounded-2xl shadow-xl flex items-center justify-center gap-3 uppercase tracking-widest transition-all"
            >
              Étape 2 : Envoyer sur WhatsApp
              <Send size={20} />
            </motion.button>
          )}
          
          {pdfReady && (
            <div className="flex items-center justify-center gap-2 text-[#25D366] font-bold text-sm">
              <CheckCircle2 size={18} />
              PDF prêt dans vos téléchargements
            </div>
          )}

          <div className="mt-4 flex items-start gap-3 bg-white/50 p-4 rounded-xl border border-slate-200">
            <FileCheck className="text-blue-600 shrink-0" size={20} />
            <p className="text-[11px] text-slate-600 leading-tight">
              <b>Guide iPhone :</b> Cliquez sur "Étape 1", le PDF s'enregistrera. Cliquez ensuite sur "Étape 2", WhatsApp s'ouvrira dans un nouvel onglet, et vous pourrez choisir votre fichier PDF.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvCandidat;