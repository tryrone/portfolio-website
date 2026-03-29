import React from "react";
import { motion } from "framer-motion";
import { SectionnWrapper } from "../hoc";
import { experiences } from "../constants";

const formatDate = (dateString) => {
  const months = {
    Jan: "Jan", Feb: "Feb", Mar: "Mar", Apr: "Apr", May: "May", Jun: "Jun",
    Jul: "Jul", Aug: "Aug", Sep: "Sep", Oct: "Oct", Nov: "Nov", Dec: "Dec",
    January: "Jan", February: "Feb", March: "Mar", April: "Apr",
    June: "Jun", July: "Jul", August: "Aug", September: "Sep",
    October: "Oct", November: "Nov", December: "Dec",
  };

  if (dateString.includes("Present")) {
    const parts = dateString.split(" - ");
    const start = parts[0].trim().split(" ");
    return `${months[start[0]] || start[0]} ${start[1]} — Present`;
  }

  const parts = dateString.split(/\s*[-–]\s*/);
  if (parts.length === 2) {
    const s = parts[0].trim().split(" ");
    const e = parts[1].trim().split(" ");
    return `${months[s[0]] || s[0]} ${s[1]} — ${months[e[0]] || e[0]} ${e[1]}`;
  }
  return dateString;
};

const parseDateForSorting = (dateString) => {
  const months = {
    Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
    Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12,
    January: 1, February: 2, March: 3, April: 4,
    June: 6, July: 7, August: 8, September: 9,
    October: 10, November: 11, December: 12,
  };

  if (dateString.includes("Present")) return { year: 9999, month: 12 };

  const parts = dateString.split(/\s*[-–]\s*/);
  if (parts.length >= 1) {
    const start = parts[0].trim().split(" ");
    return { year: parseInt(start[1]) || 0, month: months[start[0]] || 0 };
  }
  return { year: 0, month: 0 };
};

const ExperienceCard = ({ experience, index }) => {
  const formattedDate = formatDate(experience.date);
  const isPresent = experience.date.includes("Present");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative"
    >
      <div className="glass-card rounded-2xl p-6 lg:p-8 hover:shadow-glow-sm">
        <div className="flex flex-col sm:flex-row sm:items-start gap-5">
          {/* Company Icon */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-white/5 overflow-hidden"
            style={{ backgroundColor: experience.iconBg }}
          >
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-8 h-8 object-contain"
            />
          </div>

          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-lg font-display font-bold text-white group-hover:text-primary/90 transition-colors">
                  {experience.title}
                </h3>
                <p className="text-sm text-white/40 font-medium">
                  {experience.company_name}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {isPresent && (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                )}
                <span className="text-xs font-medium text-white/25">
                  {formattedDate}
                </span>
              </div>
            </div>

            {/* Points */}
            <ul className="space-y-2.5">
              {experience.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-white/35 leading-relaxed">
                  <span className="w-1 h-1 rounded-full bg-primary/50 mt-2 shrink-0"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const sorted = [...experiences].sort((a, b) => {
    const dateA = parseDateForSorting(a.date);
    const dateB = parseDateForSorting(b.date);
    if (dateB.year !== dateA.year) return dateB.year - dateA.year;
    return dateB.month - dateA.month;
  });

  return (
    <section className="relative z-10">
      <div className="section-divider mb-24"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-[11px] font-bold text-primary/70 uppercase tracking-[0.3em] mb-4 block">
            Career Path
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Where I've Worked
          </h2>
          <p className="text-white/30 text-lg max-w-2xl leading-relaxed">
            Building scalable applications and leading engineering teams across
            fintech, e-commerce, health-tech, and logistics.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-4">
          {sorted.map((experience, index) => (
            <ExperienceCard
              key={`exp-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionnWrapper(Experience, "experience");
