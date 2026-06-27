"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "./styles.css";
// import Footer from "@/components/Footer";
import logo from "../../../assets/portfolio/ftf/darkLogo.png";
import logoLight from "../../../assets/portfolio/ftf/lightLogo.png";
import backgroundImage from "../../../assets/portfolio/ftf/back.png";
import backgroundImageLight from "../../../assets/portfolio/ftf/backLight.png";
import img1 from "../../../assets/portfolio/ftf/one.png";
import img2 from "../../../assets/portfolio/ftf/two.png";
import img3 from "../../../assets/portfolio/ftf/three.png";
import img4 from "../../../assets/portfolio/ftf/four.png";
import img5 from "../../../assets/portfolio/ftf/five.png";
import img1Light from "../../../assets/portfolio/ftf/img-one-Light.png";
import img2Light from "../../../assets/portfolio/ftf/img-two-Light.png";
import img3Light from "../../../assets/portfolio/ftf/img-three-Light.png";
import img4Light from "../../../assets/portfolio/ftf/img-four-Light.png";
import img5Light from "../../../assets/portfolio/ftf/img-five-Light.png";

export default function FTFPortfolio() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [scrollPositions, setScrollPositions] = useState({
    section2: 0,
    section3: 0,
    section4: 0,
    section5: 0,
    section6: 0,
    section7: 0,
    section8: 0,
    section9: 0,
    section10: 0,
  });

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoRef4 = useRef<HTMLVideoElement>(null);
  const videoRef5 = useRef<HTMLVideoElement>(null);
  const videoRef6 = useRef<HTMLVideoElement>(null);
  const videoRef7 = useRef<HTMLVideoElement>(null);
  const videoRef8 = useRef<HTMLVideoElement>(null);
  const videoRef9 = useRef<HTMLVideoElement>(null);
  const videoRef10 = useRef<HTMLVideoElement>(null);

  // Refs for client section videos (staffSection videos)
  const clientVideoRef3 = useRef<HTMLVideoElement>(null);
  const clientVideoRef4 = useRef<HTMLVideoElement>(null);
  const clientVideoRef5 = useRef<HTMLVideoElement>(null);
  const clientVideoRef6 = useRef<HTMLVideoElement>(null);
  const clientVideoRef7 = useRef<HTMLVideoElement>(null);
  const clientVideoRef8 = useRef<HTMLVideoElement>(null);

  // Refs for horizontal scroll containers
  const section2ScrollRef = useRef<HTMLDivElement>(null);
  const section3ScrollRef = useRef<HTMLDivElement>(null);
  const section4ScrollRef = useRef<HTMLDivElement>(null);
  const section5ScrollRef = useRef<HTMLDivElement>(null);
  const section6ScrollRef = useRef<HTMLDivElement>(null);
  const section7ScrollRef = useRef<HTMLDivElement>(null);
  const section8ScrollRef = useRef<HTMLDivElement>(null);
  const section9ScrollRef = useRef<HTMLDivElement>(null);
  const section10ScrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (
    sectionKey: string,
    scrollRef: React.RefObject<HTMLDivElement>,
  ) => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      setScrollPositions((prev) => ({
        ...prev,
        [sectionKey]: scrollLeft,
      }));
    }
  };

  const handleButtonClick = (
    scrollRef: React.RefObject<HTMLDivElement>,
    sectionKey: string,
  ) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10; // 10px threshold

      if (isAtEnd) {
        // Scroll left (back to staff app)
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        // Scroll right (to client app)
        container.scrollTo({
          left: scrollWidth - clientWidth,
          behavior: "smooth",
        });
      }
    }
  };

  const isScrolledRight = (sectionKey: string) => {
    return scrollPositions[sectionKey as keyof typeof scrollPositions] > 10; // 10px threshold
  };

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  useEffect(() => {
    // Scroll to top when portfolio page mounts
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Initialize scroll positions
    const scrollRefs = [
      { ref: section2ScrollRef, key: "section2" },
      { ref: section3ScrollRef, key: "section3" },
      { ref: section4ScrollRef, key: "section4" },
      { ref: section5ScrollRef, key: "section5" },
      { ref: section6ScrollRef, key: "section6" },
      { ref: section7ScrollRef, key: "section7" },
      { ref: section8ScrollRef, key: "section8" },
      { ref: section9ScrollRef, key: "section9" },
      { ref: section10ScrollRef, key: "section10" },
    ];

    scrollRefs.forEach(({ ref, key }) => {
      if (ref.current) {
        handleScroll(key, ref);
      }
    });

    // Cleanup: scroll to top when component unmounts (user navigates away)
    return () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
  }, []);

  useEffect(() => {
    // Video sources - videos are in public/assets/portfolio/ftf/
    const section3Video = "/assets/portfolio/ftf/section3.mp4";
    const section3VideoLight = "/assets/portfolio/ftf/section3-Light.mp4";
    const section4Video = "/assets/portfolio/ftf/section4.mp4";
    const section4VideoLight = "/assets/portfolio/ftf/section4-Light.mp4";
    const section5Video = "/assets/portfolio/ftf/section5.mp4";
    const section5VideoLight = "/assets/portfolio/ftf/section5-Light.mp4";
    const section6Video = "/assets/portfolio/ftf/section6.MP4";
    const section6VideoLight = "/assets/portfolio/ftf/section6-Light.MP4";
    const section7Video = "/assets/portfolio/ftf/section7.MP4";
    const section7VideoLight = "/assets/portfolio/ftf/section7-Light.MP4";
    const section8Video = "/assets/portfolio/ftf/section8.MP4";
    const section8VideoLight = "/assets/portfolio/ftf/section8-Light.mp4";
    const section9Video = "/assets/portfolio/ftf/section9.mp4";
    const section9VideoLight = "/assets/portfolio/ftf/section9-Light.mp4";
    const section10Video = "/assets/portfolio/ftf/section10.MP4";
    const section10VideoLight = "/assets/portfolio/ftf/section10-Light.MP4";
    const staffSection3Video = "/assets/portfolio/ftf/staffSection-3.mp4";
    const staffSection3VideoLight =
      "/assets/portfolio/ftf/staffSectionLight-3.MP4";
    const staffSection4Video = "/assets/portfolio/ftf/staffSection-4.mp4";
    const staffSection4VideoLight =
      "/assets/portfolio/ftf/staffSectionLight-4.MP4";
    const staffSection5Video = "/assets/portfolio/ftf/staffSection-5.mp4";
    const staffSection5VideoLight =
      "/assets/portfolio/ftf/staffSectionLight-5.MP4";
    const staffSection6Video = "/assets/portfolio/ftf/staffSection-6.mp4";
    const staffSection6VideoLight =
      "/assets/portfolio/ftf/staffSectionLight-6.MP4";
    const staffSection7Video = "/assets/portfolio/ftf/staffSection-7.mp4";
    const staffSection7VideoLight =
      "/assets/portfolio/ftf/staffSectionLight-7.MP4";
    const staffSection8Video = "/assets/portfolio/ftf/staffSection-8.mp4";
    const staffSection8VideoLight =
      "/assets/portfolio/ftf/staffSectionLight-8.MP4";

    // Ensure video plays when component mounts or theme changes
    if (videoRef.current) {
      videoRef.current.src = isLightMode ? section3VideoLight : section3Video;
      videoRef.current.load();
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
    if (videoRef4.current) {
      videoRef4.current.src = isLightMode ? section4VideoLight : section4Video;
      videoRef4.current.load();
      videoRef4.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
    if (videoRef5.current) {
      videoRef5.current.src = isLightMode ? section5VideoLight : section5Video;
      videoRef5.current.load();
      videoRef5.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
    if (videoRef6.current) {
      videoRef6.current.src = isLightMode ? section6VideoLight : section6Video;
      videoRef6.current.load();
      videoRef6.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
    if (videoRef7.current) {
      videoRef7.current.src = isLightMode ? section7VideoLight : section7Video;
      videoRef7.current.load();
      videoRef7.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
    if (videoRef8.current) {
      videoRef8.current.src = isLightMode ? section8VideoLight : section8Video;
      videoRef8.current.load();
      videoRef8.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
    if (clientVideoRef3.current) {
      clientVideoRef3.current.src = isLightMode
        ? staffSection3VideoLight
        : staffSection3Video;
      clientVideoRef3.current.load();
      clientVideoRef3.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
    if (clientVideoRef4.current) {
      clientVideoRef4.current.src = isLightMode
        ? staffSection4VideoLight
        : staffSection4Video;
      clientVideoRef4.current.load();
      clientVideoRef4.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
    if (clientVideoRef5.current) {
      clientVideoRef5.current.src = isLightMode
        ? staffSection5VideoLight
        : staffSection5Video;
      clientVideoRef5.current.load();
      clientVideoRef5.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
    if (clientVideoRef6.current) {
      clientVideoRef6.current.src = isLightMode
        ? staffSection6VideoLight
        : staffSection6Video;
      clientVideoRef6.current.load();
      clientVideoRef6.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
    if (clientVideoRef7.current) {
      clientVideoRef7.current.src = isLightMode
        ? staffSection7VideoLight
        : staffSection7Video;
      clientVideoRef7.current.load();
      clientVideoRef7.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
    if (clientVideoRef8.current) {
      clientVideoRef8.current.src = isLightMode
        ? staffSection8VideoLight
        : staffSection8Video;
      clientVideoRef8.current.load();
      clientVideoRef8.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
    if (videoRef9.current) {
      videoRef9.current.src = isLightMode ? section9VideoLight : section9Video;
      videoRef9.current.load();
      videoRef9.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
    if (videoRef10.current) {
      videoRef10.current.src = isLightMode
        ? section10VideoLight
        : section10Video;
      videoRef10.current.load();
      videoRef10.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, [isLightMode]);

  return (
    <div className="ftf-portfolio-wrapper relative app-wrapper">
      <a
          href="/"
          className="absolute z-10 top-7 left-20 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 p-2 text-sm font-semibold text-white shadow-lg shadow-black/30 backdrop-blur transition-all duration-300 hover:bg-white/15 hover:text-white hover:shadow-xl"
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
      {/* First Page */}
      <div
        className={`app ${isLightMode ? "light-mode" : ""}`}
        style={{
          backgroundImage: `url(${
            isLightMode ? backgroundImageLight.src : backgroundImage.src
          })`,
        }}
      >
        {/* Theme Toggle Button */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {isLightMode ? "🌙" : "☀️"}
        </button>

        <div className="container">
          {/* Left Side - Branding Section */}
          <div className="branding-section">
            <div className="logo-container">
              <div className="logo-wrapper">
                <Image
                  src={isLightMode ? logoLight : logo}
                  alt="FITBODY Logo"
                  className="app-logo"
                  width={80}
                  height={80}
                />
              </div>
              <h1 className="brand-name">Forward Fitness&apos;s Thinking</h1>
            </div>

            <div className="info-section">
              <p className="screen-count">THE FUTURE OF YOUR FITNESS IS NOW</p>
            </div>

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

          {/* Right Side - Phone Screens Gallery */}
          <div className="screens-gallery"></div>
        </div>
      </div>

      {/* Second Page - Login and Authentication */}
      <div className={`app app-page-2 ${isLightMode ? "light-mode" : ""}`}>
        {/* Staff App View */}
        <div className="section-view">
          <div className="container">
            {/* Left Side - Phone Screens Gallery */}
            <div className="screens-gallery screens-gallery-left">
              <div className="phone-screens-stack">
                <Image
                  src={isLightMode ? img1Light : img1}
                  alt="Login Screen 1"
                  className="phone-screen"
                  width={240}
                  height={480}
                />
                <Image
                  src={isLightMode ? img2Light : img2}
                  alt="Login Screen 2"
                  className="phone-screen"
                  width={240}
                  height={480}
                />
                <Image
                  src={isLightMode ? img3Light : img3}
                  alt="Login Screen 3"
                  className="phone-screen"
                  width={240}
                  height={480}
                />
                <Image
                  src={isLightMode ? img4Light : img4}
                  alt="Login Screen 4"
                  className="phone-screen"
                  width={240}
                  height={480}
                />
                <Image
                  src={isLightMode ? img5Light : img5}
                  alt="Login Screen 5"
                  className="phone-screen"
                  width={240}
                  height={480}
                />
              </div>
            </div>

            {/* Right Side - Content Section */}
            <div className="branding-section branding-section-right">
              <div className="info-section">
                <h2 className="design-title">Login and Authentication</h2>
                <div className="features-list">
                  <div className="feature-item">
                    <div className="feature-bullet"></div>
                    <p className="feature-text">
                      Authentication & Login: Secure, user-friendly access.
                    </p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-bullet"></div>
                    <p className="feature-text">
                      Body Composition & Fitness: Clear overview of health and
                      progress.
                    </p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-bullet"></div>
                    <p className="feature-text">
                      Biometric Authentication: Fast fingerprint/Face ID
                      sign-in.
                    </p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-bullet"></div>
                    <p className="feature-text">
                      OTP Verification: Quick one-time code security step.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Page - News Feed Module (Flipped Layout) */}
      <div className={`app app-page-3 ${isLightMode ? "light-mode" : ""}`}>
        <div
          className="horizontal-scroll-container"
          ref={section3ScrollRef}
          onScroll={() => handleScroll("section3", section3ScrollRef)}
        >
          {/* Staff App View */}
          <div className="section-view">
            <div className="container">
              {/* Left Side - Content Section */}
              <div className="branding-section branding-section-left">
                <div className="info-section">
                  <h2 className="design-title">Client News Feed Module</h2>
                  <div className="features-list">
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">Filtered news feed</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">Staff-created posts</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">Client likes & comments</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Announcements & achievements
                      </p>
                    </div>
                  </div>

                  <h2 className="design-title" style={{ marginTop: "30px" }}>
                    Future Extension
                  </h2>
                  <div className="features-list">
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">Internal gym community</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">Client-generated posts</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Video */}
              <div className="screens-gallery screens-gallery-right">
                <div className="video-container">
                  <video
                    ref={videoRef}
                    className="section-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onLoadedData={() => {
                      if (videoRef.current) {
                        videoRef.current.play().catch((error) => {
                          console.log("Video play error:", error);
                        });
                      }
                    }}
                    onError={(e) => {
                      console.error("Video error:", e);
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Client App View */}
          <div className="section-view">
            <div className="container">
              {/* Left Side - Content Section */}
              <div className="branding-section branding-section-left">
                <div className="info-section">
                  <h2 className="design-title">Staff News Feed Module</h2>
                  <div className="features-list">
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Create and publish posts with text, images, videos, and
                        polls
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Delete or manage posts with full content control
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Like and engage with posts to encourage staff
                        interaction
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Share updates, announcements, and internal
                        communications in real time
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Centralized feed to keep all staff informed and
                        connected
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Video */}
              <div className="screens-gallery screens-gallery-right">
                <div className="video-container">
                  <video
                    ref={clientVideoRef3}
                    className="section-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onLoadedData={() => {
                      if (clientVideoRef3.current) {
                        clientVideoRef3.current.play().catch((error) => {
                          console.log("Video play error:", error);
                        });
                      }
                    }}
                    onError={(e) => {
                      console.error("Video error:", e);
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="next-button"
          onClick={() => handleButtonClick(section3ScrollRef, "section3")}
          aria-label={isScrolledRight("section3") ? "Go left" : "Go right"}
        >
          {isScrolledRight("section3") ? "←" : "→"}
        </button>
      </div>

      {/* Fourth Page - Video on Left, Text on Right */}
      <div className={`app app-page-4 ${isLightMode ? "light-mode" : ""}`}>
        <div
          className="horizontal-scroll-container"
          ref={section4ScrollRef}
          onScroll={() => handleScroll("section4", section4ScrollRef)}
        >
          {/* Staff App View */}
          <div className="section-view">
            <div className="container">
              {/* Left Side - Video */}
              <div className="screens-gallery screens-gallery-left">
                <div className="video-container">
                  <video
                    ref={videoRef4}
                    className="section-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onLoadedData={() => {
                      if (videoRef4.current) {
                        videoRef4.current.play().catch((error) => {
                          console.log("Video play error:", error);
                        });
                      }
                    }}
                    onError={(e) => {
                      console.error("Video error:", e);
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Right Side - Content Section */}
              <div className="branding-section branding-section-right">
                <div className="info-section">
                  <h2 className="design-title">Client Scheduling Module</h2>
                  <div className="features-list">
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Multiple scheduling categories
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">Book sessions instantly</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">View session details</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">Upcoming sessions listing</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">Remote & in-gym booking</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">Built-in virtual meetings</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Music preferences per session
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">Book with a specific coach</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Gym offers & events booking
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">Cancel & manage sessions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Client App View */}
          <div className="section-view">
            <div className="container">
              {/* Left Side - Video */}
              <div className="screens-gallery screens-gallery-left">
                <div className="video-container">
                  <video
                    ref={clientVideoRef4}
                    className="section-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onLoadedData={() => {
                      if (clientVideoRef4.current) {
                        clientVideoRef4.current.play().catch((error) => {
                          console.log("Video play error:", error);
                        });
                      }
                    }}
                    onError={(e) => {
                      console.error("Video error:", e);
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Right Side - Content Section */}
              <div className="branding-section branding-section-right">
                <div className="info-section">
                  <h2 className="design-title">Staff Scheduling Module</h2>
                  <div className="features-list">
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Create and manage gym sessions for personal training or
                        group workouts
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        View all booked clients who have selected your session
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Manually add or book clients into sessions when required
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Add client-specific details such as goals, notes, and
                        contraindications
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Remove clients from sessions with full administrative
                        control
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Attach Zoom links to enable virtual training or online
                        consultations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="next-button"
          onClick={() => handleButtonClick(section4ScrollRef, "section4")}
          aria-label={isScrolledRight("section4") ? "Go left" : "Go right"}
        >
          {isScrolledRight("section4") ? "←" : "→"}
        </button>
      </div>

      {/* Fifth Page - Text on Left, Video on Right (Like Section 3) */}
      <div className={`app app-page-5 ${isLightMode ? "light-mode" : ""}`}>
        <div
          className="horizontal-scroll-container"
          ref={section5ScrollRef}
          onScroll={() => handleScroll("section5", section5ScrollRef)}
        >
          {/* Staff App View */}
          <div className="section-view">
            <div className="container">
              {/* Left Side - Content Section */}
              <div className="branding-section branding-section-left">
                <div className="info-section">
                  <h2 className="design-title">Client Workout Module</h2>
                  <div className="features-list">
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Personalized workout per session
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        In-app workout tutorials & guidance
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">Multiple workout types</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Coach-designed & assigned workouts
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Video */}
              <div className="screens-gallery screens-gallery-right">
                <div className="video-container">
                  <video
                    ref={videoRef5}
                    className="section-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onLoadedData={() => {
                      if (videoRef5.current) {
                        videoRef5.current.play().catch((error) => {
                          console.log("Video play error:", error);
                        });
                      }
                    }}
                    onError={(e) => {
                      console.error("Video error:", e);
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Client App View */}
          <div className="section-view">
            <div className="container">
              {/* Left Side - Content Section */}
              <div className="branding-section branding-section-left">
                <div className="info-section">
                  <h2 className="design-title">Staff Workout Module</h2>
                  <div className="features-list">
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Create customized workout plans linked directly to
                        specific sessions
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Organize workouts by levels (e.g., beginner,
                        intermediate, advanced)
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Define different workout types within each session
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Add and manage multiple exercises under each workout
                        type
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Structure training programs for clarity, progression,
                        and performance tracking
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Ensure workouts are aligned with session goals and
                        client fitness levels
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Video */}
              <div className="screens-gallery screens-gallery-right">
                <div className="video-container">
                  <video
                    ref={clientVideoRef5}
                    className="section-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onLoadedData={() => {
                      if (clientVideoRef5.current) {
                        clientVideoRef5.current.play().catch((error) => {
                          console.log("Video play error:", error);
                        });
                      }
                    }}
                    onError={(e) => {
                      console.error("Video error:", e);
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="next-button"
          onClick={() => handleButtonClick(section5ScrollRef, "section5")}
          aria-label={isScrolledRight("section5") ? "Go left" : "Go right"}
        >
          {isScrolledRight("section5") ? "←" : "→"}
        </button>
      </div>

      {/* Sixth Page - Video on Left, Text on Right (Like Section 4) */}
      <div className={`app app-page-6 ${isLightMode ? "light-mode" : ""}`}>
        <div
          className="horizontal-scroll-container"
          ref={section6ScrollRef}
          onScroll={() => handleScroll("section6", section6ScrollRef)}
        >
          {/* Staff App View */}
          <div className="section-view">
            <div className="container">
              {/* Left Side - Video */}
              <div className="screens-gallery screens-gallery-left">
                <div className="video-container">
                  <video
                    ref={videoRef6}
                    className="section-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onLoadedData={() => {
                      if (videoRef6.current) {
                        videoRef6.current.play().catch((error) => {
                          console.log("Video play error:", error);
                        });
                      }
                    }}
                    onError={(e) => {
                      console.error("Video error:", e);
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Right Side - Content Section */}
              <div className="branding-section branding-section-right">
                <div className="info-section">
                  <h2 className="design-title">Client Food Logger Module</h2>
                  <div className="features-list">
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Global nutrition database integration
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Barcode-based instant food logging
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Custom meals with macro & micronutrients
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Recipe builder with full nutrient breakdown
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Coach-assigned nutrition plans
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Favorites & reusable recipes
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Real-time & historical calorie tracking
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Client App View */}
          <div className="section-view">
            <div className="container">
              {/* Left Side - Video */}
              <div className="screens-gallery screens-gallery-left">
                <div className="video-container">
                  <video
                    ref={clientVideoRef6}
                    className="section-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onLoadedData={() => {
                      if (clientVideoRef6.current) {
                        clientVideoRef6.current.play().catch((error) => {
                          console.log("Video play error:", error);
                        });
                      }
                    }}
                    onError={(e) => {
                      console.error("Video error:", e);
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Right Side - Content Section */}
              <div className="branding-section branding-section-right">
                <div className="info-section">
                  <h2 className="design-title">Staff Food Logger Module</h2>
                  <div className="features-list">
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Global nutrition database integration
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Barcode-based instant food logging
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Custom meals with macro & micronutrients
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Recipe builder with full nutrient breakdown
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Coach-assigned nutrition plans
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Favorites & reusable recipes
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Real-time & historical calorie tracking
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="next-button"
          onClick={() => handleButtonClick(section6ScrollRef, "section6")}
          aria-label={isScrolledRight("section6") ? "Go left" : "Go right"}
        >
          {isScrolledRight("section6") ? "←" : "→"}
        </button>
      </div>

      {/* Seventh Page - Text on Left, Video on Right (Like Section 5) */}
      <div className={`app app-page-7 ${isLightMode ? "light-mode" : ""}`}>
        <div
          className="horizontal-scroll-container"
          ref={section7ScrollRef}
          onScroll={() => handleScroll("section7", section7ScrollRef)}
        >
          {/* Staff App View */}
          <div className="section-view">
            <div className="container">
              {/* Left Side - Content Section */}
              <div className="branding-section branding-section-left">
                <div className="info-section">
                  <h2 className="design-title">Client Hydration Module</h2>
                  <div className="features-list">
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Track water & 100+ beverage types
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Add multiple drinks from an extensive database
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Smart water-only calculation to encourage optimal
                        hydration
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Video */}
              <div className="screens-gallery screens-gallery-right">
                <div className="video-container">
                  <video
                    ref={videoRef7}
                    className="section-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onLoadedData={() => {
                      if (videoRef7.current) {
                        videoRef7.current.play().catch((error) => {
                          console.log("Video play error:", error);
                        });
                      }
                    }}
                    onError={(e) => {
                      console.error("Video error:", e);
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Client App View */}
          <div className="section-view">
            <div className="container">
              {/* Left Side - Content Section */}
              <div className="branding-section branding-section-left">
                <div className="info-section">
                  <h2 className="design-title">Staff Progress Module</h2>
                  <div className="features-list">
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        View and manage all clients in a centralized directory
                        with profile photos and training levels
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Search and access any client profile instantly
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Use quick actions for faster client management (e.g.,
                        pricing sync, progress view)
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Upload and view progress images for each client to track
                        physical transformation
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Display progress entries with date and time for clear
                        comparison over time
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Maintain a visual history of client development to
                        support motivation and retention
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Video */}
              <div className="screens-gallery screens-gallery-right">
                <div className="video-container">
                  <video
                    ref={clientVideoRef7}
                    className="section-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onLoadedData={() => {
                      if (clientVideoRef7.current) {
                        clientVideoRef7.current.play().catch((error) => {
                          console.log("Video play error:", error);
                        });
                      }
                    }}
                    onError={(e) => {
                      console.error("Video error:", e);
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="next-button"
          onClick={() => handleButtonClick(section7ScrollRef, "section7")}
          aria-label={isScrolledRight("section7") ? "Go left" : "Go right"}
        >
          {isScrolledRight("section7") ? "←" : "→"}
        </button>
      </div>

      {/* Eighth Page - Video on Left, Text on Right (Like Section 6) */}
      <div className={`app app-page-8 ${isLightMode ? "light-mode" : ""}`}>
        <div
          className="horizontal-scroll-container"
          ref={section8ScrollRef}
          onScroll={() => handleScroll("section8", section8ScrollRef)}
        >
          {/* Staff App View */}
          <div className="section-view">
            <div className="container">
              {/* Left Side - Video */}
              <div className="screens-gallery screens-gallery-left">
                <div className="video-container">
                  <video
                    ref={videoRef8}
                    className="section-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onLoadedData={() => {
                      if (videoRef8.current) {
                        videoRef8.current.play().catch((error) => {
                          console.log("Video play error:", error);
                        });
                      }
                    }}
                    onError={(e) => {
                      console.error("Video error:", e);
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Right Side - Content Section */}
              <div className="branding-section branding-section-right">
                <div className="info-section">
                  <h2 className="design-title">Client Journal Module</h2>
                  <div className="features-list">
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">Mood insights</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">Daily reflection logging</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">Habit tracker</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">Daily priorities</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Follow up for morning manifestations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Client App View */}
          <div className="section-view">
            <div className="container">
              {/* Left Side - Video */}
              <div className="screens-gallery screens-gallery-left">
                <div className="video-container">
                  <video
                    ref={clientVideoRef8}
                    className="section-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onLoadedData={() => {
                      if (clientVideoRef8.current) {
                        clientVideoRef8.current.play().catch((error) => {
                          console.log("Video play error:", error);
                        });
                      }
                    }}
                    onError={(e) => {
                      console.error("Video error:", e);
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Right Side - Content Section */}
              <div className="branding-section branding-section-right">
                <div className="info-section">
                  <h2 className="design-title">Staff Client assesments</h2>
                  <div className="features-list">
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        View all clients in a centralized directory with profile
                        photo and assigned level (RX1 / RX2 / RX3)
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Search clients instantly by name using the built-in
                        search bar
                      </p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-bullet"></div>
                      <p className="feature-text">
                        Open a client&apos;s progress screen to view uploaded
                        progress images in a clean gallery layout
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="next-button"
          onClick={() => handleButtonClick(section8ScrollRef, "section8")}
          aria-label={isScrolledRight("section8") ? "Go left" : "Go right"}
        >
          {isScrolledRight("section8") ? "←" : "→"}
        </button>
      </div>

      {/* Ninth Page - Text on Left, Video on Right (Like Section 7) */}
      <div className={`app app-page-9 ${isLightMode ? "light-mode" : ""}`}>
        {/* Staff App View */}
        <div className="section-view">
          <div className="container">
            {/* Left Side - Content Section */}
            <div className="branding-section branding-section-left">
              <div className="info-section">
                <h2 className="design-title">Client Cycle Tracker Module</h2>
                <div className="features-list">
                  <div className="feature-item">
                    <div className="feature-bullet"></div>
                    <p className="feature-text">
                      Track cycle & fertility dates
                    </p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-bullet"></div>
                    <p className="feature-text">Symptom logging</p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-bullet"></div>
                    <p className="feature-text">Complete cycle history</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Video */}
            <div className="screens-gallery screens-gallery-right">
              <div className="video-container">
                <video
                  ref={videoRef9}
                  className="section-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  onLoadedData={() => {
                    if (videoRef9.current) {
                      videoRef9.current.play().catch((error) => {
                        console.log("Video play error:", error);
                      });
                    }
                  }}
                  onError={(e) => {
                    console.error("Video error:", e);
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tenth Page - Video on Left, Text on Right (Like Section 8) */}
      <div className={`app app-page-10 ${isLightMode ? "light-mode" : ""}`}>
        {/* Staff App View */}
        <div className="section-view">
          <div className="container">
            {/* Left Side - Video */}
            <div className="screens-gallery screens-gallery-left">
              <div className="video-container">
                <video
                  ref={videoRef10}
                  className="section-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  onLoadedData={() => {
                    if (videoRef10.current) {
                      videoRef10.current.play().catch((error) => {
                        console.log("Video play error:", error);
                      });
                    }
                  }}
                  onError={(e) => {
                    console.error("Video error:", e);
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Right Side - Content Section */}
            <div className="branding-section branding-section-right">
              <div className="info-section">
                <h2 className="design-title">Client Perks Module</h2>
                <div className="features-list">
                  <div className="feature-item">
                    <div className="feature-bullet"></div>
                    <p className="feature-text">
                      Earn points from different goals
                    </p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-bullet"></div>
                    <p className="feature-text">Redeem points in the shop</p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-bullet"></div>
                    <p className="feature-text">
                      Levels linked to goals with allocated benefits
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer theme={isLightMode ? "ftfLight" : "ftfDark"} /> */}
    </div>
  );
}
