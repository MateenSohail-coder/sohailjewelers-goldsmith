"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

const Categories: Category[] = [
  {
    id: "rings",
    name: "Rings",
    image: "/rings.jpg",
    description:
      "Indulge in our exquisite collection of rings, crafted from the finest metals and adorned with rare gemstones. Each piece is a testament to luxury craftsmanship, allowing for personalized engravings and designs that reflect your unique story.",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    image: "/necklaces.jpg",
    description:
      "Discover necklaces that embody sophistication and grace, featuring intricate designs and premium materials. Personalize your piece to capture your individuality and elegance.",
  },
  {
    id: "earrings",
    name: "Earrings",
    image: "/earrings.jpg",
    description:
      "Adorn your ears with our stunning earring selection, blending timeless beauty with modern artistry. Each pair is meticulously handcrafted to bring radiance and charm to every look.",
  },
  {
    id: "bracelets",
    name: "Bracelets",
    image: "/bracelets.jpg",
    description:
      "Wrap your wrist in luxury with our diverse bracelet collection — from delicate chains to statement cuffs, each crafted with precision and a touch of sophistication.",
  },
  {
    id: "sets",
    name: "Sets",
    image: "/sets.webp",
    description:
      "Complete your look with our curated jewelry sets, designed for a cohesive expression of luxury. Each set radiates harmony, elegance, and impeccable craftsmanship.",
  },
 {
  id: "custom-pieces",
  name: "custom-pieces",
  image: "/custom.jpg",
  description:
    "Transform your vision into reality with our bespoke jewelry service. From engagement rings to heirloom sets, each piece is handcrafted to your style, story, and personality. Our master goldsmiths blend tradition with innovation to create timeless designs that are truly one-of-a-kind — made exclusively for you.",
}

];

const CategoryPage: React.FC = () => {
  const [filters, setFilters] = useState({
    metal: "",
    gemstone: "",
    occasion: "",
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  // Framer Motion Variants
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section id="category"  className="min-h-screen bg-gradient-to-b from-[#FDF6E3] to-[#FAF3DD] py-20 px-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="max-w-7xl mx-auto"
      >
        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-6xl font-sunscreen text-center font-bold text-[#10375C] mb-12"
        >
          Explore the categories
        </motion.h1>

    

        {/* Categories Grid */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
        {Categories.map((category) => (
  <motion.div
    key={category.id}
    variants={fadeUp}
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 180, damping: 14 }}
    className="group relative bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden border border-[#F3C623]/40 shadow-[0_6px_25px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_30px_rgba(243,198,35,0.3)] transition-all duration-500"
  >
    {/* Image Container */}
    <div className="relative w-full h-72 overflow-hidden">
      <Image
        src={category.image}
        alt={category.name}
        fill
        className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3A]/70 via-[#0B1E3A]/30 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500" />

      {/* Gold Glow Frame */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#F3C623]/80 rounded-3xl transition-all duration-700 ease-out" />
    </div>

    {/* Content */}
    <div className="relative z-10 p-7 text-center bg-gradient-to-b from-white/90 to-[#FFF9E3]/80">
      <h2 className="text-2xl font-serif font-semibold text-[#10375C] mb-3 tracking-wide group-hover:text-[#0B1E3A] transition-colors duration-300">
        {category.name}
      </h2>
      <p className="text-[#5B3A00]/90 text-[15px] leading-relaxed font-serif max-w-md mx-auto">
        {category.description}
      </p>
    </div>

    {/* Subtle Shine Effect */}
    <div className="absolute -top-10 left-1/2 w-40 h-40 bg-[#F3C623]/30 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-all duration-700 ease-out" />
  </motion.div>
))}

        </motion.div>
      </motion.div>
    </section>
  );
};

export default CategoryPage;
