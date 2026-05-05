import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Users, ShieldCheck, Rocket, Scissors, 
  Award, Heart, Star, CheckCircle2 
} from 'lucide-react';

const About = () => {
  // Données pour la section des valeurs
  const values = [
    {
      icon: <Target className="text-blue-500" size={32} />,
      title: "Notre Mission",
      description: "Connecter les talents de la beauté aux opportunités qui changeront leur vie professionnelle."
    },
    {
      icon: <Users className="text-blue-500" size={32} />,
      title: "Proximité",
      description: "Une plateforme pensée par un expert du terrain pour répondre aux réalités des salons ivoiriens."
    },
    {
      icon: <ShieldCheck className="text-blue-500" size={32} />,
      title: "Confiance",
      description: "Un modèle payant qui garantit le sérieux des recruteurs et la qualité des candidats."
    },
    {
      icon: <Rocket className="text-blue-500" size={32} />,
      title: "Innovation",
      description: "Simplifier le recrutement dans le bien-être grâce à une mise en relation directe et rapide."
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans antialiased">
      
      {/* SECTION 1 : HERO (Contenu 2) */}
      <section className="bg-[#0f172a] py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-10 text-blue-500 transform rotate-12">
          <Scissors size={300} />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-bold text-4xl md:text-5xl text-white uppercase tracking-tighter mb-6"
          >
            À Propos de <span className="text-blue-500">Goorco CI</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
          >
            La plateforme ivoirienne dédiée aux métiers de la beauté et du bien-être.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 : IDENTITÉ & VALEURS (Contenu 2) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-bold text-3xl text-slate-900 uppercase mb-6 flex items-center gap-3">
                <div className="w-10 h-1 bg-blue-500"></div> Qui sommes-nous ?
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                <strong>Goorco</strong> est le point de rencontre privilégié des salons, barbershops, instituts et spas avec les meilleurs professionnels de Côte d'Ivoire.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-[2.5rem] border-l-8 border-blue-500 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <Award className="text-blue-600" size={24} />
                <h3 className="font-black text-slate-900 uppercase text-sm tracking-widest">Le mot de Kalala</h3>
              </div>
              <p className="text-slate-700 italic leading-relaxed mb-4">
                "En tant que professionnel du secteur, je connais les réalités des salons : recrutements difficiles et manque de visibilité pour les vrais talents. Goorco est né pour offrir un outil pensé par un pro, pour des pros."
              </p>
              <p className="text-blue-600 font-bold text-sm">
                — Dje Bi Daouo Dieudonné (PDG de Goorco)
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                <div className="mb-4">{v.icon}</div>
                <h4 className="font-bold text-slate-900 text-xs uppercase mb-2 tracking-widest">{v.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 : LE GUIDE DE RECRUTEMENT (Contenu 1) */}
      <section className="bg-gray-50 py-20 px-6 border-y border-gray-200">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
              Le guide Goorco pour bâtir une équipe stable
            </h2>
            <p className="text-lg text-gray-600 italic">
              Recruter en salon : attitude ou compétences déjà acquises ?
            </p>
          </div>

          {/* Intro Guide */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-lg leading-relaxed mb-6">
              En Côte d’Ivoire, <strong>9 salons sur 10</strong> perdent du temps et de l’argent sur le recrutement. Le problème n’est pas le manque de coiffeuses ou d’esthéticiennes. C’est la façon de recruter.
            </p>
            <p className="text-blue-800 font-bold italic border-l-4 border-blue-600 pl-4">
              "Je recrute quelqu’un qui sait déjà tout faire, ou quelqu’un qui accepte d’apprendre et de s’adapter ?"
            </p>
          </div>

          {/* Les Profils */}
          <div>
            <h3 className="text-xl font-bold mb-6">1. Les 2 profils en entretien</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-sm">
                <h4 className="font-bold text-red-700 mb-2 uppercase">Le profil “déjà compétent”</h4>
                <p>Opérationnel jour 1, mais coûte cher (120k-180k) et risque de partir pour 20k de plus.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm text-sm">
                <h4 className="font-bold text-blue-800 mb-2 uppercase">Le profil “qui s’adapte”</h4>
                <p>Plus loyal, reste 18-36 mois. La technique s’apprend, l’attitude non.</p>
              </div>
            </div>
          </div>

          {/* Grille de Notation */}
          <div>
            <h3 className="text-xl font-bold mb-6">2. La grille de notation Goorco</h3>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-4 border-b">Critère</th>
                    <th className="p-4 border-b text-center">Poids</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-4 border-b">Technique de base (Test 10 min)</td><td className="p-4 border-b text-center font-bold">30%</td></tr>
                  <tr><td className="p-4 border-b">Attitude & Apprentissage (Réponses questions)</td><td className="p-4 border-b text-center font-bold">40%</td></tr>
                  <tr><td className="p-4 border-b">Fiabilité & Ponctualité</td><td className="p-4 border-b text-center font-bold">20%</td></tr>
                  <tr><td className="p-4">Fit équipe & Salon</td><td className="p-4 text-center font-bold">10%</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 : LE RÔLE DE GOORCO & CTA (Contenu 1 & 2) */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="bg-gray-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-8 text-blue-400 uppercase">Le rôle de Goorco : Te faire gagner du temps</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-2">
                <div className="text-blue-400 font-black text-xl italic">01.</div>
                <p className="text-sm font-bold">Appel de pré-qualification (3 min)</p>
              </div>
              <div className="space-y-2">
                <div className="text-blue-400 font-black text-xl italic">02.</div>
                <p className="text-sm font-bold">Vocal de présentation WhatsApp</p>
              </div>
              <div className="space-y-2">
                <div className="text-blue-400 font-black text-xl italic">03.</div>
                <p className="text-sm font-bold">Vérification de l'ancien salon</p>
              </div>
            </div>
            
            <div className="text-center border-t border-gray-700 pt-10">
              <h3 className="text-2xl font-black uppercase mb-6 tracking-tight">Prêt à rejoindre la communauté ?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-black uppercase text-xs hover:bg-blue-50 transition-all shadow-lg">
                  Découvrir les offres
                </button>
                <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black uppercase text-xs hover:bg-blue-700 transition-all border border-blue-500 shadow-lg">
                  Nous contacter sur WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;