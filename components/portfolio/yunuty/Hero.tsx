"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/background.png)",
        }}
      >
        {/* Overlay to ensure text readability if needed */}
        <div className="absolute inset-0 bg-primary/20"></div>
      </div>

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

      {/* Content with slide animation */}
      <div className="relative z-10 container mx-auto px-6 pt-4 pb-0">
        <div className="max-w-4xl mx-auto text-center animate-slide-up-light">
          {/* Subtitle */}
          <div className="flex items-center justify-center gap-4 mb-2 mt-10">
            <Image
              src="/sub-title-left.svg"
              alt=""
              width={79}
              height={17}
              className="flex-shrink-0"
            />
            <p
              className="text-secondary font-medium tracking-wider uppercase font-poppins"
              style={{ fontSize: "11px" }}
            >
              Future-Ready ERP Solution
            </p>
            <Image
              src="/sub-title-right.svg"
              alt=""
              width={79}
              height={17}
              className="flex-shrink-0"
            />
          </div>

          {/* Main Headline */}
          <h1
            className="font-poppins font-medium text-white mb-3 leading-tight"
            style={{ fontSize: "55px" }}
          >
            The Future of Supply Chain Digital Transformation
          </h1>

          {/* Description */}
          <p
            className="text-gray-300 font-poppins mb-4 max-w-md mx-auto leading-relaxed"
            style={{ fontSize: "14px" }}
          >
            Refining an organization&apos;s comprehensive strategy for its
            entire supply chain and operational processes to promote growth,
            streamline operations, and ensure protection with a cloud-based ERP
            solution.
          </p>

          {/* Email Subscription Form */}
          {/* <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row max-w-xl mx-auto relative mb-4"
          >
            <div className="relative flex-1 w-full">
              <input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 pr-32 bg-white rounded-full text-gray-900 placeholder-gray-400 font-poppins focus:outline-none transition-all shadow-[0_0_15px_rgba(79,96,250,0.3)]"
                style={{ fontSize: "14px" }}
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-8 py-3 bg-indigo-900 text-white font-poppins font-semibold rounded-full hover:bg-indigo-800 transition-all shadow-[0_0_15px_rgba(79,96,250,0.3)]"
                style={{ fontSize: "14px" }}
              >
                Submit
              </button>
            </div>
          </form> */}

          {/* Dashboard Preview Image */}
          <div className="mt-4 mb-0">
            <Image
              src="/firstimageone.png"
              alt="Dashboard Preview"
              width={800}
              height={164}
              className="max-w-5xl mx-auto rounded-lg shadow-2xl"
              priority
            />
          </div>

          <div className="my-6 flex flex-wrap gap-3">
              <a
                href="/services/mobile-app-development"
                className="inline-flex items-center justify-center rounded-full bg-white w-fit px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-black-500/20 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#111230] hover:text-white border hover:border-[1px solid #fff]"
              >
                Mobile App Development
              </a>
              <a
                href="/services/saas-development"
                className="inline-flex items-center justify-center rounded-full bg-white w-fit px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-black-500/20 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#111230] hover:text-white border hover:border-[1px solid #fff]"
              >
                SAAS Development
              </a>
              <a
                href="/services/custom-software-development"
                className="inline-flex items-center justify-center rounded-full bg-white w-fit px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-black-500/20 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#111230] hover:text-white border hover:border-[1px solid #fff]"
              >
                Custom Software Development
              </a>

              <a
                href="/"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#111230] hover:text-white border hover:border-[1px solid #fff]"
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
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#111230] hover:text-white border hover:border-[1px solid #fff]"
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
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#111230] hover:text-white border hover:border-[1px solid #fff]"
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
    </section>
  );
}
