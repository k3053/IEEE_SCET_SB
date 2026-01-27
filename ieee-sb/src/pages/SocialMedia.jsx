import React from 'react';
import SocialMediaLink from '../components/SocialMediaLink';

const SocialMedia = () => {
  return (
    <div className="mt-10 ml-10">
      <style>{`
        .card {
          max-width: fit-content;
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          align-content: flex-start;
          justify-content: flex-start;
          gap: 1rem;
          backdrop-filter: blur(15px);
          box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.192),
            inset 0 0 5px rgba(255, 255, 255, 0.274), 0 5px 5px rgba(0, 0, 0, 0.164);
          transition: 0.5s;
        }

        .card:hover {
          animation: ease-out 5s;
          background: rgba(173, 173, 173, 0.05);
        }

        .card ul {
          padding: 1rem;
          display: flex;
          list-style: none;
          gap: 1rem;
          align-items: flex-start;
          justify-content: flex-start;
          align-content: flex-start;
          flex-wrap: wrap;
          flex-direction: column;
        }

        .card ul li {
          cursor: pointer;
        }

        .svg {
          transition: all 0.3s;
          /* if you find some problems change w - h : 30px*/
          padding: 1rem;
          height: 60px;
          width: 60px;
          border-radius: 100%;
          color: rgb(0, 157, 162);
          fill: currentColor;
          box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3),
            inset 0 0 5px rgba(255, 255, 255, 0.5), 0 5px 5px rgba(0, 0, 0, 0.164);
        }

        .text {
          opacity: 1;
          border-radius: 5px;
          font-weight: bold;
          padding: 5px;
          transition: all 0.3s;
          color: rgb(0, 157, 162);
          background-color: rgba(255, 255, 255, 0.3);
          position: relative;
          box-shadow: none;
        }

        /*isometric prooyection*/
        .iso-pro {
          transition: 0.5s;
        }
        .iso-pro:hover a > .svg {
          transform: translate(15px, -15px);
          border-radius: 100%;
        }

        .iso-pro:hover .svg {
          transform: translate(5px, -5px);
        }

        .iso-pro span {
          opacity: 0;
          position: absolute;
          color: #1877f2;
          border-color: #1877f2;
          box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3),
            inset 0 0 5px rgba(255, 255, 255, 0.5), 0 5px 5px rgba(0, 0, 0, 0.164);
          border-radius: 50%;
          transition: all 0.3s;
          height: 60px;
          width: 60px;
        }

        .iso-pro:hover span {
          opacity: 1;
        }

        .iso-pro:hover span:nth-child(1) {
          opacity: 0.2;
        }

        .iso-pro:hover span:nth-child(2) {
          opacity: 0.4;
          transform: translate(5px, -5px);
        }

        .iso-pro:hover span:nth-child(3) {
          opacity: 0.6;
          transform: translate(10px, -10px);
        }
      `}</style>

      <div className="card max-w-fit rounded-[15px] flex flex-col items-start justify-start gap-4 backdrop-blur-[15px] shadow-[inset_0_0_20px_rgba(255,255,255,0.192),inset_0_0_5px_rgba(255,255,255,0.274),0_5px_5px_rgba(0,0,0,0.164)] transition-all duration-500">
        <ul className="p-4 flex list-none gap-4 flex-col">
          <SocialMediaLink
            name="Facebook"
            url="https://www.facebook.com/ieee.scet.sb/"
            iconPath="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
            viewBox="0 0 320 512"
          />
          <SocialMediaLink
            name="Instagram"
            url="https://www.instagram.com/ieee.scet.sb/"
            iconPath="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
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
            iconPath="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-8.1 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
            viewBox="0 0 512 512"
          />
        </ul>
      </div>
    </div>
  );
};

export default SocialMedia;
