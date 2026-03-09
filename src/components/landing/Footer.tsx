import { GraduationCap } from "lucide-react";

const Footer = () => {
  const links = {
    Produit: ["Fonctionnalités", "Dashboard", "Tarifs", "Roadmap"],
    Étudiants: ["Orientation", "Emploi & CV", "Logement", "Bons plans"],
    Établissements: ["Universités", "Écoles", "Partenariats", "API"],
    Ressources: ["Blog", "Aide", "RGPD", "Contact"],
  };

  return (
    <footer className="border-t border-border py-16">
      <div className="container px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-bold">StudyPilot</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Le copilote IA de la vie étudiante.
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 StudyPilot. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
