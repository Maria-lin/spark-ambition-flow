import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow" />
      
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center glass-strong rounded-3xl p-12 sm:p-16 gradient-border"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Prêt à commencer ?</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-6">
            Rejoignez la{" "}
            <span className="text-gradient">révolution</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Essayez gratuitement et découvrez pourquoi des milliers d'utilisateurs 
            nous font confiance chaque jour.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-8 py-4 bg-primary text-primary-foreground font-display font-semibold rounded-xl hover-lift glow-primary transition-all duration-300 flex items-center gap-2">
              Démarrer maintenant
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className="px-8 py-4 glass rounded-xl font-display font-medium text-foreground hover:bg-secondary/50 transition-all duration-300">
              Nous contacter
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
