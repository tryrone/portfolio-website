import React from "react";
import { motion } from "framer-motion";
import { SectionnWrapper } from "../hoc";
import { technologies } from "../constants";

const TechPill = ({ tech }) => (
  <div className="flex items-center gap-3 px-5 py-3 bg-white/[0.03] border border-white/5 rounded-full hover:border-primary/20 hover:bg-white/[0.06] transition-all duration-300 cursor-default group shrink-0">
    <img
      src={tech.icon}
      alt={tech.name}
      className="w-5 h-5 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
    />
    <span className="text-xs font-semibold text-white/50 group-hover:text-white/80 transition-colors whitespace-nowrap">
      {tech.name}
    </span>
  </div>
);

const Tech = () => {
  // Split technologies into two rows
  const mid = Math.ceil(technologies.length / 2);
  const row1 = technologies.slice(0, mid);
  const row2 = technologies.slice(mid);

  // Double for seamless loop
  const row1Double = [...row1, ...row1];
  const row2Double = [...row2, ...row2];

  return (
    <section className="relative z-10 py-20 overflow-hidden">
      <div className="section-divider mb-20"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 px-6"
      >
        <span className="text-[11px] font-bold text-primary/70 uppercase tracking-[0.3em] mb-4 block">
          Tech Stack
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
          Tools I Work With
        </h2>
      </motion.div>

      {/* Marquee Row 1 */}
      <div className="marquee-container mb-4">
        <div className="marquee-track animate-marquee">
          {row1Double.map((tech, index) => (
            <TechPill key={`r1-${index}`} tech={tech} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 - Reverse */}
      <div className="marquee-container">
        <div className="marquee-track animate-marquee-reverse">
          {row2Double.map((tech, index) => (
            <TechPill key={`r2-${index}`} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionnWrapper(Tech, "");