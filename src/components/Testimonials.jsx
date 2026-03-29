import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "../constants";
import { SectionnWrapper } from "../hoc";

const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="glass-card rounded-2xl p-8 relative group"
  >
    {/* Quote Mark */}
    <div className="quote-mark">"</div>

    <div className="relative z-10">
      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className="material-symbols-outlined text-primary text-sm"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-white/50 text-sm leading-relaxed mb-8 italic">
        "{testimonial.testimonial}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white/10 bg-card-dark">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-sm font-display font-bold text-white">
            {testimonial.name}
          </h4>
          <p className="text-[11px] text-white/30">
            {testimonial.designation}
            {testimonial.company && (
              <span className="text-white/20"> · {testimonial.company}</span>
            )}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
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
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            What People Say
          </h2>
          <p className="text-white/30 text-lg max-w-2xl leading-relaxed">
            Feedback from clients and colleagues I've had the pleasure of
            working with.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionnWrapper(Testimonials, "testimonials");
