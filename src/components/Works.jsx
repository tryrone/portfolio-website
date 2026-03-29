import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionnWrapper } from "../hoc";
import { projects } from "../constants";

const FeaturedCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group"
  >
    <div className="glass-card rounded-3xl overflow-hidden h-full flex flex-col">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-card-dark">
        <img
          src={project.image}
          alt={`${project.name} project screenshot`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8 flex flex-col flex-grow">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] rounded-full bg-primary/10 text-primary/80 border border-primary/10"
            >
              {tag.name}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary/90 transition-colors">
          {project.name}
        </h3>
        <p className="text-sm text-white/30 leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <a
          href={project.source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-primary transition-colors group/link"
        >
          View Project
          <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </a>
      </div>
    </div>
  </motion.div>
);

const CompactCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.06 }}
    className="group"
  >
    <a
      href={project.source_code_link}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card rounded-2xl p-5 flex items-start gap-4 h-full block"
    >
      <div className="w-14 h-14 rounded-xl overflow-hidden bg-card-dark shrink-0 border border-white/5">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-display font-bold text-white mb-1 group-hover:text-primary/90 transition-colors">
          {project.name}
        </h4>
        <p className="text-xs text-white/30 leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <div className="flex gap-2 mt-2">
          {project.tags.slice(0, 2).map((tag, idx) => (
            <span
              key={idx}
              className="text-[8px] font-bold uppercase tracking-widest text-white/25"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
      <span className="material-symbols-outlined text-white/10 group-hover:text-primary/40 transition-colors text-lg shrink-0 mt-1">
        arrow_outward
      </span>
    </a>
  </motion.div>
);

const Works = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section className="relative z-10">
      <div className="section-divider mb-24"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-[11px] font-bold text-primary/70 uppercase tracking-[0.3em] mb-4 block">
            Selected Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Projects I've Built
          </h2>
          <p className="text-white/30 text-lg max-w-2xl leading-relaxed">
            From high-traffic fintech platforms to mobile apps serving thousands
            — here's what I've shipped.
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <FeaturedCard key={project.name} project={project} index={index} />
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-display font-bold text-white/20 uppercase tracking-[0.2em] mb-6 mt-16"
            >
              More Projects
            </motion.h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherProjects.map((project, index) => (
                <CompactCard
                  key={project.name}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default SectionnWrapper(Works, "projects");
