'use client';

import Navbar from "../_components/navbar/navbar";
import { motion } from 'framer-motion';
import React from "react";
import { useState } from 'react';
import Background from '../_components/background/background'; // Import Background component

export default function ContactPage() {
  const [copied, setCopied] = useState<string | null>(null);
  const [formData, setFormData] = useState({ // Estado para los datos del formulario
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false); // Estado para controlar si el formulario se envió
  const [submitMessage, setSubmitMessage] = useState(''); // Mensaje de éxito/error

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Previene el envío por defecto del formulario

    const { name, email, subject, message } = formData;
    const recipientEmail = "alejandro.g.engineer@gmail.com";
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    try {
      window.location.href = mailtoLink; // Abre el cliente de correo
      setFormSubmitted(true);
      setSubmitMessage("¡Gracias! Tu cliente de correo se ha abierto con el mensaje pre-llenado.");
      setFormData({ // Limpia el formulario después de "enviar"
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitMessage("Hubo un problema al abrir el cliente de correo. Por favor, copia la información manualmente.");
      console.error("Error al abrir mailto:", error);
    }
  };

  const contacts = [
    {
      type: 'email',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      title: "Email",
      value: "Click to copy",
      action: () => copyToClipboard("alejandro.g.engineer@gmail.com", 'email')
    },
    {
      type: 'phone',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      title: "Teléfono",
      value: "Click to copy",
      action: () => copyToClipboard("+524434489639", 'phone')
    },
    {
      type: 'linkedin',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      title: "LinkedIn",
      value: "Alejandro González",
      action: () => window.open("https://linkedin.com/in/alejandro-gonzalez-06b69031b", "_blank")
    },
    {
      type: 'github',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
      title: "GitHub",
      value: "AlejandroG-code",
      action: () => window.open("https://github.com/AlejandroG-code", "_blank")
    },
    {
      type: 'instagram',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      title: "Instagram",
      value: "@a1ex_glz",
      action: () => window.open("https://instagram.com/a1ex_glz", "_blank")
    }
  ];

  return (
    <div className="relative min-h-screen bg-gray-950 text-white">
      <Background />
      <>
        <Navbar />
        <section className="py-20 px-4 relative z-10"> {/* Eliminado min-h-[150vh] si no es necesario */}
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Contact Me
                </span>
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                I&#39;m always open to new opportunities and collaborations. Feel free to reach out through any of the platforms below.
              </p>
            </motion.div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contacts.map((contact, index) => (
                <motion.div
                  key={contact.type}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-900/50 hover:bg-gray-800/50 border border-gray-800 hover:border-indigo-500/30 rounded-xl p-6 transition-all duration-300 cursor-pointer"
                  onClick={contact.action}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gray-800 rounded-lg text-indigo-400">
                      {contact.icon}
                    </div>
                    <div>
                      <h3 className="text-gray-400 text-sm font-medium">{contact.title}</h3>
                      <p className="text-white font-medium mt-1">
                        {contact.value}
                      </p>
                      {copied === contact.type && (
                        <span className="text-xs text-green-400 mt-1 block">
                          Copied to clipboard!
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-20 bg-gray-900/50 border border-gray-800 rounded-xl p-8"
            >
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <span className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
                Message Me
              </h2>
              <p className="text-gray-400 mb-6">
                Fill out the form below and I&#39;ll get back to you as soon as possible!
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Regarding a project..."
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y"
                    placeholder="Hi Alejandro, I'd like to discuss..."
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </form>

              {formSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 text-center text-green-400"
                >
                  {submitMessage}
                </motion.p>
              )}
            </motion.div>
          </div>
        </section>
      </>
    </div>
  );
}