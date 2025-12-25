"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { PenTool, Settings, Hammer, ShieldCheck, Package } from "lucide-react"; // ✅ Elegant SVG icons

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  Icon: React.ElementType;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Design Consultation",
    description:
      "Share your vision with our expert designers. Discuss your style preferences, inspirations, and details for your one-of-a-kind jewelry piece.",
    Icon: PenTool,
  },
  {
    id: 2,
    title: "Personalized Customization",
    description:
      "Collaborate with our artisans to refine your design. Choose metals, gemstones, engravings, and details that make the piece truly yours.",
    Icon: Settings,
  },
  {
    id: 3,
    title: "Artisan Crafting",
    description:
      "Our skilled goldsmiths meticulously craft your piece using traditional techniques and premium materials for unmatched quality.",
    Icon: Hammer,
  },
  {
    id: 4,
    title: "Quality Assurance",
    description:
      "Every jewelry piece undergoes rigorous inspection and polishing to ensure it meets our highest standards of craftsmanship.",
    Icon: ShieldCheck,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Process: React.FC = () => {
  const handleScroll = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      window.scrollTo({
        top: section.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };
  return (
    <section
      id="process"
      className="relative py-24 bg-gradient-to-br from-[#FDF6E3] via-[#FFF9E3] to-[#FAF3DD] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/pattern-gold.svg')] opacity-5 bg-cover bg-center" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-5xl font-sunscreen font-bold text-[#10375C] mb-6"
          >
            Our Creative Process
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-[#5B3A00]/90 max-w-3xl mx-auto font-serif leading-relaxed"
          >
            Experience the journey of crafting bespoke jewelry — from concept to
            creation — where every detail reflects artistry, luxury, and you.
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={fadeUp}
              className="relative flex flex-col items-center text-center bg-white/80 backdrop-blur-md rounded-2xl border border-[#F3C623]/30 shadow-[0_8px_30px_rgba(0,0,0,0.08)] px-6 py-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_35px_rgba(243,198,35,0.3)]"
            >
              {/* Step Circle */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#F3C623] to-[#FFD966] text-[#0B1E3A] font-bold text-xl mb-6 shadow-inner shadow-[#00000030]">
                {step.id}
              </div>

              {/* Icon */}
              <div className="mb-5 text-[#10375C]">
                <step.Icon size={48} strokeWidth={1.6} className="mx-auto" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#10375C] mb-3 font-serif tracking-wide">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#5B3A00]/90 text-sm leading-relaxed font-serif">
                {step.description}
              </p>

              {/* Connector Line (Desktop Only) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-[2px] bg-gradient-to-r from-[#F3C623] to-transparent opacity-60 translate-y-[-50%]" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
          {/* Primary CTA */}
          <button
            onClick={() => {
              handleScroll("#contact");
            }}
            className="relative overflow-hidden bg-gradient-to-r from-[#F3C623] to-[#FFD966]
               text-[#0B1E3A] font-semibold text-lg px-10 py-4 rounded-full shadow-[0_0_20px_rgba(243,198,35,0.4)]
               border border-[#F3C623]/70 transition-all duration-300 
               hover:scale-105 hover:shadow-[0_0_30px_rgba(243,198,35,0.7)] active:scale-95"
          >
            Start Your Custom Design
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => {
              handleScroll("#category");
            }}
            className="relative overflow-hidden bg-transparent border-2 border-[#F3C623]
               text-[#F3C623] font-semibold text-lg px-10 py-4 rounded-full 
               hover:bg-[#F3C623] hover:text-[#0B1E3A] transition-all duration-300 shadow-md"
          >
            Visit the categorys
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
