"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  slug?: string;
}

// Map service slugs to image filenames
const getServiceImage = (slug?: string): string | null => {
  if (!slug) return null;

  const imageMap: Record<string, string> = {
    "ai-machine-learning-development": "/assets/Services/Ai-machine.mp4",
    "custom-software-development":
      "/assets/Services/custom-software-development.mp4",
    "devops-cloud-services": "/assets/Services/Devops.mp4",
    "mvp-development": "/assets/Services/MVP.mp4",
    "saas-development": "/assets/Services/Saas.mp4",
    "web-development": "/assets/Services/web.mp4",
    "front-backend-development": "/assets/Services/web.mp4",
    "software-testing": "/assets/Services/software.mp4",
    "enterprise-software-development": "/assets/Services/software.mp4",
    "mobile-app-development": "/assets/Services/mobile-app.mp4",
    "android-ios-app-development": "/assets/Services/mobile-app.mp4",
    "it-consultation": "/assets/Services/IT.mp4",
    "ui-ux-designing": "/assets/Services/UI-UX.mp4",
    "graphic-designing": "/assets/Services/Graphic-design.mp4",
    "blockchain-development": "/assets/Services/Blockchain.mp4",
    "enterprise-mobility-solutions": "/assets/Services/Enterprise.mp4"
  };

  return imageMap[slug] || null;
};

export default function ServiceHero({
  title,
  subtitle,
  slug
}: ServiceHeroProps) {
  const backgroundVideo = getServiceImage(slug);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const handleBookConsultationClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    if (pathname === "/") {
      // If already on home page, scroll to contact form
      const contactForm = document.getElementById("contact-form");
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    } else {
      // If on another page, navigate to home with hash
      router.push("/#contact-form");
    }
  };

  return (
    <section className="relative h-[93vh] max-[768px]:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        {/* Background video */}
        {backgroundVideo && (
  <div className="absolute inset-0 overflow-hidden">
    <video
      className="w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    >
      <source src={backgroundVideo} type="video/mp4" />
    </video>
  </div>
)}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(20, 0, 0, 0.35) 30%, rgba(10, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.4) 100%)"
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(20, 20, 20, 0.2) 0%, rgba(0, 0, 0, 0.4) 60%)"
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-1/2 h-1/2"
          style={{
            background:
              "radial-gradient(ellipse at bottom right, rgba(127, 29, 29, 0.15) 0%, transparent 50%)"
          }}
        ></div>
      </div>

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span className="text-white">{title}</span>
        </h1>
        <p
          className={`text-base md:text-lg text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {subtitle}
        </p>
        <Link
          href="/#contact-form"
          onClick={handleBookConsultationClick}
          className={`inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-8 py-3 rounded-lg font-semibold text-sm md:text-base transition-all shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30 hover:scale-105 transform uppercase tracking-wide transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span>BOOK A CONSULTATION</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
