import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const sectionProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  variants: fadeUp,
  transition: { duration: 0.8 },
};

const AboutIeeeScet = () => {
  return (
    <div className="space-y-20 px-6 md:px-20 py-20">

      {/* About IEEE SCET SB */}
      <motion.section {...sectionProps}>
        <h2 className="text-2xl font-semibold mb-4">
          About IEEE SCET Student Branch
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The IEEE SCET Student Branch serves as a dynamic platform...
        </p>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section {...sectionProps} className="grid md:grid-cols-2 gap-10">
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
      <motion.section {...sectionProps}>
        <h2 className="text-2xl font-semibold mb-4">
          Achievements & Milestones
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Successfully organized multiple technical workshops and seminars.</li>
          <li>Secured international funding support for student-driven activities.</li>
          <li>Collaborated with various IEEE societies for seasonal schools and conferences.</li>
          <li>Conducted community-driven initiatives under humanitarian technology programs.</li>
        </ul>
      </motion.section>

      {/* Why Join Us */}
      <motion.section {...sectionProps}>
        <h2 className="text-2xl font-semibold mb-4">
          Why Join IEEE SCET SB?
        </h2>
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

export default AboutIeeeScet;
