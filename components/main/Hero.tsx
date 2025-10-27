"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  // Smooth scroll handler
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
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#F4F6FF] to-[#10375C] text-white pt-16"
    >
      {/* Background Image with slow zoom animation */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <Image
          src="/heroj.jpg"
          alt="Luxury handcrafted jewelry - rings, necklaces, and bracelets"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#00000040] to-[#00000080]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-7xl font-huntesla font-bold mb-6 leading-tight text-[#FDF6E3] drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
        >
          Craft Your Unique Jewelry with{" "}
          <span className="text-[#F3C623]">Artistry</span> and{" "}
          <span className="text-[#F3C623]">Personalization</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto text-[#FAF0E6]"
        >
          Discover the elegance of custom-made luxury jewelry, designed just for you.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <motion.button
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            onClick={() => handleScroll("#category")} // 👈 scrolls to Category section
            className="bg-[#F3C623] hover:bg-[#EB8317] text-[#10375C] font-semibold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            Customize Your Jewelry
          </motion.button>

          <motion.button
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onClick={() => handleScroll("#buyers")} // 👈 scrolls to Selling/Buyers section
            className="border-2 border-[#F3C623] hover:bg-[#10375C] hover:text-[#F3C623] text-[#F3C623] font-semibold py-4 px-10 rounded-full text-lg transition duration-300 shadow-md hover:shadow-[#F3C623]/30"
          >
            Sell Now
          </motion.button>
        </motion.div>
      </div>

      {/* Floating shimmer accent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/2 w-64 h-64 bg-[#F3C623]/20 blur-3xl rounded-full"
      />
    </section>
  );
}
