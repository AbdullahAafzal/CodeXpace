import React from "react";
import "./styles.css";

function page() {
  return (
    <div className="min-h-screen bg-white text-[#020618]">
      <div className="bg-[#020618]">
        <div className="loyalific-banner relative py-8 container mx-auto px-4 grid items-center grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="loyalific-banner-text">
            <div className=" text-start">
              <span className="inline-flex rounded-3xl px-4 py-1 text-xs font-semibold uppercase text-white border border-white">
                Case Study
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                Building Loyalific. <br />
                Driving Growth.
              </h1>
              <p className="mt-6 text-white max-w-2xl text-base sm:text-lg lg:text-xl">
                Loyalific helped a leading business transform their customer
                loyalty experience with a smart, flexible and easy-to-use
                platform.
              </p>
            </div>
          </div>
          <div className="loyalific-banner-image">
            <img
              src="/assets/portfolio/loyalific/banner.png"
              alt="Loyalific Banner"
              className="h-auto w-full rounded-3xl"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* CLIENT OVERVIEW */}
          <div className="flex flex-col border border-[#020618] rounded-3xl p-4 shadow-sm hover:shadow-[0_4px_10px_rgba(0,0,0,0.4)] transition duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#020618] flex items-center justify-center p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 640 640"
                >
                  <path d="M320 80C377.4 80 424 126.6 424 184C424 241.4 377.4 288 320 288C262.6 288 216 241.4 216 184C216 126.6 262.6 80 320 80zM96 152C135.8 152 168 184.2 168 224C168 263.8 135.8 296 96 296C56.2 296 24 263.8 24 224C24 184.2 56.2 152 96 152zM0 480C0 409.3 57.3 352 128 352C140.8 352 153.2 353.9 164.9 357.4C132 394.2 112 442.8 112 496L112 512C112 523.4 114.4 534.2 118.7 544L32 544C14.3 544 0 529.7 0 512L0 480zM521.3 544C525.6 534.2 528 523.4 528 512L528 496C528 442.8 508 394.2 475.1 357.4C486.8 353.9 499.2 352 512 352C582.7 352 640 409.3 640 480L640 512C640 529.7 625.7 544 608 544L521.3 544zM472 224C472 184.2 504.2 152 544 152C583.8 152 616 184.2 616 224C616 263.8 583.8 296 544 296C504.2 296 472 263.8 472 224zM160 496C160 407.6 231.6 336 320 336C408.4 336 480 407.6 480 496L480 512C480 529.7 465.7 544 448 544L192 544C174.3 544 160 529.7 160 512L160 496z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-2xl font-bold uppercase text-[#020618]">
                Client Overview
              </h3>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              Loyalific is a loyalty and customer engagement platform that helps
              businesses of all sizes build connections with their customers
              through rewards, points and personalized experiences.
            </p>
            <div className="mt-8">
              <img
                src="/assets/portfolio/loyalific/client.png"
                alt="Client Overview"
                className="w-full rounded-2xl"
              />
            </div>
          </div>

          {/* THE CHALLENGE */}
          <div className="flex flex-col border border-[#020618] rounded-3xl p-8 shadow-sm hover:shadow-[0_4px_10px_rgba(0,0,0,0.4)] transition duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#020618] flex items-center justify-center p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 640 640"
                >
                  <path d="M434.8 54.1C446.7 62.7 451.1 78.3 445.7 91.9L367.3 288L512 288C525.5 288 537.5 296.4 542.1 309.1C546.7 321.8 542.8 336 532.5 344.6L244.5 584.6C233.2 594 217.1 594.5 205.2 585.9C193.3 577.3 188.9 561.7 194.3 548.1L272.7 352L128 352C114.5 352 102.5 343.6 97.9 330.9C93.3 318.2 97.2 304 107.5 295.4L395.5 55.4C406.8 46 422.9 45.5 434.8 54.1z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-2xl font-bold uppercase text-[#020618]">
                The Challenge
              </h3>
            </div>
            <p className="text-gray-700 text-base leading-relaxed mb-8">
              Businesses today struggle to retain customers and encourage repeat
              purchases in a highly competitive market.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-[#020618] flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 640 640"
                >
                  <path d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320C528 205.1 434.9 112 320 112zM390.7 233.9C398.5 223.2 413.5 220.8 424.2 228.6C434.9 236.4 437.3 251.4 429.5 262.1L307.4 430.1C303.3 435.8 296.9 439.4 289.9 439.9C282.9 440.4 276 437.9 271.1 433L215.2 377.1C205.8 367.7 205.8 352.5 215.2 343.2C224.6 333.9 239.8 333.8 249.1 343.2L285.1 379.2L390.7 234z" />
                </svg>
                <span className="text-gray-700">
                  Simplify loyalty program management
                </span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-[#020618] flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 640 640"
                >
                  <path d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320C528 205.1 434.9 112 320 112zM390.7 233.9C398.5 223.2 413.5 220.8 424.2 228.6C434.9 236.4 437.3 251.4 429.5 262.1L307.4 430.1C303.3 435.8 296.9 439.4 289.9 439.9C282.9 440.4 276 437.9 271.1 433L215.2 377.1C205.8 367.7 205.8 352.5 215.2 343.2C224.6 333.9 239.8 333.8 249.1 343.2L285.1 379.2L390.7 234z" />
                </svg>
                <span className="text-gray-700">
                  Improve customer engagement
                </span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-[#020618] flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 640 640"
                >
                  <path d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320C528 205.1 434.9 112 320 112zM390.7 233.9C398.5 223.2 413.5 220.8 424.2 228.6C434.9 236.4 437.3 251.4 429.5 262.1L307.4 430.1C303.3 435.8 296.9 439.4 289.9 439.9C282.9 440.4 276 437.9 271.1 433L215.2 377.1C205.8 367.7 205.8 352.5 215.2 343.2C224.6 333.9 239.8 333.8 249.1 343.2L285.1 379.2L390.7 234z" />
                </svg>
                <span className="text-gray-700">Offer meaningful rewards</span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-[#020618] flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 640 640"
                >
                  <path d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320C528 205.1 434.9 112 320 112zM390.7 233.9C398.5 223.2 413.5 220.8 424.2 228.6C434.9 236.4 437.3 251.4 429.5 262.1L307.4 430.1C303.3 435.8 296.9 439.4 289.9 439.9C282.9 440.4 276 437.9 271.1 433L215.2 377.1C205.8 367.7 205.8 352.5 215.2 343.2C224.6 333.9 239.8 333.8 249.1 343.2L285.1 379.2L390.7 234z" />
                </svg>
                <span className="text-gray-700">
                  Provide real-time insights
                </span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-[#020618] flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 640 640"
                >
                  <path d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320C528 205.1 434.9 112 320 112zM390.7 233.9C398.5 223.2 413.5 220.8 424.2 228.6C434.9 236.4 437.3 251.4 429.5 262.1L307.4 430.1C303.3 435.8 296.9 439.4 289.9 439.9C282.9 440.4 276 437.9 271.1 433L215.2 377.1C205.8 367.7 205.8 352.5 215.2 343.2C224.6 333.9 239.8 333.8 249.1 343.2L285.1 379.2L390.7 234z" />
                </svg>
                <span className="text-gray-700">
                  Integrate easily with existing systems
                </span>
              </div>
            </div>
          </div>

          {/* THE SOLUTION */}
          <div className="flex flex-col border border-[#020618] rounded-3xl p-8 shadow-sm hover:shadow-[0_4px_10px_rgba(0,0,0,0.4)] transition duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#020618] flex items-center justify-center p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 640 640"
                >
                  <path d="M320 80C377.4 80 424 126.6 424 184C424 241.4 377.4 288 320 288C262.6 288 216 241.4 216 184C216 126.6 262.6 80 320 80zM96 152C135.8 152 168 184.2 168 224C168 263.8 135.8 296 96 296C56.2 296 24 263.8 24 224C24 184.2 56.2 152 96 152zM0 480C0 409.3 57.3 352 128 352C140.8 352 153.2 353.9 164.9 357.4C132 394.2 112 442.8 112 496L112 512C112 523.4 114.4 534.2 118.7 544L32 544C14.3 544 0 529.7 0 512L0 480zM521.3 544C525.6 534.2 528 523.4 528 512L528 496C528 442.8 508 394.2 475.1 357.4C486.8 353.9 499.2 352 512 352C582.7 352 640 409.3 640 480L640 512C640 529.7 625.7 544 608 544L521.3 544zM472 224C472 184.2 504.2 152 544 152C583.8 152 616 184.2 616 224C616 263.8 583.8 296 544 296C504.2 296 472 263.8 472 224zM160 496C160 407.6 231.6 336 320 336C408.4 336 480 407.6 480 496L480 512C480 529.7 465.7 544 448 544L192 544C174.3 544 160 529.7 160 512L160 496z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-2xl font-bold uppercase text-[#020618]">
                The Solution
              </h3>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              Loyalific delivers a flexible, powerful and secure loyalty
              experience that helps brands connect, reward and retain customers.
            </p>
            <div className="mt-8">
              {/* <img
                src="/assets/portfolio/loyalific/overview.jpeg"
                alt="Analytics"
              /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Loyalific Platform in Action */}
      <div className="container mx-auto px-4 pb-16">
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#020618]">
            LOYALIFIC PLATFORM IN ACTION
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="flex flex-col">
            <div className="mb-6 rounded-2xl overflow-hidden">
              <img
                src="/assets/portfolio/loyalific/loyalty-card.jpeg"
                alt="Loyalty Card"
                className="w-full object-cover filter-none"
              />
            </div>
            <h3 className="text-lg font-semibold text-[#020618] mb-3">
              Loyalty Card
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Create, customize and launch loyalty programs in minutes.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col">
            <div className="mb-6 rounded-2xl overflow-hidden">
              <img
                src="/assets/portfolio/loyalific/customer.jpeg"
                alt="Customer"
                className="w-full object-cover filter-none"
              />
            </div>
            <h3 className="text-lg font-semibold text-[#020618] mb-3">
              Customer
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Members can track points, rewards and transactions easily.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col">
            <div className="mb-6 rounded-2xl overflow-hidden">
              <img
                src="/assets/portfolio/loyalific/web-stamper.jpeg"
                alt="Web Stamper"
                className="w-full object-cover filter-none"
              />
            </div>
            <h3 className="text-lg font-semibold text-[#020618] mb-3">
              Web Stamper
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              A wide range of exciting rewards to choose and redeem.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col">
            <div className="mb-6 rounded-2xl overflow-hidden">
              <img
                src="/assets/portfolio/loyalific/push-massage.jpeg"
                alt="Push Messages"
                className="w-full object-cover filter-none"
              />
            </div>
            <h3 className="text-lg font-semibold text-[#020618] mb-3">
              Push Messages
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Run targeted campaigns and boost engagement.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="flex flex-col">
            <div className="mb-6 rounded-2xl overflow-hidden">
              <img
                src="/assets/portfolio/loyalific/overview.jpeg"
                alt="Analytics"
                className="w-full object-cover filter-none"
              />
            </div>
            <h3 className="text-lg font-semibold text-[#020618] mb-3">
              Analytics
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Get real-time insights and measure what truly matters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
