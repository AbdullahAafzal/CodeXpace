import React from "react";
import "./styles.css";

import Footer from "@/components/Footer";

function page() {
  return (
    <>
      <div className="min-h-screen bg-[#020618] text-white">
        <div className="relative overflow-hidden loyalific-banner">
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
          <div className="container mx-auto px-4">
            <div className=" text-start max-w-[550px]">
              <span className="inline-flex rounded-3xl px-4 py-1 text-xs font-semibold uppercase text-white border border-white">
                Case Study
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#a78bfa]">
                Loyalific
              </h1>
              <p className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl text-white">
                Build digital loyalty cards that keep customers coming back.
                Reward repeat visits, gain valuable customer insights, and send
                targeted updates and offers directly to your customer's mobile
                wallets.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/services/mobile-app-development"
                className="inline-flex items-center justify-center rounded-full bg-white w-fit px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-black-500/20 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[transparent] hover:text-white border hover:border-[1px solid #fff]"
              >
                Mobile App Development
              </a>
              <a
                href="/services/saas-development"
                className="inline-flex items-center justify-center rounded-full bg-white w-fit px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-black-500/20 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[transparent] hover:text-white border hover:border-[1px solid #fff]"
              >
                SAAS Development
              </a>
              <a
                href="/services/custom-software-development"
                className="inline-flex items-center justify-center rounded-full bg-white w-fit px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-black-500/20 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[transparent] hover:text-white border hover:border-[1px solid #fff]"
              >
                Custom Software Development
              </a>

              <a
                href="/"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[transparent] hover:text-white border hover:border-[1px solid #fff]"
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
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[transparent] hover:text-white border hover:border-[1px solid #fff]"
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
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[transparent] hover:text-white border hover:border-[1px solid #fff]"
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

        {/* Platform in Action Section */}
        <div className="bg-[#020618] border-t border-white/10 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                What Loyalific Delivers
              </h2>
              <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
                Powerful tools to manage loyalty programs, engage customers, and
                grow your business.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-[32px] border bg-[#060621] border-white/10 bg-white/5 p-6 transition hover:border-white/50">
                <div className="mb-6 rounded-3xl overflow-hidden border border-white/10">
                  <img
                    src="/assets/portfolio/loyalific/loyalty-card.jpeg"
                    alt="Digital Loyalty Cards"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-2xl bg-[#17A697]/15 flex items-center justify-center text-white font-bold">
                    01
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Digital Loyalty Cards
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Create and manage fully customizable digital loyalty cards
                  with flexible reward structures. Businesses can design branded
                  loyalty cards that motivate customers to return and unlock
                  rewards through ongoing engagement.
                </p>
              </div>

              <div className="rounded-[32px] border bg-[#060621] border-white/10 bg-white/5 p-6 transition hover:border-white/50">
                <div className="mb-6 rounded-3xl overflow-hidden border border-white/10">
                  <img
                    src="/assets/portfolio/loyalific/customer.jpeg"
                    alt="Customer Engagement"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-2xl bg-[#17A697]/15 flex items-center justify-center text-white font-bold">
                    02
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Customer Engagement
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Keep customers connected with real-time push notifications,
                  personalized promotions, and targeted campaigns. Loyalific
                  helps businesses communicate effectively and drive customer
                  activity through timely updates and reward reminders.
                </p>
              </div>

              <div className="rounded-[32px] border bg-[#060621] border-white/10 bg-white/5 p-6 transition hover:border-white/50">
                <div className="mb-6 rounded-3xl overflow-hidden border border-white/10">
                  <img
                    src="/assets/portfolio/loyalific/overview.jpeg"
                    alt="Customer Management"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-2xl bg-[#17A697]/15 flex items-center justify-center text-white font-bold">
                    03
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Customer Management
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Manage customer profiles, loyalty progress, reward history,
                  and engagement data from a centralized dashboard. Gain
                  valuable insights into customer behavior and improve retention
                  strategies with actionable data.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* A Closer Look Section */}
        <div className="bg-[#020618] py-20 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                A Closer Look At Loyalific
              </h2>
              <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
                Explore the platform's powerful dashboard and modules.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              <div className="rounded-2xl border bg-[#060621] border-white/10 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-out transform hover:-translate-y-2 hover:shadow-2xl hover:border-white/30 hover:bg-[#0e122f]">
                <div className="mb-4 rounded-xl overflow-hidden border border-white/10">
                  <img
                    src="/assets/portfolio/loyalific/overview.jpeg"
                    alt="Dashboard Overview"
                    className="w-full object-cover"
                  />
                </div>
                <h3 className="text-md font-semibold text-[#d6cff7] mb-2">
                  Dashboard Overview
                </h3>
                <p className="text-sm text-gray-300">
                  Get a complete overview of your loyalty program from a
                  centralized dashboard. Monitor loyalty cards, customers,
                  branches, staff members, and overall platform activity in
                  real-time.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#060621] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-out transform hover:-translate-y-2 hover:shadow-2xl hover:border-white/30 hover:bg-[#0e122f]">
                <div className="mb-4 rounded-xl overflow-hidden border border-white/10">
                  <img
                    src="/assets/portfolio/loyalific/loyalty-card.jpeg"
                    alt="Loyalty Cards"
                    className="w-full object-cover"
                  />
                </div>
                <h3 className="text-md font-semibold text-[#d6cff7] mb-2">
                  Loyalty Cards
                </h3>
                <p className="text-sm text-gray-300">
                  Design, customize, and manage digital stamp cards with
                  advanced reward settings, branding options, and wallet
                  integrations including Apple Wallet and Google Wallet support.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#060621] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-out transform hover:-translate-y-2 hover:shadow-2xl hover:border-white/30 hover:bg-[#0e122f]">
                <div className="mb-4 rounded-xl overflow-hidden border border-white/10">
                  <img
                    src="/assets/portfolio/loyalific/web-stamper.jpeg"
                    alt="Web Stamper"
                    className="w-full object-cover"
                  />
                </div>
                <h3 className="text-md font-semibold text-[#d6cff7] mb-2">
                  Web Stamper
                </h3>
                <p className="text-sm text-gray-300">
                  A QR-based stamping system that allows businesses to instantly
                  add or deduct loyalty stamps by scanning customer QR codes,
                  making the reward process seamless and efficient.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#060621] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-out transform hover:-translate-y-2 hover:shadow-2xl hover:border-white/30 hover:bg-[#0e122f]">
                <div className="mb-4 rounded-xl overflow-hidden border border-white/10">
                  <img
                    src="/assets/portfolio/loyalific/customer.jpeg"
                    alt="Customers"
                    className="w-full object-cover"
                  />
                </div>
                <h3 className="text-md font-semibold text-[#d6cff7] mb-2">
                  Customers
                </h3>
                <p className="text-sm text-gray-300">
                  Manage all loyalty program members from a single location.
                  View customer profiles, contact information, loyalty cards,
                  reward progress, stamp history, and engagement activity.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#060621] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-out transform hover:-translate-y-2 hover:shadow-2xl hover:border-white/30 hover:bg-[#0e122f]">
                <div className="mb-4 rounded-xl overflow-hidden border border-white/10">
                  <img
                    src="/assets/portfolio/loyalific/push-massage.jpeg"
                    alt="Push Messages"
                    className="w-full object-cover"
                  />
                </div>
                <h3 className="text-md font-semibold text-[#d6cff7] mb-2">
                  Push Messages
                </h3>
                <p className="text-sm text-gray-300">
                  Send real-time promotional messages, offers, and loyalty
                  updates directly to customers' devices to increase engagement
                  and encourage repeat purchases.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Challenges & Solutions Section */}
        <div className="bg-[#020618] py-24 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Challenges & Solution
              </h2>
              <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
                Turning Challenges Into Powerful Solutions
              </p>
            </div>

            <div className="challenge-solution-box grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              {/* Challenges Column */}
              <div className="space-y-5 max-w-[430px]">
                <h3 className="text-xl font-bold text-[#ff5555] mb-6">
                  Challenges
                </h3>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-7 w-7 rounded-full bg-[#ff5555]/20 border border-[#ff5555]/40">
                      <span className="text-[#ff5555] font-bold text-lg">
                        ✕
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Manual loyalty tracking was time-consuming and error-prone.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-7 w-7 rounded-full bg-[#ff5555]/20 border border-[#ff5555]/40">
                      <span className="text-[#ff5555] font-bold text-lg">
                        ✕
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Businesses lacked a digital solution for customer
                    engagement.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-7 w-7 rounded-full bg-[#ff5555]/20 border border-[#ff5555]/40">
                      <span className="text-[#ff5555] font-bold text-lg">
                        ✕
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    No effective way to send real-time updates and offers.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-7 w-7 rounded-full bg-[#ff5555]/20 border border-[#ff5555]/40">
                      <span className="text-[#ff5555] font-bold text-lg">
                        ✕
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Tracking customer activity and rewards was difficult.
                  </p>
                </div>
              </div>

              {/* Center Logo/Icon */}
              <div className="flex justify-center">
                <div className="relative flex items-center justify-center">
                  <img
                    src="/assets/portfolio/loyalific/logo.png"
                    alt="Loyalific Logo"
                    className="w-[150px]"
                  />
                </div>
              </div>

              {/* Solutions Column */}
              <div className="space-y-5 max-w-[430px]">
                <h3 className="text-xl font-bold text-[#1cb403] mb-6">
                  Our Solution
                </h3>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-7 w-7 rounded-full bg-[#1cb403]/20 border border-[#1cb403]/40">
                      <span className="text-[#1cb403] font-bold text-lg">
                        ✓
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Automated loyalty program with digital stamp cards.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-7 w-7 rounded-full bg-[#1cb403]/20 border border-[#1cb403]/40">
                      <span className="text-[#1cb403] font-bold text-lg">
                        ✓
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Real-time push notifications to boost engagement.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-7 w-7 rounded-full bg-[#1cb403]/20 border border-[#1cb403]/40">
                      <span className="text-[#1cb403] font-bold text-lg">
                        ✓
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    QR code based stamping for quick & easy rewards.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-7 w-7 rounded-full bg-[#1cb403]/20 border border-[#1cb403]/40">
                      <span className="text-[#1cb403] font-bold text-lg">
                        ✓
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Centralized dashboard to manage customers, cards, branches
                    and staff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer theme="loyalific" />
    </>
  );
}

export default page;
