import React from 'react';

const Card = ({ color, title, subtitle, details, logo, onMouseEnter, onMouseLeave, isBlurred }) => {

    return (
        <div
            className={`flex items-center p-4 h-auto w-full max-w-2xl rounded-lg text-white cursor-pointer transition-all duration-400 hover:scale-105 ${isBlurred ? 'blur-sm' : ''}`}
            style={{ backgroundColor: color }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {/* Logo Section */}
            <div className="flex-shrink-0 mr-4">
                <img
                    src={`/src/assets/${logo}`}
                    alt={`${subtitle} logo`}
                    title={`${subtitle} logo`}
                    className="w-20 h-20 object-contain rounded"
                />
            </div>

            {/* Details Section */}
            <div className="flex-1">
                <p className="text-lg font-bold mb-1">{title}</p>
                <p className="text-base font-semibold mb-2">{subtitle}</p>
                <p className="text-sm leading-relaxed">{details}</p>
            </div>
        </div>
    );
};

export default Card;