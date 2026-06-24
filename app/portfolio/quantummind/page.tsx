import React from "react";
import "./styles.css";
import Footer from "@/components/Footer";

function QuantumMindPortfolio() {
  return (
    <div className="min-h-screen bg-white text-[#111230]">
      <div className="relative overflow-hidden quantum-banner">
        <a
          href="/"
          className="absolute z-10 top-9 left-9 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/30 backdrop-blur transition-all duration-300 hover:bg-white/15 hover:text-white hover:shadow-xl"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#ffffff15] text-white border border-white/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              height="16"
              width="16"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </span>
          Back
        </a>
        <div className="container mx-auto px-4">
          <div className=" text-start">
            <div className="ht-banner-info text-start mb-5">
              <span className="inline-flex rounded-3xl px-4 py-1 text-xs font-semibold uppercase text-white border border-white">
                CASE STUDY
              </span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Quantum Mind
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl text-[#939ab4]">
              Transforming mental wellness through AI-powered guidance,
              personalized therapy sessions, emotion tracking, and
              habit-building tools. Quantum Mind empowers individuals to better
              understand their emotional health, reduce stress, and develop
              sustainable habits for a healthier and more balanced lifestyle.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/services/mobile-app-development"
                className="inline-flex items-center justify-center rounded-full bg-white w-fit px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-black-500/20 transition duration-300 hover:-translate-y-1"
              >
                Mobile App Development
              </a>
              <a
                href="/services/saas-development"
                className="inline-flex items-center justify-center rounded-full bg-white w-fit px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-black-500/20 transition duration-300 hover:-translate-y-1"
              >
                SAAS Development
              </a>
              <a
                href="/services/ai-machine-learning-development"
                className="inline-flex items-center justify-center rounded-full bg-white w-fit px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-black-500/20 transition duration-300 hover:-translate-y-1"
              >
                AI & Machine Learning Development
              </a>
            </div>
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
                  Quantum Mind was developed to redefine the way people approach
                  mental wellness by making personalized support more
                  accessible, engaging, and effective. The platform combines
                  AI-powered recommendations, guided wellness sessions, mood
                  tracking, and habit-building tools to help users better
                  understand their emotional well-being and develop healthier
                  daily routines. By providing personalized experiences and
                  actionable insights, Quantum Mind empowers individuals to take
                  control of their mental health, manage stress more
                  effectively, and achieve long-term personal growth through a
                  modern and user-friendly digital experience.
                </p>
              </div>
              <div className="quantumbox1-img overflow-hidden rounded-3xl">
                <img
                  src="/assets/portfolio/quantum/summary.png"
                  alt="Summary img"
                  className="h-auto rounded-3xl"
                />
              </div>
            </div>

            <div className="quantumbox1" id="quantumbox2">
              <div className="quantumbox1-img overflow-hidden rounded-3xl">
                <img
                  src="/assets/portfolio/quantum/overview.png"
                  alt="Summary img"
                  className="h-auto rounded-3xl"
                />
              </div>
              <div className="quantumbox1-content">
                <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#111230]">
                  Client Overview
                </h2>
                <p className="text-base lg:text-[20px] leading-8 text-[#76777a]">
                  Quantum Mind is an innovative mental wellness platform focused
                  on helping individuals improve their emotional well-being
                  through technology-driven solutions. Designed for users
                  seeking a more personalized approach to mental health, the
                  platform offers AI-guided support, progress tracking,
                  self-reflection tools, and interactive wellness sessions. Its
                  goal is to create a supportive environment where users can
                  build positive habits, strengthen emotional resilience, and
                  maintain a healthier balance in their everyday lives.
                </p>
              </div>
            </div>

            <div className="quantumbox1">
              <div className="quantumbox2-content">
                <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#111230]">
                  The Challenge
                </h2>
                <p className="text-base lg:text-[20px] leading-8 text-[#76777a] pb-8">
                  Many individuals struggle to maintain consistent mental
                  wellness practices due to limited access to personalized
                  support, difficulty tracking emotional patterns, and a lack of
                  engaging self-improvement tools. Traditional solutions often
                  fail to provide real-time guidance and actionable insights.
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
                      className="rounded-3xl bg-[#111230] shadow-[0px_0px_10px_2px_#9b99a8] p-5 text-slate-300"
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
                  To address the growing need for accessible and personalized
                  mental wellness support, we designed and developed Quantum
                  Mind as an intelligent digital platform powered by AI. The
                  solution provides users with tailored recommendations, guided
                  therapeutic experiences, emotion tracking, and progress
                  monitoring within a seamless and engaging interface. By
                  combining advanced technology with evidence-based wellness
                  practices, Quantum Mind delivers a personalized journey that
                  helps users stay motivated, track their growth, and make
                  meaningful improvements to their mental well-being over time.
                </p>
              </div>
            </div>

            <div className="quantumbox1">
              <div className="quantumbox3-content">
                <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#111230]">
                  Conclusion
                </h2>
                <p className="text-base lg:text-[20px] leading-8 text-[#76777a]">
                  Quantum Mind is more than a wellness application—it's a
                  personalized mental wellness companion. Through intelligent
                  insights, engaging experiences, and continuous emotional
                  support, the platform helps users develop healthier habits,
                  strengthen resilience, and achieve long-term well-being.
                </p>
              </div>
              <div className="quantumbox3-img overflow-hidden rounded-3xl">
                <img
                  src="/assets/portfolio/quantum/conclusion.jpeg"
                  alt="Summary img"
                  className="h-auto rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer theme="quantummind" />
    </div>
  );
}

export default QuantumMindPortfolio;
