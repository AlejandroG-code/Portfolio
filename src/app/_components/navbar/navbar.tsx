import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
    return (
        <nav className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="Logo"
              width={32}
              height={32}
            />
            <span className="text-xl font-bold">Alejandro</span>
          </div>
          <div className="hidden md:flex gap-6">
            <Link href="/" className="hover:text-indigo-300">Home</Link>
            <Link href="aboutme" className="hover:text-indigo-300">About Me</Link>
            <Link href="projects" className="hover:text-indigo-300">Projects</Link>
            <Link href="contact" className="hover:text-indigo-300">Contact</Link>
          </div>
        </div>
      </nav>
      )
    }