import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="bg-white dark:bg-card-dark border border-slate-200 dark:border-border-dark p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {question}
        </h3>
        <button
          onClick={onToggle}
          className={`${
            isOpen
              ? "bg-primary text-black"
              : "bg-slate-100 dark:bg-border-dark text-slate-900 dark:text-white"
          } px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold transition-all`}
        >
          {isOpen ? (
            <>
              Hide{" "}
              <span className="material-symbols-outlined text-sm">
                expand_less
              </span>
            </>
          ) : (
            <>
              Show{" "}
              <span className="material-symbols-outlined text-sm">
                expand_more
              </span>
            </>
          )}
        </button>
      </div>
      {isOpen && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="text-slate-600 dark:text-slate-400 leading-relaxed"
        >
          {answer}
        </motion.p>
      )}
    </div>
  );
};

const Contact = () => {
  const [openFAQ, setOpenFAQ] = useState(0); // First FAQ open by default
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const faqs = [
    {
      question: "What types of projects do you handle?",
      answer:
        "I handle a wide range of projects — from web applications to mobile apps, whether frontend, backend, or full-stack. I customize solutions based on your business needs and technical requirements.",
    },
    {
      question: "How fast can you deliver?",
      answer:
        "Delivery time depends on project scope and complexity. Typically, I can deliver MVP versions within 2-4 weeks, while full-featured applications may take 2-3 months. I always provide realistic timelines during our initial consultation.",
    },
    {
      question: "Can I track the project progress in real time?",
      answer:
        "Yes! I use modern project management tools and provide regular updates through your preferred communication channel. You'll have visibility into milestones, sprints, and deliverables throughout the development process.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "I offer flexible pricing models — fixed-price for well-defined projects, hourly rates for ongoing work, and retainer agreements for long-term partnerships. Let's discuss what works best for your project and budget.",
    },
  ];

  const handleFAQToggle = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    const mailtoLink = `mailto:tegararuvwe@gmail.com?subject=Contact from Portfolio&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AWork Description:%0D%0A${formData.description}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      className="max-w-7xl mx-auto px-6 py-24 space-y-32 relative z-10"
      id="contact"
    >
      {/* FAQ Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="faq">
        <div className="lg:col-span-5">
          <h2 className="text-4xl lg:text-5xl font-display font-bold leading-tight mb-6 text-white">
            Got Questions? We've <br /> Got Answers.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-md">
            Everything you need to know about working with me — fast, simple,
            and transparent.
          </p>
        </div>
        <div className="lg:col-span-7 space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFAQ === index}
              onToggle={() => handleFAQToggle(index)}
            />
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 world-map-bg pointer-events-none opacity-50"></div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <div className="text-5xl lg:text-7xl font-display font-bold mb-4 text-white">
              +120
            </div>
            <p className="text-slate-500 dark:text-slate-400">
              Simple and effective design solutions delivered globally.
            </p>
          </div>
          <div>
            <div className="text-5xl lg:text-7xl font-display font-bold mb-4 text-white">
              8+ Years
            </div>
            <p className="text-slate-500 dark:text-slate-400">
              We design interfaces that are easy to use and master.
            </p>
          </div>
          <div>
            <div className="text-5xl lg:text-7xl font-display font-bold mb-4 text-white">
              +50
            </div>
            <p className="text-slate-500 dark:text-slate-400">
              Collaborating with individuals and teams across continents.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl lg:text-6xl font-display font-bold leading-tight mb-8 text-white">
            Our Idea, My Design — Let's Connect.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg mb-12">
            Whether it's designing a sleek user interface or writing code that
            brings it to life, I'm ready to collaborate.
          </p>
          <div className="space-y-8">
            <div>
              <span className="block text-sm font-medium uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
                Stay Connected
              </span>
              <div className="flex gap-4">
                <a
                  className="w-10 h-10 rounded-full border border-slate-200 dark:border-border-dark flex items-center justify-center hover:bg-primary hover:text-black transition-all text-white"
                  href="https://x.com/King_Tyrrent"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <span className="material-symbols-outlined text-xl">
                    close
                  </span>
                </a>
                {/* <a
                  className="w-10 h-10 rounded-full border border-slate-200 dark:border-border-dark flex items-center justify-center hover:bg-primary hover:text-black transition-all text-white"
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dribbble"
                >
                  <span className="material-symbols-outlined text-xl">facebook</span>
                </a> */}
                <a
                  className="w-10 h-10 rounded-full border border-slate-200 dark:border-border-dark flex items-center justify-center hover:bg-primary hover:text-black transition-all text-white"
                  href="https://github.com/tryrone"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share"
                >
                  <span className="material-symbols-outlined text-xl">
                    share
                  </span>
                </a>
                {/* <a
                  className="w-10 h-10 rounded-full border border-slate-200 dark:border-border-dark flex items-center justify-center hover:bg-primary hover:text-black transition-all text-white"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <span className="material-symbols-outlined text-xl">photo_camera</span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="w-full bg-slate-100 dark:bg-card-dark border-transparent focus:border-primary focus:ring-primary rounded-xl p-4 text-slate-900 dark:text-white transition-all outline-none"
                placeholder="Name"
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                className="w-full bg-slate-100 dark:bg-card-dark border-transparent focus:border-primary focus:ring-primary rounded-xl p-4 text-slate-900 dark:text-white transition-all outline-none"
                placeholder="Email address"
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <textarea
              className="w-full bg-slate-100 dark:bg-card-dark border-transparent focus:border-primary focus:ring-primary rounded-xl p-4 text-slate-900 dark:text-white transition-all outline-none resize-none"
              placeholder="Work Description"
              required
              rows="6"
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
            <button
              className="w-full bg-primary text-black font-bold py-4 rounded-xl hover:opacity-90 transition-all active:scale-[0.98]"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-16 border-t border-slate-200 dark:border-border-dark">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a
              className="hover:text-primary transition-colors text-white"
              href="#"
            >
              Home
            </a>
            <a
              className="hover:text-primary transition-colors text-white"
              href="#about"
            >
              About
            </a>
            <a
              className="hover:text-primary transition-colors text-white"
              href="#work"
            >
              Portfolio
            </a>
            <a
              className="hover:text-primary transition-colors text-white"
              href="#work"
            >
              Blog
            </a>
            <a
              className="hover:text-primary transition-colors text-white"
              href="#contact"
            >
              Contact
            </a>
          </nav>
          <div className="text-slate-500 dark:text-slate-500 text-sm">
            Copyright © Tega Oboraruvwe 2024
          </div>
        </div>
        <div className="mt-8 text-center md:text-left">
          <p className="text-slate-400 dark:text-slate-600 text-sm italic">
            Contact Me & Let's Make It Happen.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
