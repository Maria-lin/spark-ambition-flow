import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GraduationCap, Brain, Briefcase, Heart, Sparkles, BookOpen,
  TrendingUp, Calendar, FileText, MapPin, ChevronRight, Bell,
  Target, Flame, Star, Zap, ArrowLeft
} from "lucide-react";

const progressModules = [
  { name: "Droit constitutionnel", progress: 78, color: "bg-pole-career" },
  { name: "Économie politique", progress: 62, color: "bg-pole-career" },
  { name: "Méthodologie juridique", progress: 91, color: "bg-pole-career" },
  { name: "Anglais juridique", progress: 45, color: "bg-pole-career" },
];

const quickActions = [
  { icon: Brain, label: "Quiz du jour", desc: "Droit constitutionnel", color: "pole-career", bg: "bg-pole-career" },
  { icon: FileText, label: "Optimiser mon CV", desc: "3 suggestions", color: "pole-employment", bg: "bg-pole-employment" },
  { icon: MapPin, label: "Alertes logement", desc: "2 nouvelles", color: "pole-logistics", bg: "bg-pole-logistics" },
  { icon: Calendar, label: "Événements", desc: "Forum emploi demain", color: "pole-culture", bg: "bg-pole-culture" },
];

const aiRecommendations = [
  { icon: Zap, text: "Renforce le chapitre 5 de Droit constitutionnel — score faible détecté", type: "Académique" },
  { icon: Star, text: "Ton CV manque de mots-clés pour les stages en cabinet", type: "Emploi" },
  { icon: Target, text: "3 résidences CROUS correspondent à tes critères", type: "Logement" },
];

const upcomingEvents = [
  { title: "Forum Emploi Paris", date: "12 mars", tag: "Emploi" },
  { title: "Atelier bien-être", date: "14 mars", tag: "Bien-être" },
  { title: "Deadline CROUS", date: "15 mars", tag: "Admin" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="sticky top-0 z-50 glass-strong border-b border-border">
        <div className="container px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
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
              AK
            </div>
          </div>
        </div>
      </div>

      <div className="container px-6 py-8">
        {/* Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-display text-3xl font-bold mb-1">
            Bonjour Amina 👋
          </h1>
          <p className="text-muted-foreground">
            Voici ton tableau de bord personnalisé. Continue comme ça !
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {[
            { icon: Flame, label: "Streak", value: "12 jours", color: "text-accent" },
            { icon: Target, label: "Objectifs", value: "3/5", color: "text-primary" },
            { icon: TrendingUp, label: "Progression", value: "+8%", color: "text-pole-employment" },
            { icon: Star, label: "Score global", value: "72/100", color: "text-pole-culture" },
          ].map((stat, i) => (
            <div key={stat.label} className="bg-card rounded-2xl p-5 border border-border/50">
              <div className="flex items-center gap-3 mb-2">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
              <p className="font-display text-2xl font-bold">{stat.value}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left column - main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl p-6 border border-border/50"
            >
              <h2 className="font-display font-bold text-lg mb-4">Actions rapides</h2>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action) => (
                  <button
                    key={action.label}
                    className="flex items-center gap-3 p-4 rounded-xl border border-border/50 hover:bg-secondary/50 transition-all duration-300 card-hover text-left"
                  >
                    <div className={`w-10 h-10 rounded-xl ${action.bg} flex items-center justify-center shrink-0`}>
                      <action.icon className={`w-5 h-5 ${action.color}`} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{action.label}</p>
                      <p className="text-xs text-muted-foreground">{action.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Academic progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-2xl p-6 border border-border/50"
            >
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-display font-bold text-lg">Progression académique</h2>
                <button className="text-sm text-primary font-medium flex items-center gap-1">
                  Tout voir <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-4">
                {progressModules.map((mod) => (
                  <div key={mod.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">{mod.name}</span>
                      <span className="text-muted-foreground">{mod.progress}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-secondary">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${mod.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full rounded-full ${mod.color}`}
                        style={{ backgroundColor: `hsl(var(--pole-career))` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* AI Recommendations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card rounded-2xl p-6 border border-border/50"
            >
              <div className="flex items-center gap-2 mb-5">
                <Sparkles className="w-5 h-5 text-primary" />
                <h2 className="font-display font-bold text-lg">Recommandations IA</h2>
              </div>
              <div className="space-y-3">
                {aiRecommendations.map((rec, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-primary/[0.03] border border-primary/10 hover:bg-primary/[0.06] transition-colors cursor-pointer"
                  >
                    <rec.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm">{rec.text}</p>
                      <span className="text-xs text-primary font-medium mt-1 inline-block">{rec.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column - sidebar */}
          <div className="space-y-6">
            {/* Calendar / Events */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-card rounded-2xl p-6 border border-border/50"
            >
              <h2 className="font-display font-bold text-lg mb-4">À venir</h2>
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.title}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-secondary/50 transition-colors cursor-pointer"
                  >
                    <div>
                      <p className="text-sm font-medium">{event.title}</p>
                      <p className="text-xs text-muted-foreground">{event.date}</p>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-secondary font-medium">
                      {event.tag}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bons plans */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="bg-card rounded-2xl p-6 border border-border/50"
            >
              <h2 className="font-display font-bold text-lg mb-4">🎯 Bons plans</h2>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-accent/[0.06] border border-accent/10">
                  <p className="text-sm font-medium">-30% Spotify Étudiant</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Expire dans 5 jours</p>
                </div>
                <div className="p-3 rounded-xl bg-pole-tricks border border-pole-tricks">
                  <p className="text-sm font-medium">Pass transport réduit</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Imagine R — Renouvellement</p>
                </div>
                <div className="p-3 rounded-xl bg-pole-culture border border-pole-culture">
                  <p className="text-sm font-medium">Job babysitting 15€/h</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Paris 5e — Flexible</p>
                </div>
              </div>
            </motion.div>

            {/* Copilot widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/10"
            >
              <div className="flex items-center gap-2 mb-3">
                <Brain className="w-5 h-5 text-primary" />
                <h3 className="font-display font-bold text-sm">Copilote IA</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Pose n'importe quelle question sur tes études, ta carrière ou ta vie étudiante.
              </p>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-background border border-border">
                <input
                  type="text"
                  placeholder="Pose ta question..."
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
                <button className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-primary-foreground" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
