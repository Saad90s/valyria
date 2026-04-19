// 1. Mettez à jour le tableau pour inclure les chemins vers vos images
// Assurez-vous que ces images existent dans votre dossier "public" (ex: public/logos/google.svg)
const partners = [
  { name: "Chams", logo: "/assets/chams.png" },
  { name: "Expoluxe", logo: "/assets/expoluxe.png" },
  { name: "Fyxters", logo: "/assets/Fyxters.png" },
  { name: "ligne&matiere", logo: "/assets/ligne&matiere.png" },
  { name: "natech", logo: "/assets/natech.png" },
  { name: "onss", logo: "/assets/onss.jpg" },
  { name: "solarify", logo: "/assets/solarify.jpg" }
];

const PartnersSection = () => {
  return (
    <section className="py-16 border-y border-border/30 overflow-hidden">
      <div className="container mb-8 text-center">
        <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase font-body">
          Trusted Platforms & Partners
        </p>
      </div>
      <div className="relative">
        {/* Ajout de 'items-center' pour aligner verticalement les logos s'ils ont des hauteurs différentes */}
        <div className="flex animate-scroll-left gap-16 w-max items-center">
          {[...partners, ...partners].map((partner, i) => (
            <img
              key={i}
              src={partner.logo}
              alt={`Logo de ${partner.name}`}
              // Classes Tailwind adaptées pour les images :
              // - h-8 md:h-12 w-auto : contrôle la taille tout en gardant les proportions
              // - opacity-40 hover:opacity-100 : effet de survol
              // - grayscale hover:grayscale-0 : (Optionnel) passe l'image en noir et blanc puis en couleur au survol
              className="h-24 md:h-24 w-auto opacity-40 hover:opacity-100 transition-all duration-500 select-none grayscale hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;