"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Clock,
  Phone,
  X,
  CardSimIcon,
  IdCardIcon,
  LocateIcon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Location() {
  const [copyclipboard, setcopyclipboard] = useState(false);
  const [message, setmessage] = useState<string>("");
  const [showCard, setShowCard] = useState(false);

  const copy = async (text: string): Promise<boolean> => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }

      setcopyclipboard(true);
      setmessage("Phone number copied to clipboard!");
      setTimeout(() => setcopyclipboard(false), 2000);
      return true;
    } catch (error) {
      setmessage("❌ Failed to copy phone number.");
      return false;
    }
  };

  return (
    <section
      id="address"
      className="bg-[#0B1E3A] text-[#FDF6E3] py-16 px-6 text-center relative"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold font-sunscreen mb-6 border-b-4 border-[#F3C623] inline-block pb-2"
      >
        Visit Our Showroom
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-2xl mx-auto space-y-6"
      >
        <div className="flex justify-center items-center space-x-3">
          <MapPin className="text-[#F3C623]" size={28} />
          <p className="text-lg font-serif">
            Jagat Nath Street, Madina Bazar, Ichhra, Lahore
          </p>
        </div>

        <div className="flex justify-center items-center space-x-3">
          <Clock className="text-[#F3C623]" size={26} />
          <p className="text-lg font-serif">Mon – Sat: 1:00 PM – 9:00 PM</p>
        </div>

        <div className="flex justify-center items-center space-x-3">
          <Phone className="text-[#F3C623]" size={26} />

          <div className="flex flex-col md:flex-row gap-4">
            <p
              onClick={() => copy("03214108773")}
              className="text-lg font-serif border-1 cursor-pointer hover:text-gray-950 active:text-gray-950 rounded-4xl border-amber-300 px-2 py-1 hover:bg-amber-300 active:bg-amber-300 active:scale-[0.96] transition-all duration-200"
            >
              +92 3214108773
            </p>
            <p
              onClick={() => copy("03160466983")}
              className="text-lg font-serif cursor-pointer border-1 hover:text-gray-950 active:text-gray-950 border-amber-300 px-2 rounded-4xl py-1 hover:bg-amber-300 active:bg-amber-300 active:scale-[0.96] transition-all duration-200"
            >
              +92 3160466983
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <motion.a
            href="https://maps.app.goo.gl/xQfiBhzW59V8af1f7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 flex items-center justify-center rounded-full bg-[#F3C623] text-[#0B1E3A] font-semibold text-lg hover:bg-[#FFD966] transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <p>Open in Google Maps</p>
          </motion.a>

          {/* NEW BUTTON */}
          <motion.button
            onClick={() => setShowCard(true)}
            className="flex space-x-2  px-6 py-3 rounded-full bg-[#F3C623]/90 text-[#0B1E3A] font-semibold text-lg hover:bg-[#FFD966] transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <IdCardIcon />
            <p>See Shop Card</p>
          </motion.button>
        </div>

        {/* Location Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10"
        >
          <div
            onClick={() => setShowCard(true)}
            className="relative w-full max-w-lg mx-auto overflow-hidden rounded-3xl shadow-2xl border-4 border-[#F3C623]/60"
          >
            <Image
              src="/shopcard.png"
              alt="Our showroom location in Ichhra Lahore"
              width={800}
              height={450}
              className="object-cover w-full h-64 hover:scale-105 transition-transform duration-500"
            />
          </div>
          <p className="mt-4 text-[#FFD966]/90 font-serif italic text-lg">
            Located in the heart of Ichhra — where tradition meets elegance.
          </p>
        </motion.div>
      </motion.div>

      {/* Copy Popup */}
      {copyclipboard && (
        <div
          className="fixed bottom-8 left-8 bg-gradient-to-br from-[#F3C623] to-[#FFD966] 
             text-[#0B1E3A] font-semibold text-lg px-6 py-4 
             rounded-2xl shadow-[0_0_20px_rgba(243,198,35,0.6)] 
             border border-[#F3C623]/60 
             backdrop-blur-md 
             animate-pulse z-50"
        >
          {message}
        </div>
      )}

      {/* Shop Card Modal */}
      <AnimatePresence>
        {showCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm"
            onClick={() => setShowCard(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="relative bg-[#0B1E3A] p-4 rounded-2xl shadow-2xl border-4 border-[#F3C623]/60 max-w-lg w-[90%]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowCard(false)}
                className="absolute top-3 right-3 text-[#F3C623] hover:text-[#FFD966] transition"
              >
                <X size={28} />
              </button>
              <Image
                src="/shopcard.png" // 👉 replace with your actual shop card image
                alt="Our shop card"
                width={800}
                height={500}
                className="rounded-xl object-cover opacity-100 w-full h-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
