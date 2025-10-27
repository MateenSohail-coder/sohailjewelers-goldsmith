"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Location() {
  const [copyclipboard, setcopyclipboard] = useState(false);
  const [message, setmessage] = useState<String>("");
  const copy = async (text: string): Promise<boolean> => {
    try {
      // Modern method (most browsers)
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed"; // prevent scrolling to bottom
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }

      setcopyclipboard(true);
      setmessage("Phone number copied to clipboard!");
      setTimeout(() => {
        setcopyclipboard(false);
      }, 2000);
      return true;
    } catch (error) {
      setmessage("❌ Failed to copy phone number.");
      return false;
    }
  };

  return (
    <section
      id="location"
      className="bg-[#0B1E3A] text-[#FDF6E3] py-16 px-6 text-center"
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
              onClick={() => {
                copy("03214108773");
              }}
              className="text-lg font-serif border-1 cursor-pointer hover:text-gray-950 active:text-gray-950 rounded-4xl border-amber-300 px-2 py-1 hover:bg-amber-300 active:bg-amber-300 active:scale-[0.96] transition-all duration-200"
            >
              +92 3214108773
            </p>
            <p
              onClick={() => {
                copy("03160466983");
              }}
              className="text-lg font-serif cursor-pointer border-1 hover:text-gray-950 active:text-gray-950 border-amber-300 px-2 rounded-4xl py-1  hover:bg-amber-300 active:bg-amber-300 active:scale-[0.96] transition-all duration-200"
            >
              +92 3160466983
            </p>
          </div>
        </div>

        <motion.a
          href="https://maps.app.goo.gl/yPh6tQXh3ujhcTfTA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 rounded-full bg-[#F3C623] text-[#0B1E3A] font-semibold text-lg hover:bg-[#FFD966] transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          Open in Google Maps
        </motion.a>

        {/* Location Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10"
        >
          <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-3xl shadow-2xl border-4 border-[#F3C623]/60">
            <Image
              src="/location.jpg" // Replace with your image name (e.g., location.webp)
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
    </section>
  );
}
