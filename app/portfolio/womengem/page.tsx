import React from "react";
import "./styles.css";

function womengem() {
  return (
    <div className="min-h-screen bg-[#FFF9FB]">
      <div className="relative overflow-hidden womengem-banner">
        <div className="container mx-auto px-4">
          <div className=" text-start max-w-[550px]">
            <span className="inline-flex rounded-3xl px-4 py-1 text-xs font-semibold uppercase text-white border border-white">
              Case Study
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#a78bfa]">
              WomenGem
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl text-white">
              WomenGem is a comprehensive platform designed specifically for
              women, offering resources, community support, and personalized
              content to empower and inspire. The platform features expert
              advice, wellness tools, and a supportive community to help women
              achieve their goals and live their best lives. Reward repeat
              visits, gain valuable customer insights, and send targeted updates
              and offers directly to your customer's mobile wallets. All without
              requiring them to download an app.
            </p>
          </div>
        </div>
      </div>

      <section className="py-24">
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

            <div className="border-r border-[#e8b1cd] pr-8">
              <h2 className="text-2xl font-semibold text-[#d81f74]">
                The Vision
              </h2>
              <p className="mt-4 text-base leading-7 text-[#333f5c]">
                To create a single, reliable platform where women can track,
                understand, and improve their health at every stage of life.
              </p>
              <div className="mt-6 h-1 w-14 rounded-full bg-[#d81f74]" />
            </div>

            <div className="pl-4">
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

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl sm:text-4xl font-semibold text-[#1e2a46] mb-12">
            Powerful Capabilities, Designed For You
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            <div className="rounded-[1.75rem] border border-[#f4d4e6] p-6 text-center shadow-[0_20px_40px_-28px_rgba(216,31,116,0.2)]">
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

            <div className="rounded-[1.75rem] border border-[#f4d4e6] p-6 text-center shadow-[0_20px_40px_-28px_rgba(216,31,116,0.2)]">
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

            <div className="rounded-[1.75rem] border border-[#f4d4e6] p-6 text-center shadow-[0_20px_40px_-28px_rgba(216,31,116,0.2)]">
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

            <div className="rounded-[1.75rem] border border-[#f4d4e6] p-6 text-center shadow-[0_20px_40px_-28px_rgba(216,31,116,0.2)]">
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

            <div className="rounded-[1.75rem] border border-[#f4d4e6] p-6 text-center shadow-[0_20px_40px_-28px_rgba(216,31,116,0.2)]">
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
