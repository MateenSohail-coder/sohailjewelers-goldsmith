"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Mail,
  MessageSquare,
  Feather,
  Heart,
  Diamond,
  Star,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const ContactLuxury: React.FC = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-[#FFF8E7] to-[#FAF3E0] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='%23D4AF37' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center space-y-12"
        >
          {/* Header */}
          <motion.div variants={fadeUp}>
            <h2 className="text-5xl font-sunscreen md:text-6xl font-serif text-[#10375C] mb-4">
              Connect with Our Jewelry Experts
            </h2>
            <p className="text-xl md:text-2xl text-[#5B3A00]/90 max-w-3xl mx-auto leading-relaxed">
              Our team is ready to assist you in creating, buying, or selling
              exquisite jewelry. Reach us via Email or WhatsApp for a
              personalized luxury experience.
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16"
          >
            {/* Box 1 */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-br from-[#D4AF37] to-[#FFD966] text-white rounded-3xl p-8 flex flex-col items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 text-center"
            >
              <Star size={36} className="mb-4" />
              <h3 className="text-2xl font-bold mb-2">
                Start Your Custom Piece
              </h3>
              <p className="text-lg opacity-90">
                Begin your journey to owning a one-of-a-kind masterpiece.
              </p>
            </motion.div>

            {/* Box 2 */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-3xl p-8 flex flex-col items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 text-center"
            >
              <Feather size={36} className="mb-4" />
              <h3 className="text-2xl font-bold mb-2">
                Design Your Dream Jewelry
              </h3>
              <p className="text-lg opacity-90">
                Transform your vision into wearable art with our expert
                craftsmen.
              </p>
            </motion.div>

            {/* Box 3 */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-br from-green-500 to-blue-600 text-white rounded-3xl p-8 flex flex-col items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 text-center"
            >
              <Diamond size={36} className="mb-4" />
              <h3 className="text-2xl font-bold mb-2">
                Create Your Masterpiece
              </h3>
              <p className="text-lg opacity-90">
                Craft the perfect piece that tells your unique story.
              </p>
            </motion.div>

            {/* Box 4 */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-3xl p-8 flex flex-col items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 text-center"
            >
              <Heart size={36} className="mb-4" />
              <h3 className="text-2xl font-bold mb-2">
                Bring Your Vision to Life
              </h3>
              <p className="text-lg opacity-90">
                Our artisans turn ideas into stunning, personalized jewelry.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Buttons */}
          <motion.div
            id="contact"
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto"
          >
            {/* Email Card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#FFF5E6] border-2 border-[#D4AF37] rounded-3xl p-12 flex flex-col items-center justify-center text-center shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#FFD966] rounded-full flex items-center justify-center mb-6 text-white">
                <Mail size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#10375C] mb-2">
                Email Us
              </h3>
              <p className="text-[#5B3A00]/90 text-lg mb-6">
                sohailgoldsmith@gmail.com
              </p>
              <a
                href="mailto:am.coders.web@gmail.com"
                className="bg-gradient-to-r from-[#D4AF37] to-[#FFD966] text-[#10375C] px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Send Email
              </a>
            </motion.div>

            {/* WhatsApp Card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#FFF5E6] border-2 border-[#D4AF37] rounded-3xl p-12 flex flex-col items-center justify-center text-center shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center mb-6 text-white">
                <MessageSquare size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#10375C] mb-2">
                WhatsApp
              </h3>
              <p className="text-[#5B3A00]/90 text-lg mb-6">
                Chat with us directly
              </p>
              <a
                href="https://wa.me/923214108773?text=I%20want%20to%20create%20custom%20design%20jewelry"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Open Chat
              </a>
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.div variants={fadeUp} className="text-center mt-12">
            <p className="text-[#5B3A00]/80 text-xl max-w-2xl mx-auto">
              Experience luxury service and expert advice for all your jewelry
              needs. Our team ensures personalized guidance from start to
              finish.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactLuxury;
