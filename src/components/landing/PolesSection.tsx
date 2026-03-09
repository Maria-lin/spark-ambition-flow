import { motion } from "framer-motion";
import { Brain, Briefcase, Building, Heart, Sparkles, BookOpen, FileText, MapPin, Users, Ticket, GraduationCap, TrendingUp, Mic, Search, Shield, Calendar, Wallet } from "lucide-react";

const poles = [
  {
    id: "career",
    title: "Carrière & Académique",
    subtitle: "Réussis tes études avec un plan personnalisé",
    colorClass: "pole-career",
    bgClass: "bg-pole-career",
    features: [
      { icon: Brain, label: "Orientation intelligente" },
      { icon: TrendingUp, label: "Simulation de notes" },
      { icon: BookOpen, label: "Résumés de cours IA" },
      { icon: GraduationCap, label: "Plan de réussite" },
    ],
  },
  {
    id: "employment",
    title: "Employabilité",
    subtitle: "Prépare ton avenir professionnel",
    colorClass: "pole-employment",
    bgClass: "bg-pole-employment",
    features: [
      { icon: FileText, label: "CV Analyzer & Adapter" },
      { icon: Mic, label: "Voicebot Entretien" },
      { icon: Wallet, label: "Négociation salaire" },
      { icon: Search, label: "Salons & Forums" },
    ],
  },
  {
    id: "logistics",
    title: "Logistique & Admin",
    subtitle: "Simplifie tes démarches du quotidien",
    colorClass: "pole-logistics",
    bgClass: "bg-pole-logistics",
    features: [
      { icon: Building, label: "Logement résidences" },
      { icon: MapPin, label: "Logement privé" },
      { icon: Shield, label: "Détection fraude" },
      { icon: FileText, label: "Papiers & Admin" },
    ],
  },
  {
    id: "culture",
    title: "Culture & Bien-être",
    subtitle: "Profite pleinement de ta vie étudiante",
    colorClass: "pole-culture",
    bgClass: "bg-pole-culture",
    features: [
      { icon: Calendar, label: "Événements" },
      { icon: Users, label: "Réseau entraide" },
      { icon: Heart, label: "Bien-être" },
    ],
  },
  {
    id: "tricks",
    title: "Bons Plans & Mobilité",
    subtitle: "Économise et bouge facilement",
    colorClass: "pole-tricks",
    bgClass: "bg-pole-tricks",
    features: [
      { icon: Ticket, label: "Réductions" },
      { icon: Briefcase, label: "Jobs étudiants" },
      { icon: MapPin, label: "Mobilité locale" },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PolesSection = () => {
  return (
    <section id="poles" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">
            5 pôles d'accompagnement
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Un écosystème{" "}
            <span className="text-gradient">complet</span>{" "}
            d'agents IA
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Chaque aspect de ta vie étudiante est couvert par des agents spécialisés 
            qui apprennent de tes besoins.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {poles.map((pole) => (
            <motion.div
              key={pole.id}
              variants={item}
              className={`group relative bg-card rounded-3xl p-8 card-hover border border-border/50 ${
                pole.id === "career" ? "md:col-span-2 lg:col-span-1 lg:row-span-1" : ""
              }`}
            >
              {/* Color accent line */}
              <div className={`w-12 h-1 rounded-full ${pole.bgClass} mb-6`} />

              <h3 className={`font-display text-xl font-bold mb-2 ${pole.colorClass}`}>
                {pole.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">{pole.subtitle}</p>

              <div className="space-y-3">
                {pole.features.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center gap-3 text-sm group/item"
                  >
                    <div className={`w-8 h-8 rounded-lg ${pole.bgClass} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover/item:scale-110`}>
                      <f.icon className={`w-4 h-4 ${pole.colorClass}`} />
                    </div>
                    <span className="text-foreground/80">{f.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PolesSection;
