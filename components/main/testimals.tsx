"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Customer",
    role: "Milk Seller",
    quote:
      "The custom engagement ring they created for me exceeded all my expectations. The attention to detail and craftsmanship is unparalleled. The entire process was seamless and personal — I felt truly heard and cared for.",
    image: "/dummy.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Customer",
    role: "Teacher",
    quote:
      "I commissioned a personalized necklace for my wife’s anniversary — the result was breathtaking. The design team turned my rough sketch into a masterpiece that captured everything I imagined.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    rating: 5,
  },
  {
    id: 3,
    name: "Customer",
    role: "Teacher",
    quote:
      "As someone who values fine artistry, I was blown away by their bracelet collection. Every detail, from gemstone selection to polish, reflects true craftsmanship and passion.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    rating: 5,
  },
  {
    id: 4,
    name: "Customer",
    role: "Designer",
    quote:
      "As someone who values fine artistry, I was blown away by their bracelet collection. Every detail, from gemstone selection to polish, reflects true craftsmanship and passion.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    rating: 5,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex justify-center mb-4">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? "text-[#F3C623]" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section
      id="testimals"
      className="py-24 bg-gradient-to-br from-[#FDF6E3] via-[#FFF9E3] to-[#FAF3DD] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/pattern-gold.svg')] opacity-10 bg-cover bg-center" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
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
            What Our Clients Say
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-[#5B3A00]/80 max-w-3xl mx-auto font-serif leading-relaxed"
          >
            Our clients share their stories of elegance, craftsmanship, and
            timeless beauty — each piece tells a story of love and artistry.
          </motion.p>
        </motion.div>

        {/* Testimonial Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={fadeUp}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[#F3C623]/30 p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_35px_rgba(243,198,35,0.25)]"
            >
              <div className="relative w-20 h-20 mb-5">
                <Image
                  src="/dummy.jpg"
                  alt={t.name}
                  fill
                  className="rounded-full object-cover shadow-md border-2 border-[#F3C623]/40"
                />
              </div>

              <h4 className="text-xl font-semibold text-[#10375C] mb-1 font-serif">
                {t.name}
              </h4>
              <p className="text-[#5B3A00]/70 text-sm mb-3">{t.role}</p>

              <StarRating rating={t.rating} />

              <blockquote className="text-[#10375C]/80 italic leading-relaxed text-sm font-serif">
                “{t.quote}”
              </blockquote>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-[#5B3A00]/80 mb-6 font-serif text-lg">
            Ready to begin your own timeless story?
          </p>
          <button className="bg-gradient-to-r from-[#F3C623] to-[#FFD966] text-[#0B1E3A] px-10 py-3 rounded-full font-semibold tracking-wide shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
            <a
              href="https://wa.me/923214108773?text=I%20want%20to%20create%20custom%20design%20jewelry"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Your Custom Design
            </a>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
