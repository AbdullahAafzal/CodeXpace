'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function MissionVision() {
  const [missionVisible, setMissionVisible] = useState(false);
  const [visionVisible, setVisionVisible] = useState(false);
  const missionRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const missionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMissionVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const visionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisionVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (missionRef.current) {
      missionObserver.observe(missionRef.current);
    }
    if (visionRef.current) {
      visionObserver.observe(visionRef.current);
    }

    return () => {
      if (missionRef.current) {
        missionObserver.unobserve(missionRef.current);
      }
      if (visionRef.current) {
        visionObserver.unobserve(visionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Mission */}
        <div
          ref={missionRef}
          className="bg-black/60 backdrop-blur-xl border border-red-500/30 rounded-2xl p-8 md:p-12"
          style={{
            boxShadow: '0 8px 32px rgba(220, 38, 38, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
          }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div
              className={`transition-all duration-700 ${missionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
            >
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/mission.jpeg"
                  alt="Mission"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Right Side - Text */}
            <div
              className={`transition-all duration-700 delay-200 ${missionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-base md:text-lg">
                  Our mission is to deliver enterprise-grade technology solutions that empower organizations to operate with greater agility, efficiency, and strategic clarity. With deep expertise in artificial intelligence and advanced engineering, we build scalable, secure, and high-performance systems that solve complex business challenges, unlock data-driven insights, and drive sustained competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div
          ref={visionRef}
          className="bg-black/60 backdrop-blur-xl border border-red-500/30 rounded-2xl p-8 md:p-12"
          style={{
            boxShadow: '0 8px 32px rgba(220, 38, 38, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
          }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div
              className={`transition-all duration-700 ${visionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Vision
              </h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Our vision is to strengthen our position as a globally trusted technology partner, recognized for delivering innovation at scale and leading the adoption of artificial intelligence across industries. We aim to shape the future of digital transformation by combining intelligence with engineering excellence setting new benchmarks for quality, reliability, and long-term impact.
              </p>
            </div>

            {/* Right Side - Image */}
            <div
              className={`transition-all duration-700 delay-200 ${visionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
            >
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/vision-codexpace.jpeg"
                  alt="Vision"
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


