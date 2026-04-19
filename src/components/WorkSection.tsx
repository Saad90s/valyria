import { motion } from "framer-motion";
import chamsImg from "/assets/chams-solar.jpeg";
import ecommerceImg from "/assets/ecommerce brand.jpeg";
import societeImg from "/assets/societe amenagement.jpeg";

const projects = [
  {
    id: 1,
    hoverName: "chams", // <-- Zedt hadi hna
    tag: "Energy Solutions",
    title: "How Chams Turned Strategy <span class='text-gold-gradient'>Into Sales example</span>",
    description: "Chams’s campaign began with a clear, audience-focused idea. We turned it into a structured strategy with targeted messaging and a high-converting funnel. The result: qualified leads and measurable growth.",
    image: chamsImg,
    stats: [
      { value: "100%", label: "authentic" },
      { value: "unlimited", label: "meetings" },
    ],
  },
  {
    id: 2,
    hoverName: "expoluxe", // <-- W hadi hna
    tag: "Home Improvement ",
    title: "Expoluxe Partnership: <span class='text-gold-gradient'>From Vision to Results</span>",
    description: "Our partnership with Expoluxe began with a clear vision of modern, aesthetic living spaces. We transformed it into a targeted strategy using refined visuals ",
    image: ecommerceImg,
    stats: [],
  },
  {
    id: 3,
    hoverName: "chams", // <-- W hadi hna
    tag: "Industrial Energy",
    title: "Transform Every Inch Into <span class='text-gold-gradient'>Performance</span>",
    description: "An empty roof is a missed opportunity. Chams specializes in turning industrial rooftops into high-yield solar powerhouses, maximizing your ROI and energy independence.",
    image: societeImg,
    stats: [
      { value: "Industrial", label: "Solutions" },
      { value: "High", label: "Efficiency" },
    ],
  },
];

const WorkSection = () => {
  return (
    <section className="py-24 bg-secondary/30" id="work">
      <div className="container space-y-32">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="grid md:grid-cols-2 gap-12 md:gap-24 items-center"
          >
            {/* --- PARTIE TEXTE --- */}
            <motion.div
              className={`${index % 2 !== 0 ? "md:order-2" : "md:order-1"}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3 font-body">
                {project.tag}
              </p>
              <h2
                className="text-3xl md:text-5xl font-display font-bold mb-6"
                dangerouslySetInnerHTML={{ __html: project.title }}
              />
              <p className="text-muted-foreground font-body leading-relaxed mb-10">
                {project.description}
              </p>

              <div className="grid grid-cols-2 gap-6 border-t border-primary/10 pt-8">
                {project.stats.map((stat, i) => (
                  <div key={i}>
                    <p className="text-2xl md:text-3xl font-display font-bold text-gold-gradient">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground font-body mt-1 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* --- PARTIE IMAGE AVEC HOVER --- */}
            <motion.div
              className={`relative ${index % 2 !== 0 ? "md:order-1" : "md:order-2"}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 to-transparent rounded-2xl blur-3xl" />
              
              <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-white/5 aspect-[4/3] md:aspect-auto cursor-pointer w-4/5 mx-auto">
                
                <img
                  src={project.image}
                  alt={project.tag}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  {/* Hna bddelt "Image {index + 1}" b "{project.hoverName}" w zedt uppercase bach tban zwina */}
                  <p className="text-white text-3xl font-display font-bold tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-300 uppercase">
                    {project.hoverName}
                  </p>
                </div>

              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;