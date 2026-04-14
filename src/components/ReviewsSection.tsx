import { motion } from "framer-motion";
import { Star } from "lucide-react"; // L'icône 'Play' a été retirée car la vidéo a ses propres contrôles

const reviews = [
  {
    name: "Ahmed B.",
    company: "E-commerce Brand",
    text: "Valyria transformed our online presence. Our revenue grew 3x in just 4 months.",
    rating: 5,
  },
  {
    name: "Sara K.",
    company: "SaaS Startup",
    text: "The best agency we've worked with. Professional, creative, and results-driven.",
    rating: 5,
  },
  {
    name: "Youssef M.",
    company: "Real Estate",
    text: "Their consulting services helped us restructure our entire go-to-market strategy.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-24 bg-secondary/30" id="reviews">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3 font-body">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            What Our <span className="text-gold-gradient">Clients Say</span>
          </h2>
        </motion.div>

        {/* Section vidéo intégrée */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="aspect-video bg-card border border-primary/20 rounded-lg relative overflow-hidden shadow-lg">
            <video
              // Beddel object-cover b object-contain hna
              className="w-full h-full object-contain"
              controls
              preload="metadata"
            >
              <source src="/assets/recommandation1.MP4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-primary/20 rounded-lg p-6 hover:glow-gold-sm transition-shadow duration-500"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 font-body leading-relaxed">"{review.text}"</p>
              <div>
                <p className="font-display font-semibold text-foreground">{review.name}</p>
                <p className="text-sm text-muted-foreground font-body">{review.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;