import React from "react";
import "./styles.css";
import Footer from "@/components/Footer";

function womengem() {
  return (
    <div className="min-h-screen bg-[#FFF9FB]">
      <div className="relative overflow-hidden womengem-banner">
        <a
          href="/"
          className="absolute z-10 top-5 left-5 rounded-full border border-[#d81f74]/25 bg-white/10 p-2 text-sm font-semibold text-[#d81f74] shadow-lg shadow-[#d81f74]/10 backdrop-blur transition-all duration-300 hover:bg-[#d81f74]/10 hover:text-white hover:border-[#d81f74] hover:shadow-[#d81f74]/20"
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
        <div className="container mx-auto px-4">
          <div className=" text-start max-w-[650px]">
            <span className="inline-flex rounded-3xl px-4 py-1 text-xs font-semibold uppercase text-[#d81f74] border border-[#d81f74]/20">
              Case Study
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
              Women's <br /> <span className="text-[#d81f74]">Gem</span>
            </h1>
            {/* <h4 className="mt-6 text-2xl font-semibold text-black">
              YOUR HEALTH. YOUR JOURNEY. ALL IN ONE PLACE.
            </h4> */}
            <p className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl text-black">
              Women's Gem is a comprehensive women's health platform that helps
              users track their cycles, symptoms, Kick countiee pregnancy
              journey, and weight goals with intelligent insights and a
              beautiful experience.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/services/mobile-app-development"
                className="inline-flex items-center justify-center rounded-full bg-white w-fit px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-black-500/20 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[transparent] hover:text-[#d81f74] border hover:border-[1px solid #fff]"
              >
                Mobile App Development
              </a>
              <a
                href="/services/saas-development"
                className="inline-flex items-center justify-center rounded-full bg-white w-fit px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-black-500/20 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[transparent] hover:text-[#d81f74] border hover:border-[1px solid #fff]"
              >
                SAAS Development
              </a>
              <a
                href="/services/custom-software-development"
                className="inline-flex items-center justify-center rounded-full bg-white w-fit px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-black-500/20 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[transparent] hover:text-[#d81f74] border hover:border-[1px solid #fff]"
              >
                Custom Software Development
              </a>

              <a
                href="/"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[transparent] hover:text-[#d81f74] border hover:border-[1px solid #fff]"
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
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[transparent] hover:text-[#d81f74] border hover:border-[1px solid #fff]"
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
                href="https://www.linkedin.com"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[transparent] hover:text-[#d81f74] border hover:border-[1px solid #fff]"
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
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <p className="text-3xl sm:text-4xl lg:text-5xl mb-10 font-semibold text-[#1e2a46]">
            Our Story
          </p>

          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr] items-start">
            <div className="max-w-[503px]">
              <blockquote className="text-3xl sm:text-3xl lg:text-4xl font-semibold text-[#d81f74]">
                “Every woman deserves a smarter way to understand her health.”
              </blockquote>
            </div>

            <div className="border-r border-[#e8b1cd] pr-8 vision">
              <h2 className="text-2xl font-semibold text-[#d81f74]">
                The Vision
              </h2>
              <p className="mt-4 text-base leading-7 text-[#333f5c]">
                To create a single, reliable platform where women can track,
                understand, and improve their health at every stage of life.
              </p>
              <div className="mt-6 h-1 w-14 rounded-full bg-[#d81f74]" />
            </div>

            <div className="pl-4 goal">
              <h2 className="text-2xl font-semibold text-[#d81f74]">
                The Goal
              </h2>
              <p className="mt-4 text-base leading-7 text-[#333f5c]">
                To bring together cycle tracking, symptom monitoring, pregnancy
                care, and weight management in one intelligent and beautifully
                designed app.
              </p>
              <div className="mt-6 h-1 w-14 rounded-full bg-[#d81f74]" />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <img
                src="/assets/portfolio/womengem/period.jpeg"
                alt="Screenshot 1"
                className="rounded-lg min-h-[230px]"
              />
              <div className="absolute top-0 right-0 max-w-[290px] h-full px-8 py-12">
                <h5 className="text-[#d81f74] text-lg font-bold">
                  Period Tracking
                </h5>
                <p className="text-black text-lg pt-2">
                  Beautiful calendar, accurate predictions, and complete cycle
                  tracking at your fingertips.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/portfolio/womengem/symptom.jpeg"
                alt="Screenshot 1"
                className="rounded-lg min-h-[230px]"
              />
              <div className="absolute top-0 right-0 max-w-[290px] h-full px-8 py-12">
                <h5 className="text-[#d81f74] text-lg font-bold">
                  Symptom Tracking
                </h5>
                <p className="text-black text-lg pt-2">
                  Log daily symptoms, set severity levels, and discover patterns
                  with powerful trend analysis.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/portfolio/womengem/pregnancy.jpeg"
                alt="Screenshot 1"
                className="rounded-lg min-h-[230px]"
              />
              <div className="absolute top-0 left-0 max-w-[290px] h-full px-8 py-12">
                <h5 className="text-[#d81f74] text-lg font-bold">
                  Pregnancy Tracking
                </h5>
                <p className="text-black text-lg pt-2">
                  Week-by-week guidance, kick counter, contraction timer, and
                  appointment management.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/portfolio/womengem/weight.jpeg"
                alt="Screenshot 1"
                className="rounded-lg min-h-[230px]"
              />
              <div className="absolute top-0 left-0 max-w-[290px] h-full px-8 py-12">
                <h5 className="text-[#d81f74] text-lg font-bold">
                  Weight Management
                </h5>
                <p className="text-black text-lg pt-2">
                  Track weight, monitor BMI set goals, and visualize your
                  progress with elegant charts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] items-center">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#ebd3e0]">
              <img
                src="/assets/portfolio/womengem/challenge.jpeg"
                alt="Without Women’s Gem"
                className="w-full h-full min-h-[350px]"
              />
              <div className="absolute inset-x-0 top-6 px-6">
                <h3 className="text-2xl font-semibold text-black">
                  Without Women’s Gem
                </h3>
              </div>
              <div className="absolute inset-x-0 top-20 px-6">
                <ul className="space-y-3 text-sm leading-7 text-black drop-shadow-lg">
                  <li>Using multiple apps for different needs</li>
                  <li>Manual tracking and missed predictions</li>
                  <li>No clear insights or correlations</li>
                  <li>Scattered data and confusion</li>
                  <li>Hard to stay consistent</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d81f74] text-lg font-semibold text-white shadow-[0_10px_30px_-20px_rgba(0,0,0,0.2)]">
                VS
              </span>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-[#f9d7e1]">
              <img
                src="/assets/portfolio/womengem/solution.jpeg"
                alt="With Women’s Gem"
                className="w-full h-full min-h-[350px]"
              />
              <div className="absolute inset-x-0 top-6 px-6">
                <h3 className="text-2xl font-semibold text-[#d81f74]">
                  With Women’s Gem
                </h3>
              </div>
              <div className="absolute inset-x-0 top-20 px-6">
                <ul className="space-y-3 text-sm leading-7 text-[#d81f74] drop-shadow-lg">
                  <li>All-in-one platform for complete care</li>
                  <li>Smart predictions and timely reminders</li>
                  <li>Personalized insights and trends</li>
                  <li>All your data in one secure place</li>
                  <li>Stay consistent, stay in control</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl sm:text-4xl font-semibold text-[#1e2a46] mb-12">
            Powerful Capabilities, Designed For You
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            <div className="rounded-[1.75rem] border border-[#f4d4e6] p-6 text-center shadow-[0_20px_40px_-28px_rgba(216,31,116,0.2)] transition-transform duration-300 ease-out transform hover:-translate-y-2 hover:shadow-2xl hover:border-[#d81f74]/30 hover:bg-white/5">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fde8f2] text-[#d81f74]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3v18" />
                  <path d="M5 7l7-4 7 4" />
                  <path d="M5 17l7 4 7-4" />
                  <path d="M5 12l7 4 7-4" />
                </svg>
              </div>
              <h3 className="mt-6 text-base font-semibold text-[#1e2a46]">
                AI-Powered Insights
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#5b4964]">
                Smart recommendations based on your health data and patterns.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[#f4d4e6] p-6 text-center shadow-[0_20px_40px_-28px_rgba(216,31,116,0.2)] transition-transform duration-300 ease-out transform hover:-translate-y-2 hover:shadow-2xl hover:border-[#d81f74]/30 hover:bg-white/5">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fde8f2] text-[#d81f74]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4" />
                  <path d="M8 2v4" />
                  <path d="M3 10h18" />
                </svg>
              </div>
              <h3 className="mt-6 text-base font-semibold text-[#1e2a46]">
                Reminders
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#5b4964]">
                Never miss important dates with smart reminders.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[#f4d4e6] p-6 text-center shadow-[0_20px_40px_-28px_rgba(216,31,116,0.2)] transition-transform duration-300 ease-out transform hover:-translate-y-2 hover:shadow-2xl hover:border-[#d81f74]/30 hover:bg-white/5">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e7f6f4] text-[#0f766e]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 22H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3l2-2h4l2 2h3a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2z" />
                  <path d="M8 13h8" />
                </svg>
              </div>
              <h3 className="mt-6 text-base font-semibold text-[#1e2a46]">
                Offline Support
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#5b4964]">
                Access your data anytime, even without an internet connection.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[#f4d4e6] p-6 text-center shadow-[0_20px_40px_-28px_rgba(216,31,116,0.2)] transition-transform duration-300 ease-out transform hover:-translate-y-2 hover:shadow-2xl hover:border-[#d81f74]/30 hover:bg-white/5">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef5fb] text-[#2c5282]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a4 4 0 0 0-8 0H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <path d="M8 12h8" />
                </svg>
              </div>
              <h3 className="mt-6 text-base font-semibold text-[#1e2a46]">
                Arabic (RTL) Support
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#5b4964]">
                Fully RTL-ready for a seamless experience in your language.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[#f4d4e6] p-6 text-center shadow-[0_20px_40px_-28px_rgba(216,31,116,0.2)] transition-transform duration-300 ease-out transform hover:-translate-y-2 hover:shadow-2xl hover:border-[#d81f74]/30 hover:bg-white/5">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fde8f2] text-[#d81f74]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3 className="mt-6 text-base font-semibold text-[#1e2a46]">
                Private & Secure
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#5b4964]">
                Your data is encrypted and your privacy is our top priority.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer theme="womengem" />
    </div>
  );
}

export default womengem;
