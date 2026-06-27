import React from "react";
import "./styles.css";
import Footer from "@/components/Footer";

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
      <div className="relative overflow-hidden bg-[#0d022c] py-16 md:py-0 md:h-[100vh] flex items-center">
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

              <a
                href="/"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#0d022c] hover:text-white border hover:border-[1px solid #fff]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="h-5 w-5"
                >
                  <path
                    fill="currentColor"
                    d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z"
                  />
                </svg>
              </a>
              <a
                href="/"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#0d022c] hover:text-white border hover:border-[1px solid #fff]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="h-5 w-5"
                >
                  <path
                    fill="currentColor"
                    d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"
                  />
                </svg>
              </a>
              <a
                href="/"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#0d022c] hover:text-white border hover:border-[1px solid #fff]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="h-5 w-5"
                >
                  <path
                    fill="currentColor"
                    d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z"
                  />
                </svg>
              </a>
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

            {/* <div className="quantumbox1" id="quantumbox2">
              <div className="quantumbox1-img overflow-hidden rounded-3xl">
                <img
                  src="/assets/portfolio/quantum/overview.png"
                  alt="Summary img"
                  className="h-auto rounded-3xl"
                />
              </div>
              <div className="quantumbox1-content">
                <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#0d022c]">
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
            </div> */}

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

              {/* <div className="quantumbox2-img overflow-hidden rounded-3xl">
                <img
                  src="/assets/portfolio/quantum/challenge.png"
                  alt="Summary img"
                  className="h-auto rounded-3xl"
                />
              </div> */}
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

      {/* <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-[12px] text-center text-[#00d4ff] tracking-[2px] uppercase mb-3.5 font-medium">
            The framework
          </div>
          <h2 className="max-w-[760px] mx-auto text-center text-[28px] md:text-[36px] lg:text-[48px] font-normal tracking-[-1.2px] leading-[1.1] mb-3.5">
            Real hypnotherapy, written by an AI that knows what it's doing.
          </h2>
          <p className="text-[17px] text-[#9b9da2]  mx-auto text-center leading-[1.55] max-w-[740px] mb-12">
            Under the hood: a 10-step clinical intake, a script engine grounded
            in Ericksonian hypnotherapy and NLP, and an adaptive layer that
            learns which techniques actually shift your mood.
          </p>
          <div className="grid gap-10 items-center grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="bg-[#0d022c] border border-[#252d48] rounded-[22px] p-[28px] relative overflow-hidden min-h-[360px]">
              <svg
                width="100%"
                height="340"
                viewBox="0 0 520 340"
                className="block"
              >
                <defs>
                  <linearGradient id="flow-grad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stop-color="#7B6EF6"></stop>
                    <stop offset="1" stop-color="#00D4FF"></stop>
                  </linearGradient>
                </defs>
                <g>
                  <rect
                    x="40"
                    y="40"
                    width="140"
                    height="46"
                    rx="10"
                    fill="#1C2238"
                    stroke="#00D4FF"
                    stroke-opacity="0.4"
                  ></rect>
                  <text
                    x="54"
                    y="68"
                    fill="#E8EAF6"
                    font-size="13"
                    font-weight="500"
                    font-family="Inter"
                  >
                    Your words
                  </text>
                  <circle cx="170" cy="63" r="4" fill="#00D4FF"></circle>
                </g>
                <g>
                  <rect
                    x="40"
                    y="130"
                    width="140"
                    height="46"
                    rx="10"
                    fill="#1C2238"
                    stroke="#9D93FF"
                    stroke-opacity="0.4"
                  ></rect>
                  <text
                    x="54"
                    y="158"
                    fill="#E8EAF6"
                    font-size="13"
                    font-weight="500"
                    font-family="Inter"
                  >
                    Intake vectors
                  </text>
                  <circle cx="170" cy="153" r="4" fill="#9D93FF"></circle>
                </g>
                <g>
                  <rect
                    x="40"
                    y="220"
                    width="140"
                    height="46"
                    rx="10"
                    fill="#1C2238"
                    stroke="#9D93FF"
                    stroke-opacity="0.4"
                  ></rect>
                  <text
                    x="54"
                    y="248"
                    fill="#E8EAF6"
                    font-size="13"
                    font-weight="500"
                    font-family="Inter"
                  >
                    Mood history
                  </text>
                  <circle cx="170" cy="243" r="4" fill="#9D93FF"></circle>
                </g>
                <g>
                  <rect
                    x="240"
                    y="130"
                    width="140"
                    height="46"
                    rx="10"
                    fill="#1C2238"
                    stroke="#7B6EF6"
                    stroke-opacity="0.4"
                  ></rect>
                  <text
                    x="254"
                    y="158"
                    fill="#E8EAF6"
                    font-size="13"
                    font-weight="500"
                    font-family="Inter"
                  >
                    Technique selector
                  </text>
                  <circle cx="370" cy="153" r="4" fill="#7B6EF6"></circle>
                </g>
                <g>
                  <rect
                    x="240"
                    y="220"
                    width="140"
                    height="46"
                    rx="10"
                    fill="#1C2238"
                    stroke="#7B6EF6"
                    stroke-opacity="0.4"
                  ></rect>
                  <text
                    x="254"
                    y="248"
                    fill="#E8EAF6"
                    font-size="13"
                    font-weight="500"
                    font-family="Inter"
                  >
                    Script engine
                  </text>
                  <circle cx="370" cy="243" r="4" fill="#7B6EF6"></circle>
                </g>
                <g>
                  <rect
                    x="420"
                    y="170"
                    width="140"
                    height="46"
                    rx="10"
                    fill="#1C2238"
                    stroke="#00D4FF"
                    stroke-opacity="0.4"
                  ></rect>
                  <text
                    x="434"
                    y="198"
                    fill="#E8EAF6"
                    font-size="13"
                    font-weight="500"
                    font-family="Inter"
                  >
                    Your session
                  </text>
                  <circle cx="550" cy="193" r="4" fill="#00D4FF"></circle>
                </g>
                <path
                  d="M180,63 C210,63 210,153 240,153"
                  stroke="url(#flow-grad)"
                  stroke-width="1.5"
                  fill="none"
                  opacity="0.7"
                  stroke-dasharray="3 3"
                ></path>
                <path
                  d="M180,153 L240,153"
                  stroke="url(#flow-grad)"
                  stroke-width="1.5"
                  fill="none"
                  opacity="0.7"
                  stroke-dasharray="3 3"
                ></path>
                <path
                  d="M180,243 C210,243 210,243 240,243"
                  stroke="url(#flow-grad)"
                  stroke-width="1.5"
                  fill="none"
                  opacity="0.7"
                  stroke-dasharray="3 3"
                ></path>
                <path
                  d="M380,153 C400,153 400,193 420,193"
                  stroke="url(#flow-grad)"
                  stroke-width="1.5"
                  fill="none"
                  opacity="0.7"
                  stroke-dasharray="3 3"
                ></path>
                <path
                  d="M380,243 C400,243 400,193 420,193"
                  stroke="url(#flow-grad)"
                  stroke-width="1.5"
                  fill="none"
                  opacity="0.7"
                  stroke-dasharray="3 3"
                ></path>
                <text
                  x="196"
                  y="108"
                  fill="#5E6687"
                  font-size="10"
                  font-family="JetBrains Mono"
                >
                  embed
                </text>
                <text
                  x="390"
                  y="188"
                  fill="#5E6687"
                  font-size="10"
                  font-family="JetBrains Mono"
                >
                  render
                </text>
              </svg>
            </div>
            <div className="flex flex-col gap-[14px]">
              <div className="bg-[#0d022c] border border-[#252d48] rounded-[14px] py-[14px] px-[18px] flex gap-[14px] items-start">
                <div className="w-[7px] h-[7px] rounded-[4px] bg-[#00d4ff] mt-[8px] flex-shrink-0"></div>
                <div>
                  <div className="text-[14px] text-white font-semibold mb-[2px]">
                    Ericksonian induction
                  </div>
                  <div className="text-[13px] text-[#9b9da2] leading-[1.5]">
                    Indirect suggestion, metaphor, confusion technique.
                  </div>
                </div>
              </div>
              <div className="bg-[#161b2e] border border-[#252d48] rounded-[14px] py-[14px] px-[18px] flex gap-[14px] items-start">
                <div className="w-[7px] h-[7px] rounded-[4px] bg-[#00d4ff] mt-[8px] flex-shrink-0"></div>
                <div>
                  <div className="text-[14px] text-white font-semibold mb-[2px]">
                    NLP reframing
                  </div>
                  <div className="text-[13px] text-[#9b9da2] leading-[1.5]">
                    Swish pattern, parts integration, timeline therapy.
                  </div>
                </div>
              </div>
              <div className="bg-[#161b2e] border border-[#252d48] rounded-[14px] py-[14px] px-[18px] flex gap-[14px] items-start">
                <div className="w-[7px] h-[7px] rounded-[4px] bg-[#00d4ff] mt-[8px] flex-shrink-0"></div>
                <div>
                  <div className="text-[14px] text-white font-semibold mb-[2px]">
                    Resource anchoring
                  </div>
                  <div className="text-[13px] text-[#9b9da2] leading-[1.5]">
                    Uses a real memory you name in the intake.
                  </div>
                </div>
              </div>
              <div className="bg-[#161b2e] border border-[#252d48] rounded-[14px] py-[14px] px-[18px] flex gap-[14px] items-start">
                <div className="w-[7px] h-[7px] rounded-[4px] bg-[#00d4ff] mt-[8px] flex-shrink-0"></div>
                <div>
                  <div className="text-[14px] text-white font-semibold mb-[2px]">
                    Adaptive selection
                  </div>
                  <div className="text-[13px] text-[#9b9da2] leading-[1.5]">
                    Your mood Δ teaches the model what works for you.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-[12px] text-center text-[#00d4ff] tracking-[2px] uppercase mb-3.5 font-medium">
            How it works
          </div>
          <h2 className="max-w-[760px] mx-auto text-center text-[28px] md:text-[36px] lg:text-[48px] font-normal tracking-[-1.2px] leading-[1.1] mb-8">
            Three steps. Fifteen minutes. A session that fits you.
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-[#0d022c] border border-[#252d48] rounded-[20px] p-6 flex flex-col gap-4">
              <div className="flex items-baseline gap-3">
                <span className="text-[28px] font-normal text-[#00d4ff] tabular-nums">
                  01
                </span>
                <span className="text-[22px] text-white/90 font-semibold">
                  A short check-in
                </span>
              </div>
              <p className="text-[14px] text-[#9b9da2] leading-[1.55] min-h-[60px] m-0">
                In your own words. Whatever comes up first. Two minutes, tops.
              </p>
              <div className="flex justify-center mt-2">
                <div
                  style={{
                    width: "210px",
                    height: "434px",
                    position: "relative",
                    transformOrigin: "left top",
                  }}
                >
                  <div
                    style={{
                      width: "300px",
                      height: "620px",
                      transform: "scale(0.7)",
                      transformOrigin: "left top",
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                    }}
                  >
                    <div
                      style={{
                        width: "300px",
                        height: "620px",
                        position: "relative",
                        borderRadius: "42px",
                        overflow: "hidden",
                        background: "rgb(0, 0, 0)",
                        boxShadow:
                          "rgba(0, 0, 0, 0.5) 0px 30px 60px -20px, rgb(21, 23, 28) 0px 0px 0px 8px, rgb(42, 46, 56) 0px 0px 0px 9px",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "0px",
                          left: "0px",
                          right: "0px",
                          height: "44px",
                          zIndex: "50",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0px 28px",
                          pointerEvents: "none",
                          color: "rgb(255, 255, 255)",
                          fontSize: "13px",
                          fontWeight: "600",
                        }}
                      >
                        <span>9:41</span>
                        <div style={{ display: "flex", gap: "4px" }}>
                          <svg width="22" height="11" viewBox="0 0 22 11">
                            <rect
                              x="0.5"
                              y="0.5"
                              width="18"
                              height="10"
                              rx="2.5"
                              stroke="#fff"
                              stroke-opacity="0.4"
                              fill="none"
                            ></rect>
                            <rect
                              x="2"
                              y="2"
                              width="15"
                              height="7"
                              rx="1.5"
                              fill="#fff"
                            ></rect>
                          </svg>
                        </div>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          top: "10px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "100px",
                          height: "28px",
                          borderRadius: "18px",
                          background: "rgb(0, 0, 0)",
                          zIndex: "60",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          background: "rgb(11, 14, 26)",
                          color: "rgb(232, 234, 246)",
                          fontFamily: "Inter, system-ui, sans-serif",
                          position: "relative",
                          overflow: "hidden",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <div
                          style={{
                            flex: "1 1 0%",
                            overflow: "auto",
                            padding: "56px 18px 100px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              marginBottom: "22px",
                            }}
                          >
                            <div>
                              <div
                                style={{
                                  fontSize: "13px",
                                  color: "rgb(94, 102, 135)",
                                  marginBottom: "2px",
                                }}
                              >
                                Tuesday evening
                              </div>
                              <div
                                style={{
                                  fontSize: "22px",
                                  fontWeight: "700",
                                  letterSpacing: "-0.3px",
                                }}
                              >
                                Hi, Elena
                              </div>
                            </div>
                            <div
                              style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "20px",
                                background: "rgb(123, 110, 246)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "rgb(255, 255, 255)",
                                fontWeight: "600",
                                fontSize: "16px",
                              }}
                            >
                              E
                            </div>
                          </div>
                          <div
                            style={{
                              borderRadius: "20px",
                              overflow: "hidden",
                              cursor: "pointer",
                              marginBottom: "18px",
                              background:
                                "linear-gradient(135deg, rgb(26, 16, 64), rgb(15, 26, 58))",
                              border: "1px solid rgb(37, 45, 72)",
                              position: "relative",
                              padding: "20px",
                              minHeight: "140px",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                right: "-30px",
                                top: "-30px",
                                opacity: "0.9",
                              }}
                            >
                              <canvas
                                width="170"
                                height="170"
                                style={{
                                  width: "170px",
                                  height: "170px",
                                  borderRadius: "9999px",
                                  display: "block",
                                }}
                              ></canvas>
                            </div>
                            <div
                              style={{
                                position: "relative",
                                maxWidth: "200px",
                              }}
                            >
                              <div
                                style={{
                                  fontSize: "12px",
                                  color: "rgb(0, 212, 255)",
                                  letterSpacing: "1.2px",
                                  textTransform: "uppercase",
                                  marginBottom: "8px",
                                }}
                              >
                                Tonight's suggestion
                              </div>
                              <div
                                style={{
                                  fontSize: "20px",
                                  fontWeight: "600",
                                  lineHeight: "1.25",
                                  marginBottom: "6px",
                                }}
                              >
                                A session for winding down after a long day.
                              </div>
                              <div
                                style={{
                                  fontSize: "12px",
                                  color: "rgb(155, 163, 194)",
                                  marginBottom: "14px",
                                }}
                              >
                                Built in ~2 min from a short check-in
                              </div>
                              <div
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "6px",
                                  fontSize: "13px",
                                  color: "rgb(0, 212, 255)",
                                  fontWeight: "500",
                                }}
                              >
                                Start · 10 min free{" "}
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#00D4FF"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M5 12h14M13 6l6 6-6 6"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              gap: "10px",
                              marginBottom: "22px",
                            }}
                          >
                            <div
                              style={{
                                background: "rgb(22, 27, 46)",
                                borderRadius: "16px",
                                border: "1px solid rgb(37, 45, 72)",
                                padding: "14px 8px",
                                flex: "1 1 0%",
                                textAlign: "center",
                              }}
                            >
                              <div
                                style={{
                                  fontSize: "22px",
                                  fontWeight: "700",
                                  color: "rgb(232, 234, 246)",
                                  marginBottom: "2px",
                                }}
                              >
                                12
                              </div>
                              <div
                                style={{
                                  fontSize: "11px",
                                  color: "rgb(94, 102, 135)",
                                  fontWeight: "500",
                                }}
                              >
                                Sessions
                              </div>
                            </div>
                            <div
                              style={{
                                background: "rgb(22, 27, 46)",
                                borderRadius: "16px",
                                border: "1px solid rgb(37, 45, 72)",
                                padding: "14px 8px",
                                flex: "1 1 0%",
                                textAlign: "center",
                              }}
                            >
                              <div
                                style={{
                                  fontSize: "22px",
                                  fontWeight: "700",
                                  color: "rgb(232, 234, 246)",
                                  marginBottom: "2px",
                                }}
                              >
                                8
                              </div>
                              <div
                                style={{
                                  fontSize: "11px",
                                  color: "rgb(94, 102, 135)",
                                  fontWeight: "500",
                                }}
                              >
                                Day streak
                              </div>
                            </div>
                            <div
                              style={{
                                background: "rgb(22, 27, 46)",
                                borderRadius: "16px",
                                border: "1px solid rgb(37, 45, 72)",
                                padding: "14px 8px",
                                flex: "1 1 0%",
                                textAlign: "center",
                              }}
                            >
                              <div
                                style={{
                                  fontSize: "22px",
                                  fontWeight: "700",
                                  color: "rgb(232, 234, 246)",
                                  marginBottom: "2px",
                                }}
                              >
                                +2.4
                              </div>
                              <div
                                style={{
                                  fontSize: "11px",
                                  color: "rgb(94, 102, 135)",
                                  fontWeight: "500",
                                }}
                              >
                                Avg mood Δ
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "baseline",
                              marginBottom: "10px",
                            }}
                          >
                            <div
                              style={{ fontSize: "15px", fontWeight: "600" }}
                            >
                              Recent sessions
                            </div>
                            <div
                              style={{
                                fontSize: "12px",
                                color: "rgb(123, 110, 246)",
                                fontWeight: "500",
                              }}
                            >
                              View all
                            </div>
                          </div>
                          <div
                            style={{
                              background: "rgb(22, 27, 46)",
                              borderRadius: "16px",
                              border: "1px solid rgb(37, 45, 72)",
                              padding: "14px",
                              marginBottom: "10px",
                              cursor: "pointer",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                              }}
                            >
                              <div
                                style={{
                                  width: "44px",
                                  height: "44px",
                                  borderRadius: "12px",
                                  background: "rgba(52, 211, 153, 0.12)",
                                  border: "1px solid rgba(52, 211, 153, 0.3)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="#34D399"
                                  stroke="none"
                                >
                                  <path d="M6 4.5v15L20 12z"></path>
                                </svg>
                              </div>
                              <div style={{ flex: "1 1 0%", minWidth: "0px" }}>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    marginBottom: "2px",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  Releasing evening anxiety
                                </div>
                                <div
                                  style={{
                                    fontSize: "12px",
                                    color: "rgb(94, 102, 135)",
                                  }}
                                >
                                  Anxiety Relief · 22 min · 2d ago
                                </div>
                              </div>
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#5E6687"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M9 6l6 6-6 6"></path>
                              </svg>
                            </div>
                          </div>
                          <div
                            style={{
                              background: "rgb(22, 27, 46)",
                              borderRadius: "16px",
                              border: "1px solid rgb(37, 45, 72)",
                              padding: "14px",
                              marginBottom: "10px",
                              cursor: "pointer",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                              }}
                            >
                              <div
                                style={{
                                  width: "44px",
                                  height: "44px",
                                  borderRadius: "12px",
                                  background: "rgba(52, 211, 153, 0.12)",
                                  border: "1px solid rgba(52, 211, 153, 0.3)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="#34D399"
                                  stroke="none"
                                >
                                  <path d="M6 4.5v15L20 12z"></path>
                                </svg>
                              </div>
                              <div style={{ flex: "1 1 0%", minWidth: "0px" }}>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    marginBottom: "2px",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  Deep restorative sleep
                                </div>
                                <div
                                  style={{
                                    fontSize: "12px",
                                    color: "rgb(94, 102, 135)",
                                  }}
                                >
                                  Better Sleep · 38 min · 5d ago
                                </div>
                              </div>
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#5E6687"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M9 6l6 6-6 6"></path>
                              </svg>
                            </div>
                          </div>
                          <div
                            style={{
                              background: "rgb(22, 27, 46)",
                              borderRadius: "16px",
                              border: "1px solid rgb(37, 45, 72)",
                              padding: "14px",
                              marginBottom: "10px",
                              cursor: "pointer",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                              }}
                            >
                              <div
                                style={{
                                  width: "44px",
                                  height: "44px",
                                  borderRadius: "12px",
                                  background: "rgba(251, 191, 36, 0.1)",
                                  border: "1px solid rgba(251, 191, 36, 0.25)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#FBBF24"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"></path>
                                  <path d="M19 17l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"></path>
                                </svg>
                              </div>
                              <div style={{ flex: "1 1 0%", minWidth: "0px" }}>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    marginBottom: "2px",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  Confidence before a hard conversation
                                </div>
                                <div
                                  style={{
                                    fontSize: "12px",
                                    color: "rgb(94, 102, 135)",
                                  }}
                                >
                                  Confidence · 15 min · today
                                </div>
                              </div>
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#5E6687"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M9 6l6 6-6 6"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            bottom: "0px",
                            left: "0px",
                            right: "0px",
                            padding: "8px 6px 22px",
                            display: "flex",
                            justifyContent: "space-around",
                            background: "rgba(11, 14, 26, 0.85)",
                            backdropFilter: "blur(12px)",
                            borderTop: "1px solid rgb(37, 45, 72)",
                            zIndex: "10",
                          }}
                        >
                          <button
                            style={{
                              background: "transparent",
                              borderWidth: "medium",
                              borderStyle: "none",
                              borderColor: "currentcolor",
                              borderImage: "initial",
                              cursor: "pointer",
                              padding: "6px 10px",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: "3px",
                              color: "rgb(0, 212, 255)",
                            }}
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#00D4FF"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z"></path>
                            </svg>
                            <span
                              style={{ fontSize: "10px", fontWeight: "500" }}
                            >
                              Home
                            </span>
                          </button>
                          <button
                            style={{
                              background: "transparent",
                              borderWidth: "medium",
                              borderStyle: "none",
                              borderColor: "currentcolor",
                              borderImage: "initial",
                              cursor: "pointer",
                              padding: "6px 10px",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: "3px",
                              color: "rgb(94, 102, 135)",
                            }}
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#5E6687"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M2 12c2 0 2-4 4-4s2 8 4 8 2-12 4-12 2 8 4 8 2-4 4-4"></path>
                            </svg>
                            <span
                              style={{ fontSize: "10px", fontWeight: "500" }}
                            >
                              Sessions
                            </span>
                          </button>
                          <button
                            style={{
                              background: "transparent",
                              borderWidth: "medium",
                              borderStyle: "none",
                              borderColor: "currentcolor",
                              borderImage: "initial",
                              cursor: "pointer",
                              padding: "6px 10px",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: "3px",
                              color: "rgb(94, 102, 135)",
                            }}
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#5E6687"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M3 20V4M3 20h18"></path>
                              <rect x="7" y="13" width="3" height="5"></rect>
                              <rect x="12" y="9" width="3" height="9"></rect>
                              <rect x="17" y="5" width="3" height="13"></rect>
                            </svg>
                            <span
                              style={{ fontSize: "10px", fontWeight: "500" }}
                            >
                              Progress
                            </span>
                          </button>
                          <button
                            style={{
                              background: "transparent",
                              borderWidth: "medium",
                              borderStyle: "none",
                              borderColor: "currentcolor",
                              borderImage: "initial",
                              cursor: "pointer",
                              padding: "6px 10px",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: "3px",
                              color: "rgb(94, 102, 135)",
                            }}
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#5E6687"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <circle cx="6" cy="6" r="3"></circle>
                              <circle cx="18" cy="18" r="3"></circle>
                              <path d="M8.5 7.5c4 1 7 4 8 10"></path>
                            </svg>
                            <span
                              style={{ fontSize: "10px", fontWeight: "500" }}
                            >
                              Programs
                            </span>
                          </button>
                          <button
                            style={{
                              background: "transparent",
                              borderWidth: "medium",
                              borderStyle: "none",
                              borderColor: "currentcolor",
                              borderImage: "initial",
                              cursor: "pointer",
                              padding: "6px 10px",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: "3px",
                              color: "rgb(94, 102, 135)",
                            }}
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#5E6687"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <circle cx="12" cy="8" r="4"></circle>
                              <path d="M4 21a8 8 0 0 1 16 0"></path>
                            </svg>
                            <span
                              style={{ fontSize: "10px", fontWeight: "500" }}
                            >
                              You
                            </span>
                          </button>
                        </div>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          bottom: "7px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "120px",
                          height: "4px",
                          borderRadius: "2px",
                          background: "rgb(255, 255, 255)",
                          opacity: "0.85",
                          zIndex: "50",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#0d022c] border border-[#252d48] rounded-[20px] p-6 flex flex-col gap-4">
              <div className="flex items-baseline gap-3">
                <span className="text-[28px] font-[Fraunces,serif] font-normal text-[#00d4ff] tabular-nums">
                  02
                </span>
                <span className="text-[22px] text-white/90 font-semibold">
                  Your session, composed
                </span>
              </div>
              <p className="text-[14px] text-[#9b9da2] leading-[1.55] min-h-[60px] m-0">
                An Ericksonian script, anchored to a memory only you have.
                Voiced in the tone you picked.
              </p>
              <div className="flex justify-center mt-2">
                <div
                  style={{
                    width: "210px",
                    height: "434px",
                    position: "relative",
                    transformOrigin: "left top",
                  }}
                >
                  <div
                    style={{
                      width: "300px",
                      height: "620px",
                      transform: "scale(0.7)",
                      transformOrigin: "left top",
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                    }}
                  >
                    <div
                      style={{
                        width: "300px",
                        height: "620px",
                        position: "relative",
                        borderRadius: "42px",
                        overflow: "hidden",
                        background: "rgb(0, 0, 0)",
                        boxShadow:
                          "rgba(0, 0, 0, 0.5) 0px 30px 60px -20px, rgb(21, 23, 28) 0px 0px 0px 8px, rgb(42, 46, 56) 0px 0px 0px 9px",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "0px",
                          left: "0px",
                          right: "0px",
                          height: "44px",
                          zIndex: "50",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0px 28px",
                          pointerEvents: "none",
                          color: "rgb(255, 255, 255)",
                          fontSize: "13px",
                          fontWeight: "600",
                        }}
                      >
                        <span>9:41</span>
                        <div style={{ display: "flex", gap: "4px" }}>
                          <svg width="22" height="11" viewBox="0 0 22 11">
                            <rect
                              x="0.5"
                              y="0.5"
                              width="18"
                              height="10"
                              rx="2.5"
                              stroke="#fff"
                              stroke-opacity="0.4"
                              fill="none"
                            ></rect>
                            <rect
                              x="2"
                              y="2"
                              width="15"
                              height="7"
                              rx="1.5"
                              fill="#fff"
                            ></rect>
                          </svg>
                        </div>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          top: "10px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "100px",
                          height: "28px",
                          borderRadius: "18px",
                          background: "rgb(0, 0, 0)",
                          zIndex: "60",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          background: "rgb(11, 14, 26)",
                          color: "rgb(232, 234, 246)",
                          fontFamily: "Inter, system-ui, sans-serif",
                          position: "relative",
                          overflow: "hidden",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <div
                          style={{
                            padding: "54px 16px 12px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <button
                            style={{
                              width: "36px",
                              height: "36px",
                              borderRadius: "18px",
                              background: "rgb(22, 27, 46)",
                              border: "1px solid rgb(37, 45, 72)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            }}
                          >
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#E8EAF6"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M15 18l-6-6 6-6"></path>
                            </svg>
                          </button>
                          <div
                            style={{
                              flex: "1 1 0%",
                              textAlign: "center",
                              fontSize: "14px",
                              fontWeight: "600",
                            }}
                          >
                            Audio session
                          </div>
                          <div style={{ width: "36px" }}></div>
                        </div>
                        <div
                          style={{
                            flex: "1 1 0%",
                            overflow: "auto",
                            padding: "8px 18px 16px",
                          }}
                        >
                          <div
                            style={{
                              fontFamily: "Fraunces, serif",
                              fontSize: "24px",
                              fontWeight: "500",
                              letterSpacing: "-0.4px",
                              marginBottom: "4px",
                            }}
                          >
                            Pick a background
                          </div>
                          <div
                            style={{
                              fontSize: "13px",
                              color: "rgb(94, 102, 135)",
                              marginBottom: "18px",
                            }}
                          >
                            It breathes along with the narration.
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "8px",
                            }}
                          >
                            <button
                              style={{
                                background: "rgba(123, 110, 246, 0.08)",
                                border: "1.5px solid rgb(123, 110, 246)",
                                borderRadius: "12px",
                                padding: "12px 14px",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                textAlign: "left",
                                fontFamily: "inherit",
                                color: "rgb(232, 234, 246)",
                              }}
                            >
                              <div
                                style={{
                                  width: "34px",
                                  height: "34px",
                                  borderRadius: "8px",
                                  background: "rgb(123, 110, 246)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <svg width="20" height="16" viewBox="0 0 28 10">
                                  <rect
                                    x="0.1"
                                    y="1.755045461628432"
                                    width="0.8"
                                    height="6.489909076743136"
                                    rx="0.3"
                                    fill="#fff"
                                    opacity="0.0038331967390732857"
                                  ></rect>
                                  <rect
                                    x="1.1"
                                    y="2.9273273475397827"
                                    width="0.8"
                                    height="4.1453453049204345"
                                    rx="0.3"
                                    fill="#fff"
                                    opacity="0.044255135533152135"
                                  ></rect>
                                  <rect
                                    x="2.1"
                                    y="3.926705671485701"
                                    width="0.8"
                                    height="2.1465886570285977"
                                    rx="0.3"
                                    fill="#fff"
                                    opacity="0.1253874057473532"
                                  ></rect>
                                  <rect
                                    x="3.1"
                                    y="3.190346491532557"
                                    width="0.8"
                                    height="3.619307016934886"
                                    rx="0.3"
                                    fill="#fff"
                                    opacity="0.23998270331573868"
                                  ></rect>
                                  <rect
                                    x="4.1"
                                    y="2.941977530785147"
                                    width="0.8"
                                    height="4.116044938429706"
                                    rx="0.3"
                                    fill="#fff"
                                    opacity="0.3778045716000882"
                                  ></rect>
                                  <rect
                                    x="5.1"
                                    y="3.011804959999197"
                                    width="0.8"
                                    height="3.9763900800016057"
                                    rx="0.3"
                                    fill="#fff"
                                    opacity="0.5265417935747321"
                                  ></rect>
                                  <rect
                                    x="6.1"
                                    y="3.195847049566924"
                                    width="0.8"
                                    height="3.608305900866152"
                                    rx="0.3"
                                    fill="#fff"
                                    opacity="0.6729081161774737"
                                  ></rect>
                                  <rect
                                    x="7.1"
                                    y="3.444324125986536"
                                    width="0.8"
                                    height="3.1113517480269284"
                                    rx="0.3"
                                    fill="#fff"
                                    opacity="0.8038290717258759"
                                  ></rect>
                                  <rect
                                    x="8.1"
                                    y="3.8735807393498813"
                                    width="0.8"
                                    height="2.252838521300237"
                                    rx="0.3"
                                    fill="#fff"
                                    opacity="0.907609881176318"
                                  ></rect>
                                  <rect
                                    x="9.1"
                                    y="3.4011395525160113"
                                    width="0.8"
                                    height="3.1977208949679774"
                                    rx="0.3"
                                    fill="#fff"
                                    opacity="0.974980113905895"
                                  ></rect>
                                  <rect
                                    x="10.1"
                                    y="2.4660820475052887"
                                    width="0.8"
                                    height="5.067835904989423"
                                    rx="0.3"
                                    fill="#fff"
                                    opacity="0.9999217876703634"
                                  ></rect>
                                  <rect
                                    x="11.1"
                                    y="1.663118784325392"
                                    width="0.8"
                                    height="6.673762431349216"
                                    rx="0.3"
                                    fill="#fff"
                                    opacity="0.9802069370349049"
                                  ></rect>
                                  <rect
                                    x="12.1"
                                    y="1.4273697446048752"
                                    width="0.8"
                                    height="7.14526051079025"
                                    rx="0.3"
                                    fill="#fff"
                                    opacity="0.9175966308910153"
                                  ></rect>
                                  <rect
                                    x="13.1"
                                    y="2.0075363821746333"
                                    width="0.8"
                                    height="5.9849272356507335"
                                    rx="0.3"
                                    fill="#fff"
                                    opacity="0.8176836614172966"
                                  ></rect>
                                  <rect
                                    x="14.1"
                                    y="3.268370166333756"
                                    width="0.8"
                                    height="3.463259667332488"
                                    rx="0.3"
                                    fill="#fff"
                                    opacity="0.6893929566109314"
                                  ></rect>
                                  <rect
                                    x="15.1"
                                    y="3.273033178734567"
                                    width="0.8"
                                    height="3.453933642530866"
                                    rx="0.3"
                                    fill="#fff"
                                    opacity="0.544184343050302"
                                  ></rect>
                                  <rect
                                    x="16.1"
                                    y="2.1884900828507368"
                                    width="0.8"
                                    height="5.6230198342985265"
                                    rx="0.3"
                                    fill="#fff"
                                    opacity="0.3950288737170622"
                                  ></rect>
                                  <rect
                                    x="17.1"
                                    y="1.827308830515725"
                                    width="0.8"
                                    height="6.34538233896855"
                                    rx="0.3"
                                    fill="#fff"
                                    opacity="0.2552501624643062"
                                  ></rect>
                                  <rect
                                    x="18.1"
                                    y="2.158255418478646"
                                    width="0.8"
                                    height="5.683489163042708"
                                    rx="0.3"
                                    fill="#fff"
                                    opacity="0.13733422527210115"
                                  ></rect>
                                  <rect
                                    x="19.1"
                                    y="2.8585639896616843"
                                    width="0.8"
                                    height="4.282872020676631"
                                    rx="0.3"
                                    fill="#fff"
                                    opacity="0.05181414162656489"
                                  ></rect>
                                  <rect
                                    x="20.1"
                                    y="3.5667167736914482"
                                    width="0.8"
                                    height="2.866566452617103"
                                    rx="0.3"
                                    fill="#fff"
                                    opacity="0.006329165899444933"
                                  ></rect>
                                  <rect
                                    x="21.1"
                                    y="3.8942987899187886"
                                    width="0.8"
                                    height="2.2114024201624227"
                                    rx="0.3"
                                    fill="#fff"
                                    opacity="0.004942335506770867"
                                  ></rect>
                                  <rect
                                    x="22.1"
                                    y="3.479798384678041"
                                    width="0.8"
                                    height="3.0404032306439177"
                                    rx="0.3"
                                    fill="#fff"
                                    opacity="0.047777531877184864"
                                  ></rect>
                                  <rect
                                    x="23.1"
                                    y="3.0766394746933"
                                    width="0.8"
                                    height="3.8467210506134"
                                    rx="0.3"
                                    fill="#fff"
                                    opacity="0.13100841449290124"
                                  ></rect>
                                  <rect
                                    x="24.1"
                                    y="2.7015974567740284"
                                    width="0.8"
                                    height="4.596805086451943"
                                    rx="0.3"
                                    fill="#fff"
                                    opacity="0.24720021649232016"
                                  ></rect>
                                  <rect
                                    x="25.1"
                                    y="2.567064106278381"
                                    width="0.8"
                                    height="4.865871787443238"
                                    rx="0.3"
                                    fill="#fff"
                                    opacity="0.38597387025122976"
                                  ></rect>
                                  <rect
                                    x="26.1"
                                    y="2.9450775763698873"
                                    width="0.8"
                                    height="4.109844847260225"
                                    rx="0.3"
                                    fill="#fff"
                                    opacity="0.5349331385821386"
                                  ></rect>
                                  <rect
                                    x="27.1"
                                    y="3.9264475935422936"
                                    width="0.8"
                                    height="2.147104812915413"
                                    rx="0.3"
                                    fill="#fff"
                                    opacity="0.6807719336831539"
                                  ></rect>
                                </svg>
                              </div>
                              <div style={{ flex: "1 1 0%" }}>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    color: "rgb(157, 147, 255)",
                                  }}
                                >
                                  Rainfall on Cedar
                                </div>
                                <div
                                  style={{
                                    fontSize: "11px",
                                    color: "rgb(94, 102, 135)",
                                    marginTop: "2px",
                                  }}
                                >
                                  rain · nature · calming
                                </div>
                              </div>
                              <div
                                style={{
                                  width: "22px",
                                  height: "22px",
                                  borderRadius: "11px",
                                  background: "rgb(123, 110, 246)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#fff"
                                  stroke-width="2.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                              </div>
                            </button>
                            <button
                              style={{
                                background: "rgb(22, 27, 46)",
                                border: "1.5px solid rgb(37, 45, 72)",
                                borderRadius: "12px",
                                padding: "12px 14px",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                textAlign: "left",
                                fontFamily: "inherit",
                                color: "rgb(232, 234, 246)",
                              }}
                            >
                              <div
                                style={{
                                  width: "34px",
                                  height: "34px",
                                  borderRadius: "8px",
                                  background: "rgb(28, 34, 56)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <svg width="20" height="16" viewBox="0 0 28 10">
                                  <rect
                                    x="0.1"
                                    y="4"
                                    width="0.8"
                                    height="2"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.5"
                                  ></rect>
                                  <rect
                                    x="1.1"
                                    y="3.5287793710158177"
                                    width="0.8"
                                    height="2.9424412579683645"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.6477601033306698"
                                  ></rect>
                                  <rect
                                    x="2.1"
                                    y="2.9747029845030615"
                                    width="0.8"
                                    height="4.050594030993877"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.7823212366975176"
                                  ></rect>
                                  <rect
                                    x="3.1"
                                    y="2.4344073217420577"
                                    width="0.8"
                                    height="5.131185356515885"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.8916634548137417"
                                  ></rect>
                                  <rect
                                    x="4.1"
                                    y="2.1989914146721645"
                                    width="0.8"
                                    height="5.602017170655671"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9660195429836131"
                                  ></rect>
                                  <rect
                                    x="5.1"
                                    y="2.5714744149903153"
                                    width="0.8"
                                    height="4.8570511700193695"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9987474933020273"
                                  ></rect>
                                  <rect
                                    x="6.1"
                                    y="3.615551926848759"
                                    width="0.8"
                                    height="2.768896146302482"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9869238154390976"
                                  ></rect>
                                  <rect
                                    x="7.1"
                                    y="2.9689311224511696"
                                    width="0.8"
                                    height="4.062137755097661"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9316046833244369"
                                  ></rect>
                                  <rect
                                    x="8.1"
                                    y="1.7309475579064855"
                                    width="0.8"
                                    height="6.538104884187029"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.8377315902755755"
                                  ></rect>
                                  <rect
                                    x="9.1"
                                    y="1.173377492304962"
                                    width="0.8"
                                    height="7.653245015390076"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.7136899401169151"
                                  ></rect>
                                  <rect
                                    x="10.1"
                                    y="1.4719631926308123"
                                    width="0.8"
                                    height="7.056073614738375"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.5705600040299336"
                                  ></rect>
                                  <rect
                                    x="11.1"
                                    y="2.396518845337526"
                                    width="0.8"
                                    height="5.206962309324948"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.4211271529283759"
                                  ></rect>
                                  <rect
                                    x="12.1"
                                    y="3.480810779164209"
                                    width="0.8"
                                    height="3.0383784416715818"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.27873977835257396"
                                  ></rect>
                                  <rect
                                    x="13.1"
                                    y="3.686342689015294"
                                    width="0.8"
                                    height="2.627314621969412"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.15611692040801312"
                                  ></rect>
                                  <rect
                                    x="14.1"
                                    y="3.2538893405334"
                                    width="0.8"
                                    height="3.4922213189331996"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.0642121137932059"
                                  ></rect>
                                  <rect
                                    x="15.1"
                                    y="3.1165717371959887"
                                    width="0.8"
                                    height="3.7668565256080226"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.011234941167451495"
                                  ></rect>
                                  <rect
                                    x="16.1"
                                    y="3.1024978933695664"
                                    width="0.8"
                                    height="3.7950042132608672"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.0019176955820796593"
                                  ></rect>
                                  <rect
                                    x="17.1"
                                    y="3.1718629567653114"
                                    width="0.8"
                                    height="3.6562740864693772"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.037092658836133774"
                                  ></rect>
                                  <rect
                                    x="18.1"
                                    y="3.459617417130432"
                                    width="0.8"
                                    height="3.0807651657391357"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.11361775622200615"
                                  ></rect>
                                  <rect
                                    x="19.1"
                                    y="3.873281896731442"
                                    width="0.8"
                                    height="2.253436206537116"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.2246572287011812"
                                  ></rect>
                                  <rect
                                    x="20.1"
                                    y="2.8560459892373764"
                                    width="0.8"
                                    height="4.287908021525247"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.36029225090053707"
                                  ></rect>
                                  <rect
                                    x="21.1"
                                    y="1.8049364394660081"
                                    width="0.8"
                                    height="6.390127121067984"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.5084069502421749"
                                  ></rect>
                                  <rect
                                    x="22.1"
                                    y="1.1983797730296133"
                                    width="0.8"
                                    height="7.603240453940773"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.655770681756689"
                                  ></rect>
                                  <rect
                                    x="23.1"
                                    y="1.3967678426011751"
                                    width="0.8"
                                    height="7.20646431479765"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.7892198821940997"
                                  ></rect>
                                  <rect
                                    x="24.1"
                                    y="2.3989081319909533"
                                    width="0.8"
                                    height="5.202183736018093"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.8968339319245764"
                                  ></rect>
                                  <rect
                                    x="25.1"
                                    y="3.812241043552349"
                                    width="0.8"
                                    height="2.375517912895302"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9689999883873694"
                                  ></rect>
                                  <rect
                                    x="26.1"
                                    y="2.9331818303809785"
                                    width="0.8"
                                    height="4.133636339238043"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9992716726873025"
                                  ></rect>
                                  <rect
                                    x="27.1"
                                    y="2.268611048181206"
                                    width="0.8"
                                    height="5.462777903637588"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9849449054225432"
                                  ></rect>
                                </svg>
                              </div>
                              <div style={{ flex: "1 1 0%" }}>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    color: "rgb(232, 234, 246)",
                                  }}
                                >
                                  Tidepool
                                </div>
                                <div
                                  style={{
                                    fontSize: "11px",
                                    color: "rgb(94, 102, 135)",
                                    marginTop: "2px",
                                  }}
                                >
                                  ocean · ambient · sleep
                                </div>
                              </div>
                            </button>
                            <button
                              style={{
                                background: "rgb(22, 27, 46)",
                                border: "1.5px solid rgb(37, 45, 72)",
                                borderRadius: "12px",
                                padding: "12px 14px",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                textAlign: "left",
                                fontFamily: "inherit",
                                color: "rgb(232, 234, 246)",
                              }}
                            >
                              <div
                                style={{
                                  width: "34px",
                                  height: "34px",
                                  borderRadius: "8px",
                                  background: "rgb(28, 34, 56)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <svg width="20" height="16" viewBox="0 0 28 10">
                                  <rect
                                    x="0.1"
                                    y="4"
                                    width="0.8"
                                    height="2"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.5"
                                  ></rect>
                                  <rect
                                    x="1.1"
                                    y="3.5287793710158177"
                                    width="0.8"
                                    height="2.9424412579683645"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.6477601033306698"
                                  ></rect>
                                  <rect
                                    x="2.1"
                                    y="2.9747029845030615"
                                    width="0.8"
                                    height="4.050594030993877"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.7823212366975176"
                                  ></rect>
                                  <rect
                                    x="3.1"
                                    y="2.4344073217420577"
                                    width="0.8"
                                    height="5.131185356515885"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.8916634548137417"
                                  ></rect>
                                  <rect
                                    x="4.1"
                                    y="2.1989914146721645"
                                    width="0.8"
                                    height="5.602017170655671"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9660195429836131"
                                  ></rect>
                                  <rect
                                    x="5.1"
                                    y="2.5714744149903153"
                                    width="0.8"
                                    height="4.8570511700193695"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9987474933020273"
                                  ></rect>
                                  <rect
                                    x="6.1"
                                    y="3.615551926848759"
                                    width="0.8"
                                    height="2.768896146302482"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9869238154390976"
                                  ></rect>
                                  <rect
                                    x="7.1"
                                    y="2.9689311224511696"
                                    width="0.8"
                                    height="4.062137755097661"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9316046833244369"
                                  ></rect>
                                  <rect
                                    x="8.1"
                                    y="1.7309475579064855"
                                    width="0.8"
                                    height="6.538104884187029"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.8377315902755755"
                                  ></rect>
                                  <rect
                                    x="9.1"
                                    y="1.173377492304962"
                                    width="0.8"
                                    height="7.653245015390076"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.7136899401169151"
                                  ></rect>
                                  <rect
                                    x="10.1"
                                    y="1.4719631926308123"
                                    width="0.8"
                                    height="7.056073614738375"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.5705600040299336"
                                  ></rect>
                                  <rect
                                    x="11.1"
                                    y="2.396518845337526"
                                    width="0.8"
                                    height="5.206962309324948"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.4211271529283759"
                                  ></rect>
                                  <rect
                                    x="12.1"
                                    y="3.480810779164209"
                                    width="0.8"
                                    height="3.0383784416715818"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.27873977835257396"
                                  ></rect>
                                  <rect
                                    x="13.1"
                                    y="3.686342689015294"
                                    width="0.8"
                                    height="2.627314621969412"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.15611692040801312"
                                  ></rect>
                                  <rect
                                    x="14.1"
                                    y="3.2538893405334"
                                    width="0.8"
                                    height="3.4922213189331996"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.0642121137932059"
                                  ></rect>
                                  <rect
                                    x="15.1"
                                    y="3.1165717371959887"
                                    width="0.8"
                                    height="3.7668565256080226"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.011234941167451495"
                                  ></rect>
                                  <rect
                                    x="16.1"
                                    y="3.1024978933695664"
                                    width="0.8"
                                    height="3.7950042132608672"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.0019176955820796593"
                                  ></rect>
                                  <rect
                                    x="17.1"
                                    y="3.1718629567653114"
                                    width="0.8"
                                    height="3.6562740864693772"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.037092658836133774"
                                  ></rect>
                                  <rect
                                    x="18.1"
                                    y="3.459617417130432"
                                    width="0.8"
                                    height="3.0807651657391357"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.11361775622200615"
                                  ></rect>
                                  <rect
                                    x="19.1"
                                    y="3.873281896731442"
                                    width="0.8"
                                    height="2.253436206537116"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.2246572287011812"
                                  ></rect>
                                  <rect
                                    x="20.1"
                                    y="2.8560459892373764"
                                    width="0.8"
                                    height="4.287908021525247"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.36029225090053707"
                                  ></rect>
                                  <rect
                                    x="21.1"
                                    y="1.8049364394660081"
                                    width="0.8"
                                    height="6.390127121067984"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.5084069502421749"
                                  ></rect>
                                  <rect
                                    x="22.1"
                                    y="1.1983797730296133"
                                    width="0.8"
                                    height="7.603240453940773"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.655770681756689"
                                  ></rect>
                                  <rect
                                    x="23.1"
                                    y="1.3967678426011751"
                                    width="0.8"
                                    height="7.20646431479765"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.7892198821940997"
                                  ></rect>
                                  <rect
                                    x="24.1"
                                    y="2.3989081319909533"
                                    width="0.8"
                                    height="5.202183736018093"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.8968339319245764"
                                  ></rect>
                                  <rect
                                    x="25.1"
                                    y="3.812241043552349"
                                    width="0.8"
                                    height="2.375517912895302"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9689999883873694"
                                  ></rect>
                                  <rect
                                    x="26.1"
                                    y="2.9331818303809785"
                                    width="0.8"
                                    height="4.133636339238043"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9992716726873025"
                                  ></rect>
                                  <rect
                                    x="27.1"
                                    y="2.268611048181206"
                                    width="0.8"
                                    height="5.462777903637588"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9849449054225432"
                                  ></rect>
                                </svg>
                              </div>
                              <div style={{ flex: "1 1 0%" }}>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    color: "rgb(232, 234, 246)",
                                  }}
                                >
                                  Soft Drone 432Hz
                                </div>
                                <div
                                  style={{
                                    fontSize: "11px",
                                    color: "rgb(94, 102, 135)",
                                    marginTop: "2px",
                                  }}
                                >
                                  ambient · deep · grounding
                                </div>
                              </div>
                            </button>
                            <button
                              style={{
                                background: "rgb(22, 27, 46)",
                                border: "1.5px solid rgb(37, 45, 72)",
                                borderRadius: "12px",
                                padding: "12px 14px",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                textAlign: "left",
                                fontFamily: "inherit",
                                color: "rgb(232, 234, 246)",
                              }}
                            >
                              <div
                                style={{
                                  width: "34px",
                                  height: "34px",
                                  borderRadius: "8px",
                                  background: "rgb(28, 34, 56)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <svg width="20" height="16" viewBox="0 0 28 10">
                                  <rect
                                    x="0.1"
                                    y="4"
                                    width="0.8"
                                    height="2"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.5"
                                  ></rect>
                                  <rect
                                    x="1.1"
                                    y="3.5287793710158177"
                                    width="0.8"
                                    height="2.9424412579683645"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.6477601033306698"
                                  ></rect>
                                  <rect
                                    x="2.1"
                                    y="2.9747029845030615"
                                    width="0.8"
                                    height="4.050594030993877"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.7823212366975176"
                                  ></rect>
                                  <rect
                                    x="3.1"
                                    y="2.4344073217420577"
                                    width="0.8"
                                    height="5.131185356515885"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.8916634548137417"
                                  ></rect>
                                  <rect
                                    x="4.1"
                                    y="2.1989914146721645"
                                    width="0.8"
                                    height="5.602017170655671"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9660195429836131"
                                  ></rect>
                                  <rect
                                    x="5.1"
                                    y="2.5714744149903153"
                                    width="0.8"
                                    height="4.8570511700193695"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9987474933020273"
                                  ></rect>
                                  <rect
                                    x="6.1"
                                    y="3.615551926848759"
                                    width="0.8"
                                    height="2.768896146302482"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9869238154390976"
                                  ></rect>
                                  <rect
                                    x="7.1"
                                    y="2.9689311224511696"
                                    width="0.8"
                                    height="4.062137755097661"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9316046833244369"
                                  ></rect>
                                  <rect
                                    x="8.1"
                                    y="1.7309475579064855"
                                    width="0.8"
                                    height="6.538104884187029"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.8377315902755755"
                                  ></rect>
                                  <rect
                                    x="9.1"
                                    y="1.173377492304962"
                                    width="0.8"
                                    height="7.653245015390076"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.7136899401169151"
                                  ></rect>
                                  <rect
                                    x="10.1"
                                    y="1.4719631926308123"
                                    width="0.8"
                                    height="7.056073614738375"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.5705600040299336"
                                  ></rect>
                                  <rect
                                    x="11.1"
                                    y="2.396518845337526"
                                    width="0.8"
                                    height="5.206962309324948"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.4211271529283759"
                                  ></rect>
                                  <rect
                                    x="12.1"
                                    y="3.480810779164209"
                                    width="0.8"
                                    height="3.0383784416715818"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.27873977835257396"
                                  ></rect>
                                  <rect
                                    x="13.1"
                                    y="3.686342689015294"
                                    width="0.8"
                                    height="2.627314621969412"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.15611692040801312"
                                  ></rect>
                                  <rect
                                    x="14.1"
                                    y="3.2538893405334"
                                    width="0.8"
                                    height="3.4922213189331996"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.0642121137932059"
                                  ></rect>
                                  <rect
                                    x="15.1"
                                    y="3.1165717371959887"
                                    width="0.8"
                                    height="3.7668565256080226"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.011234941167451495"
                                  ></rect>
                                  <rect
                                    x="16.1"
                                    y="3.1024978933695664"
                                    width="0.8"
                                    height="3.7950042132608672"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.0019176955820796593"
                                  ></rect>
                                  <rect
                                    x="17.1"
                                    y="3.1718629567653114"
                                    width="0.8"
                                    height="3.6562740864693772"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.037092658836133774"
                                  ></rect>
                                  <rect
                                    x="18.1"
                                    y="3.459617417130432"
                                    width="0.8"
                                    height="3.0807651657391357"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.11361775622200615"
                                  ></rect>
                                  <rect
                                    x="19.1"
                                    y="3.873281896731442"
                                    width="0.8"
                                    height="2.253436206537116"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.2246572287011812"
                                  ></rect>
                                  <rect
                                    x="20.1"
                                    y="2.8560459892373764"
                                    width="0.8"
                                    height="4.287908021525247"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.36029225090053707"
                                  ></rect>
                                  <rect
                                    x="21.1"
                                    y="1.8049364394660081"
                                    width="0.8"
                                    height="6.390127121067984"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.5084069502421749"
                                  ></rect>
                                  <rect
                                    x="22.1"
                                    y="1.1983797730296133"
                                    width="0.8"
                                    height="7.603240453940773"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.655770681756689"
                                  ></rect>
                                  <rect
                                    x="23.1"
                                    y="1.3967678426011751"
                                    width="0.8"
                                    height="7.20646431479765"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.7892198821940997"
                                  ></rect>
                                  <rect
                                    x="24.1"
                                    y="2.3989081319909533"
                                    width="0.8"
                                    height="5.202183736018093"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.8968339319245764"
                                  ></rect>
                                  <rect
                                    x="25.1"
                                    y="3.812241043552349"
                                    width="0.8"
                                    height="2.375517912895302"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9689999883873694"
                                  ></rect>
                                  <rect
                                    x="26.1"
                                    y="2.9331818303809785"
                                    width="0.8"
                                    height="4.133636339238043"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9992716726873025"
                                  ></rect>
                                  <rect
                                    x="27.1"
                                    y="2.268611048181206"
                                    width="0.8"
                                    height="5.462777903637588"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9849449054225432"
                                  ></rect>
                                </svg>
                              </div>
                              <div style={{ flex: "1 1 0%" }}>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    color: "rgb(232, 234, 246)",
                                  }}
                                >
                                  Moonlit Piano
                                </div>
                                <div
                                  style={{
                                    fontSize: "11px",
                                    color: "rgb(94, 102, 135)",
                                    marginTop: "2px",
                                  }}
                                >
                                  piano · gentle · melodic
                                </div>
                              </div>
                            </button>
                            <button
                              style={{
                                background: "rgb(22, 27, 46)",
                                border: "1.5px solid rgb(37, 45, 72)",
                                borderRadius: "12px",
                                padding: "12px 14px",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                textAlign: "left",
                                fontFamily: "inherit",
                                color: "rgb(232, 234, 246)",
                              }}
                            >
                              <div
                                style={{
                                  width: "34px",
                                  height: "34px",
                                  borderRadius: "8px",
                                  background: "rgb(28, 34, 56)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <svg width="20" height="16" viewBox="0 0 28 10">
                                  <rect
                                    x="0.1"
                                    y="4"
                                    width="0.8"
                                    height="2"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.5"
                                  ></rect>
                                  <rect
                                    x="1.1"
                                    y="3.5287793710158177"
                                    width="0.8"
                                    height="2.9424412579683645"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.6477601033306698"
                                  ></rect>
                                  <rect
                                    x="2.1"
                                    y="2.9747029845030615"
                                    width="0.8"
                                    height="4.050594030993877"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.7823212366975176"
                                  ></rect>
                                  <rect
                                    x="3.1"
                                    y="2.4344073217420577"
                                    width="0.8"
                                    height="5.131185356515885"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.8916634548137417"
                                  ></rect>
                                  <rect
                                    x="4.1"
                                    y="2.1989914146721645"
                                    width="0.8"
                                    height="5.602017170655671"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9660195429836131"
                                  ></rect>
                                  <rect
                                    x="5.1"
                                    y="2.5714744149903153"
                                    width="0.8"
                                    height="4.8570511700193695"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9987474933020273"
                                  ></rect>
                                  <rect
                                    x="6.1"
                                    y="3.615551926848759"
                                    width="0.8"
                                    height="2.768896146302482"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9869238154390976"
                                  ></rect>
                                  <rect
                                    x="7.1"
                                    y="2.9689311224511696"
                                    width="0.8"
                                    height="4.062137755097661"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9316046833244369"
                                  ></rect>
                                  <rect
                                    x="8.1"
                                    y="1.7309475579064855"
                                    width="0.8"
                                    height="6.538104884187029"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.8377315902755755"
                                  ></rect>
                                  <rect
                                    x="9.1"
                                    y="1.173377492304962"
                                    width="0.8"
                                    height="7.653245015390076"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.7136899401169151"
                                  ></rect>
                                  <rect
                                    x="10.1"
                                    y="1.4719631926308123"
                                    width="0.8"
                                    height="7.056073614738375"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.5705600040299336"
                                  ></rect>
                                  <rect
                                    x="11.1"
                                    y="2.396518845337526"
                                    width="0.8"
                                    height="5.206962309324948"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.4211271529283759"
                                  ></rect>
                                  <rect
                                    x="12.1"
                                    y="3.480810779164209"
                                    width="0.8"
                                    height="3.0383784416715818"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.27873977835257396"
                                  ></rect>
                                  <rect
                                    x="13.1"
                                    y="3.686342689015294"
                                    width="0.8"
                                    height="2.627314621969412"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.15611692040801312"
                                  ></rect>
                                  <rect
                                    x="14.1"
                                    y="3.2538893405334"
                                    width="0.8"
                                    height="3.4922213189331996"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.0642121137932059"
                                  ></rect>
                                  <rect
                                    x="15.1"
                                    y="3.1165717371959887"
                                    width="0.8"
                                    height="3.7668565256080226"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.011234941167451495"
                                  ></rect>
                                  <rect
                                    x="16.1"
                                    y="3.1024978933695664"
                                    width="0.8"
                                    height="3.7950042132608672"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.0019176955820796593"
                                  ></rect>
                                  <rect
                                    x="17.1"
                                    y="3.1718629567653114"
                                    width="0.8"
                                    height="3.6562740864693772"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.037092658836133774"
                                  ></rect>
                                  <rect
                                    x="18.1"
                                    y="3.459617417130432"
                                    width="0.8"
                                    height="3.0807651657391357"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.11361775622200615"
                                  ></rect>
                                  <rect
                                    x="19.1"
                                    y="3.873281896731442"
                                    width="0.8"
                                    height="2.253436206537116"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.2246572287011812"
                                  ></rect>
                                  <rect
                                    x="20.1"
                                    y="2.8560459892373764"
                                    width="0.8"
                                    height="4.287908021525247"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.36029225090053707"
                                  ></rect>
                                  <rect
                                    x="21.1"
                                    y="1.8049364394660081"
                                    width="0.8"
                                    height="6.390127121067984"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.5084069502421749"
                                  ></rect>
                                  <rect
                                    x="22.1"
                                    y="1.1983797730296133"
                                    width="0.8"
                                    height="7.603240453940773"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.655770681756689"
                                  ></rect>
                                  <rect
                                    x="23.1"
                                    y="1.3967678426011751"
                                    width="0.8"
                                    height="7.20646431479765"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.7892198821940997"
                                  ></rect>
                                  <rect
                                    x="24.1"
                                    y="2.3989081319909533"
                                    width="0.8"
                                    height="5.202183736018093"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.8968339319245764"
                                  ></rect>
                                  <rect
                                    x="25.1"
                                    y="3.812241043552349"
                                    width="0.8"
                                    height="2.375517912895302"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9689999883873694"
                                  ></rect>
                                  <rect
                                    x="26.1"
                                    y="2.9331818303809785"
                                    width="0.8"
                                    height="4.133636339238043"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9992716726873025"
                                  ></rect>
                                  <rect
                                    x="27.1"
                                    y="2.268611048181206"
                                    width="0.8"
                                    height="5.462777903637588"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9849449054225432"
                                  ></rect>
                                </svg>
                              </div>
                              <div style={{ flex: "1 1 0%" }}>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    color: "rgb(232, 234, 246)",
                                  }}
                                >
                                  Forest at Dusk
                                </div>
                                <div
                                  style={{
                                    fontSize: "11px",
                                    color: "rgb(94, 102, 135)",
                                    marginTop: "2px",
                                  }}
                                >
                                  nature · warm
                                </div>
                              </div>
                            </button>
                            <button
                              style={{
                                background: "rgb(22, 27, 46)",
                                border: "1.5px solid rgb(37, 45, 72)",
                                borderRadius: "12px",
                                padding: "12px 14px",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                textAlign: "left",
                                fontFamily: "inherit",
                                color: "rgb(232, 234, 246)",
                              }}
                            >
                              <div
                                style={{
                                  width: "34px",
                                  height: "34px",
                                  borderRadius: "8px",
                                  background: "rgb(28, 34, 56)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <svg width="20" height="16" viewBox="0 0 28 10">
                                  <rect
                                    x="0.1"
                                    y="4"
                                    width="0.8"
                                    height="2"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.5"
                                  ></rect>
                                  <rect
                                    x="1.1"
                                    y="3.5287793710158177"
                                    width="0.8"
                                    height="2.9424412579683645"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.6477601033306698"
                                  ></rect>
                                  <rect
                                    x="2.1"
                                    y="2.9747029845030615"
                                    width="0.8"
                                    height="4.050594030993877"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.7823212366975176"
                                  ></rect>
                                  <rect
                                    x="3.1"
                                    y="2.4344073217420577"
                                    width="0.8"
                                    height="5.131185356515885"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.8916634548137417"
                                  ></rect>
                                  <rect
                                    x="4.1"
                                    y="2.1989914146721645"
                                    width="0.8"
                                    height="5.602017170655671"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9660195429836131"
                                  ></rect>
                                  <rect
                                    x="5.1"
                                    y="2.5714744149903153"
                                    width="0.8"
                                    height="4.8570511700193695"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9987474933020273"
                                  ></rect>
                                  <rect
                                    x="6.1"
                                    y="3.615551926848759"
                                    width="0.8"
                                    height="2.768896146302482"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9869238154390976"
                                  ></rect>
                                  <rect
                                    x="7.1"
                                    y="2.9689311224511696"
                                    width="0.8"
                                    height="4.062137755097661"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9316046833244369"
                                  ></rect>
                                  <rect
                                    x="8.1"
                                    y="1.7309475579064855"
                                    width="0.8"
                                    height="6.538104884187029"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.8377315902755755"
                                  ></rect>
                                  <rect
                                    x="9.1"
                                    y="1.173377492304962"
                                    width="0.8"
                                    height="7.653245015390076"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.7136899401169151"
                                  ></rect>
                                  <rect
                                    x="10.1"
                                    y="1.4719631926308123"
                                    width="0.8"
                                    height="7.056073614738375"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.5705600040299336"
                                  ></rect>
                                  <rect
                                    x="11.1"
                                    y="2.396518845337526"
                                    width="0.8"
                                    height="5.206962309324948"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.4211271529283759"
                                  ></rect>
                                  <rect
                                    x="12.1"
                                    y="3.480810779164209"
                                    width="0.8"
                                    height="3.0383784416715818"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.27873977835257396"
                                  ></rect>
                                  <rect
                                    x="13.1"
                                    y="3.686342689015294"
                                    width="0.8"
                                    height="2.627314621969412"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.15611692040801312"
                                  ></rect>
                                  <rect
                                    x="14.1"
                                    y="3.2538893405334"
                                    width="0.8"
                                    height="3.4922213189331996"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.0642121137932059"
                                  ></rect>
                                  <rect
                                    x="15.1"
                                    y="3.1165717371959887"
                                    width="0.8"
                                    height="3.7668565256080226"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.011234941167451495"
                                  ></rect>
                                  <rect
                                    x="16.1"
                                    y="3.1024978933695664"
                                    width="0.8"
                                    height="3.7950042132608672"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.0019176955820796593"
                                  ></rect>
                                  <rect
                                    x="17.1"
                                    y="3.1718629567653114"
                                    width="0.8"
                                    height="3.6562740864693772"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.037092658836133774"
                                  ></rect>
                                  <rect
                                    x="18.1"
                                    y="3.459617417130432"
                                    width="0.8"
                                    height="3.0807651657391357"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.11361775622200615"
                                  ></rect>
                                  <rect
                                    x="19.1"
                                    y="3.873281896731442"
                                    width="0.8"
                                    height="2.253436206537116"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.2246572287011812"
                                  ></rect>
                                  <rect
                                    x="20.1"
                                    y="2.8560459892373764"
                                    width="0.8"
                                    height="4.287908021525247"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.36029225090053707"
                                  ></rect>
                                  <rect
                                    x="21.1"
                                    y="1.8049364394660081"
                                    width="0.8"
                                    height="6.390127121067984"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.5084069502421749"
                                  ></rect>
                                  <rect
                                    x="22.1"
                                    y="1.1983797730296133"
                                    width="0.8"
                                    height="7.603240453940773"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.655770681756689"
                                  ></rect>
                                  <rect
                                    x="23.1"
                                    y="1.3967678426011751"
                                    width="0.8"
                                    height="7.20646431479765"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.7892198821940997"
                                  ></rect>
                                  <rect
                                    x="24.1"
                                    y="2.3989081319909533"
                                    width="0.8"
                                    height="5.202183736018093"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.8968339319245764"
                                  ></rect>
                                  <rect
                                    x="25.1"
                                    y="3.812241043552349"
                                    width="0.8"
                                    height="2.375517912895302"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9689999883873694"
                                  ></rect>
                                  <rect
                                    x="26.1"
                                    y="2.9331818303809785"
                                    width="0.8"
                                    height="4.133636339238043"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9992716726873025"
                                  ></rect>
                                  <rect
                                    x="27.1"
                                    y="2.268611048181206"
                                    width="0.8"
                                    height="5.462777903637588"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9849449054225432"
                                  ></rect>
                                </svg>
                              </div>
                              <div style={{ flex: "1 1 0%" }}>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    color: "rgb(232, 234, 246)",
                                  }}
                                >
                                  Wind Through Grass
                                </div>
                                <div
                                  style={{
                                    fontSize: "11px",
                                    color: "rgb(94, 102, 135)",
                                    marginTop: "2px",
                                  }}
                                >
                                  nature · minimal
                                </div>
                              </div>
                            </button>
                            <button
                              style={{
                                background: "rgb(22, 27, 46)",
                                border: "1.5px solid rgb(37, 45, 72)",
                                borderRadius: "12px",
                                padding: "12px 14px",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                textAlign: "left",
                                fontFamily: "inherit",
                                color: "rgb(232, 234, 246)",
                              }}
                            >
                              <div
                                style={{
                                  width: "34px",
                                  height: "34px",
                                  borderRadius: "8px",
                                  background: "rgb(28, 34, 56)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <svg width="20" height="16" viewBox="0 0 28 10">
                                  <rect
                                    x="0.1"
                                    y="4"
                                    width="0.8"
                                    height="2"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.5"
                                  ></rect>
                                  <rect
                                    x="1.1"
                                    y="3.5287793710158177"
                                    width="0.8"
                                    height="2.9424412579683645"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.6477601033306698"
                                  ></rect>
                                  <rect
                                    x="2.1"
                                    y="2.9747029845030615"
                                    width="0.8"
                                    height="4.050594030993877"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.7823212366975176"
                                  ></rect>
                                  <rect
                                    x="3.1"
                                    y="2.4344073217420577"
                                    width="0.8"
                                    height="5.131185356515885"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.8916634548137417"
                                  ></rect>
                                  <rect
                                    x="4.1"
                                    y="2.1989914146721645"
                                    width="0.8"
                                    height="5.602017170655671"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9660195429836131"
                                  ></rect>
                                  <rect
                                    x="5.1"
                                    y="2.5714744149903153"
                                    width="0.8"
                                    height="4.8570511700193695"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9987474933020273"
                                  ></rect>
                                  <rect
                                    x="6.1"
                                    y="3.615551926848759"
                                    width="0.8"
                                    height="2.768896146302482"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9869238154390976"
                                  ></rect>
                                  <rect
                                    x="7.1"
                                    y="2.9689311224511696"
                                    width="0.8"
                                    height="4.062137755097661"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9316046833244369"
                                  ></rect>
                                  <rect
                                    x="8.1"
                                    y="1.7309475579064855"
                                    width="0.8"
                                    height="6.538104884187029"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.8377315902755755"
                                  ></rect>
                                  <rect
                                    x="9.1"
                                    y="1.173377492304962"
                                    width="0.8"
                                    height="7.653245015390076"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.7136899401169151"
                                  ></rect>
                                  <rect
                                    x="10.1"
                                    y="1.4719631926308123"
                                    width="0.8"
                                    height="7.056073614738375"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.5705600040299336"
                                  ></rect>
                                  <rect
                                    x="11.1"
                                    y="2.396518845337526"
                                    width="0.8"
                                    height="5.206962309324948"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.4211271529283759"
                                  ></rect>
                                  <rect
                                    x="12.1"
                                    y="3.480810779164209"
                                    width="0.8"
                                    height="3.0383784416715818"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.27873977835257396"
                                  ></rect>
                                  <rect
                                    x="13.1"
                                    y="3.686342689015294"
                                    width="0.8"
                                    height="2.627314621969412"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.15611692040801312"
                                  ></rect>
                                  <rect
                                    x="14.1"
                                    y="3.2538893405334"
                                    width="0.8"
                                    height="3.4922213189331996"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.0642121137932059"
                                  ></rect>
                                  <rect
                                    x="15.1"
                                    y="3.1165717371959887"
                                    width="0.8"
                                    height="3.7668565256080226"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.011234941167451495"
                                  ></rect>
                                  <rect
                                    x="16.1"
                                    y="3.1024978933695664"
                                    width="0.8"
                                    height="3.7950042132608672"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.0019176955820796593"
                                  ></rect>
                                  <rect
                                    x="17.1"
                                    y="3.1718629567653114"
                                    width="0.8"
                                    height="3.6562740864693772"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.037092658836133774"
                                  ></rect>
                                  <rect
                                    x="18.1"
                                    y="3.459617417130432"
                                    width="0.8"
                                    height="3.0807651657391357"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.11361775622200615"
                                  ></rect>
                                  <rect
                                    x="19.1"
                                    y="3.873281896731442"
                                    width="0.8"
                                    height="2.253436206537116"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.2246572287011812"
                                  ></rect>
                                  <rect
                                    x="20.1"
                                    y="2.8560459892373764"
                                    width="0.8"
                                    height="4.287908021525247"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.36029225090053707"
                                  ></rect>
                                  <rect
                                    x="21.1"
                                    y="1.8049364394660081"
                                    width="0.8"
                                    height="6.390127121067984"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.5084069502421749"
                                  ></rect>
                                  <rect
                                    x="22.1"
                                    y="1.1983797730296133"
                                    width="0.8"
                                    height="7.603240453940773"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.655770681756689"
                                  ></rect>
                                  <rect
                                    x="23.1"
                                    y="1.3967678426011751"
                                    width="0.8"
                                    height="7.20646431479765"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.7892198821940997"
                                  ></rect>
                                  <rect
                                    x="24.1"
                                    y="2.3989081319909533"
                                    width="0.8"
                                    height="5.202183736018093"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.8968339319245764"
                                  ></rect>
                                  <rect
                                    x="25.1"
                                    y="3.812241043552349"
                                    width="0.8"
                                    height="2.375517912895302"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9689999883873694"
                                  ></rect>
                                  <rect
                                    x="26.1"
                                    y="2.9331818303809785"
                                    width="0.8"
                                    height="4.133636339238043"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9992716726873025"
                                  ></rect>
                                  <rect
                                    x="27.1"
                                    y="2.268611048181206"
                                    width="0.8"
                                    height="5.462777903637588"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9849449054225432"
                                  ></rect>
                                </svg>
                              </div>
                              <div style={{ flex: "1 1 0%" }}>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    color: "rgb(232, 234, 246)",
                                  }}
                                >
                                  Tibetan Bowls
                                </div>
                                <div
                                  style={{
                                    fontSize: "11px",
                                    color: "rgb(94, 102, 135)",
                                    marginTop: "2px",
                                  }}
                                >
                                  resonant · meditation
                                </div>
                              </div>
                            </button>
                            <button
                              style={{
                                background: "rgb(22, 27, 46)",
                                border: "1.5px solid rgb(37, 45, 72)",
                                borderRadius: "12px",
                                padding: "12px 14px",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                textAlign: "left",
                                fontFamily: "inherit",
                                color: "rgb(232, 234, 246)",
                              }}
                            >
                              <div
                                style={{
                                  width: "34px",
                                  height: "34px",
                                  borderRadius: "8px",
                                  background: "rgb(28, 34, 56)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <svg width="20" height="16" viewBox="0 0 28 10">
                                  <rect
                                    x="0.1"
                                    y="4"
                                    width="0.8"
                                    height="2"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.5"
                                  ></rect>
                                  <rect
                                    x="1.1"
                                    y="3.5287793710158177"
                                    width="0.8"
                                    height="2.9424412579683645"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.6477601033306698"
                                  ></rect>
                                  <rect
                                    x="2.1"
                                    y="2.9747029845030615"
                                    width="0.8"
                                    height="4.050594030993877"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.7823212366975176"
                                  ></rect>
                                  <rect
                                    x="3.1"
                                    y="2.4344073217420577"
                                    width="0.8"
                                    height="5.131185356515885"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.8916634548137417"
                                  ></rect>
                                  <rect
                                    x="4.1"
                                    y="2.1989914146721645"
                                    width="0.8"
                                    height="5.602017170655671"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9660195429836131"
                                  ></rect>
                                  <rect
                                    x="5.1"
                                    y="2.5714744149903153"
                                    width="0.8"
                                    height="4.8570511700193695"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9987474933020273"
                                  ></rect>
                                  <rect
                                    x="6.1"
                                    y="3.615551926848759"
                                    width="0.8"
                                    height="2.768896146302482"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9869238154390976"
                                  ></rect>
                                  <rect
                                    x="7.1"
                                    y="2.9689311224511696"
                                    width="0.8"
                                    height="4.062137755097661"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9316046833244369"
                                  ></rect>
                                  <rect
                                    x="8.1"
                                    y="1.7309475579064855"
                                    width="0.8"
                                    height="6.538104884187029"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.8377315902755755"
                                  ></rect>
                                  <rect
                                    x="9.1"
                                    y="1.173377492304962"
                                    width="0.8"
                                    height="7.653245015390076"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.7136899401169151"
                                  ></rect>
                                  <rect
                                    x="10.1"
                                    y="1.4719631926308123"
                                    width="0.8"
                                    height="7.056073614738375"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.5705600040299336"
                                  ></rect>
                                  <rect
                                    x="11.1"
                                    y="2.396518845337526"
                                    width="0.8"
                                    height="5.206962309324948"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.4211271529283759"
                                  ></rect>
                                  <rect
                                    x="12.1"
                                    y="3.480810779164209"
                                    width="0.8"
                                    height="3.0383784416715818"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.27873977835257396"
                                  ></rect>
                                  <rect
                                    x="13.1"
                                    y="3.686342689015294"
                                    width="0.8"
                                    height="2.627314621969412"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.15611692040801312"
                                  ></rect>
                                  <rect
                                    x="14.1"
                                    y="3.2538893405334"
                                    width="0.8"
                                    height="3.4922213189331996"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.0642121137932059"
                                  ></rect>
                                  <rect
                                    x="15.1"
                                    y="3.1165717371959887"
                                    width="0.8"
                                    height="3.7668565256080226"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.011234941167451495"
                                  ></rect>
                                  <rect
                                    x="16.1"
                                    y="3.1024978933695664"
                                    width="0.8"
                                    height="3.7950042132608672"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.0019176955820796593"
                                  ></rect>
                                  <rect
                                    x="17.1"
                                    y="3.1718629567653114"
                                    width="0.8"
                                    height="3.6562740864693772"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.037092658836133774"
                                  ></rect>
                                  <rect
                                    x="18.1"
                                    y="3.459617417130432"
                                    width="0.8"
                                    height="3.0807651657391357"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.11361775622200615"
                                  ></rect>
                                  <rect
                                    x="19.1"
                                    y="3.873281896731442"
                                    width="0.8"
                                    height="2.253436206537116"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.2246572287011812"
                                  ></rect>
                                  <rect
                                    x="20.1"
                                    y="2.8560459892373764"
                                    width="0.8"
                                    height="4.287908021525247"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.36029225090053707"
                                  ></rect>
                                  <rect
                                    x="21.1"
                                    y="1.8049364394660081"
                                    width="0.8"
                                    height="6.390127121067984"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.5084069502421749"
                                  ></rect>
                                  <rect
                                    x="22.1"
                                    y="1.1983797730296133"
                                    width="0.8"
                                    height="7.603240453940773"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.655770681756689"
                                  ></rect>
                                  <rect
                                    x="23.1"
                                    y="1.3967678426011751"
                                    width="0.8"
                                    height="7.20646431479765"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.7892198821940997"
                                  ></rect>
                                  <rect
                                    x="24.1"
                                    y="2.3989081319909533"
                                    width="0.8"
                                    height="5.202183736018093"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.8968339319245764"
                                  ></rect>
                                  <rect
                                    x="25.1"
                                    y="3.812241043552349"
                                    width="0.8"
                                    height="2.375517912895302"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9689999883873694"
                                  ></rect>
                                  <rect
                                    x="26.1"
                                    y="2.9331818303809785"
                                    width="0.8"
                                    height="4.133636339238043"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9992716726873025"
                                  ></rect>
                                  <rect
                                    x="27.1"
                                    y="2.268611048181206"
                                    width="0.8"
                                    height="5.462777903637588"
                                    rx="0.3"
                                    fill="#5E6687"
                                    opacity="0.9849449054225432"
                                  ></rect>
                                </svg>
                              </div>
                              <div style={{ flex: "1 1 0%" }}>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    color: "rgb(232, 234, 246)",
                                  }}
                                >
                                  Interstellar Hush
                                </div>
                                <div
                                  style={{
                                    fontSize: "11px",
                                    color: "rgb(94, 102, 135)",
                                    marginTop: "2px",
                                  }}
                                >
                                  ambient · deep
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                        <div
                          style={{
                            padding: "12px 18px 28px",
                            borderTop: "1px solid rgb(37, 45, 72)",
                          }}
                        >
                          <button
                            style={{
                              background: "rgb(123, 110, 246)",
                              color: "rgb(255, 255, 255)",
                              borderWidth: "medium",
                              borderStyle: "none",
                              borderColor: "currentcolor",
                              borderImage: "initial",
                              borderRadius: "12px",
                              padding: "13px 20px",
                              fontSize: "15px",
                              fontWeight: "600",
                              width: "100%",
                              cursor: "pointer",
                              boxShadow:
                                "rgba(123, 110, 246, 0.45) 0px 4px 18px",
                              fontFamily: "inherit",
                            }}
                          >
                            Generate audio · ~40s
                          </button>
                        </div>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          bottom: "7px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "120px",
                          height: "4px",
                          borderRadius: "2px",
                          background: "rgb(255, 255, 255)",
                          opacity: "0.85",
                          zIndex: "50",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#0d022c] border border-[#252d48] rounded-[20px] p-6 flex flex-col gap-4">
              <div className="flex items-baseline gap-3">
                <span className="text-[28px] font-[Fraunces,serif] font-normal text-[#00d4ff] tabular-nums">
                  03
                </span>
                <span className="text-[22px] text-white/90 font-semibold">
                  Press play, rest
                </span>
              </div>
              <p className="text-[14px] text-[#9b9da2] leading-[1.55] min-h-[60px] m-0">
                A breathing soundscape. A voice that sounds like it means it.
                Wake up lighter.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8px",
                }}
              >
                <div
                  style={{
                    width: "210px",
                    height: "434px",
                    position: "relative",
                    transformOrigin: "left top",
                  }}
                >
                  <div
                    style={{
                      width: "300px",
                      height: "620px",
                      transform: "scale(0.7)",
                      transformOrigin: "left top",
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                    }}
                  >
                    <div
                      style={{
                        width: "300px",
                        height: "620px",
                        position: "relative",
                        borderRadius: "42px",
                        overflow: "hidden",
                        background: "rgb(0, 0, 0)",
                        boxShadow:
                          "rgba(0, 0, 0, 0.5) 0px 30px 60px -20px, rgb(21, 23, 28) 0px 0px 0px 8px, rgb(42, 46, 56) 0px 0px 0px 9px",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "0px",
                          left: "0px",
                          right: "0px",
                          height: "44px",
                          zIndex: "50",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0px 28px",
                          pointerEvents: "none",
                          color: "rgb(255, 255, 255)",
                          fontSize: "13px",
                          fontWeight: "600",
                        }}
                      >
                        <span>9:41</span>
                        <div style={{ display: "flex", gap: "4px" }}>
                          <svg width="22" height="11" viewBox="0 0 22 11">
                            <rect
                              x="0.5"
                              y="0.5"
                              width="18"
                              height="10"
                              rx="2.5"
                              stroke="#fff"
                              stroke-opacity="0.4"
                              fill="none"
                            ></rect>
                            <rect
                              x="2"
                              y="2"
                              width="15"
                              height="7"
                              rx="1.5"
                              fill="#fff"
                            ></rect>
                          </svg>
                        </div>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          top: "10px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "100px",
                          height: "28px",
                          borderRadius: "18px",
                          background: "rgb(0, 0, 0)",
                          zIndex: "60",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          background: "rgb(11, 14, 26)",
                          color: "rgb(232, 234, 246)",
                          fontFamily: "Inter, system-ui, sans-serif",
                          position: "relative",
                          overflow: "hidden",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <div
                          style={{
                            padding: "54px 16px 12px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <button
                            style={{
                              width: "36px",
                              height: "36px",
                              borderRadius: "18px",
                              background: "rgb(22, 27, 46)",
                              border: "1px solid rgb(37, 45, 72)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            }}
                          >
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#E8EAF6"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M15 18l-6-6 6-6"></path>
                            </svg>
                          </button>
                          <div
                            style={{
                              flex: "1 1 0%",
                              textAlign: "center",
                              fontSize: "14px",
                              fontWeight: "600",
                            }}
                          >
                            Audio session
                          </div>
                          <div style={{ width: "36px" }}></div>
                        </div>
                        <div
                          style={{
                            flex: "1 1 0%",
                            display: "flex",
                            flexDirection: "column",
                            padding: "0px 20px 28px",
                          }}
                        >
                          <div
                            style={{
                              flex: "1 1 0%",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                              paddingTop: "20px",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                marginBottom: "28px",
                              }}
                            >
                              <canvas
                                width="240"
                                height="240"
                                style={{
                                  width: "240px",
                                  height: "240px",
                                  borderRadius: "9999px",
                                  display: "block",
                                }}
                              ></canvas>
                              <div
                                style={{
                                  position: "absolute",
                                  inset: "-20px",
                                  borderRadius: "9999px",
                                  background:
                                    "radial-gradient(circle, rgba(123, 110, 246, 0.133), transparent 70%)",
                                  pointerEvents: "none",
                                  zIndex: "-1",
                                }}
                              ></div>
                            </div>
                            <div
                              style={{
                                fontFamily: "Fraunces, serif",
                                fontSize: "22px",
                                fontWeight: "500",
                                letterSpacing: "-0.3px",
                                textAlign: "center",
                                lineHeight: "1.25",
                                maxWidth: "280px",
                                marginBottom: "6px",
                              }}
                            >
                              Releasing evening anxiety
                            </div>
                            <div
                              style={{
                                fontSize: "12px",
                                color: "rgb(94, 102, 135)",
                                marginBottom: "28px",
                              }}
                            >
                              Nora · Rainfall on Cedar · 25 min
                            </div>
                            <div
                              style={{
                                width: "100%",
                                maxWidth: "300px",
                                marginBottom: "24px",
                              }}
                            >
                              <div
                                style={{
                                  height: "3px",
                                  background: "rgb(37, 45, 72)",
                                  borderRadius: "2px",
                                  position: "relative",
                                  overflow: "hidden",
                                }}
                              >
                                <div
                                  style={{
                                    width: "34%",
                                    height: "100%",
                                    background:
                                      "linear-gradient(90deg, rgb(123, 110, 246), rgb(0, 212, 255))",
                                    transition: "width 0.1s",
                                  }}
                                ></div>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  fontSize: "11px",
                                  color: "rgb(94, 102, 135)",
                                  marginTop: "8px",
                                  fontVariantNumeric: "tabular-nums",
                                }}
                              >
                                <span>8:30</span>
                                <span>25:00</span>
                              </div>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "22px",
                              }}
                            >
                              <button
                                style={{
                                  background: "transparent",
                                  borderWidth: "medium",
                                  borderStyle: "none",
                                  borderColor: "currentcolor",
                                  borderImage: "initial",
                                  cursor: "pointer",
                                  padding: "10px",
                                }}
                              >
                                <svg
                                  width="26"
                                  height="26"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#9BA3C2"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M3 12a9 9 0 1 0 3-6.7"></path>
                                  <path d="M3 4v5h5"></path>
                                </svg>
                              </button>
                              <button
                                style={{
                                  width: "72px",
                                  height: "72px",
                                  borderRadius: "36px",
                                  background: "rgb(0, 212, 255)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  borderWidth: "medium",
                                  borderStyle: "none",
                                  borderColor: "currentcolor",
                                  borderImage: "initial",
                                  cursor: "pointer",
                                  boxShadow:
                                    "rgba(0, 212, 255, 0.4) 0px 8px 30px",
                                }}
                              >
                                <svg
                                  width="30"
                                  height="30"
                                  viewBox="0 0 24 24"
                                  fill="#0B0E1A"
                                  stroke="none"
                                >
                                  <path d="M6 4.5v15L20 12z"></path>
                                </svg>
                              </button>
                              <button
                                style={{
                                  background: "transparent",
                                  borderWidth: "medium",
                                  borderStyle: "none",
                                  borderColor: "currentcolor",
                                  borderImage: "initial",
                                  cursor: "pointer",
                                  padding: "10px",
                                }}
                              >
                                <svg
                                  width="26"
                                  height="26"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#9BA3C2"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M21 12a9 9 0 1 1-3-6.7"></path>
                                  <path d="M21 4v5h-5"></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-around",
                              padding: "20px 0px 6px",
                              borderTop: "1px solid rgb(37, 45, 72)",
                            }}
                          >
                            <button
                              style={{
                                background: "transparent",
                                borderWidth: "medium",
                                borderStyle: "none",
                                borderColor: "currentcolor",
                                borderImage: "initial",
                                cursor: "pointer",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "4px",
                                color: "rgb(155, 163, 194)",
                                fontSize: "11px",
                                padding: "8px",
                                fontFamily: "inherit",
                              }}
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#9BA3C2"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M12 3v13"></path>
                                <path d="M7 11l5 5 5-5"></path>
                                <path d="M4 21h16"></path>
                              </svg>
                              <span>Download</span>
                            </button>
                            <button
                              style={{
                                background: "transparent",
                                borderWidth: "medium",
                                borderStyle: "none",
                                borderColor: "currentcolor",
                                borderImage: "initial",
                                cursor: "pointer",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "4px",
                                color: "rgb(155, 163, 194)",
                                fontSize: "11px",
                                padding: "8px",
                                fontFamily: "inherit",
                              }}
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#9BA3C2"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <circle cx="18" cy="5" r="3"></circle>
                                <circle cx="6" cy="12" r="3"></circle>
                                <circle cx="18" cy="19" r="3"></circle>
                                <path d="M8.6 10.5l6.8-4M8.6 13.5l6.8 4"></path>
                              </svg>
                              <span>Share</span>
                            </button>
                            <button
                              style={{
                                background: "transparent",
                                borderWidth: "medium",
                                borderStyle: "none",
                                borderColor: "currentcolor",
                                borderImage: "initial",
                                cursor: "pointer",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "4px",
                                color: "rgb(155, 163, 194)",
                                fontSize: "11px",
                                padding: "8px",
                                fontFamily: "inherit",
                              }}
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#9BA3C2"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l8.8 8.8 8.8-8.8a5.5 5.5 0 0 0 0-7.8z"></path>
                              </svg>
                              <span>Mood</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          bottom: "7px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "120px",
                          height: "4px",
                          borderRadius: "2px",
                          background: "rgb(255, 255, 255)",
                          opacity: "0.85",
                          zIndex: "50",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Footer theme="quantummind" />
    </div>
  );
}

export default QuantumMindPortfolio;
