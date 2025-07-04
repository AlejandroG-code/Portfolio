'use client';

import Navbar from "../_components/navbar/navbar";
import { motion } from 'framer-motion';
import React from "react";
import { useState } from 'react';
import Background from '../_components/background/background';
import { Mail, Phone, Github, Linkedin, Instagram, CheckCircle, ExternalLink, Copy } from 'lucide-react';

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
      type: 'phone',
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+524434489639",
      displayValue: "Click to copy",
      action: () => copyToClipboard("+524434489639", 'phone'),
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
    },
    {
      type: 'instagram',
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram",
      value: "https://instagram.com/a1ex_glz",
      displayValue: "@a1ex_glz",
      action: () => window.open("https://instagram.com/a1ex_glz", "_blank"),
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
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.type}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.9 + index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.97 }}
                className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/60 backdrop-blur-md border border-gray-700/60 hover:border-indigo-400/60 rounded-3xl p-8 transition-all duration-300 cursor-pointer overflow-hidden shadow-2xl hover:shadow-indigo-500/40"
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

          {/* Enhanced Call-to-Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/60 backdrop-blur-md border border-gray-700/60 rounded-3xl p-12 lg:p-16 overflow-hidden shadow-2xl"
          >
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-500/15 to-purple-500/15 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-500/15 to-pink-500/15 rounded-full blur-2xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-xl" />
            
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="w-6 h-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mr-4 shadow-lg"
                  />
                  Let&apos;s Build Something Amazing
                </h2>
                <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                  Ready to turn your vision into reality? I&apos;m passionate about creating innovative solutions 
                  and would love to collaborate on your next project. Let&apos;s connect and make something extraordinary!
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                className="bg-gradient-to-r from-indigo-500/25 via-purple-500/25 to-pink-500/25 rounded-2xl p-8 backdrop-blur-sm border border-gray-600/40 shadow-2xl"
              >
                <p className="text-2xl font-bold text-white mb-4">
                  Primary Contact
                </p>
                <motion.button
                  onClick={() => copyToClipboard("alejandro.g.engineer@gmail.com", 'main-email')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:shadow-indigo-500/30"
                >
                  <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-lg hidden sm:inline">alejandro.g.engineer@gmail.com</span>
                  <span className="text-lg sm:hidden">Copy Email</span>
                  <Copy className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </motion.button>
                
                {copied === 'main-email' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.8 }}
                    className="mt-6 bg-green-500/20 border border-green-500/40 rounded-xl p-4 flex items-center justify-center space-x-2"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-lg font-semibold text-green-400">Successfully copied to clipboard!</span>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}