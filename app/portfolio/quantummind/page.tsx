import React from "react";
import "./styles.css";
import Footer from "@/components/Footer";
import SocialShare from "../../../components/SocialShare";


function QuantumMindPortfolio() {
  const challengeItems = [
    {
      title: "Anxiety Relief",
      subtitle: "Release the loop. Settle the body.",
      icon: "🌿",
    },
    {
      title: "Better Sleep",
      subtitle: "Fall faster. Stay there longer.",
      icon: "🌙",
    },
    {
      title: "Confidence Building",
      subtitle: "Rewrite the stories you tell yourself.",
      icon: "✨",
    },
    {
      title: "Emotional Release",
      subtitle: "Set down what you've been carrying.",
      icon: "💧",
    },
    {
      title: "Focus Enhancement",
      subtitle: "Find one thing, and stay with it.",
      icon: "◎",
    },
    {
      title: "Habit Formation",
      subtitle: "Change the default, not just the choice.",
      icon: "↻",
    },
  ];

  const solutionVideos = [
    {
      step: "01",
      title: "A short check-in",
      description:
        "In your own words. Whatever comes up first. Two minutes, tops.",
      video: "/assets/portfolio/quantum/short-checkin.mp4",
      poster: "/assets/portfolio/quantum/short-checkin.mp4",
    },
    {
      step: "02",
      title: "Your session, composed",
      description:
        "An Ericksonian script, anchored to a memory only you have. Voiced in the tone you picked.",
      video: "/assets/portfolio/quantum/session.mp4",
      poster: "/assets/portfolio/quantum/session.mp4",
    },
    {
      step: "03",
      title: "Press play, rest",
      description:
        "A breathing soundscape. A voice that sounds like it means it. Wake up lighter.",
      video: "/assets/portfolio/quantum/play.mp4",
      poster: "/assets/portfolio/quantum/play.mp4",
    },
  ];

  return (
    <div className="bg-white text-[#0d022c]">
      <div className="relative overflow-hidden bg-[#0d022c] py-16 md:py-0 md:h-[120vh] flex items-center">
        <a
          href="/"
          className="absolute z-10 top-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 p-2 text-sm font-semibold text-white shadow-lg shadow-black/30 backdrop-blur transition-all duration-300 hover:bg-white/15 hover:text-white hover:shadow-xl"
        >
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
        </a>
        <div className="container mx-auto px-4 flex gap-10 flex-col md:flex-row">
          <div className=" text-start w-full md:w-[60%]">
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
                className="inline-flex items-center justify-center rounded-full bg-white w-fit px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-black-500/20 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#0d022c] hover:text-white border hover:border-[1px solid #fff]"
              >
                Mobile App Development
              </a>
              <a
                href="/services/saas-development"
                className="inline-flex items-center justify-center rounded-full bg-white w-fit px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-black-500/20 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#0d022c] hover:text-white border hover:border-[1px solid #fff]"
              >
                SAAS Development
              </a>
              <a
                href="/services/ai-machine-learning-development"
                className="inline-flex items-center justify-center rounded-full bg-white w-fit px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-black-500/20 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#0d022c] hover:text-white border hover:border-[1px solid #fff]"
              >
                AI & Machine Learning Development
              </a>
              <SocialShare />
            </div>
          </div>
          <div className="banner-right w-full md:w-[40%]">
            <div className="">
              <video
                className="solution-video"
                src="/assets/portfolio/quantum/banner.mp4"
                poster="/assets/portfolio/quantum/banner.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4">
        <div>
          <div className="quamtumboxes">
            <div className="quantumbox1">
              <div className="quantumbox1-content">
                <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#0d022c]">
                  Executive Summary
                </h2>
                <p className="text-base lg:text-[20px] leading-8 text-[#76777a]">
                  Quantum Mind is an AI-powered hypnotherapy platform that
                  creates personalized therapeutic audio sessions based on a
                  user's real-life challenges, emotions, and goals. Unlike
                  traditional meditation applications that provide the same
                  content to every user, Quantum Mind generates customized
                  sessions tailored to each individual's mental and emotional
                  state. <br /> By combining artificial intelligence, clinical
                  hypnotherapy frameworks, NLP techniques, and adaptive
                  personalization, the platform delivers highly relevant
                  sessions designed to help users manage anxiety, improve sleep,
                  increase confidence, build better habits, and improve focus.
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

            <div className="quantumbox1">
              <div className="quantumbox2-content">
                <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#0d022c]">
                  The Challenge
                </h2>
                <p className="text-base lg:text-[20px] leading-8 text-[#76777a] pb-8">
                  Many individuals struggle to maintain consistent mental
                  wellness practices due to limited access to personalized
                  support, difficulty tracking emotional patterns, and a lack of
                  engaging self-improvement tools. Traditional solutions often
                  fail to provide real-time guidance and actionable insights.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {challengeItems.map((item) => (
                    <div
                      key={item.title}
                      className=" relative overflow-hidden rounded-[24px]  bg-[#0d022c] p-5 text-[18px] text-slate-300 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_18px_40px_rgba(17,18,48,0.35)]"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                          {item.icon}
                        </div>
                        <div className="min-w-0">
                          <span className="block font-medium text-slate-100">
                            {item.title}
                          </span>
                          {item.subtitle ? (
                            <span className="mt-1 block text-sm leading-6 text-slate-400">
                              {item.subtitle}
                            </span>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="quantumbox1" id="quantumbox2">
              <div className="quantumbox3-content">
                <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#0d022c]">
                  Our Solution
                </h2>
                <div className="solution-grid">
                  {solutionVideos.map((item) => (
                    <div key={item.step} className="solution-card">
                      <div className="solution-card-header">
                        <div className="solution-card-title-group">
                          <span className="solution-card-pill">
                            {item.step}
                          </span>
                          <span className="font-semibold text-white text-base">
                            {item.title}
                          </span>
                        </div>
                        <p className="solution-card-text">{item.description}</p>
                      </div>
                      <div className="solution-video-wrap">
                        <video
                          className="solution-video"
                          src={item.video}
                          poster={item.poster}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="auto"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="quantumbox1">
              <div className="quantumbox3-content">
                <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#0d022c]">
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
