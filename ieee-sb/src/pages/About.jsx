import React from "react";
import banner from "../assets/banner.jpeg";
import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import HeroSection from "../components/about/HeroSection";
import StatsSection from "../components/about/StatsSection";
import AboutIeeeScet from "../components/about/AboutIeeeScet";

const About = () => {
  return (
    <div className="container mx-auto px-6 mt-12 space-y-20">
      <HeroSection />
      <StatsSection />
      <AboutIeeeScet />
    </div>
  );
};

export default About;
