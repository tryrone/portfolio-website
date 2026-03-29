import React, { useState } from "react";
import { motion } from "framer-motion";
import { socialLinks } from "../constants";

const RESUME_URL = "https://drive.google.com/file/d/1tOkBQUws5CSp4fhJ6WRrNI1fjkVLgWp1/view?usp=drive_link";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    const mailtoLink = `mailto:${socialLinks.email}?subject=Hey Tega — Let's Work Together&body=Name: ${encodeURIComponent(formData.name)}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0A%0D%0A${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
    setTimeout(() => setSending(false), 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative z-10" id="contact">
      <div className="section-divider mb-24"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-[11px] font-bold text-primary/70 uppercase tracking-[0.3em] mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
            Let's build something{" "}
            <span className="text-gradient-primary">together</span>.
          </h2>
          <p className="text-white/30 text-lg max-w-xl mx-auto leading-relaxed">
            Have a project in mind or just want to connect? I'd love to hear
            from you.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-10"
          >
            {/* Email */}
            <div>
              <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] block mb-3">
                Email
              </span>
              <a
                href={`mailto:${socialLinks.email}`}
                className="text-white/60 hover:text-primary transition-colors text-lg font-medium"
              >
                {socialLinks.email}
              </a>
            </div>

            {/* Resume */}
            <div>
              <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] block mb-3">
                Resume
              </span>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors font-medium"
              >
                <span className="material-symbols-outlined text-lg">description</span>
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div>
              <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] block mb-4">
                Connect
              </span>
              <div className="flex gap-3">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-white/30 hover:text-primary hover:border-primary/30 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <span className="material-symbols-outlined text-lg">code</span>
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-white/30 hover:text-primary hover:border-primary/30 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <span className="material-symbols-outlined text-lg">person</span>
                </a>
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-white/30 hover:text-primary hover:border-primary/30 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <span className="material-symbols-outlined text-lg">tag</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-card-dark border border-white/5 rounded-xl px-5 py-3.5 text-white text-sm placeholder-white/15 focus:border-primary/30 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                    className="w-full bg-card-dark border border-white/5 rounded-xl px-5 py-3.5 text-white text-sm placeholder-white/15 focus:border-primary/30 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full bg-card-dark border border-white/5 rounded-xl px-5 py-3.5 text-white text-sm placeholder-white/15 focus:border-primary/30 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={sending}
                className="btn-primary w-full py-4 text-sm tracking-wide flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {sending ? "Opening Mail Client..." : "Send Message"}
                <span className="material-symbols-outlined text-lg">
                  {sending ? "hourglass_top" : "send"}
                </span>
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="mt-32 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo */}
            <div className="text-lg font-display font-bold tracking-tighter uppercase flex items-center gap-0.5">
              Tega
              <span className="w-1 h-1 bg-primary rounded-full mt-1.5"></span>
              <span className="text-white/40">DEV</span>
            </div>

            {/* Nav */}
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              <a href="#about" className="text-sm text-white/30 hover:text-white transition-colors">
                About
              </a>
              <a href="#experience" className="text-sm text-white/30 hover:text-white transition-colors">
                Experience
              </a>
              <a href="#projects" className="text-sm text-white/30 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-sm text-white/30 hover:text-white transition-colors">
                Contact
              </a>
            </nav>

            {/* Copyright */}
            <div className="text-xs text-white/15">
              © {new Date().getFullYear()} Tega Oboraruvwe
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
