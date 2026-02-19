import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Globe,
  Lightbulb,
  Users,
  Award,
  Target
} from "lucide-react";


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
        <div className="space-y-28 px-6 md:px-20 py-24 max-w-7xl mx-auto">

            {/* ================= ABOUT SB ================= */}
            <motion.section {...sectionProps} className="space-y-12">

                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        About IEEE SCET Student Branch
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
                </div>

                {/* Who We Are */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-blue-700">
                        Who We Are
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-justify">
                        The IEEE SCET Student Branch is more than just a club — it is a
                        vibrant ecosystem of students and faculty dedicated to technical
                        and professional growth beyond the classroom. As the local gateway
                        to the world's largest technical professional organization, we
                        connect you to over <span className="font-semibold">500,000 members</span>
                        across <span className="font-semibold"> 160+ countries</span>.
                    </p>
                </div>

                {/* Philosophy */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-blue-700">
                        Our Philosophy
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-justify">
                        To advance technology for humanity by providing a platform where
                        education meets innovation. We believe in
                        <span className="italic font-medium"> “learning by doing”</span>,
                        fostering an environment where students can lead, experiment,
                        and build the future.
                    </p>
                </div>

                {/* Journey */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-blue-700">
                        Our Journey
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-justify">
                        Established in <span className="font-semibold">2015</span> and
                        reactivated in <span className="font-semibold">2021</span>, the
                        IEEE SCET Student Branch has consistently set benchmarks for
                        technical and professional excellence within the Gujarat Section.
                    </p>
                </div>

            </motion.section>

            {/* ================= LEGACY ================= */}
            <motion.section {...sectionProps} className="space-y-10">

                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        Our Legacy of Excellence
                    </h2>
                    <div className="w-20 h-1 bg-yellow-500 rounded-full"></div>
                </div>

                <ul className="space-y-5 text-gray-700">
                    {[
                        "2024: Best Student Branch in SAC Activity (among 50+ branches)",
                        "2022–2023: Best Student Branch Award (Gujarat Section)",
                        "2021–2022: Best Student Branch Award (Gujarat Section)",
                        "2020–2021: Most Promising Student Branch",
                    ].map((item, index) => (
                        <li key={index} className="flex gap-3 items-start">
                            <span className="text-lg">🏆</span>
                            <span className="font-medium">{item}</span>
                        </li>
                    ))}
                </ul>

            </motion.section>

            {/* ================= MISSION & VISION ================= */}
            <motion.section
                {...sectionProps}
                className="space-y-16"
            >

                {/* Section Heading */}
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Our Mission & Vision
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* ================= MISSION ================= */}
                    <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 border border-blue-100">

                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-blue-600 text-white p-3 rounded-full shadow-md">
                                <Target size={22} />
                            </div>
                            <h3 className="text-2xl font-bold text-blue-700">
                                Our Mission
                            </h3>
                        </div>

                        <ul className="space-y-4 text-gray-700">

                            <li className="flex gap-3">
                                <Lightbulb className="text-blue-600 mt-1" size={18} />
                                <span>Advancing technology for humanity through hands-on learning and real-world innovation.</span>
                            </li>

                            <li className="flex gap-3">
                                <Rocket className="text-blue-600 mt-1" size={18} />
                                <span>Creating platforms for national and international exposure via congresses, hackathons, and seasonal schools.</span>
                            </li>

                            <li className="flex gap-3">
                                <Users className="text-blue-600 mt-1" size={18} />
                                <span>Empowering students to lead through executive roles and IEEE Gujarat Section representation.</span>
                            </li>

                            <li className="flex gap-3">
                                <Award className="text-blue-600 mt-1" size={18} />
                                <span>Unlocking funding, grants, and global opportunities that transform ideas into impactful projects.</span>
                            </li>

                        </ul>
                    </div>

                    {/* ================= VISION ================= */}
                    <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 border border-indigo-100">

                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-indigo-600 text-white p-3 rounded-full shadow-md">
                                <Globe size={22} />
                            </div>
                            <h3 className="text-2xl font-bold text-indigo-700">
                                Our Vision
                            </h3>
                        </div>

                        <ul className="space-y-4 text-gray-700">

                            <li className="flex gap-3">
                                <Lightbulb className="text-indigo-600 mt-1" size={18} />
                                <span>Lead innovation across AI, Signal Processing, EV Technologies, and Humanitarian Engineering.</span>
                            </li>

                            <li className="flex gap-3">
                                <Users className="text-indigo-600 mt-1" size={18} />
                                <span>Develop globally recognized student leaders within IEEE Sections and Societies.</span>
                            </li>

                            <li className="flex gap-3">
                                <Rocket className="text-indigo-600 mt-1" size={18} />
                                <span>Host high-impact flagship events connecting students, volunteers, and industry leaders.</span>
                            </li>

                            <li className="flex gap-3">
                                <Award className="text-indigo-600 mt-1" size={18} />
                                <span>Create student success stories that inspire future generations.</span>
                            </li>

                        </ul>
                    </div>

                </div>

            </motion.section>


            {/* ================= STUDENT HALL OF FAME ================= */}
            <motion.section {...sectionProps} className="space-y-12">

                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Student Hall of Fame
                    </h2>
                    <p className="text-gray-600">
                        Real stories. Real achievements. Real impact.
                    </p>
                    <div className="w-24 h-1 bg-yellow-500 mt-4 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">

                    {[
                        {
                            name: "Khushboo Jha (Alumna, 2025)",
                            achievements: [
                                "100% travel grant for ICASSP 2025",
                                "Chair – IEEE SPS Gujarat Chapter",
                                "Best Student Volunteer – Sampark 2025",
                            ],
                        },
                        {
                            name: "Anika Mehta (Computer Engineering)",
                            achievements: [
                                "100% registration fee waiver – AISYWLC 2025",
                                "Section Student Representative – IEEE Gujarat Section",
                            ],
                        },
                        {
                            name: "Ayush Jariwala (E&C)",
                            achievements: [
                                "Fully sponsored MYOSA kit worth US $500",
                            ],
                        },
                        {
                            name: "Karan Mehta (IT - AI & DS)",
                            achievements: [
                                "1st Prize – IEEE Sampark Datathon",
                                "2nd Rank – NASA Space Apps Hackathon",
                            ],
                        },
                    ].map((student, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition duration-300"
                        >
                            <h3 className="text-xl font-semibold text-blue-700 mb-3">
                                {student.name}
                            </h3>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                {student.achievements.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>

            </motion.section>

            {/* ================= WHY JOIN ================= */}
            <motion.section {...sectionProps} className="space-y-12">

                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Why Join IEEE SCET SB?
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">

                    {[
                        {
                            title: "💰 Funding & Grants",
                            desc: "Unlock exclusive opportunities for project funding and travel grants. If our seniors can secure thousands of dollars in funding — so can you.",
                        },
                        {
                            title: "🌍 Global Networking",
                            desc: "Connect with industry leaders and peers from 160+ countries. These connections often lead to internships, research opportunities, and mentorship.",
                        },
                        {
                            title: "🏆 Profile Building",
                            desc: "Boost your resume by holding leadership positions in the Student Branch Executive Committee.",
                        },
                        {
                            title: "📚 Exclusive Resources",
                            desc: "Get an IEEE domain email (yourname@ieee.org), digital library access, and conference discounts.",
                        },
                    ].map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                        >
                            <h3 className="text-lg font-semibold text-blue-700 mb-3">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-700">{benefit.desc}</p>
                        </div>
                    ))}

                </div>

                <div className="text-center pt-6">
                    <p className="text-gray-700 mb-6">
                        Ready to start your journey? Join the community of innovators today.
                    </p>

                    <button className="border border-blue-700 text-blue-700 px-6 py-3 rounded-full hover:bg-blue-700 hover:text-white transition">
                        Contact Us on LinkedIn
                    </button>
                </div>

            </motion.section>

        </div>
    );
};

export default AboutIeeeScet;
