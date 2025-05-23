'use client';

import React from 'react';
import Navbar from '../_components/navbar/navbar';
import Image from "next/image";
import { motion } from 'framer-motion';
import Background from '../_components/background/background'; // Import Background component

export default function AboutMe() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      <Background /> {/* Renderiza el componente Background aquí */}
      <>
        <Navbar />
        <section id="about" className="py-20 px-4 relative z-10"> {/* Añadí z-10 */}
          <div className="max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="flex flex-col lg:flex-row items-start gap-12">
              {/* Profile Image */}
              <motion.div
                className="w-full lg:w-1/3 flex justify-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative group">
                  <Image
                    src="/yo.jpg"
                    alt="Alejandro Gonzalez"
                    width={350}
                    height={350}
                    className="rounded-2xl shadow-xl object-cover border-4 border-indigo-500/20 group-hover:border-indigo-500/40 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-indigo-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>

              {/* Info Content */}
              <div className="w-full lg:w-2/3 space-y-12">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">
                    Hello, I&#39;m <span className="text-white">Alejandro Gonzalez</span>
                  </h1>
                  <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-6"></div>
                  <p className="text-lg text-gray-400 italic">
                    Systems Engineering Student | Passionate Developer | Tech Enthusiast
                  </p>
                </motion.div>

                {/* About Me */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-indigo-500/30 transition-all duration-300">
                    <h2 className="text-2xl font-semibold text-indigo-400 mb-4 flex items-center">
                      <span className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
                      About Me
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      I am a passionate Systems Engineering student at Universidad Vasco de Quiroga (UVAQ) with a strong desire to learn and grow in the tech industry. My curiosity and dedication drive me to continuously expand my knowledge and skills, allowing me to tackle complex challenges and create innovative solutions.
                    </p>
                  </div>
                </motion.div>

                {/* Skills & Experience */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Skills */}
                  <motion.div
                    className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-indigo-500/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <h3 className="text-2xl font-semibold text-indigo-400 mb-4 flex items-center">
                      <span className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
                      Skills
                    </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          <span className="text-gray-300"><strong className="text-white">Languages:</strong> Python, Java, JavaScript, HTML, CSS</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          <span className="text-gray-300"><strong className="text-white">Frameworks:</strong> React, Node.js, Tailwind CSS</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          <span className="text-gray-300"><strong className="text-white">Tools:</strong> Git, Visual Studio Code</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          <span className="text-gray-300"><strong className="text-white">Soft Skills:</strong> Fast Learner, Responsible, Sociable, Team Player, Self-taught</span>
                      </li>
                    </ul>
                  </motion.div>

                  {/* Experience */}
                  <motion.div
                    className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-indigo-500/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    <h3 className="text-2xl font-semibold text-indigo-400 mb-4 flex items-center">
                      <span className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
                      Experience
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">•</span>
                        <span className="text-gray-300">
                          <strong className="text-white">Programming Instructor</strong> – Taught basic Java and Python to first-year university students.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">•</span>
                        <span className="text-gray-300">
                          <strong className="text-white">Team Leader & Mentor</strong> – Guided students in programming projects and decision-based data systems.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">•</span>
                        <span className="text-gray-300">
                          <strong className="text-white">Project Developer</strong> – Developed a tool to evaluate stock purchase feasibility and a personal portfolio website.
                        </span>
                      </li>
                    </ul>

                  </motion.div>
                </div>

                {/* Achievements */}
                <motion.div
                  className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-indigo-500/30 transition-all duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <h3 className="text-2xl font-semibold text-indigo-400 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
                    Achievements
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-indigo-900/20 p-4 rounded-lg border border-indigo-500/20">
                      <h4 className="font-medium text-white mb-1">Programming Contests</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>🥇 3x First Place - Internal Competitions</li>
                        <li>🥈 1x Second Place - Internal Competitions</li>
                      </ul>
                    </div>
                    <div className="bg-indigo-900/20 p-4 rounded-lg border border-indigo-500/20">
                      <h4 className="font-medium text-white mb-1">IEEExtreme & Practice</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>🏆 IEEExtreme 17.0 – Top 54.5% Globally</li>
                        <li> - Rank 2,307 out of 4,231</li>
                        <li>🏆 IEEExtreme 18.0 – Top 29.6% Globally</li>
                        <li> - Rank 1,717 out of 5,801</li>
                        <li>🏆 IEEExtreme Practice – Top 9.4%</li>
                        <li> - Rank 2,727 out of 29,001</li>
                      </ul>
                    </div>
                  </div>

                </motion.div>

                {/* Goals */}
                <motion.div
                  className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-indigo-500/30 transition-all duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-indigo-500/30 transition-all duration-300">
                    <h3 className="text-2xl font-semibold text-indigo-400 mb-4 flex items-center">
                      <span className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
                      Goals
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                    My short-term goal is to deepen my knowledge in Full Stack Development, becoming highly proficient in both front-end and back-end technologies. In the long term, I aim to work on large-scale software systems, contribute to open-source communities, and eventually lead a team of developers in building impactful tech solutions.
                    </p>
                  </div>

                </motion.div>



                {/* Contact */}
                <motion.div
                  className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-indigo-500/30 transition-all duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <h3 className="text-2xl font-semibold text-indigo-400 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
                    Contact
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:alejandro.g.engineer@gmail.com" className="text-gray-300 hover:text-indigo-400 transition-colors">
                        alejandro.g.engineer@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <a href="https://linkedin.com/in/alejandro-gonzalez-06b69031b" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400 transition-colors">
                        linkedin.com/in/alejandro-gonzalez
                      </a>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-gray-300">+52 4434489639</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}