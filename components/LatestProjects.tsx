"use client";

import { useState } from "react";
import Image from "next/image";
import codaImage from "../assets/projects/Coda.png";
import dramaPopImage from "../assets/projects/DramaPop.png";
import healthTapImage from "../assets/projects/HealthTap.png";
import mahbubiImage from "../assets/projects/Mahbubi.png";
import roadTrippersImage from "../assets/projects/RoadTrippers.png";
import snoonuImage from "../assets/projects/Snoonu.png";
import telegraphyImage from "../assets/projects/Telegraphy.png";
import wishImage from "../assets/projects/Wish.png";
import zedImage from "../assets/projects/Zed.png";
import zingImage from "../assets/projects/Zing.png";

const projects = [
  {
    id: "Yunuak",
    name: "Yunuak",
    description:
      "A powerful document collaboration platform that combines documents, spreadsheets, and applications into one unified workspace. We delivered a seamless user experience with real-time collaboration, advanced automation, and intuitive design that transforms how teams work together.",
    image: codaImage,
    type: "Productivity"
  },
  {
    id: "Forward-Thinking-Fitness",
    name: "Forward Thinking Fitness",
    description:
      "An immersive entertainment platform bringing the best of drama and pop culture to audiences worldwide. We built a streaming solution with personalized recommendations, social features, and seamless playback across all devices, creating an engaging viewing experience.",
    image: dramaPopImage,
    type: "Entertainment"
  },
  {
    id: "Hammers-Tounges",
    name: "Hammers & Tounges",
    description:
      "A comprehensive telemedicine platform connecting patients with healthcare providers. We developed a robust system featuring video consultations, health records management, prescription services, and AI-powered symptom checking to make healthcare accessible and convenient.",
    image: healthTapImage,
    type: "Healthcare"
  },
  {
    id: "Liberty91",
    name: "Liberty91",
    description:
      "A modern social platform designed to connect communities and foster meaningful relationships. We created an engaging user experience with real-time messaging, content sharing, and community features that bring people together in innovative ways.",
    image: mahbubiImage,
    type: "Social"
  },
  {
    id: "Spectra-Solar",
    name: "Spectra Solar",
    description:
      "The ultimate road trip planning platform that helps travelers discover amazing places along their route. We built an intuitive mapping system with route optimization, point-of-interest discovery, and trip planning tools that make every journey unforgettable.",
    image: roadTrippersImage,
    type: "Travel"
  },
  {
    id: "Luminary-Health",
    name: "Luminary Health",
    description:
      "A comprehensive delivery and logistics platform serving multiple markets. We developed a scalable solution with real-time tracking, multi-vendor support, payment integration, and efficient routing algorithms that ensure fast and reliable deliveries.",
    image: snoonuImage,
    type: "Logistics"
  },
  {
    id: "Palplug",
    name: "Palplug",
    description:
      "A modern communication platform revolutionizing how teams collaborate and share information. We created a secure messaging system with end-to-end encryption, file sharing, video calls, and team management features that keep organizations connected.",
    image: telegraphyImage,
    type: "Communication"
  },
  {
    id: "Dillon",
    name: "Dillon",
    description:
      "An innovative e-commerce platform that makes shopping fun and affordable. We built a mobile-first marketplace with personalized product discovery, social shopping features, and seamless checkout experiences that delight millions of users worldwide.",
    image: wishImage,
    type: "E-commerce"
  },
  {
    id: "Low-Coder",
    name: "Low Coder",
    description:
      "A next-generation code editor built for performance and collaboration. We developed a lightning-fast editor with real-time collaboration, AI-powered code assistance, and seamless Git integration that empowers developers to code more efficiently.",
    image: zedImage,
    type: "Developer Tools"
  }
];

const PROJECTS_PER_PAGE = 5;

export default function LatestProjects() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const startIndex = currentPage * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const visibleProjects = projects.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      // Reset selected project to first item of new page
      setSelectedProject(startIndex + PROJECTS_PER_PAGE);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      // Reset selected project to first item of previous page
      setSelectedProject(startIndex - PROJECTS_PER_PAGE);
    }
  };

  const handleProjectSelect = (projectIndex: number) => {
    setSelectedProject(projectIndex);
  };

  return (
    <section id="latest-projects" className="py-32 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-24">
          Latest{" "}
          <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 items-start">
          {/* Left Side - Project List with Pagination */}
          <div className="flex flex-col bg-black/40 backdrop-blur-sm">
            <div className="space-y-0 flex-1 pt-4">
              {visibleProjects.map((project, index) => {
                const globalIndex = startIndex + index;
                const isSelected = selectedProject === globalIndex;
                return (
                  <button
                    key={project.id}
                    onClick={() => handleProjectSelect(globalIndex)}
                    className={`w-full text-left px-4 py-4 transition-all duration-300 relative ${
                      isSelected
                        ? "bg-red-500/20"
                        : "bg-transparent hover:bg-red-500/10"
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
                    )}
                    <span
                      className={`text-sm font-medium transition-colors ${
                        isSelected
                          ? "text-white"
                          : "text-gray-400 hover:text-gray-300"
                      }`}
                    >
                      {project.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-center gap-4 py-4 bg-black/60">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                className={`p-2 rounded transition-all ${
                  currentPage === 0
                    ? "text-gray-600 cursor-not-allowed"
                    : "text-gray-400 hover:text-red-400 hover:bg-red-500/10"
                }`}
                aria-label="Previous page"
              >
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNextPage}
                disabled={currentPage >= totalPages - 1}
                className={`p-2 rounded transition-all ${
                  currentPage >= totalPages - 1
                    ? "text-gray-600 cursor-not-allowed"
                    : "text-gray-400 hover:text-red-400 hover:bg-red-500/10"
                }`}
                aria-label="Next page"
              >
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
              </button>
            </div>
          </div>

          {/* Right Side - Content with Text and Images */}
          <div className="flex flex-col bg-black/40 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              {/* Text Content - Small text and button with more width */}
              <div className="flex-[1.5] space-y-4 pt-4">
                <p className="text-sm md:text-base font-normal text-gray-300 leading-relaxed">
                  {projects[selectedProject].description}
                </p>
                <button className="w-full md:w-auto px-6 py-2.5 bg-transparent text-red-400 rounded-lg font-medium hover:bg-red-500/10 transition-all duration-300 text-sm">
                  View project
                </button>
              </div>

              {/* Images horizontally aligned with text - Made smaller */}
              <div className="flex-shrink-0 w-full lg:w-auto pt-4">
                <div className="relative group">
                  <div className="rounded-xl overflow-hidden aspect-[3/4] relative w-full lg:w-[350px]">
                    <Image
                      src={projects[selectedProject].image}
                      alt={projects[selectedProject].name}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 350px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
