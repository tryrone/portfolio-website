import React from 'react';
import { SectionnWrapper } from '../hoc';

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-40 relative z-10 border-t border-white/5">
      <div className="grid md:grid-cols-2 gap-24 items-start">
        <div>
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-[1.05] tracking-tight mb-10 text-white">
            Crafting digital{' '}
            <span className="text-primary italic">excellence</span> through code & logic.
          </h2>
          <div className="flex items-center gap-6 mt-12">
            <div className="flex flex-col">
              <span className="text-4xl font-display font-black text-white">8+</span>
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Years Experience</span>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-4xl font-display font-black text-white">120+</span>
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Projects Done</span>
            </div>
          </div>
        </div>
        <div className="space-y-10 text-white/40">
          <p className="text-xl leading-relaxed font-medium">
            I'm Tega, a senior software engineer who merges thoughtful architecture with clean code. By focusing on what truly matters, I create digital systems that reflect who you are and where you're going.
          </p>
          <p className="text-xl leading-relaxed font-medium">
            Great software doesn't need to be complex to be powerful. With a focus on performance, scalability, and clean UX, I build digital experiences that are both intuitive and impactful.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mt-32">
        <div className="bg-charcoal border border-white/5 p-12 rounded-[2rem] hover:border-primary/20 transition-all group relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <div className="text-[10px] font-black tracking-[0.2em] text-primary/80 mb-10 flex justify-between items-center">
              <span>WEB ARCHITECTURE</span>
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">arrow_outward</span>
            </div>
            <h3 className="text-2xl font-display font-bold mb-6 text-white/90">Functional Core</h3>
            <p className="text-white/30 text-sm leading-relaxed mb-12">
              Building robust, scalable backends using Node.js and Go. Focused on performance and reliability for enterprise applications.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-5 py-2 bg-white/[0.03] rounded-full text-[9px] font-bold uppercase tracking-widest text-white/50 border border-white/5">NODE.JS</span>
              <span className="px-5 py-2 bg-white/[0.03] rounded-full text-[9px] font-bold uppercase tracking-widest text-white/50 border border-white/5">POSTGRES</span>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div className="bg-charcoal border border-white/5 p-12 rounded-[2rem] hover:border-primary/20 transition-all group relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <div className="text-[10px] font-black tracking-[0.2em] text-primary/80 mb-10 flex justify-between items-center">
              <span>FRONTEND MASTERY</span>
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">arrow_outward</span>
            </div>
            <h3 className="text-2xl font-display font-bold mb-6 text-white/90">Immersive UX</h3>
            <p className="text-white/30 text-sm leading-relaxed mb-12">
              Creating pixel-perfect, responsive interfaces with React and Tailwind CSS. Bridging the gap between design and engineering.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-5 py-2 bg-white/[0.03] rounded-full text-[9px] font-bold uppercase tracking-widest text-white/50 border border-white/5">REACT</span>
              <span className="px-5 py-2 bg-white/[0.03] rounded-full text-[9px] font-bold uppercase tracking-widest text-white/50 border border-white/5">NEXT.JS</span>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div className="bg-charcoal border border-white/5 p-12 rounded-[2rem] hover:border-primary/20 transition-all group relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <div className="text-[10px] font-black tracking-[0.2em] text-primary/80 mb-10 flex justify-between items-center">
              <span>MOBILE SYSTEMS</span>
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">arrow_outward</span>
            </div>
            <h3 className="text-2xl font-display font-bold mb-6 text-white/90">Cross-Platform</h3>
            <p className="text-white/30 text-sm leading-relaxed mb-12">
              Developing high-performance mobile applications for iOS and Android using React Native and native integrations.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-5 py-2 bg-white/[0.03] rounded-full text-[9px] font-bold uppercase tracking-widest text-white/50 border border-white/5">R-NATIVE</span>
              <span className="px-5 py-2 bg-white/[0.03] rounded-full text-[9px] font-bold uppercase tracking-widest text-white/50 border border-white/5">TYPESCRIPT</span>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </div>
    </section>
  );
};

export default SectionnWrapper(About, "about");
