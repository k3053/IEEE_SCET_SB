import React from "react";
import SocialMediaLink from "../components/SocialMediaLink";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-14 mt-10">

      {/* ===== KEEPING YOUR SVG EFFECT CSS EXACTLY SAME ===== */}
      <style>{`
        .svg {
          transition: all 0.3s;
          padding: 1rem;
          height: 60px;
          width: 60px;
          border-radius: 100%;
          color: rgb(211, 211, 211);
          fill: currentColor;
          box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3),
                      inset 0 0 5px rgba(255, 255, 255, 0.5),
                      0 5px 5px rgba(0, 0, 0, 0.164);
        }

        .text {
          opacity: 1;
          border-radius: 5px;
          font-weight: bold;
          padding: 5px;
          transition: all 0.3s;
          color: rgb(200, 200, 200);
          background-color: rgba(255, 255, 255, 0.3);
        }

        .iso-pro {
          transition: 0.5s;
          position: relative;
        }

        .iso-pro:hover a > .svg {
          transform: translate(15px, -15px);
        }

        .iso-pro:hover .svg {
          transform: translate(5px, -5px);
        }

        .iso-pro span {
          opacity: 0;
          position: absolute;
          border-radius: 50%;
          transition: all 0.3s;
          height: 60px;
          width: 60px;
          box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3),
                      inset 0 0 5px rgba(255, 255, 255, 0.5),
                      0 5px 5px rgba(0, 0, 0, 0.164);
        }

        .iso-pro:hover span:nth-child(1) { opacity: 0.2; }
        .iso-pro:hover span:nth-child(2) {
          opacity: 0.4;
          transform: translate(5px, -5px);
        }
        .iso-pro:hover span:nth-child(3) {
          opacity: 0.6;
          transform: translate(10px, -10px);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">IEEE SCET SB</h3>
            <p className="text-sm text-blue-100 leading-relaxed">
              Empowering innovation, leadership, and technical excellence
              through global IEEE initiatives and student-driven activities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/chapters" className="hover:underline">Chapters</a></li>
              <li><a href="/events" className="hover:underline">Events</a></li>
            </ul>
          </div>

          {/* Chapters */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Chapters</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/chapters/cs" className="hover:underline">Computer Society</a></li>
              <li><a href="/chapters/wie" className="hover:underline">WIE</a></li>
              <li><a href="/chapters/vts" className="hover:underline">VTS</a></li>
              <li><a href="/chapters/sps" className="hover:underline">SPS</a></li>
              <li><a href="/chapters/sight" className="hover:underline">SIGHT</a></li>
            </ul>
          </div>

          {/* Search */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Search</h3>
            <div className="flex">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-3 py-2 rounded-l-md text-black focus:outline-none"
              />
              <button className="bg-white text-blue-600 px-4 rounded-r-md font-semibold hover:bg-gray-200 transition">
                Go
              </button>
            </div>
          </div>

        </div>

        {/* ================= CONTACT SECTION ================= */}
        <div className="border-t border-blue-400 pt-12">

          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p className="text-lg mt-3">Get in touch with IEEE SCET SB</p>
            <p className="text-sm mt-2 text-blue-100">
              Follow us on our social media platforms for updates and announcements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Social Media */}
            <div className="flex justify-center lg:justify-start">
              <ul className="flex flex-wrap gap-6 justify-center">
                 <SocialMediaLink
                            name="Facebook"
                            url="https://www.facebook.com/ieee.scet.sb/"
                            iconPath="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                            viewBox="0 0 320 512"
                        />
                        <SocialMediaLink
                            name="Instagram"
                            url="https://www.instagram.com/ieee.scet.sb/"
                            iconPath="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8z"
                            viewBox="0 0 448 512"
                        />
                        <SocialMediaLink
                            name="LinkedIn"
                            url="https://www.linkedin.com/company/ieee-scet-sb/"
                            iconPath="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                            viewBox="0 0 448 512"
                        />
                        <SocialMediaLink
                            name="Email"
                            url="mailto:ieeescetsb@scet.ac.in"
                            iconPath="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-8.1 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7z"
                            viewBox="0 0 512 512"
                        />

              </ul>
            </div>

            {/* Map */}
            <div className="flex justify-center lg:justify-end">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.242062341308!2d72.80581762526087!3d21.182540930505564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e771bf220d9%3A0xbdd1676277c8bb1!2sSarvajanik%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1769513449982!5m2!1sen!2sin"
                width="100%"
                height="320"
                className="rounded-lg shadow-lg max-w-md"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

          </div>

        </div>

        {/* ================= BOTTOM ================= */}
        <div className="border-t border-blue-400 mt-12 pt-6 text-center text-sm text-blue-200">
          © {new Date().getFullYear()} IEEE SCET Student Branch. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
