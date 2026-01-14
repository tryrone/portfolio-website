import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionnWrapper } from '../hoc';
import { projects } from '../constants';
import { reactjs, nodejs, typescript, javascript } from '../assets';

// Map projects to categories and tech icons
const getProjectCategory = (project) => {
  const name = project.name.toLowerCase();
  const description = project.description.toLowerCase();
  const tags = project.tags.map(t => t.name.toLowerCase()).join(' ');
  
  // Check for mobile/react native indicators
  if (
    name.includes('mobile') || 
    (name.includes('app') && (name.includes('chowdeck') || name.includes('wealth buddy') || name.includes('vendor'))) ||
    tags.includes('react native') || 
    tags.includes('react-native') ||
    description.includes('mobile')
  ) {
    return 'Mobile Development';
  }
  
  // Default to Web Apps
  return 'Web Apps';
};

const getTechIcons = (project) => {
  const tags = project.tags.map(t => t.name.toLowerCase());
  const icons = [];
  
  if (tags.some(t => t.includes('react') && !t.includes('native'))) {
    icons.push(reactjs);
  }
  if (tags.some(t => t.includes('native'))) {
    icons.push(typescript); // Using TypeScript icon for React Native
  }
  if (tags.some(t => t.includes('node'))) {
    icons.push(nodejs);
  }
  if (tags.some(t => t.includes('typescript'))) {
    icons.push(typescript);
  }
  if (tags.some(t => t.includes('javascript'))) {
    icons.push(javascript);
  }
  
  // Default to React if no icons found
  if (icons.length === 0) {
    icons.push(reactjs);
  }
  
  return icons.slice(0, 2); // Return max 2 icons
};

const getCategoryTag = (project) => {
  const name = project.name.toLowerCase();
  if (name.includes('chalktalk')) return { primary: 'LMS', secondary: 'Web App' };
  if (name.includes('chowdeck')) return { primary: 'Logistics', secondary: 'Mobile' };
  if (name.includes('spree') || name.includes('wealth')) return { primary: 'E-Commerce', secondary: 'Social' };
  if (name.includes('access wealth')) return { primary: 'Finance', secondary: 'Web App' };
  if (name.includes('sellfire')) return { primary: 'SaaS', secondary: 'Web App' };
  if (name.includes('shobizzy')) return { primary: 'Entertainment', secondary: 'Web App' };
  if (name.includes('alter')) return { primary: 'Health', secondary: 'Web App' };
  if (name.includes('uburu')) return { primary: 'Health', secondary: 'Web App' };
  if (name.includes('sabi')) return { primary: 'E-Commerce', secondary: 'Web App' };
  if (name.includes('hollaport')) return { primary: 'Fintech', secondary: 'Web App' };
  if (name.includes('sponsorlytix')) return { primary: 'Sports', secondary: 'Web App' };
  return { primary: 'Web App', secondary: 'Development' };
};

const ProjectCard = ({ project, index }) => {
  const techIcons = getTechIcons(project);
  const categoryTags = getCategoryTag(project);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col"
    >
      <div className="glass-card rounded-[32px] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 flex flex-col h-full">
        <div className="relative aspect-[4/3] m-4 rounded-[24px] overflow-hidden bg-charcoal">
          <img
            alt={`${project.name} Project`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={project.image}
          />
          <div className="absolute top-4 right-4 flex -space-x-2">
            {techIcons.map((icon, idx) => (
              <div
                key={idx}
                className="w-8 h-8 rounded-full border-2 border-charcoal bg-white/10 backdrop-blur-md flex items-center justify-center"
              >
                <img alt="Tech icon" className="w-4 h-4" src={icon} />
              </div>
            ))}
          </div>
        </div>
        <div className="px-8 pb-8 pt-2 flex flex-col flex-grow">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest border border-primary/20 px-2 py-0.5 rounded">
              {categoryTags.primary}
            </span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              {categoryTags.secondary}
            </span>
          </div>
          <h3 className="text-2xl font-display font-bold mb-4 text-white">{project.name}</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
            {project.description}
          </p>
          <div className="flex items-center gap-3">
            <a
              href={project.source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-primary text-black py-3 rounded-full font-bold text-xs hover:opacity-90 transition-opacity"
            >
              Learn more
            </a>
            <a
              href={project.source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-white/5 border border-white/10 text-white py-3 rounded-full font-bold text-xs hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">play_arrow</span>
              Play
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const [activeFilter, setActiveFilter] = useState('All Solutions');

  const filters = ['All Solutions', 'Web Apps', 'Mobile Development', 'UI/UX Design'];

  const filteredProjects = activeFilter === 'All Solutions'
    ? projects
    : projects.filter(project => getProjectCategory(project) === activeFilter);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-primary text-xs font-bold uppercase tracking-widest mb-6">
          Explore My Expert Portfolio
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-[1.1] max-w-4xl mx-auto text-white">
          Of Creative <span className="text-primary">Solutions</span>
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Whether it's designing a sleek user interface or writing code that brings it to life, I focus on crafting products that are not just beautiful—but functional.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${
                activeFilter === filter
                  ? 'bg-primary text-black'
                  : 'bg-white/5 border border-white/10 hover:border-white/30 text-slate-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default SectionnWrapper(Works, "work");
