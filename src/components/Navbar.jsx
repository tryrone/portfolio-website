import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="relative z-50 px-8 py-8 max-w-7xl mx-auto flex items-center justify-between">
      <div className="text-2xl font-display font-bold tracking-tighter uppercase flex items-center gap-1">
        Tega<span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
        DEV
      </div>
      <div className="hidden md:flex items-center gap-10 bg-white/[0.02] backdrop-blur-xl px-10 py-3.5 rounded-full border border-white/5 shadow-2xl">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`text-[10px] font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors ${
              active === link.title
                ? "text-primary"
                : "text-white/40 hover:text-white"
            }`}
            onClick={() => setActive(link.title)}
          >
            {link.title}
          </a>
        ))}
      </div>
      <button
        className="group relative bg-primary text-background-dark px-8 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(226,241,59,0.3)]"
        onClick={() => {
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <span className="relative z-10">Let's Talk</span>
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      </button>
      <div className="md:hidden flex flex-1 justify-end items-center">
        <button className="text-white" onClick={() => setToggle(!toggle)}>
          <span className="material-symbols-outlined text-3xl">
            {toggle ? "close" : "menu"}
          </span>
        </button>
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-card-dark border border-white/10 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl backdrop-blur-xl`}
        >
          <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-white/40"
                } font-medium cursor-pointer text-[16px] hover:text-primary transition-colors`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
