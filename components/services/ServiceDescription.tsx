'use client';

import { useEffect, useRef, useState } from 'react';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServiceDescriptionProps {
  title: string;
  description: string | string[];
  descriptionTitle?: string;
  features?: FeatureItem[];
}

export default function ServiceDescription({ title, description, descriptionTitle, features }: ServiceDescriptionProps) {
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

  // Convert description to array if it's a string
  const descriptionArray = Array.isArray(description) ? description : [description];

  // Check if we have bullet points (starting with "—")
  const hasBulletPoints = descriptionArray.some(item => item.trim().startsWith('—'));
  
  // Split into intro and bullets if we have bullets
  const introText = hasBulletPoints ? descriptionArray[0] : null;
  const bulletPoints = hasBulletPoints ? descriptionArray.slice(1) : null;

  return (
    <section className="py-20 bg-black relative">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-12 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {descriptionTitle && descriptionTitle.toLowerCase().includes('why choose codexpace as') ? (
            (() => {
              const title = descriptionTitle;
              const lowerTitle = title.toLowerCase();
              // Extract the service name from "Why choose CodeXpace as a/an/your [service] company"
              const match = lowerTitle.match(/why choose codexpace as (?:a |an |your )?(.+?)(?: company|$)/i);
              if (match && match[1]) {
                const serviceNameLower = match[1].trim();
                // Find the actual service name in the original title (preserving case)
                const serviceStart = lowerTitle.indexOf(serviceNameLower);
                if (serviceStart !== -1) {
                  const before = title.substring(0, serviceStart);
                  const serviceText = title.substring(serviceStart, serviceStart + serviceNameLower.length);
                  const after = title.substring(serviceStart + serviceNameLower.length);
                  return (
                    <>
                      {before && <span className="text-white">{before}</span>}
                      <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
                        {serviceText}
                      </span>
                      {after && <span className="text-white">{after}</span>}
                    </>
                  );
                }
              }
              return <span className="text-white">{descriptionTitle}</span>;
            })()
          ) : (
            <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
              {descriptionTitle || title}
            </span>
          )}
        </h2>
        {features ? (
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Intro Paragraph */}
            {introText && (
              <p className="text-gray-300 text-base md:text-lg mb-12 leading-relaxed text-center max-w-4xl mx-auto">
                {introText}
              </p>
            )}
            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-gray-300">
                  <div className="flex items-start mb-3">
                    <div className="text-red-500 mr-3 flex-shrink-0 mt-1">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white leading-tight">{feature.title}</h3>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        ) : hasBulletPoints ? (
          <div
            className={`grid md:grid-cols-2 gap-8 md:gap-12 items-start transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Left Column - Intro Text */}
            <div className="text-gray-300 leading-relaxed">
              <p className="text-lg md:text-xl">{introText}</p>
            </div>
            {/* Right Column - Bullet Points */}
            <div className="space-y-4 text-gray-300 leading-relaxed">
              {bulletPoints?.map((bullet, index) => (
                <p key={index} className="text-sm md:text-base">
                  {bullet}
                </p>
              ))}
            </div>
          </div>
        ) : (
          <div
            className={`space-y-6 text-gray-300 leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {descriptionArray.map((paragraph, index) => (
              <p key={index} className="text-base md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

