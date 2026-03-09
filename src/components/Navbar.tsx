import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong"
    >
      <div className="container px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
          <span className="font-display text-lg font-bold">NexaAI</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Fonctionnalités", "Dashboard", "Tarifs", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="px-5 py-2.5 bg-primary text-primary-foreground font-display font-semibold text-sm rounded-lg hover-lift transition-all duration-300">
          Essai gratuit
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
