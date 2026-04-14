import { motion } from "framer-motion";
import aboutImage from "@/assets/about-image.jpg";

const AboutSection = () => {
  return (
    <section className="py-24" id="about">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3 font-body">About Us</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Building <span className="text-gold-gradient">Brands</span> That Last
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              The Valyria Agency is a premium digital marketing agency born in Morocco with a global vision. We specialize in high-performance advertising campaigns and business consulting that deliver measurable results.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Our team combines data-driven strategies with creative excellence to help businesses scale internationally. From Meta & Google Ads to full-funnel consulting, we are your growth partner.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-lg blur-2xl" />
            <img
              src={aboutImage}
              alt="Valyria Agency Team"
              className="relative rounded-lg w-full object-cover aspect-[4/5] border border-primary/10"
              loading="lazy"
              width={800}
              height={1024}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
