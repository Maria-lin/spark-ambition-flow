import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amina K.",
    role: "Étudiante en L3 Droit — Paris",
    text: "StudyPilot m'a aidée à trouver un logement fiable en 48h et à organiser mes révisions. Je me sens enfin accompagnée.",
    avatar: "AK",
  },
  {
    name: "Thomas M.",
    role: "Master Informatique — Lyon",
    text: "Le voicebot d'entretien m'a permis de décrocher mon stage. L'analyse de CV est bluffante, j'ai reçu 3 retours positifs.",
    avatar: "TM",
  },
  {
    name: "Prof. Dubois",
    role: "Directeur de programme — ESSEC",
    text: "Nous avons réduit le décrochage de 23% en un semestre. Les tableaux de bord nous donnent une visibilité inédite.",
    avatar: "PD",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-secondary/30">
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">
            Témoignages
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Ils nous font{" "}
            <span className="text-gradient">confiance</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-3xl p-8 border border-border/50 card-hover"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold font-display text-primary">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
