import { motion } from "framer-motion";
import fyxtersImg from "/assets/fosters-photo.png";
import chamsImg from "/assets/chams-solar.png";

const projects = [
  {
    id: 1,
    tag: "Mobile Solutions",
    title: "Expert Tech Support <span class='text-gold-gradient'>at Your Fingertips</span>",
    description: "From shattered screens to complex hardware issues, Fyxters connects you with top-tier certified technicians. We guarantee transparent pricing and professional results for all your device needs.",
    image: fyxtersImg,
    stats: [
      { value: "100%", label: "Secure Payments" },
      { value: "Certified", label: "Technicians" },
    ],
  },
  {
    id: 2,
    tag: "Industrial Energy",
    title: "Transform Every Inch Into <span class='text-gold-gradient'>Performance</span>",
    description: "An empty roof is a missed opportunity. Chams specializes in turning industrial rooftops into high-yield solar powerhouses, maximizing your ROI and energy independence.",
    image: chamsImg,
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
            {/* L-Ktaba: index 0 (Fyxters) tji 3la lissar, index 1 (Chams) tji 3la liman */}
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

            {/* Tswira: index 0 (Fyxters) tji 3la liman, index 1 (Chams) tji 3la lissar */}
            <motion.div
              className={`relative ${index % 2 !== 0 ? "md:order-1" : "md:order-2"}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 to-transparent rounded-2xl blur-3xl" />
              <img
                src={project.image}
                alt={project.tag}
                className="relative rounded-2xl w-full h-auto shadow-2xl border border-white/5 object-cover aspect-[4/3] md:aspect-auto"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;