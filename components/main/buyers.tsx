"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const SellJewelry: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <section
      id="buyers"
      className="py-24 bg-gradient-to-b from-[#FFF9F0] to-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="text-4xl font-sunscreen md:text-5xl font-bold text-[#10375C] mb-4"
          >
            Sell Your Jewelry to Us
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-[#5B3A00]/80 max-w-3xl mx-auto"
          >
            Turn your cherished pieces into instant value. Whether it's gold,
            silver, diamonds, or luxury watches, our experts provide a fair and
            transparent evaluation process.
          </motion.p>
        </motion.div>

        {/* Info + Image Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Info */}
          <motion.div variants={fadeUp} className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#10375C]">
              Why Sell to Us?
            </h3>
            <ul className="list-disc list-inside text-[#5B3A00]/90 space-y-2 text-lg">
              <li>
                Expert Evaluation: Get accurate pricing for your precious items.
              </li>
              <li>Fast & Transparent: Receive a quote and payment quickly.</li>
              <li>
                Safe & Secure: We handle all transactions with complete
                confidentiality.
              </li>
              <li>
                Trusted by Thousands: Our reputation ensures you receive fair
                value.
              </li>
            </ul>

            <button
              onClick={handleSubmit}
              className="mt-6 bg-gradient-to-r from-[#F3C623] to-[#FFD966] text-[#0B1E3A] px-10 py-3 rounded-full font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <a
                href="https://wa.me/923214108773?text=I%20want%20to%20sell%20my%20jewelry
"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Contact us to sell your Jewelery
              </a>
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeUp}
            className="relative w-full h-96 rounded-xl shadow-2xl overflow-hidden border-4 border-[#F3C623]"
          >
            <Image
              src="/buyer.jpg"
              alt="Luxury Jewelry Evaluation"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SellJewelry;
