"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const services = [
  {
    // icon: "💻",
    title: "Web Development",
    slug: "web-development",
    description: "Robust architecture for seamless digital experiences.",
    cta: "Discover Our Development Approach"
  },
  {
    // icon: "📱",
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description: "Mobile-first solutions for any market.",
    cta: "Start Your Mobile App Journey"
  },
  {
    // icon: "✅",
    title: "Software Testing",
    slug: "software-testing",
    description: "QA that ensures speed, quality, and reliability.",
    cta: "Ensure Quality"
  },
  {
    // icon: "⚙️",
    title: "Custom Software Development",
    slug: "custom-software-development",
    description: "Bespoke solutions for your unique business challenges.",
    cta: "Explore Custom Solutions"
  },
  {
    // icon: "🧠",
    title: "AI & Machine Learning Development",
    slug: "ai-machine-learning-development",
    description: "Unlock business intelligence and automation.",
    cta: "See AI in Action"
  },
  {
    // icon: "☁️",
    title: "Devops and Cloud",
    slug: "devops-cloud-services",
    description: "Faster releases, stable infrastructure, lower costs.",
    cta: "Optimize with DevOps"
  },
  {
    // icon: "🏢",
    title: "SAAS Development",
    slug: "saas-development",
    description: "Scalable software-as-a-service solutions for modern businesses.",
    cta: "Explore SAAS Solutions"
  },
  {
    // icon: "🚀",
    title: "MVP Development",
    slug: "mvp-development",
    description: "Validate ideas and launch quicker, smarter.",
    cta: "Start Your MVP"
  },
  {
    // icon: "🎨",
    title: "Graphic Designing",
    slug: "graphic-designing",
    description: "Creative visual solutions that make your brand stand out.",
    cta: "See Our Designs"
  },
  {
    // icon: "✨",
    title: "UI/UX Designing",
    slug: "ui-ux-designing",
    description: "User-centered design that creates exceptional experiences.",
    cta: "Explore Design Services"
  },
  {
    // icon: "💼",
    title: "IT Consultation",
    slug: "it-consultation",
    description: "Expert guidance to transform your technology strategy.",
    cta: "Get Consultation"
  },
  {
    // icon: "📲",
    title: "Enterprise Mobility Solutions",
    slug: "enterprise-mobility-solutions",
    description: "Mobile solutions that empower your enterprise workforce.",
    cta: "Discover Mobility Solutions"
  },
  {
    // icon: "⛓️",
    title: "Blockchain",
    slug: "blockchain-development",
    description: "Secure, scalable decentralized apps and platforms.",
    cta: "Explore Blockchain"
  }
];

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => new Set([...prev, index]));
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px"
        }
      );

      observer.observe(card);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="py-20 bg-black relative">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Excellence - When it{" "}
          <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
            Comes
          </span>{" "}
          to
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el: any) => (cardRefs.current[index] = el)}
              className={`group bg-black border border-red-500/40 rounded-xl p-6 hover:border-red-500/70 transition-all duration-500 hover:-translate-y-1 ${
                visibleCards.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                transitionDelay: `${index * 0.1}s`,
                boxShadow:
                  "0 2px 8px rgba(220, 38, 38, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.03)"
              }}
            >
              <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-5 leading-relaxed text-sm">
                {service.description}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors duration-300 text-xs font-medium"
              >
                <span>{service.cta}</span>
                <svg
                  className="w-3.5 h-3.5"
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
          ))}
        </div>
      </div>
    </section>
  );
}
