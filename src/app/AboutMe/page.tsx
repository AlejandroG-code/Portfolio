import Navbar from '../_components/navbar/navbar';
import Image from "next/image";

export default function AboutMe() {
  return (
    <><Navbar></Navbar><section id="about" className="bg-gray-950 text-white py-20 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
              {/* Profile Image */}
              <div className="w-full md:w-1/3 flex justify-center">
                  <Image
                      src="/yo.jpg" // Asegúrate de que esté en /public
                      alt="Alejandro's photo"
                      width={300}
                      height={300}
                      className="rounded-full shadow-lg object-cover" />
              </div>

              {/* Info Content */}
              <div className="w-full md:w-2/3 space-y-10">
                  <div>
                      <h1 className="text-3xl sm:text-4xl font-bold text-indigo-500 flex items-center gap-2">
                          Hello, I'm Luis Alejandro Gonzalez Gil!{" "}
                      </h1>
                  </div>

                  {/* About Me */}
                  <div>
                      <h2 className="text-2xl font-semibold text-indigo-400 mb-2">About Me</h2>
                      <p className="text-gray-400 text-lg leading-relaxed">
                          I am a passionate Systems Engineering student at Universidad Vasco de Quiroga (UVAQ) with a strong desire to learn and work.
                          My passion for technology drives me to continuously seek new skills and knowledge, allowing me to grow both personally and professionally.
                      </p>
                  </div>

                  {/* Skills */}
                  <div>
                      <h3 className="text-2xl font-semibold text-indigo-400 mb-2">Skills</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                          <li><strong>Programming Languages:</strong> Python, Java</li>
                          <li><strong>Technical Knowledge:</strong> Networks, Operating Systems</li>
                          <li><strong>Languages:</strong> Spanish (Native), English (C1 certificated)</li>
                      </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                      <h3 className="text-2xl font-semibold text-indigo-400 mb-2">Achievements</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                          <li>2 first places in internal programming competitions</li>
                          <li>1 second place in internal programming competitions</li>
                          <li>Ranked 2367 out of 7091 globally in IEEExtreme 17.0</li>
                          <li>Ranked 1717 out of 5801 globally in IEEExtreme 18.0</li>
                          <li>Ranked 261 out of 19908 globally in IEEExtreme Practice Community</li>
                      </ul>
                  </div>

                  {/* Experience */}
                  <div>
                      <h3 className="text-2xl font-semibold text-indigo-400 mb-2">Experience</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                          <li>Experience teaching Java basics for beginners (6 months)</li>
                          <li>Experience teaching Python basics for beginners (6 months)</li>
                      </ul>
                  </div>

                  {/* Contact */}
                  <div>
                      <h3 className="text-2xl font-semibold text-indigo-400 mb-2">Contact</h3>
                      <p className="text-gray-300">
                          <strong>Email:</strong>{" "}
                          <a href="mailto:alejandro.g.engineer@gmail.com" className="text-indigo-400 hover:underline">
                              alejandro.g.engineer@gmail.com
                          </a>
                      </p>
                      <p className="text-gray-300">
                          <strong>LinkedIn:</strong>{" "}
                          <a
                              href="https://linkedin.com/in/alejandro-gonzalez-06b69031b"
                              target="_blank"
                              className="text-indigo-400 hover:underline"
                          >
                              linkedin.com/in/alejandro-gonzalez-06b69031b
                          </a>
                      </p>
                  </div>
              </div>
          </div>
      </section></>
  );
}