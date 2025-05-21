import Navbar from "../_components/navbar/navbar";

import React from "react";

export default function ContactPage() {
  return (
    <><Navbar></Navbar><section className="bg-gray-950 text-white py-20 px-6 min-h-screen">
          <div className="max-w-2xl mx-auto space-y-8 text-center">
              <h1 className="text-4xl font-bold text-indigo-500">Contact</h1>
              <p className="text-gray-400">
                  Feel free to reach out to me through any of the following platforms:
              </p>
              <ul className="space-y-4 text-lg text-gray-300">
                  <li>
                      <strong>Email:</strong>{" "}
                      <a
                          href="mailto:alejandro.g.engineer@gmail.com"
                          className="text-indigo-400 hover:underline"
                      >
                          alejandro.g.engineer@gmail.com
                      </a>
                  </li>
                  <li>
                      <strong>Cellphone:</strong>{" "}
                      <a
                          href="tel:+524434489639"
                          className="text-indigo-400 hover:underline"
                      >
                          +52 443 448 9639
                      </a>
                  </li>
                  <li>
                      <strong>LinkedIn:</strong>{" "}
                      <a
                          href="https://linkedin.com/in/alejandro-gonzalez-06b69031b"
                          target="_blank"
                          className="text-indigo-400 hover:underline"
                      >
                          linkedin.com/in/alejandro-gonzalez-06b69031b
                      </a>
                  </li>
                  <li>
                      <strong>GitHub:</strong>{" "}
                      <a
                          href="https://github.com/AlejandroG-code"
                          target="_blank"
                          className="text-indigo-400 hover:underline"
                      >
                          github.com/AlejandroG-code
                      </a>
                  </li>
                  <li>
                      <strong>Instagram:</strong>{" "}
                      <a
                          href="https://instagram.com/a1ex_glz"
                          target="_blank"
                          className="text-indigo-400 hover:underline"
                      >
                          @a1ex_glz
                      </a>
                  </li>
              </ul>
          </div>
      </section></>
  );
}