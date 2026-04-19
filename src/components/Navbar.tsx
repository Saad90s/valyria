import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/assets/logo.png";

const navLinks = [
  { label: "Work", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Gérer le fond de la navbar au scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquer le scroll de la page quand le menu plein écran est ouvert
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 ease-in-out ${scrolled && !open
            ? "bg-zinc-950/80 backdrop-blur-lg border-b border-white/5 py-2"
            : "bg-transparent py-4"
          }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center group relative z-[60]">
            <img
              src={logo}
              alt="The Valyria Agency"
              className="h-10 md:h-12 w-auto transition-transform duration-500 group-hover:scale-105"
            />
          </a>

          {/* Bouton Menu (Burger to X) */}
          <button
            onClick={() => setOpen(!open)}
            className="relative z-[60] flex flex-col justify-center items-center w-12 h-12 group rounded-full hover:bg-white/5 transition-colors"
            aria-label="Toggle Menu"
          >
            {/* Ligne du haut */}
            <motion.span
              animate={{
                rotate: open ? 45 : 0,
                y: open ? 3 : -3
              }}
              className="block w-6 h-[2px] bg-amber-400 absolute"
            />
            {/* Ligne du bas */}
            <motion.span
              animate={{
                rotate: open ? -45 : 0,
                y: open ? -3 : 3
              }}
              className="block w-6 h-[2px] bg-amber-400 absolute"
            />
          </button>
        </div>
      </nav>

      {/* Menu Plein Écran */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} // Courbe d'animation fluide
            className="fixed inset-0 z-50 bg-zinc-950 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <div key={link.label} className="overflow-hidden">
                  <motion.a
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "100%", opacity: 0 }}
                    transition={{
                      delay: i * 0.1 + 0.3,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="relative group block text-4xl md:text-6xl font-light tracking-[0.2em] uppercase text-zinc-300 hover:text-white transition-colors py-2"
                  >
                    {link.label}
                    {/* Soulignement animé au hover */}
                    <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-amber-400 transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
                  </motion.a>
                </div>
              ))}
            </div>

            {/* Petit texte ou footer en bas du menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute bottom-10 text-zinc-600 text-sm tracking-widest uppercase"
            >
              The Valyria Agency © {new Date().getFullYear()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;