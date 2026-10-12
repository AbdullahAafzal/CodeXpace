"use client";
import React from "react";

const leadership = [
  {
    title: "Meenam Afzal",
    text: "Founder (USA)",
    image: "Meenam-afzal.png",
    linkedin: "https://www.linkedin.com/in/meenamafzalofficial/?isSelfProfile=false",
  },
  {
    title: "Ghada Al Ghrabawi",
    text: "Co-Founder (KSA)",
    image: "Ghada1.png",
    linkedin: "https://www.linkedin.com/in/ghada-ghrabawi-25413b183/?isSelfProfile=false",
  },
];

function GlobalLeadership() {

  return (
    <section className="relative w-full py-16 bg-black overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Our Global{" "}
          <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
            Leadership
          </span>
        </h2>

        {/* LEADERSHIP CARDS - CENTERED GRID */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl w-full">
            {leadership.map((person, index) => (
              <a
                key={index}
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#111] rounded-xl overflow-hidden border border-red-500/20 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 group"
              >

                <div className="relative w-full h-[350px] sm:h-[380px] lg:h-[400px] overflow-hidden bg-black/20 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={person.image}
                    alt={person.title}
                    className="w-full h-full object-cover object-[center_top]"
                  />
                </div>

                <div className="p-6 md:p-8 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {person.title}
                  </h3>
                  <p className="text-red-400 font-semibold text-base md:text-lg">
                    {person.text}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-4 py-2 text-sm font-semibold text-white transition-colors group-hover:bg-[#004182]">
                    LinkedIn
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-current"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.25 11.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-10h3v1.604c1.396-2.586 7-2.777 7 2.476v5.92z" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default GlobalLeadership;