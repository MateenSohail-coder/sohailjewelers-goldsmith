"use client";
import React from "react";
import { motion } from "framer-motion";
import { Diamond, Lock, Truck } from "lucide-react";
import Image from "next/image";
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 text-gray-900 text-center py-8 shadow-xl"
    >
      {/* Brand & Copyright */}
      <p className="text-sm font-sunscreen  flex items-center justify-center font-semibold tracking-wide mb-2">
       <span className="rounded-full overflow-hidden bg-black w-13 h-13 mr-3 flex items-center justify-center">
        <Image
                       src="/logo.png"
                       alt="Luxury Jewelry Logo"
                       width={130}
                       height={130}
                     />
       </span>
       <span> &copy; {currentYear} </span><span className="font-huntesla text-lg">Sohail Jewelers</span>
      </p>

      {/* Features with icons */}
      <div className="flex justify-center items-center gap-6 text-gray-700">
        <div className="flex items-center gap-2">
          <Diamond className="w-5 h-5 text-amber-500" />
          <span className="text-sm font-medium">Premium Quality</span>
        </div>
        <div className="flex items-center gap-2">
          <Lock className="w-5 h-5 text-amber-500" />
          <span className="text-sm font-medium">Secure Payments</span>
        </div>
       
      </div>
    </motion.footer>
  );
};

export default Footer;
