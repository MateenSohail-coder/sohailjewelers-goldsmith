"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function About() {
  // ✅ Define variant types explicitly
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section
      id="About"
      className="py-24 bg-[#FDF6E3] text-[#0B1E3A] overflow-hidden"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Section */}
          <motion.div variants={fadeUp} className="space-y-8">
            <h2 className="text-5xl font-sunscreen font-bold text-[#10375C] mb-6 border-b-4 border-[#F3C623] inline-block pb-3">
              Our Story
            </h2>

            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed text-[#5B3A00] font-serif"
            >
              For generations, our family has carried the legacy of{" "}
              <span className="text-[#F3C623] font-semibold">
                master goldsmiths in Pakistan
              </span>
              , blending timeless tradition with modern artistry. What began as
              a humble jewelry workshop in the old bazaars of{" "}
              <span className="text-[#F3C623] font-semibold">Lahore</span> has
              grown into a name trusted for{" "}
              <span className="text-[#F3C623] font-semibold">
                precision, purity, and passion
              </span>{" "}
              in every piece we craft.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed text-[#5B3A00] font-serif"
            >
              Our founder, a third-generation goldsmith, learned the art from
              his forefathers — shaping not just gold, but{" "}
              <span className="text-[#F3C623] font-semibold">
                dreams, emotions, and lifelong memories
              </span>
              . With decades of experience, our atelier has become a destination
              for connoisseurs seeking{" "}
              <span className="text-[#F3C623] font-semibold">
                bespoke bridal sets, timeless heirlooms, and statement luxury
                jewelry
              </span>
              .
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed text-[#5B3A00] font-serif"
            >
              Each design is handcrafted with precision and heart — from{" "}
              <span className="text-[#F3C623] font-semibold">
                pure 22K and 24K gold
              </span>{" "}
              to hand-set precious stones sourced from across the world. Our
              artisans combine traditional Pakistani techniques like{" "}
              <span className="text-[#F3C623] font-semibold">
                meenakari, filigree, and kundan
              </span>{" "}
              with modern design sensibilities to create jewelry that tells a
              story of legacy and luxury.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed text-[#5B3A00] font-serif"
            >
              At our core, we believe that{" "}
              <span className="text-[#F3C623] font-semibold">
                every piece is personal
              </span>
              . Whether it’s a bride’s first necklace, a mother’s cherished
              bangle, or a collector’s masterpiece — we craft jewelry that{" "}
              <span className="text-[#F3C623] font-semibold">
                celebrates life’s most precious moments
              </span>{" "}
              with unmatched beauty and authenticity.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed text-[#5B3A00] font-serif"
            >
              Step into our world — where gold meets grace, tradition meets
              trend, and your imagination meets our{" "}
              <span className="text-[#F3C623] font-semibold">
                craftsmanship beyond compare
              </span>
              .
            </motion.p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative rounded-2xl shadow-2xl border-4 border-[#F3C623] overflow-hidden group"
          >
            <Image
              src="/AboutUs.avif"
              alt="Cozy artisan workshop with goldsmith tools and jewelry pieces"
              width={600}
              height={400}
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
              priority
            />

            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-gradient-to-tr from-[#F3C62340] to-transparent"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
