"use client";
import React from "react";

const leadership = [
  { title: "Meenam Afzal", text: "Founder", image: "Meenam-afzal.jpeg" },
  { title: "Ghada Al Ghrabawi", text: "Co-Founder", image: "Ghada1.png" },
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
              <div
                key={index}
                className="bg-[#111] rounded-xl overflow-hidden border border-red-500/20 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 group"
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
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default GlobalLeadership;