"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/923214108773?text=I%20want%20to%20create%20custom%20design%20jewelry`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center
                 w-16 h-16 bg-green-500
                 rounded-full shadow-[0_0_25px_rgba(16,185,129,0.7)]
                 text-white border-4 border-white/10 backdrop-blur-md"
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 10, -10, 0],
        boxShadow: [
          "0 0 25px rgba(16,185,129,0.7)",
          "0 0 40px rgba(16,185,129,1)",
          "0 0 25px rgba(16,185,129,0.7)",
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      title="Chat with us on WhatsApp 💬"
    >
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full bg-green-400/30 blur-xl"
      ></motion.div>

      <MessageCircle size={30} className="relative z-10" />
      <span className="sr-only">Chat on WhatsApp</span>
    </motion.a>
  );
}
