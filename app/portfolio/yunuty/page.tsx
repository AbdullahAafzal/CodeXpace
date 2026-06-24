import Hero from "@/components/portfolio/yunuty/Hero";
import AboutSection from "@/components/portfolio/yunuty/AboutSection";
import FeaturesSection from "@/components/portfolio/yunuty/FeaturesSection";
import FeatureSection from "@/components/portfolio/yunuty/FeatureSection";
import Header from "@/components/portfolio/yunuty/Header";
import Footer from "@/components/Footer";

export default function YunutyPortfolio() {
  return (
    <main className="relative bg-[#00031C] min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <FeatureSection />
      <Footer theme="yunuty" />
    </main>
  );
}
