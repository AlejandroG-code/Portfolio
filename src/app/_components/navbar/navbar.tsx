'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Eliminado el enlace a "Home" de esta lista
  const navLinks = [
    { href: "/aboutme", label: "About Me" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  // Animaciones
  const menuVariants = {
    hidden: {
      clipPath: "inset(0% 0% 100% 0%)",
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.1,
      },
    },
    exit: {
      clipPath: "inset(0% 0% 100% 0%)",
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const linkVariants = {
    hidden: { 
      opacity: 0, 
      y: -10,
      x: -10,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      transition: { 
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <nav className="bg-gray-950/95 backdrop-blur-md border-b border-gray-800/50 shadow-xl sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo/Nombre - Es el Link a Home */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-indigo-500/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
            <Image
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="Logo"
              width={36}
              height={36}
              className="relative z-10 drop-shadow-lg"
            />
          </motion.div>
          <motion.span
            whileHover={{ x: 2 }}
            className="text-xl font-bold text-white tracking-wide group-hover:text-indigo-300 transition-all duration-300 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-indigo-300 group-hover:to-purple-300"
          >
            Alejandro
          </motion.span>
        </Link>

        {/* Desktop Nav - Ahora sin el enlace a Home */}
        <div className="hidden md:flex gap-8 text-white">
          {navLinks.map(({ href, label }, index) => (
            <motion.div
              key={href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                href={href}
                className="relative group py-2 px-1 transition-all duration-300"
              >
                <motion.span
                  whileHover={{ y: -1 }}
                  className="font-medium text-gray-200 group-hover:text-white transition-colors duration-300"
                >
                  {label}
                </motion.span>
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full rounded-full" />
                <span className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50"
          aria-label="Toggle menu"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            key={isOpen ? "close-icon" : "menu-icon"}
            initial={{ opacity: 0, scale: 0.8, rotate: 90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: -90 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu Content - Ahora sin el enlace a Home */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden origin-top bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50 px-6 pt-4 pb-6 text-white flex flex-col gap-4 overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800/20 to-gray-900/40 pointer-events-none" />
            {navLinks.map(({ href, label }) => (
              <motion.div 
                key={href} 
                variants={linkVariants}
                className="relative z-10"
              >
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between py-3 px-4 rounded-xl bg-gray-800/30 hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/30 hover:border-indigo-500/30"
                >
                  <motion.span
                    whileHover={{ x: 4 }}
                    className="font-medium text-gray-200 group-hover:text-white transition-colors duration-300"
                  >
                    {label}
                  </motion.span>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="w-2 h-2 bg-indigo-500 rounded-full"
                  />
                </Link>
              </motion.div>
            ))}
            
            {/* Decorative gradient line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent mt-2"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}