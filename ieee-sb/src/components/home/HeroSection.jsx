import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import banner from "../../assets/banner.jpeg";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const navigate = useNavigate();

  const y = useTransform(scrollY, [0, 600], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 600], [1.15, 1]);

  return (
    <section className="relative h-screen overflow-hidden">
      <motion.img
        src={banner}
        alt="IEEE SCET SB Banner"
        style={{ y, opacity, scale }}
        className="absolute -top-20 w-full h-[150%] object-cover"
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          IEEE SCET Student Branch
        </h1>

        <p className="text-xl md:text-2xl max-w-2xl">
          Empowering Innovation. Inspiring Excellence.
        </p>

        <div className="mt-8 flex gap-6 flex-wrap justify-center">
          <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
            Join Now
          </button>

          <button
            onClick={() => navigate("/chapters")}
            className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition duration-300"
          >
            Explore Chapters
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
