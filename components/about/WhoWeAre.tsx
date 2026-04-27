'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function WhoWeAre() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <section className="py-20 pt-0 max-[768px]:py-0 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="bg-black/60 backdrop-blur-xl border border-red-500/30 rounded-2xl p-8 md:p-12"
          style={{
            boxShadow: '0 8px 32px rgba(220, 38, 38, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
          }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-base md:text-lg max-[580px]:text-[15px]">
                  CodeXpace is a globally trusted software development company focused on transforming ideas into scalable, high-impact digital solutions. We partner with organizations worldwide to build products that solve complex problems and deliver measurable business growth.
                  Our expertise spans full-stack development, mobile applications, artificial intelligence (AI), blockchain, DevOps, and quality assurance. With a strong focus on AI-driven systems, we help businesses unlock automation, data intelligence, and smarter decision-making to accelerate innovation.
                </p>
                <p className="text-base md:text-lg max-[580px]:text-[15px]">
                  Backed by a team of experienced engineers and designers, we deliver robust, scalable solutions aligned with business goals and built for long-term value.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div
              className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
            >
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team working on code"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


