// app/page.tsx
'use client'; // Mantener si necesitas features de cliente (como useState, useEffect, motion)

import { motion } from 'framer-motion';
import Navbar from './_components/navbar/navbar';
import Image from 'next/image';
import Background from './_components/background/background';
import React from 'react'; // Mantener solo si usas useState/useEffect para otras cosas


export default function Home() {
  // Se eliminan todos los estados relacionados con la consola
  // const [isConsoleMode, setIsConsoleMode] = useState(false);
  // const [isConsoleVisible, setIsConsoleVisible] = useState(false);
  // const [consoleInput, setConsoleInput] = useState('');
  // const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  // const [commandHistory, setCommandHistory] = useState<string[]>([]);
  // const [historyIndex, setHistoryIndex] = useState(-1);

  // Se eliminan los useEffect, addOutput, toggleConsole, handleConsoleInputChange, handleKeyDown, executeCommand
  // ya que son específicos de la consola.
  // Si tienes otros useEffect o useState que no sean de la consola, déjalos.

  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      <Background />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-12 sm:py-24 space-y-8">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <motion.div 
                className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500/50 to-pink-500/50 rounded-full blur-2xl opacity-0"
                animate={{ opacity: [0, 0.6, 0.2, 0.8, 0.4, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
              />
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full border-2 border-indigo-500/30 overflow-hidden shadow-lg">
                <Image
                  src="/yo.jpg"
                  alt="Alejandro Gonzalez"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div 
              className="absolute -inset-2 bg-gradient-to-r from-indigo-500/50 to-purple-500/50 rounded-full blur-3xl opacity-0"
              animate={{ opacity: [0, 0.7, 0.3, 1, 0.5, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.5 }}
            />
            <motion.h1
              className="relative text-4xl sm:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hi, I&apos;m <span className="text-white">Alejandro</span>
            </motion.h1>
          </div>

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
              className="group inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:shadow-indigo-500/30"
            >
              View Portfolio
            </a>
            <a
              href="/contact"
              className="group inline-flex items-center justify-center border border-indigo-500 hover:border-indigo-400 text-indigo-300 hover:text-white font-bold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 hover:bg-indigo-500/10 transform hover:scale-105"
            >
              Get in Touch
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
              <div className="w-10 h-10 rounded-full border border-gray-700 hover:border-indigo-500 flex items-center justify-center transition-all hover:bg-gray-800/50 hover:scale-110">
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
              <div className="w-10 h-10 rounded-full border border-gray-700 hover:border-indigo-500 flex items-center justify-center transition-all hover:bg-gray-800/50 hover:scale-110">
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
              <div className="w-10 h-10 rounded-full border border-gray-700 hover:border-indigo-500 flex items-center justify-center transition-all hover:bg-gray-800/50 hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
            </a>
          </motion.div>
        </main>

        <footer className="border-t border-gray-800 text-center py-6 text-sm text-gray-500">
          <div className="container mx-auto px-4">
            <p>© {new Date().getFullYear()} Alejandro Gonzalez. All rights reserved.</p>
            <p className="mt-1 text-xs text-gray-600">Made with passion</p>
          </div>
        </footer>

        {/* Los botones de la consola y la interfaz de la consola se eliminan */}
      </div>
    </div>
  );
}