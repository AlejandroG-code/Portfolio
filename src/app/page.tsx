// app/page.tsx
'use client';

import { motion } from 'framer-motion';
import Navbar from './_components/navbar/navbar';
import Image from 'next/image';
import Background from './_components/background/background';
import React, { useState, useEffect } from 'react';
import { getCookie, setCookie } from 'cookies-next';

// Contenido de las páginas en formato consola
const consolePages = {
  aboutme: `
  ABOUT ALEJANDRO GONZALEZ
  ========================
  
  Name: Alejandro Gonzalez
  Role: Systems Engineering Student & Aspiring Full Stack Developer
  Location: Michoacan, Mexico
  
  EDUCATION
  ---------
  • Systems Engineering Student at Universidad Vasco de Quiroga (UVAQ)
  
  SKILLS
  ------
  • Programming Languages: Python, Java, JavaScript, HTML, CSS
  • Frameworks: React, Node.js, Tailwind CSS
  • Tools: Git, VS Code
  • Languages: Spanish (Native), English (C1), German (B1), Italian (A2), French (A2)
  
  EXPERIENCE
  ----------Y 
  • Programming Instructor: Taught basic Java and Python to university students.
  • Team Leader & Mentor: Guided students in programming and data systems projects.
  • Project Developer: Developed stock analysis tool and personal portfolio website.
  
  ACHIEVEMENTS
  ------------
  • Programming Contests: 🥇 3x First Place (Internal)
  • Programming Contests: 🥇 1x Second Place (Internal) 
  • IEEExtreme: Top rankings globally in multiple editions.
  🏆 IEEExtreme 17.0 – Top 54.5% Globally Rank 2,307 out of 4,231
  🏆 IEEExtreme 18.0 – Top 29.6% Globally Rank 1,717 out of 5,801</li>
  🏆 IEEExtreme Practice comunity – Top 9.4% Globally Rank 2,727 out of 29,001

  GOALS
  -----
  Short-term: Master Full Stack Development.
  Long-term: Work on large-scale systems and lead developer teams.
  
  `,
  projects: `
MY PROJECTS
===========

1. Personal Portfolio Website
   • Description: Interactive portfolio with console mode. Built with modern web technologies.
   • Tech: Next.js, TypeScript, TailwindCSS, Framer Motion
   • Link: (This view)

`,
contact: `
CONTACT INFORMATION
===================

Email: alejandro.g.engineer@gmail.com
Phone: +52 4434489639
LinkedIn: linkedin.com/in/alejandro-gonzalez-06b69031b
GitHub: github.com/AlejandroG-code
Instagram: instagram.com/a1ex_glz

Feel free to reach out for collaborations, opportunities, or just a chat!

`,
  help: `
AVAILABLE COMMANDS
=================

• console - Toggle console mode
• aboutme - Show about information
• projects - List my projects
• contact - Show contact details
• clear - Clear the console
• help - Show this help message

Navigate using these commands.
`
};

