'use client';

import Navbar from "../_components/navbar/navbar";
import { motion } from 'framer-motion';
import React from "react";
import { useState } from 'react';
import Background from '../_components/background/background';
import { Mail, Github, Linkedin, CheckCircle, ExternalLink, Copy } from 'lucide-react';

export default function ContactPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const contacts = [
    {
      type: 'email',
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "alejandro.g.engineer@gmail.com",
      displayValue: "Click to copy",
      action: () => copyToClipboard("alejandro.g.engineer@gmail.com", 'email'),
      copyable: true
    },
    {
      type: 'linkedin',
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "https://linkedin.com/in/alejandro-gonzalez-06b69031b",
      displayValue: "Alejandro González",
      action: () => window.open("https://linkedin.com/in/alejandro-gonzalez-06b69031b", "_blank"),
      copyable: false
    },
    {
      type: 'github',
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "https://github.com/AlejandroG-code",
      displayValue: "AlejandroG-code",
      action: () => window.open("https://github.com/AlejandroG-code", "_blank"),
      copyable: false
    }
  ];

  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      <Background />
      <Navbar />
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header with improved animations */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block relative"
            >
              <motion.div 
                className="absolute -inset-2 bg-gradient-to-r from-indigo-500/50 to-pink-500/50 rounded-full blur-3xl opacity-0"
                animate={{ opacity: [0, 0.7, 0.3, 1, 0.5, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
              />
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-x">
                  Get In Touch
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                />
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-gray-300 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed"
            >
              Ready to bring your ideas to life? I&apos;m always excited to collaborate on innovative projects 
              and explore new opportunities. Let&apos;s create something amazing together!
            </motion.p>
          </motion.div>

          {/* Enhanced Contact Cards Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {contacts.map((contact) => (
              <motion.div
                key={contact.type}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  transition: { duration: 0.2 } // Hover animation duration: 0.2 seconds
                }}
                whileTap={{ scale: 0.97 }}
                // Custom transition for faster return to original position
                // Return to original position timing: The card now returns to its normal state in exactly 0.2 seconds after hover ends
                className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/60 backdrop-blur-md border border-gray-700/60 hover:border-indigo-400/60 rounded-3xl p-8 transition-all duration-200 cursor-pointer overflow-hidden shadow-2xl hover:shadow-indigo-500/40"
                onClick={contact.action}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div
                    className="mb-6 p-5 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl text-indigo-400 group-hover:text-indigo-300 transition-all duration-300 shadow-xl group-hover:shadow-indigo-500/20 border border-gray-600/50 group-hover:scale-110 group-hover:rotate-12"
                  >
                    {contact.icon}
                  </div>
                  
                  <div className="w-full">
                    <h3 className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-3 group-hover:text-gray-300 transition-colors duration-300">
                      {contact.title}
                    </h3>
                    <p className="text-white font-bold text-xl mb-4 group-hover:text-indigo-100 transition-colors duration-300 leading-tight">
                      {contact.displayValue}
                    </p>
                    
                    <div className="flex items-center justify-center space-x-3 text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                      {contact.copyable ? (
                        <>
                          <Copy className="w-4 h-4" />
                          <span className="text-xs font-medium uppercase tracking-wide">Click to Copy</span>
                        </>
                      ) : (
                        <>
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-xs font-medium uppercase tracking-wide">Visit Profile</span>
                        </>
                      )}
                    </div>
                    
                    {copied === contact.type && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: -10 }}
                        className="mt-4 bg-green-500/20 border border-green-500/40 rounded-xl p-3 flex items-center justify-center space-x-2"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-green-400 font-semibold">Copied to Clipboard!</span>
                      </motion.div>
                    )}
                  </div>
                </div>
                
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}