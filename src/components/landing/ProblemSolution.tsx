import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const problems = [
  "Perdu entre les démarches administratives",
  "Aucun suivi personnalisé de tes études",
  "CV envoyé sans retour",
  "Galère pour trouver un logement fiable",
  "Stress, isolement, manque de repères",
];

const solutions = [
  "Un agent IA gère tes papiers pour toi",
  "Plan de réussite académique personnalisé",
  "CV optimisé par IA + simulation d'entretien",
  "Alertes logement vérifiées, anti-fraude",
  "Accompagnement bien-être & communauté",
];

const ProblemSolution = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Avant / <span className="text-gradient">Après</span> StudyPilot
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-destructive/5 rounded-3xl p-8 border border-destructive/10"
          >
            <h3 className="font-display text-lg font-bold mb-6 text-destructive">😓 Avant</h3>
            <div className="space-y-4">
              {problems.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/70">{p}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-pole-employment rounded-3xl p-8 border border-pole-employment"
          >
            <h3 className="font-display text-lg font-bold mb-6 pole-employment">🚀 Après</h3>
            <div className="space-y-4">
              {solutions.map((s) => (
                <div key={s} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-pole-employment shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/70">{s}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
