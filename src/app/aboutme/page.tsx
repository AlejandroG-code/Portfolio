'use client';

import React from 'react';
import Navbar from '../_components/navbar/navbar';
import Image from "next/image";
import { motion } from 'framer-motion';
import Background from '../_components/background/background'; // Import Background component

export default function AboutMe() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white">
      <Background />
      <>
        <Navbar />
        <section id="about" className="py-20 px-6 relative z-10">
          <div className="max-w-7xl mx-auto space-y-16">

            {/* Profile Image - Centrada en la parte superior */}
            <motion.div
              className="w-full flex justify-center" // Centra la imagen horizontalmente
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative group">
                <motion.div 
                  className="absolute -inset-2 bg-gradient-to-r from-indigo-500/50 to-pink-500/50 rounded-full blur-3xl opacity-0"
                  animate={{ opacity: [0, 0.6, 0.2, 0.8, 0.4, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                />
                <Image
                  src="/yo.jpg"
                  alt="Alejandro Gonzalez"
                  width={380} // Aumentado ligeramente el tamaño de la imagen, ya que ocupará más espacio central
                  height={380}
                  className="relative z-10 rounded-full shadow-xl object-cover border-4 border-indigo-500/20 group-hover:border-indigo-500/40 transition-all duration-300" // Cambiado a rounded-full para forma circular
                />
                <div className="absolute inset-0 bg-indigo-600/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              </div>
            </motion.div>

            {/* Header - Debajo de la imagen, centrado y aprovechando el ancho */}
            <motion.div
              className="text-center" // Centra el texto del header
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="inline-block relative">
                <motion.div 
                  className="absolute -inset-2 bg-gradient-to-r from-indigo-500/50 to-purple-500/50 rounded-full blur-3xl opacity-0"
                  animate={{ opacity: [0, 0.7, 0.3, 1, 0.5, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 1 }}
                />
                <h1 className="relative text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">
                  Hello, I&#39;m <span className="text-white">Alejandro Gonzalez</span>
                </h1>
              </div>
              <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-6"></div> {/* mx-auto para centrar la línea */}
              <p className="text-lg sm:text-xl text-gray-400 italic">
                Systems Engineering Student | Passionate Developer | Tech Enthusiast
              </p>
            </motion.div>

            {/* Grid para About Me, Skills, Experience, Achievements, Contact, Goals */}
            {/* El grid principal sigue siendo de 3 columnas para que Skills/Experience/Contact puedan ir en fila */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* About Me - Ocupa todo el ancho en md y lg (3 columnas) */}
              <motion.div
                className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-gray-900/90 to-gray-800/60 backdrop-blur-md p-8 rounded-2xl border border-gray-700/60 hover:border-indigo-500/60 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-400 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
                  About Me
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I am a passionate Systems Engineering student at Universidad Vasco de Quiroga (UVAQ) with a strong desire to learn and grow in the tech industry. My curiosity and dedication drive me to continuously expand my knowledge and skills, allowing me to tackle complex challenges and create innovative solutions.
                </p>
              </motion.div>

              {/* Skills */}
              <motion.div
                className="bg-gradient-to-br from-gray-900/90 to-gray-800/60 backdrop-blur-md p-8 rounded-2xl border border-gray-700/60 hover:border-indigo-500/60 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <h3 className="text-2xl sm:text-3xl font-semibold text-indigo-400 mb-6 flex items-center">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
                  Skills
                </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2 mt-1">•</span>
                      <span className="text-lg text-gray-300"><strong className="text-white">Languages:</strong> Python, Java, JavaScript, HTML, CSS</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2 mt-1">•</span>
                      <span className="text-lg text-gray-300"><strong className="text-white">Frameworks:</strong> React, Node.js, Tailwind CSS</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2 mt-1">•</span>
                      <span className="text-lg text-gray-300"><strong className="text-white">Tools:</strong> Git, Visual Studio Code</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2 mt-1">•</span>
                      <span className="text-lg text-gray-300"><strong className="text-white">Soft Skills:</strong> Fast Learner, Responsible, Sociable, Team Player, Self-taught</span>
                  </li>
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2 mt-1">•</span>
                      <span className="text-lg text-gray-300"><strong className="text-white">Languages:</strong> Spanish (Native), English (C1), German (B1)</span>
                    </li>
                </ul>
              </motion.div>

              {/* Experience */}
              <motion.div
                className="bg-gradient-to-br from-gray-900/90 to-gray-800/60 backdrop-blur-md p-8 rounded-2xl border border-gray-700/60 hover:border-indigo-500/60 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <h3 className="text-2xl sm:text-3xl font-semibold text-indigo-400 mb-6 flex items-center">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
                  Experience
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2 mt-1">•</span>
                    <span className="text-lg text-gray-300 leading-relaxed">
                      <strong className="text-white">Programming Instructor</strong> – Taught basic Java and Python to first-year university students.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2 mt-1">•</span>
                    <span className="text-lg text-gray-300 leading-relaxed">
                      <strong className="text-white">Team Leader & Mentor</strong> – Guided students in programming projects and decision-based data systems.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2 mt-1">•</span>
                    <span className="text-lg text-gray-300 leading-relaxed">
                      <strong className="text-white">Project Developer</strong> – Developed a tool to evaluate stock purchase feasibility and a personal portfolio website.
                    </span>
                  </li>
                </ul>

              </motion.div>

              {/* Contact */}
              <motion.div
                className="bg-gradient-to-br from-gray-900/90 to-gray-800/60 backdrop-blur-md p-8 rounded-2xl border border-gray-700/60 hover:border-indigo-500/60 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <h3 className="text-2xl sm:text-3xl font-semibold text-indigo-400 mb-6 flex items-center">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
                  Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:alejandro.g.engineer@gmail.com" className="text-lg text-gray-300 hover:text-indigo-400 transition-colors">
                      alejandro.g.engineer@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <a href="https://linkedin.com/in/alejandro-gonzalez-06b69031b" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-300 hover:text-indigo-400 transition-colors">
                      linkedin.com/in/alejandro-gonzalez
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-lg text-gray-300">+52 4434489639</span>
                  </div>
                </div>
              </motion.div>

              {/* Achievements - Ahora ocupa todo el ancho en md y lg (3 columnas) */}
              <motion.div
                className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-gray-900/90 to-gray-800/60 backdrop-blur-md p-8 rounded-2xl border border-gray-700/60 hover:border-indigo-500/60 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <h3 className="text-2xl sm:text-3xl font-semibold text-indigo-400 mb-6 flex items-center">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
                  Achievements
                </h3>
                <div className="space-y-6">
                  <div className="bg-indigo-900/20 p-6 rounded-lg border border-indigo-500/20">
                    <h4 className="font-medium text-white mb-2 text-xl">Programming Contests</h4>
                    <ul className="text-base text-gray-300 space-y-2">
                      <li>🥇 3x First Place - Internal Competitions</li>
                      <li>🥈 1x Second Place - Internal Competitions</li>
                    </ul>
                  </div>
                  <div className="bg-indigo-900/20 p-6 rounded-lg border border-indigo-500/20">
                    <h4 className="font-medium text-white mb-2 text-xl">IEEExtreme & Practice</h4>
                    <ul className="text-base text-gray-300 space-y-2">
                      <li>🏆 IEEExtreme 17.0 – Top 54.5% Globally</li>
                      <li> - Rank 2,307 out of 4,231</li>
                      <li>🏆 IEEtreme 18.0 – Top 29.6% Globally</li>
                      <li> - Rank 1,717 out of 5,801</li>
                      <li>🏆 IEEExtreme Practice – Top 9.4%</li>
                      <li> - Rank 2,727 out of 29,001</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Goals - Ahora ocupa todo el ancho en md y lg (3 columnas) */}
              <motion.div
                className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-gray-900/90 to-gray-800/60 backdrop-blur-md p-8 rounded-2xl border border-gray-700/60 hover:border-indigo-500/60 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <h3 className="text-2xl sm:text-3xl font-semibold text-indigo-400 mb-6 flex items-center">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
                  Goals
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                My short-term goal is to deepen my knowledge in Full Stack Development, becoming highly proficient in both front-end and back-end technologies. In the long term, I aim to work on large-scale software systems, contribute to open-source communities, and eventually lead a team of developers in building impactful tech solutions.
                </p>
              </motion.div>

            </div> {/* Fin del grid principal */}
          </div>
        </section>
      </>
    </div>
  );
}