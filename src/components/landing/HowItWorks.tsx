import { motion } from "framer-motion";
import { UserPlus, Brain, Rocket } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Inscris-toi en 30 secondes",
    description: "Crée ton profil étudiant et dis-nous ce qui compte pour toi : études, logement, budget, bien-être…",
  },
  {
    icon: Brain,
    number: "02",
    title: "L'IA apprend ton parcours",
    description: "Nos agents analysent ton profil et construisent un plan d'accompagnement 100% personnalisé.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Avance chaque jour",
    description: "Quiz, conseils, alertes logement, préparation entretien… ton copilote t'accompagne au quotidien.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="relative py-32 overflow-hidden bg-secondary/30">
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">
            Comment ça marche
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Simple comme{" "}
            <span className="text-gradient">1, 2, 3</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-14 left-[60%] w-[80%] h-px border-t-2 border-dashed border-border" />
              )}
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/10 mb-6">
                <step.icon className="w-8 h-8 text-primary" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center font-display">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm max-w-xs mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