export default function Home() {
  const [isConsoleMode, setIsConsoleMode] = useState(false);
  const [isConsoleVisible, setIsConsoleVisible] = useState(false);
  const [consoleInput, setConsoleInput] = useState('');
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  // Initialize console mode from cookie
  useEffect(() => {
    const consoleModeCookie = getCookie('consoleMode');
    if (consoleModeCookie === 'true') {
      setIsConsoleMode(true);
      addOutput('Console mode activated. Type "help" for commands.');
    }
  }, []);

  const addOutput = (text: string) => {
    setConsoleOutput(prev => [...prev, text]);
  };

  const toggleConsole = () => {
    setIsConsoleVisible(!isConsoleVisible);
    setConsoleInput('');
    if (!isConsoleVisible) {
      addOutput('Console opened. Type "help" for commands.');
    }
  };

  const handleConsoleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConsoleInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setConsoleInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setConsoleInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else {
        setHistoryIndex(-1);
        setConsoleInput('');
      }
    }
  };

  const executeCommand = () => {
    const command = consoleInput.trim().toLowerCase();
    if (!command) return;




    // Add to history
    setCommandHistory(prev => [...prev, command]);
    setHistoryIndex(-1);

    setConsoleInput('');
    let output = '';

    switch (command) {
      case 'console':
        const newConsoleState = !isConsoleMode;
        setIsConsoleMode(newConsoleState);
        setCookie('consoleMode', newConsoleState.toString(), { path: '/' });
        output = `Console mode ${newConsoleState ? 'activated' : 'deactivated'}.`;
        break;
      case 'aboutme':
        addOutput(consolePages.aboutme);
        return;
      case 'projects':
        addOutput(consolePages.projects);
        return;
      case 'contact':
        addOutput(consolePages.contact);
        return;
      case 'help':
        output = consolePages.help;
        break;
      case 'clear':
        setConsoleOutput([]);
        return;
      default:
        output = `Command not found: ${command}. Type 'help' for available commands.`;
    }

    addOutput(`$ ${command}`);
    if (output) {
      addOutput(output);
    }
  };

  // Render Console Mode (75% de altura)
  if (isConsoleMode) {
    return (
      <div className="fixed inset-0 bg-black text-green-400 font-mono p-8">
        <div className="h-full max-w-6xl mx-auto flex flex-col">
          <div className="mb-4">
            <h1 className="text-2xl mb-2">ALEJANDRO GONZALEZ - TERMINAL</h1>
            <div className="text-md text-green-600">Last login: {new Date().toLocaleString()}</div>
          </div>
          
          {/* Área de terminal ampliada */}
          <div className="console-output h-[70vh] mb-6 overflow-y-auto border-2 border-green-600 p-4 rounded-lg bg-black/90">
          {consoleOutput.length === 0 && (
              <div className="text-green-500 text-lg">Type &apos;help&apos; to see available commands.</div>
            )}
            {consoleOutput.map((line, index) => (
              <div key={index} className="mb-2 text-lg">
                {line.split('\n').map((paragraph, i) => (
                  <div key={i}>{paragraph || <br />}</div>
                ))}
              </div>
            ))}
            <div className="flex items-start mt-4">
              <span className="text-green-500 mr-3 text-xl">$</span>
              <span className="animate-pulse text-xl">▋</span>
            </div>
          </div>
          
          {/* Input más grande */}
          <div className="flex items-center">
            <span className="text-green-500 mr-3 text-xl">$</span>
            <input
              type="text"
              className="console-input flex-grow bg-black text-green-400 p-3 text-lg focus:outline-none border-b-2 border-green-500"
              value={consoleInput}
              onChange={handleConsoleInputChange}
              onKeyDown={handleKeyDown}
              autoFocus
            />
            <button 
              onClick={executeCommand} 
              className="console-button ml-4 px-6 py-3 text-lg border-2 border-green-500 hover:bg-green-900/30"
            >
              EXECUTE
            </button>
          </div>
          
          <div className="mt-6 text-lg">
            <button 
              onClick={() => {
                setIsConsoleMode(false);
                setCookie('consoleMode', 'false', { path: '/' });
              }}
              className="text-green-500 hover:text-green-300"
            >
              [ Exit Console Mode ]
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Render Normal Mode
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
            Hi, I&apos;m <span className="text-indigo-400">Alejandro</span>
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

        <footer className="border-t border-gray-800 text-center py-6 text-sm text-gray-500">
          <div className="container mx-auto px-4">
            <p>© {new Date().getFullYear()} Alejandro Gonzalez. All rights reserved.</p>
            <p className="mt-1 text-xs text-gray-600">Made with passion</p>
          </div>
        </footer>

        {/* Console Button */}
        <div className="fixed bottom-4 right-4 z-50">
          <button 
            onClick={toggleConsole} 
            className="group relative border border-green-500 hover:border-green-400 text-green-300 hover:text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 text-sm font-mono"
          >
            <span className="relative z-10">{isConsoleVisible ? '[CLOSE]' : '[TERMINAL]'}</span>
            <span className="absolute inset-0 bg-green-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          </button>
        </div>

        {/* Console Interface */}
        {isConsoleVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-0 left-0 w-full bg-gray-900/95 p-4 border-t border-green-500 flex flex-col z-50 font-mono"
          >
            <div className="console-output mb-2 max-h-[60vh] overflow-y-auto text-green-400 text-sm">
              {consoleOutput.length === 0 && (
                <div className="text-green-600">Type &apos;help&apos; for available commands.</div>
              )}
              {consoleOutput.slice(-5).map((line, index) => (
                <div key={index}>
                  {line.split('\n').map((paragraph, i) => (
                    <div key={i}>{paragraph || <br />}</div>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">$</span>
              <input
                type="text"
                className="console-input flex-grow bg-gray-800 text-green-400 p-2 focus:outline-none border-b border-green-500"
                value={consoleInput}
                onChange={handleConsoleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Enter command..."
              />
              <button 
                onClick={executeCommand} 
                className="console-button ml-2 px-3 py-1 border border-green-500 hover:bg-green-900/30 text-sm"
              >
                RUN
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}