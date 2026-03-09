import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
            </div>
            <span className="font-display text-sm font-bold">NexaAI</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 NexaAI. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
