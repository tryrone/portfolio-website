import React from "react";
import { motion } from "framer-motion";
import { SectionnWrapper } from "../hoc";
import { services } from "../constants";

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="gradient-border-card group"
  >
    <div className="p-8 lg:p-10 relative z-10">
      <div className="flex items-start justify-between mb-8">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-xl">
            {service.icon}
          </span>
        </div>
        <span className="material-symbols-outlined text-xl text-white/10 group-hover:text-primary/40 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
          arrow_outward
        </span>
      </div>
      <h3 className="text-xl font-display font-bold mb-3 text-white/90 group-hover:text-white transition-colors">
        {service.title}
      </h3>
      <p className="text-white/30 text-sm leading-relaxed mb-8 group-hover:text-white/40 transition-colors">
        {service.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1.5 bg-white/[0.03] rounded-full text-[9px] font-bold uppercase tracking-[0.15em] text-white/40 border border-white/5"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <section className="relative z-10">
      <div className="section-divider mb-24"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[11px] font-bold text-primary/70 uppercase tracking-[0.3em] mb-4 block">
              Who I Am
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold leading-[1.1] tracking-tight text-white">
              Engineering software that{" "}
              <span className="text-gradient-primary">scales</span> and{" "}
              <span className="text-gradient-primary">delivers</span>.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg text-white/40 leading-relaxed font-medium">
              I'm a Senior Software Engineer who's spent 8+ years turning complex 
              problems into elegant solutions. From leading mobile teams at Sabi 
              (processing $7M+ monthly) to architecting fintech platforms at 
              Access Wealth — I build products that move the needle.
            </p>
            <p className="text-lg text-white/30 leading-relaxed">
              My strength is in bridging the gap between frontend polish and 
              backend performance. Whether it's a React Native app serving 
              thousands of users or a Node.js API handling high-throughput 
              transactions — I focus on code that's clean, tested, and scalable.
            </p>
          </motion.div>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionnWrapper(About, "about");
