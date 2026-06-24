import React from "react";
import "./styles.css";

function womengem() {
  return (
    <div className="min-h-screen bg-[#FFF9FB]">
      <div className="relative overflow-hidden womengem-banner">
        <div className="container mx-auto px-4">
          <div className=" text-start max-w-[650px]">
            <span className="inline-flex text-xs font-semibold uppercase text-[#d81f74] border-b-2 border-[#d81f74]">
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
    </div>
  );
}

export default womengem;
