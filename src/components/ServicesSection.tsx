import { motion } from "framer-motion";
import { Target, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Ads Campaign Management",
    description:
      "Full-service ad management across Meta, Google, TikTok & more. We handle strategy, creative, targeting, and optimization to maximize your ROAS.",
    features: ["Meta & Google Ads", "Creative Strategy", "A/B Testing", "Performance Reports"],
  },
  {
    icon: Lightbulb,
    title: "Business Consulting",
    description:
      "Strategic consulting to help you build scalable systems, improve operations, and accelerate growth in competitive markets.",
    features: ["Go-To-Market Strategy", "Brand Positioning", "Sales Funnels", "Growth Roadmaps"],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24" id="services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3 font-body">What We Do</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Our <span className="text-gold-gradient">Services</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-card border border-primary/20 rounded-lg p-8 hover:glow-gold-sm transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-lg bg-gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/70 font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
