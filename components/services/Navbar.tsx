"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#About", label: "About" },
  { href: "#category", label: "Category" },
  { href: "#process", label: "Process" },
  { href: "#buyers", label: "Selling" },
  { href: "#testimals", label: "Testimonials" },
  { href: "#faqs", label: "FAQs" },
  { href: "#contact", label: "Contact" },
  { href: "#address", label: "Address" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowNav(!(currentScroll > lastScrollY && currentScroll > 80));
      setLastScrollY(currentScroll);

      // Active section detection
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveLink(link.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Smooth scroll behavior for anchor links
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 80,
          behavior: "smooth",
        });
        setIsOpen(false);
        setIsSidebarOpen(false);
      }
    }
  };

  const mainLinks = navLinks.slice(0, 4);
  const sidebarLinks = navLinks.slice(4);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: showNav ? 0 : -100 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="bg-[#0B1E3A]/95 backdrop-blur-md py-3 shadow-lg fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Luxury Jewelry Logo"
                width={130}
                height={130}
                className="inline-block mr-2"
              />
            </Link>

            {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
  {mainLinks.map((link) => {
    const isActive = activeLink === link.href;
    return (
      <div key={link.href} className="relative group flex flex-col items-start justify-start">
        <a
          href={link.href}
          onClick={(e) => handleSmoothScroll(e, link.href)}
          className={`relative px-4 py-2 font-varuna text-2xl font-semibold font-serif rounded-md transition-all duration-300
            ${
              isActive
                ? "text-[#0B1E3A] bg-[#F3C623]" // Active look
                : "text-[#FDF6E3] hover:text-[#0B1E3A] hover:bg-[#F3C623]" // Hover effect
            }`}
        >
          {link.label}
        </a>

        
      </div>
    );
  })}

  {/* More Button */}
  <button
    onClick={() => setIsSidebarOpen(true)}
    className="px-4 py-2 text-lg font-semibold text-[#FDF6E3] bg-[#F3C623]/20 border border-[#F3C623]/50 rounded-md hover:bg-[#F3C623] hover:text-[#0B1E3A] transition duration-300"
  >
    ☰ More
  </button>
</div>


            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#FDF6E3] hover:text-[#F3C623] p-2 rounded-md hover:bg-[#F3C623]/20 transition duration-300"
              >
                <svg className="h-9 w-9 fill-current" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 0 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
     <AnimatePresence>
  {isOpen && (
    <motion.div
      key="mobile-menu"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      className="fixed top-0 left-0 w-full h-full bg-[#0B1E3A]/95 backdrop-blur-lg z-50 flex flex-col items-center overflow-y-auto scrollbar-thin scrollbar-thumb-[#F3C623]/60 scrollbar-track-transparent"
    >
      {/* Close Button */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-6 right-6 text-[#F3C623] hover:text-[#FFD966] text-3xl"
      >
        ✕
      </button>

      {/* Scrollable Links Section */}
      <div className="flex flex-col mt-24 space-y-8 text-center w-full pb-20">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleSmoothScroll(e, link.href)}
            className={`w-3/4 mx-auto text-3xl font-varuna font-semibold py-5 rounded-lg border-2 border-[#F3C623]
            shadow-inner shadow-[#00000050] transition-all duration-300 ${
              activeLink === link.href
                ? "bg-[#F3C623] text-[#0B1E3A]"
                : "text-[#FDF6E3] hover:bg-[#F3C623] hover:text-[#0B1E3A]"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.div>
  )}
</AnimatePresence>


      {/* Desktop Sidebar for “More” */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            key="desktop-sidebar"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="hidden md:flex fixed top-0 right-0 h-full w-80 bg-[#0B1E3A] text-[#FDF6E3] shadow-2xl z-50 flex-col items-center justify-center space-y-8"
          >
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="absolute top-6 right-6 text-[#F3C623] hover:text-[#FFD966] text-3xl"
            >
              ✕
            </button>

            {sidebarLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`text-3xl font-varuna font-semibold py-3 px-6 rounded-lg transition-all duration-300 ${
                  activeLink === link.href
                    ? "bg-[#F3C623] text-[#0B1E3A]"
                    : "hover:bg-[#F3C623] hover:text-[#0B1E3A]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
