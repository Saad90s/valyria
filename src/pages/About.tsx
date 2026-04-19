import { motion } from "framer-motion";
import aboutImage from "/assets/logo.png";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } // Easing wa3er b7al dial Apple
    },
};

const About = () => {
    return (
        <section className="py-24 relative overflow-hidden" id="about">
            {/* Background decoration khfifa */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold-gradient opacity-5 blur-[100px] -z-10 pointer-events-none" />

            <div className="container">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]"
                >
                    {/* --- CARTE 1: MAIN TEXT (Katched 2 colonnes) --- */}
                    <motion.div 
                        variants={cardVariants} 
                        className="md:col-span-2 row-span-2 bg-secondary/10 dark:bg-white/5 border border-primary/10 rounded-[2.5rem] p-10 lg:p-14 relative overflow-hidden flex flex-col justify-center group"
                    >
                        {/* Abstract glow inside the card */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150" />
                        
                        <div className="relative z-10">
                            <p className="text-primary tracking-[0.2em] uppercase text-sm font-body flex items-center gap-4 mb-8">
                                <span className="w-8 h-px bg-primary/40"></span>
                                About Valyria
                            </p>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.15] mb-6">
                                Building <span className="text-gold-gradient relative inline-block">
                                    Brands
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </span> That Last
                            </h2>

                            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-4 max-w-xl">
                                The Valyria Agency is a premium digital marketing agency born in Morocco with a global vision. We specialize in high-performance advertising campaigns and business consulting that deliver measurable results.
                            </p>
                            <p className="text-muted-foreground font-body leading-relaxed max-w-xl">
                                Our team combines data-driven strategies with creative excellence to help businesses scale internationally. From Meta & Google Ads to full-funnel consulting, we are your growth partner.
                            </p>
                        </div>
                    </motion.div>

                    {/* --- CARTE 2: L'IMAGE (Katched colonne 1, mtwla 3la 2 rows) --- */}
                    <motion.div 
                        variants={cardVariants} 
                        className="md:col-span-1 row-span-2 rounded-[2.5rem] relative overflow-hidden group border border-primary/10 h-full min-h-[400px]"
                    >
                        <img
                            src={aboutImage}
                            alt="Valyria Agency Logo/Team"
                            className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                        
                        {/* Floating Badge weste l'image */}
                        <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-4 flex items-center gap-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-white/80 font-body uppercase tracking-wider">Proven</p>
                                <p className="text-sm font-display font-bold text-white">Measurable Results</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- CARTE 3: STAT 1 --- */}
                    <motion.div 
                        variants={cardVariants} 
                        className="md:col-span-1 bg-primary/5 border border-primary/10 rounded-[2.5rem] p-8 flex flex-col justify-center relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-colors duration-500" />
                        <h3 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-2">Global</h3>
                        <p className="text-sm text-muted-foreground uppercase tracking-widest font-body">Reach & Vision</p>
                    </motion.div>

                    {/* --- CARTE 4: STAT 2 --- */}
                    <motion.div 
                        variants={cardVariants} 
                        className="md:col-span-2 md:col-start-2 bg-primary border border-primary/20 rounded-[2.5rem] p-8 flex items-center justify-between relative overflow-hidden group"
                    >
                        {/* Background pattern if you want, awl ghir loun */}
                        <div className="absolute inset-0 bg-gold-gradient opacity-10" />
                        
                        <div className="relative z-10">
                            <h3 className="text-3xl lg:text-4xl font-display font-bold text-primary-foreground mb-2">Data-Driven Strategy</h3>
                            <p className="text-primary-foreground/80 font-body max-w-md">Every decision we make is backed by deep analytics and market research.</p>
                        </div>

                        {/* Arrow Icon */}
                        <div className="hidden sm:flex w-16 h-16 rounded-full bg-background/20 backdrop-blur-sm items-center justify-center text-primary-foreground relative z-10 transform transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="19" x2="19" y2="5"></line>
                                <polyline points="12 5 19 5 19 12"></polyline>
                            </svg>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default About;