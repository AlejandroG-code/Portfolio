'use client';

import React, { useState } from 'react';
import Navbar from "../_components/navbar/navbar";
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Background from '../_components/background/background';

const projectData = [
  {
    id: 1,
    name: "My Portfolio",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Exists = True"],
    description: "My personal portfolio website showcasing my skills and projects.",
    creationDate: "2025-05-19",
    githubUrl: "https://github.com/AlejandroG-code/Portfolio",
    websiteUrl: "https://alejandro-gil.vercel.app", // ¡NUEVO CAMPO! Reemplaza con tu URL real
    images: [
      "/Images/portfolio-1.png",
      "/Images/portfolio-2.png",
      "/Images/portfolio-3.png",
      "/Images/portfolio-4.png",
    ],
  },
  {
    id: 2,
    name: "Developer Path Web",
    tags: ["React", "Next.js", "Tailwind CSS", "CSS", "TypeScript", "Exists = True"],
    description: "A web application to help developers track their learning path and progress.",
    creationDate: "2025-06-15",
    githubUrl: "https://github.com/AlejandroG-code/DevPathPgae.git",
    websiteUrl: "https://dev-path-page.vercel.app/", // ¡NUEVO CAMPO! Reemplaza con tu URL real
    images: [
      "/Images/DevPath1.jpeg",
      "/Images/DevPath2.jpeg",
      "/Images/DevPath3.jpeg",
      "/Images/DevPath4.jpeg",
      "/Images/DevPath5.jpeg",
      "/Images/DevPath6.jpeg",
    ],
  },
  {
    id: 3,
    name: "Coming soon Project 2",
    tags: [],
    description: "Exciting work coming soon!",
    creationDate: "",
    githubUrl: null,
    websiteUrl: null, // ¡NUEVO CAMPO!
    images: [],
  },
  {
    id: 4,
    name: "Coming soon Project 3",
    tags: [],
    description: "Exciting work coming soon!",
    creationDate: "",
    githubUrl: null,
    websiteUrl: null, // ¡NUEVO CAMPO!
    images: [],
  },
  {
    id: 5,
    name: "Coming soon Project 4",
    tags: [],
    description: "Exciting work coming soon!",
    creationDate: "",
    githubUrl: null,
    websiteUrl: null, // ¡NUEVO CAMPO!
    images: [],
  },
  {
    id: 6,
    name: "Coming soon Project 5",
    tags: [],
    description: "Exciting work coming soon!",
    creationDate: "",
    githubUrl: null,
    websiteUrl: null, // ¡NUEVO CAMPO!
    images: [],
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projectData)[number] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  interface Project {
    id: number;
    name: string;
    tags: string[];
    description: string;
    creationDate: string;
    githubUrl: string | null;
    websiteUrl: string | null; // <--- ¡Añadido aquí!
    images: string[];
  }

  const projectExists = (project: Project): boolean => {
    return project.tags.includes("Exists = True");
  };

  const openModal = (projectId: Project['id']): void => {
    const project = projectData.find((p) => p.id === projectId);
    if (project && projectExists(project)) { // Asegurarse de que project no sea undefined
      setSelectedProject(project);
      setCurrentImageIndex(0);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const goToNextImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % selectedProject.images.length
      );
    }
  };

  const goToPreviousImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length
      );
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-950 text-white">
      <Background />
      <>
        <Navbar />
        <section className="py-20 px-4 relative z-10 min-h-[150vh]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block relative"
              >
                <motion.div 
                  className="absolute -inset-2 bg-gradient-to-r from-indigo-500/50 to-purple-500/50 rounded-full blur-3xl opacity-0"
                  animate={{ opacity: [0, 0.7, 0.3, 1, 0.5, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                />
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    My Projects
                  </span>
                </h1>
              </motion.div>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Click on a project to see details if available.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectData.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                  whileHover={{ scale: 1.03, y: -8 }}
                  className={`group relative overflow-hidden rounded-2xl border border-gray-700/60 hover:border-indigo-500/60 transition-all duration-300 min-h-[300px] flex flex-col items-center justify-center bg-gradient-to-br from-gray-900/90 to-gray-800/60 backdrop-blur-md shadow-lg hover:shadow-indigo-500/30 ${projectExists(project) ? 'cursor-pointer' : ''}`}
                  onClick={() => projectExists(project) ? openModal(project.id) : undefined}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 text-center p-8">
                    <div className="mx-auto mb-6 flex items-center justify-center w-16 h-16 bg-indigo-900/30 rounded-full border border-indigo-500/30 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-200 group-hover:text-white mb-2 transition-colors duration-300">
                      {projectExists(project) ? project.name : "Project in Progress"}
                    </h3>
                    <p className="text-gray-500 group-hover:text-gray-400 mb-4 line-clamp-2 text-lg transition-colors duration-300">
                      {projectExists(project) ? project.description : "Exciting work coming soon!"}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {projectExists(project) ? (
                        project.tags
                          .filter(tag => !tag.startsWith("Exists ="))
                          .slice(0, 3)
                          .map((tag) => (
                            <span key={tag} className="inline-block bg-indigo-700/20 text-indigo-400 text-xs font-medium px-2 py-1 rounded-full">
                              {tag}
                            </span>
                          ))
                      ) : (
                        <span className="inline-block bg-yellow-500/20 text-yellow-400 text-xs font-medium px-3 py-1 rounded-full">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Project Modal */}
            <AnimatePresence>
              {isModalOpen && selectedProject && projectExists(selectedProject) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex items-center justify-center p-4"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="bg-gray-800 rounded-xl p-8 max-w-2xl w-full relative overflow-y-auto max-h-[90vh]"
                  >
                    <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <h2 className="text-2xl font-bold text-gray-100 mb-4">{selectedProject.name}</h2>

                    {/* Galería de Imágenes */}
                    {selectedProject.images && selectedProject.images.length > 0 && (
                      <div className="mb-6 relative">
                        <motion.img
                          key={currentImageIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          src={selectedProject.images[currentImageIndex]}
                          alt={`${selectedProject.name} image ${currentImageIndex + 1}`}
                          className="w-full h-auto rounded-lg object-cover max-h-80"
                        />
                        {selectedProject.images.length > 1 && (
                          <>
                            <button
                              onClick={goToPreviousImage}
                              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
                            >
                              &#8592;
                            </button>
                            <button
                              onClick={goToNextImage}
                              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
                            >
                              &#8594;
                            </button>
                            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                              {selectedProject.images.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={() => setCurrentImageIndex(index)}
                                  className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-indigo-400' : 'bg-gray-400'} border border-white`}
                                ></button>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    )}
                    {/* Fin de Galería de Imágenes */}

                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-300 mb-2">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags
                          .filter(tag => !tag.startsWith("Exists ="))
                          .map((tag) => (
                            <span key={tag} className="inline-block bg-indigo-700/30 text-indigo-400 text-xs font-medium px-3 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        {selectedProject.creationDate && (
                          <span className="inline-block bg-gray-700/30 text-gray-400 text-xs font-medium px-3 py-1 rounded-full">
                            Created: {new Date(selectedProject.creationDate).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-300 mb-2">Description</h3>
                      <p className="text-gray-400 text-lg">{selectedProject.description}</p>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-4"> {/* Añadido flex-wrap y gap para los botones */}
                      {selectedProject.githubUrl && (
                        <Link href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300">
                          View on GitHub
                        </Link>
                      )}
                      {selectedProject.websiteUrl && ( // <--- ¡NUEVO BOTÓN AQUI!
                        <Link href={selectedProject.websiteUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300">
                          Visit Website
                        </Link>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-20 text-center"
            >
              <h3 className="text-2xl font-semibold text-gray-300 mb-4">
                Want to collaborate or see what I&#39;m working on?
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
    </div>
  );
}