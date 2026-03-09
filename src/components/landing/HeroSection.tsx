import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Brain, Briefcase, Heart, Sparkles } from "lucide-react";

const orbitItems = [
  { icon: Brain, label: "Académique", color: "bg-pole-career pole-career", delay: 0 },
  { icon: Briefcase, label: "Emploi", color: "bg-pole-employment pole-employment", delay: 1 },
  { icon: BookOpen, label: "Admin", color: "bg-pole-logistics pole-logistics", delay: 2 },
  { icon: Heart, label: "Bien-être", color: "bg-pole-culture pole-culture", delay: 3 },
  { icon: Sparkles, label: "Bons plans", color: "bg-pole-tricks pole-tricks", delay: 4 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-warm-glow" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      <div className="container relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Copilote IA pour étudiants
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight"
            >
              Tu n'es pas seul
              <br />
              dans ton{" "}
              <span className="text-gradient">parcours</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed"
            >
              Un copilote intelligent 360° qui t'accompagne dans tes études, 
              ton orientation, ta carrière et ta vie étudiante.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <button className="group relative px-8 py-4 bg-primary text-primary-foreground font-display font-semibold rounded-2xl hover-lift glow-primary transition-all duration-300 flex items-center gap-2">
                Commencer gratuitement
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="px-8 py-4 border border-border rounded-2xl font-display font-medium text-foreground hover:bg-secondary/50 transition-all duration-300">
                Voir la démo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center gap-10 mt-14"
            >
              {[
                { value: "150K+", label: "Étudiants actifs" },
                { value: "200+", label: "Universités" },
                { value: "4.9/5", label: "Satisfaction" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-bold text-gradient">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Orbit visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[480px] h-[480px]">
              {/* Center hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center z-10">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 text-primary" />
                </div>
              </div>

              {/* Orbit rings */}
              <div className="absolute inset-12 rounded-full border border-border/40" />
              <div className="absolute inset-0 rounded-full border border-border/20" />

              {/* Orbiting items */}
              {orbitItems.map((item, i) => {
                const angle = (i / orbitItems.length) * 360;
                const radius = i % 2 === 0 ? 180 : 210;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + item.delay * 0.15 }}
                    className="absolute top-1/2 left-1/2 animate-float"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      animationDelay: `${item.delay * 0.8}s`,
                    }}
                  >
                    <div className={`flex items-center gap-2.5 glass rounded-2xl px-4 py-3 shadow-lg card-hover cursor-default`}>
                      <div className={`w-9 h-9 rounded-xl ${item.color.split(" ")[0]} flex items-center justify-center`}>
                        <item.icon className={`w-4 h-4 ${item.color.split(" ")[1]}`} />
                      </div>
                      <span className="text-sm font-semibold font-display whitespace-nowrap">{item.label}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const GraduationCap = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

export default HeroSection;
