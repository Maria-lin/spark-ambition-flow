import { motion } from "framer-motion";
import { Brain, Zap, Shield, BarChart3, Globe, Layers } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "IA Avancée",
    description: "Des algorithmes intelligents qui apprennent de vos habitudes et anticipent vos besoins.",
  },
  {
    icon: Zap,
    title: "Ultra Rapide",
    description: "Performance optimisée pour une expérience instantanée, sans temps de chargement.",
  },
  {
    icon: Shield,
    title: "Sécurité Maximale",
    description: "Vos données sont protégées avec un chiffrement de niveau militaire.",
  },
  {
    icon: BarChart3,
    title: "Analytics Puissants",
    description: "Des tableaux de bord intelligents pour visualiser et comprendre vos données.",
  },
  {
    icon: Globe,
    title: "Accessible Partout",
    description: "Travaillez depuis n'importe quel appareil, n'importe où dans le monde.",
  },
  {
    icon: Layers,
    title: "Intégrations",
    description: "Connectez vos outils favoris en quelques clics pour un workflow unifié.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-50" />
      
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">
            Fonctionnalités
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Tout ce dont vous avez{" "}
            <span className="text-gradient">besoin</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Une suite complète d'outils intelligents pour transformer votre façon de travailler.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group glass rounded-2xl p-8 hover-lift gradient-border cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:glow-subtle transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
