"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

// ---------- Bangles Data ----------
interface Bangle {
  id: string;
  name: string;
  image: string;
  weight: string;
  goldQuality: string;
  link: string;
}

const Bangles: Bangle[] = [
  {
    id: "b1",
    name: "Royal Filigree Bangle",
    image: "/bangle1.jpeg",
    weight: "22g",
    goldQuality: "22K Gold",
    link: "#",
  },
  {
    id: "b2",
    name: "Eternal Twist Bangle",
    image: "/bangle2.jpg",
    weight: "25g",
    goldQuality: "22K Gold",
    link: "#",
  },
  {
    id: "b3",
    name: "Lotus Heritage Bangle",
    image: "/bangle3.jpg",
    weight: "18g",
    goldQuality: "22K Gold",
    link: "#",
  },
  {
    id: "b4",
    name: "Majestic Curve Bangle",
    image: "/bangle4.webp",
    weight: "20g",
    goldQuality: "22K Gold",
    link: "#",
  },
];

// ---------- Main Component ----------
const CategoryPage: React.FC = () => {
  const [selectedBangle, setSelectedBangle] = useState<Bangle | null>(null);

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
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FDF6E3] to-[#FAF3DD]">
      {/* 🌟 HERO SECTION */}
      <section className="py-20 px-4 sm:px-6 md:px-10 lg:px-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="max-w-7xl mx-auto pt-20"
        >
          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-3xl shadow-[0_10px_50px_rgba(243,198,35,0.4)] border border-[#F3C623]/50 mb-24"
          >
            <div className="relative h-[480px] sm:h-[550px] md:h-[600px]">
              <Image
                src="/bangle.jpg"
                alt="Signature Bangles"
                fill
                className="object-cover object-center opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E3A]/85 via-[#10375C]/50 to-transparent" />
            </div>

            {/* Hero Text */}
            <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-32 py-10">
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F3C623] mb-4 drop-shadow-lg"
              >
                Our Signature Collection – Bangles
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-[#FFF9E3] font-serif"
              >
                Discover our exquisite handcrafted bangles — a symbol of
                sophistication, heritage, and timeless allure. Each piece
                radiates artistry, precision, and luxury that define our
                craftsmanship.
              </motion.p>
            </div>
          </motion.div>

          {/* 💎 BANGLES GALLERY */}
          <motion.h3
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-serif font-semibold text-center text-[#10375C] mb-12"
          >
            Explore Our Signature Bangles
          </motion.h3>

          <motion.div
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-24 px-2 sm:px-4 md:px-6"
          >
            {Bangles.map((bangle) => (
              <motion.div
                key={bangle.id}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedBangle(bangle)}
                className="cursor-pointer relative group bg-white/90 rounded-2xl overflow-hidden shadow-md border border-[#F3C623]/40 hover:shadow-[0_10px_30px_rgba(243,198,35,0.4)] transition-all duration-500 p-3 sm:p-4"
              >
                <div className="relative w-full h-60 sm:h-64 md:h-72 rounded-xl overflow-hidden">
                  <Image
                    src={bangle.image}
                    alt={bangle.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3A]/70 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300" />
                </div>
                <div className="pt-5 pb-2 text-center px-2">
                  <h4 className="text-lg font-serif font-semibold text-[#10375C] group-hover:text-[#0B1E3A] transition-colors mb-1">
                    {bangle.name}
                  </h4>
                  <p className="text-sm text-[#5B3A00]/80">
                    {bangle.goldQuality}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* 🔹 MODAL POPUP FOR BANGLE DETAILS */}
        {selectedBangle && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm px-4"
            onClick={() => setSelectedBangle(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#F3C623]/50"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedBangle.image}
                alt={selectedBangle.name}
                width={600}
                height={450}
                className="rounded-xl mb-6 object-cover"
              />
              <h4 className="text-2xl font-serif font-semibold text-[#10375C] mb-3">
                {selectedBangle.name}
              </h4>
              <p className="text-[#5B3A00]/90 mb-1">
                <strong>Gold Quality:</strong> {selectedBangle.goldQuality}
              </p>

              <button
                onClick={() => setSelectedBangle(null)}
                className="absolute top-3 right-4 text-[#10375C] text-2xl hover:text-[#F3C623] transition"
              >
                ×
              </button>
            </motion.div>
          </div>
        )}
      </section>

      {/* 🪙 FOOTER SECTION */}
      <footer className="bg-[#0B1E3A] text-[#FFF9E3] py-12 px-6 sm:px-10 mt-20 border-t border-[#F3C623]/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-serif font-semibold text-[#F3C623] mb-4">
              Gold Essence
            </h3>
            <p className="text-sm text-[#FFF9E3]/80 leading-relaxed">
              Handcrafted jewelry that tells your story — where timeless beauty
              meets modern artistry. Designed to make every moment shine.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-[#F3C623] mb-3">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-[#F3C623] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/bangles" className="hover:text-[#F3C623] transition">
                  Bangles
                </a>
              </li>
              <li>
                <a href="/rings" className="hover:text-[#F3C623] transition">
                  Rings
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#F3C623] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-[#F3C623] mb-3">
              Contact Us
            </h4>
            <p className="text-sm text-[#FFF9E3]/80">
              📍 123 Heritage Lane, Mumbai, India
            </p>
            <p className="text-sm text-[#FFF9E3]/80 mt-1">📞 +91 98765 43210</p>
            <p className="text-sm text-[#FFF9E3]/80 mt-1">
              ✉️ hello@goldessence.com
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-[#F3C623] mb-3">
              Follow Us
            </h4>
            <div className="flex space-x-4 text-[#FFF9E3]">
              <a
                href="#"
                className="hover:text-[#F3C623] transition text-lg"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="#"
                className="hover:text-[#F3C623] transition text-lg"
                aria-label="Facebook"
              >
                <i className="ri-facebook-circle-line"></i>
              </a>
              <a
                href="#"
                className="hover:text-[#F3C623] transition text-lg"
                aria-label="Twitter"
              >
                <i className="ri-twitter-line"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-[#FFF9E3]/70 mt-10 border-t border-[#F3C623]/20 pt-6">
          © {new Date().getFullYear()} Gold Essence. All rights reserved.
        </div>
      </footer>
    </main>
  );
};

export default CategoryPage;
