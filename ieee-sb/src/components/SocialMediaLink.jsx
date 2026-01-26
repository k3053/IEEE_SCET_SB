import React from 'react';

const SocialMediaLink = ({ name, url, iconPath, viewBox }) => {
    return (
        <li className="iso-pro cursor-pointer relative transition-all duration-500 flex flex-col items-center">
            <span className="iso-span opacity-0 absolute rounded-full transition-all duration-300 h-[60px] w-[60px] shadow-[inset_0_0_20px_rgba(255,255,255,0.3),inset_0_0_5px_rgba(255,255,255,0.5),0_5px_5px_rgba(0,0,0,0.164)] border border-[#1877f2]" />
            <span className="iso-span opacity-0 absolute rounded-full transition-all duration-300 h-[60px] w-[60px] shadow-[inset_0_0_20px_rgba(255,255,255,0.3),inset_0_0_5px_rgba(255,255,255,0.5),0_5px_5px_rgba(0,0,0,0.164)] border border-[#1877f2]" />
            <span className="iso-span opacity-0 absolute rounded-full transition-all duration-300 h-[60px] w-[60px] shadow-[inset_0_0_20px_rgba(255,255,255,0.3),inset_0_0_5px_rgba(255,255,255,0.5),0_5px_5px_rgba(0,0,0,0.164)] border border-[#1877f2]" />
            <a href={url}>
                <svg viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" className="svg-icon transition-all duration-300 p-4 h-[60px] w-[60px] rounded-full text-[rgb(0,157,162)] fill-current shadow-[inset_0_0_20px_rgba(255,255,255,0.3),inset_0_0_5px_rgba(255,255,255,0.5),0_5px_5px_rgba(0,0,0,0.164)]">
                    <path d={iconPath} />
                </svg>
            </a>
            <span className="mt-2 text-lg font-bold text-[rgb(0,157,162)]">{name}</span>
        </li>
    );
};

export default SocialMediaLink;