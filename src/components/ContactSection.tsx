import { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    businessSector: "",
    phoneNumber: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello, I'm ${form.fullName} from ${form.companyName}.\nBusiness Sector: ${form.businessSector}\nPhone: ${form.phoneNumber}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/212763744143?text=${encoded}`, "_blank");
  };

  return (
    <section className="py-24 bg-secondary/30" id="contact">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3 font-body">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Let's <span className="text-gold-gradient">Talk</span>
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {[
            { key: "fullName", label: "Full Name", type: "text", placeholder: "John Doe" },
            { key: "companyName", label: "Company Name", type: "text", placeholder: "Acme Inc." },
            { key: "businessSector", label: "Business Sector", type: "text", placeholder: "E-commerce, SaaS..." },
            { key: "phoneNumber", label: "Phone Number", type: "tel", placeholder: "+212 6XX XXX XXX" },
          ].map((field) => (
            <div key={field.key}>
              <label className="block text-sm font-body tracking-wider uppercase text-muted-foreground mb-2">
                {field.label}
              </label>
              <input
                type={field.type}
                required
                placeholder={field.placeholder}
                value={form[field.key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                className="w-full bg-card border border-primary/20 rounded-sm px-4 py-3 text-foreground font-body placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:glow-gold-sm transition-all duration-300"
              />
            </div>
          ))}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gold-gradient text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm py-4 rounded-sm glow-gold hover:glow-gold transition-shadow duration-500"
          >
            Send via WhatsApp
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
