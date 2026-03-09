import { motion } from "framer-motion";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

const DashboardSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">
            Dashboard
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Un tableau de bord{" "}
            <span className="text-gradient">intelligent</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Visualisez toutes vos données en temps réel avec une interface claire et puissante.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Glow behind dashboard */}
          <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
          
          <div className="relative glass-strong rounded-2xl overflow-hidden gradient-border">
            <img
              src={dashboardPreview}
              alt="Dashboard intelligent avec visualisations de données"
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
          </div>

          {/* Floating cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -left-4 top-1/4 glass rounded-xl p-4 hidden lg:block animate-float"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold text-sm">+24%</span>
              </div>
              <div>
                <p className="text-sm font-semibold">Croissance</p>
                <p className="text-xs text-muted-foreground">Ce mois-ci</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -right-4 bottom-1/4 glass rounded-xl p-4 hidden lg:block animate-float"
            style={{ animationDelay: "2s" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <span className="text-accent font-bold text-sm">98%</span>
              </div>
              <div>
                <p className="text-sm font-semibold">Score IA</p>
                <p className="text-xs text-muted-foreground">Précision</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardSection;
