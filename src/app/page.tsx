import Image from "next/image";
import Link from "next/link";
import Navbar from './_components/navbar/navbar';


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center px-4 py-24 space-y-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
          Hi, i&#39;m <span className="text-indigo-600">Alejandro</span>
        </h1>
        <p className="max-w-2xl text-gray-400 text-lg">
          Full stack developer.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a
            href="#"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-xl transition"
          >
            See my work
          </a>
          <a
            href="#"
            className="border border-indigo-500 hover:bg-indigo-600 hover:text-white text-indigo-300 font-medium px-6 py-3 rounded-xl transition"
          >
            Contact me
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Alejandro. All rights reserved.
      </footer>
    </div>
  );
}
