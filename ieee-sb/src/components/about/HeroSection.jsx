import { motion } from "framer-motion";
import banner from "../../assets/banner.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  return (
    <>
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

      {/* About IEEE Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="px-6 md:px-20 py-20"
      >
        <h2 className="text-2xl font-semibold mb-4">About IEEE</h2>
        <p className="text-gray-700 leading-relaxed">
          IEEE (Institute of Electrical and Electronics Engineers) is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity. With more than 400,000 members across over 160 countries, IEEE brings together engineers, researchers, scientists, and students to drive innovation in fields such as electrical engineering, computer science, robotics, artificial intelligence, communications, and renewable energy.
          <br />
          Through globally recognized technical standards, high-impact research publications, international conferences, and professional development initiatives, IEEE plays a critical role in shaping modern technology and enabling global interoperability.
        </p>

      </motion.section>
    </>
  );
};

export default HeroSection;
