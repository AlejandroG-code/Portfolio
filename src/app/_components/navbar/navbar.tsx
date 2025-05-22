"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/aboutme", label: "About Me" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  // Animaciones
  const menuVariants = {
    hidden: {
      clipPath: "inset(0% 0% 100% 0%)",
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      clipPath: "inset(0% 0% 100% 0%)",
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav className="bg-gray-950 border-b border-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            alt="Logo"
            width={32}
            height={32}
          />
          <span className="text-xl font-semibold text-white tracking-wide">
            Alejandro
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-white">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative group transition-colors duration-200"
            >
              <span className="hover:text-indigo-400">{label}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden origin-top bg-gray-950 px-4 pt-2 pb-4 text-white flex flex-col gap-3 overflow-hidden"
          >
            {navLinks.map(({ href, label }) => (
              <motion.div key={href} variants={linkVariants}>
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-indigo-400 transition-colors block py-1"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
