'use client';

import React from 'react';
import Navbar from "../_components/navbar/navbar";
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <>
      <Navbar />
      <section className="bg-gray-950 text-white py-20 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header with animation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                My Projects
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm currently working on exciting projects. Check back soon to see my work!
            </p>
          </motion.div>

          {/* Projects Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={`project-placeholder-${item}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="group relative overflow-hidden rounded-xl border-2 border-dashed border-gray-700 hover:border-indigo-500/50 transition-all duration-300 min-h-[300px] flex flex-col items-center justify-center"
              >
                <div className="text-center p-8">
                  <div className="mx-auto mb-6 flex items-center justify-center w-16 h-16 bg-indigo-900/30 rounded-full border border-indigo-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-300 mb-2">Project in Progress</h3>
                  <p className="text-gray-500 mb-4">Exciting work coming soon!</p>
                  <span className="inline-block bg-yellow-500/20 text-yellow-400 text-xs font-medium px-3 py-1 rounded-full">
                    Coming Soon
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl font-semibold text-gray-300 mb-4">
              Want to collaborate or see what I'm working on?
            </h3>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}