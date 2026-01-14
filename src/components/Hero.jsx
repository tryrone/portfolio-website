import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="fixed inset-0 grain-overlay z-[60]"></div>
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-10 pb-20">
        <div className="absolute inset-0 hero-glow -z-10"></div>
        <div className="max-w-7xl w-full text-center relative">
          <div className="flex flex-col items-center mb-16 relative">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-[1px] w-8 bg-white/20"></div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] text-white/40">
                Senior Software Engineer
              </span>
              <div className="h-[1px] w-8 bg-white/20"></div>
            </div>
            <div className="relative inline-block">
              <div
                className="absolute -top-12 -left-16 md:-top-24 md:-left-56 w-32 h-40 md:w-56 md:h-72 rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] z-20 transition-transform duration-700 hover:scale-105 hover:rotate-[-4deg]"
                style={{ transform: "rotate(-8deg)" }}
              >
                <img
                  alt="Professional portrait of Tega"
                  className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSqyYAXvPs1CcoTmSGE78ScWGQSY7QQEB_f5mcDkNkAk4O13327Q1ylSxZR-tUsY6HUlayQoOUokgINue3PJCYd8goL1Z5THFWZjYGAAuZ2K0KXyEzpqFp3X1wfEG23oxo6yIZyRfAHDftK2M9Us_ipRD0isupqe66Vdh_dycGyNjy3MBo3uRpFVMGbBmcEqMD-buXsGsuwdHSgT0s7LHipD5tQjhcv-RzYpjkFIayV6wr6wSUNFYuZRj6qO0twv8yB9OHIOvPcT33"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
              </div>
              <h1 className="text-[3.8rem] md:text-[9.5rem] font-display font-black tracking-tighter leading-[0.82] text-white uppercase relative z-10 flex flex-col items-center">
                <span className="block">WORK WITH</span>
                <span className="relative inline-flex items-center">
                  PURPOSE
                  <div className="absolute -bottom-1 -right-2 md:-bottom-2 md:-right-24 bg-primary text-background-dark px-4 py-2 md:px-7 md:py-3 rounded-full text-[10px] md:text-sm font-black uppercase tracking-widest flex items-center gap-2 rotate-[6deg] shadow-[0_10px_30px_rgba(226,241,59,0.3)] z-30">
                    <span className="material-symbols-outlined text-sm md:text-lg">
                      verified_user
                    </span>
                    FULL-STACK
                  </div>
                </span>
                <span className="text-outline">WITH PASSION</span>
              </h1>
              <div
                className="absolute -bottom-8 -right-16 md:-bottom-24 md:-right-52 w-32 h-40 md:w-52 md:h-[272px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] z-20 transition-transform duration-700 hover:scale-105 hover:rotate-[4deg]"
                style={{ transform: "rotate(10deg)" }}
              >
                <img
                  alt="Tega smiling"
                  className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgG3BezPnWEZGEgwA_bFEMCxbal3Uh_rp1ElUbVdxq_Jvur0nY0Yd-EhRPRAgoqYwxM3InFvwMxx9-bOg406fWc-BZ_w2TtBhwHdB4ztVVDZTnu-SSDCtLG6d8Ip_oOrLWzDMfCqZqNWz1-7yd5upYrAaBML8QnZH60KxiDNba6KuZ2q-RtDZj9_G93XectV40sTbzVCiwRxnK4x6ufJbdQtyVeTgjRXGOjem70wWE-1j_K_vtm80Lo6lH59VMgX7PlMh6affJ8PEh"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-40">
            <div className="flex items-center gap-5 bg-white/[0.02] border border-white/10 px-8 py-3 rounded-full backdrop-blur-sm">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full border-4 border-charcoal overflow-hidden bg-accent-gray shadow-xl">
                  <img
                    alt="Client avatar"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6cEge1t1PyBkKj5ExmtEQepbN3nZJoG_XRiQclQ8WrF7vLI3mOp-IukEhhgn_VGvZmeiWmYcCWhRs1R59sI6Pe_c2_MpeZdLfuuNV-YTTtFclHKIBUyOhxlX2GMptHvs-osMx1yncE5purP779yFKlj0zf2cJmMe_w64_KbkhpMIJt2lu02ryp7aphILde7a6CmbLMng39geEOgcRr0IjFiLmPfVhKyB9bvepQWBlx9Q-bGsp3VbtTYs_ubo3EQjMGto6u8VDeHwr"
                  />
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-charcoal overflow-hidden bg-accent-gray shadow-xl">
                  <img
                    alt="Client avatar"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE-Kvi5J8LsX7ccOc7I9rcZVdKor97t8NqTcs-M6DM65eKQgeGy01a8bn0CAi9K9P-6i5OXTxMHoX8Kmq66WI5_nw7Cqkq3k75ADxG8gwckFiDVeGYj1hZOfZ3M7BpotHNJhH-yA8llVBdlgHXlKD_Z1ehNS_mON4ZE9kjnb2vPCNMKg1o4ma0rUH6AWQDwKA6JyTn3Zv5Ks4uOOzaFNMuu-IIpKVGTZj5rN6h-1MrQh9myz61UAgazIi3Vfj7-HN8c4AF-rNeFo2F"
                  />
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-charcoal bg-white/5 flex items-center justify-center text-[10px] font-black text-white/60 shadow-xl backdrop-blur-md">
                  +50
                </div>
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black uppercase tracking-widest text-white">
                  Trust by Experts
                </p>
                <p className="text-[11px] font-medium text-white/30 uppercase tracking-wider">
                  Top Tier Partners
                </p>
              </div>
            </div>
            <div className="relative w-full max-w-sm group">
              <div className="bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-full p-1.5 flex items-center focus-within:border-primary/40 transition-all duration-300 shadow-xl">
                <input
                  className="bg-transparent border-none focus:ring-0 text-white placeholder-white/10 px-6 py-2 w-full text-xs font-medium tracking-wide focus:outline-none"
                  placeholder="Tell me about your project"
                  type="text"
                />
                <button
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="bg-white text-background-dark px-10 py-3.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-primary transition-all whitespace-nowrap"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
          <span className="text-[9px] uppercase tracking-[0.8em] font-bold">
            Explore
          </span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-white via-white/50 to-transparent"></div>
        </div>
      </main>
    </>
  );
};

export default Hero;
