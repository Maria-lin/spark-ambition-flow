import { motion } from "framer-motion";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Fonctionnalités", href: "#poles" },
    { label: "Comment ça marche", href: "#how" },
    { label: "Établissements", href: "#institutions" },
    { label: "Dashboard", href: "/dashboard" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong"
    >
      <div className="container px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold">StudyPilot</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </a>
            )
          )}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Se connecter
          </button>
          <button className="px-5 py-2.5 bg-primary text-primary-foreground font-display font-semibold text-sm rounded-xl hover-lift transition-all duration-300">
            Essai gratuit
          </button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-border px-6 py-4 space-y-3 glass-strong"
        >
          {links.map((item) => (
            <a key={item.label} href={item.href} className="block text-sm py-2 text-muted-foreground">
              {item.label}
            </a>
          ))}
          <button className="w-full mt-2 px-5 py-2.5 bg-primary text-primary-foreground font-display font-semibold text-sm rounded-xl">
            Essai gratuit
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
