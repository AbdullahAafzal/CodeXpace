import React from "react";
import "./styles.css";
import Footer from "@/components/Footer";

function HTportfolio() {
  return (
    <div className="ht-section">
      <div className="ht-banner relative flex justify-center items-center">
        <a
          href="/"
          className="absolute z-10 top-9 left-9 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/30 backdrop-blur transition-all duration-300 hover:bg-white/15 hover:text-white hover:shadow-xl"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#ffffff15] text-white border border-white/20">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" height="16" width="16" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </span>
          Back
        </a>
        <div className="ht-banner-overlay"></div>
        <div className="ht-banner-content max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-slide-up-light">
          <div className="ht-banner-info text-start mb-5">
            <span className="inline-flex rounded-3xl px-4 py-1 text-xs font-semibold uppercase text-white border border-white">
              CASE STUDY
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-7 banner-heading">
            Hammer and Tongues Auctioneers: Digitizing the Auction Experience
            Across Africa
          </h1>
          <div className="ht-banner-icon flex items-center gap-3">
            <a href="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z" />
              </svg>
            </a>
            <a href="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
              </svg>
            </a>
            <a href="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z" />
              </svg>
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/services/mobile-app-development" className="inline-flex items-center justify-center rounded-full bg-white w-fit px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-black-500/20 transition duration-300 hover:-translate-y-1">
              Mobile App Development
            </a>
            <a href="/services/saas-development" className="inline-flex items-center justify-center rounded-full bg-white w-fit px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-black-500/20 transition duration-300 hover:-translate-y-1">
              SAAS Development
            </a>
            <a href="/services/custom-software-development" className="inline-flex items-center justify-center rounded-full bg-white w-fit px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-black-500/20 transition duration-300 hover:-translate-y-1">
              Custom Software Development
            </a>
          </div>

        </div>
      </div>
      <div className="ht-description-main">
        <div className="ht-description container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-10">
            <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-7 ht-description-heading">
              Executive Summary
            </h1>
            <p className="text-black lg:text-[20px] pb-3">
              Hammer and Tongues Auctioneers, a leading auction company
              operating across Africa, sought to modernize its auction
              operations and create a more seamless digital experience for
              participants and administrators.
            </p>
            <p className="text-black lg:text-[20px] pb-3">
              To support this vision, a centralized auction management platform
              was developed, consisting of a mobile application and a web-based
              administrative dashboard. The solution enabled buyers, sellers,
              and vendors to engage through a unified online ecosystem while
              providing administrators with greater control over auction
              operations.
            </p>
            <p className="text-black lg:text-[20px]">
              By digitizing registration, verification, bidding, payments, and
              auction management workflows, Hammer and Tongues successfully
              streamlined operations, enhanced user experience, and established
              a scalable foundation for future growth.
            </p>
          </div>
          <div className="mb-10">
            <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-7 ht-description-heading">
              Client Overview
            </h1>
            <p className="text-black lg:text-[20px] pb-3">
              Hammer and Tongues Auctioneers is a leading auction company
              serving buyers and sellers across Africa. Known for conducting
              transparent and professionally managed auctions, the company has
              built a strong reputation within the auction industry through its
              commitment to efficient and accessible auction services.
            </p>
            <p className="text-black lg:text-[20px]">
              As digital adoption continued to accelerate, the company
              identified an opportunity to enhance its auction experience and
              create a more connected platform for all stakeholders involved in
              the auction process.
            </p>
          </div>
          <div className="mb-10">
            <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-7 ht-description-heading">
              Challenge
            </h1>
            <p className="text-black lg:text-[20px] pb-3">
              As demand for online auction participation continued to grow,
              Hammer and Tongues Auctioneers faced increasing operational
              complexity. Key auction processes, including bidder registration,
              verification, payment handling, and auction administration, relied
              heavily on manual workflows, creating inefficiencies for both
              administrators and participants.
            </p>
            <p className="text-black lg:text-[20px] pb-3">
              The absence of a centralized auction management platform made it
              difficult to deliver a seamless experience across the entire
              auction lifecycle. Managing bidder activity, tracking auction
              progress, and handling post-auction processes required significant
              administrative effort and limited the company’s ability to scale
              its digital operations efficiently.
            </p>
            <p className="text-black lg:text-[20px]">
              To support future growth and enhance the customer experience,
              Hammer and Tongues sought a unified solution capable of digitizing
              and streamlining its online auction ecosystem.
            </p>
          </div>
          <div className="mb-10">
            <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-7 ht-description-heading">
              Solution
            </h1>
            <p className="text-black lg:text-[20px] pb-3">
              To address these challenges, a centralized auction management
              platform was developed, consisting of a mobile application for
              participants and a web-based administrative dashboard for auction
              management.
            </p>
            <p className="text-black lg:text-[20px] pb-3">
              The solution digitized the entire auction lifecycle, enabling
              buyers, sellers, and vendors to interact through a single
              platform. Users could browse auctions, complete registration and
              document verification, participate in both live and timed
              auctions, and securely process the payments through the platform.
            </p>
            <p className="text-black lg:text-[20px] pb-3">
              For administrators, the platform provided centralized control over
              auction operations, including auction creation, bidder management,
              asset listings, verification workflows, and transaction oversight.
              By bringing these processes into a unified digital environment,
              Hammer and Tongues significantly reduced manual administration
              while creating a more seamless and accessible auction experience.
            </p>
            <p className="text-black lg:text-[20px]">
              The platform established a scalable digital foundation that
              supports the company’s continued growth and enables efficient
              management of auction activities across multiple stakeholders.
            </p>
          </div>
          <div>
            <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-7 ht-description-heading">
              Business Impact
            </h1>
            <p className="text-black lg:text-[20px] pb-3">
              The introduction of the centralized auction platform transformed
              how Hammer and Tongues manages and delivers its auction services.
              By digitizing key workflows and bringing multiple stakeholder
              interactions into a single system, the company significantly
              improved operational efficiency and user experience.
            </p>
            <p className="text-black lg:text-[20px] pb-3">
              Bidder registration and verification became more streamlined,
              reducing administrative effort while accelerating onboarding.
              Online payment processing simplified transaction management and
              provided a more convenient experience for participants.
            </p>
            <p className="text-black lg:text-[20px] pb-3">
              The introduction of live and timed online auctions increased
              accessibility, enabling greater participation and engagement from
              bidders. At the same time, administrators gained improved
              visibility and control over auction operations through a
              centralized management environment.
            </p>
            <p className="text-black lg:text-[20px]">
              By replacing fragmented processes with a unified digital platform,
              Hammer and Tongues established a scalable foundation for growth,
              improved operational effectiveness, and enhanced the overall
              auction experience for buyers, sellers, vendors, and
              administrators alike.
            </p>
          </div>
        </div>
      </div>
      <Footer theme="ht" />
    </div>
  );
}

export default HTportfolio;
