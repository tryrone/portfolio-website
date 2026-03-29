import React, { useEffect, useState } from "react";
import { navLinks, socialLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      setHidden(currentScrollY > lastScrollY && currentScrollY > 300);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? "bg-background-dark/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-xl font-display font-bold tracking-tighter uppercase flex items-center gap-0.5 hover:opacity-80 transition-opacity"
        >
          Tega
          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
          <span className="text-white/60">DEV</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] backdrop-blur-xl px-2 py-1.5 rounded-full border border-white/5">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`px-5 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${
                active === link.title
                  ? "bg-white/10 text-white"
                  : "text-white/40 hover:text-white/70"
              }`}
              onClick={() => setActive(link.title)}
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`https://github.com/tryrone`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
            aria-label="GitHub"
          >
            <span className="material-symbols-outlined text-[18px]">code</span>
          </a>
          <button
            className="btn-primary px-7 py-2.5 text-[11px] uppercase tracking-widest font-bold"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white relative z-50"
          onClick={() => setToggle(!toggle)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {toggle ? "close" : "menu"}
          </span>
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-background-dark/95 backdrop-blur-2xl z-40 transition-all duration-500 ${
            toggle ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-2xl font-display font-bold uppercase tracking-wider transition-colors ${
                  active === link.title ? "text-primary" : "text-white/50 hover:text-white"
                }`}
                onClick={() => {
                  setToggle(false);
                  setActive(link.title);
                }}
              >
                {link.title}
              </a>
            ))}
            <div className="mt-4 flex items-center gap-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">code</span>
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">tag</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
