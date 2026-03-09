import { motion } from "framer-motion";
import { BarChart3, Users, TrendingUp, Eye, ShieldCheck, GraduationCap } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "Meilleure réussite académique", description: "Suivi prédictif et alertes précoces pour réduire le décrochage." },
  { icon: Users, title: "Accompagnement personnalisé", description: "Chaque étudiant bénéficie d'un parcours adapté à ses besoins." },
  { icon: BarChart3, title: "Tableaux de bord institutionnels", description: "Visualisez les données de progression et d'engagement en temps réel." },
  { icon: Eye, title: "Visibilité sur les besoins", description: "Identifiez les difficultés récurrentes pour adapter vos dispositifs." },
  { icon: GraduationCap, title: "Insertion professionnelle", description: "Préparez vos étudiants au marché du travail avec des outils IA." },
  { icon: ShieldCheck, title: "Conformité et sécurité", description: "Données hébergées en France, RGPD, sécurité renforcée." },
];

const InstitutionsSection = () => {
  return (
    <section id="institutions" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-warm-glow" />

      <div className="container relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
              Pour les établissements
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4 mb-6">
              Offrez à vos étudiants un{" "}
              <span className="text-gradient-warm">accompagnement d'exception</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              StudyPilot s'intègre dans votre écosystème pour améliorer la réussite, 
              l'engagement et l'insertion de vos étudiants. Un outil de pilotage 
              puissant pour votre institution.
            </p>
            <button className="group px-8 py-4 bg-accent text-accent-foreground font-display font-semibold rounded-2xl hover-lift glow-accent transition-all duration-300 flex items-center gap-2">
              Demander une démo
              <TrendingUp className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card rounded-2xl p-5 border border-border/50 card-hover"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                  <b.icon className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-display font-semibold text-sm mb-1">{b.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionsSection;
