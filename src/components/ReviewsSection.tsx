import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ahmed B.",
    company: "Marque E-commerce",
    text: "Valyria a transformé notre présence en ligne. Notre chiffre d'affaires a triplé en seulement 4 mois.",
    rating: 5,
  },
  {
    name: "Sara K.",
    company: "Startup SaaS",
    text: "La meilleure agence avec laquelle nous avons travaillé. Professionnelle, créative et axée sur les résultats.",
    rating: 5,
  },
  {
    name: "Youssef M.",
    company: "Immobilier",
    text: "Leurs services de conseil nous ont aidés à restructurer l'intégralité de notre stratégie de mise sur le marché.",
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

        {/* --- SECTION VIDÉO (REEL FORMAT) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          // Sgherna l-3erd hna bach yji b7al téléphone (max-w-[360px])
          className="max-w-[360px] mx-auto mb-20 relative group" 
        >
          {/* Glow wara l-vidéo bach tban premium */}
          <div className="absolute -inset-4 bg-primary/20 rounded-[2.5rem] blur-2xl opacity-50 transition-opacity duration-500 group-hover:opacity-100 -z-10" />
          
          {/* Aspect 9/16 dyal les Reels + zedt rounded-2xl bach tban b7al écran dyal tel */}
          <div className="aspect-[9/16] bg-black border border-primary/20 rounded-2xl relative overflow-hidden shadow-2xl">
            <video
              className="w-full h-full object-cover" // object-cover bach t3mer l-cadre
              controls
              preload="metadata"
              playsInline // Hadi mzyana l les iphones
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