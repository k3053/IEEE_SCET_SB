import React from "react";
import banner from "../assets/banner.jpeg";
import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

const CountUp = ({ end, duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
    }
  }, [isInView, end, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      className="text-3xl font-bold text-blue-600"
    >
      {count.toLocaleString()}+
    </motion.span>
  );
};


const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const About = () => {
  return (
    <div className="container mx-auto px-6 mt-12 space-y-20">

      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center text-center text-white rounded-2xl overflow-hidden">
        <img
          src={banner}
          alt="IEEE SCET SB Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 1 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About IEEE SCET Student Branch
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Empowering Innovation. Inspiring Excellence. Building Future Engineers.
          </p>
        </motion.div>
      </section>


      {/* About IEEE Global */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-4">About IEEE</h2>
        <p className="text-gray-700 leading-relaxed">
          IEEE (Institute of Electrical and Electronics Engineers) is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity. With more than 400,000 members across over 160 countries, IEEE brings together engineers, researchers, scientists, and students to drive innovation in fields such as electrical engineering, computer science, robotics, artificial intelligence, communications, and renewable energy.
          <br />
          Through globally recognized technical standards, high-impact research publications, international conferences, and professional development initiatives, IEEE plays a critical role in shaping modern technology and enabling global interoperability.
        </p>
      </motion.section>

      {/* IEEE At A Glance */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-3 gap-6 text-center"
      >
        <div className="bg-white shadow-lg p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
          <CountUp end={400000} />
          <p className="mt-2 text-gray-600 font-medium">Members Worldwide</p>
        </div>

        <div className="bg-white shadow-lg p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
          <CountUp end={1900} />
          <p className="mt-2 text-gray-600 font-medium">Conferences Annually</p>
        </div>

        <div className="bg-white shadow-lg p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
          <CountUp end={1200} />
          <p className="mt-2 text-gray-600 font-medium">Active Standards</p>
        </div>
      </motion.section>



      {/* About IEEE SCET SB */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-4">
          About IEEE SCET Student Branch
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The IEEE SCET Student Branch serves as a dynamic platform...
        </p>
      </motion.section>


      {/* Mission & Vision */}
      <motion.section
        className="grid md:grid-cols-2 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Promote technical excellence among students.</li>
            <li>Encourage research, innovation, and problem-solving skills.</li>
            <li>Provide industry exposure and networking opportunities.</li>
            <li>Foster leadership and teamwork through IEEE initiatives.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>To become one of the leading IEEE Student Branches in the region.</li>
            <li>Empower students with global technical exposure.</li>
            <li>Drive impactful innovation for societal benefit.</li>
            <li>Create a culture of continuous learning and excellence.</li>
          </ul>
        </div>
      </motion.section>


      {/* Achievements */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Achievements & Milestones</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Successfully organized multiple technical workshops and seminars.</li>
          <li>Secured international funding support for student-driven activities.</li>
          <li>Collaborated with various IEEE societies for seasonal schools and conferences.</li>
          <li>Conducted community-driven initiatives under humanitarian technology programs.</li>
        </ul>
      </motion.section>


      {/* Why Join Us */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Why Join IEEE SCET SB?</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Access to global IEEE resources and research publications.</li>
          <li>Hands-on technical experience through events and projects.</li>
          <li>Leadership and volunteering opportunities.</li>
          <li>Professional networking with industry experts and alumni.</li>
        </ul>
      </motion.section>

    </div>
  );
};

export default About;
