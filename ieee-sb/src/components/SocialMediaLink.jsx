import React from 'react';

const SocialMediaLink = ({ name, url, iconPath, viewBox }) => {
    return (
        <li className="iso-pro flex items-center justify-start gap-2">
            <span className="iso-span"></span>
            <span className="iso-span"></span>
            <span className="iso-span"></span>
            <a href={url} className="flex items-center gap-2">
                <svg viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" className="svg">
                    <path d={iconPath} />
                </svg>
                <div className="text">{name}</div>
            </a>
        </li>
    );
};

export default SocialMediaLink;