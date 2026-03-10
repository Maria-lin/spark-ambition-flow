import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, GraduationCap, Bell, Compass, BarChart3, BookOpen, Sparkles } from "lucide-react";
import { useStudent } from "@/contexts/StudentContext";

const agents = [
  {
    id: "career-planner",
    title: "Career Planner",
    description: "Planifie ton parcours professionnel, identifie les meilleures opportunités de stages et définis tes objectifs.",
    icon: Compass,
    color: "bg-primary/10 text-primary border-primary/20",
    accent: "from-primary/20 to-primary/5",
  },
  {
    id: "skill-analyzer",
    title: "Skill Analyzer",
    description: "Analyse tes compétences, identifie tes forces et reçois des recommandations personnalisées pour progresser.",
    icon: BarChart3,
    color: "bg-[hsl(var(--pole-employment))]/10 text-[hsl(var(--pole-employment))] border-[hsl(var(--pole-employment))]/20",
    accent: "from-[hsl(var(--pole-employment))]/20 to-[hsl(var(--pole-employment))]/5",
  },
  {
    id: "training-advisor",
    title: "Training Advisor",
    description: "Découvre les formations, certifications et parcours académiques adaptés à tes ambitions.",
    icon: BookOpen,
    color: "bg-[hsl(var(--pole-culture))]/10 text-[hsl(var(--pole-culture))] border-[hsl(var(--pole-culture))]/20",
    accent: "from-[hsl(var(--pole-culture))]/20 to-[hsl(var(--pole-culture))]/5",
  },
];

const AgentHub = () => {
  const { profile } = useStudent();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
        <div className="container px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="p-2 rounded-xl hover:bg-secondary transition-colors">
              <ArrowLeft className="w-4 h-4 text-muted-foreground" />
            </Link>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold">StudyPilot</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-xl hover:bg-secondary transition-colors">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-accent" />
            </button>
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold font-display text-primary">
              {profile.avatar}
            </div>
          </div>
        </div>
      </div>

      <div className="container px-6 py-10 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Agents IA</span>
          </div>
          <h1 className="font-display text-3xl font-bold mb-2">Hub des Agents</h1>
          <p className="text-muted-foreground">
            Choisis un assistant IA spécialisé pour t'accompagner, {profile.firstName}.
          </p>
        </motion.div>

        <div className="grid gap-5">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
            >
              <button
                onClick={() => navigate(`/agent/${agent.id}`)}
                className="w-full text-left group"
              >
                <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-border hover:-translate-y-0.5">
                  <div className={`absolute inset-0 bg-gradient-to-br ${agent.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative flex items-start gap-5">
                    <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 ${agent.color}`}>
                      <agent.icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-lg mb-1">{agent.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{agent.description}</p>
                    </div>
                    <div className="shrink-0 self-center px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                      Lancer l'assistant
                    </div>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentHub;
