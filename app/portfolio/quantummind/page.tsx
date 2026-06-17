import React from "react";
import "./styles.css";

export default function QuantumMindPortfolio() {
  return (
    <div className="min-h-screen bg-white text-[#111230]">
      <div className="relative overflow-hidden quantum-banner">
        <div className="container mx-auto px-4">
          <div className=" text-start">
            {/* <span className="inline-flex rounded-3xl px-4 py-1 text-xs font-semibold uppercase text-white border border-white">
              Case Study
            </span> */}
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Quantum Mind
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl text-[#939ab4]">
              Transforming mental wellness with AI-powered guidance and support
              through personalized sessions, behavior tracking, and immersive
              habit-building tools.
            </p>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4">
        <div>
          <div className="quamtumboxes">
            <div className="quantumbox1">
              <div className="quantumbox1-content">
                <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#111230]">
                  Executive Summary
                </h2>
                <p className="text-base lg:text-[20px] leading-8 text-[#76777a]">
                  Quantum Mind was built to make mental wellness support
                  accessible, personalized, and effective through Al-driven
                  recommendations, guided sessions, and real-time emotional
                  tracking.
                </p>
              </div>
              <div className="quantumbox1-img overflow-hidden rounded-3xl">
                <img
                  src="/assets/portfolio/quantum/summary6.jpeg"
                  alt="Summary img"
                  className="h-auto rounded-3xl"
                />
              </div>
            </div>

            <div className="quantumbox1" id="quantumbox2">
              <div className="quantumbox1-img overflow-hidden rounded-3xl">
                <img
                  src="/assets/portfolio/quantum/overview1.jpeg"
                  alt="Summary img"
                  className="h-auto rounded-3xl"
                />
              </div>
              <div className="quantumbox1-content">
                <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#111230]">
                  Client Overview
                </h2>
                <p className="text-base lg:text-[20px] leading-8 text-[#76777a]">
                  Quantum Mind is a digital mental wellness platform designed to
                  support individuals in managing stress, anxiety, improving
                  well-being.
                </p>
              </div>
            </div>

            <div className="quantumbox1">
              <div className="quantumbox2-content">
                <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#111230]">
                  The Challenge
                </h2>
                <p className="text-base lg:text-[20px] leading-8 text-[#76777a] pb-8">
                  People often struggle to manage stress, anxiety, and daily
                  emotions. Traditional solutions are either expensive, not
                  personalized, or not easily accessible.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Lack of personalized mental wellness guidance",
                    "Limited accessibility to professional support",
                    "Difficulty tracking emotions and progress",
                    "Need for an engaging, easy-to-use solution",
                    "Low motivation and inconsistent practice",
                    "High cost of traditional therapy and programs",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-3xl bg-slate-900/80 p-5 text-slate-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="quantumbox2-img overflow-hidden rounded-3xl">
                <img
                  src="/assets/portfolio/quantum/challenge.png"
                  alt="Summary img"
                  className="h-auto rounded-3xl"
                />
              </div>
            </div>

            <div className="quantumbox1" id="quantumbox2">
              <div className="quantumbox3-img overflow-hidden rounded-3xl">
                <img
                  src="/assets/portfolio/quantum/solution.png"
                  alt="Summary img"
                  className="h-auto rounded-3xl"
                />
              </div>

              <div className="quantumbox3-content">
                <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#111230]">
                  Our Solution
                </h2>
                <p className="text-base lg:text-[20px] leading-8 text-[#76777a]">
                  We developed Quantum Mind as an Al-powered platform that
                  offers personalized guidance, mood tracking, and
                  evidence-based sessions to help users improve their Ouatum
                  Mind mental well-being.
                </p>
              </div>
            </div>

            <div className="quantumbox1">
              <div className="quantumbox3-content">
                <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#111230]">
                  Conclusion
                </h2>
                <p className="text-base lg:text-[20px] leading-8 text-[#76777a]">
                  Quantum Mind is more than an app - it's a companion for better
                  mental health. By combining Al, personalised guidance, and
                  engaging design, we created a platform that empowers users to
                  live a calmer, healthier, and more balanced life.
                </p>
              </div>
              <div className="quantumbox3-img overflow-hidden rounded-3xl">
                <img
                  src="/assets/portfolio/quantum/solution.png"
                  alt="Summary img"
                  className="h-auto rounded-3xl"
                />
              </div>
            </div>

            {/* <div className="">
              <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#111230]">
                The Challenge
              </h2>
              <p className="text-base lg:text-[20px] leading-8 text-[#76777a]">
                Many people struggle to manage stress, anxiety, and emotional
                health. Traditional wellness solutions often feel impersonal,
                expensive, or difficult to use, so users need a more intuitive
                and motivating alternative.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Lack of personalized mental wellness guidance",
                  "Limited accessibility to professional support",
                  "Difficulty tracking emotions and progress",
                  "Need for an engaging, easy-to-use solution",
                  "Low motivation and inconsistent practice",
                  "High cost of traditional therapy and programs",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div> */}

            {/* <div className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-5">
                02 Client Overview
              </h2>
              <p className="text-base lg:text-[20px] leading-8 text-slate-300">
                Quantum Mind is a digital mental wellness platform built for individuals who need tailored support for stress, anxiety, sleep, and daily emotional balance. The platform combines AI-driven insights with evidence-based sessions to create an engaging and healing experience.
              </p>
            </div>

            

            <div className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-5">
                04 Our Solution
              </h2>
              <p className="text-base lg:text-[20px] leading-8 text-slate-300 mb-4">
                We created Quantum Mind as a responsive platform that offers AI-powered recommendations, mood tracking, guided meditation, and evidence-based content. The experience is built to be calm, modern, and supportive for users at every stage of their wellness journey.
              </p>
              <p className="text-base lg:text-[20px] leading-8 text-slate-300">
                The platform features a clean interface, habit reminders, progress analytics, and personalized session plans that help users stay consistent while improving focus, emotional awareness, and daily wellbeing.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-5">
                05 Conclusion
              </h2>
              <p className="text-base lg:text-[20px] leading-8 text-slate-300">
                Quantum Mind is more than an app — it is a compassionate companion for better mental health. By combining AI personalization with guided support and engaging design, the platform empowers users to live more balanced, mindful, and productive lives.
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
