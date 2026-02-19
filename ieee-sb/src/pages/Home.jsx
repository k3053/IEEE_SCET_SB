import React from "react";
import HeroSection from "../components/home/HeroSection";
import WhyJoinSection from "../components/home/WhyJoinSection";
import HighlightsSection from "../components/home/HighlightsSection";
import PastEventsSection from "../components/home/PastEventsSection";
import AchievementsSection from "../components/home/AchievementsSection";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-white">
      <HeroSection />
      <WhyJoinSection />
      <HighlightsSection />
      <PastEventsSection />
      <AchievementsSection />
    </div>
  );
};

export default Home;
