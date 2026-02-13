import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import banner from "../assets/banner.jpeg";

const Home = () => {
  const { scrollY } = useScroll();

  // Smooth parallax movement (less aggressive to avoid gaps)
  const y = useTransform(scrollY, [0, 600], [0, -100]);

  // Fade out hero on scroll
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Slight zoom-out effect
  const scale = useTransform(scrollY, [0, 600], [1.15, 1]);

  return (
    <div className="relative bg-gradient-to-b from-white via-blue-50 to-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">

        {/* Parallax Background (Oversized to prevent gap) */}
        <motion.img
          src={banner}
          alt="IEEE SCET SB Banner"
          style={{ y, opacity, scale }}
          className="absolute -top-20 w-[100%] h-[150%] object-cover"
        />

        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black/50"></div> */}

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            IEEE SCET Student Branch
          </h1>

          <p className="text-xl md:text-2xl max-w-2xl">
            Empowering Innovation. Inspiring Excellence.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-6 flex-wrap justify-center">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
              Join Now
            </button>

            <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition duration-300">
              Explore Chapters
            </button>
          </div>
        </div>

      </section>

      {/* ================= WHY JOIN IEEE SECTION ================= */}
      <section className="py-24 px-6 md:px-16 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="max-w-7xl mx-auto text-center"
        >

          {/* Title */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-blue-700 mb-6"
          >
            Why You Should Join IEEE SCET SB?
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.5 }}
            className="text-gray-600 text-lg max-w-3xl mx-auto mb-16"
          >
            Become part of a global technical community that empowers innovation,
            builds leadership skills, and opens doors to industry and research opportunities.
          </motion.p>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-10">

            {/* Card Component */}
            {[
              {
                icon: "🚀",
                title: "Technical Growth",
                desc: "Participate in workshops, hackathons, coding competitions, and hands-on technical events to enhance your practical skills.",
              },
              {
                icon: "🌍",
                title: "Global Exposure",
                desc: "Connect with a worldwide IEEE network of professionals, researchers, and students across various technical domains.",
              },
              {
                icon: "🏆",
                title: "Leadership & Recognition",
                desc: "Develop leadership skills, organize events, and gain certificates and recognition that strengthen your resume.",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ type: "spring", stiffness: 80 }}
                whileHover={{ scale: 1.05 }}
                className="bg-blue-50 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:bg-blue-100 transition duration-300 cursor-pointer"
              >
                {/* ICON DROP EFFECT */}
                <motion.div
                  initial={{ y: -40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 8,
                  }}
                  className="text-4xl mb-4"
                >
                  {card.icon}
                </motion.div>

                <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                  {card.title}
                </h3>

                <p className="text-gray-600">
                  {card.desc}
                </p>
              </motion.div>
            ))}

          </div>

          {/* CTA */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <button className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 hover:scale-105 transition duration-300">
              Become a Member
            </button>
          </motion.div>

        </motion.div>
      </section>

      {/* ================= HIGHLIGHTS SECTION ================= */}
      <section className="py-24 px-6 md:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-blue-700 mb-16"
          >
            Our Highlights
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                title: "Major Technical Events",
                desc: "Organized large-scale workshops, hackathons, and seminars across multiple domains.",
                // image: highlight1,
              },
              {
                title: "Industry Collaboration",
                desc: "Collaborated with industry experts and professionals for real-world exposure.",
                // image: highlight2,
              },
              {
                title: "Innovation & Research",
                desc: "Encouraging student-driven research projects and innovative technical solutions.",
                // image: highlight3,
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white/60 backdrop-blur-md rounded-2xl border border-white/40 shadow-sm overflow-hidden"
              >

                {/* IMAGE */}
                <div className="overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-52 object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </motion.div>
            ))}


          </div>

        </motion.div>
      </section>


      {/* ================= UPCOMING EVENTS ================= */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-blue-700 mb-16"
          >
            Upcoming Events
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                title: "AI & ML Workshop",
                date: "March 2026",
                desc: "Hands-on session covering real-world AI applications.",
                // image: event1,
              },
              {
                title: "Annual Hackathon",
                date: "April 2026",
                desc: "24-hour coding challenge with exciting prizes.",
                // image: event2,
              },
              {
                title: "Industry Talk Series",
                date: "May 2026",
                desc: "Insights from top industry professionals.",
                // image: event3,
              },
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="bg-white/60 backdrop-blur-md rounded-2xl border border-white/40 shadow-sm overflow-hidden"
              >

                {/* EVENT POSTER */}
                <div className="overflow-hidden relative">
                  <motion.img
                    src={event.image}
                    alt={event.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-56 object-cover"
                  />

                  {/* Optional Date Badge */}
                  <div className="absolute top-4 left-4 bg-blue-700 text-white px-4 py-1 rounded-full text-sm">
                    {event.date}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-8 text-left">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-600">{event.desc}</p>
                </div>

              </motion.div>
            ))}


          </div>

        </div>
      </section>


      {/* ================= NEXT SECTION =================
      <section className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h2 className="text-3xl font-semibold">
          Next Section Content
        </h2>
      </section> */}

    </div>
  );
};

export default Home;
