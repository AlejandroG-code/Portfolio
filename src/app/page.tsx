// app/page.js
'use client';

import { motion } from 'framer-motion';
import Navbar from './_components/navbar/navbar';
import Image from 'next/image';
import Background from './_components/background/background'; // Importa el componente de fondo

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      <Background /> {/* Renderiza el componente de fondo */}

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-12 sm:py-24 space-y-8">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 rounded-full border-2 border-indigo-500/30 overflow-hidden">
              <Image
                src="/yo.jpg"
                alt="Alejandro Gonzalez"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I&#39;m <span className="text-indigo-400">Alejandro</span>
          </motion.h1>

          <motion.p
            className="max-w-2xl text-gray-400 text-lg sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Full Stack Developer & Tech Enthusiast.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a
              href="/projects"
              className="relative group bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30"
            >
              <span className="relative z-10">View Portfolio</span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
            <a
              href="/contact"
              className="relative group border border-indigo-500 hover:border-indigo-400 text-indigo-300 hover:text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <span className="relative z-10">Get in Touch</span>
              <span className="absolute inset-0 bg-indigo-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex gap-4 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {/* GitHub */}
            <a
              href="https://github.com/AlejandroG-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
              aria-label="GitHub"
            >
              <div className="w-10 h-10 rounded-full border border-gray-700 hover:border-indigo-500 flex items-center justify-center transition-all hover:bg-gray-800/50">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/alejandro-gonzalez-06b69031b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn"
            >
              <div className="w-10 h-10 rounded-full border border-gray-700 hover:border-indigo-500 flex items-center justify-center transition-all hover:bg-gray-800/50">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/a1ex_glz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
              aria-label="Instagram"
            >
              <div className="w-10 h-10 rounded-full border border-gray-700 hover:border-indigo-500 flex items-center justify-center transition-all hover:bg-gray-800/50">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
            </a>
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-800 text-center py-6 text-sm text-gray-500">
          <div className="container mx-auto px-4">
            <p>© {new Date().getFullYear()} Alejandro Gonzalez. All rights reserved.</p>
            <p className="mt-1 text-xs text-gray-600">Made with passion</p>
          </div>
        </footer>
      </div>
    </div>
  );
}