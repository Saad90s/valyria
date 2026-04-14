import { Instagram, Mail } from "lucide-react";
import logo from "/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={logo} alt="The Valyria Agency" className="h-10 w-auto opacity-70" />

        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/valyria.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="mailto:contact@valyria.agency"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground font-body">
          © {new Date().getFullYear()} The Valyria Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
